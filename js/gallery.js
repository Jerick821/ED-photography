var width = $(window).width(); //get the width of the screen
var height = $(window).height(); //get the width of the screen
var bottom_nav_height = $("#my_nav").height();

jQuery(document).ready(function(){
	
    jQuery("#gallery").unitegallery({
    	gallery_width:width,							//gallery width		
		gallery_height:height-bottom_nav_height-40,	
		theme_enable_text_panel: false,
		thumb_width:200,								//thumb width
		thumb_height:120,
		slider_scale_mode: "fit",
		strippanel_background_color:"none",
		slider_enable_zoom_panel: false,
		strippanel_background_color:"white",
		// gallery_background_color: "green"				//set custom background color. If not set it will be taken from css.
    });
});