const request = require('request')
const geoCode=(address,callback)=>
{
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicmFqZXNoMTExMTExIiwiYSI6ImNrajJoNW9scjU1MmMyeWxiZTZkOGx5b2sifQ.6nrnpSNfu5KfBvMVeKYPIw&limit=1'

    request({ url: geocodeURL, json: true }, (error, response) => {
        if(error){
            callback('Unable to Connect With Waether Services',undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find',undefined)
        }else{
            callback(undefined,{
                latitude :response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                Location: response.body.features[0].placeName
            })
           
           
        }
       
     })
    
    
}

module.exports=geoCode