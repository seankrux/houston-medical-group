<?php
namespace TMT\HMG\Includes\Shortcodes;

use TMT\HMG\Includes\Interface\Shortcode;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

class SampleShortcode implements Shortcode {
    const SHORTCODE = 'import_excel';
    const SCRIPT_HANDLE = 'hmg_import_excel';

    public function render( array $atts ): string|false {
        ob_start();
        load_template( TMT_HMG_PATH . 'Base/SampleBase.php', true );
        return ob_get_clean();
    }

    public function scripts(): void {
        wp_register_script(
            self::SCRIPT_HANDLE,
            TMT_HMG_URL . 'build/import-excel.js',
            array('wp-element'),
            // filemtime( TMT_HMG_PATH . 'build/import-excel.js' ),
            true
        );
    }
}