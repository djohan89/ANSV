<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<title>File uploaded result...</title>

<body>
	<h1>${filename}</h1>
	<img alt="" src="<c:url value='/assets/user/upload/${filename}' />">
</body>