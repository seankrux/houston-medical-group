<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\Shortcode;
use Kucrut\Vite;

class CaseStatus implements Shortcode {
    const SHORTCODE = 'hmg_case_status';
    const SCRIPT_HANDLE = 'hmg_case_status';

    public function render( array $atts ): string|false {
        ob_start();
        load_template( TMT_HMG_PATH . 'Base/CaseStatus.php', true );
        return ob_get_clean();
    }

    public function scripts(): void {
        Vite\register_asset(
            TMT_HMG_PATH . 'dist',
            'src/pages/CaseStatus/main.jsx',
            array(
                'handle' => self::SCRIPT_HANDLE,
                'dependencies' => array('wp-components'),
                'css-dependencies' => array('wp-components'),
                'css-media' => 'all',
                'in-footer' => true
            )
        );

        wp_register_style( 
            self::SCRIPT_HANDLE,
            TMT_HMG_URL . 'src/assets/caseStatus.css',
            array(),
            filemtime( TMT_HMG_PATH . 'src/assets/caseStatus.css' )
        );
    }
}