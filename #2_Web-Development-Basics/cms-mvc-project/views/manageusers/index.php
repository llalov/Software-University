<h1>Manage Users</h1>
<table>
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
                <td><a href="/manageUsers/delete/<?= $user['id']?>">[Remove User]</a></td>
            <?php endif ?>
        </tr>
    <?php  endforeach ?>
</table>
<?php if ($this->userRole == 'admin') : ?>
    <a href="/manageusers/update">[Update User]</a>
<?php endif ?>
<table>
    <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Feedback</th>
    </tr>
    <h1>Users Feeedbacks</h1>
<?php
foreach ($this->feedbacks as $feedback ) : ?>
<tr>
    <td><?= htmlspecialchars($feedback['id'])?></td>
    <td><?= htmlspecialchars($feedback['username'])?></td>
    <td><?= htmlspecialchars($feedback['feedback'])?></td>
</tr>
<?php  endforeach ?>
</table>