let app = require("./factory");
let port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Your App is hosted at http://localhost:${port}`);
});
