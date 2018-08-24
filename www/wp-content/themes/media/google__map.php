<?PHP
/**
 * Template Name: Google карта
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="address__page" id="address__page">
        <div class="absolute__frame dynamic__frame__resize">
            <img class="background__image" src="/assets/images/background/fas_01_View02.jpg" />
        </div>

        <!-- <div class="absolute__frame" id="image__map" style="background-image: url('/assets/img/Map_View_tags_gif_64_color.gif'); background-repeat: no-repeat; background-size: 100%;">

        </div> -->

        <div class="description__frame fade__container">
            <a href="javascript:;" class="close"></a>
            <div class="scroll__container">
                <?
                global $wpdb;
                $sql = $wpdb->get_results("SELECT * FROM `placement__page` WHERE `id`='1';");
                if(count($sql) != 0)
                {
                    foreach ($sql as $data) {
                        ?>
                        <div class="large__title"><?=$data->education__title;?></div>
                        <div class="content">
                            <? echo stripslashes(html_entity_decode($data->education__content, ENT_QUOTES | ENT_XML1, 'UTF-8')); ?>
                        </div>
                    <?
                    }
                }
                ?>
            </div>
        </div>

        <img src="/assets/img/Legend2_new.png" class="legend__frame" style="width:400px;">

        <img id='wheelzoom' class="absolute__frame " src='/assets/img/Map_View_tags_large_642233.gif' width='1920' height='1080' style='max-width: auto; cursor: move;'  alt='Daisy on the Ohoopee'>
        <!-- <div class="description__frame fade__container">
            <div class="scroll__container">
                <div class="large__title">Место и окружение</div>
                <div class="content">

                    «Эрмитаж» удачно расположен на одном из «уфимских холмов» и окружен зоной городских лесов. Уникальный вид из окон на зеленый пояс Зауфимья простирается до самого горизонта!
                    <br><br>
                    Район уфимского Горсовета любят за интеллигентную светскость и культурное наследие города. Сегодня он постоянно дополняется современной инфраструктурой: в двух шагах от «Эрмитажа» возводится плавательный комплекс «Атлантика», прокладывается ул. Рудольфа Нуреева, которая свяжет ул. Менделеева, проспект Салавата Юлаева, ул. Трамвайную и станет дублером ул. Российской и Комсомольской.
                    <br><br>
                    Несмотря на то, что в шаговой доступности расположено множество социально значимых учреждений, в зданиях «Эрмитажа» будут работать поликлиника, продуктовый супермаркет, отделения банков и почты, салон красоты, туристическое агентство, кафе и художественная галерея. Каждое торговое и сервисное предприятие, расположенное в ЖК «Эрмитаж», будет иметь отдельный вход, поэтому проходимость здесь будет минимальной.


                </div>
            </div>
        </div>

        <div id="address-map-loading" class="absolute__frame"></div>
        <div id="marker-tooltip" class="fadeInDown animated"></div> -->
    </div>

<?PHP
get_footer();
?>