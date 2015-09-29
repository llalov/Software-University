<?php
$number = 247;

if ($number > 101) {
    for ($k = 102; $k <= $number; $k++) {
        $numberToStr = (string)$k;
        $isUnique = true;
        for ($i = 0; $i < strlen($numberToStr) - 1; $i++) {
            for ($j = 0; $j < strlen($numberToStr) - 1; $j++) {
                $position = ($i + 1) + $j;
                if ($position > strlen($numberToStr) - 1) {
                    break;
                } else if ($numberToStr[$i] === $numberToStr[$position]) {
                    $isUnique = false;
                    break;
                }
            }
        }
        if ($isUnique === true) {
            echo $numberToStr;
            if ($k != $number) {
                echo ', ';
            }
        }
    }
} else {
    echo 'no';
}