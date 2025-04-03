<?php
/**
 * Outputs login page.
 * 
 * @package tmt-hmg
 */

use TMT\HMG\Includes\Shortcodes\Login;

wp_enqueue_script( Login::SCRIPT_HANDLE );
?>
<div id="hmg-login"></div>