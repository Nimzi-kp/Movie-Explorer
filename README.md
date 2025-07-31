
# 🎬 Movie Explorer

**Movie Explorer** is a full-stack web application that allows users to search and explore movies using data from [The Movie Database (TMDb)](https://www.themoviedb.org/). It features a modern frontend built with **React** and a backend using **Node.js** and **Express**.

---

## 📁 Project Structure

```

Movie-Explorer/
├── backend/         # Node.js + Express backend (TMDb API proxy)
├── frontend/        # React frontend
├── LICENSE
└── README.md

````

---

## 🚀 Features

- 🔍 Search for movies by name
- 🎞️ Browse popular and upcoming movies
- 📝 View detailed movie information including:
  - Overview
  - Genres
  - Runtime
  - Rating
  - Release date
  - Production companies
- 🌐 Direct links to IMDb and official movie websites

---

## 🧑‍💻 Tech Stack

### Frontend:
- React
- React Router
- Axios
- React Responsive Carousel

### Backend:
- Node.js
- Express
- Axios
- CORS

### External API:
- [TMDb API](https://developer.themoviedb.org/docs)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Nimzi-kp/Movie-Explorer.git
cd Movie-Explorer
````

---

### 2. Run the Backend

```bash
cd backend
npm install
npm run start (or) npm run dev
```

This starts the server on:

```
http://localhost:3000
```

---

### 3. Run the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

This starts the React app on:

```
http://localhost:5173
```

---

## 🔗 Backend API Endpoints

| Route              | Description             |
| ------------------ | ----------------------- |
| `/api/`            | Base test route         |
| `/api/health`      | Health check            |
| `/api/movies/:id`  | Get movie by ID         |
| `/api/search/:val` | Search movies by title  |
| `/api/movie/:id`   | Get detailed movie info |

> ⚠️ TMDb Bearer token is hardcoded in backend API headers.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* [The Movie Database (TMDb)](https://www.themoviedb.org/) — for providing an excellent free movie API.

---

## ✨ Future Improvements

* Add favorites feature
* Pagination for search results
* User accounts and login system
* Better 404/Error pages
* Dark mode support

---

## 🤝 Contributing

Pull requests and issues are welcome. If you find a bug or have a feature suggestion, feel free to open an issue or submit a PR.


