import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';

$(()=>{
    //simple select
    (() => {
        const $mSCB_1 = $('.tm-dropdown__content');

        $mSCB_1.mCustomScrollbar({
            mouseWheel:{ enable: true }
        });
    })();
});