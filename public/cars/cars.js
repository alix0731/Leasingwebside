
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
}

    getCards();



function getCards(){


    $.ajax({

        
        url: "/allcars",
        type: "GET",
        contentType: "application/JSON",
        success: function (data) {

            $.each(data, function (index, value) {
                $("#cars").append(
                    "<div class='col-lg-4'> <div class='trainer-item'> <div class='image-thumb'> <img src='" + value.img + "' alt=''> </div> <div class='down-content'> <span><sup>Pris pr.måned </sup>" + value.price +  "DKK</span> <h4>" + value.name + "</h4> <p> <i class='fa fa-dashboard'></i> " + value.km + " km &nbsp;&nbsp;&nbsp; <i class='fa fa-cube'></i> " + value.year + " &nbsp;&nbsp;&nbsp; <i class='fa fa-cog'></i> " + value.model + " &nbsp;&nbsp;&nbsp; </p> <ul class='social-icons'> <li><a href='/bestilling'>+ Bestil</a></li> </ul> </div> </div> </div>"
                );
               });
        
        },
        error: function(){
            console.log("Error");
        }

    });

};


function getCarsForTable() {

    $.ajax({

        
        url: "/allcars",
        type: "GET",
        contentType: "application/JSON",
        success: function (data) {

            $.each(data, function (index, value) {
                $("#cartable").append(      "<tr> <td>" + value.id +"</td> <td>" + value.name + "</td> <td>" + value.model + "</td> <td>"+ value.km + "</td> <td>" + value.price + "</td> <td>" + value.year + "</td> <td><a href='/delete/"+ value.id + "' class='btn btn-danger'>Slet</a></td>  </tr>"
                );
               });
        
        },
        error: function(){
            console.log("Error");
        }

    });
};






