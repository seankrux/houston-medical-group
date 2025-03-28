<?php
namespace TMT\HMG\Includes\Models;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\DB\Base;
use TMT\HMG\Includes\Interface\CRUD;
use Exception;
use WP_Error;

class PatientCase extends Base implements CRUD {
    public function __construct() {
        parent::__construct( 'cases' );
    }

    public function insert( object $data ): int|WP_Error {
        if ( ! $data instanceof PatientCaseData ) {
            return new WP_Error(
                'invalid_data',
                'Invalid data type'
            );
        }
        
        $response = $this->db->insert(
            $this->table_name,
            array(
                'case_id' => $data->get_case_id(),
                'patient_id' => $data->get_patient_id(),
                'clinic_id' => $data->get_clinic_id(),
                'date_mailed' => $data->get_date_mailed(),
                'status' => $data->get_status()
            )
        );

        if ( ! $response ) {
            return new WP_Error(
                'insert_failed',
                'Insert failed'
            );
        }

        return $this->db->insert_id;
    }

    public function get( int $id ): array|WP_Error {
        $response = $this->db->get_row(
            $this->db->prepare(
                "SELECT * FROM {$this->table_name} WHERE case_id = %d",
                $id
            ),
            ARRAY_A
        );
    
        if ( is_null( $response ) || empty( $response ) ) {
            return new WP_Error(
                'not_found',
                'Patient case not found'
            );
        }
    
        return is_array( $response ) ? $response : new WP_Error( 'invalid_response', 'Unexpected response type' );
    }

    public function update( int $id, object $data ): bool|WP_Error {
        if ( ! $data instanceof PatientCaseData ) {
            return new WP_Error(
                'invalid_data',
                'Invalid data type'
            );
        }

        $response = $this->db->update(
            $this->table_name,
            array(
                'case_id' => $data->get_case_id(),
                'patient_id' => $data->get_patient_id(),
                'clinic_id' => $data->get_clinic_id(),
                'date_mailed' => $data->get_date_mailed(),
                'status' => $data->get_status()
            ),
            array( 'case_id' => $id )
        );

        return $response;
    }

    public function delete( int $id ): int|false { 
        $response = $this->db->delete(
            $this->table_name,
            array( 'case_id' => $id )
        );

        return $response;
    }
}

class PatientCaseData {
    public function __construct(
        private string $case_id,
        private int $patient_id,
        private int $clinic_id,
        private string $date_mailed,
        private string $status
    ) {}

    public function get_case_id(): string {
        return $this->case_id;
    }

    public function get_patient_id(): int {
        return $this->patient_id;
    }

    public function get_clinic_id(): int {
        return $this->clinic_id;
    }

    public function get_date_mailed(): string {
        return $this->date_mailed;
    }

    public function get_status(): string {
        return $this->status;
    }
}