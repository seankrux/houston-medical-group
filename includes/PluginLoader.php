<?php
namespace TMT\HMG\Includes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly.

use TMT\HMG\Includes\Shortcodes\ShortcodeLoader;

class PluginLoader {
    public function __construct() {
        $this->load_dependencies();
        $this->initialize_components();
    }

    private function load_dependencies() {
        add_action( 'wp_enqueue_scripts', function () {
            wp_enqueue_style( 
                'hmg-sidebar',
                TMT_HMG_URL . 'src/assets/sidebar.css',
                array(),
                filemtime( TMT_HMG_PATH . 'src/assets/sidebar.css' )
            );

            wp_enqueue_style(
                'roboto-font', 
                'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap', 
                false
            );
        });
    }

    private function initialize_components() {
        ( new ShortcodeLoader() )->init();
    }
}