<?php

class FeedbacksModel extends BaseModel {

    public function getColor() {
        $id = 1;
        $statement = self::$db->query("SELECT * FROM parameters WHERE id = $id");
        return $statement->fetch_all(MYSQLI_ASSOC);
    }

        public function createFeedback($username, $feedback) {
        if($username == '') {
            return false;
        }

        /*XSRF-TOKEN CHECK*/
           /* if (!isset($_POST['xsrf-token']) ||($_POST['xsrf-token'] != $_SESSION['xsrf-token'])) {
                return false;
            }*/

        $statement = self::$db->prepare(
            "INSERT INTO feedbacks VALUES(NULL, ?, ?)");
        $statement->bind_param("ss", $username, $feedback);
        //"ssi" means: string, string, integer.
        $statement->execute();
        return $statement->affected_rows > 0;
    }
}