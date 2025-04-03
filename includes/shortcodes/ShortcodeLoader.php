<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Shortcodes\Settings;

class ShortcodeLoader {
    private Settings $settings;
    private ImportExcel $import;

    public function __construct() {
        $this->settings = new Settings();
        $this->import = new ImportExcel();
    }

    public function init(): void {
        $this->shortcodes();
        add_action( 'wp_enqueue_scripts', array( $this, 'scripts' ) );
    }

    public function scripts(): void {
        wp_register_style(
            'tailwindcss',
            TMT_HMG_URL . 'src/assets/base.css',
            array(),
            filemtime( TMT_HMG_PATH . 'src/assets/base.css' )
        );

        $this->settings->scripts();
        $this->import->scripts();
    }

    public function shortcodes() {
        add_shortcode( $this->settings::SHORTCODE, array( $this->settings, 'render' ) );
        add_shortcode( $this->import::SHORTCODE, array( $this->import, 'render' ) );
    }
}