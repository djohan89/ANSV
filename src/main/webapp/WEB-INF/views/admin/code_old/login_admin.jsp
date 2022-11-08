<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/layouts/taglib.jsp" %>

<head>
<title>Admin - Login</title>
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
				            <form name='loginForm' action="<c:url value='/admin/j_spring_security_login' />" method='POST'>
				            
				            <!--   if you want to have the card without animation please remove the ".card-hidden" class   -->
				                <div class="card card-hidden">
				                    <div class="header text-center"><b>Admin Login</b></div>
				                    <div class="content">
				                        <div class="form-group">
				                            <label>Tài khoản</label>
				                            <input type='text' name='username' class="form-control" />
				                        </div>
				                        <div class="form-group">
				                            <label>Mật khẩu</label>
				                            <input type='password' name='password' class="form-control" />
				                        </div>
				                    </div>
				                    <div class="footer text-center">
				                    	<input name="submit" type="submit" value="Đăng nhập" class="btn btn-fill btn-warning btn-wd" />
				                    	<c:if test="${ not empty message }">
											<br><font color="red">${ message }</font>
										</c:if>
				                    </div>
				                </div>
				                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
				
				            </form>
				
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