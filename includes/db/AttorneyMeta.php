<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\DBTable;
use TMT\HMG\Includes\DB\Base;

class AttorneyMeta extends Base implements DBTable {
    public function __construct() {
        parent::__construct( 'attorneymeta' );
    }

    public function create(): void {
        if ( ! $this->table_exists() ) {
            $sql = "CREATE TABLE {$this->table_name} (
                ID BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                attorney_id BIGINT(20) UNSIGNED NOT NULL,
                meta_key VARCHAR(255) DEFAULT NULL,
                meta_value longtext NULL,
                INDEX (attorney_id),
                INDEX (meta_key)
            ) ENGINE=InnoDB {$this->get_charset_collate()};";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}