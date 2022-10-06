<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%@ page contentType="text/html;charset=UTF-8" language="java" %>

<title>ANSV | ${department}</title>
<link rel="stylesheet" href="<c:url value="/assets/course/style/detail.css"/>" />
<c:url value="/assets/course/img/ANSV_error.png" var="imgerror" />
<div class="container-fluid" style="background-color: #f2f2f2">
    <div class="wrap-content">
        <div itemprop="containsSeason">
            <div class="breadcrum nmr" style=" background: transparent;">
                <div class="fluid group">
                    <div class="c-list-item">
                        <h2 class="public-course__heading" style="margin-top: 100px">Tất Cả Khóa học ban ${department}</h2>
                    </div>
                    <!-- END .c-list-item -->
                </div>
                <!-- END .fluid -->
            </div>
            <div class="mid-wrap grid12">
                <div class="section row225">
                    <div class="section-content fluid">

                        <div class="wide-sub fluid clearfix">
                            <div class="subtray block-item video-item">
                                <c:if test="${not empty course}">
                                    <c:forEach items="${course}" var="c">
                                        <div class="item">
                                        <a class="thumb" itemprop="url" href="<c:url value="/user/khoa-hoc/${department}/${c.id}"/>" style="width: 200px !important;">
                                            <img  width="170px" height="170px" src="<c:url value="/assets/course/img/course/${c.url_img}"/>" onerror="this.src='${imgerror}';" alt="ANSV-COURSE" />
                                        </a>
                                            <div class="box-description" style="margin: 0 !important;">
                                                <h2 style=" overflow: inherit;height: 44px;"><a style="font-size: 20px;" href="<c:url value="/user/khoa-hoc/${department}/${c.id}"/>">${c.name}</a></h2>
                                            <meta itemprop="episodeNumber" content="0" />
                                            <div class="info-detail" style="margin-top: 60px;">
                                                <span style="font-size: 15px;"> <a href="<c:url value="/user/khoa-hoc/${department}"/>">Ban ${department}</a></span></div></div></div>
                                    </c:forEach>

                                </c:if>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<button id="backBtn" onclick="window.history.back()">
    <div class="btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
</button>
<script src="<c:url value="/assets/course/js/detail.js"/>"></script>

