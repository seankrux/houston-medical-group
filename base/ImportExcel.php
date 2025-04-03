<?php
/**
 * Outputs import excel page.
 * 
 * @package tmt-hmg
 */

use TMT\HMG\Includes\Shortcodes\ImportExcel;

wp_enqueue_style('tailwindcss');
wp_enqueue_script( ImportExcel::SCRIPT_HANDLE );
?>
<div id="hmg-import-excel"></div>