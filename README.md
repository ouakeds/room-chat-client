# React Frontend for Room Chat Socket

This React frontend is designed to work with the Room Chat Socket server, allowing users to create chat rooms and communicate in real-time with other users.

## Stack

- ReactJS (v18)
- Material-UI library for the UI components

## Usage

To use this frontend, you will need to have the Room Chat Socket server running. The frontend is configured to connect to the server at the API URL specified in the environment variable REACT_APP_API_URL. You can set this variable in a .env file in the root directory of the project.

To start the frontend, run the following commands in the terminal:

```bash
npm install
npm start
````

This will start the development server at http://localhost:3000.

Once the frontend is running, you can create a chat room by clicking on the "Create a room" button on the landing page. This will take you to the chat room page, where you can enter a username and start chatting with other users in real-time.

## Dependencies
This project relies on the following dependencies:

- React (v18)
- react-dom (v18)
- react-router-dom (v6)
- socket.io-client (v4)
- Material-UI (v5)

##  Configuration
The frontend relies on the following environment variables for configuration:

```.env
REACT_APP_API_URL: The URL of the Room Chat Socket server.
````

## License
This project is licensed under the MIT License. See the LICENSE file for more information.