(() => {
  "use strict";
  var e = "./";
  const t = e + "a0713accdeecc1bb5114.jpg",
    n = function () {
      const e = document.getElementById("content");
      e.innerHTML = "";
      const n = document.createElement("h1");
      n.textContent = "Welcome to Matcha Haven!";
      const c = document.createElement("p");
      c.textContent = "Enjoy the finest matcha teas and treats in town.";
      const a = document.createElement("img");
      (a.src = t),
        (a.alt = "A beautiful cup of matcha tea"),
        e.appendChild(n),
        e.appendChild(c),
        e.appendChild(a);
    },
    c = e + "eb92a72e66582a88b8a6.jpeg",
    a = e + "3c508573435fd2880d97.jpeg";
  document.addEventListener("DOMContentLoaded", () => {
    n();
  }),
    document.getElementById("home").addEventListener("click", () => {
      n();
    }),
    document.getElementById("menu").addEventListener("click", () => {
      !(function () {
        const e = document.getElementById("content");
        (e.innerHTML = ""),
          [
            {
              name: "Iced Matcha Latte",
              description: "Iced or hot, it is sure to be delicious!",
              price: "$4.50",
              imgSrc: t,
            },
            {
              name: "Matcha Cheesecake",
              description: "Creamy and rich matcha-flavored cheesecake.",
              price: "$5.00",
              imgSrc: c,
            },
            {
              name: "Hot Matcha Tea",
              description:
                "Traditional hot matcha tea for a soothing experience.",
              price: "$3.75",
              imgSrc: a,
            },
          ].forEach((t) => {
            const n = document.createElement("div");
            n.className = "menu-item";
            const c = document.createElement("h2");
            (c.textContent = t.name), n.appendChild(c);
            const a = document.createElement("p");
            (a.textContent = t.description), n.appendChild(a);
            const o = document.createElement("p");
            (o.className = "price"),
              (o.textContent = t.price),
              n.appendChild(o);
            const d = document.createElement("img");
            (d.src = t.imgSrc),
              (d.alt = t.name),
              (d.style.width = "300px"),
              (d.style.height = "auto"),
              n.appendChild(d),
              e.appendChild(n);
          });
      })();
    }),
    document.getElementById("contact").addEventListener("click", () => {
      !(function () {
        const e = document.getElementById("content");
        e.innerHTML = "";
        const t = document.createElement("div");
        (t.innerHTML =
          "\n        <h2>Contact Us</h2>\n        <p>Email: contact@matchahaven.com</p>\n        <p>Phone: (123) 456-7890</p>\n        <p>Address: 123 Matcha Lane, Tea Town, TT 45678</p>\n    "),
          e.appendChild(t);
      })();
    });
})();
