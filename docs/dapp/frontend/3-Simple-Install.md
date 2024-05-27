---
id: simple-install
title: Simple Install
sidebar_position: 3
---


# Create a Simple Frontend

## Requirements

- Node.js 18.x
- npm 7.x

## Create Project

### Vite

Let's create a basic project using the **React TypeScript** template from the [Vite Guide](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

Navigate to your workspace directory and execute the following commands:

```bash
# Create a new Vite project with the React TypeScript template
npm create vite@latest dapp-frontend-basic -- --template react-ts

# Navigate into the project folder
cd dapp-frontend-basic

# Install the project dependencies
npm install
```

At this point, you can run the app with the following command:

```bash
# Start the development server
npm run dev

# Open your browser and go to http://localhost:3000
```

### Chakra UI

Next, we will add the Chakra UI library to our project to help create a simple and responsive UI. If you prefer to use another library like Material UI or Ant Design, you can adapt the following steps accordingly.

Follow the official guide to install Chakra UI with Vite, which can be found [here](https://v2.chakra-ui.com/getting-started/vite-guide).

Install Chakra UI and its dependencies:

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Modify \`main.tsx\` to integrate Chakra UI:

```typescript
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider> {/* Surround your App with the ChakraProvider */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
```

### Create Layout

#### Setup Router

We will create two pages: **Unlock** and **Home**. 

To be continued...

## External Links

You can find the final code for this section in the [dapp-frontend-basic](https://github.com/phybyte/dapp-template-basic) repository.
