<?PHP
/**
 * Template Name: О застройщике
 */
get_header();
?>

<div class="load_frame data__target" attr-targ="developer__page" id="developer__page">
    <div class="absolute__frame dynamic__frame__resize">
        <img class="background__image" src="/assets/images/background/construction-01.jpg" />

        <div class="developer__window absolute__frame">
            <div class="middle">
                <div class="window">
                    <div class="scroll__container">

                        <div class="svg__title">
                            <img src="/assets/images/developer__page/gosstroy__logo.svg">
                        </div>

                        <div class="content open">
                            <?
                            global $wpdb;
                            $sql = $wpdb->get_results("SELECT * FROM `developer__page` WHERE `id`='1';");
                            if(count($sql) != 0)
                            {
                                foreach ($sql as $data) {
                                    echo stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8'));
                                }
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
