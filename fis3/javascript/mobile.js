;(function($) {
    $(function() {
        var $btn = $('#download')
        var $mask = $('div.mask')
        var sUserAgent = navigator.userAgent.toLowerCase()
        // 判断是否微信
        function isWechat() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                return true;
            } else {
                return false;
            }
        }
        // 判断是否为移动端浏览器
        function isMobile() {
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            return bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM
        }
        if (isMobile()) {
            // 移动设备
            if (sUserAgent.match(/ipad/i) == "ipad" || sUserAgent.match(/iphone os/i) == "iphone os") {
                // iphone
                $('#tip > li:eq(1)').show()
                if (!isWechat()) {
                    $('#download').hide()
                    $('div.tip_for_ios').show()
                }
            }

            if (sUserAgent.indexOf('android') > -1) {
                // android
                $btn.attr('href', 'https://zwin888.github.io/mobile/zwin.apk')
                $('#tip > li:eq(2)').show()
            }

            $('body').css('visibility', 'visible')

            $btn.on('click', function(e) {
                if (isWechat()) {
                    $mask.show()
                    return false
                }
            })

            $(document).on('click', 'a.step_btn', function(e) {
                var $target = $(e.target)
                var $parent = $target.closest('li')
                $parent.slideUp()
            })

        } else {
            // pc浏览器
            window.location.href = 'index.html'
        }
    })
})(jQuery)
