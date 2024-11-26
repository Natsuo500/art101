/**
 * Author:    Bryan Galvan
 * Created:   11.25.2024
 * 
 * (c) Copyright by Blub Corp.
 **/

document.getElementById('touch').addEventListener('click', function() {
// Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://yesno.wtf/api",
        // The data to send (will be converted to a query string)
        data: { 
                // here is where any data required by the api 
                //   goes (check the api docs)
                id: 123,
                api_key: "blahblahblah",
            },
        type: "GET",

        dataType : "json",

        success: function(data) {
            // do stuff
            console.log(data);

            var existingImg = document.getElementById('myImage');
            if (existingImg) {
                document.body.removeChild(existingImg);
            }
                var img = new Image();
                img.src = data.image; // url of the gif
                document.body.appendChild(img);
                img.id = 'myImage';
            
        },

        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }

    })
})