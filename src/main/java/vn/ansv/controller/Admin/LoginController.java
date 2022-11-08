package vn.ansv.controller.Admin;

import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.security.core.userdetails.UserDetails;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import vn.ansv.Entity.User;
import vn.ansv.Service.Admin.UserService;

@Controller
public class LoginController {
	
    private static final String PATTERN = "^[a-z0-9_-]*@ansv.vn$";

    @Autowired
    private UserService usersService;

    private ArrayList<String> role_accept = new ArrayList<String>();
    //Change compare_user
    public LoginController() {
        role_accept.add("ROLE_CEO");
        role_accept.add("ROLE_ADMIN_COURSE");
        role_accept.add("ROLE_ADMIN_WEB");
    }

    @RequestMapping("/login_admin")
    public String login1(@RequestParam(required = false) String message, final Model model) {
        if (message != null && !message.isEmpty()) {
            if (message.equals("logout")) {
                model.addAttribute("message", "Đăng xuất thành công");
            }else
            if (message.equals("error")) {
                model.addAttribute("message", "Đã xảy ra lỗi, vui lòng đăng nhập lại!!");
            }else {
                model.addAttribute("message", "Bạn không có quyền đăng nhập vào trang này");
            }
        }
        return "admin/login_admin";
    }

    @RequestMapping("/login_user")
    public String login2(@RequestParam(required = false) String message, final Model model) {
        if (message != null && !message.isEmpty()) {
            if (message.equals("logout")) {
                model.addAttribute("message", "Bạn đã đăng xuất thành công!");
            }
            if (message.equals("error")) {
                model.addAttribute("message", "Đã xảy ra lỗi, vui lòng đăng nhập lại!!");
            }
        }
        return "admin/login_user";
    }

    @RequestMapping("/login_success_admin")
    public String loginSuccess(HttpServletRequest request, HttpSession session, Authentication authentication, Model model) {

        String userName = "- (*)Chưa đăng nhập!";
        if (authentication != null) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            userName = userDetails.getUsername();
            session.setAttribute("display_name", usersService.getByUser(userName).getDisplay_name());
            session.setAttribute("username", userName);

            // Check user's role and then redirect
            if (request.isUserInRole("ROLE_ADMIN_WEB")) {
                return "redirect:/admin/web/quan-ly/slideshow";
            }

            if (request.isUserInRole("ROLE_ADMIN_COURSE")) {
                return "redirect:/admin/khoa-hoc/quan-ly/ban";
            }

            if (request.isUserInRole("ROLE_CEO")) {
                session.setAttribute("show",1);
                return "redirect:/admin/redircet";
            }
            // End: Check user's role and then redirect
        }
        model.addAttribute("message", "falseLogin");
        return "redirect:/login_admin";
    }

    @RequestMapping("/admin/redircet")
    public String redirectOfAdmin(Model model)  {
        model.addAttribute("redircet",0);
        model.addAttribute("ceo",1);
        return "admin/redirectPage";
    }

    @RequestMapping("/noi-bo")
    public String goCourse_HomePage(){
        return "redirect:/login_user";
    }

    @RequestMapping("/dang-ky")
    public String goRegisterPage(@RequestParam(required = false) String message, final Model model){
        if (message != null && !message.isEmpty()) {
            if (message.equals("exist")) {
                model.addAttribute("message", "Email này đã tồn tại!!");
            }
            else
            if (message.equals("invalid")) {
                model.addAttribute("message", "Email này không hợp lệ, vui lòng điền theo mẫu sau:<br> <span style=\"color: cadetblue \">EX: example@ansv.vn</span>");
            }
            else{
                model.addAttribute("message", "Đã xảy ra lỗi,vui lòng đăng ký lại !!");
            }
        }
        return "admin/register";
    }

    @RequestMapping("/register")
    public String Register(@ModelAttribute ("user") User user, final Model model) {

        if(user != null){
            Pattern pattern = Pattern.compile(PATTERN);
            Matcher matcher = pattern.matcher(user.getUsername());

            if(matcher.matches()){
                int exist = usersService.checkUserExist(user.getUsername());
                if(exist > 0){
                    model.addAttribute("message", "exist");
                    return "redirect:/dang-ky";

                }else{
                    user.setPassword(BCrypt.hashpw(user.getPassword(),BCrypt.gensalt(10)));
                    usersService.saveLogin(user);
                    usersService.saveRoleForUser(user.getUsername());
                    return "redirect:/login_user";
                }
            }else {
                model.addAttribute("message", "invalid");
                return "redirect:/dang-ky";
            }
        }else {
            model.addAttribute("message", "NotThing");
            return "redirect:/dang-ky";
        }
    }
}
