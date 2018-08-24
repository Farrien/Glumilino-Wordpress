<?PHP
/**
 * Template Name: Апартаменты (Общий план этажа)
 */
get_header();
?>

<?PHP
global $wpdb;
$section_id = get_query_var('section_id');
$storey_id = get_query_var('storey_id');
$apartment_number = get_query_var('apartment_number');
$img = get_query_var('img');

if($section_id == 3 || $section_id == 2 || $section_id == 1){
?>
    <div class="load_frame data__target absolute__frame" attr-targ="apartments__storey__all__plan" id="apartments__storey__page2">
        <div class="absolute__frame dynamic__frame__resize">
            <img src="/assets/images/background/fas_01_View02__blurred.jpg" class="background__image" />
        </div>

        <div class="middle">
            <div class="dynamic-container">
                <div class="window">
                    <div class="row clearfix">
                        <div class="col-xs-3">
                            <div class="left__section">
                                <br>
                                <div class="section__name">Секция <span><?=$section_id;?></span></div>
                                <div class="switch__storey">
                                    <ul class="left">
                                        <?PHP
                                        for($i = 14; $i >= 4; $i--){
                                            ?>
                                            <li><a href="/apartments/section/<?=$section_id;?>/storey/<?=$i;?>/" class="<? if($storey_id == $i){ echo 'active'; } ?> p-ajax"><span>этаж</span><?=$i;?></a></li>
                                            <?
                                        }
                                        ?>
                                    </ul>
                                    <ul class="right">
                                        <?PHP
                                        for($i = 25; $i >= 15; $i--){
                                            ?>
                                            <li><a href="/apartments/section/<?=$section_id;?>/storey/<?=$i;?>/" class="<? if($storey_id == $i){ echo 'active'; } ?> p-ajax"><span>этаж</span><?=$i;?></a></li>
                                            <?
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-9">
                            <div class="checked__section__listing">
                                <div class="list">
                                    <a href="javascript:;">Выберите:</a>
                                    <a href="/apartments/" class="link p-ajax">Секция</a>
                                    <a href="/apartments/section/<?=$section_id;?>" class="link p-ajax">Этаж</a>
                                </div>
                            </div>
                            <div class="center__section">
                                <div class="image__section">
                                    <!-- <a href="/apartments/section/<?=$section_id;?>" class="close p-ajax"></a> -->
                                    <div class="floor__map-centrer">
                                        <?PHP
                                        $x__plan = file_get_contents("assets/pages/floors/".$section_id."-1-".$storey_id.".html");
                                        $x__plan = str_replace('width="1000"', false, $x__plan);
                                        $x__plan = str_replace('height="1000"', false, $x__plan);
                                        $x__plan = str_replace('area', 'polygon fill="#cccccc" opacity="0.2"', $x__plan);
                                        $x__plan = str_replace('coords', 'points', $x__plan);
                                        $x__plan = preg_replace('|src="(.*)" />|Ui', 'src="$1"><img width="1000" height="1000" class="storey-section-svg background__image" src="/assets/images/blank.gif"/>', $x__plan);
                                        echo $x__plan;
                                        ?>
                                    </div>
                                </div>

                                <div class="rose__wind section1_2_3" style="transform: rotate(0deg);  background-image: url('/assets/images/roze__wind123.svg'); "></div>

                                <div class="apartments__footer__info apartment__info">
                                    <div class="row clearfix">
                                        <div class="col-xs-7">
                                            <div class="info__left">
                                                <div class="value__section area">
                                                    <div class="name">площадь, м<span class="area">2</span></div>
                                                    <div class="value" id="area__change"></div>
                                                </div>
                                                <div class="value__section rooms">
                                                    <div class="name">комнат</div>
                                                    <div class="value" id="rooms__change"></div>
                                                </div>
                                                <div class="value__section price">
                                                    <div class="name">стоимость</div>
                                                    <div class="value" id="price__change"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xs-5">
                                            <div class="more__property">
                                                <a href="javascript:;" class="send__booking__controller">
                                                    Узнайте Ваши<br>индивидуальные условия
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

<? } ?>


<?
if($section_id == 5){
    ?>
    <div class="load_frame data__target absolute__frame" attr-targ="apartments__storey__all__plan" id="apartments__storey__page2">
    <div class="absolute__frame dynamic__frame__resize">
        <img src="/assets/images/background/fas_01_View02__blurred.jpg" class="background__image" />
    </div>

    <div class="middle">
    <div class="dynamic-container">
    <div class="window">
    <div class="row clearfix">
    <div class="col-xs-3">
        <div class="left__section">
            <div class="section__name">Секция <span><?=$section_id;?></span></div>


            <div class="switch__storey">
                <ul class="left">
                    <?PHP
                    for($i = 8; $i >= 2; $i--){
                        ?>
                        <li><a href="/apartments/section/<?=$section_id;?>/storey/<?=$i;?>/" class="<? if($storey_id == $i){ echo 'active'; } ?> p-ajax"><span>этаж</span><?=$i;?></a></li>
                    <?
                    }
                    ?>
                </ul>
                <ul class="right">
                    <?PHP
                    for($i = 13; $i >= 9; $i--){
                        ?>
                        <li><a href="/apartments/section/<?=$section_id;?>/storey/<?=$i;?>/" class="<? if($storey_id == $i){ echo 'active'; } ?> p-ajax"><span>этаж</span><?=$i;?></a></li>
                    <?
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>

    <div class="col-xs-9">
        <div class="checked__section__listing" style="top: -50px;">
            <div class="list">
                <a href="javascript:;">Выберите:</a>
                <a href="/apartments/" class="link p-ajax">Секция</a>
                <a href="/apartments/section/<?=$section_id;?>" class="link p-ajax">Этаж</a>
            </div>
        </div>

        <div class="center__section">
            <div class="image__section">

                <!-- <a href="/apartments/section/<?=$section_id;?>" class="close p-ajax"></a> -->
                <div class="floor__map-centrer">
                    <input type="hidden" id="plan__resize__horizontal" value="1">
                    <div><img class="storey-section-background background__image" src="/assets/images/plans/section__<?=$section_id;?>.png" /></div>
                    <img width="1000" height="1000" class="storey-section-svg background__image" src="/assets/images/blank.gif"/>
                    <map id="one">
                        <?PHP
                        $file__section5 = file_get_contents("apartments4_5.json");
                        $file__section5 = json_decode($file__section5, true);
                        $file__section5 = $file__section5['apartments'];
                        #ksort($file__section4);

                        $apartmentsArray = array();
                        $apartmentsUnique = 1;
                        foreach($file__section5 as $fs5__i => $fs5__v)
                        {
                            if($fs5__v['f'] == $storey_id && $fs5__v['b'] == 2 && $fs5__v['s'] == 2)
                            {
                                $apartmentsArray[$fs5__i] = $fs5__v;
                                $apartmentsArray[$fs5__i]['alt'] = $fs5__i;
                                $apartmentsUnique++;
                            }
                        }

                        uasort($apartmentsArray, function($a, $b){
                            return strnatcmp($a['alt'], $b['alt']);
                        });

                        $apartmentsArray = array_values($apartmentsArray);
                        ?>

                        <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[6]['alt'];?>" section="5" unique="7" points="384.2,284.3 347.6,284.3 347.6,273.3 382.6,273.3 382.6,227.4 289.6,227.4 289.6,273.3 308,273.3 308,284.3
		174.9,284.3 174.9,284.3 127.2,284.3 63,284.3 37,284.3 37,725.4 127.2,725.4 127.2,500.3 174.9,500.3 174.9,439.8 384.2,439.8
		"/>
                        <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[5]['alt'];?>" section="5" unique="6" points="236.2,742.9 236.2,725.4 267.6,725.4 267.6,511.3 138.3,511.3 138.3,725.4 212.4,725.4 212.4,742.9 190.3,742.9
		190.3,768 272.2,768 272.2,742.9 	"/>
                        <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[4]['alt'];?>" section="5" unique="5" points="406,725.4 406,511.3 278.7,511.3 278.7,725.4 308.5,725.4 308.5,740.7 274.1,740.7 274.1,766.6 354.7,766.6
		354.7,740.7 330.1,740.7 330.1,725.4 	"/>
                        <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[3]['alt'];?>" section="5" unique="4" points="544.4,725.4 544.4,511.3 417,511.3 417,725.4 490.7,725.4 490.7,740.7 468.9,740.7 468.9,765.9 542.4,765.9
		542.4,740.7 513.9,740.7 513.9,725.4 	"/>
                        <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[2]['alt'];?>" section="5" unique="3" points="682.8,725.4 682.8,511.3 555.4,511.3 555.4,725.4 586.9,725.4 586.9,740.2 550.8,740.2 550.8,768.2 631.4,768.2
		631.4,740.2 608.2,740.2 608.2,725.4 	"/>
                        <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[1]['alt'];?>" section="5" unique="2" points="791.8,740 791.8,725.4 821.1,725.4 821.1,511.3 693.8,511.3 693.8,725.4 767.4,725.4 767.4,740 744.4,740
		744.4,765.9 828.7,765.9 828.7,740 	"/>
                        <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[0]['alt'];?>" section="5" unique="1" points="726.4,284.3 726.4,268.9 743.1,268.9 743.1,230.9 648.3,230.9 648.3,268.9 684.9,268.9 684.9,284.3 648.3,284.3
		648.3,449 735.6,449 735.6,500.3 832.1,500.3 832.1,593.6 955.2,593.6 955.2,449 955.2,293.9 955.2,284.3 	"/>

                    </map>
                </div>
            </div>

            <div class="rose__wind section4_5"></div>


            <div class="apartments__footer__info apartment__info">
                <div class="row clearfix">
                    <div class="col-xs-7">
                        <div class="info__left">
                            <div class="value__section area">
                                <div class="name">площадь, м<span class="area">2</span></div>
                                <div class="value" id="area__change"></div>
                            </div>
                            <div class="value__section rooms">
                                <div class="name">комнат</div>
                                <div class="value" id="rooms__change"></div>
                            </div>
                            <div class="value__section price">
                                <div class="name">стоимость</div>
                                <div class="value" id="price__change"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-5">
                        <div class="more__property">
                            <a href="javascript:;" class="send__booking__controller">
                                Узнайте Ваши<br>индивидуальные условия
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    </div>
    <?
}
?>






<?
if($section_id == 4){
    ?>
    <div class="load_frame data__target absolute__frame" attr-targ="apartments__storey__all__plan" id="apartments__storey__page2">
        <div class="absolute__frame dynamic__frame__resize">
            <img src="/assets/images/background/fas_01_View02__blurred.jpg" class="background__image" />
        </div>

        <div class="middle">
            <div class="dynamic-container">
                <div class="window">
                    <div class="row clearfix">
                        <div class="col-xs-3">
                            <div class="left__section">
                                <br><br>
                                <div class="section__name">Секция <span><?=$section_id;?></span></div>


                                <div class="switch__storey">
                                    <ul class="left">
                                        <?PHP
                                        for($i = 6; $i >= 2; $i--){
                                            ?>
                                            <li><a href="/apartments/section/<?=$section_id;?>/storey/<?=$i;?>/" class="<? if($storey_id == $i){ echo 'active'; } ?> p-ajax"><span>этаж</span><?=$i;?></a></li>
                                        <?
                                        }
                                        ?>
                                    </ul>
                                    <ul class="right">
                                        <?PHP
                                        for($i = 12; $i >= 7; $i--){
                                            ?>
                                            <li><a href="/apartments/section/<?=$section_id;?>/storey/<?=$i;?>/" class="<? if($storey_id == $i){ echo 'active'; } ?> p-ajax"><span>этаж</span><?=$i;?></a></li>
                                        <?
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-9">
                            <div class="checked__section__listing" style="top: -50px;">
                                <div class="list">
                                    <a href="javascript:;">Выберите:</a>
                                    <a href="/apartments/" class="link p-ajax">Секция</a>
                                    <a href="/apartments/section/<?=$section_id;?>" class="link p-ajax">Этаж</a>
                                </div>
                            </div>

                            <div class="center__section">
                                <div class="image__section">
                                    <!-- <a href="/apartments/section/<?=$section_id;?>" class="close p-ajax"></a> -->
                                    <div class="floor__map-centrer">
                                        <input type="hidden" id="plan__resize__horizontal" value="1">
                                        <div><img class="storey-section-background background__image" src="/assets/images/plans/section__<?=$section_id;?>.png" /></div>
                                        <img width="1000" height="1000" class="storey-section-svg background__image" src="/assets/images/blank.gif"/>
                                        <map id="one">

                                            <?PHP
                                            $file__section4 = file_get_contents("apartments4_5.json");
                                            $file__section4 = json_decode($file__section4, true);
                                            $file__section4 = $file__section4['apartments'];
                                            #ksort($file__section4);

                                            $apartmentsArray = array();
                                            $apartmentsUnique = 1;
                                            foreach($file__section4 as $fs4__i => $fs4__v)
                                            {
                                                if($fs4__v['f'] == $storey_id && $fs4__v['b'] == 1 && $fs4__v['s'] == 1)
                                                {
                                                    $apartmentsArray[$fs4__i] = $fs4__v;
                                                    $apartmentsArray[$fs4__i]['alt'] = $fs4__i;
                                                    $apartmentsUnique++;
                                                }
                                            }

                                            uasort($apartmentsArray, function($a, $b){
                                                return strnatcmp($a['alt'], $b['alt']);
                                            });

                                            $apartmentsArray = array_values($apartmentsArray);
                                            ?>
                                                <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[6]['alt'];?>" section="4" unique="7" points="340.3,442.2 340.3,438.4 341.3,438.4 341.3,429.6 429.2,429.6 429.2,338.8 429.2,252.3
		381.5,252.3 381.5,243.4 380.1,243.4 380.1,239.7 379.8,239.7 379.8,235.2 425.9,235.2 425.9,190.9 322.5,190.9 322.5,235.2
		339,235.2 339,239.7 338.7,239.7 338.7,243.4 337.3,243.4 337.3,252.3 34.1,252.3 34.1,297 34.1,407.7 34.1,407.8 165.4,407.7
		169.3,407.7 169.3,429.6 169.4,429.6 307.3,429.6 307.3,438.4 308.5,438.4 308.5,442.2 	"/>

                                                <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[5]['alt'];?>" section="4" unique="6" points="273.4,452 269.4,452 269.4,450.9 264.8,450.9 264.8,442.2 169.3,442.2 169.3,452 165.4,452
		165.4,450.9 156.5,450.9 156.5,416.2 34.1,416.2 34.1,442.4 34.1,501.3 156.5,501.3 156.5,481.3 165.4,481.3 165.4,480.2
		169.3,480.2 169.3,501.3 173.6,501.3 173.6,514 169.6,514 130.6,514 91.1,514 91.1,769.4 211.7,769.4 212.1,501.3 264.8,501.3
		264.8,484.6 269.4,484.6 269.4,483.6 273.4,483.6 	"/>

                                                <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[4]['alt'];?>" section="4" unique="5" points="278.8,501.3 278.8,505.2 277.7,505.2 277.7,514 248.2,514 224.9,514 224.9,601.7 224.9,760.7
		310.3,760.7 310.3,769.5 311.5,769.5 311.5,773.4 312.1,773.4 312.1,777.7 282.8,777.7 282.8,811.4 378,811.4 378,777.7 336,777.7
		336,773.4 336.6,773.4 336.6,769.5 337.6,769.5 337.6,760.7 372.7,760.7 372.7,514 311.7,514 311.7,505.2 310.7,505.2 310.7,501.3
			"/>

                                                <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[3]['alt'];?>" section="4" unique="4" points="447.5,501.3 447.5,505.2 446.5,505.2 446.5,514 442.4,514 385.5,514 385.5,600.8 385.5,760.7
		420.5,760.7 420.5,769.5 421.6,769.5 421.6,773.4 422.2,773.4 422.2,777.7 380.2,777.7 380.1,777.7 380.1,811.4 475.4,811.4
		475.4,777.7 446.1,777.7 446.1,773.4 446.7,773.4 446.7,769.5 447.8,769.5 447.8,760.7 533.3,760.7 533.3,533 485.2,533 485.2,514
		480.4,514 480.4,505.2 479.4,505.2 479.4,501.3 	"/>

                                                <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[2]['alt'];?>" section="4" unique="3" points="586.3,501.3 586.3,505.2 585.2,505.2 585.2,514 546.1,514 546.1,606.9 546.1,760.7 627.6,760.7
		631.7,760.7 631.7,769.5 632.7,769.5 632.7,773.4 633.3,773.4 633.3,777.7 604.1,777.7 604.1,777.7 604.1,811.4 699.3,811.4
		699.3,777.7 657.3,777.7 657.3,773.4 657.8,773.4 657.8,769.5 659,769.5 659,760.7 694,760.7 694,514 619.2,514 619.2,505.2
		618.1,505.2 618.1,501.3 	"/>

                                                <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[1]['alt'];?>" section="4" unique="2" points="768.8,501.3 768.8,505.2 767.7,505.2 767.7,514 763.6,514 706.7,514 706.7,611.3 706.7,760.7
		741.8,760.7 741.8,769.5 742.8,769.5 742.8,773.4 743.5,773.4 743.5,777.7 701.5,777.7 701.5,777.7 701.5,811.4 796.7,811.4
		796.7,777.7 767.4,777.7 767.4,773.4 768,773.4 768,769.5 769,769.5 769,760.7 854.6,760.7 854.6,514 801.7,514 801.7,505.2
		800.7,505.2 800.7,501.3 	"/>

                                                <polygon fill="#cccccc" opacity="0.2" alt="<?=$apartmentsArray[0]['alt'];?>" section="4" unique="1" points="804,483.6 808,483.6 808,484.6 812.6,484.6 812.6,501.3 867.5,501.3 867.5,760.7 974.5,760.7
		974.5,252.3 835.4,252.3 835.4,292.3 818.3,292.3 818.3,243.7 736.1,243.7 736.1,324.4 736.1,442.6 812.6,442.6 812.6,450.9
		808,450.9 808,452 804,452 	"/>

                                        </map>
                                    </div>
                                </div>

                                <div class="rose__wind section4_5"></div>
                                <div class="apartments__footer__info apartment__info">
                                    <div class="row clearfix">
                                        <div class="col-xs-7">
                                            <div class="info__left">
                                                <div class="value__section area">
                                                    <div class="name">площадь, м<span class="area">2</span></div>
                                                    <div class="value" id="area__change"></div>
                                                </div>
                                                <div class="value__section rooms">
                                                    <div class="name">комнат</div>
                                                    <div class="value" id="rooms__change"></div>
                                                </div>
                                                <div class="value__section price">
                                                    <div class="name">стоимость</div>
                                                    <div class="value" id="price__change"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xs-5">
                                            <div class="more__property">
                                                <a href="javascript:;" class="send__booking__controller">
                                                    Узнайте Ваши<br>индивидуальные условия
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
<?
}
?>



<?PHP
get_footer();
?>