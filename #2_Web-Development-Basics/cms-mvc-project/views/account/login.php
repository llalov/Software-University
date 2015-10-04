<?php include_once"customViewHelpers/formHelpers.php"; ?>

<h1>Login</h1>
<?= startForm("/account/login", "post") ?>
    <?= label("username", "Username")  ?>
    <?= textField("username","username")  ?><br>
    <?= label("password", "Password") ?>
    <?= passField("password", "password") ?><br>
    <?= submitButton("Login") ?>
    <a href="/account/register">Go register.</a>
<?= endForm() ?>
