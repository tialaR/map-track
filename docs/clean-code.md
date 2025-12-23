# Clean Code — Complete Guide to Best Practices (JS/TS/React)

This guide exists to ensure:

> Clean code isn't about theory, perfect architecture, or extreme performance.
> It's about **people who can understand, maintain, and evolve the code**.

---

## PILLARS OF CLEAN CODE

1. **Readability**
2. **Maintainability**
3. **Predictability**
4. **Trust**

### What Clean Code is NOT

- A rigid manual
- Massive structure
- Small code
- Complex architecture
- Extreme performance

---

## PRINCIPLES FOR TEAMWORK

1. Automated testing
2. Code review
3. Constant refactoring
4. **KISS (simplicity)**
5. Short iterations

---

## BEST DEV EXPERIENCE! WHY?

Because it improves:

> More readable code
> More semantic reading
> Facilitates maintenance over time
> Reduces the need for comments
> Improve confidence in project changes
> Avoid messy code
> Learning curve
> Project standardization
> Avoid unexpected behaviors

---

# NAMING (MOST IMPORTANT RULE)

## Giving highly descriptive names to variables and functions

### ❌ Wrong

```tsx
const d = getDados();
```

### ✅ Correct

```tsx
const users = getUsersFromDatabase();
```

---

## Avoid generic names

❌ Always avoid:

```tsx
data;
response;
list;
item;
args;
params;
```

### ❌ Wrong

```tsx
const data = getUsers();
```

### ✅ Correct

```tsx
const users = getUsers();
```

---

## Descriptive variables (even if the name gets long)

### ❌ Wrong

```tsx
const total = price * 0.1;
```

### ✅ Correct

```tsx
const discountPercentage = 0.1;
const totalDiscount = price * discountPercentage;
```

---

## Booleans must be read as a questions

### Rules

- Start with `is`, `has`, `does`, `should`
- Avoid start with `loading`, `disabled`, `data`, `fetching`, `list`, ...
- Must make sense when read with `if`
- Read with `if` it improves at the beginning semantic reading (following the rules of grammar)

### ❌ Wrong

```tsx
const loading = true;
const disabled = true;
```

### ✅ Correct

```tsx
const isUserProfileLoading = true;
const isDisabled = true;
```

```tsx
if (isUserProfileLoadin) { ... }
if (isDisabled) { ... }
```

---

## Cause ❌ Effect

### ❌ Wrong (effect)

- Always name variables based on the reason or cause they will affect the code or interface
- Never name variables based on the consequence or effect they will affect the code or interface

```tsx
function Button() {
  const isButtonDisabled = true;

  return (
    <button disabled={isButtonDisabled}>
      <span>Some text here</span>
      {isButtonDisabled ? "Loading" : "Send"}
    </button>
  );
}
```

### ✅ Correct (cause)

```tsx
function Button() {
  const isFormSubmitting = true;

  return (
    <button disabled={isFormSubmitting}>
      <span>Some text here</span>
      {isFormSubmitting ? "Loading" : "Send"}
    </button>
  );
}
```

---

## Code ALWAYS in English

- Facilitates collaboration
- Improves accessibility
- Pattern adopted by the community

### ❌ Wrong

```tsx
const usuariosAtivos = true;
```

### ✅ Correct

```tsx
const hasActiveUsers = true;
```

---

# FUNCTIONS

## Names of the functions should clearly state what they do and describe side effects

- The function must do exactly what its name suggests it should do
- Not choose vague names or names that camouflage potential actions of the funtions
- Function names should describe everything the function does, including its side effects

### ❌ Wrong

```tsx
// component
function UserProfile({ user }) {
  function handleUser() {
    // validate
    if (!user || !user.name) return;

    // transform data
    const upperName = user.name.toUpperCase();

    // side effect
    localStorage.setItem("userName", upperName);

    // render
    return <h1>{upperName}</h1>;
  }

  return <div>{handleUser()}</div>;
}
```

### ✅ Correct

```tsx
import { useEffect, useMemo } from "react";

// validation
function hasValidUserName(user) {
  return Boolean(user?.name);
}

// transformation
function formatUserNameToUpperCase(name) {
  return name.toUpperCase();
}

// side effect
function saveUserNameToLocalStorage(name) {
  localStorage.setItem("formattedUserName", name);
}

// pure derivation (no effects)
function getFormattedUserNameIfValid(user) {
  if (hasValidUserName(user)) {
    return formatUserNameToUpperCase(user.name);
  }
  return null;
}

// presentation
function RenderUserName({ name }) {
  if (name) {
    return <h1>{name}</h1>;
  }
  return null;
}

// component (orchestrator)
export function UserProfile({ user }) {
  // Pure computation
  const formattedUserName = useMemo(
    () => getFormattedUserNameIfValid(user),
    [user],
  );

  // explicit side effect
  useEffect(() => {
    if (formattedUserName) {
      saveUserNameToLocalStorage(formattedUserName);
    }
  }, [formattedUserName]);

  // render
  return (
    <div>
      <RenderUserName name={formattedUserName} />
    </div>
  );
}
```

