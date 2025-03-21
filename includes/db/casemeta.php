<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\DBTable;
use TMT\HMG\Includes\DB\Base;

class CaseMeta extends Base implements DBTable {
    public function __construct() {
        parent::__construct( 'casemeta' );
    }

    public function create(): void {
        if ( ! $this->table_exists() ) {
            $collate = 'utf8mb4_unicode_520_ci';
            $charset_collate = "CHARACTER SET utf8mb4 COLLATE $collate";
            $sql = "CREATE TABLE $this->table_name (
                ID BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                case_id BIGINT(20) UNSIGNED NOT NULL INDEX,
                clinic VARCHAR(255) NOT NULL COLLATE $collate,
                amount DECIMAL(18,9) NOT NULL,
            ) ENGINE='InnoDB' COLLATE $charset_collate;";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}