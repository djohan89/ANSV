package vn.ansv.controller.Admin;

import vn.ansv.Entity.Slideshow;
import vn.ansv.Service.Admin.SlideshowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Controller
public class SlidesController {

    @Autowired
    private SlideshowService slideshowService;

    // Show dữ liệu slideshow
    @RequestMapping(value = { "/admin/web/quan-ly/slideshow" }, method = RequestMethod.GET)
    public String listSlideshow(Model model) {
        model.addAttribute("redirect", 1);
        model.addAttribute("listSlideshow", slideshowService.findAll());
        return "admin/slideshow/slideshow_list";

    }

    @RequestMapping("/admin/web/quan-ly/slideshow/save")
    public String insertSlideshow(Model model) {

        model.addAttribute("redirect", 1);
        model.addAttribute("slideshow", new Slideshow());
        return "admin/slideshow/slideshow_save";
    }

    //thuc hien them department vao database
    //redirect va page view slide show
    @RequestMapping(value = { "/admin/web/quan-ly/saveSlideshow" }, method = RequestMethod.POST)
    public String doSaveSlideshow(@RequestParam("fileup") CommonsMultipartFile file,
                                  @ModelAttribute("Slideshow") Slideshow slideshow, HttpSession s) {

        byte[] data = file.getBytes();
        //we have to save this file to server...
        String path = s.getServletContext().getRealPath("/") + "assets" + File.separator + "user" + File.separator + "img" + File.separator + "slider" + File.separator + file.getOriginalFilename();
        try {
            FileOutputStream fos = new FileOutputStream(path);
            // Tiến hành lưu file
            fos.write(data);
            fos.close();

        } catch (IOException e) {
            e.printStackTrace();
        }

        // Insert data into database
        slideshowService.save(slideshow);
        return "redirect:/admin/web/quan-ly/slideshow";
    }

    //den page chinh sua information of slideshow
    @RequestMapping("/admin/web/quan-ly/slideshow/update/{id}")
    public String updateSlideshow(@PathVariable int id, Model model) {

        model.addAttribute("redirect", 1);
        Slideshow slideshow = slideshowService.findById(id);
        model.addAttribute("slideshow", slideshow);
        return "admin/slideshow/slideshow_update";
    }

    //thuc hien update department vao database
    //redirect va page view slide show
    @RequestMapping("/admin/web/quan-ly/updateSlideshow")
    public String doUpdateSlideshow(@RequestParam("fileup") CommonsMultipartFile file, @ModelAttribute("Slideshow") Slideshow slideshow, HttpSession s, Model model) {


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
        return "redirect:/admin/web/quan-ly/slideshow";
    }

    @RequestMapping("/admin/web/quan-ly/slideshow/delete/{id}")
    public String doDeleteSlideshow(@PathVariable int id, Model model) {
        slideshowService.delete(id);
        return "redirect:/admin/web/quan-ly/slideshow";
    }
}
