<?PHP
/**
 * Template Name: Всплывающие окна
 */
$section = (isset($_GET['section']) && $_GET['section'] != false) ? $_GET['section'] : false;
if($section == 'send__plan')
{
    ?>
    <div id="send__plan">
        <div class="middle">
            <div class="window">
                <a href="javascript:;" class="close"></a>
                <div class="header__name">Отправить планировку</div>
                <form action="javascript:;" method="post">
                    <input type="text" placeholder="Электронный адрес">
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    </div>
    <?
}
if($section == 'send__booking')
{
    ?>
    <div id="send__booking">
        <div class="middle">
            <div class="window">
                <a href="javascript:;" class="close"></a>
                <div class="header__name">Забронировать квартиру</div>
                <form action="javascript:;" method="post" id="booking__form">
                    <input type="text" placeholder="Как к вам обращаться?" name="user__name">
                    <input type="text" placeholder="Номер телефона" name="user__phone" class="phone-mask">
                    <button type="submit">Забронировать</button>
                </form>
            </div>
        </div>
    </div>
    <?
}
if($section == 'send__callback')
{
    ?>
    <div id="callback__frame">
        <div class="middle">
            <div class="window">
                <a href="javascript:;" class="close"></a>
                <div class="header__name">Заполните форму для связи:</div>
                <form action="javascript:;" method="post" id="callback__form">
                    <input type="text" placeholder="Как к вам обращаться?" name="user__name">
                    <input type="text" placeholder="Номер телефона" name="user__phone" class="phone-mask">
                    <input type="text" placeholder="Удобное время для звонка" name="user__time">
                    <button type="submit">Отправить заявку</button>
                </form>
            </div>
        </div>
    </div>
    <?
}
?>