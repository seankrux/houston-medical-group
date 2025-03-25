<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interfaces\Shortcode;

class Dashboard implements ShortCodeInterface {
    const SHORTCODE = 'hmg_dashboard';
    const SCRIPT_HANDLE = 'hmg_dashboard';

    public function render (array $atts): void {
        load_template( TMT_HMG_PATH . "Templates/Dashboard.php", true);
    }

    public function scripts (): void {
        wp_register_script(
        self::SCRIPT_HANDLE,
        TMT_HMG_URL . 'build/dashboard.js',
        array('wp-element'),
        filemtime( TMT_HMG_PATH . 'build/dashboard.js'),
        true
        );

        wp_register_style(
        self::SCRIPT_HANDLE,
        TMT_HMG_URL . 'src/Dashboard/index.css',
        array(),
        filemtime( TMT_HMG_PATH . 'src/Dashboard/index.css' )
        
        );

        wp_enqueue_script( self::SCRIPT_HANDLE );
        wp_enqueue_style( self::SCRIPT_HANDLE );
    }
}