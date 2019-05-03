import 'slick-carousel';
import 'slick-carousel/slick/slick.less';
import 'slick-carousel/slick/slick-theme.less';

$(() => {
    //slider
    (function () {
        const $slider = $('.tm-slider-popular');
        const $body = $('body');
        const $window = $(window);
        const options = {};
        let sliderCreated = false;

        sliderInint();

        $window.on('resize', sliderInint);

        function sliderInint() {
            if (!sliderCreated && $body.width() <= 959) {
                $slider.slick(options);
                sliderCreated = true;
            } else if (sliderCreated && $body.width() > 959) {
                $slider.slick('unslick');
                sliderCreated = false;
            }
        }

    })();
});
