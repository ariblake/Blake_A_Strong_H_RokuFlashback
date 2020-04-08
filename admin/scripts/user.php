<?php
    function getAllUsers() {
        $pdo = Database::getInstance()->getConnection();

        $get_user_query = 'SELECT * FROM tbl_user';
        // get every user and put them in an array so we can display them in our UI
        $get_user_set = $pdo->prepare($get_user_query);
        $get_user_result = $get_user_set->execute();
    
        $users = array();

        if ($get_user_result) {
            while($user = $get_user_set->fetch(PDO::FETCH_ASSOC)) {
                // parse all the users' info like we did for a single and pass them into the users array
                $currentuser = array();
    
                $currentuser['id'] = $user['ID'];
                $currentuser['fname'] = $user['fname'];
                $currentuser['lname'] = $user['lname'];
                $currentuser['username'] = $user['uname'];
                $currentuser['avatar'] = $user['avatar'];
                $currentuser['admin'] = $user['isadmin'];
                $currentuser['permissions'] = $user['permissions'];
                $currentuser['password'] = $user['password'];
                
    
                //push the data back into the users array
                $users[] = $currentuser;
            }
    
            return json_encode($users);
        } else {
            return 'There was a problem getting the users';
        }
    }

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