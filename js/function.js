!function(n){function t(i){if(o[i])return o[i].exports;var c=o[i]={exports:{},id:i,loaded:!1};return n[i].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}var o={};return t.m=n,t.c=o,t.p="",t(0)}([function(n,t){"use strict";$(function(){FastClick.attach(document.body),$(".sider").scrollbar(),function(){var n=$("#to-top");$(window).scroll(function(){$(this).scrollTop()>100?n.fadeIn(100):n.fadeOut(100)}),n.on("click",function(){return $("html, body").animate({scrollTop:0},300),!1})}(),function(){var n=$(".btn-menu"),t=$(".nav, .sider"),o=$(".navlist > li > a, .btn-hide, .toggle-list a");n.is(":hidden")||(n.on("click",function(){t.toggle()}),o.on("click",function(){t.hide()}),$(document).on("click",function(n){$(n.target).closest(".btn-menu, .nav, .sider").length||t.hide()}))}()})}]);
//# sourceMappingURL=function.js.map