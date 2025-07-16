
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hi</h1>
</body>
</html>
<?php

$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "doctors";
$conn = "";


$conn = mysqli_connect($db_server,$db_user,$db_pass,$db_name);



if($conn){
    echo "You are connected!";
}
else{
    echo "Could not connect";
}
?>