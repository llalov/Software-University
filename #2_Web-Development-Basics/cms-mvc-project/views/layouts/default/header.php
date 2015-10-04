<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="/content/styles.css"/>
        <link rel="stylesheet" href="/content/bootstrap.min.css" />
        <title>
            <?php if(isset($this->title)) echo htmlspecialchars($this->title) ?>
        </title>
        <script>
            function check (checkboxId, element) {
                if (document.getElementById(checkboxId).checked) {
                    paragraph = document.getElementById(element);
                    paragraph.style.visibility = "visible";
                }
                else {
                    paragraph.style.visibility = "hidden";
                }
            }
        </script>
        <style>
            body {
                background-color: <?= $this->backgroundColor[0]['val'] ?> ;
            }
        </style>
    </head>
    <body>
        <header>
            <div class="panel panel-default">
                <div class="panel-body">
            <ul class="nav nav-pills">
                <li role="presentation" class="active">
                    <a href="/">Home</a>
                </li>
                <?php if ($this->userRole != 'admin') : ?>
                <li role="presentation" class="active">
                    <a href="/torrents">Torrents</a>
                </li>
                <?php endif ?>
                <?php if ($this->userRole == 'admin') : ?>
                    <li role="presentation" class="active">
                        <a href="/torrents">Manage Content</a>
                    </li>
                    <li role="presentation" class="active">
                        <a href="/manageusers">Manage User</a>
                    </li>
                <?php endif ?>
            </ul>
            <?php if ($this->isLoggedIn) : ?>
            <div id="logged-in-info">
                <span>Hello <?php echo $_SESSION['username'];?></span>
                <form action="/account/logout"><input type="submit" value="Logout"/></form>
            </div>
           <?php endif ?>
                    </div>
            </div>
        </header>

    <?php include('messages.php');
