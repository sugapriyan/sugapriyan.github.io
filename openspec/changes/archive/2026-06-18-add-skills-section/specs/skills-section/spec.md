## ADDED Requirements

### Requirement: Integrated Skill Badges in Experience Cards
The `Experience.jsx` component SHALL display relevant skill badges (pills) under each job role.
The skills SHALL be defined as:
- Project Relationship Manager: Stakeholder Management, Risk & Compliance, Client & Vendor Relations, Agile/Scrum, Banking IT.
- State Project Manager: E-Governance, Project Coordination, Budgeting & Resource Allocation, Government IT Systems, Cross-functional Leadership.
- Assistant Programmer: Software Development, SQL Databases, System Integration, Technical Documentation.

#### Scenario: Renders experience badges
- **WHEN** user loads the Experience section
- **THEN** each timeline card displays its respective skill badges

### Requirement: Integrated Technology Badges in Works Cards
The `Works.jsx` component SHALL display relevant skill and technology badges under each work item.
The skills SHALL be defined as:
- Enterprise ERP System: Systems Architecture, Database Design, React.js, SQL, Enterprise Software.
- Global Supply Chain Audit: Logistics Management, Risk Assessment, Operations Optimization, Cross-cultural Leadership.
- Digital Transformation 2.0: Cloud Migration, Legacy Modernization, Systems Integration, Strategic Consulting.

#### Scenario: Renders works badges
- **WHEN** user loads the Works section
- **THEN** each project card displays its respective technology/skill badges

### Requirement: Category Color Coding
Skill badges SHALL be color-coded by category:
- Strategic & Leadership skills MUST use the primary theme color (orange).
- Technical & Architecture skills MUST use the secondary theme color (teal).
- Core Technologies & Tools MUST use the accent theme color (yellow).

#### Scenario: Verify color coding on badges
- **WHEN** a badge is rendered in the UI
- **THEN** its text and border/background matches the category color scheme

### Requirement: Badge Hover and Entry Animations
The skill badges SHALL fade in/translate up with the parent card and animate with a scale transformation when hovered.

#### Scenario: Hovering skill badge scales it up
- **WHEN** user hovers over an individual skill badge
- **THEN** the badge scales up smoothly (`scale: 1.08`) and changes its background opacity
