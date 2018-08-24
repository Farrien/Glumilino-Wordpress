<?PHP
/**
 * Класс плагина.
 * Class EVSimpleQuestionsAdmin
 */
final class EVSimpleQuestionsAdmin
{
    /**
     * Функция, срабатывающая при активации плагина.
     */
    public static function ap(){

    }

    /**
     * Функция, срабатывающая при деактивации плагина.
     */
    public static function dp(){

    }

    /**
     * Функция регистрации JavaScript библиотек и таблиц стилей.
     */
    private static function appendHeader()
    {
        wp_register_style(
            EV_SIMPLE_PLUGIN_NAME."Library",
            EV_SIMPLE_CSS_DIR."/app.css" , '', rand(), 'all'
        ); wp_enqueue_style(EV_SIMPLE_PLUGIN_NAME."Library");

        wp_register_script(
            EV_SIMPLE_PLUGIN_NAME."Library",
            EV_SIMPLE_JAVASCRIPT_DIR."/library.min.js" , '', rand(), true
        ); wp_enqueue_script(EV_SIMPLE_PLUGIN_NAME."Library");
    }

    /**
     * Функция, инициализируемая при запуске плагина.
     */
    public static function run()
    {
        #Объявляем хуки, срабатываемые при активации, либо деактивации плагина.
        register_activation_hook(__FILE__, array("EVSimpleQuestions", "ap"));
        register_deactivation_hook(__FILE__, array("EVSimpleQuestions", "dp"));

        #Формируем пункт меню в сайд-баре административной панели.
        add_action('admin_menu', 'createMenuItem');
        function createMenuItem(){
            if(function_exists('add_menu_page'))
            {
                #Добавляем пункт меню в сайд-бар.
                add_menu_page(
                    EV_SIMPLE_QUESTIONS_SIDEBAR_ITEM_TITLE/* PageTitle */, EV_SIMPLE_QUESTIONS_SIDEBAR_ITEM_TITLE /* Название в сайд-баре */,
                    'administrator' /* Права пользователя */, EV_SIMPLE_PLUGIN_NAME /* Префикс URL (?page=NAME) */,
                    array(__CLASS__, "startingPage") /* Callback функция */,
                    false /* Иконка пункта меню */, EV_SIMPLE_QUESTIONS_SIDEBAR_ITEM_POSITION /* Позиция пункта меню */
                );
            }
        }

        #Объявляем функцию регистрации JavaScript библиотек и таблиц стилей.
        self::appendHeader();
    }

