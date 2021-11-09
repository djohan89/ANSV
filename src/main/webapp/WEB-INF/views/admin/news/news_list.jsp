<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/layouts/taglib.jsp"%>

<title>Admin - News</title>
<body>
	<div class="main-content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="card ">
						<div class="header">
							<div class="row">
								<div class="col-md-10">
									<h3 class="title">
										Admin: <b>Tin tức</b>
									</h3>
								<p class="category">Quản trị mục tin tức</p>
								</div>
								<div class="col-md-2">
									<c:url value="/admin/news/save" var="urlSave" />
									<c:url value="/admin/news/update" var="urlUpdate" />
									<c:url value="/admin/newsDelete" var="urlDelete" />
									<a href="${urlSave}" style="float: right;">
										<button type="button" class="btn btn-primary btn-fill btn-wd"><b>Add News</b></button>
									</a>
								</div>
							</div>
						</div>
						<div class="content">
							<div class="row">
								<div class="col-md-12">
									<div class="table-responsive">
										<table class="table table-striped">
											<tr>
												<th>Mã</th>
												<th>Hình ảnh</th>
												<th>Title</th>
												<th>Content</th>
												<th>Url</th>
												<th>Classify</th>
												<th>Updated by</th>
												<th style="width: 82px;" class="text-center">Hiển thị</th>
												<th style="width: 82px;" class="text-center">Sửa</th>
												
												<c:if test="${ listNews.size() > 5 }">
													<th style="width: 98px;" class="text-center">Xoá</th>
												</c:if>
												
											</tr>
											<c:if test="${not empty listNews}">
												<c:forEach var="news" items="${ listNews }" varStatus="index">
													<tr style="border: 1px black solid">
														<td>${ news.id }</td>
														<td>
															<img src="<c:url value='/assets/user/img/news/${news.img}' />" width="150px" />
														</td>
														<td>${news.title}</td>
														<td>${news.content}</td>
														<td>${news.url}</td>
														<td>
															${news.classify}
														</td>
														<td>
															${news.updated_by}<hr style="margin: 5px 0 5px 0;">
															<i>${news.updated_at}</i>
														</td>
														<td>
															<a href="<c:url value='/trang-chu#muc-tin-tuc' />" target="_blank">
																<button type="button" class="btn btn-success btn-fill btn-wd" style="min-width: 64px;">
																	<b>View</b>
																</button>
															</a>
														</td>
														<td>
															<a href="${urlUpdate}/${news.id}" style="margin-left: 10px;">
																<button type="button" class="btn btn-warning btn-fill btn-wd" style="min-width: 58px;">
																	<b>Edit</b>
																</button>
															</a>
														</td>
														
														<c:if test="${ listNews.size() > 5 }">
															<td>
																<button type="button" class="btn btn-danger btn-fill btn-wd" style="min-width: 74px;"
																	onclick="return deleteNews(${news.id})">
																	<b>Delete</b>
																</button>
															</td>
														</c:if>	
													</tr>
												</c:forEach>
											</c:if>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<script>
		function deleteNews(id) {
			swal({
                title: 'Bạn chắc chứ?',
                text: 'Dữ liệu đã xoá sẽ không thể hoàn tác!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Xử ló cho anh!',
                cancelButtonText: 'Để ló sống',
                confirmButtonClass: "btn btn-info btn-fill",
                cancelButtonClass: "btn btn-danger btn-fill",
                buttonsStyling: false
            }).then(function() {
              	swal({
                	title: 'Xoá thành công!',
                	text: 'Dữ liệu bị xoá hoàn toàn.',
                	type: 'success',
                	/* showCancelButton: false, */
                	showConfirmButton: false,
                	buttonsStyling: true
                }).catch(swal.noop)

              	setTimeout(function () {
              		window.location.href = '${urlDelete}/'+id;
               	}, 500);
              	
            }, function(dismiss) {
              	// dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
              	if (dismiss === 'cancel') {
                	swal({
                  		title: 'Hoàn tác',
                  		text: 'Dữ liệu được giữ lại!',
                  		type: 'error',
                  		confirmButtonClass: "btn btn-info btn-fill",
                  		buttonsStyling: false
               		}).catch(swal.noop)
              	}
            });
		}
	</script>
</body>