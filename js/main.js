let mappingModalDialog = () =>{
    console.log('1111');
    $('.onClcickShowModal').on('click', function (e) {
        /*$('html,body').append('<div class="modal-1"></div>');*/
        $('#modal-1').load("modalDialog.html", () => {

            console.log('loaded');
            //add validation
            // Initialize form validation on the registration form.
            // It has the name attribute "registration"
            $("form[name='registration']").validate({
                // Specify validation rules
                rules: {
                    // The key name on the left side is the name attribute
                    // of an input field. Validation rules are defined
                    // on the right side
                    firstname: "required",
                    email: {
                        required: true,
                        // Specify that email should be validated
                        // by the built-in "email" rule
                        email: true
                    },
                    phoneNumber: {
                        required: true,
                        minlength: 10
                    }
                },
                // Specify validation error messages
                messages: {
                    firstname: "Пожалуйста, укажите свое Имя.",
                    phoneNumber: {
                        required: "Пожайлуста, укажите номер телефона",
                        minlength: "Нормер теленофа должен быть не менее 10 цифр "
                    },
                    email: "Пожалуйста, укажите адрес электронной почты."
                },
                // Make sure the form is submitted to the destination defined
                // in the "action" attribute of the form when valid
                submitHandler: (form) => {
                    let name = document.getElementById('md-modal-registr-firstname').value;
                    let email = document.getElementById('md-modal-registr-email').value;
                    let number = document.getElementById('md-modal-registr-phoneNumber').value;

                    sendEmail({ name, email, number});
                    $('#idBokkingButtonClose').trigger('click');
                    return false;

                }
            });


            $('#idBokkingButtonClose').on('click', function (e) {
                $("#modal-1").children().removeClass("md-show");
            })
            $("#modal-1").children().addClass('md-show')
        });
    })
}

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

        $("#header").load("header.html", () => {
            navbarScroll();
            /*            var innerDivs = $("#header").html();*/
            /*            $("#header").remove();
                        $("#rootDivId").prepend(innerDivs);*/

        });

        $("#header-lv1").load("header-lv1.html");
        $("#header-main").load("header-main.html");
        $("#contact-info").load("footer.html");
    });

    /*    offsetAnchor = () => {
            if (location.hash.length !== 0) {
                window.scrollTo(window.scrollX, window.scrollY - 65);
            }
        }*/


    scrollToAnchor = (aid) => {
        $('html,body').animate({scrollTop: aid.offset().top - 50}, 'slow');
    }

    scrollToGame = () => {
        $('html,body').animate({
                scrollTop: $(".scrollToHere").offset().top
            },
            'slow');
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


    $(document).keydown((event) => {
        if (event.keyCode == 27) {
            $("#modal-1").children().removeClass("md-show");

        }
    });


        mappingModalDialog();

    /*    var ModalEffects = function sendBooking() {

            var targetDiv = document.getElementById("modal-1")
                //.classList.add('md-show');
            targetDiv.classList.remove("md-show");


        }();*/


    sendEmail = (data) => {
        console.log('email sent');
        $.post( "http://194.87.98.88:3000/send", data)
            .done(( resp ) => {
                console.log(resp)
            });
    }



});

let redirectTo = (link) => location.href = link;

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
