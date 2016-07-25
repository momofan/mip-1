/**
 * @file 下载
 * @author fengchuantao
 * 样式尚未确定。
 * 
 * @time 2016.06.21
 */

define('extensions/mip-appdl/0.1/mip-appdl', ['require', 'customElement'], function(require) {
    var customElem = require('customElement');
    /**
     * build
     */
    function build() {
        if (this.isRender) {
            return;
        }

        this.isRender = true;
        getallconfig.call(this)
        BindClose.call(this)
    }

    function getallconfig() {
       var tpl = this.getAttribute('tpl');

       switch(tpl) {
            case 'imageText':
                renderHaveImg.call(this);
                break;
            case 'noneImg':
                renderNoneImg.call(this);
                break;
        }
    }


    /**
     * 图文存在
     */
    function renderHaveImg() {
        var textdom = buildtextdom.call(this);
        var textdom = buildtextdom.call(this);
        var downtext = $(this).attr("downbtntext");
        var downsrc  = $(this).attr(recognition()+"-downsrc");
        var imgsrc = $(this).attr("imgsrc");
        var postiontye = "'mip-appdl-box mip-appdl-"+$(this).attr("postiontye")+ "'";

        var str = "<div class= "+postiontye+" >"+
            "<div class='mip-appdl-content'>"+
                "<div class='mip-appdl-contentcell'>"+
                    "<img src="+imgsrc+" class='mip-appdl-downimg'>"+
                "</div>"+
                "<div class='mip-appdl-textbox mip-appdl-contentcell'>"+
                    textdom+
                "</div>"+
                "<div class='mip-appdl-downloadbbutton mip-appdl-contentcell'>"+
                    "<a target='_blank' href="+downsrc+" download='测试'>"+downtext+"</a>"+
                "</div>"+
                "<div class='mip-appdl-closebutton'></div>"+
            "</div>"+
        "</div>";
        $(this).append(str)
    }

    /**
     * 单行文本
     */
    function renderNoneImg() {
        var textdom = buildtextdom.call(this);
        var downtext = $(this).attr("downbtntext");
        var downsrc  = $(this).attr(recognition()+"-downsrc");
        var postiontye = "'mip-appdl-box mip-appdl-"+$(this).attr("postiontye")+"'";

        var str = "<div class= "+postiontye+" >"+
            "<div class='mip-appdl-content'>"+
                "<div class='mip-appdl-textbox mip-appdl-contentcell'>"+
                    textdom+
                "</div>"+
                "<div class='mip-appdl-downloadbbutton mip-appdl-contentcell'>"+
                    "<a target='_blank' href="+downsrc+" download='测试'>"+downtext+"</a>"+
                "</div>"+
                "<div class='mip-appdl-closebutton'></div>"+
            "</div>"+
        "</div>";

        $(this).append(str)
    }

    /**
     * 组装文本行
     */
    function buildtextdom() {
        var textarray = $(this).attr("texttip");
        var tarray = [];
        if (textarray) {
            try {
                tarray = new Function('return ' + textarray)();
            } catch (e) {}
        }
        var domstr = "<div class='mip-appdl-text'>";
        var length = tarray>2 ? 2:tarray.length;

        for(var i=0;i<length;i++) { //限定最大行数两行
            domstr+="<p>"+tarray[i]+"</p>";
        }
        return domstr+"</div>";
    }

    /**
     * 绑定关闭事件
     */
    function BindClose() {
        $(this).on("click",".mip-appdl-closebutton",function(){
            $(this).parents(".mip-element").remove()
        })
    }

    /**
     * 客户端判断
     */
    function recognition(){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return isAndroid?"Android":"Ios"
    }

    /**
     * 初始化
     *
     */
    customElem.prototype.init = function() {
        this.build = build;
    };

    return customElem;

});

