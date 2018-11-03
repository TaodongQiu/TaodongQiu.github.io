$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/app2R88MfJ0gFM8n4/Movies?api_key=key0WrAysAprBhXUB";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Name);
                       items.push(value.fields.Year);
                       items.push(value.fields.Douban_rating);
                       items.push(value.fields.Director);
                       items.push(value.fields.Actors);
                       items.push(value.fields.IMDB_link);
                       items.push(value.fields.Box_Office);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#example').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Name",
                       defaultContent:""},
                     { title: "Year",
                         defaultContent:"" },
                     { title: "Douban rating",
                       defaultContent:"" },
                     { title: "Director",
                       defaultContent:""},
                     { title: "Actors",
                         defaultContent:""},
                     { title: "IMDB link",
                       defaultContent:""},
                     { title: "Box Office",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button



         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/app2R88MfJ0gFM8n4/Movies?api_key=key0WrAysAprBhXUB";
         var table2_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table2_items = [];
                        table2_items.push(value.fields.Name);
                        table2_items.push(value.fields.Box_Office);
                        table2_dataSet.push(table2_items);
                        console.log(table2_items);
                 }); // end .each
                 console.log(table2_dataSet);

                var chart = c3.generate({
                     data: {
                         columns: table2_dataSet,
                         type : 'bar'
                     },
                     axis: {
                       x: {
                           label: 'Name'
                       },
                       y: {
                           label: 'Box Office'
                       },
                     }
                 });

          }); // end .getJSON
       }); // end button

        // $.getJSON('http://localhost/d756a/data_export.json/Computer+TV', function(obj) {

}); // document ready
