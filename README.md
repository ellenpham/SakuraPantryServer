# T3A2 Full Stack App (Server)

## Sakura Pantry - Japanese Online Grocery Store

### Resources

- [Production site](https://www.google.com.au/)
- [Front-end repo](https://github.com/irene2mana-T3A2-2023/SakuraPantryClient)
- [Documentation repo](https://github.com/irene2mana-T3A2-2023/SakuraPantryDocs)
- [Trello board](https://trello.com/b/TE5Q9ZYj/t3a2-%F0%9F%8C%B8sakura-pantry)

### Contributors

- [Mana Misumi](https://github.com/Mana12011207)
- [Irene Nguyen](https://github.com/irenenguyen1017)
- [Ellen Pham](https://github.com/ellenpham)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Launches the server in production mode.\
It sets the `NODE_ENV` environment variable to `production` and starts the application using the main index.js file.

### `npm run dev`

Launches the server in development mode.\
It uses nodemon for automatic restarting upon file changes and sets `NODE_ENV` to `development`.

### `npm test`

Launches the test runner in the interactive watch mode with coverage report. It sets the `NODE_ENV` to `test` and runs Jest with options to detect open handles, collect coverage information, and force exit after tests completion.

### `npm run lint`

Runs [ESLint](https://eslint.org/) to check for code issues in the `src` directory.\
It helps in maintaining code quality and consistency.

### `npm run lint:fix`

Automatically fixes fixable issues and suppresses output for warnings.

### `npm run format`

Uses [Prettier](https://prettier.io/) to format the JavaScript files in the src directory, ensuring a consistent code style across the project.

---

## Server Dependencies

### `bcryptjs`

Used for hashing passwords securely. It protects user data by converting plain text passwords into hashed formats before database storage, enhancing security against data breaches.

### `cors`

Acts as middleware for Express, enabling Cross-Origin Resource Sharing (CORS).\
CORS is crucial for web application security, as it regulates how a web application can make requests to different domains, ensuring controlled and secure interaction with external resources.

### `cross-env`

Enables consistent use of environment variables across different operating systems, essential for scripts to work smoothly on both Windows and Unix-like environments.

### `crypto-js`

JavaScript library that provides cryptographic functionality. In our application, it's primarily used for secure encryption and decryption operations. This can include generating secure random tokens, hashing, or any other cryptographic needs that ensure data security within our application.

### `dotenv`

Facilitates the management of environment variables. By separating configuration from code, it enhances security and flexibility, especially crucial for handling sensitive data like API keys and database credentials.

### `express`

A fast, unopinionated, minimalist web framework for Node.js, perfectly suited for efficiently building web applications and APIs without unnecessary complexity.

### `mongoose`

An Object Data Modelling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data and interact with MongoDB databases using JavaScript or TypeScript.

### `joi`

Joi is a comprehensive schema description language and validator for JavaScript. In our project, it is specifically utilized for validating environment variables. This ensures that our application's configuration adheres to expected formats and standards, providing an additional layer of security and reliability by preventing misconfiguration and potential runtime errors.

### `jsonwebtoken`

Implements JSON Web Tokens (JWT) for secure information transmission as JSON objects. Primarily used for user authentication and session management, it issues a JWT upon login, which authenticates further server requests, verifying user identity.

### `slugify`

Slugify is a JavaScript library that is commonly used to create URL-friendly slugs from strings. The Slugify library takes a string as input and transforms it into a URL-friendly slug by removing special characters, converting spaces to hyphens, and ensuring that the resulting string is generally safe for use in a URL.

### `nodemailer`

A module for Node.js applications to allow easy email sending. It simplifies the process of sending emails from within the application, whether it's for user verification emails, password reset links, notifications, or any other email-based communication. The library supports various transport options, including SMTP.

### `validator`

The validator package is a library for string validation and sanitization in JavaScript. It provides a wide range of functions to validate and sanitize strings, making it a useful tool for input validation and data cleaning in applications, particularly in web development.

### `helmet`

The helmet package is a collection of middleware functions for securing Express.js applications by setting various HTTP headers. These headers help protect against common web vulnerabilities by providing an additional layer of security.

### `express-mongo-sanitize`

The express-mongo-sanitize package is a middleware for Express.js applications that helps prevent NoSQL injection attacks by sanitizing user-supplied data before it is used in MongoDB queries. NoSQL injection is a security vulnerability that can occur when untrusted data is used in MongoDB queries without proper validation or sanitization.

### `xss-clean`

The xss-clean package is a middleware for Express.js applications that helps protect against Cross-Site Scripting (XSS) attacks by sanitizing user input. XSS attacks occur when an application allows untrusted data to be included in web pages without proper validation or escaping, potentially leading to the execution of malicious scripts in the context of the user's browser.

---

## Server Development Dependencies

Our project uses a variety of development tools to streamline the development process and ensure code quality. Below is a list of the development dependencies specified in our `package.json` file:

### `eslint`

A static code analysis tool that helps identify and fix patterns in JavaScript code, enhancing consistency and preventing bugs.

### `eslint-config-prettier`

Disables all ESLint rules that conflict with Prettier, ensuring seamless integration of ESLint with Prettier for code formatting.

### `eslint-plugin-jest`

Provides ESLint rules for Jest, helping to enforce best practices and catch common mistakes in Jest test files.

### `eslint-plugin-prettier`

Runs Prettier as an ESLint rule and reports differences as individual ESLint issues, integrating code formatting into the linting process.

### `jest`

A delightful JavaScript testing framework with a focus on simplicity, providing a complete and ready-to-use testing solution.

### `mongodb-memory-server`

Spins up an actual/real MongoDB server programmatically from within Node.js, for testing or mocking during development.

### `nodemon`

A utility that monitors for any changes in your source code and automatically restarts your server, enhancing the development experience.

### `prettier`

An opinionated code formatter that supports multiple languages and integrates with most editors to ensure consistent code style across the project.

### `supertest`

A SuperAgent-driven library for testing HTTP servers, allowing you to test your REST API endpoints.

---

## API Endpoints

### Products

| Method | Routes                   | Functionalities                           | Access   |
| ------ | ------------------------ | ------------------------------------------| ---------|
| GET    | `/api/products`          | Get a list of all products                | Public   |
| GET    | `/api/products/:slug`    | Get details of a specific product by slug | Public   |
| POST   | `/api/products`          | Create a new product                      | Private  |
| PATCH  | `/api/products/:slug`    | Update a specific product by slug         | Private  |
| DELETE | `/api/products/:slug`    | Delete a specific product by slug         | Private  |
| GET    | `/products/new-arrivals` | Get a list of new arrival products        | Public   |
| GET    | `/products/feature`      | Get a list of featured products           | Public   |
| GET    | `/products/relative-products/:categorySlug`      | Get related products           | Public   |
| GET    | `/products/search?k=abc&c=def`      | Get products by keyword and categorySlug           | Public   |

### Categories

| Method | Routes                  | Functionalities                     | Access  |
| ------ | ----------------------- | ----------------------------------- | --------|
| GET    | `/api/categories`       | Get a list of all categories        | Public |
| POST   | `/api/categories`       | Create a new categories             | Private |
| PATCH  | `/api/categories/:slug` | Update a specific category by slug  | Private |
| DELETE | `/api/categories/:slug` | Delete a specific category by slug  | Private |

### Orders

| Method | Routes                        | Functionalities                                  | Access   |
| ------ | ----------------------------- | ------------------------------------------------ | ---------|
| GET    | `/api/orders`                 | Get a list of all orders                         | Private  |
| POST   | `/api/orders`                 | Create a new order                               | Private  |
| GET    | `/api/orders/:orderId`        | Get a specific order by orderId                  | Private  |
| PATCH  | `/api/orders/status/:orderId` | Update the status of a specific order by orderId | Private  |

### Authentication

| Method | Routes                      | Functionalities                                 | Access  |
| ------ | --------------------------- | ----------------------------------------------- | ------- |
| POST   | `/api/auth/register`        | Create a new user account                       | Public  |
| POST   | `/api/auth/login`           | Authenticates a user and issues a JWT token     | Public  |
| POST   | `/api/auth/forgot-password` | Initiates the password recovery process         | Public  |
| POST   | `/api/auth/reset-password`  | Completes password recovery using a reset token | Private |

### Admin Dashboard

| Method | Routes                      | Functionalities                                 | Access  |
| ------ | --------------------------- | ----------------------------------------------- | ------- |
| GET    | `/api/dashboard/summary`    | Get all summary information for admin dashboard | Private |


- `Public Access` - Accessible without requiring user authentication.
- `Private Access` -  Requires user authentication to be accessible.
