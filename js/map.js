var image = $('#inferno');

    image.mapster(
    {
        fillOpacity: 0.4,
        fillColor: "d42e16",
        stroke: true,
        strokeColor: "3320FF",
        strokeOpacity: 0.8,
        strokeWidth: 4,
        singleSelect: true,
        mapKey: 'name',
        listKey: 'name',
        onClick: function (e) {
            //var newToolTip = defaultDipTooltip;
            
            // update text depending on area selected          
        },        
    });
   
   $( function() {
    $( document ).tooltip();
  } ); 