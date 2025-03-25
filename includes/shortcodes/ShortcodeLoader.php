<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

class ShortcodeLoader {
    private SampleShortcode $sample_shortcode;

    public function __construct() {
        $this->sample_shortcode = new SampleShortcode();
    }

    public function init(): void {
        $this->shortcodes();
        $this->admin_scripts();
    }

    public function shortcodes() {
        add_shortcode( 'sample_shortcode', array( $this->sample_shortcode, 'render' ) );
    }

    public function admin_scripts(): void {
        $this->sample_shortcode->scripts();
    }
}