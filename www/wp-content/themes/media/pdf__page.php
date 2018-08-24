<style>
    html, body
    {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
</style>
<?PHP
/**
 * Template Name: Скачать PDF
 */
global $wpdb;
$id = get_query_var('apartment_number');

include(DOCUMENT_ROOT.'/fpdf/fpdf.php');
include(DOCUMENT_ROOT.'/fpdf/fpdi.php');
include(DOCUMENT_ROOT.'/fpdf/fpdi_pdf_parser.php');

$sql = $wpdb->get_results("SELECT * FROM `apartments` WHERE `apartment-number`='".mysql_real_escape_string($id)."' LIMIT 1;");
if(count($sql) !== 0) {
    foreach ($sql as $apartmentsData) {

        $apartmentsData = (array)$apartmentsData;

        $pdf = new PDF('L');
        $pdf->AddPage();
        if($apartmentsData['storey'] == 2){ $pdf->setSourceFile('data/pdf-apartments/pdf__two/'.$apartmentsData['img'].'.pdf'); }
        if($apartmentsData['storey'] != 2){ $pdf->setSourceFile('data/pdf-apartments/pdf__type/'.$apartmentsData['img'].'.pdf'); }


        #Подключаем первую страницу PDF файла. Заменяем искомую информацию.
        $page = $pdf->importPage(1);
        $specs = $pdf->getTemplateSize($page);
        $pdf->useTemplate($page);

        $pdf->replaceContent('\(\(plan-number1234567890\)\)', $apartmentsData['storey']);
        $pdf->replaceContent('\(\(url-www.abcdefghijklmnopqrstuvwxyz\)\)', 'www.ufa-idea.ru');

        $pdf->AddPage();
        $page2 = $pdf->importPage(2);
        $pdf->useTemplate($page2);
        $pdf->replaceContent('\(\(plan-number1234567890\)\)', $apartmentsData['storey']);
        $pdf->replaceContent('\(\(an1234567890\)\)', $apartmentsData['apartment-number']);
        $pdf->replaceContent('\(\(price 1234567890\)\)', number_format(($apartmentsData['price-all']), 0, ',', ' '));
        $pdf->replaceContent('\(\(url-www.abcdefghijklmnopqrstuvwxyz\)\)', 'www.ufa-idea.ru');
        $pdf->AddPage();

        $page3 = $pdf->importPage(3);
        $pdf->useTemplate($page3);
        $pdf->replaceContent('\(\(an1234567890\)\)', $apartmentsData['apartment-number']);
        $pdf->replaceContent('\(\(price 1234567890\)\)', number_format(($apartmentsData['price-all']), 0, ',', ' '));
        $pdf->replaceContent('\(\(url-www.abcdefghijklmnopqrstuvwxyz\)\)', 'www.ufa-idea.ru');
        $pdf->AddPage();

        $page4 = $pdf->importPage(4);
        $pdf->useTemplate($page4);
        $pdf->replaceContent('\(\(url-www.abcdefghijklmnopqrstuvwxyz\)\)', 'www.ufa-idea.ru');
        $pdf->AddPage();

        $page5 = $pdf->importPage(5);
        $pdf->useTemplate($page5);
        $pdf->replaceContent('\(\(url-www.abcdefghijklmnopqrstuvwxyz\)\)', 'www.ufa-idea.ru');

        $positionNumber = $id; $priceFloat = false;
        $getData = new stdClass();

        $name = 'A'.$apartmentsData['id'].'.pdf';
        $pdf->Output('data/temp/'.$name, 'F');
        echo '<iframe src="/data/temp/'.$name.'" width="100%" height="100%" frameborder="0"></iframe>';

    }
}
#echo 'dfg'.$id;
?>