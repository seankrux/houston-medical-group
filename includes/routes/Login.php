<?php
namespace TMT\HMG\Includes\Routes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Controllers\Login as LoginController;
use TMT\HMG\Includes\Interface\Router;
use TMT\HMG\Includes\Routes\Base;
use WP_REST_Request;
use WP_REST_Response;
use WP_Error;

class Login extends Base implements Router {
    const ENDPOINT = '/login';
    const ADMIN = self::ENDPOINT . '/admin';
    const EMPLOYEE = self::ENDPOINT . '/employee';
    const SUB_FACILITY = self::ENDPOINT . '/sub-facility';
    private LoginController $controller;

    public function __construct() {
        $this->controller = new LoginController();
    }

    public function register_routes(): void {
        register_rest_route( self::BASE, array(
            'methods' => 'POST',
            'callback' => array( $this, 'admin' ),
            'permission_callback' => '__return_true'
        )); 
    }

    public function admin( WP_REST_Request $request ): WP_REST_Response|WP_Error {
        $params = $request->get_json_params();
        $username = sanitize_text_field($params['username'] ?? '');
        $password = $params['password'] ?? '';

        $user = $this->controller->handle_authentication(
            $username,
            $password,
            array( 'administrator' )
        );

        return rest_ensure_response( $user );
    }
}