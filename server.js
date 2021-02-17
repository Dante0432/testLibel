const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({
  path: "./config.env",
});

const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@parapruebas.rpa9p.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on mode ${process.env.NODE_ENV} on port ${port}...`);
});
