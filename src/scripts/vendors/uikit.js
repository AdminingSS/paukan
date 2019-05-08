import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

$(() => {

    //select addon
    (() => {
        const $selects = $('.tm-select .select-wrapper');

        $selects.each(function () {
            const $selectWrapper = $(this);
            const $select = $selectWrapper.find('.select-trigger');
            const $dropdown = $selectWrapper.find('.select-dropdown');
            const $input = $selectWrapper.find('input');

            $dropdown.on('click', '.select-option', event, function () {
                const $target = $(event.target);

                if (!$target.attr('data-value')) return false;

                const optionText = $target.text();

                $select.text(optionText);
                $input.val($target.attr('data-value'));

                UIkit.dropdown($dropdown).hide();
            });
        })
    })();

    //toggler aadon
    (function () {
        const $togglers = $('[uk-toggle]');

        $togglers.each(function () {
            const $toggler = $(this);
            const $target = $(getTarget($toggler));
            const activeClassName = 'uk-active';

            $target.on({
                'shown': function () {
                    $toggler.addClass(activeClassName);
                    // debugger;
                },
                'hidden': function () {
                    $toggler.removeClass(activeClassName);
                }
            });

        });

        function getTarget($toggler) {
            const patern = 'target:';
            const str = $toggler.attr('uk-toggle') || $toggler.attr('href');

            if (!str) return null;

            if (str.indexOf(patern) === -1) {
                return str;
            }

            const reg = /target:(.+)\;/i;
            const match = str.match(reg);

            if (!match || !match[1]) return null;

            return match[1];
        }
    })();
});
