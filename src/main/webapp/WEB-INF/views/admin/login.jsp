<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/layouts/taglib.jsp" %>

<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<link rel="icon" type="image/png" href="<c:url value='/assets/admin/img/favicon.ico' />">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>Admin - Login</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

    <!-- Bootstrap core CSS     -->
	<link href="<c:url value='/assets/admin/css/bootstrap.min.css' />" rel="stylesheet" />
	
	<!--  Light Bootstrap Dashboard core CSS    -->
	<link href="<c:url value='/assets/admin/css/light-bootstrap-dashboard.css?v=1.4.1' />" rel="stylesheet" />
	
	<!--  CSS for Demo Purpose, don't include it in your project     -->
	<link href="<c:url value='/assets/admin/css/demo.css' />" rel="stylesheet" />
	
	<!-- Fonts and icons -->
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css'>
	<link href="<c:url value='/assets/admin/css/pe-icon-7-stroke.css' />" rel="stylesheet" />

</head>
<body>

<nav class="navbar navbar-transparent navbar-absolute">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="<c:url value='/trang-chu' />">
	            <font size="+6"><b>ANSV</b></font>
            	Administrator
            </a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li>
                   <!-- <a href="register.html">Register</a> -->
                </li>
            </ul>
        </div>
    </div>
</nav>


<div class="wrapper wrapper-full-page">
    <div class="full-page login-page" data-color="orange" data-image="<c:url value='/assets/admin/img/full-screen-image-1.jpg' />">

    <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                        <form:form action="dang-nhap" method="POST" modelAttribute="user">
							${ statusLogin }
                        <!--   if you want to have the card without animation please remove the ".card-hidden" class   -->
                            <div class="card card-hidden">
                                <div class="header text-center">Đăng nhập</div>
                                <div class="content">
                                    <div class="form-group">
                                        <label>Tài khoản</label>
                                        <!-- <input type="email" placeholder="Enter email" class="form-control"> -->
                                        <form:input type="text" class="form-control" placeholder="Nhập tài khoản" path="username" />
                                    </div>
                                    <div class="form-group">
                                        <label>Mật khẩu</label>
                                        <!-- <input type="password" placeholder="Password" class="form-control"> -->
                                        <form:input type="password" class="form-control" placeholder="Nhập mật khẩu" path="password" />
                                    </div>
                                </div>
                                <div class="footer text-center">
                                    <button type="submit" class="btn btn-fill btn-warning btn-wd">Đăng nhập</button>
                                </div>
                            </div>

                        </form:form>

                    </div>
                </div>
            </div>
        </div>

    	<footer class="footer footer-transparent">
            <div class="container">
                <nav class="pull-left">
                    <ul>
                        <li><a href="<c:url value='/trang-chu' />">Trang chủ</a></li>
                        <li><a href="<c:url value='/ve-chung-toi' />">Công ty</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
                <p class="copyright pull-right">
                    &copy; <script>document.write(new Date().getFullYear())</script> <a href="<c:url value='/trang-chu' />"><b>ANSV</b></a>, Technologies Create Future
                </p>
            </div>
        </footer>
    </div>
</div>


</body>

    <!--   Core JS Files  -->
    <script src="<c:url value='/assets/admin/js/jquery.min.js' />" type="text/javascript"></script>
	<script src="<c:url value='/assets/admin/js/bootstrap.min.js' />" type="text/javascript"></script>
	<script src="<c:url value='/assets/admin/js/perfect-scrollbar.jquery.min.js' />" type="text/javascript"></script>


	<!--  Forms Validations Plugin -->
	<script src="<c:url value='/assets/admin/js/jquery.validate.min.js' />"></script>

	<!--  Plugin for Date Time Picker and Full Calendar Plugin-->
	<script src="<c:url value='/assets/admin/js/moment.min.js' />"></script>

    <!--  Date Time Picker Plugin is included in this js file -->
    <script src="<c:url value='/assets/admin/js/bootstrap-datetimepicker.min.js' />"></script>

    <!--  Select Picker Plugin -->
    <script src="<c:url value='/assets/admin/js/bootstrap-selectpicker.js' />"></script>

	<!--  Checkbox, Radio, Switch and Tags Input Plugins -->
	<script src="<c:url value='/assets/admin/js/bootstrap-switch-tags.min.js' />"></script>

	<!--  Charts Plugin -->
	<script src="<c:url value='/assets/admin/js/chartist.min.js' />"></script>

    <!--  Notifications Plugin    -->
    <script src="<c:url value='/assets/admin/js/bootstrap-notify.js' />"></script>

    <!-- Sweet Alert 2 plugin -->
	<script src="<c:url value='/assets/admin/js/sweetalert2.js' />"></script>

    <!-- Vector Map plugin -->
	<script src="<c:url value='/assets/admin/js/jquery-jvectormap.js' />"></script>

    <!--  Google Maps Plugin    -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>

	<!-- Wizard Plugin    -->
    <script src="<c:url value='/assets/admin/js/jquery.bootstrap.wizard.min.js' />"></script>

    <!--  Datatable Plugin    -->
    <script src="<c:url value='/assets/admin/js/bootstrap-table.js' />"></script>

    <!--  Full Calendar Plugin    -->
    <script src="<c:url value='/assets/admin/js/fullcalendar.min.js' />"></script>

    <!-- Light Bootstrap Dashboard Core javascript and methods -->
	<script src="<c:url value='/assets/admin/js/light-bootstrap-dashboard.js?v=1.4.1' />"></script>

	<!-- Light Bootstrap Dashboard DEMO methods, don't include it in your project! -->
	<script src="<c:url value='/assets/admin/js/demo.js' />"></script>

    <script type="text/javascript">
        $().ready(function(){
            lbd.checkFullPageBackgroundImage();

            setTimeout(function(){
                // after 1000 ms we add the class animated to the login/register card
                $('.card').removeClass('card-hidden');
            }, 700)
        });
    </script>

</html>