<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\DBTable;
use TMT\HMG\Includes\DB\Base;

class Cases extends Base implements DBTable {
    public function __construct() {
        parent::__construct( 'cases' );
    }

    public function create(): void {
        if ( ! $this->table_exists() ) {
            $collate = 'utf8mb4_unicode_520_ci';
            $charset_collate = "CHARACTER SET utf8mb4 COLLATE $collate";
            $sql = "CREATE TABLE $this->table_name (
                id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
                first_name VARCHAR(250) NOT NULL COLLATE $collate,
                last_name VARCHAR(250) NOT NULL COLLATE $collate,
                doi DATE NOT NULL,
                clinic VARCHAR(10) COLLATE $collate,
                atty_name VARCHAR(250) NOT NULL COLLATE $collate,
                date_mailed DATE NOT NULL COLLATE $collate,
                status VARCHAR(20) NOT NULL COLLATE $collate,
                PRIMARY KEY (id),
                INDEX (status)
            ) ENGINE=InnoDB $charset_collate;";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}