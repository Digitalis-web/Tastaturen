function close_edit_view(){$("#editor").css("visibility","hidden")}function show_edit_view(e){$("#editor").css("visibility","visible");var t=$(e).find("span"),r=$(t).text();r=r.trim();var n=$(e).attr("name");$(".edit_name").val(n),$(".edit_text_new").val(r),$(".edit_text_old").val(r)}function on_ready_grid(){for(var e="<div class='i_grid_item' style='width:{width}px; height: {height}px; background-color: {color}'><div class='cover'>Demo fit zone</div></div>",t=["rgb(142, 68, 173)","rgb(243, 156, 18)","rgb(211, 84, 0)","rgb(0, 106, 63)","rgb(41, 128, 185)","rgb(192, 57, 43)","rgb(135, 0, 0)","rgb(39, 174, 96)"],r=1,n=1,o="",s="",i=0;i<28;++i)n=1+3*Math.random()<<0,r=1+3*Math.random()<<0,s=t[t.length*Math.random()<<0],o+=e.replace(/\{height\}/g,150*n).replace(/\{width\}/g,150*r).replace("{color}",s);$(".i_media_container").html(o),$(function(){var e=new Freewall(".i_media_container");e.reset({selector:".i_grid_item",animate:!1,cellW:160,cellH:160,delay:30,onResize:function(){e.refresh($(window).width()-30,$(window).height()-30)}}),e.fitZone($(window).width()-30,$(window).height()-30)})}function on_ready_product_scroller(){init_product_slider(),init_arrows()}function init_arrows(e,t,r){$(e).click(function(){move(!1,r)}),$(t).click(function(){move(!0,r)})}function init_product_slider(){for(var e=document.getElementsByClassName("product_slider_container"),t=0;t<e.length;t++){var r=e[t];all_sliders[t]=r,all_current_left[t]=0;init_arrows(r.getElementsByClassName("i_products_arrow_r"),r.getElementsByClassName("i_products_arrow_l"),r);for(var n=r.getElementsByClassName("i_products_sliders"),o=0;o<n.length;o++){var s=n[o],i=get_width_in_percentage(s),a=i*o+"%";$(s).css("left",a)}}}function move(e,t){var t=t.getElementsByClassName("i_products_slider")[0],r=all_sliders.indexOf(t);if(sliding=!1)console.log("notready");else{console.log("ready"),sliding=!0;var n=-1;e&&(n=1);var o=t.getElementsByClassName("i_products_sliders"),s=get_width_in_percentage(o[0]),i=Math.round(100/s);o.length<i&&(n=0);var a=get_left_in_percentage(t);"aut"==a&&($(t).css("left","0%"),a=0),a=Math.round(1e3*a)/1e3;var l=1*a+s*n;l=Math.round(1e3*l)/1e3+"%",$(t).animate({left:l},900,"easeOutQuint",function(){sliding=!1});var d=all_current_left[r],c=Math.round(d);isNaN(c)&&(c=0);var _=get_left_in_percentage(o[o.length-1]);if(Math.round(-(_-s*(i-1)))==c&&!e){var u=o[0],g=$(u).clone();$(u).remove(),$(t).append(g),$(g).css("left",1*_+1*s+"%")}var p=get_left_in_percentage(o[0]);if(c==-Math.round(p)&&e){var f=o[o.length-1],v=$(f).clone();$(f).remove(),$(t).prepend(v),$(v).css("left",1*p-1*s+"%")}}}function get_left_in_percentage(e){var t=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("left");return t=t.substr(0,t.length-1)}function get_margin_left_in_percentage(e){var t=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("margin-left");return t=t.substr(0,t.length-1),$(".remove_me").remove(),t}function get_width_in_percentage(e){var t=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("width");return t=t.substr(0,t.length-1),$(".remove_me").remove(),t}function on_ready_product_sorter(){for(var e=document.getElementsByClassName("pe_prod_prod"),t=0;t<e.length;t++){var r=e[t];products.push($(r).clone());var n=getProductPrice(r);getProductName(r);console.log(n),prices.push(n),names.push(names)}}function echoProducts(e){var t=document.getElementsByClassName("pe_prod_container2")[0];$(".pe_prod_prod").remove(),console.log("removing");for(var r=0;r<e.length;r++)console.log("1231231"),$(t).append(e[r]),console.log(products[r])}function forceUpdate(){for(var e=document.getElementsByClassName("pe_sort_buttons")[0].children,t="",r=0;r<e.length;r++){"true"==e[r].getAttribute("chosen")&&(t=e[r])}""==t?echoProducts(products):$(t).trigger("click")}function sortByPrice(e){highlight(e),echoProducts(sortArrayByOther(products,prices))}function sortByName(e){highlight(e),echoProducts(sortArrayByOther(products,names))}function highlight(e){var t=e.parentNode,r=t.children;$(r).attr("chosen","false"),$(e).attr("chosen","true"),$(r).css("background",""),$(e).css("background","blue")}function sortArrayByOther(e,t){for(var r=[],n=0;n<e.length;n++)r.push({A:t[n],B:e[n]});r.sort(function(e,t){return"String"==typeof e.A?e.A>t.A:e.A-t.A}),t=[],e=[];for(var n=0;n<r.length;n++)t.push(r[n].A),e.push(r[n].B);return e}function getProductPrice(e){var t=e.getElementsByClassName("pe_price")[0].innerHTML.trim();return t=1*t.replace(" ","")}function getProductName(e){return e.getElementsByClassName("pe_name")[0].innerHTML.trim()}function on_ready_slider(){init_sliders();for(var e=0;e<all_sliders.length;e++)slider_go_to_page(e,0);slider_speed=600,$(".all_slider_container").css("visibility","visible")}function slider_go_to_page(e,t){if(!sliding){sliding=!0;var r=all_sliders[e],n=$(".slider_list_container[slider_number='"+e+"']");$(r).hasClass("no_auto_slide")||(clearInterval(intervals[e]),enable_autoslide(e));var o=$(r).children().length-2;if(o>0){t>=o?t=0:t<0&&(t=o-1);var s=$(".slider_page[slider_number='"+e+"']"),i=s[t],a=current_page[e],l=s[a];$(s).css("opacity","0"),$(l).css("opacity","1"),$(i).css("z-index","15"),$(l).css("z-index","10"),$(i).animate({opacity:1},slider_speed,function(){sliding=!1});var d=":nth-child("+(t+1)+")";if($(r).hasClass("no_list")){if(!$(r).hasClass("no_dots")){var c=$(".slider_dots_container[slider_number='"+e+"']"),_=$(c).find(d);jQuery(c).find(".slider_dot").not(_).animate({backgroundColor:dot_not_selected_background,borderColor:border_not_selected_color},slider_speed),jQuery(_).animate({backgroundColor:dot_selected_background,borderColor:border_selected_color},slider_speed)}}else{var u=$(n).find(d).not("p");jQuery(n).find(".slider_list_object").not(u).animate({backgroundColor:not_selected_background,color:not_selected_color},slider_speed),jQuery(u).not("p").animate({backgroundColor:selected_background,color:selected_color},slider_speed)}current_page[e]=t}}}function move_section(e,t){var r=$(t).attr("slider_number"),n=current_page[r]+1;e&&(n-=2),slider_go_to_page(r,n)}function init_sliders(){var e=document.getElementsByClassName("all_slider_container");$(e).css("visibility","visible");$(window).width();slider_dot_width="1.0";for(var t=0;t<e.length;t++){var r=e[t];$(r).attr("slider_number",t),current_page.push(0),all_sliders.push(r);var n=r.getElementsByClassName("slider_page"),o=n.length,s=$(r).parent();if($(r).hasClass("no_auto_slide")||enable_autoslide(t),$(r).hasClass("no_list")){if(!$(r).hasClass("no_dots")){var i=$("<div class = 'slider_dots_container center_horizontally_css'>"),a=$("<div class = 'inner_dots_container full_height center_horizontally_css'>");$(i).attr("slider_number",t),$(a).attr("slider_number",t),$(i).append(a),$(s).append(i)}}else{var l=$("<div class = 'slider_list_container'>");$(l).attr("slider_number",t);var d=100/o+"%";$(s).append(l)}for(var c=0;c<n.length;c++){var _=n[c];$(_).attr("slider_number",t);var u;if(!$(r).hasClass("no_list")){var g=document.createElement("div");g.className+="slider_list_object",$(g).css("width",d);var p=_.id,f=$("<p class = 'list_object_text center_vertically_css'>");$(f).html(p),$(l).append(g),$(g).append(f),$(f).attr("slider_number",t),$(g).attr("slider_number",t),u=g}if(!$(r).hasClass("no_dots")){var v=$("<div class = 'slider_dot'>"),h=slider_dot_width;$(v).css("width",h+"vw"),$(v).css("height",h+"vw"),$(v).css("margin-left",2*h+"vw"),c==n.length-1&&$(v).css("margin-right",2*h+"vw"),$(a).append(v),u=v}$(u).click(function(){var e=this.parentNode,t=Array.prototype.indexOf.call(e.children,this);slider_go_to_page($(e).attr("slider_number"),t)})}if($(r).hasClass("no_arrows")){var m=$("<img class = '' src=''>"),y=$("<img class = '' src=''>");$(r).append(m),$(r).append(y)}else{var m=$("<img class = 'slider_arrow slider_arrow_left' src='img/Index_slider/left_arrow.svg'>"),y=$("<img class = 'slider_arrow slider_arrow_right' src='img/Index_slider/right_arrow.svg'>");$(m).attr("slider_number",t),$(y).attr("slider_number",t),$(r).append(m),$(r).append(y),$(m).click(function(){move_section(!0,this)}),$(y).click(function(){move_section(!1,this)})}}}function reenable_effects(e){}function enable_autoslide(e){var t=all_sliders[e],r=setInterval(function(){move_section(!1,t)},5e3);intervals[e]=r}function on_ready_text_effect(){init_texts()}function init_texts(){for(var e=document.getElementsByClassName("text-effect"),t=0;t<e.length;t++){var r=e[t],n=r.innerHTML;r.innerHTML="";for(var o=0;o<n.length;o++)$(r).append("<span>"+n[o]+"</span>");$("body").on("appear",".text-effect",function(e,t){$(this).hasClass("text-effect-done")||($(this).addClass("text-effect-done"),start_effect(this))}),$(r).hover(function(){})}}function start_effect(e){effect_letter($(e).find("span"),0)}function effect_letter(e,t){if(!(t>=e.length)){var r=e[t];$(r).velocity({translateZ:0,rotateX:"5deg",rotateZ:"5deg",color:"#DDDDDD"},{duration:120,complete:function(){$(r).velocity({translateZ:0,rotateX:0,rotateY:0,rotateZ:0,color:"#FFFFFF"},{duration:120})}}),t+=1,setTimeout(function(){effect_letter(e,t)},120)}}function onYouTubeIframeAPIReady(){var e;e=new YT.Player("organvideo",{videoId:"z8kBoDdQOgc",playerVars:{autoplay:1,controls:0,showinfo:0,modestbranding:1,loop:1,fs:0,cc_load_policy:0,iv_load_policy:3,autohide:1},events:{onReady:function(e){e.target.mute()},onStateChange:function(t){t.data===YT.PlayerState.ENDED&&e.playVideo()}}})}window.addEventListener("load",function(){var e=document.getElementById("load");$(document.body.removeChild(e)).fadeOut("slow")}),$(document).ready(on_ready_product_scroller);var sliding=!1,all_sliders=[],all_current_left=[];$(document).ready(on_ready_product_sorter);var products=[],prices=[],names=[];$(document).ready(on_ready_slider);var sliding=!1,current_page=[],all_sliders=[],slider_speed=0,intervals=[],selected_background="#1c2d84",not_selected_background="#AAAAAA",selected_color="white",not_selected_color="black",dot_selected_background="white",dot_not_selected_background="gray",border_selected_color="gray",border_not_selected_color="gray";$(document).ready(on_ready_text_effect);