<?PHP
#Устанавливаем заголовки страницы.
header('Content-Type: application/json; charset=utf-8');
header('Content-Type: application/json');
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");

/*#Формируем функцию проверки на валидность JSON данных.
#Данная функция нам пригодится на этапе проверки JSON массива.
function isJSON($string){
    return ((is_string($string) && (is_object(json_decode($string)) || is_array(json_decode($string))))) ? true : false;
}

#Запрашиваем данные из CRM.
$data = file_get_contents("https://crm.gosstroy.info/art3d?department_id=55053e80-580f-42f9-bc82-a65c09bd64ad&project_id=7ee23e79-9ef2-402a-9603-5841c5939e05&floor_block_type=COUNT&type=art3d");

#Проверяем, пришел ли вообще ответ из CRM?
if($data == false)
{
    #Данные из CRM по какой то неизвестной причине не поступили и ответ оказался пустым.
    #Подгружаем локальную копию данных. (Из резервного хранилища).
    $backup = file_get_contents("http://glumilino.ru/assets/js/data.json");

    #Возвращаем JSON из резервной копии.
    #die($backup);
}
else
{
    #Данные из CRM поступили. Проверяем, валидный ли массив JSON? (В противном случае, в случае невалидности обрушится весь сайт).
    if(isJSON($data) == false)
    {
        #Оп-па. JSON по каким то магическим причинам оказался невалидным.
        #Подгружаем локальную копию данных. (Из резервного хранилища).
        $backup = file_get_contents("http://glumilino.ru/assets/js/data.json");

        #Возвращаем JSON из резервной копии.
        #die($backup);
    }
    else
    {
        #JSON валидный. Все с ним хорошо.
        #Выводим данные из CRM.

        $data = json_decode($data, true);
        unset($data['apartments']['1-323']);

        foreach($data['apartments'] as $fi => $fv)
        {
            $data['apartments'][$fi]['rc'] = (int)$fv['rc'];
        }

        $data = json_encode($data);
        die($data);
    }
}*/
?>