var express=require('express')
var app=express()

app.get('/',function(request,response){
    response.send('Hello World,'+new Date().toLocaleString())

})

app.listen(8988);