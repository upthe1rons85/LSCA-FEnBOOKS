//ajax
function GetXmlHttpObject() {
	try { return new XMLHttpRequest(); }
	catch (e) {
		try { 
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return null;
}

function loadAjax(divId, url, someFunction, someParams) {
	var divObj = document.getElementById(divId);
	if(divObj) {
		xmlHttp = GetXmlHttpObject();
		if (xmlHttp == null) {
			alert ("Your browser does not support AJAX!");
			return;
		}
		xmlHttp.onreadystatechange = function() { loadedAjax(someFunction, someParams, divObj); };  
		xmlHttp.open("GET", url, true);
		xmlHttp.setRequestHeader('Content-Type', 'application/ajax+html');
		xmlHttp.send(null);
	} else {
		alert("Can't initiliaze HTML object: " + divId);
	}
	return false;
}

function callAjax(url, someFunction, someParams) {
	if (someFunction) {
		xmlHttp = GetXmlHttpObject();
		if (xmlHttp == null) {
			alert ("Your browser does not support AJAX!");
			return;
		}
		xmlHttp.onreadystatechange = function() { loadedAjax(someFunction, someParams, ""); };  
		xmlHttp.open("GET", url, true);
		xmlHttp.setRequestHeader('Content-Type', 'application/ajax+html');
		xmlHttp.send(null);
	} else {
		alert("Function is not defined for AJAX call.");
	}
	return false;
}

function loadedAjax(someFunction, someParams, divObj) 
{
	if (xmlHttp.readyState == 4) {
		if (divObj) {
			divObj.innerHTML = xmlHttp.responseText;
		}
		if (someFunction) {
			someFunction(xmlHttp.responseText, someParams);
		}
	}
}

function nextNode(e) {
	return ((e && e.nodeType != 1) ? nextNode(e = e.nextSibling) : e);
}

function prevNode(e) {
	return ((e && e.nodeType != 1) ? prevNode(e = e.previousSibling) : e);
}

function nextElement(e) {
	return nextNode(e.nextSibling);
}

function prevElement(e) {
	return prevNode(e.previousSibling);
}

function addClassNameByID(obj_id, classname) {
	var obj    = document.getElementById(obj_id);
	if (obj) {
		addClassName(obj, classname);	
	}
	var obj    = document.getElementsByName(obj_id);
	if (obj) {
		for(var j=0; j<obj.length; j++) {
			addClassName(obj[j], classname);
		}
	}	
}

function addClassName(obj, classname) {
	obj.className += " " + classname;	
}

function removeClassNameByID(obj_id, classname) {
	var obj    = document.getElementById(obj_id);
	if (obj) {
		removeClassName(obj, classname);
	}
	var obj    = document.getElementsByName(obj_id);
	if (obj) {
		for(var j=0; j<obj.length; j++) {
			removeClassName(obj[j], classname);
		}
	}
}

function removeClassName(obj, classname) {
	var substr = obj.className.split(" ");
	if (substr.length) {
		obj.className = "";
		for (i = 0; i < substr.length; i++) {
			if (substr[i] !== classname) {
				obj.className += " " + substr[i];
			}
		}
	} else if (obj.className == classname){
		obj.className = "";
	}
}

function hasClassNameByID(obj_id, classname) {
	var obj    = document.getElementById(obj_id);
	if (obj) {
		return hasClassName(obj, classname);
	}
	var obj    = document.getElementsByName(obj_id);
	if (obj) {
		if (obj.length) {
			return hasClassName(obj[0], classname);
		} else {
			return hasClassName(obj, classname);
		}
	}
	return false;
}

function hasClassName(obj, classname) {
	var substr = obj.className.split(" ");
	if (substr.length) {
		for (i = 0; i < substr.length; i++) {
			if (substr[i] == classname) {
				return true;
			}
		}
	} else if (obj.className == classname){
		return true;
	}
	return false;
}

function formSerialize(form) {
	var serialized = "";
	for (i = 0; i<form.length; i++) {
		if(form[i].type) {
			if (form[i].type == "text" || form[i].type == "hidden" || form[i].type == "select-one") {
				serialized += form[i].name + "=" + form[i].value + "&";
			} else if (form[i].type == "checkbox") {
				if (form[i].checked) {
					serialized += form[i].name + "=" + form[i].value + "&";
				}
			}
		} else {
			serialized += form[i].name + "=" + form[i].value + "&";
		}
	}
	return serialized;	
}

function stringUnserialize(str) {
	var substr = str.split("&");
	var values = new Array();
	var j = 0;
	if (substr.length) {
		for (i = 0; i < substr.length; i++) {
			if (substr[i].length) {
				line = substr[i].split("=");
				if (line.length && line[0]){
					values[j] = new Array();
					values[j][0] = line[0];
					values[j][1] = line[1];
					j++;
				}
			}
		}
	} else {
		line = response.split("=");
		if (line.length && line[0]){
			values[j] = new Array();
			values[j][0] = line[0];
			values[j][1] = line[1];
			j++;
		}
	}
	return values;
}

// compare javacript
function compareItems()
{
	var checkedNumber = 0;
	var checkedItems = "";
	var formsNames = document.forms_names.form_name;
	for (var i = 0; i < formsNames.length; i++) {
		var formName = formsNames[i].value;
		if(document.forms[formName].compare.checked) {
				checkedNumber++;
				if(checkedNumber > 1) { checkedItems += ","; }
				checkedItems += document.forms[formName].compare.value;
		}
	}
	if (checkedNumber < 2) {
		alert(compareMinAllowed);
	} else if (checkedNumber > 5) {
		alert(compareMaxAllowed);
	} else {
		document.compare_form.items.value = checkedItems;
		document.compare_form.submit();
	}

	return false;
}

function compareRecentItems(formName)
{
	var checkedNumber = 0;
	var checkedItems = "";
	var recentForm = document.forms[formName];
	var compareItems = recentForm.compare;
	for (var i = 0; i < compareItems.length; i++) {
		if(recentForm.compare[i].checked) {
				checkedNumber++;
				if(checkedNumber > 1) { checkedItems += ","; }
				checkedItems += recentForm.compare[i].value;
		}
	}
	if (checkedNumber < 2) {
		alert(compareMinAllowed);
	} else if (checkedNumber > 5) {
		alert(compareMaxAllowed);
	} else {
		recentForm.items.value = checkedItems;
		recentForm.submit();
	}

	return false;
}

/*
bxCarousel v1.0
Plugin developed by: Steven Wanderski
http://bxcarousel.com
http://stevenwanderski.com

Released under the GPL license:
http://www.gnu.org/licenses/gpl.html
*/

(function($){
	$.fn.bxCarousel = function(options){

		var defaults = {
			move: 4,
			display_num: 4,
			speed: 500,
			margin:0,
			auto: false,
			auto_interval: 2000,
			auto_dir: 'next',
			auto_hover: false,
			next_text: 'next',
			next_image: '',
			prev_text: 'prev',
			prev_image: '',
			controls: true
		};

		var options = $.extend(defaults, options);

		return this.each(function() {
			var $this = $(this);                
			var li = $this.find('li').not('.fancyThumb');
			var first = 0;
			var fe = 0;
			var last = options.display_num-1;
			var le = options.display_num-1;
			var is_working = false;
			var j = '';
			var clicked = false;
				

			li.css({'float':'left','listStyle':'none', 'marginRight':options.margin});
			var ow = li.outerWidth(true);
			wrap_width = (ow*options.display_num) - options.margin;                
			var seg = ow*options.move;
			$this.wrap('<div class="bx_container"></div>').width(999999);
			if(options.controls){
				if(options.next_image != '' || options.prev_image != ''){var controls = '<div class="bx_nav"><a href="" class="prev"><img src="'+options.prev_image+'"/></a><a href="" class="next"><img src="'+options.next_image+'"/></a></div>';}
				else{var controls = '<div class="bx_nav"><a href="" class="prev">'+options.prev_text+'</a><a href="" class="next">'+options.next_text+'</a></div>';}	
			}			
			$this.parent('.bx_container').wrap('<div class="bx_wrap"></div>').css({'width':wrap_width,'overflow':'hidden'}).before(controls);
			var w = li.slice(0, options.display_num).clone();
			var last_appended = (options.display_num+options.move)-1;
			$this.empty().append(w);				
			get_p();				
			get_a();
			
			$this.css({'position':'relative', 'left':-(seg)});
						
			$this.parent().siblings('.bx_nav').children('.next').click(function(){
				slide_next();
				clearInterval(j);
				clicked = true;
				fancy();
				return false;
			});				
			$this.parent().siblings('.bx_nav').children('.prev').click(function(){
				slide_prev();
				clearInterval(j);
				clicked = true;
				fancy();
				return false;
			});
			
			//$(document).ready(function( {	var startRand=Math.floor(Math.random()*9);
			//for(i=0;i<=startRand;i++){slide_next();}}));
			
			if(options.auto){
				start_slide();
				if(options.auto_hover && clicked != true){
					$this.find('li').live('mouseenter', function(){
						if(!clicked){clearInterval(j);}						
					});
					$this.find('li').live('mouseleave', function(){
						if(!clicked){start_slide();}
					});
					
				}
			}
			
			function start_slide(){
		
				if(options.auto_dir == 'next'){
					j = setInterval(function(){slide_next()}, options.auto_interval);
				}else{
					j = setInterval(function(){slide_prev()}, options.auto_interval);
				}
			}

			function slide_next(){
				if(!is_working){
					is_working = true;
					set_pos('next');
					$this.animate({left:'-='+seg}, options.speed, function(){
						$this.find('li').slice(0, options.move).remove();
						$this.css('left',-(seg));
						get_a();
						is_working = false;			
					});
				}
			}
			
			function slide_prev(){
				if(!is_working){
					is_working = true;
					set_pos('prev');
					$this.animate({left:'+='+seg}, options.speed, function(){
						$this.find('li').slice(-options.move).remove();
						$this.css('left',-(seg));
						get_p();
						is_working = false;                 
					});
				}
			}

			function get_a(){
				var str = new Array();
				var lix = li.clone();
				le = last;
				for(i=0;i<options.move;i++){
					le++
					if(lix[le] != undefined){
						str[i] = $(lix[le]);    
					}else{
						le = 0;
						str[i] = $(lix[le]);
					}                                                                       
				}					                 
				$.each(str, function(index){
					$this.append(str[index][0]);
				});
			}
							
			function get_p(){
				var str = new Array();
				var lix = li.clone();
				fe = first;
				for(i=0;i<options.move;i++){
					fe--
					if(lix[fe] != undefined){
						str[i] = $(lix[fe]);    
					}else{
						fe = li.length-1;
						str[i] = $(lix[fe]);
					}                                                                       
				}					        
				$.each(str, function(index){
					$this.prepend(str[index][0]);
				}); 
			}
							
				function set_pos(dir){
		current=$(".tabActive").first().attr("id");
		$("#td_tab_1,#a_tab_1, #td_tab_2,#a_tab_2,#td_tab_3,#a_tab_3").attr("class","tab");
				if (dir == 'next') {
					if(current=="td_tab_1")
			 {
			 $("#td_tab_2, #a_tab_2").attr("class","tabActive");
			 }
			 		if(current=="td_tab_2")
			 {
			 $("#td_tab_3, #a_tab_3").attr("class","tabActive");
			 }		if(current=="td_tab_3")
			 {
			 $("#td_tab_1, #a_tab_1").attr("class","tabActive");
			 }					
			 first += options.move;
					if (first >= li.length) {
						first = first % li.length;
					}
					last += options.move;
					if (last >= li.length){
						last = last % li.length;
					}
				}else if (dir == 'prev'){
						if(current=="td_tab_1")
			 {
			 $("#td_tab_3, #a_tab_3").attr("class","tabActive");
			 }
			 		if(current=="td_tab_2")
			 {
			 $("#td_tab_1, #a_tab_1").attr("class","tabActive");
			 }		if(current=="td_tab_3")
			 {
			 $("#td_tab_2, #a_tab_2").attr("class","tabActive");
			 }
					first -= options.move;
					if (first < 0){
						first = li.length + first;
					}
					last -= options.move;
					if (last < 0){
						last = li.length + last;
					}
				}
					$("#currentTabIdc").html(first);
			}
		
		});			
	}    
})(jQuery);
	function changeProductTab2(index, elemento){
	current=$(".tabActive").first().attr("id");
			if($(elemento).attr("class")=="tabActive"){
			
			return false;}
			else{	

			if(current=="td_tab_1")
			 {
			 if (index==2)
			  {$("#recomendaciones.next").click();}
			  if (index==3)
			  {$("#recomendaciones.prev").click();}
			 }
			 	if(current=="td_tab_2")
			 {
			 if (index==1)
			  {$("#recomendaciones.prev").click();}
			  if (index==2)
			  {$("#recomendaciones.next").click();}
			  if (index==3)
			  {$("#recomendaciones.next").click();}
			 }
			 	if(current=="td_tab_3")
			 {
			 if (index==2)
			  {$("#recomendaciones.prev").click();}
			  if (index==1)
			  {$("#recomendaciones.next").click();}
			  if (index==3)
			  {$("#recomendaciones.next").click();}
			 }
			 			$("#td_tab_1,#a_tab_1, #td_tab_2,#a_tab_2,#td_tab_3,#a_tab_3").attr("class","tab");
			$(elemento).attr("class","tabActive").parent().attr("class","tabActive");
			return false;
			}
       }
      	
//menu
var userAgent = navigator.userAgent.toLowerCase();
var isIE = ((userAgent.indexOf("msie") != -1) && (userAgent.indexOf("opera") == -1) && (userAgent.indexOf("webtv") == -1));

var tid = new Array();
var lastMenu = new Array();
var hiddenObjects = new Array();

function show(menuName, menuType) 
{
	var actMenu = new Array();
	var subName = "";
	var subMenus = menuName.split("_");
	var addWidth = true; var addHeight = false;
	for (var m = 0; m < subMenus.length; m++) {
		if (m == 0) {
			subName = subMenus[m];
		} else {
			subName += "_" + subMenus[m];
			addWidth = true; var addHeight = false;
		}
		var parentMenuName = "m_" + subName;
		var subMenuName = "sm_" + subName;
		if (menuType == "2" || menuType == "secondary") {
			parentMenuName = "secondary_" + subName;
			subMenuName = "secondary_ddm_" + subName;
		}
		var parentMenu = document.getElementById(parentMenuName);
		var subMenu = document.getElementById(subMenuName);

		if (subMenu) {
			actMenu[subMenuName] = 1;
			subMenu.style.top = findPosY(parentMenu, addHeight) + "px";
			subMenu.style.left = findPosX(parentMenu, addWidth) + "px";
			subMenu.style.display='block';
			hideSelectBoxes(subMenuName);
			if (tid[subName]) {
				clearTimeout(tid[subName]);
				tid[subName] = "";
			}
		}
	}

	for (menuName in lastMenu) {
		if (!actMenu[menuName]) {
			var menuObj = document.getElementById(menuName);
			menuObj.style.display = "none";
			showSelectBoxes(menuName);
		}
	}
	lastMenu = actMenu;

}

function hide(menuName, menuType)
{
	var subMenus = menuName.split("_");
	for (var m = 0; m < subMenus.length; m++) {
		if (m == 0) {
			subName = subMenus[m];
		} else {
			subName += "_" + subMenus[m];
		}
		var blockName = "sm_" + subName;
		var blockMenu = document.getElementById(blockName);
		if (blockMenu) {
			tid[subName] = setTimeout("hideMenu('" + subName + "', '" + menuType + "')", 1500);
		}
	}
}

function hideMenu(menuName, menuType)
{
	var subMenuName = "sm_" + menuName;
	if (menuType == "2" || menuType == "secondary") {
		subMenuName = "secondary_ddm_" + menuName;
	}
	var subMenu = document.getElementById(subMenuName);
	if (subMenu) {
		subMenu.style.display='none';
		showSelectBoxes(subMenuName);
	}

}

function findPosX(obj, addWidth)
{
	var curleft = 0;
	if (addWidth) {
		curleft += obj.offsetWidth;
	}
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}

function findPosY(obj, addHeight)
{
	var curtop = 0;
	if (addHeight) {
		curtop += obj.offsetHeight;
	}
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	} else if (obj.y) {
		curtop += obj.y;
	}
	return curtop;
}

function getPageSizeWithScroll()
{
	var xWithScroll = 0; var yWithScroll = 0; 
	if (window.innerHeight && window.scrollMaxY) { // Firefox         
		yWithScroll = window.innerHeight + window.scrollMaxY;         
		xWithScroll = window.innerWidth + window.scrollMaxX;     
	} else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac         
		yWithScroll = document.body.scrollHeight;         
		xWithScroll = document.body.scrollWidth;     
	} else { // works in Explorer 6 Strict, Mozilla (not FF) and Safari         
		yWithScroll = document.body.offsetHeight;         
		xWithScroll = document.body.offsetWidth;       
	}     
	var arrayPageSizeWithScroll = new Array(xWithScroll,yWithScroll);    
	return arrayPageSizeWithScroll; 
} 

