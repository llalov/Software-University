<?php

class AccountModel extends BaseModel {
    public $result;

    public function getColor() {
        $id = 1;
        $statement = self::$db->query("SELECT * FROM parameters WHERE id = $id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function register($username, $password) {

        /*XSRF-TOKEN CHECK*/
        if (!isset($_POST['xsrf-token']) ||($_POST['xsrf-token'] != $_SESSION['xsrf-token'])) {
            return false;
        }

        $statement = self::$db->prepare("SELECT username FROM users WHERE username = ?");
        $statement->bind_param("s", $username);
        $statement->execute();
        $result = $statement->get_result()->fetch_assoc();

        if ($result['username'] == $username) {
            return false;
        }


        $hash_pass = password_hash($password, PASSWORD_BCRYPT);

        $registerStatement = self::$db->prepare("INSERT INTO users (username, pass_hash) VALUES (?,?)");
        $registerStatement->bind_param("ss", $username, $hash_pass);
        $registerStatement->execute();

        return true;
    }

    public function login($username, $password) {
        /*XSRF-TOKEN CHECK*/
        if (!isset($_POST['xsrf-token']) ||($_POST['xsrf-token'] != $_SESSION['xsrf-token'])) {
            return false;
        }
        $statement = self::$db->prepare("SELECT id, username, pass_hash FROM users WHERE username = ?");
        $statement->bind_param("s", $username);
        $statement->execute();
        $result = $statement->get_result()->fetch_assoc();


        if(password_verify($password, $result['pass_hash'])) {
            return true;
        }
            return false;

    }

    public function userRole($username, $password) {
        $statement = self::$db->prepare("SELECT id, username, pass_hash, is_admin, is_editor FROM users WHERE username = ?");
        $statement->bind_param("s", $username);
        $statement->execute();
        $result = $statement->get_result()->fetch_assoc();


        if(password_verify($password, $result['pass_hash'])) {
            if($result['is_admin'] == true) {
                return 'admin';
            }
            elseif ($result['is_editor'] == true) {
                return 'editor';
            }
            else {
                return 'user';
            }
        }
        return false;
    }

}