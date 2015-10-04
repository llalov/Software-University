<?php include_once"customViewHelpers/formHelpers.php";
    $_SESSION['xsrf-token'] = uniqid();
?>

<h1>Login</h1>
<?= startForm("/account/login", "post") ?>
    <?= label("username", "Username")  ?><br>
    <?= textField("username","username")  ?><br>
    <?= label("password", "Password") ?><br>
    <?= passField("password", "password") ?><br>
    <input type="hidden" name="xsrf-token" value="<?= $_SESSION['xsrf-token'] ?>"/><br>
    <?= submitButton("Login") ?>
    <a href="/account/register">Go register.</a>
<?= endForm() ?>
