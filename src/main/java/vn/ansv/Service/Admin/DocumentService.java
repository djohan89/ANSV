package vn.ansv.Service.Admin;

import vn.ansv.Dao.DocumentDao;
import vn.ansv.Entity.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentService {

    @Autowired
    private DocumentDao documentDao;

    public List<Document> getAllDocByIdCou(int id_c){
        return documentDao.getAllDocByIDCourse(id_c);
    }

    public void deleteADocByIdCou (int id_c){
        documentDao.deleteDocByCourse(id_c);
    }

    public void deleteADocById (int id){
        documentDao.deleteDocById(id);
    }

    public void insertsDoc (Document doc, int id_c){
        documentDao.insertDoc(doc,id_c);
    }
}
