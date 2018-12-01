function initMap() {
    var moscowCity = {
        lat: 55.7469862,
        lng: 37.5392672
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: moscowCity,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: moscowCity,
        map: map
    });
}