const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

const MONGO_LOCAL = process.env.DATABASE_LOCAL;

mongoose
  .connect(MONGO_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => console.log('DATABASE CONNECTED'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`APP RUNNING ON PORT ${PORT}`));
