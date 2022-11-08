package vn.ansv.Dto;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class VoteMapper implements RowMapper<Vote> {

    public Vote mapRow(ResultSet resultSet, int i) throws SQLException {
        Vote vote = new Vote();
        vote.setId_user(resultSet.getInt("id_u"));
        vote.setMarks_vote(resultSet.getFloat("vote_mark"));
        return vote;
    }
}
