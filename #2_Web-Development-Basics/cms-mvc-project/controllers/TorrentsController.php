<?php

class TorrentsController extends BaseController {
    private $db;

    public function onInit() {
        $this->title = "Torrents";
        $this->db = new TorrentsModel();
    }

    public function index() {
        $this->authorize();
        $this->torrents = $this->db->getAll();
        $this->backgroundColor = $this->db->getColor();
        $this->forms = $this->db->getAllForms();
        $this->renderView();
    }

    public function create() {
        $this->authorize();
        $this->isAdmin();
        if ($this->isPost) {
            $name = $_POST['torrent_name'];
            $type = $_POST['torrent_type'];
            $size = $_POST['torrent_size'];
            if ($this->db->createTorrent($name, $type, $size)) {
                $this->addInfoMessage("Torrent added.");
                $this->redirect('torrents');
            }else {
                $this-> addErrorMessage("Error adding torrent.");
            }
        }
        $this->renderView(__FUNCTION__);
    }

    public function delete($id) {
        $this->authorize();
        $this->isAdmin();
        if($this->db->deleteTorrent($id)) {
            $this->addInfoMessage("Torrent deleted.");
        }
        else {
            $this-> addErrorMessage("Cannot delete torrent.");
        }
        $this->redirect('torrents');
    }

    public function delForm($id) {
        $this->authorize();
        $this->isAdmin();
        if($this->db->deleteForm($id)) {
            $this->addInfoMessage("Form deleted.");
        }
        else {
            $this-> addErrorMessage("Cannot delete form.");
        }
        $this->redirect('torrents');
    }

    public function chngBackgr() {
        $this->authorize();
        $this->isAdmin();
        if ($this->isPost) {
            $color = $_POST['backgroundColor'];
            if ($this->db->changeBackground($color)) {
                $this->addInfoMessage("Background changed.");
            } else {
                $this->addErrorMessage("Error changing background.");
            }
            $this->redirect('torrents');
        }
    }

    public function crtFrm() {
        $this->authorize();
        $this->isAdmin();
        if ($this->isPost) {
            $html = '<form';
            if($_POST['formAction'] != null && $_POST['formAction'] !='') {
                $html .= ' action="'.$_POST['formAction'].'"';
            }
            else {
                $html .= ' action=""';
            }

            $html .= ' method="'.$_POST['formMethod'].'">';

            if(isset($_POST['textField'])) {
                $textFieldName = $_POST['textField'];
                $html.= $textFieldName.' <input type="text" name="'.$textFieldName.'"><br>';
            }
            if(isset($_POST['checkbox'])) {
                $checkboxName = $_POST['checkbox'];
                if($checkboxName != null) {
                $html.= $checkboxName.' <input type="checkbox" name="'.$checkboxName.'"><br>';
                }
            }
            if(isset($_POST['radioButton'])) {
                $radioButtonName = $_POST['radioButton'];
                if($radioButtonName != null) {
                $html .= $radioButtonName.' <input type="radio" name="'.$radioButtonName.'"><br>';
                }
            }
            if(isset($_POST['textArea'])) {
                $textAreaName = $_POST['textArea'];
                $html .= $textAreaName.' <br><textarea rows="4" cols="50" name="'.$textAreaName.'"></textarea><br>';
            }
            $html .= '<input type="submit" value="'.$_POST['submitButton'].'">';
            $html .= '</form>';
            if ($this->db->createForm($html)) {
                $this->addInfoMessage("Form created.");
            } else {
                $this->addErrorMessage("Error error creating form.");
            }

            $this->redirect('torrents');
        }
    }
}