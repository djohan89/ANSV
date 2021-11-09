package vn.ansv.Service.Admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vn.ansv.Dao.SlideshowDao;
import vn.ansv.Entity.Slideshow;

@Service
public class SlideshowService {

	@Autowired
	private SlideshowDao slideshowDao;
	
	public List<Slideshow> findAll() {
		return slideshowDao.findAll();
	}

	public Slideshow findById(int id) {
		return slideshowDao.findById(id);
	}
	
	public void save(Slideshow slideshow){
		// validate business
		slideshowDao.save(slideshow);
	}

	public void update(Slideshow slideshow){
		// validate business
		slideshowDao.update(slideshow);
	}
	
	public void delete(int id){
		// validate business
		slideshowDao.delete(id);
	}
	
}
