<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/layouts/taglib.jsp"%>

<title>Admin - News detail</title>

<body>
	<style>
		.news_pt {
			padding-top: 2%;
		}
		
		.news_image {
  			display: block;
  			margin-left: auto;
  			margin-right: auto;
  			max-width: 100%;
		}
	</style>

	<div class="main-content">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="card ">
						<div class="header">
							<div class="row">
								<div class="col-md-8">
									<h3 class="title">
										Admin: <b>Tin tức chi tiết</b>
									</h3>
									<p class="category">Quản trị viên xem chi tiết bài viết</p>
								</div>
								<div class="col-md-4">
									<a href="<c:url value='/admin/news/list' />" style="float: right;">
										<button type="button" class="btn btn-success btn-fill btn-wd"><b>List News</b></button>
									</a>
								</div>
							</div>
						</div>
						<div class="content"><hr style="margin-top: 0; margin-bottom: 1%;">
							<div class="row">
								<div class="col-md-1"></div>
								<div class="col-md-10">
									
									<div class="row">
										<div class="col-md-12">
											<h3><b>${ newDetails.title }</b></h3>
										</div>
									</div>
									
									<div class="row news_pt">
										<div class="col-md-12">
											${ newDetails.summary }
										</div>
									</div>
									
									<div class="row news_pt">
										<div class="col-md-12">
											<img src="<c:url value='/assets/user/img/news/${newDetails.img}' />" class="news_image" />
										</div>
									</div>
									
									<div class="row news_pt">
										<div class="col-md-12">
											${ newDetails.content }
										</div>
									</div>
									
									<div class="row news_pt">
										<div class="col-md-8"></div>
										<div class="col-md-2" style="display: flex; justify-content: flex-end">Người đăng:</div>
										<div class="col-md-2">
											<i>${ newDetails.updated_by }<br>${ newDetails.updated_at }</i>
										</div>
									</div>
									
								</div>
								<div class="col-md-1"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>