    /**
     * Функция, отвечающая за шаблонизацию основного административного контейнера.
     * @param null $containerTitle
     * @param null $navActive
     * @param null $content
     */
    private static function mainContainer($containerTitle = null, $navActive = null, $content = null, $scrollClass = null)
    {
        global $wpdb;
        $getData = array();
        $getData['container__title'] = EV_SIMPLE_QUESTIONS_SIDEBAR_ITEM_TITLE." ".(($containerTitle != false) ? EV_SIMPLE_QUESTIONS_TITLE_DELIMITER.' '.$containerTitle : null);
        $getData['nav_active-'.$navActive] = 'active';
        $getData['container__html'] = $content;
        $getData['plugin__url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $getData['scroll__class'] = $scrollClass;
        $getData['count__booking'] = count($wpdb->query("SELECT `id` FROM `booking__apartments`"));

        echo EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/main__container.html")->run($getData);
        unset($getData);
    }

    /**
     * #####
     */
    public static function startingPage()
    {
        #Подключаем класс шаблонизатора.
        #Класс построен по принципу Singleton, так, что в предварительном объявлении не нуждается.
        require(EV_SIMPLE_LIBRARY_DIR."/rendering.php");

        #
        switch($_GET['section']) {
            default: self::homePage(); break;
            case 'white__finish__page': self::whiteFinishPage(); break;
            case 'about__page': self::aboutPage(); break;
            case 'program__page': self::programPage(); break;
            case 'developer__page': self::developerPage(); break;
            case 'placement__page': self::placementPage(); break;
            case 'gallery__page': self::galleryPage(); break;
            case 'contacts__page': self::contactsPage(); break;
            case 'mortgage__page': self::mortgagePage(); break;
            case 'settings__page': self::settingsPage(); break;
            case 'documentation__page': self::documentationPage(); break;
            case 'dynamics__page': self::dynamicsPage(); break;
            case 'cams__page': self::camsPage(); break;
            case 'publication__page': self::publicationPage(); break;


            case 'apartments__page': self::apartmentsPage(); break;
            case 'booking__page': self::bookingPage(); break;
            case 'setting__page': self::settingPage(); break;
            #case 'unlink__question': self::unlinkQuestion(); break;
            #case 'new__questions': self::newQuestions(); break;
        }
    }

    /**
     * Функция вывода раздела главной страницы.
     */
    private static function homePage()
    {
        global $wpdb; $HTML = null; $getData = array(); $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;

        ##
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        switch($_GET['action'])
        {
            /**
             * Секция главной страницы.
             */
            default:

                $sql = $wpdb->get_results("SELECT * FROM `home__page-slide` ORDER BY `id` ASC;");
                if(count($sql) == 0)
                {

                }
                else
                {
                    foreach($sql as $data){
                        $itemData = array();
                        $itemData['id'] = $data->id;
                        $itemData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
                        $itemData['image'] = $data->url;
                        $itemData['title'] = $data->title;
                        $itemData['description'] = $data->description;
                        $itemData['active'] = $data->active;
                        $itemData['align'] = $data->align;
                        $itemData['status'] = ($data->active == 1) ? 'Слайд отображается' : '<b>Слайд скрыт</b>';
                        $getData['item'] .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/home__page/item.html")->run($itemData);
                    }
                }

                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/home__page/container.html")->run($getData);

            break;

            /**
             * Функция добавления слайда.
             */
            case 'add__slide':

                $getData['slide__align-left'] = 'checked="checked"';
                if($op == 'add__slide' && $post == 'true')
                {
                    $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                    $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                    $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;
                    $slide__align = (isset($_POST['slide__align'])) ? $_POST['slide__align'] : false;

                    // Проверяем загружен ли файл
                    if(is_uploaded_file($slide__image["tmp_name"]))
                    {
                        $location = "/uploading/home__page/".rand().rand().'.jpg';
                        move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                        $wpdb->query("INSERT INTO `home__page-slide` (`url`, `title`, `description`, `align`) VALUES
                        ('".mysql_real_escape_string($location)."', '".$slide__title."', '".mysql_real_escape_string($slide__description)."', '".mysql_real_escape_string($slide__align)."');");

                        $getData['image'] = $location;
                        $getData['title'] = $slide__title;
                        $getData['description'] = $slide__description;
                        $getData['slide__align-left'] = ($slide__align == 'left') ? 'checked="checked"' : false;
                        $getData['slide__align-right'] = ($slide__align == 'right') ? 'checked="checked"' : false;

                        $getData['error'] = '<div class="notif error"><b>Новый слайд успешно добавлен. Вы можете
                        <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'">вернуться к списку слайдов</a>,
                        либо <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&action=add__slide">добавить</a> еще один сайд.</b></div>';
                    }
                    else
                    {
                        echo("Ошибка загрузки файла");
                    }
                }

                #Выводим информацию в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/home__page/add__slide/add__form.html")->run($getData);

            break;

            /**
             * Функция редактирования слайда.
             */
            case 'edit__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    $sql = $wpdb->get_results("SELECT * FROM `home__page-slide` WHERE `id`='".$id."'  ORDER BY `id` ASC;");
                    if(count($sql) == 0)
                    {
                        $HTML = '<div class="notif error">Запрашиваемая вами информация не существует.
                        <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'">Вернуться к списку слайдов</a>.</div>';
                    }
                    else
                    {
                        foreach($sql as $data)
                        {
                            $getData['id'] = $data->id;
                            $getData['title'] = $data->title;
                            $getData['description'] = $data->description;
                            $getData['image'] = $data->url;
                            $getData['slide__align-left'] = ($data->align == 'left') ? 'checked="checked"' : false;
                            $getData['slide__align-right'] = ($data->align == 'right') ? 'checked="checked"' : false;
                        }

                        if($op == 'update__slide' && $post == 'true')
                        {
                            $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                            $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                            $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;
                            $slide__align = (isset($_POST['slide__align'])) ? $_POST['slide__align'] : false;

                            if($slide__image["tmp_name"] != false)
                            {
                                $location = "/uploading/home__page/".rand().rand().'.jpg';
                                move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                                $wpdb->query("UPDATE `home__page-slide` SET `title`='".$slide__title."', `description`='".mysql_real_escape_string($slide__description)."',
                                `align`='".mysql_real_escape_string($slide__align)."', `url`='".mysql_real_escape_string($location)."' WHERE `id`='".$id."' LIMIT 1;");

                                $getData['image'] = $location;
                                $getData['title'] = $slide__title;
                                $getData['description'] = $slide__description;
                                $getData['slide__align-left'] = ($slide__align == 'left') ? 'checked="checked"' : false;
                                $getData['slide__align-right'] = ($slide__align == 'right') ? 'checked="checked"' : false;

                                $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                                <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'">Вернуться к списку слайдов</a>.</b></div>';
                            }
                            else
                            {
                                $wpdb->query("UPDATE `home__page-slide` SET  `title`='".$slide__title."',  `description`='".mysql_real_escape_string($slide__description)."',
                                `align`='".mysql_real_escape_string($slide__align)."' WHERE `id`='".$id."' LIMIT 1;");

                                $getData['description'] = $slide__description;
                                $getData['slide__align-left'] = ($slide__align == 'left') ? 'checked="checked"' : false;
                                $getData['slide__align-right'] = ($slide__align == 'right') ? 'checked="checked"' : false;

                                $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                                <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'">Вернуться к списку слайдов</a>.</b></div>';
                            }
                        }

                        $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/home__page/edit__slide/edit__form.html")->run($getData);
                    }
                    #$HTML = '<div class="notif error">Выбранный вами слайд успешно удалён.
                    #<a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'">Вернуться к списку слайдов</a>.</div>';
                }

            break;

            /**
             * Функция удаления слайда.
             */
            case 'delete__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    $wpdb->query("DELETE FROM `home__page-slide` WHERE `id`='".$id."' LIMIT 1;");
                    $HTML = '<div class="notif error">Выбранный вами слайд успешно удалён.
                    <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'">Вернуться к списку слайдов</a>.</div>';
                }

            break;
        }


        #Возвращаем данные в шаблон.
        self::mainContainer('Слайдер на главной странице', 'home__page', $HTML);
    }

    /**
     * Страница "Белая отделка".
     */
    private static function whiteFinishPage()
    {
        global $wpdb;
        $HTML = null;
        $getData = array();
        $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;

        #Свитч переключения между разделами.
        switch ($_GET['action'])
        {
            /**
             * Секция списка добавленных изображений.
             */
            default:

                $sql = $wpdb->get_results("SELECT * FROM `white__finish__page` ORDER BY `id` DESC;");
                if(count($sql) == 0)
                {

                }
                else
                {
                    foreach($sql as $data){
                        $itemData = array();
                        $itemData['id'] = $data->id;
                        $itemData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
                        $itemData['image'] = $data->image;
                        $itemData['title'] = ($data->title == false) ? 'Нет информации' : $data->title;
                        $itemData['description'] = ($data->description == false) ? 'Нет информации' : $data->description;
                        $itemData['active'] = $data->active;
                        $getData['item'] .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/white__finish__page/item.html")->run($itemData);
                    }
                }

                #Выводим данные в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/white__finish__page/container.html")->run($getData);

            break;
            //Конец секции списка добавленных изображений.

            /**
             * Секция добавления нового слайда.
             */
            case 'add__slide':

                /**
                 * Секция сохранения добавляемой информации.
                 */
                if($op == 'save' && $post == 'true')
                {
                    $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                    $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                    $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;

                    if($slide__image["tmp_name"] == false)
                    {
                        $getData['error'] = '<div class="notif error"><b>Вы должны прикрепить изображение.</b></div>';
                    }
                    else
                    {
                        // Проверяем загружен ли файл
                        if(is_uploaded_file($slide__image["tmp_name"]))
                        {
                            $location = "/uploading/white__finish__page/".rand().rand().'.jpg';
                            move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                            $wpdb->query("INSERT INTO `white__finish__page` (`image`, `description`, `title`) VALUES
                            ('".mysql_real_escape_string($location)."', '".mysql_real_escape_string($slide__description)."', '".mysql_real_escape_string($slide__title)."');");

                            $getData['image'] = $location;
                            $getData['title'] = $slide__title;
                            $getData['description'] = $slide__description;

                            $getData['error'] = '<div class="notif error"><b>Новый слайд успешно добавлен. Вы можете
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=white__finish__page">вернуться к списку слайдов</a>,
                            либо <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=white__finish__page&action=add__slide">добавить</a> еще один сайд.</b></div>';
                        }
                        else
                        {
                            echo("Ошибка загрузки файла");
                        }
                    }
                }

                #Выводим информацию в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/white__finish__page/add__slide/add__form.html")->run($getData);

            break;
            //Конец секции добавления нового слайда.

            /**
             * Функция редактирования слайда.
             */
            case 'edit__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    #Формируем SQL запрос на получение информации о запрашиваемом слайде.
                    $sql = $wpdb->get_results("SELECT * FROM `white__finish__page` WHERE `id`='".$id."'  ORDER BY `id` ASC;");
                    if(count($sql) !== 0)
                    {
                        foreach ($sql as $data) {
                            $getData['id'] = $data->id;
                            $getData['title'] = $data->title;
                            $getData['description'] = $data->description;
                            $getData['image'] = $data->image;
                        }
                    }

                    /**
                     * Секция обновления информации.
                     */
                    if($op == 'update__slide' && $post == 'true')
                    {
                        $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                        $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                        $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;

                        if($slide__image["tmp_name"] != false)
                        {
                            $location = "/uploading/white__finish__page/".rand().rand().'.jpg';
                            move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                            $wpdb->query("UPDATE `white__finish__page` SET `description`='".mysql_real_escape_string($slide__description)."',
                                `title`='".mysql_real_escape_string($slide__title)."', `image`='".mysql_real_escape_string($location)."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['image'] = $location;
                            $getData['title'] = $slide__title;
                            $getData['description'] = $slide__description;

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=white__finish__page">Вернуться к списку слайдов</a>.</b></div>';
                        }
                        else
                        {
                            $wpdb->query("UPDATE `white__finish__page` SET `description`='".mysql_real_escape_string($slide__description)."',
                            `title`='".mysql_real_escape_string($slide__title)."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['title'] = $slide__title;
                            $getData['description'] = $slide__description;

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=white__finish__page">Вернуться к списку слайдов</a>.</b></div>';
                        }
                    }

                    #Выводим информацию в шаблон.
                    $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/white__finish__page/edit__slide/edit__form.html")->run($getData);
                }

            break;
            //Конец функции редактирования слайда.

            /**
             * Функция удаления слайда.
             */
            case 'delete__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    $wpdb->query("DELETE FROM `white__finish__page` WHERE `id`='".$id."' LIMIT 1;");
                    $HTML = '<div class="notif error">Выбранный вами слайд успешно удалён.
                    <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=white__finish__page">Вернуться к списку слайдов</a>.</div>';
                }

            break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Белая отделка', 'white__finish__page', $HTML);
    }
    //Конец страницы "Белая отделка".

    /**
     * Страница "Наша идея".
     */
    private static function aboutPage()
    {
        global $wpdb; $HTML = null; $getData = array(); $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;

        #Свитч переключения между разделами.
        switch($_GET['action'])
        {
            default:

                $sql = $wpdb->get_results("SELECT * FROM `idea__page` ORDER BY `id` ASC;");
                if(count($sql) == 0)
                {

                }
                else
                {
                    foreach($sql as $data)
                    {
                        if($data->id == 2){
                            $getData['basic-edit-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=about__page&action=edit__block&id='.$data->id;
                            $getData['basic-title'] = $data->title;
                            $getData['basic-description'] = strip_tags(stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8')));
                        }

                        if($data->id == 3){
                            $getData['price-edit-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=about__page&action=edit__block&id='.$data->id;
                            $getData['price-title'] = $data->title;
                            $getData['price-description'] = strip_tags(stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8')));
                        }

                        if($data->id == 4){
                            $getData['infrastructure-edit-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=about__page&action=edit__block&id='.$data->id;
                            $getData['infrastructure-title'] = $data->title;
                            $getData['infrastructure-description'] = strip_tags(stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8')));
                        }

                        if($data->id == 5){
                            $getData['metre-edit-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=about__page&action=edit__block&id='.$data->id;
                            $getData['metre-title'] = $data->title;
                            $getData['metre-description'] = strip_tags(stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8')));
                        }
                    }
                }

                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/idea__page/container.html")->run($getData);

            break;

            case 'edit__block':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false && $_GET['id'] == '2' || $_GET['id'] == '3' || $_GET['id'] == '4' || $_GET['id'] == '5') ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    $sql = $wpdb->get_results("SELECT * FROM `idea__page` WHERE `id`='".$id."' LIMIT 1;");
                    if(count($sql) == 0)
                    {

                    }
                    else
                    {
                        foreach($sql as $data)
                        {
                            $getData['id'] = $data->id;
                            $getData['title'] = $data->title;
                            $getData['mini__description'] = $data->mini__description;
                            $getData['description'] = $data->description;

                            #echo $getData['description'];
                        }

                        #Сохранение.
                        if($op == 'save' && $post == 'true')
                        {
                            $block__title = (isset($_POST['block__title'])) ? $_POST['block__title'] : false;
                            $block__mini__description = (isset($_POST['block__mini__description'])) ? $_POST['block__mini__description'] : false;
                            $block__description = (isset($_POST['block__description'])) ? $_POST['block__description'] : false;

                            $wpdb->query("UPDATE `idea__page` SET `title`='".mysql_real_escape_string($block__title)."',
                            `mini__description`='".mysql_real_escape_string($block__mini__description)."',
                            `description`='".addslashes(htmlentities($block__description, ENT_QUOTES, "UTF-8"))."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['title'] = $block__title;
                            $getData['mini__description'] = $block__mini__description;
                            $getData['description'] = $block__description;

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=about__page">Вернуться к списку разделов</a>.</b></div>';
                        }

                        $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/idea__page/edit/edit__form.html")->run($getData);
                    }
                }

            break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('О проекте', 'about__page', $HTML);
    }







    private static function programPage()
    {
        $section__name__prefix = 'program__page';
        global $wpdb; $HTML = null; $getData = array(); $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $getData['section__url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section='.$section__name__prefix;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;

        #Свитч переключения между разделами.
        switch($_GET['action'])
        {
            default:

                $sql = $wpdb->get_results("SELECT * FROM `program__page` ORDER BY `id` ASC;");
                if(count($sql) == 0)
                {

                }
                else
                {
                    foreach($sql as $data)
                    {
                        if($data->id == 2){
                            $getData['basic-edit-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section='.$section__name__prefix.'&action=edit__block&id='.$data->id;
                            $getData['basic-title'] = $data->title;
                            $getData['basic-description'] = strip_tags(stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8')));
                        }

                        if($data->id == 3){
                            $getData['price-edit-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section='.$section__name__prefix.'&action=edit__block&id='.$data->id;
                            $getData['price-title'] = $data->title;
                            $getData['price-description'] = strip_tags(stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8')));
                        }
                    }
                }

                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/".$section__name__prefix."/container.html")->run($getData);

            break;

            case 'edit__block':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false && $_GET['id'] == '2' || $_GET['id'] == '3' || $_GET['id'] == '4' || $_GET['id'] == '5') ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    $sql = $wpdb->get_results("SELECT * FROM `program__page` WHERE `id`='".$id."' LIMIT 1;");
                    if(count($sql) == 0)
                    {

                    }
                    else
                    {
                        foreach($sql as $data)
                        {
                            $getData['id'] = $data->id;
                            $getData['title'] = $data->title;
                            $getData['mini__description'] = $data->mini__description;
                            $getData['description'] = $data->description;

                            #echo $getData['description'];
                        }

                        #Сохранение.
                        if($op == 'save' && $post == 'true')
                        {
                            $block__title = (isset($_POST['block__title'])) ? $_POST['block__title'] : false;
                            $block__mini__description = (isset($_POST['block__mini__description'])) ? $_POST['block__mini__description'] : false;
                            $block__description = (isset($_POST['block__description'])) ? $_POST['block__description'] : false;

                            $wpdb->query("UPDATE `program__page` SET `title`='".mysql_real_escape_string($block__title)."',
                            `mini__description`='".mysql_real_escape_string($block__mini__description)."',
                            `description`='".addslashes(htmlentities($block__description, ENT_QUOTES, "UTF-8"))."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['title'] = $block__title;
                            $getData['mini__description'] = $block__mini__description;
                            $getData['description'] = $block__description;

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section='.$section__name__prefix.'">Вернуться к списку разделов</a>.</b></div>';
                        }

                        $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/".$section__name__prefix."/edit/edit__form.html")->run($getData);
                    }
                }

            break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Программы приобретения', $section__name__prefix, $HTML);
    }






    private static function developerPage()
    {
        global $wpdb;
        $HTML = null;
        $getData = array();
        $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;

        #Свитч переключения между разделами.
        switch ($_GET['action']) {
            default:

                $sql = $wpdb->get_results("SELECT * FROM `developer__page` WHERE `id`='1' LIMIT 1;");
                if(count($sql) == 0)
                {

                }
                else
                {
                    foreach($sql as $data) {
                        $getData['id'] = $data->id;
                        $getData['edit-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=developer__page&action=edit';
                        $getData['title'] = $data->title;
                        $getData['description'] = stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8'));
                    }
                }
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/developer__page/container.html")->run($getData);

            break;

            case 'edit':

                $sql = $wpdb->get_results("SELECT * FROM `developer__page` WHERE `id`='1' LIMIT 1;");
                if(count($sql) == 0)
                {

                }
                else
                {
                    foreach($sql as $data) {
                        $getData['id'] = $data->id;
                        $getData['edit-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=developer__page&action=edit';
                        $getData['title'] = $data->title;
                        $getData['description'] = $data->description;
                    }
                }

                #Сохранение.
                if($op == 'save' && $post == 'true')
                {
                    $address__title = (isset($_POST['address__title'])) ? $_POST['address__title'] : false;
                    $address__description = (isset($_POST['address__description'])) ? $_POST['address__description'] : false;

                    $wpdb->query("UPDATE `developer__page` SET `title`='".mysql_real_escape_string($address__title)."',
                    `description`='".addslashes(htmlentities($address__description, ENT_QUOTES, "UTF-8"))."' WHERE `id`='1' LIMIT 1;");

                    $getData['title'] = $address__title;
                    $getData['description'] = $address__description;

                    $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                    <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=developer__page">Вернуться назад</a>.</b></div>';
                }

                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/developer__page/edit.html")->run($getData);

            break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('О застройщике', 'developer__page', $HTML);
    }











    /**
     *
     */
    private static function placementPage()
    {
        global $wpdb; $HTML = null;
        $getData = array(); $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $getData['section__url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=placement__page';
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        switch($_GET['action'])
        {
            default:

                $sql = $wpdb->get_results("SELECT * FROM `placement__page` WHERE `id`='1';");
                if (count($sql) != 0) {
                    foreach ($sql as $data) {
                        $getData['education__title'] = $data->education__title;
                        $getData['education__content'] = stripslashes(html_entity_decode($data->education__content, ENT_QUOTES | ENT_XML1, 'UTF-8'));

                        if($op == 'save' && $post == 'true')
                        {
                            $education__title = (isset($_POST['education__title'])) ? $_POST['education__title'] : false;
                            $education__content = (isset($_POST['education__content'])) ? $_POST['education__content'] : false;

                            $getData['education__title'] = $education__title;
                            $getData['education__content'] = $education__content;

                            $wpdb->query("UPDATE `placement__page` SET `education__title`='".$education__title."',
                            `education__content`='".addslashes(htmlentities($education__content, ENT_QUOTES, "UTF-8"))."' WHERE `id`='1' LIMIT 1;");

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.</b></div>';
                        }
                    }
                }

                break;
        }

        $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/placement__page/container.html")->run($getData);

        #Возвращаем данные в шаблон.
        self::mainContainer('Место и окружение', 'placement__page', $HTML);
    }
    /**/




    /**
     *
     */
    private static function contactsPage()
    {
        global $wpdb; $HTML = null;
        $getData = array(); $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $getData['section__url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=contacts__page';
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        switch($_GET['action'])
        {
            default:

                $sql = $wpdb->get_results("SELECT * FROM `contacts__page` WHERE `id`='1';");
                if (count($sql) != 0) {
                    foreach ($sql as $data) {
                        $getData['education__title'] = $data->education__title;
                        $getData['education__content'] = stripslashes(html_entity_decode($data->education__content, ENT_QUOTES | ENT_XML1, 'UTF-8'));

                        if($op == 'save' && $post == 'true')
                        {
                            $education__title = (isset($_POST['education__title'])) ? $_POST['education__title'] : false;
                            $education__content = (isset($_POST['education__content'])) ? $_POST['education__content'] : false;

                            $getData['education__title'] = $education__title;
                            $getData['education__content'] = $education__content;

                            $wpdb->query("UPDATE `contacts__page` SET `education__title`='".$education__title."',
                            `education__content`='".addslashes(htmlentities($education__content, ENT_QUOTES, "UTF-8"))."' WHERE `id`='1' LIMIT 1;");

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.</b></div>';
                        }
                    }
                }

                break;
        }

        $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/contacts__page/container.html")->run($getData);

        #Возвращаем данные в шаблон.
        self::mainContainer('Контакты', 'contacts__page', $HTML);
    }
    /**/







    private static function mortgagePage()
    {
        global $wpdb; $HTML = null;
        $getData = array(); $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $getData['section__url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=mortgage__page';
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        switch($_GET['action'])
        {
            default:

                $pid = (isset($_GET['id'])) ? (int)$_GET['id'] : false;
                $sort = (isset($_GET['sort'])) ? (int)$_GET['sort'] : false;
                $do = (isset($_GET['do'])) ? $_GET['do'] : false;



                $sql = $wpdb->get_results("SELECT * FROM `mortgage__page` ORDER BY `sort` DESC;");
                if(count($sql) != 0){
                    foreach($sql as $data)
                    {
                        $itemData = array();
                        $itemData['section__url'] = $getData['section__url'];
                        $itemData['id'] = $data->id;
                        $itemData['sort'] = $data->sort;
                        $itemData['stuff__name'] = $data->stuff__name;
                        $itemData['stuff__name'] = $data->stuff__name;
                        $itemData['stuff__description'] = $data->stuff__description;
                        $itemData['stuff__content'] = strip_tags(stripslashes(html_entity_decode($data->stuff__content, ENT_QUOTES | ENT_XML1, 'UTF-8')));
                        $itemData['stuff__photo'] = $data->stuff__photo;

                        $getData['item'] .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/mortgage__page/item__stuff.html")->run($itemData);
                    }
                }

                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/mortgage__page/container.html")->run($getData);

                break;

            case 'add__stuff':

                $getData['end__req'] = 0;
                if($op == 'save' && $post == 'true')
                {
                    $stuff__name = (isset($_POST['stuff__name'])) ? $_POST['stuff__name'] : false;
                    $stuff__description = (isset($_POST['stuff__description'])) ? $_POST['stuff__description'] : false;
                    $stuff__content = (isset($_POST['stuff__content'])) ? $_POST['stuff__content'] : false;
                    $stuff__photo = (isset($_FILES['stuff__photo'])) ? $_FILES['stuff__photo'] : false;
                    $stuff__vznos = (isset($_POST['stuff__vznos'])) ? $_POST['stuff__vznos'] : false;

                    $getData['stuff__name'] = $stuff__name;
                    $getData['stuff__description'] = $stuff__description;
                    $getData['stuff__content'] = $stuff__content;
                    $getData['stuff__vznos'] = $stuff__vznos;

                    if($stuff__name == false || $stuff__description == false || $stuff__content == false || $stuff__vznos == false)
                    {
                        $getData['error'] = '<div class="notif error"><b>Пожалуйста, заполните поля.</b></div>';
                    }
                    else
                    {
                        if($stuff__photo["tmp_name"] == false) {
                            $getData['error'] = '<div class="notif error"><b>Пожалуйста, загрузите логотип банка.</b></div>';
                        }
                        else
                        {
                            // Проверяем загружен ли файл
                            if(is_uploaded_file($stuff__photo["tmp_name"]))
                            {
                                $location = "/uploading/mortgage__page/".rand().rand().'.jpg';
                                move_uploaded_file($stuff__photo["tmp_name"], DOCUMENT_ROOT.$location);

                                $wpdb->query("INSERT INTO `mortgage__page` (`stuff__name`, `stuff__description`, `stuff__content`, `stuff__photo`, `stuff__vznos`) VALUES
                                ('".trim($stuff__name)."', '".trim($stuff__description)."', '".trim($stuff__content)."', '".$location."', '".trim($stuff__vznos)."');");

                                $getData['stuff__photo'] = $location;
                                $getData['end__req'] = 1;
                                $getData['error'] = '<div class="notif error"><b>Банк успешно добавлен. Вы можете
                                <a href="'.$getData['section__url'].'">вернуться к общему списку</a>.</div>';
                            }
                            else
                            {
                                echo("Ошибка загрузки файла");
                            }
                        }
                    }
                }

                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/mortgage__page/add.html")->run($getData);

                break;

            case 'edit__stuff':

                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id != false)
                {
                    $sql = $wpdb->get_results("SELECT * FROM `mortgage__page` WHERE `id`='".$id."' LIMIT 1;");
                    if(count($sql) != 0){
                        foreach($sql as $data)
                        {
                            $getData['id'] = $data->id;
                            $getData['stuff__name'] = $data->stuff__name;
                            $getData['stuff__name'] = $data->stuff__name;
                            $getData['stuff__description'] = $data->stuff__description;
                            $getData['stuff__vznos'] = $data->stuff__vznos;
                            $getData['stuff__content'] = stripslashes(html_entity_decode($data->stuff__content, ENT_QUOTES | ENT_XML1, 'UTF-8'));
                            $getData['stuff__photo'] = $data->stuff__photo;

                            if($op == 'save' && $post == 'true')
                            {
                                $stuff__name = (isset($_POST['stuff__name'])) ? $_POST['stuff__name'] : false;
                                $stuff__description = (isset($_POST['stuff__description'])) ? $_POST['stuff__description'] : false;
                                $stuff__content = (isset($_POST['stuff__content'])) ? $_POST['stuff__content'] : false;
                                $stuff__vznos = (isset($_POST['stuff__vznos'])) ? $_POST['stuff__vznos'] : false;
                                $stuff__photo = (isset($_FILES['stuff__photo'])) ? $_FILES['stuff__photo'] : false;

                                $getData['stuff__name'] = $stuff__name;
                                $getData['stuff__description'] = $stuff__description;
                                $getData['stuff__content'] = $stuff__content;
                                $getData['stuff__vznos'] = $stuff__vznos;

                                if($stuff__name == false || $stuff__description == false || $stuff__content == false || $stuff__vznos == false)
                                {
                                    $getData['error'] = '<div class="notif error"><b>Пожалуйста, заполните поля.</b></div>';
                                }
                                else
                                {
                                    if($stuff__photo["tmp_name"] == false)
                                    {
                                        $wpdb->query("UPDATE `mortgage__page` SET `stuff__name`='".$stuff__name."', `stuff__description`='".$stuff__description."',
                                        `stuff__content`='".addslashes(htmlentities($stuff__content, ENT_QUOTES, "UTF-8"))."', `stuff__vznos`='".$stuff__vznos."' WHERE `id`='".$id."' LIMIT 1;");

                                        $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена. Вы можете
                                        <a href="'.$getData['section__url'].'">вернуться к общему списку</a>.</b></div>';
                                    }
                                    else
                                    {
                                        // Проверяем загружен ли файл
                                        if(is_uploaded_file($stuff__photo["tmp_name"]))
                                        {
                                            $location = "/uploading/mortgage__page/".rand().rand().'.jpg';
                                            move_uploaded_file($stuff__photo["tmp_name"], DOCUMENT_ROOT.$location);

                                            $wpdb->query("UPDATE `mortgage__page` SET `stuff__name`='".$stuff__name."', `stuff__description`='".$stuff__description."',
                                            `stuff__content`='".addslashes(htmlentities($stuff__content, ENT_QUOTES, "UTF-8"))."', `stuff__vznos`='".$stuff__vznos."', `stuff__photo`='".$location."' WHERE `id`='".$id."' LIMIT 1;");

                                            $getData['stuff__photo'] = $location;
                                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена. Вы можете
                                            <a href="'.$getData['section__url'].'">вернуться к общему списку</a>.</b></div>';
                                        }
                                        else
                                        {
                                            echo("Ошибка загрузки файла");
                                        }
                                    }
                                }
                            }

                            $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/mortgage__page/edit.html")->run($getData);
                        }
                    }
                }

                break;

            case 'delete__stuff':

                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id != false)
                {
                    $wpdb->query("DELETE FROM `mortgage__page` WHERE `id`='".$id."' LIMIT 1;");
                    $HTML = '<div class="notif error"><b>Банк удалён. Вы можете
                    <a href="'.$getData['section__url'].'">вернуться к общему списку</a>.</b></div>';
                }

                break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Ипотечные ставки', 'mortgage__page', $HTML);
    }








    /**
     *
     */
    private static function settingsPage()
    {
        global $wpdb; $HTML = null;
        $getData = array(); $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $getData['section__url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=settings__page';
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        switch($_GET['action'])
        {
            default:

                $sql = $wpdb->get_results("SELECT * FROM `settings__page` WHERE `id`='1';");
                if (count($sql) != 0) {
                    foreach ($sql as $data) {
                        $getData['phone'] = $data->phone;
                        $getData['email'] = $data->email;
                        $getData['description'] = $data->description;
                        $getData['keywords'] = $data->keywords;
                        $getData['code'] = $data->code;

                        if($op == 'save' && $post == 'true')
                        {
                            $phone = (isset($_POST['phone'])) ? $_POST['phone'] : false;
                            $email = (isset($_POST['email'])) ? $_POST['email'] : false;
                            $description = (isset($_POST['description'])) ? $_POST['description'] : false;
                            $keywords = (isset($_POST['keywords'])) ? $_POST['keywords'] : false;
                            $code = (isset($_POST['code'])) ? $_POST['code'] : false;

                            $getData['phone'] = $phone;
                            $getData['email'] = $email;
                            $getData['description'] = $description;
                            $getData['keywords'] = $keywords;
                            $getData['code'] = $code;

                            $wpdb->query("UPDATE `settings__page` SET `phone`='".$phone."', `email`='".$email."', `description`='".$description."', `keywords`='".$keywords."', `code`='".$code."' WHERE `id`='1' LIMIT 1;");

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.</b></div>';
                        }
                    }
                }

                break;
        }

        $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/settings__page/container.html")->run($getData);

        #Возвращаем данные в шаблон.
        self::mainContainer('Настройки', 'settings__page', $HTML);
    }
    /**/




    /**
     *
     */
    private static function camsPage()
    {
        global $wpdb; $HTML = null;
        $getData = array(); $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $getData['section__url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=cams__page';
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        switch($_GET['action'])
        {
            default:

                $sql = $wpdb->get_results("SELECT * FROM `cams__page` WHERE `id`='1';");
                if (count($sql) != 0) {
                    foreach ($sql as $data) {
                        $getData['cams1'] = $data->cams1;
                        $getData['cams2'] = $data->cams2;
                        $getData['cams3'] = $data->cams3;
                        $getData['cams4'] = $data->cams4;

                        if($op == 'save' && $post == 'true')
                        {
                            $cams1 = (isset($_POST['cams1'])) ? $_POST['cams1'] : false;
                            $cams2 = (isset($_POST['cams2'])) ? $_POST['cams2'] : false;
                            $cams3 = (isset($_POST['cams3'])) ? $_POST['cams3'] : false;
                            $cams4 = (isset($_POST['cams4'])) ? $_POST['cams4'] : false;

                            $getData['cams1'] = $cams1;
                            $getData['cams2'] = $cams2;
                            $getData['cams3'] = $cams3;
                            $getData['cams4'] = $cams4;

                            $wpdb->query("UPDATE `cams__page` SET `cams1`='".$cams1."', `cams2`='".$cams2."', `cams3`='".$cams3."', `cams4`='".$cams4."' WHERE `id`='1' LIMIT 1;");

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.</b></div>';
                        }
                    }
                }

                break;
        }

        $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/cams__page/container.html")->run($getData);

        #Возвращаем данные в шаблон.
        self::mainContainer('Веб-камеры', 'cams__page', $HTML);
    }
    /**/






    private static function getExtension1($filename) {
        return end(explode(".", $filename));
    }

    private static function documentationPage()
    {
        global $wpdb;
        $HTML = null;
        $getData = array();
        $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        $onScroll = 'c__scroll600';

        #Свитч переключения между разделами.
        switch ($_GET['action'])
        {
            /**
             * Секция списка добавленных изображений.
             */
            default:

                $sql = $wpdb->get_results("SELECT * FROM `documentation__page` ORDER BY `id` ASC;");
                if(count($sql) == 0){

                }
                else
                {
                    foreach($sql as $data){
                        $itemData = array();
                        $itemData['id'] = $data->id;
                        $itemData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
                        $itemData['image'] = $data->image;
                        $itemData['title'] = ($data->title == false) ? 'Нет информации' : stripslashes($data->title);
                        $itemData['description'] = ($data->description == false) ? 'Нет информации' : $data->description;
                        $itemData['active'] = $data->active;
                        $getData['item'] .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/documentation__page/item.html")->run($itemData);
                    }
                }

                #Выводим данные в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/documentation__page/container.html")->run($getData);

                break;
            //Конец секции списка добавленных изображений.

            /**
             * Секция добавления нового слайда.
             */
            case 'add__slide':

                /**
                 * Секция сохранения добавляемой информации.
                 */
                if($op == 'save' && $post == 'true')
                {
                    $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                    $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                    $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;

                    if($slide__image["tmp_name"] == false || $slide__title == false)
                    {
                        $getData['error'] = '<div class="notif error"><b>Вы должны прикрепить документ и указать его название</b></div>';
                    }
                    else
                    {
                        // Проверяем загружен ли файл
                        if(is_uploaded_file($slide__image["tmp_name"]))
                        {
                            $extension = self::getExtension1($slide__image["name"]);
                            $location = "/uploading/documentation__page/".rand().rand().'.'.$extension;
                            move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                            $wpdb->query("INSERT INTO `documentation__page` (`image`, `description`, `title`) VALUES
                            ('".mysql_real_escape_string($location)."', '".mysql_real_escape_string($slide__description)."', '".mysql_real_escape_string($slide__title)."');");

                            $getData['image'] = $location;
                            $getData['title'] = $slide__title;
                            $getData['description'] = $slide__description;

                            $getData['error'] = '<div class="notif error"><b>Новый документ успешно загружен. Вы можете
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=documentation__page">вернуться к общему списку</a>,
                            либо <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=documentation__page&action=add__slide">загрузить</a> еще один документ.</b></div>';
                        }
                        else
                        {
                            echo("Ошибка загрузки файла");
                        }
                    }
                }

                #Выводим информацию в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/documentation__page/add__slide/add__form.html")->run($getData);

                break;
            //Конец секции добавления нового слайда.

            /**
             * Функция редактирования слайда.
             */
            case 'edit__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    #Формируем SQL запрос на получение информации о запрашиваемом слайде.
                    $sql = $wpdb->get_results("SELECT * FROM `documentation__page` WHERE `id`='".$id."'  ORDER BY `id` ASC;");
                    if(count($sql) !== 0)
                    {
                        foreach ($sql as $data) {
                            $getData['id'] = $data->id;
                            $getData['title'] = stripslashes($data->title);
                            $getData['description'] = $data->description;
                            $getData['image'] = $data->image;
                        }
                    }

                    /**
                     * Секция обновления информации.
                     */
                    if($op == 'update__slide' && $post == 'true')
                    {
                        $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                        $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                        $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;

                        if($slide__image["tmp_name"] != false)
                        {
                            $extension = self::getExtension1($slide__image["name"]);
                            $location = "/uploading/documentation__page/".rand().rand().'.'.$extension;
                            move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                            $wpdb->query("UPDATE `documentation__page` SET `description`='".mysql_real_escape_string($slide__description)."',
                            `title`='".mysql_real_escape_string($slide__title)."', `image`='".mysql_real_escape_string($location)."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['image'] = $location;
                            $getData['title'] = $slide__title;
                            $getData['description'] = $slide__description;

                            $getData['error'] = '<div class="notif error"><b>Документ успешно обновлен.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=documentation__page">Вернуться к списку документов</a>.</b></div>';
                        }
                        else
                        {
                            $wpdb->query("UPDATE `documentation__page` SET `description`='".mysql_real_escape_string($slide__description)."',
                            `title`='".mysql_real_escape_string($slide__title)."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['title'] = $slide__title;
                            $getData['description'] = $slide__description;

                            $getData['error'] = '<div class="notif error"><b>Документ успешно обновлен.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=documentation__page">Вернуться к списку документов</a>.</b></div>';
                        }
                    }

                    #Выводим информацию в шаблон.
                    $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/documentation__page/edit__slide/edit__form.html")->run($getData);
                }

                break;
            //Конец функции редактирования слайда.

            /**
             * Функция удаления слайда.
             */
            case 'delete__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    $wpdb->query("DELETE FROM `documentation__page` WHERE `id`='".$id."' LIMIT 1;");
                    $HTML = '<div class="notif error">Выбранный вами документ успешно удален.
                    <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=documentation__page">Вернуться к списку документов</a>.</div>';
                }

                break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Документация', 'documentation__page', $HTML, $onScroll);
    }








    private static function dynamicsPage()
    {
        global $wpdb;
        $HTML = null;
        $getData = array();
        $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        $onScroll = 'c__scroll600';

        #Свитч переключения между разделами.
        switch ($_GET['action'])
        {
            /**
             * Секция списка добавленных изображений.
             */
            default:

                $sql = $wpdb->get_results("SELECT * FROM `dynamics__page` ORDER BY `id` DESC;");
                if(count($sql) == 0){

                }
                else
                {
                    foreach($sql as $data){
                        $itemData = array();
                        $itemData['id'] = $data->id;
                        $itemData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
                        $itemData['image'] = $data->image;
                        $itemData['title'] = ($data->title == false) ? 'Секция не указывается' : $data->title;
                        $itemData['description'] = ($data->description == false) ? 'Нет информации' : $data->description;
                        $itemData['active'] = $data->active;
                        $getData['item'] .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/dynamics__page/item.html")->run($itemData);
                    }
                }

                #Выводим данные в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/dynamics__page/container.html")->run($getData);

                break;
            //Конец секции списка добавленных изображений.

            /**
             * Секция добавления нового слайда.
             */
            case 'add__slide':

                /**
                 * Секция сохранения добавляемой информации.
                 */
                if($op == 'save' && $post == 'true')
                {
                    $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                    $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                    $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;

                    $getData['active__section__1'] = ($slide__title == 1) ? 'selected' : '';
                    $getData['active__section__2'] = ($slide__title == 2) ? 'selected' : '';
                    $getData['active__section__3'] = ($slide__title == 3) ? 'selected' : '';
                    $getData['active__section__4'] = ($slide__title == 4) ? 'selected' : '';
                    $getData['active__section__5'] = ($slide__title == 5) ? 'selected' : '';

                    $getData['active__year__2017'] = ($slide__description == 2017) ? 'selected' : '';
                    $getData['active__year__2016'] = ($slide__description == 2016) ? 'selected' : '';
                    $getData['active__year__2015'] = ($slide__description == 2015) ? 'selected' : '';
                    $getData['active__year__2014'] = ($slide__description == 2014) ? 'selected' : '';

                    if($slide__image["tmp_name"] == false || $slide__description == false)
                    {
                        $getData['error'] = '<div class="notif error"><b>Вы должны заполнить основные поля и прикрепить фотографию.</b></div>';
                    }
                    else
                    {
                        // Проверяем загружен ли файл
                        if(is_uploaded_file($slide__image["tmp_name"]))
                        {
                            $extension = self::getExtension1($slide__image["name"]);
                            $location = "/uploading/dynamics__page/".rand().rand().'.jpg';
                            move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                            $wpdb->query("INSERT INTO `dynamics__page` (`image`, `description`, `title`) VALUES
                            ('".mysql_real_escape_string($location)."', '".mysql_real_escape_string($slide__description)."', '".mysql_real_escape_string($slide__title)."');");

                            $getData['image'] = $location;
                            #$getData['title'] = $slide__title;

                            $getData['error'] = '<div class="notif error"><b>Фотография успешно загружена. Вы можете
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=dynamics__page">вернуться к общему списку</a>,
                            либо <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=dynamics__page&action=add__slide">загрузить</a> еще одну фотографию.</b></div>';
                        }
                        else
                        {
                            echo("Ошибка загрузки файла");
                        }
                    }
                }

                #Выводим информацию в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/dynamics__page/add__slide/add__form.html")->run($getData);

                break;
            //Конец секции добавления нового слайда.

            /**
             * Функция редактирования слайда.
             */
            case 'edit__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    #Формируем SQL запрос на получение информации о запрашиваемом слайде.
                    $sql = $wpdb->get_results("SELECT * FROM `dynamics__page` WHERE `id`='".$id."'  ORDER BY `id` ASC;");
                    if(count($sql) !== 0)
                    {
                        foreach ($sql as $data) {
                            $getData['id'] = $data->id;
                            $getData['title'] = $data->title;
                            $getData['description'] = $data->description;
                            $getData['image'] = $data->image;

                            $getData['active__section__1'] = ($data->title == 1) ? 'selected' : '';
                            $getData['active__section__2'] = ($data->title == 2) ? 'selected' : '';
                            $getData['active__section__3'] = ($data->title == 3) ? 'selected' : '';
                            $getData['active__section__4'] = ($data->title == 4) ? 'selected' : '';
                            $getData['active__section__5'] = ($data->title == 5) ? 'selected' : '';

                            $getData['active__year__2017'] = ($data->description == 2017) ? 'selected' : '';
                            $getData['active__year__2016'] = ($data->description == 2016) ? 'selected' : '';
                            $getData['active__year__2015'] = ($data->description == 2015) ? 'selected' : '';
                            $getData['active__year__2014'] = ($data->description == 2014) ? 'selected' : '';

                        }
                    }

                    /**
                     * Секция обновления информации.
                     */
                    if($op == 'update__slide' && $post == 'true')
                    {
                        $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                        $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                        $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;

                        $getData['active__section__1'] = ($slide__title == 1) ? 'selected' : '';
                        $getData['active__section__2'] = ($slide__title == 2) ? 'selected' : '';
                        $getData['active__section__3'] = ($slide__title == 3) ? 'selected' : '';
                        $getData['active__section__4'] = ($slide__title == 4) ? 'selected' : '';
                        $getData['active__section__5'] = ($slide__title == 5) ? 'selected' : '';

                        $getData['active__year__2017'] = ($slide__description == 2017) ? 'selected' : '';
                        $getData['active__year__2016'] = ($slide__description == 2016) ? 'selected' : '';
                        $getData['active__year__2015'] = ($slide__description == 2015) ? 'selected' : '';
                        $getData['active__year__2014'] = ($slide__description == 2014) ? 'selected' : '';

                        if($slide__image["tmp_name"] != false)
                        {
                            $extension = self::getExtension1($slide__image["name"]);
                            $location = "/uploading/dynamics__page/".rand().rand().'.jpg';
                            move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                            $wpdb->query("UPDATE `dynamics__page` SET `description`='".mysql_real_escape_string($slide__description)."',
                            `title`='".mysql_real_escape_string($slide__title)."', `image`='".mysql_real_escape_string($location)."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['image'] = $location;

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=dynamics__page">Вернуться к списку фотографий</a>.</b></div>';
                        }
                        else
                        {
                            $wpdb->query("UPDATE `dynamics__page` SET `description`='".mysql_real_escape_string($slide__description)."',
                            `title`='".mysql_real_escape_string($slide__title)."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['title'] = $slide__title;

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=dynamics__page">Вернуться к списку фотографий</a>.</b></div>';
                        }
                    }

                    #Выводим информацию в шаблон.
                    $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/dynamics__page/edit__slide/edit__form.html")->run($getData);
                }

                break;
            //Конец функции редактирования слайда.

            /**
             * Функция удаления слайда.
             */
            case 'delete__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    $wpdb->query("DELETE FROM `dynamics__page` WHERE `id`='".$id."' LIMIT 1;");
                    $HTML = '<div class="notif error">Фотография успешно удалена.
                    <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=dynamics__page">Вернуться к списку фотографий</a>.</div>';
                }

                break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Динамика строительства', 'dynamics__page', $HTML, $onScroll);
    }







    /**
     * Страница "Апартаменты".
     */
    private static function apartmentsPage()
    {
        #Формируем базовые переменные.
        global $wpdb;
        $HTML = null;
        $getData = array();
        $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        $onScroll = 'c__scroll600';

        #Свитч переключения между разделами.
        switch ($_GET['action'])
        {
            /**
             * Секция общего списка доступных квартир.
             */
            default:

                #Формируем SQL запрос на получение списка квартир.
                #Проверяем, есть ли вообще квартиры.
                $sql = $wpdb->get_results("SELECT * FROM `apartments`;");
                if(count($sql) == 0){
                    #Квартир в базе данных нет.
                }
                else
                {
                    #Квартиры в базе данных есть.
                    #Формируем цикл вывода данных.
                    $getData['count'] = count($sql);
                    foreach($sql as $data)
                    {
                        #Формируем объекты с данными.
                        $itemData = array();
                        if($data->storey != 2) $itemData['plan'] = 'storey__type/'.$data->img.'.png';
                        if($data->storey == 2) $itemData['plan'] = 'storey__two/'.$data->img.'.png';
                        $itemData['storey'] = $data->storey;
                        $itemData['apartment-number'] = $data->{'apartment-number'};
                        $itemData['rooms'] = ($data->rooms == 0) ? 'Студия' : $data->rooms;
                        $itemData['area'] = $data->area;
                        $itemData['price'] = number_format(($data->{'price-all'}), 0, '', ' ');
                        $itemData['edit-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=apartments__page&action=edit&id='.$data->id;
                        $getData['item'] .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/apartments__page/item.html")->run($itemData);
                    }
                }

                #Выводим все объекты в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/apartments__page/container.html")->run($getData);

            break;
            //Конец секции общего списка доступных квартир.

            /**
             * Секция редактирования информации о квартире.
             */
            case 'edit':

                #Проверяем, передан ли ID квартиры?
                $onScroll = false;
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id !== false)
                {
                    #ID квартиры передан.
                    #Формируем SQL запрос на получение информации о запрашиваемой квартире.
                    #Проверяем, есть ли информации о квартире?
                    $sql = $wpdb->get_results("SELECT * FROM `apartments` WHERE `id`='".$id."' LIMIT 1;");
                    if(count($sql) !== 0)
                    {
                        #Информация по запрашиваемой квартире есть.
                        #Формируем цикл вывода.
                        foreach($sql as $data)
                        {
                            #Формируем объекты с данными.
                            $getData['id'] = $data->id;
                            if($data->storey != 2) $getData['plan'] = '/assets/images/apartments/plans/storey__type/'.$data->img.'.png';
                            if($data->storey == 2) $getData['plan'] = '/assets/images/apartments/plans/storey__two/'.$data->img.'.png';
                            $getData['storey'] = $data->storey;
                            $getData['apartment__number'] = $data->{'apartment-number'};
                            $getData['rooms'] = $data->rooms;
                            $getData['area'] = $data->area;
                            $getData['price'] = $data->{'price-all'};
                            $getData['check__active'] = ($data->active == 1) ? 'checked="checked"' : false;
                            $getData['check__no__active'] = ($data->active == 0) ? 'checked="checked"' : false;


                            /**
                             * Секция обновления информации о квартире.
                             */
                            if($op == 'update__info' && $post == 'true')
                            {
                                #Принимаем данные.
                                $storey = (isset($_POST['storey'])) ? $_POST['storey'] : false;
                                $apartment__number = (isset($_POST['apartment__number'])) ? $_POST['apartment__number'] : false;
                                $rooms = (isset($_POST['rooms'])) ? $_POST['rooms'] : false;
                                $area = (isset($_POST['area'])) ? $_POST['area'] : false;
                                $price = (isset($_POST['price'])) ? $_POST['price'] : false;
                                $active = (isset($_POST['active'])) ? $_POST['active'] : false;

                                #Перехватываем данные.
                                $getData['storey'] = $storey;
                                $getData['apartment__number'] = $apartment__number;
                                $getData['rooms'] = $rooms;
                                $getData['area'] = $area;
                                $getData['price'] = $price;
                                $getData['check__active'] = ($active == 1) ? 'checked="checked"' : false;
                                $getData['check__no__active'] = ($active == 0) ? 'checked="checked"' : false;

                                #Формируем SQL запрос на обновление информации.
                                $wpdb->query("UPDATE `apartments` SET
                                `storey`='".mysql_real_escape_string($storey)."',
                                `apartment-number`='".mysql_real_escape_string($apartment__number)."',
                                `rooms`='".mysql_real_escape_string($rooms)."',
                                `area`='".mysql_real_escape_string($area)."',
                                `price-all`='".mysql_real_escape_string($price)."',
                                `active`='".mysql_real_escape_string($active)."'
                                WHERE `id`='".$data->id."' LIMIT 1;");

                                $getData['error'] = '<div class="notif error"><b>Информация о квартире успешно обновлена.
                                <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=apartments__page">Вернуться</a>.</b></div>';
                            }
                            //Конец секции обновления информации о квартире.

                            #Выводим информацию в шаблон.
                            $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/apartments__page/edit__form.html")->run($getData);
                        }
                    }
                }

            break;
            //Конец секции редактирования информации о квартире.
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Апартаменты', 'apartments__page', $HTML, $onScroll);
    }
    /* Конец страницы "Апартаменты". */

    /**
     * Страница "Галерея".
     */
    private static function galleryPage()
    {
        global $wpdb;
        $HTML = null;
        $getData = array();
        $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        $onScroll = 'c__scroll600';

        #Свитч переключения между разделами.
        switch ($_GET['action'])
        {
            /**
             * Секция списка добавленных изображений.
             */
            default:

                $sql = $wpdb->get_results("SELECT * FROM `gallery__page` ORDER BY `id` ASC;");
                if(count($sql) == 0){

                }
                else
                {
                    foreach($sql as $data){
                        $itemData = array();
                        $itemData['id'] = $data->id;
                        $itemData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
                        $itemData['image'] = $data->image;
                        $itemData['title'] = ($data->title == false) ? 'Нет информации' : $data->title;
                        $itemData['description'] = ($data->description == false) ? 'Нет информации' : $data->description;
                        $itemData['active'] = $data->active;
                        $getData['item'] .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/gallery__page/item.html")->run($itemData);
                    }
                }

                #Выводим данные в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/gallery__page/container.html")->run($getData);

            break;
            //Конец секции списка добавленных изображений.

            /**
             * Секция добавления нового слайда.
             */
            case 'add__slide':

                /**
                 * Секция сохранения добавляемой информации.
                 */
                if($op == 'save' && $post == 'true')
                {
                    $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                    $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                    $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;

                    if($slide__image["tmp_name"] == false)
                    {
                        $getData['error'] = '<div class="notif error"><b>Вы должны прикрепить изображение.</b></div>';
                    }
                    else
                    {
                        // Проверяем загружен ли файл
                        if(is_uploaded_file($slide__image["tmp_name"]))
                        {
                            $location = "/uploading/gallery__page/".rand().rand().'.jpg';
                            move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                            $wpdb->query("INSERT INTO `gallery__page` (`image`, `description`, `title`) VALUES
                            ('".mysql_real_escape_string($location)."', '".mysql_real_escape_string($slide__description)."', '".mysql_real_escape_string($slide__title)."');");

                            $getData['image'] = $location;
                            $getData['title'] = $slide__title;
                            $getData['description'] = $slide__description;

                            $getData['error'] = '<div class="notif error"><b>Новое изображение успешно добавлено. Вы можете
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=gallery__page">вернуться к общему списку</a>,
                            либо <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=gallery__page&action=add__slide">добавить</a> еще одно изображение.</b></div>';
                        }
                        else
                        {
                            echo("Ошибка загрузки файла");
                        }
                    }
                }

                #Выводим информацию в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/gallery__page/add__slide/add__form.html")->run($getData);

            break;
            //Конец секции добавления нового слайда.

            /**
             * Функция редактирования слайда.
             */
            case 'edit__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    #Формируем SQL запрос на получение информации о запрашиваемом слайде.
                    $sql = $wpdb->get_results("SELECT * FROM `gallery__page` WHERE `id`='".$id."'  ORDER BY `id` ASC;");
                    if(count($sql) !== 0)
                    {
                        foreach ($sql as $data) {
                            $getData['id'] = $data->id;
                            $getData['title'] = $data->title;
                            $getData['description'] = $data->description;
                            $getData['image'] = $data->image;
                        }
                    }

                    /**
                     * Секция обновления информации.
                     */
                    if($op == 'update__slide' && $post == 'true')
                    {
                        $slide__title = (isset($_POST['slide__title'])) ? $_POST['slide__title'] : false;
                        $slide__description = (isset($_POST['slide__description'])) ? $_POST['slide__description'] : false;
                        $slide__image = (isset($_FILES['slide__image'])) ? $_FILES['slide__image'] : false;

                        if($slide__image["tmp_name"] != false)
                        {
                            $location = "/uploading/gallery__page/".rand().rand().'.jpg';
                            move_uploaded_file($slide__image["tmp_name"], DOCUMENT_ROOT.$location);

                            $wpdb->query("UPDATE `gallery__page` SET `description`='".mysql_real_escape_string($slide__description)."',
                            `title`='".mysql_real_escape_string($slide__title)."', `image`='".mysql_real_escape_string($location)."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['image'] = $location;
                            $getData['title'] = $slide__title;
                            $getData['description'] = $slide__description;

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=gallery__page">Вернуться к списку изображений</a>.</b></div>';
                        }
                        else
                        {
                            $wpdb->query("UPDATE `gallery__page` SET `description`='".mysql_real_escape_string($slide__description)."',
                            `title`='".mysql_real_escape_string($slide__title)."' WHERE `id`='".$id."' LIMIT 1;");

                            $getData['title'] = $slide__title;
                            $getData['description'] = $slide__description;

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=gallery__page">Вернуться к списку изображений</a>.</b></div>';
                        }
                    }

                    #Выводим информацию в шаблон.
                    $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/gallery__page/edit__slide/edit__form.html")->run($getData);
                }

            break;
            //Конец функции редактирования слайда.

            /**
             * Функция удаления слайда.
             */
            case 'delete__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    $wpdb->query("DELETE FROM `gallery__page` WHERE `id`='".$id."' LIMIT 1;");
                    $HTML = '<div class="notif error">Выбранное вами изображение успешно удалено.
                    <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=gallery__page">Вернуться к списку изображений</a>.</div>';
                }

            break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Галерея', 'gallery__page', $HTML, $onScroll);
    }
    //Конец страницы "Галерея".






    /**
     *
     */
    private static function publicationPage()
    {
        global $wpdb;
        $HTML = null;
        $getData = array();
        $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;
        $onScroll = 'c__scroll600';

        #Свитч переключения между разделами.
        switch ($_GET['action'])
        {
            /**
             * Секция списка добавленных изображений.
             */
            default:

                $sql = $wpdb->get_results("SELECT * FROM `publication__page` ORDER BY `id` DESC;");
                if(count($sql) == 0){

                }
                else
                {
                    foreach($sql as $data){
                        $itemData = array();
                        $itemData['id'] = $data->id;
                        $itemData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
                        $itemData['image'] = $data->image;
                        $itemData['title'] = $data->title;
                        $itemData['description'] = strip_tags(stripslashes(html_entity_decode($data->description, ENT_QUOTES | ENT_XML1, 'UTF-8')));
                        $itemData['date'] = $data->date;
                        $itemData['link'] = $data->link;
                        $itemData['active'] = $data->active;
                        $getData['item'] .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/publication__page/item.html")->run($itemData);
                    }
                }

                #Выводим данные в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/publication__page/container.html")->run($getData);

                break;
            //Конец секции списка добавленных изображений.

            /**
             * Секция добавления нового слайда.
             */
            case 'add__slide':

                /**
                 * Секция сохранения добавляемой информации.
                 */
                $getData['date'] = date('d.m.Y');
                if($op == 'save' && $post == 'true')
                {
                    $title = (isset($_POST['title'])) ? $_POST['title'] : false;
                    $description = (isset($_POST['description'])) ? $_POST['description'] : false;
                    $date = (isset($_POST['date'])) ? $_POST['date'] : false;
                    $link = (isset($_POST['link'])) ? $_POST['link'] : false;

                    $getData['title'] = $title;
                    $getData['description'] = $description;
                    $getData['date'] = $date;
                    $getData['link'] = $link;

                    if($title == false || $description == false || $date == false || $link == false)
                    {
                        $getData['error'] = '<div class="notif error"><b>Пожалуйста, заполните все поля.</b></div>';
                    }
                    else
                    {
                        $wpdb->query("INSERT INTO `publication__page` (`title`, `description`, `date`, `link`) VALUES
                        ('".$title."', '".addslashes(htmlentities($description, ENT_QUOTES, "UTF-8"))."', '".$date."', '".$link."');");

                        $getData['error'] = '<div class="notif error"><b>Публикация успешно добавлена. Вы можете
                        <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=publication__page">вернуться к списку публикаций</a>,
                        либо <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=publication__page&action=add__slide">добавить</a> еще одну публикацию.</b></div>';
                    }
                }

                #Выводим информацию в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/publication__page/add__slide/add__form.html")->run($getData);

                break;
            //Конец секции добавления нового слайда.

            /**
             * Функция редактирования слайда.
             */
            case 'edit__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    #Формируем SQL запрос на получение информации о запрашиваемом слайде.
                    $sql = $wpdb->get_results("SELECT * FROM `publication__page` WHERE `id`='".$id."'  ORDER BY `id` ASC;");
                    if(count($sql) !== 0)
                    {
                        foreach ($sql as $data) {
                            $getData['id'] = $data->id;
                            $getData['title'] = $data->title;
                            $getData['description'] = $data->description;
                            $getData['image'] = $data->image;
                            $getData['date'] = $data->date;
                            $getData['link'] = $data->link;
                        }
                    }

                    /**
                     * Секция обновления информации.
                     */
                    if($op == 'update__slide' && $post == 'true')
                    {
                        $title = (isset($_POST['title'])) ? $_POST['title'] : false;
                        $description = (isset($_POST['description'])) ? $_POST['description'] : false;
                        $date = (isset($_POST['date'])) ? $_POST['date'] : false;
                        $link = (isset($_POST['link'])) ? $_POST['link'] : false;

                        $getData['title'] = $title;
                        $getData['description'] = $description;
                        $getData['date'] = $date;
                        $getData['link'] = $link;

                        if($title == false || $description == false || $date == false || $link == false)
                        {
                            $getData['error'] = '<div class="notif error"><b>Пожалуйста, заполните все поля.</b></div>';
                        }
                        else
                        {
                            $wpdb->query("UPDATE `publication__page` SET
                            `title`='".$title."',
                            `description`='".addslashes(htmlentities($description, ENT_QUOTES, "UTF-8"))."',
                            `date`='".$date."',
                            `link`='".$link."',
                             WHERE `id`='".$id."' LIMIT 1;");

                            $getData['error'] = '<div class="notif error"><b>Информация успешно обновлена.
                            <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=publication__page">Вернуться к списку публикаций</a>.</b></div>';
                        }
                    }

                    #Выводим информацию в шаблон.
                    $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/publication__page/edit__slide/edit__form.html")->run($getData);
                }

                break;
            //Конец функции редактирования слайда.

            /**
             * Функция удаления слайда.
             */
            case 'delete__slide':

                /**
                 * Проверяем, передан ли ID слайда.
                 */
                $id = (isset($_GET['id']) && $_GET['id'] != false) ? (int)$_GET['id'] : false;
                if($id == false){

                }
                else
                {
                    $wpdb->query("DELETE FROM `publication__page` WHERE `id`='".$id."' LIMIT 1;");
                    $HTML = '<div class="notif error">Выбранная вами публикация успешно удалена.
                    <a href="'.EV_SIMPLE_PLUGIN_ADMIN_URL.'&section=publication__page">Вернуться к списку публикаций</a>.</div>';
                }

                break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Публикации в СМИ', 'publication__page', $HTML, $onScroll);
    }
    //Конец страницы "Галерея".







    /**
     * Страница списка "Заявок на бронирование".
     */
    private static function bookingPage()
    {
        global $wpdb;
        $HTML = null;
        $getData = array();
        $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;

        #Свитч переключения между разделами.
        switch ($_GET['action'])
        {
            default:

                #Формируем SQL запрос на получение списка заявок.
                $sql = $wpdb->get_results("SELECT * FROM `booking__apartments` ORDER BY `id` DESC");
                $getData['count'] = count($sql);
                if(count($sql) !== 0){
                    foreach($sql as $data)
                    {
                        $itemData = array();
                        $itemData['id'] = $data->id;
                        $itemData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
                        $itemData['apartment_number'] = $data->apartment_number;
                        $itemData['user_name'] = $data->user_name;
                        $itemData['user_phone'] = $data->user_phone;
                        $itemData['date'] = date('d.m.Y, H:i', $data->date);

                        $getData['item'] .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/booking__page/item.html")->run($itemData);
                    }
                }

                #Выводим информацию в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/booking__page/container.html")->run($getData);

            break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Заявки на бронирование', 'booking__page', $HTML, false);
    }
    //Конец страницы списка заявок на бронирование квартиры.

    private static function settingPage()
    {
        global $wpdb;
        $HTML = null;
        $getData = array();
        $getData['plugin-url'] = EV_SIMPLE_PLUGIN_ADMIN_URL;
        $op = (isset($_GET['op'])) ? $_GET['op'] : false;
        $post = (isset($_POST['is__posting'])) ? $_POST['is__posting'] : false;

        #Свитч переключения между разделами.
        switch ($_GET['action'])
        {
            default:


                #Выводим информацию в шаблон.
                $HTML .= EV_SIRendering::file(EV_SIMPLE_ADMIN_HTML."/setting__page/container.html")->run($getData);

            break;
        }

        #Возвращаем данные в шаблон.
        self::mainContainer('Общие настройки', 'setting__page', $HTML, false);
    }
}

#Проверяем, является ли пользователь администратором? Авторизирован ли он?
#Если пользователь является администратором, то запускаем плагин с соответствующим классом.
if(is_admin()) EVSimpleQuestionsAdmin::run();
?>