<?php
use config\generales;
$generales = new generales();
?>
<div class="widget widget-box box-container widget-overview visible-sm visible-xs">
    <div class="widget-header text-uppercase">
        <h2>Detalles</h2>
    </div>
    <ul class="list-overview">
        <?php include $generales->path_base.'templates/detalles/hogar-beatriz/_links_detalles.php' ?>
    </ul>
</div><!-- /. widget-OVERVIEW -->