function getScroll()
{
	var w = window.pageXOffset ||
		document.body.scrollLeft ||
		document.documentElement.scrollLeft;
	var h = window.pageYOffset ||
		document.body.scrollTop ||
		document.documentElement.scrollTop;
	var arrayScroll = new Array(w, h);    
	return arrayScroll;
}

function showSelectBoxes(objId) {
	// delete hidden objects for this menu
	delete hiddenObjects[objId];
	var obj = document.getElementById(objId);
	var menuObjects = obj.overlapObjects;
	if (menuObjects && menuObjects.length > 0) {
		for (var i = 0; i < menuObjects.length; i++) {
			var objControl = menuObjects[i];
			// check if object control not present in hidden objects for new popup menus
			var objExists = false;
			for (id in hiddenObjects) {
				var checkObjects = hiddenObjects[id];
				for (var ob = 0; ob < checkObjects.length; ob++) {
					if (objControl == checkObjects[ob]) {
						objExists = true;
						break;
					}
				}
			}
			if (!objExists) {
				objControl.style.visibility = "visible";
			}
		}
	}
	obj.overlapObjects = null;
}

function hideSelectBoxes(objId, objExclude) {

	var obj = document.getElementById(objId);

	var x = findPosX(obj, false);
	var y = findPosY(obj, false);
	var w = obj.offsetWidth;
	var h = obj.offsetHeight;

	// create a new Array for overlapping Objects we will hide
	var overlapObjects = new Array();

	var objectsNames = new Array("object", "iframe");
	if (isIE) {
		// hide select controls for IE 
		objectsNames[2] = "select";
	}

	for (n = 0; n < objectsNames.length; n++) {
		var objectName = objectsNames[n];
		var objects = document.getElementsByTagName(objectName);

		for (i = 0; i < objects.length; i++) {
			var objectControl = objects[i];
	
			var objName = objectControl.name;
			var isExclude = false;
			if (objExclude && objExclude.length) {
				for (var ex = 0; ex < objExclude.length; ex++) {
					if (objName == objExclude[ex]) {
						isExclude = true;
					}
				}
			}
			// check if object was hidden before
			var objExists = false;
			if (objectControl.style.visibility == "hidden") {
				for (id in hiddenObjects) {
					var checkObjects = hiddenObjects[id];
					for (var ob = 0; ob < checkObjects.length; ob++) {
						if (objectControl == checkObjects[ob]) {
							objExists = true;
							break;
						}
					}
				}
			}
			if (isExclude == true || (objectControl.style.visibility == "hidden" && !objExists)) {
				// don't hide object hidden by user
				continue;
			}
	
			var ox = findPosX(objectControl, false);
			var oy = findPosY(objectControl, false);
			var ow = objectControl.offsetWidth;
			var oh = objectControl.offsetHeight;
	
			if (ox > (x + w) || (ox + ow) < x) {
				continue;
			}
			if (oy > (y + h) || (oy + oh) < y) {
				continue;
			}

			overlapObjects[overlapObjects.length] = objectControl;
			objectControl.style.visibility = "hidden";
		}
	}

	// save overlapObjects array in global variables
	obj.overlapObjects = overlapObjects;
	hiddenObjects[objId] = overlapObjects;
}

function popupBlock(linkName, blockName, imageName)
{                              	
	var linkObj = document.getElementById(linkName);
	var blockObj = document.getElementById(blockName);
	var imageObj = document.getElementById(imageName);

	if (blockObj.style.display == "none" || blockObj.style.display == "") {
		//blockObj.style.left = findPosX(linkObj, 0) + "px";
		//blockObj.style.top = findPosY(linkObj, 1) + "px";
		blockObj.style.display = "block";
		hideSelectBoxes(blockName, "");
		if (imageObj) {
			imageObj.src = "images/icons/minus_small.gif";
		}
	} else {
		blockObj.style.display = "none";
		showSelectBoxes(blockName);
		if (imageObj) {
			imageObj.src = "images/icons/plus_small.gif";
		}
	}
}

//slider_list
var offers_current_page = 1;
var top_sellers_current_page = 1;
var top_rated_current_page = 1;
var products_latest_current_page = 1;
var products_list_current_page = 1;
//MPR 22_09_11 Inicio --Ocultar la flecha de la izquierda y ocultar la flecha de la derecha si no se excede de 20 productos
$(document).ready(function(){
  if(typeof(top_sellers_current_page) !== 'undefined' && typeof(top_sellers_all_pages) !== 'undefined')
  {
    ocultarFlecha(top_sellers_current_page, top_sellers_all_pages);
    ocultarFlechas(top_rated_current_page, top_rated_all_pages);
  }
  
  if(typeof(products_list_all_pages) !== 'undefined') 
    ocultarFlecha(products_list_current_page, products_list_all_pages);
});

function ocultarFlechas(page,all)
{
  if(page == 1)
    $("#imgPreR").css("display", "none");
  if(page == all)
    $("#imgSigR").css("display", "none");
}

function ocultarFlecha(page,all)
{
  if(page == 1)
    $("#imgPre").css("display", "none");
  if(page == all)
    $("#imgSig").css("display", "none");
}
//MPR Fin
function onclick_slider(tab_number, direction){
		
	var url_parameters = '';
	var get = new String(window.location);
	x = get.indexOf('?');
	if(x!=-1){
		l = get.length;
		url_parameters = "&" + get.substr(x+1, l-x);
	}else;

	if(tab_number == 4){
		offers_current_page += direction;
		if(offers_current_page < 1){
			offers_current_page = offers_all_pages;
		}else if(offers_current_page > offers_all_pages){
			offers_current_page = 1;
		}
		var url = "block.php?block_name=offers_block&offers_page=" + offers_current_page + url_parameters;
		if(direction > 0){
		
			//callAjax(url, insertBlockAfter, 'example4');
			showLightBox();
		$('#example4').load(url,function(){ratingStars(); hideLightBox(); });
		}else{
		
			//callAjax(url, insertBlockBefore, 'example4');
			showLightBox();
		$('#example4').load(url,function(){ratingStars(); hideLightBox();});
		}
	}else if(tab_number == 5){
		top_sellers_current_page += direction;
		if(top_sellers_current_page < 1){
			top_sellers_current_page = top_sellers_all_pages;
		}else if(top_sellers_current_page > top_sellers_all_pages){
			top_sellers_current_page = 1;
		}
		var url = "block.php?block_name=products_top_sellers&top_sellers_page=" + top_sellers_current_page + url_parameters;
		if(direction > 0){
		
			//callAjax(url, insertBlockAfter, 'example5');
			showLightBox();
			$(".block-top-sellers").css("display","block");
			$('#example5').load(url,function(){ratingStars(); hideLightBox();$(".block-top-sellers").css("display","block");});
		}else{
		
			//callAjax(url, insertBlockBefore, 'example5');
			showLightBox();
			
			$('#example5').load(url,function(){ratingStars(); hideLightBox();$(".block-top-sellers").css("display","block");});
		}
		//MPR 22_09_11 Inicio --Ocultar flecha en la primera página y en la última
		if(top_sellers_current_page == 1)
      $("#imgPre").css("display", "none");
    else
      $("#imgPre").css("display", "block"); 
      
    if(top_sellers_current_page == top_sellers_all_pages)
      $("#imgSig").css("display", "none");
    else
      $("#imgSig").css("display", "block");
    //MPR FIN
	}else if(tab_number == 6){
		top_rated_current_page += direction;
		if(top_rated_current_page < 1){
			top_rated_current_page = top_rated_all_pages;
		}else if(top_rated_current_page > top_rated_all_pages){
			top_rated_current_page = 1;
		}
		var url = "block.php?block_name=top_products_block&top_rated_page=" + top_rated_current_page + url_parameters;
		if(direction > 0){
		showLightBox();
			$('#example6').load(url,function(){ratingStars(); hideLightBox();});
			//callAjax(url, insertBlockAfter, 'example6');
		}else{
			showLightBox();
			$('#example6').load(url,function(){ratingStars(); hideLightBox();});
			//callAjax(url, insertBlockBefore, 'example6');
		}//alert("pagina"+top_rated_current_page+"total"+top_rated_all_pages);
		//MPR 22_09_11 Inicio --Ocultar flecha en la primera página y en la última
		if(top_rated_current_page == 1)
      $("#imgPreR").css("display", "none");
    else
      $("#imgPreR").css("display", "block"); 
      
    if(top_rated_current_page == top_rated_all_pages)
      $("#imgSigR").css("display", "none");
    else
      $("#imgSigR").css("display", "block");
    //MPR FIN
	}else if(tab_number == 7){
		products_latest_current_page += direction;
		if(products_latest_current_page < 1){
			products_latest_current_page = products_latest_all_pages;
		}else if(products_latest_current_page > products_latest_all_pages){
			products_latest_current_page = 1;
		}
		var url = "block.php?block_name=products_latest&latest_page=" + products_latest_current_page + url_parameters;
		if(direction > 0){
			showLightBox();
			$('#example7').load(url,function(){ratingStars(); hideLightBox();});
			//callAjax(url, insertBlockAfter, 'example7');
		}else{
			showLightBox();
			$('#example7').load(url,function(){ratingStars(); hideLightBox();});
			//callAjax(url, insertBlockBefore, 'example7');
		}
	}else if(tab_number == 8){
		products_list_current_page += direction;
		if(products_list_current_page < 1){
			products_list_current_page = products_list_all_pages;
		}else if(products_list_current_page > products_list_all_pages){
			products_list_current_page = 1;
		}
		if(direction == -1 && products_list_current_page ==  products_list_all_pages)
		{
			var url = "block.php?block_name=products_list&page=1" + url_parameters;
			products_list_current_page = 1;
		}
		else if(direction == 1 && products_list_current_page == 1)
		{
			var url = "block.php?block_name=products_list&page=" + products_list_all_pages + url_parameters;
			products_list_current_page = products_list_all_pages;
		}
		else
		{
			var url = "block.php?block_name=products_list&page=" + products_list_current_page + url_parameters;
		}
		//MPR 22_09_11 Inicio --Ocultar flecha en la primera página y en la última
		if(products_list_current_page == 1)
      $("#imgPre").css("display", "none");
    else
      $("#imgPre").css("display", "block"); 
      
    if(products_list_current_page == products_list_all_pages)
      $("#imgSig").css("display", "none");
    else
      $("#imgSig").css("display", "block");
    //MPR FIN
		if(direction > 0){
		showLightBox();
			$('#example8').load(url,function(){ratingStars(); hideLightBox(); addTipoEditorial(String(window.location));});
			//callAjax(url, insertBlockAfter, 'example8');
		}else{
		showLightBox();
			$('#example8').load(url,function(){ratingStars(); hideLightBox(); addTipoEditorial(String(window.location));});
			//callAjax(url, insertBlockBefore, 'example8');
		}
	}
}
function insertBlockBefore(blockContent, pbId)
{
	document.getElementById(pbId).innerHTML = blockContent;
}

