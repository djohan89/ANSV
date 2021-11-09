package vn.ansv.controller.Web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController extends WebBaseController {
	
	@RequestMapping(value = { "/", "/trang-chu" }, method = RequestMethod.GET)
	public ModelAndView indexWeb() {
		_mvShare.addObject("slideshow", _slideshowService.findAll());
		_mvShare.addObject("highlight", _highlightService.findAll());
		_mvShare.addObject("news", _newsService.findLimit());
		_mvShare.setViewName("web/home");
		return _mvShare;
	}
	
	@RequestMapping(value = "/ve-chung-toi", method = RequestMethod.GET)
	public ModelAndView aboutPage() {
		ModelAndView mav = new ModelAndView("web/about_us");
		return mav;
	}
	
	@RequestMapping(value = "/to-chuc", method = RequestMethod.GET)
	public ModelAndView structurePage() {
		ModelAndView mav = new ModelAndView("web/structure");
		return mav;
	}
	
	@RequestMapping(value = "/lich-su", method = RequestMethod.GET)
	public ModelAndView historyPage() {
		ModelAndView mav = new ModelAndView("web/history_timeline");
		return mav;
	}
	
	@RequestMapping(value = "/thong-diep", method = RequestMethod.GET)
	public ModelAndView thongDiep() {
		ModelAndView mav = new ModelAndView("web/thong_diep");
		return mav;
	}
	
	@RequestMapping(value = "/khach-hang", method = RequestMethod.GET)
	public ModelAndView clientPage() {
		ModelAndView mav = new ModelAndView("web/client");
		return mav;
	}
	
	@RequestMapping(value = "/san-pham-thuong-mai", method = RequestMethod.GET)
	public ModelAndView productCommerPage() {
		ModelAndView mav = new ModelAndView("web/product-commer-new");
		return mav;
	}
	
	@RequestMapping(value = "/san-pham-cong-nghe-cong-nghiep", method = RequestMethod.GET)
	public ModelAndView productInformationPage() {
		ModelAndView mav = new ModelAndView("web/product_information");
		return mav;
	}
	@RequestMapping(value = "/du-an-tieu-bieu", method = RequestMethod.GET)
	public ModelAndView hightlightPage() {
		ModelAndView mav = new ModelAndView("web/hightlight");
		return mav;
	}
	
	@RequestMapping(value = "/chuyen-nganh-vien-thong", method = RequestMethod.GET)
	public ModelAndView telecomPage() {
		ModelAndView mav = new ModelAndView("web/telecom");
		return mav;
	}
	
	@RequestMapping(value = "/cong-nghe-thong-tin", method = RequestMethod.GET)
	public ModelAndView ifTechnologyPage() {
		ModelAndView mav = new ModelAndView("web/if_technology");
		return mav;
	}
	
	@RequestMapping(value = "/chuyen-doi-so", method = RequestMethod.GET)
	public ModelAndView nbConvertPage() {
		ModelAndView mav = new ModelAndView("web/nb_convert");
		return mav;
	}
	
	@RequestMapping(value = "/dich-vu", method = RequestMethod.GET)
	public ModelAndView servicePage() {
		ModelAndView mav = new ModelAndView("web/service");
		return mav;
	}
	
	@RequestMapping(value = "/chi-tiet-san-pham", method = RequestMethod.GET)
	public ModelAndView producDetailPage() {
		ModelAndView mav = new ModelAndView("web/product_detail");
		return mav;
	}
	
	@RequestMapping(value = "/tin-tuc", method = RequestMethod.GET)
	public ModelAndView newsPage() {
		_mvShare.addObject("news_type", _news_typeService.findAll());
		_mvShare.addObject("news", _newsService.findAllNews());
		_mvShare.setViewName("web/news");
		return _mvShare;
	}
	
	@RequestMapping(value = "/lien-he", method = RequestMethod.GET)
	public ModelAndView contactPage() {
		ModelAndView mav = new ModelAndView("web/contact");
		return mav;
	}
	
	
	
	/* Chi tiết sản phẩm */
	
	@RequestMapping(value = "/HVIP01", method = RequestMethod.GET)
	public ModelAndView HVIP01() {
		ModelAndView mav = new ModelAndView("web/product_detail/HVIP01");
		return mav;
	}
	
	@RequestMapping(value = "/HVOF01", method = RequestMethod.GET)
	public ModelAndView HVOF01() {
		ModelAndView mav = new ModelAndView("web/product_detail/HVOF01");
		return mav;
	}
	
	@RequestMapping(value = "/Sm_box2", method = RequestMethod.GET)
	public ModelAndView Sm_box2() {
		ModelAndView mav = new ModelAndView("web/product_detail/Sm_box2");
		return mav;
	}
	
	@RequestMapping(value = "/Sm_box2_ATV", method = RequestMethod.GET)
	public ModelAndView Sm_box2_ATV() {
		ModelAndView mav = new ModelAndView("web/product_detail/Sm_box2_ATV");
		return mav;
	}
	
	@RequestMapping(value = "/EW12S_SG", method = RequestMethod.GET)
	public ModelAndView EW12S_SG() {
		ModelAndView mav = new ModelAndView("web/product_detail/EW12S_SG");
		return mav;
	}
	
	@RequestMapping(value = "/EW12C_CG", method = RequestMethod.GET)
	public ModelAndView EW12C_CG() {
		ModelAndView mav = new ModelAndView("web/product_detail/EW12C_CG");
		return mav;
	}
	
	@RequestMapping(value = { "/GW040_H" }, method = RequestMethod.GET)
	public ModelAndView GW040_H() {
		ModelAndView mav = new ModelAndView("web/product_detail/GW040_H");
		return mav;
	}
	
	@RequestMapping(value = { "/GW020_H" }, method = RequestMethod.GET)
	public ModelAndView GW020_H() {
		ModelAndView mav = new ModelAndView("web/product_detail/GW020_H");
		return mav;
	}
	
	@RequestMapping(value = { "/22N_01" }, method = RequestMethod.GET)
	public ModelAndView I22N_01() {
		ModelAndView mav = new ModelAndView("web/product_detail/22N_01");
		return mav;
	}
	
	@RequestMapping(value = { "/MR4G_11D" }, method = RequestMethod.GET)
	public ModelAndView MR4G_11D() {
		ModelAndView mav = new ModelAndView("web/product_detail/MR4G_11D");
		return mav;
	}
	
	@RequestMapping(value = { "/GW240_H" }, method = RequestMethod.GET)
	public ModelAndView GW240_H() {
		ModelAndView mav = new ModelAndView("web/product_detail/GW240_H");
		return mav;
	}
	
	/* Tin tức */
	
	@RequestMapping(value = { "/mesh_vs_rep" }, method = RequestMethod.GET)
	public ModelAndView mesh_vs_rep() {
		ModelAndView mav = new ModelAndView("web/news/mesh_vs_rep");
		return mav;
	}
	
	
	
	@RequestMapping(value = { "/noi-bo" }, method = RequestMethod.GET)
	public ModelAndView Internal() {
		ModelAndView mav = new ModelAndView("web/internal/internal_home");
		return mav;
	}
	
	
	
	@RequestMapping(value = { "/home-test" }, method = RequestMethod.GET)
	public ModelAndView homeTest() {
		ModelAndView mav = new ModelAndView("web/home_test");
		return mav;
	}
	
}
