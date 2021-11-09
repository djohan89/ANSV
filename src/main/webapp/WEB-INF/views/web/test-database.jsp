<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<section id="about-section" >
	<div class="container"><br><br>
		<div class="row">
			<div class="col-md-3 order-md-3">
				<h1>Hello World!!!</h1>
			</div>
			
			<div class="col-md-9 order-md-9">
				<c:forEach items="${result}" var="item">
			        <tr>
			            <td>1${item.id}</td>            
			        </tr>
			    </c:forEach>
			    <c:choose>
			    	<c:when test="${not empty results}">
			    		<c:forEach var="item" items="${results}">
			    			...
			    		</c:forEach>
			    	</c:when>
			    	<c:otherwise>
			    		<tr>
			    			<td>
			    				No items.
			    			</td>
			    		</tr>
			    	</c:otherwise>
			    </c:choose>
			</div>
		</div>
		
	</div>
	
</section>