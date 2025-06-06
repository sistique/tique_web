<?php

use base\conexion;
use config\generales;
use models\wt_hogar;

include "../init.php";
require '../vendor/autoload.php';


$conf_database = new stdClass();

$paths_conf = new stdClass();
$paths_conf->generales = '/var/www/html/tique_web/config/generales.php';
$paths_conf->database = '/var/www/html/tique_web/config/database.php';
$paths_conf->views = '/var/www/html/tique_web/config/views.php';

$cnx = new conexion(paths_conf: $paths_conf);
$generales = new generales();

require ($generales->path_base.'src/landing.php');

$wt_hogar_modelo = new wt_hogar(conexion::$link);

$url_landing = get_landing_url();
$url_landing_limpia = limpia_url_landing(url_landing: $url_landing);
$landing_url_sin_ext = quitar_php(url_landing_limpia: $url_landing_limpia);

$wt_hogar = $wt_hogar_modelo->obtener_registro_wt_hogar($landing_url_sin_ext);

$img_hogar = '';
$nombre_hogar = '';

if($wt_hogar > 0){
    $img_hogar = $wt_hogar['wt_hogar_img_descripcion'];
    $nombre_hogar = $wt_hogar['wt_hogar_descripcion'];
    $proposito_hogar_id = $wt_hogar['wt_hogar_wt_proposito_id'];
}

$descripcion_twitter = '     Hogar Izel es una vivienda de 2 niveles, en la planta alta tenemos 2 recámaras y un baño completo, en la planta baja su sala, medio baño, comedor, cocina y un patio muy extenso con oportunidad para crecimiento. 
 '; //falta por automatizar
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />

    <title><?php echo $nombre_hogar;?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta property='twitter:title' content="<?php echo $nombre_hogar;?>"/>
    <meta property='twitter:image' content="<?php echo $generales->url_base.$img_hogar; ?>"/>
    <meta property="og:description" content="<?php echo $descripcion_twitter ?>" /> <!-- falta por automatizar -->
    <meta name="twitter:card" content="summary_large_image"/>

    <?php include $generales->path_base.'templates/css.php'; ?>


</head>
<body class="">
<img src="<?php echo $generales->url_base.$img_hogar; ?>" hidden>
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v14.0" nonce="Ug42YVNC"></script>
<div class="container container-wrapper">
    <header class="header">
        <?php include $generales->path_base.'templates/head/_head.php' ?>
    </header><!-- /.header-->
    <main class="main section-color-primary">
        <div class="container">
            <section class="top-title">
                <ul class="breadcrumb">
                    <li class="item"><a href="<?php echo $generales->url_base; ?>index.php"> Inicio </a></li>
                    <li class="item"> <?php echo $nombre_hogar;?> </li>
                </ul>
                <div class="row">
                    <div class="col-md-12 pading_laterales_0 ">
                        <div class="col-md-9">
                            <h1 class="h-side-title page-title page-title-big text-color-primary"><?php echo $nombre_hogar;?></h1>
                        </div>
                        <div class="col-md-3">
                            <h3 class="label label-default oferta_hogar">OFERTA</h3>
                        </div>
                    </div>
                </div>

            </section> <!-- /. content-header -->
            <div class="row">
                <div class="col-md-9">
                    <div class="widget widget-box box-container widget-property">
                        <?php include $generales->path_base.'templates/sliders/hogar_general/_slider_hogar.php' ?>
                        <?php include $generales->path_base.'templates/descripcion/_descripcion_general_izel.php' ?>
                    </div> <!-- /. widget-body -->
                    <?php include $generales->path_base.'templates/detalles/_detalles_hogar_general_celular.php' ?>
                    <?php include $generales->path_base.'templates/ubicaciones/_ubicacion_general.php' ?>
                    <?php include $generales->path_base.'templates/galeria/hogar-izel/_galeria_hogar.php' ?>


                    <?php include $generales->path_base.'templates/facebook/_fb_comments_hogar_general.php'?>
                </div><!-- /.center-content -->
                <div class="col-md-3">
                    <?php include $generales->path_base.'templates/detalles/_detalles_hogar_general.php' ?>
                    <a href='<?php echo $generales->url_base; ?>hogares/vista-impresion/vista-impresion-<?php echo $url_landing_limpia?>' class="btn btn-primary color-primary btn-property btn-print">Vista de impresión</a>
                    <?php include $generales->path_base.'templates/agentes/hogar-cihualpilli/_ficha_agente.php' ?>
                    <?php if ($proposito_hogar_id != 2)
                        include $generales->path_base.'templates/informacion/_informacion_hogar_general.php' ?>

                </div>
                <!-- /.right side bar -->
            </div>
        </div>
    </main><!-- /.main-part-->
    <footer class="footer">
        <?php include $generales->path_base.'templates/footer/_footer.php' ?>
    </footer>
    <a class="btn btn-scoll-up color-secondary" id="btn-scroll-up"></a>
</div>
<?php include $generales->path_base.'templates/java.php' ?>
</body>
</html>