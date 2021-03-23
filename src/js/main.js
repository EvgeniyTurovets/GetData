$(function() {
    $('.h-profile__wrap').on('click', function() {
        $('.h-profile__toggle').fadeToggle(200)
    })

    $(document).on('click', function(e) { // событие клика по веб-документу
        var div = $(".h-profile"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.h-profile__toggle').fadeOut(200)
        }
    });

    $('.burger').on('click', function() {
        $(this).toggleClass('active')
        $('.mob-nav').fadeToggle(200)
    })

    var Countries = ['Forms',
        'Tables',
        'Charts',
        'Icones',
        'Maps'
    ];

    $('#AllCompo').autocomplete({
        source: Countries,
        minLength: 0,
        scroll: true
    }).focus(function() {
        $(this).autocomplete("search", "");
    });

    $('#kak-use-input').autocomplete({
        source: Countries,
        minLength: 0,
        scroll: true
    }).focus(function() {
        $(this).autocomplete("search", "");
    });

    $('.s-search__filter').on('click', function() {
        $(this).toggleClass('active')
        $('.s-search__filter-set').fadeToggle(200).css('display', 'flex');
    })

    $('.s-search__filter-set label').on('click', function() {
        let thisText = $(this).text()
        $('.s-search__filter .name').text(thisText)
    })

    $(document).on('click', function(e) { // событие клика по веб-документу
        let div = $(".s-search__filter");
        let div2 = $('.s-search__filter-set')
        if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
            if (!div2.is(e.target)) {
                $('.s-search__filter-set').fadeOut(200)
                $('.s-search__filter').removeClass('active')
            }
        }
    });

    function sInputPl() {

        if ($(window).width() < 768) {
            $('.s-search__input').attr('placeholder', 'Поиск')
        } else {
            $('.s-search__input').attr('placeholder', 'Введите SKU, Url или ключевое слово')
        }

    }
    sInputPl()
    $(window).on('resize', function() {
        sInputPl()
    })


    if ($('.timer').length) {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minsEL = document.getElementById('mins');
        const secondsEL = document.getElementById('seconds');

        const newData = '30 Mar 2021';

        function countdown() {
            const newYearsDate = new Date(newData);
            const currentDate = new Date();

            const totalSeconds = (newYearsDate - currentDate) / 1000;
            const minutes = Math.floor(totalSeconds / 60) % 60;
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const days = Math.floor(totalSeconds / 3600 / 24);
            const seconds = Math.floor(totalSeconds) % 60;


            daysEl.innerText = days;
            hoursEl.innerText = hours;
            minsEL.innerText = minutes;
            secondsEL.innerText = seconds;


        }
        countdown();
        $('.timer').addClass('active')
        setInterval(countdown, 1000);

    }

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    })

    $('.tabs--price .tab span').on('click', function() {
        if (!$(this).hasClass('active')) {
            console.log('1')
            $(this).closest('.tabs--price').find('.tab').not($(this).parent()).removeClass('active')
            $(this).parent().addClass('active')
        }
    })

    $('select').selectric();

})