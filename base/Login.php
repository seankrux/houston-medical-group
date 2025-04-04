<?php
/**
 * Outputs login page.
 * 
 * @package tmt-hmg
 */

use TMT\HMG\Includes\Shortcodes\Login;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

extract( $args ?? [] );

wp_enqueue_script( Login::SCRIPT_HANDLE );
wp_enqueue_style( Login::SCRIPT_HANDLE );
?>
<div id="hmg-login" data-title="<?php echo $args['title'] ?? '' ?>" data-roles="<?php echo $args['roles'] ?? '' ?>" data-redirect-url="<?php echo $args['redirect_url'] ?? '' ?>"></div>