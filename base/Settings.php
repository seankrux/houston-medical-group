<?php
/**
 * Outputs settings page.
 * 
 * @package tmt-hmg
 */

 use TMT\HMG\Includes\Shortcodes\Settings;


function enqueue_tailwind_last() {
    wp_enqueue_style('tailwindcss');
}
add_action('wp_enqueue_scripts', 'enqueue_tailwind_last', 999);
wp_enqueue_script( Settings::SCRIPT_HANDLE );
 ?>
<div id="hmg-setting"></div>