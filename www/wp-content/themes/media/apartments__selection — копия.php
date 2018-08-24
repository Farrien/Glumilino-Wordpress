<?PHP
global $wpdb;
/**
 * Template Name: Подбор по параметрам
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="apartments__podbor__page" id="apartments__selection__page">
        <img class="background__image" src="/assets/images/background/fas_01_View02__blurred2.jpg" />

        <div id="apartment-selection">
            <div class="middle">
                <div class="dynamic-container fade-container">

                    <div class="background">
                        <!-- <h1>Подбор по параметрам</h1> -->

                        <div class="row clearfix">
                            <div class="col-xs-4">
                                <div class="mini__title">Выбор секции:</div>
                                <div id="calc">

                                    <input type="hidden" id="selection-apartment-storey" value="2##9">
                                    <input type="hidden" id="selection-apartment-rooms" value="0##2">
                                    <input type="hidden" id="selection-apartment-area" value="17.41##37.08">
                                    <input type="hidden" id="selection-apartment-price" value="1.1##2.1">

                                    <div class="section__selected">
                                        <div class="values">
                                            <a href="javascript:;" attr-section="1">1</a>
                                            <a href="javascript:;" attr-section="2">2</a>
                                            <a href="javascript:;" attr-section="3">3</a>
                                            <a href="javascript:;" attr-section="2">4</a>
                                            <a href="javascript:;" attr-section="3">5</a>
                                        </div>
                                        <div class="title">Секция</div>
                                    </div>

                                    <div class="section">
                                        <div class="range-slider-section">
                                            <div class="title"></div>
                                            <div class="slider-range" minimal="4" max="25" float="false"
                                                 data-type="storey"></div>
                                        </div>
                                        <div class="title">Этаж</div>
                                    </div>

                                    <div class="section">
                                        <div class="range-slider-section">
                                            <div class="title"></div>
                                            <div class="slider-range" minimal="1" max="3" float="true"
                                                 data-type="rooms"></div>
                                        </div>
                                        <div class="title">Количество комнат</div>
                                    </div>

                                    <div class="section">
                                        <div class="range-slider-section">
                                            <div class="title"></div>
                                            <div class="slider-range" minimal="28" max="89" float="true"
                                                 data-type="area"></div>
                                        </div>
                                        <div class="title">Площадь, <span class="area">м<b>2</b></span></div>
                                    </div>

                                    <!-- <div class="section">
                                        <div class="range-slider-section">
                                            <div class="title"></div>
                                            <div class="slider-range" minimal="1.8" max="5.9" float="true"
                                                 data-type="price"></div>
                                        </div>
                                        <div class="title">Цена, млн. руб.</div>
                                    </div> -->

                                    <!-- <div class="all">
                                        Найдено:&nbsp;&nbsp;<b><?=count($sql);?></b>
                                    </div> -->

                                </div>
                            </div>

                            <div class="col-xs-8">
                                <div class="mini__title2">
                                    подбор по параметрам
                                </div>
                                <div id="end-resulting">
                                    <div class="header">

                                        <div class="col">
                                            Секция
                                        </div>
                                        <div class="col">
                                            Этаж
                                        </div>
                                        <div class="col">
                                            №
                                        </div>
                                        <div class="col">
                                            Комнат
                                        </div>
                                        <div class="col">
                                            Площадь, <span class="area">м<b>2</b></span>
                                        </div>
                                        <div class="col">
                                            Цена
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>

                                    <div class="resulting">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

<?PHP
get_footer();
?>