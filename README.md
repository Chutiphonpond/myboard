# Welcome to My Board!

## Overview

My Board is a simple web application built with Next.js, TailwindCSS, and React. It contains two main pages:

1. **Login Page**: A user-friendly interface for signing in.
2. **Home Page**: A dynamic feed where users can interact with posts and comments.

---

## Features

- **Login Page**: Allows users to sign in with their username.
- **Home Page**: Displays posts and their corresponding comments. Users can browse posts organized by category.
- Responsive design powered by TailwindCSS.
- Modular components built using React and HeadlessUI.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 16 or higher.
- **Yarn**: Use as the package manager. Install it [here](https://yarnpkg.com/getting-started/install).

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Chutiphonpond/myboard-frontend.git
   cd myboard
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```
4. Open your browser and navigate to http://localhost:3000.

## Project Structure

    ├── assets
    │ └── login
    ├── components
    │ ├── homepage
    │ │ ├── Header.tsx
    │ │ ├── Sidebar.tsx
    │ │ ├── PostModal.tsx
    │ │ ├── index.tsx
    │ └── login
    ├── configs
    ├── pages
    │ ├── api
    │ ├── login.tsx
    │ ├── home.tsx
    ├── public
    ├── styles
    ├── .eslintrc.json
    ├── next.config.js
    ├── package.json
    ├── tailwind.config.js
    ├── tsconfig.json

# Available Scripts

## Development

```bash
yarn dev
```

Starts the development server on http://localhost:3000.

# Dependencies

## Main Dependencies

- Next.js: A React framework for server-rendered apps.
- React: Frontend library for UI components.
- TailwindCSS: Utility-first CSS framework.
- Axios: For HTTP requests.
- React Icons: For easy icon integration.

## Development Dependencies

- TypeScript: Type safety for the project.
- PostCSS: For CSS processing.
- ESLint: For maintaining code quality.

Enjoy building with My Board!
