<?PHP
/**
 * Template Name: Обратный звонок
 */
get_header();
?>

    <div class="load_frame data__target" attr-targ="" id="callback__page">
        <div class="absolute__frame dynamic__frame__resize">
            <img class="background__image" src="/assets/images/background/fas_01_View02.jpg" />
        </div>

        <div class="table__frame">
            <div class="middle">
                <div class="window">
                    <div class="header__name">Заполните форму для связи:</div>
                    <form action="javascript:;" method="post">
                        <input type="text" placeholder="Как к вам обращаться?" name="user__name">
                        <input type="text" placeholder="Номер телефона" name="user__phone">
                        <input type="text" placeholder="Удобное время для звонка" name="user__time">
                        <button type="submit">Отправить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

<?PHP
get_footer();
?>