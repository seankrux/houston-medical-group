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
            return new WP_Error(
                'authentication_failed',
                'Invalid username or password.',
                array('status' => 401)
            );
        }

        if ( ! $login->has_roles( $roles ) ) {
            return new WP_Error(
                'authentication_failed',
                'User does not have the required role.',
                array('status' => 403)
            );
        }

        return $login->login_user();
    }
}