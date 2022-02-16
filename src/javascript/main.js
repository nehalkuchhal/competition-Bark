///////////////////
// HEADER
//////////////////

class MyHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <header class="header">
     <div class="nav">
      <nav class="menu">
        <ul class="links">
          <li class="link"><a href="/">Home</a></li>
          <li class="link"><a href="/page2.html">Why Earbuds</a></li>
          <li class="link"><a href="/page3.html">Tech Specs</a></li>
        </ul>
      </nav>
     </div>
 `;
  }
}

customElements.define("my-header", MyHeader);

// Toggle mobile menu
const menu_btn = document.querySelector(".nav-toggle");
const mobile_menu = document.querySelector(".mobile-menu");
const menu_close = document.querySelector(".menu-close");
menu_btn.addEventListener("click", () => {
  mobile_menu.classList.add("menu-mobile-enable");
});
menu_close.addEventListener("click", () => {
  mobile_menu.classList.remove("menu-mobile-enable");
});

///////////////////
// FOOTER
//////////////////

class MyFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer>
            <div class="footer">
      <div class="footer-menu">
          <ul class="links">
          <li class="link"><a href="/">Home</a></li>
          <li class="link"><a href="/page2.html">Why Earbuds</a></li>
          <li class="link"><a href="/page3.html">Tech Specs</a></li>
        </ul>
      </div>
        </div>
    </footer>
        `;
  }
}

customElements.define("my-footer", MyFooter);
