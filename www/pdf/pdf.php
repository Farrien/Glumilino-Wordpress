<?php

date_default_timezone_set('Europe/Moscow');

require_once('tcpdf/tcpdf.php');
require_once('fpdi/fpdi.php');

class PDF extends FPDI {
    /**
     * "Remembers" the template id of the imported page
     */
    var $_tplIdx;
    var $filename;
    var $page_count;

    public function __construct($filename) {

        parent::__construct();
        $this->filename = $filename;
    }

    /**
     * include a background template for every page
     */
    function Header() {

        if (is_null($this->_tplIdx)) {

            // THIS IS WHERE YOU GET THE NUMBER OF PAGES
            $this->page_count = $this->setSourceFile($this->filename);
            $this->_tplIdx = $this->importPage(1);
            #$this->_tplIdx1 = $this->importPage(2);
        }

    }

    function Footer() {}
}

$id = $_REQUEST['id'];
if (isset($_REQUEST['d'])) {
    $download = $_REQUEST['d'];
}
else{
    $download = False;
}
/*$json = file_get_contents('../js/data.json');
$apt = json_decode($json);*/
$apt = 123;

#$filename='../'.$id.'.pdf';
$filename = $_SERVER['DOCUMENT_ROOT'].'/pdf/PDF_new.pdf';
$pdf = new PDF($filename);
$pdf->setFontSubsetting(false);
$pdf->SetAutoPageBreak(false);
$pdf->setFont('robotob', '',  35);

$rooms = 'Студия';
if($_GET['rooms'] != 0)
{
    $rooms = 'Комнат '.$_GET['rooms'];
}

// first page
$pdf->AddPage('L','A4');
$pdf->useTemplate($pdf->importPage(1));
$pdf->setFont('PTSerif-Regular', '',  18);
$pdf->writeHTMLCell(0, 0, -193/*X*/, 50/*Y*/, '<span color="#1b294c">Секция '.$_GET['section'].'</span>', 0, null, null, null, 'C');
$pdf->writeHTMLCell(0, 0, -193/*X*/, 106/*Y*/, '<span color="#1b294c">Этаж '.$_GET['storey'].'</span>', 0, null, null, null, 'C');
$pdf->writeHTMLCell(0, 0, -193/*X*/, 123/*Y*/, '<span color="#1b294c">Квартира №'.$_GET['number'].'</span>', 0, null, null, null, 'C');
if($_GET['section'] == 2) $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/pdf__plans/section2/'.$_GET['area'].'.png', 130, 40, '', 140, 'PNG', false, 'C', false, 300, false, false, false, 300, false, false, false);
if($_GET['section'] == 1) $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/pdf__plans/section1/'.$_GET['area'].'.png', 130, 40, '', 140, 'PNG', false, 'C', false, 300, false, false, false, 300, false, false, false);
if($_GET['section'] == 3) $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/pdf__plans/section3/'.$_GET['area'].'.png', 130, 40, '', 140, 'PNG', false, 'C', false, 300, false, false, false, 300, false, false, false);
#if($_GET['section'] == 4 || $_GET['section'] == 5) $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/pdf__plans/section4/1x.png', 130, 40, '', 140, 'PNG', false, 'C', false, 300, false, false, false, 300, false, false, false);
if($_GET['section'] == 4) $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/pdf__plans/section4/'.$_GET['area'].'.png', 110, 40, '', 100, 'PNG', false, 'C', false, 300, false, false, false, 300, false, false, false);
if($_GET['section'] == 5) $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/pdf__plans/section5/'.$_GET['area'].'.png', 110, 40, '', 100, 'PNG', false, 'C', false, 300, false, false, false, 300, false, false, false);


$price = number_format($_GET['price'], 0, '', ' ').' руб.';
$price = 'По запросу';

if($_GET['section'] == 1 || $_GET['section'] == 2 || $_GET['section'] == 3){
    $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/img/rose__wind-45.png', 33, 150, 25, 25, 'PNG', '', '', false, 300, '', false, false, 0, false, false, false);
}
if($_GET['section'] == 4 || $_GET['section'] == 5){
    $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/img/rose__wind-123.png', 33, 150, 25, 25, 'PNG', '', '', false, 300, '', false, false, 0, false, false, false);
}

$pdf->AddPage('L','A4');
$pdf->useTemplate($pdf->importPage(2));
$pdf->writeHTMLCell(0, 0, -193/*X*/, 89/*Y*/, '<span color="#1b294c">Площадь '.$_GET['area'].' м2</span>', 0, null, null, null, 'C');
$pdf->writeHTMLCell(0, 0, -193/*X*/, 106/*Y*/, '<span color="#1b294c">'.$rooms.'</span>', 0, null, null, null, 'C');
$pdf->writeHTMLCell(0, 0, -193/*X*/, 123/*Y*/, '<span color="#1b294c">'.$price.'</span>', 0, null, null, null, 'C');

if($_GET['section'] == 4 || $_GET['section'] == 5) {
    $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/'.$_GET['img'], 130, 40, '', 140, 'PNG', false, 'C', false, 100, false, false, false, 100, false, false, false);
}
else
{
    $pdf->Image($_SERVER['DOCUMENT_ROOT'].''.$_GET['img'], 130, 40, '', 140, 'PNG', false, 'C', false, 100, false, false, false, 100, false, false, false);
}

/**
 * Подсос розы ветров.
 */

if($_GET['section'] == 1 || $_GET['section'] == 2 || $_GET['section'] == 3){
    $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/img/rose__wind-45.png', 33, 150, 25, 25, 'PNG', '', '', false, 300, '', false, false, 0, false, false, false);
}
if($_GET['section'] == 4 || $_GET['section'] == 5){
    $pdf->Image($_SERVER['DOCUMENT_ROOT'].'/assets/img/rose__wind-123.png', 33, 150, 25, 25, 'PNG', '', '', false, 300, '', false, false, 0, false, false, false);
}
//Section end.

/**
 * Формируем секцию подсоса Аксонометрии.
 */

//Section end.

if ($download)
    $pdf->Output('glumilino_'.$id.'.pdf', 'D');
else
    $pdf->Output('glumilino_'.$id.'.pdf', 'I');
