
function check() {

    if (jQuery != undefined) {
        console.log("jQuery connected")
    } else {
        console.log("jQuery not connected")
    }

};





function getCars() {

    $.ajax({

        
        url: "/allcars",
        type: "GET",
        contentType: "application/JSON",
        success: function (data) {

            $.each(data, function (index, value) {
                $("#car_id").append( "<option value=" +value.id + "> " + value.name + ", " + value.model +   "</option>");
               });
        
        },
        error: function(){
            console.log("Error");
        }

    });
};






