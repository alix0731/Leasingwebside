function getBookingTable() {


    //Ajax gør at den fra url getcustomers og laver en get-request
    //laver et loop i data
    //$.each for hver data der ligger i customer
    $.ajax({

        
        url: "/getbookings",
        type: "GET",
        contentType: "application/JSON",
        success: function (data) {

            $.each(data, function (index, value) {
                $("#bookingtable").append(      "<tr> <td>" + value.id +"</td> <td>" + value.monthly_payment + "</td> <td>" + value.order_date + "</td> <td>"+ value.start_date + "</td> <td>" + value.end_date + "</td> <td>" + value.customer_id + "</td> <td> " +  value.car_id + " </td> <td> <a href='/redigerid' class='btn btn-success'>Ændre</a> </td>  <td><a href='/deletebookings/"+ value.id + "' class='btn btn-danger'>Slet</a></td>  </tr>"
                );
               });
        
        },
        error: function(){
            console.log("Error");
        }

    });
};