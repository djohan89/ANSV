package vn.ansv.Entity;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class News_typeMapper implements RowMapper<News_type> {

	public News_type mapRow(ResultSet rs, int rowNum) throws SQLException {

		News_type news_type = new News_type();
		
		news_type.setId(rs.getInt("id"));
		news_type.setName(rs.getString("name"));
		news_type.setUpdated_at(rs.getDate("updated_at"));
		news_type.setUpdated_by(rs.getString("updated_by"));
		
		return news_type;
		
	}

}
