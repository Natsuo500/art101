// Define the API endpoint
let endpoint = "https://api.nasa.gov/planetary/apod";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  type: "GET", // HTTP method
  dataType: "json",
  data: {
    api_key:"NP37VY8H9DzYjtBUwDLnc3k0nJF9OlQ5DAQ66FBR", // API token
    count: 1,
  },
  success: function(data) { // Success handler
    let record = data[0]; 
    $("#output").append("<h2>" + data.title);
    $("#output").append(`<img src='${data.url}' />`);
    $("#output").append("<p>" + record.explanation);
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 
  } 
};

// Send the AJAX request
$.ajax(ajaxConfig);
