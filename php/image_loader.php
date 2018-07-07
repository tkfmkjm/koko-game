<?php
// Automating OGP
// $current_dir = basename(__FILE__);
// $str = $current_dir;
// echo $str;
//
// $associative_array = debug_backtrace();
// //ファイル名を出力
// $hooo = $associative_array[0]["file"];
// echo dirname($hooo);

// $dir_from_ogp = dirname($_SERVER["SCRIPT_NAME"]); //Directory calling from (/play/---)
// echo "<meta name=\"twitter:image\" content=\"http://koko.takafumikojima.com".$dir_from_ogp."/images/ogp.jpg\">";

$dir_from_ogp = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
$current_dir = basename(dirname($_SERVER['SCRIPT_NAME']));
echo "<p><img src=\"./images/"."$current_dir"."_before.jpg\" alt=\"before\" id=\"before\" class=\"darkImg\"></p>";
echo "\n";
echo "<p><img src=\"./images/"."$current_dir"."_after.jpg\" alt=\"after\" id=\"after\"></p>";
echo "\n";
echo "<p><a href=\"#\" target=\"_blank\" id=\"kotae\"><img src=\"./images/"."$current_dir"."_answer.png\" id=\"answer_area\"/></a></p>";
echo "\n";

 ?>
