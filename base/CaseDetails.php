<?php
/**
 * Output tasks page
 * 
 * @package tmt-hmg
 */

 use TMT\HMG\Includes\Shortcodes\CaseDetails;

wp_enqueue_style('tailwindcss');
wp_enqueue_style( CaseDetails::SCRIPT_HANDLE );
wp_enqueue_script( CaseDetails::SCRIPT_HANDLE );
 ?>
<div id="hmg-case-details"></div>