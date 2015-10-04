<?php include_once"customViewHelpers/formHelpers.php";
$_SESSION['xsrf-token'] = uniqid();
?>

    <h1>Register</h1>
<?= startForm("/account/register", "post") ?>
<?= label("username", "Username")  ?>
<?= textField("username","username")  ?><br>
<?= label("password", "Password") ?>
<?= passField("password", "password") ?><br>
<input type="hidden" name="xsrf-token" value="<?= $_SESSION['xsrf-token'] ?>"/>
<?= submitButton("Register") ?>
    <a href="/account/login">Go login.</a>
<?= endForm() ?>