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

import vn.ansv.Entity.News;
import vn.ansv.Service.Admin.NewsService;
import vn.ansv.Service.Admin.News_typeService;

@Controller
@RequestMapping("admin")
public class NewsController {
	
	@Autowired
	private NewsService newsService;
	
	@Autowired
	private News_typeService news_typeService;
	
	@RequestMapping(value={"/news/list"})
	public String listNews(Model model, HttpServletRequest request) {
		
		String userName = "not logged in"; // Any default user  name
	    Principal principal = request.getUserPrincipal();
	    if (principal != null) {
	        userName = principal.getName();
	    }

	    model.addAttribute("username", userName);
		model.addAttribute("listNews", newsService.findAllNews());
		return "admin/news/news_list";
		
	}
	
	@RequestMapping("/news/details/{id}")
	public String newsDetail(@PathVariable int id, Model model) {
		
		model.addAttribute("newDetails", newsService.findByID(id));
		return "admin/news/news_details";
		
	}
	
	@RequestMapping("/news/save")
	public String insertNews(Model model, HttpServletRequest request) {
		
		String userName = "not logged in"; // Any default user  name
	    Principal principal = request.getUserPrincipal();
	    if (principal != null) {
	        userName = principal.getName();
	    }
	    
	    model.addAttribute("username", userName);
	    model.addAttribute("listNews_type", news_typeService.findAll());
		model.addAttribute("news", new News());
		return "admin/news/news_save";
	}
	
	@RequestMapping("/news/update/{id}")
	public String updateNews(@PathVariable int id, Model model, HttpServletRequest request) {
		
		String userName = "not logged in"; // Any default user  name
	    Principal principal = request.getUserPrincipal();
	    if (principal != null) {
	        userName = principal.getName();
	    }
	    
	    News news = newsService.findById(id);

	    model.addAttribute("username", userName);
	    model.addAttribute("listNews_type", news_typeService.findAll());
		model.addAttribute("news", news);
		return "admin/news/news_update";
	}

	@RequestMapping(value = { "/saveNews" }, method = RequestMethod.POST)
	public String doSaveNews(@RequestParam("fileup") CommonsMultipartFile file, @ModelAttribute("News") News news, HttpSession s, Model model) {
		
		System.out.println("File upload handler");
		System.out.println(file.getSize());
		System.out.println(file.getContentType());
		System.out.println(file.getName());
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getStorageDescription());
		byte[] data = file.getBytes();
		//we have to save this file to server...
		String path = s.getServletContext().getRealPath("/") + "assets" + File.separator + "user" + File.separator + "img" + File.separator + "news" + File.separator + file.getOriginalFilename();
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
		newsService.save(news);
		model.addAttribute("listNews", newsService.findAll());

		return "redirect:/admin/news/list";
	}

	@RequestMapping("/updateNews")
	public String doUpdateNews(@RequestParam("fileup") CommonsMultipartFile file, @ModelAttribute("News") News news, HttpSession s, Model model) {
		
		System.out.println("File upload handler");
		System.out.println(file.getSize());
		System.out.println(file.getContentType());
		System.out.println(file.getName());
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getStorageDescription());
		byte[] data = file.getBytes();
		//we have to save this file to server...
		String path = s.getServletContext().getRealPath("/") + "assets" + File.separator + "user" + File.separator + "img" + File.separator + "news" + File.separator + file.getOriginalFilename();
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
		
		newsService.update(news);
		model.addAttribute("listNews", newsService.findAll());
		return "redirect:/admin/news/list";
	}
	
	@RequestMapping("/newsDelete/{id}")
	public String doDeleteNews(@PathVariable int id, Model model) {
		newsService.delete(id);
		model.addAttribute("listNews", newsService.findAll());
		return "redirect:/admin/news/list";
	}
	
	
	
// Đầu: Test insert tin tức kết hợp upload hình ảnh
//	@RequestMapping("/news/save-test")
//	public String insertNewsTest(Model model, HttpServletRequest request) {
//		
//		String userName = "not logged in"; // Any default user  name
//	    Principal principal = request.getUserPrincipal();
//	    if (principal != null) {
//	        userName = principal.getName();
//	    }
//	    
//	    model.addAttribute("username", userName);
//	    model.addAttribute("listNews_type", news_typeService.findAll());
//		model.addAttribute("news", new News());
//		return "admin/news/news_save_test_2";
//	}
//	
//	@RequestMapping("/saveNewsTest")
//	public String doSaveNewsTest(@RequestParam("fileup") CommonsMultipartFile file, @ModelAttribute("News") News news, HttpSession s, Model model) {
//		
//		System.out.println("File upload handler");
//		System.out.println(file.getSize());
//		System.out.println(file.getContentType());
//		System.out.println(file.getName());
//		System.out.println(file.getOriginalFilename());
//		System.out.println(file.getStorageDescription());
//		byte[] data = file.getBytes();
//		//we have to save this file to server...
//		String path = s.getServletContext().getRealPath("/") + "assets" + File.separator + "user" + File.separator + "img" + File.separator + "news" + File.separator + file.getOriginalFilename();
//		System.out.println(path);
//		
//		try {
//			FileOutputStream fos = new FileOutputStream(path);
//			
//			// Tiến hành lưu file
//			fos.write(data);
//			fos.close();
//			System.out.println("File uploaded");
//			
//			model.addAttribute("msg", "Uploaded successfully");
//			model.addAttribute("path", path);
//			model.addAttribute("filename", file.getOriginalFilename());
//			
//		} catch (IOException e) {
//			e.printStackTrace();
//			System.out.println("Uploading error");
//			
//			model.addAttribute("msg", "Uploading error!!!");
//		}
//		
//		// Insert data into database
//		newsService.save(news);
//		model.addAttribute("listNews", newsService.findAll());
//
//		return "redirect:/admin/news/list";
//	}
// Cuối: Test insert tin tức kết hợp upload hình ảnh
	
	
	
}
