
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import './scss/style.scss';
import '@fortawesome/fontawesome-free/js/all.min';


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('.add-to-cart-btn').click(function(){
        alert('اضيف المنتج الى عربة الشراء')
    });


    $('.form-control').blur(function () {
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else{
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });
        $('.form-control').blur(function () {
        var x = document.forms["myForm2"]["email2"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else{
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });

});
