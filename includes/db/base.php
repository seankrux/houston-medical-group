<?php
namespace TMT\HMG\Includes\DB;

use wpdb;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

class Base {
    const PREFIX = 'hmg_';
    protected string $table_name;
    protected wpdb $db;

    public function __construct( string $table_name ) {
        global $wpdb;

        $this->db = $wpdb;
        $this->table_name = $this->format_table_name( $table_name );
    }

    private function format_table_name( string $table_name ): string {
        return $this->db->prefix . $this::PREFIX . $table_name;
    }

    protected function table_exists(): bool {
        return $this->db->get_var( "SHOW TABLES LIKE '{$this->table_name}'" ) === $this->table_name;
    }
}