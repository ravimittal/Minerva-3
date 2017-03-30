<?php

require '../TestCase.php';
Class Login_test extends TestCase{
	public function test_checklogin(){
		$output=$this->request('POST');
		$expected='HIIII';
		$this->assertContains($expected,$output);
	}
}
