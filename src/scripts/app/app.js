$(() => {
    //Load more
    (function () {
        const $btn = $('.tm-button-more');

        $btn.on('click', function (e) {
            e.preventDefault();
            $(this).addClass("ajax");
        })
    })();
});