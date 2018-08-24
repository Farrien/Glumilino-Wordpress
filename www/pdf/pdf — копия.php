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

$color = '#008dbc';
$color1 = '#738999';

if ($apt->tc != '0'){
    $cost = number_format($apt->tc, 0, ',', ' ');
}
else{
    $cost = 'По запросу';
}

$total_cost = '<font color="'.$color.'">'.$cost.'</font>';

// first page
$pdf->AddPage('L','A4');
$pdf->useTemplate($pdf->importPage(1));
//$pdf->setFont('robotob', '',  35);

#$pdf->Image('../'.$_GET['img'].'.png', 100, 30,    0, 133, 'PNG', '', '', false, 150, '', false, false, 0, false, false, false);
$pdf->Image($_GET['img'], 'C', 20, '', 140, 'PNG', false, 'C', false, 100, 'C', false, false, 100, false, false, false);


$pdf->setFont('PTSerif-Regular', '',  19);
$pdf->writeHTMLCell(0, 0, 205/*X*/, 186/*Y*/, '<font color="#ffffff">'.number_format($_GET['price'], 0, '', ' ').' Р</font>', 0, null, null, null, 'C');

$pdf->setFont('PTSerif-Regular', '',  19);
$pdf->writeHTMLCell(0, 0, 90/*X*/, 186/*Y*/, '<font color="#ffffff">'.$_GET['area'].'</font>', 0, null, null, null, 'C');

$pdf->setFont('PTSerif-Regular', '',  19);
$pdf->writeHTMLCell(0, 0, 140/*X*/, 186/*Y*/, '<font color="#ffffff">'.$_GET['rooms'].'</font>', 0, null, null, null, 'C');


$pdf->setFont('PTSerif-Regular', '',  19);
$pdf->writeHTMLCell(0, 0, 220/*X*/, 21/*Y*/, '<font color="#000000">'.$_GET['number'].'</font>', 0, null, null, null, 'C');

$pdf->setFont('PTSerif-Regular', '',  19);
$pdf->writeHTMLCell(0, 0, 176/*X*/, 21/*Y*/, '<font color="#000000">'.$_GET['storey'].'</font>', 0, null, null, null, 'C');

$pdf->setFont('PTSerif-Regular', '',  19);
$pdf->writeHTMLCell(0, 0, 140/*X*/, 21/*Y*/, '<font color="#000000">'.$_GET['section'].'</font>', 0, null, null, null, 'C');



if ($download)
    $pdf->Output('glumilino_'.$id.'.pdf', 'D');
else
    $pdf->Output('glumilino_'.$id.'.pdf', 'I');
