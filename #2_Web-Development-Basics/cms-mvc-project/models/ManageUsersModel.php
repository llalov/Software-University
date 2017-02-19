<?php

class ManageUsersModel extends BaseModel {

    public function getAll() {
        $statement = self::$db->query("SELECT * FROM users ORDER BY id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getAllFeedbacks() {
        $statement = self::$db->query("SELECT * FROM feedbacks ORDER BY id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function getColor() {
        $id = 1;
        $statement = self::$db->query("SELECT * FROM parameters WHERE id = $id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

    public function deleteUser($id) {
        $statement = self::$db->prepare(
            "DELETE FROM users WHERE id = ?");
        $statement->bind_param("i", $id);
        //"i" means: integer.
        $statement->execute();
        return $statement->affected_rows > 0;
    }

    public function updateUser($id, $isAdmin, $isEditor) {

        $statement = self::$db->prepare("SELECT id FROM users WHERE id = ?");
        $statement->bind_param("i", $id);
        $statement->execute();
        $result = $statement->get_result()->fetch_assoc();

        if ($result['id'] != $id) {
            return false;
        }

        $updateStatement = self::$db->prepare("UPDATE users SET is_admin = ? ,is_editor = ? WHERE id = ? ");
        $updateStatement->bind_param("iii", $isAdmin, $isEditor, $id);
        $updateStatement->execute();

        return true;

        /*return $updateStatement->affected_rows > 0;*/

    }

}