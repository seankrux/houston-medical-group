<?php
/**
 * Plugin Name: Houston Medical Group
 * Description: 
 * Version: 1.0
 * Author: TMT
 * License: GPL2
 * Text Domain: tmt-hmg
 * 
 * @package tmt-hmg
 */

use TMT\HMG\Includes\PluginLoader;
use TMT\HMG\Includes\DB\DatabaseLoader;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

define( 'TMT_HMG_PATH', plugin_dir_path( __FILE__ ) );
define( 'TMT_HMG_URL', plugin_dir_url( __FILE__ ) );

require_once TMT_HMG_PATH . 'vendor/autoload.php';

register_activation_hook(__FILE__, 'tmt_hmg_activate_plugin');
function tmt_hmg_activate_plugin() {
    ( new DatabaseLoader() )->init();
}

( new PluginLoader() );