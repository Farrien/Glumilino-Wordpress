<?PHP
$settings__array = settings__array();
$headers = getallheaders();
if(isset($headers['X-AsyncPageLoading']) && $headers['X-AsyncPageLoading'] == true){}else
if(isset($headers['X-AsyncPageLoading']) && $headers['X-AsyncPageLoading'] == true){}else
{
?>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.png" type="image/png">
    <meta name="description" content="<? echo $settings__array->description;?>"/>
    <meta name="keywords" content="<?=$settings__array->keywords;?>"/>
    <meta name="google-site-verification" content="550k-Y3n_kw5iejGuExw6ihlBWiqDuRxt5dOXWIVQeE" />
    <meta name="yandex-verification" content="b857943e2557c2c6" />
    <meta name='wmail-verification' content='4cb9ec2fcbfb62d9dbcb57df51c30c7d' />
    <base href="/"/>
    <link rel="stylesheet" href="<?=TEMPLATE_DIR?>/assets/css/application.css"/>

    <!-- Подключаем JavaScript библиотеки -->
    <script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=false&key=AIzaSyAQ7lpPm6k8YCrQDvNgwYsZ_Aq9uUI5PCA"></script>
    <script type="text/javascript" src="<?=TEMPLATE_DIR?>/assets/js/library.js?v=2"></script>
    <script type="text/javascript" src="<?=TEMPLATE_DIR?>/assets/js/plugins.js"></script>
    <script src="vtour/tour.js"></script>
    <script type="text/javascript" src="<?=TEMPLATE_DIR?>/assets/js/app.js"></script>

    <meta property="og:image" content="" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <title>
        <?PHP
           echo (get_the_title() == false) ? get_bloginfo() : get_the_title().' — '.get_bloginfo();
        ?>
    </title>
</head>
<body class="">
<div id="body__frame" data-page-resize dpr-min-width="1920" dpr-min-height="1080">
    <div id="preloader__page">
        <img class="background__image overlay" src="/assets/images/blank.gif" />
        <div class="loader">
            <img class="preloader__image" src="/assets/images/preloader__ring.svg" />
        </div>
    </div>

    <div id="rotate-device">
        <div class="middle">
            <img src="/assets/images/rotate__device.svg">
        </div>
    </div>

    <div id="header__menu" class="fade__container">
        <div class="dynamic-container">
            <div class="logotype">
                <a href="/" class="p-ajax">
                    <video id="video" style="display:none" autoplay>
                        <source src="/assets/images/flag_dif_mask.mp4" type='video/mp4; codecs="avc1.42E01E"' />
                    </video>
                    <canvas width="158" height="452" id="buffer" style="display: none;"></canvas>
                    <canvas width="153" height="227" id="output"></canvas>
                </a>
            </div>
        </div>

        <a href="javascript:;" class="hamburger">
            <span class="menu__button">
                <span class="menu__button-line n0"></span>
                <span class="menu__button-line n1"></span>
                <span class="menu__button-line n2"></span>
            </span>
            <span class="name">Меню</span>
        </a>

        <a href="/apartments" class="p-ajax select__apartments-hamburger"></a>

        <div id="hidden__full-nav">
            <div class="middle">
                <div class="content">
                    <div class="line"><span class="l"></span><span class="r"></span></div>
                    <ul class="nav__large">
                        <li><a href="/about" class="p-ajax">О проекте</a></li>
                        <li><a href="/map" class="p-ajax">Место и окружение</a></li>
                        <li><a href="/apartments" class="p-ajax">Выбрать квартиру</a></li>
                        <li><a href="/gallery" class="p-ajax">Галерея</a></li>
                        <li><a href="/tour" class="p-ajax">3D прогулка</a></li>
                    </ul>

                    <ul class="nav__large small">
                        <li><a href="/mortgage" class="p-ajax">Программы приобретения</a></li>
                        <!-- <li><a href="/mortgage" class="p-ajax">Ипотека</a></li>
                        <li><a href="/trade-in" class="p-ajax">Trade-in</a></li> -->
                        <li><a href="/offers" class="p-ajax">Акции</a></li>
                        <li><a href="/construction" class="p-ajax">Ход строительства</a></li>
                        <li><a href="/developer" class="p-ajax">О застройщике</a></li>
                        <li><a href="/contacts" class="p-ajax">Контакты</a></li>
                    </ul>
                    <div class="line"><span class="l"></span><span class="r"></span></div>
                </div>
            </div>
        </div>
    </div>

    <div id="async__frame__after"></div>
    <div id="async__frame__before">
<?
}
?>
