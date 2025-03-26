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

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

define( 'TMT_HMG_PATH', plugin_dir_path( __FILE__ ) );
define( 'TMT_HMG_URL', plugin_dir_url( __FILE__ ) );

require_once TMT_HMG_PATH . 'vendor/autoload.php';
require_once TMT_HMG_PATH . 'Includes/PluginLoader.php';

new PluginLoader();