let loc=document.getElementById("location");
let tempicon=document.getElementById("temp.icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search.input");
const searchButton=document.getElementById("search.button");

searchButton.addEventListener('click',(e)=>
{

    e.preventDefault();
    getweather(searchInput.value);
    searchInput.value='';

});


const getweather=async(city)=>
{

  try{
    
    const Response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={16d5bcad0bdead7db5ea377e9d6ace03}`,
    { mode:"cors" }
    );
    const weatherData= await Response.json();
    console.log(weatherData);
    const name=weatherData;
    const feels_like=weatherData.main;
    constid,name=weatherData.weather[0];
    loc.textContent=Name;
    climate.textContent=main;
    tempvalue.textContent=math.round(feels_like-273)

    if(id<300 && id>200)

    {
        tempicon.src="./icons/thunderstorm.svg"
    }

  else  if(id<400 && id>300)

    {
        tempicon.src="./icons/cloud.solid.svg"
    }

 else   if(id<600 && id>500)

    {
        tempicon.src="./icons/Rain.svg"
    }

 else   if(id<700 && id>500)

    {
        tempicon.src="./icons/snow.svg"
    }

else   if(id<800 && id>700)

    {
        tempicon.src="./icons/clouds.svg"
    }

 else   if(id==800)
    {
        tempicon.src="./icons/clouds-and-sun.svg"
    }



  }

catch(error)
{
    alert("city not found")
}

}


window.addEventListener("load",()=>{


let long;
let lat;

if(navigator.geolocation)

{

    navigator.geolocation.getCurrentPosition((position)=>

{
    long=position.coords.longitude;
    lat=position.coords.latitude;
    const proxy="https://www.npmjs.com/package/cors-anywhere"


     const api=`$(proxy)https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude={part}&appid={16d5bcad0bdead7db5ea377e9d6ace03} `

     fetch(api).then((Response)=>{

        return Response.json();
     })


     .then(data =>
        {
            const{name}=data;
            const{feels_like}=data.main;
            const{id}=data.weather[0];

            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=Math.round(feels_like-273);

            if(id<300 && id>200)

            {
                tempicon.src="./icons/thunderstorm.svg"
            }

          else  if(id<400 && id>300)

            {
                tempicon.src="./icons/cloud.solid.svg"
            }

         else   if(id<600 && id>500)

            {
                tempicon.src="./icons/Rain.svg"
            }

         else   if(id<700 && id>500)

            {
                tempicon.src="./icons/snow.svg"
            }

        else   if(id<800 && id>700)

            {
                tempicon.src="./icons/clouds.svg"
            }

         else   if(id==800)
            {
                tempicon.src="./icons/clouds-and-sun.svg"
            }

            console.log(data);



        })



}
    
    
    )}
}



)