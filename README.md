# React and JSX Introduction

## Project Walkthrough

This project is a hands-on introduction to React and JSX, focusing on building a basic static site. Along the way, I explored reusable components, JSX syntax, and props while also experimenting with creative additions like a Spanish toggle. Here’s how I approached it step-by-step, sharing what I did and how you can recreate it yourself.

---

## Resources

Before diving in, I spent some time familiarizing myself with the following resources:

### **What I Read**
- **[Hello React](https://atlas-jswank.github.io/blog/hello-react/):** A great starting point to understand components, props, and using Vite.
- **[JSX](https://atlas-jswank.github.io/blog/jsx/):** Helped me get comfortable with JSX syntax and how it fits into React.
- **[ES Modules](https://atlas-jswank.github.io/blog/es-modules/):** A guide to modern JavaScript modules, which was essential for understanding imports in React.

### **What I Watched**
- **[React in 100 seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM&feature=youtu.be):** A quick, high-level overview of React’s features.
- **[React Tutorial for Beginners](https://egghead.io/courses/the-beginner-s-guide-to-react):** This more in-depth tutorial (especially the first 12 videos) gave me a solid understanding of React fundamentals.

### **Tools I Used**
- **[Vite](https://vite.dev/guide/):** A fast and modern build tool for React development.
- **[React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi):** Helped me debug and inspect React components in the browser.
- **[Node.js](https://nodejs.org/en):** Ensured I had the latest LTS version installed for compatibility.

---

### **Project Overview**
- **Project Figma:** [React and JSX Intro Design](https://www.figma.com/design/9nLir4sMcuAdaVqCrkH1CD/React-and-JSX-Intro?node-id=0-1&p=f)
- **Deployed Project Provided in Curriculum for Reference:** [Live Demo](https://atlas-react-and-jsx-intro.netlify.app/)

---

## Learning Objectives
- Understand how to do local development for a React app.
- Understand how to create React components using JSX.
- Understand how React props work.
- Understand how to build and deploy a React app to the cloud.

## Task 0: Getting Started

To kick things off, I set up my development environment and got familiar with the starter code.

### **What I Did**

1. **Cloned the Starter Code:**
   I forked the starter code from [this repository](https://github.com/atlas-jswank/atlas-react-and-jsx), created my own repository named `atlas-react-and-jsx`, and cloned it to my local machine. This allowed me to make changes and push updates to my version of the project.

2. **Installed Dependencies:**
   Navigated to the project folder and installed the necessary packages:
   ```bash
   npm install
   ```

3. **Started the Development Server:**
   Launched the server to view the project at `http://localhost:5173`:
   ```bash
   npm run dev
   ```

4. **Explored the Codebase:**
   I reviewed the structure of the starter code:
   - **`src`**: All the React components and logic.
   - **`src/assets`**: Static assets like images.
   - **`index.html`**: The entry point for the application.
   - **`src/App.jsx`**: The main component where everything comes together.

5. **Set Up React:**
   Updated `src/main.jsx` to render the `App` component using the latest React 18+ syntax.

---

## Task 1: Creating the Header

The main focus of this task was building a dynamic header that displays a greeting based on the time of day and includes links to LinkedIn and my GitHub profiles. Here’s how I approached it:

### **Greeting Component**
The `Greeting` component lives in `src/components/Greeting.jsx` and displays a personalized message depending on the time of day. I added a creative twist by including a toggle button that switches the greeting between English and Spanish. It was a fun way to practice using React’s state management with `useState`.

### **Social Links Component**
The `SocialLinks` component, stored in `src/components/SocialLinks.jsx`, displays icons for LinkedIn and GitHub. Each icon opens in a new tab for easy access.

### **Header Component**
To bring it all together, I created a `Header` component in `src/components/Header.jsx`. This component combines the `Greeting` and `SocialLinks` components inside a `<nav>` element. The result is a dynamic and reusable header.

### **Adding the Header to the App**
Finally, I integrated the `Header` into the `App` component (in `src/App.jsx`) to ensure it displayed on the page. Once everything was in place, the header featured a greeting with a time-of-day image and interactive links.

---

## Task 2: Adding Sections

For this task, I focused on creating reusable sections to display content dynamically, making the app more modular and maintainable.

### **Section Component**
The `Section` component, located in `src/components/Section.jsx`, is designed to render a title and any content passed between its opening and closing tags. This flexibility allows it to handle various types of content dynamically.

### **What I Did**
1. **Created the `Section` Component:**
   - Added a new component that accepts `title` and `children` props.
   - Used these props to dynamically render a `<div>` containing an `<h1>` for the title and the content provided as children.

2. **Added Two Sections to the App:**
   - In `src/App.jsx`, I added two instances of the `Section` component:
     - **What is React?**
       - This section explains React in a fun, approachable way, comparing it to a capybara for its chill and adaptable nature.
     - **Benefits of React:**
       - This section lists five benefits of using React, such as reusable components, virtual DOM efficiency, and community support.

3. **Integrated with the Language Toggle:**
   - The title and content of each section dynamically update based on the global language toggle, ensuring consistency across the app.

---