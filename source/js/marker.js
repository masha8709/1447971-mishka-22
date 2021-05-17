function initMap() {
  const image = document.querySelector('.contacts__map-marker');
  const beachMarker = new google.maps.Marker({
    position: { lat: -38, lng: 151.274 },
    icon: image,
  });
}
