

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

---

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

### **Result**
The development environment was successfully set up. The project is running locally, and I am able to view the starter code in the browser. The base structure of the app is ready for further customization.

---

## Task 1: Creating the Header

The main focus of this task was building a dynamic header that displays a greeting based on the time of day and includes links to LinkedIn and my GitHub profiles.

### **What I Did**
1. Created a `Greeting` component in `src/components/Greeting.jsx` to display a personalized message and image based on the current time of day.
2. Used `useState` to add a language toggle feature, allowing the greeting to switch between English and Spanish.
3. Created a `SocialLinks` component in `src/components/SocialLinks.jsx` to display icons for LinkedIn and GitHub, which open in new tabs.
4. Combined the `Greeting` and `SocialLinks` components into a `Header` component (`src/components/Header.jsx`).
5. Integrated the `Header` component into the `App` component (`src/App.jsx`), ensuring it displayed at the top of the page.

### **Result**
The header dynamically displays a greeting with an appropriate image and interactive social links. The greeting text updates based on both the time of day and the selected language.

---

## Task 2: Adding Sections

For this task, I focused on creating reusable sections to display content dynamically, making the app more modular and maintainable.

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

### **Result**
The app now includes two well-structured sections that dynamically render based on the selected language. These sections add depth and interactivity to the app while keeping the content modular.

---

## Task 3: Adding Helpful Resources

For this task, I created a new section to showcase resources that I found helpful for learning React. This section features interactive components for better usability.

### **What I Did**
1. **Built the `OpenLink` Component:**
   - Created a reusable component in `src/components/OpenLink.jsx` to render an icon (`open.svg`) that opens a provided link in a new tab.

2. **Built the `CopyLink` Component:**
   - Created a reusable component in `src/components/CopyLink.jsx` to render an icon (`copy.svg`) that copies a provided link to the clipboard using the Clipboard API.

3. **Built the `HelpfulResource` Component:**
   - Combined `OpenLink` and `CopyLink` components into a single `HelpfulResource` component in `src/components/HelpfulResource.jsx`.
   - Rendered a label describing the resource alongside icons for opening and copying the link.

4. **Added the Helpful Resources Section:**
   - Used the `Section` component in `src/App.jsx` to create a new section titled "Helpful Resources."
   - Included five resources, each rendered using the `HelpfulResource` component. The titles and descriptions dynamically update based on the selected language.

### **Result**
The "Helpful Resources" section provides users with curated React learning materials. It includes functionality for quickly opening or copying links, improving the user experience.

---

## **Task 4: About Me**

For this task, I created an **About Me** section to showcase a brief introduction about myself, my technical expertise, and my hobbies. The aim was to build a visually appealing and informative component that dynamically adjusts based on the app's language toggle.

### **What I Did**

1. **Created the `AboutMe` Component**:
   - Added a new `AboutMe` component in `src/components/AboutMe.jsx`.
   - The component includes:
     - An image of a stylish pug to represent a whimsical part of my personality.
     - A paragraph introducing myself, highlighting:
       - My name.
       - My specialization in **Full Stack Web Development**.
       - My current trimester.
       - Technologies I enjoy working with (**JavaScript** and **MongoDB**).
       - My career aspirations after graduation.
       - My personal hobbies, including cooking, baking, and movement practices.

2. **Integrated Language Toggle**:
   - Used the `LanguageContext` from the app to render the content in both **English** and **Spanish**.
   - Ensured the bio dynamically updates when the language toggle is switched.

3. **Styled the Component**:
   - The `AboutMe` component is styled with a focus on readability and aesthetics:
     - A background with a soft beige tone to create contrast with the rest of the page.
     - A rounded image frame for visual appeal.
     - Clean, structured typography for the bio content.

4. **Added the Component to the App**:
   - Imported the `AboutMe` component into `src/App.jsx`.
   - Placed it at the bottom of the app layout to flow naturally with the other sections.


### **Result**

The **About Me** section effectively introduces me as a developer while maintaining a touch of creativity and personality. The language toggle seamlessly switches the content between **English** and **Spanish**, ensuring accessibility for a broader audience.

---