<?php include_once"customViewHelpers/formHelpers.php"; ?>

    <h1 style="margin-left: 5%">Update User</h1>
<div style="margin-left: 5%">
<?= startForm("/manageUsers/update", "post") ?>
<?= label("updateId", "Id")  ?><br>
<?= textField("updateId","updateId")  ?><br>
Is Admin<br> <?= dropdown("updateIsAdmin",array(
    [
        "value" => 0,
        "placeholder" => "No"
    ],
    [
        "value" => 1,
        "placeholder" => "Yes"
    ]
)) ?><br>
Is Editor<br><?= dropdown("updateIsEditor",array(
    [
        "value" => 0,
        "placeholder" => "No"
    ],
    [
        "value" => 1,
        "placeholder" => "Yes"
    ]
)) ?>
<br>
<br>
<?= submitButton("Update User") ?>
<?= endForm() ?>
</div>