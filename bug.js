const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

//Error handling middleware should be placed at the end of the route definitions
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});