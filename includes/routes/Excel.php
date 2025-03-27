<?php
namespace TMT\HMG\Includes\Routes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\Router;
use TMT\HMG\Includes\Routes\Base;
use WP_REST_Request;
use WP_REST_Response;

class Excel extends Base implements Router {
    const ENDPOINT = '/excel';
    const IMPORT = self::ENDPOINT . '/import';

    public function register_routes(): void {
        register_rest_route( self::BASE, self::IMPORT, array(
            'methods' => 'POST',
            'callback' => array( $this, 'import' ),
            'permission_callback' => '__return_true'
        ));
    }

    public function import( WP_REST_Request $request ): WP_REST_Response {
        
    }
}