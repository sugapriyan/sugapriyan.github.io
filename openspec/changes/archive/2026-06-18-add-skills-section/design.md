## Context

Instead of a separate section, skills will be displayed as interactive badges inside each item in the **Experience** and **Works** sections. This keeps the single-page layout compact while connecting competencies directly to professional milestones.

## Goals / Non-Goals

**Goals:**
- Modify `Experience.jsx` and `Works.jsx` data structures to hold structured skill metadata (name and category).
- Style badges using HSL variables from `index.css` for visual consistency.
- Support responsive layout: badges wrap automatically (`flex-wrap: wrap`) on smaller viewports.
- Animate badges on card hover/entry using simple CSS transitions and Framer Motion layout variants.
- Color-code badges based on three categories: Leadership (orange), Technical (teal), and Tools (yellow).

**Non-Goals:**
- Creating a new page or new top-level components.
- Modifying the navigation menu (Navbar link to skills is no longer required).

## Decisions

### Decision 1: Metadata Structure in Components
- **Approach**: For each item in `experiences` and `works` arrays, we will add a `skills` array. Each skill will have a `name` and a `type` (e.g. `leadership`, `technical`, `tools`).
- **Rationale**: This lets us render badges dynamically and assign the correct CSS classes based on the category `type`.

### Decision 2: Color Classes and Styling
- **CSS classes**:
  - `.skill-badge`: base styling (glassmorphic border, padding, text-transform, transition, border-radius).
  - `.skill-badge.leadership`: orange primary accents (`var(--primary)`).
  - `.skill-badge.technical`: teal secondary accents (`var(--secondary)`).
  - `.skill-badge.tools`: yellow accent accents (`var(--accent)`).
- **Backgrounds**: Use `color-mix(in srgb, var(--accent/primary/secondary) 10%, transparent)` to create readable glassmorphic pill background.

## Risks / Trade-offs

- **Risk**: Badges wrapping excessively and making card heights uneven.
- **Mitigation**: Limit skill count per item to 4-5 core competencies and ensure cards flex dynamically.
