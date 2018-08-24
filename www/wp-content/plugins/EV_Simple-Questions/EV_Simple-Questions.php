<?PHP
/**
 * Plugin Name: EV Simple-Questions
 * Version: 1.0
 * Description:  Описание плагина.
 * Author: Alex Evgrafov
 * Author URI: http://www.demo.com
 * Plugin URI: http://www.demo.com
 */

#Константы пункта меню в сайд-баре административной панели.
define("EV_SIMPLE_QUESTIONS_SIDEBAR_ITEM_TITLE", 'Управление');
define("EV_SIMPLE_QUESTIONS_SIDEBAR_ITEM_POSITION", 30);
define("EV_SIMPLE_QUESTIONS_TITLE_DELIMITER", "&raquo;");

#Системные константы.
define("EV_SIMPLE_PLUGIN_NAME", "EV_Simple-Questions");
define("EV_SIMPLE_QUESTIONS_DIR", trailingslashit(WP_PLUGIN_URL.'/'.dirname(plugin_basename(__FILE__))));
define("EV_SIMPLE_PLUGIN_DIR", str_replace('\\', '/', dirname(__DIR__)."/".EV_SIMPLE_PLUGIN_NAME));
define("EV_SIMPLE_CLASSES_DIR", EV_SIMPLE_PLUGIN_DIR."/classes");
define("EV_SIMPLE_LIBRARY_DIR", EV_SIMPLE_CLASSES_DIR."/lib");
define("EV_SIMPLE_JAVASCRIPT_DIR", plugins_url()."/".EV_SIMPLE_PLUGIN_NAME."/assets/js");
define("EV_SIMPLE_CSS_DIR", plugins_url()."/".EV_SIMPLE_PLUGIN_NAME."/assets/css");
define("EV_SIMPLE_ADMIN_HTML", EV_SIMPLE_PLUGIN_DIR."/view/admin");
define("EV_SIMPLE_USER_HTML", EV_SIMPLE_PLUGIN_DIR."/view/user");
define("EV_SIMPLE_PLUGIN_ADMIN_URL", "/wp-admin/admin.php?page=".EV_SIMPLE_PLUGIN_NAME."");

#Подключаем классы.
require(EV_SIMPLE_CLASSES_DIR."/admin.php");
require(EV_SIMPLE_CLASSES_DIR."/user.php");
?>