---

## Avoid selector parameters

- The developer reading the function call doesn't know what will actually happen
- It is preferable to divide the function into several smaller ones (better refactor)
- A single parameter cannot determine side effects

Practical rule to follow:

- Boolean as selector = smell
- String mode = smell
- If (flag) inside the function = suspect

### ❌ Wrong

```tsx
function UserProfile({ user }) {
  function handleUserName(user, shouldFormat) {
    if (!user?.name) return null;

    if (shouldFormat) {
      return user.name.toUpperCase();
    }

    return user.name;
  }

  const userName = handleUserName(user, true);

  return <h1>{userName}</h1>;
}
```

Problems here:

1. false means nothing
2. Function changes behavior
3. Hidden side effect
4. Function name: lie

### ✅ Correct

```tsx
import { useEffect, useMemo } from "react";

// validation
function hasValidUserName(user) {
  return Boolean(user?.name);
}

// transformation
function formatUserNameToUpperCase(name) {
  return name.toUpperCase();
}

// side effect
function saveUserNameToLocalStorage(name) {
  localStorage.setItem("formattedUserName", name);
}

// pure derivation (no effects)
function getFormattedUserNameIfValid(user) {
  if (hasValidUserName(user)) {
    return formatUserNameToUpperCase(user.name);
  }
  return null;
}

// presentation
function RenderUserName({ name }) {
  if (name) {
    return <h1>{name}</h1>;
  }
  return null;
}

// component (orchestrator)
export function UserProfile({ user }) {
  // pure computation
  const formattedUserName = useMemo(
    () => getFormattedUserNameIfValid(user),
    [user],
  );

  // explicit side effect
  useEffect(() => {
    if (formattedUserName) {
      saveUserNameToLocalStorage(formattedUserName);
    }
  }, [formattedUserName]);

  // render
  return (
    <div>
      <RenderUserName name={formattedUserName} />
    </div>
  );
}
```

Why this is correct:

1. React decides the flow, not parameters
2. Rendering is pure
3. Effects are explicit
4. Each function does exactly what its name says
5. No function receives flags, modes, or boolean selectors

---

## Avoid flag string as a selector parameters

Rule for string flags:

- Example bad string flag (selector):
  mode="save"
  type="render"
  action="format"
- Example good string flag (state / variant):
  variant="primary"
  status="active"
  size="large"
  theme="dark"

### ❌ Incorrect

```tsx
// Example 1:
function UserProfile({ user }) {
  function handleUser(user, mode) {
    if (!user?.name) return null;

    if (mode === "format") {
      return user.name.toUpperCase();
    }

    if (mode === "save") {
      localStorage.setItem("userName", user.name);
    }

    if (mode === "render") {
      return <h1>{user.name}</h1>;
    }
  }

  return <div>{handleUser(user, "render")}</div>;
}
```

```tsx
// Example 2:
function getUserName(user, type) {
  if (!user?.name) return null;

  if (type === "upper") return user.name.toUpperCase();
  if (type === "lower") return user.name.toLowerCase();

  return user.name;
}
```

Problems here:

1. A function does incompatible things
2. Mode param controls the application
3. UI + side effect + domain mixed
4. Function name doesn't describe what happens
5. Function changes behavior
6. Hidden side effect
7. Difficult to scale the application

### ✅ Correct

```tsx
// Example 1:
function RenderUserName({ name, variant }) {
  if (!name) return null;

  const styles = {
    primary: { fontSize: "24px", fontWeight: "bold" },
    secondary: { fontSize: "16px", fontWeight: "normal" },
  };

  return <h1 style={styles[variant]}>{name}</h1>;
}

function UserProfile({ user }) {
  const userName = user?.name ?? null;

  return <RenderUserName name={userName} variant="primary" />;
}
```

```tsx
// Example 2 (state coming from API):
function StatusBadge({ status }) {
  if (status) {
    if (status === "active") {
      return <span className="active">Active</span>;
    }

    if (status === "inactive") {
      return <span className="inactive">Inactive</span>;
    }

    return <span>{status}</span>;
  }

  return null;
}
```

Why this is correct:

1. Variant describes appearance, not action
2. Doesn't change rules
3. Doesn't cause side effects
4. Status comes from the domain
5. Doesn't choose application behavior
6. Only reflects state

---

# DRY — Avoid duplication

### ❌ Incorrect

```tsx
if (user.age >= 18) allow();

if (admin.age >= 18) allow();
```

### ✅ Correct

```tsx
function isAdult(person) {
  return person.age >= 18;
}
```

---

# Dead code should be removed

### ❌ Wrong

