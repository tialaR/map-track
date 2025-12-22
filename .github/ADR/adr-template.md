# ADR-XXX: Decision Title

## Date

`YYYY-MM-DD`

## Scope (Required)

### Context

MapTrack requires client-side PDF generation without backend support.

### Scope

- React + Vite frontend
- Static PDF layout
- Data fetched from APIs
- Map screenshots and markers

### Out of Scope

- Server-side rendering
- Editable PDFs
- User templates

### Validity

This decision applies starting from MapTrack MVP.

---

## Decision

We will generate PDFs entirely on the client using `html2canvas` and `jspdf`.

---

## Alternatives Considered

- Server-side PDF generation (rejected: no backend)
- External PDF service (rejected: cost and latency)

---

## Consequences

### Positive

- No backend required
- Fast iteration
- Easy deployment

### Negative

- Limited layout flexibility
- Large PDFs may affect performance
