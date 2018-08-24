<?PHP
/**
 * Template Name: Апартаменты (План дома)
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="apartments__home__page" id="apartments__home__page">
        <div class="absolute__frame dynamic__frame__resize">

            <a href="/apartments/section/5" class="p-ajax home__point fade__container animate" style="left: 22%; top:55%;">5</a>
            <a href="/apartments/section/4" class="p-ajax home__point fade__container animate" style="left: 30%; top: 45%;">4</a>
            <a href="/apartments/section/3" class="p-ajax home__point fade__container animate" style="left: 47%; top: 8%;">3</a>
            <a href="/apartments/section/2" class="p-ajax home__point fade__container animate" style="left: 59.5%; top: 21%;">2</a>
            <a href="/apartments/section/1" class="p-ajax home__point fade__container animate" style="left: 73%; top: 35.5%;">1</a>

            <a href="/selection" class="apartment__selection p-ajax"></a>
            <div class="load_frame">
                <img src="/assets/images/apartments__page/MainSelection1920.jpg" class="background__image padding__top" />
                <div class="plans_map_cont padding__top">
                    <img width="1920" height="1080" class="plans__map padding__top" src="/assets/images/blank.gif"/>
                    <map id="one" style="z-index: 100;" class=" padding__top">
                        <polygon opacity="0" section="1" fill="#006064" points="1271.5,803.7 1301,449.6 1451.6,342.6 1593.6,425 1536.5,779.7 1398.8,891.6 "/>
                        <polygon opacity="0" section="2" fill="#006064" points="1194.4,202.9 1321.3,274.7 1307.2,443.9 1299.3,450.7 1284.5,627.3 1153.9,723.6,
	1034.9,643.3 1044.1,298 "/>
                        <polygon opacity="0" section="3" fill="#006064" points="812.9,160.1 963.5,72.8 1078.5,140.4 1077.9,276.2 1045.3,296.5 1040.4,495.7,
	931.6,569.5 824,496.9 "/>
                        <polygon opacity="0" section=4 fill="#006064" points="531.5,582.7 531.5,574.8 555,552.7 562,556.4 562,560.6 571.6,551.3 571.6,538.9,
	592.8,518.1 600.2,521.4 623.3,501.5 663.8,519.5 669.8,513.5 717.8,535.7 727.9,699.3 704,722.8 704,733 697.5,739.4 698.4,743.1,
	699.8,754.2 652.3,802.6 633.9,793.8 617.7,810.4 602.5,632.9 599.8,630.6 597.9,613.6 "/>
                        <polygon opacity="0" section="5" fill="#006064" points="597.9,613.6 507.5,572.5 486.3,592.8 478.5,587.8 455,609.9 455.9,620.5,
	445.8,629.7 437.9,624.6 412.6,648.2 412.6,660.1 403.8,667.1 396,662.9 378.9,678.1 407.5,853.3 381.7,878.2 384.4,901.7,
	463.1,940.2 480.3,947.5 501.2,947.5 587.2,869.3 585.7,855.8 575.2,851.3 617.7,810.4 602.5,632.9 599.8,630.6 "/>
                    </map>
                </div>
            </div>

        </div>
    </div>

<?PHP
get_footer();
?>