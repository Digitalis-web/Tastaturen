function on_ready_product_scroller(){console.log("kör0"),init_product_slider(),init_arrows()}function init_arrows(e,r,t){$(e).click(function(){move(!1,t)}),$(r).click(function(){move(!0,t)})}function init_product_slider(){for(var e=document.getElementsByClassName("product_slider_container"),r=0;r<e.length;r++){var t=e[r];init_arrows(t.getElementsByClassName("i_products_arrow_r"),t.getElementsByClassName("i_products_arrow_l"),t);for(var s=t.getElementsByClassName("i_products_sliders"),n=0;n<s.length;n++){var o=s[n],c=get_width_in_percentage(o),a=c*n+"%";$(o).css("left",a)}}}function move(e,r){if(!sliding){sliding=!0;var t=1;e&&(t=-1);var s=r.getElementsByClassName("i_products_sliders"),n=get_width_in_percentage(s[0]);"0px"==$(s[0]).css("left")&&e&&(t=0);var o=Math.round(100/n);s.length<o&&(t=0);var c=Math.round(n*(o-1));Math.round(get_left_in_percentage(s[s.length-1]))!=c||e||(t=0);for(var a=0;a<s.length;a++){var i=s[a],l=get_left_in_percentage(i),d=l-n*t+"%";$(i).animate({left:d},500,function(){sliding=!1})}}}function get_left_in_percentage(e){var r=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("left");return r=r.substr(0,r.length-1),$(".remove_me").remove(),r}function get_width_in_percentage(e){var r=$(e).clone().appendTo("body").wrap('<div class = "remove_me" style="display: none"></div>').css("width");return r=r.substr(0,r.length-1),$(".remove_me").remove(),r}function on_ready_product_sorter(){for(var e=document.getElementsByClassName("pe_product"),r=0;r<e.length;r++){var t=e[r];products.push($(t).clone());var s,n,o=t.getElementsByClassName("pe_type")[0].innerHTML.trim();"hem"==o?(home_products.push(t),s=getProductPrice(t),home_prices.push(s),n=getProductName(t),home_names.push(n)):(church_products.push(t),s=getProductPrice(t),church_prices.push(s),n=getProductName(t),church_names.push(n)),prices.push(s),names.push(names)}current_products=products,current_names=names,current_prices=prices}function changeType(e,r){highlight(e),"hem"==r?(current_products=home_products,current_prices=home_prices,current_names=home_names):"kyrka"==r?(current_products=church_products,current_prices=church_prices,current_names=church_names):(current_products=products,current_prices=prices,current_names=names),forceUpdate()}function echoProducts(e){0==e.length&&(e=current_products);var r=document.getElementsByClassName("pe_prod_container")[0];$(".pe_product").remove();for(var t=0;t<products.length;t++){$(e[t]).find(".pe_price").html();$(r).append(e[t])}}function forceUpdate(){for(var e=document.getElementsByClassName("pe_sort_buttons")[0].children,r="",t=0;t<e.length;t++){"true"==e[t].getAttribute("chosen")&&(r=e[t])}""==r?echoProducts(current_products):$(r).trigger("click")}function sortByPrice(e){highlight(e),echoProducts(sortArrayByOther(current_products,current_prices))}function sortByName(e){highlight(e),echoProducts(sortArrayByOther(current_products,current_names))}function highlight(e){var r=e.parentNode,t=r.children;$(t).attr("chosen","false"),$(e).attr("chosen","true"),$(t).css("background",""),$(e).css("background","blue")}function sortArrayByOther(e,r){for(var t=[],s=0;s<e.length;s++)t.push({A:r[s],B:e[s]});t.sort(function(e,r){return"String"==typeof e.A?e.A>r.A:e.A-r.A}),r=[],e=[];for(var s=0;s<t.length;s++)r.push(t[s].A),e.push(t[s].B);return e}function getProductPrice(e){var r=e.getElementsByClassName("pe_price")[0].innerHTML.trim();return r=1*r.replace(" ","")}function getProductName(e){return e.getElementsByClassName("pe_name")[0].innerHTML.trim()}function on_ready(){init_sliders();for(var e=0;e<all_sliders.length;e++)slider_go_to_page(e,0);slider_speed=600,$("all_slider_container").show()}function slider_go_to_page(e,r){if(!sliding){sliding=!0;var t=all_sliders[e],s=!1;t.classList.contains("no_content")&&(s=!0);var n=$(".slider_list_container[slider_number='"+e+"']"),o=$(t).children().length-2;if(o>0){r>=o?r=0:r<0&&(r=o-1);var c=$(".slider_page[slider_number='"+e+"']"),a=c[r],i=a.getElementsByTagName("img")[0].src;a.parentNode.style.background="url("+i+") no-repeat center center",a.parentNode.style.backgroundSize="100% 100%",$(c).fadeToggle(slider_speed,function(){});for(var l=0;l<c.length;l++){var d=100*l-100*r+"%";$(c[l]).animate({left:d},0)}var _=slider_speed/2;s&&(_=0),$(c).fadeToggle(_,function(){sliding=!1});var u=":nth-child("+(r+1)+")";if($(t).hasClass("no_list")){if(!$(t).hasClass("no_dots")){var p=$(".slider_dots_container[slider_number='"+e+"']"),g=$(p).find(u);jQuery(p).find(".slider_dot").not(g).animate({backgroundColor:dot_not_selected_background,borderColor:border_not_selected_color},slider_speed),jQuery(g).animate({backgroundColor:dot_selected_background,borderColor:border_selected_color},slider_speed)}}else{var h=$(n).find(u).not("p");jQuery(n).find(".slider_list_object").not(h).animate({backgroundColor:not_selected_background,color:not_selected_color},slider_speed),jQuery(h).not("p").animate({backgroundColor:selected_background,color:selected_color},slider_speed)}current_page[e]=r}}}function init_sliders(){function e(e,r){var t=$(r).attr("slider_number"),s=current_page[t]+1;e&&(s-=2),slider_go_to_page(t,s)}var r=document.getElementsByClassName("all_slider_container");$(r).css("visibility","visible");$(window).width();slider_dot_width="1.0";for(var t=0;t<r.length;t++){var s=r[t];$(s).attr("slider_number",t),current_page.push(0),all_sliders.push(s);var n=s.getElementsByClassName("slider_page"),o=n.length,c=$(s).parent();if($(s).hasClass("no_list")){if(!$(s).hasClass("no_dots")){var a=$("<div class = 'slider_dots_container center_horizontally_css'>"),i=$("<div class = 'inner_dots_container full_height center_horizontally_css'>");$(a).attr("slider_number",t),$(i).attr("slider_number",t),$(a).append(i),$(c).append(a)}}else{var l=$("<div class = 'slider_list_container'>");$(l).attr("slider_number",t);var d=100/o+"%";$(c).append(l)}for(var _=0;_<n.length;_++){var u=n[_];$(u).attr("slider_number",t);var p=100*_+"%";$(u).css("left",p);var g;if(!$(s).hasClass("no_list")){var h=document.createElement("div");h.className+="slider_list_object",$(h).css("width",d);var m=u.id,v=$("<p class = 'list_object_text center_vertically_css'>");$(v).html(m),$(l).append(h),$(h).append(v),$(v).attr("slider_number",t),$(h).attr("slider_number",t),g=h}if(!$(s).hasClass("no_dots")){var f=$("<div class = 'slider_dot'>"),y=slider_dot_width;console.log(y),$(f).css("width",y+"vw"),$(f).css("height",y+"vw"),$(f).css("margin-left",2*y+"vw"),_==n.length-1&&$(f).css("margin-right",2*y+"vw"),$(i).append(f),g=f}$(g).click(function(){var e=this.parentNode,r=Array.prototype.indexOf.call(e.children,this);slider_go_to_page($(e).attr("slider_number"),r)})}if($(s).hasClass("no_arrows")){var b=$("<img class = '' src=''>"),w=$("<img class = '' src=''>");$(s).append(b),$(s).append(w)}else{var b=$("<img class = 'slider_arrow slider_arrow_left' src='img/left_d.svg'>"),w=$("<img class = 'slider_arrow slider_arrow_right' src='img/right_d.svg'>");$(b).attr("slider_number",t),$(w).attr("slider_number",t),$(s).append(b),$(s).append(w),$(b).click(function(){e(!0,this)}),$(w).click(function(){e(!1,this)})}}}console.log("Loading");var counter=0,c=0,i=setInterval(function(){$(".loading-page .counter h1").html(c+"%"),$(".loading-page .counter hr").css("width",c+"%"),counter++,c++,101==counter&&(clearInterval(i),document.body.removeChild(load_screen))},50);$(document).ready(on_ready_product_scroller);var sliding=!1;$(document).ready(on_ready_product_sorter);var current_products=[],current_prices=[],current_names=[],church_products=[],church_prices=[],church_names=[],home_products=[],home_prices=[],home_names=[],products=[],prices=[],names=[];console.log("section slider");var sliding=!1,current_page=[],all_sliders=[],slider_speed=0,selected_background="#1c2d84",not_selected_background="#AAAAAA",selected_color="white",not_selected_color="black",dot_selected_background="white",dot_not_selected_background="gray",border_selected_color="gray",border_not_selected_color="gray";