const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 4000;


//uploads images through multer functional packages
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '')
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
  })
  
  const upload = multer({ storage: storage })




//post uploads images
app.post('/register',upload.single('image'),(req,res)=>{
    res.status(202);
    res.send('<h2>image is uploaded</h2>');
})

//home routing
app.get('/',(req,res)=>{
    res.status(202);
    res.send('<h2>you are in Home pages</h2>');
})

//form pages routing 
app.get('/register',(req,res)=>{
    res.status(202);
    res.sendFile(__dirname + '/index.html');
})

//error routing if wrong url
app.use((req,res,next)=>{
    res.status(404).json({
        message : 'you are in wrong url'
    })
})
app.listen(PORT, ()=>{
    console.log(`your server is running at http://localhost:${PORT}`);
})