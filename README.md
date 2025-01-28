# Cloud-Based Web Application Project

This repository contains the code for a **Cloud-Based Web Application**, developed as part of a university assignment. The project combines several technologies and tools to create a fully functional web application, leveraging the following:

- **React**: Frontend development
- **JavaScript**: Core language for frontend and backend logic
- **Node.js**: Backend development and server-side logic
- **NGINX**: Web server and reverse proxy setup
- **API**: RESTful API for communication between frontend and backend
- **Sequelize**: ORM for interacting with the database (SQL-based)
- **Docker**: Containerization of the application for development, testing, and deployment

## Technologies Used:
- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js, Sequelize (ORM)
- **Database**: PostgreSQL (used with Sequelize for data management)
- **Web Server**: NGINX
- **Containerization**: Docker

## Project Overview:
This cloud-based web application demonstrates how to set up a full-stack environment in a Docker container. The goal of the project is to simulate a real-world production environment with a web application that handles dynamic content and allows communication between a React frontend and a Node.js backend.

### Key Features:
- **Frontend**: A modern, responsive React application interacting with the backend API to display data dynamically.
- **Backend**: A Node.js API server handling requests, interacting with a PostgreSQL database via Sequelize.
- **NGINX**: Used as a reverse proxy server to manage traffic and improve performance.
- **Docker**: All components of the application (frontend, backend, database, NGINX) are containerized to provide an isolated environment for easy deployment.

## Getting Started:

### Prerequisites:
- [Docker](https://www.docker.com/) installed on your local machine.
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed (for local development without Docker).

### Installation Steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   cd your-repository-name

### Run the application with Docker

    docker-compose up --build

###  Access the Application

    http://localhost:3000


