<?php
namespace TMT\HMG\Includes\Shortcodes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Shortcodes\Settings;
use TMT\HMG\Includes\Shortcodes\Tasks;
use TMT\HMG\Includes\Shortcodes\Dashboard;
use TMT\HMG\Includes\Shortcodes\CaseStatus;
use TMT\HMG\Includes\Shortcodes\CaseDetails;

class ShortcodeLoader {
    private Settings $settings;
    private Tasks $tasks;
    private Dashboard $dashboard;
    private CaseStatus $case_status;
    private CaseDetails $case_details;

    public function __construct() {
        $this->settings = new Settings();
        $this->tasks = new Tasks();
        $this->dashboard = new Dashboard();
        $this->case_status = new CaseStatus();
        $this->case_details = new CaseDetails();
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
        $this->tasks->scripts();
        $this->dashboard->scripts();
        $this->case_status->scripts();
        $this->case_details->scripts();
    }

    public function shortcodes() {
        add_shortcode( $this->settings::SHORTCODE, array( $this->settings, 'render' ) );
        add_shortcode( $this->tasks::SHORTCODE, array( $this->tasks, 'render' ) );
        add_shortcode( $this->dashboard ::SHORTCODE, array( $this->dashboard, 'render' ) );
        add_shortcode( $this->case_status ::SHORTCODE, array( $this->case_status, 'render' ) );
        add_shortcode( $this->case_details ::SHORTCODE, array( $this->case_details, 'render' ) );
    }
}