<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\Interface\DBTable;
use TMT\HMG\Includes\DB\Base;

class PatientMeta extends Base implements DBTable {
    public function __construct() {
        parent::__construct( 'patientmeta' );
    }

    public function create(): void {
        if ( ! $this->table_exists() ) {
            $sql = "CREATE TABLE {$this->table_name} (
                id bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                patient_id bigint(20) NOT NULL,
                meta_key varchar(255) DEFAULT NULL,
                meta_value longtext,
                INDEX (patient_id),
                INDEX (meta_key)
            ) ENGINE=InnoDB {$this->get_charset_collate()};";

            require_once ABSPATH . 'wp-admin/includes/upgrade.php';
            dbDelta($sql);
        }
    }
}