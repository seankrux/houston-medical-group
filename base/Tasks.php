<?php
/**
 * Output tasks page
 * 
 * @package tmt-hmg
 */

 use TMT\HMG\Includes\Shortcodes\Tasks;

wp_enqueue_style('tailwindcss');
wp_enqueue_style('hmg-tasks');
wp_enqueue_script( Tasks::SCRIPT_HANDLE );
 ?>
<div id="hmg-tasks"></div>