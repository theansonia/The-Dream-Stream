const express = require('express');
const app = express();
const path = require('path');

// uncomment the below for proxy challenge


// app.get('/api', (req, res) => {
//   return res.status(200);
// });

// if (process.env.NODE_ENV === 'production') {
app.use('/bundle', express.static(path.join(__dirname, '../bundle')))

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
// };
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

