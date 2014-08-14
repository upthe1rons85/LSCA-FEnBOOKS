<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="LSCA_FEnBOOKS.index" MasterPageFile="~/index.Master"%>

<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">
    <script type="text/javascript" src="LSCA-FEnBOOKS/js/fun.js"></script>
 <style type="text/css">input.styled { display: none; } select.styled { position: relative; width: 190px; opacity: 0; filter: alpha(opacity=0); z-index: 3; } .disabled { opacity: 0.5; filter: alpha(opacity=50); }</style>
 <style type="text/css">
			#show-case
			{
				box-shadow:1px 1px 5px 2px #0d456d;
				border-radius:5px;
				height:270px;
				margin:10px auto;
				width:600px;
			}
			.img
			{
				   position:absolute;
				   width:600px;
				   height:270px;
			}
			.imag
			{
				  
				   width:350px;
				   height:200px;
			}
		</style>


<!-- Aqui empieza la parte del contenido central -->
<div class="mainContentBgr">
<div class="mainContent">	
	<div class="block-offers centrarVerticalContenido"  id="div_id_tab_1">
<div class="block offersBlockOut">
			<div id="offers" class="blockTD">
			<div id="show_image_all" class="popUpImg"></div>
			<div id="example4" class="offersCarouselBlock flotandoL">
<div class="bx_container" style="width: 99%; overflow: hidden; margin-left: 70px; margin-right: 0px;">
	
<!-- Aqui se muestran las portadas de libros dividido en 3 partes-->  	
<div id="recomendaciones">
<ul id="carrouselRecomendaciones">
	<li style="float: left; list-style: none; margin-right: 0px;">
	<div id="recomendaciones1" class="recostyle">
	<div class="recostyle">
	<table>
	<tbody>
	<tr>
	<td>
	<div class="Estilo1">
	<h1>Mas Vendidos</h1>
	</div>
	</td>
	</tr>
	<tr>
	<td class="upperDeck">
	<ul class="thumb">
		<li class="fancyThumb" style="margin-left: -10px;"><a href="Libro58.aspx"><img title="Bajo la Misma Estrella" src="LSCA-FEnBOOKS/imagenes/bajo.jpg" alt="John Green" width="318" height="500"></a><div class="itemCaptionOuter"><div class="carouselItemsCaption"><span class="title"><a href="../libreria/9786071130525/memorial-del-engano/volpi-jorge/">Jorge Volpi</a></span><br><span class="editorialRelacionados">Memorial del enga√±o</span></div></div></li>
		<li class="fancyThumb"><a href="Libro59.aspx"><img title="Ladrona de Libros" src="LSCA-FEnBOOKS/imagenes/lad.jpg" alt="Markus Zuzak" height="479" width="314" /></a></li>
		<li class="fancyThumb"><a href="Libro60.aspx"><img title="Leal" src="LSCA-FEnBOOKS/imagenes/leal.jpg" alt="Veronica Roth" height="500" width="356" /></a></li>
		<li class="fancyThumb"><a href="Libro61.aspx"><img title="CeroCeroCero" src="LSCA-FEnBOOKS/imagenes/000.jpg" alt="Roberto Saviano" height="500" width="318" /></a></li>
		<li class="fancyThumb"><a href="Libro62.aspx"><img title="Maze Runner: Correr o Morir" src="LSCA-FEnBOOKS/imagenes/maze.jpg" alt="James Dashner" height="220" width="143" /></a></li>
		<li class="fancyThumb"><a href="Libro63.aspx"><img title="Tokio Blues: Norwegian Wood" src="LSCA-FEnBOOKS/imagenes/tokio.jpg" alt="Haruki Murakami" height="500" width="304" /></a></li>
	</ul>
	</td>
	</tr>
	<tr>
	<td>
	<div class="Estilo2">
	<h2>Sagas</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="centerDeck">
	<ul class="thumb">
	<li class="fancyThumb"><a href="Libro01.aspx"><img title="Cancion de Hielo y Fuego: Juego de Tronos" src="LSCA-FEnBOOKS/imagenes/CHF1.jpg" alt="George R.R. Martin" height="960" width="811" /></a></li>
	<li class="fancyThumb"><a href="libLOTR.aspx"><img title="El SeÒor de los Anillos: La Comunidad del Anillo" src="LSCA-FEnBOOKS/imagenes/LOTR1.jpg" alt="Tolkien" height="500" width="312" /></a></li>
	<li class="fancyThumb"><a href="Libro03.aspx"><img src="LSCA-FEnBOOKS/imagenes/HP1.jpg" alt="J.K. Rowling" title="Harry Potter y La Piedra Filosofal" height="500" width="427" /></a></li>
	<li class="fancyThumb"><a href="Libro04.aspx"><img title="Los Juegos del Hambre" src="LSCA-FEnBOOKS/imagenes/HG1.jpg" alt="Suzanne Collins;" height="320" width="222" /></a></li>
	<li class="fancyThumb"><a href="Libro05.aspx"><img src="LSCA-FEnBOOKS/imagenes/N1.jpg" alt="C.S. Lewis" title="Narnia: El Leon, La Bruja y el Armario" height="320" width="273" /></a></li>
	<li class="fancyThumb"><a href="Libro06.aspx"><img title="Cazadores de Sombras: Ciudad de Hueso" src="LSCA-FEnBOOKS/imagenes/CS1.jpg" alt="Tom Tykwer" height="237" width="168" /></a></li>
	</ul>
	</td>
	</tr>
	<tr>
	<td>
	<div class="Estilo3">
	<h2>Editoriales</h2>
	</div>
	</td>
	</tr>
	<tr>
	<td class="bottomDeck">
	<ul class="thumb">
	<li class="fancyThumb"><a href="http://www.oceano.mx/"><img title="Editorial Oceano" src="LSCA-FEnBOOKS/imagenes/eo.jpg" alt="El P&eacute;ndulo" height="500" width="312" /></a></li>
	<li class="fancyThumb"><a href="http://www.editorialplaneta.com.mx/"><img title="Editorial Planeta" src="LSCA-FEnBOOKS/imagenes/ep.jpg" alt="Minitienda de" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="http://www.planeta.es/es/ES/Default.htm"><img title="Editorial Booket" src="LSCA-FEnBOOKS/imagenes/eb.jpg" alt="Minitienda de" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="http://www.megustaleer.com/"><img title="Editorial Plaza y Janes" src="LSCA-FEnBOOKS/imagenes/epj.jpg" alt="Minitienda de" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="http://www.alfaguara.com/mx/"><img title="Editorial Alfaguara" src="LSCA-FEnBOOKS/imagenes/eal.jpg" alt="Minitienda de" height="273" width="194" /></a></li>
	<li class="fancyThumb"><a href="http://www.megustaleer.com/"><img title="Editorial Nube de Tinta" src="LSCA-FEnBOOKS/imagenes/en.jpg" alt="Minitienda de" height="273" width="194" /></a></li>
	</ul>
	</td>
	</tr>
	</tbody>
	</table>
	</div>
	</div>
	</li>
