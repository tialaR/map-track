````markdown
## Enforcement

These conventions are enforced through:

- ESLint rules
- Prettier
- GitHub Actions
- Pull Request checklist

Code that does not follow these conventions will not be merged.

---

# Code Conventions:

This document defines the **coding conventions** adopted in the MapTrack project.

The goal is to ensure **consistency, predictability and clarity** across the codebase.

If a pattern already exists, **follow it**.

---

## Initial folder Structure:

The project follows a **module oriented structure**.

```txt
src/
  components/
    commons/
      Button/
      Modal/
    maps/
      SubMap/
    sidebar/
      SideBar/
  modules/
    auth/
      hooks/
      services/
      components/
        ProtectedRoute.tsx
    map/
      hooks/
      services/
      components/
  pages/
    Home/
    Login/
  routes/
    AppRoutes.tsx
  libs/
    api.ts
```

```txt
src/
├─ assets/           # Static assets (images, icons, fonts)
├─ components/
│  ├─ commons/       # Reusable UI components (Button, Modal, Loader, etc.)
│  ├─ map/           # Map-related components
│  ├─ inspections/   # Inspection domain components
│  ├─ markers/       # Marker and annotation components
│  ├─ weather/       # Weather UI and visualization
│  └─ reports/       # Report and PDF-related components
├─ hooks/            # Custom React hooks
├─ layouts/          # Application layouts (Shells, Wrappers)
├─ pages/            # Route-level pages
├─ routes/           # React Router configuration
├─ services/         # API clients and data access
├─ styles/           # Global styles, themes, tokens
├─ utils/            # Pure utility functions
└─ main.tsx          # Application entry point
```

- Each domain owns its components
- Cross-domain imports are discouraged

---

## File Naming:

| Type            | Convention        | Example                 |
| --------------- | ----------------- | ----------------------- |
| React Component | `PascalCase.tsx`  | `WeatherCard.tsx`       |
| Hook            | `useSomething.ts` | `useWeather.ts`         |
| Utility         | `camelCase.ts`    | `formatDate.ts`         |
| Styles          | `styles.ts`       | `WeatherCard.styles.ts` |
| Types           | `types.ts`        | `Weather.types.ts`      |

---

## React Components:

- One component per file
- Prefer **named exports**
- Props must be explicitly typed

```tsx
interface ButtonProps {}

export function Button(props: ButtonProps) {
  return <button />;
}
```

---

## Hooks:

- Must start with `use`
- Must be pure and predictable
- Must not access UI components
- One responsibility per hook

```tsx
export function usePersistentMarkers() {}
```

---

## Absolute Imports (Alias):

The project uses path aliases to avoid relative imports.

Alias:

```js
@/ → src/
```

```tsx
import { Button } from "@/components/commons/Button";
import { useWeather } from "@/hooks/useWeather";
```

---

## Event Handlers & Callbacks:

| Context       | Naming                        |
| ------------- | ----------------------------- |
| Event handler | `handleClick`, `handleSubmit` |
| Prop callback | `onSubmit`, `onClose`         |

❌

```tsx
function submit() {}
```

✅

```tsx
function handleSubmit() {}
```

---

## State Naming:

State must describe **what it represents**, never `data`.

❌

```tsx
const [data, setData] = useState();
```

✅

```tsx
const [weatherForecast, setWeatherForecast] = useState();
```

---

## Constants:

- Uppercase
- Include unit when relevant

```tsx
const THREE_SECONDS_IN_MS = 3000;
```

---

## Styling:

### styled-components Setup

The project uses `styled-components` as its styling solution.

### Theme Typing:

The project uses TypeScript-safe theming with styled-components.

The following VS Code extension is recommended:

- **Styled Components VS Code Extension**

This enables:

- Syntax highlighting
- Autocomplete
- Better DX inside styled templates

Formatting and consistency are handled automatically:

- Prettier handles formatting
- ESLint enforces consistency
- No additional Prettier plugins are required

```ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;
```

---

## ESLint & Prettier

**_Linting & Formatting_**

### ESLint

- Uses Flat Config (v9+)
- TypeScript-first rules
- React JSX runtime enabled (no need to import React)
- Import order aligned with Prettier

### Prettier

- Single source of formatting truth
- Integrated via ESLint rule: `prettier/prettier`

---

## Editor Configuration

VS Code is configured to:

- Format on save
- Fix ESLint issues automatically

Required extensions:

- ESLint
- Prettier

---

## Forbidden Patterns:

The following are not allowed:

- leaving `console.log` or `alert`
- unnecessary commented code
- unused variables
- magic numbers
- deeply nested conditionals

ESLint enforces most of these rules.

---

## Tests (When Present)

- File naming: `.spec.ts`
- Focus on behavior, not implementation details

---

## Commit Convention:

We follow **Conventional Commits** strictly.

Format:

```js
<type>(scope): <description>
```

Examples:

- `feat(map): add marker clustering`
- `fix(weather): correct hourly forecast calculation`
- `chore(eslint): migrate to flat config`
- `refactor(components): simplify Button API`

---

## Available Scripts:

This project provides several scripts to support development, validation and CI.

```json
{
  // Starts the Vite development server with hot module replacement (HMR)
  // Used during local development
  "dev": "vite",

  // Runs a TypeScript project build (tsc -b) and then generates a production build with Vite
  // Ensures type safety before bundling
  "build": "tsc -b && vite build",

  // Serves the production build locally for preview and validation
  // Useful to test the final output before deploying
  "preview": "vite preview",

  // Runs TypeScript type checking without emitting any files
  // Used to validate types only (no build artifacts)
  "type-check": "tsc --noEmit",

  // Runs ESLint against all source files inside src/
  // Reports linting issues without fixing them
  "lint": "eslint src",

  // Runs ESLint and automatically fixes all fixable issues
  // Commonly used before commits
  "lint:fix": "eslint src --fix",

  // Runs ESLint without using cache
  // Useful when rules or configs were recently changed
  "lint:reset": "eslint src --no-cache",

  // Checks formatting using Prettier without modifying files
  // Fails if formatting does not match project rules
  "format": "prettier --check \"src/**/*.{ts,tsx,js,jsx,json,css,md}\"",

  // Formats all supported files using Prettier
  // Applies formatting changes to disk
  "format:write": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,md}\"",

  // Runs both ESLint and TypeScript type checking
  // Intended as a fast local quality gate
  "check": "yarn lint && yarn type-check",

  // Runs full quality checks: linting, type checking, and production build
  // Ideal for CI pipelines or pre-release validation
  "check-all": "yarn lint && yarn type-check && yarn build",

  // Starts a local mock API server using json-server
  // Serves db.json on http://localhost:4000
  "mock:server": "json-server --watch db.json --port 4000",

  // Automatically installs Git hooks managed by Husky
  // Executed after dependencies installation
  "prepare": "husky"
}
```

---

## Final Rule:

Consistency beats personal preference.

If you're unsure:

1. Look for a similar pattern
2. Follow existing code
3. Ask before introducing a new convention
````