function insertBlockAfter(blockContent, pbId)
{
	document.getElementById(pbId).innerHTML = blockContent;
}

function show_slider_buttons(button_display, blockId)
{
	var tb_Id = document.getElementById("tb_"+blockId);
	coord_x_block = PosDivX(tb_Id);
	coord_y_block = PosDivY(tb_Id);

	var slid_prev_Id = document.getElementById("slid_prev_"+blockId);
	slid_prev_Id.style.left =  (coord_x_block - 50) + "px";
	slid_prev_Id.style.top = (coord_y_block + 20) + "px";

	slid_prev_Id.style.display = button_display;

	var slid_next_Id = document.getElementById("slid_next_"+blockId);
	slid_next_Id.style.left =  (coord_x_block + tb_Id.offsetWidth + 20) + "px";
	slid_next_Id.style.top = (coord_y_block + 20) + "px";

	slid_next_Id.style.display = button_display;
}

function PosDivX(obj) {
	var x = 0;
	while(obj) 
	{
		x += obj.offsetLeft;
		obj = obj.offsetParent;
	}
	return x;
}
function PosDivY(obj) {
	var y = 0;
	while(obj) 
	{
		y += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return y;
}

function ___getPageSize() {
			var xScroll, yScroll;
			if (window.innerHeight && window.scrollMaxY) {	
				xScroll = window.innerWidth + window.scrollMaxX;
				yScroll = window.innerHeight + window.scrollMaxY;
			} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
				xScroll = document.body.scrollWidth;
				yScroll = document.body.scrollHeight;
			} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
				xScroll = document.body.offsetWidth;
				yScroll = document.body.offsetHeight;
			}
			var windowWidth, windowHeight;
			if (self.innerHeight) {	// all except Explorer
				if(document.documentElement.clientWidth){
					windowWidth = document.documentElement.clientWidth; 
				} else {
					windowWidth = self.innerWidth;
				}
				windowHeight = self.innerHeight;
			} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
				windowWidth = document.documentElement.clientWidth;
				windowHeight = document.documentElement.clientHeight;
			} else if (document.body) { // other Explorers
				windowWidth = document.body.clientWidth;
				windowHeight = document.body.clientHeight;
			}	
			// for small pages with total height less then height of the viewport
			if(yScroll < windowHeight){
				pageHeight = windowHeight;
			} else { 
				pageHeight = yScroll;
			}
			// for small pages with total width less then width of the viewport
			if(xScroll < windowWidth){	
				pageWidth = xScroll;		
			} else {
				pageWidth = windowWidth;
			}
			arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);
			return arrayPageSize;
		};
		var settings = {
			// Configuration related to overlay
			overlayBgColor: 		'#000',		// (string) Background color to overlay; inform a hexadecimal value like: #RRGGBB. Where RR, GG, and BB are the hexadecimal values for the red, green, and blue values of the color.
			overlayOpacity:			0.4,		//  (integer) Opacity value to overlay; inform: 0.X. Where X are number from 0 to 9
			// Configuration related to navigation
			fixedNavigation:		false,		// (boolean) Boolean that informs if the navigation (next and prev button) will be fixed or not in the interface.
			// Configuration related to images
			imageLoading: 'LSCA-FEnBOOKS/images/icons/loader.gif',		// (string) Path and the name of the loading icon
			imageBtnPrev: 'LSCA-FEnBOOKS/images/lightbox-btn-prev.gif',			// (string) Path and the name of the prev button image
			imageBtnNext: 'LSCA-FEnBOOKS/images/lightbox-btn-next.gif',			// (string) Path and the name of the next button image
			imageBtnClose: 'LSCA-FEnBOOKS/images/lightbox-btn-close.gif',		// (string) Path and the name of the close btn
			imageBlank: 'LSCA-FEnBOOKS/images/lightbox-blank.gif',			// (string) Path and the name of a blank image (one pixel)
			// Configuration related to container image box
			containerBorderSize:	10,			// (integer) If you adjust the padding in the CSS for the container, #lightbox-container-image-box, you will need to update this value
			containerResizeSpeed:	400,		// (integer) Specify the resize duration of container image. These number are miliseconds. 400 is default.
			// Configuration related to texts in caption. For example: Image 2 of 8. You can alter either "Image" and "of" texts.
			txtImage:				'Image',	// (string) Specify text "Image"
			txtOf:					'of',		// (string) Specify text "of"
			// Configuration related to keyboard navigation
			keyToClose:				'c',		// (string) (c = close) Letter to close the jQuery lightBox interface. Beyond this letter, the letter X and the SCAPE key is used to.
			keyToPrev:				'p',		// (string) (p = previous) Letter to show the previous image
			keyToNext:				'n',		// (string) (n = next) Letter to show the next image.
			// Don´t alter these variables in any way
			imageArray:				[],
			activeImage:			0
		};
		function showLightBox(){
			$('body').css("cursor","progress");
		}
		function hideLightBox(){	$('#jquery-lightbox').remove();
			$('body').css("cursor","default");
			}



/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 *
 * Copyright 2010, Steven Wanderski
 * http://bxcreative.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
