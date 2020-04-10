<?php
    require_once '../load.php';

    if (isset($_GET['media'])) {
        $tbl = "tbl_" . trim($_GET["media"]);
    }

    if (isset($_GET['adult'])) {
        $adult = intval(trim($_GET["adult"]));
        $results = getAll($tbl, $adult);
        echo json_encode($results);
    }