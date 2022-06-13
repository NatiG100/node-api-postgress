const express = require('express');
const bodyParser = require('body-parser');
const db = require('./quries');
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
);

app.get('/',(request,response)=>{
    response.json({info:'Node.js, Express, and Postgress API'})
});


app.get('/users',db.getUsers);
app.get('/user/:id',db.getUserById);
app.post('/users',db.createUser);
app.put('/users/:id',db.updateUser);
app.delete('/users/:id',db.deleteUser);

app.listen(port, ()=>{
    console.log(`app running on port ${port}`);
});
