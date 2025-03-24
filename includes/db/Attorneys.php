<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\DBTable;
use TMT\HMG\Includes\DB\Base;

class Attorneys extends Base implements DBTable {
    public function __construct() {
        parent::__construct( 'attorneys' );
    }

    public function create(): void {
        if ( ! $this->table_exists() ) {
            $sql = "CREATE TABLE $this->table_name (
                ID BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                first_name VARCHAR(255) NULL COLLATE $this->collate,
                last_name VARCHAR(255) NULL COLLATE $this->collate,
                middle_name VARCHAR(255) NULL COLLATE $this->collate,
                firm VARCHAR(255) NOT NULL COLLATE $this->collate
            ) ENGINE=InnoDB {$this->get_charset_collate()};";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}