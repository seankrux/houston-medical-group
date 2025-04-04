<?php
namespace TMT\HMG\Includes\Routes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Routes\Login;

class RouterLoader {
    private Login $login;

    public function __construct() {
        $this->login = new Login();
    }

    public function init() {
        add_action( 'rest_api_init', array( $this->login, 'register_routes' ) );
    }
}