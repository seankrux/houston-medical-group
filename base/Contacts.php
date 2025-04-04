<?php
/**
 * Output tasks page
 * 
 * @package tmt-hmg
 */

 use TMT\HMG\Includes\Shortcodes\Contacts;

wp_enqueue_style('tailwindcss');
wp_enqueue_style( Contacts::SCRIPT_HANDLE );
wp_enqueue_script( Contacts::SCRIPT_HANDLE );
 ?>
<div id="hmg-contacts"></div>