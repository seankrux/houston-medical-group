<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\DBTable;
use TMT\HMG\Includes\DB\Base;

class Patient extends Base implements DBTable {
    public function __construct() {
        parent::__construct( 'clinics' );
    }

    public function create(): void {
        if ( ! $this->table_exists() ) {
            $sql = "CREATE TABLE $this->table_name (
                ID BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                `name` VARCHAR(255) NOT NULL COLLATE $this->collate,
                `code` VAR(10) NOT NULL COLLATE $this->collate
            ) ENGINE=InnoDB {$this->get_charset_collate()};";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}
    