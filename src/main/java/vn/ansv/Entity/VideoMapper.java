package vn.ansv.Entity;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class VideoMapper implements RowMapper<Video> {
    public Video mapRow(ResultSet rs, int i) throws SQLException {
        Video video = new Video();

        video.setId(rs.getInt("id"));
        video.setName(rs.getString("name"));
        video.setUrl(rs.getString("urlvideo").trim());
        video.setId_course(rs.getInt("id_couses"));
        video.setCreate_by(rs.getString("created_by"));
        video.setCreate_date(rs.getString("created_date"));

        return video;
    }
}
