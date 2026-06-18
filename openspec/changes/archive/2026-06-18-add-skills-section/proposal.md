## Why

To make the portfolio page more attractive to employers and recruiters, we need to showcase the candidate's skills. Rather than creating a separate Skills section which could bloat the single-page layout, integrating relevant skills directly into the Experience and Works cards provides immediate context to recruiters about what competencies were used in each role and project.

## What Changes

- Remove the separate Skills section component and references (from App.jsx and Navbar.jsx).
- Modify the `Experience.jsx` component to include inline skill badges for each position (Strategic Leadership, Government Systems, Software Development).
- Modify the `Works.jsx` component to include inline skill and technology badges for each project (ERP, Supply Chain Audit, Digital Transformation).
- Style the badges as color-coded, glassmorphic capsules (orange for Strategic/Leadership, teal for Technical, yellow for Tools) with hover micro-animations and entry reveal effects.
- Clean up any unused styling from the previous separate Skills section in `src/App.css`.

## Capabilities

### New Capabilities
- `skills-section`: Integrated skill badges within the Experience and Works sections, styled as categorized, animated capsules.

### Modified Capabilities
- None

## Impact

- `src/components/Experience.jsx`: Update rendering data and layout to display categorized skill badges.
- `src/components/Works.jsx`: Update rendering data and layout to display categorized skill/technology badges.
- `src/App.css`: Add styles for integrated badges, category color-coding, hover scales, and clean up previous separate section styles.
- `src/App.jsx`: Clean up separate Skills component import and render call.
- `src/components/Navbar.jsx`: Clean up separate Skills link in navigation.
