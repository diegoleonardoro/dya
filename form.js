// This JS file is bounded to form.html. 

filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    console.log("jiji", x.length)
    if (c = "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        // console.log("jeje", x[i])

        console.log(x[i].className.indexOf(c))

        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show")
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.lenght; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i] }
    }
}


function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    //console.log(arr1)
    arr2 = name.split(" ");
    console.log(arr2.length)
    for (i = 0; i < arr2.length; i++) {
        //console.log(arr1.indexOf(arr2[i]))
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr[i]), 1);
        }
    }
    element.className = arr1.join(" ");

    // console.log(element)
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.lenght; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", " ");
        this.className += " active";
    });
}



//====================================//

var button = d3.select("#submit_button");

button.on("click", function () {

    var inputProducto = d3.select("#producto");
    var productoValue = inputProducto.property("value");


    var inputCanal = d3.select("#canal");
    var canalValue = inputCanal.property("value");



    var inputAsesor = d3.select("#asesor");
    var asesorValue = inputAsesor.property("value");



    var product_data = { producto: productoValue, canal: canalValue, asesor: asesorValue };




    //---------------------------//
    console.log(product_data)
    console.log(typeof product_data)

    console.log("-------------")

    var asJSON = JSON.stringify(product_data); // <--- JSON.stringify serialized to JSON
    console.log(asJSON)
    console.log(typeof asJSON)

    console.log("-------------")

    var asObject = JSON.parse(asJSON);  // <--- JSON.parse serializes to object. 
    console.log(asObject)
    console.log(typeof asObject)


    // in Python, to convert to convert to json, "json.dumps" is used, 
    // and to convert to dic, "json.loads" is used 


    //---------------------------//
    /*
    // the followin two blocks are fetching data from the route '/handle_data'. They are using the default method 'GET', which in that route
    // triggers to get the 'message' varible. The two following blocks are printing that variable in different formats. 
    // these two blocks are getting data from Python to JavaScript. 

    fetch('/handle_data')
        .then(function (response) {
            return response.text();
        }).then(function (text) {
            console.log('GET response text:');
            console.log(text); // Print the greeting as text
        });

    fetch('/handle_data')
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log('GET response as yeison:');
            console.log(json); // Print the greeting as text
        });
    */
    //---------------------------//



    // The following block will send data from JavaScript to Python:

    // POST

    fetch('/handle_data', {

        // Specify the method
        method: 'POST',

        // A JSON payload
        body: JSON.stringify({
            asObject
        })
    }).then(function (response) { // At this point, Flask has printed our JSON
        return response.text();
    }).then(function (text) {

        console.log('POST response: ');

        // Should be 'OK' if everything was successful
        console.log(text);
    });



});
