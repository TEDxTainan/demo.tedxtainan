<script>

/*滑過年會影片講者名稱時會跳出講者介紹*/
jQuery(document).ready(function($){
  $(".vtitle").hover(function(){
		$(".detail",this).fadeToggle();
	},
	function(){
		$(".detail",this).hide();
	})
});


/*在預覽文章片段後加入...*/
jQuery(document).ready(function($){
  $(".read-more").before("...");
});


/*在文章內插入按鈕*/
jQuery(document).ready(function($){
$( "<div class=\"fontbtn\"></div>" ).appendTo( ".articletitle" );
$( "<div class=\"sizebtn\"><a href=\"javascript:changesize(13)\">小</a></div>" ).appendTo( ".fontbtn" );
$( "<div class=\"sizebtn\"><a href=\"javascript:changesize(16)\">中</a></div>" ).appendTo( ".fontbtn" );
$( "<div class=\"sizebtn\"><a href=\"javascript:changesize(20)\">大</a></div>" ).appendTo( ".fontbtn" );
});


/*改變文章內文字大小*/
function changesize(size){
var article=document.querySelectorAll(".articlepart p");
var i;
for (i = 0; i < article.length; i++) {
    article[i].style.fontSize=size+'px';
}

}
</script>
