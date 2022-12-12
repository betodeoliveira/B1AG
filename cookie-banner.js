var cookieName = "b1AGCookieBanner";

if (typeof Cookies.get(cookieName) !== "undefined") {
  $(".cookie-banner").remove();
}

$(".cookie-banner_button").on("click", function () {
  Cookies.set(cookieName, "approved", { expires: 365 });
});