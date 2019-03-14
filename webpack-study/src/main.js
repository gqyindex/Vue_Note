import $ from 'jquery';

//将css文件当作脚本引入
import './css/base.css';
import './css/base.less';

$(function () {
    $('li:odd').css('backgroundColor','yellow');
    $('li:even').css('backgroundColor','pink');
})