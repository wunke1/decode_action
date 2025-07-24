//Thu Jul 24 2025 03:59:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var jq = jQuery.noConflict();
jq(function () {
  jq("#sd-search-form").on("submit", function (_0x14f60b) {
    _0x14f60b.preventDefault();
    const _0x1311ce = jq("#s_input").val(),
      _0x5ec35f = /(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/gi,
      _0x4f872c = _0x1311ce.match(_0x5ec35f);
    if (!_0x4f872c) {
      {
        _0x300273("error", "请输入正确的链接地址!");
        return;
      }
    }
    const _0x4cef74 = _0x4f872c[0];
    jq("#sd-title").hide();
    jq("#loader-wrapper").fadeIn();
    let _0x384125 = "https://api.wzjun.com/all2/ajaxapi";
    const _0x5c4775 = window.location.pathname.toLowerCase();
    if (_0x5c4775.includes("/weibo-img")) _0x384125 = "https://api.wzjun.com/all2/ajaxapi";else {
      if (_0x5c4775.includes("/rednote-live-photo")) _0x384125 = "https://api.wzjun.com/all2/live/live_api";else {
        if (_0x5c4775.includes("/kuaishou-music") || _0x5c4775.includes("/kuaishou-audio")) _0x384125 = "https://api.wzjun.com/all2/ksau/ksauapi";else {
          if (_0x5c4775.includes("/douyin-audio") || _0x5c4775.includes("/douyin-music")) _0x384125 = "https://api.wzjun.com/all2/dy/dyauapi";else {
            if (_0x5c4775.includes("/weibo")) _0x384125 = "https://api.wzjun.com/all2/weibo/wb";else _0x5c4775.includes("/ins-img") && (_0x384125 = "https://api.wzjun.com/all2/ins/ins_imgapi");
          }
        }
      }
    }
    jq.ajax({
      "url": _0x384125,
      "type": "POST",
      "data": {
        "url": _0x4cef74
      },
      "dataType": "json",
      "beforeSend": function (_0x3cc61a) {
        {
          const _0x1ae2a5 = Date.now(),
            _0x536387 = "jyS9CJpNmeRA8fuKkeaF",
            _0x5b5d60 = md5(_0x4cef74 + _0x1ae2a5 + _0x536387);
          _0x3cc61a.setRequestHeader("W-Timestamp", _0x1ae2a5);
          _0x3cc61a.setRequestHeader("W-Code", _0x5b5d60);
        }
      },
      "success": function (_0x4f6656) {
        {
          if (_0x4f6656.msg !== "请求成功") {
            _0x300273("error", "解析错误，请重试！");
            jq("#sd-title").show();
            return;
          }
          jq("#ads-content").html(_0x4f6656.ads_content);
          const _0x176835 = jq("#download-manager").hide();
          if (_0x4f6656.type === "图集") _0x3cdd7f(_0x4f6656), _0x176835.insertAfter(jq("#search-content .textarea-container")).show();else {
            if (_0x4f6656.type === "视频") _0x10af7a(_0x4f6656), _0x176835.insertAfter(jq("#search-content .description-container")).show();else {
              if (_0x4f6656.type === "音频") {
                _0x10af7a(_0x4f6656);
                _0x176835.insertAfter(jq("#search-content .description-container")).show();
              } else _0x4f6656.type === "live图片" && (_0x1d4311(_0x4f6656), _0x176835.insertAfter(jq("#search-content .textarea-container")).show());
            }
          }
        }
      },
      "error": function () {
        _0x300273("error", "请求失败,请稍后重试!");
        jq("#sd-title").show();
      },
      "complete": function () {
        jq("#loader-wrapper").fadeOut();
      }
    });
  });
  function _0x1d4311(_0x28f49d) {
    {
      let _0xff9536 = "\n    <div class=\"long-model posts-10\">\n        <div class=\"container\">\n                <span class=\"model-title\">实况内容</span>\n                <a href=\"javascript:void(0)\" class=\"more sd-back\" onclick=\"window.location.reload()\">返回</a>\n                <a class=\"more batch-down\"><span class=\"batch-font\">批量下载</span>\n                <div class=\"checkbox\">\n                    <input class=\"tgl\" id=\"toggle\" type=\"checkbox\">\n                    <label class=\"tgl-btn\" for=\"toggle\"></label>\n                </div>\n            </a>\n            <h2 class=\"mt-800 mb-0 text-center\">描述</h2>           \n            <div class=\"textarea-container\">\n                <textarea id=\"image-comment\" name=\"comment\" rows=\"5\" placeholder=\"在此编辑或复制\" class=\"comment-input sd-image\">" + _0x28f49d.desc + "</textarea>\n                <button class=\"text-copy\" id=\"copy-description\">\n                    <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\">\n                        <path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"/>\n                    </svg>\n                    <span>复制描述内容</span>\n                </button>\n            </div>\n        <div class=\"pl-option\">\n            <a href=\"javascript:void(0)\" class=\"image-download\" style=\"display:none\">下载选中视频</a>\n            <a href=\"javascript:void(0)\" class=\"image-all\" style=\"display:none\">全选</a>\n            <a href=\"javascript:void(0)\" class=\"image-cancel\" style=\"display:none\">取消选中</a>\n            <div class=\"download-cover-option\" style=\"display:none\">\n                <label class=\"cover-checkbox-container\">\n                    <input type=\"checkbox\" id=\"download-cover-checkbox\">\n                    <span class=\"cover-checkbox-checkmark\"></span>\n                    <span class=\"cover-checkbox-text\">同时下载封面</span>\n                </label>\n            </div>\n        </div> \n            <div class=\"sd-imgrow postLists cards\">";
      _0x28f49d.livePhoto && _0x28f49d.livePhoto.length > 0 && _0x28f49d.livePhoto.forEach((_0x1abe77, _0x43ca92) => {
        {
          const _0x103092 = _0x1abe77.url,
            _0x24785a = _0x1abe77.cover;
          _0xff9536 += "\n            <div id=\"image-" + _0x43ca92 + "\" class=\"col-xxs-6 col-xs-4 col-md-3 post-card-wrapper\">\n                <div class=\"checkbox-container\" style=\"display:none\">\n                    <label class=\"checkbox-label\">\n                        <input class=\"checkbox-input\" type=\"checkbox\" />\n                        <span class=\"checkbox-custom\"></span>\n                    </label>\n                </div>\n                <div class=\"post-item m-card\" style=\"--d-color: #0488ce;--l-color: #4bbffc;--s-color: rgba(4,136,206,0.5)\">\n                    <span class=\"img flex-shrink-0 live-photo-container\" style=\"background-image: url('" + _0x24785a + "');\">\n                        <video class=\"live-photo-video\" src=\"" + _0x103092 + "\" muted loop preload=\"metadata\" poster=\"" + _0x24785a + "\"></video>\n                        <span class=\"date\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-icon\" height=\"14\">\n                                <path d=\"M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z\"></path>\n                            </svg>\n                        </span>\n                    </span>\n                    <div class=\"infos\">\n                        <div class=\"title\">Live Photo-" + (_0x43ca92 + 1) + "</div>\n                        <div class=\"metas\">\n                        <span class=\"likes image-size\">大小:加载中...</span>\n                        <span class=\"comments image-format\">格式:加载中...</span>\n                        </div>\t\t\t\t\t\n                        <a href=\"javascript:void(0)\" class=\"go\" data-url=\"" + _0x103092 + "\">下载实况视频</a>\n                        <a href=\"javascript:void(0)\" class=\"go\" data-url=\"" + _0x24785a + "\">下载实况封面</a>\n                    </div>\n                </div>\n            </div>";
          fetch(_0x103092, {
            "method": "GET"
          }).then(_0x20f9f7 => {
            const _0x405975 = _0x20f9f7.headers.get("content-length");
            let _0x43b85a = "未知";
            if (_0x405975) {
              {
                if (_0x405975 < 1048576) {
                  const _0x3c6716 = (_0x405975 / 1024).toFixed(2);
                  _0x43b85a = _0x3c6716 + "KB";
                } else {
                  {
                    const _0x493de4 = (_0x405975 / 1048576).toFixed(2);
                    _0x43b85a = _0x493de4 + "MB";
                  }
                }
              }
            }
            const _0x24aa69 = _0x20f9f7.headers.get("content-type");
            let _0x22e72a = "未知";
            if (_0x24aa69) {
              const _0x459647 = _0x24aa69.split("/");
              _0x459647.length > 1 && (_0x22e72a = _0x459647[1].toUpperCase());
            }
            jq("#image-" + _0x43ca92 + " .image-size").html("大小:" + _0x43b85a);
            jq("#image-" + _0x43ca92 + " .image-format").html("格式:" + _0x22e72a);
          }).catch(_0x477c1c => {
            console.error("获取视频信息失败:", _0x477c1c);
            jq("#image-" + _0x43ca92 + " .image-size").html("大小:未知");
            jq("#image-" + _0x43ca92 + " .image-format").html("格式:未知");
          });
        }
      });
      _0xff9536 += "</div></div></div>";
      jq("#search-content").html(_0xff9536).fadeIn();
      jq(".post-card-wrapper").hide().each(function (_0x403fb1) {
        jq(this).delay(200 * _0x403fb1).fadeIn();
      });
      _0x2ef7f8();
      _0xf839e7();
      _0x32d1a5();
    }
  }
  function _0xf839e7() {
    jq(".live-photo-container").hover(function () {
      const _0x2eba6f = jq(this).find("video")[0];
      _0x2eba6f && (_0x2eba6f.play(), jq(this).addClass("playing"));
    }, function () {
      const _0x1da139 = jq(this).find("video")[0];
      _0x1da139 && (_0x1da139.pause(), jq(this).removeClass("playing"));
    });
  }
  function _0x32d1a5() {
    jq(".go-cover").click(function () {
      const _0x3805ba = jq(this).data("url");
      if (_0x3805ba) _0x15f89c(_0x3805ba, "image", this);else {
        _0x300273("error", "封面图片链接无效！");
      }
    });
  }
  function _0x3cdd7f(_0x1cc5f8) {
    {
      let _0x5f0a68 = "\n    <div class=\"long-model posts-10\">\n        <div class=\"container\">\n            <span class=\"model-title\">图集内容</span>\n            <a href=\"javascript:void(0)\" class=\"more sd-back\" onclick=\"window.location.reload()\">返回</a>\n             <a class=\"more batch-down\"><span class=\"batch-font\">批量下载</span>\n                <div class=\"checkbox\">\n                    <input class=\"tgl\" id=\"toggle\" type=\"checkbox\">\n                    <label class=\"tgl-btn\" for=\"toggle\"></label>\n                </div>\n            </a>\n            <h2 class=\"mt-800 mb-0 text-center\">描述</h2>\n            <div class=\"textarea-container\">\n                <textarea id=\"image-comment\" name=\"comment\" rows=\"5\" placeholder=\"在此编辑或复制\" class=\"comment-input sd-image\">" + _0x1cc5f8.desc + "</textarea>\n                <button class=\"text-copy\" id=\"copy-description\">\n                    <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\">\n                        <path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"/>\n                    </svg>\n                    <span>复制描述内容</span>\n                </button>\n            </div>\n            <div class=\"pl-option\">\n            <a href=\"javascript:void(0)\" class=\"image-download\" style=\"display:none\">下载选中图片</a>\n            <a href=\"javascript:void(0)\" class=\"image-all\" style=\"display:none\">全选</a>\n            <a href=\"javascript:void(0)\" class=\"image-cancel\" style=\"display:none\">取消选中</a>\n            </div>\n            <div class=\"sd-imgrow postLists cards\">";
      _0x1cc5f8.images.forEach((_0x58f697, _0x41ca38) => {
        fetch(_0x58f697, {
          "method": "GET"
        }).then(_0x379c9c => {
          {
            let _0x5f06a4 = _0x379c9c.headers.get("content-length");
            !_0x5f06a4 && (_0x5f06a4 = _0x379c9c.headers.get("x-length"));
            let _0x25366d = _0x379c9c.headers.get("content-type");
            if (_0x25366d) _0x25366d = _0x25366d.split("/")[1];else {
              {
                const _0x328490 = _0x379c9c.headers.get("imagex-fmt");
                if (_0x328490 && _0x328490.includes("2")) {
                  _0x25366d = _0x328490.split("2")[0];
                } else _0x25366d = "未知";
              }
            }
            let _0x40efca;
            if (_0x5f06a4 < 1048576) {
              {
                const _0x174b8f = (_0x5f06a4 / 1024).toFixed(2);
                _0x40efca = _0x174b8f + "KB";
              }
            } else {
              const _0x4c9d39 = (_0x5f06a4 / 1048576).toFixed(2);
              _0x40efca = _0x4c9d39 + "MB";
            }
            jq("#image-" + _0x41ca38 + " .image-size").html("大小:" + _0x40efca);
            jq("#image-" + _0x41ca38 + " .image-format").html("格式:" + _0x25366d);
          }
        }).catch(_0x1cbdc1 => {
          console.error("获取图片信息失败:", _0x1cbdc1);
          jq("#image-" + _0x41ca38 + " .image-size").html("大小:未知");
          jq("#image-" + _0x41ca38 + " .image-format").html("格式:未知");
        });
        _0x5f0a68 += "\n            <div id=\"image-" + _0x41ca38 + "\" class=\"col-xxs-6 col-xs-4 col-md-3 post-card-wrapper\">\n                <div class=\"checkbox-container\" style=\"display:none\">\n                    <label class=\"checkbox-label\">\n                        <input class=\"checkbox-input\" type=\"checkbox\" />\n                        <span class=\"checkbox-custom\"></span>\n                    </label>\n                </div>\n                <div class=\"post-item m-card\" style=\"--d-color: #0488ce;--l-color: #4bbffc;--s-color: rgba(4,136,206,0.5)\">\n                    <span class=\"img flex-shrink-0\" style=\"background-image: url('" + _0x58f697 + "');\">\n                        <span class=\"date\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"svg-icon\" height=\"14\">\n                                <path d=\"M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z\"></path>\n                            </svg>\n                        </span>\n                    </span>\n                    <div class=\"infos\">\n                        <div class=\"title\">图片-" + (_0x41ca38 + 1) + "</div>\n                        <div class=\"metas\">\n                        <span class=\"likes image-size\">大小:加载中...</span>\n                        <span class=\"comments image-format\">格式:加载中...</span>\n                        </div>\t\t\n                    <div class=\"button-container\">    \t\t\t\n                        <a href=\"javascript:void(0)\" class=\"go\" data-url=\"" + _0x58f697 + "\" rel=\"noreferrer noopener nofollow\">\n                            <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" style=\"vertical-align: middle; margin-right: 4px;\">\n                                <path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"/>\n                            </svg>\n                            下载图片\n                        </a>\n   \n                        <a href=\"" + _0x58f697 + "\" target=\"_blank\" class=\"go-open\" rel=\"noreferrer noopener nofollow\">\n                            <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" style=\"vertical-align: middle; margin-right: 4px;\">\n                                <path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/>\n                            </svg>\n                            打开链接\n                        </a> \n                    </div>   \n                 </div>\n            </div>\n        </div>";
      });
      _0x5f0a68 += "</div></div></div>";
      jq("#search-content").html(_0x5f0a68).fadeIn();
      jq(".post-card-wrapper").hide().each(function (_0x2ede87) {
        jq(this).delay(200 * _0x2ede87).fadeIn();
      });
      _0x2ef7f8();
    }
  }
  function _0x10af7a(_0x26f2b0) {
    {
      window.currentVideoSource = _0x26f2b0.name;
      const _0x3b4edb = "\n        <div class=\"video-template\">\n            <div class=\"video-header\">\n                <h1 class=\"video-title\">" + (_0x26f2b0.name || "视频内容") + "</h1>\n                <a href=\"javascript:void(0)\" class=\"back-button\" onclick=\"window.location.reload()\">\n                    <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                        <path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/>\n                    </svg>\n                    <span>返回</span>\n                </a>\n            </div>\n            \n            <div class=\"video-content\">\n                <div class=\"video-preview-container\">\n                <div class=\"video-preview\">\n                    <img src=\"" + _0x26f2b0.cover + "\" alt=\"视频封面\" class=\"preview-image\">\n                    <select id=\"quality-selector\" class=\"quality-selector\">\n                        <!-- 选项将由 JS 动态添加 -->\n                    </select>\n                    <div class=\"play-button\" id=\"play-preview\">\n                        <svg viewBox=\"0 0 24 24\" width=\"48\" height=\"48\">\n                            <path d=\"M8 5v14l11-7z\"/>\n                        </svg>\n                    </div>\n                </div>\n                    <div class=\"cover-download\">\n                        <a href=\"" + _0x26f2b0.cover + "\" target=\"_blank\"  class=\"go-open\" style=\"margin-bottom: 0px;\" rel=\"noreferrer noopener nofollow\">\n                            <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" style=\"vertical-align: middle; margin-right: 4px;\">\n                                <path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/>\n                            </svg>\n                            打开链接\n                        </a>                 \n                        <button class=\"download-cover-btn\" data-url=\"" + _0x26f2b0.cover + "\">\n                            <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\">\n                                <path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"/>\n                            </svg>\n                            <span>下载封面</span>\n                        </button>\n                    </div>\n                </div>\n                \n                <div class=\"video-info\">\n                    <div class=\"description-container\">\n                        <h3>视频描述</h3>\n                        <div class=\"description-content\">\n                            <textarea id=\"video-comment\" readonly>" + (_0x26f2b0.desc || "暂无描述") + "</textarea>\n                            <button class=\"copy-btn\" id=\"copy-description\">\n                                <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\">\n                                    <path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z\"/>\n                                </svg>\n                                <span>复制描述内容</span>\n                            </button>\n                        </div>\n                    </div>\n                    \n            <div class=\"download-container\">\n                <div class=\"download-tabs\">\n                    <button class=\"tab-btn active\" data-tab=\"video-tab\">视频下载</button>\n                    <button class=\"tab-btn\" data-tab=\"backup-tab\">备用下载</button>\n                    <button class=\"tab-btn\" data-tab=\"audio-tab\">音频下载</button>\n                    <button class=\"tab-btn\" data-tab=\"subtitle-tab\">字幕下载</button>\n                </div>\n                \n                <div class=\"video-tab-content\">\n                    <div id=\"video-tab\" class=\"tab-pane active\">\n                        <div class=\"download-list\" id=\"video-download-list\">\n                            <!-- 视频下载选项将通过JS动态添加 -->\n                            <div class=\"loading-indicator\">加载中...</div>\n                        </div>\n                    </div>\n                            \n                            <div id=\"backup-tab\" class=\"tab-pane\">\n                                <div class=\"download-list\" id=\"backup-download-list\">\n                                    <!-- 备用下载选项将通过JS动态添加 -->\n                                    <div class=\"loading-indicator\">加载中...</div>\n                                </div>\n                            </div>\n                            \n                            <div id=\"audio-tab\" class=\"tab-pane\">\n                                <div class=\"download-list\" id=\"audio-download-list\">\n                                    <!-- 音频下载选项将通过JS动态添加 -->\n                                    <div class=\"loading-indicator\">加载中...</div>\n                                </div>\n                            </div>\n                            \n                            <div id=\"subtitle-tab\" class=\"tab-pane\">\n                                <div class=\"download-list\" id=\"subtitle-download-list\">\n                                    <!-- 字幕下载选项将通过JS动态添加 -->\n                                    <div class=\"no-content\">暂无字幕可下载</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <!-- 视频预览模态窗口 -->\n        <div class=\"video-modal\" id=\"video-modal\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h3>视频预览</h3>\n                    <button class=\"close-modal\">\n                        <svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n                            <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>\n                        </svg>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <video id=\"preview-video\" controls>\n                        <source src=\"\" type=\"video/mp4\">\n                        您的浏览器不支持视频播放\n                    </video>\n                </div>\n            </div>\n        </div>";
      jq("#search-content").html(_0x3b4edb).fadeIn();
      _0x45284f(_0x26f2b0);
    }
  }
  function _0x45284f(_0x3d24dc) {
    jq(".tab-btn").click(function () {
      {
        const _0x159ee7 = jq(this).data("tab");
        jq(".tab-btn").removeClass("active");
        jq(this).addClass("active");
        jq(".video-tab-content .tab-pane").removeClass("active").hide();
        jq("#" + _0x159ee7).addClass("active").fadeIn(300);
      }
    });
    const _0x190fa5 = jq("#quality-selector");
    _0x190fa5.empty();
    let _0x2d2feb = false;
    if (Array.isArray(_0x3d24dc.video) && _0x3d24dc.video.length > 0) _0x3d24dc.video.forEach(_0x44c101 => {
      if (_0x44c101.vid_url && _0x44c101.vid_quality) {
        _0x190fa5.append("<option value=\"" + _0x44c101.vid_url + "\">" + _0x44c101.vid_quality + "</option>");
        _0x2d2feb = true;
      }
    });else {
      if (_0x3d24dc.video && typeof _0x3d24dc.video === "object" && _0x3d24dc.video.vid_url && _0x3d24dc.video.vid_quality) {
        _0x190fa5.append("<option value=\"" + _0x3d24dc.video.vid_url + "\">" + _0x3d24dc.video.vid_quality + "</option>");
        _0x2d2feb = true;
      }
    }
    if (!_0x2d2feb && Array.isArray(_0x3d24dc.backup_video) && _0x3d24dc.backup_video.length > 0) _0x3d24dc.backup_video.forEach(_0x5dd6c0 => {
      _0x5dd6c0.bk_url && _0x5dd6c0.bk_quality && (_0x190fa5.append("<option value=\"" + _0x5dd6c0.bk_url + "\">" + _0x5dd6c0.bk_quality + " (备用)</option>"), _0x2d2feb = true);
    });else !_0x2d2feb && _0x3d24dc.backup_video && typeof _0x3d24dc.backup_video === "object" && _0x3d24dc.backup_video.bk_url && _0x3d24dc.backup_video.bk_quality && (_0x190fa5.append("<option value=\"" + _0x3d24dc.backup_video.bk_url + "\">" + _0x3d24dc.backup_video.bk_quality + " (备用)</option>"), _0x2d2feb = true);
    !_0x2d2feb && _0x190fa5.hide();
    jq("#play-preview").click(function () {
      let _0x296fcc = _0x190fa5.is(":visible") ? _0x190fa5.val() : "";
      if (!_0x296fcc) {
        if (Array.isArray(_0x3d24dc.video) && _0x3d24dc.video.length > 0 && _0x3d24dc.video[0].vid_url) _0x296fcc = _0x3d24dc.video[0].vid_url;else {
          if (_0x3d24dc.video && typeof _0x3d24dc.video === "object" && _0x3d24dc.video.vid_url) _0x296fcc = _0x3d24dc.video.vid_url;else {
            if (Array.isArray(_0x3d24dc.backup_video) && _0x3d24dc.backup_video.length > 0 && _0x3d24dc.backup_video[0].bk_url) _0x296fcc = _0x3d24dc.backup_video[0].bk_url;else _0x3d24dc.backup_video && typeof _0x3d24dc.backup_video === "object" && _0x3d24dc.backup_video.bk_url && (_0x296fcc = _0x3d24dc.backup_video.bk_url);
          }
        }
      }
      _0x296fcc ? (jq("#preview-video source").attr("src", _0x296fcc), jq("#preview-video")[0].load(), jq("#preview-video")[0].play(), jq("#video-modal").fadeIn(300).css("display", "flex")) : _0x300273("error", "没有可预览的视频");
    });
    jq(".close-modal").click(function () {
      jq("#preview-video")[0].pause();
      jq("#video-modal").fadeOut(300);
    });
    jq("#video-modal").click(function (_0x360973) {
      _0x360973.target === this && (jq("#preview-video")[0].pause(), jq("#video-modal").fadeOut(300));
    });
    jq("#copy-description").click(function () {
      const _0x8362d8 = jq("#video-comment").val();
      _0x65eaa5(_0x8362d8) ? _0x300273("success", "复制成功！") : _0x300273("error", "复制失败，请手动复制！");
    });
    jq(".copy-cover").click(function () {
      const _0x29a62e = jq(this).data("url");
      _0x65eaa5(_0x29a62e) ? _0x300273("success", "封面链接已复制！") : _0x300273("error", "复制失败，请手动复制！");
    });
    jq(".download-cover-btn").click(function () {
      const _0x574b98 = jq(this).data("url");
      _0x574b98 ? _0x15f89c(_0x574b98, "image", this) : _0x300273("error", "封面图片链接无效！");
    });
    _0x2b066e(_0x3d24dc);
  }
  function _0x2b066e(_0x22b41a) {
    jq("#video-download-list, #backup-download-list, #audio-download-list").empty();
    const _0x320628 = Array.isArray(_0x22b41a.video) && _0x22b41a.video.length > 0,
      _0x27bfc1 = Array.isArray(_0x22b41a.backup_video) && _0x22b41a.backup_video.length > 0,
      _0x340db4 = Array.isArray(_0x22b41a.audio) && _0x22b41a.audio.length > 0;
    if (_0x320628) _0x22b41a.video.forEach(_0x5be865 => {
      _0x3aa555("#video-download-list", _0x5be865.vid_url, _0x5be865.vid_quality, _0x5be865.vid_size, "video");
    });else {
      if (_0x22b41a.video && typeof _0x22b41a.video === "object") _0x3aa555("#video-download-list", _0x22b41a.video.vid_url, _0x22b41a.video.vid_quality, _0x22b41a.video.vid_size, "video");else {
        jq("#video-download-list").html("<div class=\"no-content\">暂无视频可下载</div>");
      }
    }
    if (_0x27bfc1) _0x22b41a.backup_video.forEach(_0xd4c949 => {
      _0x3aa555("#backup-download-list", _0xd4c949.bk_url, _0xd4c949.bk_quality, _0xd4c949.bk_size, "video");
    });else _0x22b41a.backup_video && typeof _0x22b41a.backup_video === "object" ? _0x3aa555("#backup-download-list", _0x22b41a.backup_video.bk_url, _0x22b41a.backup_video.bk_quality, _0x22b41a.backup_video.bk_size, "video") : jq("#backup-download-list").html("<div class=\"no-content\">暂无备用视频可下载</div>");
    if (_0x340db4) _0x22b41a.audio.forEach(_0x2110cc => {
      _0x3aa555("#audio-download-list", _0x2110cc.audio_url, _0x2110cc.audio_quality, _0x2110cc.audio_size, "audio");
    });else {
      if (_0x22b41a.audio && typeof _0x22b41a.audio === "object") _0x3aa555("#audio-download-list", _0x22b41a.audio.audio_url, _0x22b41a.audio.audio_quality, _0x22b41a.audio.audio_size, "audio");else {
        jq("#audio-download-list").html("<div class=\"no-content\">暂无音频可下载</div>");
      }
    }
    if (!_0x320628 && !_0x27bfc1 && !_0x340db4) jq(".download-tabs").hide(), jq(".video-tab-content").html("<div class=\"no-content\">暂无可下载内容</div>");else {
      jq(".download-tabs").show();
      if (_0x320628) jq(".tab-btn[data-tab=\"video-tab\"]").click();else {
        if (_0x27bfc1) jq(".tab-btn[data-tab=\"backup-tab\"]").click();else _0x340db4 && jq(".tab-btn[data-tab=\"audio-tab\"]").click();
      }
    }
  }
  function _0x3aa555(_0x1b4e82, _0x19b158, _0x2e1569, _0x1aaddd, _0xa666f9) {
    {
      if (!_0x19b158) return;
      const _0x4ab834 = _0xa666f9 === "audio",
        _0x4057e5 = _0x4ab834 ? "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\">\n            <path d=\"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z\"/>\n        </svg>" : "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\">\n            <path d=\"M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z\"/>\n        </svg>",
        _0x4c6d08 = _0x4ab834 ? "下载音频" : "下载视频",
        _0x474b0f = "size-" + Date.now(),
        _0x6fb2ba = "\n    <div class=\"video-download-item\">\n        <div class=\"item-info\">\n            <div class=\"item-icon\">" + _0x4057e5 + "</div>\n            <div class=\"item-details\">\n                <div class=\"item-quality\">" + (_0x2e1569 || "高质量") + "</div>\n                <div class=\"item-size " + _0x474b0f + "\">" + (_0x1aaddd || "加载中...") + "</div>\n            </div>\n        </div>\n        <div class=\"item-actions\">\n                <a href=\"" + _0x19b158 + "\" target=\"_blank\" class=\"go-open\" style=\"margin-bottom: 0px;\" rel=\"noreferrer noopener nofollow\">\n                    <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" style=\"vertical-align: middle; margin-right: 4px;\">\n                        <path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/>\n                    </svg>\n                    打开链接\n                </a>\n            <button class=\"download-btn\" data-url=\"" + _0x19b158 + "\" data-type=\"" + _0xa666f9 + "\">\n                <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\">\n                    <path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\"/>\n                </svg>\n                <span>" + _0x4c6d08 + "</span>\n            </button>\n        </div>\n    </div>";
      jq(_0x1b4e82).append(_0x6fb2ba);
      jq(_0x1b4e82 + " .copy-link-btn").last().click(function () {
        {
          const _0xea421e = jq(this).data("url");
          _0x65eaa5(_0xea421e) ? _0x300273("success", "链接已复制！") : _0x300273("error", "复制失败，请手动复制！");
        }
      });
      !_0x1aaddd && _0x13965b(_0x19b158, _0x1b4e82 + " ." + _0x474b0f);
      jq(_0x1b4e82 + " .preview-btn").last().click(function () {
        const _0x58a190 = jq(this).data("url");
        jq("#preview-video source").attr("src", _0x58a190);
        jq("#preview-video")[0].load();
        jq("#video-modal").fadeIn(300).css("display", "flex");
      });
      jq(_0x1b4e82 + " .download-btn").last().click(function () {
        const _0x4a88df = jq(this).data("url"),
          _0x3e41c7 = jq(this).data("type");
        _0x4a88df ? _0x15f89c(_0x4a88df, _0x3e41c7, this) : _0x300273("error", "下载链接无效！");
      });
    }
  }
  function _0x13965b(_0x2f523e, _0x4ff8e6) {
    if (!_0x2f523e) return;
    fetch(_0x2f523e, {
      "method": "HEAD"
    }).then(_0x21f530 => {
      const _0x5b602a = _0x21f530.headers.get("content-length");
      if (_0x5b602a) {
        {
          const _0x719d6e = (_0x5b602a / 1048576).toFixed(2);
          jq(_0x4ff8e6).text(_0x719d6e + " MB");
        }
      }
    }).catch(_0x53b42b => {
      console.error("Error getting file size:", _0x53b42b);
      jq(_0x4ff8e6).text("未知大小");
    });
  }
  function _0x65eaa5(_0x4a1332) {
    try {
      const _0x13919b = document.createElement("textarea");
      _0x13919b.value = _0x4a1332;
      document.body.appendChild(_0x13919b);
      _0x13919b.select();
      const _0x466ac9 = navigator.clipboard.writeText(_0x4a1332).then(() => true).catch(() => false);
      document.body.removeChild(_0x13919b);
      return _0x466ac9;
    } catch (_0x31189f) {
      console.error("Copy failed:", _0x31189f);
      return false;
    }
  }
  function _0x300273(_0x13d19b, _0x468370) {
    const _0x4db2f0 = document.createElement("div");
    _0x4db2f0.className = "tip " + _0x13d19b + " tip-animate";
    _0x4db2f0.innerHTML = "<p>" + _0x468370 + "</p>";
    document.getElementById("sd-tip").appendChild(_0x4db2f0);
    setTimeout(() => {
      _0x4db2f0.classList.add("tip-fadeout");
      setTimeout(() => {
        _0x4db2f0.parentNode && _0x4db2f0.parentNode.removeChild(_0x4db2f0);
      }, 500);
    }, 4500);
  }
  const _0x235260 = "\n        <div id=\"download-manager\" class=\"download-manager\" style=\"display: none;\">\n            <div class=\"floating-button\">\n                <i class=\"down-manage\"></i>\n                <span class=\"download-count\">0</span>\n            </div>\n            <div class=\"download-window\" style=\"display: none;\">\n                <div class=\"window-header\">\n                    <div class=\"tab-container\">\n                        <button class=\"tab-button active\" data-tab=\"tasks\">下载中</button>\n                        <button class=\"tab-button\" data-tab=\"completed\">已完成</button>\n                    </div>\n                    <div class=\"window-controls\">\n                        <button class=\"close-button\"><i class=\"down-close\"></i></button>\n                    </div>\n                </div>\n                <div class=\"download-tab-content\">\n                    <div id=\"tasks\" class=\"tab-pane active\">\n                        <div class=\"download-content\"></div>\n                    </div>\n                    <div id=\"completed\" class=\"tab-pane\" style=\"display: none;\">\n                        <div class=\"completed-list\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n";
  jq("body").append(_0x235260);
  _0x8402f1();
  function _0x8402f1() {
    const _0x457f34 = jq("#download-manager"),
      _0x15f455 = _0x457f34.find(".download-window"),
      _0x433d44 = _0x457f34.find(".floating-button"),
      _0x44ed97 = _0x457f34.find(".download-count");
    let _0x2545a0 = [],
      _0x1ccf3b = 0;
    _0x44ed97.hide();
    function _0x27df24() {
      jq("#download-manager .tab-button").click(function () {
        {
          const _0x3fc9c1 = jq(this).data("tab");
          jq("#download-manager .tab-button").removeClass("active");
          jq(this).addClass("active");
          jq("#download-manager .download-tab-content .tab-pane").removeClass("active").hide();
          jq("#download-manager #" + _0x3fc9c1).addClass("active").show();
        }
      });
    }
    function _0x177a45(_0x22165b, _0x6d0c35, _0xe43fb4 = new Date()) {
      const _0x5ba283 = {
        "filename": _0x22165b,
        "filesize": _0x6d0c35,
        "date": _0xe43fb4.toLocaleString()
      };
      _0x2545a0.unshift(_0x5ba283);
      _0x2aad0d();
    }
    function _0x2aad0d() {
      const _0x488d6f = jq("#completed .completed-list");
      _0x488d6f.empty();
      if (_0x2545a0.length === 0) {
        _0x488d6f.append("\n                <div class=\"no-completed-downloads\">\n                    <p>暂无已完成的下载</p>\n                </div>\n            ");
        return;
      }
      _0x2545a0.forEach(_0x3fed89 => {
        _0x488d6f.append("\n                <div class=\"completed-item\">\n                    <div class=\"completed-item-header\">\n                        <span class=\"completed-item-name\">" + _0x3fed89.filename + "</span>\n                        <span class=\"completed-item-date\">" + _0x3fed89.date + "</span>\n                    </div>\n                    <div class=\"completed-item-size\">" + _0x3fed89.filesize + "</div>\n                </div>\n            ");
      });
    }
    function _0x3745b6(_0x41fff3, _0x24c048, _0x1e27a2) {
      if (_0x41fff3.data("completed")) return;
      _0x41fff3.find(".progress-bar-fill").css("width", _0x24c048 + "%");
      _0x41fff3.find(".download-progress").text(_0x24c048 + "%");
      _0x41fff3.find(".download-speed").text(_0x1e27a2);
      if (_0x24c048 >= 100) {
        {
          _0x41fff3.data("completed", true);
          _0x41fff3.find(".pause-btn, .resume-btn").hide();
          _0x41fff3.find(".download-speed").text("已完成");
          const _0x133f70 = _0x41fff3.find(".download-item-name").text(),
            _0x2a1847 = _0x41fff3.find(".file-size").text();
          _0x177a45(_0x133f70, _0x2a1847);
          setTimeout(() => {
            _0x41fff3.fadeOut(() => {
              _0x41fff3.remove();
              _0x1ccf3b--;
              _0x10a068();
            });
          }, 1000);
        }
      }
    }
    _0x27df24();
    function _0x23b7ce(_0x1fbebf, _0x45609d, _0x8a654e, _0x4d29d2) {
      const _0x179176 = "download-" + Date.now(),
        _0x4f5b11 = jq("\n            <div class=\"download-item manager-download-item\" id=\"" + _0x179176 + "\">\n                <div class=\"download-item-header\">\n                    <div class=\"download-item-name\">" + _0x1fbebf + "</div>\n                    <div class=\"download-item-controls\">\n                        <button class=\"pause-btn\">\n                            <i class=\"down-pause\"></i>\n                        </button>\n                        <button class=\"resume-btn\" style=\"display:none\">\n                            <i class=\"down-play\"></i>\n                        </button>\n                        <button class=\"cancel-btn\">\n                            <i class=\"down-cancel\"></i>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"progress-bar\">\n                    <div class=\"progress-bar-fill\" style=\"width: 0%\"></div>\n                </div>\n                <div class=\"download-item-stats\">\n                    <span class=\"download-speed\">0 KB/s</span>\n                    <span class=\"download-progress\">0%</span>\n                    <span class=\"file-size\">" + _0x45609d + "</span>\n                </div>\n            </div>\n        ");
      _0x4f5b11.find(".pause-btn").click(() => {
        _0x8a654e.pause();
        _0x4f5b11.find(".pause-btn").hide();
        _0x4f5b11.find(".resume-btn").show();
      });
      _0x4f5b11.find(".resume-btn").click(() => {
        _0x8a654e.resume();
        _0x4f5b11.find(".resume-btn").hide();
        _0x4f5b11.find(".pause-btn").show();
        _0x17bfb7(_0x4d29d2, _0x8a654e, _0x4f5b11);
      });
      _0x4f5b11.find(".cancel-btn").click(() => {
        _0x8a654e.abort();
        _0x4f5b11.remove();
        _0x1ccf3b--;
        _0x10a068();
      });
      jq("#download-manager .download-content").prepend(_0x4f5b11);
      _0x15f455.slideDown(300);
      _0x1ccf3b++;
      _0x10a068();
      return _0x4f5b11;
    }
    function _0x10a068() {
      _0x1ccf3b > 0 ? _0x44ed97.text(_0x1ccf3b).show() : _0x44ed97.hide();
    }
    window.downloadManager = {
      "createDownloadItem": _0x23b7ce,
      "updateDownloadProgress": _0x3745b6,
      "addToCompletedList": _0x177a45
    };
    _0x433d44.click(() => {
      _0x15f455.slideToggle(300);
    });
    jq(".close-button").click(() => {
      _0x15f455.slideUp(300);
    });
    _0x2aad0d();
  }
  function _0x2ef7f8() {
    jq(".text-copy").click(function () {
      const _0x4bc1cd = jq("#image-comment").val();
      _0x65eaa5(_0x4bc1cd) ? _0x300273("success", "复制成功！") : _0x300273("error", "复制失败，请手动复制！");
    });
    jq(".go").click(function () {
      const _0x24209c = jq(this).data("url");
      _0x15f89c(_0x24209c, "image", this);
    });
    jq("#toggle").change(function () {
      {
        const _0x587455 = jq(this).prop("checked");
        _0x587455 ? (jq(".checkbox-container").fadeIn(), jq(".image-download").fadeIn(), jq(".image-all").fadeIn(), jq(".go").fadeOut(), jq(".go-open").hide(), jq(".image-cancel").hide(), jq(".download-cover-option").fadeIn()) : (jq(".checkbox-container").fadeOut(), jq(".image-download").fadeOut(), jq(".image-all").fadeOut(), jq(".image-cancel").fadeOut(), jq(".go").fadeIn(), jq(".go-open").fadeIn(), jq(".checkbox-input").prop("checked", false), jq(".image-all").text("全选"), jq(".download-cover-option").fadeOut());
      }
    });
    jq(".post-card-wrapper").click(function () {
      if (jq("#toggle").prop("checked")) {
        {
          const _0x56926d = jq(this).find(".checkbox-input");
          _0x56926d.prop("checked", !_0x56926d.prop("checked"));
          _0xdf8673();
        }
      }
    });
    jq(".image-all").click(function () {
      const _0x20a576 = jq(this),
        _0x586e24 = jq(".checkbox-input");
      _0x20a576.text() === "全选" ? (_0x586e24.prop("checked", true), _0x20a576.text("全不选"), jq(".image-cancel").hide()) : (_0x586e24.prop("checked", false), _0x20a576.text("全选"), jq(".image-cancel").hide());
    });
    jq(".image-cancel").click(function () {
      jq(".checkbox-input:checked").prop("checked", false);
      jq(this).hide();
      jq(".image-all").text() === "全不选" && jq(".image-all").text("全选");
    });
    jq(".checkbox-input").change(function () {
      _0xdf8673();
    });
    jq(".image-download").click(function () {
      const _0x461dcf = [],
        _0x11b799 = jq("#download-cover-checkbox").prop("checked");
      jq(".checkbox-input:checked").each(function () {
        const _0x3d6162 = jq(this).closest(".post-card-wrapper"),
          _0x8180ee = _0x3d6162.find(".go").data("url");
        let _0x256532 = null;
        const _0x5154dc = _0x3d6162.find(".live-photo-container");
        _0x5154dc.length > 0 ? _0x256532 = _0x5154dc.css("background-image").replace(/^url\(['"](.+)['"]\)$/, "$1") : _0x256532 = _0x8180ee;
        _0x461dcf.push({
          "url": _0x8180ee,
          "coverUrl": _0x11b799 ? _0x256532 : null,
          "element": _0x3d6162.find(".go")[0]
        });
      });
      if (_0x461dcf.length === 0) {
        _0x300273("error", "请选择要下载的内容！");
        return;
      }
      _0x461dcf.length > 3 ? _0x14be99(_0x461dcf, _0x11b799) : _0x461dcf.forEach(_0x2a7f0e => {
        _0x15f89c(_0x2a7f0e.url, "video", _0x2a7f0e.element);
        _0x11b799 && _0x2a7f0e.coverUrl && _0x15f89c(_0x2a7f0e.coverUrl, "image", _0x2a7f0e.element);
      });
    });
    function _0xdf8673() {
      const _0x40cb97 = jq(".checkbox-input:checked").length,
        _0x45f0c6 = jq(".checkbox-input").length;
      _0x40cb97 > 0 && _0x40cb97 < _0x45f0c6 ? jq(".image-cancel").fadeIn() : jq(".image-cancel").hide();
    }
  }
  class _0x200693 {
    constructor() {
      {
        this.abortController = null;
        this.isPaused = false;
        this.pausedAt = 0;
        this.chunks = [];
        this.receivedLength = 0;
        this.total = 0;
        this.filename = "";
        this.isAborted = false;
      }
    }
    ["abort"]() {
      this.isAborted = true;
      if (this.abortController) {
        this.abortController.abort();
      }
    }
    ["pause"]() {
      this.isPaused = true;
      this.abortController && this.abortController.abort();
    }
    ["resume"]() {
      this.isPaused = false;
    }
  }
  async function _0x15f89c(_0x72ec2, _0x544e53, _0x49a92d) {
    try {
      const _0x21dc45 = new _0x200693(),
        _0x17bf97 = await fetch(_0x72ec2, {
          "method": "HEAD"
        }),
        _0x7ab5b6 = _0x17bf97.headers.get("content-type"),
        _0x4f0b40 = _0x17bf97.headers.get("content-length");
      _0x21dc45.total = parseInt(_0x4f0b40, 10);
      const _0xbf08d = _0x2bef1a(_0x7ab5b6, _0x544e53),
        _0x4f0ee3 = _0x544e53 === "video" ? "video_" : _0x544e53 === "audio" ? "audio_" : "image_",
        _0x52710d = "" + _0x4f0ee3 + Date.now() + _0xbf08d;
      _0x21dc45.filename = _0x52710d;
      const _0x303c3c = window.downloadManager.createDownloadItem(_0x52710d, _0xa829cf(_0x21dc45.total), _0x21dc45, _0x72ec2);
      await _0x17bfb7(_0x72ec2, _0x21dc45, _0x303c3c);
    } catch (_0x3e94d2) {
      _0x3e94d2.name === "AbortError" ? console.log("Download paused") : (console.error("Download error:", _0x3e94d2), _0x300273("error", "下载失败，请稍后重试！<br>由于浏览器的限制请点击\"打开链接\"", _0x49a92d));
    }
  }
  function _0x14be99(_0x48043b, _0x1c507f) {
    {
      const _0x5a107a = new JSZip(),
        _0x57f88b = _0x1c507f ? _0x48043b.length * 2 : _0x48043b.length;
      let _0x5b3930 = 0;
      const _0x4d2924 = _0x1c507f ? "photos_with_covers.zip" : "photos.zip",
        _0x7161a8 = window.downloadManager.createDownloadItem(_0x4d2924, _0x57f88b + " 个文件"),
        _0x4d6e46 = [];
      _0x48043b.forEach((_0xacf33d, _0x108caa) => {
        {
          const _0x163a5d = fetch(_0xacf33d.url).then(_0xd0a26c => {
            const _0x469c59 = _0xd0a26c.headers.get("content-type"),
              _0x1cd053 = _0x2bef1a(_0x469c59, "video");
            return _0xd0a26c.blob().then(_0x5c7b90 => ({
              "blob": _0x5c7b90,
              "ext": _0x1cd053,
              "isVideo": true
            }));
          }).then(({
            blob: _0x2aba25,
            ext: _0x4b193b,
            isVideo: _0x14ffb7
          }) => {
            const _0x4c3574 = "photo-" + (_0x108caa + 1) + _0x4b193b;
            _0x5a107a.file(_0x4c3574, _0x2aba25);
            _0x5b3930++;
            const _0x55e4c9 = (_0x5b3930 / _0x57f88b * 100).toFixed(1);
            window.downloadManager.updateDownloadProgress(_0x7161a8, _0x55e4c9, _0x5b3930 + "/" + _0x57f88b);
          });
          _0x4d6e46.push(_0x163a5d);
          if (_0x1c507f && _0xacf33d.coverUrl) {
            const _0x259c49 = fetch(_0xacf33d.coverUrl).then(_0x1cf0e1 => {
              const _0x14524a = _0x1cf0e1.headers.get("content-type"),
                _0x14c994 = _0x2bef1a(_0x14524a, "image");
              return _0x1cf0e1.blob().then(_0x3b47c0 => ({
                "blob": _0x3b47c0,
                "ext": _0x14c994,
                "isVideo": false
              }));
            }).then(({
              blob: _0x1ae218,
              ext: _0x497b74,
              isVideo: _0x6c1d01
            }) => {
              const _0x2e4864 = "cover-" + (_0x108caa + 1) + _0x497b74;
              _0x5a107a.file(_0x2e4864, _0x1ae218);
              _0x5b3930++;
              const _0x468575 = (_0x5b3930 / _0x57f88b * 100).toFixed(1);
              window.downloadManager.updateDownloadProgress(_0x7161a8, _0x468575, _0x5b3930 + "/" + _0x57f88b);
            });
            _0x4d6e46.push(_0x259c49);
          }
        }
      });
      Promise.all(_0x4d6e46).then(() => {
        _0x5a107a.generateAsync({
          "type": "blob"
        }).then(_0x9ec8e9 => {
          saveAs(_0x9ec8e9, _0x4d2924);
        });
      }).catch(_0x196b1c => {
        console.error("下载出错:", _0x196b1c);
        _0x300273("error", "下载过程中出现错误，请重试！");
      });
    }
  }
  async function _0x17bfb7(_0x1916ce, _0x2424a6, _0x5df670) {
    if (_0x2424a6.isAborted) {
      console.log("Download was aborted permanently.");
      return;
    }
    if (_0x2424a6.receivedLength >= _0x2424a6.total && _0x2424a6.total > 0) {
      console.log("Download already completed.");
      requestAnimationFrame(() => {
        _0x5df670 && !_0x5df670.data("completed") && window.downloadManager.updateDownloadProgress(_0x5df670, 100, "已完成");
      });
      return;
    }
    try {
      _0x2424a6.abortController = new AbortController();
      const _0x5b4682 = _0x2424a6.receivedLength;
      if (_0x2424a6.total <= 0) {
        {
          console.error("Total size unknown, cannot resume precisely.");
          throw new Error("无法在未知总大小的情况下恢复下载。");
        }
      }
      const _0x393625 = _0x2424a6.total - 1;
      console.log("Resuming download for " + _0x2424a6.filename + " from byte " + _0x5b4682);
      const _0x4d0ec1 = await fetch(_0x1916ce, {
          "headers": {
            "Range": "bytes=" + _0x5b4682 + "-" + _0x393625
          },
          "signal": _0x2424a6.abortController.signal
        }),
        _0x40119d = _0x4d0ec1.body.getReader();
      let _0x8c330 = Date.now(),
        _0x3a99aa = 0;
      while (true) {
        {
          if (_0x2424a6.isPaused || _0x2424a6.isAborted) {
            console.log("Download loop interrupted. Paused: " + _0x2424a6.isPaused + ", Aborted: " + _0x2424a6.isAborted);
            break;
          }
          const {
            done: _0x2b120b,
            value: _0x193231
          } = await _0x40119d.read();
          if (_0x2b120b) {
            {
              console.log("Reader finished for " + _0x2424a6.filename + ". Received: " + _0x2424a6.receivedLength + ", Total: " + _0x2424a6.total);
              break;
            }
          }
          _0x2424a6.chunks.push(_0x193231);
          _0x2424a6.receivedLength += _0x193231.length;
          _0x3a99aa += _0x193231.length;
          const _0x3f112a = Date.now(),
            _0x2df11c = (_0x3f112a - _0x8c330) / 1000;
          if (_0x2df11c >= 0.5) {
            const _0x54b95d = (_0x2424a6.receivedLength / _0x2424a6.total * 100).toFixed(1),
              _0x25df2b = _0x3a99aa / _0x2df11c,
              _0x1c3c00 = _0x56b588(_0x25df2b);
            requestAnimationFrame(() => {
              _0x5df670 && !_0x5df670.data("completed") && window.downloadManager.updateDownloadProgress(_0x5df670, parseFloat(_0x54b95d), _0x1c3c00);
            });
            _0x8c330 = _0x3f112a;
            _0x3a99aa = 0;
          }
        }
      }
      if (_0x2424a6.isAborted) console.log("Download aborted permanently after loop: " + _0x2424a6.filename);else {
        if (_0x2424a6.isPaused) {
          console.log("Download paused after loop: " + _0x2424a6.filename);
        } else {
          if (_0x2424a6.receivedLength >= _0x2424a6.total) {
            console.log("Download completed: " + _0x2424a6.filename);
            const _0x4d2c65 = new Blob(_0x2424a6.chunks);
            saveAs(_0x4d2c65, _0x2424a6.filename);
            requestAnimationFrame(() => {
              _0x5df670 && !_0x5df670.data("completed") && window.downloadManager.updateDownloadProgress(_0x5df670, 100, "已完成");
            });
          } else {
            console.warn("Download loop finished unexpectedly for " + _0x2424a6.filename + ". Received: " + _0x2424a6.receivedLength + ", Total: " + _0x2424a6.total);
            _0x300273("error", "下载 " + _0x2424a6.filename + " 可能未完成，请检查网络或重试。");
            _0x5df670 && requestAnimationFrame(() => {
              _0x5df670.find(".download-speed").text("中断");
            });
          }
        }
      }
    } catch (_0x155926) {
      if (_0x155926.name === "AbortError") {
        if (_0x2424a6.isAborted) {
          console.log("Download fetch aborted (permanent): " + _0x2424a6.filename);
        } else _0x2424a6.isPaused ? console.log("Download fetch aborted (paused): " + _0x2424a6.filename) : console.warn("Download fetch aborted unexpectedly: " + _0x2424a6.filename);
      } else console.error("Download error during fetch/read for " + _0x2424a6.filename + ":", _0x155926), _0x300273("error", "下载 " + _0x2424a6.filename + " 出错: " + _0x155926.message), _0x5df670 && requestAnimationFrame(() => {
        _0x5df670.find(".download-speed").text("错误");
        _0x5df670.find(".pause-btn, .resume-btn").hide();
      });
    }
  }
  function _0x2bef1a(_0x4b2e37, _0xa42403) {
    const _0x1881a8 = {
      "video/mp4": ".mp4",
      "video/webm": ".webm",
      "video/ogg": ".ogv",
      "video/x-matroska": ".mkv",
      "video/quicktime": ".mov",
      "video/x-msvideo": ".avi",
      "video/x-flv": ".flv",
      "video/3gpp": ".3gp",
      "audio/mpeg": ".mp3",
      "audio/ogg": ".ogg",
      "audio/wav": ".wav",
      "audio/x-m4a": ".m4a",
      "audio/aac": ".aac",
      "audio/webm": ".weba",
      "audio/flac": ".flac",
      "image/jpeg": ".jpg",
      "image/png": ".png",
      "image/gif": ".gif",
      "image/webp": ".webp",
      "image/bmp": ".bmp",
      "image/tiff": ".tiff",
      "image/svg+xml": ".svg"
    };
    if (_0x4b2e37 && _0x1881a8[_0x4b2e37.toLowerCase()]) return _0x1881a8[_0x4b2e37.toLowerCase()];
    const _0x112215 = {
      "video": ".mp4",
      "audio": ".mp3",
      "image": ".jpg"
    };
    return _0x112215[_0xa42403] || ".unknown";
  }
  function _0x56b588(_0x2569d8) {
    {
      if (_0x2569d8 < 1024) return _0x2569d8.toFixed(0) + " B/s";else return _0x2569d8 < 1048576 ? (_0x2569d8 / 1024).toFixed(1) + " KB/s" : (_0x2569d8 / 1048576).toFixed(2) + " MB/s";
    }
  }
  function _0xa829cf(_0x2825b0) {
    {
      if (_0x2825b0 < 1024) return _0x2825b0 + " B";
      if (_0x2825b0 < 1048576) return (_0x2825b0 / 1024).toFixed(2) + " KB";
      return (_0x2825b0 / 1048576).toFixed(2) + " MB";
    }
  }
  const _0x4de0c5 = window.location.hostname;
  !_0x4de0c5.endsWith("wzjun.com") && (window.close(), !window.closed && (document.body.innerHTML = "", window.location.href = "about:blank"));
});