# ECOMMERCE-G15 - Front-End

An e-commerce website developed as a final project for a Fullstack bootcamp.

This is the Front-End project.

## Online Demo

https://ecommerce-react-g15.vercel.app/

## Tools & Frameworks

We implemented a PERN Stack: Postgres + Express.js + React + Node.js.

This repository only contains the Frontend side made in React.

Image repository containing the compressed jpg images, icons and illustrator source files: https://github.com/rgap/Ecommerce-G15-ImageRepository

The website mockup made in react: https://ecommerce-react-mockup-g15.vercel.app/

### Main Dependencies

- vite: A modern frontend build tool that provides a faster and leaner development experience.
- react-router-dom: A library for handling routing in React web applications, managing navigation and URL manipulation.
- react-redux: Official React bindings for Redux, enabling easy integration of Redux with React components.
- dotenv: Loads environment variables from a .env file into process.env, allowing configuration separation.
- eslint: A tool for identifying and reporting on patterns in JavaScript, enforcing code style.
- tailwindcss: A utility-first CSS framework for rapidly building custom designs.
- @reduxjs/toolkit: A set of tools to simplify Redux development, making it easier to manage the state.
- @mercadopago/sdk-react: MercadoPago's SDK for React, used for integrating payment solutions into React applications.

### Other Dependencies

- formik: A library for building and managing forms in React, handling form state, validation, and submission.
- yup: A schema builder for value parsing and validation.
- react-toastify: A library for adding notifications to a React app, offering customizable, toast-style notifications.

## Configuration

### Install Dependencies

```
npm install
```

### Create The .env File

```
VITE_MERCADOPAGO_PUBLIC_KEY: The public API key for integrating MercadoPago. (e.g. "TEST-AAAA1111")

VITE_HOSTNAME_BACKEND: URL or address of the backend server. (e.g. "http://localhost:3000")
```

### Run The Server

```
npm run dev
```

## Some Screenshots

These are the mid-fidelity wireframes made in Figma:

<p align="center">
  <img src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/presentation/wireframes-overview.jpg">
</p>
