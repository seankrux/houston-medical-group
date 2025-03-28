<?php
namespace TMT\HMG\Includes\Interface;

use WP_Error;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly


interface CRUD {
    public function insert( object $data ): int|WP_Error;
    public function get( int $id ): array|WP_Error;
    public function update( int $id, object $data ): bool|WP_Error;
    public function delete( int $id ): int|false;
}