require(['extensions/mip-appdl/0.1/mip-appdl'], function (appdl) {
    // 引入组件需要的css文件，选填
    MIP.css.mipAppdl = ".mip-appdl {\n  /*\n\t* 特殊样式表\n\t*/\n}\n.mip-appdl-box {\n  z-index: 99;\n  box-sizing: border-box;\n  width: 100%;\n  height: 70px;\n  background: rgba(0, 0, 0, 0.8);\n  overflow: hidden;\n  text-align: left;\n  left: 0px;\n}\n.mip-appdl-content {\n  display: table;\n  height: 100%;\n  width: 100%;\n}\n.mip-appdl-contentcell {\n  display: table-cell;\n  vertical-align: middle;\n}\n.mip-appdl-downimg {\n  height: 50px;\n  width: 50px;\n  float: left;\n  margin-left: 10px;\n}\n.mip-appdl-textbox {\n  font-size: 12px;\n  color: #fff;\n  margin-left: 50px;\n  margin-right: 50px;\n  padding-left: 20px;\n}\n.mip-appdl-downloadbbutton a {\n  border: solid 1px #06c1ae;\n  color: #fff;\n  border-radius: 3px;\n  padding: 5px 8px;\n  font-size: 12px;\n}\n.mip-appdl-closebutton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAkCAYAAAD2IghRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4N2M5ODc5Zi0xMDMxLTRjZWYtOWViMy1lMmIxNzNkMDU1MTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzA0MEY0RTEyQkI1MTFFNkE0NDlFNkM0NkZGOUM4QUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzA0MEY0RTAyQkI1MTFFNkE0NDlFNkM0NkZGOUM4QUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplOTZiNDQxZC04OWRjLTQ1OGItYmM1NC0yZjVmYmNhNzllMzciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5YmZmMzkwMi03MTFhLTExNzktOTQzNy1mZjMxYmUwYTU0ZDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz64WWERAAADxUlEQVR42tSZX0gUURTGr6P9QdR6WXuppKAylSIhyzTDRbMoXw2CfAwjt14jSJHoPdNAeihIqPRVonRzpawkMqMo2xAMrRfzzUJKy/pOfFPD0rj37l61DnzMzM7cmd/9c86992xKb2+vMrQNUBVUCm2FcqBMaLlm+RnoEzQGvYEeQt3BYPCdCUSKJngqVAPVQ8VSTtm1H9AA1Ap1ohLfbYBXQC1Qrue3dqiHLTbGFvyqCbmCPZTDHtsPHfPcj0IhwN9LFHwl1Awd5/V9aQ2oDZqz1dQAVJFIxMFpHXt1H29dgU7j/hcT8AB0G9oJSbedh5rUApiAew2VaMThHIfnU+gQnpmMLef4QPcTehDatlDQPhVp4jcHydCPygTigadDXdAWqTx0GBpWi2yAH+a3I2TpAnz6fOAypndBQ9BRaEItkQF+ggxDZGr2G+MSPcLQLLsquoiQvvfQ0hLNXkLLoEo32jielr/E8wsG0Gk+fhLPHJbVqVSUTGItqEiqF/wIY+oDA0eUD49Az+nQuhZg948YwDcxHOcyZP4GP8ljhwGAxPIpDqs+TfgAHW47y5rMB5081rvgsvbYwx/bDMHFL15D+RrwAT5TwDIVhuAuWzGGy0YBP8C1R3sCM6JMDOUa8C50Pp8tZ1kTBxa262StEvAS3utJMCjEg08a2mNhHkscvlDsVRIRzQ/eJrTyTIZ54tXrePEhyXDswvd54JVFaMWVqFhOGpeYiktTZRleWYQW+8xjhqP+U3M8LZ1p4X2xY1o3VOpahtvyAv6eF2stQ5drhkoTc/1x3PF6qkXoIMf0pGX4AtdvHO6yFXfutqA/JjBJ6Vglj48EvJu77NoEVnrxoK3Bc19aS9ZuuRiFHvN+naFjhzWg/eDDhg3lsg1g+h91C17mscYQfDUX+fGgY+FfQKsMwV22Vu+ytpObB0kNNGq+6Bu0CdqhCe2FL4Q28x06w6SBbFF3eeuCSwoixPMzBNKx2QRzLHMsqwMtFTzLy1NulsvbVbKXu8ZE0C1ozT+w3xSGm8x+XcWzYb9dvuwunrArb0DZSzWlAzqbDIVkCs2XnpiGqqG3dLiuJCemRKHz+O0gWarR2tPxMlniPGXQM6iIUaNhEaEb+M0iMpT9LQXnt8uWKLEXusikZxNrbz3p6QE+wWxDUknP2Gm2hakw12R/epfhaZw79hlNRvkDIAtaz3SD7HlLuWlXHBohryMmCq7Un8S+OMhuZT+x/2tG5OTSYSuxH2vSMgfZSrlsuSymyHRj/xR7KspF3h3Tv1J+CjAA7ao7QDRMv+wAAAAASUVORK5CYII=\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  z-index: 33;\n  font-size: 12px;\n}\n.mip-appdl-fixed {\n  position: fixed;\n  bottom: 0;\n}\n.mip-appdl-static {\n  position: relative;\n}\n.mip-appdl-textbox-lingh {\n  line-height: 30px;\n}\n";
    //注册组件
    console.log(MIP.registerMipElement.toString())
    MIP.registerMipElement('mip-appdl', appdl, MIP.css.mipAppdl);
});

