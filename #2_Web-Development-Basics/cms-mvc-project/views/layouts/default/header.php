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
            <ul>
                <li>
                    <a href="/">[Home]</a>
                </li>
                <?php if ($this->userRole != 'admin') : ?>
                <li>
                    <a href="/torrents">[Torrents]</a>
                </li>
                <?php endif ?>
                <?php if ($this->userRole == 'admin') : ?>
                    <li>
                        <a href="/torrents">[Manage Content]</a>
                    </li>
                    <li>
                        <a href="/manageusers">[Manage Users]</a>
                    </li>
                <?php endif ?>
            </ul>
            <?php if ($this->isLoggedIn) : ?>
            <div id="logged-in-info">
                <span>Hello <?php echo $_SESSION['username'];?></span>
                <form action="/account/logout"><input type="submit" value="Logout"/></form>
            </div>
           <?php endif ?>
        </header>

    <?php include('messages.php');
