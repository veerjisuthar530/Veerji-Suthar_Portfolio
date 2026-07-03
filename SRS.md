# Software Requirements Specification (SRS)
## Veerji Suthar Portfolio Website

**Document Version:** 1.0  
**Last Updated:** May 6, 2026  
**Project Name:** Veerji-Suthar-Portfolio  
**Status:** Active Development

---

## 1. Introduction

### 1.1 Purpose
This SRS document specifies the complete requirements for the development of a professional portfolio website for Veerji Suthar. The portfolio showcases technical skills, projects, services, and professional expertise to potential clients and employers.

### 1.2 Scope
The portfolio website is a single-page application (SPA) built with React and Vite, featuring responsive design, smooth navigation, and interactive components. It includes sections for hero introduction, about me, services, skills, projects, and contact information.

### 1.3 Document Conventions
- **MUST**: Mandatory requirement
- **SHOULD**: Highly recommended requirement
- **MAY**: Optional requirement
- **FR**: Functional Requirement
- **NFR**: Non-Functional Requirement

### 1.4 Intended Audience
- Development Team
- Project Stakeholders
- Client (Veerji Suthar)
- End Users (Clients, Employers, Visitors)

---

## 2. Overall Description

### 2.1 Product Perspective
The portfolio is a web application that serves as a professional showcase. It is designed to be accessed through modern web browsers and is optimized for both desktop and mobile devices.

### 2.2 Product Features Overview
- **Responsive Navigation Bar** with mobile menu
- **Hero Section** with professional introduction
- **About Me Section** with personal background and professional summary
- **Services Showcase** displaying offered services
- **Skills Display** with proficiency levels
- **Projects Gallery** showcasing completed work
- **Contact Section** with contact details and messaging capabilities
- **Footer** with links and branding

### 2.3 User Classes and Characteristics

| User Class | Description | Frequency |
|-----------|-------------|-----------|
| Potential Employers | Looking to evaluate qualifications | Occasional |
| Clients | Seeking web design/development services | Frequent |
| General Visitors | Browsing portfolio samples | Occasional |
| Portfolio Owner | Managing and updating content | Regular |

### 2.4 Operating Environment
- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite (Rolldown)
- **Styling:** Tailwind CSS 4.1.17
- **Icons:** Heroicons, React Icons
- **Animation:** Framer Motion 12.23.24
- **Routing:** React Router DOM 7.9.6
- **Supported Browsers:** Chrome, Firefox, Safari, Edge (latest versions)
- **Device Support:** Desktop, Tablet, Mobile

### 2.5 Design and Implementation Constraints
- Responsive design must work on screens from 320px to 4K resolution
- MUST use Tailwind CSS for styling
- Component-based architecture using React
- Modular CSS structure with separate styling per component
- ESLint configuration for code quality

### 2.6 Assumptions and Dependencies
- **Assumptions:**
  - Asset files (images) are available in the src/assets directory
  - JavaScript is enabled in user browsers
  - Modern CSS features are supported
  
- **Dependencies:**
  - Node.js for development
  - NPM/Yarn for package management
  - Vite development server
  - Tailwind CSS processing

---

## 3. System Features

### 3.1 Navigation Bar (Navbar Component)

#### 3.1.1 Functional Requirements

**FR-1.1: Desktop Navigation**
- MUST display horizontal navigation menu on desktop (screens ≥ 640px)
- MUST show logo on the left side (60px × 50px)
- MUST display navigation links: Home, About Me, Projects, Services, My Skills, Contact Me
- MUST highlight active section link with dark background
- MUST support smooth scrolling to corresponding sections

**FR-1.2: Mobile Navigation**
- MUST display hamburger menu button on mobile (screens < 640px)
- MUST show profile avatar (circular, 40px × 40px) on mobile
- MUST toggle mobile menu on button click
- MUST display X icon when menu is open
- MUST display hamburger icon when menu is closed
- MUST show all navigation links in dropdown menu on mobile
- MUST auto-close menu after clicking a link

