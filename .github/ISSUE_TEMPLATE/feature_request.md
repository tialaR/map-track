---
name: Feature Request
description: Propose a new feature for MapTrack
labels: [feature]
---

# Feature Request – MapTrack

## Scope (Required)

### Objective

Describe the feature goal.

**Example:**
Allow users to export a full PDF report containing maps, markers and weather data.

### In Scope

- PDF generation on client-side
- Static layout
- Daily weather snapshot
- Marker rendering

### Out of Scope

- Backend integration
- User authentication
- PDF customization by user

---

## Dependencies

- `html2canvas`
- `jspdf`
- Map image availability

---

## Acceptance Criteria

- PDF generated with one click
- Includes all visible markers
- Matches MapTrack layout
