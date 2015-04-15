<?php
    echo '<form method="post"><input type="text" name="firstName" placeholder="Name.."><br><input type="text" name="age" placeholder="Age.."><br><input type="radio" name="gender" value="male"><label for="male">Male</label><br><input type="radio" name="gender" value="female"><label for="female">Female</label><br><input type="submit"  name="submit"></form>';

if (isset($_POST['submit'])) {
    echo 'My name is '.htmlspecialchars($_POST['firstName']).'. I am '.htmlspecialchars($_POST['age']).' years old. I am '.$_POST['gender'];
}

