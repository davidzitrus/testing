  <?php
$servername = 'rdbms.strato.de';
$username = 'U2936467';
$password = 'xs4mysql';
$dbname = 'DB2936467';

$data = json_decode(file_get_contents("php://input"));

$array = json_decode(json_encode($data), true);

$bname=$array['vorname'];
$bauthor = $array['nachname']; 
$bprice = $array['username']; 
$blanguage = $array['password']; 

$conn = new mysqli($servername, $username, $password, $dbname);

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

// Perform queries 
mysqli_query($conn,"INSERT INTO `Person`(`vorname`, `nachname`, `username`, `password`) VALUES('".$bname."', '".$bauthor."', '".$bprice."', '".$blanguage."')");


echo($outp);
mysqli_close($conn);
?>
