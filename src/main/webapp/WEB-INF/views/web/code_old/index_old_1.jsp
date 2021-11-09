<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<title>Trang chủ</title>

<body>
	<!-- ======= Hero Section ======= -->
	<section id="hero">
		<div id="heroCarousel" class="carousel slide carousel-fade"
			data-ride="carousel">

			<div class="carousel-inner" role="listbox">

				<!-- Slide 1 -->
				<div class="carousel-item active"
					style="background-image: url(http://www.vnpt-technology.vn/storage/photos/shares/Anh_banner/banner_web.jpg);">
					<div class="carousel-container">
						<div class="carousel-content animate__animated animate__fadeInUp">
							<h2>
								Welcome to <span>ANSV</span>
							</h2>
							<p>Công ty TNHH Thiết bị Viễn thông ANSV được thành lập từ
								tháng 7 năm 1993 trong quan hệ hợp tác liên doanh giữa Tập đoàn
								Alcatel (nay là Alcatel-Lucent) với Tổng công ty Bưu chính Viễn
								thông Việt Nam (nay là Tập đoàn Bưu chính Viễn thông Việt Nam).</p>
							<div class="text-center">
								<a href="" class="btn-get-started">Read More</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Slide 2 -->
				<div class="carousel-item"
					style="background-image: url(http://www.vnpt-technology.vn/storage/photos/shares/banner-main-index/slide-1.jpg);">
					<div class="carousel-container">
						<div class="carousel-content animate__animated animate__fadeInUp">
							<h2>Hệ thống theo dõi và quản lý chất lượng mạng</h2>
							<p>Hệ thống là một giải pháp nhằm quản lý theo dõi chất lượng
								và lưu lượng mạng 2G, 3G thông qua các chỉ số KPI. Giải pháp
								được xây dựng dựa trên kinh nghiệm gần 10 năm làm tối ưu hóa và
								triển khai các thiết bị viễn thông di động cùng với kĩ thuật xử
								lý số liệu tiên tiến: cache, partition giúp đưa ra các báo cáo
								chất lượng trong thời gian ngắn nhất, giúp các nhà quản lý có
								thể đưa ra kế hoạch xử lý kịp thời.</p>
							<div class="text-center">
								<a href="" class="btn-get-started">Read More</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Slide 3 -->
				<!-- <div class="carousel-item" style="background-image: url(template/web/assets/img/slide/slide-4.jpg);"> -->
				<div class="carousel-item"
					style="background-image: url(http://www.vnpt-technology.vn/storage/photos/shares/banner-main-index/slide-home-10.jpg);">
					<div class="carousel-container">
						<div class="carousel-content animate__animated animate__fadeInUp">
							<h2>Lĩnh vựa hoạt động</h2>
							<p>ANSV tiếp tục phát triển trên các lĩnh vực hoạt động
								truyền thống từ hơn 18 năm của mô hình liên doanh, đồng thời
								phát huy những kinh nghiệm cũng như nguồn lực tích lũy từ hơn 18
								năm qua, tiếp tục phát triển và mở rộng lĩnh vực hoạt động thúc
								đẩy phát triển công nghệ, công nghiệp và dịch vụ viễn thông và
								công nghệ thông tin.</p>
							<div class="text-center">
								<a href="" class="btn-get-started">Read More</a>
							</div>
						</div>
					</div>
				</div>

			</div>

			<a class="carousel-control-prev" href="#heroCarousel" role="button"
				data-slide="prev"> <span
				class="carousel-control-prev-icon icofont-simple-left"
				aria-hidden="true"></span> <span class="sr-only">Previous</span>
			</a> <a class="carousel-control-next" href="#heroCarousel" role="button"
				data-slide="next"> <span
				class="carousel-control-next-icon icofont-simple-right"
				aria-hidden="true"></span> <span class="sr-only">Next</span>
			</a>

			<ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

		</div>
	</section>
	<!-- End Hero -->

	<main id="main">

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
	background: #000000;
	height: 400px;
	overflow: hidden;
}

