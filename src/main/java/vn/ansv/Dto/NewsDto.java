package vn.ansv.Dto;

import java.sql.Date;

public class NewsDto {

	private int id;
	private String img;
	private String title;
	private String summary;
	private String content;
	private String url;
	private String classify;
	private Date updated_at;
	private String updated_by;
	
	public NewsDto() {
		super();
	}
	
	
	
	public NewsDto(String img, String title, String summary, String content, String url, String classify, Date updated_at, String updated_by) {
		this.img = img;
		this.title = title;
		this.summary = summary;
		this.content = content;
		this.url = url;
		this.classify = classify;
		this.updated_at = updated_at;
		this.updated_by = updated_by;
	}
	
	public NewsDto(int id, String img, String title, String summary, String content, String url, String classify, Date updated_at, String updated_by) {
		this.id = id;
		this.img = img;
		this.title = title;
		this.summary = summary;
		this.content = content;
		this.url = url;
		this.classify = classify;
		this.updated_at = updated_at;
		this.updated_by = updated_by;
	}

	@Override
	public String toString() {
		return "News [id=" + id + ", img=" + img + ", title=" + title + ", summary=" + summary + ", content=" + content + ", url=" + url + ", classify=" + classify + ", updated_at=" + updated_at + ", updated_by=" + updated_by + "]";
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getClassify() {
		return classify;
	}

	public void setClassify(String classify) {
		this.classify = classify;
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
