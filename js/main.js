  let menu = $(".header").find(".header__menu");
let burger = $(".mobile__menu-bttn");
 let close = $(".mobile__menu-close");


/* ВЫЗОВ МОБИЛЬНОГО МЕНЮ */
burger.on("click", function(){
	menu.toggleClass("header__menu--active");
	close.toggle().css("display", "flex").attr("title", "Закрыть меню");
	$(this).toggle();
});


/* ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ ПРИ КЛИКЕ ПО КНОПКЕ ЗАКРЫТИЯ */
$(".mobile__menu-close").on("click", function(){
	menu.toggleClass("header__menu--active");
	burger.toggle();
	$(this).toggle();
});


/* ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ ПРИ КЛИКЕ ПО ССЫЛКЕ ВНУТРИ МЕНЮ */
$(".header__menu-item").on("click", function(){
	menu.toggleClass("header__menu--active");
	burger.toggle();
	close.toggle();
});