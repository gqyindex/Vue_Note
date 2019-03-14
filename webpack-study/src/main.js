import $ from 'jquery';

//将css文件当作脚本引入
import './css/base.css';
import './css/index.less';
import 'bootstrap/dist/css/bootstrap.min.css';

$(function () {
    $('li:odd').css('backgroundColor','yellow');
    $('li:even').css('backgroundColor','pink');
})