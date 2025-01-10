# My API App

This is a simple Express API application that connects to a MongoDB database using Mongoose. The application provides endpoints to manage invoices.

## Project Structure

```
my-api-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains the controllers for handling requests
│   │   └── invoiceController.js # Controller for invoice-related operations
│   ├── models                # Contains Mongoose models
│   │   └── invoice.js        # Mongoose model for invoices
│   ├── routes                # Contains route definitions
│   │   └── invoiceRoutes.js   # Routes for invoice-related API endpoints
│   └── config                # Configuration files
│       └── db.js            # Database connection configuration
├── package.json              # NPM package configuration
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-api-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. Start the application:
   ```
   npm start
   ```

## API Usage

### Get All Invoices

- **Endpoint:** `GET /invoices`
- **Description:** Retrieves all invoices from the database.
- **Response:** Returns a JSON array of invoice objects.

## License

This project is licensed under the MIT License.