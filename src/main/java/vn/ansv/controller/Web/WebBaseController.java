package vn.ansv.controller.Web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;

import vn.ansv.Service.Admin.HighlightService;
import vn.ansv.Service.Admin.NewsService;
import vn.ansv.Service.Admin.NewsTypeService;
import vn.ansv.Service.Admin.SlideshowService;
import vn.ansv.Service.Web.HomeServiceImpl;

@Controller
public class WebBaseController {

	@Autowired
	HomeServiceImpl _homeService;
	
	@Autowired
	SlideshowService _slideshowService;
	
	@Autowired
	HighlightService _highlightService;
	
	@Autowired
	NewsService _newsService;
	
	@Autowired
	NewsTypeService _news_typeService;
	
	public ModelAndView _mvShare = new ModelAndView();
	
}
