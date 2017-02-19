<?php

class HomeController extends BaseController {
    private $db;

    public function onInit() {
        $this->title = "Home";
        $this->db = new TorrentsModel();
    }

    public function index() {
        $this->backgroundColor = $this->db->getColor();
        $this->renderView(__FUNCTION__);
    }

}