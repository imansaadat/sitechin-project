/*for video header*/
$(document).ready(function () {
    $(".play-button").click(function () {
        $('.scroll').animate({marginTop: '12px'},700)
        $('.play-button').fadeOut(1000);
        $('.mountain-mouse').fadeOut(1000);
        $('.square-blue').fadeOut(1000);
        $('.square-yellow').fadeOut(1000);
        $('.siteChin-logo').fadeOut(1000);
        $('.siteChin-contact').fadeOut(1000);
        $('.representation').fadeOut(1000);
        $('.video').animate({zIndex: '1'}, 1000);
        $('.video').fadeIn(1000);
        $('.cross').show(500);
        $('video').attr('src','assets/videos/Sitechin-Reseller-Video.mp4')

    });
    $('.cross').click(function () {
        $('.scroll').animate({marginTop: '4px'})
        $('.play-button').fadeIn(500);
        $('.mountain-mouse').fadeIn(500);
        $('.square-blue').fadeIn(500);
        $('.square-yellow').fadeIn(500);
        $('.siteChin-logo').fadeIn(500);
        $('.siteChin-contact').fadeIn(500);
        $('.representation').fadeIn(500);
        $('.video').animate({zIndex: '-1'},500);
        $('.cross').hide(500);
        $(".video").attr('src','');
    });
    /*for mouse animation*/
    $('.iman').click(function (){
        $('.container6').animate({height:'430px'});
        $('.t-explanation').css('overflow','visible');
        $('.svg-m').css({top:133});
        $('.iman').css({top:128});
    });
});
var myvideo = document.querySelector(".video");
var myPlayButton = document.querySelector('.play-button');
var cross = document.querySelector('.cross');
myPlayButton.addEventListener('click', () => {
    myvideo.autoplay = true;
    myvideo.load();
});
/*form-representation*/
var calculation = document.getElementById('calculation');
calculation.addEventListener('click',()=>{
    var customer = document.getElementById("select1");
    var valueCustomer = customer[customer.selectedIndex].value;
    var date = document.getElementById("select2");
    var valuedate = date[date.selectedIndex];
    var price = document.getElementById("select3");
    var valuePrice= price[price.selectedIndex].value;
    var percent = document.getElementById("select4");
    var valuePercent = percent[percent.selectedIndex].value;
    var income = document.getElementById('income');
    var time = document.getElementById('time')
    var result = (parseInt(valueCustomer)*parseInt(valuePrice)*parseInt(valuePercent)/100);
    var final = (new Intl.NumberFormat().format(result));

    if(valuedate.value == 'یک سال'){
        time.innerHTML = 'یک سال';
        income.innerHTML = final;
    }else{
        time.innerHTML = 'یک ماه';
        income.innerHTML = final;
    }
})