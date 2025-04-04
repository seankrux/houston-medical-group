<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\Shortcode;
use Kucrut\Vite;

class Login implements Shortcode {
    const SHORTCODE = 'hmg_login';
    const SCRIPT_HANDLE = 'hmg-login';

    public function render( array $atts ): string|false {
        $atts = shortcode_atts(
            array(
                'title' => '',
                'roles' => '',
                'redirect_id' => '',
            ),
            $atts,
            self::SHORTCODE
        );

        $redirect_url = get_permalink($atts['redirect_id']);

        ob_start();

        load_template( TMT_HMG_PATH . 'Base/Login.php', true, array(
            'title' => $atts['title'],
            'roles' => $atts['roles'],
            'redirect_url' => $redirect_url,
        ));

        return ob_get_clean();
    }

    public function scripts(): void {
        wp_register_style(
            self::SCRIPT_HANDLE,
            TMT_HMG_URL . 'src/assets/login.css',
            array(),
            filemtime( TMT_HMG_PATH . 'src/assets/login.css' )
        );

        Vite\register_asset(
            TMT_HMG_PATH . 'dist',
            'src/pages/Login/main.jsx',
            array(
                'handle' => self::SCRIPT_HANDLE,
                'dependencies' => array('wp-components'),
                'css-dependencies' => array('wp-components'),
                'css-media' => 'all',
                'in-footer' => true
            )
        );
    }
}