<?PHP
/**
 * Template Name: О проекте
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="about__page">
        <img class="background__image" src="/assets/images/background/fas_01_View02.jpg" />
        <div id="about__page" class="absolute__frame">
            <div class="middle">
                <div class="window">
                    <div class="scroll__container">
                        <!-- <div class="mini__title">проект</div>
                        <div class="large__title">Эрмитаж Горсовет</div> -->
                        <div class="svg__title">
                            <img src="/assets/images/about__page/glumilino__logo.svg">
                        </div>

                        <div class="switch__section">
                            <div class="row clearfix">
                                <?
                                global $wpdb;
                                $sql = $wpdb->get_results("SELECT * FROM `idea__page` ORDER BY `id` ASC;");
                                if(count($sql) != 0)
                                {
                                    foreach($sql as $data)
                                    {
                                        if($data->id == 2){
                                            ?>
                                            <div class="col-xs-4">
                                                <a href="javascript:;" class="active"><?=$data->title;?></a>
                                            </div>
                                        <?
                                        }
                                        if($data->id == 3){
                                            ?>
                                            <div class="col-xs-4">
                                                <a href="javascript:;"><?=$data->title;?></a>
                                            </div>
                                        <?
                                        }
                                        if($data->id == 4){
                                            ?>
                                            <div class="col-xs-4">
                                                <a href="javascript:;"><?=$data->title;?></a>
                                            </div>
                                        <?
                                        }
                                    }
                                }
                                ?>
                            </div>
                        </div>

                        <?
                        if(count($sql) != 0) {
                            foreach ($sql as $data) {
                                if($data->id == 2){
                                    ?>
                                    <div class="content open">
                                        <?=stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8'));?>
                                    </div>
                                <?
                                }
                                if($data->id == 3){
                                    ?>
                                    <div class="content">
                                        <?=stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8'));?>
                                    </div>
                                <?
                                }
                                if($data->id == 4){
                                    ?>
                                    <div class="content">
                                        <?=stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8'));?>
                                    </div>
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

<?PHP
get_footer();
?>