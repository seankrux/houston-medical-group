<?php
/**
 * Outputs settings page.
 * 
 * @package tmt-hmg
 */

 use TMT\HMG\Includes\Shortcodes\Settings;

wp_enqueue_style('tailwindcss');
wp_enqueue_script( Settings::SCRIPT_HANDLE );
 ?>
<div id="hmg-setting"></div>