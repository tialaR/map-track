````markdown
# Contributing to MapTrack

This document defines **how to collaborate safely, consistently, and efficiently**.

---

## Contribution Flow:

1. Create a branch from `develop`
2. Implement the change
3. Run quality checks
4. Open a Pull Request
5. Wait for review
6. Merge and cleanup

---

## Branch Strategy:

| Branch      | Purpose               |
| ----------- | --------------------- |
| `main`      | Production-ready code |
| `develop`   | Integration branch    |
| `feature/*` | New features          |
| `fix/*`     | Bug fixes             |
| `chore/*`   | Tooling & DX          |

Direct commits to `main` or `develop` are forbidden.

---

## Before You Start:

Make sure you have:

- Node.js ≥ 20
- Yarn 1.x
- Read:
  - `README.md`
  - `docs/conventions.md`
  - `docs/clean-code.md`

---

## Local Development:

```bash
yarn
yarn dev
```
````

---

## Quality Gates (Mandatory):

Before opening a PR, run:

```bash
yarn lint
yarn type-check

```

PRs failing CI will not be reviewed.

---

## Pull Request Checklist:

All PRs must:

- [ ] Follow project conventions
- [ ] Pass ESLint
- [ ] Pass TypeScript checks
- [ ] Be small and focused
- [ ] Include screenshots if UI-related
- [ ] Avoid unrelated refactors

PRs that do not meet this checklist may be closed.

---

## Code Review Guidelines:

Reviewers will focus on:

- Readability
- Predictability
- Side effects
- Scope control

Feedback is expected and part of the process.

---

## After Merge:

- Squash & merge
- Delete branch
- Update documentation if needed

---

## Common Mistakes:

Avoid:

- Large PRs
- Mixing refactor with features
- Ignoring existing patterns

---

## Scope Contributing:

The project uses standardized **Scopes** to keep contributions focused, predictable and easy to review.

Scopes are required in:

- Pull Requests
- Issues
- Architectural Decision Records (ADRs)

They exist to:

- Clarify intent
- Reduce cognitive load during reviews
- Improve traceability of changes

**_Templates Location:_**

All templates are available in the `.github` directory:

```txt
.github/
├── pull_request_template.md
├── ISSUE_TEMPLATE/
│   ├── bug.md
│   ├── feature.md
└── adr/
    └── adr-template.md
```

---

## Final Rule

**_Consistency > Personal preference_**

If unsure:

1. Follow existing code
2. Ask before introducing new patterns
