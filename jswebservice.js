var express=require('express')
var app=express()

app.get('/',function(request,response){
    response.send('Hello World,'+new Date().toLocaleTimeString())

})

app.get('/hello',function(request,response){
    response.send('Hello World, how are you?')

})

app.get('/emp',function(request,response){
    data=[{"emp_id":1,"emp_name":"Anurag","emp_salary":1000},{"emp_id":1,"emp_name":"Anurag","emp_salary":1000},{"emp_id":1,"emp_name":"Anurag","emp_salary":1000}]
    response.send(data)

})

app.listen(8988);
console.log("Server is running on node 8988")