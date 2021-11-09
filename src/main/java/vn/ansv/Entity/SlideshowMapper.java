package vn.ansv.Entity;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class SlideshowMapper implements RowMapper<Slideshow> {
	
	public Slideshow mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		Slideshow slideshow = new Slideshow();
		
		slideshow.setId(rs.getInt("id"));
		slideshow.setImg(rs.getString("img"));
		slideshow.setCaption(rs.getString("caption"));
		slideshow.setContent(rs.getString("content"));
		slideshow.setUrl(rs.getString("url"));
		slideshow.setUpdated_at(rs.getDate("updated_at"));
		slideshow.setUpdated_by(rs.getString("updated_by"));
		
		return slideshow;
	}
	
}
