<?php
namespace TMT\HMG\Includes\Models;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\DB\Base;
use TMT\HMG\Includes\Interface\CRUD;
use WP_Error;

class Clinic extends Base implements CRUD {
    public function __construct() {
        parent::__construct( 'clinics' );
    }

    public function insert( object $data ): int|WP_Error {
        if ( ! $data instanceof ClinicData ) {
            return new WP_Error(
                'invalid_data',
                'Invalid data type'
            );
        }
        
        $response = $this->db->insert(
            $this->table_name,
            array(
                'name' => $data->get_name(),
                'code' => $data->get_code()
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
                'Clinic not found'
            );
        }

        return is_array( $response ) ? new ClinicData( $response['name'], $response['code'] ) : new WP_Error( 'invalid_response', 'Unexpected response type' );
    }

    public function update( int $id, object $data ): bool|WP_Error {
        if ( ! $data instanceof ClinicData ) {
            return new WP_Error(
                'invalid_data',
                'Invalid data type'
            );
        }

        $response = $this->db->update(
            $this->table_name,
            array(
                'name' => $data->get_name(),
                'code' => $data->get_code()
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

class ClinicData {
    public function __construct(
        private string $name,
        private string $code
    ) {}

    public function get_name(): string {
        return $this->name;
    }

    public function get_code(): string {
        return $this->code;
    }
}