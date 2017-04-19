  <?php
  
  $servername = 'rdbms.strato.de';
$username = 'U2936467';
$password = 'xs4mysql';
$dbname = 'DB2936467';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli($servername, $username, $password, $dbname);

$data = json_decode(file_get_contents("php://input"));
$array = json_decode(json_encode($data), true);

$bprice = $array['username']; 
$blanguage = $array['password']; 



//$result = $conn->query("SELECT * FROM Person");
$result = $conn->query("SELECT * FROM Person WHERE username='" . $bprice . "' AND password='" . $blanguage . "'");


$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Username":"'  . $rs["username"] . '",';
    $outp .= '"Password":"'   . $rs["password"]        . '"}';
}
if(!empty($outp)){
$outp = '{ "Person":[ '.$outp.' ] }';
}
$conn->close();

echo($outp);
?>
