function close_edit_view(){$("#editor").css("display","none")}function show_edit_view(e){$("#editor").css("display","block");var t=$(e).find("span"),n=$(t).text();n=n.trim();var r=$(e).attr("name");$(".edit_name").val(r),$(".edit_text_new").val(n),$(".edit_text_old").val(n)}function on_ready_grid(){init_grids()}function init_grids(){for(var e=document.getElementsByClassName("grid_container"),t=0;t<e.length;t++){var n=e[t],r=n.getElementsByClassName("grid_temp_holder")[0],i=$(r).find(".grid_item[size=big]"),o=$(r).find(".grid_item[size=medium]"),a=$(r).find(".grid_item[size=small]"),s=n.getElementsByClassName("grid_item");$(s).css("marginLeft",gap_size+"%"),$(s).css("marginTop",gap_size+"vh");for(var l=[],d=0;d<4;d++){var c=document.createElement("div");c.className="grid_part",$(c).attr("filled",0),l[d]=c,$(n).append(c)}var _=100-gap_size,u=100-gap_size;$(i).css("width",_+"%"),$(i).css("height",u+"%");for(var d=0;d<i.length;d++){var f=i[d],g=$(l).filter("[filled=0]").first();g.append(f),g.attr("filled",4)}var _=100-gap_size,u=50-gap_size;$(o).css("width",_+"%"),$(o).css("height",u+"%");for(var d=0;d<o.length;d++){var f=o[d],p=$(l).filter("[filled=0]").first();if(p.length>0)$(p).append(f),$(p).attr("filled",2);else{var m=$(l).filter("[filled=2]").first();m.length>0&&($(m).append(f),$(m).attr("filled",4))}}var _=50-gap_size,u=50-gap_size;$(a).css("width",_+"%"),$(a).css("height",u+"%");for(var d=0;d<a.length;d++){var f=a[d],g=$(l).not("[filled=4]").first(),v=1*$(g).attr("filled");$(g).append(f),$(g).attr("filled",v+1)}Math.ceil(s.length/items_per_part),setTimeout(function(){set_text_color(s)},300),$(r).remove()}}function set_text_color(e){for(var t=0;t<e.length;t++){var n=e[t],r=n.getElementsByTagName("img")[0],i=n.getElementsByTagName("h1")[0],o=Math.round(getAverageRGB(r)),a=o;a=a>10?30:250,a="rgb("+a+", "+a+", "+a+")",$(i).css("color",a)}}function getAverageRGB(e){var t,n,r,i,o={r:0,g:0,b:0},a=document.createElement("canvas"),s=a.getContext&&a.getContext("2d"),l=-4,d={r:0,g:0,b:0},c=0;if(!s)return o;r=a.height=e.naturalHeight||e.offsetHeight||e.height,n=a.width=e.naturalWidth||e.offsetWidth||e.width,s.drawImage(e,0,0,n,.3*r);try{t=s.getImageData(0,0,n,r)}catch(e){return o}for(i=t.data.length;(l+=20)<i;)++c,d.r+=t.data[l],d.g+=t.data[l+1],d.b+=t.data[l+2];return d.r=~~(d.r/c),d.g=~~(d.g/c),d.b=~~(d.b/c),d.r,d.g,d.b,(d.r+d.g+d.b)/3}function init_part(e,t,n,r){}function on_ready_load_images(){for(var e=$("[src_desktop_only]"),t=0;t<e.length;t++){var n=e[t];if(isDesktop()){var r=$(n).attr("src_desktop_only");$(n).attr("src",r)}}}function isDesktop(){return"none"!=$("#desktop_check").css("display")}function on_ready_admin_media(){var e=document.getElementsByClassName("select_type")[0];void 0!=e&&update_inputs(e),$(".i_media_inner").click(function(){var e=$(this).attr("media_id");$("#i_load_container").load("views/media_event.php?media_id="+e,{},function(){console.log("asdasd"),init_single_post()})})}function init_single_post(){$(".media_even").click(function(e){$(e.target).hasClass("media_even")&&$("#i_load_container").html("")}),$(".media_even_close").click(function(){$("#i_load_container").html("")})}function update_inputs(e){"image"==e.value?($(".image_post_only").show(),$(".video_post_only").hide()):($(".image_post_only").hide(),$(".video_post_only").show())}function on_ready_misc(){$("#admin_info_cross").click(function(){$(".admin_info_container").fadeOut()})}function on_ready(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($(".nav_d").css("visibility","visible"),init_mc_button(),init_nav_links(),toggle_nav_menu(),fade_duration=500)}function toggle_nav_menu(){nav_menu_visible=!nav_menu_visible,$(".nav_d").fadeToggle(fade_duration),nav_menu_visible?jQuery(".McButton b").animate({"background-color":button_open_color},fade_duration):jQuery(".McButton b").animate({"background-color":button_closed_color},fade_duration)}function init_mc_button(){var e=$("[data=hamburger-menu]");e.find("b:nth-child(1)"),e.find("b:nth-child(2)"),e.find("b:nth-child(3)"),$(e).click(function(){toggle_nav(!1)})}function toggle_nav(e){var t=$("[data=hamburger-menu]"),n=t.find("b:nth-child(1)"),r=(t.find("b:nth-child(2)"),t.find("b:nth-child(3)"));nav_in_animation&&!e||(nav_in_animation=!0,toggle_nav_menu(),$(t).toggleClass("active"),t.hasClass("active")?(n.velocity({top:"50%"},{duration:160,easing:"swing"}),r.velocity({top:"50%"},{duration:160,easing:"swing"}).velocity({rotateZ:"90deg"},{duration:640,delay:200,easing:[500,20]}),t.velocity({rotateZ:"135deg"},{duration:640,delay:200,easing:[500,20],complete:function(){nav_in_animation=!1}})):(t.velocity("reverse"),r.velocity({rotateZ:"0deg"},{duration:640,easing:[500,20]}).velocity({top:"100%"},{duration:160,easing:"swing"}),n.velocity("reverse",{delay:640,complete:function(){nav_in_animation=!1}})))}function init_nav_links(){$(".nav_link").click(function(){toggle_nav(!0)})}function on_ready_offert(){init_add_to_cart(),$(".offert_close").click(function(){close_offert()}),$(".offert_send").click(function(){send_offert()}),$(".offert_open").click(function(){open_offert()})}function load_cart(){$(".offert_product").load("functions/echo_cart",function(){init_offert()})}function send_offert(){var e=$("#email").val(),t=$("#name").val(),n=$("#phone").val();$.ajax({url:"functions/send_offert.php",type:"GET",data:"email="+e+"&name="+t+"&phone="+n+"&sec=sueweuey"}).success(function(e){})}function init_offert(){$(".cart_remove").click(function(){var e=$(this).attr("product_id");$.ajax({url:"functions/alter_cart.php",type:"GET",data:"remove=&product_id="+e}).success(function(e){load_cart()})})}function open_offert(){$(".offert").css("display","block"),load_cart()}function close_offert(){$(".offert").css("display","none")}function init_add_to_cart(){$(".send_offert").click(function(){var e=$(this).attr("product_id");$.ajax({url:"functions/alter_cart.php",type:"GET",data:"add=&product_id="+e}).success(function(e){open_offert()})})}function on_ready_product_scroller(){init_product_slider(),init_arrows()}function init_arrows(e,t,n){$(e).click(function(){move(!1,n)}),$(t).click(function(){move(!0,n)})}function init_product_slider(){for(var e=document.getElementsByClassName("product_slider_container"),t=0;t<e.length;t++){var n=e[t];all_product_sliders[t]=n,init_arrows(n.getElementsByClassName("i_products_arrow_r"),n.getElementsByClassName("i_products_arrow_l"),n);var r=n.getElementsByClassName("i_products_sliders");all_product_num[t]=r.length,r.length>0&&(product_width=get_width_in_percentage(r[0]));for(var i=0;i<r.length;i++){var o=r[i],a=product_width*i+"%";$(o).css("left",a)}}}function move(e,t){var t=t.getElementsByClassName("i_products_slider")[0],n=all_product_sliders.indexOf(t);if(!1===currently_sliding){currently_sliding=!0;var r=-1;e&&(r=1);var i=t.getElementsByClassName("i_products_sliders"),o=Math.round(100/product_width);if(i.length<=o)return void(currently_sliding=!1);var a=all_current_left[n];"aut"!=a&&void 0!=a||($(t).css("left","0%"),a=0),a=Math.round(1e3*a)/1e3;var s=1*a+product_width*r;s=Math.round(1e3*s)/1e3;var l=all_current_left[n],d=Math.round(l);$(t).animate({left:s+"%"},900,"easeOutQuint",function(){currently_sliding=!1});var c=get_left_in_percentage(i[i.length-1]);if(Math.round(-(c-product_width*(o-1)))==d&&!e){var _=i[0],u=$(_).clone();$(_).remove(),$(t).append(u),$(u).css("left",1*c+1*product_width+"%")}var f=get_left_in_percentage(i[0]);if(d==-Math.round(f)&&e){var g=i[i.length-1],p=$(g).clone();$(g).remove(),$(t).prepend(p),$(p).css("left",1*f-1*product_width+"%")}all_current_left[n]=s}else console.log("notready")}function get_left_in_percentage(e){var t=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("left");return t=t.substr(0,t.length-1),$(".remove_me").remove(),t}function get_margin_left_in_percentage(e){var t=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("margin-left");return t=t.substr(0,t.length-1),$(".remove_me").remove(),t}function get_width_in_percentage(e){var t=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("width");return t=t.substr(0,t.length-1),$(".remove_me").remove(),t}function on_ready_product_sorter(){for(var e=document.getElementsByClassName("pe_prod_prod"),t=0;t<e.length;t++){var n=e[t];products.push($(n).clone());var r=getProductPrice(n);getProductName(n),console.log(r),prices.push(r),names.push(names)}}function echoProducts(e){var t=document.getElementsByClassName("pe_prod_container2")[0];$(".pe_prod_prod").remove(),console.log("removing");for(var n=0;n<e.length;n++)console.log("1231231"),$(t).append(e[n]),console.log(products[n])}function forceUpdate(){for(var e=document.getElementsByClassName("pe_sort_buttons")[0].children,t="",n=0;n<e.length;n++)"true"==e[n].getAttribute("chosen")&&(t=e[n]);""==t?echoProducts(products):$(t).trigger("click")}function sortByPrice(e){highlight(e),echoProducts(sortArrayByOther(products,prices))}function sortByName(e){highlight(e),echoProducts(sortArrayByOther(products,names))}function highlight(e){var t=e.parentNode,n=t.children;$(n).attr("chosen","false"),$(e).attr("chosen","true"),$(n).css("background",""),$(e).css("background","blue")}function sortArrayByOther(e,t){for(var n=[],r=0;r<e.length;r++)n.push({A:t[r],B:e[r]});n.sort(function(e,t){return"String"==typeof e.A?e.A>t.A:e.A-t.A}),t=[],e=[];for(var r=0;r<n.length;r++)t.push(n[r].A),e.push(n[r].B);return e}function getProductPrice(e){var t=e.getElementsByClassName("pe_price")[0].innerHTML.trim();return t=1*t.replace(" ","")}function getProductName(e){return e.getElementsByClassName("pe_name")[0].innerHTML.trim()}function on_ready_slider(){init_sliders();for(var e=0;e<all_sliders.length;e++)slider_go_to_page(e,0);slider_speed=600,$(".all_slider_container").css("visibility","visible")}function slider_go_to_page(e,t){if(!(section_currently_sliding=!1)){section_currently_sliding=!0;var n=all_sliders[e],r=$(".slider_list_container[slider_number='"+e+"']");$(n).hasClass("no_auto_slide")||(clearInterval(intervals[e]),enable_autoslide(e));var i=$(n).children().length-2;if(i>0){t>=i?t=0:t<0&&(t=i-1);var o=$(".slider_page[slider_number='"+e+"']"),a=o[t],s=current_page[e],l=o[s];$(o).css("opacity","0"),$(l).css("opacity","1"),$(a).css("z-index","15"),$(l).css("z-index","10"),$(a).animate({opacity:1},slider_speed,function(){section_currently_sliding=!1});var d=":nth-child("+(t+1)+")";if($(n).hasClass("no_list")){if(!$(n).hasClass("no_dots")){var c=$(".slider_dots_container[slider_number='"+e+"']"),_=$(c).find(d);jQuery(c).find(".slider_dot").not(_).animate({backgroundColor:dot_not_selected_background,borderColor:border_not_selected_color},slider_speed),jQuery(_).animate({backgroundColor:dot_selected_background,borderColor:border_selected_color},slider_speed)}}else{var u=$(r).find(d).not("p");jQuery(r).find(".slider_list_object").not(u).animate({backgroundColor:not_selected_background,color:not_selected_color},slider_speed),jQuery(u).not("p").animate({backgroundColor:selected_background,color:selected_color},slider_speed)}current_page[e]=t}}}function move_section(e,t){var n=$(t).attr("slider_number"),r=current_page[n]+1;e&&(r-=2),slider_go_to_page(n,r)}function init_sliders(){var e=document.getElementsByClassName("all_slider_container");$(e).css("visibility","visible"),$(window).width(),slider_dot_width="1.0";for(var t=0;t<e.length;t++){var n=e[t];$(n).attr("slider_number",t),current_page.push(0),all_sliders.push(n);var r=n.getElementsByClassName("slider_page"),i=r.length,o=$(n).parent();if($(n).hasClass("no_auto_slide")||enable_autoslide(t),$(n).hasClass("no_list")){if(!$(n).hasClass("no_dots")){var a=$("<div class = 'slider_dots_container center_horizontally_css'>"),s=$("<div class = 'inner_dots_container full_height center_horizontally_css'>");$(a).attr("slider_number",t),$(s).attr("slider_number",t),$(a).append(s),$(o).append(a)}}else{var l=$("<div class = 'slider_list_container'>");$(l).attr("slider_number",t);var d=100/i+"%";$(o).append(l)}for(var c=0;c<r.length;c++){var _=r[c];$(_).attr("slider_number",t);var u;if(!$(n).hasClass("no_list")){var f=document.createElement("div");f.className+="slider_list_object",$(f).css("width",d);var g=_.id,p=$("<p class = 'list_object_text center_vertically_css'>");$(p).html(g),$(l).append(f),$(f).append(p),$(p).attr("slider_number",t),$(f).attr("slider_number",t),u=f}if(!$(n).hasClass("no_dots")){var m=$("<div class = 'slider_dot'>"),v=slider_dot_width;$(m).css("width",v+"vw"),$(m).css("height",v+"vw"),$(m).css("margin-left",2*v+"vw"),c==r.length-1&&$(m).css("margin-right",2*v+"vw"),$(s).append(m),u=m}$(u).click(function(){var e=this.parentNode,t=Array.prototype.indexOf.call(e.children,this);slider_go_to_page($(e).attr("slider_number"),t)})}if($(n).hasClass("no_arrows")){var h=$("<img class = '' src=''>"),y=$("<img class = '' src=''>");$(n).append(h),$(n).append(y)}else{var h=$("<img class = 'slider_arrow slider_arrow_left' src='img/Index_slider/left_arrow.svg'>"),y=$("<img class = 'slider_arrow slider_arrow_right' src='img/Index_slider/right_arrow.svg'>");$(h).attr("slider_number",t),$(y).attr("slider_number",t),$(n).append(h),$(n).append(y),$(h).click(function(){move_section(!0,this)}),$(y).click(function(){move_section(!1,this)})}}}function reenable_effects(e){}function enable_autoslide(e){var t=all_sliders[e],n=setInterval(function(){move_section(!1,t)},5e3);intervals[e]=n}function on_ready_text_effect(){init_texts()}function init_texts(){var e=document.getElementsByClassName("text-effect");$(e).css("display","block");for(var t=0;t<e.length;t++){var n=e[t],r=n.innerHTML;n.innerHTML="";for(var i=0;i<r.length;i++)$(n).append("<span>"+r[i]+"</span>");$("body").on("appear",".text-effect",function(e,t){$(this).hasClass("text-effect-done")||($(this).addClass("text-effect-done"),start_effect(this))}),$(n).hover(function(){})}}function start_effect(e){effect_letter($(e).find("span"),0)}function effect_letter(e,t){if(!(t>=e.length)){var n=e[t];$(n).velocity({translateZ:0,rotateX:"5deg",rotateZ:"5deg",color:"#DDDDDD"},{duration:120,complete:function(){$(n).velocity({translateZ:0,rotateX:0,rotateY:0,rotateZ:0,color:"#FFFFFF"},{duration:120})}}),t+=1,setTimeout(function(){effect_letter(e,t)},120)}}function onYouTubeIframeAPIReady(){$(document).ready(on_ready_video)}function on_ready_video(){isDesktop()&&(player=new YT.Player("organvideo",{videoId:"z8kBoDdQOgc",playerVars:{controls:0,showinfo:0,modestbranding:1,loop:1,fs:0,cc_load_policy:0,iv_load_policy:3,autohide:1},events:{onReady:function(e){onPlayerReady(e)},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&player.playVideo()}}}))}function onPlayerReady(e){e.target,iframe=$("#organvideo"),e.target.playVideo(),e.target.mute(),setupListener()}function setupListener(){$("#video-trigger").on("click",fullscreen)}function fullscreen(){var e=document.getElementById("organvideo");e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()}$(document).ready(on_ready_grid);var items_per_part=4,gap_size=1;$(document).ready(on_ready_load_images),$(document).ready(on_ready_admin_media),$(document).ready(on_ready_misc),$(document).ready(on_ready);var fade_duration=0,nav_menu_visible=!0,button_open_color="white",button_closed_color="white",McButton=$("[data=hamburger-menu]"),McBar1=McButton.find("b:nth-child(1)"),McBar2=McButton.find("b:nth-child(2)"),McBar3=McButton.find("b:nth-child(3)"),nav_in_animation=!1;$(document).ready(on_ready_offert),$(document).ready(on_ready_product_scroller);var all_product_sliders=[],all_product_num=[],all_current_left=[],currently_sliding=!1,product_width;$(document).ready(on_ready_product_sorter);var products=[],prices=[],names=[];$(document).ready(on_ready_slider);var section_currently_sliding=!1,current_page=[],all_sliders=[],slider_speed=0,intervals=[],selected_background="#1c2d84",not_selected_background="#AAAAAA",selected_color="white",not_selected_color="black",dot_selected_background="white",dot_not_selected_background="gray",border_selected_color="gray",border_not_selected_color="gray";$(document).ready(on_ready_text_effect);var player,iframe;