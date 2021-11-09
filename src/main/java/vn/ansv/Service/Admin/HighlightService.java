package vn.ansv.Service.Admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vn.ansv.Dao.HighlightDao;
import vn.ansv.Entity.Highlight;

@Service
public class HighlightService {

	@Autowired
	private HighlightDao highlightDao;
	
	public List<Highlight> findAll() {
		return highlightDao.findAll();
	}

	public Highlight findById(int id) {
		return highlightDao.findById(id);
	}
	
	public void save(Highlight highlight){
		// validate business
		highlightDao.save(highlight);
	}

	public void update(Highlight highlight){
		// validate business
		highlightDao.update(highlight);
	}
	
	public void delete(int id){
		// validate business
		highlightDao.delete(id);
	}
	
}
