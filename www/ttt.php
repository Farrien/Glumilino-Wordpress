<?PHP
echo phpinfo();


$link = mysqli_connect('31.31.201.83', 'gosstroy_local', '6U1d0T4q');
if (!$link) {
    die('Error connection: ' . mysql_error());
}
echo 'success connection';

$db_selected = mysqli_select_db($link, 'glumilino__temp');
if (!$db_selected) {
    die ('Error DB: ' . mysql_error());
}

mysql_close($link);
?>