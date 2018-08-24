<?PHP
/**
 * Template Name: Публикации в СМИ
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="publication__page">
        <img class="background__image" src="/assets/images/background/fas_01_View02.jpg" />
        <div id="publication__page" class="absolute__frame">
            <div class="middle">
                <div class="window">
                    <div class="scroll__container">
                        <div class="title">Публикации в СМИ</div>
                        <div class="slide__section">

                            <?
                            global $wpdb;
                            $sql = $wpdb->get_results("SELECT * FROM `publication__page` ORDER BY `id` DESC;");
                            if(count($sql) != 0){
                                foreach($sql as $data) {
                                    ?>
                                    <div class="slide">
                                        <div class="publication__date"><?=$data->date;?></div>
                                        <div class="publication__title"><?=$data->title;?></div>
                                        <div class="publication__content">
                                            <?=stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8'));?>
                                        </div>
                                        <div class="row clearfix">
                                            <div class="col-xs-6">
                                                <div class="publication__source"></div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="publication__link">
                                                    <a href="<?=$data->link;?>" target="_blank">Читать в источнике</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?
                                }
                            }
                            ?>

                        </div>
                    </div>

                    <div class="arrows">
                        <a href="javascript:;" class="left"></a>
                        <a href="javascript:;" class="right"></a>
                    </div>

                    <div class="slide__dotted">

                    </div>
                </div>
            </div>
        </div>
    </div>

<?PHP
get_footer();
?>