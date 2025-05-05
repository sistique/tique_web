<?php
namespace config;
class generales{
    public string $path_base;
    public string $session_id = '';
    public string $url_base = 'http://localhost/web_tique/';
    public bool $muestra_index;
    public function __construct(){
        $this->path_base = '/var/www/html/web_tique/';

        $this->muestra_index = true;
        if(isset($_GET['session_id'])){
            $this->session_id = $_GET['session_id'];
        }
    }
}
