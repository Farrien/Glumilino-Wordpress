<?PHP
/**
 * Template Name: Апартаменты (Квартира)
 */
$section__id = get_query_var('section_id');

#echo '<pre>';
#print_r($file);
#echo '</pre>';
#die();
get_header();
?>

<?PHP
global $wpdb;
$storey_id = get_query_var('storey_id');
$apartment_number = get_query_var('apartment_number');
$a__id = get_query_var('id');

#if (preg_match("/1-/U", $a__id) || preg_match("/2-/U", $a__id) || preg_match("/3-/U", $a__id))
if ($section__id == 123)
{
    $file = file_get_contents("apartments.json");
    $file = json_decode($file, true);
$apartmentsData = $file['apartments'][$a__id];
$img = get_query_var('img');
?>
    <div class="load_frame data__target absolute__frame" attr-targ="apartments__view__page" id="apartments__storey__page2">
        <div class="absolute__frame dynamic__frame__resize">
            <img src="/assets/images/background/fas_01_View02__blurred.jpg" class="background__image" />
        </div>

        <div class="middle">
            <div class="dynamic-container">
                <div class="window" style="position: relative;">
                    <div class="row clearfix">
                        <div class="col-xs-3">
                            <div class="left__section">
                                <div class="section__name">Секция <span><?=$apartmentsData['s'];?></span></div>
                                <div class="buttons__section">
                                    <a href="/pdf/pdf.php?img=/assets/apts_bw/<?=$a__id;?>.png&price=<?=$apartmentsData['tc'];?>&area=<?=$apartmentsData['sq'];?>&rooms=<?=$apartmentsData['rc'];?>&number=<?=$apartmentsData['n'];?>&storey=<?=$apartmentsData['f'];?>&section=<?=$apartmentsData['s'];?>&d=d">Скачать<br>планировку</a>
                                    <!-- <a href="javascript:;" class="send__plan__controller">Отправить<br>на почту</a> -->
                                    <a href="javascript:;" class="send__booking__controller" an="<?=$apartmentsData['n'];?>">Заявка на<br>бронирование</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-9">
                            <div class="checked__section__listing" style="top:-70px;">
                                <div class="list">
                                    <a href="javascript:;">Выберите:</a>
                                    <a href="/apartments/" class="link p-ajax">Секция</a>
                                    <a href="/apartments/section/<?=$apartmentsData['s'];?>" class="link p-ajax">Этаж</a>
                                    <a href="/apartments/section/<?=$apartmentsData['s'];?>/storey/<?=$apartmentsData['f'];?>" class="link p-ajax">Квартиру</a>
                                </div>
                            </div>

                            <div class="center__section">
                                <div class="image__section">
                                    <div class="apart-frame__centrer" style="padding-top: 50px;">
                                        <img src="/assets/images/apts/<?=$a__id;?>.png" height="100%">
                                    </div>
                                </div>

                                <div class="rose__wind section1_2_3" style="transform: rotate(0deg);  background-image: url('/assets/images/roze__wind123.svg');"></div>
                                <div class="apartments__footer__info open">
                                    <div class="row clearfix">
                                        <div class="col-xs-7">
                                            <div class="info__left">
                                                <div class="value__section area">
                                                    <div class="name">площадь, м<span class="area">2</span></div>
                                                    <div class="value"><?=$apartmentsData['sq'];?></div>
                                                </div>
                                                <div class="value__section rooms">
                                                    <div class="name">комнат</div>
                                                    <div class="value">
                                                        <?
                                                        $apartmentsData['rc'] = (int)$apartmentsData['rc'];
                                                        if($apartmentsData['rc'] == 0) { echo 'C'; } else {echo $apartmentsData['rc'];}
                                                        ?>
                                                    </div>
                                                </div>
                                                <div class="value__section price">
                                                    <div class="name">стоимость</div>
                                                    <div class="value">
                                                        <!-- По запросу -->
                                                        <?=number_format($apartmentsData['tc'], 0, '.', ' ');?> р.
                                                    </div>
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
    <?}?>


