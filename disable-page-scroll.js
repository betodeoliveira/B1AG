let $body = $(document.body);
    let scrollPosition = 0;

    // Disables page scroll
    $('.no-class').on('click', function () {
        var oldWidth = $body.innerWidth();
        scrollPosition = window.pageYOffset;
        $body.css('overflow', 'hidden');
        $body.css('position', 'relative');
        // $body.css('top', `-${scrollPosition}px`);
        $body.width(oldWidth);
    });

    // Enables page scroll
    $('.no-class').on('click', function () {
        if ($body.css('overflow') != 'hidden') { scrollPosition = window.pageYOffset; }
        $body.css('overflow', '');
        $body.css('position', '');
        // $body.css('top', '');
        $body.width('');
        // $(window).scrollTop(scrollPosition);
    });

    // Toggles page scroll
    $('.navbar_menu-btn').on('click', function () {
        if ($body.css('overflow') !== 'hidden') {
            var oldWidth = $body.innerWidth();
            scrollPosition = window.pageYOffset;
            $body.css('overflow', 'hidden');
            $body.css('position', 'relative');
            // $body.css('top', `-${scrollPosition}px`);
            $body.width(oldWidth);
        } else {
            $body.css('overflow', '');
            $body.css('position', '');
            // $body.css('top', '');
            $body.width('');
            // $(window).scrollTop(scrollPosition);
        }
    });
