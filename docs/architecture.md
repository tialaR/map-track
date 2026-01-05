# Architecture — MapTrack

This document explains **how MapTrack is structured**, how responsibilities
are distributed, and how architectural decisions are applied in practice.

> Architectural decisions themselves live in ADRs.
> This document explains **how to follow them**.

---

## Architectural Principles

- Explicit data flow
- Declarative UI
- Side effects isolation
- Domain-driven boundaries
- Predictable state management

---

## High-Level Layers

### UI Layer

- Pages
- Components
- Layouts

Responsibilities:

- Rendering
- User interaction
- No business logic

---

### Domain Layer

- Hooks
- Services
- Domain-specific utilities

Responsibilities:

- Business rules
- State derivation
- Side effects orchestration

---

### Infrastructure Layer

- API clients
- Browser APIs
- Storage (localStorage, indexedDB, etc.)

Responsibilities:

- External communication
- Persistence
- IO boundaries

---

## Data Flow

1. User interaction triggers an event
2. Event is handled by a hook
3. Hook delegates to services
4. State flows back down to components

> State flows **down**  
> Actions flow **up**

---

## Side Effects Strategy

- Side effects are isolated in hooks or services
- Components remain pure and declarative
- No side effects inside JSX

---

## Relationship with ADRs

- ADRs define **what must be done**
- Architecture defines **how it is applied**
- CI enforces **when it is allowed to merge**
