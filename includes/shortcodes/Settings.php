<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\Shortcode;
use Kucrut\Vite;

class Settings implements Shortcode {
    const SHORTCODE = 'hmg_settings';
    const SCRIPT_HANDLE = 'hmg_settings';

    public function render( array $atts ): string|false {
        ob_start();
        load_template( TMT_HMG_PATH . 'Base/Settings.php', true );
        return ob_get_clean();
    }

    public function scripts(): void {
        Vite\register_asset(
            TMT_HMG_PATH . 'dist',
            'src/pages/Settings/main.jsx',
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