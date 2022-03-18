var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  document.querySelector("H1").textContent=`Latitude : ${crd.latitude}`;
  document.querySelector("H2").textContent=`Longitude: ${crd.longitude}`;
  document.querySelector("H4").textContent=`More or less ${crd.accuracy} meters.`;
  if(crd.latitude>=27.215312 && crd.latitude<=27.215452){
    if(crd.latitude>=27.214898 && crd.latitude<=27.215819){
      if(crd.longitude>=78.015170 && crd.longitude<=78.016282){
        if(crd.longitude>=78.015561 && crd.longitude<=78.015711){
            document.querySelector("p").textContent=`U Made it. Your Clue is : Blah Blah Blah`;
        }else{
          document.querySelector("p").textContent=`Not Yet Keep Going`;
        }
      }else{
        document.querySelector("p").textContent=`Not Yet Keep Going`;
      }
    }else{
      document.querySelector("p").textContent=`Not Yet Keep Going`;
    }
  }else{
    document.querySelector("p").textContent=`Not Yet Keep Going`;
  }
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
function begin(){
  navigator.geolocation.getCurrentPosition(success, error, options);
}
navigator.geolocation.getCurrentPosition(success, error, options);
