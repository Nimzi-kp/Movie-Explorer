const express = require("express");
const router = express.Router();
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

router.get("/", (req, res) => {
    res.send("Movie API running");
});

router.get("/movies/:id", async (req, res) => { 
  const { id } = req.params;

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`, 
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmY0ZTZmYjFjYjE1YTUwZTE5N2UzY2RiNzMyYjQ2YyIsIm5iZiI6MTc1MjkxMDg2MS4xNjUsInN1YiI6IjY4N2I0YzBkMzYyODIyNWRmN2Q5ODYxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X72oJCH45r_PLGnZ6uE8Dm5HuibBCp0dx4oEhHNuflI'
    }
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
    console.log(`${id} Movies fetched successfully`);
  } catch (err) {
    console.error(`Error fetching ${id} movie:`, err.message);
    res.status(500).json({ message: "Failed to fetch movie details" });
  }
});

router.get("/search/:val", async (req, res) => { 
  const { val } = req.params;
  
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?query=${val}&include_adult=true&language=en-US&page=1`, 
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmY0ZTZmYjFjYjE1YTUwZTE5N2UzY2RiNzMyYjQ2YyIsIm5iZiI6MTc1MjkxMDg2MS4xNjUsInN1YiI6IjY4N2I0YzBkMzYyODIyNWRmN2Q5ODYxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X72oJCH45r_PLGnZ6uE8Dm5HuibBCp0dx4oEhHNuflI'
    }
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
    console.log(`${val} Name related Movies fetched successfully`);
  } catch (err) {
    console.error(`Error fetching on ${val} relatod movies:`, err.message);
    res.status(500).json({ message: "Failed to fetch movie details" });
  }
});

router.get("/movie/:id", async (req, res) => { 
  const { id } = req.params;
  
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}?&language=en-US`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmY0ZTZmYjFjYjE1YTUwZTE5N2UzY2RiNzMyYjQ2YyIsIm5iZiI6MTc1MjkxMDg2MS4xNjUsInN1YiI6IjY4N2I0YzBkMzYyODIyNWRmN2Q5ODYxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X72oJCH45r_PLGnZ6uE8Dm5HuibBCp0dx4oEhHNuflI'
    }
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
    console.log(`${id} movie fetched successfully`);
  } catch (err) {
    console.error(`Error fetching on ${id} movie:`, err.message);
    res.status(500).json({ message: "Failed to fetch movie details" });
  }
});

module.exports = router;
