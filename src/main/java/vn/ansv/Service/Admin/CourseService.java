package vn.ansv.Service.Admin;

import vn.ansv.Dao.CourseDao;
import vn.ansv.Dao.DepartmentDao;
import vn.ansv.Dao.HistoryDao;
import vn.ansv.Dto.History;
import vn.ansv.Entity.Course;
import vn.ansv.Entity.CourseType;
import vn.ansv.Entity.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseDao _couseDao;

    @Autowired
    private DepartmentDao departmentDao;

    @Autowired
    private HistoryDao historyDao;

    public List<Course> getDataCouseraByIdDep(int id){
        return _couseDao.getDataCouseById(id);
    }

    public List<Course> getAllDataCourseOfDepId(int id){  return _couseDao.getAllDataCouseById(id); }

    public List<Course> getAllCourse(){  return _couseDao.getAllDataCouse(); }

    public void deleteCourseByIdDep(int id){  _couseDao.deleteCoursebByIdDep(id); }

    public List<CourseType> getAllDataCourseType(){ return _couseDao.getAllDataTypeCourse(); }

    public Course getCourseById(int id){  return _couseDao.getCourseById(id); }

    public void insertCourse(Course course){

        CourseType courseType = _couseDao.getADataTypeCourse(course.getId_type());
        Department department = departmentDao.getDepartmentById(course.getId_depenment());

        String text = course.getName() +"; "+ department.getName() +"; "
                + department.getFull_name() + "; " + courseType.getName_tpye();

        _couseDao.insertCourse(course, text); }

    public void deleteCourseByIdCourse(int id){  _couseDao.deleteCoursebByIdCourse(id); }

    public void updateCourseByIdCourse(Course course){

        CourseType courseType = _couseDao.getADataTypeCourse(course.getId_type());
        Department department = departmentDao.getDepartmentById(course.getId_depenment());

        String text = course.getName() +"; "+ department.getName() +"; "
                + department.getFull_name() + "; " + courseType.getName_tpye();

        _couseDao.updateCoursebByIdCourse(course, text); }

    public List<Course> searchCourseUser(String text){
        return _couseDao.searchCourse(text);
    }

    public List<Course> searchCourseUser(){
        return _couseDao.searchCourse();
    }

    public List<Course> searchCourseForSepRole(String text){
        return _couseDao.searchCourseForSepRole(text);
    }

    //get number course by id (check for delete a course)
    public int getCourseByTypeId(int id){  return _couseDao.getCourseByTypeId(id); }

    public void deleteAType(int idt){
    _couseDao.deleteCourseType(idt);
    }

    public void InsertAType( CourseType courseType){
        _couseDao.insertCourseType(courseType);
    }

    public void UpdateAType( CourseType courseType){
        _couseDao.updateCourseType(courseType);
    }

    public void addNewHistory(int idc,int idu){
        historyDao.insertNewHistory(idc,idu);
    }

    public boolean checkHistoryIsExsit(int id_c, int id_u){
        int row = historyDao.checkHistoryIsExsit(id_c,id_u);
        if(row != 0){
            return true;
        }
        return false;
    }
    public int getNumberUserByCourse(int id){
        return _couseDao.getNumberUserByCourse(id);
    }

    public int getNumberUserBySystem(){
        return _couseDao.getNumberUserBySystem();
    }

    public List<History> getAllHistory(int idu){
        return historyDao.getAllHistoryByUserId(idu);
    }

    public void deleteHistoryByIdCourse(int idc){
        historyDao.deleteHistory(idc);
    }

    public float getAverageVoteOfCourse(int id_c){
     return _couseDao.getAverageVoteOfCourse(id_c);
    }
}
