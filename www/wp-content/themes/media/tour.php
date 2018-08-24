<?PHP
/**
 * Template Name: Виртуальный тур
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="tour__page" id="tour__page">
        <div class="absolute__frame dynamic__frame__resize">
            <img class="background__image" src="/assets/images/background/fas_01_View02.jpg" />
        </div>

        <div id="starting__overlay" class="absolute__frame" style="opacity: 1; visibility: visible; transform: scale(1, 1);">
            <div class="middle">
                <div class="window" style="">
                    <a href="javascript:;" class="close opacity-none close-transition-btn"></a>
                    <div class="img opacity-none"><img src="/assets/images/tour/welcome__message.svg"></div>
                </div>
            </div>
        </div>

        <div id="panorama-page" class="absolute__frame"></div>

        <!-- <div id="pano" style="width:100%;height:100%; position: absolute; left: 0; top: 0; ">
            <noscript><table style="width:100%;height:100%;"><tr style="vertical-align:middle;"><td><div style="text-align:center;">ERROR:<br/><br/>Javascript not activated<br/><br/></div></td></tr></table></noscript>
            <script>
                embedpano({swf:"/vtour/tour.swf", xml:"/vtour/tour.xml", target:"pano", html5:"prefer", mobilescale:1.0, passQueryParameters:true});
            </script>
        </div> -->
    </div>

<?PHP
get_footer();
?>