<?php
if (isset($_SESSION['messages'])) {
    echo '<div style="padding-left: 5%; padding-right: 5%">';
    foreach ($_SESSION['messages'] as $msg) {
        echo '<div class="'.$msg['type'].'" role="alert">';
        echo htmlspecialchars($msg['text']);
        echo '</div>';
    }
    echo '</div>';

    unset($_SESSION['messages']);
}