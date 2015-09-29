<link rel="stylesheet" type="text/css" href="styles.css" />
<?php



    echo '<form method="get">First name<br><input type="text" name="firstName"><br>Telephone<br><input type="text" name="tel"><br>Age<br><input type="text" name="age"><br>Address<br><input type="text" name="address"><br><input type="submit" name="submit"></form>';


    if (isset($_GET['submit'])) {
        echo "<table id='table'><tr><td class='title'>Name</td><td class='value'>" . htmlspecialchars($_GET['firstName']) . "</td></tr><td  class='title'>Phone number</td><td class='value'>" . htmlspecialchars($_GET['tel']) . "</td><tr><td  class='title'>Age</td><td class='value'>" . htmlspecialchars($_GET['age']) . "</td></tr><tr><td class='title'>Address</td><td class='value'>" . htmlspecialchars($_GET['address']) . "</td></table>";
    }


