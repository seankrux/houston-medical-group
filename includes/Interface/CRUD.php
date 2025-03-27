<?php
namespace TMT\HMG\Includes\Interface;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly


interface CRUD {
    public function insert( object $data ): void;
    public function get(): void;
    public function update( int $id, object $data ): void;
    public function delete( int $id ): void;
}