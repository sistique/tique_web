<?php

use base\conexion;
use config\generales;
use gamboamartin\errores\errores;
use models\wt_hogar;


$conf_database = new stdClass();

$paths_conf = new stdClass();
$paths_conf->generales = '/var/www/html/tique_web/config/generales.php';
$paths_conf->database = '/var/www/html/tique_web/config/database.php';
$paths_conf->views = '/var/www/html/tique_web/config/views.php';

$cnx = new conexion(paths_conf: $paths_conf);
$generales = new generales();

$wt_hogar_modelo = new wt_hogar(conexion::$link);

$landing_url = get_landing_url();
$landing_url_limpia = limpia_url_landing(url_landing: $landing_url);
$landing_url_sin_ext = quitar_php(url_landing_limpia: $landing_url_limpia);

$wt_hogar = $wt_hogar_modelo->obtener_registro_wt_hogar($landing_url_sin_ext);
$img_hogar = '';
$descripcion_hogar = '';

if($wt_hogar > 0){
    $img_hogar = $wt_hogar['wt_hogar_img_descripcion'];
    $descripcion_hogar = $wt_hogar['wt_hogar_observaciones'];
}
?>
<div class="widget-body">
    <div class="widget-header widget-title text-uppercase">
        <h2>Descripción</h2>
    </div>
    <div class="widget-content wide-p">
        <img src="<?php echo $generales->url_base.$img_hogar; ?>"  class="pull-right-img" alt="" />
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 7.3.6.2 (Linux)"/>
	<meta name="created" content="00:00:00"/>
	<meta name="changed" content="00:00:00"/>
	<style type="text/css">
        @page { size: 21cm 29.7cm; margin: 2.54cm }
		p { line-height: 115%; text-align: left; orphans: 2; widows: 2; margin-bottom: 0.25cm; direction: ltr; background: transparent }
	</style>
</head>
<body link="#000080" vlink="#800000" dir="ltr"><p align="justify" style="text-indent: 1.27cm; margin-bottom: 0cm">
<font size="2" style="font-size: 10pt">Hogar Xiadani bonita casa en el fraccionamiento  ubicado en la parte Sur del área metropolitana de Guadalajara, ideal para vivir en un ambiente familiar y de tranquilidad, ya que cuenta con ingreso controlado y muro perimetral. Ideal para un estilo de vida armonioso, ya que está consolidado en cuestión de infraestructura, como lo son áreas verdes, áreas infantiles y de recreación familiar, área comercial ideales para la convivencia familiar, es sin duda una vivienda. </font>
</p>
<p align="justify" style="margin-bottom: 0cm">

</p>
<p align="justify" style="text-indent: 1.27cm; margin-bottom: 0cm"><font size="2" style="font-size: 10pt">Hagar Xiadani es una casa amplia distribuida de la siguiente manera, en la planta baja cuenta con sala, cocina, comedor, 1 recamara, cochera para 1 vehículo, patio, la planta  alta está distribuida en 2 recámaras, 1 baño completo, sala de estar.</font></p>
<p align="justify" style="margin-bottom: 0cm">

</p>
<p align="justify" style="text-indent: 1.27cm; margin-bottom: 0cm"><font size="2" style="font-size: 10pt">Para poder llegar a Hogar Xiadani se encuentra a 5  minutos del Periférico y sobre Av. Adolf B. Horn importantes vías de la ciudad. </font>
</p>
<p style="margin-bottom: 0cm"><br/>

</p>

    </div>
</div>