const ResumeParser = require('simple-resume-parser');
const express = require('express')
const app = express();
var cors = require('cors')
const port = 8008;
app.use(cors())
app.get('/parser', (req, res) => {
    const resume = new ResumeParser("./resume.pdf")
    //Convert to JSON Object
  resume.parseToJSON()
  .then(data => {
    console.log('data! ', data);
    res.send(data)
  })
  .catch(error => {
    console.error(error);
  });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});