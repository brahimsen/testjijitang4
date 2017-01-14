<!--#include file="head.Asp" -->
<meta http-equiv="x-ua-compatible"  content="ie=7" />

<!--banner js -->


    <link rel="stylesheet" type="text/css" href="../news/6yc43.css" />
    <script type="text/javascript" src="../news/6yc1.js"></script>
    <script type="text/javascript" language="javascript">jQuery.noConflict();var j$ = jQuery;</script>    
    <script type="text/javascript" src="../news/6yc3.js"></script>
    <script type="text/javascript" src="../news/6yc15.js"></script>    
    <script type="text/javascript" src="../news/6yc19.js"></script> 





</head>

<body>
<div class="contact_bg">
<!--#include file="top.Asp" -->
</div>

<div class="banner" >



            <div class="slider-wrapper theme-default"  >

                <div id="slider" class="nivoSlider">

                    <%
					  i=1
					   set rs=server.CreateObject("adodb.recordset")
					   rs.open "select  * from qianbo_flash where id order by id asc",conn,2,3
					   while not rs.eof
					   %>

                    <img src='<%=rs("SmallPic")%>'  title='#htmlcaption<%=i%>'  width="1160" height="450" />                
                       <%
					   i=i+1
					   rs.movenext
					   wend
					   %>
                </div> 
                <!-- /slider -->

        

                <!-- captions -->

              <%
						i=1
					   set rs=server.CreateObject("adodb.recordset")
					   rs.open "select  * from qianbo_flash where id order by id asc",conn,2,3
					   while not rs.eof
					   %>

                <div id='htmlcaption<%=i%>' class="nivo-html-caption">
                    <div class="solidBack">
                        <div class="captionContainer" style="vertical-align:top;">
                        	<table border="0" width="100%">
                            	<tr>
                                	<td style="vertical-align: middle;">
                                	    <table cellpadding="0" cellspacing="0">
                                	        <tr><td  height="35"   style="   line-height:  35px; text-align:center;"><span class="sliderTitle"><%=rs("enbiaoti")%></span></td></tr>
                                	       
                                        </table>
                            		</td>
                                	<td style="padding:32px 0 0 0; width:125px; vertical-align:top;">
                    <a href='<%=rs("enlianjie")%>' class="infoButton" target='_self'><span style="text-transform:uppercase;">Learn&nbsp;More</span></a>                            		</td>
                           		</tr>
        					</table>                        
                        </div>
                    </div>
                  <div class="backgroundFade"></div>
                </div>               
                <%
				 i=i+1
					   rs.movenext
					   wend
					   %>

                                

                

                                

                

                                

       


	    </div>

     
     

 

 
 
</div>

<div class="contact_bg">

<div class="fwyxks">

<img src="images/fwyxks.png" width="1020" height="55" />

</div>

<%
set rs=server.CreateObject("adodb.recordset")
rs.open "select  * from qianbo_about where id=15",conn,2,3
%>
<div class="index_pic">
<div class="index_pic1">


<!--<a href="<%=rs("encontent")%>" rel="lightbox" ><img src="<%=rs("enAboutName")%>" width="351" height="214" /></a>-->

<img src="<%=rs("enAboutName")%>" width="351" height="214" />



</div>

<div class="index_txt1">
<b><%=rs("enAboutName1")%></b>

<Div style=" width:360px; height:179px;" ><%=rs("encontent1")%></Div>
<Div id="asdasd"><span><a href="about.asp?id=15">MORE>></a></span></Div>


</div>

<div class=" clear"></div>
</div>
<%rs.close%>
<Div  id="asdasd" style="margin-left:auto; margin-right:auto;   margin-top:20px; width:921px;"><img src="images/xian_03.jpg" width="921" height="7" /></Div> 
<div class="index_zxxx">
 <%
	   dim  io
	   io=1