(function(a){a.fn.bxSlider=function(b){function Z(b,c,d,e){var f=[];var g=d;var h=false;if(e=="backward"){b=a.makeArray(b);b.reverse()}while(g>0){a.each(b,function(b,d){if(g>0){if(!h){if(b==c){h=true;f.push(a(this).clone());g--}}else{f.push(a(this).clone());g--}}else{return false}})}return f}function Y(){var a=i.outerHeight()*b.displaySlideQty;return a}function X(){var a=i.outerWidth()*b.displaySlideQty;return a}function W(b,c){if(c=="left"){var d=a(".pager",h).eq(b).position().left}else if(c=="top"){var d=a(".pager",h).eq(b).position().top}return d}function V(){if(!b.infiniteLoop&&b.hideControlOnEnd){if(x==F){a(".prev",h).hide()}else{a(".prev",h).show()}if(x==G){a(".next",h).hide()}else{a(".next",h).show()}}}function U(c,e,f,g){p=a('<a href="" class="bx-start"></a>');if(c=="text"){r=e}else{r='<img src="'+e+'" />'}if(f=="text"){s=g}else{s='<img src="'+g+'" />'}if(b.autoControlsSelector){a(b.autoControlsSelector).append(p)}else{h.append('<div class="bx-auto"></div>');a(".bx-auto",h).html(p)}p.click(function(){if(b.ticker){if(a(this).hasClass("stop")){d.stopTicker()}else if(a(this).hasClass("start")){d.startTicker()}}else{if(a(this).hasClass("stop")){d.stopShow(true)}else if(a(this).hasClass("start")){d.startShow(true)}}return false})}function T(){var c=a("img",g.eq(x)).attr("title");if(c!=""){if(b.captionsSelector){a(b.captionsSelector).html(c)}else{a(".bx-captions",h).html(c)}}else{if(b.captionsSelector){a(b.captionsSelector).html(" ")}else{a(".bx-captions",h).html(" ")}}}function S(c){var e=g.length;if(b.moveSlideQty>1){if(g.length%b.moveSlideQty!=0){e=Math.ceil(g.length/b.moveSlideQty)}else{e=g.length/b.moveSlideQty}}var f="";if(b.buildPager){for(var i=0;i<e;i++){f+=b.buildPager(i,g.eq(i*b.moveSlideQty))}}else if(c=="full"){for(var i=1;i<=e;i++){f+='<a href="" class="pager-link pager-'+i+'">'+i+"</a>"}}else if(c=="short"){f='<span class="bx-pager-current">'+(b.startingSlide+1)+"</span> "+b.pagerShortSeparator+' <span class="bx-pager-total">'+g.length+"</span>"}if(b.pagerSelector){a(b.pagerSelector).append(f);n=a(b.pagerSelector)}else{var j=a('<div class="bx-pager"></div>');j.append(f);if(b.pagerLocation=="top"){h.prepend(j)}else if(b.pagerLocation=="bottom"){h.append(j)}n=a(".bx-pager",h)}n.children().click(function(){if(b.pagerType=="full"){var a=n.children().index(this);if(b.moveSlideQty>1){a*=b.moveSlideQty}d.goToSlide(a)}return false})}function R(c,e,f,g){var i=a('<a href="" class="next"></a>');var j=a('<a href="" class="prev"></a>');if(c=="text"){i.html(e)}else{i.html('<img src="'+e+'" />')}if(f=="text"){j.html(g)}else{j.html('<img src="'+g+'" />')}if(b.prevSelector){a(b.prevSelector).append(j)}else{h.append(j)}if(b.nextSelector){a(b.nextSelector).append(i)}else{h.append(i)}i.click(function(){d.goToNextSlide();return false});j.click(function(){d.goToPreviousSlide();return false})}function Q(c){if(b.pagerType=="full"&&b.pager){a("a",n).removeClass(b.pagerActiveClass);a("a",n).eq(c).addClass(b.pagerActiveClass)}else if(b.pagerType=="short"&&b.pager){a(".bx-pager-current",n).html(x+1)}}function P(){g.not(":eq("+x+")").fadeTo(b.speed,0).css("zIndex",98);g.eq(x).css("zIndex",99).fadeTo(b.speed,1,function(){E=false;if(jQuery.browser.msie){g.eq(x).get(0).style.removeAttribute("filter")}b.onAfterSlide(x,g.length,g.eq(x))})}function O(){e.hover(function(){if(t){d.stopTicker(false)}},function(){if(t){d.startTicker(false)}})}function N(){h.find(".bx-window").hover(function(){if(t){d.stopShow(false)}},function(){if(t){d.startShow(false)}})}function M(){if(b.startImage!=""){startContent=b.startImage;startType="image"}else{startContent=b.startText;startType="text"}if(b.stopImage!=""){stopContent=b.stopImage;stopType="image"}else{stopContent=b.stopText;stopType="text"}U(startType,startContent,stopType,stopContent)}function L(a,c,d){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){e.animate({left:"-="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({left:"+="+c+"px"},d,"linear",function(){e.css("left",a);L(a,A,b.tickerSpeed)})}}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){e.animate({top:"-="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}else if(b.tickerDirection=="prev"){e.animate({top:"+="+c+"px"},d,"linear",function(){e.css("top",a);L(a,B,b.tickerSpeed)})}}}function K(){if(b.auto){if(!b.infiniteLoop){if(b.autoDirection=="next"){o=setInterval(function(){x+=b.moveSlideQty;if(x>G){x=x%g.length}d.goToSlide(x,false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){x-=b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}}d.goToSlide(x,false)},b.pause)}}else{if(b.autoDirection=="next"){o=setInterval(function(){d.goToNextSlide(false)},b.pause)}else if(b.autoDirection=="prev"){o=setInterval(function(){d.goToPreviousSlide(false)},b.pause)}}}else if(b.ticker){b.tickerSpeed*=10;a(".pager",h).each(function(b){A+=a(this).width();B+=a(this).height()});if(b.tickerDirection=="prev"&&b.mode=="horizontal"){e.css("left","-"+(A+y)+"px")}else if(b.tickerDirection=="prev"&&b.mode=="vertical"){e.css("top","-"+(B+z)+"px")}if(b.mode=="horizontal"){C=parseInt(e.css("left"));L(C,A,b.tickerSpeed)}else if(b.mode=="vertical"){D=parseInt(e.css("top"));L(D,B,b.tickerSpeed)}if(b.tickerHover){O()}}}function J(){if(b.nextImage!=""){nextContent=b.nextImage;nextType="image"}else{nextContent=b.nextText;nextType="text"}if(b.prevImage!=""){prevContent=b.prevImage;prevType="image"}else{prevContent=b.prevText;prevType="text"}R(nextType,nextContent,prevType,prevContent)}function I(){if(b.mode=="horizontal"||b.mode=="vertical"){var c=Z(g,0,b.moveSlideQty,"backward");a.each(c,function(b){e.prepend(a(this))});var d=g.length+b.moveSlideQty-1;var f=g.length-b.displaySlideQty;var h=d-f;var i=Z(g,0,h,"forward");if(b.infiniteLoop){a.each(i,function(b){e.append(a(this))})}}}function H(){I(b.startingSlide);if(b.mode=="horizontal"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+l+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+l+'px;"></div>').css({width:"999999px",position:"relative",left:"-"+y+"px"});e.children().css({width:j,"float":"left",listStyle:"none"});h=e.parent().parent();g.addClass("pager")}else if(b.mode=="vertical"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+v+"px; height:"+m+'px; position:relative; overflow:hidden;"></div>').css({height:"999999px",position:"relative",top:"-"+z+"px"});e.children().css({listStyle:"none",height:w});h=e.parent().parent();g.addClass("pager")}else if(b.mode=="fade"){e.wrap('<div class="'+b.wrapperClass+'" style="width:'+v+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+w+"px; width:"+v+'px; position:relative; overflow:hidden;"></div>');e.children().css({listStyle:"none",position:"absolute",top:0,left:0,zIndex:98});h=e.parent().parent();g.not(":eq("+x+")").fadeTo(0,0);g.eq(x).css("zIndex",99)}if(b.captions&&b.captionsSelector==null){h.append('<div class="bx-captions"></div>')}}var c={mode:"horizontal",infiniteLoop:true,hideControlOnEnd:false,controls:true,speed:500,easing:"swing",pager:false,pagerSelector:null,pagerType:"full",pagerLocation:"bottom",pagerShortSeparator:"/",pagerActiveClass:"pager-active",nextText:"next",nextImage:"",nextSelector:null,prevText:"prev",prevImage:"",prevSelector:null,captions:false,captionsSelector:null,auto:false,autoDirection:"next",autoControls:false,autoControlsSelector:null,autoStart:true,autoHover:false,autoDelay:0,pause:3e3,startText:"start",startImage:"",stopText:"stop",stopImage:"",ticker:false,tickerSpeed:5e3,tickerDirection:"next",tickerHover:false,wrapperClass:"bx-wrapper",startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:false,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null};var b=a.extend(c,b);var d=this;var e="";var f="";var g="";var h="";var i="";var j="";var k="";var l="";var m="";var n="";var o="";var p="";var q="";var r="";var s="";var t=true;var u=false;var v=0;var w=0;var x=0;var y=0;var z=0;var A=0;var B=0;var C=0;var D=0;var E=false;var F=0;var G=g.length-1;this.goToSlide=function(a,c){if(!E){E=true;x=a;b.onBeforeSlide(x,g.length,g.eq(x));if(typeof c=="undefined"){var c=true}if(c){if(b.auto){d.stopShow(true)}}slide=a;if(slide==F){b.onFirstSlide(x,g.length,g.eq(x))}if(slide==G){b.onLastSlide(x,g.length,g.eq(x))}if(b.mode=="horizontal"){e.animate({left:"-"+W(slide,"left")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){e.animate({top:"-"+W(slide,"top")+"px"},b.speed,b.easing,function(){E=false;b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}V();if(b.moveSlideQty>1){a=Math.floor(a/b.moveSlideQty)}Q(a);T()}};this.goToNextSlide=function(a){if(typeof a=="undefined"){var a=true}if(a){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var c=false;x=x+b.moveSlideQty;if(x<=G){V();b.onNextSlide(x,g.length,g.eq(x));d.goToSlide(x)}else{x-=b.moveSlideQty}}}else{if(!E){E=true;var c=false;x=x+b.moveSlideQty;if(x>G){x=x%g.length;c=true}b.onNextSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var f=b.moveSlideQty*k;e.animate({left:"-="+f+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var h=b.moveSlideQty*w;e.animate({top:"-="+h+"px"},b.speed,b.easing,function(){E=false;if(c){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToPreviousSlide=function(c){if(typeof c=="undefined"){var c=true}if(c){if(b.auto){d.stopShow(true)}}if(!b.infiniteLoop){if(!E){var f=false;x=x-b.moveSlideQty;if(x<0){x=0;if(b.hideControlOnEnd){a(".prev",h).hide()}}V();b.onPrevSlide(x,g.length,g.eq(x));d.goToSlide(x)}}else{if(!E){E=true;var f=false;x=x-b.moveSlideQty;if(x<0){negativeOffset=x%g.length;if(negativeOffset==0){x=0}else{x=g.length+negativeOffset}f=true}b.onPrevSlide(x,g.length,g.eq(x));b.onBeforeSlide(x,g.length,g.eq(x));if(b.mode=="horizontal"){var i=b.moveSlideQty*k;e.animate({left:"+="+i+"px"},b.speed,b.easing,function(){E=false;if(f){e.css("left","-"+W(x,"left")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="vertical"){var j=b.moveSlideQty*w;e.animate({top:"+="+j+"px"},b.speed,b.easing,function(){E=false;if(f){e.css("top","-"+W(x,"top")+"px")}b.onAfterSlide(x,g.length,g.eq(x))})}else if(b.mode=="fade"){P()}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}T()}}};this.goToFirstSlide=function(a){if(typeof a=="undefined"){var a=true}d.goToSlide(F,a)};this.goToLastSlide=function(){if(typeof a=="undefined"){var a=true}d.goToSlide(G,a)};this.getCurrentSlide=function(){return x};this.getSlideCount=function(){return g.length};this.stopShow=function(a){clearInterval(o);if(typeof a=="undefined"){var a=true}if(a&&b.autoControls){p.html(r).removeClass("stop").addClass("start");t=false}};this.startShow=function(a){if(typeof a=="undefined"){var a=true}K();if(a&&b.autoControls){p.html(s).removeClass("start").addClass("stop");t=true}};this.stopTicker=function(a){e.stop();if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(r).removeClass("stop").addClass("start");t=false}};this.startTicker=function(a){if(b.mode=="horizontal"){if(b.tickerDirection=="next"){var c=parseInt(e.css("left"));var d=A+c+g.eq(0).width()}else if(b.tickerDirection=="prev"){var c=-parseInt(e.css("left"));var d=c-g.eq(0).width()}var f=d*b.tickerSpeed/A;L(C,d,f)}else if(b.mode=="vertical"){if(b.tickerDirection=="next"){var h=parseInt(e.css("top"));var d=B+h+g.eq(0).height()}else if(b.tickerDirection=="prev"){var h=-parseInt(e.css("top"));var d=h-g.eq(0).height()}var f=d*b.tickerSpeed/B;L(D,d,f);if(typeof a=="undefined"){var a=true}if(a&&b.ticker){p.html(s).removeClass("start").addClass("stop");t=true}}};this.initShow=function(){e=a(this);f=e.clone();g=e.children();h="";i=e.children(":first");j=i.width();v=0;k=i.outerWidth();w=0;l=X();m=Y();E=false;n="";x=0;y=0;z=0;o="";p="";q="";r="";s="";t=true;u=false;A=0;B=0;C=0;D=0;F=0;G=g.length-1;g.each(function(b){if(a(this).outerHeight()>w){w=a(this).outerHeight()}if(a(this).outerWidth()>v){v=a(this).outerWidth()}});if(b.randomStart){var c=Math.floor(Math.random()*g.length);x=c;y=k*(b.moveSlideQty+c);z=w*(b.moveSlideQty+c)}else{x=b.startingSlide;y=k*(b.moveSlideQty+b.startingSlide);z=w*(b.moveSlideQty+b.startingSlide)}H();if(b.pager&&!b.ticker){if(b.pagerType=="full"){S("full")}else if(b.pagerType=="short"){S("short")}}if(b.controls&&!b.ticker){J()}if(b.auto||b.ticker){if(b.autoControls){M()}if(b.autoStart){setTimeout(function(){d.startShow(true)},b.autoDelay)}else{d.stopShow(true)}if(b.autoHover&&!b.ticker){N()}}if(b.moveSlideQty>1){Q(Math.ceil(x/b.moveSlideQty))}else{Q(x)}V();if(b.captions){T()}b.onAfterSlide(x,g.length,g.eq(x))};this.destroyShow=function(){clearInterval(o);a(".next, .prev, .bx-pager, .bx-auto",h).remove();e.unwrap().unwrap().removeAttr("style");e.children().removeAttr("style").not(".pager").remove();g.removeClass("pager")};this.reloadShow=function(){d.destroyShow();d.initShow()};this.each(function(){if(a(this).children().length>0){d.initShow()}});return this};jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var a=parseFloat(jQuery.css(this.elem,this.prop));return a}})(jQuery)
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});
//examples
$('#example1,#example2,#example3').ready(function(){
	$("#example1").css("left","-909px");
	try{$('#example1').bxSlider(
	{
	    prevImage: 'LSCA-FEnBOOKS/imagenes/flechaprev.png',
	    nextImage: 'LSCA-FEnBOOKS/imagenes/flechasigu.png',
		randomStart:true,
		infiniteloop:false,
		hideControlOnEnd:true
	});
	$("#example1").css("left","-909px");
	$("#masVendido2").removeClass('noMostrarFix');

	$('#example2').bxCarousel({
		display_num: 1,
		move: 1,
		prev_image: 'LSCA-FEnBOOKS/imagenes/flechaprev.png',
		next_image: 'LSCA-FEnBOOKS/imagenes/flechasigu.png',
		randomStart: true,
		margin: 0
	});
	$('#example3').bxCarousel({
		display_num: 5,
		move: 1,
		prev_image: 'LSCA-FEnBOOKS/imagenes/flechaprev.png',
		next_image: 'LSCA-FEnBOOKS/imagenes/flechasigu.png',
		margin: 15
	});
}catch(e){}

});
 // shopping javacript

function confirmBuy(itemForm, buttonType,user_id)
{
	if (buttonType == "wishlist") {
		itemForm.cart.value = "WISHLIST";
				if(!user_id||user_id==null)
		{$("#ratingSatatusWishlist").fadeIn();$("#cerrarAvisoWishlist").click(function(){$("#ratingSatatusWishlist").fadeOut();}); return false;}
	} else {
		itemForm.cart.value = "ADD";
	}
	var params = getProductParams(itemForm);
	var basePrice = params["base_price"];
	// check what options were selected and what options is active
	var returnedValues = checkOptions(itemForm);
	var selectedOptions = returnedValues[0];
	var activeOptions = returnedValues[1];
	// check options for requirements
	var prMessage = requiredProperty;
	var productName = params["item_name"];
	for (prID in activeOptions) {
		if (itemForm.elements["property_control_" + prID]) { // check if it is property control
			var prRequired = itemForm.elements["property_required_" + prID].value;
			var prControl = itemForm.elements["property_control_" + prID].value;
			if (prRequired == 1 && activeOptions[prID] && !selectedOptions[prID]) {
				var propertyName = itemForm.elements["property_name_" + prID].value;
				prMessage = prMessage.replace("\{property_name\}", propertyName);
				prMessage = prMessage.replace("\{product_name\}", productName);
				alert(prMessage);	
				if (prControl != "RADIOBUTTON" && prControl != "CHECKBOXLIST" && prControl != "TEXTBOXLIST" && prControl != "LABEL") {
					itemForm.elements["property_" + prID].focus();
				}
				return false;
			}
		}
	}
	// calculate price for selected options
	var propertiesPrice = calculateOptionsPrice(itemForm, selectedOptions);

	var productPrice = basePrice + params["comp_price"] + propertiesPrice;
	if (params["zero_product_action"] == 2 && productPrice == 0) {
		alert(params["zero_product_warn"]);
		return false;
	}
	if (buttonType == "wishlist") {
		var savedTypesHidden = "0";
		if (document.saved_types.saved_types_hidden) {
			// check if we don't need to show popup win
			savedTypesHidden = document.saved_types.saved_types_hidden.value; 
		}
		if (savedTypesHidden == "1") {
			// assign default type_id from hidden popup
			itemForm.saved_type_id.value = document.saved_types.type_id.value;
		}
		// check if type_id was selected 
		var savedTypeId = itemForm.saved_type_id.value;

		if (savedTypeId == "") {
			popupSavedTypes(itemForm);
		} else {
			itemForm.submit();
		}
		return false;
	} else if (confirmAdd == "1") {
		return confirm(addProduct);
	} else {
		return true;
	}
}

function confirmSubscription(itemForm)
{
	if (confirmAdd == "1") {
		return confirm(addSubscription);
	} else {
		return true;
	}
}

function addToWishlist()
{
	var formId = document.saved_types.form_id.value;
	if (formId != "") {
		var formName = "form_" + formId
		var itemForm = document.forms[formName];
		var typesTotal = parseInt(document.saved_types.saved_types_total.value);
		var typeId = "";
		if (typesTotal == 1) {
			var typeId = document.saved_types.type_id.value;
		} else if (typesTotal > 1) {
			var typeId = document.saved_types.type_id.options[document.saved_types.type_id.selectedIndex].value;
		}
		if (typeId != "") {
			itemForm.saved_type_id.value = typeId;
			hideSavedTypes();
			confirmBuy(itemForm, "wishlist");
		} else {
			alert("Please select a type");
		}
	} else {
		alert("Product wasn't selected");
	}
}

function popupSavedTypes(itemForm)
{                              	
	var params = getProductParams(itemForm);
	var formId = params["form_id"];
	document.saved_types.form_id.value = formId;
	var savedTypesShadow = document.getElementById("saved_types_shadow");
	var savedTypesWin = document.getElementById("saved_types_win");
	if (formId != "") {
		var wishlistButton = document.getElementById("wishlist_" + formId);
		savedTypesWin.style.left = (findPosX(wishlistButton, 0) - 150) + "px";
		savedTypesWin.style.top = (findPosY(wishlistButton, 0) - 100) + "px";
		var arrayPageSizeWithScroll = getPageSizeWithScroll();
		savedTypesShadow.style.height = arrayPageSizeWithScroll[1] + "px";
	}

	savedTypesWin.style.display = "block";			
	savedTypesShadow.style.display = "block";			
	hideSelectBoxes("saved_types_win", new Array("type_id"));
}

function hideSavedTypes()
{                              	
	document.saved_types.form_id.value = "";
	var savedTypesShadow = document.getElementById("saved_types_shadow");
	var savedTypesWin = document.getElementById("saved_types_win");
	savedTypesWin.style.display = "none";			
	savedTypesShadow.style.display = "none";			
	showSelectBoxes("saved_types_win");
}

function changeSavedType()
{
	var prevTypeId = document.saved_types.prev_type_id.value;
	var typeIdControl = document.saved_types.type_id;
	var selectedTypeId = typeIdControl.options[typeIdControl.selectedIndex].value;
	document.saved_types.prev_type_id.value = selectedTypeId;
	if (prevTypeId != selectedTypeId) {
		if (prevTypeId != "") {
			var typeDescBlock = document.getElementById("type_desc_" + prevTypeId);
			typeDescBlock.style.display = "none";			
		}
		if (selectedTypeId != "") {
			var typeDescBlock = document.getElementById("type_desc_" + selectedTypeId);
			typeDescBlock.style.display = "block";			
		}
	}
}

function changeProperty(itemForm)
{
	var selectedOptions = new Array();
	var priceControl = "";
	var htmlControl = false;
	var itemId = "";
	var taxPercent = 0;

	var params = getProductParams(itemForm);
	var taxNote = params["tax_note"];
	var pointsBase = params["base_points_price"];
	var prIDs = params["properties_ids"];
	var formId = params["form_id"];

	if (params["pe"] == "1") {
		return;
	}

	if (itemForm.tax_percent && itemForm.tax_percent.value != "") {
		taxPercent = parseFloat(itemForm.tax_percent.value);
		if (isNaN(taxPercent)) { taxPercent = 0; }
	}

	if (itemForm.add_id) {
		itemId = itemForm.add_id.value;
	} else if (itemForm.item_id) {
		itemId = itemForm.item_id.value;
	}
	if (itemId != "" && document.getElementById) {
		priceControl = document.getElementById("sales_price_" + itemId);
		if (!priceControl) {
			priceControl = document.getElementById("price_" + itemId);
		}
	} 
	var pointsPriceControl = document.getElementById("points_price_" + itemId);
	// check what options were selected and what options is active
	var returnedValues = checkOptions(itemForm);
	var selectedOptions = returnedValues[0];
	var activeOptions = returnedValues[1];
	// calculate price for selected options
	var totalAdditionalPrice = calculateOptionsPrice(itemForm, selectedOptions);

	// hide or show property blocks
	for (prID in activeOptions) {
		if (itemForm.elements["property_control_" + prID]) { // check if it is property control
			var propertyBlock = document.getElementById("pr_" + formId + "_" + prID);
			if (activeOptions[prID]) {
				propertyBlock.style.display = "block";				
			} else {
				propertyBlock.style.display = "none";				
			}
		}
	}

	// show hide image for subcomponents
	for (prID in activeOptions) {
		if (itemForm.elements["property_control_" + prID]) { // check if it is property control
			var prControl = itemForm.elements["property_control_" + prID].value;
			if (activeOptions[prID] && (prControl == "LISTBOX" || prControl == "RADIOBUTTON")) {
				var prValue = selectedOptions[prID];
	  
				var objId = formId + "_" + prID; // id for current product option
				if (prValue != "") {
					var image_button = document.getElementById("option_image_action_" + objId);
					if (!image_button) {
						var image_button       = document.createElement('a');				
						image_button.id        = "option_image_action_" + objId;
						image_button.href      = "#";
						image_button.onclick   = popupImage;
						image_button.style.display = "none";
						image_button.innerHTML = "<img src='images/icons/view_page.gif' alt='View' border='0'/>";
						var propertyObj = document.getElementById("pr_" + objId);
						if (propertyObj) { propertyObj.appendChild(image_button); }
					}				
					if (itemForm.elements["option_image_" + prValue]) {
						var image = itemForm.elements["option_image_" + prValue].value;
						if (itemForm.elements["option_image_action_" + prValue]) {
							image_button.onclick = (itemForm.elements["option_image_action_" + prValue].onclick);
						}					
						image_button.style.display = "inline";
						image_button.href  = image;
						image_button.title = itemForm.elements["property_" + prID].options[itemForm.elements["property_" + prID].selectedIndex].text;
					} else {
						image_button.style.display = "none";
					}
				} else {
					var image_button = document.getElementById("option_image_action_" + objId);
					if (image_button) {
						image_button.style.display = "none";
					}
				}
			}
		}
	}

	var basePrice = params["base_price"];
	var baseTax = 0;
	// check product quantity
	var quantity = 1;
	if (itemForm.quantity) {
		if (itemForm.quantity.selectedIndex) {
			quantity = parseInt(itemForm.quantity.options[itemForm.quantity.selectedIndex].value);
		} else {
			quantity = parseInt(itemForm.quantity.value);
		}
		if (isNaN(quantity)) { quantity = 1; } 
	}
	var isQuantityPrice = false;
	if(params["quantity_price"]) { 
		var prices = params["quantity_price"]; 
		if (prices != "") {
			prices = prices.split(",");
			for (var p = 0; p < prices.length; p = p + 5) {
				var minQuantity = parseInt(prices[p]);
				var maxQuantity = parseInt(prices[p + 1]);
				if (quantity >= minQuantity && quantity <= maxQuantity) {
					isQuantityPrice = true;
					basePrice = parseFloat(prices[p + 2]);
					baseTax = parseFloat(prices[p + 3]);
					var propertiesDiscount = parseFloat(prices[p + 4]);
					if (propertiesDiscount > 0) {
						totalAdditionalPrice -= (Math.round(totalAdditionalPrice * propertiesDiscount) / 100);
					}
					break;
				}
			}
		}
	}
	
	var price = basePrice + totalAdditionalPrice;
	var taxAmount = 0; var productPrice = 0; var taxPrice = 0; var priceExcl = 0;
	if (params["tax_prices_type"] == 1) {
		// price already includes tax
		if (isQuantityPrice) {
			taxPrice = Math.round((price) * 100) / 100; 
			taxAmount = baseTax; 
		} else {
			taxPrice = Math.round((price + params["comp_price"]) * 100) / 100; 
			taxAmount = (Math.round(price * 100) - Math.round(price * 10000 / ( 100 + taxPercent))) / 100; 
		}
		if (isQuantityPrice) {
			productPrice = Math.round((price - taxAmount) * 100) / 100;
		} else {
			productPrice = Math.round((price - taxAmount + params["comp_price"] - params["comp_tax"]) * 100) / 100;
		}
		priceExcl = productPrice;
	} else {
		if (isQuantityPrice) {
			taxAmount = baseTax; 
			productPrice = Math.round((price) * 100) / 100;
			taxPrice = Math.round((productPrice + taxAmount) * 100) / 100; 
		} else {
			taxAmount = Math.round(price * taxPercent) / 100; 
			productPrice = Math.round((price + params["comp_price"]) * 100) / 100;
			taxPrice = Math.round((productPrice + taxAmount + params["comp_tax"]) * 100) / 100; 
		}
		priceExcl = productPrice;
	}

	if (params["show_prices"] == 2) {
		productPrice = taxPrice;
		taxPrice = priceExcl;
	} else if (params["show_prices"] == 3) {
		productPrice = taxPrice;
	}

	if (priceControl) {
		if (params["zero_price_type"] != 0 && productPrice == 0) {
			if (params["zero_price_type"] == 1) { params["zero_price_message"] = ""; }
			priceControl.innerHTML = params["zero_price_message"];
		} else {
			priceControl.innerHTML = params["cleft"] + formatNumber(productPrice * params["crate"], params["cdecimals"], params["cpoint"], params["cseparator"]) + params["cright"];
		}
		priceBlockControl = document.getElementById("price_block_" + itemId);
		if (priceBlockControl) {
			if (params["zero_price_type"] == 1 && productPrice == 0) {
				priceBlockControl.style.display = "none";
			} else {
				priceBlockControl.style.display = "block";
			}
		}
	}
	taxPriceControl = document.getElementById("tax_price_" + itemId);
	if (taxPriceControl) {
		if (params["zero_price_type"] != 0 && taxPrice == 0) {
			taxPriceControl.innerHTML = "";
		} else {
			if (taxNote != "") { taxNote = " " + taxNote; }
			taxPriceControl.innerHTML = "(" + params["cleft"] + formatNumber(taxPrice * params["crate"], params["cdecimals"], params["cpoint"], params["cseparator"]) + params["cright"] + taxNote + ")";
		}
	}
	if (pointsPriceControl) {
		var pointsPrice = pointsBase + (totalAdditionalPrice * params["points_rate"]);
		pointsPriceControl.innerHTML = formatNumber(pointsPrice, params["points_decimals"]);
	}
}

function checkOptions(itemForm)
{
	var params = getProductParams(itemForm);
	var prIDs = params["properties_ids"];
	var selectedOptions = new Array();
	var activeOptions = new Array();
	var returnValues = new Array();
	// check first all selected options
	var prIDs = params["properties_ids"];

	if (prIDs != "") {
		var properties = prIDs.split(",");
		for ( var i = 0; i < properties.length; i++) {
			var prID = properties[i];
			var prValue = ""; 
			if (itemForm.elements["property_control_" + prID]){  //P
				var prControl = itemForm.elements["property_control_" + prID].value;
			}
			if (prControl == "LISTBOX") {
				prValue = itemForm.elements["property_" + prID].options[itemForm.elements["property_" + prID].selectedIndex].value;
				if (prValue != "") {
					selectedOptions[prID] = prValue;
				}
			} else if (prControl == "RADIOBUTTON") {
				var radioControl = itemForm.elements["property_" + prID];
				if (radioControl.length) {
					for ( var ri = 0; ri < radioControl.length; ri++) {
						if (radioControl[ri].checked) {
							prValue = radioControl[ri].value;
							break;
						}
					}
				} else {
					if (radioControl.checked) {
						prValue = radioControl.value;
					}
				}
				if (prValue != "") {
					selectedOptions[prID] = prValue;
				}
			} else if (prControl == "CHECKBOXLIST") {
				if (itemForm.elements["property_total_" + prID]) {
					var totalOptions = parseInt(itemForm.elements["property_total_" + prID].value);
					for ( var ci = 1; ci <= totalOptions; ci++) {
						if (itemForm.elements["property_" + prID + "_" + ci].checked) {
							var checkedValue = itemForm.elements["property_" + prID + "_" + ci].value;
							if (!selectedOptions[prID]) {
								selectedOptions[prID] = new Array();
							}
							selectedOptions[prID][checkedValue] = 1;
						}
					}
				} 
			} else if (prControl == "TEXTBOXLIST") {
				if (itemForm.elements["property_total_" + prID]) {
					var totalOptions = parseInt(itemForm.elements["property_total_" + prID].value);
					for ( var ci = 1; ci <= totalOptions; ci++) {
						if (itemForm.elements["property_" + prID + "_" + ci].value != "") {
							var valueId = itemForm.elements["property_value_" + prID + "_" + ci].value;
							var valueText = itemForm.elements["property_" + prID + "_" + ci].value;
							if (!selectedOptions[prID]) {
								selectedOptions[prID] = new Array();
							}
							selectedOptions[prID][valueId] = valueText;
						}
					}
				} 
			} else if (prControl == "LABEL"){
				// get from hidden control
				if (itemForm.elements["property_" + prID]) {
					prValue = itemForm.elements["property_" + prID]?itemForm.elements["property_" + prID].value:"";
					if (prValue != "") {
						selectedOptions[prID] = prValue;
					}
				}
			} else {
				prValue = itemForm.elements["property_" + prID]?itemForm.elements["property_" + prID].value:"";
				if (prValue != "") {
					selectedOptions[prID] = prValue;
				}
			}
		}
	}

	// second check for active options and correct selected options if necessary
	if (prIDs != "") {
		do {
			// save how many selected options we have at start
			var startSelectedNumber = selectedOptions.length;
			// check availability of parent options		
			var properties = prIDs.split(",");
			for ( var i = 0; i < properties.length; i++) {
				var prID = properties[i];
				if (itemForm.elements["property_parent_id_" + prID]){ //P
					var parentPropertyId = itemForm.elements["property_parent_id_" + prID].value;
				}				
				if (itemForm.elements["property_parent_value_id_" + prID]){ //P
					var parentValueId = itemForm.elements["property_parent_value_id_" + prID].value;
				}				
				var showProperty = true;
				if (parentPropertyId != "") {
					if (!selectedOptions[parentPropertyId]) {
						showProperty = false;
					} else if (parentValueId != "") {
						if (!selectedOptions[parentPropertyId][parentValueId] && selectedOptions[parentPropertyId] != parentValueId) {
							showProperty = false;
						}
					}
				}
				activeOptions[prID] = showProperty;
				if (!showProperty) {
					// delete from selected
					if (selectedOptions[prID]) {
						delete selectedOptions[prID];
					}
	  
					// clear all options
				var prControl = itemForm.elements["property_control_" + prID]?itemForm.elements["property_" + prID].value:"";
					if (prControl == "LISTBOX") {
						var selectedIndex = itemForm.elements["property_" + prID].selectedIndex;
						if (selectedIndex > 0) {
							itemForm.elements["property_" + prID].options[0].selected = true;
						}
					} else if (prControl == "RADIOBUTTON") {
						var radioControl = itemForm.elements["property_" + prID];
						if (radioControl.length) {
							for ( var ri = 0; ri < radioControl.length; ri++) {
								radioControl[ri].checked = false;
							}
						} else {
							radioControl.checked = false;
						}
	  
					} else if (prControl == "CHECKBOXLIST") {
						var totalOptions = parseInt(itemForm.elements["property_total_" + prID].value);
						for ( var ci = 1; ci <= totalOptions; ci++) {
							itemForm.elements["property_" + prID + "_" + ci].checked = false;
						}
					} else if (prControl == "TEXTBOXLIST") {
						var totalOptions = parseInt(itemForm.elements["property_total_" + prID].value);
						for ( var ci = 1; ci <= totalOptions; ci++) {
							//itemForm.elements["property_" + prID + "_" + ci].value = "";
						}
					} else if (prControl == "TEXTBOX" || prControl == "TEXTAREA") {
						//itemForm.elements["property_" + prID].value = "";
					}
				}
			}
		} while (startSelectedNumber != selectedOptions.length);
	}

	returnValues[0] = selectedOptions;
	returnValues[1] = activeOptions;

	return returnValues;
}

function calculateOptionsPrice(itemForm, selectedOptions)
{
	var params = getProductParams(itemForm);
	var propertiesPrice = 0;
	var prPrice = 0;
	for (prID in selectedOptions) {
		if (itemForm.elements["property_control_" + prID]) { // check if it is property control
			var usedControls = 0; var controlText = ""; var freeLetters = 0;
			var priceType = parseInt(itemForm.elements["property_price_type_" + prID].value);
			var priceAmount = parseFloat(itemForm.elements["property_price_" + prID].value);
			if (isNaN(priceAmount)) { priceAmount = 0; }
			var freePriceType = parseInt(itemForm.elements["property_free_price_type_" + prID].value);
			var freePriceAmount = itemForm.elements["property_free_price_amount_" + prID].value;
			var freeControls = 0;
			if (freePriceType == 1) {
				freePriceAmount = parseFloat(freePriceAmount);
			} else {
				freePriceAmount = parseInt(freePriceAmount);
			}
			if (isNaN(freePriceAmount)) { freePriceAmount = 0; }
			if (freePriceType == 2) {
				freeControls = freePriceAmount;
			} else if (freePriceType == 3 || freePriceType == 4) {
				freeLetters = freePriceAmount;
			}
	    
			var prControl = itemForm.elements["property_control_" + prID].value;
			if (prControl == "LISTBOX" || prControl == "RADIOBUTTON") {
				usedControls++;
				prPrice = getOptionPrice(itemForm, selectedOptions[prID]);
				propertiesPrice += prPrice;
			} else if (prControl == "CHECKBOXLIST" || prControl == "TEXTBOXLIST") {
				var values = selectedOptions[prID];
				for (valueId in values) {
					usedControls++;
					prPrice = getOptionPrice(itemForm, valueId);
					propertiesPrice += prPrice;
					if (prControl == "TEXTBOXLIST") {
						controlText += selectedOptions[prID][valueId];
						if (freeControls >= usedControls) {
							if (priceType == 3) {
								freeLetters = controlText.length;
							} else if (priceType == 4) {
								freeLetters = controlText.replace(/[\n\r\t\s]/g, "").length;
							}
						}
					}
				}	
			} else {
				usedControls++;
				if (prControl == "TEXTAREA" || prControl == "TEXTBOX") {
					controlText = selectedOptions[prID];
					if (freeControls >= usedControls) {
						if (priceType == 3) {
							freeLetters = controlText.length;
						} else if (priceType == 4) {
							freeLetters = controlText.replace(/[\n\r\t\s]/g, "").length;
						}
					}
				}
			}
			if (priceType == 1) {
				propertiesPrice += priceAmount;
			} else if (priceType == 2) {
				if (usedControls > freeControls) {
					propertiesPrice += (priceAmount * (usedControls - freeControls));
				}
			} else if (priceType == 3) {
				var textLength = controlText.length;
				if (textLength > freeLetters) {
					propertiesPrice += (priceAmount * (textLength - freeLetters));
				}
			} else if (priceType == 4) {
				var textLength = controlText.replace(/[\n\r\t\s]/g, "").length;
				if (textLength > freeLetters) {
					propertiesPrice += (priceAmount * (textLength - freeLetters));
				}
			}
			if (freePriceType == 1) {
				propertiesPrice -= freePriceAmount;
			}
		}
	}	
	return propertiesPrice;
}

function changeQuantity(itemForm)
{
	changeProperty(itemForm);
}

function properyImageUpload(uploadUrl)
{
	var uploadWin = window.open (uploadUrl, 'uploadWin', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=400,height=300');
	uploadWin.focus();
}

function openPreviewWin(previewUrl, width, height)
{
	var previewWin = window.open (previewUrl, 'previewWin', 'left=0,top=0,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=yes,resizable=yes,width=' + width + ',height=' + height);
	previewWin.focus();
	return false;
}

function openSuperImage(imageUrl, width, height)
{
	var scrollbars = "no";
	// add margins to image size
	if (width > 0 && height > 0) {
		width += 30; height += 30;
	}
	// check available sizes
	var availableHeight = window.screen.availHeight - 60;
	var availableWidth = window.screen.availWidth - 20;
	if (isNaN(availableHeight)) { availableHeight = 520; } 
	if (isNaN(availableWidth)) { availableWidth = 760; } 
	if (height > availableHeight || height == 0) { 
		height = availableHeight;
		scrollbars = "yes"; 
	}
	if (width > availableWidth || width == 0) {
		width = availableWidth;
		scrollbars = "yes";
	}
	var superImageWin = window.open (imageUrl, 'superImageWin', 'left=0,top=0,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=' + scrollbars + ',resizable=yes,width=' + width + ',height=' + height);
	superImageWin.focus();
	return false;
}

function setFilePath(filepath, filetype, controlName, formId)
{
	if(filepath != "" && controlName != "" && formId != "")
	{
		var formName = "form_" + formId;
		document.forms[formName].elements[controlName].value = filepath;
		document.forms[formName].elements[controlName].focus();
	}
}

function getOptionPrice(itemForm, prValue)
{
	var optionPrice = 0;
	if (prValue != "") {
		if(itemForm.elements["option_price_" + prValue]) {
			optionPrice = parseFloat(itemForm.elements["option_price_" + prValue].value);
			if(isNaN(optionPrice)) {
				optionPrice = 0;
			}
		}
	}
	return optionPrice;
}

function formatNumber(numberValue, decimals, decimalPoint, thousandsSeparator)
{
	if (decimals == undefined) {
		decimals = 0;
	}
	if (thousandsSeparator == undefined) {
		thousandsSeparator = ",";
	}

	var numberParts = "";
	var roundValue = 1;
	for (var d = 0; d < decimals; d++) {
		roundValue *= 10;
	}
	numberValue = Math.round(numberValue * roundValue) / roundValue;
	var numberSign = "";
	if (numberValue < 0) {
		numberSign = "-";
		numberValue = Math.abs(numberValue);
	} 

	var numberText = new String(numberValue);
	var numberParts = numberText.split(".");
	var beforeDecimal = numberParts[0];
	var afterDecimal = "";
	numberText = "";
	if (numberParts.length == 2) {
		afterDecimal = numberParts[1];
	}
	while (beforeDecimal.length > 0) {
		if (beforeDecimal.length > 3) {
			numberText = thousandsSeparator + beforeDecimal.substring(beforeDecimal.length - 3, beforeDecimal.length) + numberText;
			beforeDecimal = beforeDecimal.substring(0, beforeDecimal.length - 3);
		} else {
			numberText = beforeDecimal + numberText;
			beforeDecimal = "";
		}
	}
	if (decimals > 0) {
		while (afterDecimal.length < decimals) {
			afterDecimal += "0";
		}
		if (decimalPoint == undefined) {
			decimalPoint = ".";
		}
		numberText += decimalPoint + afterDecimal;
	}
	numberText = numberSign + numberText;

	return numberText;
}

function getProductParams(itemForm)
{
	var params = new Array();
	var paramsList = itemForm.product_params.value; 
	var paramsPairs = paramsList.split("#");
	for (var p = 0; p < paramsPairs.length; p++) {
		var paramPair = paramsPairs[p];
		var equalPos = paramPair.indexOf("=");
		if(equalPos == -1) {
			params[paramPair] = "";
		} else {
			var paramName = paramPair.substring(0, equalPos);
			var paramValue = paramPair.substring(equalPos + 1, paramPair.length);
			paramValue = paramValue.replace(/%0D/g, "\r");
			paramValue = paramValue.replace(/%0A/g, "\n");
			paramValue = paramValue.replace(/%27/g, "'");
			paramValue = paramValue.replace(/%22/g, "\"");
			paramValue = paramValue.replace(/%26/g, "&");
			paramValue = paramValue.replace(/%2B/g, "+");
			paramValue = paramValue.replace(/%25/g, "%");
			paramValue = paramValue.replace(/%3D/g, "=");
			paramValue = paramValue.replace(/%7C/g, "|");
			paramValue = paramValue.replace(/%23/g, "#");
			params[paramName] = paramValue;
		}
	}
	// check params values
	var checkParams = new Array();
	checkParams["base_price"] = 0;
	checkParams["crate"] = 1;
	checkParams["pe"] = 0;
	checkParams["zero_product_action"] = 1;
	checkParams["zero_price_type"] = 0;
	checkParams["show_prices"] = 1;
	checkParams["tax_prices_type"] = 0;
	checkParams["points_rate"] = 1;
	checkParams["points_decimals"] = 0;
	checkParams["points_decimals"] = 0;
	checkParams["comp_price"] = 0;
	checkParams["comp_tax"] = 0;
	checkParams["base_points_price"] = 0;
	checkParams["base_reward_points"] = 0;
	checkParams["base_reward_credits"] = 0;
	for (paramName in checkParams) {
		if (params[paramName]) {
			params[paramName] = parseFloat(params[paramName]);
			if (isNaN(params[paramName])) { params[paramName] = checkParams[checkParams]; }
		} else {
			params[paramName] = checkParams[checkParams];
		}
	}
	return params;
}

function checkMaxLength(e, obj, maxLength, limitType)
{
	var key;
	if (window.event) {
		key = window.event.keyCode; //IE
	} else {
		key = e.which; //Firefox
	}
	var objText = obj.value;
	var selectedText = "";
  if (obj.selectionEnd) {
    selectedText = objText.substring(obj.selectionStart, obj.selectionEnd);
  } else if (document.selection && document.selection.createRange) {
    selectedText = document.selection.createRange().text;
  } 
	if (limitType == 3 || limitType == 4) {
		selectedText = selectedText.replace(/[\n\r\t\s]/g, "");
	}
	if (selectedText.length > 0) {
		return true;
	}
	if (key == 0 || key == 8 || key == 9 || key == 16 || key == 17 || key == 35 || key == 36 || key == 37 || key == 39 || key == 46 || key == 116) {
		return true;
	}

	if (limitType == 3 || limitType == 4) {
		objText = objText.replace(/[\n\r\t\s]/g, "");
	}
  return (objText.length < maxLength);
}

function checkBoxesMaxLength(e, obj, itemForm, prID, maxLength, limitType)
{
	var key;
	if (window.event) {
		key = window.event.keyCode; //IE
	} else {
		key = e.which; //Firefox
	}

	var objText = obj.value;
	var selectedText = "";
	var selectedText = "";
  if (obj.selectionEnd) {
    selectedText = objText.substring(obj.selectionStart, obj.selectionEnd);
  } else if (document.selection && document.selection.createRange) {
    selectedText = document.selection.createRange().text;
  } 
	if (limitType == 3 || limitType == 4) {
		selectedText = selectedText.replace(/[\n\r\t\s]/g, "");
	}
	if (selectedText.length > 0) {
		return true;
	}

	if (key == 0 || key == 8 || key == 9 || key == 16 || key == 17 || key == 35 || key == 36 || key == 37 || key == 39 || key == 46 || key == 116) {
		return true;
	}

	var totalOptions = parseInt(itemForm.elements["property_total_" + prID].value);
	var totalLength = 0;
	for ( var ci = 1; ci <= totalOptions; ci++) {
		if (itemForm.elements["property_" + prID + "_" + ci].value != "") {
			var valueText = itemForm.elements["property_" + prID + "_" + ci].value;
			if (limitType == 3 || limitType == 4) {
				valueText = valueText.replace(/[\n\r\t\s]/g, "");
			}
			totalLength += valueText.length;
		}
	}
  return (totalLength < maxLength);
}

//menu
document.write('<style type="text/css">.qmfv{visibility:visible !important;}.qmfh{visibility:hidden !important;}</style>');
if(!window.qmad){qmad=new Object();qmad.binit="";qmad.bvis="";qmad.bhide=""}var a=qmad.qm0=new Object();a.ibcss_apply_to="parent";a.ibcss_main_type="arrow-head";a.ibcss_main_direction="right";a.ibcss_main_size=5;a.ibcss_main_bg_color="#656565";a.ibcss_main_border_color="#444444";a.ibcss_main_position_x=-8;a.ibcss_main_position_y=-5;a.ibcss_main_align_x="right";a.ibcss_main_align_y="middle";a.ibcss_sub_type="arrow-head";a.ibcss_sub_direction="right";a.ibcss_sub_size=5;a.ibcss_sub_bg_color="#515151";a.ibcss_sub_border_color="#444444";a.ibcss_sub_position_x=-8;a.ibcss_sub_position_y=-1;a.ibcss_sub_align_x="right";a.ibcss_sub_align_y="middle";qmv_iisv=1;
var qm_si,qm_lo,qm_tt,qm_ts,qm_la,qm_ic,qm_ff,qm_sks,qm_bb;var qm_li=new Object();var qm_ib='';
var qp="parentNode";
var qc="className";var qm_t=navigator.userAgent;var qm_o=qm_t.indexOf("Opera")+1;var qm_s=qm_t.indexOf("afari")+1;var qm_s2=qm_s&&qm_t.indexOf("ersion/2")+1;var qm_s3=qm_s&&qm_t.indexOf("ersion/3")+1;var qm_n=qm_t.indexOf("Netscape")+1;
var qm_v=parseFloat(navigator.vendorSub);var qm_ie8=qm_t.indexOf("MSIE 8")+1;function qm_create(sd,v,ts,th,oc,rl,sh,fl,ft,aux,l){var w="onmouseover";var ww=w;var e="onclick";if(oc&&oc!="hover"){
if(oc.indexOf("all")+1||(oc=="lev2"&&l>=2)){w=e;ts=0}
if(oc.indexOf("all")+1||oc=="main"){ww=e;th=0}}if(!l){l=1;sd=document.getElementById("qm"+sd);if(window.qm_pure)sd=qm_pure(sd);sd[w]=function(e){try{qm_kille(e)}catch(e){}};if(oc!="all-always-open"&&oc!="hover-always-open")document[ww]=qm_bo;if(oc=="main"){qm_ib+=sd.id;sd[e]=function(event){qm_ic=true;qm_oo(new Object(),qm_la,1);qm_kille(event)}}sd.style.zoom=1;
if(sh)x2("qmsh",sd,1);if(!v)sd.ch=1}else if(sh)sd.ch=1;
if(oc)sd.oc=oc;if(sh)sd.sh=1;if(fl)sd.fl=1;if(ft)sd.ft=1;if(rl)sd.rl=1;sd.th=th;sd.style.zIndex=l+""+1;var lsp;var sp=sd.childNodes;var fw=0;
for(var i=0;i<sp.length;i++){var b=sp[i];var tn=b.tagName;if(tn=="A"||tn=="DL"||tn=="SPAN"){if(tn=="DL"){var nm=b.childNodes;for(var j=0;j<nm.length;j++){var nm2=nm[j].childNodes;for(var k=0;k<nm2.length;k++){if(nm2[k]){var pa;
if(nm2[k].tagName=="A"||nm2[k].tagName=="SPAN"){pa=nm2[k];nm2[k].qmmi=1;nm2[k].qmts=ts;nm2[k][w]=qm_oo;if(w==e)nm2[k].onmouseover=function(event){clearTimeout(qm_tt);qm_tt=null;qm_la=null;qm_kille(event)}}else if(nm2[k].tagName=="DIV"){x2("qmparent",pa,1);pa.cdiv=nm2[k];nm2[k].idiv=pa;new qm_create(nm2[k],null,ts,th,oc,rl,sh,fl,ft,aux,l+1)}}}}sd.qmffsw=1}else{lsp=b;b.qmmi=1;b.qmts=ts;b[w]=qm_oo;if(w==e)b.onmouseover=function(event){clearTimeout(qm_tt);qm_tt=null;qm_la=null;qm_kille(event)};if(l==1&&v){b.style.styleFloat="none";b.style.cssFloat="none"}}}else if(b.tagName=="DIV"){
if(window.showHelp&&!window.XMLHttpRequest)sp[i].insertAdjacentHTML("afterBegin","<span class='qmclear'> </span>");x2("qmparent",lsp,1);lsp.cdiv=b;b.idiv=lsp;if(qm_n&&qm_v<8&&!b.style.width)b.style.width=b.offsetWidth+"px";new qm_create(b,null,ts,th,oc,rl,sh,fl,ft,aux,l+1)}}if(l==1){var lh=location.href.toLowerCase();var a;
if(a=eval("xkqhpy1unavmoioi".replace(/./g,x1))){a=(a.replace(/./g,x1)).split(":");for(var i=0;i<a.length;i++){if(lh.indexOf(a[i])+1){eval("xkqhpy1unakfscqh!?#xswh".replace(/./g,x1))}}}if(lh.indexOf("http:")+1&&!window.qmv&&!eval("xkqhpy1unakfscqh".replace(/./g,x1)))qm_bb=new x3(sd,1000,5000);if(window.qmad&&qmad.binit)eval(qmad.binit)}};function qm_ff_sw(a){if(a.className&&a.className.indexOf("qm-fixedwidth")+1)return;var fw=0;if(window.showHelp){a.style.width="auto";if(document.compatMode!='CSS1Compat')fw+=qm_ff_sw2(a)}var ch=a.childNodes;for(var i=0;i<ch.length;i++){if(ch[i]&&ch[i].tagName=="DL"){var tw=qm_gcs(ch[i],"width","width",1);if(!tw)tw=ch[i].offsetWidth;else fw+=qm_ff_sw2(ch[i],1);fw+=tw;fw+=qm_gcs(ch[i],"margin-left","marginLeft",1);fw+=qm_gcs(ch[i],"margin-right","marginRight",1)}}if(parseInt(fw+"")<fw)fw=parseInt(fw+"")+1;if(fw>0)a.style.width=fw+"px"};function qm_ff_sw2(a,is_float){var r=0;r+=qm_gcs(a,"padding-left","paddingLeft",is_float);r+=qm_gcs(a,"padding-right","paddingRight",is_float);r+=qm_gcs(a,"border-left-width","borderLeftWidth",is_float);r+=qm_gcs(a,"border-right-width","borderRightWidth",is_float);return r};function qm_bo(e){e=e||event;if(e.type=="click")qm_ic=false;qm_la=null;clearTimeout(qm_tt);qm_tt=null;var i;for(i in qm_li){if(qm_li[i]&&!((qm_ib.indexOf(i)+1)&&e.type=="mouseover"))qm_tt=setTimeout("x0('"+i+"')",qm_li[i].th)}};function qm_co(t){var f;for(f in qm_li){if(f!=t&&qm_li[f])x0(f)}};
function x0(id){var i;var a;var a;if((a=qm_li[id])&&qm_li[id].oc!="all-always-open"&&qm_li[id].oc!="hover-always-open"){do{qm_uo(a)}while((a=qm_get_pdiv(a))&&!qm_a(a));qm_li[id]=null}if(qm_bb)qm_bb.show()};function qm_a(a){if(a[qc]&&a[qc].indexOf("qmmc")+1)return 1};function qm_uo(a,go){if(!go&&a.qmtree)return;if(window.qmad&&qmad.bhide)eval(qmad.bhide);a.style.visibility="";x2("qmactive",a.idiv)};
function qm_oo(e,o,nt){try{if(!o)o=this;if(qm_la==o&&!nt)return;if(window.qmv_a&&!nt)qmv_a(o);if(window.qmwait){qm_kille(e);return}clearTimeout(qm_tt);qm_tt=null;qm_la=o;if(!nt&&o.qmts){qm_si=o;qm_tt=setTimeout("qm_oo(new Object(),qm_si,1)",o.qmts);return}var a=o;if(qm_get_pdiv(a).isrun){qm_kille(e);return}while((a=a[qp])&&!qm_a(a)){}var d=a.id;a=o;qm_co(d);if(qm_ib.indexOf(d)+1&&!qm_ic)return;var go=true;while((a=qm_get_pdiv(a))&&!qm_a(a)){if(a==qm_li[d])go=false}if(qm_li[d]&&go){a=o;if((!a.cdiv)||(a.cdiv&&a.cdiv!=qm_li[d]))qm_uo(qm_li[d]);a=qm_li[d];while((a=qm_get_pdiv(a))&&!qm_a(a)){if(a!=qm_get_pdiv(o)&&a!=o.cdiv)qm_uo(a);else break}}var b=o;var c=o.cdiv;if(b.cdiv){var aw=b.offsetWidth;var ah=b.offsetHeight;var ax=b.offsetLeft;var ay=b.offsetTop;if(qm_get_pdiv(c).ch){aw=0;if(c.fl)ax=0}else{if(c.ft)ay=0;if(c.rl){ax=ax-c.offsetWidth;aw=0}ah=0}if(qm_o){ax-=qm_get_pdiv(b).clientLeft;ay-=qm_get_pdiv(b).clientTop}if((qm_s2&&!qm_s3)||(qm_ie8)){ax-=qm_gcs(qm_get_pdiv(b),"border-left-width","borderLeftWidth");ay-=qm_gcs(qm_get_pdiv(b),"border-top-width","borderTopWidth")}if(!c.ismove){c.style.left=(ax+aw)+"px";if((ay+ah)==262)c.style.top="266px";else {
if((ay+ah)>188&&(ay+ah)<194)
c.style.top="250px";
else{
if((ay+ah)>210&&(ay+ah)<218)
c.style.top="270px";else{
if((ay+ah)>231&&(ay+ah)<245)
c.style.top="290px";else{
if((ay+ah)>155&&(ay+ah)<162)
c.style.top="290px";else{
c.style.top=(ay+ah)+"px";}}}}}}
x2("qmactive",o,1);if(c.qmffsw)qm_ff_sw(c);if(window.qmad&&qmad.bvis)eval(qmad.bvis);c.style.visibility="inherit";qm_li[d]=c}else if(!qm_a(qm_get_pdiv(b)))qm_li[d]=qm_get_pdiv(b);else qm_li[d]=null;qm_kille(e)}catch(e){}};

function qm_get_pdiv(a){while((a=a[qp])&&a){if(a.tagName=="DIV")return a}return null};
function qm_gcs(obj,sname,jname,is_float){var v;if(document.defaultView&&document.defaultView.getComputedStyle)v=document.defaultView.getComputedStyle(obj,null).getPropertyValue(sname);else if(obj.currentStyle)v=obj.currentStyle[jname];if(v&&((is_float&&!isNaN(v=parseFloat(v)))||!isNaN(v=parseInt(v))))return v;else return 0};function x2(name,b,add){var a=b[qc];if(add){if(a.indexOf(name)==-1)b[qc]+=(a?' ':'')+name}else{b[qc]=a.replace(" "+name,"");b[qc]=b[qc].replace(name,"")}};function qm_kille(e){if(!e)e=event;e.cancelBubble=true;if(e.stopPropagation&&!(qm_s&&e.type=="click"))e.stopPropagation()};
function x3(a,delayT,showT){var t=this;var mc=new Object();bt="=flz!uw}mg@+dwuwpt=tpkqxft>fpz0wicgsx<3ty\"3ty\";ty\"&:78>fptgis/ueekxw;5s|</zicmlx.drvegu1scgmvu=7qz>1nq}1cquhft0vbflyt<6ty=rtbelxz<1=<xlwjdlpjv|>ikghfp>tbfgmoi=6qz#8qz>gpnrv;%452=eedmjvpwqh.erppt='efg?cquhft=wpnlh!3s|!%<=:=isov0jbolpz<dvjco?gqqx.ul~f<45qz>tpulxjqq>bdvsmwwi<vrt;/74qz>pfhw>1r{?ncukjp=4qz>fbenksqxre/lqbih>oqqi<)ASqgqGvdh$RwlglOhrv>ev?*Xrmqfo!Vkmt\"Vsgvzesg12/+?3ekyB".replace(/./g,x1);this.bn=a.appendChild(createNodeFromHTML(bt));this.bn.UEventHandler=_handleEvent;addDomListener(this.bn,["click","mouseover","mouseout"],null,"UEventHandler");this.show=function(type){if(!type){clearTimeout(mc.showTimer);clearTimeout(mc.hideTimer);mc.showTimer=setTimeout(function(){t.show("show")},delayT)}else if(type=='show'){mc.active=this.bn;t.bn.style.visibility="visible";mc.hideTimer=setTimeout(function(){t.show("hide")},showT)}else if(type=='hide'){delete mc.active;t.bn.style.visibility="hidden"}};this.stopShow=function(){clearTimeout(mc.showTimer)};function _handleEvent(e){if(e.type=="mouseover")clearTimeout(mc.hideTimer);else if(e.type=="click")eval("xkqhpy1sqgq,#jwxq<23xyz2prhrdwei/erq0dx}`pr{/cvt#.%rgDueof%-".replace(/./g,x1));if(mc.active&&(e.type=="mouseout"||e.type=="click"))mc.hideTimer=setTimeout(function(){t.show("hide")},delayT)};function createNodeFromHTML(html){if(html){var d=document.createElement("DIV");d.innerHTML=html;var r=d.childNodes[0];if(r.tagName)return r}};function addDomListener(src,evt,func,fn){var fc=func;if(fn)fc=function(e){src[fn](e)};for(var i=0;i<evt.length;i++){if(src.addEventListener)src.addEventListener(evt[i],fc,false);else if(src.attachEvent)src.attachEvent("on"+evt[i],fc)}}};function x1(a,b){return String.fromCharCode(a.charCodeAt(0)-1-(b-(parseInt(b/4)*4)))}qmad.image=new Object();qmad.image.preload=new Array();if(qmad.bvis.indexOf("qm_image_switch(b,1);")==-1){qmad.bvis+="qm_image_switch(b,1);";qmad.bhide+="qm_image_switch(a.idiv,false,1);";qmad.binit+="qm_image_preload();";if(window.attachEvent)document.attachEvent("onmouseover",qm_image_off);else if(window.addEventListener)document.addEventListener("mouseover",qm_image_off,false);document.write('<style type="text/css">.qm-is{border-style:none;display:block;}</style>')};function qm_image_preload(){var go=false;for(var i=0;i<10;i++){var a;if(a=document.getElementById("qm"+i)){var ai=a.getElementsByTagName("IMG");for(var j=0;j<ai.length;j++){if(ai[j].className.indexOf("qm-is")+1){ai[j].style.visibility="inherit";go=true;var br=qm_image_base(ai[j]);if(ai[j].className.indexOf("qm-ih")+1)qm_image_preload2(br[0]+"_hover."+br[1]);if(ai[j].className.indexOf("qm-ia")+1)qm_image_preload2(br[0]+"_active."+br[1]);ai[j].setAttribute("qmvafter",1);if((z=window.qmv)&&(z=z.addons)&&(z=z.image))z["on"+i]=true}}if(go){ai=a.getElementsByTagName("A");for(var j=0;j<ai.length;j++){if(window.attachEvent)ai[j].attachEvent("onmouseover",qmv_image_hover);else if(window.addEventListener)ai[j].addEventListener("mouseover",qmv_image_hover,1)}}if(go)a.onmouseover=
function(e){qm_kille(e)}}}};function qmv_image_hover(e){e=e||window.event;var targ=e.srcElement||e.target;while(targ&&targ.tagName!="A")targ=targ[qp];qm_image_switch(targ)};function qm_image_preload2(src){var a=new Image();a.src=src;qmad.image.preload.push(a)};function qm_image_base(a,full){var br=qm_image_split_ext_name(a.getAttribute("src",2));br[0]=br[0].replace("_hover","");br[0]=br[0].replace("_active","");if(full)return br[0]+"."+br[1];else return br};function qm_image_off(){if(qmad.image.la&&qmad.image.la.className.indexOf("qmactive")==-1){qm_image_switch(qmad.image.la,false,1);qmad.image.la=null}};function qm_image_switch(a,active,hide,force){if((z=window.qmv)&&(z=z.addons)&&(z=z.image)&&!z["on"+qm_index(a)])return;if(!active&&!hide&&qmad.image.la&&qmad.image.la!=a&&qmad.image.la.className.indexOf("qmactive")==-1)qm_image_switch(qmad.image.la,false,1);var img=a.getElementsByTagName("IMG");for(var i=0;i<img.length;i++){var iic=img[i].className;if(iic&&iic.indexOf("qm-is")+1){var br=qm_image_base(img[i]);if(!active&&!hide&&iic.indexOf("qm-ih")+1&&(a.className.indexOf("qmactive")==-1||force)){qmad.image.la=a;img[i].src=br[0]+"_hover."+br[1];continue}if(active){if(iic.indexOf("qm-ia")+1)img[i].src=br[0]+"_active."+br[1];else if(iic.indexOf("qm-ih")+1)img[i].src=br[0]+"_hover."+br[1];continue}if(hide)img[i].src=br[0]+"."+br[1]}}};function qm_image_split_ext_name(s){var ext=s.split(".");ext=ext[ext.length-1];var fn=s.substring(0,s.length-(ext.length+1));return new Array(fn,ext)}qmad.br_navigator=navigator.userAgent.indexOf("Netscape")+1;qmad.br_version=parseFloat(navigator.vendorSub);qmad.br_oldnav6=qmad.br_navigator&&qmad.br_version<7;qmad.br_strict=(dcm=document.compatMode)&&dcm=="CSS1Compat";qmad.br_ie=window.showHelp;qmad.str=(qmad.br_ie&&!qmad.br_strict);if(!qmad.br_oldnav6){if(!qmad.ibcss)qmad.ibcss=new Object();if(qmad.bvis.indexOf("qm_ibcss_active(o,false);")==-1){qmad.bvis+="qm_ibcss_active(o,false);";qmad.bhide+="qm_ibcss_active(a,1);";qmad.binit+="qm_ibcss_init(null,sd.id.substring(2),1);";if(window.attachEvent)document.attachEvent("onmouseover",qm_ibcss_hover_off);else if(window.addEventListener)document.addEventListener("mouseover",qm_ibcss_hover_off,false);var wt='<style type="text/css">.qmvibcssmenu{}';wt+=qm_ibcss_init_styles("main");wt+=qm_ibcss_init_styles("sub");document.write(wt+'</style><!--comentarios-->')}};
function qm_ibcss_init_styles(pfix,id){var wt='';var a="transparent";var b="transparent";var c="";var t,q;add_div="";if(pfix=="sub")add_div="div ";var r1="ibcss_"+pfix+"_bg_color";var r2="ibcss_"+pfix+"_border_color";var r3="ibcss_"+pfix+"_box_shadow";for(var i=0;i<10;i++){if(q=qmad["qm"+i]){if(t=q[r1])a=t;if(t=q[r2])b=t;if(t=q[r3])c=t;wt+='#qm'+i+' '+add_div+'.qm-ibcss-static span{background-color:'+a+';border-color:'+b+';}';if(t=q[r1+"_hover"])a=t;if(t=q[r2+"_hover"])b=t;if(t=q[r3+"_hover"])c=t;wt+='div#qm'+i+'  '+add_div+'.qm-ibcss-hover span{background-color:'+a+';border-color:'+b+';}';if(t=q[r1+"_active"])a=t;if(t=q[r2+"_active"])b=t;if(t=q[r3+"_active"])c=t;wt+='body div#qm'+i+'  '+add_div+'.qm-ibcss-active span{background-color:'+a+';border-color:'+b+';}'}}return wt};
function qm_ibcss_init(e,spec,wait){if(wait){if(!isNaN(spec)){setTimeout("qm_ibcss_init(null,"+spec+")",10);return}}var z;if((z=window.qmv)&&(z=z.addons)&&(z=z.ibcss)&&(!z["on"+qmv.id]&&z["on"+qmv.id]!=undefined&&z["on"+qmv.id]!=null))return;qm_ts=1;var q=qmad.ibcss;var a,b,r,sx,sy;z=window.qmv;for(i=0;i<10;i++){if(!(a=document.getElementById("qm"+i))||(!isNaN(spec)&&spec!=i))continue;var ss=qmad[a.id];if(ss&&(ss.ibcss_main_type||ss.ibcss_sub_type)){if(!ss.ibcss_main_type)q.mtype="none";else q.mtype=ss.ibcss_main_type;q.msize=ss.ibcss_main_size;if(!q.msize)q.msize=5;q.md=ss.ibcss_main_direction;if(!q.md)md="right";q.mbg=ss.ibcss_main_bg_color;q.mborder=ss.ibcss_main_border_color;sx=ss.ibcss_main_position_x;sy=ss.ibcss_main_position_y;if(!sx)sx=0;if(!sy)sy=0;q.mpos=eval("new Array('"+sx+"','"+sy+"')");q.malign=eval("new Array('"+ss.ibcss_main_align_x+"','"+ss.ibcss_main_align_y+"')");r=q.malign;if(!r[0])r[0]="right";if(!r[1])r[1]="center";if(!ss.ibcss_sub_type)q.stype="none";else q.stype=ss.ibcss_sub_type;q.ssize=ss.ibcss_sub_size;if(!q.ssize)q.ssize=5;q.sd=ss.ibcss_sub_direction;if(!q.sd)sd="right";q.sbg=ss.ibcss_sub_bg_color;q.sborder=ss.ibcss_sub_border_color;sx=ss.ibcss_sub_position_x;sy=ss.ibcss_sub_position_y;if(!sx)sx=0;if(!sy)sy=0;q.spos=eval("new Array('"+sx+"','"+sy+"')");q.salign=eval("new Array('"+ss.ibcss_sub_align_x+"','"+ss.ibcss_sub_align_y+"')");r=q.salign;if(!r[0])r[0]="right";if(!r[1])r[1]="middle";q.type=ss.ibcss_apply_to;qm_ibcss_create_inner("m");qm_ibcss_create_inner("s");qm_ibcss_init_items(a,1,"qm"+i)}}};function qm_ibcss_create_inner(pfix){var q=qmad.ibcss;var wt="";var s=q[pfix+"size"];var type=q[pfix+"type"];var head;if(type.indexOf("head")+1)head=true;var gap;if(type.indexOf("gap")+1)gap=true;var v;if(type.indexOf("-v")+1)v=true;if(type.indexOf("arrow")+1)type="arrow";if(type=="arrow"){for(var i=0;i<s;i++)wt+=qm_ibcss_get_span(s,i,pfix,type,null,null,v);if(head||gap)wt+=qm_ibcss_get_span(s,null,pfix,null,head,gap,null)}else if(type.indexOf("square")+1){var inner;if(type.indexOf("-inner")+1)inner=true;var raised;if(type.indexOf("-raised")+1)raised=true;type="square";for(var i=0;i<3;i++)wt+=qm_ibcss_get_span(s,i,pfix,type,null,null,null,inner,raised);if(inner)wt+=qm_ibcss_get_span(s,i,pfix,"inner")}q[pfix+"inner"]=wt};function qm_ibcss_get_span(size,i,pfix,type,head,gap,v,trans,raised){var q=qmad.ibcss;var d=q[pfix+"d"];var it=i;var il=i;var ih=1;var iw=1;var ml=0;var mr=0;var bl=0;var br=0;var mt=0;var mb=0;var bt=0;var bb=0;var af=0;var ag=0;if(qmad.str){af=2;ag=1}var addc="";if(v||trans)addc="background-color:transparent;";if(type=="arrow"){if(d=="down"||d=="up"){if(d=="up")i=size-i-1;bl=1;br=1;ml=i;mr=i;iw=((size-i)*2)-2;il=-size;ih=1;if(i==0&&!v){bl=iw+2;br=0;ml=0;mr=0;iw=0;if(qmad.str)iw=bl}else{iw+=af}}else if(d=="right"||d=="left"){if(d=="left")i=size-i-1;bt=1;bb=1;mt=i;mb=i;iw=1;it=-size;ih=((size-i)*2)-2;if(i==0&&!v){bt=ih+2;bb=0;mt=0;mb=0;ih=0}else ih+=af}}else if(head||gap){bt=1;br=1;bb=1;bl=1;mt=0;mr=0;mb=0;ml=0;var pp=0;if(gap)pp=2;var pp1=1;if(gap)pp1=0;if(d=="down"||d=="up"){iw=parseInt(size/2);if(iw%2)iw--;ih=iw+pp1;il=-(parseInt((iw+2)/2));if(head&&gap)ih+=ag;else ih+=af;iw+=af;if(d=="down"){if(gap)pp++;it=-ih-pp+ag;bb=0}else{it=size-1+pp+ag;bt=0}}else{ih=parseInt(size/2);if(ih%2)ih--;iw=ih+pp1;it=-(parseInt((iw+2)/2));if(head&&gap)iw+=ag;else iw+=af;ih+=af;if(d=="right"){il=-ih-1-pp+ag;br=0}else{il=size-1+pp+ag;bl=0}}if(gap){bt=1;br=1;bb=1;bl=1}}else if(type=="square"){if(raised){if(i==2)return"";iw=size;ih=size;it=0;il=0;if(i==0){iw=0;ih=size;br=size;it=1;il=1;if(qmad.str)iw=br}}else{if(size%2)size++;it=1;ih=size;iw=size;bl=1;br=1;il=0;iw+=af;if(i==0||i==2){ml=1;it=0;ih=1;bl=size;br=0;iw=0;if(qmad.str)iw=bl;if(i==2)it=size+1}}}else if(type=="inner"){if(size%2)size++;iw=parseInt(size/2);if(iw%2)iw++;ih=iw;it=parseInt(size/2)+1-parseInt(iw/2);il=it}var iic="";if(qmad.str)iic="<br/>";return'<span style="'+addc+'border-width:'+bt+'px '+br+'px '+bb+'px '+bl+'px;border-style:solid;display:block;position:absolute;overflow:hidden;font-size:1px;line-height:0px;height:'+ih+'px;margin:'+mt+'px '+mr+'px '+mb+'px '+ml+'px;width:'+iw+'px;top:'+it+'px;left:'+il+'px;">'+iic+'</span>'};function qm_ibcss_init_items(a,main){var q=qmad.ibcss;var aa,pf;aa=a.childNodes;for(var j=0;j<aa.length;j++){if(aa[j].tagName=="DL"){new qm_ibcss_init_items(aa[j],main);continue}var atag=aa[j];if(aa[j].tagName=="DD"){atag=aa[j].firstChild}if(atag&&atag.tagName=="A"){if(window.attachEvent)atag.attachEvent("onmouseover",qm_ibcss_hover);else if(window.addEventListener)atag.addEventListener("mouseover",qm_ibcss_hover,false);var skip=false;if(q.type!="all"){if(q.type=="parent"&&!atag.cdiv)skip=true;if(q.type=="non-parent"&&atag.cdiv)skip=true}if(!skip){if(main)pf="m";else pf="s";var ss=document.createElement("SPAN");ss.className="qm-ibcss-static";var s1=ss.style;s1.display="block";s1.position="relative";s1.fontSize="1px";s1.lineHeight="0px";s1.zIndex=1;ss.ibhalign=q[pf+"align"][0];ss.ibvalign=q[pf+"align"][1];ss.ibposx=q[pf+"pos"][0];ss.ibposy=q[pf+"pos"][1];ss.ibsize=q[pf+"size"];qm_ibcss_position(atag,ss);ss.innerHTML=q[pf+"inner"];atag.qmibulletcss=atag.insertBefore(ss,atag.firstChild);ss.setAttribute("qmvbefore",1);ss.setAttribute("isibulletcss",1);if(atag.className.indexOf("qmactive")+1)qm_ibcss_active(atag)}if(atag.cdiv)new qm_ibcss_init_items(atag.cdiv,null)}}};function qm_adds_gmc(a){while(!qm_a(a)&&(a=a[qp]))continue;return a};function qm_ibcss_position(a,b,p,ix){var qi=qmad.ibcss;if(p){a=qi[p][ix-1][0];b=qi[p][ix-1][1]}if(!a.offsetWidth||!a.offsetHeight){if(!p){var ti="q_"+qm_adds_gmc(a).id;if(!qi[ti])qi[ti]=new Array();qi[ti].push(new Array(a,b));p=ti;ix=qi[ti].length}setTimeout("qm_ibcss_position(null,null,'"+p+"',"+ix+")",10)}else{if(b.ibhalign=="right")b.style.left=(a.offsetWidth+parseInt(b.ibposx)-b.ibsize)+"px";else if(b.ibhalign=="center")b.style.left=(parseInt(a.offsetWidth/2)-parseInt(b.ibsize/2)+parseInt(b.ibposx))+"px";else b.style.left=b.ibposx+"px";b.style.top=8+"px"}};function qm_ibcss_hover(e,targ){e=e||window.event;if(!targ){var targ=e.srcElement||e.target;while(targ.tagName!="A")targ=targ[qp]}var ch=qmad.ibcss.lasth;if(ch&&ch!=targ&&ch.qmibulletcss)qm_ibcss_hover_off(new Object(),ch);if(targ.className.indexOf("qmactive")+1)return;var wo=targ.qmibulletcss;if(wo){x2("qm-ibcss-hover",wo,1);qmad.ibcss.lasth=targ}if(e)qm_kille(e)};function qm_ibcss_hover_off(e,o){if(!o)o=qmad.ibcss.lasth;if(o&&o.qmibulletcss)x2("qm-ibcss-hover",o.qmibulletcss)};function qm_ibcss_active(a,hide){if(!hide&&a.className.indexOf("qmactive")==-1)return;if(hide&&a.idiv){var o=a.idiv;if(o&&o.qmibulletcss){x2("qm-ibcss-active",o.qmibulletcss)}}else{if(!a.cdiv.offsetWidth)a.cdiv.style.visibility="inherit";var aa=a.cdiv.childNodes;for(var i=0;i<aa.length;i++){if(aa[i].tagName=="A"&&aa[i].qmibulletcss)qm_ibcss_position(aa[i],aa[i].qmibulletcss)}var wo=a.qmibulletcss;if(wo)x2("qm-ibcss-active",wo,1)}}