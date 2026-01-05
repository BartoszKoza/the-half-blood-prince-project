# 🎬 Movie Browser

🔗 **Live demo:**  
https://bartoszkoza.github.io/the-half-blood-prince-project/

Movie Browser is a React application for browsing movies and people using data from **The Movie Database (TMDB)** API.  
The app allows users to explore popular titles, search for movies and people, and view detailed information including ratings, descriptions, cast, and crew.

![Movie Browser Demo](./screenshots/demo.gif)

*Demo: navigating from movie list to movie details and actor profile.*

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
- Fully responsive UI
- Loading and error states handled gracefully

### Search preview

![Search results](./screenshots/search-movie.png)

*Movie search with live results*

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


## 🚀 Getting Started
### Requirements
- Node.js (LTS recommended)
- npm

### Installation

```
npm install
```

### Development
```
npm start
```

### Production Build
```
npm run build
```

### Deployment (GitHub Pages)
```
npm run deploy
```

## 🔧 API Configuration
The application uses The Movie Database (TMDB) API.
API calls are centralized in src/core/api.js.

⚠️ Note:
The API key is currently stored directly in the source code.
A recommended improvement would be moving it to environment variables (.env).

## 👥 Authors
Group project created as a final course project:
- Bartosz
- Kamil 
- Sandra

## 🔮 Possible Improvements
- Move TMDB API key to environment variables

- Improve API URL handling

- Add caching for genres

- Add unit and integration tests

- Improve accessibility (ARIA labels, keyboard navigation)

- Add skeleton loaders instead of spinners

## 📄 License
Educational project.

