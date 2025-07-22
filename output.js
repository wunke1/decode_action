//Tue Jul 22 2025 12:48:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
function timest() {
  var _0x33223f = Date.parse(new Date()).toString();
  _0x33223f = _0x33223f.substr(0, 10);
  return _0x33223f;
}
function httpString(_0x290a6b) {
  var _0x281a2c = /(http|https):\/\/([\w.]+\/?)\S*/;
  s = _0x290a6b.replace(/，/, " ");
  s = s.match(_0x281a2c);
  var _0x430a47 = s[0];
  return _0x430a47;
}
function isMP4File(_0x55ec6a) {
  var _0x5b0348 = parseSuffix(_0x55ec6a);
  return _0x5b0348.toUpperCase() === "MP4";
}
function parseSuffix(_0x2e4369) {
  var _0x3dad7d = document.createElement("a");
  _0x3dad7d.href = _0x2e4369;
  return _0x3dad7d.pathname.split(".").pop();
}
function isValidEmail(_0x161c57) {
  const _0x1373a5 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return _0x1373a5.test(_0x161c57);
}
function validatePassword(_0x48a452) {
  const _0x518c5b = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
  return _0x518c5b.test(_0x48a452);
}
function isValidUser() {
  var _0x27d7fb = Cookies.get("_j_sg"),
    _0x4481e0 = Cookies.get("_j_ug");
  if (_0x27d7fb && _0x4481e0) {
    var _0x1bbf2e = JSON.parse(Base64.decode(_0x4481e0));
    $("#personalCenter").show();
    $("#loginAndRegister").hide();
    $("#showUserName").html(_0x1bbf2e.username + "<span class=\"caret\"></span>");
    $("#showUserVipTime").html("会员到期时间：" + _0x1bbf2e.viptime);
  } else $("#loginAndRegister").show(), $("#personalCenter").hide();
}
$(document).ready(function () {
  var _0xf23872 = $("#sendVerificationCode"),
    _0x434087 = $("#registerEmail"),
    _0x381aef = $("#registerPassword"),
    _0x3013fe = $("#registerPasswords"),
    _0xff407a = $("#verificationCode"),
    _0x103626 = $("#loginemail"),
    _0x95b7c7 = $("#loginpassword"),
    _0x4c2a61 = $("#reGisterSubmit");
  _0x434087.on("input", function () {
    _0x434087.removeClass("input-error");
    _0x434087.val().includes("@") ? _0xf23872.prop("disabled", false) : _0xf23872.prop("disabled", true);
  });
  _0x381aef.on("input", function () {
    _0x381aef.removeClass("input-error");
  });
  _0x3013fe.on("input", function () {
    _0x3013fe.removeClass("input-error");
  });
  _0xff407a.on("input", function () {
    _0xff407a.removeClass("input-error");
  });
  _0x103626.on("input", function () {
    _0x103626.removeClass("input-error");
  });
  _0x95b7c7.on("input", function () {
    _0x95b7c7.removeClass("input-error");
  });
  $("#currentYear").text(new Date().getFullYear());
  app.gettoken();
  $("#logoutSubmit").on("click", function (_0x293c42) {
    _0x293c42.stopPropagation();
    app.logoutSubmit();
  });
  $("#showUserVipTime").on("click", function (_0x23c0a0) {
    _0x23c0a0.stopPropagation();
  });
  $("#payvip").on("click", function (_0x3f942e) {
    _0x3f942e.stopPropagation();
    $("#payModal").modal("show");
  });
  $("#uc_01").on("click", "li", function () {
    {
      $("#uc_01 li").removeClass("selected");
      $(this).addClass("selected");
      var _0x2e6871 = $(this).find("input").val();
      $("#paynum").text(_0x2e6871);
      $("#paybutton").prop("disabled", false);
    }
  });
});
var app = new Vue({
  "el": "#app",
  "data": {
    "link": "",
    "myid": "xdqf13casfb",
    "posturl": "https://www.jiexiapi.top",
    "source": "",
    "video_cover": false,
    "has_video": false,
    "is_loading": false,
    "ios": false,
    "errorTip": false,
    "isMP4File": false,
    "requestSuccess": false,
    "showAllSupportLink": false,
    "showClearBtn": false,
    "has_images": false,
    "has_images_and_videos": false,
    "requestResult": {
      "video": "",
      "videos": "",
      "text": "",
      "cover": "",
      "images": ""
    },
    "email": "",
    "registerPassword": "",
    "registerPasswords": "",
    "verificationCode": "",
    "loginemail": "",
    "loginpassword": "",
    "payintervalId": null,
    "pollingintervalId": null,
    "pollingintervalnum": 0
  },
  "methods": {
    "submit": function (_0x3e1e28) {
      if (this.link == "") {
        {
          this.errorTip = "请先将视频链接粘贴到上面的输入框";
          return;
        }
      }
      var _0x45a121 = this.link.lastIndexOf("http://");
      _0x45a121 = _0x45a121 === -1 ? this.link.lastIndexOf("https://") : _0x45a121;
      if (_0x45a121 === -1) {
        {
          this.errorTip = "请输入正确的视频链接";
          return;
        }
      }
      this.link = httpString(this.link.substr(_0x45a121));
      var _0x2ea3e5 = this.link.indexOf(" ");
      _0x2ea3e5 !== -1 && (this.link = this.link.substring(0, _0x2ea3e5));
      var _0x3831b4 = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z]{2,5}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
      if (this.link.length < 16 || !_0x3831b4.test(this.link)) {
        {
          this.errorTip = "请输入正确的视频链接";
          return;
        }
      }
      this.errorTip = "";
      if (isMP4File(this.link)) {
        this.has_video = true;
        this.requestResult.video = this.link;
        return;
      }
      this.jiexi();
    },
    "jiexi": function () {
      $(".button-btn").attr("disabled", "disabled");
      var _0x1c142c = this;
      _0x1c142c.cleardata();
      _0x1c142c.is_loading = true;
      var _0x163432 = httpString(_0x1c142c.link),
        _0x1c3825 = newpass(timest() + _0x163432 + this.myid);
      $.ajax({
        "type": "POST",
        "url": _0x1c142c.posturl + "/online/urlv1",
        "crossDomain": true,
        "data": {
          "link": _0x163432,
          "timestamp": timest(),
          "key": _0x1c3825
        },
        "dataType": "json",
        "success": function (_0x21a42d) {
          _0x1c142c.is_loading = false;
          $(".button-btn").attr("disabled", false);
          if (_0x21a42d.retCode == 400) {
            _0x1c142c.errorTip = _0x21a42d.retDesc;
          }
          _0x21a42d.retCode == 200 && (_0x1c142c.has_video = true, _0x1c142c.video_cover = true, _0x1c142c.requestResult.cover = _0x21a42d.data.cover, _0x1c142c.requestResult.video = _0x21a42d.data.video, _0x1c142c.requestResult.text = decodeURIComponent(_0x21a42d.data.desc));
          if (_0x21a42d.retCode == 201) {
            _0x1c142c.has_images = true;
            _0x1c142c.requestResult.images = _0x21a42d.data.images;
            _0x1c142c.requestResult.text = decodeURIComponent(_0x21a42d.data.desc);
          }
          _0x21a42d.retCode == 202 && (_0x1c142c.has_images_and_videos = true, _0x1c142c.requestResult.videos = _0x21a42d.data.videos, _0x1c142c.requestResult.images = _0x21a42d.data.images, _0x1c142c.requestResult.text = decodeURIComponent(_0x21a42d.data.desc));
        },
        "error": function (_0x3dceae) {
          _0x1c142c.is_loading = false;
          $(".button-btn").attr("disabled", false);
        }
      });
    },
    "cleardata": function () {
      this.video_cover = false;
      this.has_video = false;
      this.is_loading = false;
      this.errorTip = false;
      this.isMP4File = false;
      this.requestSuccess = false;
      this.showAllSupportLink = false;
      this.showClearBtn = false;
      this.has_images = false;
      this.requestResult.text = "";
      this.requestResult.cover = "";
      this.requestResult.video = "";
    },
    "sendVerificationCode": function (_0xc7e812) {
      if (!isValidEmail(this.email)) {
        $("#registerEmail").addClass("input-error");
        return;
      }
      var _0x16f812 = $("#sendVerificationCode"),
        _0x5d26a4 = $("#successModal");
      _0x16f812.prop("disabled", true);
      var _0xe35d04 = this,
        _0x232ae8 = newpass(timest() + _0xe35d04.email + _0xe35d04.myid);
      $.ajax({
        "type": "POST",
        "url": _0xe35d04.posturl + "/login/linesendcode",
        "crossDomain": true,
        "data": {
          "email": _0xe35d04.email,
          "timestamp": timest(),
          "key": _0x232ae8
        },
        "dataType": "json",
        "success": function (_0xd5c6d1) {
          _0xe35d04.is_loading = false;
          _0xd5c6d1.code == 400 && (_0x16f812.prop("disabled", false), $("#successmodaltitle").text("温馨提示"), $("#successmodalbody").html(_0xd5c6d1.content), _0x5d26a4.modal("show"));
          if (_0xd5c6d1.code == 200) {
            var _0x34a5f1 = 60;
            this.innerHTML = _0x34a5f1 + "s";
            var _0x159751 = setInterval(function () {
              _0x34a5f1--;
              _0x16f812.html(_0x34a5f1 + "s");
              if (_0x34a5f1 <= 0) {
                clearInterval(_0x159751);
                _0x16f812.html("再次发送");
                _0x16f812.prop("disabled", false);
                _0x34a5f1 = 60;
              }
            }, 1000);
          }
        },
        "error": function (_0x3d709) {
          _0xe35d04.is_loading = false;
          _0x16f812.prop("disabled", false);
        }
      });
    },
    "reGisterSubmit": function (_0x45063c) {
      if (!isValidEmail(this.email)) {
        {
          $("#registerEmail").addClass("input-error");
          return;
        }
      }
      if (!validatePassword(this.registerPassword)) {
        $("#registerPassword").addClass("input-error");
        return;
      }
      if (!validatePassword(this.registerPasswords)) {
        {
          $("#registerPasswords").addClass("input-error");
          return;
        }
      }
      if (this.registerPassword != this.registerPasswords) {
        {
          $("#registerPasswords").addClass("input-error");
          return;
        }
      }
      if (this.verificationCode.length != 6) {
        $("#verificationCode").addClass("input-error");
        return;
      }
      var _0x27ab6d = this,
        _0x33ce94 = newpass(timest() + _0x27ab6d.email + _0x27ab6d.myid),
        _0x4949de = $("#reGisterSubmit"),
        _0x57a8bc = $("#successModal");
      _0x4949de.prop("disabled", true);
      $.ajax({
        "type": "POST",
        "url": _0x27ab6d.posturl + "/login/linereg",
        "crossDomain": true,
        "data": {
          "email": _0x27ab6d.email,
          "timestamp": timest(),
          "key": _0x33ce94,
          "code": _0x27ab6d.verificationCode,
          "password": _0x27ab6d.registerPassword,
          "repassword": _0x27ab6d.registerPasswords
        },
        "dataType": "json",
        "success": function (_0x17e746) {
          {
            if (_0x17e746.code == 400) {
              _0x4949de.prop("disabled", false);
              $("#successmodaltitle").text("温馨提示");
              $("#successmodalbody").html(_0x17e746.content);
              _0x57a8bc.modal("show");
            }
            if (_0x17e746.code == 200) {
              _0x4949de.prop("disabled", false);
              _0x27ab6d.loginemail = _0x27ab6d.email;
              _0x27ab6d.loginpassword = _0x27ab6d.registerPassword;
              _0x27ab6d.email = "";
              _0x27ab6d.registerPassword = "";
              _0x27ab6d.registerPasswords = "";
              _0x27ab6d.verificationCode = "";
              $("#registerModal").modal("hide");
              $("#successmodaltitle").text("温馨提示");
              $("#successmodalbody").html("<p>注册成功！</p>");
              _0x57a8bc.modal("show");
            }
          }
        },
        "error": function (_0x5b10e3) {
          _0x4949de.prop("disabled", false);
        }
      });
    },
    "loginSubmit": function (_0x2d375f) {
      if (!isValidEmail(this.loginemail)) {
        $("#loginemail").addClass("input-error");
        return;
      }
      if (!validatePassword(this.loginpassword)) {
        {
          $("#loginpassword").addClass("input-error");
          return;
        }
      }
      var _0x26d511 = this,
        _0x548999 = newpass(timest() + _0x26d511.loginemail + _0x26d511.myid),
        _0x2f08fc = $("#loginSubmit"),
        _0x2e6c7a = $("#successModal");
      _0x2f08fc.prop("disabled", true);
      $.ajax({
        "type": "POST",
        "url": _0x26d511.posturl + "/login/linelogin",
        "data": {
          "email": _0x26d511.loginemail,
          "timestamp": timest(),
          "key": _0x548999,
          "password": _0x26d511.loginpassword
        },
        "dataType": "json",
        "success": function (_0x10af1b) {
          _0x10af1b.code == 400 && (_0x2f08fc.prop("disabled", false), $("#successmodaltitle").text("温馨提示"), $("#successmodalbody").html(_0x10af1b.content), _0x2e6c7a.modal("show"));
          _0x10af1b.code == 200 && (_0x2f08fc.prop("disabled", false), $("#loginModal").modal("hide"), $("#successmodaltitle").text("温馨提示"), $("#successmodalbody").html("<p>登陆成功！</p>"), _0x2e6c7a.modal("show"), isValidUser());
        },
        "error": function (_0x1d51a5) {
          _0x2f08fc.prop("disabled", false);
        }
      });
    },
    "logoutSubmit": function () {
      var _0x3ab0d = Cookies.get("_j_sg");
      if (_0x3ab0d) {
        {
          var _0x5b5b7e = Base64.decode(_0x3ab0d);
          $.ajax({
            "type": "POST",
            "url": this.posturl + "/login/linelogout",
            "crossDomain": true,
            "data": {
              "session": _0x5b5b7e
            },
            "dataType": "json",
            "success": function (_0x1a4932) {
              _0x1a4932.code == 200 && (Cookies.remove("_j_sg"), Cookies.remove("_j_ug"), isValidUser());
            },
            "error": function (_0x575571) {}
          });
        }
      }
    },
    "paySubmit": function () {
      var _0x3e53b6 = this;
      _0x3e53b6.pollingintervalId && (clearInterval(_0x3e53b6.pollingintervalId), _0x3e53b6.pollingintervalnum = 0);
      var _0x16692c = $("#payModal"),
        _0xc4d821 = $("#ftfModal"),
        _0x5075a2 = $("#successModal"),
        _0xef0f7a = $("#countdown"),
        _0x1ac77f = $("#paynum").html(),
        _0x5e52fb = Cookies.get("_j_sg");
      if (_0x5e52fb && _0x1ac77f != 0) {
        var _0x14a9f8 = Base64.decode(_0x5e52fb),
          _0x3e2c1e = timest(),
          _0xc79a0d = newpass(_0x3e2c1e + _0x1ac77f + _0x3e53b6.myid);
        $.ajax({
          "type": "POST",
          "url": _0x3e53b6.posturl + "/pay/create",
          "crossDomain": true,
          "data": {
            "token": _0x14a9f8,
            "money": _0x1ac77f,
            "timestamp": _0x3e2c1e,
            "key": _0xc79a0d
          },
          "dataType": "json",
          "success": function (_0x49054e) {
            {
              if (_0x49054e.code == 200) {
                {
                  _0x16692c.modal("hide");
                  $("#qrcode").html("<img src=\"" + _0x49054e.qr + "\" alt=\"支付宝二维码\" />");
                  _0xc4d821.modal("show");
                  var _0x144f06 = 300;
                  _0x3e53b6.payintervalId && (clearInterval(_0x3e53b6.payintervalId), _0xef0f7a.text(_0x144f06));
                  _0x3e53b6.payintervalId = setInterval(function () {
                    _0x144f06--;
                    _0xef0f7a.text(_0x144f06);
                    if (_0x144f06 <= 0) {
                      clearInterval(_0x3e53b6.payintervalId);
                      _0xc4d821.modal("hide");
                      $("#successmodaltitle").text("温馨提示");
                      $("#successmodalbody").html("<p>支付二维码已过期,请重新生成!</p>");
                      _0x16692c.modal("show");
                      _0x5075a2.modal("show");
                    }
                  }, 1000);
                  _0x3e53b6.pollingintervalId = setInterval(function () {
                    _0x3e53b6.polling(_0x49054e.orderid);
                  }, 5000);
                }
              } else _0x49054e.code == 300 && (Cookies.remove("_j_sg"), Cookies.remove("_j_ug"), isValidUser()), $("#successmodaltitle").text("温馨提示"), $("#successmodalbody").html(_0x49054e.content), _0x5075a2.modal("show");
            }
          },
          "error": function (_0x146331) {}
        });
      }
    },
    "polling": function (_0x31fd4a) {
      var _0xa27483 = this,
        _0x5210fa = $("#payModal"),
        _0x1f0de5 = $("#ftfModal"),
        _0x2bf21a = $("#successModal");
      _0x31fd4a != "" && $.ajax({
        "type": "POST",
        "url": _0xa27483.posturl + "/pay/polling",
        "crossDomain": true,
        "data": {
          "orderid": _0x31fd4a
        },
        "dataType": "json",
        "success": function (_0x265e1e) {
          {
            if (_0x265e1e.code == "200") {
              {
                _0x5210fa.modal("hide");
                _0x1f0de5.modal("hide");
                clearInterval(_0xa27483.pollingintervalId);
                $("#successmodaltitle").text("温馨提示");
                $("#successmodalbody").html("<p>支付成功</p>");
                _0x2bf21a.modal("show");
                isValidUser();
              }
            } else _0xa27483.pollingintervalnum++, _0xa27483.pollingintervalnum > 50 && _0xa27483.pollingintervalId && (clearInterval(_0xa27483.pollingintervalId), $("#successmodaltitle").text("温馨提示"), $("#successmodalbody").html("<p>长时间未检测到支付...</p>"), _0x2bf21a.modal("show"));
          }
        },
        "error": function (_0x78818b) {}
      });
    },
    "gettoken": function () {
      $.ajax({
        "type": "GET",
        "url": this.posturl + "/login/linetoken",
        "crossDomain": true,
        "dataType": "json",
        "success": function (_0x128c75) {
          _0x128c75.code == "200" ? isValidUser() : (Cookies.remove("_j_sg"), Cookies.remove("_j_ug"), isValidUser());
        },
        "error": function (_0x40f192) {}
      });
    }
  }
});