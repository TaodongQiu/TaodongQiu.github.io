$(document).ready(function(){
    $("button#get_data").click(function() {
        var table1_items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/app2R88MfJ0gFM8n4/Movies?api_key=key0WrAysAprBhXUB&maxRecords=3&view=Grid%20view";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   table1_items = [];
                       table1_items.push(value.fields.Name);
                       table1_items.push(value.fields.Year);
                       table1_items.push(value.fields.Douban_rating);
                       table1_items.push(value.fields.Director);
                       table1_items.push(value.fields.Actors);
                       table1_items.push(value.fields.IMDB_link);
                       table1_items.push(value.fields.Box_Office);
                       table1_dataSet.push(table1_items);
                }); // end .each


             $('#table1').DataTable( {
                 data: table1_dataSet,
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



         var table2_items = [];
         var i = 0;
         var airtable_read_endpoint =
         "https://api.airtable.com/v0/app2R88MfJ0gFM8n4/Movies?api_key=key0WrAysAprBhXUB&maxRecords=3&view=Grid%20view";
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
                           label: 'Box office'
                       },
                     }
                 });

          }); // end .getJSON
       }); // end button

}); // document ready
