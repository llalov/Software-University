<h1 style="margin-left: 5%">Manage Users</h1>
<div class="panel panel-default" style="width: 90% !important; margin: auto">
    <div class="panel-body">
    </div>
    <table class="table">
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Admin</th>
            <th>Editor</th>
        </tr>
        <?php
        foreach ($this->users as $user ) : ?>
            <tr>
                <td><?= htmlspecialchars($user['id'])?></td>
                <td><?= htmlspecialchars($user['username'])?></td>
                <td><?= htmlspecialchars($user['is_admin'])?></td>
                <td><?= htmlspecialchars($user['is_editor'])?></td>
                <?php if ($this->userRole == 'admin') : ?>
                    <td><a  class="btn btn-sm btn-danger" href="/manageUsers/delete/<?= $user['id']?>">Remove User</a></td>
                <?php endif ?>
            </tr>
        <?php  endforeach ?>
    </table>
</div>

<?php if ($this->userRole == 'admin') : ?>

    <a style="margin-left: 5%" class="btn btn-sm btn-success" href="/manageusers/update">Update User</a>
<?php endif ?>
<h1 style="margin-left: 5%">Users Feeedbacks</h1>
<div class="panel panel-default" style="width: 90% !important; margin: auto">
    <div class="panel-body">
    </div>

    <table class="table">
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Feedback</th>
        </tr>
        <?php
        foreach ($this->feedbacks as $feedback ) : ?>
            <tr>
                <td><?= htmlspecialchars($feedback['id'])?></td>
                <td><?= htmlspecialchars($feedback['username'])?></td>
                <td><?= htmlspecialchars($feedback['feedback'])?></td>
            </tr>
        <?php  endforeach ?>
    </table>
</div>