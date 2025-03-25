<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\DBTable;
use TMT\HMG\Includes\DB\Base;

class CaseLogs extends Base implements DBTable {
    public function __construct() {
        parent::__construct( 'caselogs' );
    }

    public function create(): void {
        if ( ! $this->table_exists() ) {
            $sql = "CREATE TABLE $this->table_name (
                ID BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                case_id BIGINT(20) UNSIGNED NOT NULL,
                `log` TEXT NOT NULL COLLATE $this->collate,
                log_created DATETIME NOT NULL COLLATE $this->collate,
                INDEX (case_id)
            ) ENGINE=InnoDB {$this->get_charset_collate()};";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}