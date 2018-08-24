<?PHP
/**
 * Template Name: Динамика строительства
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="construction__page" id="construction__page">
        <div class="absolute__frame dynamic__frame__resize">
            <img class="background__image" src="/assets/images/background/construction-01.jpg" />

            <div id="open__image" class="absolute__frame">
                <div class="middle">
                    <div class="window">
                        <a href="javascript:;" class="close"></a>
                    </div>
                </div>
            </div>

            <div class="construction__window absolute__frame">
                <div class="middle">
                    <div class="window__c">
                        <h2>Динамика строительства</h2>
                        <div class="row clearfix">
                            <!-- <div class="col-xs-6">
                                <div class="switch__section">
                                    <div class="name">Выберите секцию:</div>
                                    <div class="value">
                                        <a href="javascript:;" class="" attr-section="1">1</a>
                                        <a href="javascript:;" attr-section="2">2</a>
                                        <a href="javascript:;" attr-section="3">3</a>
                                        <a href="javascript:;" attr-section="4">4</a>
                                        <a href="javascript:;" attr-section="5">5</a>
                                    </div>
                                </div>
                            </div> -->

                            <div class="col-xs-12">
                                <div class="switch__year">
                                    <div class="name">Выберите год:</div>
                                    <div class="value">
                                        <a href="javascript:;" class="" attr-year="2017">2017</a>
                                        <a href="javascript:;" attr-year="2016">2016</a>
                                        <a href="javascript:;" attr-year="2015">2015</a>
                                        <!-- <a href="javascript:;" attr-year="2014">2014</a> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row clearfix">
                            <div class="listing__images">
                                <div class="scroll__container">
                                    <?
                                    global $wpdb;
                                    $sql = $wpdb->get_results("SELECT * FROM `dynamics__page` ORDER BY `id` DESC;");
                                    if(count($sql) != 0){
                                        $slide__array = array();
                                        foreach($sql as $data) {
                                            ?>
                                            <div class="col-xs-3">
                                                <a href="javascript:;" class="image" data-section="<?=$data->title;?>" data-year="<?=$data->description;?>" img="<?=$data->image;?>"></a>
                                            </div>
                                        <?
                                        }
                                    }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="window__bottom">
                        <div class="row clearfix">
                            <div class="col-xs-7">
                                <div class="translation">
                                    <div class="row clearfix">
                                        <div class="col-xs-4">
                                            <div class="name">онлайн<br>трансляция</div>
                                        </div>
                                        <div class="col-xs-8">
                                            <div class="cams">
                                                <?
                                                $sql = $wpdb->get_results("SELECT * FROM `cams__page` WHERE `id`='1';");
                                                if(count($sql) != 0){
                                                    foreach($sql as $data) {
                                                        if($data->cams1 != false)
                                                        {
                                                            ?>
                                                            <a href="javascript:;">
                                                                <span class="text">1</span>
                                                    <span class="video">
                                                        <span class="close"></span>
                                                        <iframe src="<?=$data->cams1;?>" width="689" height="642" frameborder="0"></iframe>
                                                    </span>
                                                            </a>
                                                        <?
                                                        }
                                                        if($data->cams2 != false)
                                                        {
                                                            ?>
                                                            <a href="javascript:;">
                                                                <span class="text">2</span>
                                                    <span class="video">
                                                        <span class="close"></span>
                                                        <iframe src="<?=$data->cams2;?>" width="689" height="642" frameborder="0"></iframe>
                                                    </span>
                                                            </a>
                                                        <?
                                                        }
                                                        if($data->cams3 != false)
                                                        {
                                                            ?>
                                                            <a href="javascript:;">
                                                                <span class="text">3</span>
                                                    <span class="video">
                                                        <span class="close"></span>
                                                        <iframe src="<?=$data->cams3;?>" width="689" height="642" frameborder="0"></iframe>
                                                    </span>
                                                            </a>
                                                        <?
                                                        }
                                                        if($data->cams4 != false)
                                                        {
                                                            ?>
                                                            <a href="javascript:;">
                                                                <span class="text">4</span>
                                                    <span class="video">
                                                        <span class="close"></span>
                                                        <iframe src="<?=$data->cams4;?>" width="689" height="642" frameborder="0"></iframe>
                                                    </span>
                                                            </a>
                                                        <?
                                                        }
                                                    }
                                                }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-5">
                                <?
                                $sql_pub = $wpdb->get_results("SELECT * FROM `publication__page` ORDER BY `id` DESC;");
                                if(count($sql_pub) != 0){
                                    ?>
                                    <a href="/publication" class="publication p-ajax">
                                    <span>
                                        публикации<br>в СМИ
                                    </span>
                                    </a>
                                <?
                                }
                                ?>
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