# Product Management Project

This is a Product Management project built using Next.js, TypeScript, and Tailwind CSS.

## Features

- **Product Listing**: View a list of products with details such as name, description, price, and image.
- **Product Details**: Click on a product to view more details including specifications and reviews.
- **Add/Edit/Delete Products**: Admin users can add new products, edit existing products, and delete products.
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS for a seamless user experience on different devices.

## Tech Stack

- **Next.js**: React framework for server-rendered React applications.
- **TypeScript**: Typed superset of JavaScript for improved code quality and developer productivity.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Vercel**: For Deployment.
- **ESLint and Prettier**: Used for code linting and formatting to maintain code quality.

## Setup Instructions

1. Clone the repository: `$ git clone https://github.com/Bilalpot/product-management.git`
2. Install dependencies: `$ npm install`
3. Set up Firebase:
   - Create a Firebase project and set up authentication.
   - Update Firebase configuration in `.env.local` file.
4. Run the project: `$ npm run dev`
5. Access the application at `http://localhost:3000`
6. Access the Live application at `https://product-management-chi.vercel.app/`

# Next.js Product Catalog

This project is a simple Next.js application that fetches product data from an external API and displays it in a product catalog. It includes features such as:

- Listing all products
- Displaying detailed information about each product
- Form to create new products

## Why Chosen Approaches

- Next.js: Chosen for its simplicity and SSR capabilities, which improves SEO and performance.
- TypeScript: Chosen for its static type checking and enhanced developer productivity.
- Tailwind CSS: Chosen for its utility-first approach, which allows rapid styling without writing custom CSS.

## Improvements and Extensions

Given more time, the following improvements and extensions could be implemented:

- Authentication and authorization for the form to create new products.
- Pagination for the product list to handle a large number of products efficiently.
- Adding search and filtering functionality to the product catalog.
- Implementing client-side form validation for the product creation form.
