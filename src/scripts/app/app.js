$(() => {
    //Load more
    (function () {
        const $btn = $('.tm-button-more');

        $btn.on('click', function (e) {
            e.preventDefault();
            $(this).addClass("ajax");
        })
    })();

    (function () {
        const $btn = $('.tm-chat-button');
        const $textarea = $('.tm-textarea-spinner');

        $btn.on('click', function (e) {
            e.preventDefault();
            if(!$textarea.hasClass("ajax")) $textarea.addClass("ajax");
        })
    })();

});