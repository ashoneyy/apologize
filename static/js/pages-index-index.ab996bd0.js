(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index"], {
    2479: function (n, t, e) {
        "use strict";
        var u;
        e.d(t, "b", (function () {
            return r
        })), e.d(t, "c", (function () {
            return a
        })), e.d(t, "a", (function () {
            return u
        }));
        var r = function () {
            var n = this, t = n.$createElement, e = n._self._c || t;
            return e("v-uni-view", {staticClass: "content"})
        }, a = []
    }, "26a9": function (n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var u = {
            data: function () {
                return {}
            }, onLoad: function () {
            }, created: function () {
                this.$u.route("/pages/center/index")
            }, methods: {}
        };
        t.default = u
    }, "6ce6": function (n, t, e) {
        "use strict";
        e.r(t);
        var u = e("2479"), r = e("fb24");
        for (var a in r) "default" !== a && function (n) {
            e.d(t, n, (function () {
                return r[n]
            }))
        }(a);
        var c, i = e("f0c5"),
            o = Object(i["a"])(r["default"], u["b"], u["c"], !1, null, "19cb1e70", null, !1, u["a"], c);
        t["default"] = o.exports
    }, fb24: function (n, t, e) {
        "use strict";
        e.r(t);
        var u = e("26a9"), r = e.n(u);
        for (var a in u) "default" !== a && function (n) {
            e.d(t, n, (function () {
                return u[n]
            }))
        }(a);
        t["default"] = r.a
    }
}]);
