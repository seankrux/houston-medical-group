<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\Shortcode;

class Settings implements Shortcode {
    const SHORTCODE = 'hmg_settings';
    const SCRIPT_HANDLE = 'hmg_settings';

    public function render( array $atts ): void {
        load_template( TMT_HMG_PATH . 'Base/Settings.php', true );
    }

    public function scripts(): void {
        wp_register_script(
            self::SCRIPT_HANDLE,
            TMT_HMG_URL . 'dist/index-Irea8pDi.js',
            array(),
            filemtime( TMT_HMG_PATH . 'dist/index-Irea8pDi.js' ),
            true
        );

        wp_register_style(
            self::SCRIPT_HANDLE,
            TMT_HMG_URL . 'dist/index-GtdXo3gb.css',
            array('tailwindcss'),
            filemtime( TMT_HMG_PATH . 'dist/index-GtdXo3gb.css' )
        );
    }
}