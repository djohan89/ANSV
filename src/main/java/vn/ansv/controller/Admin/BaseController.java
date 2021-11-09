package vn.ansv.controller.Admin;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BaseController {

	public ModelAndView _mvShare = new ModelAndView();
	
	@PostConstruct
	public ModelAndView GetUserInfor() {
		
		_mvShare.addObject("username", "Hello!!!");
		return _mvShare;
	}
	
}
