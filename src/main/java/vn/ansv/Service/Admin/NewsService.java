package vn.ansv.Service.Admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vn.ansv.Dao.NewsDao;
import vn.ansv.Dto.NewsDto;
import vn.ansv.Entity.News;

@Service
public class NewsService {

	@Autowired
	private NewsDao newsDao;
	
	public List<News> findAll() {
		return newsDao.findAll();
	}
	
	public List<NewsDto> findAllNews() {
		return newsDao.findAllNews();
	}
	
	public List<News> findLimit() {
		return newsDao.findLimit();
	}

	public News findById(int id) {
		return newsDao.findById(id);
	}
	
	public void save(News news){
		// validate business
		newsDao.save(news);
	}

	public void update(News news){
		// validate business
		newsDao.update(news);
	}
	
	public void delete(int id){
		// validate business
		newsDao.delete(id);
	}
	
}
