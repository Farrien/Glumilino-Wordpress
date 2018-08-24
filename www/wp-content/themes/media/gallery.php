<?PHP
/**
 * Template Name: Галерея
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="gallery__page" id="gallery__page">
        <div class="absolute__frame dynamic__frame__resize">
            <img class="background__image" src="/assets/images/blank.gif" />
        </div>

        <?
        global $wpdb;
        $sql = $wpdb->get_results("SELECT * FROM `gallery__page` ORDER BY `id` ASC;");
        if(count($sql) != 0){
            $slide__array = array();
            foreach($sql as $data) {
                $slide__array[] = '{"src":"'.$data->image.'","title":""}';
            }
        }
        ?>

        <div id="images__slide__array" style="display: none;">[<?=join(',', $slide__array);?>]</div>

        <img class="div_100 wait-load" src="/assets/images/blank.gif" title="">
        <div class="gallery_place">
            <div class="right-shadow"></div>
            <div class="g_s_area div_100">
            </div>
        </div>


        <!-- <div id="gallery__aaa"></div> -->

        <!-- <a href="javascript:;" class="arrow left"></a>
        <a href="javascript:;" class="arrow right"></a>


        <div id="bx-wrapper" class="bx-wrapper">
            <div class="bx-loading">
                <span> <img src="/assets/images/preloader.svg"></span>
            </div>
            <div class="bx-thumbs">
                <a href="#" class="bx-thumbs-current" style="background-image:url(/assets/images/gallery/Cam031_View41.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/12_View04.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/12_View08.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/12_View11.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/12_View16.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/12_View19.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/Cam04_CShading_Beauty_View28.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/Cam04_CShading_Beauty_View150000.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/Cam04_CShading_Beauty_View270002.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/Cam031_View40.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/12_CShading_Beauty_View06.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/12_View07.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/12_View190.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/Cam04_CShading_Beauty_View290001.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/12_CShading_Beauty_View17.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/12_View18.jpg)"></a>
                <br><br> <br><br><br>
                <a href="#" style="background-image:url(/assets/images/gallery/small/12_View110002_small.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/small/12_View100002_small.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/small/12_View190_small.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/mop/01.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/mop/02.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/mop/03.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/mop/04.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/mop/05.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/mop/06.jpg)"></a>

                <a href="#" style="background-image:url(/assets/images/gallery/new/12_View1901_sml.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/12_View280020_sml.jpg)"></a>
                <a href="#" style="background-image:url(/assets/images/gallery/new/Cam014_CShading_Beauty_View420001_sml.jpg)"></a>
            </div>
            <div class="bx-container">

                <img src="/assets/images/gallery/Cam031_View41.jpg"/>
                <img src="/assets/images/gallery/new/12_View04.jpg"/>
                <img src="/assets/images/gallery/new/12_View08.jpg"/>
                <img src="/assets/images/gallery/new/12_View11.jpg"/>
                <img src="/assets/images/gallery/new/12_View16.jpg"/>
                <img src="/assets/images/gallery/new/12_View19.jpg"/>
                <img src="/assets/images/gallery/new/Cam04_CShading_Beauty_View28.jpg"/>
                <img src="/assets/images/gallery/new/Cam04_CShading_Beauty_View150000.jpg"/>
                <img src="/assets/images/gallery/new/Cam04_CShading_Beauty_View270002.jpg"/>
                <img src="/assets/images/gallery/new/Cam031_View40.jpg"/>
                <img src="/assets/images/gallery/new/12_CShading_Beauty_View06.jpg"/>
                <img src="/assets/images/gallery/new/12_View07.jpg"/>
                <img src="/assets/images/gallery/new/12_View190.jpg"/>
                <img src="/assets/images/gallery/new/Cam04_CShading_Beauty_View290001.jpg"/>
                <img src="/assets/images/gallery/12_CShading_Beauty_View17.jpg"/>
                <img src="/assets/images/gallery/12_View18.jpg"/>

                <img src="/assets/images/gallery/small/12_View110002_small.jpg"/>
                <img src="/assets/images/gallery/small/12_View100002_small.jpg"/>
                <img src="/assets/images/gallery/small/12_View190_small.jpg"/>
                <img src="/assets/images/gallery/mop/01.jpg"/>
                <img src="/assets/images/gallery/mop/02.jpg"/>
                <img src="/assets/images/gallery/mop/03.jpg"/>
                <img src="/assets/images/gallery/mop/04.jpg"/>
                <img src="/assets/images/gallery/mop/05.jpg"/>
                <img src="/assets/images/gallery/mop/06.jpg"/>

                <img src="/assets/images/gallery/new/12_View1901_sml.jpg"/>
                <img src="/assets/images/gallery/new/12_View280020_sml.jpg"/>
                <img src="/assets/images/gallery/new/Cam014_CShading_Beauty_View420001_sml.jpg"/>
            </div>
            <div class="bx-overlay"></div>
        </div> -->
    </div>

<?PHP
get_footer();
?>