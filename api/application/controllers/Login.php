<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use Restserver\Libraries\REST_Controller;
require_once APPPATH . 'libraries/REST_Controller.php';
require_once APPPATH . 'libraries/JWT.php';
use \Firebase\JWT\JWT;
class Login extends REST_Controller  {
	function __construct() { 
       parent::__construct(); 
       $this->load->helper('url'); 
       $this->load->library('session'); 
       $this->load->database(); 
    }
    public function index_get()
	{
		// Display all books
	}
	public function checklogin_get()
	{
		die('get');
	}
	public function checklogin_post()
	{	
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata,true);
		if(!empty($request['uname']) && !empty($request['pass'])){
			$query =$this->db->get_where("admin_users",array("Email_Id"=>$request['uname'],"Password"=>md5($request['pass'])));
			$data = $query->result();				
			 if($query->num_rows()>=1) {
				$token['id'] = $data[0]->User_Id;
				$token['username'] = $data[0]->User_Name;
				$date = new DateTime();
				$token['iat'] = $date->getTimestamp();
				$token['exp'] = $date->getTimestamp() + 60*60*5;
				$output['id_token'] = JWT::encode($token, "my Secret key!");
				$this->set_response($output, REST_Controller::HTTP_OK);
			}
			else {
				$invalidLogin = ['invalid' => $request['uname']];
				$this->set_response($invalidLogin, REST_Controller::HTTP_NOT_FOUND);
			}
		}
	}
	//~ public function logout(){
		//~ $this->includeCORS();
		//~ $this->session->sess_destroy();
	//~ }
	//~ public function sethere(){
		//~ $this->session->set_userdata('login_token', true);
	//~ }
	//~ public function isloggedIn(){
		//~ $this->includeCORS();
		//~ echo '<pre>';print_r($_SESSION);
		//~ echo 'AAA==='.$userData=$this->session->userdata('login_token');
		//~ if(isset($userData)){
			//~ echo 'Authenticated';
		//~ }
	//~ }
}
