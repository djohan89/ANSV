package vn.ansv.controller.Admin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.security.Principal;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import vn.ansv.Entity.Slideshow;
import vn.ansv.Service.Admin.SlideshowService;

@Controller
public class SlidesController extends BaseController {

	@Autowired
	private SlideshowService slideshowService;
	
	@RequestMapping(value = { "/admin/slideshow/list-test" }, method = RequestMethod.GET)
	public ModelAndView listSlideshowTest(HttpServletRequest request) {
		_mvShare.setViewName("admin/slideshow/slideshow_list_new");
		return _mvShare;
	}

	// Show dữ liệu slideshow
	@RequestMapping(value = { "/admin/slideshow/list" })
	public String listSlideshow(Model model, HttpServletRequest request) {
		
		String userName = "not logged in"; // Any default user  name
	    Principal principal = request.getUserPrincipal();
	    if (principal != null) {
	        userName = principal.getName();
	    }

	    model.addAttribute("username", userName);
		model.addAttribute("listSlideshow", slideshowService.findAll());
		return "admin/slideshow/slideshow_list_new";
		
	}

	@RequestMapping("/admin/slideshow/save")
	public String insertSlideshow(Model model, HttpServletRequest request) {
		
		String userName = "not logged in"; // Any default user  name
	    Principal principal = request.getUserPrincipal();
	    if (principal != null) {
	        userName = principal.getName();
	    }
		
	    model.addAttribute("username", userName);
		model.addAttribute("slideshow", new Slideshow());
		return "admin/slideshow/slideshow_save";
	}

	@RequestMapping("/admin/slideshow/view/{id}")
	public String viewSlideshow(@PathVariable int id, Model model) {
		Slideshow slideshow = slideshowService.findById(id);
		model.addAttribute("slideshow", slideshow);
		return "admin/slideshow/slideshow_view";
	}
	
	@RequestMapping("/admin/slideshow/update/{id}")
	public String updateSlideshow(@PathVariable int id, Model model, HttpServletRequest request) {
		
		String userName = "not logged in"; // Any default user  name
	    Principal principal = request.getUserPrincipal();
	    if (principal != null) {
	        userName = principal.getName();
	    }
	    
	    Slideshow slideshow = slideshowService.findById(id);

	    model.addAttribute("username", userName);
		model.addAttribute("slideshow", slideshow);
		return "admin/slideshow/slideshow_update";
	}

	@RequestMapping(value = { "/admin/saveSlideshow" }, method = RequestMethod.POST)
	public String doSaveSlideshow(@RequestParam("fileup") CommonsMultipartFile file, @ModelAttribute("Slideshow") Slideshow slideshow, HttpSession s, Model model) {
		
		System.out.println("File upload handler");
		System.out.println(file.getSize());
		System.out.println(file.getContentType());
		System.out.println(file.getName());
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getStorageDescription());
		byte[] data = file.getBytes();
		//we have to save this file to server...
		String path = s.getServletContext().getRealPath("/") + "assets" + File.separator + "user" + File.separator + "img" + File.separator + "slider" + File.separator + file.getOriginalFilename();
		System.out.println(path);
		
		try {
			FileOutputStream fos = new FileOutputStream(path);
			
			// Tiến hành lưu file
			fos.write(data);
			fos.close();
			System.out.println("File uploaded");
			
			model.addAttribute("msg", "Uploaded successfully");
			model.addAttribute("path", path);
			model.addAttribute("filename", file.getOriginalFilename());
			
		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("Uploading error");
			
			model.addAttribute("msg", "Uploading error!!!");
		}
		
		// Insert data into database
		slideshowService.save(slideshow);
		model.addAttribute("listSlideshow", slideshowService.findAll());
//		return "admin/slideshow/slideshow_list_new";
		
		return "redirect:/admin/slideshow/list";
	}

	@RequestMapping("/admin/updateSlideshow")
	public String doUpdateSlideshow(@RequestParam("fileup") CommonsMultipartFile file, @ModelAttribute("Slideshow") Slideshow slideshow, HttpSession s, Model model) {
		
		System.out.println("File upload handler");
		System.out.println(file.getSize());
		System.out.println(file.getContentType());
		System.out.println(file.getName());
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getStorageDescription());
		byte[] data = file.getBytes();
		//we have to save this file to server...
		String path = s.getServletContext().getRealPath("/") + "assets" + File.separator + "user" + File.separator + "img" + File.separator + "slider" + File.separator + file.getOriginalFilename();
		System.out.println(path);
		
		try {
			FileOutputStream fos = new FileOutputStream(path);
			
			// Tiến hành lưu file
			fos.write(data);
			fos.close();
			System.out.println("File uploaded");
			
			model.addAttribute("msg", "Uploaded successfully");
			model.addAttribute("path", path);
			model.addAttribute("filename", file.getOriginalFilename());
			
		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("Uploading error");
			
			model.addAttribute("msg", "Uploading error!!!");
		}
		
		slideshowService.update(slideshow);
		model.addAttribute("listSlideshow", slideshowService.findAll());
//		return "admin/slideshow/slideshow_list_new";
		return "redirect:/admin/slideshow/list";
	}
	
	@RequestMapping("/admin/slideshowDelete/{id}")
	public String doDeleteSlideshow(@PathVariable int id, Model model) {
		slideshowService.delete(id);
		model.addAttribute("listSlideshow", slideshowService.findAll());
//		return "admin/slideshow/slideshow_list_new";
		return "redirect:/admin/slideshow/list";
	}
	
}
