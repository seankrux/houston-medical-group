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

    private function load_dependencies() {}

    private function initialize_components() {
        ( new ShortcodeLoader() )->init();
    }
}