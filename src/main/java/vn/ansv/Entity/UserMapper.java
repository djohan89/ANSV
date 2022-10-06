package vn.ansv.Entity;


import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper implements RowMapper<User> {

public User mapRow(ResultSet rs, int rowNum) throws SQLException {
    User user = new User();

        user.setId(rs.getInt("id"));
        user.setUsername(rs.getString("username"));
        user.setDisplay_name(rs.getString("display_name"));
        user.setRole(rs.getInt("role"));
        user.setEnabled(rs.getInt("enabled"));

    return user;
    }
}
