// show menu mobile and overlay
$(document).ready(function () {
    $(".button-menu-mobile").click(function () {
        $('.menu-mobile').css('transform', 'translate(0%)');
        $('.overlay-mobile').css('display', 'block');
    });
});
// hidden menu mobile by close icon
$(document).ready(function () {
    $("#closeicon").click(function () {
        $('.menu-mobile').css('transform', 'translate(100%)');
        $('.overlay-mobile').css('display', 'none'); // hidden overlay
        $(".sub-menu-mobile").css('display', 'none'); // hidden child menu
        $('.show-border').css('border-bottom', 'none'); // hidden border bottom of "li"
        $(".menu-item-mobile").css('border-bottom', '1px solid #EEEEEE');
        $('#intro-mobile').css('border-bottom', '1px solid #EEEEEE');
    });
});
// hidden menu mobile by overlay
$(document).ready(function () {
    $(".overlay-mobile").click(function () {
        $('.menu-mobile').css('transform', 'translate(100%)');
        $('.overlay-mobile').css('display', 'none');

    });
});

$(document).ready(function () {
    $(".menu-item-mobile").click(function () {
        // $(".sub-menu-mobile").css('display', 'block');
        $(".menu-item-mobile").css('border-bottom', 'none');
        $('.show-border').css('border-bottom', '1px solid #EEEEEE');
        $('#intro-mobile').css('border-bottom', 'none');
    })
})

document.getElementById('child-1').onclick = showThis1;
function showThis1() {
    document.getElementById('menuchild-1').style.display = "block";
    document.getElementById('menuchild-2').style.display = "none";
    document.getElementById('menuchild-3').style.display = "none";
    document.getElementById('menuchild-4').style.display = "none";
    document.getElementById('menuchild-5').style.display = "none";
}

document.getElementById('child-2').onclick = showThis2;
function showThis2() {
    document.getElementById('menuchild-1').style.display = "none";
    document.getElementById('menuchild-2').style.display = "block";
    document.getElementById('menuchild-3').style.display = "none";
    document.getElementById('menuchild-4').style.display = "none";
    document.getElementById('menuchild-5').style.display = "none";
}

document.getElementById('child-3').onclick = showThis3;
function showThis3() {

    document.getElementById('menuchild-1').style.display = "none";
    document.getElementById('menuchild-2').style.display = "none";
    document.getElementById('menuchild-3').style.display = "block";;
    document.getElementById('menuchild-4').style.display = "none";
    document.getElementById('menuchild-5').style.display = "none";
}

document.getElementById('child-4').onclick = showThis4;
function showThis4() {
    document.getElementById('menuchild-1').style.display = "none";
    document.getElementById('menuchild-2').style.display = "none";
    document.getElementById('menuchild-3').style.display = "none";;
    document.getElementById('menuchild-4').style.display = "block";
    document.getElementById('menuchild-5').style.display = "none";

}

document.getElementById('child-5').onclick = showThis5;
function showThis5() {
    document.getElementById('menuchild-1').style.display = "none";
    document.getElementById('menuchild-2').style.display = "none";
    document.getElementById('menuchild-3').style.display = "none";;
    document.getElementById('menuchild-4').style.display = "none";
    document.getElementById('menuchild-5').style.display = "block";
}

// slide sản phẩm sales
$(document).ready(function () {
    $('#btn-next').click(function (event) {

        var slide_sau = $('.active').next();
        console.log(slide_sau.length);
        if (slide_sau.length != 0) {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        } else {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }
    });
    $('#btn-prev').click(function (event) {

        var slide_truoc = $('.active').prev();
        if (slide_truoc.length != 0) {
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
        } else {
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            $('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
        }
    });
});
// owl carousels
// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         loop:true,
//         margin:10,
//         items:5,
//         responsive:{
//             0:{
//                 items:1,
//                 loop: true
//             },
//             600:{
//                 items:3,
//                 loop:true
//             },
//             1000:{
//                 items:5,
//                 loop:true,
//                 nav: true
//             }
//         }
//     })
// });

// var owl = $('.owlControl');
// owl.owlCarousel();
// $('.nextBtn').click(function() {
//     owl.trigger('next.owl.carousel', [0]);
// })
// $('.prevBtn').click(function() {
//     owl.trigger('prev.owl.carousel', [0]);
// })

$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 10,
        nav: false,
        items: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            375: {
                items: 3,
            },
            1340: {
                items: 5,
            }
        }
    });

    // Custom Button
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').click(function () {
        owl.trigger('prev.owl.carousel');
    });

});


// ajax jordan details
function getData() {
    $.ajax({
        url: "https://api.jsonbin.io/b/5f3b62f9b88c04101cf62c5a/1",
        method: "GET",
        headers: {
            "secret-key": "$2b$10$FylrR.yMvOFqIRfe2p8uGOkHAT19.v3Ex2bZBz9feDPpFyEcKSULO"
        },
        success: function (res) {
            renderData(res);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function renderData(data) {
    var html = '';

    for (var i = 0; i < data.length; i++) {
        html +=
            '<div class="box-shoes">' +
            '<div class="shoes-picture">' +
            '<img src=' + data[i].img_url + ' alt="">' +
            '</div>' +
            '<div class="shoes-content">' +
            '<a class="ps-shoe__name" href="detail.html">' + data[i].name + '</a>' +
            '<span class="ps-shoe__price">' + data[i].price + '</span>' +
            '</div>' +
            '</div>'
    }
    $('.left-list-jordan').html(html);
}

// ghim menu
let owl1 = $(".new").owlCarousel({
    autoplay: false,
    autoplayTimeout: 2000,
    dots: true,
    dotsData: true,
    loop: true,
    margin: 30,
    nav: false,
    center: false,
    items: 1

});

$('.owl-dot').click(function () {
    owl1.trigger('to.owl.carousel', [$(this).index(), 1000]);
})
$(document).ready(function () {
    $('.NextBtn').click(function () {
        owl1.trigger('next.owl.carousel');
    });
    $('.PreviousBtn').click(function () {
        owl1.trigger('prev.owl.carousel');
    });
});


