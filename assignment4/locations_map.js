    var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})

    var map = L.map('map')
          .addLayer(mapboxTiles)
          .setView([22.287111, 114.191667], 13);

    var items = [];
    var airtable_read_endpoint = "https://api.airtable.com/v0/app2R88MfJ0gFM8n4/Movies?api_key=key0WrAysAprBhXUB";
    var data = [];
    $.getJSON(airtable_read_endpoint, function(result) {
           $.each(result.records, function(key,value) {
               items = {};
                   items["name"] = value.fields.Name;
                   items["url"] = value.fields.Intro_link;
                   items["image_url"] = value.fields.photo;
                   items["latitud"] = value.fields.Lat;
                   items["longitud"] = value.fields.Lng;
                   data.push(items);
                   console.log(items);
            }); // end .each
    }); // end getJSON
</script>
<script>
function show_districts(){

  for (var i in data) {
      var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
      L.marker( latlng )
          .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name + '</a>' )
          .addTo(map);
  }
}
