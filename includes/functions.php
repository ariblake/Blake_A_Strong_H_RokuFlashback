<?php
    require('connect.php');

    function getUser($conn) {
        // validate that the post method is working from our JS file

        $username = $_POST["username"];

        //echo $username;

        $getUser = 'SELECT * FROM tbl_user where uname="'.$username.'"';
        $runQuery = $conn->query($getUser);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            // push each row of data into our array to make it easy to iterate over
            $result[] = $row;
        }

        return $result;
    }