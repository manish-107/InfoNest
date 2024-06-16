# InfoNest

InfoNest is a TypeScript-based full-stack web application designed to organize and manage information efficiently.
It utilizes React in the frontend, Cloudflare Workers in the backend, and PostgreSQL with Prisma ORM for data storage.
JWT authentication ensures secure user sessions, and Zod is used for type-safe validation on the frontend.

## Features

- **Frontend**: Built with React and TypeScript, leveraging Zod for type inference and validation.
- **Backend**: Powered by Cloudflare Workers, providing a scalable and serverless architecture.
- **Database**: Uses PostgreSQL with Prisma ORM, incorporating connection pooling for efficient data operations.
- **Authentication**: Implements JWT (JSON Web Tokens) for secure authentication and authorization.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/InfoNest.git
   cd InfoNest
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up PostgreSQL database:
   - Create a PostgreSQL database and note down the connection URL.
   - Configure the database connection details in the Prisma schema file (`prisma/schema.prisma`).

4. Start the frontend and backend servers:
   ```bash
   # Start the frontend (React)
   npm start

   # Start the backend (Cloudflare Workers)
   # Ensure you have configured Cloudflare Workers environment variables for local development.
   ```

5. Access the application at `http://localhost:3000`.

## Deployment

To deploy InfoNest to production using Cloudflare Workers:

1. Configure environment variables for production settings.
2. Deploy using Cloudflare Workers CLI or through the Cloudflare dashboard.

## Contributing

Contributions are welcome! If you'd like to contribute to InfoNest, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Submit a pull request.
