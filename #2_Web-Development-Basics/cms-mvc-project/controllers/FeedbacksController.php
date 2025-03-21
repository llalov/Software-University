<?php

class FeedbacksController extends BaseController {
    private $db;

    public function onInit() {
        $this->title = "Feedback";
        $this->db = new FeedbacksModel();
    }

    public function index() {
        $this->authorize();
        $this->feedbacks = $this->db->getAll();
        $this->backgroundColor = $this->db->getColor();
        $this->renderView();
    }

    public function create() {
        $this->authorize();
        if ($this->isPost) {
            $username = htmlspecialchars($_POST['Name']);
            $feedback = htmlspecialchars($_POST['Feedback']);
            if ($this->db->createFeedback($username, $feedback)) {
                $this->addInfoMessage("Your feedback was submitted!");
                $this->redirect('torrents');
            }else {
                $this-> addErrorMessage("Error adding feedback.");
            }
        }
        $this->renderView(__FUNCTION__);
    }
}