<?php include_once"customViewHelpers/formHelpers.php"; ?>

    <h1>Update User</h1>
<?= startForm("/manageUsers/update", "post") ?>
<?= label("updateId", "Id")  ?>
<?= textField("updateId","updateId")  ?><br>
Is Admin: <?= dropdown("updateIsAdmin",array(
    [
        "value" => 0,
        "placeholder" => "No"
    ],
    [
        "value" => 1,
        "placeholder" => "Yes"
    ]
)) ?><br>
Is Editor: <?= dropdown("updateIsEditor",array(
    [
        "value" => 0,
        "placeholder" => "No"
    ],
    [
        "value" => 1,
        "placeholder" => "Yes"
    ]
)) ?><br>
<?= submitButton("Update User") ?>
<?= endForm() ?>
