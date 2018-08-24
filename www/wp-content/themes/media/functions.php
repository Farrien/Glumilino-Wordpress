<?PHP
/**
 *
 */

#Формируем необходимые константы.
define('TEMPLATE_DIR', get_template_directory_uri());
define('MATH_RANDOM', rand().rand());
define('DOCUMENT_ROOT', $_SERVER['DOCUMENT_ROOT']);

#Получаем все заголовки страницы.
$getAllHeaders = getallheaders();

/*
 UPDATE wp_options SET option_value = replace(option_value, 'http://glumilino-wp.ru', 'http://glumilino.thebigd.ru') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE wp_posts SET guid = replace(guid, 'http://glumilino-wp.ru', 'http://glumilino.thebigd.ru');
UPDATE wp_posts SET post_content = replace(post_content, 'http://glumilino-wp.ru', 'http://glumilino.thebigd.ru');

 UPDATE wp_options SET option_value = replace(option_value, 'http://glumilino-wp.ru', 'http://glumilino.ru') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE wp_posts SET guid = replace(guid, 'http://glumilino-wp.ru', 'http://glumilino.ru');
UPDATE wp_posts SET post_content = replace(post_content, 'http://glumilino-wp.ru', 'http://glumilino.ru');
 */

/**
 * Убираем ненужные разделы меню.
 */
function remove_menus(){
    remove_menu_page( 'index.php' );                  //Консоль
    remove_menu_page( 'edit.php' );                   //Записи
    remove_menu_page( 'upload.php' );                 //Медиафайлы
    //remove_menu_page( 'edit.php?post_type=page' );    //Страницы
    remove_menu_page( 'edit-comments.php' );          //Комментарии
    remove_menu_page( 'themes.php' );                 //Внешний вид
    remove_menu_page( 'plugins.php' );                //Плагины
    remove_menu_page( 'users.php' );                  //Пользователи
    remove_menu_page( 'tools.php' );                  //Инструменты
    #remove_menu_page( 'options-general.php' );        //Настройки
}
add_action( 'admin_menu', 'remove_menus' );

/**
 * #
 */
add_action('init', 'dcc_rewrite_tags');
function dcc_rewrite_tags() {
    add_rewrite_tag('%id%', '([^&]+)');
    add_rewrite_tag('%section_id%', '([^&]+)');
    add_rewrite_tag('%storey_id%', '([^&]+)');
    //add_rewrite_tag('%apartment_number%', '([^&]+)');
    //add_rewrite_tag('%img%', '([^&]+)');
}

add_action('init', 'dcc_rewrite_rules');
function dcc_rewrite_rules() {
    add_rewrite_rule('^apartments/section/([0-9]+)/?$','index.php?page_id=15&section_id=$matches[1]','top');
    add_rewrite_rule('^apartments/section/([0-9]+)/storey/([0-9]+)/?$','index.php?page_id=35&section_id=$matches[1]&storey_id=$matches[2]','top');
    add_rewrite_rule('^apartment__view/id/([^/]*)/s/([^/]*)/?$','index.php?page_id=42&id=$matches[1]&section_id=$matches[2]','top');
    add_rewrite_rule('^booking/id/([^/]*)/?$','index.php?page_id=52&id=$matches[1]','top');

    //add_rewrite_rule('^apartments/section/([0-9]+)/?$','index.php?page_id=15&storey_id=$matches[1]','top');
    //add_rewrite_rule('^этаж/([0-9]+)/?$','index.php?page_id=15&storey_id=$matches[1]','top');
    //add_rewrite_rule('^этаж/([0-9]+)/квартира/([0-9]+)/([0-9]+)/?$','index.php?page_id=17&storey_id=$matches[1]&apartment_number=$matches[2]&img=$matches[3]','top');
    //add_rewrite_rule('^квартира/([0-9]+)/?$','index.php?page_id=17&apartment_number=$matches[1]','top');
    //add_rewrite_rule('^забронировать/([0-9]+)/?$','index.php?page_id=19&apartment_number=$matches[1]','top');
    //add_rewrite_rule('^pdf/([0-9]+)/?$','index.php?page_id=27&apartment_number=$matches[1]','top');
    flush_rewrite_rules();
}

function settings__array()
{
    global $wpdb;
    $sql__mortgage = $wpdb->get_results("SELECT * FROM `settings__page` WHERE `id`='1';");
    if(count($sql__mortgage) != 0) {
        return $sql__mortgage[0];
    }
}
?>