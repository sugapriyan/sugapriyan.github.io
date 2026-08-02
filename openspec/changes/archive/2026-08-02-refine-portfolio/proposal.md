## Why

The portfolio site needs to accurately present Sugapriyan's background as a Senior Executive / Project Relationship Manager with 15+ years of experience in e-governance and banking IT projects. The existing portfolio contains placeholder content, missing name prominence, missing contact info, hero animation overflow, and anchor navigation scroll-reveal issues.

## What Changes

1. **Hero Prominence & Copy**:
   - Update primary hero title to "Sugapriyan".
   - Set subheading to "Senior Executive / Project Relationship Manager".
   - Replace hero description with concrete 15+ years e-governance and banking IT copy.
   - Reposition floating "Top Rated Professional" badge to avoid covering face and improve contrast.
   - Fix hero entrance animation to prevent horizontal clipping/overflow on page load.
   - Make hero buttons ("View Portfolio", "Available for Opportunities") scroll to Works (`#works`) and Contact (`#contact`).

2. **New Contact Section & Footer Update**:
   - Add new `Contact.jsx` component at `#contact` featuring email (`sugapriyan.g@gmail.com`), LinkedIn (`https://www.linkedin.com/in/sugapriyan`), and Download Resume (`/resume.pdf`).
   - Add "Contact" navigation link to Navbar.
   - Update Footer with direct links, contact icons, and copyright.

3. **Works Section Real Projects**:
   - Remove fake ERP/Supply Chain/Digital Transformation 2.0 placeholder cards.
   - Add real projects:
     - TNLAATAN (Indian Overseas Bank) - `https://tnlaatan.iob.bank.in`
     - TANCAM TTP Portal - `https://ttp.tancam.in`
     - Bank Internal Projects (Indian Overseas Bank) - GAD Branch Lease, Gold Loan Rate, Gold Loan Score, Consent Management, Pytax (`https://pytax.iob.bank.in`), and TNUHDB (`https://tnuhdb.iob.bank.in`).
   - Include "Internal Banking System" badge for non-linked internal modules.

4. **Gallery Fixes & Animation/Reveal Fixes**:
   - Fix "Seminor" -> "Seminar" typo and remove duplicate captions.
   - Ensure scroll-reveal animations trigger immediately when jumping to sections via anchor navigation.

## Capabilities

### New Capabilities
- `contact-section`: Contact section with direct email link, LinkedIn integration, and resume download.
- `portfolio-refinements`: Updated hero content, real projects showcase, fixed animations, and anchor navigation scroll reveal.

### Modified Capabilities
- None

## Impact

- `src/components/Hero.jsx`: Name prominence, copy rewrite, floating badge fix, animation fix.
- `src/components/Works.jsx`: Real projects dataset, links, internal badges.
- `src/components/Contact.jsx`: New contact section component.
- `src/components/Gallery.jsx`: Typo fix and clean image titles.
- `src/components/Navbar.jsx`: Contact nav link.
- `src/components/Footer.jsx`: Contact links, updated icons, copyright.
- `src/App.jsx`: Render Contact component.
- `src/App.css`: Styling for contact section, badge repositioning, animation containment, scroll-reveal behavior.
