package vn.ansv.Dao;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import vn.ansv.Entity.Slideshow;
import vn.ansv.Entity.SlideshowMapper;

@Repository
public class SlideshowDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	private LocalDateTime _now = LocalDateTime.now();  
	
	public void save(Slideshow slideshow) {
		String sql = "INSERT INTO slideshow (img, caption, content, url, updated_at, updated_by) VALUES (?, ?, ?, ?, ?, ?)";
		jdbcTemplate.update(sql, slideshow.getImg(), slideshow.getCaption(), slideshow.getContent(), slideshow.getUrl(), _now, slideshow.getUpdated_by());
	}

	public void delete(int id) {
		String sql = "DELETE FROM slideshow WHERE id = " + id;
		jdbcTemplate.update(sql);
	}
	
	public void update(Slideshow slideshow) {
		String sql = "UPDATE slideshow SET img = ?, caption = ?, content = ?, url = ?, updated_at = ?, updated_by = ? WHERE id = ? ";
		jdbcTemplate.update(sql, slideshow.getImg(), slideshow.getCaption(), slideshow.getContent(), slideshow.getUrl(), _now, slideshow.getUpdated_by(), slideshow.getId());
	}

	public Slideshow findById(int id) {
		String sql = "SELECT * FROM slideshow WHERE id = ?";
		return jdbcTemplate.queryForObject(sql, new SlideshowMapper(), id);
	}

	public List<Slideshow> findAll() {
		String sql = "SELECT * FROM slideshow";
		return jdbcTemplate.query(sql, new SlideshowMapper());
	}
	
}
