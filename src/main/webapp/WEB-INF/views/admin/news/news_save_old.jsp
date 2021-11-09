<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/layouts/taglib.jsp"%>
<head>
	<title>Admin - News</title>
</head>
<body>
	<div class="main-content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="card ">
						<div class="header">
							<h3 class="title">
								Admin: <b>Adding News</b>
							</h3>
							<p class="category">Thêm tin tức</p>
						</div>
						<div class="content">
							<div class="row">
								<div class="col-md-12">
									<a href="<c:url value="/admin/news-list" />">List News</a><br />
									<h1>Thêm mới tin tức:</h1>
									<c:url value="/admin/saveNews" var="saveNews" />
									<form:form action="${saveNews}" method="POST" modelAttribute="news">
										<table class="table table-striped">
											<tr>
												<td>Hình ảnh: </td>
												<td><form:input path="img" class="form-control" /></td>
											</tr>
											<tr>
												<td>Title: </td>
												<td><form:input path="title" class="form-control" /></td>
											</tr>
											<tr>
												<td>Content: </td>
												<td><form:input path="content" class="form-control" /></td>
											</tr>
											<tr>
												<td>Url: </td>
												<td><form:input path="url" class="form-control" /></td>
											</tr>
											<tr>
												<td>Updated by: </td>
												<td><form:input path="updated_by" value="${ username }" class="form-control" readonly="true" /></td>
											</tr>
											<tr>
												<td></td>
												<td><button type="submit">Submit</button></td>
											</tr>
										</table>
									</form:form>
								</div>
								<div class="col-md-6 col-md-offset-1">
									<div id="worldMap" style="height: 300px;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>