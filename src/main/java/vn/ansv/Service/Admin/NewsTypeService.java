package vn.ansv.Service.Admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vn.ansv.Dao.News_typeDao;
import vn.ansv.Entity.News_type;

@Service
public class NewsTypeService {

	@Autowired
	private News_typeDao news_typeDao;
	
	public List<News_type> findAll() {
		// TODO Auto-generated method stub
		return news_typeDao.findAll();
	}
	
}
