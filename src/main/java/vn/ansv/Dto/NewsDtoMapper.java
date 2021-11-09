package vn.ansv.Dto;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class NewsDtoMapper implements RowMapper<NewsDto> {

	public NewsDto mapRow(ResultSet rs, int rowNum) throws SQLException {

		NewsDto news = new NewsDto();
		
		news.setId(rs.getInt("id"));
		news.setImg(rs.getString("img"));
		news.setTitle(rs.getString("title"));
		news.setContent(rs.getString("content"));
		news.setUrl(rs.getString("url"));
		news.setClassify(rs.getString("classify"));
		news.setUpdated_at(rs.getDate("updated_at"));
		news.setUpdated_by(rs.getString("updated_by"));
		
		return news;
		
	}

}
