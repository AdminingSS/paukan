import 'slick-carousel';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

$(() => {
    //slider
    (function () {
        const $slider = $('.tm-slider-popular');
        const $body = $('body');
        const $window = $(window);
        const options = {
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '40px'
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };
        let sliderCreated = false;

        sliderInint();

        $window.on('resize', sliderInint);

        function sliderInint() {
            if (!sliderCreated && $body.width() <= 942) {
                $slider.slick(options);
                sliderCreated = true;
            } else if (sliderCreated && $body.width() > 942) {
                $slider.slick('unslick');
                sliderCreated = false;
            }
        }

    })();
});
