const express = require('express');
const morgan = require('morgan-body')
const cors = require('cors')

port = process.env.PORT || 5000

const app = express()
morgan(app)
app.use(express.json())
app.use(cors())

const users = [
    {
        username : "yahbouss",
        password : "14012001"
    },
    {
        username : "spitingo",
        password : "23071969"
    }
]

app.get('/', (req,res)=>{
    res.send('nigger')
})

app.post('/login',(req,res)=>{
    const {username, password} = req.body
    const found = users.filter(user => user.username == username)
    if (found[0] != undefined){
        found[0].password === password ? res.send(true) : res.send(false) 
    }else{
        res.send("User not found !")
    }
})


app.listen(port, () => {
    console.log(`Server started on localhost:${port}`);
});