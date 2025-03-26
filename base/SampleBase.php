<?php
/**
 * Outputs a sample base page.
 */

 use TMT\HMG\Includes\Shortcodes\SampleShortcode;

wp_enqueue_script( SampleShortcode::SCRIPT_HANDLE );
 ?>
<div id="sample-base"></div>