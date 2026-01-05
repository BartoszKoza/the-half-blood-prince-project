# 🎬 Movie Browser

🔗 **Live demo:**  
https://bartoszkoza.github.io/the-half-blood-prince-project/

Movie Browser is a React application for browsing movies and people using data from **The Movie Database (TMDB)** API.  
The app allows users to explore popular titles, search for movies and people, and view detailed information including ratings, descriptions, cast, and crew.

---

## ✨ Features

- Browse **Popular Movies** and **Popular People**
- **Search** movies and people with pagination
- **Movie details**:
  - rating and vote count
  - production details
  - genres
  - cast and selected crew
- **Person details**:
  - biography
  - date and place of birth
  - movie credits (cast & crew)
- Pagination synced with URL query parameters
- Fully **responsive UI**
- Loading and error states handled gracefully

---

## 🛠 Tech Stack

- **React**
- **React Router**
- **Redux Toolkit**
- **Redux Saga**
- **Styled Components**
- **TMDB REST API**
- **GitHub Pages**

---

## 📁 Project Structure

```txt
src/
  components/
    Container
    Error
    Loading
    Navigation
    NoResults
    Pagination
    PersonTile
    Tile
  core/
    api.js
    GlobalStyle.js
    theme.js
  features/
    MovieDetails
    MovieList
    PersonDetails
    PersonList
  images/
  App.js
  index.js
```
---
## 🧭 Routing

- /movies – list of popular movies

- /movies/:id – movie details view

- /people – list of popular people

- /people/:id – person details view

The default route redirects to /movies.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## DEMO
https://bartoszkoza.github.io/the-half-blood-prince-project/
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

