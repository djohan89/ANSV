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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import vn.ansv.Entity.Highlight;
import vn.ansv.Service.Admin.HighlightService;

@Controller
@RequestMapping("admin")
public class HighlightController {

	@Autowired
	private HighlightService highlightService;
	
	@RequestMapping(value={"/highlight/list"})
	public String listNews(Model model, HttpServletRequest request) {
		
		String userName = "not logged in"; // Any default user  name
	    Principal principal = request.getUserPrincipal();
	    if (principal != null) {
	        userName = principal.getName();
	    }

	    model.addAttribute("username", userName);
		model.addAttribute("listHighlight", highlightService.findAll());
		return "admin/highlight/highlight_list";
		
	}
	
	@RequestMapping("/highlight/update/{id}")
	public String updateHighlight(@PathVariable int id, Model model, HttpServletRequest request) {
		
		String userName = "not logged in"; // Any default user  name
	    Principal principal = request.getUserPrincipal();
	    if (principal != null) {
	        userName = principal.getName();
	    }
		
		Highlight highlight = highlightService.findById(id);
		
		model.addAttribute("username", userName);
		model.addAttribute("highlight", highlight);
		return "admin/highlight/highlight_update";
	}

	@RequestMapping("/updateHighlight")
	public String doUpdateHighlight(@RequestParam("fileup") CommonsMultipartFile file, @ModelAttribute("Highlight") Highlight highlight, HttpSession s, Model model) {
		
		System.out.println("File upload handler");
		System.out.println(file.getSize());
		System.out.println(file.getContentType());
		System.out.println(file.getName());
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getStorageDescription());
		byte[] data = file.getBytes();
		//we have to save this file to server...
		String path = s.getServletContext().getRealPath("/") + "assets" + File.separator + "user" + File.separator + "img" + File.separator + "noi_bat" + File.separator + file.getOriginalFilename();
		System.out.println(path);
		
		try {
			FileOutputStream fos = new FileOutputStream(path);
			
			// Tiến hành lưu file
			fos.write(data);
			fos.close();
			System.out.println("File uploaded");
			
			model.addAttribute("msg", "Up ảnh nổi bật thành công!!!");
			model.addAttribute("path", path);
			model.addAttribute("filename", file.getOriginalFilename());
			
		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("Uploading error");
			
			model.addAttribute("msg", "Uploading error!!!");
		}
		
		highlightService.update(highlight);
		model.addAttribute("listNews", highlightService.findAll());
		return "redirect:/admin/highlight/list";
	}
	
}
