function btnHandler(e, t) {
    var n = document.querySelector(e);
    n && n.addEventListener("click", function (e) {
        e.preventDefault(), t()
    }, !1)
}

function flagIfEmpty(e) {
    e.value.length < 1 && e.classList.add("needs-content")
}
btnHandler("#btn-opt-in", function () {
        document.cookie = "nf_ab=oh-so-orange; expires=Thu, 01 Jan 2019 00:00:00 GMT", window.location.reload(!0)
    }), btnHandler("#btn-opt-out", function () {
        document.cookie = "nf_ab=;expires=Thu, 01 Jan 1970 00:00:01 GMT;", window.location.reload(!0)
    }),
    function () {
        var e = document.querySelectorAll("form");
        if (0 != e.length)
            for (var t = 0; t < e.length; t++) e[t].addEventListener("submit", function (e) {
                e.preventDefault();
                for (var t = e.target, n = t.querySelectorAll(".needs-content"), r = 0; r < n.length; r++) n[r].classList.remove("needs-content");
                for (var o = t.querySelectorAll("input"), l = 0; l < o.length; l++) flagIfEmpty(o[l]);
                for (var i = t.querySelectorAll("textarea"), c = 0; c < i.length; c++) flagIfEmpty(i[c]);
                if (1 < (n = t.querySelectorAll(".needs-content")).length) return !1;
                t.submit()
            }, !1)
    }(),
    function () {
        var l = null,
            e = document.querySelector(".search-ui"),
            i = document.querySelector(".search-results"),
            n = document.querySelector("#search-str"),
            c = document.querySelector("footer"),
            a = function () {
                for (; i.firstChild;) i.removeChild(i.firstChild);
                c.classList.remove("invisible")
            };
        btnHandler("#search-link", function () {
            fetch("/search.json").then(function (e) {
                return e.json()
            }).then(function (e) {
                l = e.search
            }), e.classList.toggle("invisible"), n.focus(), n.addEventListener("keyup", function (e) {
                var t = n.value;
                2 < t.length ? function (e) {
                    e = e.toLowerCase();
                    var t = [];
                    for (var n in l) - 1 != l[n].text.indexOf(e) && t.push(l[n]);
                    for (var n in a(), c.classList.add("invisible"), t) {
                        var r = document.createElement("li"),
                            o = document.createElement("a");
                        o.textContent = t[n].title, o.setAttribute("href", t[n].url), r.appendChild(o), i.appendChild(r)
                    }
                }(t) : a()
            })
        })
    }();