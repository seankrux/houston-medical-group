<?php
namespace TMT\HMG\Includes\Models;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use WP_User;
use WP_Error;

class Login {
    private WP_User|WP_Error $user;

    public function __construct( 
        private string $username, 
        private string $password 
    ) {
        $this->user = $this->authenticate();
    }

    private function authenticate(): WP_User|WP_Error {
        return wp_authenticate( $this->username, $this->password );
    }

    public function has_roles( array $roles ): bool {
        if ( is_wp_error( $this->user) || ! $this->user ) {
            return false;
        }

        return !empty( array_intersect( (array) $this->user->roles, $roles ) );
    }

    public function get_user(): WP_User|WP_Error {
        return $this->user;
    }
}