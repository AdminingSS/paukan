import '../vendors/jquery.mCustomScrollbar.concat.min'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';

var cx, dx = 0;

$(()=>{
    //scroll
    (() => {
        const $scrollContainer = $('.js-scroll');
        const $scrollXContainer = $('.js-scroll-x');

        $scrollContainer.mCustomScrollbar({
            mouseWheel:{ enable: true }
        });

        $scrollXContainer.mCustomScrollbar({
            axis:"x",
            mouseWheel:{ enable: true },
            advanced:{ autoExpandHorizontalScroll:true }
        });
    })();
});