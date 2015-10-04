<?php include_once"customViewHelpers/formHelpers.php";
    $_SESSION['xsrf-token'] = uniqid(); ?>
<h1><?= htmlspecialchars($this->title)?></h1>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Type</th>
        <th>MB</th>
        <th></th>
    </tr>
    <?php
        foreach ($this->torrents as $torrent ) : ?>
            <tr>
                <td><?= htmlspecialchars($torrent['id'])?></td>
                <td><?= htmlspecialchars($torrent['name'])?></td>
                <td><?= htmlspecialchars($torrent['type'])?></td>
                <td><?= htmlspecialchars($torrent['size'])?></td>
                <td><a href="">[Download]</a></td>
                <?php if ($this->userRole == 'admin') : ?>
                <td><a href="/torrents/delete/<?= $torrent['id']?>">[DELETE]</a></td>
                <?php endif ?>
            </tr>
      <?php  endforeach ?>
</table>

<?php if ($this->userRole == 'admin') : ?>
    <a href="/torrents/create">[Add Torrent]</a>
    <br>
    <hr>
<?php endif ?>
<br>
<br>
<br>
<br>
    <?php
    foreach ($this->forms as $form ) : ?>
            <div><?= $form['html']?></div>
            <?php if ($this->userRole == 'admin') : ?>
            <a href="/torrents/delForm/<?= $form['id']?>">[DELETE FORM]</a>
            <br>
            <?php endif ?>
        </tr>
    <?php  endforeach ?>

<?php if ($this->userRole == 'admin') : ?>
    <hr>
    <div style="display: inline-block; float: right">
    <br>Change Backgroud <input type="checkbox" id="checkBoxBackground" onclick="check('checkBoxBackground', 'background')"/>
    <?= startForm("/torrents/chngBackgr", "post","background") ?>
        <input type="color" name="backgroundColor" id="backgroudColor"/><br>
        <?= submitButton('Change color') ?>
    <?= endForm() ?>
    </div>
    <div style="display: block">
    Add Form <input type="checkbox" id="checkBoxForm" onclick="check('checkBoxForm', 'form')"/>
    <?= startForm("/torrents/crtFrm", "post","form") ?>
    Form Action: <?= textField("formAction", "formAction") ?><br>
    Form Method:  <?= dropdown("formMethod",array(
        [
            "value" => 'post',
            "placeholder" => "Post"
        ],
        [
            "value" => 'get',
            "placeholder" => "Get"
        ]
    )) ?><br>
    Text Field: <input type="checkbox" id="checkBoxTextFiled" onclick="check('checkBoxTextFiled', 'textField')"/>
    <input type="text" name="textField" id="textField" placeholder="Name of field here"/><br>
    Checkbox : <input type="checkbox" id="checkBoxFiled" onclick="check('checkBoxFiled', 'checkbox')"/>
    <input type="text" name="checkbox" id="checkbox" placeholder="Name of checkbox here"/><br>
    Radio button : <input type="checkbox" id="checkBoxRadioButton" onclick="check('checkBoxRadioButton', 'radioButton')"/>
    <input type="text" name="radioButton" id="radioButton" placeholder="Name of radio button here"/><br>
    Text area : <input type="checkbox" id="checkBoxTextArea" onclick="check('checkBoxTextArea', 'textArea')"/>
    <input type="text" name="textArea" id="textArea" placeholder="Name of text area here"/><br>
    Submit button: <input type="text" name="submitButton" id="submitButton" placeholder="Value of submit button here"/><br>
        <br><?= submitButton('Create Form') ?>
    <?= endForm() ?>
    </div>
<?php endif ?>