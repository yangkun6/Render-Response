$(document).ready(function(){
	$(".pjMFT_2bg").hide();
	var get_tg1=$("#BeautifulSoup");
	var get_tg2=$(".row");
	var tg_ps1=get_tg1.offset().top;
	var tg_ps2=get_tg2.offset().top;
	$(window).scroll(function(){
		if ($(window).scrollTop()>tg_ps1){
			$(".pjMFT_2bg").slideDown("slow");
			$("#pjMFT_tc").modal('show');
			$("#pjMFT_tc").on('hidden.bs.modal',function(){
				$(".modal").remove();
			});
		};
	});
});