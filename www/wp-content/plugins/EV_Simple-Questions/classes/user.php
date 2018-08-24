<?PHP
final class EVSimpleQuestionsUser
{
    public static function run()
    {
        switch($_GET['op__user']) {
            default:  break;
            case 'new__answer': self::newQuestion(); break;
        }
    }

    /**
     * Функция добавления нового вопроса.
     */
    public static function newQuestion()
    {
        $user_name = (isset($_POST['user_name'])) ? mysql_real_escape_string($_POST['user_name']) : false;
        $user_phone = (isset($_POST['user_phone'])) ? mysql_real_escape_string($_POST['user_phone']) : false;
        $question = (isset($_POST['question'])) ? mysql_real_escape_string($_POST['question']) : false;

        if($user_name == false || $user_phone == false || $question == false)
        {
            echo 'Пожалуйста, заполните обязательные поля.';
        }
        else
        {
            global $wpdb;
            $wpdb->query("INSERT INTO `ev_simple_questions` (`user-name`, `user-phone`, `question`, `date`) VALUES
            ('".$user_name."', '".$user_phone."', '".$question."', '".time()."');");
            echo '200';
        }
        die();
    }
}

EVSimpleQuestionsUser::run();
?>