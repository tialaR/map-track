---
name: Bug Report
description: Report a bug in MapTrack
labels: [bug]
---

# Bug Report – MapTrack

## Scope (Required)

### Objective

Describe the bug clearly and objectively.

**Example:**
Markers move outside the map image when zoom is enabled.

### In Scope

- Pages affected (e.g. `/map`, `/reports`)
- Components involved (`ImageAnnotator`, `SnapshotBubble`)
- Expected behavior

### Out of Scope

- New features
- UI redesign
- Performance improvements

---

## Steps to Reproduce

1. Open `/map`
2. Enable zoom
3. Drag a marker
4. Marker exceeds image boundary

---

## Expected Behavior

Marker movement should be restricted to image bounds.

---

## Actual Behavior

Marker can move outside visible map.

---

## Environment

- OS:
- Browser:
- Device:
