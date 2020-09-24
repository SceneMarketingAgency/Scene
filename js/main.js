$("nav ul li a[href^='#']").click(function () {
    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset -50}, 1000);
});
// ===================================
new WOW().init();