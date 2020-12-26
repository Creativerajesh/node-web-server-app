const request = require('request')

const getForecast=(city,callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(city)+'&appid=63cf0f88df7464a92b12e7a07538b1dd'
request({ url: url,json:true }, (error,response,body) => {
if(error){
    callback('Unable to Connect With Waether Services',undefined)
}else if(body.cod!=200){
    callback('Location does not Exits Try Again !!!!',undefined)
}else{

    callback(undefined,response)
    // callback(undefined,`The Current Wather of ${body.name}
    // Temprature : ${body.main.temp}
    // Presure : ${body.main.humidity}
    // Sky : ${body.weather[0].description}
    // `)
}


})

}

module.exports=getForecast;



// const url = 'https://api.openweathermap.org/data/2.5/weather?q=Vapi&appid=63cf0f88df7464a92b12e7a07538b1dd'

// request({ url: url,json:true }, (error,response,body) => {
// if(error){
//     console.log('Unable to Connect With Waether Services')
// }else if(body.cod!=200){
//     console.log('Location does not Exits Try Again !!!!')
// }else{


//     console.log(`The Current Wather of ${body.name}
//     Temprature : ${body.main.temp}
//     Presure : ${body.main.humidity}
//     Sky : ${body.weather[0].description}
//     `)
// }


// })
