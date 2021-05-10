import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min'


$(function () {
    $('.form-control').blur(function () {
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else {
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });
    {  
        var x=document.myform2.email2.value;  
        var atposition=x.indexOf("@");  
        var dotposition=x.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
          alert("الرجاء ادخال بريد الكتروني صحيح \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
          return false;  
          }  
        }  
});
$('.add-to-cart-btn').on("click", function() {
    alert('أضيف المُنتج إلى عربة الشراء');
});