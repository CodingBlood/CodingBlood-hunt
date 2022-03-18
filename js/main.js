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
