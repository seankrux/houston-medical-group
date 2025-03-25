<?php
namespace TMT\HMG\Includes\Shortcodes;

use TMT\HMG\Includes\Interfaces\Shortcode;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

class SampleShortcode implements Shortcode {
    public function render( array $atts ): void {

    }

    public function scripts(): void {

    }
}