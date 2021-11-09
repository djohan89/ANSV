<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<title>Trang chủ</title>

<body>
	<main id="main">

		<!-- ===== Đầu: Slideshow ===== -->
		<section>
			<link rel="stylesheet" type="text/css"
				href="https://fonts.googleapis.com/css?family=Open+Sans">

			<script type="text/javascript"
				src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

			<div class="slider-container">
				<div class="slider-control left inactive"></div>
				<div class="slider-control right"></div>
				<ul class="slider-pagi"></ul>
				<div class="slider">
				
					<c:url value="0" var="id_slide_show" />
					<c:forEach var="item" items="${ slideshow }" varStatus="index">
						<c:if test="${ index.first }">
							<div class="slide slide-${id_slide_show} active">
						</c:if>
						<c:if test="${ not index.first }">
							<div class="slide slide-${id_slide_show}">
						</c:if>
						
						<c:url value="${id_slide_show+1}" var="id_slide_show" />
		
								<div class="slide__bg" style="background-image: url('<c:url value="/assets/user/img/slider/${ item.img }" />');"></div>
					      		<div class="slide__content">
						        	<svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
						          		<path class="slide__overlay-path" d="M0,0 50,0 340,405 0,405" />
						        	</svg>
							        <div class="slide__text">
							          	<h2 class="slide__text-heading">
							          		<c:if test="${ index.first }">
												<img src="<c:url value='/assets/user/img/header/ANSV_logo.png' />" alt="Home" height="70px">
											</c:if>
											<c:if test="${ not index.first }">
												<font color="#e67e22"><b>${ item.caption }</b></font>
											</c:if>
							          	</h2>
							          	<font size="+1" color="black">
						          			<b>${ item.content }</b>
						          		</font><br><br>
							          	<a href="${ item.url }" class="slide__text-link">Tìm hiểu...</a>
							        </div>
						      	</div>
				   	 		</div>				
					</c:forEach>
				
					<%-- <div class="slide slide-0 active">
						<div class="slide__bg"></div>
						<div class="slide__content">
							<svg class="slide__overlay" viewBox="0 0 720 405"
								preserveAspectRatio="xMaxYMax slice">
				          		<path class="slide__overlay-path"
									d="M0,0 50,0 340,405 0,405" />
				        	</svg>
							<div class="slide__text">
								<span class="slide__text-heading">
									<!-- <font color="#e67e22"><b>ANSV</b></font> -->
									<img src="<c:url value='/assets/user/img/header/ANSV_logo.png' />" alt="Home" height="70px">
								</span><br>
								<div style="font-size: 20px; color: black;">
									<font color="#FF6600"><b>A</b></font>DVANCED
									<font color="#FF6600"><b>N</b></font>ETWORK
									<font color="#FF6600"><b>S</b></font>YSTEMS
									<font color="#FF6600"><b>V</b></font>IETNAM<br>
									COMPANY LIMITED
								</div><br>
								<a href="ve-chung-toi" class="slide__text-link">Tìm hiểu...</a>
							</div>
						</div>
					</div>
					<div class="slide slide-1 ">
						<div class="slide__bg"></div>
						<div class="slide__content">
							<svg class="slide__overlay" viewBox="0 0 720 405"
								preserveAspectRatio="xMaxYMax slice">
			          			<path class="slide__overlay-path"
									d="M0,0 50,0 340,405 0,405" />
			        		</svg>
							<div class="slide__text">
								<h2 class="slide__text-heading">
									<font color="#e67e22"><b>5G</b></font>
								</h2>
								<font size="+2" color="black">
									<b>Đi cùng với thế giới</b>
								</font><br><br>
								<a href="chuyen-nganh-vien-thong" class="slide__text-link">Tìm hiểu...</a>
							</div>
						</div>
					</div>
					<div class="slide slide-2">
						<div class="slide__bg"></div>
						<div class="slide__content">
							<svg class="slide__overlay" viewBox="0 0 720 405"
								preserveAspectRatio="xMaxYMax slice">
					          	<path class="slide__overlay-path"
									d="M0,0 50,0 340,405 0,405" />
					        </svg>
							<div class="slide__text">
								<h2 class="slide__text-heading">
									<font color="#e67e22"><b>AI<br>Big Data</b></font>
								</h2>
								<font size="+2">
									Ứng dụng toàn cầu
								</font><br><br>
								<a href="cong-nghe-thong-tin" class="slide__text-link">Tìm hiểu...</a>
							</div>
						</div>
					</div>
					<div class="slide slide-3">
				      	<div class="slide__bg"></div>
				      	<div class="slide__content">
				        	<svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
				          		<path class="slide__overlay-path" d="M0,0 50,0 340,405 0,405" />
				        	</svg>
				        	<div class="slide__text">
				          		<h2 class="slide__text-heading">
				          			<font color="#e67e22"><b>Project name 456</b></font>
				          		</h2>
				          		<p class="slide__text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
				          		<a href="chuyen-nganh-vien-thong" class="slide__text-link">Tìm hiểu...</a>
				        	</div>
				      	</div>
				    </div> --%>
				</div>
			</div>

			<link href="<c:url value="/assets/user/css/slide_show.css" />"
				rel="stylesheet">

			<script src="<c:url value="/assets/user/js/slide_show.js" />"></script>
		</section>
		<!-- ===== Cuối: Slideshow ===== -->



		<!-- ===== CSS chạy hiệu ứng (theme) cho background ===== -->
		<link rel='stylesheet' id='style-css' 
			href='<c:url value="/assets/user/css/css_background_animation/style_background_animation.css" />' 
			type='text/css' media='all' />
		
		<!-- ===== JS chạy hiệu ứng (theme) cho background ===== -->
		<script type='text/javascript' 
			src='<c:url value="/assets/user/js/js_background_animation/addons.js" />'></script>
			
		<section id="home-section-2" class="home-section-2 posr" style="margin-top: -120px;">
		    <div id="particles-js" class="particles-js particles-home-section-2"></div>
		    <div class="container"></div>
		</section>




		<!-- ======= Section: Nổi Bật ======= -->
		<section>

			<div class="container" data-aos="fade-up">

				<script
					src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

				<style>
					body {
						background: #f2f2f2;
						font-family: 'proxima-nova-soft', sans-serif;
						font-size: 14px;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
					}
					
					.post-module {
						position: relative;
						z-index: 1;
						display: block;
						background: #FFFFFF;
						min-width: 270px;
						height: 470px;
						-webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
						-moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
						box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
						-webkit-transition: all 0.3s linear 0s;
						-moz-transition: all 0.3s linear 0s;
						-ms-transition: all 0.3s linear 0s;
						-o-transition: all 0.3s linear 0s;
						transition: all 0.3s linear 0s;
						border-radius: 16px;
					}
					
					.post-module:hover, .hover {
						-webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
						-moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
						box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
					}
					
					.post-module:hover .thumbnail img, .hover .thumbnail img {
						-webkit-transform: scale(1.1);
						-moz-transform: scale(1.1);
						transform: scale(1.1);
						opacity: 0.6;
					}
					
					.post-module .thumbnail {
						background: white;
						height: 400px;
						overflow: hidden;
						border-radius: 16px;
					}
					
					.post-module .thumbnail img {
						display: block;
						width: 120%;
						-webkit-transition: all 0.3s linear 0s;
						-moz-transition: all 0.3s linear 0s;
						-ms-transition: all 0.3s linear 0s;
						-o-transition: all 0.3s linear 0s;
						transition: all 0.3s linear 0s;
					}
					
					.post-module .post-content {
						position: absolute;
						bottom: 0;
						/* background: #FFFFFF; */
						background: #FFFFFF;
						width: 100%;
						/* padding: 30px; */
						-webkti-box-sizing: border-box;
						-moz-box-sizing: border-box;
						box-sizing: border-box;
						-webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
						-moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
						-ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
						-o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
						transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
						border-radius: 0 0 16px 16px;
					}
					
					.post-module .post-content .post-content-child {
						background-color: rgba(0,102,179,.1);
						padding: 30px;
						border-radius: 0 0 16px 16px;
					}
					
					.post-module .post-content .post-content-child-news {
						background-color: rgba(0,92,161,1);
						color: #FFFFFF;
						padding: 30px;
						border-radius: 0 0 16px 16px;
					}
					
					.post-module .post-content .category {
						position: absolute;
						top: -34px;
						left: 0;
						background: #e74c3c;
						padding: 10px 15px;
						color: #FFFFFF;
						font-size: 14px;
						font-weight: 600;
						text-transform: uppercase;
					}
					
					.post-module .post-content .title {
						margin: 0;
						padding: 0 0 10px;
						color: #333333;
						font-size: 26px;
						font-weight: 700;
					}
					
					.post-module .post-content .desc {
						overflow: hidden;
						text-overflow: ellipsis;
						-webkit-box-orient: vertical;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						text-align: left;
					}
					
					.post-module .post-content .sub_title {
						margin: 0;
						/* padding: 0 0 20px; */
						margin-bottom: 20px;
						font-size: 20px;
						font-weight: 400;
						/* color: #e74c3c; */
						color: #FF6600;
					}
					
					.post-module .post-content .post-content-child .description {
						display: none;
						/* color: #666666; */
						color: #000000;
						font-size: 14px;
						line-height: 1.8em;
					}
					
					.post-module .post-content .post-content-child-news .description {
						display: none;
						/* color: #666666; */
						color: #FFFFFF;
						font-size: 14px;
						line-height: 1.8em;
					}
					
					.post-module .post-content .post-meta {
						margin: 30px 0 0;
						color: #999999;
					}
					
					.post-module .post-content .post-meta .timestamp {
						margin: 0 16px 0 0;
					}
					
					.post-module .post-content .post-content-child .post-meta a {
						color: #999999;
						text-decoration: none;
					}
					
					.post-module .post-content .post-content-child-news .post-meta a {
						color: #FFFFFF;
						text-decoration: none;
					}
					
					.hover .post-content .description {
						display: block !important;
						height: auto !important;
						opacity: 1 !important;
					}
					
					.container {
						margin: 0 auto;
					}
					
					.container:before, .container:after {
						content: '';
						display: block;
						clear: both;
					}
					
					.container .column {
						width: 50%;
						padding: 0 25px;
						-webkti-box-sizing: border-box;
						-moz-box-sizing: border-box;
						box-sizing: border-box;
						float: left;
					}
					
					.container .column .demo-title {
						margin: 0 0 15px;
						color: #666666;
						font-size: 18px;
						font-weight: bold;
						text-transform: uppercase;
					}
					
					.container .info {
						width: 300px;
						margin: 50px auto;
						text-align: center;
					}
					
					.container .info h1 {
						margin: 0 0 15px;
						padding: 0;
						font-size: 24px;
						font-weight: bold;
						color: #333333;
					}
					
					.container .info span {
						color: #666666;
						font-size: 12px;
					}
					
					.container .info span a {
						color: #000000;
						text-decoration: none;
					}
					
					.container .info span .fa {
						color: #e74c3c;
					}
					
					/*CSS cho nội dung bên trong thẻ <p>*/
					p {
						text-align: justify;
						line-height: 1.5;
					}
					
					.text-less {
						overflow: hidden;
						text-overflow: ellipsis;
						line-height: 20px;
						-webkit-line-clamp: 4;
						display: -webkit-box;
						-webkit-box-orient: vertical;
					}
					
					.title-bold {
						font-weight: bold !important;
					}
				</style>

				<script>
					$(document).ready(function() {
						$(".post-module").hover(function() {
							$(this).find(".description").stop().animate({
								height : "toggle",
								opacity : "toggle"
							}, 300);
						});
					});
				</script>

				<div class="section-title">
					<h2>
						<strong>Nổi Bật</strong>
					</h2>
				</div>

				<div class="row content">
					<div class="col-lg-4">
						<div class="post-module">
							<div class="thumbnail">
								<img
									src="<c:url value="/assets/user/img/noi_bat/gioi-thieu-chung.png" />">
							</div>
							<div class="post-content">
								<div class="post-content-child">
									<a href="#"> <font color="gray">VỀ CHÚNG TÔI</font>
									</a><br> <br>
									<h1 class="title">Giới thiệu chung</h1>
									<h2 class="sub_title">TNHH Thiết bị Viễn thông ANSV</h2>
									<p class="description">Công ty TNHH Thiết bị Viễn thông ANSV
										được thành lập từ tháng 7 năm 1993 trong quan hệ hợp tác liên
										doanh giữa Tập đoàn Alcatel (nay là Alcatel-Lucent) với...</p>
									<div class="post-meta" align="right">
										<span class="comments"> <a href="ve-chung-toi">Xem
												thêm...</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="post-module">
							<div class="thumbnail">
								<img
									src="<c:url value="/assets/user/img/5g_1.jpg" />">
							</div>
							<div class="post-content">
								<div class="post-content-child">
									<a href="#"> <font color="gray">Viễn thông</font>
									</a><br> <br>
									<h1 class="title">Công nghệ mạng 5G</h1>
									<h2 class="sub_title">Đi cùng với thế giới</h2>
									<p class="description">
										<!-- Smart Box ATV dành cho tất cả các thành
										viên trong gia đình, từ Bố Mẹ, Ông Bà cho đến trẻ nhỏ, tất cả
										đều có thể sử dụng được Smart Box ATV với vô vàn các ứng dụng... -->
										<font color="#e67e22"><b>ANSV</b></font> 
										là đơn vị đầu tiên thực hiện các dự án triển khai mạng
										di động từ những năm 1993 tới nay, Cùng với cách
										mạng công nghiệp 4.0 và sự bùng nổ công nghệ thông
										tin...
									</p>
									<div class="post-meta" align="right">
										<span class="comments"> <a
											href="chuyen-nganh-vien-thong">Xem thêm...</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="post-module">
							<div class="thumbnail">
								<img src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/chi_dao_dieu_hanh.jpg" />">
							</div>
							<div class="post-content">
								<div class="post-content-child">
									<a href="#"> <font color="gray">GIẢI PHÁP</font>
									</a><br> <br>
									<h1 class="title">Trung tâm thông tin</h1>
									<h2 class="sub_title">Chỉ đạo điều hành</h2>
									<p class="description">
										<!-- Voip (voice over internet protocol)
										hay còn gọi là Voice IP, nghĩa là âm thanh được truyền qua giao
										thức internet. Voip sử dụng công nghệ chuyển mạch gói... -->
										Trung tâm thông tin, chỉ đạo điều hành bao gồm: 
										các dữ liệu số về tình hình biến động các chỉ
										số kinh tế - xã hội của địa phương, tỉnh, thành phố,
										quốc gia; các chỉ số...
									</p>
									<div class="post-meta" align="right">
										<span class="comments"> <a
											href="cong-nghe-thong-tin">Xem thêm...</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Section: Nổi Bật -->



		<!-- ======= Section: Tin tức ======= -->
		<section>
			<link rel="stylesheet"
				href="<c:url value="/assets/user/css/test/page.097703d848c8565819c6af7b793c9dea.css" />"
				type="text/css" />

			<div class="container" data-aos="fade-up">
				<div class="section-title">
					<h2>
						<strong>Tin tức</strong>
					</h2>
				</div>

				<div class="row content">
					<div id="wrap">
						<div id="content" class="page-content" role="main">
							<div class="par parsys">
								<div class="section bu-g-solution-static-content">
									<!-- Thư viện -->
									<link rel="stylesheet"
										href="<c:url value="/assets/user/css/test/handmade-btn-read-more.css" />"
										type="text/css" />
								</div>
								<div class="section bu-g-solution-static-content">
									<!-- Thư viện -->
									<link rel="stylesheet"
										href="<c:url value="/assets/user/css/test/handmade-news-2.css" />"
										type="text/css" />

									<div class="feature f01" tabindex="0">
										<div id="owl-demo" class="owl-carousel owl-theme">
											<div class="item">
												<div class="post-module">
													<div class="thumbnail">
														<img
															src="<c:url value="/assets/user/img/test/hop-tac.jpg" />">
													</div>
													<div class="post-content">
														<div class="post-content-child-news">
															<a href="#"><font color="gray">TIN TỨC</font></a>
															<br><br>
															<h1 class="title"></h1>
															<h2 class="sub_title desc title-bold">
																<font color="#ef6c00">
																	VNPT và Nokia hợp tác về nghiên cứu và phát triển hạ tầng số
																</font>
															</h2>
															<p class="description">Theo thỏa thuận này, hai bên
																nhất trí tăng cường mối quan hệ hợp tác chiến lược để
																nâng cấp năng lực mạng đường trục, mạng lõi, phát triển
																nền tảng 4G, 5G, IOT,... hiện đại đáp ứng với nhu cầu
																quan trọng của một hạ tầng sô, phục vụ cho chuyển đổi số
																quốc gia.</p>
															<div class="post-meta" align="right">
																<span class="comments"> <a
																	href="javascript:void(0)">Xem thêm...</a>
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="post-module">
													<div class="thumbnail">
														<img src="<c:url value="/assets/user/img/test/qr.jpg" />">
													</div>
													<div class="post-content">
														<div class="post-content-child-news">
															<a href="#"> <font color="gray">TIN TỨC</font>
															</a><br> <br>
															<h1 class="title"></h1>
															<h2 class="sub_title desc title-bold">
																<font color="#ef6c00">
																	Thống nhất mã QR dùng chung cho các nền tảng công nghệ chống dịch
																</font>
															</h2>
															<p class="description">Mỗi cá nhân sử dụng các nền
																tảng, ứng dụng phòng chống dịch Covid-19 được cấp duy
																nhất một mã QR cá nhân. Mã QR cá nhân có thể được sử dụng
																để cá nhân, tổ chức có thẩm quyền đọc và truy vấn các dữ
																liệu liên quan phục vụ công tác phòng, chống dịch, bệnh
																Covid-19.</p>
															<div class="post-meta" align="right">
																<span class="comments"> <a
																	href="javascript:void(0)">Xem thêm...</a>
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="item">
												<div class="post-module">
													<div class="thumbnail">
														<img
															src="<c:url value="/assets/user/img/test/toc-do-internet.jpg" />">
													</div>
													<div class="post-content">
														<div class="post-content-child-news">
															<a href="#"> <font color="gray">TIN TỨC</font>
															</a><br> <br>
															<h1 class="title"></h1>
															<h2 class="sub_title desc title-bold">
																<font color="#ef6c00">
																	Tốc độ Internet Việt Nam thấp hơn mức trung bình thế giới
																</font>
															</h2>
															<p class="description">
																Tốc độ mạng di động và băng thông rộng Việt Nam đứng thứ
																58 và 59 thế giới, trong đó, chỉ số tải xuống thấp hơn
																mức tring bình.<br> Trong tháng 9, tốc độ Internet
																tại Việt Nam có thể sẽ không cải thiện do tuyến cáp AAE-1
																gặp lỗi và tiếp tục bị ảnh hưởng từ sự cố với tuyến cáp
																AAG xảy ra hồi tháng 7.
															</p>
															<div class="post-meta" align="right">
																<span class="comments"> <a
																	href="javascript:void(0)">Xem thêm...</a>
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="item">
												<div class="post-module">
													<div class="thumbnail">
														<img src="<c:url value="/assets/user/img/test/5g.jpg" />">
													</div>
													<div class="post-content">
														<div class="post-content-child-news">
															<a href="#"> <font color="gray">TIN TỨC</font>
															</a><br> <br>
															<h1 class="title"></h1>
															<h2 class="sub_title desc title-bold">
																<font color="#ef6c00">
																	Đẩy nhanh việc triển khai và thương mại hóa 5G tại Việt Nam
																</font>
															</h2>
															<p class="description">Việc nghiên cứu, xây dựng và
																hoàn thiện các quy định hướng dẫn về tiêu chuẩn, quy
																chuẩn, là yêu cầu cấp thiết, cả đối với thiết bị, mạng
																lưới, hạ tầng, chất lược dịch vụ, các vấn đề an toàn an
																ninh mạng, góp phần nhanh chóng hoàn thiện môi trường
																quản lý, đẩy nhanh việc triển khai và thương mại hóa 5G
																tại Việt Nam.</p>
															<div class="post-meta" align="right">
																<span class="comments"> <a
																	href="javascript:void(0)">Xem thêm...</a>
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<ul class="mo_only">
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_1" href="#" title="" class="active"></a>
											</li>
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_2" href="#" title=""></a></li>
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_3" href="#" title=""></a></li>
										</ul>
										<div class="list__cont-link_new"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Tin tức Section -->



		<!-- ======= About Us Section ======= -->
		<section id="about-us" class="about-us">
			<div class="container" data-aos="fade-up">

				<div class="section-title">
					<h2>
						Về Chúng Tôi</strong>
					</h2>
				</div>

				<div class="row content">
					<div class="col-lg-6 " style="padding-top: 10px;"
						data-aos="fade-right">
						<h3>Lĩnh Vực Hoạt Động</h3>
						<!-- <h3>Với hơn 28 năm kinh nghiệm, công ty TNHH Thiết Bị Viễn Thông ANSV là nhà tích hợp hệ thống, cung cấp các sản phẩm/giải pháp và dịch vụ công nghệ thông tin hàng đầu tại Việt Nam, có vị thế vững chắc ở thị trường trong nước và trong khu vực</h3>-->
						<p style="text-align: justify;">Với hơn 28 năm kinh nghiệm,
							công ty TNHH Thiết Bị Viễn Thông ANSV là nhà tích hợp hệ thống,
							cung cấp các sản phẩm/giải pháp và dịch vụ công nghệ thông tin
							hàng đầu tại Việt Nam, có vị thế vững chắc ở thị trường trong
							nước và trong khu vực.</p>
						<br> <img
							src="<c:url value="/assets/user/img/About_us.JPG" />"
							class="img-fluid" alt="">
					</div>


					<div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">

						<!-- <div class="tabulation-2 mt-4">  -->
						<div class="tabulation-1">
							<ul class="nav nav-pills nav-fill d-md-flex d-block">
								<li class="nav-item mb-md-0 mb-2"><a
									class="nav-link active py-2" data-toggle="tab" href="#home1">Sứ
										mệnh</a></li>
								<li class="nav-item px-lg-2 mb-md-0 mb-2"><a
									class="nav-link py-2" data-toggle="tab" href="#home2">Tầm
										nhìn</a></li>
								<li class="nav-item"><a class="nav-link py-2 mb-md-0 mb-2"
									data-toggle="tab" href="#home3">Giá trị cốt lõi</a></li>
							</ul>
							<div class="tab-content rounded mt-2">
								<div class="tab-pane container p-0 active" id="home1">
									<p style="text-align: justify;">ANSV dựa trên ứng dụng KHCN
										- CNTT-VT cùng sự liên tục đổi mới sáng tạo và sức mạnh kết
										nối của các thành tựu công nghệ quốc tế cùng với những chuyên
										gia, kỹ sư người Việt nam, chúng tôi luôn nỗ lực phát triển,
										nâng cao giá trị cho cộng đồng, hướng tới mục tiêu đặt một dấu
										ấn vững chắc trên bản đồ công nghệ toàn cầu.</p>

								</div>
								<div class="tab-pane container p-0 fade" id="home2">
									<p style="text-align: justify;">ANSV định hướng trở thành
										doanh nghiệp đi đầu trong lĩnh vực chuyển đổi số, tích hợp hệ
										thông CNTT - VT, phân phối bán lẻ các sản phẩm công nghệ ở thị
										trường Việt Nam và thị trường khu vực.</p>
								</div>
								<div class="tab-pane container p-0 fade" id="home3">
									<p style="text-align: justify;">
										<span> "Văn hóa là tinh thần - Sức mạnh Team work" luôn
											được đề cao và là văn hóa cốt lõi của Doanh nghiệp, tạo nên
											tinh thần ANSV, giúp chúng tôi không ngừng nỗ lực , sáng tạo
											vì lợi ích chung của tập thể, của khách hàng và của xã hội.</span></br> <br>
										<span>"Con người là sức mạnh"- Với nguồn lực là đội ngũ
											cán bộ, kỹ sư được đào tạo bài bản và có nhiều năm kinh
											nghiệm, ANSV là nơi quy tụ và kết nối những nhân tài có sức
											sáng tạo và đam mê, cùng hướng tới mục tiêu phát triển các
											sản phẩm, giải đáp, dịch vụ công nghệ chất lượng cao, hữu ích
											phục vụ cuộc sống và cộng đồng.</span>
									</p>
								</div>
							</div>
						</div>
						<img src="<c:url value="/assets/user/img/infor.jpg" />" class="img-fluid" alt="" 
							style="padding-top: 5%">
					</div>
				</div>
			</div>
		</section>
		<!-- End About Us Section -->



		<!-- ======= Services Section ======= -->
		<script type="text/javascript"
			src="<c:url value="/assets/user/js/test/22640.js" />"></script>

		<!-- CSS: Item hover -->
		<link data-optimized="1" rel='stylesheet' id='main-style-css'
			href='<c:url value="/assets/user/css/dich-vu-va-giai-phap/9783a.css" />'
			type='text/css' media='all' />

		<!-- CSS: Hover Outer(Lồng 2 div với nhau để tạo hiệu ứng hiển thị khi nhấn giữ từng phần) -->
		<link data-optimized="1" rel='stylesheet' id='fat-gallery-css-css'
			href='<c:url value="/assets/user/css/dich-vu-va-giai-phap/186da.css" />'
			type='text/css' media='all' />

		<!-- JS liên quan đến hoverdir -->
		<script data-optimized="1" type='text/javascript'
			src='<c:url value="/assets/user/js/dich-vu-va-giai-phap/47f32.js" />'
			id='fat-gallery-plugins-js'></script>

		<!-- JS liên quan đến FatGallery -->
		<script data-optimized="1" type='text/javascript'
			src='<c:url value="/assets/user/js/dich-vu-va-giai-phap/331d0.js" />'
			id='fat-gallery-js'></script>

		<style>
			.in-dam {
				font-weight: bold;
			}
			
			.xem-them-1 {
				position: absolute;
				bottom: 4%;
				right: 5%;
			}
			
			.xem-them-2:visited {
				color: gray;
			}
			
			.xem-them-2:hover {
				text-decoration: underline;
				color: #FF6600;
			}
			
			/*CSS tiêu đề hover outer*/
			.fat-gallery-title h5 {
				font-size: 14px;
				color: #333;
				font-style: normal;
				font-weight: normal;
				text-transform: none;
			}
		</style>

		<section class="home-page">
			<div class="section-title">
				<h2>
					Giải Pháp &amp; Dịch Vụ </strong>
				</h2>
			</div>
			<main id="main-home" role="main">
				<div id="pl-886" class="panel-layout">
					<div id="pg-886-1" class="panel-grid panel-has-style">
						<div class="container panel-row-style panel-row-style-for-886-1">
							<div id="pgc-886-1-0" class="panel-grid-cell">
								<div id="panel-886-1-0-0"
									class="so-panel widget widget_text panel-first-child panel-last-child"
									data-index="1">
									<div class="textwidget">
										<div class="fat-gallery overflow-hidden col-padding-15 paging"
											id="fat-gallery-6093df92a57cd">
											<div class="fat-gallery-wrapper fat-col-md-3 grid inherit"
												data-section-id="6093df92a57cd"
												id="fat-gallery-container-6093df92a57cd" data-columns="3"
												style="opacity: 0">
												<div
													class="fat-gallery-item hover-dir du-an nha-cao-tang  fat-light-gallery"
													data-sub-html="#6093df92a5d33"
													data-src="<c:url value="/assets/user/img/5g_1.jpg" />"
													data-index="2">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/5g_1.jpg" />"
														data-alt="Công nghệ mạng di động">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/5g_1.jpg" />"
															alt="Công nghệ mạng di động" />
														<h4 class="sub-title">Công nghệ mạng di động</h4>
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="chuyen-nganh-vien-thong" rel="noopener">
																			<h5>Công nghệ mạng di động</h5>
																		</a>
																	</div>

																	<div class="fat-gallery-excerpt">
																		<br>
																		<p class="in-dam">
																			<font color="#FF6600" size="+1"><b>ANSV</b></font> <span>là
																				đơn vị đầu tiên thực hiện các dự án triển khai mạng
																				di động từ những năm 1993 tới nay, Cùng với cách
																				mạng công nghiệp 4.0 và sự bùng nổ công nghệ thông
																				tin như hiện nay, công nghệ mạng di động đã phát
																				triển với một tốc độ hết sức nhanh chóng hướng tới
																				thế hệ thứ 5G, 6G.....</span>
																		</p>
																		<p class="xem-them-1">
																			<a href="chuyen-nganh-vien-thong"
																				class="xem-them-2 in-dam">Xem thêm...</a>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div
													class="fat-gallery-item hover-dir du-an nha-cao-tang  fat-light-gallery"
													data-sub-html="#6093df92a5e9b"
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/GPON.png" />"
													data-index="3">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/GPON.png" />"
														data-alt="Giải Pháp Hệ Thống Mạng GPON">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/GPON.png" />"
															alt="Giải Pháp Hệ Thống Mạng GPON" />
														<h4 class="sub-title">Giải Pháp Hệ Thống Mạng</h4>
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="chuyen-nganh-vien-thong" rel="noopener">
																			<h5>
																				Giải Pháp Hệ Thống Mạng <br>GPON
																			</h5>
																		</a>
																	</div>

																	<div class="fat-gallery-excerpt">
																		<br>
																		<p class="in-dam">
																			<font color="#FF6600" size="+1"><b>ANSV</b></font> <span>cung
																				cấp giải pháp tổng thể công nghệ mạng gigabit quang
																				thụ động (GPON) bao gồm OLT, ONT và hệ thống quản lý
																				tập trung NMS. Đối tượng khách hàng mà chúng tôi
																				hướng đến: Nhà mạng, doanh nghiệp và hộ gia
																				đình.....</span>
																		</p>
																		<p class="xem-them-1">
																			<a href="chuyen-nganh-vien-thong"
																				class="xem-them-2 in-dam">Xem thêm...</a>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div
													class="fat-gallery-item hover-dir du-an nha-cao-tang  fat-light-gallery"
													data-sub-html="#6093df92a5fd7"
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/cong-nghe-truyen-dan.png" />"
													data-index="4">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/cong-nghe-truyen-dan.png" />"
														data-alt="Công Nghệ Truyền Dẫn">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/cong-nghe-truyen-dan.png" />"
															alt="Công Nghệ Truyền Dẫn" />
														<h4 class="sub-title">Công Nghệ Truyền Dẫn</h4>
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="chuyen-nganh-vien-thong" rel="noopener">
																			<h5>Công Nghệ Truyền Dẫn</h5>
																		</a>
																	</div>

																	<div class="fat-gallery-excerpt">
																		<br>
																		<p class="in-dam">
																			<font color="#FF6600" size="+1"><b>ANSV</b></font> <span>
																				tự hào là đơn vị triển khai các dự án truyền dẫn đầu
																				tiên bao gồm cả vô tuyến và hữu tuyến (SDH, xDSL,
																				Wifi, Viba, WDM…) cho các nhà mạng lớn như VNPT và
																				Mobifone.....</span>
																		</p>
																		<p class="xem-them-1">
																			<a href="chuyen-nganh-vien-thong"
																				class="xem-them-2 in-dam">Xem thêm...</a>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div
													class="fat-gallery-item hover-dir du-an nha-cao-tang  fat-light-gallery"
													data-sub-html="#6093df92a611d"
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/NGN.png" />"
													data-index="5">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/NGN.png" />"
														data-alt="Mạng Thế Hệ Mới NGN">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/mang_the_he_moi.jpg" />"
															alt="Mạng Thế Hệ Mới NGN" />
														<h4 class="sub-title">Mạng Thế Hệ Mới NGN</h4>
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="chuyen-nganh-vien-thong" rel="noopener">
																			<h5>Mạng Thế Hệ Mới NGN</h5>
																		</a>
																	</div>

																	<div class="fat-gallery-excerpt">
																		<br>
																		<p class="in-dam">
																			<span>Mạng viễn thông thế hệ mới –</span> <font
																				color="#FF6600" size="+1"> <b>NGN (Next
																					Generation Network)</b>
																			</font> <span>đã trở thành xu hướng của nhiều nước
																				trên thế giới do những lợi ích của nó cả về kinh tế
																				và kỹ thuật trong việc cung cấp các dịch vụ đa
																				phương tiện. Cùng trên xu hướng phát triển đó.....</span>
																		</p>
																		<p class="xem-them-1">
																			<a href="chuyen-nganh-vien-thong"
																				class="xem-them-2 in-dam">Xem thêm...</a>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div
													class="fat-gallery-item hover-dir du-an nha-cao-tang  fat-light-gallery"
													data-sub-html="#6093df92a6257"
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/wifi-total-solution.png" />"
													data-index="6">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/wifi-total-solution.png" />"
														data-alt="Giải pháp Wifi Tổng thể">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/wifi-total-solution.png" />"
															alt="Giải pháp Wifi Tổng thể" />
														<h4 class="sub-title">Giải pháp Wifi Tổng thể</h4>
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="cong-nghe-thong-tin" rel="noopener">
																			<h5>Giải pháp Wifi Tổng thể</h5>
																		</a>
																	</div>

																	<div class="fat-gallery-excerpt">
																		<br>
																		<p class="in-dam">
																			<span>Giải pháp Wi-Fi tổng thể –</span> <font
																				color="#FF6600" size="+1"><b>Wifi Total
																					Solution</b></font> <span>là giải pháp toàn diện, hiệu
																				suất cao, linh hoạt trong triển khai; cung cấp kết
																				nối không dây phù hợp cho tất cả khách hàng cá nhân,
																				doanh nghiệp SME, nhà cung cấp dịch vụ, các cơ quan
																				ban ngành trung ương và địa phương.....</span>
																		</p>
																		<p class="xem-them-1">
																			<a href="cong-nghe-thong-tin"
																				class="xem-them-2 in-dam">Xem thêm...</a>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div
													class="fat-gallery-item hover-dir du-an nha-cao-tang  fat-light-gallery"
													data-sub-html="#6093df92a6388"
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/voice.jpg" />"
													data-index="7">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/voice.jpg" />"
														data-alt="Giải Pháp IPCC">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/voice.jpg" />"
															alt="Giải Pháp IPCC" />
														<h4 class="sub-title">Giải Pháp IPCC</h4>
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="cong-nghe-thong-tin" rel="noopener">
																			<h5>Giải Pháp IPCC</h5>
																		</a>
																	</div>

																	<div class="fat-gallery-excerpt">
																		<br>
																		<p class="in-dam">
																			<span>Công ty hiện đang là đối tác của</span> <font
																				color="#FF6600" size="+1"><b>Genesys</b></font> <span>trong
																				việc xây dựng giải pháp, phát triển và triển khai
																				các hệ thống IP Contact Centre (IPCC) trên nền
																				Genesys Customer Interaction Management (CIM)
																				Platform – thành phần cốt lõi của bộ sản phẩm
																				Genesys.....</span>
																		</p>
																		<p class="xem-them-1">
																			<a href="cong-nghe-thong-tin"
																				class="xem-them-2 in-dam">Xem thêm...</a>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div
													class="fat-gallery-item hover-dir du-an nha-cao-tang  fat-light-gallery"
													data-sub-html="#6093df92a64be"
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/bao-mat-2.jpg" />"
													data-index="8">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/bao-mat-2.jpg" />"
														data-alt="Giải Pháp Hạ Tầng CNTT">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/bao-mat-2.jpg" />"
															alt="Giải Pháp Hạ Tầng CNTT" />
														<h4 class="sub-title">Giải Pháp Hạ Tầng CNTT</h4>
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="cong-nghe-thong-tin" rel="noopener">
																			<h5>Giải Pháp Hạ Tầng CNTT</h5>
																		</a>
																	</div>

																	<div class="fat-gallery-excerpt">
																		<br>
																		<p class="in-dam">
																			<span>Cung cấp và tích hợp các giải pháp hạ
																				tầng cơ sở CNTT như giải pháp Ảo hóa và Điện toán
																				đám mây, giải pháp Hạ tầng mạng, giải pháp Hạ tầng
																				trung tâm dữ liệu, giải pháp Hệ thống máy chủ và lưu
																				trữ, giải pháp hội nghị truyền hình, giải pháp
																				Truyền thông hợp nhất và.....</span>
																		</p>
																		<p class="xem-them-1">
																			<a href="cong-nghe-thong-tin"
																				class="xem-them-2 in-dam">Xem thêm...</a>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div
													class="fat-gallery-item hover-dir du-an nha-cao-tang  fat-light-gallery"
													data-sub-html="#6093df92a65fa"
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/OCS.png" />"
													data-index="9">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/OCS.png" />"
														data-alt="Hệ Thống Tính Cước Online - OCS">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/OCS.png" />"
															alt="Hệ Thống Tính Cước Online - OCS" />
														<h4 class="sub-title">
															Hệ Thống Tính Cước<br>Online - OCS
														</h4>
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="cong-nghe-thong-tin" rel="noopener">
																			<h5>
																				Hệ Thống Tính Cước<br>Online - OCS
																			</h5>
																		</a>
																	</div>

																	<div class="fat-gallery-excerpt">
																		<br>
																		<p class="in-dam">
																			<font color="#FF6600" size="+1"><b>OCS
																					(Online Charging System)</b></font> <span>- hệ thống
																				tính cước online cho thuê bao di động trả trước và
																				trả sau cho nhà mạng Mobifone tích hợp với các thành
																				phần core trong mạng (mSTP, SDC, HLR, MSC, PGW,
																				PCRF…) và các hệ thống hỗ trợ, giám sát, khai báo
																				thông tin thuê.....</span>
																		</p>
																		<p class="xem-them-1">
																			<a href="cong-nghe-thong-tin"
																				class="xem-them-2 in-dam">Xem thêm...</a>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div class="fat-gallery-item hover-dir fat-light-gallery"
													data-sub-html="#6093df92a65fa"
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/chi-dao-dieu-hanh.png" />"
													data-index="9">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/chi-dao-dieu-hanh.png" />"
														data-alt="Trung Tâm Thông Tin, Chỉ Đạo Điều Hành">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/chi_dao_dieu_hanh.jpg" />"
															alt="Trung Tâm Thông Tin, Chỉ Đạo Điều Hành" />
														<h4 class="sub-title">
															Trung Tâm Thông Tin,<br>Chỉ Đạo Điều Hành
														</h4>
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="cong-nghe-thong-tin" rel="noopener">
																			<h5>
																				Trung Tâm Thông Tin,<br>Chỉ Đạo Điều Hành
																			</h5>
																		</a>
																	</div>

																	<div class="fat-gallery-excerpt">
																		<br>
																		<p class="in-dam">
																			<font color="#FF6600" size="+1"><b>Trung
																					tâm thông tin, chỉ đạo điều hành</b></font> <span>bao
																				gồm: các dữ liệu số về tình hình biến động các chỉ
																				số kinh tế - xã hội của địa phương, tỉnh, thành phố,
																				quốc gia; các chỉ số hoạt động, vận hành, kinh tế
																				của 1 tổ chức/ doanh nghiệp, các thông tin.....</span>
																		</p>
																		<p class="xem-them-1">
																			<a href="cong-nghe-thong-tin"
																				class="xem-them-2 in-dam">Xem thêm...</a>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<script type="text/javascript">
											var $container = jQuery('#fat-gallery-container-6093df92a57cd');

											jQuery(
													'.fat-gallery-item.hover-dir > div.fat-thumbnail')
													.hoverdir();

											FatGallery
													.init(
															'https://mec.vn/wp-admin/admin-ajax.php',
															'6093df92a57cd',
															'magnificPopup',
															'lg-slide');

											$container.css('opacity', '1');
										</script>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</section>
		
			

		<!-- ======= Portfolio Section ======= -->
		<section id="portfolio" class="portfolio">
			<div class="container">

				<div class="section-title" data-aos="fade-up">
					<h2>Sản Phẩm</h2>
				</div>

				<div class="row" data-aos="fade-up">
					<div class="col-lg-12 d-flex justify-content-center">
						<ul id="portfolio-flters">
							<li data-filter="*" class="filter-active">All</li>
							<li data-filter=".filter-card">Sản Phẩm Công Nghệ Công
								Nghiệp</li>
							<li data-filter=".filter-app">Sản Phẩm Thương Mại</li>
							<!--<li data-filter=".filter-web">Web</li>-->
						</ul>
					</div>
				</div>

				<div class="row portfolio-container " data-aos="fade-up">


					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img
							src="<c:url value="/assets/user/img/portfolio/HVOF01_1.png" />"
							class="img-fluid" style="background-color: white;" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="HVOF01">Home Vision HVOF01 </a>
							</h4>
							<p></p>
							<a
								href="<c:url value="/assets/user/img/portfolio/HVOF01_1.png" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="Home Vision HVOF01"><i class="bx bx-plus"></i></a> <a
								href="HVOF01" class="details-link" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img
							src="<c:url value="/assets/user/img/portfolio/HVIP01_3.png" />"
							class="img-fluid" style="background-color: white;" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="HVIP01">Home Vision HVIP01 </a>
							</h4>
							<p></p>
							<a
								href="<c:url value="/assets/user/img/portfolio/HVIP01_3.png" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="Home Vision HVIP01"><i class="bx bx-plus"></i></a> <a
								href="HVIP01" class="details-link" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img
							src="<c:url value="/assets/user/img/portfolio/960x643_GPON_iGate_GW020.jpg" />"
							class="img-fluid" style="background-color: white;" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="GW020_H">GPON ONT iGate GW020-H</a>
							</h4>
							<p></p>
							<a
								href="<c:url value="/assets/user/img/portfolio/960x643_GPON_iGate_GW020.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="GPON ONT iGate GW020-H"><i class="bx bx-plus"></i></a> <a
								href="GW020_H" class="details-link" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img
							src="<c:url value="/assets/user/img/portfolio/GPON_ONT_iGate_GW040-H.jpg" />"
							class="img-fluid" style="background-color: white;" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="GW040_H">GPON ONT iGate GW040-H</a>
							</h4>
							<p></p>
							<a
								href="<c:url value="/assets/user/img/portfolio/GPON_ONT_iGate_GW040-H.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="GPON ONT iGate GW040-H"><i class="bx bx-plus"></i></a> <a
								href="GW040_H" class="details-link" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img
							src="<c:url value="/assets/user/img/portfolio/800x800-Mesh-iGate-EW12S-01.png" />"
							class="img-fluid" style="background-color: white;" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="EW12S_SG">iGate EW12S/SG</a>
							</h4>
							<p></p>
							<a
								href="<c:url value="/assets/user/img/portfolio/800x800-Mesh-iGate-EW12S-01.png" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="iGate EW12S/SG"><i class="bx bx-plus"></i></a> <a
								href="EW12S_SG" class="details-link" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img
							src="<c:url value="/assets/user/img/portfolio/EW12C-1.png" />"
							class="img-fluid" style="background-color: white;" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="EW12C_CG">iGate EW12C/CG</a>
							</h4>
							<p></p>
							<a
								href="<c:url value="/assets/user/img/portfolio/EW12C-1.png" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="iGate EW12C/CG"><i class="bx bx-plus"></i></a> <a
								href="EW12C_CG" class="details-link" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img
							src="<c:url value="/assets/user/img/portfolio/960x643-iGate_GW240-H.jpg" />"
							class="img-fluid" style="background-color: white;" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="GW240_H">GPON ONT iGate GW240-H</a>
							</h4>
							<p></p>
							<a
								href="<c:url value="/assets/user/img/portfolio/960x643-iGate_GW240-H.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="GPON ONT iGate GW240-H"><i class="bx bx-plus"></i></a> <a
								href="GW240_H" class="details-link" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<img src="<c:url value="/assets/user/img/Product_1.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="javascript:void(0)">Hệ thống thiết bị mạng truy cập
									quang GPON</a>
							</h4>
							<a href="<c:url value="/assets/user/img/Product_1.JPG" />"
								data-gall="portfolioGallery" class="venobox preview-link mt-3"
								title="Hệ thống thiết bị mạng truy cập quang GPON"><i
								class="bx bx-plus"></i></a> <a href="javascript:void(0)"
								class="details-link mt-3" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<img src="<c:url value="/assets/user/img/Product_2.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="javascript:void(0)">Hệ thống truyền dẫn DWDM</a>
							</h4>
							<a href="<c:url value="/assets/user/img/Product_2.JPG" />"
								data-gall="portfolioGallery" class="venobox preview-link mt-4"
								title="Hệ thống truyền dẫn DWDM"><i class="bx bx-plus"></i></a>
							<a href="javascript:void(0)" class="details-link mt-4"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<img src="<c:url value="/assets/user/img/Product_4.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info text-center">
							<h4>
								<a href="javascript:void(0)">Nguồn</a>
							</h4>
							<p></p>
							<a href="<c:url value="/assets/user/img/Product_4.JPG" />"
								data-gall="portfolioGallery" class="venobox preview-link mt-2"
								title="Nguồn"><i class="bx bx-plus"></i></a> <a
								href="javascript:void(0)" class="details-link mt-2"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<img src="<c:url value="/assets/user/img/Product_3.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>
								<a href="#">Các sản phẩm IP</a>
							</h4>
							<p></p>
							<a href="<c:url value="/assets/user/img/Product_3.JPG" />"
								data-gall="portfolioGallery" class="venobox preview-link mt-2"
								title="IP"><i class="bx bx-plus"></i></a> <a
								href="javascript:void(0)" class="details-link mt-2"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<img
							src="<c:url value="/assets/user/img/portfolio/960x643-iGateMR4G-11D.jpg" />"
							class="img-fluid" alt="">
						<div class="portfolio-info text-center">
							<h4>
								<a href="MR4G_11D">4G LTE Mobile Hotspot – iGate MR4G-11D</a>
							</h4>
							<p></p>
							<a
								href="<c:url value="/assets/user/img/portfolio/960x643-iGateMR4G-11D.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link mt-2"
								title="4G LTE Mobile Hotspot – iGate MR4G-11D"><i
								class="bx bx-plus"></i></a> <a href="MR4G_11D"
								class="details-link mt-2" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<img
							src="<c:url value="/assets/user/img/portfolio/iGate_R4G_22N-01.jpg" />"
							class="img-fluid" alt="">
						<div class="portfolio-info text-center">
							<h4>
								<a href="22N_01">MULTIMODE LTE ROUTER - IGATE R4G 22N-01</a>
							</h4>
							<p></p>
							<a
								href="<c:url value="/assets/user/img/portfolio/iGate_R4G_22N-01.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link mt-2"
								title="MULTIMODE LTE ROUTER - IGATE R4G 22N-01"><i
								class="bx bx-plus"></i></a> <a href="22N_01"
								class="details-link mt-2" title="More Details"><i
								class="bx bx-link"></i></a>
						</div>
					</div>

				</div>
			</div>
		</section>
		<!-- End Portfolio Section -->



		<!-- ======= Videos ======= -->
		<section>
			<script type="text/javascript"
				src="<c:url value="/assets/user/js/test/handmade-1-new2.js" />"></script>

			<div class="container" data-aos="fade-up">
				<div class="section-title">
					<h2>
						Videos</strong>
					</h2>
				</div>

				<div class="row content">
					<div class="section bu-g-solution-static-content">
						<div class="feature f02" tabindex="0" style="opacity: 0;"></div>
					</div>

					<div class="section bu-g-solution-static-content">
						<div class="feature f04" tabindex="0" style="opacity: 0;">
							<ul class="column_ul"></ul>
						</div>
					</div>

					<div class="section bu-g-solution-static-content">
						<div class="feature f05" tabindex="0" style="opacity: 0;">
							<ul class="column_ul"></ul>
						</div>
					</div>



					<div class="section bu-g-solution-static-content" style="width: 100%;">
						<!-- Thư viện -->
						<link rel="stylesheet"
							href="<c:url value="/assets/user/css/test/handmade-content-videos.css" />"
							type="text/css" />

						<div class="feature f03" tabindex="0" style="opacity: 0;">
							<div class="video_wrap">
								<div class="video_bg">
									<img class="js-img-src js-img-lazy"
										src="<c:url value="/assets/user/img/bg/dark-backgrounds.jpg" />"
										data-src-pc="<c:url value="/assets/user/img/bg/dark-backgrounds.jpg" />"
										data-src-mobile="<c:url value="/assets/user/img/bg/dark-backgrounds.jpg" />"
										alt="A black background image with thin blue curves at the bottom." style="height: 550px" />
									<span></span>
								</div>
								<h3>Cuộc sống của chúng tôi</h3>
								<div class="video_ul">
									<ul>
										<li class=""><a data-src="0nrzdDqCs3w"
											data-omni-type="microsite_b2bcontent"
											data-omni="networks home_video:Samsung is accelerating the next generation 5G with Virtualized RAN"
											href="#"
											title="WATCH : Năm 2020 Tập đoàn VNPT đạt tổng doanh thu 162,7 nghìn tỷ đồng với lợi nhuận 7,1 nghìn tỷ đồng">
												<span class="video_img"> <img
													src="<c:url value="/assets/user/img/test/doanh-thu-vpnt.png" />"
													alt="Video - Năm 2020 Tập đoàn VNPT đạt tổng doanh thu 162,7 nghìn tỷ đồng với lợi nhuận 7,1 nghìn tỷ đồng">
													<span>watch</span>
											</span>
										</a>
											<div class="video_txt video_long">
												<div class="txt_motion">
													<p class="v-desc">Năm 2020 Tập đoàn VNPT đạt tổng doanh
														thu 162,7 nghìn tỷ đồng với lợi nhuận 7,1 nghìn tỷ đồng</p>
												</div>
											</div></li>

										<li class="" style="margin-left: -75%;">
											<a data-src="F4U5yuAqqcE" data-omni-type="microsite_b2bcontent"
												data-omni="networks home_video:How Samsung Networks helps enterprises build a reliable private network - New Business Team"
												href="#" title="WATCH : Giới thiệu Tập đoàn VNPT - 2018">
												<span class="video_img"> 
												<img src="<c:url value="/assets/user/img/test/tap-doan-vnpt.jpg" />"
													alt="Video - Giới thiệu Tập đoàn VNPT - 2018">
												<span>watch</span>
											</span>
										</a>
											<div class="video_txt">
												<div class="txt_motion">
													<p class="v-desc">Giới thiệu Tập đoàn VNPT - 2018</p>
												</div>
											</div></li>

										<li class="active select" style="margin-left: 9%;"><a
											data-src="EFT3iL_AFaI" data-omni-type="microsite_b2bcontent"
											data-omni="rolling:right_click" href="#"
											title="WATCH : VNPT smartbox phiên bản 2"> <span
												class="video_img"> <img
													src="<c:url value="/assets/user/img/test/video-smartbox-image.png" />"
													alt="Video  - VNPT smartbox phiên bản 2"> <span>watch</span>
											</span>
										</a>
											<div class="video_txt">
												<div class="txt_motion">
													<p class="v-desc">VNPT smartbox phiên bản 2 - Biến TV
														thường thành thông minh</p>
												</div>
											</div></li>

										<li class="" style="margin-left: 92%;"><a
											data-src="kr1YuEZx-dY" data-omni-type="microsite_b2bcontent"
											data-omni="rolling:right_click" href="#"
											title="WATCH : VNPT - IT trong công cuộc 'Chuyển đối số quốc gia'">
												<span class="video_img"> <img
													src="<c:url value="/assets/user/img/test/chuyen-doi-so-quoc-gia.jpg" />"
													alt="Video - IT trong công cuộc 'Chuyển đối số quốc gia'">
													<span>watch</span>
											</span>
										</a>
											<div class="video_txt">
												<div class="txt_motion">
													<p class="v-desc">VNPT - IT trong công cuộc "Chuyển đối
														số quốc gia"</p>
												</div>
											</div></li>

										<li class=""><a data-src="kYFheBizfFs"
											data-omni-type="microsite_b2bcontent"
											data-omni="rolling:right_click" href="#"
											title="WATCH : Sản phẩm số xuất sắc: Nền tảng định danh điện tử VNPT eKYC">
												<span class="video_img"> <img
													src="<c:url value="/assets/user/img/test/vnptekyc_kvin.jpg" />"
													alt="Video  - Sản phẩm số xuất sắc: Nền tảng định danh điện tử VNPT eKYC">
													<span>watch</span>
											</span>
										</a>
											<div class="video_txt">
												<div class="txt_motion">
													<p class="v-desc">Sản phẩm số xuất sắc: Nền tảng định
														danh điện tử VNPT eKYC</p>
												</div>
											</div></li>

										<li class=""><a data-src="P7vk_KCTtWk"
											data-omni-type="microsite_b2bcontent"
											data-omni="rolling:right_click" href="#"
											title="WATCH : VNPT kết nối mọi người, Dân vũ VNPT Vinaphone">
												<span class="video_img"> <img
													src="<c:url value="/assets/user/img/test/vnpt-ket-noi-moi-nguoi.png" />"
													alt="Video  - VNPT kết nối mọi người, Dân vũ VNPT Vinaphone">
													<span>watch</span>
											</span>
										</a>
											<div class="video_txt">
												<div class="txt_motion">
													<p class="v-desc">VNPT kết nối mọi người, Dân vũ VNPT
														Vinaphone</p>
												</div>
											</div></li>

										<li class=""><a data-src="0nrzdDqCs3w"
											data-omni-type="microsite_b2bcontent"
											data-omni="networks home_video:Samsung is accelerating the next generation 5G with Virtualized RAN"
											href="#"
											title="WATCH : Năm 2020 Tập đoàn VNPT đạt tổng doanh thu 162,7 nghìn tỷ đồng với lợi nhuận 7,1 nghìn tỷ đồng">
												<span class="video_img"> <img
													src="<c:url value="/assets/user/img/test/doanh-thu-vpnt.png" />"
													alt="Video - Năm 2020 Tập đoàn VNPT đạt tổng doanh thu 162,7 nghìn tỷ đồng với lợi nhuận 7,1 nghìn tỷ đồng">
													<span>watch</span>
											</span>
										</a>
											<div class="video_txt video_long">
												<div class="txt_motion">
													<p class="v-desc">Năm 2020 Tập đoàn VNPT đạt tổng doanh
														thu 162,7 nghìn tỷ đồng với lợi nhuận 7,1 nghìn tỷ đồng</p>
												</div>
											</div></li>

										<li class=""><a data-src="F4U5yuAqqcE"
											data-omni-type="microsite_b2bcontent"
											data-omni="networks home_video:How Samsung Networks helps enterprises build a reliable private network - New Business Team"
											href="#" title="WATCH : Giới thiệu Tập đoàn VNPT - 2018">
												<span class="video_img"> <img
													src="<c:url value="/assets/user/img/test/tap-doan-vnpt.jpg" />"
													alt="Video - Giới thiệu Tập đoàn VNPT - 2018"> <span>watch</span>
											</span>
										</a>
											<div class="video_txt">
												<div class="txt_motion">
													<p class="v-desc">Giới thiệu Tập đoàn VNPT - 2018</p>
												</div>
											</div></li>

										<li class=""><a data-src="EFT3iL_AFaI"
											data-omni-type="microsite_b2bcontent"
											data-omni="rolling:right_click" href="#"
											title="WATCH : Testing the true power of mmWave 5G for real-life scenarios">
												<span class="video_img"> <img
													src="<c:url value="/assets/user/img/test/video-smartbox-image.png" />"
													alt="Video  - VNPT smartbox phiên bản 2"> <span>watch</span>
											</span>
										</a>
											<div class="video_txt">
												<div class="txt_motion">
													<p class="v-desc">VNPT smartbox phiên bản 2 - Biến TV
														thường thành thông minh</p>
												</div>
											</div></li>

										<li class=""><a data-src="kr1YuEZx-dY"
											data-omni-type="microsite_b2bcontent"
											data-omni="rolling:right_click" href="#"
											title="WATCH : IT trong công cuộc 'Chuyển đối số quốc gia'">
												<span class="video_img"> <img
													src="<c:url value="/assets/user/img/test/chuyen-doi-so-quoc-gia.jpg" />"
													alt="Video - IT trong công cuộc 'Chuyển đối số quốc gia'">
													<span>watch</span>
											</span>
										</a>
											<div class="video_txt">
												<div class="txt_motion">
													<p class="v-desc">VNPT - IT trong công cuộc "Chuyển đối
														số quốc gia"</p>
												</div>
											</div></li>
									</ul>

									<div class="slide_obj">
										<a data-omni-type="microsite_pcontentinter"
											data-omni="rolling:left_arrow" href="#" class="prev_btn"><span
											style="font-size: 0">Before</span></a> <a
											data-omni-type="microsite_pcontentinter"
											data-omni="rolling:right_arrow" href="#" class="next_btn"><span
											style="font-size: 0">After</span></a>
									</div>
									<div class="bottom_obj">
										<ul class="carousel">
											<li class="active"><a
												data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_1" href="#" title=""><span
													style="font-size: 0">First Video</span></a></li>
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_2" href="#" title=""><span
													style="font-size: 0">Second Video</span></a></li>
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_3" href="#" title=""><span
													style="font-size: 0">Third Video</span></a></li>
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_4" href="#" title=""><span
													style="font-size: 0">Fourth Video</span></a></li>
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_5" href="#" title=""><span
													style="font-size: 0">Fifth Video</span></a></li>
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_6" href="#" title=""><span
													style="font-size: 0">Sixth Video</span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="video_popup">
							<div class="popup_innder">
								<div id="videoArea"></div>
								<a href="#" class="close"></a>
							</div>
						</div>
					</div>



				</div>

				<script type="text/javascript"
					src="<c:url value="/assets/user/js/test/page.35ba7c29271cb1dd0c4bc4a93b15c715-new.js" />"></script>
			</div>
		</section>
		<!-- End Videos Section -->



	</main>
	<!-- End #main -->
	
	
	
	<!-- ===== Đoạn Javascript chạy hiệu ứng cho background ===== -->
	<script>
	    particlesJS("particles-js", {
	        "particles": {
	            "number": {
	                "value": 216,
	                "density": {
	                    "enable": true,
	                    "value_area": 562
	                }
	            },
	            "color": {
	                "value": "#ffffff"
	            },
	            "shape": {
	                "type": "circle",
	                "stroke": {
	                    "width": 0,
	                    "color": "#000000"
	                },
	                "polygon": {
	                    "nb_sides": 6
	                },
	                "image": {
	                    "src": "img/github.svg",
	                    "width": 60,
	                    "height": 60
	                }
	            },
	            "opacity": {
	                "value": 0.21,
	                "random": false,
	                "anim": {
	                    "enable": true,
	                    "speed": 0.3996003996003996,
	                    "opacity_min": 0.04795204795204795,
	                    "sync": false
	                }
	            },
	            "size": {
	                "value": 3,
	                "random": true,
	                "anim": {
	                    "enable": false,
	                    "speed": 4,
	                    "size_min": 0.8120772123013452,
	                    "sync": false
	                }
	            },
	            "line_linked": {
	                "enable": true,
	                "distance": 100,
	                "color": "#ffffff",
	                "opacity": 0.22096133965703635,
	                "width": 1
	            },
	            "move": {
	                "enable": true,
	                "speed": 1.3,
	                "direction": "top-right",
	                "random": false,
	                "straight": false,
	                "out_mode": "out",
	                "bounce": false,
	                "attract": {
	                    "enable": false,
	                    "rotateX": 600,
	                    "rotateY": 1200
	                }
	            }
	        },
	        "interactivity": {
	            "detect_on": "canvas",
	            "events": {
	                "onhover": {
	                    "enable": false,
	                    "mode": "repulse"
	                },
	                "onclick": {
	                    "enable": true,
	                    "mode": "push"
	                },
	                "resize": true
	            },
	            "modes": {
	                "grab": {
	                    "distance": 400,
	                    "line_linked": {
	                        "opacity": 1
	                    }
	                },
	                "bubble": {
	                    "distance": 400,
	                    "size": 40,
	                    "duration": 2,
	                    "opacity": 8,
	                    "speed": 3
	                },
	                "repulse": {
	                    "distance": 200,
	                    "duration": 0.4
	                },
	                "push": {
	                    "particles_nb": 4
	                },
	                "remove": {
	                    "particles_nb": 2
	                }
	            }
	        },
	        "retina_detect": true
	    });
	</script>
</body>
