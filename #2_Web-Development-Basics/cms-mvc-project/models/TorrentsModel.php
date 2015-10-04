<?php

class TorrentsModel extends BaseModel {
    public function getAll() {
        $statement = self::$db->query("SELECT * FROM torrents ORDER BY id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getColor() {
    $id = 1;
    $statement = self::$db->query("SELECT * FROM parameters WHERE id = $id");
    return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getAllForms() {
        $statement = self::$db->query("SELECT * FROM forms ORDER BY id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function createTorrent($name, $type, $size) {
        if($name == '') {
            return false;
        }

        /*XSRF-TOKEN CHECK*/
        if (!isset($_POST['xsrf-token']) ||($_POST['xsrf-token'] != $_SESSION['xsrf-token'])) {
            return false;
        }

        $statement = self::$db->prepare(
            "INSERT INTO torrents VALUES(NULL, ?, ?, ?)");
        $statement->bind_param("ssi", $name, $type, $size);
        //"ssi" means: string, string, integer.
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function deleteTorrent($id) {

        $statement = self::$db->prepare(
            "DELETE FROM torrents WHERE id = ?");
        $statement->bind_param("i", $id);
        //"i" means: integer.
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function deleteForm($id) {
        $statement = self::$db->prepare(
            "DELETE FROM forms WHERE id = ?");
        $statement->bind_param("i", $id);
        //"i" means: integer.
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function changeBackground($hexColor) {
        $id = 1;
        $statement = self::$db->prepare(
            "UPDATE parameters SET val = ?  WHERE id = ? ");
        $statement->bind_param("si",$hexColor ,$id);
        //"i" means: integer.
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function createForm($html) {

        $statement = self::$db->prepare(
            "INSERT INTO forms VALUES(NULL, ?)");
        $statement->bind_param("s", $html);

        $statement->execute();
        return $statement->affected_rows > 0;
    }

}

