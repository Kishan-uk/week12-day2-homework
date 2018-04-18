document.addEventListener('DOMContentLoaded', () => {

  const mapContainer = document.querySelector('#main-map');

  const centre = {lat:40.712784, lng: -74.005941};

  const mainMap = new MapWrapper(mapContainer, centre, 10);

  const centreText = "New York City - The city that never sleeps!"

  mainMap.addMarker(centre);
  mainMap.addMarker({lat: 55.946962, lng: -3.202958});
  mainMap.addClickListener();
  mainMap.addInfoWindow(centre, centreText);
});
