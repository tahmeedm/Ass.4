# E-Commerce Web Application

## Overview
This project is a full-stack E-commerce web application developed using React.js for the frontend and Flask for the backend. The application facilitates user interactions with a dynamic product catalog, user authentication, and secure data management.

## Features
- **User Registration and Authentication**: Securely register and authenticate users using Flask-based RESTful API endpoints.
- **Product Catalog**: Dynamic retrieval and display of product information.
- **Real-time Data Updates**: Seamless integration of backend API calls with React components for real-time updates.

## Technologies Used
- **Frontend**:
  - **React.js**: Utilized for building the user interface and handling dynamic content updates.
  - **Axios**: Used for making HTTP requests to the backend API.
  
- **Backend**:
  - **Flask**: Employed as the web framework for building the backend RESTful API.
  - **Flask-SQLAlchemy**: Used for database management and ORM.
  - **Flask-JWT-Extended**: Ensures secure user authentication and authorization processes.
  
- **Database**: 
  - **SQLite**: Lightweight database for development purposes, can be replaced with PostgreSQL or MySQL in production.

## Installation

### Prerequisites
- Python 3.8+
- Node.js and npm

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/tahmeedm/E-Commerce-Appication.git
    cd E-Commerce-Appication
    ```
2. Set up a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```
4. Run the Flask application:
    ```bash
    export FLASK_APP=app.py
    flask run
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd my-ecommerce-app
    ```
2. Install the required npm packages:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```

## Usage
- Access the application via the default Flask server at `http://127.0.0.1:5000/`.
- The React frontend will be available at `http://localhost:3000/`.

## Project Structure
- **Backend**: 
  - `app.py`: Entry point for the Flask application.
  - `models.py`: Database models.
  - `routes.py`: API endpoint definitions.
  
- **Frontend**:
  - `src/components`: React components.
  - `src/pages`: React pages.
  - `src/services`: Axios service for API calls.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgements
Special thanks to the contributors and open-source libraries used in this project.

Created by Tahmeed Mahmud. For more details, visit my [GitHub](https://github.com/tahmeedm).
