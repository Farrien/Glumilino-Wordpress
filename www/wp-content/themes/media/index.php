<?PHP
get_header();
?>

<div class="load_frame data__target" attr-targ="home-page" id="home__page-slider">

    <!-- dynamic__frame__resize -->
    <div class="div_100 dynamic__frame__resize">
        <img class="div_100 wait-load bg_img video-bg background__image" src="/assets/images/blank.gif">
    </div>


    <div class="slideshow__frame div_100">
        <div class="right-shadow"></div>
        <div class="slideshow__left">
            <div class="slideshow__slogans">
                <?
                global $wpdb;
                $sql = $wpdb->get_results("SELECT * FROM `home__page-slide` ORDER BY `id` ASC;");
                if(count($sql) != 0)
                {
                    $slide__array = array();
                    foreach($sql as $data)
                    {
                        $slide__array[] = $data->url;
                        ?>
                        <div class="slideshow__slogan">
                            <div class="slide__item">
                                <div class="content">
                                    <div class="line"><span></span><span class="r"></span></div>
                                    <p class="slideshow__slogan-title">
                                        <?=$data->title;?>
                                        <span class="slideshow__slogan-description"><?=nl2br($data->description);?></span>
                                    </p>
                                    <div class="line no__margin"><span></span><span class="r"></span></div>
                                </div>
                            </div>

                        </div>
                    <?
                    }
                }
                ?>

                <div class="slideshow__slogan">
                    <div class="slide__item">
                        <div class="content">
                            <div class="line"><span></span><span class="r"></span></div>
                            <p class="slideshow__slogan-title">
                                Квартиры бизнес-класса
                                <span class="slideshow__slogan-description">
                                    на Горсовете – паркинг в подарок
                                    <br><br>
                                    <a href="/offers" class="p-ajax" style="text-decoration: underline; color: #80C028; font-size: 18px;">Подробнее</a>
                                    ​</span>
                            </p>
                            <div class="line no__margin"><span></span><span class="r"></span></div>
                        </div>
                    </div>

                </div>

                <div id="home__slide__array" style="display: none;"><?=join(',', $slide__array);?>,/uploading/home__page/parking.jpg</div>
            </div>
            <div class="slideshow__controls">
                <div class="slideshow__bullets">
                    <div class="slideshow__bullet active" data-targ="0"></div>
                    <div class="slideshow__bullet" data-targ="1"></div>
                    <div class="slideshow__bullet" data-targ="2"></div>
                    <div class="slideshow__bullet" data-targ="3"></div>
                    <div class="slideshow__bullet" data-targ="4"></div>
                    <div class="slideshow__bullet" data-targ="5"></div>
                    <br><Br><br><br>
                    <br><Br><br><br>
                    <br><Br><br><br>
                </div>
            </div>
        </div>
    </div>
</div>

<?PHP
get_footer();
?>
