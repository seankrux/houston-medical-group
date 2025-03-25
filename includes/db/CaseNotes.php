<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\DBTable;
use TMT\HMG\Includes\DB\Base;

class CaseNotes extends Base implements DBTable {
    public function __construct() {
        parent::__construct( 'casenotes' );
    }

    public function create(): void {
        if ( ! $this->table_exists() ) {
            $sql = "CREATE TABLE $this->table_name (
                ID BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                case_id BIGINT(20) UNSIGNED NOT NULL,
                `user_id` BIGINT(20) UNSIGNED NOT NULL,
                note TEXT NOT NULL COLLATE $this->collate,
                note_created DATETIME NOT NULL COLLATE $this->collate,
                note_modified DATETIME NOT NULL COLLATE $this->collate,
                INDEX (case_id),
                INDEX (`user_id`)
            ) ENGINE=InnoDB {$this->get_charset_collate()};";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}