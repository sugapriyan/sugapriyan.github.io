## Context

The portfolio application requires content updates, visual refinement, contact integration, and bug fixes for entrance animations and anchor scroll reveal.

## Goals / Non-Goals

**Goals:**
- Present "Sugapriyan" as the primary hero title.
- Feature real projects (TNLAATAN, TANCAM TTP Portal, Indian Overseas Bank internal modules).
- Provide a Contact section with direct email link, LinkedIn profile, and resume download.
- Contain hero entrance animation within bounds (`y: 20` to `0`, `opacity: 0` to `1`) to prevent left-side text clipping.
- Reposition floating badge `float-1` to avoid overlapping the face in `profile.png`.
- Ensure Framer Motion `whileInView` triggers reliably on anchor jumps (`amount: 0.1` or `margin: "0px"`).

**Non-Goals:**
- Changing existing dark theme, orange/teal accent colors, or core layout.
- Adding duplicate Chrome Extension project cards in Works (they remain in Achievements).

## Decisions

1. **Hero Layout & Badge Placement**:
   - `float-1` positioned top-left offset (`top: -5%`, `left: -5%`) with `background: rgba(7, 19, 19, 0.85)` and `backdrop-filter: blur(16px)` to ensure contrast and avoid covering the profile image face.
2. **Bank Internal Modules Sub-Grid**:
   - Render Bank Internal Projects card with a clean nested grid for its 6 modules (GAD Branch Lease, Gold Loan Rate, Gold Loan Score, Consent Management, Pytax, TNUHDB).
   - Display a distinct badge "Internal Banking System" for non-linked modules and "Visit" links for Pytax & TNUHDB.
3. **Contact Section Layout**:
   - Create `Contact.jsx` with glassmorphic cards for Email, LinkedIn, and Resume Download.
