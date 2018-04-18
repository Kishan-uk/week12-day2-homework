const MapWrapper = function(container, centre, zoomLevel) {

  this.googleMap = new google.maps.Map(container, {
    center: centre,
    zoom: zoomLevel
  });

  this.markers = [];

}

MapWrapper.prototype.addMarker = function (coords){


  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords
  });
  this.markers.push(marker);
};

MapWrapper.prototype.addClickListener = function (){

  console.log(this);

  google.maps.event.addListener(this.googleMap, 'click', (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.addMarker({lat: lat, lng: lng})
  });
}

MapWrapper.prototype.addInfoWindow = function (coords, contentText){

  const window = new google.maps.InfoWindow({
    map: this.googleMap,
    position: coords,
    content: contentText,
  });

}
