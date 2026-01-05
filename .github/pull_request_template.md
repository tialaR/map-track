> Pull requests that do not follow this template may be rejected.

# Pull Request — MapTrack

---

## 📌 Scope (Required)

### ✅ What’s Included

Clearly describe **what this PR delivers**.

- Features, fixes or refactors implemented
- Affected modules (e.g. `map`, `markers`, `reports`)
- Components, hooks or services created or updated
- UI / UX changes aligned with the intended behavior

**Example:**

- Add draggable behavior to `InspectionMarker`
- Persist marker position inside `ImageContainer`
- Refactor marker state into `useMarkerPosition`

---

### 🚫 What’s Not Included

Explicitly list **what this PR does NOT cover**.

- Out-of-scope features
- Global refactors
- Performance optimizations not discussed
- API or data contract changes

**Example:**

- No backend changes
- No redesign of Map UI
- No refactor of weather module

---

## 🔗 Related Issue

Closes #XXX

---

## 🧪 How to Test

Provide **clear, deterministic steps** to validate this PR.

1. Run `yarn dev`
2. Open `/map`
3. Add a marker
4. Drag it inside image boundaries
5. Reload the page and validate persistence

---

## 🧠 Architecture & ADR Compliance (Required)

> ⚠️ These rules are **automatically validated by GitHub Actions**  
> PRs failing ADR checks **will be blocked**.

### ADR Checklist

- [ ] **ADR-001 — Code Readability & Explicit Logic**
  - No hidden conditionals or magic values
  - Clear naming with domain intent
  - Explicit control flow

- [ ] **ADR-002 — Hooks & Side Effects**
  - Hooks follow `useX` naming and semantics
  - No fake hooks
  - No conditional hooks
  - Side effects isolated in hooks (`useEffect`, services)

- [ ] **Architecture & Quality**
  - No business logic inside JSX
  - Components are declarative
  - Logic isolated in hooks, services or utils
  - No string-based flags (`"enabled"`, `"active"`, `"true"`)
  - No dead code, `console.log` or `debugger`
  - Errors and empty states handled

---

## ✅ PR READY RULE

A Pull Request is considered **PR READY** only if **all conditions below are met**:

- ADR-001 validation passes
- ADR-002 validation passes
- This checklist is fully completed
- CI (lint, type-check, build) passes

> ✅ When all checks pass, the **PR READY** status and label are applied automatically.

---

## 📝 Notes for Reviewers

(Optional but encouraged)

- Edge cases to pay attention to
- Trade-offs or temporary decisions
- Follow-ups intentionally left out of this PR

---

## 🖼 Screenshots / GIFs

Required for UI changes.  
Include before/after when relevant.
