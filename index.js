const express = require('express');
const app = express();
const PORT = 3000;

const authRoute = require('./routes/auth');
const topicsRoute = require('./routes/topics');

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/topics', topicsRoute);

app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
})
