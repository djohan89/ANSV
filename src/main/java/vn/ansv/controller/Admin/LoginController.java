package vn.ansv.controller.Admin;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {
	
	@RequestMapping("/login_admin")
	public String login1(@RequestParam(required = false) String message, final Model model) {
		if (message != null && !message.isEmpty()) {
			if (message.equals("logout")) {
				model.addAttribute("message", "Logout!");
			}
			if (message.equals("error")) {
				model.addAttribute("message", "Login Failed!");
			}
		}
		return "admin/login_admin";
	}

	@RequestMapping("/login_user")
	public String login2(@RequestParam(required = false) String message, final Model model) {
		if (message != null && !message.isEmpty()) {
			if (message.equals("logout")) {
				model.addAttribute("message", "Logout!");
			}
			if (message.equals("error")) {
				model.addAttribute("message", "Login Failed!");
			}
		}
		return "admin/login_user";
	}

	@RequestMapping("/")
	public String index() {
		return "index";
	}

	@RequestMapping("/admin/admin")
	public String admin() {
		return "admin/admin";
	}

	@RequestMapping("/user")
	public String user() {
		return "admin/user";
	}
	
	

}
