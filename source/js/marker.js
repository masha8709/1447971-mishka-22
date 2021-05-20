function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 59.8909887, lng: 30.5316441 },
  });
  const image =
    "img/svg/map-marker.svg";
  const beachMarker = new google.maps.Marker({
    position: { lat: 59.8909887, lng: 30.5316441 },
    map,
    icon: image,
  });
}
