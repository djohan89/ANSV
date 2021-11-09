package vn.ansv.Dao;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import vn.ansv.Entity.News_type;
import vn.ansv.Entity.News_typeMapper;

@Repository
public class News_typeDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	private LocalDateTime _now = LocalDateTime.now();
	
	public List<News_type> findAll() {
		String sql = "SELECT * FROM news_type";
		return jdbcTemplate.query(sql, new News_typeMapper());
	}
	
}
