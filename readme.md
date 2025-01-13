# Snigdha OS Web 🌐

Welcome to the Snigdha OS Web repository! This repository contains the source code, components, and resources used for building and maintaining the official website for Snigdha OS. 🚀

<div align="center">
  <!-- Build Status Badge -->
  [![Netlify Status](https://api.netlify.com/api/v1/badges/03563b4f-142a-4d7d-8d97-ecfff7b87b29/deploy-status)](https://app.netlify.com/sites/snigdhaos/deploys)
  
  <!-- License Badge -->
  ![MIT License](https://img.shields.io/badge/license-MIT-green)
  
  <!-- Dependencies Badge -->
  ![Dependencies](https://img.shields.io/david/Snigdha-OS/snigdha-os.github.io)
  
  <!-- Code Quality Badge -->
  ![Code Quality](https://img.shields.io/codecov/c/github/Snigdha-OS/snigdha-os.github.io)
  
  <!-- Test Coverage Badge -->
  ![Test Coverage](https://img.shields.io/coveralls/github/Snigdha-OS/snigdha-os.github.io)

</div>

## Table of Contents 📑

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Dependencies & Scripts Explanation](#dependencies--scripts-explanation)
- [Repository Structure](#repository-structure)
- [Developers](#developers)
- [Development Guide](#development-guide)
- [Contributing](#contributing)
- [License](#license)

## Overview 🌟

The Snigdha OS Web repository powers the official Snigdha OS website. It includes various web development components, styles, and scripts necessary for the website's functionality. The website is designed to be clean, lightweight, and user-friendly, aligning with the philosophy of Snigdha OS. 🎨💻

## Features 🔧

- **Responsive Design** 📱: The website is fully responsive and works across various devices and screen sizes.
- **User Registration & Authentication** 🔒: Integrated with the Snigdha OS user system for registration and authentication.
- **Region-based Downloads** 🌍: Allows users to select regional mirrors for downloading Snigdha OS.
- **Customizable UI** 🎨: Built with flexibility in mind for future enhancements and easy theming.
- **SEO Optimization** 📈: The website is optimized for search engines to ensure better discoverability.

## Technologies Used 🛠️

This project utilizes a range of modern web technologies to create a seamless and performant experience:

- **React.js** ⚛️: A JavaScript library for building user interfaces, allowing for reusable components and a fast development workflow.
- **Node.js** 🌐: A runtime environment for executing JavaScript on the server-side.
- **Express.js** ⚡: A minimal web framework for Node.js used for backend API routes.
- **Redux** 📦: A state management library to handle the application's state in a predictable way.
- **CSS3** 🎨: For styling the website with modern layout techniques (Flexbox, Grid).
- **Sass** 🧶: A CSS preprocessor to manage complex stylesheets and make the development process more efficient.
- **Webpack** ⚙️: A module bundler for JavaScript and other assets, ensuring optimal performance and organization.
- **Jest** 🧪: A testing framework used for running unit and integration tests.
- **ESLint** 📝: A tool for identifying and fixing issues in JavaScript code to ensure consistency and adherence to coding standards.

## Dependencies & Scripts Explanation 📦🛠️

### **Dependencies** 🚀

These are the core libraries required for the website to run in production:

- **`lucide-react`** 💎: A library of open-source, customizable SVG-based icons for React. It helps add vector icons to the UI.
- **`octokit`** 🦑: A JavaScript library for interacting with GitHub’s API, useful for fetching data from GitHub repositories.
- **`react`** ⚛️: The core React library to build user interfaces. React components handle rendering and interactivity.
- **`react-dom`** 🌐: Provides methods to render React components in the browser and manage updates.
- **`react-icons`** 🔗: A set of icons packaged as React components. It simplifies adding icons to the UI.
- **`react-router-dom`** 🛣️: A routing library for React, enabling navigation between pages and managing URL parameters.

### **DevDependencies** 🧰

These are tools used during development to build, lint, and optimize the project:

- **`@eslint/js`** 🧑‍💻: Core ESLint library to identify and fix JavaScript code issues.
- **`@types/react`** and **`@types/react-dom`** 💬: TypeScript definitions for React and ReactDOM, providing type safety and better development experience.
- **`@vitejs/plugin-react`** ⚙️: Vite plugin for React, enabling features like React Fast Refresh and JSX transformation.
- **`autoprefixer`** 🌐: PostCSS plugin that automatically adds vendor prefixes to CSS to ensure cross-browser compatibility.
- **`eslint`** 📝: The linter for JavaScript/TypeScript to ensure consistent code quality.
- **`eslint-plugin-react-hooks`** 🪝: An ESLint plugin to enforce rules of React Hooks usage.
- **`eslint-plugin-react-refresh`** 🔄: Ensures that React Fast Refresh works correctly during development.
- **`globals`** 🌍: Provides a list of global variables in different environments, such as browser and Node.js, for linting.
- **`postcss`** 🧩: A tool to transform CSS with plugins, such as autoprefixing, minification, and more.
- **`tailwindcss`** 🌈: A utility-first CSS framework to rapidly build custom and responsive designs.
- **`typescript`** 🔤: A superset of JavaScript that adds static typing for more maintainable and reliable code.
- **`typescript-eslint`** 🔍: Enables ESLint to lint TypeScript code, enforcing consistent styling and error-free code.
- **`vite`** ⚡: A fast, next-generation build tool optimized for modern web development.
- **`lint-staged`** 🚀: Runs linters on staged files before committing, ensuring that only clean code is committed.
- **`storybook`** 📚: A tool to develop and test UI components in isolation, ideal for building reusable UI elements.

### **Scripts** 📝

These are various commands that help automate tasks in the development process:

- **`dev`** 🔥: Starts the development server (`vite`), enabling hot reloading and fast builds.
- **`build`** 🏗️: Builds the project for production with optimized assets.
- **`lint`** ⚠️: Runs ESLint to check for any code quality issues.
- **`preview`** 👀: Previews the production build locally.
- **`start`** 🚀: Alias for `pnpm dev`, starts the development server.
- **`test`** 🧪: Runs linting and builds the app as a testing workflow.
- **`fix`** 🔧: Automatically fixes any linting errors.
- **`format`** 🖋️: Runs Prettier to format code according to style conventions.
- **`clean`** 🧹: Cleans the `dist` folder, removes `node_modules`, and reinstalls dependencies.
- **`deploy`** 🌐: Builds the project and deploys it to Netlify.
- **`analyze`** 📊: Analyzes the build output for performance improvements.
- **`check-types`** ✅: Checks TypeScript types without emitting code.
- **`generate-icons`** 🖼️: Generates an SVG sprite from the icons in the `src/assets/icons` folder.
- **`precommit`** ✅: Runs `lint-staged` to lint files before committing.
- **`storybook`** 📚: Starts Storybook to develop and test components in isolation.
- **`build-storybook`** 🏗️: Builds the Storybook for deployment.
- **`check-deps`** 🔍: Audits and updates dependencies.
- **`postinstall`** 🧰: Runs additional commands after dependencies are installed (like starting Vite).

## Repository Structure 📂

The project is organized as follows:

