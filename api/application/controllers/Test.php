<?php
Class Test extends CI_Controller{
	function __construct() { 
         parent::__construct(); 
         //$this->load->helper('url'); 
         $this->load->database(); 
     } 
	public function index(){//http://www.your-domain.com/index.php/controller/method-name
		echo 'HIIIII';
	}
	public function insert(){
		echo 'Inseted';
		$data=array('name'=>'Sheen');
		$this->db->insert('stud',$data);
		$this->load->view('test');
	}
	public function update($id){
		if($id!=''){
			echo 'Updated';
			$data = array( 
			   'name' => 'Pratibha Sharma'
			);
			$this->db->set($data); 
			$this->db->where("roll_no", $id); 
			$this->db->update("stud", $data);
			$this->load->view('test');
		}
	}
	public function delete($id){
		echo 'Deleted';
		$this->db->delete("stud", "roll_no = ".$id);
		$this->load->view('test');
	}
	public function getAllresults(){
		$query = $this->db->get("stud"); 
		$data['records'] = $query->result();
		echo '<pre>';print_r($data);
	}
}
?>
