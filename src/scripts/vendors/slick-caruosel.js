import 'slick-carousel';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

$(() => {
    //slider
    (function () {
        const $slider = $('.tm-slider-category');
        const $body = $('body');
        const $window = $(window);
        const options = {
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            variableWidth: true,
        };
        let sliderCreated = false;

        sliderInint();

        $window.on('resize', sliderInint);

        function sliderInint() {
            if (!sliderCreated && $body.width() <= 639) {
                $slider.slick(options);
                sliderCreated = true;
            } else if (sliderCreated && $body.width() > 639) {
                $slider.slick('unslick');
                sliderCreated = false;
            }
        }

    })();
});
