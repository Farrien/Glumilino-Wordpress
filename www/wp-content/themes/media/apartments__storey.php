<?PHP
/**
 * Template Name: Апартаменты (Этаж)
 */
$section_id = get_query_var('section_id');

#Формируем запрос к базе данных квартир.
$file = file_get_contents("apartments.json");
$file = json_decode($file, true);
$floors = $file['floors'];

get_header();
?>

<?PHP
if($section_id == 1 || $section_id == 2 || $section_id == 3)
{
    ?>
    <div class="load_frame data__target absolute__frame" attr-targ="apartments__storey__page" id="apartments__storey__page" style="top: -40px;">
        <div class="absolute__frame dynamic__frame__resize scroll_frame switch__section">
            <div class="tooltip__info">
                <div class="storey">Этаж №<span>0</span></div>
                <div class="an"><span>0</span> <b>квартир</b></div>
            </div>

    <?
    if($section_id == 3){
        ?>
            <!-- Третья секция. -->
            <div class="load__frame korpus_frame load__section__<?=$section_id;?> section__3">
                <img class="background__image" src="/assets/images/apartments__storey/section__3__background.jpg" />
                <!-- <a href="/apartments/section/2" style="display:block;position: absolute; z-index:1;left: 17.5%; top: 40%;" class="fade__container p-ajax"><img src="/assets/images/apartments__storey/section__2__name.svg"></a>
                -->
                <a href="/apartments/" style="display:block;position: absolute; z-index:1;left: 17%; top: 40%;" class="fade__container p-ajax"><img src="/assets/images/apartments__page/jump__plan.svg"></a>

                <div class="plans_map_cont">
                    <img width="1920" height="1080" class="plans__map svg__section" src="/assets/images/blank.gif"/>
                    <map id="one" style="">
                        <? if(isset($floors['3-1-4']['at']) && $floors['3-1-4']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="4" apartment-id="<?=$floors['3-1-4']['at'];?>" fill="#006064" points="1105,888.4 828.7,888.4 828.7,917 1105,917 1105,902.5	"/><?}?>
                        <? if(isset($floors['3-1-5']['at']) && $floors['3-1-5']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="5" apartment-id="<?=$floors['3-1-5']['at'];?>" fill="#006064" points="1105,852 828.7,852 828.7,888.1 1105,888.1 1105,867.5	"/><?}?>
                        <? if(isset($floors['3-1-6']['at']) && $floors['3-1-6']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="6" apartment-id="<?=$floors['3-1-6']['at'];?>" fill="#006064" points="1105,815.5 828.7,815.5 828.7,851.7 1105,851.7 1105,832.5	"/><?}?>
                        <? if(isset($floors['3-1-7']['at']) && $floors['3-1-7']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="7" apartment-id="<?=$floors['3-1-7']['at'];?>" fill="#006064" points="1105,778.7 828.7,778.7 828.7,814.8 1105,814.8 1105,794	"/><?}?>
                        <? if(isset($floors['3-1-8']['at']) && $floors['3-1-8']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="8" apartment-id="<?=$floors['3-1-8']['at'];?>" fill="#006064" points="1105,741.8 828.7,741.8 828.7,777.9 1105,777.9 1105,761 	"/><?}?>
                        <? if(isset($floors['3-1-9']['at']) && $floors['3-1-9']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="9" apartment-id="<?=$floors['3-1-9']['at'];?>" fill="#006064" points="1105,708.9 828.7,708.9 828.7,741.1 1105,741.1 1105,722.5	"/><?}?>

                        <? if(isset($floors['3-1-10']['at']) && $floors['3-1-10']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="10" apartment-id="<?=$floors['3-1-10']['at'];?>" fill="#006064" points="1105,676 828.7,676 828.7,708.1 1105,708.1 1105,692.5	"/><?}?>
                        <? if(isset($floors['3-1-11']['at']) && $floors['3-1-11']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="11" apartment-id="<?=$floors['3-1-11']['at'];?>" fill="#006064" points="1105,643.9 828.7,643.9 828.7,676.1 1105,676.1 1105,661 "/><?}?>
                        <? if(isset($floors['3-1-12']['at']) && $floors['3-1-12']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="12" apartment-id="<?=$floors['3-1-12']['at'];?>" fill="#006064" points="1105,611 828.7,611 828.7,643.2 1105,643.2 1105,626.5 	"/><?}?>
                        <? if(isset($floors['3-1-13']['at']) && $floors['3-1-13']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="13" apartment-id="<?=$floors['3-1-13']['at'];?>" fill="#006064" points="1105,577.7 828.7,577.7 828.7,611.2 1105,611.2 1105,597 "/><?}?>

                        <? if(isset($floors['3-1-14']['at']) && $floors['3-1-14']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="14" apartment-id="<?=$floors['3-1-14']['at'];?>" fill="#006064" points="1105,545.2 828.7,545.2 828.7,577.4 1105,577.4 1105,561.5 "/><?}?>
                        <? if(isset($floors['3-1-15']['at']) && $floors['3-1-15']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="15" apartment-id="<?=$floors['3-1-15']['at'];?>" fill="#006064" points="1105,513.2 828.7,513.2 828.7,545.3 1105,545.3 1105,529.5 	"/><?}?>
                        <? if(isset($floors['3-1-16']['at']) && $floors['3-1-16']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="16" apartment-id="<?=$floors['3-1-16']['at'];?>" fill="#006064" points="1105,480.7 828.7,480.7 828.7,512.9 1105,512.9 1105,495.5	"/><?}?>
                        <? if(isset($floors['3-1-17']['at']) && $floors['3-1-17']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="17" apartment-id="<?=$floors['3-1-17']['at'];?>" fill="#006064" points="1105,448.2 828.7,448.2 828.7,480.4 1105,480.4 1105,465 	"/><?}?>
                        <? if(isset($floors['3-1-18']['at']) && $floors['3-1-18']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="18" apartment-id="<?=$floors['3-1-18']['at'];?>" fill="#006064" points="1105,414.4 828.7,414.4 828.7,447.9 1105,447.9 1105,433 	"/><?}?>
                        <? if(isset($floors['3-1-19']['at']) && $floors['3-1-19']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="19" apartment-id="<?=$floors['3-1-19']['at'];?>" fill="#006064" points="1105,380.6 828.7,380.6 828.7,414.1 1105,414.1 1105,398.5 "/><?}?>

                        <? if(isset($floors['3-1-20']['at']) && $floors['3-1-20']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="20" apartment-id="<?=$floors['3-1-20']['at'];?>" fill="#006064" points="1105,380.6 828.7,380.6 828.7,414.1 1105,414.1 1105,398.5 "/><?}?>
                        <? if(isset($floors['3-1-21']['at']) && $floors['3-1-21']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="21" apartment-id="<?=$floors['3-1-21']['at'];?>" fill="#006064" points="1105,346.8 828.7,346.8 828.7,380.3 1105,380.3 1105,363 "/><?}?>
                        <? if(isset($floors['3-1-22']['at']) && $floors['3-1-22']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="22" apartment-id="<?=$floors['3-1-22']['at'];?>" fill="#006064" points="1105,312.6 828.7,312.6 828.7,346.1 1105,346.1 1105,331  "/><?}?>
                        <? if(isset($floors['3-1-23']['at']) && $floors['3-1-23']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="23" apartment-id="<?=$floors['3-1-23']['at'];?>" fill="#006064" points="1105,279.3 828.7,279.3 828.7,312.7 1105,312.7 1105,294.5 "/><?}?>
                        <? if(isset($floors['3-1-24']['at']) && $floors['3-1-24']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="24" apartment-id="<?=$floors['3-1-24']['at'];?>" fill="#006064" points="1105,245.5 828.7,245.5 828.7,278.9 1105,278.9 1105,261.5 "/><?}?>
                        <? if(isset($floors['3-1-25']['at']) && $floors['3-1-25']['at'] != ''){ ?><polygon opacity="0.30" section="3" storey="25" apartment-id="<?=$floors['3-1-25']['at'];?>" fill="#006064" points="1105,211.2 828.7,211.2 828.7,244.7 1105,244.7 1105,226.5 "/><?}?>

                        <!-- <polygon opacity="0" section="2" storey="0" fill="#ffffff" points="569.7,170.1 507.7,92.1 191.7,94.1 194.7,973.1 509.7,971.1 569.7,931.1 "/> -->
                    </map>
                </div>
            </div>
    <?
    }
    ?>
    <?
    if($section_id == 2){
        ?>
            <div class="load__frame korpus_frame load__section__<?=$section_id;?> section__2">
                <img class="background__image" src="/assets/images/apartments__storey/section__2__background.jpg" />
                <!-- <a href="/apartments/section/1" style="display:block;position: absolute; z-index:1;left: 17%; top: 40%;" class="fade__container p-ajax"><img src="/assets/images/apartments__storey/section__1__name.svg"></a>
                <a href="/apartments/section/3" style="display:block;position: absolute; z-index:1;right: 17%; top: 40%;" class="fade__container p-ajax"><img src="/assets/images/apartments__storey/section__3__name.svg"></a>
                -->

                <a href="/apartments/" style="display:block;position: absolute; z-index:1;right: 16%; top: 40%;" class="fade__container p-ajax"><img src="/assets/images/apartments__page/jump__plan.svg"></a>
                <div class="plans_map_cont">
                    <img width="1920" height="1080" class="plans__map svg__section" src="/assets/images/blank.gif"/>
                    <map id="one" style="">



                        <? if(isset($floors['2-1-4']['at']) && $floors['2-1-4']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="4" apartment-id="<?=$floors['2-1-4']['at'];?>" fill="#006064" points="1100.4,892.8 824.4,892.8 824.4,919.2 1100.4,919.2 1100.4,908"/><?}?>
                        <? if(isset($floors['2-1-5']['at']) && $floors['2-1-5']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="5" apartment-id="<?=$floors['2-1-5']['at'];?>" fill="#006064" points="1100.4,859.8 824.4,859.8 824.4,892.4 1100.4,892.4 1100.4,879"/><?}?>
                        <? if(isset($floors['2-1-6']['at']) && $floors['2-1-6']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="6" apartment-id="<?=$floors['2-1-6']['at'];?>" fill="#006064" points="1100.4,827.2 824.4,827.2 824.4,859.8 1100.4,859.8 1100.4,844 	"/><?}?>
                        <? if(isset($floors['2-1-7']['at']) && $floors['2-1-7']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="7" apartment-id="<?=$floors['2-1-7']['at'];?>" fill="#006064" points="1100.6,793.7 824.4,793.7 824.4,826.3 1100.6,826.3 1100.6,813 	"/><?}?>
                        <? if(isset($floors['2-1-8']['at']) && $floors['2-1-8']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="8" apartment-id="<?=$floors['2-1-8']['at'];?>" fill="#006064" points="1100.6,760.9 824.4,760.9 824.4,793.5 1100.6,793.5 1100.6,779 	"/><?}?>
                        <? if(isset($floors['2-1-10']['at']) && $floors['2-1-10']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="9" apartment-id="<?=$floors['2-1-10']['at'];?>" fill="#006064" points="1100.6,728.3 824.4,728.3 824.4,760.9 1100.6,760.9 1100.6,744	"/><?}?>

                        <? if(isset($floors['2-1-9']['at']) && $floors['2-1-9']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="10" apartment-id="<?=$floors['2-1-9']['at'];?>" fill="#006064" points="1100.6,728.3 824.4,728.3 824.4,760.9 1100.6,760.9 1100.6,744 	"/><?}?>

                        <? if(isset($floors['2-1-11']['at']) && $floors['2-1-11']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="11" apartment-id="<?=$floors['2-1-11']['at'];?>" fill="#006064" points="1100.6,695.4 824.4,695.4 824.4,728 1100.6,728 1100.6,711.5	"/><?}?>
                        <? if(isset($floors['2-1-12']['at']) && $floors['2-1-12']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="12" apartment-id="<?=$floors['2-1-12']['at'];?>" fill="#006064" points="1100.6,660.8 824.4,660.8 824.4,695.4 1100.6,695.4 1100.6,678.5"/><?}?>
                        <? if(isset($floors['2-1-13']['at']) && $floors['2-1-13']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="13" apartment-id="<?=$floors['2-1-13']['at'];?>" fill="#006064" points="1100.6,627.1 824.4,627.1 824.4,660.8 1100.6,660.8 1100.6,642	"/><?}?>

                        <? if(isset($floors['2-1-14']['at']) && $floors['2-1-14']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="14" apartment-id="<?=$floors['2-1-14']['at'];?>" fill="#006064" points="1100.6,593 824.4,593 824.4,626.7 1100.6,626.7 1100.6,610.5 	"/><?}?>
                        <? if(isset($floors['2-1-15']['at']) && $floors['2-1-15']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="15" apartment-id="<?=$floors['2-1-15']['at'];?>" fill="#006064" points="1100.6,560.1 824.4,560.1 824.4,592.6 1100.6,592.6 1100.6,580	"/><?}?>
                        <? if(isset($floors['2-1-16']['at']) && $floors['2-1-16']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="16" apartment-id="<?=$floors['2-1-16']['at'];?>" fill="#006064" points="1100.6,527.2 824.4,527.2 824.4,559.7 1100.6,559.7 1100.6,547 	"/><?}?>
                        <? if(isset($floors['2-1-17']['at']) && $floors['2-1-17']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="17" apartment-id="<?=$floors['2-1-17']['at'];?>" fill="#006064" points="1100.6,494.6 824.4,494.6 824.4,527.1 1100.6,527.1 1100.6,510	"/><?}?>
                        <? if(isset($floors['2-1-18']['at']) && $floors['2-1-18']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="18" apartment-id="<?=$floors['2-1-18']['at'];?>" fill="#006064" points="1100.6,462.3 824.4,462.3 824.4,494.8 1100.6,494.8 1100.6,478.5	"/><?}?>
                        <? if(isset($floors['2-1-19']['at']) && $floors['2-1-19']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="19" apartment-id="<?=$floors['2-1-19']['at'];?>" fill="#006064" points="1100.6,429.7 824.4,429.7 824.4,462.3 1100.6,462.3 1100.6,449	"/><?}?>

                        <? if(isset($floors['2-1-20']['at']) && $floors['2-1-20']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="20" apartment-id="<?=$floors['2-1-20']['at'];?>" fill="#006064" points="1100.6,394.8 824.4,394.8 824.4,429.7 1100.6,429.7 1100.6,415 	"/><?}?>
                        <? if(isset($floors['2-1-21']['at']) && $floors['2-1-21']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="21" apartment-id="<?=$floors['2-1-21']['at'];?>" fill="#006064" points="1100.6,361.6 824.4,361.6 824.4,394.4 1100.6,394.4 1100.6,380	"/><?}?>
                        <? if(isset($floors['2-1-22']['at']) && $floors['2-1-22']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="22" apartment-id="<?=$floors['2-1-22']['at'];?>" fill="#006064" points="1100.6,327.8 824.4,327.8 824.4,361.5 1100.6,361.5 1100.6,344.5"/><?}?>
                        <? if(isset($floors['2-1-23']['at']) && $floors['2-1-23']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="23" apartment-id="<?=$floors['2-1-23']['at'];?>" fill="#006064" points="1100.6,294.4 824.4,294.4 824.4,328.1 1100.6,328.1 1100.6,311.5	"/><?}?>
                        <? if(isset($floors['2-1-24']['at']) && $floors['2-1-24']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="24" apartment-id="<?=$floors['2-1-24']['at'];?>" fill="#006064" points="1100.6,260.6 824.4,260.6 824.4,294.3 1100.6,294.3 1100.6,274 	"/><?}?>
                        <? if(isset($floors['2-1-25']['at']) && $floors['2-1-25']['at'] != ''){ ?><polygon opacity="0.30" section="2" storey="25" apartment-id="<?=$floors['2-1-25']['at'];?>" fill="#006064" points="1099.8,193.4 824.4,193.4 824.4,227 1099.8,227 1099.8,213.5"/><?}?>



                        <!-- <g id="Mask">
                            <polygon opacity="0" section="1" storey="0" fill="#006064" points="188.7,81.3 503.7,81.3 562.7,156.3 564.7,927.3 492.7,966.3 187.7,969.3 	"/>
                            <polygon opacity="0" section="3" storey="0" fill="#006064" points="1733.7,110.3 1421.7,110.3 1358.7,184.3 1359.7,930.3 1421.7,969.3 1734.7,968.3"/>
                        </g> -->
                    </map>
                </div>
            </div>
    <?
    }
    ?>

            <?
            if($section_id == 1){
            ?>
            <div class="load__frame korpus_frame load__section__<?=$section_id;?> section__1">
                <img class="background__image" src="/assets/images/apartments__storey/section__1__background.jpg" />
                <!-- <a href="/apartments/section/2" style="display:block;position: absolute; z-index:1;right: 17.5%; top: 40%;" class="fade__container p-ajax"><img src="/assets/images/apartments__storey/section__2__name.svg"></a>
                -->
                <a href="/apartments/" style="display:block;position: absolute; z-index:1;right: 17%; top: 40%;" class="fade__container p-ajax"><img src="/assets/images/apartments__page/jump__plan.svg"></a>

                <div class="plans_map_cont">
                    <img width="1920" height="1080" class="plans__map svg__section" src="/assets/images/blank.gif"/>
                    <map id="one" style="">

                        <? if(isset($floors['1-1-4']['at']) && $floors['1-1-4']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="4" apartment-id="<?=$floors['1-1-4']['at'];?>" fill="#006064" points="1092,892.3 815.4,892.3 815.4,919 1092,919 1092,910.7	"/><?}?>
                        <? if(isset($floors['1-1-5']['at']) && $floors['1-1-5']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="5" apartment-id="<?=$floors['1-1-5']['at'];?>" fill="#006064" points="1092,858.9 815.4,858.9 815.4,891.9 1092,891.9 1092,870	"/><?}?>
                        <? if(isset($floors['1-1-6']['at']) && $floors['1-1-6']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="6" apartment-id="<?=$floors['1-1-6']['at'];?>" fill="#006064" points="1092,826 815.4,826 815.4,858.9 1092,858.9 1092,844	"/><?}?>
                        <? if(isset($floors['1-1-7']['at']) && $floors['1-1-7']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="7" apartment-id="<?=$floors['1-1-7']['at'];?>" fill="#006064" points="1092.2,792.1 815.4,792.1 815.4,825.1 1092.2,825.1 1092.2,810 "/><?}?>
                        <? if(isset($floors['1-1-8']['at']) && $floors['1-1-8']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="8" apartment-id="<?=$floors['1-1-8']['at'];?>" fill="#006064" points="1092.2,758.9 815.4,758.9 815.4,791.9 1092.2,791.9 1092.2,772.7 	"/><?}?>
                        <? if(isset($floors['1-1-9']['at']) && $floors['1-1-9']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="9" apartment-id="<?=$floors['1-1-9']['at'];?>" fill="#006064" points="1092.2,726 815.4,726 815.4,758.9 1092.2,758.9 1092.2,742  "/><?}?>

                        <? if(isset($floors['1-1-10']['at']) && $floors['1-1-10']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="10" apartment-id="<?=$floors['1-1-10']['at'];?>" fill="#006064" points="1092.2,692.7 815.4,692.7 815.4,725.7 1092.2,725.7 1092.2,710"/><?}?>
                        <? if(isset($floors['1-1-11']['at']) && $floors['1-1-11']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="11" apartment-id="<?=$floors['1-1-11']['at'];?>" fill="#006064" points="1092.2,657.8 815.4,657.8 815.4,692.7 1092.2,692.7 1092.2,677.3  	"/><?}?>
                        <? if(isset($floors['1-1-12']['at']) && $floors['1-1-12']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="12" apartment-id="<?=$floors['1-1-12']['at'];?>" fill="#006064" points="1092.2,623.6 815.4,623.6 815.4,657.7 1092.2,657.7 1092.2,642.7 	"/><?}?>
                        <? if(isset($floors['1-1-13']['at']) && $floors['1-1-13']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="13" apartment-id="<?=$floors['1-1-13']['at'];?>" fill="#006064" points="1092.2,589.2 815.4,589.2 815.4,623.3 1092.2,623.3 1092.2,604.7"/><?}?>

                        <? if(isset($floors['1-1-14']['at']) && $floors['1-1-14']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="14" apartment-id="<?=$floors['1-1-14']['at'];?>" fill="#006064" points="1092.2,555.9 815.4,555.9 815.4,588.8 1092.2,588.8 1092.2,573.3	"/><?}?>
                        <? if(isset($floors['1-1-15']['at']) && $floors['1-1-15']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="15" apartment-id="<?=$floors['1-1-15']['at'];?>" fill="#006064" points="1092.2,522.7 815.4,522.7 815.4,555.6 1092.2,555.6 1092.2,541.3  "/><?}?>
                        <? if(isset($floors['1-1-16']['at']) && $floors['1-1-16']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="16" apartment-id="<?=$floors['1-1-16']['at'];?>" fill="#006064" points="1092.2,489.7 815.4,489.7 815.4,522.6 1092.2,522.6 1092.2,507.3"/><?}?>
                        <? if(isset($floors['1-1-17']['at']) && $floors['1-1-17']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="17" apartment-id="<?=$floors['1-1-17']['at'];?>" fill="#006064" points="1092.2,457.1 815.4,457.1 815.4,490 1092.2,490 1092.2,473.3 	"/><?}?>
                        <? if(isset($floors['1-1-18']['at']) && $floors['1-1-18']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="18" apartment-id="<?=$floors['1-1-18']['at'];?>" fill="#006064" points="1092.2,424.1 815.4,424.1 815.4,457 1092.2,457 1092.2,442"/><?}?>
                        <? if(isset($floors['1-1-19']['at']) && $floors['1-1-19']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="19" apartment-id="<?=$floors['1-1-19']['at'];?>" fill="#006064" points="1092.2,388.8 815.4,388.8 815.4,424.1 1092.2,424.1 1092.2,403.3"/><?}?>

                        <? if(isset($floors['1-1-20']['at']) && $floors['1-1-20']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="20" apartment-id="<?=$floors['1-1-20']['at'];?>" fill="#006064" points="1092.2,355.3 815.4,355.3 815.4,388.4 1092.2,388.4 1092.2,372 	"/><?}?>
                        <? if(isset($floors['1-1-21']['at']) && $floors['1-1-21']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="21" apartment-id="<?=$floors['1-1-21']['at'];?>" fill="#006064" points="1092.2,321.1 815.4,321.1 815.4,355.2 1092.2,355.2 1092.2,338  "/><?}?>
                        <? if(isset($floors['1-1-22']['at']) && $floors['1-1-22']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="22" apartment-id="<?=$floors['1-1-22']['at'];?>" fill="#006064" points="1092.2,283.9 815.4,283.9 815.4,321.3 1092.2,321.3 1092.2,298.7"/><?}?>
                        <? if(isset($floors['1-1-23']['at']) && $floors['1-1-23']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="23" apartment-id="<?=$floors['1-1-23']['at'];?>" fill="#006064" points="1092.2,246.4 815.4,246.4 815.4,283.8 1092.2,283.8 1092.2,266 	"/><?}?>
                        <? if(isset($floors['1-1-24']['at']) && $floors['1-1-24']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="24" apartment-id="<?=$floors['1-1-24']['at'];?>" fill="#006064" points="1092.2,210.6 815.4,210.6 815.4,246.3 1092.2,246.3 1092.2,230 "/><?}?>
                        <? if(isset($floors['1-1-25']['at']) && $floors['1-1-25']['at'] != ''){ ?><polygon opacity="0.30" section="1" storey="25" apartment-id="<?=$floors['1-1-25']['at'];?>" fill="#006064" points="1092.2,175.3 815.4,175.3 815.4,210.9 1092.2,210.9 1092.2,194 "/><?}?>



                        <!-- <polygon opacity="0" section="2" storey="0" fill="#ffffff" points="1351.7,169.1 1415.7,93.1 1728.7,94.1 1724.7,97.1 1728.7,971.1 1412.7,972.1 1351.7,931.1 "/>
                        -->
                    </map>
                </div>
            </div>
            <?
            }
            ?>

        </div>
    </div>
    <?
}

