!function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 1)
}([function (e, t, r) {
}, function (e, t, r) {
    "use strict";
    r.r(t);
    r(0);

    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function o(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    var a = function () {
        function e(t, r) {
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), o(this, "_getResponseData", (function (e) {
                return e.ok ? e.json() : Promise.reject(new Error(e.status))
            })), o(this, "_getResponseError", (function (e) {
                return Promise.reject(new Error(e.message))
            })), this._url = t, this.config = r
        }

        var t, r, a;
        return t = e, (r = [{
            key: "getInitialCards", value: function () {
                var e = this;
                return fetch("".concat(this._url, "/cards"), {headers: this.config.headers}).then((function (t) {
                    return e._getResponseData(t)
                })).catch((function (t) {
                    return e._getResponseError(t)
                }))
            }
        }, {
            key: "getInitialUser", value: function () {
                var e = this;
                return fetch("".concat(this._url, "/users/me"), {headers: this.config.headers}).then((function (t) {
                    return e._getResponseData(t)
                })).catch((function (t) {
                    return e._getResponseError(t)
                }))
            }
        }, {
            key: "editUser", value: function (e, t) {
                var r = this;
                return fetch("".concat(this._url, "/users/me"), {
                    method: "PATCH",
                    headers: this.config.headers,
                    body: JSON.stringify({name: e, about: t})
                }).then((function (e) {
                    return r._getResponseData(e)
                })).catch((function (e) {
                    return r._getResponseError(e)
                }))
            }
        }, {
            key: "editAvatar", value: function (e) {
                var t = this;
                return fetch("".concat(this._url, "/users/me/avatar"), {
                    method: "PATCH",
                    headers: this.config.headers,
                    body: JSON.stringify({avatar: e})
                }).then((function (e) {
                    return t._getResponseData(e)
                })).catch((function (e) {
                    return t._getResponseError(e)
                }))
            }
        }, {
            key: "addCart", value: function (e, t) {
                var r = this;
                return fetch("".concat(this._url, "/cards"), {
                    method: "POST",
                    headers: this.config.headers,
                    body: JSON.stringify({name: e, link: t})
                }).then((function (e) {
                    return r._getResponseData(e)
                })).catch((function (e) {
                    return r._getResponseError(e)
                }))
            }
        }, {
            key: "addLike", value: function (e) {
                var t = this;
                return fetch("".concat(this._url, "/cards/like/").concat(e), {
                    method: "PUT",
                    headers: this.config.headers
                }).then((function (e) {
                    return t._getResponseData(e)
                })).catch((function (e) {
                    return t._getResponseError(e)
                }))
            }
        }, {
            key: "removeLike", value: function (e) {
                var t = this;
                return fetch("".concat(this._url, "/cards/like/").concat(e), {
                    method: "DELETE",
                    headers: this.config.headers
                }).then((function (e) {
                    return t._getResponseData(e)
                })).catch((function (e) {
                    return t._getResponseError(e)
                }))
            }
        }, {
            key: "removeCart", value: function (e) {
                var t = this;
                return fetch("".concat(this._url, "/cards/").concat(e), {
                    method: "DELETE",
                    headers: this.config.headers
                }).then((function (e) {
                    return t._getResponseData(e)
                })).catch((function (e) {
                    return t._getResponseError(e)
                }))
            }
        }]) && n(t.prototype, r), a && n(t, a), e
    }();
    !function () {
        var e = document.querySelector(".places-list"), t = document.querySelector("#popup-cart-template"),
            r = document.querySelector("#new-place"), n = document.querySelector("#edit-profile"),
            o = document.querySelector("#view-img"), u = document.querySelector("#edit-avatar"),
            c = r.querySelector("[name=nameNew]"), i = r.querySelector("[name=linkNew]"),
            s = n.querySelector("[name=nameEdit]"), f = n.querySelector("[name=jobEdit]"),
            l = u.querySelector("[name=avatar]"), d = document.querySelector(".user-info__name"),
            h = document.querySelector(".user-info__job"), p = document.querySelector(".user-info__photo"),
            m = document.querySelector(".user-info__button"), v = document.querySelector(".user-info__edit"),
            y = document.querySelector(".user-info__photo"), g = new Popup(r), _ = new Popup(n), b = new Popup(u),
            S = new Popup(o), E = new UserInfo, R = new a("https://praktikum.tk/cohort11", {
                headers: {
                    authorization: "53d4c5ac-ee89-496c-a208-f65033f03eab",
                    "Content-Type": "application/json"
                }
            }), q = {
                valueMissing: "Это обязательное поле",
                tooShort: "Должно быть от 2 до 30 символов",
                typeMismatch: "Здесь должна быть ссылка"
            }, k = new FormValidator(n.querySelector("form"), q),
            w = (new FormValidator(r.querySelector("form"), q), new FormValidator(u.querySelector("form"), q));

        function C(e) {
            S.open(), o.querySelector(".popup__content-image").setAttribute("src", e)
        }

        function O(e) {
            e.resetErrors()
        }

        var j = new CardList(e, [], (function (e) {
            return new Card(e, t, C, R, E).create()
        }));
        j.render(), R.getInitialUser().then((function (e) {
            E.setUserInfo(e.name, e.about, e.avatar, e._id), E.updateUserInfo(d, h, p), R.getInitialCards().then((function (e) {
                e.filter((function (e) {
                    return e.owner._id === E.id
                })).forEach((function (e) {
                    j.addCard(e)
                }))
            })).catch((function (e) {
                return console.log("ERROR", e.message)
            }))
        })).catch((function (e) {
            return console.log("ERROR", e.message)
        })), m.addEventListener("click", (function () {
            return g.open()
        })), y.addEventListener("click", (function () {
            var e = E.getUserInfo();
            l.value = e.avatar, b.open(O(w))
        })), r.querySelector("form").addEventListener("submit", (function (e) {
            e.preventDefault();
            var t = r.querySelector("[type=submit]");
            t.textContent = "Загрузка...";
            var n = {name: c.value, link: i.value};
            R.addCart(c.value, i.value).then((function (e) {
                t.textContent = "Сохранить", r.querySelector("form").reset(), g.close(), j.addCard(n, e._id)
            })).catch((function (e) {
                return console.log("ERROR", e.message)
            }))
        })), v.addEventListener("click", (function () {
            var e = E.getUserInfo();
            _.open(O(k)), s.value = e.name, f.value = e.job
        })), u.querySelector("form").addEventListener("submit", (function (e) {
            e.preventDefault();
            var t = E.getUserInfo(), r = u.querySelector("[type=submit]");
            r.textContent = "Загрузка...", R.editAvatar(l.value).then((function (e) {
                E.setUserInfo(t.name, t.job, l.value), E.updateUserInfo(d, h, p), b.close(), r.textContent = "Сохранить"
            })).catch((function (e) {
                return console.log("ERROR", e.message)
            }))
        })), n.querySelector("form").addEventListener("submit", (function (e) {
            e.preventDefault();
            var t = E.getUserInfo(), r = n.querySelector("[type=submit]");
            r.textContent = "Загрузка...", R.editUser(s.value, f.value).then((function (e) {
                E.setUserInfo(s.value, f.value, t.avatar), E.updateUserInfo(d, h, p), k.resetErrors(), _.close(), r.textContent = "Сохранить"
            })).catch((function (e) {
                return console.log("ERROR", e.message)
            }))
        }))
    }()
}]);