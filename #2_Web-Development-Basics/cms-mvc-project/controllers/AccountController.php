<?php

class AccountController extends BaseController {

    private $db;

    public function onInit() {
        $this->db = new AccountModel();

    }

    public function register() {
        $this->backgroundColor = $this->db->getColor();
        if ($this->isPost) {
            $username = htmlspecialchars($_POST['username']);
            if(strlen($username) < 3 || $username == null) {
                $this->addErrorMessage("Username is invalid");
                $this->redirect("account", "register");
            }
            $password = htmlspecialchars($_POST['password']);
            $isRegistered = $this->db->register($username, $password);
            if($isRegistered) {
                 $_SESSION['username'] = $username;
                $this->addInfoMessage("Successful registration");
                $this->redirect("torrents", "index");
            }
            else {
                $this->addErrorMessage("Register failed");
            }

        }

        $this->renderView(__FUNCTION__);
    }

    public function login() {
        $this->backgroundColor = $this->db->getColor();
        if($this->isPost) {
            $username = htmlspecialchars($_POST['username']);
            $password = htmlspecialchars( $_POST['password']);
            $isLoggedIn = $this->db->login($username, $password);
            $userRole = $this->db->userRole($username, $password);
            if ($isLoggedIn) {
                $_SESSION['username'] = $username;
                $_SESSION['userRole'] = $userRole;
                $this->addInfoMessage("Successful login");
                return $this->redirect("torrents", "index");
            }
            else {
                $this->addErrorMessage("Unsuccessful login");
            }
        }
        return $this->renderView(__FUNCTION__);
    }

    public function logout() {
        $this->authorize();
        unset ($_SESSION['username']);
        unset ($_SESSION['userRole']);
        $this->addInfoMessage("Successful logout");
        $this->redirectToUrl("/");
    }
}