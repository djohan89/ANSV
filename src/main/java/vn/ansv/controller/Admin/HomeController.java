package vn.ansv.controller.Admin;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller(value = "homeControllerOfAdmin")
public class HomeController {

	@RequestMapping(value = "/administrator/home", method = RequestMethod.GET)
	public ModelAndView homePage() {
		ModelAndView mav = new ModelAndView("admin/home");
		return mav;
	}
	
	@RequestMapping(value = "/rate")
	public String rateHandler(HttpServletRequest request) {
	    //your controller code
	    String referer = request.getHeader("Referer");
	    return "redirect:"+ referer;
	}
}
