<?php 

function login($username, $password, $ip){
    $pdo = Database::getInstance()->getConnection();
    //Check existance
    $check_exist_query = 'SELECT COUNT(*) FROM tbl_user WHERE uname= :username';
    $user_set = $pdo->prepare($check_exist_query);
    $user_set->execute(
        array(
            ':username' => $username,
        )
    );

    if($user_set->fetchColumn()>0){
        //Log user in
        $get_user_query = 'SELECT * FROM tbl_user WHERE uname = :username';
        $get_user_query .= ' AND password = :password';
        $user_check = $pdo->prepare($get_user_query);
        $user_check->execute(
            array(
                ':username'=>$username,
                ':password'=>$password
            )
        );

        while($found_user = $user_check->fetch(PDO::FETCH_ASSOC)){
            $id = $found_user['ID'];
            //Logged in!
            $message = 'You just logged in!';
            $_SESSION['ID'] = $id;
            $_SESSION['uname'] = $found_user['fname'];

            $user = array();

            $user['id'] = $found_user['ID'];
            $user['fname'] = $found_user['fname'];
            $user['lname'] = $found_user['lname'];
            $user['username'] = $found_user['uname'];
            $user['avatar'] = $found_user['avatar'];
            $user['admin'] = $found_user['isadmin'];
            $user['permissions'] = $found_user['permissions'];

            $message = json_encode($user);
        }

    } else {
        //User does not exist
        $message = 'User does not exist';
    }

    // return info to admin_login.php
    return $message;
}

function confirm_logged_in(){
    if(!isset($_SESSION['ID'])){
        redirect_to('admin_login.php');
    }
}

function logout(){
    session_destroy();
    redirect_to('admin_login.php');
}