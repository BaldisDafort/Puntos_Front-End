(() => {
    Sentry.init({
        dsn: "https://2cba841176a53feb0b4a468569383c99@o4508363354603520.ingest.de.sentry.io/4508363358994512",
        integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
        tracesSampleRate: 1,
        tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1
    });

    var e = [],
        o = "yellow",
        r = "blue";
    document.querySelectorAll("td");
    var t, n = !1, l = document, u = document.getElementById("contenu"),
        a = document.getElementById("Score1"), c = document.getElementById("Score2"),
        d = document.getElementById("tourJoueur"), s = screen.width, y = (screen.height, !1);

    function i(t) {
        if (1 != y) {
            if (0 == n) {
                if (t.target.style.backgroundColor == o || t.target.style.backgroundColor == r)
                    return void alert("Rejoue en cliquant sur une case vide");
                t.target.style.backgroundColor = r,
                d.innerHTML = "Tour de invité",
                n = !0,
                u.style.backgroundColor = o,
                document.documentElement.style.setProperty("--hover-color", o);
            } else {
                if (t.target.style.backgroundColor == o || t.target.style.backgroundColor == r)
                    return void alert("Rejoue en cliquant sur une case vide");
                t.target.style.backgroundColor = o,
                d.innerHTML = "Tour du joueur 1",
                n = !1,
                u.style.backgroundColor = r,
                document.documentElement.style.setProperty("--hover-color", r);
            }
            if (function () {
                for (var o = 0; o < 6; o++)
                    for (var r = 0; r < 4; r++)
                        if ("" !== e[o][r].style.backgroundColor && e[o][r].style.backgroundColor === e[o][r + 1].style.backgroundColor && e[o][r].style.backgroundColor === e[o][r + 2].style.backgroundColor && e[o][r].style.backgroundColor === e[o][r + 3].style.backgroundColor)
                            return !0;
                for (o = 0; o < 3; o++)
                    for (r = 0; r < 7; r++)
                        if ("" !== e[o][r].style.backgroundColor && e[o][r].style.backgroundColor === e[o + 1][r].style.backgroundColor && e[o][r].style.backgroundColor === e[o + 2][r].style.backgroundColor && e[o][r].style.backgroundColor === e[o + 3][r].style.backgroundColor)
                            return !0;
                for (o = 3; o < 6; o++)
                    for (r = 0; r < 4; r++)
                        if ("" !== e[o][r].style.backgroundColor && e[o][r].style.backgroundColor === e[o - 1][r + 1].style.backgroundColor && e[o][r].style.backgroundColor === e[o - 2][r + 2].style.backgroundColor && e[o][r].style.backgroundColor === e[o - 3][r + 3].style.backgroundColor)
                            return !0;
                for (o = 0; o < 3; o++)
                    for (r = 0; r < 4; r++)
                        if ("" !== e[o][r].style.backgroundColor && e[o][r].style.backgroundColor === e[o + 1][r + 1].style.backgroundColor && e[o][r].style.backgroundColor === e[o + 2][r + 2].style.backgroundColor && e[o][r].style.backgroundColor === e[o + 3][r + 3].style.backgroundColor)
                            return !0;
                return !1;
            }()) {
                if (y = !0, 1 == n) {
                    d.innerHTML = "Le joueur 1 a gagné !!",
                    d.style.color = r,
                    document.documentElement.style.setProperty("--hover-color", r);
                    var l = parseInt(a.innerHTML);
                    return a.innerHTML = l + 1, void setTimeout(b, 3e3);
                }
                d.innerHTML = "Invité a gagné !!",
                d.style.color = o,
                document.documentElement.style.setProperty("--hover-color", r);
                var s = parseInt(c.innerHTML);
                return c.innerHTML = s + 1, void setTimeout(b, 3e3);
            }
            (function () {
                for (var o = 0; o < 6; o++)
                    for (var r = 0; r < 7; r++)
                        if ("" === e[o][r].style.backgroundColor)
                            return !1;
                return !0;
            })() && (y = !0, d.innerHTML = "Égalité !", d.style.color = "gray", setTimeout(b, 3e3));
        }
    }

    function g() {
        for (var o = document.getElementById("contenu"), n = document.createElement("table"), l = 0; l < 6; l++) {
            var a = document.createElement("tr");
            e[l] = [];
            for (var c = 0; c < 7; c++) {
                var d = document.createElement("td");
                d.addEventListener("click", i),
                d.style.width = t + "px",
                d.style.height = t + "px",
                a.appendChild(d),
                e[l][c] = d;
            }
            n.appendChild(a);
        }
        o.appendChild(n),
        u.style.backgroundColor = r;
    }

    function b() {
        y = !1,
        d.innerHTML = "Tour du joueur 1",
        d.style.color = "",
        n = !1,
        document.getElementById("contenu").innerHTML = "",
        e = [],
        document.documentElement.style.setProperty("--hover-color", r),
        g();
    }

    window.addEventListener("load", (function () {
        this.screen.width < 600 && (t = s / 7, l.style.backgroundColor = "black"),
        g();
    }));
})();
