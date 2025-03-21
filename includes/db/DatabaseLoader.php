<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\DB\Cases;
use TMT\HMG\Includes\DB\CaseMeta;

class DatabaseLoader {
    public function init(): void {
        ( new Cases() )->create();
        ( new CaseMeta() )->create();
    }
}