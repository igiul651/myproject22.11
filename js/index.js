
function initMap() {
    
    const lviv = {lat: 49.800, lng: 24.012};
    
    const map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: uluru,});
   
    var marker = new google.maps.Marker({position: uluru, map: map});
  }