set rs=server.CreateObject("adodb.recordset")
rs.open "select  top  3 *  from qianbo_news where  ViewFlag=-1   and sortid=8  order by id desc",conn,2,3
if  not rs.eof then
%>
<Div id="newindex">
    <Div id="newindex_01">
        <div class="newslist">
       <ul>
      <%while not rs.eof%>
        <%if  io=1 then%>
         <li>
         <div id="newslist01"><img src="<%=rs("pic1")%>"   width="190" height="117" /></div>
         <div id="newslist02">
            <Div class="newslistb"><A href="news_info.asp?id=<%=rs("id")%>"><%=left(rs("enNewsName"),43)%>...</A></Div>
           <Div class="newslisttime"><%=FormatDate(rs("Addtime"), 13)%></Div>
           <Div class="newslistcontent"><A  href="news_info.asp?id=<%=rs("id")%>"><%=left(RemoveHTML(rs("encontent")),138)%>..</A></Div>
          <span><a href="news.asp">MORE >></a></span>
         </div>
        
         </li>
         <li style="width:536px; height:3px; margin-top:20px; margin-bottom:20px;">  <img src="images/xiant_09.jpg" width="536" height="3" /></li>
       <%elseif  io=2 then%>  
         <li>
         <div id="newslist01" style="float:right;"><img src="<%=rs("pic1")%>"   width="190" height="117" /></div>
         <div id="newslist02" style="float:left;">
          <Div class="newslistb"><A href="news_info.asp?id=<%=rs("id")%>"><%=left(rs("enNewsName"),43)%>...</A></Div>
           <Div class="newslisttime"><%=FormatDate(rs("Addtime"), 13)%></Div>
           <Div class="newslistcontent"><A  href="news_info.asp?id=<%=rs("id")%>"><%=left(RemoveHTML(rs("encontent")),138)%>..</A></Div>
          <span><a href="news.asp">MORE >></a></span>
         </div>
          
         </li>
          <li style="width:536px; height:3px; margin-top:20px; margin-bottom:20px;">  <img src="images/xiant_09.jpg" width="536" height="3" /></li>
       <%else%>   
         <li>
         <div id="newslist01"><img src="<%=rs("pic1")%>"   width="190" height="117" /></div>
         <div id="newslist02">
          <Div class="newslistb"><A href="news_info.asp?id=<%=rs("id")%>"><%=left(rs("enNewsName"),43)%>...</A></Div>
           <Div class="newslisttime"><%=FormatDate(rs("Addtime"), 13)%></Div>
           <Div class="newslistcontent"><A  href="news_info.asp?id=<%=rs("id")%>"><%=left(RemoveHTML(rs("encontent")),138)%>..</A></Div>
          <span><a href="news.asp">MORE >></a></span>
         </div>
         </li>
   <%
   end if
   io=io+1
   rs.movenext
   wend
   %>      
       </ul>
       </div>
    </Div>
    <Div id="newindex_02">
       <Div class="newlist202"  style="margin-left:15px; margin-right:5px;"><img src="images/xiant_07.jpg"  width="5" height="491"/></Div>
       <Div class="newlist203">
          <ul>
          
           <%
	   dim  ip
	   ip=1
set rss=server.CreateObject("adodb.recordset")
rss.open "select  top  2 *  from qianbo_news where NoticeFlag=-1  and sortid=8  order by id desc",conn,2,3
while not rss.eof
%>

  <%if ip=1 then%>
          <li>
           <div id="newslistimg"><img src="<%=rss("pic2")%>" width="184" height="183" /></div>
            <Div id="newslistright">
            
        
          
  <Div class="newslistbb"><A href="news_info.asp?id=<%=rss("id")%>"><%=left(rss("enNewsName"),18)%>...</A></Div>
  <Div class="newslisttimee"><%=FormatDate(rss("Addtime"), 13)%></Div>
  <Div class="newslistcontentt"><A  href="news_info.asp?id=<%=rss("id")%>"><%=left(RemoveHTML(rss("encontent")),110)%>..</A></Div>
          <span><a href="news.asp">MORE >></a></span>
            </Div>
           </li>
           <li style="width:357px; height:3px;  margin-top:15px;  margin-bottom:20px;  "><img src="images/xiant_13.jpg"   width="357" height="3"/> </li>
  <%else%>         
           <li>
           <div id="newslistimg" style="float:right;"><img src="<%=rss("pic2")%>" width="184" height="183" /></div>
            <Div id="newslistright" style="float:left;">
   <Div class="newslistbb"><A href="news_info.asp?id=<%=rss("id")%>"><%=left(rss("enNewsName"),18)%>...</A></Div>
  <Div class="newslisttimee"><%=FormatDate(rss("Addtime"), 13)%></Div>
  <Div class="newslistcontentt"><A  href="news_info.asp?id=<%=rss("id")%>"><%=left(RemoveHTML(rss("encontent")),110)%>..</A></Div>
          <span><a href="news.asp">MORE >></a></span>
            </Div>
           </li>
      <%
	  end if
	  ip=ip+1
	  rss.movenext
	  wend
	  %>    
                    </ul>
       </Div>
    </Div>
</Div>



 <%
 end if
 rs.close
 %>

</div>



<!--#include file="foot.Asp" -->

</div>






</body>
</html>