```tsx
// function oldLogic() {}
```

### ✅ Correct

```tsx
// removed
```

> Commented code is historical garbage

---

# Vertical separation (vertical scope)

### ❌ Wrong

```tsx
function helper() {}

function main() {
  helper();
}
```

### ✅ Correct

```tsx
function main() {
  helper();
}

function helper() {}
```

> File should be read from top to bottom
> More semantic reading

---

# Avoid inconsistency

### ❌ Wrong

```tsx
getUser();
fetchProducts();
loadOrders();
```

### ✅ Correct

```tsx
getUser();
getProducts();
getOrders();
```

> Facilitates maintenance
> More semantic reading
> There should be a pattern
> Avoid inconsistency

---

# Avoid obscure purposes

### ❌ Wrong

```tsx
function process() {}
```

### ✅ Correct

```tsx
function calculateInvoiceTotal() {}
```

> Facilitates maintenance
> More semantic reading
> Avoid black box
> The code should be as expressive as possible

---

# CONDITIONALS

## Avoid negations

### ❌ Wrong

```tsx
if (!isUserAuthenticated) return;
```

### ✅ Correct

```tsx
if (isUserAuthenticated === false) return;
```

> Facilitates maintenance
> More semantic reading
> Write conditionals without negation
> Give preference to writing auxiliary variables

---

## Early return > else

### ❌ Wrong

```tsx
if (isValid) {
  save();
} else {
  showError();
}
```

### ✅ Right

```tsx
if (isValid) {
  save();
  return;

  showError();
}
```

> Facilitates maintenance
> More semantic reading

---

## Avoid nested conditionals

### ❌ Wrong

```tsx
if (user) {
  if (user.isAdmin) {
    if (user.isActive) {
      //Some code...
    }
  }
}
```

### ✅ Correct

```tsx
if (user || user.isAdmin || user.isActive) {
  // Some code...
}
```

> Facilitates maintenance
> More semantic reading
> Avoid ternary equations with more than one condition

---

# MAGIC NUMBERS

### ❌ Wrong

```tsx
setTimeout(fetchData, 3000);
```

### ✅ Correct

```tsx
const THREE_SECONDS_IN_MS = 3000;
setTimeout(fetchData, THREE_SECONDS_IN_MS);
```

> Facilitates maintenance
> More semantic reading
> Always specify **format and unit**

---

# PARAMETERS & DESTRUCTURING

### ❌ Wrong

```tsx
function createUser(name, email, age) {}
```

### ✅ Correct

```tsx
function createUser({ name, email, age }: CreateUserParams) {}
```

> Avoids refactoring
> Scalable
> More readable

---

# COMMENTS vs DOCUMENTATION

## Comments should NOT explain what, but why

## Should only be used in extreme cases

### ❌ Wrong

```tsx
// sums two numbers
function sum(a, b) {
  return a + b;
}
```

### ✅ Certo (por quê)

```tsx
// workaround para bug da lib XYZ
```

---

# Avoid shady Syntactic Sugar

### ❌ Wrong

```tsx
const isValid = !!value;
const total = +price;
```

### ✅ Right

```tsx
const isValid = Boolean(value);
const total = Number(price);
```

> Facilitates maintenance
> More semantic reading

---

# CLEAN CODE IN REACT

## Decouple components

### ❌ Wrong

```tsx
function Page() {
  const data = useFetch();
  return <Header data={data} />;
}
```

### ✅ Right

```tsx
function Page() {
  const data = useFetch();
  return <Header onLogout={handleLogout} />;
}
```

---

## Pure Components

### ❌ Wrong

```tsx
function Header() {
  const user = useContext(AuthContext);
}
```

### ✅ Correct

```tsx
function Header({ onLogout }) {
  return <button onClick={onLogout}>Logout</button>;
}
```

> Can be moved anywhere
> Does not depend on context

---

## Functions and Events — on / handle

### ❌ Wrong

```tsx
function submit() {}
```

### ✅ Correct

```tsx
function handleSubmit() {}
```

```tsx
<Button onSubmit={onSubmitForm} />
```

---

## Composition > Configuration

### ❌ Configuration

```tsx
<Input hasIcon hasError />
```

### ✅ Composition

```tsx
<Input>
  <Input.Icon />

  <Input.Field />
  <Input.Error />
</Input>
```

> Scalable
> More readable
> More flexible
> More customizable

---

## Conditionals outside of JSX

### ❌ Wrong

```tsx
{
  user && user.isAdmin && <Admin />;
}
```

### ✅ Correct

```tsx
const shouldShowAdmin = user?.isAdmin;

return shouldShowAdmin && <Admin />;
```

> Scalable
> More readable
> More flexible
> Clean HTML that is less dependent on direct operations

---

# FINAL RULE

> If the code needs explaining, it's not clean enough.

Clean Code is a **habit**, not a technique.
