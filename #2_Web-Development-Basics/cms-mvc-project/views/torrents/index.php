<?php include_once"customViewHelpers/formHelpers.php";
    $_SESSION['xsrf-token'] = uniqid(); ?>
<h1 style="margin-left: 5%"><?= htmlspecialchars($this->title)?></h1>

<div class="panel panel-default" style="width: 90% !important; margin: auto">
  <!-- Default panel contents -->
  <div class="panel-body">
  </div>

  <table class="table">
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
        <td><a href="">Download</a></td>
        <?php if ($this->userRole == 'admin') : ?>
            <td><a  class="btn btn-sm btn-danger" href="/torrents/delete/<?= $torrent['id']?>">DELETE</a></td>
        <?php endif ?>
    </tr>
<?php  endforeach ?>
  </table>
</div>

<?php if ($this->userRole == 'admin') : ?>
    <a style="margin-left: 5%" class="btn btn-sm btn-success" href="/torrents/create">Add Torrent</a>
    <br>
    <hr>
<?php endif ?>
<br>
<br>

    <?php
    foreach ($this->forms as $form ) : ?>
            <div style="margin-left: 5%"><?= $form['html']?></div>
            <?php if ($this->userRole == 'admin') : ?>
            <a style="margin-left: 5%"  class="btn btn-sm btn-danger" href="/torrents/delForm/<?= $form['id']?>">DELETE FORM</a>
            <br>
            <?php endif ?>
        </tr>
    <?php  endforeach ?>

<?php if ($this->userRole == 'admin') : ?>
    <hr>
    <div style="display: inline-block; float: right; margin-right: 5%">
    <br>Change Backgroud <input type="checkbox" id="checkBoxBackground" onclick="check('checkBoxBackground', 'background')"/>
    <?= startForm("/torrents/chngBackgr", "post","background") ?>
        <input type="color" name="backgroundColor" id="backgroudColor"/><br>
        <?= submitButton('Change color') ?>
    <?= endForm() ?>
    </div>
    <div style="margin-left: 5%">Add Form <input type="checkbox" id="checkBoxForm" onclick="check('checkBoxForm', 'form')"/>
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