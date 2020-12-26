const express = require('express')
const path= require('path')
const hbs = require('hbs')
const foreCast=require('./utils/getForecast')
const { resolveNaptr } = require('dns')

const publicDirPath=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')

const app = express()

const port = process.env.PORT || 3000
app.set('views',viewpath)
app.set('view engine','hbs')
hbs.registerPartials(partialpath)
app.use(express.static(publicDirPath))

//code to setop Dynamic Index page
app.get('',(req,res)=>{
    res.render('index',{title:'Weather'})
})

//Dynamic Abou page
app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page',name:'rajesh Sharma'})
})


app.get('/weather',(req,res)=>{
   if(!req.query.address)
   {
       return res.send('Address Must Needed')
   }
   foreCast(req.query.address,(eror,resp)=>
   {
       if(resolveNaptr)
       {
        res.send(resp)
       }
   })
    
})



app.get('/about/*',(req,res)=>{0
    res.render('404',{error:"About Not Found"})
})

app.get('*',(req,res)=>{0
    res.render('404',{error:"Page Not Found"})
})

app.listen(port,()=>console.log('server started on' + port));