const express = require('express');
const app = express();
const curdOpsRoutes = require('./routes/curdOpsRoutes')

app.use('/lotus',curdOpsRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
