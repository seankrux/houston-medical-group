<?php
namespace TMT\HMG\Includes\Controllers;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Models\Login as LoginModel;
use WP_Error;
use WP_User;

class Login {
    public function handle_authentication( string $username, string $password, array $roles ): WP_User|WP_Error {
        $login = new LoginModel( $username, $password );

        if ( $login->get_user() instanceof WP_Error ) {
            return $login->get_user();
        }

        if ( $login->has_roles( $roles ) ) {
            return new WP_Error(
                'incorrect_role',
                'User does not have the required role',
                array('status' => 400)
            );
        }

        return $login->get_user();
    }
}