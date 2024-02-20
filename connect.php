<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$address = $_POST['address'];
	$number = $_POST['number'];
	$quantity1 = $_POST['quantity1'];
    $quantity2 = $_POST['quantity2'];
    $quantity3 = $_POST['quantity3'];

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(firstName, lastName, email, address, number, quantity1, quantity2,quantity3) values(?, ?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssiiii", $firstName, $lastName, $email, $address, $number,$quantity1, $quantity2, $quantity3);
		$execval = $stmt->execute();
		echo $execval;
		$stmt->close();
		$conn->close();
		header("Location: form.html");
		exit();
	}
?>