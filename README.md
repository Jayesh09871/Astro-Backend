# Astro-Backend
## Backend Assignment: Flow Distribution Algorithm

This repository contains the code for a backend assignment focused on implementing a flow distribution algorithm in Node.js for connecting users with astrologers. The goal is to ensure fair and balanced distribution of users among astrologers while providing flexibility to adjust the flow for top astrologers.

## Requirements

- Design and implement a flow distribution algorithm that allocates users to astrologers in a fair and balanced manner.
- Implement a mechanism to toggle the flow for top astrologers, allowing them to receive more or fewer connections as desired.
- Handle a daily flow of 2000-3000 users and a pool of 500 astrologers efficiently.
- Provide clear documentation explaining the logic behind the algorithm and how to use it.
- Write test cases to validate the functionality of the algorithm.

## Project Structure

The project follows a standard structure for organizing backend code in Node.js:

- `src`: Contains the source code for the backend application.
  - `controllers`: Contains controller functions for handling business logic.
  - `models`: Contains database models for defining data structures.
  - `routes`: Contains route definitions for defining API endpoints.
  - `index.js`: Entry point for the application.
- `test`: Contains test cases for validating the functionality of the algorithm.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/backend-assignment.git
2. Install dependencies:
   ```bash
   npm install
3. Set up MongoDB Atlas:
  - Create a new cluster and database in MongoDB Atlas.
  - Obtain the connection string for your cluster.
  - Replace the connection string in app.js with your own connection string.
4. Start the server:
   ```bash
   npm start
5. The server will start running at http://localhost:8000.

## Contributing
   Contributions are welcome! If you find any issues or have suggestions for improvement, please
   open an issue or create a pull request.