if($section_id == 5)
{
    ?>
    <div class="load_frame data__target absolute__frame" attr-targ="apartments__storey__page__other" id="apartments__storey__page">
        <div class="absolute__frame dynamic__frame__resize scroll_frame switch__section">

            <div class="tooltip__info">
                <div class="storey">Этаж №<span>0</span></div>
                <div class="an"><span>0</span> <b>квартир</b></div>
            </div>

            <div class="load__frame korpus_frame">
                <img class="background__image" src="/assets/images/apartments__storey/section__other.jpg" />
                <a href="/apartments/" c style="position: absolute; display: block;z-index:1;left: 34%; top: 15%;" class="fade__container p-ajax"><img src="/assets/images/apartments__page/jump__plan.svg"></a>

                <div class="plans_map_cont">
                    <img width="1920" height="1080" class="plans__map plans__map__other" src="/assets/images/blank.gif"/>
                    <map id="one" style="">

                        <?PHP
                        #Формируем запрос к базе данных квартир.
                        $file__section5 = file_get_contents("apartments4_5.json");
                        $file__section5 = json_decode($file__section5, true);
                        $floors__section5 = $file__section5['floors'];

                        #echo '<pre>';
                        #print_r($floors__section5);
                        #echo '</pre>';
                        ?>

                        <g id="Layer_2">
    <!-- <? if(isset($floors__section5['2-1-14']['at']) && $floors__section5['2-1-14']['at'] != ''){ ?>   <polygon opacity="0.3" section="5" storey="14" apartment-id="<?=$floors__section5['2-1-14']['at'];?>" fill="#006064" points="922.4,384.3 967.1,357.4 967.1,346.8 1028.7,307.4 1037.7,312.1 1077.4,286.4
		1077.4,274.8 1155.4,224.4 1165.1,230.1 1215.7,197.4 1215.7,188.1 1275.1,148.1 1337.1,196.8 1426.4,145.4 1534.1,247.2
		1534.1,179 1427.1,62.8 1339.1,118.1 1336.4,118.1 1291.1,76.8 1292.4,56.8 1275.1,42.8 1217.1,84.8 1217.1,116.8 1171.1,149.6
		1171.1,142.8 1155.7,130.1 1076.4,187.4 1077.1,215.4 1045.1,237.4 1045.1,232.1 1027.7,223.4 965.7,268.1 967.1,296.8
		922.4,326.9 	"/><?}?> -->
    <? if(isset($floors__section5['2-1-11']['at']) && $floors__section5['2-1-11']['at'] != ''){ ?>             <polygon opacity="0.3" section="5" storey="11" apartment-id="<?=$floors__section5['2-1-11']['at'];?>" fill="#006064" points="1426.4,274.4 1336.7,316.1 1285.4,283.1 1275.7,276.1 1217.4,307.1 1217.4,319.4
		1164.7,346.8 1155.4,341.4 1077.4,382.8 1078.1,393.4 1038.1,413.4 1028.7,409.1 968.1,441.4 968.1,451.4 922.4,474.8 922.4,516.4
		967.7,495.4 967.1,487.4 1027.7,457.8 1037.7,461.8 1077.1,444.1 1076.7,433.4 1155.4,395.4 1164.7,400.4 1216.7,375.4
		1216.4,365.1 1275.7,337.8 1336.7,375.8 1426.1,336.8 1534.1,416.1 1534.1,395.4 1534.1,362.2 	"/><?}?>
        <? if(isset($floors__section5['2-1-10']['at']) && $floors__section5['2-1-10']['at'] != ''){ ?>      <polygon opacity="0.3" section="5" storey="10" apartment-id="<?=$floors__section5['2-1-10']['at'];?>" fill="#006064" points="1534.1,416.1 1426.1,336.8 1336.7,375.8 1275.7,337.8 1216.4,365.1 1216.7,375.4
		1164.7,400.4 1155.4,395.4 1076.7,433.4 1077.1,444.1 1037.7,461.8 1027.7,457.8 967.1,487.4 967.7,495.4 922.4,516.4 922.4,559.2
		967.4,540.8 967.1,533.8 1028.7,506.8 1038.4,510.8 1077.4,494.4 1077.1,485.4 1155.1,451.1 1165.1,456.8 1217.4,434.4
		1216.7,423.8 1275.7,398.1 1284.7,404.1 1336.7,433.8 1426.4,399.1 1534.1,470.8 1534.1,442 	"/><?}?>

            <? if(isset($floors__section5['2-1-8']['at']) && $floors__section5['2-1-8']['at'] != ''){ ?>   <polygon opacity="0.3" section="5" storey="8" apartment-id="<?=$floors__section5['2-1-8']['at'];?>" fill="#006064" points="1336.2,489.9 1275.7,458.9 1217.2,481.9 1217.2,490.9 1164.7,511.4 1155.2,506.4
		1077.7,536.9 1077.7,545.4 1038.7,560.4 1028.7,555.4 966.7,579.4 966.7,586.9 922.4,603.6 922.4,644.1 967.2,628.4 967.2,624.4
		1026.7,604.9 1038.2,608.9 1077.2,595.4 1077.2,587.4 1154.7,561.4 1164.2,565.9 1217.2,546.4 1217.2,539.9 1275.2,520.9
		1285.7,526.4 1336.2,548.4 1426.2,520.4 1534.1,576.6 1534.1,555 1534.1,522.1 1425.7,458.9 	"/><?}?>
                <? if(isset($floors__section5['2-1-7']['at']) && $floors__section5['2-1-7']['at'] != ''){ ?>  <polygon opacity="0.3" section="5" storey="7" apartment-id="<?=$floors__section5['2-1-7']['at'];?>" fill="#006064" points="1336.2,548.4 1285.7,526.4 1275.2,520.9 1217.2,539.9 1217.2,546.4 1164.2,565.9
		1154.7,561.4 1077.2,587.4 1077.2,595.4 1038.2,608.9 1026.7,604.9 967.2,624.4 967.2,628.4 922.4,644.1 922.4,689.5 967.2,676.9
		966.7,671.4 1029.7,653.4 1038.2,655.4 1076.7,644.9 1075.2,639.4 1153.7,616.4 1165.2,620.4 1216.2,606.4 1216.2,598.9
		1275.2,581.9 1337.2,605.9 1425.7,581.9 1534.1,630.6 1534.1,609 1534.1,576.6 1426.2,520.4 	"/><?}?>
                    <? if(isset($floors__section5['2-1-6']['at']) && $floors__section5['2-1-6']['at'] != ''){ ?>    <polygon opacity="0.3" section="5" storey="6" apartment-id="<?=$floors__section5['2-1-6']['at'];?>" fill="#006064" points="1425.7,581.9 1337.2,605.9 1275.2,581.9 1216.2,598.9 1216.2,606.4 1165.2,620.4
		1153.7,616.4 1075.2,639.4 1076.7,644.9 1038.2,655.4 1029.7,653.4 966.7,671.4 967.2,676.9 922.4,689.5 922.4,733.6 967.7,722.8
		967.7,716.4 1028.4,702.4 1038.7,705.4 1077.1,696.4 1077.1,690.8 1155.7,672.1 1165.4,676.1 1216.4,663.8 1216.4,657.4
		1275.1,643.4 1336.7,662.8 1426.1,644.4 1534.1,684.4 1534.1,663.5 1534.1,630.6 	"/><?}?>
                        <? if(isset($floors__section5['2-1-5']['at']) && $floors__section5['2-1-5']['at'] != ''){ ?>  <polygon opacity="0.3" section="5" storey="5" apartment-id="<?=$floors__section5['2-1-5']['at'];?>" fill="#006064" points="1426.1,644.4 1336.7,662.8 1275.1,643.4 1216.4,657.4 1216.4,663.8 1165.4,676.1
		1155.7,672.1 1077.1,690.8 1077.1,696.4 1038.7,705.4 1028.4,702.4 967.7,716.4 967.7,722.8 922.4,733.6 922.4,774.8 967.1,766.1
		966.7,762.4 1028,751.2 1039.2,753.2 1076.7,746.2 1076.7,742.2 1155.5,727.4 1166,729.9 1216.5,719.7 1216.5,715.7 1275.2,704.7
		1336.2,720.7 1425.7,705.4 1534.1,736.1 1534.1,716 1534.1,684.4 	"/><?}?>
                            <? if(isset($floors__section5['2-1-4']['at']) && $floors__section5['2-1-4']['at'] != ''){ ?>    <polygon opacity="0.3" section="5" storey="4" apartment-id="<?=$floors__section5['2-1-4']['at'];?>" fill="#006064" points="1534.1,736.1 1534.1,768.5 1534.1,788 1426.7,765.8 1337.1,776.8 1285.4,768.1
		1275.7,765.8 1216.7,773.8 1216.1,776.8 1165.4,784.1 1155.1,782.4 1077.1,792.4 1077.1,796.4 1038.4,801.8 1028.7,800.8
		967.1,808.4 967.7,812.1 922.4,818.8 922.4,774.8 967.1,766.1 966.7,762.4 1028,751.2 1039.2,753.2 1076.7,746.2 1076.7,742.2
		1155.5,727.4 1166,729.9 1216.5,719.7 1216.5,715.7 1275.2,704.7 1336.2,720.7 1425.7,705.4 	"/><?}?>
                                <? if(isset($floors__section5['2-1-3']['at']) && $floors__section5['2-1-3']['at'] != ''){ ?>     <polygon opacity="0.3" section="5" storey="3" apartment-id="<?=$floors__section5['2-1-3']['at'];?>" fill="#006064" points="1534.1,788 1534.1,818.8 1534.1,840.1 1426.4,826.1 1336.1,832.8 1285.5,827.8
		1285.5,827.8 1285.1,827.8 1275.1,827.4 1215.4,832.1 1216.1,835.4 1165.1,838.8 1154.4,837.8 1076.7,844.1 1077.1,847.1
		1038.7,850.1 1027.7,849.4 966.1,854.4 966.4,855.8 922.4,859.8 922.4,818.8 967.7,812.1 967.1,808.4 1028.7,800.8 1038.4,801.8
		1077.1,796.4 1077.1,792.4 1155.1,782.4 1165.4,784.1 1216.1,776.8 1216.7,773.8 1275.7,765.8 1285.4,768.1 1337.1,776.8
		1426.7,765.8 	"/><?}?>
                                    <? if(isset($floors__section5['2-1-2']['at']) && $floors__section5['2-1-2']['at'] != ''){ ?>  <polygon opacity="0.3" section="5" storey="2" apartment-id="<?=$floors__section5['2-1-2']['at'];?>" fill="#006064" points="1534.1,840.1 1534.1,871.5 1534.1,883.3 1426.2,876 1347.9,869.3 1311.9,871.3
		922.4,891.4 922.4,859.8 966.4,855.8 966.1,854.4 1027.7,849.4 1038.7,850.1 1077.1,847.1 1076.7,844.1 1154.4,837.8 1165.1,838.8
		1216.1,835.4 1215.4,832.1 1275.1,827.4 1285.5,827.8 1285.5,827.8 1336.1,832.8 1426.4,826.1 	"/><?}?>
                        </g>

                        <g id="Слой_4">
                                        <? if(isset($floors__section5['2-1-12']['at']) && $floors__section5['2-1-12']['at'] != ''){ ?>      <polygon opacity="0.3"  section="5" storey="12" apartment-id="<?=$floors__section5['2-1-12']['at'];?>" fill="#006064" points="1426.2,213.7 1336.2,260.9 1275.2,214.9 1216.5,249.9 1216.5,262.2 1165,292.2
		1155,285.9 1077.7,331.2 1077.7,341.7 1038.2,365.2 1028.2,360.4 967.7,395.4 967.7,405.9 922.4,430.1 922.4,474.8 968.1,451.4
		968.1,441.4 1028.7,409.1 1038.1,413.4 1078.1,393.4 1077.4,382.8 1155.4,341.4 1164.7,346.8 1217.4,319.4 1217.4,307.1
		1275.7,276.1 1285.4,283.1 1336.7,316.1 1426.4,274.4 1534.1,362.2 1534.1,310.1 	"/><?}?>
                                            <? if(isset($floors__section5['2-1-9']['at']) && $floors__section5['2-1-9']['at'] != ''){ ?>     <polygon opacity="0.3" section="5" storey="9" apartment-id="<?=$floors__section5['2-1-9']['at'];?>" fill="#006064" points="1426.4,399.1 1336.7,433.8 1284.7,404.1 1275.7,398.1 1216.7,423.8 1217.4,434.4
		1165.1,456.8 1155.1,451.1 1077.1,485.4 1077.4,494.4 1038.4,510.8 1028.7,506.8 967.1,533.8 967.4,540.8 922.4,559.2 922.4,603.6
		966.7,586.9 966.7,579.4 1028.7,555.4 1038.7,560.4 1077.7,545.4 1077.7,536.9 1155.2,506.4 1164.7,511.4 1217.2,490.9
		1217.2,481.9 1275.7,458.9 1336.2,489.9 1425.7,458.9 1534.1,522.1 1534.1,503 1534.1,470.8 	"/><?}?>
                        </g>
                        <g id="Слой_5">
                                                <? if(isset($floors__section5['2-1-13']['at']) && $floors__section5['2-1-13']['at'] != ''){ ?>   <polygon opacity="0.3"  section="5" storey="13" apartment-id="<?=$floors__section5['2-1-13']['at'];?>" fill="#006064" points="1426.4,145.4 1337.1,196.8 1275.1,148.1 1215.7,188.1 1215.7,197.4 1165.1,230.1
		1155.4,224.4 1077.4,274.8 1077.4,286.4 1037.7,312.1 1028.7,307.4 967.1,346.8 967.1,357.4 922.4,384.3 922.4,430.1 967.7,405.9
		967.7,395.4 1028.2,360.4 1038.2,365.2 1077.7,341.7 1077.7,331.2 1155,285.9 1165,292.2 1216.5,262.2 1216.5,249.9 1275.2,214.9
		1336.2,260.9 1426.2,213.7 1534.1,310.1 1534.1,247.2 	"/><?}?>
                        </g>


                            <!-- <polygon opacity="0" section="4" storey="0" fill="#ffffff" points="732.1,896.8 732.1,534.9 913.4,428.5 913.4,896.8"/> -->


                    </map>
                </div>
            </div>
        </div>

    </div>
<?
}
?>






<?
if($section_id == 4)
{
    ?>
    <div class="load_frame data__target absolute__frame" attr-targ="apartments__storey__page__other" id="apartments__storey__page">
        <div class="absolute__frame dynamic__frame__resize scroll_frame switch__section">

            <div class="tooltip__info">
                <div class="storey">Этаж №<span>0</span></div>
                <div class="an"><span>0</span> <b>квартир</b></div>
            </div>

            <div class="load__frame korpus_frame">
                <img class="background__image" src="/assets/images/apartments__storey/section__4__background.jpg" />
                <a href="/apartments/" c style="position: absolute; display: block;z-index:1;left: 64%; top: 20%;" class="fade__container p-ajax"><img src="/assets/images/apartments__page/jump__plan.svg"></a>

                <div class="plans_map_cont">
                    <img width="1920" height="1080" class="plans__map plans__map__other" src="/assets/images/blank.gif"/>
                    <map id="one" style="">

                        <?PHP
                        #Формируем запрос к базе данных квартир.
                        $file__section4 = file_get_contents("apartments4_5.json");
                        $file__section4 = json_decode($file__section4, true);
                        $floors__section4 = $file__section4['floors'];

                        #echo '<pre>';
                        #print_r($floors__section4);
                        #echo '</pre>';
                        ?>

                        <g id="Слой_4">
    <? if(isset($floors__section4['1-1-12']['at']) && $floors__section4['1-1-12']['at'] != ''){ ?>       <polygon opacity="0.26" fill="#006064" section="4" storey="12" apartment-id="<?=$floors__section4['1-1-12']['at'];?>" points="438.8,214.8 533,148.3 564.5,164.7 661.2,100 762,164.5 762,152.3 780.8,141.8
		860,194.2 860,228.5 890,247.7 890,236.3 907.8,227 970.8,269.5 970.8,301 1013.5,328 1013.5,390 969.8,364.4 969.8,355.7
		906.9,318.5 896.3,322.7 858.4,299.5 858.4,290.3 780.5,244.2 769.1,250.1 661.3,188.3 564.5,244.8 532.8,231.8 438.8,289.8 	"/><?}?>
                        </g>
                        <g id="Слой_5">
    <? if(isset($floors__section4['1-1-11']['at']) && $floors__section4['1-1-11']['at'] != ''){ ?>  <polygon opacity="0.26" fill="#006064" section="4" storey="11" apartment-id="<?=$floors__section4['1-1-11']['at'];?>" points="1013.5,390 1013.5,437.2 968.7,414 968.7,405 907.5,371.5 896.2,376.5 858.6,357
		858.6,347.6 780.7,305.4 768.9,310.6 662,254.3 564,306 533.3,293.3 438.8,347 438.8,289.8 532.8,231.8 564.5,244.8 661.3,188.3
		769.1,250.1 780.5,244.2 858.4,290.3 858.4,299.5 896.3,322.7 906.9,318.5 969.8,355.7 969.8,364.4 	"/><?}?>
                        </g>
                        <g id="Слой_7">
    <? if(isset($floors__section4['1-1-10']['at']) && $floors__section4['1-1-10']['at'] != ''){ ?>  <polygon opacity="0.26" section="4" storey="10" apartment-id="<?=$floors__section4['1-1-10']['at'];?>" fill="#006064" points="438.8,402.6 438.8,347 533.3,293.3 564,306 662,254.3 768.9,310.6 780.7,305.4
		858.6,347.1 858.6,357 896.2,376.5 907.5,371.5 968.7,405 968.7,414 1013.5,437.2 1013.5,487.6 968.7,465.8 968.7,456.4
		907.5,427.2 896.2,432.1 858.6,414.6 858.6,403.6 780.7,366.3 768.9,372.8 662,323.1 564,368.9 533.3,354.7 	"/><?}?>
                        </g>
                        <g id="Слой_8">
    <? if(isset($floors__section4['1-1-9']['at']) && $floors__section4['1-1-9']['at'] != ''){ ?> <polygon opacity="0.26" section="4" storey="9" apartment-id="<?=$floors__section4['1-1-9']['at'];?>" fill="#006064" points="438.8,402.6 533.3,354.7 564,368.9 662,323.1 768.9,372.8 780.7,366.3 858.6,403.6
		858.6,414.6 896.2,432.1 907.5,427.2 968.7,456.4 968.7,465.8 1013.5,487.6 1013.5,533 968.7,514.5 968.7,507 907.5,480.7
		896.2,484.6 858.6,469 858.6,460.9 780.7,427.6 768.9,432 661.7,387.7 564,428.5 533.3,417.3 438.8,461.3 	"/><?}?>
                        </g>
                        <g id="Слой_9">
    <? if(isset($floors__section4['1-1-8']['at']) && $floors__section4['1-1-8']['at'] != ''){ ?> <polygon opacity="0.26" section="4" storey="8" apartment-id="<?=$floors__section4['1-1-8']['at'];?>" fill="#006064" points="438.8,461.3 533.3,417.3 564,428.5 661.7,387.7 768.9,432 780.7,427.6 858.6,460.9
		858.6,469 896.2,484.6 907.5,480.7 968.7,507 968.7,514.5 1013.5,533 1013.5,579.8 968.7,563.6 968.7,556.8 907.5,534.7
		896.2,537.4 858.6,523.8 858.6,516.6 780.7,488.5 768.9,491.4 661.8,452.8 564,489.6 533.5,480.5 438.8,519.3 	"/><?}?>
                        </g>
                        <g id="Слой_10">
    <? if(isset($floors__section4['1-1-7']['at']) && $floors__section4['1-1-7']['at'] != ''){ ?> <polygon opacity="0.26" section="4" storey="7" apartment-id="<?=$floors__section4['1-1-7']['at'];?>" fill="#006064" points="438.8,519.3 533.5,480.5 564,489.6 661.8,452.8 768.9,491.4 780.7,488.5
		858.6,516.6 858.6,523.8 896.2,537.4 907.5,534.7 968.7,556.8 968.7,563.6 1013.5,579.8 1013.5,626.8 968.7,613.3 968.7,607.3
		907.5,588.8 896.2,591.4 858.6,580.1 858.6,573.1 780.7,549.6 768.9,553.1 662.3,521 564,551.5 533.5,543.4 438.8,576.3 	"/><?}?>
                        </g>
                        <g id="Слой_11">
    <? if(isset($floors__section4['1-1-6']['at']) && $floors__section4['1-1-6']['at'] != ''){ ?><polygon opacity="0.26" section="4" storey="6" apartment-id="<?=$floors__section4['1-1-6']['at'];?>" fill="#006064" points="438.8,576.3 533.5,543.4 564,551.5 662.3,521 768.9,553.1 780.7,549.6 858.6,573.1
		858.6,580.1 896.2,591.4 907.5,588.8 968.7,607.3 968.7,613.3 1013.5,626.8 1013.5,675.3 968.7,664.4 968.7,659.4 907.5,644.4
		896.3,646.7 858.6,637.4 858.6,631.4 780.7,612.4 768.9,615.5 662,588.3 564,612.3 533.5,606 438.8,631.7 	"/><?}?>
                        </g>
                        <g id="Слой_12">
    <? if(isset($floors__section4['1-1-5']['at']) && $floors__section4['1-1-5']['at'] != ''){ ?> <polygon opacity="0.26" section="4" storey="5" apartment-id="<?=$floors__section4['1-1-5']['at'];?>" fill="#006064" points="438.8,631.7 533.5,606 564,612.3 662,588.3 768.9,615.5 780.7,612.4 858.6,631.4
		858.6,637.4 896.3,646.7 907.5,644.4 968.7,659.4 968.7,664.4 1013.5,675.3 1013.5,723.3 968.7,714.5 968.7,710.5 907.5,698.4
		896.2,700.1 858.6,692.7 858.6,688.7 780.7,673.3 768.9,674.9 662,653.8 564,671.3 533.5,666.3 438.8,688.3 	"/><?}?>
                        </g>
                        <g id="Слой_13">
    <? if(isset($floors__section4['1-1-4']['at']) && $floors__section4['1-1-4']['at'] != ''){ ?> <polygon opacity="0.26" section="4" storey="4" apartment-id="<?=$floors__section4['1-1-4']['at'];?>" fill="#006064" points="438.8,688.3 533.5,666.3 564,671.3 662,653.8 768.9,674.9 780.7,673.3 858.6,688.7
		858.6,692.7 896.2,700.1 907.5,698.4 968.7,710.5 968.7,714.5 1013.5,723.3 1013.5,769 968.7,762.9 968.7,760.9 907.5,752.5
		896.2,753 858.6,747.8 858.6,744.8 780.7,734.2 768.9,735.6 662,721 564,733.8 533.5,731.5 438.8,745.8 	"/><?}?>
                        </g>
                        <g id="Слой_14">
    <? if(isset($floors__section4['1-1-3']['at']) && $floors__section4['1-1-3']['at'] != ''){ ?><polygon opacity="0.26" section="4" storey="3" apartment-id="<?=$floors__section4['1-1-3']['at'];?>" fill="#006064" points="438.8,745.8 533.5,731.5 564,733.8 662,721 768.9,735.6 780.7,734.2 858.6,744.8
		858.6,747.8 896.2,753 907.5,752.5 968.7,760.9 968.7,762.9 1013.5,769 1013.5,815.8 968.7,812 968.7,810 907.5,805.8 896.2,805.9
		858.6,802.7 858.6,800.9 780.7,795.1 768.9,795.1 662,787 564,794.7 533.5,792.3 438.8,799.7 	"/><?}?>
                        </g>
                        <g id="Слой_15">
    <? if(isset($floors__section4['1-1-2']['at']) && $floors__section4['1-1-2']['at'] != ''){ ?><polygon opacity="0.26"  section="4" storey="2" apartment-id="<?=$floors__section4['1-1-2']['at'];?>" fill="#006064" points="438.8,799.7 533.5,792.3 564,796 662,787 768.9,795.1 780.7,795.1 858.6,800.9
		858.6,802.7 896.2,805.9 907.5,805.8 968.7,810 968.7,812 1013.5,815.8 1013.5,858.7 662,850 564,853 533.5,852.3 438.8,856 	"/><?}?>
                        </g>


                    </map>
                </div>
            </div>
        </div>

    </div>
<?
}
?>

<?PHP get_footer();?>