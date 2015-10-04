<?php

    function radioButton($name, $value,$placeholder) {
        $code = '<input type="radio" name="'.$name.'" value="'.$value.'">'.$placeholder.'<br>';
        return $code;
    }

    function submitButton($value) {
        $code = '<input type="submit" value="'.$value.'">';
        return $code;
    }

    function checkbox($name, $value,$placeholder, $id = null, $onclick = null) {
        $code = '<input type="checkbox" name="'.$name.'" value="'.$value.'">'.$placeholder.'<br>';
        return $code;
    }

    function dropdown($name, $parameters) {
        $count = count($parameters);
        $code = '<select name="'.$name.'">';
        for($i =0; $i< $count; $i++) {
            $value = $parameters[$i]['value'];
            $placeholder = $parameters[$i]['placeholder'];
         $code .= '<option value="'.$value.'">'.$placeholder.'</option>';
        }
        $code .= '</select>';

        return $code;
    }

    function label($for, $name) {
        $code = '<label for="'.$for.'">'.$name.'</label>';
        return $code;
    }

    function startForm($action ='', $method, $id = null) {
        $code = '<form action="'.$action.'" method="'.$method.'">';
        if($id != null) {
            $code = '<form action="'.$action.'" method="'.$method.'" id="'.$id.'">';
        }
        return $code;
    }

    function endForm() {
        $code = '</form>';
        return $code;
    }

    function textField($name, $id = null) {
        $code = '<input type="text" name="'.$name.'">';
        if($id != null) {
            $code = '<input type="text" id="'.$id.'" name="'.$name.'">';
        }
        return $code;
    }

    function passField($name, $id = null) {
        $code = '<input type="password" name="'.$name.'">';
        if($id != null) {
            $code = '<input type="password" id="'.$id.'" name="'.$name.'">';
        }
        return $code;
    }

    function hiddenField ($name, $value) {
        $code = '<input type="hidden" name="'.$name.'" value="'.$value.'">';
        return $code;
    }

    function textArea($rows, $cols) {
        $code = '<textarea rows="'.$rows.'" cols="'.$cols.'"></textarea>';
        return $code;
    }


