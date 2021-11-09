package vn.ansv.Entity;

import java.sql.Date;

public class News_type {

	private int id;
	private String name;
	private Date updated_at;
	private String updated_by;
	
	public News_type() {
		super();
	}

	
	
	public News_type(String name, Date updated_at, String updated_by) {
		this.name = name;
		this.updated_at = updated_at;
		this.updated_by = updated_by;
	}
	
	public News_type(int id, String name, Date updated_at, String updated_by) {
		this.id = id;
		this.name = name;
		this.updated_at = updated_at;
		this.updated_by = updated_by;
	}

	@Override
	public String toString() {
		return "News_type [id=" + id + ", name=" + name + ", updated_at=" + updated_at + ", updated_by=" + updated_by + "]";
	}
	
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}

	public String getUpdated_by() {
		return updated_by;
	}

	public void setUpdated_by(String updated_by) {
		this.updated_by = updated_by;
	}
	
}
