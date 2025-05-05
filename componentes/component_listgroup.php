<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Components List group</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="../assets/img/favicon.ico" type="image/x-icon" />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,800,700&amp;subset=latin,cyrillic' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="../assets/libraries/font-awesome/css/font-awesome.min.css" />
        <!-- Start BOOTSTRAP -->
        <link rel="stylesheet" href="../assets/libraries/tether/dist/css/tether.min.css" />
        <link rel="stylesheet" href="../assets/libraries/bootstrap/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="../assets/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="../assets/libraries/bootstrap-colorpicker-master/dist/css/bootstrap-colorpicker.min.css" />
        <!-- End Bootstrap -->
        <!-- Start Template files -->
        <link rel="stylesheet" href="../assets/css/winter-flat.css" />
        <link rel="stylesheet" href="../assets/css/custom.css" />
        <!-- End  Template files -->
        <!-- Start owl-carousel -->
        <link rel="stylesheet" href="../assets/libraries/owl.carousel/assets/owl.carousel.css" />
        <!-- End owl-carousel -->
        <!-- Start blueimp  -->
        <link rel="stylesheet" href="../assets/css/blueimp-gallery.min.css" />
        <!-- End blueimp  -->
        <script src="../assets/js/modernizr.custom.js"></script>
        <!-- Start custom template style  -->
        <link rel="stylesheet" href="../assets/css/custom_template_style.css" />
        <!-- End custom template style   -->
        <!-- Start codemirror  -->
        <link rel="stylesheet" href="../assets/libraries/codemirror/lib/codemirror.css" />
        <!-- End codemirror  -->
    </head>
    <body class="">
        <div class="container container-wrapper">
            <header class="header">
                <?php include 'templates/head/_head.php' ?>
            </header><!-- /.header--> 
            <main class="main section-color-primary">
                <div class="container">
                    <section class="top-title">
                        <ul class="breadcrumb">
                            <li class="item"><a href="/"> Home </a></li>
                            <li class="item"><a href="#"> Components </a></li>
                            <li class="item"> List Group </li>
                        </ul>
                        <h1 class="h-side-title page-title page-title-big text-color-primary">List Group</h1> 
                    </section> <!-- /. content-header --> 
                    <div class="row">
                        <div class="col-md-9 components-examples">
                            <section class="widget widget-box  box-container">
                                <div class="box-container-title">
                                    <h2 class="title widget-header">Basic example</h2> 
                                    <span class="sub-title">The most basic list group is simply an unordered list with list items, and the proper classes. Build upon it with the options that follow, or your own CSS as needed.</span>
                                </div>
                                <div class="bd-example">
                                    <ul class="list-group">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Morbi leo risus</li>
                                        <li class="list-group-item">Porta ac consectetur ac</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                                <textarea name="input" class="file_content" cols="30" rows="10">
                                    <ul class="list-group">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Morbi leo risus</li>
                                        <li class="list-group-item">Porta ac consectetur ac</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </textarea>
                            </section>
                            <section class="widget widget-box  box-container">
                                <div class="box-container-title">
                                    <h2 class="title widget-header">Labels</h2> 
                                    <span class="sub-title">UAdd labels to any list group item to show unread counts, activity, etc.</span>
                                </div>
                                <div class="bd-example">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <span class="label label-default label-pill pull-right">14</span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item">
                                            <span class="label label-default label-pill pull-right">2</span>
                                            Dapibus ac facilisis in
                                        </li>
                                        <li class="list-group-item">
                                            <span class="label label-default label-pill pull-right">1</span>
                                            Morbi leo risus
                                        </li>
                                    </ul>
                                </div>
                                <textarea name="input" class="file_content" cols="30" rows="10">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <span class="label label-default label-pill pull-right">14</span>
                                            Cras justo odio
                                        </li>
                                        <li class="list-group-item">
                                            <span class="label label-default label-pill pull-right">2</span>
                                            Dapibus ac facilisis in
                                        </li>
                                        <li class="list-group-item">
                                            <span class="label label-default label-pill pull-right">1</span>
                                            Morbi leo risus
                                        </li>
                                    </ul>
                                </textarea>
                            </section>

                            <section class="widget widget-box  box-container">
                                <div class="box-container-title">
                                    <h2 class="title widget-header">Linked items</h2> 
                                    <span class="sub-title">Linkify list group items by using anchor tags instead of list items (that also means a parent <code class="highlighter-rouge">&lt;div&gt;</code> instead of an <code class="highlighter-rouge">&lt;ul&gt;</code>). No need for individual parents around each element.</span>
                                </div>
                                <div class="bd-example">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item active">
                                            Cras justo odio
                                        </a>
                                        <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                                        <a href="#" class="list-group-item">Morbi leo risus</a>
                                        <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                                        <a href="#" class="list-group-item">Vestibulum at eros</a>
                                    </div>
                                </div>
                                <textarea name="input" class="file_content" cols="30" rows="10">
                                    <div class="list-group">
                                        <a href="#" class="list-group-item active">
                                          Cras justo odio
                                        </a>
                                        <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                                        <a href="#" class="list-group-item">Morbi leo risus</a>
                                        <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                                        <a href="#" class="list-group-item">Vestibulum at eros</a>
                                    </div>
                                </textarea>
                            </section>
                            <section class="widget widget-box  box-container">
                                <div class="box-container-title">
                                    <h2 class="title widget-header">Contextual classes</h2> 
                                    <span class="sub-title">Use contextual classes to style list items, default or linked. Also includes <code class="highlighter-rouge">.active</code> state.</span>
                                </div>
                                <div class="bd-example">
                                    <ul class="list-group">
                                        <li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
                                        <li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
                                        <li class="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
                                        <li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
                                    </ul>
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-success">Dapibus ac facilisis in</a>
                                        <a href="#" class="list-group-item list-group-item-info">Cras sit amet nibh libero</a>
                                        <a href="#" class="list-group-item list-group-item-warning">Porta ac consectetur ac</a>
                                        <a href="#" class="list-group-item list-group-item-danger">Vestibulum at eros</a>
                                    </div>
                                </div>
                                <textarea name="input" class="file_content" cols="30" rows="10">
                                    <ul class="list-group">
                                        <li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
                                        <li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
                                        <li class="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
                                        <li class="list-group-item list-group-item-danger">Vestibulum at eros</li>
                                    </ul>
                                    <div class="list-group">
                                        <a href="#" class="list-group-item list-group-item-success">Dapibus ac facilisis in</a>
                                        <a href="#" class="list-group-item list-group-item-info">Cras sit amet nibh libero</a>
                                        <a href="#" class="list-group-item list-group-item-warning">Porta ac consectetur ac</a>
                                        <a href="#" class="list-group-item list-group-item-danger">Vestibulum at eros</a>
                                    </div>
                                </textarea>
                            </section>
                        </div>
                        <!-- /.right side bar -->
                        <div class="col-md-3">
                            <div class="widget widget-box box-container widget-list-menu">
                                <div class="widget-header text-uppercase">
                                    Components
                                </div>
                                <div class="">
                                    <ul class="categories list-menu">
                                        <li><a class="dropdown-item" href="component_accordions.php">Accordion</a></li>
                                        <li><a class="dropdown-item" href="component_alerts.php">Alerts</a></li>
                                        <li><a class="dropdown-item" href="#">Blocks</a>
                                            <ul>
                                                <li><a href="components_blocks_property.php">Blocks Property</a></li>
                                                <li><a href="components_blocks_propertylist.php">Blocks Property List</a></li>
                                                <li><a href="components_blocks_shop.php">Blocks Shop</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item" href="component_breadcrumb.php">Breadcrumb</a></li>
                                        <li><a class="dropdown-item" href="component_buttons.php">Buttons</a></li>
                                        <li><a class="dropdown-item" href="component_card.php">Card</a></li>
                                        <li><a class="dropdown-item" href="#">Carousels</a>
                                            <ul>
                                                <li><a href="component_carousel_bootstrap.php">Carousels Bootstrap</a></li>
                                                <li><a href="component_carousel_owl.php">Carousels owl</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item active" href="component_listgroup.html">List Group</a></li>
                                        <li><a class="dropdown-item" href="component_pagination.php">Pagination</a></li>
                                        <li><a class="dropdown-item" href="component_progress.php">Progress Bars</a></li>
                                        <li><a class="dropdown-item" href="component_stars.php">Rating Stars</a></li>
                                        <li><a class="dropdown-item" href="components_typography.php">Typography</a></li>
                                    </ul>     
                                </div>
                                <!--energy --> 
                            </div><!-- /. widget -->  
                        </div><!-- /.center-content -->
                    </div>
                </div>
            </main><!-- /.main-part--> 
            <footer class="footer">
                <?php include 'templates/footer/_footer.php' ?>
            </footer>
            <a class="btn btn-scoll-up color-secondary" id="btn-scroll-up"></a>
        </div>
        <!-- Start Jquery -->
        <script src="../assets/js/jquery-2.2.1.min.js"></script>
        <script src="../assets/libraries/jquery.mobile/jquery.mobile.custom.min.js"></script>
        <!-- End Jquery -->
        <!-- Start BOOTSTRAP -->
        <script src="../assets/libraries/tether/dist/js/tether.min.js"></script>
        <script src="../assets/libraries/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="../assets/js/bootstrap-select.min.js"></script>
        <script src="../assets/libraries/bootstrap-colorpicker-master/dist/js/bootstrap-colorpicker.min.js"></script>
        <!-- End Bootstrap -->
        <!-- Start Template files -->
        <script src="../assets/js/winter-flat.js"></script>
        <!-- End  Template files -->
        <!-- Start owl-carousel -->
        <script src="../assets/libraries/owl.carousel/owl.carousel.min.js"></script>
        <!-- End owl-carousel -->
        <!-- Start blueimp  -->
        <script src="../assets/js/blueimp-gallery.min.js" type="text/javascript"></script>
        <!-- End blueimp  -->
        <!-- Start custom template style  -->
        <script src="../assets/js/custom_template_style.js" type="text/javascript"></script>
        <!-- End custom template style   -->
        <!-- Start codemirror  -->
        <script src="../assets/libraries/codemirror/lib/codemirror.js"></script>
        <script src="../assets/libraries/codemirror/mode/javascript/javascript.js"></script>
        <script src="../assets/libraries/codemirror/addon/edit/matchbrackets.js"></script>
        <script src="../assets/libraries/codemirror/mode/htmlmixed/htmlmixed.js"></script>
        <script src="../assets/libraries/codemirror/mode/xml/xml.js"></script>
        <script src="../assets/libraries/codemirror/mode/css/css.js"></script>
        <script src="../assets/libraries/codemirror/mode/clike/clike.js"></script>
        <script src="../assets/libraries/codemirror/mode/php/php.js"></script>
        <script src="../assets/js/codemirror_init.js"></script>
        <!-- End codemirror  -->
    </body>
</html>