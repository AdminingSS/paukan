import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';

$(()=>{
    //scroll
    (() => {
        const $scrollContainer = $('.js-scroll');

        $scrollContainer.mCustomScrollbar({
            mouseWheel:{ enable: true }
        });
    })();
});