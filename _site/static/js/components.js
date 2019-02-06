$(document).ready( function() {

    $('.scroll').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // $('.pop-open').magnificPopup({
    //     type: 'inline',
    //     autoHeight:true,
    // });

    $('.contact').click( function() {

    });

    $('.project').magnificPopup({
        type: 'inline',
        autoHeight:true,
        callbacks: {
            open: function(item) {
                var carousel = $($.magnificPopup.instance.content).find('.owl-carousel');
                // console.log(carousel);
                carousel.owlCarousel({ items : 1, nav:true, pagination:true, autoHeight: true,
                    navText: [ "<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>" ],
                    onChanged : function () {
                        $(".mfp-content > div").animate({ scrollTop: "0" }); }
                });
             }
        }
    });

    // Initialize Carousel

    // Set Background Image
    $('.owl-carousel .item').each( function() {
        $(this).css({ 'background-image' : 'url(' + $(this).data('src') + ')' });
    });

    $('#work .item').click( function() {
        var active = $(this).data('src');
        $('#work .view .images').empty()
        $(this).closest('.owl-stage').find('.item').each( function(i,el) {
            $image = $('<img src="' + $(this).data('src') + '" style="max-width:'
                + $(this).data('width') + '">');
            $('#work .view .images').append($image);
            $(this).data('src') == active ? $image.addClass('active') : $image;
        });
        $('body').toggleClass('project-open');
    });

    $('#work .view .close').click( function() {
        $('body').toggleClass('project-open');
    });

    $('#work .view .next').click( function() {
        var $active = $('#work .images .active');
        $active.next().length ? $active.next().addClass('active') :
            $('#work .images img:first-child').addClass('active');
        $active.removeClass('active');
    });

    $('#work .view .prev').click( function() {
        var $active = $('#work .images .active');
        $active.prev().length ? $active.prev().addClass('active') :
            $('#work .images img:last-child').addClass('active');
        $active.removeClass('active');
    });

    // Scroll Menu
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if( scroll > 500 ) {
            $('#menu').addClass('active');
        } else {
            $('#menu').removeClass('active');
        }
    });

});
