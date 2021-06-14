function getCustomersForTable() {


    //Ajax gør at den fra url getcustomers og laver en get-request
    //laver et loop i data
    //$.each for hver data der ligger i customer
    $.ajax({

        
        url: "/getcustomers",
        type: "GET",
        contentType: "application/JSON",
        success: function (data) {

            $.each(data, function (index, value) {
                $("#customertable").append(      "<tr> <td>" + value.id +"</td> <td>" + value.firstname + "</td> <td>" + value.lastname + "</td> <td>"+ value.email+ "</td> <td>" + value.phone + "</td> <td>" + value.address + "</td> <td><a href='/deletecustomer/"+ value.id + "' class='btn btn-danger'>Slet</a></td>  </tr>"
                );
               });
        
        },
        error: function(){
            console.log("Error");
        }

    });
};