<?PHP
#if (preg_match("/4-/U", $a__id) || preg_match("/5-/U", $a__id))
if ($section__id == 4 || $section__id == 5)
{
    $query__param = explode('-', $a__id);
    $file = file_get_contents("apartments4_5.json");
    $file = json_decode($file, true);
    $apartmentsData = $file['apartments'][$a__id];
    $apartmentsData['rc'] = (int)$apartmentsData['rc'];
    $rooms = 'C';
    if($apartmentsData['rc'] != 0) $rooms = $apartmentsData['rc'];
    ?>
    <div class="load_frame data__target absolute__frame" attr-targ="apartments__view__page" id="apartments__storey__page2">
        <div class="absolute__frame dynamic__frame__resize">
            <img src="/assets/images/background/fas_01_View02__blurred.jpg" class="background__image" />
        </div>

        <div class="middle">
            <div class="dynamic-container">
                <div class="window">
                    <div class="row clearfix">
                        <div class="col-xs-3">
                            <div class="left__section">
                                <div class="section__name">Секция <span><?=$section__id;?></span></div>
                                <div class="buttons__section">
                                    <a href="/pdf/pdf.php?img=assets/pdf__plans/section<?=$section__id;?>/plans/<?=$apartmentsData['sq'];?>.png&price=<?=$apartmentsData['tc'];?>&area=<?=$apartmentsData['sq'];?>&rooms=<?=$rooms;?>&number=<?=$apartmentsData['n'];?>&storey=<?=$apartmentsData['f'];?>&section=<?=$section__id;?>&d=d">Скачать<br>планировку</a>
                                    <!-- <a href="javascript:;" class="send__plan__controller">Отправить<br>на почту</a> -->
                                    <a href="javascript:;" class="send__booking__controller" an="<?=$apartmentsData['n'];?>">Заявка на<br>бронирование</a>
                                </div>

                            </div>
                        </div>

                        <div class="col-xs-9">
                            <div class="checked__section__listing" style="top:-70px;">
                                <div class="list">
                                    <a href="javascript:;">Выберите:</a>
                                    <a href="/apartments/" class="link p-ajax">Секция</a>
                                    <a href="/apartments/section/<?=$section__id;?>" class="link p-ajax">Этаж</a>
                                    <a href="/apartments/section/<?=$section__id;?>/storey/<?=$apartmentsData['f'];?>" class="link p-ajax">Квартиру</a>
                                </div>
                            </div>

                            <div class="center__section">
                                <div class="image__section">
                                    <div class="apart-frame__centrer" style="padding-top: 50px;">
                                        <img src="/assets/images/plans/section__<?=$section__id;?>/<?=$apartmentsData['sq'];?>.png" height="100%">
                                    </div>
                                </div>

                                <div class="rose__wind section4_5"></div>
                                <div class="apartments__footer__info open">
                                    <div class="row clearfix">
                                        <div class="col-xs-7">
                                            <div class="info__left">
                                                <div class="value__section area">
                                                    <div class="name">площадь, м<span class="area">2</span></div>
                                                    <div class="value"><?=$apartmentsData['sq'];?></div>
                                                </div>
                                                <div class="value__section rooms">
                                                    <div class="name">комнат</div>
                                                    <div class="value">
                                                        <?
                                                        $apartmentsData['rc'] = (int)$apartmentsData['rc'];
                                                        if($apartmentsData['rc'] == 0) { echo 'C'; } else {echo $apartmentsData['rc'];}
                                                        ?>
                                                    </div>
                                                </div>
                                                <div class="value__section price">
                                                    <div class="name">стоимость</div>
                                                    <div class="value">
                                                        <!-- По запросу -->
                                                        <?=number_format($apartmentsData['tc'], 0, '.', ' ');?> р.
                                                    </div>
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