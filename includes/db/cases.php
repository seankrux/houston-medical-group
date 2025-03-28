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
            $sql = "CREATE TABLE $this->table_name (
                ID BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                case_id BIGINT(20) UNSIGNED NOT NULL,
                patient_id BIGINT(20) UNSIGNED NOT NULL,
                clinic_id BIGINT(20) UNSIGNED NOT NULL,
                date_mailed DATE NOT NULL COLLATE $this->collate,
                `status` VARCHAR(20) NOT NULL COLLATE $this->collate,
                INDEX (case_id),
                INDEX (patient_id),
                INDEX (clinic_id),
                INDEX (atty_id),
                INDEX (`status`)
            ) ENGINE=InnoDB {$this->get_charset_collate()};";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}