<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {
	function __construct() { 
         parent::__construct(); 
         $this->load->helper('url'); 
         $this->load->database(); 
        
      }
      
	public function checklogin()
	{	
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Headers: Content-Type');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
		$postdata = file_get_contents("php://input");
		$request = json_decode($postdata,true);
		if(!empty($request['uname']) && !empty($request['pass'])){
			$query =$this->db->get_where("admin_users",array("Email_Id"=>$request['uname'],"Password"=>md5($request['pass'])));
			$data = $query->result();
			if($query->num_rows()=='1')
				echo json_encode($data[0]->User_Id);
			else
				echo json_encode(0);
		}
	}
}
