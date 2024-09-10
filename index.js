const Express = require('express');
const cors = require('cors');
const path = require('path');
const app = Express();
const PORT = 5000;
app.use(cors())
app.use(Express.static(path.join(__dirname, 'Frontend')));
app.get('**', (req, res) => {
  res.sendFile(path.join(__dirname, 'Frontend', 'index.html'));
})

app.listen(PORT, () => {
  console.log("Backend Started at heo Port ", PORT);
  
})


