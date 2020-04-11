<?php
    require_once '../load.php';

    if(isset($_POST['submit'])) {
        $medianame = ($_POST['media']);
        $uname = trim($_POST['uname']);
        $comment = trim($_POST['comment']);
        $rating = trim($_POST['rating']);

        if(empty($uname) || empty($comment) || empty($rating)){
            $message = 'Please fill out the required fields';
        }else{
            $message = createComment($medianame, $uname, $comment, $rating);
        }
    }