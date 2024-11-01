# Nikolay Sanikov - Portfolio Landing Page
<a href="https://6724516908b675a79a228999--nickport.netlify.app/">Portfolio<a/>
## Project Description

This repository contains a personal landing page for **Nikolay Sanikov**, a full-stack developer. Built with React and Vite, this portfolio website highlights Nikolay's professional background, skills, projects, and contact information. The design and animations enhance user experience, making it both interactive and visually appealing.

## Key Requirements

### 1. **Navigation Bar**
   - Fixed navigation bar at the top that remains visible as users scroll.
   - Sections:
     - About Me
     - Skills (simpler name: "My Tech Stack")
     - Portfolio
     - Services (indicating Nikolay can handle junior-level test assignments in his stack)
     - Testimonials
     - Contact Me

### 2. **Animations**
   - Cool animations to be applied where needed for a smooth, engaging experience.
   - Intro animation: `Suspense` component, displaying "Николай Санников" in Russian, with animated assembly of letters, before loading the main landing page content.

### 3. **Iconography**
   - Relevant technology icons in the skills section, allowing visitors to visually connect each skill with its respective icon.

### 4. **Portfolio Display**
   - Project section with image previews and brief descriptions.
   
## About Nikolay

Nikolay Sanikov is a full-stack developer experienced in creating internal web services for company employees. The portfolio includes:
- **Portal Project**: Aggregates employee data, tasks, events, and birthdays.
  - Technologies: React, JWT, PostgreSQL, Docker.
- **ServiceDesk**: Web applications for task creation and inter-departmental communication.
  - Technologies: Vue2, React, PHP, Bitrix.
- **Admin Panel**: Single entry point for web applications.
  - Technologies: Next.js, Nest.js, JWT.

More details about projects, technical stack, and professional background are outlined in the project files.

## Tech Stack

- **Languages**: JavaScript, TypeScript, PHP
- **Frameworks**: React, Next.js, Vue2, Node.js, Nest.js
- **State Management**: Redux, Redux-Toolkit
- **Styling**: Tailwind CSS, SCSS
- **Build Tools**: Webpack, Vite
- **Containerization**: Docker

## Project Setup

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/belirofon/nikolay-portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
