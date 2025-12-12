
# 🗺️ MapTrack — Automated Daily Inspection & PDF Reporting Platform

🌍 About MapTrack

MapTrack was created to automate and modernize inspection reporting for construction professionals.

Instead of manually collecting images, marking areas, writing notes, and assembling reports, MapTrack centralizes everything and produces a unified PDF report, ready to be shared with stakeholders, teams, or clients.

**MapTrack** is a modern React + TypeScript + Vite application designed to help construction professionals streamline daily inspection workflows.

The platform allows users to:
- Mark areas of operation on maps or project images  
- Attach inspection photos  
- View daily tabulation based on location  
- Generate structured PDF reports automatically  

MapTrack eliminates repetitive manual work and centralizes daily construction inspection tasks into one efficient system.

---

## 🚀 Tech Stack

This project includes a robust, scalable setup with:

- **React 18 + TypeScript**
- **Vite** for ultra-fast bundling
- **ESLint (Flat Config) + Prettier** for code quality
- **Husky + lint-staged** for pre-commit automation
- **Commitlint** enforcing Conventional Commits
- **Branch naming validation** to keep the workflow organized

---

## 📦 Scripts

| Command           | Description                                   |
|-------------------|-----------------------------------------------|
| `npm run dev`     | Start the development server                   |
| `npm run lint`    | Run ESLint on the entire project               |
| `npm run format`  | Format all files using Prettier                |
| `npm run build`   | Build the project for production               |
| `npm run preview` | Preview the built application locally          |

---

## 🧭 Features of MapTrack

### ✔ Area Marking  
Professionals can draw or annotate areas directly on images or maps to define zones of work or inspection.

### ✔ Inspection Image Management  
Upload, edit, and organize photos taken during field inspections.

### ✔ Daily Tabulation by Location  
View a clear breakdown of all records, actions, and images for the current day based on the user's or project's location.

### ✔ Automated PDF Generation  
MapTrack compiles:
- Marked images  
- Data collected in the day  
- Inspection metadata  
- Notes and photos  

Into a structured PDF report ready for delivery or archiving.

---

## 🎯 Project Structure & Aliases

The project uses a scalable architecture with TypeScript path aliases:

@components/*
@utils/*
@hooks/*
@services/*
@pages/*
@routes/*
@providers/*
@styles/*
@assets/*
@layouts/*
@stories/*


All configured in `tsconfig.json`.

---

## 📌 Commit Standards — Conventional Commits

MapTrack enforces [Conventional Commits](https://www.conventionalcommits.org) for clean and readable commit history.

Examples:

feat: add inspection image annotator
fix: correct PDF generation layout
docs: update API usage instructions
refactor: reorganize map drawing utilities

Commits not following the convention will be rejected automatically.

---

## 🌿 Branch Naming Rules

To maintain consistency, branch names must follow:

### ✔ Allowed Patterns

feat/<description>
fix/<description>
refactor/<description>
docs/<description>
chore/<description>
test/<description>
hotfix/<description>

Examples:

feat/add-daily-tabulation
fix/pdf-generation-encoding

### ✔ Allowed without validation

main
develop
release/*

Invalid branch names will block `git push`.

---

## 🛠 Husky Workflow Automation

### 🔹 **pre-commit**
Executes:
- ESLint (`--fix`)
- Prettier (`--write`)

Only staged files are processed (via lint-staged).

### 🔹 **commit-msg**
Validates commit messages using Commitlint.

### 🔹 **pre-push**
Validates that the branch name follows project standards.

This ensures every change merged into the codebase is clean and consistent.

---

## ✨ lint-staged Configuration

On each commit, only staged files matching:

src/**/*.{ts,tsx,js,jsx}

Will be:

- Linted with ESLint  
- Formatted with Prettier  

---

## 🏁 Installation

```bash
npm install

🚀 Running MapTrack
npm run dev

App available at:

http://localhost:5173

📄 Production Build
npm run build


Preview the output:

npm run preview

🤝 Contributing Guidelines

To contribute to MapTrack:

Follow Conventional Commits

Use the branch naming rules

Run npm run lint and npm run format before submitting a PR

Ensure no Husky hook fails