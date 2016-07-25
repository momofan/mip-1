/**
 * @file 分享
 *
 * @description
 * fork from:  yaohao_share by yuanxueran
 *
 * @update
 * 2017-07-02 by menglingjun
 * 着急上，先在别人的东西上改，有空重写
 *
 * @update
 * 2017-07-18 by menglingjun
 * 使用 pmd
 *
 */


define('extensions/mip-share/0.1/share', ['require', 'extensions/mip-share/0.1/clipboard', 'extensions/mip-share/0.1/share/share'], function (require) {

    var Clipboard = require('extensions/mip-share/0.1/clipboard');
    var PMDShare = require('extensions/mip-share/0.1/share/share');

    /**
     * 重写 sendLog 方法
     *
     * @param  {string} key key
     */
    PMDShare.prototype._sendLog = function (key) {
        var me = this;

        var appKeyList = {
            pyq:       {'ct': 40, 'cst': 2},
            wxfriend:  {'ct': 40, 'cst': 1},
            qqfriend:  {'ct': 40, 'cst': 5},
            qzone:     {'ct': 40, 'cst': 3},
            sinaweibo: {'ct': 40, 'cst': 4},
            more:      {'ct': 40, 'cst': 9},
            close:     {'ct': 40, 'cst': 0}     // 关闭
        };

        if (key && appKeyList[key]) {
            var obj = appKeyList[key];
            if (me.opt && typeof me.opt.loginfo == 'object') {
                obj = $.extend(obj, me.opt.loginfo);
            }

            // 结果页日志发送接口
            // console && console.log(obj);
        }
    };


    /**
     * 复制链接
     *
     * @type {Object}
     */
    var copylink = {
        key: 'copylink',
        icon: 'data:image/png;base64,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',
        title: '复制链接',
        cb: function () {}
    };

    /**
     * initCopyLink
     *
     * @param  {HTMLElement} container container
     * @param  {Object} opt       options
     */
    function initCopyLink(container, opt) {

        var elem = $(container).find('.c-share-btn-copylink');

        if (!Clipboard.support || !elem.get(0)) {
            return;
        }

        new Clipboard(
            {
                el: elem,
                text: opt.url,
                success: function () {
                    alert('复制成功');
                },
                error: function () {
                    alert('复制失败');
                }
            }
        );
    }

    /**
     * defaultOpt
     *
     * @type {Object}
     */
    var defaultOpt = {
        iconUrl: '//m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg',
        custom: Clipboard.support ? [copylink] : []
    };


    /**
     * MIP Share CLASS
     *
     * @param {Object} opt       options
     * @param {HTMLElement} container container
     */
    function Share (opt, container) {

        opt = $.extend({}, defaultOpt, opt);

        var share = new PMDShare(opt);

        // render方法可以直接在页面中渲染分享ICON
        // 由于为js渲染会出现抖动,请注意执行时机
        share.render(
            container,
            {
                onRender: function() {
                    // 初始化 分享
                    initCopyLink(container, opt);
                }
            }
        );

        this.share = share;

    }

    return Share;
});
