<?PHP
/**
 * Template Name: Бронирование кваритры
 */
get_header();

$referer = (isset($_SERVER['HTTP_REFERER'])) ? $_SERVER['HTTP_REFERER'] : '/apartments';
?>

    <div class="load_frame data__target" attr-targ="" id="callback__page">
        <div class="absolute__frame dynamic__frame__resize">
            <img class="background__image" src="/assets/images/background/fas_01_View02__blurred.jpg" />
        </div>

        <div class="table__frame">
            <div class="middle">
                <div class="window">
                    <a href="<?=$referer;?>" class="close p-ajax"></a>
                    <div class="header__name">Бронирование квартиры</div>
                    <form action="javascript:;" method="post" name="booking__form">
                        <input type="text" placeholder="Как к вам обращаться?" name="user__name">
                        <input type="text" placeholder="Номер телефона" name="user__phone" class="phone-mask">
                        <button type="submit">Забронировать</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

<?PHP
get_footer();
?>