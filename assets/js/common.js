// Make Header Sticky Code
$('.sliderAreaSingle').slick({
         centerMode: false,
         slidesToShow: 3,
         dots: false,
         arrows: true,
         draggable: true,
         autoplay: true, /* this is the new line */
         autoplaySpeed: 2000,
         infinite: false,
         responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
             },
        ],
});