<?php
$myFile= "input.txt";
$data=file($myFile);
function getResultingFrequency($data) {

    for($i = 0; $i < count($data); $i++) {
        if(trim($data[$i]) =='"product",'){
            $value = substr(trim($data[$i+3]),1,strlen(trim($data[$i+3]))-3);
            echo $value."\n";
        }
    }
}
getResultingFrequency($data);