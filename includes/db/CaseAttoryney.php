<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\DBTable;
use TMT\HMG\Includes\DB\Base;

class CaseAttoryney extends Base implements DBTable {
    public function __construct() {
        parent::__construct( 'caseattorney' );
    }

    public function create(): void {
        if ( ! $this->table_exists() ) {
            $sql = "CREATE TABLE $this->table_name (
                ID BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                case_id BIGINT(20) UNSIGNED NOT NULL,
                atty_id BIGINT(20) UNSIGNED NOT NULL
                atty_email VARCHAR(50) NULL COLLATE $this->collate,
                atty_phone VARCHAR(50) NULL COLLATE $this->collate,
                role VARCHAR(255) NOT NULL COLLATE $this->collate,
                pending_lawsuit TINYINT(1) NOT NULL DEFAULT 0,
                collection_contact TINYINT(1) NOT NULL DEFAULT 0
            ) ENGINE=InnoDB {$this->get_charset_collate()};";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}