<?php
require 'Calculator.php';
require '../controllers/Login.php';
 
class CalculatorTests extends PHPUnit_Framework_TestCase
{
    private $calculator;
 
    protected function setUp()
    {
        $this->calculator = new Calculator();
        $_POST = array();
        $this->login = new Login();
    }
 
    protected function tearDown()
    {
        $this->calculator = NULL;
    }
 
    public function testAdd()
    {
        $result = $this->calculator->add(1, 2);
        $this->assertEquals(3, $result);
    }
    /*
     * Method: Post
     * Params: N/A
     * Return: success or error
     */
    public function testAuthNoParams()
    {
		$_POST = array('uname'=>'a@a.com','pass'=>'123456');
        $response = $this->login->checklogin();
        //~ $response->assertStatus(200)
            //~ ->assertJsonFragment(array('status' => 'error'));
    }
 
}
