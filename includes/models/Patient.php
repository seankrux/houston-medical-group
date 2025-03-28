<?php
namespace TMT\HMG\Includes\Models;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\DB\Base;
use TMT\HMG\Includes\Interface\CRUD;
use WP_Error;

class Patient extends Base implements CRUD {
    public function __construct() {
        parent::__construct( 'patients' );
    }

    public function insert( object $data ): int|WP_Error {
        if ( ! $data instanceof PatientData ) {
            return new WP_Error(
                'invalid_data',
                'Invalid data type'
            );
        }

        $response = $this->db->insert(
            $this->table_name,
            array(
                'first_name' => $data->get_first_name(),
                'last_name' => $data->get_last_name(),
                'middle_name' => $data->get_middle_name(),
                'email' => $data->get_email(),
                'date_of_birth' => $data->get_date_of_birth()
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
                "SELECT * FROM {$this->table_name} WHERE ID = %d",
                $id
            ),
            ARRAY_A
        );

        if ( is_null( $response ) || empty( $response ) ) {
            return new WP_Error(
                'not_found',
                'Patient not found'
            );
        }

        return is_array( $response ) ? $response : new WP_Error( 'invalid_response', 'Unexpected response type' );
    }

    public function update( int $id, object $data ): bool|WP_Error {
        if ( ! $data instanceof PatientData ) {
            return new WP_Error(
                'invalid_data',
                'Invalid data type'
            );
        }

        $response = $this->db->update(
            $this->table_name,
            array(
                'first_name' => $data->get_first_name(),
                'last_name' => $data->get_last_name(),
                'middle_name' => $data->get_middle_name(),
                'email' => $data->get_email(),
                'date_of_birth' => $data->get_date_of_birth()
            ),
            array( 'ID' => $id )
        );

        return $response;
    }

    public function delete( int $id ): int|false {
        $response = $this->db->delete(
            $this->table_name,
            array( 'ID' => $id )
        );

        return $response;
    }
}

class PatientData {
    public function __construct(
        private string $first_name,
        private string $last_name,
        private ?string $middle_name = '',
        private ?string $email = '',
        private ?string $date_of_birth = ''
    ) {}

    public function get_first_name(): string {
        return $this->first_name;
    }

    public function get_last_name(): string {
        return $this->last_name;
    }

    public function get_middle_name(): ?string {
        return $this->middle_name;
    }

    public function get_email(): ?string {
        return $this->email;
    }

    public function get_date_of_birth(): ?string {
        return $this->date_of_birth;
    }
}