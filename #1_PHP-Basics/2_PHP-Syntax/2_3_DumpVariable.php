<?php

$input = array(1,2,3);//'hello' 15 1.234 (object)[2,34]

    if (gettype($input) === 'integer' || gettype($input) === 'double') {
        echo var_dump($input);
    }
    else {
        echo gettype($input);
    }

