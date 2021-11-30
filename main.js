$(function () {
    $(".signup-form1").submit(function(event) {
        event.preventDefault();

       if ($("#signup-input1").val() == "") {
           $("#signup1-error").show();
       }

       else {
           window.location = "login.html";
           $("#signup1-error").hide();
       }
    })

    $(".signup-form2").submit(function(event) {
        event.preventDefault();

       if ($("#signup-input2").val() == "") {
           $("#signup2-error").show();
       }

       else {
           window.location = "login.html";
           $("#signup2-error").hide();
       }
    })
})