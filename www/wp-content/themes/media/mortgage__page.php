<?PHP
/**
 * Template Name: Ипотека
 */
global $wpdb;
get_header();
?>

    <div class="load_frame data__target" attr-targ="mortgage__page">
        <img class="background__image" src="/assets/images/background/fas_01_View02__blurred2.jpg" />
        <div id="mortgage__page" class="absolute__frame">
            <div class="middle">
                <div class="window">
                    <div class="scroll__container">
                        <div class="large__title">Программы приобретения</div>

                        <div class="switch__section">
                            <div class="row clearfix">
                                <?
                                $sql = $wpdb->get_results("SELECT * FROM `program__page` ORDER BY `id` ASC;");
                                if(count($sql) != 0)
                                {
                                    ?>
                                    <div class="col-xs-4">
                                        <a href="javascript:;" class="active">Ипотека</a>
                                    </div>
                                    <?
                                    foreach($sql as $data)
                                    {
                                        if($data->id == 2){
                                            ?>
                                            <div class="col-xs-4">
                                                <a href="javascript:;"><?=$data->title;?></a>
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
                                    }
                                }
                                ?>
                            </div>
                        </div>

                        <div class="content">
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <thead>
                                <th width="300">банк</th>
                                <th>ставка</th>
                                <th>срок</th>
                                <th width="240">первоначальный взнос</th>
                                </thead>
                                <tbody>
                                <?
                                $sql__mortgage = $wpdb->get_results("SELECT * FROM `mortgage__page` ORDER BY `sort` DESC;");
                                if(count($sql__mortgage) != 0)
                                {
                                    foreach ($sql__mortgage as $data__mortgage) {
                                        ?>
                                        <tr>
                                            <td>
                                                <a href="<?=$data__mortgage->stuff__vznos;?>" target="_blank" style="display: block; background-color: #fff;"><img src="<?=$data__mortgage->stuff__photo;?>" width="50%"></a>
                                            </td>
                                            <td><?=$data__mortgage->stuff__name;?></td>
                                            <td><?=$data__mortgage->stuff__description;?></td>
                                            <td><?=$data__mortgage->stuff__content;?></td>
                                        </tr>
                                    <?
                                    }
                                }
                                ?>
                                </tbody>
                            </table>
                            <!-- <table width="100%" cellpadding="0" cellspacing="0">
                                <thead>
                                    <th width="300">банк</th>
                                    <th>ставка</th>
                                    <th>срок</th>
                                    <th width="240">первоначальный взнос</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="/assets/images/logo__banks/sberbank.svg">
                                        </td>
                                        <td>от 10.9%</td>
                                        <td>до 30 лет</td>
                                        <td>от 15%</td>
                                    </tr>
                                    <tr>
                                        <td><img src="/assets/images/logo__banks/vtb24.svg"></td>
                                        <td>от 10.9%</td>
                                        <td>до 30 лет</td>
                                        <td>от 15%</td>
                                    </tr>
                                    <tr>
                                        <td><img src="/assets/images/logo__banks/ugaik.svg"></td>
                                        <td>от 10.25%</td>
                                        <td>до 30 лет</td>
                                        <td>от 15%</td>
                                    </tr>
                                    <tr>
                                        <td><img src="/assets/images/logo__banks/rosselhoz.svg"></td>
                                        <td>от 10.25%</td>
                                        <td>до 25 лет</td>
                                        <td>от 20%</td>
                                    </tr>
                                    <tr>
                                        <td><img src="/assets/images/logo__banks/raffaizen.svg"></td>
                                        <td>от 11%</td>
                                        <td>до 25 лет</td>
                                        <td>от 15%</td>
                                    </tr>
                                    <tr>
                                        <td><img src="/assets/images/logo__banks/svaz.svg"></td>
                                        <td>от 12.25%</td>
                                        <td>до 30 лет</td>
                                        <td>от 15%</td>
                                    </tr>
                                    <tr>
                                        <td><img src="/assets/images/logo__banks/moscow.svg"></td>
                                        <td>от 10.9%</td>
                                        <td>до 30 лет</td>
                                        <td>15%</td>
                                    </tr>
                                </tbody>
                            </table> -->

                        </div>

                        <?
                        if(count($sql) != 0) {
                            foreach ($sql as $data) {
                                if ($data->id == 2) {
                                    ?>
                                    <div class="content">
                                        <?=stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8'));?>
                                    </div>
                                <?
                                }
                                if ($data->id == 3) {
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

                <a href="/selection" class="apartment__selection p-ajax"></a>
            </div>
        </div>
    </div>

<?PHP
get_footer();
?>