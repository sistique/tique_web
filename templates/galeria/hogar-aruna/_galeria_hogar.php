<?php
    $a = $generales->url_base."assets/img/venta_casas/hogar_aruna/1Fachada/1662066848694.jpg";
    $b = $generales->url_base."assets/img/venta_casas/hogar_aruna/8Entorno/8.jpg";
    $c = $generales->url_base."assets/img/venta_casas/hogar_aruna/2Sala/1662066848627.jpg";
?>


<div class="widget widget-box box-container">
    <div class="widget-header text-uppercase">
        <h2>Imágenes</h2>
    </div>
    <ul data-target="#modal-gallery" data-toggle="modal-gallery" class="images-gallery clearfix">


        <li class="col-xs-4">
            <a data-gallery="gallery" href="<?php echo $a ?>" title="" download="<?php echo $a ?>" class="preview show-icon">
                <img src="<?php echo $a ?>" class="" alt=""/>
            </a>
            <div class="preview-img"><img src="<?php echo $a ?>" data-src="<?php echo $a ?>" alt="" class="" width="10px"/></div>
        </li>
        <li class="col-xs-4">
            <a data-gallery="gallery" href="<?php echo $b ?>" title="" download="<<?php echo $b ?>" class="preview show-icon">
                <img src="<?php echo $b ?>" class="" alt=""/>
            </a>
            <div class="preview-img"><img src="<?php echo $b ?>" data-src="<?php echo $b ?>" alt="" class="" /></div>
        </li>
        <li class="col-xs-4">
            <a data-gallery="gallery" href="<?php echo $c ?>" title="" download="<?php echo $c ?>" class="preview show-icon">
                <img src="<?php echo $c ?>" class="" alt=""/>
            </a>
            <div class="preview-img"><img src="<?php echo $c ?>" data-src="<?php echo $c ?>" alt="" class="" /></div>
        </li>

    </ul>
</div><!-- /. widget-gallery -->