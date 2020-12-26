
const weatherForm=document.querySelector('form')
const msg=document.getElementById('message')
const val=document.querySelector('input')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    getData(val.value)
})


const getData=(city)=>{
fetch('/weather?address='+city).then((response)=>{
    response.json().then((data)=>{

        console.log(data);
      msg.innerHTML =`

      Location : ${data.body.name}  <br>
      Humidity : ${data.body.main.humidity}<br>
      Temp     : ${data.body.main.temp}<br>
      Clouds      : ${data.body.weather[0].description}
      `
    }).catch((e)=>  msg.innerHTML ='Inavlid Search ! Try Agian')
})
}


