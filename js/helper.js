function browserId() {
    var navigator_info = window.navigator;
    var screen_info = window.screen;
    var uid = navigator_info.mimeTypes.length;
    uid += navigator_info.userAgent.replace(/\D+/g, '');
    uid += navigator_info.plugins.length;
    uid += screen_info.height || '';
    uid += screen_info.width || '';
    uid += screen_info.pixelDepth || '';
    return uid;
}

function loginCheck() {
    $.ajax({
        url: 'https://api.ipify.org?format=json',
        dataType: 'json',
        success: function (data) {
            var user_login = {
                "async": true,
                "crossDomain": true,
                "url": "http://io.nowdb.net/v2/select_where" +
                "/token/" + token +
                "/project/" + project +
                "/collection/user_login" +
                "/appid/" + appid +
                "/where_field/device_idANDip" +
                "/where_value/" + browserId() + "AND" + data.ip,
                "method": "GET",
                "headers": {
                    "cache-control": "no-cache"
                }
            }

            $.ajax(user_login).done(function (response) {
                if (response.Data == '0') {
                    $(location).attr('href', 'home_login.html');
                }
            });
        }
    });
}

function getUserInfo() {
    var datas;
    $.ajax({
        "async": false,
        url: 'https://api.ipify.org?format=json',
        dataType: 'json',
        success: function (data) {
            var user_info = {
                "async": false,
                "crossDomain": true,
                "url": "http://io.nowdb.net/v2/select_where" +
                "/token/" + token +
                "/project/" + project +
                "/collection/user_login" +
                "/appid/" + appid +
                "/where_field/device_idANDip" +
                "/where_value/" + browserId() + "AND" + data.ip,
                "method": "GET",
                "headers": {
                    "cache-control": "no-cache"
                }
            }

            datas = $.ajax(user_info);
        }
    });
    return datas.responseJSON[0];
}

function getParamValue(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)",
        regex = new RegExp(regexS),
        results = regex.exec(window.location.search);
    if (results == null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}