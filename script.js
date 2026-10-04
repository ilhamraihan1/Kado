const huruf = document.querySelectorAll(".greetings span");

const step = 0.3; // jeda nyala antar huruf (detik)
const jeda = 1.5; // jeda sebelum putaran berikutnya (detik)

huruf.forEach(function (el, i) {
    el.style.setProperty("--i", i);
});

const root = document.documentElement;
root.style.setProperty("--step", step + "s");
root.style.setProperty("--dur", huruf.length * step + jeda + "s");