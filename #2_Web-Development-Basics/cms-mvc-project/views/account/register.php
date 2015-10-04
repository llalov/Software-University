<?php include_once"customViewHelpers/formHelpers.php"; ?>

    <h1>Register</h1>
<?= startForm("/account/register", "post") ?>
<?= label("username", "Username")  ?>
<?= textField("username","username")  ?><br>
<?= label("password", "Password") ?>
<?= passField("password", "password") ?><br>
<?= submitButton("Register") ?>
    <a href="/account/login">Go login.</a>
<?= endForm() ?>