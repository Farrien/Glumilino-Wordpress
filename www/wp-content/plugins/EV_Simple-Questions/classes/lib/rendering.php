<?PHP
/*!
 * @author Alex Evgrafov <dev@alex-evgrafov.ru>
 * @author Handy Lab Development <dev@handy-lab.ru>
 * @link http://www.handy-lab.ru/
 * @copyright 2015-2016 Handy Lab Development LLC
 */

#Класс организации шаблонизатора.
final class EV_SIRendering
{
    #Переменные класса.
    private static $_instanceRendering = null;
    private static $uri = null, $args = null, $link = null; #Базовые переменные.
    private static $pve = '/\[\[\$(.*?)\]\]/x'; #Регурярное выражение парсинга переменных.
    private static $pce = '/\[\[\#if\(\$(.*?)\)](.*?)\[endif\#]\]/sx'; #Регулярное выражение парсинга условий.

    /**
     * Конструктор класса.
     */
    private function __construct($uri = null)
    {

    }

    /**
     * Функция инициализации класса.
     * @param null $uri
     * @return null|rendering
     */
    public static function file($uri = null)
    {
        #Формируем экземпляр класса.
        if(is_null(self::$_instanceRendering))
        {
            #Формируем экземпляр класса.
            self::$_instanceRendering = new self();
        }

        #Передаем путь к шаблону оформления.
        self::$uri = $uri;

        #Возвращаем объект.
        return self::$_instanceRendering;
    }

    /**
     * Функция обработки переменных в шаблоне.
     * @param null $var
     */
    protected static function getParseVariable($var = null)
    {
        #Принимаем объекты.
        $varSearch = $var[1]; $varReplace = $var[0];

        #Формируем цикл прогона по объектам.
        foreach(self::$args as $args_k => $args_v)
        {
            #Сверяем ключи у объекта и переменной в шаблоне.
            if($args_k === $varSearch)
            {
                #Подменяем данные.
                self::$link = str_replace($varReplace, $args_v, self::$link);
            }
        }
    }

    /**
     * Функция обработки условий.
     * @param null $conditions
     */
    protected static function getParseConditions($conditions = null)
    {
        #Принимаем объекты.
        $conditionAll = $conditions[0];
        $conditionOperator = $conditions[1];
        $conditionContext = $conditions[2];

        #Проверяем, является ли условие "сравнением"?
        if(strstr($conditionOperator, '=='))
        {
            #Условие требует "сравнение переменных".
            #Разбираем условие на состовляющие.
            $conditionsEqual = explode('==', $conditionOperator);
            $conditionsEqualVar = trim($conditionsEqual[0]);
            $conditionsEqualValue = trim($conditionsEqual[1]);

            #Формируем цикл прогона по объектам.
            foreach(self::$args as $args_k => $args_v)
            {
                #Сверяем ключи у объекта и переменной в шаблоне.
                if($args_k === $conditionsEqualVar)
                {
                    #Заменяем название переменной значением.
                    $conditionsEqualVar = str_replace($conditionsEqualVar, $args_v, $conditionsEqualVar);

                    #Проверяем, равны ли заданные переменные?
                    if($conditionsEqualVar == $conditionsEqualValue)
                    {
                        #Переменные равны.
                        #Подменяем данные.
                        self::$link = str_replace($conditionAll, $conditionContext, self::$link);
                    }
                }
            }
        }
    }

    /**
     * Функция обработки шаблона оформления.
     * @param null $args
     * @return mixed|null|void
     */
    public static function run($args = null)
    {
        #Принимаем массив (объект) с аргументами.
        self::$args = (object)$args;

        /**
         * Проверяем, указан ли шаблон оформления?
         */
        if(self::$uri == false)
        {
            #Путь к шаблону не указан. Выбрасываем исключение.
            die('Не указан путь к шаблону оформления.');
        }
        else
        {
            #Проверяем, существует ли запрашиваемый шаблон оформления?
            if(!file_exists(self::$uri))
            {
                #Нет доступа к шаблону оформления.
                die('Ошибка чтения шаблона оформления — '.self::$uri.'.');
            }
            else
            {
                #Доступ к шаблону есть. Проверяем, переданы ли объекты в функцию?
                if(is_array(self::$args) || is_object(self::$args))
                {
                    #Объекты в функцию переданы. Инициализируем шаблон.
                    self::$link = @file_get_contents(self::$uri);

                    #Отрезаем условные комментарии.
                    #Убираем экранированные звездочки и слэши.
                    #Удаляем PHP код.
                    self::$link = preg_replace(array('/\\/\*(.*?)\*\\//sx'), '', self::$link);
                    self::$link = str_replace('\\\\', "\x01", self::$link);
                    self::$link = str_replace('\*', "\x02", self::$link);
                    self::$link = preg_replace('#<\?(|php)([\s\S]*)|(\?>)#i', false, self::$link);

                    #Находим в шаблоне "базовые" переменные.
                    #Забираем информацию о переменных.
                    $parseVariable = preg_replace_callback(
                        self::$pve, array(self::$_instanceRendering, 'getParseVariable'), self::$link
                    );

                    #Возвращаем двойные слэши и звездочки.
                    self::$link = str_replace("\x01", '\\\\', self::$link);
                    self::$link = str_replace("\x02", '*', self::$link);

                    #Формируем обработку условий. Находим в шаблоне условия.
                    #Передаем условия обработчику.
                    $parseConditions = preg_replace_callback(
                        self::$pce, array(self::$_instanceRendering, 'getParseConditions'), self::$link
                    );

                    #Убиваем все лишнее из шаблона.
                    self::$link = preg_replace(array(self::$pve, self::$pce), false, self::$link);
                }
            }
        }

        #Возвращаем обработанный контент шаблона.
        return self::$link;
    }
}
?>