<?php include_once"customViewHelpers/formHelpers.php";
    $_SESSION['xsrf-token'] = uniqid();
?>
<h1>Add new torrent</h1>.

<?= startForm("/torrents/create", "post") ?>
    Name: <?= textField('torrent_name') ?><br>
    Type: <?= dropdown("torrent_type",array(
        [
            "value" => "movie",
            "placeholder" => "Movie"
        ],
        [
            "value" => "audio",
            "placeholder" => "Audio"
        ],
        [
            "value" => "picture",
            "placeholder" => "Picture"
        ]
    )) ?><br>
    Size: <?= textField('torrent_size') ?><br>
    <input type="hidden" name="xsrf-token" value="<?= $_SESSION['xsrf-token'] ?>"/>
    <?= submitButton('Create') ?>

<?= endForm() ?>
