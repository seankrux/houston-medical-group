<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Shortcodes\SampleShortcode;
use TMT\HMG\Includes\Shortcodes\Settings;
use TMT\HMG\Includes\Shortcodes\Tasks;

class ShortcodeLoader {
    private SampleShortcode $sample_shortcode;
    private Settings $settings;
    private Tasks $tasks;

    public function __construct() {
        $this->sample_shortcode = new SampleShortcode();
        $this->settings = new Settings();
        $this->tasks = new Tasks();
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
        
        $this->sample_shortcode->scripts();
        $this->settings->scripts();
        $this->tasks->scripts();
    }

    public function shortcodes() {
        add_shortcode( $this->sample_shortcode::SHORTCODE, array( $this->sample_shortcode, 'render' ) );
        add_shortcode( $this->settings::SHORTCODE, array( $this->settings, 'render' ) );
        add_shortcode( $this->tasks::SHORTCODE, array( $this->tasks, 'render' ) );
    }
}