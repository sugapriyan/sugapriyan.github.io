## ADDED Requirements

### Requirement: Prominent Hero Name & Subheading
The hero section SHALL display "Sugapriyan" as the primary `<h1>` heading in largest font size, followed by "Senior Executive / Project Relationship Manager" as the subheading. The "Available for Opportunities" badge SHALL be retained and click to scroll to the Contact section.

#### Scenario: Verify hero name display
- **WHEN** user loads the portfolio page
- **THEN** "Sugapriyan" is displayed as the primary hero heading

### Requirement: Real Career Hero Description
The hero description text SHALL specify concrete experience in e-governance and banking IT projects:
"15+ years delivering e-governance and banking IT projects for government and enterprise clients — from requirements to production."

#### Scenario: Verify hero description copy
- **WHEN** user views the hero section
- **THEN** the concrete 15+ years e-governance description is displayed

### Requirement: Contact Section & Footer Links
The application SHALL contain a Contact section (`#contact`) with email `sugapriyan.g@gmail.com`, LinkedIn `https://www.linkedin.com/in/sugapriyan`, and a Download Resume button linking to `/resume.pdf`. The Navbar and Footer SHALL include functioning Contact links.

#### Scenario: Navigating to Contact section
- **WHEN** user clicks the "Contact" nav link or "Available for Opportunities" badge
- **THEN** the viewport smoothly scrolls to the Contact section with verified email, LinkedIn, and resume download buttons

### Requirement: Real Projects in Works Section
The Works section SHALL replace all placeholder cards with real project data:
- TNLAATAN (Indian Overseas Bank) with link `https://tnlaatan.iob.bank.in`
- TANCAM TTP Portal with link `https://ttp.tancam.in`
- Bank Internal Projects (Indian Overseas Bank) containing sub-items (GAD Branch Lease, Gold Loan Rate, Gold Loan Score, Consent Management, Pytax, TNUHDB). Sub-items Pytax and TNUHDB SHALL have live Visit links, and non-linked sub-items SHALL display an "Internal Banking System" badge.

#### Scenario: Viewing real works projects
- **WHEN** user scrolls to the Works section
- **THEN** the real project cards and sub-items are rendered with correct links and badges

### Requirement: Non-Overlapping Floating Badge and Animation Containment
The floating badge "Top Rated Professional" SHALL be repositioned so it does not obscure the face in the profile image, and its background opacity SHALL be increased for high contrast. The hero text entrance animation SHALL use opacity and vertical offset to avoid horizontal viewport overflow.

#### Scenario: Page load without overflow
- **WHEN** the hero sectionanimates on page load
- **THEN** no text clips off the left edge of the viewport
