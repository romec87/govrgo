$(document).ready(() => {


    //------------------------------------//
    //Navbar//
    //------------------------------------//

    navbarScroll = () => {
        let menu = $('.navbar');
        $(window).bind('scroll', (e) => {
            if ($(window).scrollTop() > 140) {
                if (!menu.hasClass('open')) {
                    menu.addClass('open');
                }
            } else {
                if (menu.hasClass('open')) {
                    menu.removeClass('open');
                }
            }
        });

    }

    $(() => {
        console.log('1')

        $("#header").load("header.html", () => {
            navbarScroll();
/*            var innerDivs = $("#header").html();*/
            /*            $("#header").remove();
                        $("#rootDivId").prepend(innerDivs);*/

        });

        $("#header-lv1").load("header-lv1.html");
        $("#header-main").load("header-main.html");
        $("#footer").load("footer.html");
        console.log('3')
    });

    /*    offsetAnchor = () => {
            if (location.hash.length !== 0) {
                window.scrollTo(window.scrollX, window.scrollY - 65);
            }
        }*/


    scrollToAnchor = (aid) => {
        $('html,body').animate({scrollTop: aid.offset().top - 50}, 'slow');
    }

    //------------------------------------//
    //Scroll To//
    //------------------------------------//

    /*    $(document).on('click', ".scroll", function(){

                    scrollToAnchor($(window.location.hash));



        });*/

    //------------------------------------//
    //Wow Animation//
    //------------------------------------//
    wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: false        // trigger animations on mobile devices (true is default)
        }
    );
    wow.init();
    navbarScroll()
    console.log('2')

    $('#idBokkingButton1').add('#idBokkingButton2').add('#idBokkingButton3').on('click', function (e) {
        var targetDiv = document.getElementById("modal-1").classList.add('md-show');
    })
    $('#idBokkingButtonClose').on('click', function (e) {
        var targetDiv = document.getElementById("modal-1").classList.remove("md-show");
    })


    /*    var ModalEffects = function sendBooking() {

            var targetDiv = document.getElementById("modal-1")
                //.classList.add('md-show');
            targetDiv.classList.remove("md-show");


        }();*/


});

let redirectTo = (link) => location.href = link;