// TAB SECTION 1
const tabsContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab ");
const tabsContent = document.querySelectorAll(".operations__content ");

// TAB SECTION 2
const tabsContainerS2 = document.querySelector(".operations__tab-container_s2");
const tabsS2 = document.querySelectorAll(".operations__tab_s2 ");
const tabsContentS2 = document.querySelectorAll(".operations__content_s2 ");

// TAB SECTION 3
const tabsContainerS3 = document.querySelector(".operations__tab-container_s3");
const tabsS3 = document.querySelectorAll(".operations__tab_s3 ");
const tabsContentS3 = document.querySelectorAll(".operations__content_s3 ");

///////////////////////////////////////////////////////////
// Tabs Operation Section1
tabsContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".operations__tab");
  console.log(clicked);

  if (!clicked) return;

  // Remove active class
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tabs
  clicked.classList.add("operations__tab--active");
  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

////////////////////////////////////////////////////////
// Tabs Operation Section2
tabsContainerS2.addEventListener("click", function (event) {
  const clicked = event.target.closest(".operations__tab_s2");
  console.log(clicked);

  if (!clicked) return;

  // Remove active class
  tabsS2.forEach((t) => t.classList.remove("operations__tab_s2--active"));
  tabsContentS2.forEach((c) =>
    c.classList.remove("operations__content_s2--active")
  );

  // Activate tabs
  clicked.classList.add("operations__tab_s2--active");
  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content_s2--${clicked.dataset.tab}`)
    .classList.add("operations__content_s2--active");
});

///////////////////////////////////////////////////////////
// Tabs Operation Section3
tabsContainerS3.addEventListener("click", function (event) {
  const clicked = event.target.closest(".operations__tab_s3");
  console.log(clicked);

  if (!clicked) return;

  // Remove active class
  tabsS3.forEach((t) => t.classList.remove("operations__tab_s3--active"));
  tabsContentS3.forEach((c) =>
    c.classList.remove("operations__content_s3--active")
  );

  // Activate tabs
  clicked.classList.add("operations__tab_s3--active");
  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content_s3--${clicked.dataset.tab}`)
    .classList.add("operations__content_s3--active");
});
