window.addEventListener('load',()=>
{
  let longitude;
  let latitude;
  let temperatureDescription=document.querySelector('.temperature-description');
  let temperatureDegree=document.querySelector('.temperature-degree');
  let locationTimezone=document.querySelector('.location-timezone'); 
  let icon=document.getElementById('icon');
  if(navigator.geolocation)
  {
   navigator.geolocation.getCurrentPosition(position =>{
        //    console.log(position); 
           longitude=position.coords.longitude;
           latitude=position.coords.latitude;
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API}&units=metric`;
           const api2=`https://api.weatherstack.com/current?access_key=7ee22feb018c461755ad641b21e672b7&query=NewYork`;
        //   console.log(api2);
        //   console.log(api);
          fetch(api).then(response =>{
            return response.json();
             
      }).then(data =>{
          console.log(data);
        //   console.log(data.main.temp);
          temperatureDegree.textContent=data.main.temp;
          console.log(data.weather);
         const details= data.weather[0].description;
         const details1=document.createElement('span');
         details1.innerHTML=details;
          const div1=document.createElement('div');
             div1.appendChild(details1);
             temperatureDescription.appendChild(div1);
              console.log(data.name);
              console.log(data.sys.country);
            //  https://openweathermap.org/img/wn/50n@2x.png
             const currIcon= data.weather[0].icon;
             const iconAppend=`https://openweathermap.org/img/wn/${currIcon}@2x.png`;
             console.log(currIcon);
             console.log(iconAppend);
             var img1 = document.createElement('img');
             img1.src=iconAppend;
             icon.appendChild(img1);
            locationTimezone.textContent= data.name+'/'+data.sys.country;
            setIcons(icon,document.querySelector('.icon'));
            var skycons = new Skycons({"color": "pink"});

            skycons.add(document.getElementById("icon2"), Skycons.HAZE);
            skycons.play();
      })
   });
  
   

  }
  else{
    h1.textContent="enable geolocation"
  }
    function setIcons(icon,iconId)
    {
      var skycons = new Skycons({"color": "pink"});
      console.log(skycons);
      skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
      skycons.play();
      return skycons.set(iconId,Skycons[icon]);
    }
});