var RANDOM_NUMBER = Math.random() + Math.random();
(function($)
{
    $.fn.clickToggle = function(func1, func2)
    {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };


    var BODY = $('body');
    var USER_AGENT = navigator.userAgent.toLowerCase();
    var BROWSER = {
        version: (USER_AGENT.match(/.+(?:me|ox|on|rv|it|era|opr|ie|edge)[\/: ]([\d.]+)/) || [0, '0'])[1],
        opera: (/opera/i.test(USER_AGENT) || /opr/i.test(USER_AGENT)),
        vivaldi: /vivaldi/i.test(USER_AGENT),
        msie: (/msie/i.test(USER_AGENT) && !/opera/i.test(USER_AGENT) || /trident\//i.test(USER_AGENT)) || /edge/i.test(USER_AGENT),
        msie6: (/msie 6/i.test(USER_AGENT) && !/opera/i.test(USER_AGENT)),
        msie7: (/msie 7/i.test(USER_AGENT) && !/opera/i.test(USER_AGENT)),
        msie8: (/msie 8/i.test(USER_AGENT) && !/opera/i.test(USER_AGENT)),
        msie9: (/msie 9/i.test(USER_AGENT) && !/opera/i.test(USER_AGENT)),
        msie_edge: (/edge/i.test(USER_AGENT) && !/opera/i.test(USER_AGENT)),
        mozilla: /firefox/i.test(USER_AGENT),
        chrome: /chrome/i.test(USER_AGENT) && !/edge/i.test(USER_AGENT),
        safari: (!(/chrome/i.test(USER_AGENT)) && /webkit|safari|khtml/i.test(USER_AGENT)),
        iphone: /iphone/i.test(USER_AGENT),
        ipod: /ipod/i.test(USER_AGENT),
        iphone4: /iphone.*OS 4/i.test(USER_AGENT),
        ipod4: /ipod.*OS 4/i.test(USER_AGENT),
        ipad: /ipad/i.test(USER_AGENT),
        android: /android/i.test(USER_AGENT),
        bada: /bada/i.test(USER_AGENT),
        mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(USER_AGENT),
        msie_mobile: /iemobile/i.test(USER_AGENT),
        safari_mobile: /iphone|ipod|ipad/i.test(USER_AGENT),
        opera_mobile: /opera mini|opera mobi/i.test(USER_AGENT),
        opera_mini: /opera mini/i.test(USER_AGENT),
        mac: /mac/i.test(USER_AGENT),
        search_bot: /(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i.test(USER_AGENT)
    };

    //Проверяем наличие мобильного устройства.
    var isMobileDevice = false;
    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(USER_AGENT)) {
        isMobileDevice = true;
    }

    $(window).bind('resize',function(){ contentResize(); });
    $(document).on('ready', function(){
        contentResize();
        //setTimeout(function(){contentResize();},500);
        //setTimeout(function(){contentResize();},1500);
        //setTimeout(function(){contentResize();},2500);
    });

    var contentResize = function()
    {
        //var data_page_resize = $('[data-page-resize]');
        //var dpr_min_width = data_page_resize.attr('dpr-min-width');
        //var dpr_min_height = data_page_resize.attr('dpr-min-height');
        var dpr_min_width = 1920;
        var dpr_min_height = 1080;

        if(isMobileDevice == true){
            dpr_min_width = 1250;
            dpr_min_width = 650;
        }

        var mobile_scale = 1;
        var body_size = $('body');
        var centrer1 = $('.dynamic__frame__resize');
        var ratio = 0.5625;
        var frame_w, frame_h, frame_d, centrer1_w, centrer1_h;
        var min_window_w = dpr_min_width;
        var min_window_h = dpr_min_height;
        var min_window_d = min_window_h / min_window_w;
        var window_w = $(window).width();
        var window_h = $(window).height();
        var window_d = window_h/window_w;

        /* Если используется мобильное устройство в вертикальном положении, то вызываем информационное сообщение. */
        if(window_h > window_w){ $('#rotate-device').addClass('show'); } else { $('#rotate-device').removeClass('show'); }
  
        if(window_d < min_window_d)
        {
            mobile_scale = Math.min(1, window_h / min_window_h);
            body_size.css({
                'min-width': window_w / mobile_scale, 'min-height': min_window_h,
                'transformOrigin': '0 0', 'scale': mobile_scale, '-webkit-transform': 'scale(' + mobile_scale  + ')'
            });

            //$('.bx-container img').css({ height: window_h / mobile_scale, width:  window_w / mobile_scale, left:0});
            /*$('#krpanoSWFObject').css({ width:  window_w / mobile_scale, height: min_window_h });
            $('#krpanoSWFObject').find('div').eq(0).css({ width:  window_w / mobile_scale, height: min_window_h });
            $('#krpanoSWFObject').find('canvas').css({ width:  window_w / mobile_scale, height: min_window_h });*/
        }
        else
        {
            mobile_scale = Math.min(1, window_w / min_window_w);
            body_size.css({
                'min-width': min_window_w, 'min-height': window_h / mobile_scale,
                'transformOrigin': '0 0', 'scale': mobile_scale, '-webkit-transform': 'scale(' + mobile_scale + ')'
            });
            /*$('#krpanoSWFObject').css({ width:  min_window_w, height: window_h / mobile_scale });
            $('#krpanoSWFObject').find('div').eq(0).css({ width:  min_window_w, height: window_h / mobile_scale });
            $('#krpanoSWFObject').find('canvas').css({ width:  min_window_w, height: window_h / mobile_scale });*/

            //$('.bx-container img').css({ height: window_h / mobile_scale, width:  min_window_w, left:0});
        }

       // alert(window_h * mobile_scale);


        frame_w = body_size.width();
        frame_h = body_size.height();
        frame_d = frame_h/frame_w;
        if(frame_d > ratio) {
            centrer1_w = frame_h / ratio;
            centrer1_h = frame_h;
            centrer1.css({ 'width': centrer1_w, 'height': centrer1_h, 'top': 0, 'left': 0.5*(frame_w-centrer1_w) });


        } else {
            centrer1_w = frame_w;
            centrer1_h = frame_w * ratio;
            centrer1.css({ 'width': centrer1_w, 'height': centrer1_h, 'top': 0.5*(frame_h-centrer1_h), 'left': 0});
        }


    };

    /**
     * Функция ожидания загрузки страницы.
     * @param callback
     */
    var documentLoad = function(callback)
    {
        var loader_container = $('#preloader__page');
        var overlay = loader_container.find('img.overlay');
        var spinner = loader_container.find('.loader');
        if(BROWSER.msie == true)
        {
            /**
             * Если браузер "Осёл", то отрезаем прелоадер нахуй.
             */
            loader_container.remove();
            if(callback && typeof(callback) === "function") {
                callback();
            }
        }
        else
        {
            //$(window).on('load', function (){
                spinner.animate({ opacity: 1 }, 500);
                overlay.animate({ opacity: 1 }, 500, function(){
                    spinner.animate({ opacity: 0 }, 500);
                    loader_container.transition({ opacity: 0, visibility: 'hidden' }, 1000, function(){
                        $(this).removeClass('color');
                        if(callback && typeof(callback) === "function") {
                            callback();
                        }
                    });
                });
            //});
        }
    };

    var showLoader = function()
    {
        var loader_container = $('#preloader__page');
        var overlay = loader_container.find('img.overlay');
        var spinner = loader_container.find('.loader');

        loader_container.stop().transition({ opacity: 1, visibility: 'visible' }, 800);
        overlay.stop().transition({ opacity: 1, visibility: 'visible' }, 800);
        spinner.stop().animate({ opacity: 1 }, 800);
    };

    var hideLoader = function()
    {
        var loader_container = $('#preloader__page');
        var overlay = loader_container.find('img.overlay');
        var spinner = loader_container.find('.loader');

        loader_container.stop().transition({ opacity: 0, visibility: 'hidden' }, 500);
        overlay.stop().transition({ opacity: 0, visibility: 'hidden' }, 500);
        spinner.stop().animate({ opacity: 0 }, 500);
    };

    function getWord(number, suffix)
    {
        var keys = [2, 0, 1, 1, 1, 2];
        var mod = parseInt(number, 10) % 100;
        var suffix_key = (mod > 7 && mod < 20) ? 2: keys[Math.min(mod % 10, 5)];
        return suffix[suffix_key];
    }

    /**
     * Функция организации прелойдера.
     */
    (function()
    {
        $(document).on('ready async-page-loading', function()
        {
            //$(".phone").mask("(999) 999-9999");
            $('.fade__container').transition({ opacity: 1 }, 700);
            $('.phone-mask').mask('+7(999)999-99-99');

            var frame__first = $('#async__frame__before');
            var frame__last = $('#async__frame__after');
            BODY.asyncPageLoading
            ({
                p__ajaxClass: 'p-ajax',
                beforeSend: function(page)
                {
                    if(frame__first.html() == false){
                        frame__first.html(frame__last.html());
                        frame__last.empty().removeAttr('style');
                    }

                    var loader_container = $('#preloader__page');
                    var overlay = loader_container.find('img.overlay');
                    var spinner = loader_container.find('.loader');
                    loader_container.removeClass('color').stop().transition({ opacity: 1, visibility: 'visible' }, 800);
                    overlay.stop().transition({ opacity: 1, visibility: 'visible' }, 800);
                    spinner.stop().transition({ opacity: 1 }, 800);
                },
                success: function(page, url, page__title)
                {
                    if(frame__last.html() == false)
                    {
                        frame__last.html(page).find('.background__image:first').load(function()
                        {
                            $(this).unbind('load');
                            frame__first.stop().transition({ opacity: 0, visibility: 'hidden' }, 500, function(){

                                $(this).empty().removeAttr('style');
                                var loader_container = $('#preloader__page');
                                var overlay = loader_container.find('img.overlay');
                                var spinner = loader_container.find('.loader');
                                loader_container.stop().transition({ opacity: 0, visibility: 'hidden' }, 500);
                                overlay.stop().transition({ opacity: 0, visibility: 'hidden' }, 500);
                                spinner.stop().transition({ opacity: 0 }, 500);

                                $('.fade__container').stop().transition({ opacity: 1 }, 700);
                                //contentResize();

                                $('.menu__button').removeClass('active');
                                $('a.hamburger').removeClass('open', 700);
                                $('#hidden__full-nav li a').stop().transition({ opacity: 0 }, 500);
                                $('#hidden__full-nav div.line').stop().transition({ opacity: 0, width: '0px' }, 500);
                                $('a.hamburger').stop().transition({ right: 0 }, 700);
                                $('div#home__page-slider div.slideshow__slogan').stop().transition({ right: 200 }, 500);
                                $('a.hamburger svg path.bg').stop().transition({ fill: '#212B4F', opacity: 0.7 }, 700);
                                $('#hidden__full-nav').stop().transition({ right: -500 }, 700);
                                $('a.select__apartments-hamburger').stop().transition({ right: 105 }, 700);
                                $('a.hamburger').data('has__open', 0);
                            });
                        });
                    }
                }
            });
        });
    })();
    //

    /**
     * Контроллер обработки навигации.
     */
    $(document).ready(function()
    {
        $('a.hamburger').data('has__open', 0);
        $(document).delegate("a.hamburger", "click", function(e){
            if($('a.hamburger').data('has__open') == 0)
            {
                $('.menu__button').addClass('active');
                $('a.hamburger').stop().transition({ right: 500 }, 700);
                $('a.hamburger').addClass('open', 700);
                $('a.hamburger svg path.bg').stop().transition({ fill: '#000000', opacity: 0.7 }, 700);
                $('div#home__page-slider div.slideshow__slogan').stop().transition({ right: 400 }, 500);
                $('#hidden__full-nav').stop().transition({ right: 0, skewX: '0deg' }, 700);
                $('#hidden__full-nav div.line').stop().transition({ opacity: 1, width: '100%' }, 500, function()
                {
                    var links = $('#hidden__full-nav li a');
                    links.each(function(i){
                        $(this).stop().transition({ opacity: 1 }, 500 * i);
                    });
                });

                $('a.select__apartments-hamburger').stop().transition({ right: 605 }, 700);

                $('a.hamburger').data('has__open', 1);

            }
            else
            {
                $('.menu__button').removeClass('active');
                $('a.hamburger').removeClass('open', 700);
                $('#hidden__full-nav li a').stop().transition({ opacity: 0 }, 500);
                $('#hidden__full-nav div.line').stop().transition({ opacity: 0, width: '0px' }, 500);
                $('a.hamburger').stop().transition({ right: 0 }, 700);
                $('div#home__page-slider div.slideshow__slogan').stop().transition({ right: 200 }, 500);
                $('a.hamburger svg path.bg').stop().transition({ fill: '#212B4F', opacity: 0.7 }, 700);
                $('#hidden__full-nav').stop().transition({ right: -500 }, 700);
                $('a.select__apartments-hamburger').stop().transition({ right: 105 }, 700);
                $('a.hamburger').data('has__open', 0);
            }
        });
    });

    $(document).ready(function()
    {
        $('.send__callback__controller').click(function()
        {
            showLoader();
            $('#callback__frame').remove();
            $.post('/popups/?section=send__callback', {}, function(r){
                $('body').prepend(r);
                $('#callback__frame').stop().transition({ opacity: 1, scale: 1 }, 500);
                hideLoader();

                $('.phone-mask').mask('+7(999)999-99-99');

                $('#callback__frame a.close').click(function()
                {
                    $('#callback__frame').stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                        $(this).remove();
                    });
                });

                $(document).mouseup(function(e) {
                    var container = $("#callback__frame div.window");
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        $("#callback__frame").stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                            $(this).remove();
                        });
                    }
                });



                $(document).off("#callback__form", "submit");
                $(document).undelegate("#callback__form", "submit");
                $(document).delegate("#callback__form", "submit", function(e)
                {
                    var __this = $(this);
                    var user__name = __this.find('input[name="user__name"]');
                    var user__phone = __this.find('input[name="user__phone"]');
                    var user__time = __this.find('input[name="user__time"]');
                    var submit = __this.find('button[type="submit"]');

                    if(user__name.val() == false || user__phone.val() == false && user__name.val().length > 3)
                    {
                        alert('Пожалуйста, заполните поля.');
                    }
                    else
                    {
                        submit.attr('disabled', 'disabled');
                        submit.text('Подождите...');
                        $.post('/callbacks/?act=callback', { user__name: user__name.val(), user__phone: user__phone.val(), user__time: user__time.val() }, function(r){
                            if(r == '200')
                            {
                                alert('Спасибо за ваше обращение. С вами свяжутся в ближайшее время.');
                                $('#callback__frame').stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                                    $(this).remove();
                                });
                            }

                            submit.removeAttr('disabled');
                            submit.text('Отправить заявку');
                        });
                        //alert(user__name.val());
                    }
                });
            });
        });
    });

    /**
     * Функция, срабатывающая при готовности документа.
     */
    $(document).on('ready async-page-loading', function()
    {
        var JSON__APARTMENTS, JSON__FLOORS, JSON__SECTIONS, JSON__BUILDINGS;
        function apartmentsData(targ_function)
        {
            $.ajax({
                //url: '/assets/js/dataReserve.json',
                url: '/apartments.json',
                dataType: 'json',
                success: function(response){
                    /** @namespace response.apartments */
                    JSON__APARTMENTS=response.apartments;
                    /** @namespace response.floors */
                    JSON__FLOORS = response.floors;
                    /** @namespace response.sections */
                    JSON__SECTIONS = response.sections;
                    /** @namespace response.buildings */
                    JSON__BUILDINGS = response.buildings;

                    targ_function();
                }
            });
        }

        var JSON__APARTMENTS2, JSON__FLOORS2, JSON__SECTIONS2, JSON__BUILDINGS2;
        function apartmentsData2(targ_function)
        {
            $.ajax({
                //url: '/assets/js/dataReserve.json',
                url: '/apartmentsData.php',
                dataType: 'json',
                success: function(response){
                    /** @namespace response.apartments */
                    JSON__APARTMENTS2=response.apartments;
                    /** @namespace response.floors */
                    JSON__FLOORS2 = response.floors;
                    /** @namespace response.sections */
                    JSON__SECTIONS2 = response.sections;
                    /** @namespace response.buildings */
                    JSON__BUILDINGS2 = response.buildings;

                    targ_function();
                }
            });
        }

        function apartmentsData4_5(targ_function)
        {
            $.ajax({
                //url: '/assets/js/dataReserve.json',
                url: '/apartments4_5.json',
                dataType: 'json',
                success: function(response){
                    /** @namespace response.apartments */
                    JSON__APARTMENTS=response.apartments;
                    /** @namespace response.floors */
                    JSON__FLOORS = response.floors;
                    /** @namespace response.sections */
                    JSON__SECTIONS = response.sections;
                    /** @namespace response.buildings */
                    JSON__BUILDINGS = response.buildings;

                    targ_function();
                }
            });
        }

        var DATA_TARGET = $('.data__target').attr('attr-targ'); documentLoad(function(){});

        /**
         *
         */
        if(isMobileDevice == true)
        {
            $('.logotype a').remove();
        }
        else
        {
            var outputCanvas = document.getElementById('output'),
                output = outputCanvas.getContext('2d'),
                bufferCanvas = document.getElementById('buffer'),
                buffer = bufferCanvas.getContext('2d'),
                video = document.getElementById('video'),
                width = outputCanvas.width,
                height = outputCanvas.height,
                interval;

            function processFrame() {
                buffer.drawImage(video, 0, 0);

                // this can be done without alphaData, except in Firefox which doesn't like it when image is bigger than the canvas
                var	image = buffer.getImageData(0, 0, width, height),
                    imageData = image.data,
                    alphaData = buffer.getImageData(0, height, width, height).data;

                for (var i = 3, len = imageData.length; i < len; i = i + 4) {
                    imageData[i] = alphaData[i-1];
                }

                output.putImageData(image, 0, 0, 0, 0, width, height);
            }

            function randomColourVal() {
                return Math.floor( Math.random() * 256 );
            }

            video.addEventListener('play', function() {
                clearInterval(interval);
                interval = setInterval(processFrame, 40)
            }, false);

            // Firefox doesn't support looping video, so we emulate it this way
            video.addEventListener('ended', function() {
                video.play();
            }, false);

        }

        /**
         * Главная страница сайта.
         */
        if(DATA_TARGET == 'home-page')
        {
            /*$('#infine__slider').infineBackgroundSlider({
                slideFrame: '#home__page-slider',
                process__bar_container: '#process__bar',
                view__process__bar: true,
                path: '/assets/images/gallery/',
                slides: [
                    '1.jpg',
                    '2.jpg',
                    '3.jpg',
                    '26.jpg'
                ],
                interval: 10000,
                startingString: DATA_TARGET
            });*/

            if(isMobileDevice == false)
            {
                var images = [
                    ["/assets/images/gallery/update/1_c.jpg"
                    ],
                    ["/assets/images/gallery/update/6_c.jpg"
                    ],
                    ["/assets/images/gallery/update/8_c.jpg"
                    ],
                    ["/assets/images/gallery/update/19_c.jpg"
                    ],
                    ["/assets/images/gallery/update/14_c.jpg"
                    ]

                ];
            }

            if(isMobileDevice == true)
            {
                var images = [
                    ["/assets/images/gallery/update/m/1.jpg"
                    ],
                    ["/assets/images/gallery/update/m/6.jpg"
                    ],
                    ["/assets/images/gallery/update/m/8.jpg"
                    ],
                    ["/assets/images/gallery/update/m/19.jpg"
                    ],
                    ["/assets/images/gallery/update/m/14.jpg"
                    ]

                ];
            }

            var frame1 = $('#home__page-slider');
            var frame = $('.slideshow__slogans');
            var start = frame.find('.slideshow__bullet.active').index();

            setTimeout(function() {
                //frame1.find('.background__image').addClass('slideshow__img-animate');
            }, 100);

            var home__slide__array = $('#home__slide__array').text();
            var slideshow = frame1.slideshowInit({
                slides: home__slide__array.split(','),
                path: '',
                prefix: '',
                interval: 4500,
                time: 3000,
                off: false,
                start: start,
                beforeChange: function (img, cur_number, old_number, direction) {

                    img.css({'opacity' : 0, scale: 1.1});
                    frame1.find('.slideshow__slogan').eq(cur_number).setActive();
                    frame1.find('.slideshow__slogan .slide__item').eq(cur_number).setActive();
                    frame1.find('.slideshow__bullet').eq(cur_number).setActive();
                    frame1.find('.slideshow__menu-item').eq(cur_number).setActive();

                    var dir = cur_number > old_number ? -1 : 1;

                    frame.find('.slide__item22')
                        .eq(old_number).stop(true).css({'display' : 'block'}).transition({'y' : dir * 80 + '%', 'opacity' : 0}, 800, function() { $(this).hide(); }).removeClass('active').end()
                        .eq(cur_number).stop(true).css({'display' : 'block', 'y' : - dir * 80 + '%', 'opacity' : 0}).transition({'y' : 0, 'opacity' : 1}, 800).addClass('active');
                },
                afterChange: function (img, cur_number){

                },
                finishCSS: {'opacity': 1, scale: 1 }
            });


            slideshow.loadImg(1);

            frame1
                .on('click', '.slideshow__bullet, .slideshow__menu-item', function() {
                    if(!$(this).hasClass('active')) slideshow.loadImgNumber($(this).data('targ'));
                })
                .on('click', '.slideshow__arrow, .slideshow__big-arrow', function() {
                    slideshow.loadImg($(this).data('targ'));
                })
                .on('click', '.slideshow__slogan-more', function() {
                    $(this).parents('.slideshow__frame').addClass('opened');
                })
                .on('click', '.slideshow__right-hide', function() {
                    $(this).parents('.slideshow__frame').removeClass('opened');
                });

        }

        $('.documentation').click(function()
        {
           $('.ppup').addClass('open');
            $('.ppup button').click(function()
            {
                $('.ppup').removeClass('open');
            });
        });

        /**
         * Страница "О проекте".
         */
        if(DATA_TARGET == 'about__page')
        {
            (function()
            {
                var container = $('#about__page');
                var switch__section = container.find('.switch__section a');
                var content = container.find('.content');
                content.eq(0).addClass('open').stop().transition({ opacity: 1, left: 0 }, 300);
                switch__section.on('click', function()
                {
                    var __this = $(this);
                    var index = __this.index('.switch__section a');
                    switch__section.removeClass('active');
                    __this.addClass('active');
                    content.removeClass('open').css({ opacity: 0, left: -100 });
                    content.eq(index).addClass('open').stop().transition({ opacity: 1, left: 0 }, 700);
                });
            })();
        }

        if(DATA_TARGET == 'mortgage__page')
        {
            (function()
            {
                var container = $('#mortgage__page');
                var switch__section = container.find('.switch__section a');
                var content = container.find('.content');
                content.eq(0).addClass('open').stop().transition({ opacity: 1, left: 0 }, 300);
                switch__section.on('click', function()
                {
                    var __this = $(this);
                    var index = __this.index('.switch__section a');
                    switch__section.removeClass('active');
                    __this.addClass('active');
                    content.removeClass('open').css({ opacity: 0, left: -100 });
                    content.eq(index).addClass('open').stop().transition({ opacity: 1, left: 0 }, 700);
                });
            })();
        }
        //Конец страницы "о проекте".

        /**
         * Динамика строительства.
         */
        if(DATA_TARGET == 'construction__page')
        {
            (function()
            {
                var images = $('.listing__images a.image');
                images.each(function(i, e){
                    var __this = $(this);
                    var img = __this.attr('img');
                    __this.css('background-image', 'url(' + img + ')');
                    __this.stop().transition({ scale:1, opacity:1}, 800);
                });

                var open__image = $('#open__image');
                var window__x = open__image.find('div.window');
                var close__link = open__image.find('.close');
                images.on('click', function(){
                    var img = $(this).attr('img');
                    window__x.css('background-image', 'url(' + img + ')');
                    open__image.addClass('open').stop().transition({ opacity: 1, scale: 1 }, 500);
                });

                close__link.on('click', function()
                {
                    open__image.stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                        $(this).removeClass('open');
                    });
                });

                var switch__section = $('.switch__section a');
                switch__section.on('click', function() {
                    var __this = $(this);
                    switch__section.removeClass('active');
                    __this.addClass('active');
                });

                var switch__year = $('.switch__year a');
                switch__year.on('click', function() {
                    var __this = $(this);
                    switch__year.removeClass('active');
                    __this.addClass('active');
                });

                var cam = $('div.cams a');
                cam.on('click', function(){
                    var __this = $(this);
                    __this.addClass('absolute');
                    __this.find('span.close').click(function(e)
                    {
                        e.preventDefault();e.stopPropagation();
                        __this.removeClass('absolute');
                    });
                });

                /**
                 *
                 */
                $('.switch__section a').on('click', function()
                {
                    var attr__year = $(this).attr('attr-section');
                    $('[data-section]').parent().fadeOut(0);
                    $('[data-section="'+attr__year+'"]').parent().fadeIn(300);
                });

                /**
                 *
                 */
                $('.switch__year a').on('click', function()
                {
                    var attr__year = $(this).attr('attr-year');
                    $('[data-year]').parent().fadeOut(0);
                    $('[data-year="'+attr__year+'"]').parent().fadeIn(300);
                });

            })();
        }
        //Конец "Динамики строительства".

        /**
         * О застройщике.
         */
        if(DATA_TARGET == 'developer__page')
        {
            (function()
            {
                var container = $('#developer__page');
                var content = container.find('.content');
                content.eq(0).addClass('open').stop().transition({ opacity: 1, left: 0 }, 300);
            })();
        }
        //Конец "О застройщике".

        if(DATA_TARGET == 'apartments__home__page')
        {
            $('div.selection-apartments').transition({ opacity:1, scale:1 }, 1000);
            $('div.direction-icon').transition({ opacity:1, scale:1 }, 1000);
            var animationSelection = setInterval(function(){
                $('div.information-container div.selection-apartments div.flip-container').toggleClass('hover');
            }, 3000);


            /*$('svg').on('click', function(){
                console.log('xxx');
            });*/

            var paper_size = $('.plans__map').area2svgStoreSection
            (
                {
                    'opacity':0,
                    'fill': '#80D028',
                    'fill-opacity': 1,
                    'stroke-opacity': 0,
                    onclick: function (el)
                    {
                        var storey = el.data('section');
                        if(storey != undefined && storey != false){
                            //self.location = '/СЌС‚Р°Р¶/'+storey+'/';
                            BODY.load__content('/apartments/section/'+storey+'/');
                        }


                        //self.location = '/СЌС‚Р°Р¶/1/';
                    },

                    onmouseover: function (el, e)
                    {
                        el.animate({'opacity': 0.5}, 100);
                        var storey = el.data('storey');
                        $('div.information-container  div.scale').transition({ opacity:1, scale:1 }, 1000);
                        $('div.information-container div.selection-apartments').transition({ opacity:0, scale:1.1 }, 1000, function(){
                            $(this).remove();
                        });

                        $('div.information-container div.storey span').text(storey);
                    },

                    onmousemove: function (el, e)
                    {
                        el.animate({'opacity': 0.5}, 0);
                    },

                    onmouseout: function (el)
                    {
                        el.animate({'opacity': el.data('opacity')}, 100);
                    }
                }
            );
            contentResize();

            var container = $('.dynamic__frame__resize');
            paper_size.changeSize(container.width(), container.height(), true, false);
            $(window).bind('resize', function (){
                paper_size.changeSize(container.width(), container.height(), true, false);
            });
        }

        /**
         *
         */
        if(DATA_TARGET == 'apartments__storey__page')
        {
            var timeAnimate = 800;

            var paper_size = $('.plans__map.svg__section').area2svgStoreSection
            (
                {
                    //'opacity':0.5,
                    'fill': '#80D028',
                    'fill-opacity': 1,
                    'stroke-opacity': 0,
                    onclick: function (el)
                    {
                        var section = el.data('section');
                        if(el.data('storey') == '0'){
                           BODY.load__content('/apartments/section/'+section);
                           //$('.section__1').stop().css({'translate': 0}).transition({'translate': '-100%'}, timeAnimate);
                           //$('.section__2').stop().css({'translate': 0}).transition({'translate': '-100%'}, timeAnimate);
                           //$('.section__3').stop().css({'translate': 0}).transition({'translate': '-100%'}, timeAnimate);

                        }

                        if(el.data('storey') != '0'){
                            BODY.load__content('/apartments/section/'+section+'/storey/'+el.data('storey'));
                        }
                    },

                    onmouseover: function (el, e)
                    {
                        el.animate({'opacity': 0.8}, 100);
                    },

                    onmousemove: function (el, e)
                    {
                        if(el.data('opacity') != 0){
                            el.animate({'opacity': 0.8}, 0);
                            $('.tooltip__info div.storey span').text(el.data('storey'));
                            $('.tooltip__info div.an span').text(el.data('apartment-id'));
                            $('.tooltip__info div.an b').text(getWord(el.data('apartment-id'), ['квартира', 'квартиры', 'квартир']));
                            $('.tooltip__info').addClass('open').css({ left: e.pageX + 209, top: e.pageY });
                        }
                    },

                    onmouseout: function (el)
                    {
                        $('.tooltip__info').removeClass('open');
                        el.animate({'opacity': el.data('opacity')}, 100);
                    }
                }
            );
            contentResize();

            var container = $('.dynamic__frame__resize');
            paper_size.changeSize(container.width(), container.height(), true, false);
            $(window).bind('resize', function (){
                paper_size.changeSize(container.width(), container.height(), true, false);
            });
        }
        /**/

        if(DATA_TARGET == 'apartments__storey__page__other')
        {
            var paper_size = $('.plans__map.plans__map__other').area2svgStoreSection
            (
                {
                    //'opacity':0.5,
                    'fill': '#80D028',
                    'fill-opacity': 1,
                    'stroke-opacity': 0,
                    onclick: function (el) {
                        var section = el.data('section');
                        if (section == '1' && el.data('storey') == '0') {
                            $('.section__1').css({'translate': 0}).stop().transition({'translate': '100%'}, timeAnimate);
                            $('.section__2').css({'translate': 0}).stop().transition({'translate': '100%'}, timeAnimate);
                            $('.section__3').css({'translate': 0}).stop().transition({'translate': '100%'}, timeAnimate);
                        }

                        if (section == '3' && el.data('storey') == '0') {
                            BODY.load__content('/apartments/section/3');
                        }

                        if (section == '4' && el.data('storey') == '0') {
                            BODY.load__content('/apartments/section/4');
                        }

                        if (section == '5' && el.data('storey') == '0') {
                            BODY.load__content('/apartments/section/5');
                        }

                        if (el.data('storey') != '0') {
                            BODY.load__content('/apartments/section/'+el.data('section')+'/storey/'+el.data('storey'));
                        }
                    },

                    onmouseover: function (el, e) {
                    },

                    onmousemove: function (el, e) {
                        var apartments__counts = (el.data('apartment-id') == false) ? 0 : el.data('apartment-id');
                        if (el.data('opacity') != 0) {
                            el.animate({'opacity': 0.8}, 300);
                            $('.tooltip__info div.storey span').text(el.data('storey'));
                            $('.tooltip__info div.an span').text(apartments__counts);
                            $('.tooltip__info div.an b').text(getWord(apartments__counts, ['квартира', 'квартиры', 'квартир']));
                            $('.tooltip__info').addClass('open').css({left: e.pageX + 209, top: e.pageY});
                        }
                    },

                    onmouseout: function (el) {
                        $('.tooltip__info').removeClass('open');
                        el.animate({'opacity': el.data('opacity')}, 300);
                    }
                }
            );
            contentResize();

            var container = $('.dynamic__frame__resize');
            paper_size.changeSize(container.width(), container.height(), true, false);
            $(window).bind('resize', function () {
                paper_size.changeSize(container.width(), container.height(), true, false);
            });
        }






        if(DATA_TARGET == 'apartments__storey__all__plan')
        {
            //(function()
            //{
                $('.scale').transition({ opacity:1, scale:1 }, 1000);
                $('.storey-section-background:first').load(function(){
                    $(this).unbind('load');
                    $('.plan-section').transition({ opacity: 1 }, 1500);
                });

            $('.switch__section rect, .switch__section path').click(function()
            {
                var section__id = $(this).attr('section__id');
                BODY.load__content('/apartments/section/'+section__id+'/');
            });

            $('.selection__svg__click').click(function()
            {
                $(this).remove();
                alert('dfg');
            });

            $('.send__booking__controller').click(function()
            {
                showLoader();
                $.post('/popups/?section=send__booking', {}, function(r){
                    $('body').append(r);
                    $('#send__booking').stop().transition({ opacity: 1, scale: 1 }, 500);
                    hideLoader();

                    $('#send__booking a.close').click(function()
                    {
                        $('#send__booking').stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                            $(this).remove();
                        });
                    });

                    $(document).mouseup(function(e) {
                        var container = $("#send__booking div.window");
                        if (!container.is(e.target) && container.has(e.target).length === 0) {
                            $("#send__booking").stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                                $(this).remove();
                            });
                        }
                    });
                });
            });

                var paper__size = $('.storey-section-svg').area2svgStoreSection
                (
                    {
                        'opacity': 0.5,
                        'fill': '#47A2DA',
                        'fill-opacity': 1,
                        'stroke-opacity': 0,
                        each: function(el)
                        {
                            var section = el.data('section');
                            if(section != 4 && section != 5)
                            {
                                apartmentsData(function(response)
                                {
                                    var data = JSON__APARTMENTS[el.data('alt')];
                                    if(data.tc == false){
                                        //console.log('xx');
                                        el.attr('opacity', 0);
                                        el.remove();
                                    }
                                    //console.log(data);
                                });
                            }

                            if(section == 4)
                            {
                                apartmentsData4_5(function(response)
                                {
                                    var data = JSON__APARTMENTS[el.data('alt')];
                                    if(data.tc == false){
                                        el.attr('opacity', 0);
                                        el.remove();
                                    }
                                    //console.log(data);
                                });
                            }
                            if(section == 5)
                            {
                                apartmentsData4_5(function(response)
                                {
                                    var data = JSON__APARTMENTS[el.data('alt')];
                                    if(data.tc == false){
                                        el.attr('opacity', 0);
                                        el.remove();
                                    }
                                    //console.log(data);
                                });
                            }
                        },
                        onclick: function (el)
                        {
                            var section = el.data('section');
                            if(section != 4 && section != 5)
                            {
                                BODY.load__content('/apartment__view/id/'+el.data('alt')+'/s/123');
                            }
                            else if(section == 4)
                            {
                                BODY.load__content('/apartment__view/id/'+el.data('alt')+'/s/4');
                            }
                            else if(section == 5)
                            {
                                BODY.load__content('/apartment__view/id/'+el.data('alt')+'/s/5');
                            }
                        },
                        onmouseover: function (el, e)
                        {
                            var section = el.data('section');
                            if(section != 4 && section != 5)
                            {
                                apartmentsData(function(response)
                                {
                                    var alt = el.data('alt');
                                    var price = JSON__APARTMENTS[alt].tc.toFixed(0).replace(/./g, function(c, i, a) {
                                        return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
                                    });

                                    var RC = (JSON__APARTMENTS[alt].rc == 0) ? 'С' : JSON__APARTMENTS[alt].rc;

                                    $('#area__change').text(JSON__APARTMENTS[alt].sq);
                                    $('#rooms__change').html(RC);
                                    $('#price__change').text(price+' р.');

                                    //$('#price__change').text('По запросу');
                                });

                                el.animate({ 'opacity': 0.6}, 300);
                                $('.apartment b b').text(el.data('apartment-number'));
                                $('.apartment').addClass('open').transition({scale:1, opacity:1, visibility:'visible'}, 600);
                                $('.apartment__info').transition({ opacity: 1 }, 500);
                            }

                            if(section == 4 || section == 5)
                            {
                                apartmentsData4_5(function(response)
                                {
                                    var alt = el.data('alt');
                                    //alert(JSON__APARTMENTS[alt].sq);
                                    var price = JSON__APARTMENTS[alt].tc.toFixed(0).replace(/./g, function(c, i, a) {
                                        return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
                                    });


                                    var RC__PARSE = parseInt(JSON__APARTMENTS[alt].rc, 10);
                                    var RC = (RC__PARSE == 0) ? 'С' : RC__PARSE;

                                    $('#area__change').text(JSON__APARTMENTS[alt].sq);
                                    $('#rooms__change').html(RC);
                                    $('#price__change').text(price+' р.');


                                    //$('#price__change').text('По запросу');
                                });

                                el.animate({ 'opacity': 0.6}, 300);
                                $('.apartment b b').text(el.data('apartment-number'));
                                $('.apartment').addClass('open').transition({scale:1, opacity:1, visibility:'visible'}, 600);
                                $('.apartment__info').transition({ opacity: 1 }, 500);
                            }
                        },
                        onmousemove: function (el, e)
                        {
                            //el.animate({'opacity': 0.7, scale:1.2}, 300);
                            el.attr('opacity', 0.6);
                        },
                        onmouseout: function (el)
                        {
                            //el.attr('opacity', 0.2);
                            el.animate({ 'opacity': 0.2}, 300);
                        }
                    }
                );

            if($('#plan__resize__horizontal').val() == '1'){
                /*var fr=$('.floor__map-centrer');
                var fr2=fr.parent();
                var plan_size2=Math.min(fr2.width()*1.25 ,750);
                var plan__size__width = 936;
                var plan__size__height = 539;
                console.log(plan_size2);
                fr.css({'width':plan__size__width,'height':plan__size__height});
                paper__size.changeSize(plan__size__width, plan__size__height, true, false);*/
                var fr=$('.floor__map-centrer');
                var fr2=fr.parent();
                var plan_size=Math.min(fr2.width()*1.25,fr2.height());
                fr.css({'width':plan_size,'height':plan_size/*,'margin-top':-0.5*plan_size,'margin-left':-0.5*plan_size*/});
                paper__size.changeSize(plan_size, plan_size, true, false);
            }
            else
            {
                var fr=$('.floor__map-centrer');
                var fr2=fr.parent();
                var plan_size=Math.min(fr2.width()*1.25,fr2.height());
                fr.css({'width':plan_size,'height':plan_size/*,'margin-top':-0.5*plan_size,'margin-left':-0.5*plan_size*/});
                paper__size.changeSize(plan_size, plan_size, true, false);
                //paper__size.changeSize(container.width(), container.height(), true, false);
            }

                contentResize();
            //})();
        }

        if(DATA_TARGET == 'apartments__view__page')
        {
            var fr111=$('.apart-frame__centrer');
            var fr222=fr111.parent();
            var plan_size22=Math.min(fr222.width(),fr222.height());
            fr111.css({'width':plan_size22 - 100,'height':plan_size22 - 100/*,'margin-top':-0.5*plan_size,'margin-left':-0.5*plan_size*/});
            //paper__size.changeSize(plan_size, plan_size, true, false);
            //paper__size.changeSize(container.width(), container.height(), true, false);
            contentResize();

            $('.send__plan__controller').click(function()
            {
                showLoader();
                $.post('/popups/?section=send__plan', {}, function(r){
                    $('body').append(r);
                    $('#send__plan').stop().transition({ opacity: 1, scale: 1 }, 500);
                    hideLoader();

                    $('#send__plan a.close').click(function()
                    {
                        $('#send__plan').stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                            $(this).remove();
                        });
                    });
                });
            });

            $('.send__booking__controller').click(function()
            {
                var an = $(this).attr('an');
                showLoader();
                $.post('/popups/?section=send__booking', {}, function(r){
                    $('body').append(r);
                    $('#send__booking').stop().transition({ opacity: 1, scale: 1 }, 500);
                    hideLoader();

                    $('.phone-mask').mask('+7(999)999-99-99');


                    $('#send__booking a.close').click(function()
                    {
                        $('#send__booking').stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                            $(this).remove();
                        });
                    });

                    $(document).mouseup(function(e) {
                        var container = $("#send__booking div.window");
                        if (!container.is(e.target) && container.has(e.target).length === 0) {
                            $("#send__booking").stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                                $(this).remove();
                            });
                        }
                    });

                    $(document).off("#booking__form", "submit");
                    $(document).undelegate("#booking__form", "submit");
                    $(document).delegate("#booking__form", "submit", function(e)
                    {
                        var __this = $(this);
                        var user__name = __this.find('input[name="user__name"]');
                        var user__phone = __this.find('input[name="user__phone"]');
                        var submit = __this.find('button[type="submit"]');

                        if(user__name.val() == false || user__phone.val() == false)
                        {
                            alert('Пожалуйста, заполните поля.');
                        }
                        else
                        {
                            submit.attr('disabled', 'disabled');
                            submit.text('Подождите...');
                            $.post('/callbacks/?act=booking', { user__name: user__name.val(), user__phone: user__phone.val(), number: an }, function(r){
                                if(r == '200')
                                {
                                    alert('Спасибо за вашу заявку. С вами свяжутся в ближайшее время.');
                                    $('#send__booking').stop().transition({ opacity: 0, scale: 1.1 }, 500, function(){
                                        $(this).remove();
                                    });
                                }

                                submit.removeAttr('disabled');
                                submit.text('Забронировать');
                            });
                            //alert(user__name.val());
                        }
                    });
                });

            });
        }


        if(DATA_TARGET == 'apartments__selection__page')
        {

            /*var aaa = apartmentsData(function(response)
            {
                var frame2 = $('.div__100');
                //JSON__APARTMENTS = {'apartments': JSON__APARTMENTS};
                console.log(JSON__APARTMENTS);
                frame2.searchInit({
                    data : JSON__APARTMENTS,
                    scroll_height : 50,
                    notfound_text : 'По данным параметрам ничего не найдено.',
                    pagination : 0,
                    // zero_rooms: 'С',
                    loadAnimate:function(el) {
                        el.css('opacity', 0);

                    },
                    unloadAnimate:function(el) {

                    },
                    resultClick:function(id) {
                        //window.open('/assets/php/pdf.php?id=' + id, '_blank');
                        $('.form__container').css('z-index', '11000');
                        loadForm(
                            '/assets/pages/forms/callback.html',
                            function(el) {
                                el.css({'height' : 0, 'opacity' : 0}).transition({'opacity' : 1, 'height' : 460}, 500);
                            },
                            function(el) {
                                el.find('input')
                                    .eq(1).mask('+7 (999) 999-99-99').end()
                                    .eq(2).mask('99:99');
                            }
                        );
                    }
                });
            });*/


            $('#apartments__selection__page .section__selected a').click(function()
            {
                //alert('fg');
                $('#apartments__selection__page .section__selected a').removeClass('active');
                var section = $(this).attr('attr-section');
                $(this).addClass('active');
                $('.find-the-apartment').hide();

                $('.find-the-apartment[attr-section="'+section+'"]').show();
            });
           /* $('#apartments__selection__page .section__selected a').clickToggle(function()
                {
                    var section = $(this).attr('attr-section');
                    alert(section);
                $(this).addClass('active');
            },
                function()
                {
                $(this).removeClass('active');
            });*/

            var fr11=$('.apart-frame__centrer');
            var fr3=fr11.parent();
            var plan_size2=Math.min(fr3.width(),fr3.height());
            fr11.css({'width':plan_size2,'height':plan_size2});

            $('.find-the-apartment div.col').hover(function(){

            });

            (function()
            {
                var selectionAjax = function()
                {
                    //Принимаем сортировочные данные.
                    var storey = $('#selection-apartment-storey').val();
                    var rooms = $('#selection-apartment-rooms').val();
                    var area = $('#selection-apartment-area').val();
                    var price = $('#selection-apartment-price').val();

                    //Формируем POST запрос на выборку квартир по параметрам сортировки.
                    $('#waiting').addClass('open').transition({opacity: 1, scale: 1}, 600, function(){
                        //$(this).addClass('open');
                    });
                    $.post("/selection/?sorting=continue", { 'storey': storey, 'rooms': rooms, 'area': area, 'price': price }).done(function(data)
                    {
                        //Заполняем таблицу отсортированными квартирами.
                        //Отображаем счетчик отсортированных квартир.

                        console.log(data);

                        setTimeout(function(){
                            $('#apartments__selection__page .section__selected a').removeClass('active');
                            $('#waiting').transition({opacity: 0, scale: 1.2}, 600, function(){
                                $(this).removeClass('open');
                            });
                            $('#end-resulting div.resulting').html(data);
                            $('div.all b').text($('.r').eq(0).attr('count'));
                        }, 500);
                        //Формируем функцию, отвечающую за клик по отсортированной квартире.
                        $('.find-the-apartment').click(function() {
                            //alert('d');
                            //window.location = '/apartment/find/'+$(this).attr('data-id')+'/'+$(this).attr('data-section')+'/';
                            //BODY.load__content('/этаж/'+$(this).attr('attr-storey')+'/квартира/'+$(this).attr('attr-apartment-number')+'/'+$(this).attr('attr-img')+'/');
                            //BODY.load__content('/apartment__view/id/'+$(this).attr('attr-section')+'-'+$(this).attr('attr-apartment-number')+'/');
                        });


                    });
                };


                    //Формируем функцию, отвечающую за клик по отсортированной квартире.
                $(document).delegate(".find-the-apartment", "click", function(e){
                    //$('.find-the-apartment').click(function() {
                    //window.location = '/этаж/'+$(this).attr('attr-storey')+'/квартира/'+$(this).attr('attr-apartment-number')+'/'+$(this).attr('attr-img')+'/';
                    //BODY.load__content('/этаж/'+$(this).attr('attr-storey')+'/квартира/'+$(this).attr('attr-apartment-number')+'/'+$(this).attr('attr-img')+'/');
                    //BODY.load__content('/квартира/'+$(this).attr('attr-apartment-number')+'/');
                    BODY.load__content('/apartment__view/id/'+$(this).attr('attr-section')+'-'+$(this).attr('attr-apartment-number')+'/');
                });


                    //$('body *').disableSelection();
                $('div#apartment-selection div#calc div.slider-range').each(function(i, v)
                {
                    //Формируем переменные.
                    var el = $(this);
                    var min = parseFloat(el.attr('minimal'));
                    var max = parseFloat(el.attr('max'));
                    var defaultValues = el.attr('default-values');
                    var dataType = el.attr('data-type');
                    var step = (el.attr('float') == 'false') ? 1 : .0001;

                    el.slider(
                        {
                            range: true,
                            min: min,
                            max: max,
                            step: step,
                            animate: "slow",
                            distance: 0,
                            values: [min, max],
                            stop: function (event, ui) {
                                $(".ui-slider-handle", el).eq(0).text(parseInt(ui.values[0], 10));
                                $(".ui-slider-handle", el).eq(1).text(parseInt(ui.values[1]));
                                if(ui.values[0] == 0) $(".ui-slider-handle", el).eq(0).text('Ст.');
                                if(dataType == 'storey') $('#selection-apartment-storey').val(ui.values[0]+'##'+ui.values[1]);
                                if(dataType == 'rooms') $('#selection-apartment-rooms').val(ui.values[0]+'##'+ui.values[1]);
                                if(dataType == 'area') $('#selection-apartment-area').val(ui.values[0]+'##'+ui.values[1]);
                                if(dataType == 'price') $('#selection-apartment-price').val(ui.values[0]+'##'+ui.values[1]);

                                selectionAjax();
                                /*$(".ui-slider-handle", el).eq(0).text(parseInt(ui.values[0], 10));
                                 $(".ui-slider-handle", el).eq(1).text(parseInt(ui.values[1]));
                                 if(ui.values[0] == 0) $(".ui-slider-handle", el).eq(0).text('Ст.');
                                 if(dataType == 'storey') $('#selection-apartment-storey').val(ui.values[0]+'##'+ui.values[1]);
                                 if(dataType == 'rooms') $('#selection-apartment-rooms').val(ui.values[0]+'##'+ui.values[1]);
                                 if(dataType == 'area') $('#selection-apartment-area').val(ui.values[0]+'##'+ui.values[1]);
                                 if(dataType == 'price') $('#selection-apartment-price').val(ui.values[0]+'##'+ui.values[1]);

                                 //Передаем все данные в функцию AJAX сортировки квартир.
                                 selectionAjax();*/
                            }
                        });

                    //Помещаем в бегунки слайдера изначальные данные. (Данные по умолчанию).
                    $(".ui-slider-handle", el).eq(0).text(min);
                    $(".ui-slider-handle", el).eq(1).text(max);

                    //Если квартира является студией, то в бегунки слайдера помещаем соответствующую аббривиатуру.
                    if(min == 0) $(".ui-slider-handle", el).eq(0).text('Ст.');
                });
            })();

        }







        /**
         *
         */
        if(DATA_TARGET == 'apartments__podbor__page')
        {
            (function()
            {
                apartmentsData(function(){
                    $('#apartment-selection').searchApartments({
                        data: JSON__APARTMENTS
                    });

                    $(document).delegate(".find-the-apartment", "click", function(e){
                        BODY.load__content('/apartment__view/id/'+$(this).attr('attr-section')+'-'+$(this).attr('attr-apartment-number')+'/s/123');
                    });
                });
            })();
        }
        /**/

        if(DATA_TARGET == 'apartments__podbor__page__new')
        {
            (function()
            {
                function showSearch()
                {
                    function unique(array){
                        var hash = {};
                        return array.filter(function(item) {
                            return hash.hasOwnProperty(item) ? false : (hash[item] = true);
                        });
                    };



                    var param__search = $('#apartments__search--container');
                    param__search.empty();

                    apartmentsData2(function(response)
                    {
                        param__search.parametricSearch({
                            data : JSON__APARTMENTS2,
                            scroll_height : 50,
                            notfound_text : 'По данным параметрам ничего не найдено.',
                            pagination : 0,
                            // zero_rooms: 'С',
                            loadAnimate:function(el) {
                                //el.css({'display' : 'block', 'translate' : '70%', 'opacity' : 0}).transition({'translate' : 0, 'opacity' : 1}, 1000);
                            },
                            unloadAnimate:function(el) {
                                param__search.empty();
                                param__search.destroy();
                                /*el.transition({'translate' : '-70%', 'opacity' : 0}, 1000, function() {
                                    param__search.empty();
                                    param__search.destroy();
                                });*/

                            },
                            resultClick:function(id) {
                                var regex = id.split('-');
                                if(regex[0] == 1 || regex[0] == 2 || regex[0] == 3){
                                    BODY.load__content('/apartment__view/id/'+id+'/s/123');
                                }

                                if(regex[0] == 4){
                                    BODY.load__content('/apartment__view/id/1-'+regex[1]+'/s/4');
                                }
                                if(regex[0] == 5){
                                    BODY.load__content('/apartment__view/id/2-'+regex[1]+'/s/5');
                                }
                               // console.log(regex);
                                //BODY.load__content('/apartment__view/id/'+id+'/s/123');
                            }
                        });
                    });
                }

                showSearch();
            })();
        }




        if(DATA_TARGET == 'address__page')
        {
            var placementMap = function ()
            {
                var styles = [
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#e0efef"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#1900ff"
                            },
                            {
                                "color": "#c0e8e8"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": 700
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#7dcdcd"
                            }
                        ]
                    }
                ];
                var styledMap = new google.maps.StyledMapType(styles, {name: "Эрмитаж"});
                var mapOptions = {
                    zoom: 17,
                    center: new google.maps.LatLng(/*54.768284, 56.028531*/54.766011, 56.035760),
                    zoomControl: true,
                    scrollwheel: true,
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
                    }
                };
                var map = new google.maps.Map(document.getElementById('address-map-loading'), mapOptions);
                map.mapTypes.set('map_style', styledMap);
                map.setMapTypeId('map_style');

                var directionsDisplay = new google.maps.DirectionsRenderer();
                var directionsService = new google.maps.DirectionsService();
                directionsDisplay.setMap(map);
                directionsDisplay.setOptions( { suppressMarkers: true, suppressInfoWindows: true } );

                //Формируем функцию определения координат.
                var fromLatLngToPoint = function(latLng, map)
                {
                    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
                    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
                    var scale = Math.pow(2, map.getZoom());
                    var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
                    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
                };


                var getMarkerInsert = function(coords, message, icon, notitle)
                {
                    var iconBasic = '/assets/images/address__page/icon__'+icon+'.png';
                    if(icon == 'overlay') iconBasic = '/assets/svg/icons/map/icon__'+icon+'.png';
                    var messageIcon = message;
                    var latitudeCoords = coords;

                    //Формируем непосредственно сам маркер.
                    var getMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(latitudeCoords[0], latitudeCoords[1]),
                        map: map,
                        clickable: true,
                        tooltipContent: messageIcon
                    }); getMarker.setIcon(iconBasic);

                    google.maps.event.addListener(getMarker, 'click', function() {
                        //window.location = '/address/'+icon+'/';
                    });
                };

                var markersArray = [
                    [[54.768288, 56.034912], 'Церковь Иисуса Христа святых последних дней', 'church', 0],
                    [[54.768856, 56.034786], 'Магазин &laquo;Магнит&raquo;', 'shop', 0],
                    [[54.769232, 56.031471], 'Магазин &laquo;Альтаир&raquo;', 'shop', 0],
                    [[54.769492, 56.033057], 'Магазин', 'shop', 0],
                    [[54.769351, 56.031423], 'Остановка &laquo;Бульвар Тюлькина&raquo;', 'bus', 0],
                    [[54.769509, 56.030828], 'Сбербанк', 'atm', 1],
                    [[54.770079, 56.031884], 'Супермаркет &laquo;Байрам&raquo;', 'shop', 1],
                    [[54.770141, 56.032799], 'Остановка &laquo;Глумилино&raquo;', 'bus', 1],
                    [[54.711130, 55.973342], 'Универмаг &laquo;Старая Уфа&raquo;', 'shop', 3],
                    [[54.767711, 56.032780], 'Магазин', 'shop', 3],
                    [[54.770669, 56.028971], 'Павловский Парк', 'park', 3],
                    [[54.769989, 56.027952], 'Уфимский многопрофильный профессиональный колледж', 'student', 3],
                    [[54.767835, 56.034561], 'Десткий сад &laquo;Журавушка&raquo;', 'student', 3],
                    [[54.767024, 56.025194], 'Лицей №6', 'student', 3],
                    [[54.769314, 56.025076], 'Райффайзенбанк', 'bank', 3],
                    [[54.767282, 56.027486], 'Магазин №27', 'shop', 3],
                    [[54.770197, 56.035588], 'Клидо, торгово-бытовой комплекс', 'shop', 3]
                ];


                $('.infrastructure__item.active').click(function() {
                    var _this = $(this); _this.toggleClass('active');
                    var targ = _this.attr('data-targ');
                    var hasClassActive = _this.hasClass('active');

                    $('span.check', _this).toggleClass('close');

                    markersListing.forEach(function(item, i, arr){
                        var pointClass = arr[i]['class'];
                        var pointVisible = arr[i];
                        if(targ == pointClass) {
                            pointVisible.setVisible(hasClassActive);
                        }
                    });
                });

                //Функция определения прогрузки карты.
                //google.maps.event.addListenerOnce(map, 'idle', function()
                google.maps.event.addListenerOnce(map, 'idle', function()
                {
                    getMarkerInsert([54.765893, 56.032295], 'Глумилино', 'hermitage');
                    //$('.gmnoprint').remove();

                    var markersListing = [];
                    markersArray.forEach(function(item, i, arr){
                        //console.log(arr[i]);
                        var iconBasic = '/assets/images/address__page/icons/'+arr[i][2]+'.png';
                        var iconHover = '/assets/images/address__page/icons/'+arr[i][2]+'[hover].png';
                        var messageIcon = arr[i][1];

                        //Формируем непосредственно сам маркер.
                        var getMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(arr[i][0][0], arr[i][0][1]),
                            map: map,
                            clickable: true,
                            tooltipContent: messageIcon
                        }); getMarker.setIcon(iconBasic);

                        getMarker.set("class", arr[i][3]);
                        markersListing.push(getMarker);

                        //Если на маркер наведен курсор.
                        google.maps.event.addListener(getMarker, 'mouseover', function()
                        {
                            var m = $('#marker-tooltip'); getMarker.setIcon(iconHover);
                            var point = fromLatLngToPoint(getMarker.getPosition(), map);
                            m.html(getMarker.tooltipContent).css({'left': (point.x - (m.width() / 2) - 10), 'top': (point.y - 110)}).show();
                        });

                        //Если с маркера убран курсор.
                        google.maps.event.addListener(getMarker, 'mouseout', function() {
                            $('#marker-tooltip').hide();
                            getMarker.setIcon(iconBasic);
                        });
                    });

                    var markerCluster = new MarkerClusterer(map, markersListing, {
                        styles: [
                            {
                                textColor: 'white',
                                url: '/assets/images/address__page/map-zoom-point.png',
                                height: 47,
                                width: 47,
                                textSize: 19.5
                            }
                        ]
                    });
                });
            };

            ///placementMap();

            wheelzoom(document.querySelector('#wheelzoom'));

            $('.legend__frame').stop().transition({ bottom: -300 }, 500);
            $('.description__frame a.close').click(function()
            {
                $('.description__frame').stop().transition({ top: -500, opacity: 0 }, 500);
                $('.legend__frame').stop().transition({ bottom: 200, right:0, opacity: 1 }, 500);
            });

            /*var iii = 0;
            $('#image__map').mousewheel(function(event, delta, deltaX, deltaY)
            {
                iii += parseInt(delta, 10);
                if(iii >= 10){
                    iii = 0;
                }
                var upDown = delta > 0?' up':' down';
                $(this).css('transform', 'scale(1.0'+iii+');');
                console.log(upDown);
                console.log(iii);
            });*/
        }

        if(DATA_TARGET == 'gallery__page')
        {
            function updateGalleryNum(cur_num){
                cur_num += 1;
                //frame.find('.gallery__num').html('<strong>' + ((cur_num < 10)? '0' : '') + cur_num + '</strong><span>/' + ((images_count < 10)? '0' : '') + images_count + '</span>')
            }

            if(isMobileDevice == false)
            {
                var gallery_images = [
                    {"src":"/assets/images/gallery/update/1.jpg","title":""},
                    {"src":"/assets/images/gallery/update/2.jpg","title":""},
                    {"src":"/assets/images/gallery/update/3.jpg","title":""},
                    {"src":"/assets/images/gallery/update/4.jpg","title":""},
                    {"src":"/assets/images/gallery/update/5.jpg","title":""},
                    {"src":"/assets/images/gallery/update/6.jpg","title":""},
                    {"src":"/assets/images/gallery/update/7.jpg","title":""},
                    {"src":"/assets/images/gallery/update/8.jpg","title":""},
                    {"src":"/assets/images/gallery/update/9.jpg","title":""},
                    {"src":"/assets/images/gallery/update/10.jpg","title":""},
                    {"src":"/assets/images/gallery/update/11.jpg","title":""},
                    {"src":"/assets/images/gallery/update/12.jpg","title":""},
                    {"src":"/assets/images/gallery/update/13.jpg","title":""},
                    {"src":"/assets/images/gallery/update/14.jpg","title":""},
                    {"src":"/assets/images/gallery/update/15.jpg","title":""},
                    {"src":"/assets/images/gallery/update/16.jpg","title":""},
                    {"src":"/assets/images/gallery/update/17.jpg","title":""},
                    {"src":"/assets/images/gallery/update/18.jpg","title":""},
                    {"src":"/assets/images/gallery/update/19.jpg","title":""},
                    {"src":"/assets/images/gallery/update/21.jpg","title":""},
                    {"src":"/assets/images/gallery/update/22.jpg","title":""},
                    {"src":"/assets/images/gallery/update/23.jpg","title":""},
                    {"src":"/assets/images/gallery/update/24.jpg","title":""},

                    {"src":"/assets/images/gallery/mop/01.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/02.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/03.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/04.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/05.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/06.jpg","title":""}
                ];
            }

            if(isMobileDevice == true)
            {
                var gallery_images = [
                    {"src":"/assets/images/gallery/update/m/1.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/2.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/3.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/4.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/5.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/6.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/7.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/8.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/9.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/10.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/11.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/12.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/13.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/14.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/15.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/16.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/17.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/18.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/19.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/21.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/22.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/23.jpg","title":""},
                    {"src":"/assets/images/gallery/update/m/24.jpg","title":""},

                    {"src":"/assets/images/gallery/mop/01.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/02.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/03.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/04.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/05.jpg","title":""},
                    {"src":"/assets/images/gallery/mop/06.jpg","title":""}
                ];
            }

            var start_num=0;
            var gallery_frame = $('.gallery_place');

            var images__slide__array = $('#images__slide__array').text();
            var gallery = gallery_frame.galleryInit({
                images:JSON.parse(images__slide__array),
                start_num: start_num,
                previews: false,
                dots: true,
                vertical: false,
                zoom: 0,
                loadComplete: function() {
                    //frame1.find('.wait-load').remove();
                },
                afterMove: updateGalleryNum
            });

            var BlurBGImage	= (function() {

                var $bxWrapper			= $('#bx-wrapper'),
                // loading status to show while preloading images
                    $bxLoading			= $bxWrapper.find('div.bx-loading'),
                // container for the bg images and respective canvas
                    $bxContainer		= $bxWrapper.find('div.bx-container'),
                // the bg images we are gonna use
                    $bxImgs				= $bxContainer.children('img'),
                // total number of bg images
                    bxImgsCount			= $bxImgs.length,
                // the thumb elements
                    $thumbs				= $bxWrapper.find('div.bx-thumbs > a').hide(),
                // the title for the current image
                    $title				= $bxWrapper.find('h2:first'),
                // current image's index
                    current				= 0,
                // variation to show the image:
                // (1) - blurs the current one, fades out and shows the next image
                // (2) - blurs the current one, fades out, shows the next one (but initially blurred)
                // speed is the speed of the animation
                // blur Factor is the factor used in the StackBlur script
                    animOptions			= { speed : 700, variation : 1, blurFactor : 10 },
                // control if currently animating
                    isAnim				= false,
                // check if canvas is supported
                    supportCanvas 		= Modernizr.canvas,

                // init function
                    init				= function() {

                        // preload all images and respective canvas
                        var loaded = 0;

                        $bxImgs.each( function(i) {

                            var $bximg	= $(this);

                            // save the position of the image in data-pos
                            $('<img data-pos="' + $bximg.index() + '"/>').load(function() {

                                var $img	= $(this),
                                // size of image to be fullscreen and centered
                                    dim		= getImageDim( $img.attr('src') ),
                                    pos		= $img.data( 'pos' );

                                // add the canvas to the DOM
                                $.when( createCanvas( pos, dim ) ).done( function() {

                                    ++loaded;

                                    // all images and canvas loaded
                                    if( loaded === bxImgsCount ) {

                                        // show thumbs
                                        $thumbs.fadeIn();

                                        // apply style for bg image and canvas
                                        centerImageCanvas();

                                        // hide loading status
                                        $bxLoading.hide();

                                        // initialize events
                                        initEvents();

                                    }

                                });

                            }).attr( 'src', $bximg.attr('src') );

                        });

                    },
                // creates the blurred canvas image
                    createCanvas		= function( pos, dim ) {

                        return $.Deferred( function(dfd) {

                            // if canvas not supported return
                            if( !supportCanvas ) {
                                dfd.resolve();
                                return false;
                            }

                            // create the canvas element:
                            // size and position will be the same like the fullscreen image
                            var $img	= $bxImgs.eq( pos ),
                                imgW	= dim.width,
                                imgH	= dim.height,
                                imgL	= dim.left,
                                imgT	= dim.top,

                                canvas	= document.createElement('canvas');

                            canvas.className	= 'bx-canvas';
                            canvas.width 		= imgW;
                            canvas.height 		= imgH;
                            canvas.style.width  = imgW + 'px';
                            canvas.style.height = imgH + 'px';
                            canvas.style.left	= imgL + 'px';
                            canvas.style.top	= imgT + 'px';
                            canvas.style.visibility = 'hidden';
                            // save position of canvas to know which image this is linked to
                            canvas.setAttribute('data-pos', pos);
                            // append the canvas to the same container where the images are
                            $bxContainer.append( canvas );
                            // blur it using the StackBlur script
                            stackBlurImage( $img.get(0), dim, canvas, animOptions.blurFactor, false, dfd.resolve );

                        }).promise();

                    },
                // gets the image size and position in order to make it fullscreen and centered.
                    getImageDim			= function( img ) {

                        var $img    = new Image();

                        $img.src    = img;

                        var $win	= $( window ),
                            w_w		= $win.width(),
                            w_h		= $win.height(),
                            r_w		= w_h / w_w,
                            i_w		= $img.width,
                            i_h		= $img.height,
                            r_i		= i_h / i_w,
                            new_w, new_h, new_left, new_top;

                        if( r_w > r_i ) {

                            new_h	= w_h;
                            new_w	= w_h / r_i;

                        }
                        else {

                            new_h	= w_w * r_i;
                            new_w	= w_w;

                        }



                        //new_w = (window_w / mobile_scale);
                        //new_h = (window_h / mobile_scale);

                        //alert(new_w);

                        return {
                            width	: new_w,
                            height	: new_h,
                            left	: ( w_w - new_w ) / 2,
                            top		: ( w_h - new_h ) / 2
                        };

                    },
                // initialize the events
                    initEvents			= function() {

                        $( window ).on('resize.BlurBGImage', function( event ) {

                            // apply style for bg image and canvas
                            centerImageCanvas();
                            return false;

                        });

                        $('#gallery__page .arrow.right').click(function()
                        {
                            var thumbs = $('.bx-thumbs a');
                            var thumbs__size = thumbs.size() - 1;

                            thumbs.each(function(i){
                                if($(this).is('.bx-thumbs-current'))
                                {
                                    if(i == thumbs__size){
                                        var thumb = thumbs.eq(0);
                                        var pos = thumb.index();
                                    }
                                    else
                                    {
                                        var thumb = thumbs.eq(i + 1);
                                        var pos = thumb.index();
                                    }


                                    if( !isAnim && pos !== current ) {

                                        thumbs.removeClass('bx-thumbs-current');
                                        thumb.addClass('bx-thumbs-current');
                                        isAnim = true;
                                        // show the bg image
                                        showImage( pos );

                                    }
                                }
                            });
                            //alert('fdg2');
                        });

                        $('#gallery__page .arrow.left').click(function()
                        {
                            var thumbs = $('.bx-thumbs a');
                            var thumbs__size = thumbs.size() - 1;

                            thumbs.each(function(i){
                                if($(this).is('.bx-thumbs-current'))
                                {
                                    if(i == 0){
                                        var thumb = thumbs.eq(thumbs__size);
                                        var pos = thumb.index();
                                    }
                                    else
                                    {
                                        var thumb = thumbs.eq(i - 1);
                                        var pos = thumb.index();
                                    }


                                    if( !isAnim && pos !== current ) {

                                        thumbs.removeClass('bx-thumbs-current');
                                        thumb.addClass('bx-thumbs-current');
                                        isAnim = true;
                                        // show the bg image
                                        showImage( pos );

                                    }
                                }
                            });
                            //alert('fdg2');
                        });

                        // clicking on a thumb shows the respective bg image
                        $thumbs.on('click.BlurBGImage', function( event ) {


                            var $thumb	= $(this),
                                pos		= $thumb.index();

                            if( !isAnim && pos !== current ) {

                                $thumbs.removeClass('bx-thumbs-current');
                                $thumb.addClass('bx-thumbs-current');
                                isAnim = true;
                                // show the bg image
                                showImage( pos );

                            }

                            return false;

                        });

                    },
                // apply style for bg image and canvas
                    centerImageCanvas	= function() {

                        $bxImgs.each( function(i) {

                            var $bximg	= $(this),
                                dim			= getImageDim( $bximg.attr('src') ),
                                $currCanvas	= $bxContainer.children('canvas[data-pos=' + $bximg.index() + ']');

                            var data_page_resize = $('[data-page-resize]');
                            var dpr_min_width = data_page_resize.attr('dpr-min-width');
                            var dpr_min_height = data_page_resize.attr('dpr-min-height');
                            dpr_min_width = (dpr_min_width != undefined && dpr_min_width != false) ? parseInt(dpr_min_width, 10) : 1650;
                            dpr_min_height = (dpr_min_height != undefined && dpr_min_height != false) ? parseInt(dpr_min_height, 10) : 860;
                            var min_window_w = dpr_min_width;
                            var min_window_h = dpr_min_height;
                            var min_window_d = min_window_h / min_window_w;
                            var window_w = $(window).width();
                            var window_h = $(window).height();
                            var window_d = window_h/window_w;
                            var mobile_scale = 1;
                            if(window_d < min_window_d) {
                                mobile_scale = Math.min(1, window_h / min_window_h);
                            }
                            else
                            {
                                mobile_scale = Math.min(1, window_w / min_window_w);
                            }
                            var new_w = (dim.width / mobile_scale);
                            var  new_h = (dim.height / mobile_scale);
                            var  styleCSS	= {
                                width	: new_w,
                                height	: new_h,
                                left	: dim.left,
                                top		: dim.top
                            };

                            $bximg.css( styleCSS );

                            if( supportCanvas )
                                $currCanvas.css( styleCSS );

                            if( i === current )
                                $bximg.show();

                        });

                    },
                // shows the image at position "pos"
                    showImage			= function( pos ) {

                        // current image
                        var $bxImage		= $bxImgs.eq( current );
                        // current canvas
                        $bxCanvas		= $bxContainer.children('canvas[data-pos=' + $bxImage.index() + ']'),
                            // next image to show
                            $bxNextImage	= $bxImgs.eq( pos ),
                            // next canvas to show
                            $bxNextCanvas	= $bxContainer.children('canvas[data-pos='+$bxNextImage.index()+']');

                        // if canvas is supported
                        if( supportCanvas ) {

                            $.when( $title.fadeOut() ).done( function() {

                                $title.text( $bxNextImage.attr('title') );

                            });

                            $bxCanvas.css( 'z-index', 100 ).css('visibility','visible');

                            $.when( $bxImage.fadeOut( animOptions.speed ) ).done( function() {

                                switch( animOptions.variation ) {

                                    case 1 	:
                                        $title.fadeIn( animOptions.speed );
                                        $.when( $bxNextImage.fadeIn( animOptions.speed ) ).done( function() {

                                            $bxCanvas.css( 'z-index', 1 ).css('visibility','hidden');
                                            current = pos;
                                            $bxNextCanvas.css('visibility','hidden');
                                            isAnim 	= false;

                                        });
                                        break;
                                    case 2	:
                                        $bxNextCanvas.css('visibility','visible');

                                        $.when( $bxCanvas.fadeOut( animOptions.speed * 1.5 ) ).done( function() {

                                            $(this).css({
                                                'z-index' 		: 1,
                                                'visibility'	: 'hidden'
                                            }).show();

                                            $title.fadeIn( animOptions.speed );

                                            $.when( $bxNextImage.fadeIn( animOptions.speed ) ).done( function() {

                                                current = pos;
                                                $bxNextCanvas.css('visibility','hidden');
                                                isAnim 	= false;

                                            });

                                        });
                                        break;

                                };

                            });

                        }
                        // if canvas is not shown just work with the bg images
                        else {

                            $title.hide().text( $bxNextImage.attr('title') ).fadeIn( animOptions.speed );
                            $.when( $bxNextImage.css( 'z-index', 102 ).fadeIn( animOptions.speed ) ).done( function() {

                                current = pos;
                                $bxImage.hide();
                                $(this).css( 'z-index', 101 );
                                isAnim = false;

                            });

                        }

                    };

                return {
                    init	: init
                };

            })();

            BlurBGImage.init();



            (function ($) {
                'use strict';

                var defaults = {
                    slide:                   0,
                    delay:                   5000,
                    loop:                    true,
                    preload:                 false,
                    preloadImage:            false,
                    preloadVideo:            false,
                    timer:                   true,
                    overlay:                 false,
                    autoplay:                true,
                    shuffle:                 false,
                    cover:                   true,
                    color:                   null,
                    align:                   'center',
                    valign:                  'center',
                    firstTransition:         null,
                    firstTransitionDuration: null,
                    transition:              'fade',
                    transitionDuration:      1000,
                    transitionRegister:      [],
                    animation:               null,
                    animationDuration:       'auto',
                    animationRegister:       [],
                    slidesToKeep:            1,
                    init:  function () {},
                    play:  function () {},
                    pause: function () {},
                    walk:  function () {},
                    slides: [
                        // {
                        //  src:                null,
                        //  color:              null,
                        //  delay:              null,
                        //  align:              null,
                        //  valign:             null,
                        //  transition:         null,
                        //  transitionDuration: null,
                        //  animation:          null,
                        //  animationDuration:  null,
                        //  cover:              true,
                        //  video: {
                        //      src: [],
                        //      mute: true,
                        //      loop: true
                        // }
                        // ...
                    ]
                };

                var videoCache = {};

                var Vegas = function (elmt, options) {
                    this.elmt         = elmt;
                    this.settings     = $.extend({}, defaults, $.vegas.defaults, options);
                    this.slide        = this.settings.slide;
                    this.total        = this.settings.slides.length;
                    this.noshow       = this.total < 2;
                    this.paused       = !this.settings.autoplay || this.noshow;
                    this.ended        = false;
                    this.$elmt        = $(elmt);
                    this.$timer       = null;
                    this.$overlay     = null;
                    this.$slide       = null;
                    this.timeout      = null;
                    this.first        = true;

                    this.transitions = [
                        'fade', 'fade2',
                        'blur', 'blur2',
                        'flash', 'flash2',
                        'negative', 'negative2',
                        'burn', 'burn2',
                        'slideLeft', 'slideLeft2',
                        'slideRight', 'slideRight2',
                        'slideUp', 'slideUp2',
                        'slideDown', 'slideDown2',
                        'zoomIn', 'zoomIn2',
                        'zoomOut', 'zoomOut2',
                        'swirlLeft', 'swirlLeft2',
                        'swirlRight', 'swirlRight2'
                    ];

                    this.animations = [
                        'kenburns',
                        'kenburnsLeft', 'kenburnsRight',
                        'kenburnsUp', 'kenburnsUpLeft', 'kenburnsUpRight',
                        'kenburnsDown', 'kenburnsDownLeft', 'kenburnsDownRight'
                    ];

                    if (this.settings.transitionRegister instanceof Array === false) {
                        this.settings.transitionRegister = [ this.settings.transitionRegister ];
                    }

                    if (this.settings.animationRegister instanceof Array === false) {
                        this.settings.animationRegister = [ this.settings.animationRegister ];
                    }

                    this.transitions = this.transitions.concat(this.settings.transitionRegister);
                    this.animations  = this.animations.concat(this.settings.animationRegister);

                    this.support = {
                        objectFit:  'objectFit'  in document.body.style,
                        transition: 'transition' in document.body.style || 'WebkitTransition' in document.body.style,
                        video:      $.vegas.isVideoCompatible()
                    };

                    if (this.settings.shuffle === true) {
                        this.shuffle();
                    }

                    this._init();
                };

                Vegas.prototype = {
                    _init: function () {
                        var $wrapper,
                            $overlay,
                            $timer,
                            isBody  = this.elmt.tagName === 'BODY',
                            timer   = this.settings.timer,
                            overlay = this.settings.overlay,
                            self    = this;

                        // Preloading
                        this._preload();

                        // Wrapper with content
                        if (!isBody) {
                            this.$elmt.css('height', this.$elmt.css('height'));

                            $wrapper = $('<div class="vegas-wrapper">')
                                .css('overflow', this.$elmt.css('overflow'))
                                .css('padding',  this.$elmt.css('padding'));

                            // Some browsers don't compute padding shorthand
                            if (!this.$elmt.css('padding')) {
                                $wrapper
                                    .css('padding-top',    this.$elmt.css('padding-top'))
                                    .css('padding-bottom', this.$elmt.css('padding-bottom'))
                                    .css('padding-left',   this.$elmt.css('padding-left'))
                                    .css('padding-right',  this.$elmt.css('padding-right'));
                            }

                            this.$elmt.clone(true).children().appendTo($wrapper);
                            this.elmt.innerHTML = '';
                        }

                        // Timer
                        if (timer && this.support.transition) {
                            $timer = $('<div class="vegas-timer"><div class="vegas-timer-progress">');
                            this.$timer = $timer;
                            this.$elmt.prepend($timer);
                        }

                        // Overlay
                        if (overlay) {
                            $overlay = $('<div class="vegas-overlay">');

                            if (typeof overlay === 'string') {
                                $overlay.css('background-image', 'url(' + overlay + ')');
                            }

                            this.$overlay = $overlay;
                            this.$elmt.prepend($overlay);
                        }

                        // Container
                        this.$elmt.addClass('vegas-container');

                        if (!isBody) {
                            this.$elmt.append($wrapper);
                        }

                        setTimeout(function () {
                            self.trigger('init');
                            self._goto(self.slide);

                            if (self.settings.autoplay) {
                                self.trigger('play');
                            }
                        }, 1);
                    },

                    _preload: function () {
                        var img, i;

                        for (i = 0; i < this.settings.slides.length; i++) {
                            if (this.settings.preload || this.settings.preloadImages) {
                                if (this.settings.slides[i].src) {
                                    img = new Image();
                                    img.src = this.settings.slides[i].src;
                                }
                            }

                            if (this.settings.preload || this.settings.preloadVideos) {
                                if (this.support.video && this.settings.slides[i].video) {
                                    if (this.settings.slides[i].video instanceof Array) {
                                        this._video(this.settings.slides[i].video);
                                    } else {
                                        this._video(this.settings.slides[i].video.src);
                                    }
                                }
                            }
                        }
                    },

                    _random: function (array) {
                        return array[Math.floor(Math.random() * array.length)];
                    },

                    _slideShow: function () {
                        var self = this;

                        if (this.total > 1 && !this.ended && !this.paused && !this.noshow) {
                            this.timeout = setTimeout(function () {
                                self.next();
                            }, this._options('delay'));
                        }
                    },

                    _timer: function (state) {
                        var self = this;

                        clearTimeout(this.timeout);

                        if (!this.$timer) {
                            return;
                        }

                        this.$timer
                            .removeClass('vegas-timer-running')
                            .find('div')
                            .css('transition-duration', '0ms');

                        if (this.ended || this.paused || this.noshow) {
                            return;
                        }

                        if (state) {
                            setTimeout(function () {
                                self.$timer
                                    .addClass('vegas-timer-running')
                                    .find('div')
                                    .css('transition-duration', self._options('delay') - 100 + 'ms');
                            }, 100);
                        }
                    },

                    _video: function (srcs) {
                        var video,
                            source,
                            cacheKey = srcs.toString();

                        if (videoCache[cacheKey]) {
                            return videoCache[cacheKey];
                        }

                        if (srcs instanceof Array === false) {
                            srcs = [ srcs ];
                        }

                        video = document.createElement('video');
                        video.preload = true;

                        srcs.forEach(function (src) {
                            source = document.createElement('source');
                            source.src = src;
                            video.appendChild(source);
                        });

                        videoCache[cacheKey] = video;

                        return video;
                    },

                    _fadeOutSound: function (video, duration) {
                        var self   = this,
                            delay  = duration / 10,
                            volume = video.volume - 0.09;

                        if (volume > 0) {
                            video.volume = volume;

                            setTimeout(function () {
                                self._fadeOutSound(video, duration);
                            }, delay);
                        } else {
                            video.pause();
                        }
                    },

                    _fadeInSound: function (video, duration) {
                        var self   = this,
                            delay  = duration / 10,
                            volume = video.volume + 0.09;

                        if (volume < 1) {
                            video.volume = volume;

                            setTimeout(function () {
                                self._fadeInSound(video, duration);
                            }, delay);
                        }
                    },

                    _options: function (key, i) {
                        if (i === undefined) {
                            i = this.slide;
                        }

                        if (this.settings.slides[i][key] !== undefined) {
                            return this.settings.slides[i][key];
                        }

                        return this.settings[key];
                    },

                    _goto: function (nb) {
                        if (typeof this.settings.slides[nb] === 'undefined') {
                            nb = 0;
                        }

                        this.slide = nb;

                        var $slide,
                            $inner,
                            $video,
                            $slides       = this.$elmt.children('.vegas-slide'),
                            src           = this.settings.slides[nb].src,
                            videoSettings = this.settings.slides[nb].video,
                            delay         = this._options('delay'),
                            align         = this._options('align'),
                            valign        = this._options('valign'),
                            cover         = this._options('cover'),
                            color         = this._options('color') || this.$elmt.css('background-color'),
                            self          = this,
                            total         = $slides.length,
                            video,
                            img;

                        var transition         = this._options('transition'),
                            transitionDuration = this._options('transitionDuration'),
                            animation          = this._options('animation'),
                            animationDuration  = this._options('animationDuration');

                        if (this.settings.firstTransition && this.first) {
                            transition = this.settings.firstTransition || transition;
                        }

                        if (this.settings.firstTransitionDuration && this.first) {
                            transitionDuration = this.settings.firstTransitionDuration || transitionDuration;
                        }

                        if (this.first) {
                            this.first = false;
                        }

                        if (cover !== 'repeat') {
                            if (cover === true) {
                                cover = 'cover';
                            } else if (cover === false) {
                                cover = 'contain';
                            }
                        }

                        if (transition === 'random' || transition instanceof Array) {
                            if (transition instanceof Array) {
                                transition = this._random(transition);
                            } else {
                                transition = this._random(this.transitions);
                            }
                        }

                        if (animation === 'random' || animation instanceof Array) {
                            if (animation instanceof Array) {
                                animation = this._random(animation);
                            } else {
                                animation = this._random(this.animations);
                            }
                        }

                        if (transitionDuration === 'auto' || transitionDuration > delay) {
                            transitionDuration = delay;
                        }

                        if (animationDuration === 'auto') {
                            animationDuration = delay;
                        }

                        $slide = $('<div class="vegas-slide"></div>');

                        if (this.support.transition && transition) {
                            $slide.addClass('vegas-transition-' + transition);
                        }

                        // Video

                        if (this.support.video && videoSettings) {
                            if (videoSettings instanceof Array) {
                                video = this._video(videoSettings);
                            } else {
                                video = this._video(videoSettings.src);
                            }

                            video.loop  = videoSettings.loop !== undefined ? videoSettings.loop : true;
                            video.muted = videoSettings.mute !== undefined ? videoSettings.mute : true;

                            if (video.muted === false) {
                                video.volume = 0;
                                this._fadeInSound(video, transitionDuration);
                            } else {
                                video.pause();
                            }

                            $video = $(video)
                                .addClass('vegas-video')
                                .css('background-color', color);

                            if (this.support.objectFit) {
                                $video
                                    .css('object-position', align + ' ' + valign)
                                    .css('object-fit', cover)
                                    .css('width',  '100%')
                                    .css('height', '100%');
                            } else if (cover === 'contain') {
                                $video
                                    .css('width',  '100%')
                                    .css('height', '100%');
                            }

                            $slide.append($video);

                            // Image

                        } else {
                            img = new Image();

                            $inner = $('<div class="vegas-slide-inner"></div>')
                                .css('background-image',    'url("' + src + '")')
                                .css('background-color',    color)
                                .css('background-position', align + ' ' + valign);

                            if (cover === 'repeat') {
                                $inner.css('background-repeat', 'repeat');
                            } else {
                                $inner.css('background-size', cover);
                            }

                            if (this.support.transition && animation) {
                                $inner
                                    .addClass('vegas-animation-' + animation)
                                    .css('animation-duration',  animationDuration + 'ms');
                            }

                            $slide.append($inner);
                        }

                        if (!this.support.transition) {
                            $slide.css('display', 'none');
                        }

                        if (total) {
                            $slides.eq(total - 1).after($slide);
                        } else {
                            this.$elmt.prepend($slide);
                        }

                        $slides
                            .css('transition', 'all 0ms')
                            .each(function () {
                                this.className  = 'vegas-slide';

                                if (this.tagName === 'VIDEO') {
                                    this.className += ' vegas-video';
                                }

                                if (transition) {
                                    this.className += ' vegas-transition-' + transition;
                                    this.className += ' vegas-transition-' + transition + '-in';
                                }
                            }
                        );

                        self._timer(false);

                        function go () {
                            self._timer(true);

                            setTimeout(function () {
                                if (transition) {
                                    if (self.support.transition) {
                                        $slides
                                            .css('transition', 'all ' + transitionDuration + 'ms')
                                            .addClass('vegas-transition-' + transition + '-out');

                                        $slides.each(function () {
                                            var video = $slides.find('video').get(0);

                                            if (video) {
                                                video.volume = 1;
                                                self._fadeOutSound(video, transitionDuration);
                                            }
                                        });

                                        $slide
                                            .css('transition', 'all ' + transitionDuration + 'ms')
                                            .addClass('vegas-transition-' + transition + '-in');
                                    } else {
                                        $slide.fadeIn(transitionDuration);
                                    }
                                }

                                for (var i = 0; i < $slides.length - self.settings.slidesToKeep; i++) {
                                    $slides.eq(i).remove();
                                }

                                self.trigger('walk');
                                self._slideShow();
                            }, 100);
                        }
                        if (video) {
                            if (video.readyState === 4) {
                                video.currentTime = 0;
                            }

                            video.play();
                            go();
                        } else {
                            img.src = src;

                            if (img.complete) {
                                go();
                            } else {
                                img.onload = go;
                            }
                        }
                    },

                    _end: function () {
                        this.ended = true;
                        this._timer(false);
                        this.trigger('end');
                    },

                    shuffle: function () {
                        var temp,
                            rand;

                        for (var i = this.total - 1; i > 0; i--) {
                            rand = Math.floor(Math.random() * (i + 1));
                            temp = this.settings.slides[i];

                            this.settings.slides[i] = this.settings.slides[rand];
                            this.settings.slides[rand] = temp;
                        }
                    },

                    play: function () {
                        if (this.paused) {
                            this.paused = false;
                            this.next();
                            this.trigger('play');
                        }
                    },

                    pause: function () {
                        this._timer(false);
                        this.paused = true;
                        this.trigger('pause');
                    },

                    toggle: function () {
                        if (this.paused) {
                            this.play();
                        } else {
                            this.pause();
                        }
                    },

                    playing: function () {
                        return !this.paused && !this.noshow;
                    },

                    current: function (advanced) {
                        if (advanced) {
                            return {
                                slide: this.slide,
                                data:  this.settings.slides[this.slide]
                            };
                        }
                        return this.slide;
                    },

                    jump: function (nb) {
                        if (nb < 0 || nb > this.total - 1 || nb === this.slide) {
                            return;
                        }

                        this.slide = nb;
                        this._goto(this.slide);
                    },

                    next: function () {
                        this.slide++;

                        if (this.slide >= this.total) {
                            if (!this.settings.loop) {
                                return this._end();
                            }

                            this.slide = 0;
                        }

                        this._goto(this.slide);
                    },

                    previous: function () {
                        this.slide--;

                        if (this.slide < 0) {
                            if (!this.settings.loop) {
                                this.slide++;
                                return;
                            } else {
                                this.slide = this.total - 1;
                            }
                        }

                        this._goto(this.slide);
                    },

                    trigger: function (fn) {
                        var params = [];

                        if (fn === 'init') {
                            params = [ this.settings ];
                        } else {
                            params = [
                                this.slide,
                                this.settings.slides[this.slide]
                            ];
                        }

                        this.$elmt.trigger('vegas' + fn, params);

                        if (typeof this.settings[fn] === 'function') {
                            this.settings[fn].apply(this.$elmt, params);
                        }
                    },

                    options: function (key, value) {
                        var oldSlides = this.settings.slides.slice();

                        if (typeof key === 'object') {
                            this.settings = $.extend({}, defaults, $.vegas.defaults, key);
                        } else if (typeof key === 'string') {
                            if (value === undefined) {
                                return this.settings[key];
                            }
                            this.settings[key] = value;
                        } else {
                            return this.settings;
                        }

                        // In case slides have changed
                        if (this.settings.slides !== oldSlides) {
                            this.total  = this.settings.slides.length;
                            this.noshow = this.total < 2;
                            this._preload();
                        }
                    },

                    destroy: function () {
                        clearTimeout(this.timeout);

                        this.$elmt.removeClass('vegas-container');
                        this.$elmt.find('> .vegas-slide').remove();
                        this.$elmt.find('> .vegas-wrapper').clone(true).children().appendTo(this.$elmt);
                        this.$elmt.find('> .vegas-wrapper').remove();

                        if (this.settings.timer) {
                            this.$timer.remove();
                        }

                        if (this.settings.overlay) {
                            this.$overlay.remove();
                        }

                        this.elmt._vegas = null;
                    }
                };

                $.fn.vegas = function(options) {
                    var args = arguments,
                        error = false,
                        returns;

                    if (options === undefined || typeof options === 'object') {
                        return this.each(function () {
                            if (!this._vegas) {
                                this._vegas = new Vegas(this, options);
                            }
                        });
                    } else if (typeof options === 'string') {
                        this.each(function () {
                            var instance = this._vegas;

                            if (!instance) {
                                throw new Error('No Vegas applied to this element.');
                            }

                            if (typeof instance[options] === 'function' && options[0] !== '_') {
                                returns = instance[options].apply(instance, [].slice.call(args, 1));
                            } else {
                                error = true;
                            }
                        });

                        if (error) {
                            throw new Error('No method "' + options + '" in Vegas.');
                        }

                        return returns !== undefined ? returns : this;
                    }
                };

                $.vegas = {};
                $.vegas.defaults = defaults;

                $.vegas.isVideoCompatible = function () {
                    return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
                };

            })(window.jQuery || window.Zepto);


            $('#gallery__aaa').vegas({
                transition: 'zoomOut2',
                transitionDuration: 5000,
                delay: 5000,
                slides: [
                    { src: '/assets/images/gallery/12_CShading_Beauty_View06.jpg' },
                    { src: '/assets/images/gallery/12_CShading_Beauty_View17.jpg' },
                    { src: '/assets/images/gallery/12_View04.jpg' }
                ]
            });



        }

        if(DATA_TARGET == 'tour__page')
        {

        }
    });



})(jQuery);



