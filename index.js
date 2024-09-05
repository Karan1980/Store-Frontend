const Express = require('express');
const cors = require('cors');
const app = Express();
const PORT = 5000;
app.use(cors())

app.get('/', (req, res) => {
    res.json({status: 'Successfull',statusCode:200})
})

app.listen(PORT, () => {
  console.log("Backend Started at Port", PORT);
  
})


