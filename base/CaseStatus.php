<?php
/**
 * Output tasks page
 * 
 * @package tmt-hmg
 */

 use TMT\HMG\Includes\Shortcodes\CaseStatus;

wp_enqueue_style('tailwindcss');
wp_enqueue_style( CaseStatus::SCRIPT_HANDLE );
wp_enqueue_script( CaseStatus::SCRIPT_HANDLE );
 ?>
<div id="hmg-case-status"></div>