<?php
    function createComment($medianame, $uname, $comment, $rating) {
        $pdo = Database::getInstance()->getConnection();

        $queryComment = 'INSERT INTO tbl_comments(comments_name, comments_copy, comments_rating, media_name)';
        $queryComment .= ' VALUES (:uname, :comment, :rating, :medianame)';

        $commentSet = $pdo->prepare($queryComment);
        $commentResult = $commentSet->execute(
            array(
                ':uname'=>$uname,
                ':comment'=>$comment,
                ':rating'=>$rating,
                ':medianame'=>$medianame
            )
        );

        if($commentResult){
            return $commentSet;
        }else{
            return 'There was a problem creating the comment';
        }
    }