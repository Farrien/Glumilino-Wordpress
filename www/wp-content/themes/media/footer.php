<?PHP
$headers = getallheaders();
//if(isset($headers['X-AsyncPageLoading']) && $headers['X-AsyncPageLoading'] == true){}else
if(isset($headers['X-AsyncPageLoading']) && $headers['X-AsyncPageLoading'] == true){}else
{
?>
    </div>

    <div id="footer__menu" class="fade__container">
        <div class="copyright__left">
            <span style="opacity: 0.6;">&nbsp;&nbsp;© 2017</span>
            <a href="http://gosstroy.info" target="_blank" style="text-decoration: none;">
                <img src="/assets/images/gosstroy__logo-footer.svg" width="150" style="display: inline-block; position: relative; top: 3px; z-index: 2">
            </a>
            <span style="opacity: 0.6;">
                <a href="javascript:;" class="documentation">
                    документация
                </a>
            </span>
        </div>

        <div class="ppup" style="min-width: 400px;">
            <button type="button"></button>
            <?
            global $wpdb;
            $sql = $wpdb->get_results("SELECT * FROM `documentation__page` ORDER BY `id` ASC;");
            if(count($sql) != 0){
                $slide__array = array();
                foreach($sql as $data) {
                    ?>
                    <a class="footer__docs-item" href="<?=$data->image;?>" target="_blank">
                        <?=$data->title;?>
                    </a>
                <?
                }
            }
            ?>

        </div>

        <div class="dynamic-container">
            <a href="" class="logo"></a>
            <ul class="horizontal__nav">
                <li><a href="/mortgage" class="p-ajax">Программы приобретения</a></li>
                <!-- <li><a href="/mortgage" class="p-ajax">Ипотека</a></li>
                <li><a href="/trade-in" class="p-ajax">Trade-in</a></li> -->
                <!-- <li><a href="javascript:;" class="p-ajax">Акции</a></li> -->
                <li><a href="/construction" class="p-ajax">Ход строительства</a></li>
                <li><a href="/developer" class="p-ajax">О застройщике</a></li>
                <li><a href="/contacts" class="p-ajax">Контакты</a></li>
            </ul>
            <div class="phone__number">
                <div class="number" style="padding-top: 8px;">
                    <!-- +7 (347) <b>246-70-70</b> -->
                    <a href="tel:+73472467070">
                        <!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In  -->
                        <svg version="1.1"
                             xmlns="http://www.w3.org/2000/svg"
                             x="0px" y="0px" width="198.1px" height="20.5px" viewBox="0 0 198.1 20.5" enable-background="new 0 0 198.1 20.5"
                             xml:space="preserve">
<defs>
</defs>
                            <g>
                                <path fill="#E5E6E7" d="M0,7.7h4.4V3.1h1.1v4.6h4.4v1.1H5.5v4.7H4.4V8.8H0V7.7z"/>
                                <path fill="#E5E6E7" d="M13.8,4.3h-0.6c-0.1-0.3-0.1-0.6-0.2-1C13,3,13,2.6,12.9,2.3c0-0.4-0.1-0.7-0.1-1c0-0.3,0-0.6,0-0.9H22V1
		c-0.7,1.3-1.3,2.5-1.8,3.6c-0.5,1.1-0.9,2.2-1.2,3.3c-0.3,1.1-0.6,2.3-0.9,3.6c-0.2,1.3-0.5,2.7-0.7,4.3H15c0.5-2.1,1.2-4.3,2-6.4
		c0.8-2.1,1.7-4.3,2.8-6.4L20.5,2l-1.1,0.1h-4.7L13.8,4.3z"/>
                                <path fill="#E5E6E7" d="M36.2,20.5c-0.7-0.5-1.4-1.1-2.1-1.8c-0.6-0.6-1.2-1.4-1.7-2.2c-0.5-0.8-0.9-1.7-1.1-2.7
		c-0.3-1-0.4-2.1-0.4-3.3c0-1.2,0.1-2.3,0.4-3.3c0.3-1,0.7-1.9,1.1-2.7C33,3.7,33.5,3,34.2,2.3c0.7-0.7,1.4-1.3,2.1-2l0.5,0.4
		c-0.6,0.6-1.1,1.3-1.6,1.9c-0.5,0.7-0.9,1.4-1.2,2.2c-0.3,0.8-0.6,1.6-0.8,2.5c-0.2,0.9-0.3,1.9-0.3,3.1c0,1.1,0.1,2.1,0.3,3.1
		c0.2,0.9,0.5,1.8,0.8,2.6c0.4,0.8,0.8,1.5,1.3,2.2c0.5,0.6,1,1.2,1.5,1.8L36.2,20.5z"/>
                                <path fill="#E5E6E7" d="M43.4,15.1c0.4,0,0.8-0.1,1.1-0.3c0.4-0.2,0.7-0.4,0.9-0.7c0.3-0.3,0.5-0.7,0.6-1.1
		c0.2-0.4,0.2-0.8,0.2-1.3c0-0.5-0.1-1-0.3-1.4c-0.2-0.4-0.4-0.8-0.7-1c-0.3-0.3-0.6-0.5-1-0.6c-0.4-0.1-0.8-0.2-1.3-0.2h-1.4V7.8
		l3.7-5L46.1,2V1.9l-1.2,0.1h-3.7l-0.9,2.3h-0.6c-0.1-0.3-0.1-0.6-0.2-1s-0.1-0.7-0.1-1c0-0.3-0.1-0.7-0.1-1c0-0.3,0-0.6,0-0.9h8.6
		v0.7L44.2,6l-1,1v0L44,6.9c0.7,0,1.3,0.2,1.9,0.4c0.5,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.8,0.9,1.4c0.2,0.5,0.3,1.1,0.3,1.7
		c0,0.7-0.1,1.4-0.4,2c-0.3,0.6-0.7,1.1-1.2,1.5c-0.5,0.4-1.1,0.7-1.7,1c-0.6,0.2-1.3,0.3-2,0.3c-0.3,0-0.7,0-1.1-0.1
		c-0.4-0.1-0.8-0.1-1.1-0.2c-0.4-0.1-0.7-0.2-1-0.4S39.3,15.2,39,15l0.6-2h0.4c0.1,0.1,0.2,0.2,0.4,0.4c0.2,0.2,0.3,0.3,0.5,0.5
		c0.2,0.2,0.3,0.4,0.5,0.5c0.2,0.2,0.3,0.3,0.4,0.5c0.1,0,0.3,0.1,0.6,0.1S43,15.1,43.4,15.1z"/>
                                <path fill="#E5E6E7" d="M60.5,15.8h-5.7v-0.6c0.7-0.2,1.4-0.4,2-0.5v-3.1h-6.7v-0.5l8.1-10.9h0.6v10.3h2.8v1.1h-2.8v3.1
		c0.6,0.1,1.1,0.3,1.7,0.5V15.8z M56.9,4.8l0.2-1.6H57l-0.9,1.6l-3.7,5.1l-0.9,0.7l1.6-0.2h3.7V4.8z"/>
                                <path fill="#E5E6E7" d="M64.8,4.3h-0.6c-0.1-0.3-0.1-0.6-0.2-1C64,3,64,2.6,63.9,2.3c0-0.4-0.1-0.7-0.1-1c0-0.3,0-0.6,0-0.9h9.1V1
		c-0.7,1.3-1.3,2.5-1.8,3.6S70.2,6.9,69.8,8c-0.3,1.1-0.6,2.3-0.9,3.6c-0.3,1.3-0.5,2.7-0.8,4.3H66c0.5-2.1,1.2-4.3,2-6.4
		c0.8-2.1,1.7-4.3,2.8-6.4L71.5,2l-1.1,0.1h-4.7L64.8,4.3z"/>
                                <path fill="#E5E6E7" d="M75.1,20c0.5-0.5,1.1-1.1,1.5-1.8s0.9-1.4,1.2-2.2c0.4-0.8,0.6-1.7,0.8-2.7c0.2-1,0.3-2,0.3-3.1
		c0-1.1-0.1-2.1-0.3-3c-0.2-0.9-0.5-1.7-0.8-2.5c-0.3-0.8-0.7-1.4-1.2-2.1c-0.5-0.6-1-1.3-1.6-1.9l0.5-0.4c0.8,0.6,1.5,1.2,2.1,1.8
		c0.7,0.6,1.2,1.4,1.7,2.2S80.2,6,80.5,7c0.3,1,0.4,2.1,0.4,3.3c0,1.2-0.1,2.3-0.4,3.3c-0.3,1-0.6,1.9-1.1,2.8
		c-0.5,0.8-1,1.6-1.7,2.3c-0.7,0.7-1.4,1.3-2.1,1.8L75.1,20z"/>
                                <path fill="#E5E6E7" d="M91.8,5.3H91c-0.1-0.2-0.2-0.5-0.3-0.8c-0.1-0.3-0.2-0.6-0.3-0.9c-0.1-0.3-0.2-0.6-0.3-1
		C90,2.3,89.9,2,89.8,1.8c0.5-0.4,1.2-0.8,2-1.1c0.8-0.3,1.8-0.5,2.9-0.5c0.8,0,1.5,0.1,2.1,0.3s1.1,0.5,1.5,0.9s0.7,0.8,0.9,1.3
		c0.2,0.5,0.3,1,0.3,1.6c0,0.9-0.2,1.7-0.6,2.5c-0.4,0.8-0.9,1.6-1.5,2.3c-0.6,0.7-1.2,1.3-1.9,1.9S94,12,93.5,12.5l-1.1,0.8v0.1
		l1.3-0.1h3.8l1.1-2.5h0.7c0,0.4,0.1,0.8,0.1,1.2c0.1,0.5,0.1,0.9,0.1,1.4c0,0.5,0.1,0.9,0.1,1.4c0,0.4,0,0.8,0,1H89.6v-1.4
		c0.4-0.3,0.8-0.7,1.3-1.2c0.5-0.4,1-0.9,1.5-1.5c0.5-0.5,1-1.1,1.5-1.7c0.5-0.6,0.9-1.2,1.3-1.8c0.4-0.6,0.7-1.3,0.9-1.9
		s0.3-1.3,0.3-1.9c0-0.8-0.2-1.5-0.7-2c-0.4-0.5-1-0.8-1.8-0.8c-0.3,0-0.5,0-0.7,0s-0.4,0.1-0.7,0.2L91.8,5.3z"/>
                                <path fill="#E5E6E7" d="M113,15.8h-6.8v-0.9c0.7-0.2,1.4-0.4,2-0.5v-2.5h-6.5v-1l8.4-10.7h1.2v10.3h2.7v1.4h-2.7v2.5
		c0.6,0.1,1.1,0.3,1.7,0.5V15.8z M108.2,5.7l0.2-1.5h-0.1l-0.8,1.5l-3.2,4.1l-0.9,0.7l1.6-0.2h3.2V5.7z"/>
                                <path fill="#E5E6E7" d="M126.5,11.1c0,0.8-0.1,1.5-0.4,2.1c-0.3,0.6-0.7,1.1-1.2,1.6c-0.5,0.4-1.1,0.8-1.7,1
		c-0.7,0.2-1.3,0.4-2.1,0.4c-0.9,0-1.7-0.1-2.4-0.4c-0.7-0.3-1.3-0.7-1.8-1.2c-0.5-0.5-0.8-1.1-1.1-1.8c-0.2-0.7-0.4-1.5-0.4-2.3
		c0-1.4,0.2-2.6,0.7-3.8c0.5-1.1,1.1-2.2,2-3c0.8-0.9,1.8-1.6,2.9-2.2c1.1-0.6,2.3-1,3.5-1.3l0.3,0.9c-0.8,0.2-1.5,0.6-2.2,1
		s-1.3,0.9-1.8,1.6c-0.5,0.6-0.9,1.3-1.3,2.1c-0.3,0.8-0.5,1.6-0.6,2.5c0.1-0.2,0.3-0.4,0.5-0.6c0.2-0.2,0.4-0.4,0.7-0.5
		c0.3-0.2,0.6-0.3,0.9-0.4c0.3-0.1,0.7-0.1,1.2-0.1c0.6,0,1.2,0.1,1.7,0.3c0.5,0.2,1,0.5,1.4,0.9c0.4,0.4,0.7,0.9,0.9,1.4
		C126.4,9.7,126.5,10.3,126.5,11.1z M123.2,11.4c0-2.2-0.7-3.3-2.2-3.3c-0.5,0-0.9,0.1-1.3,0.4S119.2,9,119,9.4
		c0,0.2-0.1,0.4-0.1,0.7c0,0.3,0,0.5,0,0.8c0,0.5,0,1,0.1,1.4c0.1,0.5,0.2,0.9,0.4,1.2c0.2,0.4,0.4,0.7,0.7,0.9
		c0.3,0.2,0.7,0.3,1.1,0.3c0.4,0,0.7-0.1,0.9-0.3c0.2-0.2,0.5-0.4,0.6-0.7c0.2-0.3,0.3-0.7,0.3-1.1
		C123.2,12.3,123.2,11.8,123.2,11.4z"/>
                                <path fill="#E5E6E7" d="M129.2,8.6h6.2v2h-6.2V8.6z"/>
                                <path fill="#E5E6E7" d="M140,5.2h-0.7c-0.1-0.3-0.1-0.7-0.2-1.1c-0.1-0.4-0.1-0.9-0.2-1.4c-0.1-0.5-0.1-0.9-0.2-1.3
		c0-0.4-0.1-0.8-0.1-1h10.3v1c-0.8,1.2-1.5,2.4-2,3.5c-0.5,1.1-1,2.2-1.4,3.3c-0.4,1.1-0.7,2.3-0.9,3.5c-0.2,1.2-0.5,2.6-0.6,4.1
		h-3.1c0.5-2.1,1.2-4.2,2.1-6.1c0.8-1.9,1.8-3.9,3-5.8l0.8-1.1l-1.1,0.1h-4.7L140,5.2z"/>
                                <path fill="#E5E6E7" d="M150.9,8.1c0-1.3,0.1-2.5,0.4-3.5c0.3-1,0.7-1.8,1.2-2.5c0.5-0.7,1.1-1.2,1.8-1.5c0.7-0.3,1.5-0.5,2.3-0.5
		c1.8,0,3.2,0.7,4.2,2c1,1.3,1.5,3.3,1.5,6c0,1.3-0.1,2.5-0.4,3.5c-0.3,1-0.7,1.8-1.2,2.5c-0.5,0.7-1.1,1.2-1.9,1.5
		c-0.7,0.3-1.5,0.5-2.4,0.5c-0.9,0-1.7-0.2-2.4-0.5c-0.7-0.4-1.3-0.9-1.8-1.6c-0.5-0.7-0.8-1.5-1.1-2.5
		C151.1,10.5,150.9,9.4,150.9,8.1z M154.2,8.1c0,1.1,0,2,0.1,2.8s0.2,1.5,0.4,2.1c0.2,0.6,0.4,1,0.7,1.3s0.7,0.5,1.1,0.5
		c0.5,0,0.9-0.1,1.3-0.4c0.3-0.2,0.6-0.6,0.8-1.2c0.2-0.5,0.3-1.2,0.4-2.1c0.1-0.8,0.1-1.9,0.1-3.1c0-1.1,0-2-0.1-2.8
		c-0.1-0.8-0.2-1.5-0.3-2.1c-0.2-0.6-0.4-1-0.7-1.3c-0.3-0.3-0.7-0.5-1.3-0.5c-0.5,0-0.9,0.1-1.2,0.4c-0.3,0.2-0.6,0.6-0.7,1.2
		c-0.2,0.5-0.3,1.2-0.4,2.1C154.3,5.9,154.2,6.9,154.2,8.1z"/>
                                <path fill="#E5E6E7" d="M164.9,8.6h6.2v2h-6.2V8.6z"/>
                                <path fill="#E5E6E7" d="M175.7,5.2H175c-0.1-0.3-0.1-0.7-0.2-1.1c-0.1-0.4-0.1-0.9-0.2-1.4s-0.1-0.9-0.2-1.3c0-0.4-0.1-0.8-0.1-1
		h10.3v1c-0.8,1.2-1.5,2.4-2,3.5c-0.5,1.1-1,2.2-1.4,3.3c-0.4,1.1-0.7,2.3-0.9,3.5c-0.2,1.2-0.5,2.6-0.6,4.1h-3.1
		c0.5-2.1,1.2-4.2,2.1-6.1c0.8-1.9,1.8-3.9,3-5.8l0.8-1.1l-1.1,0.1h-4.7L175.7,5.2z"/>
                                <path fill="#E5E6E7" d="M186.6,8.1c0-1.3,0.1-2.5,0.4-3.5c0.3-1,0.7-1.8,1.2-2.5c0.5-0.7,1.1-1.2,1.8-1.5c0.7-0.3,1.5-0.5,2.3-0.5
		c1.8,0,3.2,0.7,4.2,2c1,1.3,1.5,3.3,1.5,6c0,1.3-0.1,2.5-0.4,3.5c-0.3,1-0.7,1.8-1.2,2.5c-0.5,0.7-1.1,1.2-1.9,1.5
		c-0.7,0.3-1.5,0.5-2.4,0.5c-0.9,0-1.7-0.2-2.4-0.5c-0.7-0.4-1.3-0.9-1.8-1.6c-0.5-0.7-0.8-1.5-1.1-2.5
		C186.8,10.5,186.6,9.4,186.6,8.1z M190,8.1c0,1.1,0,2,0.1,2.8s0.2,1.5,0.4,2.1s0.4,1,0.7,1.3c0.3,0.3,0.7,0.5,1.1,0.5
		c0.5,0,0.9-0.1,1.3-0.4c0.3-0.2,0.6-0.6,0.8-1.2c0.2-0.5,0.3-1.2,0.4-2.1s0.1-1.9,0.1-3.1c0-1.1,0-2-0.1-2.8
		c-0.1-0.8-0.2-1.5-0.3-2.1c-0.2-0.6-0.4-1-0.7-1.3c-0.3-0.3-0.7-0.5-1.3-0.5c-0.5,0-0.9,0.1-1.2,0.4c-0.3,0.2-0.6,0.6-0.7,1.2
		c-0.2,0.5-0.3,1.2-0.4,2.1C190,5.9,190,6.9,190,8.1z"/>
                            </g>
</svg>
                    </a>

                </div>
                <!-- <a href="/callback" class="call p-ajax">Обратный звонок</a> -->
                <a href="javascript:;" class="call send__callback__controller">Обратный звонок</a>
            </div>
        </div>

        <div class="copyright__right">
            <!-- <a href="http://thebigd.ru" target="_blank"><img src="/assets/images/big__d.svg"></a> -->
        </div>
    </div>
</div>




    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter29214035 = new Ya.Metrika({id:29214035,
                        webvisor:true,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true});
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="//mc.yandex.ru/watch/29214035" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');


        ga('create', 'UA-97506234-1', 'auto', {'allowLinker': true});
        ga('require', 'linker');
        ga('linker:autoLink', ['gosstroy.info'] );
        ga('send', 'pageview');
    </script>
    <!-- <script src="http://cdn.callibri.ru/callibri.js" type="text/javascript"></script> -->
    <!-- /Yandex.Metrika counter -->

    <!-- <script type="text/javascript" src="//cdn.callbackhunter.com/cbh.js?hunter_code=25c8abbc01a7d785039a6ab47062d267" charset="UTF-8"></script>

    <script type="text/javascript" src="//vk.com/js/api/openapi.js?136"></script> -->

    </body>
</html>
<?
}
?>