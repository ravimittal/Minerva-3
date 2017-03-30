<?php
class Roles_model extends CI_Model {

	public function __construct()
	{
			$this->load->database();
	}
	public function get_roles($id = FALSE)
	{
		if ($id === FALSE)
		{
			$query = $this->db->get('admin_roles');
			return $query->result_array();
		}

		$query = $this->db->get_where('admin_roles', array('Role_Id' => $id));
		return $query->row_array();
	}
	public function set_role($data)
	{
		$this->load->helper('url');

		$data = array(
			'Role_Name' => $data['role_name'],
			'Role_Permissions' => $data['role_permissions'],
			'Role_Websites' => $data['role_websites']
		);
		return $this->db->insert('admin_roles', $data);
	}
	public function update_role($data)
	{
		$this->load->helper('url');
		$id = $data['id'];
		$data = array(
			'Role_Name' => $data['role_name'],
			'Role_Permissions' => $data['role_permissions'],
			'Role_Websites' => $data['role_websites']
		);
		$this->db->set($data)
				->where('Role_Id',$id)
				->update('admin_roles');
		return true;
	}
	public function delete_role($id)
	{
		$this->db->where('Role_Id', $id);
		return $this->db->delete('admin_roles'); 
	}
}
