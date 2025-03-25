<?php
namespace TMT\HMG\Includes\DB;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
} // Exit if accessed directly

use TMT\HMG\Includes\DB\Cases;
use TMT\HMG\Includes\DB\CaseMeta;
use TMT\HMG\Includes\DB\CaseLogs;
use TMT\HMG\Includes\DB\CaseNotes;
use TMT\HMG\Includes\DB\CaseAttoryney;
use TMT\HMG\Includes\DB\Attorneys;
use TMT\HMG\Includes\DB\AttorneyMeta;
use TMT\HMG\Includes\DB\Patients;
use TMT\HMG\Includes\DB\PatientMeta;
use TMT\HMG\Includes\DB\Clinics;
use TMT\HMG\Includes\DB\ClinicMeta;

class DatabaseLoader {
    public function init(): void {
        ( new Cases() )->create() ;
        ( new CaseMeta() )->create();
        ( new Attorneys() )->create();
        ( new AttorneyMeta() )->create();
        ( new Patients() )->create();
        ( new PatientMeta() )->create();
        ( new Clinics() )->create();
        ( new ClinicMeta() )->create();
        ( new CaseAttoryney() )->create();
        ( new CaseLogs() )->create();
        ( new CaseNotes() )->create();
    }
}