<?php
/**
 * Outputs settings page.
 */

 use TMT\HMG\Includes\Shortcodes\Settings;

wp_enqueue_script( Settings::SCRIPT_HANDLE );
wp_enqueue_style( Settings::SCRIPT_HANDLE );
 ?>
<div id="root"></div>