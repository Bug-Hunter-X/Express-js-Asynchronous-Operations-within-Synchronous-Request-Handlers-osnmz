const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    // ... some database operation to fetch user data ...
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error(error.stack);
    res.status(500).send('Something went wrong!');
  }
});
//The error handling middleware is no longer needed because the try-catch block handles errors within the request handler itself.