**FR-1.3: Smooth Scrolling**
- MUST implement smooth scroll behavior to sections
- MUST scroll to correct section ID with smooth animation
- MUST support both desktop and mobile navigation

**FR-1.4: Styling**
- MUST have sticky positioning at top of page
- MUST maintain z-index of 50 (above other content)
- MUST use dark blue background (#192A46)
- MUST have responsive padding and spacing

#### 3.1.2 Non-Functional Requirements

**NFR-1.1: Performance**
- Navigation interaction SHOULD respond within 100ms
- Mobile menu toggle SHOULD animate smoothly
- Click handlers SHOULD prevent default link behavior

**NFR-1.2: Accessibility**
- MUST include sr-only (screen reader) text for menu button
- MUST use semantic HTML (nav, button, a tags)
- MUST support keyboard navigation

---

### 3.2 Hero Section (Hero Component)

#### 3.2.1 Functional Requirements

**FR-2.1: Visual Layout**
- MUST display hero background image (Hero.jpg) with 10% opacity
- MUST display profile picture in circular gradient frame (desktop only)
- MUST use gradient border (violet → pink → indigo)
- MUST be hidden on mobile, visible on medium+ screens (md:flex)

**FR-2.2: Content Display**
- MUST display professional greeting/introduction text
- MUST include social media links
- MUST show hero section with full viewport height appropriate content

**FR-2.3: Image Imports**
- MUST properly import Hero.jpg from assets
- MUST properly import profile picture from assets
- MUST handle image loading gracefully

**FR-2.4: Section Anchoring**
- MUST have id="home" for navigation linking
- MUST be scrollable destination from navbar

#### 3.2.2 Non-Functional Requirements

**NFR-2.1: Performance**
- Background image opacity effect SHOULD not impact performance
- Image file size SHOULD be optimized
- Gradient effects SHOULD be GPU-accelerated

**NFR-2.2: Responsiveness**
- Layout MUST adapt from mobile single column to desktop multi-column
- Profile avatar MUST be hidden on mobile
- MUST maintain visual hierarchy across all screen sizes

---

### 3.3 About Me Section (About Component)

#### 3.3.1 Functional Requirements

**FR-3.1: Section Structure**
- MUST have id="about" for navigation
- MUST display two-column layout on desktop (left image, right content)
- MUST display single-column layout on mobile
- MUST have decorative design elements (gray blocks)

**FR-3.2: Content Display**
- MUST display profile image (left side)
- MUST display heading: "About Me" (with "Me" in teal)
- MUST display descriptive paragraph content
- MUST display additional information/bullet points

**FR-3.3: Responsive Design**
- MUST stack content vertically on mobile (flex-col)
- MUST arrange horizontally on large screens (lg:flex-row)
- MUST center image on mobile
- MUST align right content appropriately

#### 3.3.2 Non-Functional Requirements

**NFR-3.1: Visual Polish**
- Image SHOULD have shadow and rounded corners
- Text SHOULD have proper line height and spacing
- Decorative blocks SHOULD enhance visual appeal

---

### 3.4 Services Section (Services Component)

#### 3.4.1 Functional Requirements

**FR-4.1: Section Structure**
- MUST have id="services" for navigation
- MUST display full viewport minimum height
- MUST center all content vertically and horizontally
- MUST use dark neutral background (bg-neutral-900)

**FR-4.2: Service Cards Display**
- MUST display three service cards: Web Design, Web Development, Graphic Design
- MUST show service icon for each card
- MUST display service title
- MUST display service description
- MUST include action button per card

**FR-4.3: Icon Integration**
- MUST use Heroicons for service icons
- MUST style icons with cyan color (text-cyan-400)
- MUST ensure icons are consistent size (w-14 h-14)

**FR-4.4: Card Styling**
- MUST have hover effects on cards
- MUST display button with white background and hover effects
- MUST maintain responsive grid layout

#### 3.4.2 Non-Functional Requirements

**NFR-4.1: User Experience**
- Cards SHOULD have smooth hover transitions
- Buttons SHOULD provide visual feedback on interaction

---

### 3.5 Skills Section (MySkills Component)

#### 3.5.1 Functional Requirements

**FR-5.1: Section Structure**
- MUST have id="Myskills" for navigation
- MUST display heading: "My Skills" (with "Skills" in teal)
- MUST center all content

**FR-5.2: Skills Display**
- MUST display 8 skills: HTML-5, CSS-3, Tailwind CSS, JavaScript, React, Figma, Next.js, Node.js
- MUST show skill name and proficiency level
- MUST display skill icon
- MUST show proficiency as visual indicator

**FR-5.3: Proficiency Levels**
- HTML-5: 90%
- CSS-3: 80%
- Tailwind CSS: 80%
- JavaScript: 60%
- React: 60%
- Figma: 90%
- Next.js: 65%
- Node.js: 70%

**FR-5.4: Responsive Grid**
- MUST display skills in responsive grid layout
- MUST adapt column count based on screen size

#### 3.5.2 Non-Functional Requirements

**NFR-5.1: Visual Hierarchy**
- Proficiency levels SHOULD be easily comparable
- Icons SHOULD be clearly visible and recognizable

---

### 3.6 Projects Section (Project Component)

#### 3.6.1 Functional Requirements

**FR-6.1: Section Structure**
- MUST have id="projects" on outer wrapper for navigation
- MUST display heading: "My Projects" (with "Projects" in teal)
- MUST center content

**FR-6.2: Portfolio Grid**
- MUST display projects in responsive grid
- MUST show 1 column on mobile, 2 columns on tablet, 3 columns on desktop
- MUST display 6 portfolio items

**FR-6.3: Portfolio Items**
- MUST display project images
- MUST show title for highlighted project
- MUST support highlight/featured project with border

**FR-6.4: Hover Effects**
- MUST implement image zoom effect on hover
- MUST smooth transition animations
- MUST maintain aspect ratio

**FR-6.5: Image Gallery**
- MUST display Web Design portfolio images
- MUST load multiple portfolio samples
- MUST maintain consistent image sizing

#### 3.6.2 Non-Functional Requirements

**NFR-6.1: Performance**
- Image hover zoom SHOULD be GPU-accelerated
- Transition duration SHOULD be 300ms

---

### 3.7 Contact Section (ContactUs Component)

#### 3.7.1 Functional Requirements

**FR-7.1: Section Structure**
- MUST have id="contact" for navigation
- MUST display heading: "Contact Me" (with "Me" in teal)
- MUST use dark background (bg-neutral-900)

**FR-7.2: Contact Information Display**
- MUST display logo on left side
- MUST show contact information
- MUST include contact methods: Phone, Email, Location
- MUST display social media icons: LinkedIn, Facebook

**FR-7.3: Contact Form**
- MUST display contact form on right side (desktop)
- MAY include form fields for name, email, message
- MUST have submit button

**FR-7.4: Contact Details**
- MUST show professional message encouraging contact
- MUST display response time expectation (24 hours)
- MUST list services offered

#### 3.7.2 Non-Functional Requirements

**NFR-7.1: User Experience**
- Contact information SHOULD be easily readable
- Icons SHOULD be clear and recognizable

---

### 3.8 Footer (Footer Component)

#### 3.8.1 Functional Requirements

**FR-8.1: Footer Structure**
- MUST display footer content at bottom of page
- MUST include branding elements
- MUST display navigation links
- MUST show copyright information

**FR-8.2: Footer Content**
- MUST display company/personal branding
- MAY include social media links
- MUST display relevant links and information

#### 3.8.2 Non-Functional Requirements

**NFR-8.1: Styling**
- Footer SHOULD match overall design theme
- Text SHOULD be readable against background

---

## 4. External Interface Requirements

### 4.1 User Interfaces

#### 4.1.1 Desktop Interface
- **Viewport Width:** 1024px and above
- **Layout:** Multi-column layouts with fixed navigation
- **Navbar:** Horizontal menu bar
- **Components:** Full featured display of all sections

#### 4.1.2 Tablet Interface
- **Viewport Width:** 768px to 1023px
- **Layout:** Responsive grid with adjustments
- **Navbar:** Mix of desktop and mobile features
- **Components:** Appropriate scaling

#### 4.1.3 Mobile Interface
- **Viewport Width:** 320px to 767px
- **Layout:** Single column, stacked sections
- **Navbar:** Hamburger menu with toggle functionality
- **Components:** Touch-friendly sizing and spacing

### 4.2 Hardware Interfaces
- Standard web browsers on desktop computers
- Mobile devices (smartphones, tablets)
- Various screen resolutions (320px to 4K)

### 4.3 Software Interfaces
- **React 19.2.0:** Component framework
- **Tailwind CSS 4.1.17:** Styling framework
- **Vite:** Development and build tool
- **React Router DOM:** Navigation (if multi-page routing added)
- **Framer Motion:** Animation library
- **Heroicons & React Icons:** Icon libraries

---

## 5. System Features (Non-Functional Requirements)

### 5.1 Performance Requirements

| Requirement | Target | Metric |
|-----------|--------|--------|
| Page Load Time | < 3 seconds | Full page load |
| Time to Interactive | < 2.5 seconds | User can interact |
| Component Render | < 100ms | Per component |
| Navigation Response | < 50ms | Click to scroll |
| Image Optimization | < 100KB average | Per image |

### 5.2 Security Requirements
- MUST use HTTPS in production
- MUST sanitize any user input in contact forms
- MUST prevent XSS attacks
- MUST validate form inputs on client-side

### 5.3 Reliability Requirements
- SHOULD have 99.5% uptime in production
- MUST gracefully handle missing images
- MUST provide fallback content for failed loads
- SHOULD maintain data consistency

### 5.4 Availability Requirements
- MUST be accessible 24/7
- MUST load on mobile and desktop
- MUST work in all modern browsers

### 5.5 Maintainability Requirements
- Code MUST follow ESLint guidelines
- Components SHOULD be modular and reusable
- MUST include comments for complex logic
- CSS SHOULD be organized per component

### 5.6 Scalability Requirements
- SHOULD support future additions of new sections
- SHOULD allow easy addition of new projects
- SHOULD permit skill additions without restructuring
- SHOULD enable portfolio updates without code changes

### 5.7 Accessibility Requirements
- MUST follow WCAG 2.1 Level AA standards
- MUST include alt text for all images
- MUST use semantic HTML
- MUST support keyboard navigation
- MUST provide screen reader support
- MUST use sufficient color contrast

### 5.8 Responsiveness Requirements
- MUST adapt to all screen sizes (320px - 4K)
- MUST maintain usability on all devices
- Images SHOULD scale appropriately
- Text SHOULD remain readable at all sizes

---

## 6. Data Requirements

### 6.1 Data Elements

#### Navigation Data
- Navigation links with section IDs
- Profile information for mobile avatar

#### Skills Data
- Skill names
- Proficiency levels (0-100%)
- Skill icons/images
- Description (optional)

#### Projects Data
- Project titles
- Project images
- Project descriptions (optional)
- Highlight flag (for featured projects)

#### Services Data
- Service titles
- Service descriptions
- Service icons
- Service details

#### Contact Data
- Contact methods (phone, email, location)
- Social media links
- Contact form fields

### 6.2 Data Storage
- Static data embedded in component files
- Image assets stored in `src/assets/` directory
- No backend database required (static site)

### 6.3 Data Formats
- Images: JPG, PNG, SVG
- Icons: SVG (via Heroicons and React Icons)
- Text: UTF-8 encoded

---

## 7. Design Constraints

### 7.1 Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### 7.2 Design System
- **Color Palette:**
  - Dark Blue: #192A46 (navbar background)
  - Neutral Black: #171717 (neutral-900 for sections)
  - Teal Accent: #14b8a6 (highlight text)
  - White: #ffffff (text and highlights)
  - Gray: Various shades for text

- **Typography:**
  - Font Family: Tailwind default (Inter, system fonts)
  - Heading Sizes: 3xl (30px) for section titles
  - Body Text: 14px, 16px

- **Spacing Scale:** Tailwind standard spacing (4px base unit)
- **Border Radius:** Rounded corners (md, lg, xl variants)
- **Shadows:** Multi-level shadow effects

### 7.3 Technology Stack Constraints
- MUST use React functional components with hooks
- MUST use Tailwind CSS utility classes
- MUST use Vite as build tool
- CSS MUST be modular (per-component files)

---

## 8. Software Quality Attributes

### 8.1 Correctness
- All components MUST render without errors
- Navigation MUST link to correct sections
- Images MUST load properly
- Data MUST display accurately

### 8.2 Robustness
- MUST handle missing images gracefully
- MUST work with slow internet connections
- MUST not crash on unexpected inputs

### 8.3 Efficiency
- Minimized bundle size
- Optimized image sizes
- Lazy loading implementation (future)

### 8.4 Usability
- Intuitive navigation
- Clear information hierarchy
- Consistent design language
- Mobile-friendly interface

### 8.5 Maintainability
- Clean, readable code
- Consistent naming conventions
- Component modularity
- Documentation and comments

### 8.6 Portability
- Works across all modern browsers
- Responsive to all screen sizes
- Can be deployed to multiple hosting platforms

---

## 9. Development and Deployment

### 9.1 Development Environment
- **IDE:** VS Code
- **Package Manager:** npm
- **Node Version:** 18+ recommended
- **Dev Server:** Vite dev server

### 9.2 Build Process
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### 9.3 Deployment
- **Base Path:** `/Veerji-Suthar-Portfolio`
- **Build Output:** Optimized static files
- **Hosting:** GitHub Pages or static hosting
- **Environment:** Production (HTTPS)

### 9.4 Version Control
- GitHub repository
- Semantic versioning
- Meaningful commit messages

---

## 10. Glossary and Acronyms

| Term | Definition |
|------|-----------|
| SPA | Single Page Application |
| SRS | Software Requirements Specification |
| React | JavaScript library for building user interfaces |
| Tailwind CSS | Utility-first CSS framework |
| Vite | Modern frontend build tool |
| Responsive Design | Design that adapts to different screen sizes |
| Component | Reusable piece of UI |
| Hook | React feature for functional components |
| ESLint | JavaScript linter for code quality |
| WCAG | Web Content Accessibility Guidelines |
| XSS | Cross-Site Scripting attack |
| DOM | Document Object Model |

---

## 11. Appendix

### 11.1 File Structure
```
src/
├── Components/
│   ├── AboutMe/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── ContactUs/
│   │   └── ContactUs.jsx
│   ├── Divider/
│   │   └── Divider.jsx
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   └── SocialLinks.jsx
│   ├── MySkills/
│   │   └── MySkills.jsx
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Projects/
│   │   └── Project.jsx
│   └── Services/
│       └── Services.jsx
├── assets/
│   └── (image files)
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

### 11.2 Component Dependencies
```
App
├── Navbar
├── Hero
├── AboutMe
├── Services
├── MySkills
├── Projects
├── ContactUs
└── Footer
```

### 11.3 Key Dependencies
- react: ^19.2.0
- @heroicons/react: ^2.2.0
- react-icons: ^5.5.0
- framer-motion: ^12.23.24
- @tailwindcss/vite: ^4.1.17
- tailwindcss: ^4.1.17

### 11.4 Future Enhancements
- Blog/Articles section
- Dark mode toggle
- Multi-language support
- Backend contact form handling
- Animation enhancements
- Performance optimization with lazy loading
- SEO optimization
- Analytics integration

---

## 12. Sign-Off

| Role | Name | Date |
|------|------|------|
| Product Owner | Veerji Suthar | May 6, 2026 |
| Development Lead | - | - |
| QA Lead | - | - |

---

**Document End**
