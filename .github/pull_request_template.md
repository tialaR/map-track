> Pull requests that do not follow this template may be rejected.

# Pull Request – MapTrack

## Scope (Required)

### Included

- What this PR implements or changes
- Affected modules (e.g. `map`, `markers`, `reports`)
- Components or hooks created or updated
- UI or UX changes aligned with the feature goal

**Example:**

- Add draggable behavior to `InspectionMarker`
- Persist marker position inside `ImageContainer`
- Update styles using `styled-components`

---

### Not Included

- Features not described in the related issue
- Global refactors
- Performance optimizations not discussed
- API contract changes

**Example:**

- No backend changes
- No redesign of Map UI
- No refactor of weather module

---

## Related Issue

Closes #XXX

---

## How to Test

1. Run `yarn dev`
2. Open `/map`
3. Add a marker
4. Drag it inside the image boundaries
5. Reload page and validate persistence

---

## Type of PR

- [ ] Small change (use Light checklist)
- [ ] Feature / Refactor (use Full checklist)

---

## Checklist (Required)

> This checklist is automatically validated by CI and pre-commit hooks.

<!-- Use only ONE checklist below -->

### Light Checklist

- [ ] Clear and focused scope
- [ ] Follows project standards
- [ ] No unexpected side effects
- [ ] UI consistent with the design system
- [ ] Clear names and readable code

### Full Checklist

- [ ] Impact on inspection flow evaluated
- [ ] Modular architecture respected
- [ ] Logic outside of JSX
- [ ] Isolated side effects
- [ ] Domain-aligned typing
- [ ] Consistent and responsive UI
- [ ] Error states handled
- [ ] Updated documentation (if necessary)

---

## Notes for Reviewers

- Edge cases to test
- Known limitations
- Temporary decisions

---

## Screenshots / GIFs

(Optional, but required for UI changes)
