<?php
namespace TMT\HMG\Includes\Interfaces;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

interface Shortcode {
    public function render( array $atts ): void;
    public function scripts(): void;
}