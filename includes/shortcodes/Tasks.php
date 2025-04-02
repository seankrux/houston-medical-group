<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\Shortcode;
use Kucrut\Vite;

class Tasks implements Shortcode {
    const SHORTCODE = 'hmg_tasks';
    const SCRIPT_HANDLE = 'hmg-tasks';

    public function render( array $atts ): void {
        load_template( TMT_HMG_PATH . 'Base/Tasks.php', true );
    }

    public function scripts(): void {
        Vite\register_asset(
            TMT_HMG_PATH . 'dist',
            'src/pages/Tasks/main.jsx',
            array(
                'handle' => self::SCRIPT_HANDLE,
                'dependencies' => array('wp-components'),
                'css-dependencies' => array('wp-components'),
                'css-media' => 'all',
                'in-footer' => true
            )
        );

        wp_register_style( 
            'hmg-tasks',
            TMT_HMG_URL . 'src/assets/tasks.css',
            array(),
            filemtime( TMT_HMG_PATH . 'src/assets/tasks.css' )
        );
    }
}