<?php

class ManageUsersController extends BaseController {
    private $db;

    function onInit() {
        $this->db = new ManageUsersModel();
    }

    public function index() {
        $this->authorize();
        $this->isAdmin();
        $this->users = $this->db->getAll();
        $this->backgroundColor = $this->db->getColor();
        $this->feedbacks = $this->db->getAllFeedbacks();
        $this->renderView();

    }

    public function delete($id) {
        $this->authorize();
        $this->isAdmin();
        if($this->db->deleteUser($id)) {
            $this->addInfoMessage("User deleted.");
        }
        else {
            $this-> addErrorMessage("Cannot delete user.");
        }
        $this->redirect('manageUsers');
    }

    public function update() {
        $this->authorize();
        $this->isAdmin();
        $this->backgroundColor = $this->db->getColor();
        if ($this->isPost) {
            $id = htmlspecialchars($_POST['updateId']);
            $isAdmin = $_POST['updateIsAdmin'];
            $isEditor = $_POST['updateIsEditor'];
            $isUpdated = $this->db->updateUser($id, $isAdmin, $isEditor);
            if($isUpdated) {
                $this->addInfoMessage("User successfully updated.");
                $this->redirect("manageUsers", "index");
            }
            else {
                $this->addErrorMessage("Update failed.");
            }
        }
        $this->renderView(__FUNCTION__);
    }
}