.post-module .thumbnail .date {
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 1;
	background: #e74c3c;
	width: 55px;
	height: 55px;
	padding: 12.5px 0;
	-webkit-border-radius: 100%;
	-moz-border-radius: 100%;
	border-radius: 100%;
	color: #FFFFFF;
	font-weight: 700;
	text-align: center;
	-webkti-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.post-module .thumbnail .date .day {
	font-size: 18px;
}

.post-module .thumbnail .date .month {
	font-size: 12px;
	text-transform: uppercase;
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
	background: #FFFFFF;
	width: 100%;
	padding: 30px;
	-webkti-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
	-moz-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
	-ms-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
	-o-transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
	transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
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

.post-module .post-content .sub_title {
	margin: 0;
	padding: 0 0 20px;
	color: #e74c3c;
	font-size: 20px;
	font-weight: 400;
}

.post-module .post-content .description {
	display: none;
	color: #666666;
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

.post-module .post-content .post-meta a {
	color: #999999;
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
				
				<c:forEach var="item" items="${ homeOne }" varStatus="index">
					<div class="col-lg-4">
						<div class="post-module">
							<div class="thumbnail">
								<img
									src="<c:url value="/assets/user/img/noi_bat/" />${ item.imgHome }">
							</div>
							<div class="post-content">
								<a href="#"><font color="lightgray">${ item.headerTitle }</font>
								</a><br> <br>
								<h1 class="title">${ item.title }</h1>
								<h2 class="sub_title">${ item.subTitle }</h2>
								<div class="description">
									<p class="text-less">${ item.description }</p>
								</div>
								<div class="post-meta" align="right">
									<span class="comments"> <a href="${ item.link }">Xem thêm...</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</c:forEach>
				
					<%-- <div class="col-lg-4">
						<div class="post-module">
							<div class="thumbnail">
								<img
									src="<c:url value="/assets/user/img/gioi-thieu-chung.png" />">
							</div>
							<div class="post-content">
								<a href="#"> <font color="lightgray">VỀ CHÚNG TÔI</font>
								</a><br> <br>
								<h1 class="title">Giới thiệu chung</h1>
								<h2 class="sub_title">TNHH Thiết bị Viễn thông ANSV</h2>
								<p class="description">Công ty TNHH Thiết bị Viễn thông ANSV
									được thành lập từ tháng 7 năm 1993 trong quan hệ hợp tác liên
									doanh giữa Tập đoàn Alcatel (nay là Alcatel-Lucent) với...</p>
								<div class="post-meta" align="right">
									<span class="comments"> <a href="#">Xem thêm...</a>
									</span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="post-module">
							<div class="thumbnail">
								<img
									src="<c:url value="/assets/user/img/smartbox-gioi-thieu2.png" />">
							</div>
							<div class="post-content">
								<a href="#"> <font color="lightgray">SẢN PHẨM</font>
								</a><br> <br>
								<h1 class="title">VNPT Smartbox 2</h1>
								<h2 class="sub_title">Nhanh gấp 4 lần, giá không đổi.</h2>
								<p class="description">SmartBox 2 dành cho tất cả các thành
									viên trong gia đình, từ Bố Mẹ, Ông Bà cho đến trẻ nhỏ, tất cả
									đều có thể sử dụng được SmartBox 2 với vô vàn các ứng dụng...</p>
								<div class="post-meta" align="right">
									<span class="comments"> <a href="#">Xem thêm...</a>
									</span>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-4">
						<div class="post-module">
							<div class="thumbnail">
								<img src="<c:url value="/assets/user/img/VoIP-2.jpg" />">
							</div>
							<div class="post-content">
								<a href="#"> <font color="lightgray">GIẢI PHÁP</font>
								</a><br> <br>
								<h1 class="title">IMS/VoIP</h1>
								<h2 class="sub_title">The city that never sleeps.</h2>
								<p class="description">IMS (Internet Protocol (IP)
									Multimedia Subsystem) là "phân hệ Đa Phương tiện Giao thức
									Internet", dựa trên các đặc tính của Giao thức Khởi tạo Phiên
									(SIP) do IETF...</p>
								<div class="post-meta" align="right">
									<span class="comments"> <a href="#">Xem thêm...</a>
									</span>
								</div>
							</div>
						</div>
					</div> --%>
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
										<div class="row content">
											<div class="col-lg-4">
												<ul class="column_ul">
													<li><a data-omni-type="microsite_b2bcontent"
														data-omni="networks home_news:samsung powers world’s first 3gpp-compliant nationwide public safety network in korea"
														href="#"
														title="LEARN MORE : Samsung Powers World’s First 3GPP-Compliant Nationwide Public Safety Network in Korea">
															<img class="js-img-src js-img-lazy"
															src="<c:url value="/assets/user/img/test/news1.jpg" />"
															data-src-pc="<c:url value="/assets/user/img/test/news1.jpg" />"
															data-src-mobile="<c:url value="/assets/user/img/test/news1.jpg" />"
															alt="Ảnh trúng gói thầu" />
															<h4 class="txt_fff ellipsis" style="font-size: 200%;">Nhà
																thầu ngoại trúng thầu gần nghìn tỷ</h4>
													</a></li>
												</ul>
											</div>

											<div class="col-lg-4">
												<ul class="column_ul">
													<li><a data-omni-type="microsite_b2bcontent"
														data-omni="networks home_news:samsung releases whitepaper on virtualized radio access network (vran)"
														href="#"
														title="LEARN MORE : Samsung Releases Whitepaper on Virtualized Radio Access Network (vRAN)">
															<img class="js-img-src js-img-lazy"
															src="<c:url value="/assets/user/img/test/news2.png" />"
															data-src-pc="<c:url value="/assets/user/img/test/news2.png" />"
															data-src-mobile="<c:url value="/assets/user/img/test/news2.png" />"
															alt="Ảnh tuyển dụng" />
															<h4 class="txt_fff ellipsis" style="font-size: 200%;">ANSV
																tuyển dụng</h4>
													</a></li>
												</ul>
											</div>

											<div class="col-lg-4">
												<ul class="column_ul">
													<li><a data-omni-type="microsite_b2bcontent"
														data-omni="networks home_news:verizon starts c-band equipment deployment with samsung network solutions"
														href="#"
														title="LEARN MORE : Verizon starts C-Band equipment deployment with Samsung Network Solutions">
															<img class="js-img-src js-img-lazy"
															src="<c:url value="/assets/user/img/test/news3.png" />"
															data-src-pc="<c:url value="/assets/user/img/test/news3.png" />"
															data-src-mobile="<c:url value="/assets/user/img/test/news3.png" />"
															alt="Verizon starts C-Band equipment deployment with Samsung Network Solutions" />
															<h4 class="txt_fff ellipsis" style="font-size: 200%;">Khai
																giảng khóa đào tạo Iot ứng dụng vào doanh nghiệp - Công
																ty TNHH Thiết bị Viễn thông ANSV</h4>
													</a></li>
												</ul>
											</div>
										</div>
										<!-- <ul class="column_ul">
										<li class="col-lg-4">
											<a data-omni-type="microsite_b2bcontent" data-omni="networks home_news:samsung powers world’s first 3gpp-compliant nationwide public safety network in korea" href="#" title="LEARN MORE : Samsung Powers World’s First 3GPP-Compliant Nationwide Public Safety Network in Korea">
											   <img class="js-img-src js-img-lazy" src="template/web/assets/img/test/news1.jpg" data-src-pc="template/web/assets/img/test/news1.jpg" data-src-mobile="template/web/assets/img/test/news1.jpg" alt="Ảnh trúng gói thầu"/>
											   <h4 class="txt_fff">Nhà thầu ngoại trúng gói thầu gần nghìn tỷ</h4>
											</a>
										</li>

										<li class="col-lg-4">
											<a data-omni-type="microsite_b2bcontent" data-omni="networks home_news:samsung releases whitepaper on virtualized radio access network (vran)" href="#" title="LEARN MORE : Samsung Releases Whitepaper on Virtualized Radio Access Network (vRAN)">
											   <img class="js-img-src js-img-lazy" src="template/web/assets/img/test/news2.png" data-src-pc="template/web/assets/img/test/news2.png" data-src-mobile="template/web/assets/img/test/news2.png" alt="Ảnh tuyển dụng"/>
											   <h4 class="txt_fff ellipsis">ANSV tuyển dụng</h4>
											</a>
										</li>

										<li class="col-lg-4">
											<a data-omni-type="microsite_b2bcontent" data-omni="networks home_news:verizon starts c-band equipment deployment with samsung network solutions" href="#" title="LEARN MORE : Verizon starts C-Band equipment deployment with Samsung Network Solutions">
											   <img class="js-img-src js-img-lazy" src="template/web/assets/img/test/news3.png" data-src-pc="template/web/assets/img/test/news3.png" data-src-mobile="template/web/assets/img/test/news3.png" alt="Verizon starts C-Band equipment deployment with Samsung Network Solutions"/>
											   <h4 class="txt_fff ellipsis">Khai giảng khóa đào tạo Iot ứng dụng vào doanh nghiệp - Công ty TNHH Thiết bị Viễn thông ANSV</h4>
											</a>
										</li>
				    				</ul> -->

										<ul class="mo_only">
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_1" href="#" title="" class="active"></a>
											</li>
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_2" href="#" title=""></a></li>
											<li><a data-omni-type="microsite_pcontentinter"
												data-omni="rolling:index_3" href="#" title=""></a></li>
										</ul>
										<div class="list__cont-link_new">
											<a data-omni-type="microsite_b2bcontent"
												data-omni="networks home_news:show more" href="#" title=""
												class="s-ico-new-window s-default detailButton s2"> Xem
												thêm <span class="show">></span>
											</a>
										</div>
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
									<p style="font-size: 14px; text-align: justify;">ANSV dựa
										trên ứng dụng KHCN - CNTT-VT cùng sự liên tục đổi mới sáng tạo
										và sực mạnh kết nối của các thành tựu công nghệ quốc tế cùng
										với những chuyên gia, kỹ sư người Việt nam, chúng tôi luôn nỗ
										lực phát triển, nâng cao giá trị cho cộng đồng, hướng tới mục
										tiêu đặt một dấu ấn vững chắc trên bản đồ công nghệ toàn cầu.</p>

								</div>
								<div class="tab-pane container p-0 fade" id="home2">
									<p style="font-size: 14px; text-align: justify;">ANSV định
										hướng trở thành doanh nghiệp đi đầu trong lĩnh vựa chuyển đổi
										số, tích hợp hệ thông CNTT - VT, phân phối bán lẻ các sản phẩm
										công nghệ ở thị trường Việt Nam và thị trường khu vựa.</p>
								</div>
								<div class="tab-pane container p-0 fade" id="home3">
									<p style="font-size: 14px; text-align: justify;">
										<span><i class="ri-check-double-line"></i> "Văn hóa là
											tinh thần - Sức mạnh Team work" luôn được đề cao và là văn
											hóa cốt lõi của Doanh nghiệp, tạo nên tinh thần ANSV, giúp
											chúng tôi không ngừng nỗ lực , sáng tạo vì lợi ích chung của
											tập thể, ủa khách hàng và của xã hội.</span></br> <br> <span><i
											class="ri-check-double-line"></i> "Con người là sức mạnh"-
											Với nguồn lực là đội ngũ cán bộ, kỹ sư được đào tạo bài bản
											và có nhiều năm kinh nghiệm, ANSV là nơi quy tụ và kết nối
											những nhân tài có sức sáng tạo và đam mê, cùng hướng tới mục
											tiêu phát triển các sản phẩm, giải đáp, dịch vụ công nghệ
											chất lượng cao, hữu ích phục vụ cuộc sống và cộng đồng.</span>
									</p>
								</div>
							</div>
						</div>
						<img src="<c:url value="/assets/user/img/infor.jpg" />"
							class="img-fluid" alt="" style="padding-top: 5%">
						<!-- <style>
				#test{
					background-image: url('template/web/assets/img/phuong-cham.png');
					background-repeat: no-repeat;
					width: 555px;
					text-align: justify;
					/*padding: Top Right Bottom Left*/
					padding: 10px 20px 10px 90px;
				}
			</style>
			
			<div id="test">
				<font size="1px">
					Với phương châm hoạt động đạo đức, chuyên nghiệp và sáng tạo, chúng tôi tạo ra môi trường làm 
					việc ý nghĩa cho cán bộ nhân viên, mang đến khách hàng các giá trị mới và dịch vụ tuyệt hảo, 
					hướng tới nâng cao giá trị, lợi ích cho Khách hàng, đồng hành cùng Khách hàng hướng tới sự phát 
					triển bền vững và mang lại trách nhiệm, giá trị của Doanh nghiệp với cộng đồng.
				</font>
			</div> -->

						<!--
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
              <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
            </ul>
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. alallalalalalallaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            
            -->
					</div>
				</div>

			</div>
		</section>
		<!-- End About Us Section -->



		<!-- ======= President Election Section ======= -->
		<section id="President-Election" class="President-Election">
			<div class="container" data-aos="fade-up">

				<div class="section-title">
					<h2>
						Thông Điệp Từ Tổng Giám Đốc</strong>
					</h2>
				</div>

				<div class="row content">
					<div class="col-lg-6" data-aos="fade-right">
						<img src="<c:url value="/assets/user/img/Presedent.JPG" />"
							class="img-fluid" alt="">
					</div>
					<div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
						<h3 style="border-bottom: 2px solid green">Kính gửi Quý khách
							hàng, Quý đối tác</h3>
						<br>
						<p style="font-size: 14px" class="font-italic">Lời đầu tiên
							tôi xin thay mặt toàn thể cán bộ công nhân viên của công ty TNHH
							Thiết bị viễn thông ANSV xin gửi đến Quý khách hàng,Quý đối tác
							lời chào cùng lời chi ân sâu sắc nhất. Nhận được sự tin tưởng và
							đồng hành của Quý vị vừa là niềm vinh dự vừa là động lực để chúng
							tôi tiếp tục nỗ lực, sáng tạo để tự hào khi luôn thấu hiểu được
							nhu cầu và đáp ứng được mong muốn của khách hàng.</p>
						<br>
						<p style="font-size: 14px" class="font-italic">Để thích ứng
							kịp thời với bước chuyển mình mạnh mẽ của công nghệ và với tham
							vọng sẽ trở thành công ty hàng đầu trong lĩnh vực chuyển đổi
							số(Disital Transformation), tích hợp hệ thống(System Intergration
							- ST), chúng tôi đã, đang làm việc và cộng tác với nhiều đối tác,
							nhà cung cấp hàng đầu trên thế giới để tập trung cung cấp và khai
							thác các dịch vụ, giải pháp về Công nghệ thông tin và Viễn thông
							nhằm nâng cao những giá trị, lợi ích, hình ảnh của Quý vị tại
							Việt Nam và khu vực.</p>
						<br>
						<p style="font-size: 14px" class="font-italic">Những dấu ấn mà
							ANSV có thể tự hào ngày hôm nay là thành quả trong suốt 28 năm
							hình thành và phát triển, là sự phấn đấu không ngừng của một đơn
							vị đoàn kết, sáng tạo, là sự đồng lòng của tập thể lãnh đạo các
							thời kỳ, là ự nhiệt huyết tận tâm của tập thể các cán bộ công
							nhân viên và người lao động trong công ty. Đây là những thành tựu
							giúp chúng tôi vững tin bước vào thập kỷ phát triển mới.</p>
						<br>
						<p style="font-size: 14px" class="font-italic">Với sự đổi mới
							trong cách nghĩ, cách làm, đam mê, và không ngừng sáng tạo, chúng
							tôi tin tưởng ANSV sẽ có những bước tiến thần tốc, đón đầu các xu
							hướng công nghệ giúp kiến tạo và thay đổi cuộc sống.</p>
						<br>
						<p style="font-size: 14px" class="font-italic">Với nội lực và
							sự quyết tâm, tập thể ANSV cam kết sẽ luôn luôn gắn kết, đồng
							hành cùng Quý vị để tiếp tục phát triển và tiến xa hơn nữa, khẳng
							định vai trò vị thể của Quý Khách hàng, Quý đối tác tại Việt Nam
							và trong khu vực.</p>
						<hr>

						<!--             <ul> -->
						<!--               <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li> -->
						<!--               <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li> -->
						<!--               <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li> -->
						<!--               <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li> -->
						<!--               <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li> -->
						<!--               <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li> -->
						<!--             </ul> -->
						<p class="font-italic">Một lần nữa, xin trân trọng cảm ơn!</p>
					</div>
				</div>

			</div>
		</section>
		<!-- End President Election Section -->


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
					Dịch Vụ &amp; Giải Pháp</strong>
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
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/cong-nghe-mang-di-dong.png" />"
													data-index="2">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/cong-nghe-mang-di-dong.png" />"
														data-alt="Công nghệ mạng di động">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/cong-nghe-mang-di-dong.png" />"
															alt="Công nghệ mạng di động" />

														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="#" target="_blank" rel="noopener">
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
																			<a href="#" class="xem-them-2 in-dam">Xem thêm...</a>
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
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="" target="_blank" rel="noopener">
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
																			<a href="#" class="xem-them-2 in-dam">Xem thêm...</a>
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
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="" target="_blank" rel="noopener">
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
																			<a href="#" class="xem-them-2 in-dam">Xem thêm...</a>
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
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/NGN.png" />"
															alt="Mạng Thế Hệ Mới NGN" />
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="" target="_blank" rel="noopener">
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
																			<a href="#" class="xem-them-2 in-dam">Xem thêm...</a>
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
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="" target="_blank" rel="noopener">
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
																			<a href="#" class="xem-them-2 in-dam">Xem thêm...</a>
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
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/IPCC-new.png" />"
													data-index="7">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/IPCC-new.png" />"
														data-alt="Giải Pháp IPCC">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/IPCC-new.png" />"
															alt="Giải Pháp IPCC" />
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="" target="_blank" rel="noopener">
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
																			<a href="#" class="xem-them-2 in-dam">Xem thêm...</a>
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
													data-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/giai-phap-ha-tang.png" />"
													data-index="8">
													<div class="fat-thumbnail" data-width="460"
														data-height="360"
														data-lazy-src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/giai-phap-ha-tang.png" />"
														data-alt="Giải Pháp Hạ Tầng CNTT">
														<img width="460" height="360"
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/giai-phap-ha-tang.png" />"
															alt="Giải Pháp Hạ Tầng CNTT" />
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="" target="_blank" rel="noopener">
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
																			<a href="#" class="xem-them-2 in-dam">Xem thêm...</a>
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
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="#" target="_blank" rel="noopener">
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
																			<a href="#" class="xem-them-2 in-dam">Xem thêm...</a>
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
															src="<c:url value="/assets/user/img/dich-vu-va-giai-phap/chi-dao-dieu-hanh.png" />"
															alt="Trung Tâm Thông Tin, Chỉ Đạo Điều Hành" />
														<div class="fat-thumbnail-hover">
															<div class="fat-hover-outer">
																<div class="fat-hover-inner line-height-1">
																	<div class="fat-gallery-title">
																		<a href="#" target="_blank" rel="noopener">
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
																			<a href="#" class="xem-them-2 in-dam">Xem thêm...</a>
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

		<!-- Content: Dịch vụ và Giải pháp(cái cũ) -->
		<!-- <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Dịch Vụ Và Giải Pháp</strong></h2>
          <p>Với lực lượng cán bộ kỹ thuật có trình độ chuyên môn cao và cơ sở vật chất hiện có, ANSV luôn khẳng định đảm bảo tốt chất lượng các dịch vụ hỗ trợ kỹ thuật cam kết với khách hàng như:</p>
        </div>
        <div class="row ">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch  " data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue " style=" background: url(template/web/assets/img/solution.jpg); background-position: center;">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                </svg>
                <a href="#"><i class="bx bxl-dribbble"></i></a>
              </div>
              <h4><a href="">Công Nghệ Mạng Di Động</a></h4>
              <p>ANSV là đơn vị đầu tiên các dự án triển khai mạng di động từ những năm 1993 đến nay.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch  mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-orange " style=" background: url(template/web/assets/img/solution.jpg); background-position: center;" >
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                </svg>
                <a href="#"><i class="bx bx-file"></i></a>
              </div>
              <h4><a href="">Giải Pháp Hệ Thống Mạng GPON</a></h4>
              <p>ANSV cung cấp các giải pháp tổng thể công nghệ mạng gigabit quang thụ động(GPON) bao gồm OLT, ONT và hệ thống quản lý tập trung NMS.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch  mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-pink" style=" background: url(template/web/assets/img/truyen-dan.jpg); background-position: center;">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                </svg>
                <a href="#"><i class="bx bx-tachometer"></i></a>
              </div>
              <h4><a href="">Công Nghệ Truyền Dẫn</a></h4>
              <p>ANSVctự hào là đơn vị triển khai các dự án truyền dẫn đầu tiên bao gồm cả vô tuyến và hữu tuyến(SDH, xDSL, Wifi, Viba, WDM,...) cho các nhà mạng lớn như VNPT và Mobifone.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch  mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-yellow" style=" background: url(template/web/assets/img/ngn.jpg); background-position: center;">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                </svg>
                <a href="#"><i class="bx bx-layer"></i></a>
              </div>
              <h4><a href="" class="text-white">Mạng Thế Hệ Mới NGN</a></h4>
              <p class="text-white">Mạng viễn thông thế hệ mới- NGN (Next Generation Network) đã trở thành xu hướng của nhiều nước trên thế giới do những lợi ích của nó cả về kinh tế ký thuật trong việc cung cấp các dịch vụ đa phương tiện.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch  mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-red" style=" background: url(template/web/assets/img/wifi.jpg); background-position: center;">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                </svg>
                <a href="#"><i class="bx bx-wifi-2"></i></a>
              </div>
              <h4><a href="" class="text-white">Giải Pháp Wifi Total Solution</a></h4>
              <p class="text-white">Giải pháp Wi-Fi tổng thể là giải pháp toàn diện, hiệu suất cao, linh hoạt trong triển khai; cung cấp kết nối không dây phù hợp cho tất cả khách hàng cá nhân, doanh nghiệp SME, nhà cung cấp dịch vụ, các cơ quan ban nghành trung ương và địa phương.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch  mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-teal" style=" background: url(template/web/assets/img/IPCC.jpg); background-position: center;">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                </svg>
                <a href="#"><i class="bx bx-arch"></i></a>
              </div>
              <h4><a href="">Giải Pháp IPCC</a></h4>
              <p class="">Công ty hiện đang là đối tác của Genesys trong việc xây dựng giải pháp, phát triển và triển khai các hệ thông IP Contact Centre (IPCC) trên nền Genesys Customer Interaction Management(CIM) Platform -thành phần cốt lõi của bộ sản phẩm Genesys. </p>
            </div>
          </div>
          
          
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch  mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-teal" style=" background: url(template/web/assets/img/truyen-dan.jpg); background-position: center;">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                </svg>
                <a href="#"><i class="bx bx-arch"></i></a>
              </div>
              <h4><a href="">Giải Pháp Hạ Tầng CNTT</a></h4>
              <p>Cung cấp và tích hợp các giải pháp hạ tâng CNTT như giải pháp Ảo hóa và Điện toán đám mây, giải pháp Hạ tầng mạng, giải pháp Hạ tầng trung tâm dữ liệu, giải pháp Hệ thống máy chủ và lưu trữ, giải pháp hội nghị truyền hình, giải pháp truyền trông hợp nhất và giải pháp xây dựng Cơ sở dữ liệu(CSDL) doanh nghiệp toàn diện.</p>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch  mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-teal" style=" background: url(template/web/assets/img/pay-online.jpg); background-position: center;">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                </svg>
                <a href="#"><i class="bx bx-arch"></i></a>
              </div>
              <h4><a href="">Hệ Thống Tính Cước Online - OCS (Online Charging System)</a></h4>
              <p>OCS- hệ thống tính cước online cho thuê bao di động trả trước và trả sau cho nhà mạng Mobifone tích hợp với các thành phần core trong mạng(mSTP, SDC, HLR, MSC, PGW, PCRF,...) và các hệ thống hỗ trợ, giám sát, khai báo thông tin thuê bao, khuyễn mãi. </p>
            </div>
          </div>
          
           <div class="col-lg-4 col-md-6 d-flex align-items-stretch  mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-teal" style=" background: url(template/web/assets/img/chi-dao.jpg); background-position: center;">
              <div class="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                </svg>
                <a href =""><i class="bx bx-server"> </i></a>
              </div>
              <h4><a href="" class="text-white">Trung Tâm Thông Tin, Chỉ Đạo Điều Hành</a></h4>
              <p class="text-white">Trung tâm thông tin, chỉ đạo điều hành bao gồm: các dữ liệu số về tình hình biến động các chỉ số kinh tế - xã hội của địa phương, tỉnh, thành phố, quốc gia; các chỉ số hoạt động, vận hành, kinh tế, của 1 tổ chức/ doanh nghiệp,các thông tin đa chiều theo nhóm các vấn đề, lĩnh vực cụ thể.</p>
            </div>
          </div>
          	

        </div>

      </div>
    </section> -->
		<!-- End Services Section -->

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
							<li data-filter=".filter-app">Sản Phẩm Thương Mại</li>
							<li data-filter=".filter-card">Sản Phẩm Công Nghiệp</li>
							<!--<li data-filter=".filter-web">Web</li>-->
						</ul>
					</div>
				</div>

				<div class="row portfolio-container" data-aos="fade-up">

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<img src="<c:url value="/assets/user/img/Product_1.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>App 1</h4>
							<p>App</p>
							<a
								href="<c:url value="/assets/user/img/portfolio/portfolio-1.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="App 1"><i class="bx bx-plus"></i></a> <a
								href="portfolio-details.html" class="details-link"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-web">
						<img src="<c:url value="/assets/user/img/Product_2.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>Web 3</h4>
							<p>Web</p>
							<a
								href="<c:url value="/assets/user/img/portfolio/portfolio-2.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="Web 3"><i class="bx bx-plus"></i></a> <a
								href="portfolio-details.html" class="details-link"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<img src="<c:url value="/assets/user/img/Product_3.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>App 2</h4>
							<p>App</p>
							<a
								href="<c:url value="/assets/user/img/portfolio/portfolio-3.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="App 2"><i class="bx bx-plus"></i></a> <a
								href="portfolio-details.html" class="details-link"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img src="<c:url value="/assets/user/img/Product_4.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>Card 2</h4>
							<p>Card</p>
							<a
								href="<c:url value="/assets/user/img/portfolio/portfolio-4.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="Card 2"><i class="bx bx-plus"></i></a> <a
								href="portfolio-details.html" class="details-link"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-web">
						<img src="<c:url value="/assets/user/img/Product_5.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>Web 2</h4>
							<p>Web</p>
							<a
								href="<c:url value="/assets/user/img/portfolio/portfolio-5.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="Web 2"><i class="bx bx-plus"></i></a> <a
								href="portfolio-details.html" class="details-link"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-app">
						<img src="<c:url value="/assets/user/img/Product_6.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>App 3</h4>
							<p>App</p>
							<a
								href="<c:url value="/assets/user/img/portfolio/portfolio-6.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="App 3"><i class="bx bx-plus"></i></a> <a
								href="portfolio-details.html" class="details-link"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img src="<c:url value="/assets/user/img/Product_7.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>Card 1</h4>
							<p>Card</p>
							<a
								href="<c:url value="/assets/user/img/portfolio/portfolio-7.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="Card 1"><i class="bx bx-plus"></i></a> <a
								href="portfolio-details.html" class="details-link"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-card">
						<img src="<c:url value="/assets/user/img/Product_1.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>Card 3</h4>
							<p>Card</p>
							<a
								href="<c:url value="/assets/user/img/portfolio/portfolio-8.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="Card 3"><i class="bx bx-plus"></i></a> <a
								href="portfolio-details.html" class="details-link"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

					<div class="col-lg-4 col-md-6 portfolio-item filter-web">
						<img src="<c:url value="/assets/user/img/Product_1.JPG" />"
							class="img-fluid" alt="">
						<div class="portfolio-info">
							<h4>Web 3</h4>
							<p>Web</p>
							<a
								href="<c:url value="/assets/user/img/portfolio/portfolio-9.jpg" />"
								data-gall="portfolioGallery" class="venobox preview-link"
								title="Web 3"><i class="bx bx-plus"></i></a> <a
								href="portfolio-details.html" class="details-link"
								title="More Details"><i class="bx bx-link"></i></a>
						</div>
					</div>

				</div>

			</div>
		</section>
		<!-- End Portfolio Section -->

		<!-- ======= Our Clients Section ======= -->
		<section id="clients" class="clients">
			<div class="container" data-aos="fade-up">

				<div class="section-title">
					<h2>Khách hàng</h2>
				</div>

				<div class="row no-gutters clients-wrap clearfix" data-aos="fade-up">

					<div class="col-lg-3 col-md-4 col-6">
						<div class="client-logo">
							<img src="<c:url value="/assets/user/img/clients/cmc.png" />"
								class="img-fluid" alt="">
						</div>
					</div>

					<div class="col-lg-3 col-md-4 col-6">
						<div class="client-logo">
							<img
								src="<c:url value="/assets/user/img/clients/mobifone.jpg" />"
								class="img-fluid" alt="">
						</div>
					</div>

					<div class="col-lg-3 col-md-4 col-6">
						<div class="client-logo">
							<img src="<c:url value="/assets/user/img/clients/nokia.png" />"
								class="img-fluid" alt="">
						</div>
					</div>

					<div class="col-lg-3 col-md-4 col-6">
						<div class="client-logo">
							<img src="<c:url value="/assets/user/img/clients/oracle.png" />"
								class="img-fluid" alt="">
						</div>
					</div>

					<div class="col-lg-3 col-md-4 col-6">
						<div class="client-logo">
							<img src="<c:url value="/assets/user/img/clients/samsung.png" />"
								class="img-fluid" alt="">
						</div>
					</div>

					<div class="col-lg-3 col-md-4 col-6">
						<div class="client-logo">
							<img
								src="<c:url value="/assets/user/img/clients/client-6.png" />"
								class="img-fluid" alt="">
						</div>
					</div>

					<div class="col-lg-3 col-md-4 col-6">
						<div class="client-logo">
							<img
								src="<c:url value="/assets/user/img/clients/client-7.png" />"
								class="img-fluid" alt="">
						</div>
					</div>

					<div class="col-lg-3 col-md-4 col-6">
						<div class="client-logo">
							<img
								src="<c:url value="/assets/user/img/clients/client-8.png" />"
								class="img-fluid" alt="">
						</div>
					</div>

				</div>

			</div>
		</section>
		<!-- End Our Clients Section -->



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



					<div class="section bu-g-solution-static-content">
						<!-- Thư viện -->
						<link rel="stylesheet"
							href="<c:url value="/assets/user/css/test/handmade-content-videos.css" />"
							type="text/css" />

						<div class="feature f03" tabindex="0" style="opacity: 0;">
							<div class="video_wrap">
								<div class="video_bg">
									<img class="js-img-src js-img-lazy"
										src="//images.samsung.com/is/image/samsung/p5/global/business/networks/main/images/kf3-bg_01.jpg"
										data-src-pc="//images.samsung.com/is/image/samsung/p5/global/business/networks/main/images/kf3-bg_01.jpg"
										data-src-mobile="//images.samsung.com/is/image/samsung/p5/global/business/networks/main/images/kf3-bg_01-m.jpg"
										alt="A black background image with thin blue curves at the bottom." />
									<span></span>
								</div>
								<h3>Video</h3>
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

										<li class="" style="margin-left: -75%;"><a
											data-src="F4U5yuAqqcE" data-omni-type="microsite_b2bcontent"
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
							<div class="list__cont-link_new">
								<a data-omni-type="microsite_b2bcontent"
									data-omni="networks home_video:show more" href="#" title=""
									class="s-ico-new-window s-default detailButton s2"> Xem
									thêm <span class="show">></span>
								</a>
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
					src="<c:url value="/assets/user/js/test/page.35ba7c29271cb1dd0c4bc4a93b15c715.js" />"></script>
			</div>
		</section>
		<!-- End Videos Section -->



	</main>
	<!-- End #main -->

</body>
