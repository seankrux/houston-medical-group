<?php
namespace TMT\HMG\Includes\Models;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\DB\Base;
use TMT\HMG\Includes\Interface\CRUD;
use WP_Error;

class CaseAttorney extends Base implements CRUD {
    public function __construct() {
        $this->table_name = 'caseattorney';
    }

    public function insert( object $data ): int|WP_Error {
        if ( ! $data instanceof AttorneyData ) {
            return new WP_Error(
                'invalid_data',
                'Invalid data type'
            );
        }

        $response = $this->db->insert(
            $this->table_name,
            array(
                'case_id' => $data->get_case_id(),
                'attorney_id' => $data->get_attorney_id(),
                'attorney_email' => $data->get_attorney_email(),
                'attorney_name' => $data->get_attorney_name(),
                'role' => $data->get_role(),
                'pending_lawsuit' => $data->get_pending_lawsuit(),
                'collection_contact' => $data->get_collection_contact()
            )
        );

        if ( ! $response ) {
            return new WP_Error(
                'insert_failed',
                'Insert failed'
            );
        }

        return $response;
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
                'Attorney not found'
            );
        }

        return is_array( $response ) ? $response : new WP_Error( 'invalid_response', 'Unexpected response type' );
    }

    public function update( int $id, object $data ): bool|WP_Error {
        if ( ! $data instanceof AttorneyData ) {
            return new WP_Error(
                'invalid_data',
                'Invalid data type'
            );
        }

        $response = $this->db->update(
            $this->table_name,
            array(
                'case_id' => $data->get_case_id(),
                'attorney_id' => $data->get_attorney_id(),
                'attorney_email' => $data->get_attorney_email(),
                'attorney_name' => $data->get_attorney_name(),
                'role' => $data->get_role(),
                'pending_lawsuit' => $data->get_pending_lawsuit(),
                'collection_contact' => $data->get_collection_contact()
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

class AttorneyData {
    public function __construct(
        private int $case_id,
        private int $attorney_id,
        private string $attorney_email,
        private string $attorney_name,
        private string $role,
        private bool $pending_lawsuit,
        private bool $collection_contact
    ) {}

    public function get_case_id(): int {
        return $this->case_id;
    }

    public function get_attorney_id(): int {
        return $this->attorney_id;
    }

    public function get_attorney_email(): string {
        return $this->attorney_email;
    }

    public function get_attorney_name(): string {
        return $this->attorney_name;
    }

    public function get_role(): string {
        return $this->role;
    }

    public function get_pending_lawsuit(): bool {
        return $this->pending_lawsuit;
    }

    public function get_collection_contact(): bool {
        return $this->collection_contact;
    }
}