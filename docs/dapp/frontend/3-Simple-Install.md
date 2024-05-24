---
id: simple-install
title: Simple Install
sidebar_position: 3
---

# Create a simple Frontend

## Requirements

- Node 18.x
- npm 7.x

## Create Project

### Vite

Lets create a basic project using the **React Typescript** template from the [Vite Guide](https://vitejs.dev/guide/#scaffolding-your-first-vite-project). 

Go to your Workspace directory and type the following command:

```bash
# Create a new Vite project with React Typescript template 
npm create vite@latest dapp-frontend-basic -- --template react-ts

# Go into the folder
cd dapp-frontend-basic

# Install dependencies
npm install
```

At this point the app can be run with the following command:

```bash
# Start the development server
npm run dev

# Open your browser and go to http://localhost:3000
```


### Chakra UI

We will now add the Chakra UI library to our project. It will help us to create a simple and responsive UI.
If you decide to use another library like Material UI, Ant Design, etc, you can adapt the following steps to your needs.

We will follow the official guide to install Chakra UI with Vite. You can find the guide [here](https://v2.chakra-ui.com/getting-started/vite-guide).

```bash
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

# External Links

You can find the final code for this section in the [dapp-frontend-basic](https://github/phybyte/dapp-template-basic) repository.