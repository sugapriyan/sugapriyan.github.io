## 1. Hero Section & Animation Fixes

- [x] 1.1 Update `src/components/Hero.jsx` with name "Sugapriyan" as `<h1>`, subheading "Senior Executive / Project Relationship Manager", concrete 15+ years description, and smooth scroll CTAs to `#works` and `#contact`
- [x] 1.2 Fix hero entrance animation to use `opacity: 0, y: 20` to prevent horizontal text clipping on page load
- [x] 1.3 Reposition `float-1` badge in `src/App.css` to avoid covering face in profile image and increase glass opacity

## 2. Contact Section & Navigation Update

- [x] 2.1 Create `src/components/Contact.jsx` under `#contact` featuring email `sugapriyan.g@gmail.com`, LinkedIn link `https://www.linkedin.com/in/sugapriyan`, and Download Resume button (`/resume.pdf`)
- [x] 2.2 Add `<Contact />` into `src/App.jsx`
- [x] 2.3 Add "Contact" link to `src/components/Navbar.jsx`
- [x] 2.4 Update `src/components/Footer.jsx` with section links, contact icons, and copyright notice

## 3. Real Projects in Works Section

- [x] 3.1 Replace placeholder projects in `src/components/Works.jsx` with real project data: TNLAATAN (`https://tnlaatan.iob.bank.in`), TANCAM TTP Portal (`https://ttp.tancam.in`), and Bank Internal Projects
- [x] 3.2 Implement nested sub-item rendering for Bank Internal Projects modules (GAD Branch Lease, Gold Loan Rate, Gold Loan Score, Consent Management, Pytax, TNUHDB) with "Internal Banking System" badges and "Visit" links

## 4. Gallery Fixes & Scroll Reveal Optimization

- [x] 4.1 Fix "Seminor" -> "Seminar" typo in `src/components/Gallery.jsx` and clean up duplicate image captions
- [x] 4.2 Update Framer Motion `viewport` props across section components to ensure reveal animations trigger immediately on anchor navigation jumps

## 5. Verification & Testing

- [x] 5.1 Run `npm run lint` and `npm run build`
- [x] 5.2 Test desktop and mobile layouts on dev server
