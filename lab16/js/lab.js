// Define the API endpoint
let endpoint = "https://api.nasa.gov/planetary/apod";

// Configure the AJAX request
let ajaxConfig = {
    url: endpoint, // API URL
    type: "GET", // HTTP method
    dataType: "json",
    data: {
      api_key:"kZyabAD0PcwPuAkgAOBB2yZPiu2QwfizgL1UMrpp",
      count: 1,
      // API token
    },
  success: function(data) { 
      let record = data[0];// Success handler
      console.log(data); 
        $("#output").append("<h2>" + record.title);
        $("#output").append(`<img src= '${record.url}' />`);
        $("#output").append("<p>" + record.explanation);
    }, 
    error: function(xhr, status, error) { // Error handler
      console.error(error); 
    } 
  };
  
  // Send the AJAX request
  $.ajax(ajaxConfig);