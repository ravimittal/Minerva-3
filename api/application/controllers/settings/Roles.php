<?php
//defined('BASEPATH') OR exit('No direct script access allowed');

class Roles extends CI_Controller {

	public function __construct()
	{
			parent::__construct();
			$this->load->model('settings/roles/roles_model');
			$this->load->helper('url_helper');
	}

	public function view($message = false)
	{
		header("Access-Control-Allow-Origin: *");
		$data['roles'] = $this->roles_model->get_roles();
		echo json_encode($data);
		//~ if (empty($data['customers']))
        //~ {
			//~ show_404();
        //~ }
        
		//~ $data['title'] = 'Customers';
		
		//~ if($message){
			//~ $data['message'] = $message;
		//~ }
		//~ 
		//~ $this->load->view('templates/header', $data);
		//~ $this->load->view('customers/customers', $data);
		//~ $this->load->view('templates/footer');
	}
	
	public function edit($id = null)
	{
		header("Access-Control-Allow-Origin: *");
		
		$request_body = file_get_contents('php://input');
		$data = json_decode($request_body);
		if($this->roles_model->update_role((array)$data))
			echo 'done';
		
		//~ $this->load->helper('form');
		//~ $this->load->library('form_validation');
//~ 
		//~ $data['title'] = 'Edit Customer';
		//~ $data['customer'] = $this->get($id);
//~ 
		//~ $this->form_validation->set_rules('first_name', 'First Name', 'required');
		//~ $this->form_validation->set_rules('description', 'Description', 'required');
		//~ 
		//~ if ($this->form_validation->run() == FALSE)
		//~ {
			//~ $this->load->view('templates/header', $data);
			//~ $this->load->view('customers/edit');
			//~ $this->load->view('templates/footer');
//~ 
		//~ }
		//~ else
		//~ {
			//~ $this->roles_model->update_role();
			//~ $this->view('Customer updated successfully');
		//~ }
	}
	
	public function create()
	{
		header("Access-Control-Allow-Origin: *");
		$request_body = file_get_contents('php://input');
		$data = json_decode($request_body);
		if($this->roles_model->set_role((array)$data))
			echo 'done';
		
		//~ $this->load->helper('form');
		//~ $this->load->library('form_validation');

		//~ $data['title'] = 'Create a new customer';

		//~ $this->form_validation->set_rules('first_name', 'First Name', 'required');
		//~ $this->form_validation->set_rules('description', 'Description', 'required');
		
		//~ if ($this->form_validation->run() == FALSE)
		//~ {
			//~ $this->load->view('templates/header', $data);
			//~ $this->load->view('customers/create');
			//~ $this->load->view('templates/footer');
//~ 
		//~ }
		//~ else
		//~ {
			//~ $this->roles_model->set_role();
			//~ $this->view('Customer created successfully');
		//~ }
	}
	
	public function delete($id = null)
	{
		header("Access-Control-Allow-Origin: *");
		$request_body = file_get_contents('php://input');
		$data = (array)json_decode($request_body);
		if(count($data) > 0){
			$id = $data['id'];
			if($this->roles_model->delete_role($id))
				echo 'done';
		}else
			echo 'error';
	}
	
	public function get()
	{
		header("Access-Control-Allow-Origin: *");
		$request_body = file_get_contents('php://input');
		$data = (array)json_decode($request_body);
		$id = null;
		if(count($data) > 0)
			$id = $data['id'];
		$data['role'] = $this->roles_model->get_role($id);
		echo json_encode($data);
		//~ return $this->roles_model->get_role($id);
	}
}
