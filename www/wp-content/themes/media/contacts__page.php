<?PHP
/**
 * Template Name: Контакты
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="" id="contacts__page">
        <div class="absolute__frame dynamic__frame__resize">
            <img class="background__image" src="/assets/images/background/fas_01_View02.jpg" />
        </div>

        <div class="table__frame">
            <div class="middle">
                <div class="window">
                    <div class="content">
                        <?
                        global $wpdb;
                        $sql = $wpdb->get_results("SELECT * FROM `contacts__page` WHERE `id`='1';");
                        if(count($sql) != 0)
                        {
                            foreach ($sql as $data) {
                                ?>
                                <div class="name"><?=$data->education__title;?></div>
                                <div class="description">
                                    <? echo stripslashes(html_entity_decode($data->education__content, ENT_QUOTES | ENT_XML1, 'UTF-8')); ?>
                                </div>
                            <?
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