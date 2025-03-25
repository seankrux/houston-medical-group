<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Shortcodes\Dashboard;

class ShortcodeLoader {

    private Dashboard $dashboard;

    public function __construct() {
        $this->dashboard = new Dashboard();
    }
    
    public function init(): void {
        $this->shortcodes();
        $this->admin_scripts();
    }

    public function shortcodes() {
        add_shortcode(Dashboard::SHORTCODE, array(new Dashboard(), 'render'));
    }

    public function admin_scripts(): void {
        $this->dashboard->scripts();
    }
}