/**
 * Формируем страницу "Прогулка".
 */
var KRPANO_CONTAINER = null;
$(document).on('ready async-page-loading', function()
{
    var DATA__TARGET = $('.data__target').attr('attr-targ');
    if(DATA__TARGET == 'tour__page')
    {
        $('div#panorama-page').html('<div id="pano__screen" class="absolute__frame"><script>embedpano({swf:"/vtour/tour.swf", xml:"/vtour/day/scene_cam014_cshading_beauty_view44.xml",target:"pano__screen",wmode:"opaque","bgcolor":"#000000","html5" : "prefer"});</script></div>').transition({opacity: 1, visibility: 'visible'}, 500);
        KRPANO_CONTAINER = document.getElementById("krpanoSWFObject");
        subload_pano('scene_cam014_cshading_beauty_view44', 'KEEPVIEW');

        $('#starting__overlay').transition({opacity: 1, visibility: 'visible', scale:1}, 1000);
        $('#starting__overlay').click(function(){
            $(this).transition({opacity: 0, visibility: 'hidden', scale: 1.1}, 500);
        });

        $(document).on('async-page-before-loading', function() {

        });
    }
});

var subload_pano = function(targ, keepview) {
    KRPANO_CONTAINER.call('loadpano("/vtour/day/' + targ + '.xml",null,' + (keepview || 'null') + ', BLEND(1));');
};
/* Конец страницы "Прогулка". */