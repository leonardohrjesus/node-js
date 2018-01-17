const express = require('express')

const app = express()
const pot = process.env.PORT || 3000

app.get('/',(req,res) => {
	res.send('HELLO WORLD NA UMBLER')
	})
	
app.listen(port,function(){
	console.log('app listeing on port ${port}')
	})
	