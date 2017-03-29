<?php
Class Stud_controller extends CI_Controller{
	function __construct(){
		parent::__construct();
		$this->load->helper('url');
		$this->load->database();
	}
	public function index(){
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Headers: Content-Type');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
		$query = $this->db->get("stud"); 
        $records = $query->result();
        echo json_encode($records);
	}
	public function add_student_view() { 
         $this->load->helper('form'); 
         $this->load->view('Stud_add'); 
    }
    public function add_student() {
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Headers: Content-Type');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
		
		$post = file_get_contents('php://input');
		$post = json_decode($post,true);
		if($post['name']!=''){
			$this->load->model('Stud_Model');
			$data = array(
				'name' => $post['name']
			);
			$this->db->insert("stud", $data);
			$query = $this->db->get("stud"); 
			$records = $query->result();
			echo json_encode($records);
		 }
         //$this->load->view('Stud_view',$data); 
	}
	public function update_student_view() { 
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Headers: Content-Type');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
		
		$post = file_get_contents('php://input');
		$post = json_decode($post,true);
         $this->load->helper('form'); 
         $roll_no = $post['roll_no']; 
         $query = $this->db->get_where("stud",array("roll_no"=>$roll_no));
         $records = $query->result(); 
         echo json_encode($records);
      } 
  public function update_student(){ 
	  header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Headers: Content-Type');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
		
		$post = file_get_contents('php://input');
		$post = json_decode($post,true);
	  
	 $this->load->model('Stud_Model');
	 $data = array( 
		'name' => $post['name'] 
	 ); 
	 $this->Stud_Model->update($data,$post['roll_no']);
	 $query = $this->db->get("stud"); 
	 //~ $records = $query->result(); 
  } 
   public function delete_student() { 
	 $this->load->model('Stud_Model'); 
	 $roll_no = $this->uri->segment('3'); 
	 $this->Stud_Model->delete($roll_no); 

	 $query = $this->db->get("stud"); 
	 $data['records'] = $query->result(); 
	 $this->load->view('Stud_view',$data); 
  } 
}
?>
