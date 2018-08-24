<?PHP
/**
 * Template Name: Коллбэки
 */
global $wpdb;
require_once(DOCUMENT_ROOT.'/PHPMailer/PHPMailerAutoload.php');
if(isset($_GET['act']) && $_GET['act'] == 'booking')
{
    $user__name = (isset($_POST['user__name'])) ? $_POST['user__name'] : '';
    $user__phone = (isset($_POST['user__phone'])) ? $_POST['user__phone'] : '';
    $number = (isset($_POST['number'])) ? $_POST['number'] : '';

    $wpdb->query("INSERT INTO `booking__apartments` (`user_name`, `user_phone`, `apartment_number`, `date`) VALUES
    ('".mysql_real_escape_string($user__name)."', '".mysql_real_escape_string($user__phone)."', '".mysql_real_escape_string($number)."', '".time()."');");

    #Формируем HTML часть письма.
    $html = false;
    $html .= '<div><b>Пользователь</b></div>';
    $html .= '<div>'.$user__name.'</div><br>';
    $html .= '<div><b>Номер телефона</b></div>';
    $html .= '<div>'.$user__phone.'</div><br>';
    $html .= '<div><b>Номер квартиры</b></div>';
    $html .= '<div>'.$number.'</div><br>';
    $html .= '<div><b>Дата подачи заявки</b></div>';
    $html .= '<div>'.date('d.m.Y H:i').'</div>';

    $mail = new PHPMailer; $mail->SMTPDebug = 0;
    $mail->CharSet = 'UTF-8'; $mail->IsSMTP();
    $mail->Host = 'smtp.yandex.ru'; $mail->SMTPSecure = 'ssl';
    $mail->Port = 465; $mail->SMTPAuth = true; $mail->Username = 'no-reply@domnalenina.info';
    $mail->Password = 'QQQqqq123'; $mail->setFrom('no-reply@domnalenina.info', 'ГК "Госстрой"');
    $mail->isHTML(true); $mail->Subject = 'ГЛУМИЛИНО. Новая заявка на бронирование квартиры.';
    $mail->addAddress('no-reply@domnalenina.info');
    #$mail->addAddress('gladkayata@gosstroy.com');
    $mail->addAddress('prokudina_en@gosstroy.com');
    #$mail->addAddress('alex@b2link.ru');
    $mail->Body = $html;

    #Проверяем, отправлено ли электронное сообщение?
    if(!$mail->send()) {} else {}

    echo '200';
    die();
}

if(isset($_GET['act']) && $_GET['act'] == 'callback')
{
    $user__name = (isset($_POST['user__name'])) ? $_POST['user__name'] : '';
    $user__phone = (isset($_POST['user__phone'])) ? $_POST['user__phone'] : '';
    $time = (isset($_POST['user__time'])) ? $_POST['user__time'] : '';

    $wpdb->query("INSERT INTO `booking__callbacks` (`user_name`, `user_phone`, `time`, `date`) VALUES
    ('".mysql_real_escape_string($user__name)."', '".mysql_real_escape_string($user__phone)."', '".mysql_real_escape_string($time)."', '".time()."');");

    #Формируем HTML часть письма.
    $html = false;
    $html .= '<div><b>Пользователь</b></div>';
    $html .= '<div>'.$user__name.'</div><br>';
    $html .= '<div><b>Номер телефона</b></div>';
    $html .= '<div>'.$user__phone.'</div><br>';
    $html .= '<div><b>Удобное время звонка</b></div>';
    $html .= '<div>'.$time.'</div><br>';
    $html .= '<div><b>Дата подачи заявки</b></div>';
    $html .= '<div>'.date('d.m.Y H:i').'</div>';

    $mail = new PHPMailer; $mail->SMTPDebug = 0;
    $mail->CharSet = 'UTF-8'; $mail->IsSMTP();
    $mail->Host = 'smtp.yandex.ru'; $mail->SMTPSecure = 'ssl';
    $mail->Port = 465; $mail->SMTPAuth = true; $mail->Username = 'no-reply@domnalenina.info';
    $mail->Password = 'QQQqqq123'; $mail->setFrom('no-reply@domnalenina.info', 'ГК "Госстрой"');
    $mail->isHTML(true); $mail->Subject = 'ГЛУМИЛИНО. Заказ обратного звонка.';
    $mail->addAddress('no-reply@domnalenina.info');
    #$mail->addAddress('gladkayata@gosstroy.com');
    $mail->addAddress('prokudina_en@gosstroy.com');
    #$mail->addAddress('alex@b2link.ru');
    $mail->Body = $html;

    #Проверяем, отправлено ли электронное сообщение?
    if(!$mail->send()) {} else {}

    echo '200';
    die();
}
?>