<?php
use config\generales;
$generales = new generales();
?>
<div class="col-md-4 col-sm-6">
    <div class="property-card card">
        <div class="property-card-header image-box">

            <img src="<?php echo $generales->url_base;?>assets/img/venta_casas/hogar_girasol/1Fachada/fachada_1.jpg" alt="" class="" />

            <!--Casa destacada en caso de serlo-->
            <!--<div class="budget"><i class="fa fa-star"></i></div>-->
            <a href="<?php echo $generales->url_base; ?>hogares/hogar-girasol.php" class="property-card-hover">

                <img src="<?php echo $generales->url_base; ?>assets/img/plus.png" alt="" class="center-icon" />
                <img src="<?php echo $generales->url_base; ?>assets/img/icon-notice.png" alt="" class="right-icon" />
                <span id='imagen 1' onclick='getlinkOrquidea()'>
                <img alt="Cambiar imagen" onmouseout="this.src='<?php echo $generales->url_base; ?>assets/img/property-hover-arrow.png';"
                     onmouseover="this.src='<?php echo $generales->url_base; ?>assets/img/compartir.png';"
                     src="<?php echo $generales->url_base; ?>assets/img/property-hover-arrow.png" class="left-icon copiar" />
                </span>
            </a>

        </div>



        <?php include $generales->path_base.'templates/lista_casas/links/_marca_vendida.php' ?>


        <?php include $generales->path_base.'templates/lista_casas/hogar-girasol/_carta_casa_detalles.php' ?>
    </div>
</div>
<script>
    function getlinkOrquidea() {
        var aux = document.createElement("input");
        aux.setAttribute("value","<?php echo $generales->url_base; ?>hogares/hogar-girasol.php");
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        event.preventDefault();
    }
</script>