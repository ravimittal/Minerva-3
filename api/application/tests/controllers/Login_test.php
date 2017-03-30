<?php
Class Login_test extends TestCase{
	public function test_checklogin(){
		//~ $output=$this->request('POST');
		//~ $expected='HIIII';
		//~ $this->assertContains('HIIII');
		//~ $data = array('email' => 'test@ycsp.com');
		//~ $output = $this->request('POST', 'login/checklogin',$data);
		//~ $this->assertContains('HIIII', $output);
		
		
		 $_REQUEST["uname"] = 'a';
		 $_REQUEST["pass"] = 'contact';

		
		 $output = $this->request('POST', 'login/checklogin');

		 $searchString = $this->assert($output);
	     echo $searchString;
	}
}
