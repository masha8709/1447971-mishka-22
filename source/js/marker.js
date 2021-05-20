function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 30.321008, lng: 59.9387809 },
  });
  const image =
    "img/svg/map-marker.svg";
  const beachMarker = new google.maps.Marker({
    position: { lat: 30.321008, lng: 59.9387809 },
    map,
    icon: image,
  });
}
