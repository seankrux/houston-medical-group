<?php
namespace TMT\HMG\Includes\Models;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\DB\Base;
use TMT\HMG\Includes\Interface\CRUD;
use Exception;

class PatientCase extends Base implements CRUD {
    public function __construct() {
        parent::__construct( 'cases' );
    }

    public function insert( object $data ): void {
        if ( ! $data instanceof PatientCaseData ) {
            throw new Exception( 'Invalid data type' );
        }
        $this->db->insert(
            $this->table_name,
            array(
                'case_id' => $data->get_case_id(),
                'patient_id' => $data->get_patient_id(),
                'date_mailed' => $data->get_date_mailed(),
                'status' => $data->get_status()
            )
        );
    }

    public function get(): void {
        
    }

    public function update( int $id, object $data ): void {
        if ( ! $data instanceof PatientCaseData ) {
            throw new Exception( 'Invalid data type' );
        }
    }

    public function delete( int $id ): void { 

    }
}

class PatientCaseData {
    public function __construct(
        private string $case_id,
        private string $patient_id,
        private string $date_mailed,
        private string $status
    ) {}

    public function get_case_id(): string {
        return $this->case_id;
    }

    public function get_patient_id(): string {
        return $this->patient_id;
    }

    public function get_date_mailed(): string {
        return $this->date_mailed;
    }

    public function get_status(): string {
        return $this->status;
    }
}