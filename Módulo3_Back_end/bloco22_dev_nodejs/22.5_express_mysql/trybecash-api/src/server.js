require('dotenv').config();
const app = require('./app');

const PORT = 3001;

app.listen(PORT, () =>  {
  console.log(`TrybeCash API online on port ${PORT}`);
  console.log(`Environment variable for $USER: ${process.env.USER}`);
});
