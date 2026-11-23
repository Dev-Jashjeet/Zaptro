# Zaptro – E-Commerce Website

Zaptro is a frontend e-commerce website built using React and modern frontend technologies. The main goal of this project was to apply my React knowledge in a practical project while exploring state management, authentication, API integration, and reusable component architecture.

I developed the core application logic myself, including product handling, cart operations, state management, and data handling. I also took assistance from AI for UI layout ideas and design inspiration.

Currently, Zaptro is a frontend-only project, and I plan to extend it with backend functionality in the future.

## Tech Stack

- **React.js** – Building reusable components and managing the user interface.
- **TypeScript** – Adding static typing and improving code reliability.
- **Tailwind CSS** – Styling and creating responsive layouts.
- **React Router DOM (BrowserRouter)** – Handling client-side navigation and routing.
- **Redux & Redux Toolkit** – Managing global application state, especially cart-related operations.
- **Context API** – Sharing application data across components.
- **Clerk** – Handling user authentication.
- **Axios** – Making HTTP requests and handling API responses.
- **Local Storage** – Persisting cart data across page reloads.
- **Lucide React & React Icons** – Using icons throughout the application.
- **React Slick** – Implementing carousel and slider functionality.
- **Lottie React** – Adding animations and interactive visual elements.

## Features

- **User Authentication:** User sign-up and login functionality using Clerk.
- **Product Listing:** Displaying products fetched through API integration.
- **Product Details:** Viewing individual product information.
- **Category Filtering:** Filtering products based on their categories.
- **Product Search:** Searching for products.
- **Shopping Cart:** Adding and removing products from the cart.
- **Cart Persistence:** Maintaining cart data using Local Storage.
- **Global State Management:** Managing shared application data using Redux Toolkit and Context API.
- **Responsive UI:** Building layouts with Tailwind CSS.
- **Carousel:** Displaying content using React Slick.
- **Animations:** Using Lottie animations for a better user experience.

## Installation and Setup

Follow these steps to run Zaptro locally.

**1. Clone the repository**

```bash
git clone <your-repository-url>
```

**2. Navigate to the project directory**

```bash
cd zaptro
```

**3. Install dependencies**

```bash
npm install
```

Or, if you use Bun:

```bash
bun install
```

**4. Start the development server**

```bash
npm run dev
```

Or:

```bash
bun run dev
```

**5. Configure Clerk**

Create a Clerk application and configure the required environment variables in your `.env` file according to your Clerk setup.

## Project Status

**Current Status:** Frontend Completed

Zaptro currently focuses on frontend functionality. Backend integration, database management, order processing, and additional e-commerce features are potential future improvements.

## What I Learned

While building Zaptro, I got practical experience with:

- Managing complex state using Redux Toolkit.
- Understanding when to use Context API and Redux.
- Integrating third-party authentication with Clerk.
- Fetching and managing API data using Axios.
- Implementing persistent cart functionality with Local Storage.
- Building reusable React components.
- Working with different React libraries and packages.
- Structuring a frontend application.

## Future Improvements

- Build a backend using Node.js and Express.js.
- Integrate MongoDB for database management.
- Implement server-side cart persistence.
- Add checkout and order management functionality.
- Develop an admin dashboard for product and order management.
- Integrate a payment gateway.

## Acknowledgement

AI tools were used as supporting resources for UI layout ideas and design inspiration. The core application logic and functionality were implemented by me.

---

**Built by Jashjeet Singh**

GitHub: [Dev-Jashjeet](https://github.com/Dev-Jashjeet)
