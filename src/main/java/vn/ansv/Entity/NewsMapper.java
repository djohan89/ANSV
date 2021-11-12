package vn.ansv.Entity;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class NewsMapper implements RowMapper<News> {

	public News mapRow(ResultSet rs, int rowNum) throws SQLException {

		News news = new News();
		
		news.setId(rs.getInt("id"));
		news.setImg(rs.getString("img"));
		news.setTitle(rs.getString("title"));
		news.setSummary(rs.getString("summary"));
		news.setContent(rs.getString("content"));
		news.setUrl(rs.getString("url"));
		news.setNews_type(rs.getInt("news_type"));
		news.setUpdated_at(rs.getDate("updated_at"));
		news.setUpdated_by(rs.getString("updated_by"));
		
		return news;
	}
	
}