</ul>
</div>
</div>
</div>		
</div>
</div>
</div>
</div>
<!-- Aqui termina la parte del contenido central -->



<!-- Aqui empieza la parte del contenido de abajo -->
<div class="mainCarouselBgr">
<div class="mainCarousel" style="background-color: #000000">
<div class="mainCarouselBlock" id="example1_wrap">    
   <div id="show-case">			
				<img class="img" src="LSCA-FEnBOOKS/imagenes/Fmlk.jpg">
				<img class="img" src="LSCA-FEnBOOKS/imagenes/Fae.jpg">
				<img class="img" src="LSCA-FEnBOOKS/imagenes/Fn.jpg">
				<img class="img" src="LSCA-FEnBOOKS/imagenes/Fa.jpg">
				<img class="img" src="LSCA-FEnBOOKS/imagenes/Fc.jpg">
				<img class="img" src="LSCA-FEnBOOKS/imagenes/Fkm.jpg">
				<img class="img" src="LSCA-FEnBOOKS/imagenes/Fase.jpg">
				<img class="img" src="LSCA-FEnBOOKS/imagenes/Fbg.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fcg.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fcon.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fs.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fwc.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Ft.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fsoc.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fsh.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fsj.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fsf.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Frwe.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fpn.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fmg.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fnm.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fmb.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fl.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fldv.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fjwg.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fjjr.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fjc.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fin.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Ffe.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fez.jpg">
               <img class="img" src="LSCA-FEnBOOKS/imagenes/Fda.jpg">
			</div>
		<script>
		    $(document).ready(function () {
		        $('.img:gt(0)').hide();
		        setInterval(function () {
		            $(".img:first-child").fadeOut(1000).next(".img").fadeIn(1000).end().appendTo("#show-case")
		        }, 8000);

		    });
		</script> 
</div>

    <!-- Aqui se muestran los creditos y derechos de autor.. jajaj bien mamon --> 
<div class="mainFooterBgr">
<div class="mainFooter">
	<div class="block-subscribe"> 
      <div class="padding10px">
        <div class="footerMenu"> 
          <span class="smallText1">Copyright &copy; LSCA-FE n' BOOKS 2014</span>
          <span>|</span>
         <a href="" rel="tag">
            <a href="https://www.paypal.com/mx/webapps/mpp/home"><img src="LSCA-FEnBOOKS/imagenes/paypal.gif" alt="payPal" id="imagenFootPaypal"/></a>
            <a href="https://www.mastercard.com/mx/gateway.html"><img src="LSCA-FEnBOOKS/imagenes/vma.png" alt="MasterCard" height="13px" width="53px"/></a>
          </a>
    </div>
    </div>
</div>
</div>
</div>

<!-- Algunos scripts de control de vistas, etc.. --> 
<script  type="text/javascript">
    function openPopup(pageUrl, width, height) {
        var scrollbars = "yes";
        var popupWin = window.open(pageUrl, 'popupWin', 'toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=' + scrollbars + ',resizable=yes,width=' + width + ',height=' + height);
        popupWin.focus();
        return false;
    }
</script>
<div class="footerAll">
  <div class="footerHTML"></div>
</div>
<div class="footerMenu">
<style scoped>.fb_iframe_widget iframe{position:relative;}</style>
</div>
<script type='text/javascript'>
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-35812733-1']);
    _gaq.push(['_trackPageview']);
    (function () {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
</script>
<table cellspacing="0" cellpadding="0" class="gstl_50 gssb_c" style="width: 100%; display: none; top: -1px; position: absolute; left: 0px;">
<tbody>
<tr>
<td class="gssb_f"></td>
<td class="gssb_e" style="width: 100%;"></td>
</tr>
</tbody>
</table></div></div></div>
</asp:Content>
