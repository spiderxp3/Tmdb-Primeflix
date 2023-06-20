# Full Stack Movie Website - TMDB-Primeflix
TMDB-Primeflix is a full-stack movie website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and the TMDB API. It provides a platform for movie enthusiasts to browse, search, and add their favorite movies to a personalized section.

[![React](https://img.shields.io/badge/React-17.0.2-blue)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4.6-green)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-lightgrey)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-14.17.0-brightgreen)](https://nodejs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-v4.12.1-blue)](https://material-ui.com/)
[![JSON Web Tokens](https://img.shields.io/badge/JSON%20Web%20Tokens-v8.5.1-green)](https://jwt.io/)

![TMDB API](https://img.shields.io/badge/TMDB%20API-Enabled-brightgreen) 
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-brightgreen)

![Screenshot 2023-06-21 010649](https://github.com/spiderxp3/Tmdb-Primeflix/assets/91022462/9aca9c74-31ce-4ad4-8809-be49dbfe5bbe)
![Screenshot 2023-06-21 010932](https://github.com/spiderxp3/Tmdb-Primeflix/assets/91022462/67b6c502-d8f7-4163-9dc9-9689581888f9)
![Screenshot 2023-06-21 011043](https://github.com/spiderxp3/Tmdb-Primeflix/assets/91022462/a0cbaad2-ca8d-4e06-8089-4021681beaad)
![Screenshot 2023-06-21 011203](https://github.com/spiderxp3/Tmdb-Primeflix/assets/91022462/47fd7aab-6400-4d5a-b90b-c0ebe155b062)


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Users can create an account and log in to access personalized features.
- **Browse Movies**: Users can browse through a vast collection of movies fetched from the TMDB API.
- **Search Functionality**: Users can search for specific movies using the search bar.
- **Favorites**: Users can add movies to their favorites list for easy access.
- **Delete Favorites**: Users can remove movies from their favorites list.
- **Leave Reviews**: Users can leave reviews for movies.
- **Delete Reviews**: Users can delete their own reviews.
- **Dark and Light Themes**: The application supports two UI themes - dark and light - to provide a personalized user experience.
- **Responsive Design**: The application is designed to be responsive and adapt to different screen sizes and devices.

## Technologies Used

- **MongoDB**: A NoSQL database used for storing user data and their favorite movies.
- **Express.js**: A web application framework for Node.js, used to build the backend of the website.
- **React.js**: A JavaScript library for building user interfaces, used to build the frontend of the website.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used to build the server-side of the website.
- **TMDB API**: An API that provides access to a vast database of movie-related information.

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Fork and clone the repository or download as zip and unzip on your machine.
- Open the project in your preferred code editor.
- Go to the terminal and navigate to the project directory.
-  Install the client-side dependencies by running the following command in the terminal:


In the first terminal
```
$ cd client
$ npm install
```

Start the client by running the following command:

```
$ npm run start
```

In the second terminal, navigate to the project directory and go to the server folder:

```
$ cd server
```

Set the environment variables in a .env file:

```
MONGODB_URL=your_mongodb_connection_url
PORT=5000
TOKEN_SECRET=your_token_secret
TMDB_BASE_URL=your_tmdb_base_url
TMDB_KEY=your_tmdb_key
```

- Install the server-side dependencies by running the following command in the terminal:

```
$ npm install
```

-  Start the server by running the following command:

```
$ npm start
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/spiderxp3/Tmdb-Primeflix](https://github.com/spiderxp3/Tmdb-Primeflix)

Please let me know if there's anything else I can assist you with.
