<?php
require_once('model.php');
require_once('view.php');

$action_array=explode(".php",$_SERVER['REQUEST_URI']);
$action=$action_array[1];


switch($action){
    case "/articulo":
        render($diccionario,'templates/template00.html');
        break;
    case "/foto":
        render($diccionario2,'templates/template01.html');
        break; 
}

?>