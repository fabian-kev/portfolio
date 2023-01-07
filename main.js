(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 16, vars: 0, consts: [[1, "mat-display-2", "mt-5"], ["routerLink", "", 1, "portfolio-link", "float-right"], [1, "row", "mb-5"], [1, "col-5"], [1, "col"], [1, "mat-body-1"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi! I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kevin Fabian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " I'm a Java/Kotlin backend developer. I'm living in Hagonoy Bulacan Philippines. I like playing a guitar specially fingerstyle because it is like the guitar is singing itself you don't even need a singer. Also there is a rumor that learning atleast one instrument could boost your logic no wonder that's why I'm super good at programming! kidding lol! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Since I work at Whitecloak Technology Inc, this is my current company they assigned me in the long term projects like GetGoPay and Unionbank Online. My first project was GetGoPay I worked there for 1 year+ after the contract had finished they assigned me in Unionbank Online project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Actually I learned a lot in Whitecloak I learned their structure, coding standard, techniques, securities, and disovered libraries that I didn't know it exists. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");







const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'about',
        component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"],
    },
    {
        path: 'project',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const components = [
    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"],
    _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"]
];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ng_go_top_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-go-top-button */ "./node_modules/ng-go-top-button/__ivy_ngcc__/fesm2015/ng-go-top-button.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
            ng_go_top_button__WEBPACK_IMPORTED_MODULE_8__["GoTopButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_10__["AboutMeComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_11__["ProjectComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        ng_go_top_button__WEBPACK_IMPORTED_MODULE_8__["GoTopButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["components"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                    ng_go_top_button__WEBPACK_IMPORTED_MODULE_8__["GoTopButtonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class FooterComponent {
    constructor(projectService) {
        this.projectService = projectService;
    }
    ngOnInit() {
        this.socialMediaLinks = this.projectService.getSocialMediaLinks();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 3, consts: [[1, "text-right", "pt-5", "pb-2"], [1, "d-inline-block"], ["routerLink", "", 1, "mb-1", "d-block", "text-center", "kevin-logo", 2, "cursor", "pointer"], [1, "d-flex", "align-items-center", "portfolio-icon", "flex-row-reverse"], ["target", "_blank", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "34.875", "height", "34.004", "viewBox", "0 0 34.875 34.004"], ["id", "Icon_awesome-github", "data-name", "Icon awesome-github", "d", "M11.665,27.942c0,.141-.162.253-.366.253-.232.021-.394-.091-.394-.253,0-.141.162-.253.366-.253C11.482,27.668,11.665,27.78,11.665,27.942Zm-2.187-.316c-.049.141.091.3.3.345a.33.33,0,0,0,.436-.141c.042-.141-.091-.3-.3-.366A.361.361,0,0,0,9.478,27.626Zm3.108-.12c-.2.049-.345.183-.323.345.021.141.2.232.415.183s.345-.183.323-.323S12.79,27.485,12.586,27.506ZM17.212.563A16.86,16.86,0,0,0,0,17.719,17.628,17.628,0,0,0,11.918,34.537c.9.162,1.216-.394,1.216-.851,0-.436-.021-2.841-.021-4.317,0,0-4.922,1.055-5.955-2.1,0,0-.8-2.046-1.955-2.573,0,0-1.61-1.1.113-1.083A3.711,3.711,0,0,1,8.03,25.432a3.717,3.717,0,0,0,5.126,1.47,3.908,3.908,0,0,1,1.125-2.37c-3.93-.436-7.9-1.005-7.9-7.77a5.329,5.329,0,0,1,1.659-4.141,6.643,6.643,0,0,1,.183-4.774c1.47-.457,4.852,1.9,4.852,1.9a16.611,16.611,0,0,1,8.831,0s3.382-2.363,4.852-1.9a6.64,6.64,0,0,1,.183,4.774,5.466,5.466,0,0,1,1.814,4.141c0,6.785-4.141,7.327-8.072,7.77a4.158,4.158,0,0,1,1.2,3.263c0,2.37-.021,5.3-.021,5.878,0,.457.323,1.013,1.216.851a17.466,17.466,0,0,0,11.8-16.8C34.875,7.966,26.965.563,17.212.563ZM6.834,24.813c-.091.07-.07.232.049.366.113.112.274.162.366.07.091-.07.07-.232-.049-.366C7.087,24.771,6.926,24.722,6.834,24.813Zm-.759-.57c-.049.091.021.2.162.274a.209.209,0,0,0,.3-.049c.049-.091-.021-.2-.162-.274C6.237,24.152,6.124,24.173,6.075,24.244Zm2.278,2.5c-.113.091-.07.3.091.436.162.162.366.183.457.07.091-.091.049-.3-.091-.436C8.655,26.655,8.445,26.634,8.353,26.747Zm-.8-1.034c-.113.07-.113.253,0,.415s.3.232.394.162a.321.321,0,0,0,0-.436C7.847,25.692,7.664,25.622,7.552,25.713Z", "transform", "translate(0 -0.563)", "fill", "#bb86fc"], ["xmlns", "http://www.w3.org/2000/svg", "width", "31.5", "height", "31.5", "viewBox", "0 0 31.5 31.5"], ["id", "Icon_awesome-linkedin", "data-name", "Icon awesome-linkedin", "d", "M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z", "transform", "translate(0 -2.25)", "fill", "#bb86fc"], ["id", "Icon_awesome-facebook-square", "data-name", "Icon awesome-facebook-square", "d", "M28.125,2.25H3.375A3.375,3.375,0,0,0,0,5.625v24.75A3.375,3.375,0,0,0,3.375,33.75h9.65V23.041H8.6V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.521,2.521,0,0,0-2.842,2.723V18h4.836l-.773,5.041H18.475V33.75h9.65A3.375,3.375,0,0,0,31.5,30.375V5.625A3.375,3.375,0,0,0,28.125,2.25Z", "transform", "translate(0 -2.25)", "fill", "#bb86fc"], [1, "footer-credits", "text-center", "pb-3"], [1, "mat-caption"], ["sxmlns", "http://www.w3.org/2000/svg", "width", "36", "height", "35.1", "viewBox", "0 0 36 35.1", 1, "mr-2", "ml-2"], ["id", "Icon_simple-adobexd", "data-name", "Icon simple-adobexd", "d", "M29.625.45H6.375A6.37,6.37,0,0,0,0,6.825v22.35A6.37,6.37,0,0,0,6.375,35.55h23.25A6.37,6.37,0,0,0,36,29.175V6.825A6.37,6.37,0,0,0,29.625.45Zm4.86,28.14a5.435,5.435,0,0,1-5.43,5.46H6.945A5.454,5.454,0,0,1,1.5,28.6V7.395A5.454,5.454,0,0,1,6.945,1.95H29.04a5.445,5.445,0,0,1,5.445,5.445ZM14.235,16.875l4.2,8.07c.075.12.03.24-.09.24h-2.61a.294.294,0,0,1-.315-.195c-.96-1.98-1.935-3.96-2.94-6.09h-.03c-.9,2.01-1.89,4.125-2.85,6.1a.288.288,0,0,1-.27.165H6.855c-.15,0-.165-.12-.09-.21l4.11-7.83L6.9,9.21A.121.121,0,0,1,6.99,9H9.57a.236.236,0,0,1,.27.165c.945,1.98,1.9,4.02,2.805,6.015h.03c.87-1.98,1.83-4.035,2.76-6,.075-.12.12-.195.27-.195H18.12c.12,0,.165.09.09.21ZM19.17,19.32a5.867,5.867,0,0,1,6.015-6.225,6.652,6.652,0,0,1,.78.03V9.15a.15.15,0,0,1,.15-.15h2.37c.12,0,.15.045.15.12V22.89a10.684,10.684,0,0,0,.075,1.47c0,.09-.03.12-.12.165a8.935,8.935,0,0,1-3.84.87C21.495,25.41,19.17,23.4,19.17,19.32Zm6.8-3.84a2.269,2.269,0,0,0-.87-.15c-1.89,0-3.21,1.455-3.21,3.87,0,2.76,1.35,3.87,3.045,3.87a2.83,2.83,0,0,0,1.035-.165V15.48Z", "transform", "translate(0 -0.45)", "fill", "#bb86fc"], ["xmlns", "http://www.w3.org/2000/svg", "width", "29.222", "height", "31.5", "viewBox", "0 0 29.222 31.5"], ["id", "Icon_awesome-angular", "data-name", "Icon awesome-angular", "d", "M13.057,18.851h5.358L15.736,12.41Zm2.679-16.6L1.125,7.481,3.361,26.866,15.736,33.75l12.375-6.884L30.347,7.481Zm9.155,24.033H21.473l-1.842-4.6H11.855l-1.842,4.6H6.588L15.736,5.73Z", "transform", "translate(-1.125 -2.25)", "fill", "#dbb2ff"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Kevin Fabian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Designed & made by me using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialMediaLinks.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialMediaLinks.linkedIn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialMediaLinks.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function HomeComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](language_r7);
} }
function HomeComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lib_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lib_r8);
} }
function HomeComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const db_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](db_r9);
} }
function HomeComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cl_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cl_r10);
} }
function HomeComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expertise_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expertise_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expertise_r11.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](expertise_r11.class);
} }
function HomeComponent_div_99_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stack_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stack_r14);
} }
function HomeComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Technology Stack: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_99_div_8_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r12.websiteLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r12.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", project_r12.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r12.techStacks);
} }
function HomeComponent_div_108_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const env_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](env_r17);
} }
function HomeComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Responsibilities: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Techstack: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_108_div_12_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r15.jobTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r15.responsibility);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", company_r15.techStacks);
} }
class HomeComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.me = {
            name: "Kevin Fabian",
            experience: "6 years",
            profession: "Software Engineer",
            specialty: "#Java Spring Boot Developer",
            motto: "Don't reinvent the wheel, just realign it. - Anthony J. D'Angelo",
            currentCompany: "Collabera Inc.",
            aboutMe: `
    <p>
    Highly-experienced senior software engineer with 6 years of experience.
    Worked with big projects such as Unionbank and Maya.
    Developed and maintained various types of microservices using Java 11, Spring Boot AWS Services, and Kafka.
    Exposed with containerized and with CI/CD.
    Experienced with auto-testing using python and behave
    Ensured application maximum performance by executing load testing/soak testing.
    </p>
    <p>Feel free to contact me if you need Java Spring boot developer, we can talk.</p>
    `,
            resume: {
                label: "My CV",
                url: "https://docs.google.com/document/d/1yXioJSlwy7J0hhwNjZF1iD-8KlUnaBCgK_fs-hK8QEM/edit?usp=sharing"
            },
            contact: {
                mobileNumber: '0922 634 9311',
                email: 'fbian.kevin@gmail.com',
                address: 'Hagonoy, Bulacan Philippinnes',
                socialMediaAccount: {
                    facebookLink: 'https://www.facebook.com/kevz.fabian',
                    githubLink: "https://github.com/fabian-kev"
                }
            }
        };
        this.comLanguage = [
            "English",
            "Filipino"
        ];
        this.languages = [
            "Java",
            "Kotlin",
            "SQL",
            "Javascript",
            "Typescript",
        ];
        this.libraries = [
            "Spring Boot",
            "Spring JPA",
            "Spring Web",
            "Spring Security",
            "Oauth2",
            "JSON Web Token",
            "Spring Caching",
            "Authorization Server/Client",
            "Async",
            "Scheduling",
            "Mapstruct",
            "Lombok",
            "Spring Cloud Kubernetes",
            "Spring Cloud Loadbalancer",
            "Eureka Discovery Server/Client",
            "Spring Cloud Config Server",
            "Spring Cloud Gateway",
            "OpenFeign",
            "Resillence4j/Hystrix",
            "Sleuth",
            "OpenApi 3",
            "Actuator",
            "SFTP/FTP",
            "JasperReport",
            "Kafka",
            "Junit",
            "Mockito",
            "Mockwebserver",
            "Authorized/Resource Server",
            "GSON",
            "Jackson",
            "JAXB",
            "Spring AWS",
        ];
        this.tools = [
            "AWS(SQS, SNS, Lambda, S3)",
            "Localstack",
            "Wiremock",
            "Kubernetes",
            "Docker",
            "Sonarlint",
            "Sonarcube",
            "Gradle",
            "Maven",
            "IntelliJ",
            "DataGrip",
            "VS Code",
            "PostMan",
            "Putty",
            "WinSCP"
        ];
        this.databases = [
            "MySQL",
            "Oracle",
            "PostgreSQL",
            "H2",
            "MongoDB"
        ];
        this.expertise2 = [
            {
                "title": "Java 8/11 & Spring Boot Framework",
                "level": "EXPERT",
                "class": "expert-level"
            },
            {
                "title": "RESTful API & Microservices",
                "level": "EXPERT",
                "class": "expert-level"
            },
            {
                "title": "AWS(SQS,SNS,Lambda,S3)",
                "level": "EXPERT",
                "class": "expert-level"
            },
            {
                "title": "Kafka",
                "level": "EXPERT",
                "class": "expert-level"
            },
            {
                "title": "Databases",
                "level": "EXPERT",
                "class": "expert-level"
            },
            {
                "title": "Docker/K8s",
                "level": "PROFICIENT",
                "class": "proficient-level"
            }
        ];
        this.projects = [];
        this.companies = [
            {
                "name": "Collabera Inc. 2021 - Present",
                "jobTitle": "Software Engineer/Java Spring boot Developer -",
                "responsibility": `
           Developing microservices, maintaining and optimizing existing microservices, creating lambdas, optimizing databases, support, collab with others, and document the services
        `,
                "techStacks": [
                    "Java 8/11",
                    "Spring boot",
                    "Clean Architecture",
                    "PostGreSQL",
                    "Liquibase",
                    "JOOQ",
                    "Oracle",
                    "Maven",
                    "Git",
                    "Gitlab",
                    "DataGrip",
                    "IntelliJ",
                    "Kafka",
                    "AWS(SQS,SNS,Lambda,S3, ec2)",
                    "Microservices",
                    "RESTful API",
                    "Docker",
                    "Kubernetes",
                    "Wiremock",
                    "Localstack",
                    "Python",
                    "Behave",
                    "Gitlab CI",
                    "Burpscan",
                    "Load Testing",
                    "Junit4/5",
                    "mockwebserver",
                    "Spring EL",
                ]
            },
            {
                "name": "Tagit PH 2021 Nov - 2021 April 6",
                "jobTitle": "Software Engineer/Java Spring boot Developer -",
                "description": `
          I've been working here since april, currently working with a bank related project   
      `,
                "responsibility": `
         Developing microservices, maintaining and optimizing existing microservices, optimizing databases, support, and document the services
      `,
                "techStacks": [
                    "Java",
                    "Spring boot",
                    "RESTful API",
                    "Clean Architecture",
                    "Oracle",
                    "MySQL",
                    "Maven",
                    "Gradle",
                    "Git",
                    "Gitlab",
                    "DataGrip",
                    "IntelliJ",
                    "Mobeix",
                    "Jumio APIs",
                    "Fincle APIs"
                ]
            },
            {
                "name": "Whitecloak Technology Inc #2019 - 2021",
                "jobTitle": "Software Engineer/Java Spring boot Developer -",
                "responsibility": `
        Developing microservices, maintaining and optimizing existing microservices, sharing ideas,  optimizing databases, support, collab with others, and document the services
      `,
                "techStacks": [
                    "Java",
                    "Springboot",
                    "Mobeix",
                    "Microservice",
                    "Oracle",
                    "Mysql",
                    "Mongo",
                    "Maven",
                    "Gradle",
                    "Git",
                    "Gitlab",
                    "DataGrip",
                    "IntelliJ"
                ]
            },
            {
                "name": "Ziaplex Inc. #2018 - 2019",
                "jobTitle": "Software Engineer/Java Developer -",
                "responsibility": `
      Developing services and frontend using Angular, maintaining and optimizing existing services, optimizing databases, generating reports, debugging, support, collab with others, and document the services
      `,
                "techStacks": [
                    "Java",
                    "Kotlin",
                    "Oracle",
                    "Mysql",
                    "Gradle",
                    "Git",
                    "Github",
                    "DataGrip",
                    "IntelliJ",
                    "Postman"
                ]
            },
            {
                "name": "Firstcom Solution Inc # 2017 - 2018",
                "jobTitle": "Web Developer -",
                "responsibility": `
        Developing web app using wordpress, maintaining and improving existing web app, support, collab with others, deploy to production, and document the services
      `,
                "techStacks": [
                    "PHP",
                    "Wordpress",
                    "MySQL",
                    "PhpMyAdmin",
                    "OpenCart",
                    "Code Igniter",
                    "Bootstrap",
                    "Javascript",
                    "CSS",
                    "HTML"
                ]
            }
        ];
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host;
    }
    ngOnInit() {
        this.projects = this.projectService.getProjects().slice(0, 3);
        this.socialMediaLinks = this.projectService.getSocialMediaLinks();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 109, vars: 22, consts: [[1, "container", "pb-4"], [1, "dark-panel", "mt-5"], [1, "overlay"], [1, "row"], [1, "col-md-2"], ["src", "../../assets/images/me2.jpg", "alt", "", 1, "img-fluid", "rounded"], [1, "col"], [1, "mat-body-2"], [1, "mat-body-2", "fg-primary", "ml-2"], [1, "mat-display-2"], [1, "mat-body-1", "mt-3", "pl-1", 2, "font-size", "11px"], [1, "d-flex", "align-items-center", "portfolio-icon"], ["target", "_blank", 3, "href"], ["xmlns", "http://www.w3.org/2000/svg", "width", "34.875", "height", "34.004", "viewBox", "0 0 34.875 34.004"], ["id", "Icon_awesome-github", "data-name", "Icon awesome-github", "d", "M11.665,27.942c0,.141-.162.253-.366.253-.232.021-.394-.091-.394-.253,0-.141.162-.253.366-.253C11.482,27.668,11.665,27.78,11.665,27.942Zm-2.187-.316c-.049.141.091.3.3.345a.33.33,0,0,0,.436-.141c.042-.141-.091-.3-.3-.366A.361.361,0,0,0,9.478,27.626Zm3.108-.12c-.2.049-.345.183-.323.345.021.141.2.232.415.183s.345-.183.323-.323S12.79,27.485,12.586,27.506ZM17.212.563A16.86,16.86,0,0,0,0,17.719,17.628,17.628,0,0,0,11.918,34.537c.9.162,1.216-.394,1.216-.851,0-.436-.021-2.841-.021-4.317,0,0-4.922,1.055-5.955-2.1,0,0-.8-2.046-1.955-2.573,0,0-1.61-1.1.113-1.083A3.711,3.711,0,0,1,8.03,25.432a3.717,3.717,0,0,0,5.126,1.47,3.908,3.908,0,0,1,1.125-2.37c-3.93-.436-7.9-1.005-7.9-7.77a5.329,5.329,0,0,1,1.659-4.141,6.643,6.643,0,0,1,.183-4.774c1.47-.457,4.852,1.9,4.852,1.9a16.611,16.611,0,0,1,8.831,0s3.382-2.363,4.852-1.9a6.64,6.64,0,0,1,.183,4.774,5.466,5.466,0,0,1,1.814,4.141c0,6.785-4.141,7.327-8.072,7.77a4.158,4.158,0,0,1,1.2,3.263c0,2.37-.021,5.3-.021,5.878,0,.457.323,1.013,1.216.851a17.466,17.466,0,0,0,11.8-16.8C34.875,7.966,26.965.563,17.212.563ZM6.834,24.813c-.091.07-.07.232.049.366.113.112.274.162.366.07.091-.07.07-.232-.049-.366C7.087,24.771,6.926,24.722,6.834,24.813Zm-.759-.57c-.049.091.021.2.162.274a.209.209,0,0,0,.3-.049c.049-.091-.021-.2-.162-.274C6.237,24.152,6.124,24.173,6.075,24.244Zm2.278,2.5c-.113.091-.07.3.091.436.162.162.366.183.457.07.091-.091.049-.3-.091-.436C8.655,26.655,8.445,26.634,8.353,26.747Zm-.8-1.034c-.113.07-.113.253,0,.415s.3.232.394.162a.321.321,0,0,0,0-.436C7.847,25.692,7.664,25.622,7.552,25.713Z", "transform", "translate(0 -0.563)", "fill", "#bb86fc"], ["xmlns", "http://www.w3.org/2000/svg", "width", "31.5", "height", "31.5", "viewBox", "0 0 31.5 31.5"], ["id", "Icon_awesome-linkedin", "data-name", "Icon awesome-linkedin", "d", "M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z", "transform", "translate(0 -2.25)", "fill", "#bb86fc"], ["id", "Icon_awesome-facebook-square", "data-name", "Icon awesome-facebook-square", "d", "M28.125,2.25H3.375A3.375,3.375,0,0,0,0,5.625v24.75A3.375,3.375,0,0,0,3.375,33.75h9.65V23.041H8.6V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.521,2.521,0,0,0-2.842,2.723V18h4.836l-.773,5.041H18.475V33.75h9.65A3.375,3.375,0,0,0,31.5,30.375V5.625A3.375,3.375,0,0,0,28.125,2.25Z", "transform", "translate(0 -2.25)", "fill", "#bb86fc"], [1, "col-md-8"], [1, "mat-display-4"], [1, "portfolio-hr", "mt-3", "mb-3"], [1, "mat-body-1", 3, "innerHtml"], [1, "mat-h3", "mt-5"], ["class", "portfolio-chip", 4, "ngFor", "ngForOf"], [1, "mat-h3", "mt-4"], [1, "mat-body-1"], [1, "row", "mb-3", "justify-content-md-center"], [1, "col-sm-2", "text-center", "col-2", "col-md-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19.28", "height", "30.849", "viewBox", "0 0 19.28 30.849"], ["id", "Icon_metro-location", "data-name", "Icon metro-location", "d", "M17.995,1.928a9.64,9.64,0,0,0-9.64,9.64c0,9.64,9.64,21.208,9.64,21.208s9.64-11.568,9.64-21.208a9.64,9.64,0,0,0-9.64-9.64Zm0,15.545a5.9,5.9,0,1,1,5.9-5.9A5.9,5.9,0,0,1,17.995,17.473Zm-3.736-5.9A3.736,3.736,0,1,1,17.995,15.3,3.736,3.736,0,0,1,14.259,11.568Z", "transform", "translate(-8.355 -1.928)", "fill", "#bb86fc"], [1, "col-sm-2", "col-md-2", "col-2", "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "21.208", "height", "30.849", "viewBox", "0 0 21.208 30.849"], ["id", "Icon_metro-mobile", "data-name", "Icon metro-mobile", "d", "M25.707,1.928H8.355A1.934,1.934,0,0,0,6.427,3.856V30.849a1.934,1.934,0,0,0,1.928,1.928H25.707a1.934,1.934,0,0,0,1.928-1.928V3.856A1.934,1.934,0,0,0,25.707,1.928ZM17.031,31.384a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,17.031,31.384Zm8.676-4.392H8.355V5.784H25.707Z", "transform", "translate(-6.427 -1.928)", "fill", "#bb86fc"], [1, "col-sm-2", "col-2", "col-md-2", "text-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "24", "viewBox", "0 0 30 24"], ["id", "Icon_material-email", "data-name", "Icon material-email", "d", "M30,6H6A3,3,0,0,0,3.015,9L3,27a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V9A3.009,3.009,0,0,0,30,6Zm0,6L18,19.5,6,12V9l12,7.5L30,9Z", "transform", "translate(-3 -6)", "fill", "#bb86fc"], ["xmlns", "http://www.w3.org/2000/svg", "width", "27", "height", "36", "viewBox", "0 0 27 36"], ["id", "Icon_awesome-file-alt", "data-name", "Icon awesome-file-alt", "d", "M15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V11.25H17.438A1.692,1.692,0,0,1,15.75,9.563Zm4.5,16.594a.846.846,0,0,1-.844.844H7.594a.846.846,0,0,1-.844-.844v-.562a.846.846,0,0,1,.844-.844H19.406a.846.846,0,0,1,.844.844Zm0-4.5a.846.846,0,0,1-.844.844H7.594a.846.846,0,0,1-.844-.844v-.562a.846.846,0,0,1,.844-.844H19.406a.846.846,0,0,1,.844.844Zm0-5.062v.563a.846.846,0,0,1-.844.844H7.594a.846.846,0,0,1-.844-.844v-.562a.846.846,0,0,1,.844-.844H19.406A.846.846,0,0,1,20.25,16.594ZM27,8.571V9H18V0h.429a1.686,1.686,0,0,1,1.2.492l6.884,6.891A1.682,1.682,0,0,1,27,8.571Z", "fill", "#bb86fc"], [1, "mat-body-2", "fg-primary", "mt-1"], [1, "portfolio-hr", "mt-3", "mb-5"], ["class", "mb-3", 4, "ngFor", "ngForOf"], ["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "mt-3", "d-flex", "align-items-center"], ["routerLink", "/project", 1, "portfolio-link"], [1, "portfolio-chip"], [1, "mb-3"], [1, "mat-h3"], [1, "float-right", "overline", "fg-primary"], [1, "expertise-container"], [1, "expertise"], [1, "mb-5"], [1, "mat-h2", "fg-primary"], [3, "href"], ["alt", "", 1, "rounded", "img-fluid", 3, "src"], [1, "mat-body-1", "mt-3", 3, "innerHtml"], [1, "d-flex", "align-items-baseline"], [1, "ml-2", "mat-small", "text-white"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Languages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_div_35_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Libraries:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HomeComponent_div_38_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Databases:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, HomeComponent_div_41_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Communication Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HomeComponent_div_44_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Years of Experience: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Currently employed at: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, HomeComponent_div_93_Template, 7, 4, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, HomeComponent_div_99_Template, 9, 5, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "View more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, HomeComponent_div_108_Template, 13, 4, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.profession);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.specialty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.motto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.me.contact.socialMediaAccount.githubLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialMediaLinks.linkedIn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.me.contact.socialMediaAccount.facebookLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.me.aboutMe, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.libraries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.databases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.currentCompany);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.contact.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.contact.mobileNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.me.resume.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.me.resume.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expertise2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".mat-display-2[_ngcontent-%COMP%] {\n  letter-spacing: 2px !important;\n  margin: 0;\n  font-family: \"Roboto Mono\", monospace !important;\n}\n\n.mat-display-4[_ngcontent-%COMP%] {\n  letter-spacing: 0.25px;\n  margin: 0;\n}\n\n.mat-display-3[_ngcontent-%COMP%] {\n  letter-spacing: 0px;\n  margin: 0;\n}\n\n.mat-body-2[_ngcontent-%COMP%] {\n  line-height: 24px !important;\n  letter-spacing: 0.5px !important;\n}\n\n.mat-body-1[_ngcontent-%COMP%] {\n  letter-spacing: 0.5px !important;\n  line-height: 24px;\n}\n\n.kevin-logo[_ngcontent-%COMP%] {\n  font-family: \"Megrim\", cursive;\n  font-size: 20px;\n  text-transform: uppercase;\n}\n\n.overline[_ngcontent-%COMP%] {\n  line-height: 20px;\n  letter-spacing: 1.5px;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.87);\n}\n\n.expertise-container[_ngcontent-%COMP%] {\n  background-color: #F2E7FE;\n}\n\n.expertise-container[_ngcontent-%COMP%]   .expertise[_ngcontent-%COMP%] {\n  height: 12px;\n  background-color: #BB86FC;\n}\n\n.base-level-animation[_ngcontent-%COMP%], .competent-level[_ngcontent-%COMP%], .proficient-level[_ngcontent-%COMP%], .expert-level[_ngcontent-%COMP%] {\n  animation-fill-mode: forwards;\n  animation-duration: 1s;\n}\n\n.expert-level[_ngcontent-%COMP%] {\n  animation-name: filling-100;\n}\n\n.proficient-level[_ngcontent-%COMP%] {\n  animation-name: filling-80;\n}\n\n.competent-level[_ngcontent-%COMP%] {\n  animation-name: filling-60;\n}\n\n@keyframes filling-100 {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n\n@keyframes filling-80 {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 80%;\n  }\n}\n\n@keyframes filling-60 {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 60%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvdmFyaWFibGVzL3R5cGhvZ3JhcGh5LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0UsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0RBQUE7QUNiRjs7QURlQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtBQ1pKOztBRGNBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0FDWEo7O0FEY0E7RUFDSSw0QkFBQTtFQUNBLGdDQUFBO0FDWEo7O0FEY0E7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FDWEo7O0FEZUE7RUFFSSw4QkFBQTtFQUVBLGVBQUE7RUFDQSx5QkFBQTtBQ2RKOztBRG9DQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NFM0RXO0FEMEJmOztBQXhCQTtFQUNJLHlCQUFBO0FBMkJKOztBQTFCSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQTRCUjs7QUF6QkE7RUFDSSw2QkFBQTtFQUNBLHNCQUFBO0FBNEJKOztBQTFCQTtFQUVJLDJCQUFBO0FBNEJKOztBQXhCQTtFQUNJLDBCQUFBO0FBMkJKOztBQXhCQTtFQUNJLDBCQUFBO0FBMkJKOztBQXZCQTtFQUNJO0lBQ0ksU0FBQTtFQTBCTjtFQXhCRTtJQUNJLFdBQUE7RUEwQk47QUFDRjs7QUF4QkE7RUFDSTtJQUNJLFNBQUE7RUEwQk47RUF4QkU7SUFDSSxVQUFBO0VBMEJOO0FBQ0Y7O0FBeEJBO0VBQ0k7SUFDSSxTQUFBO0VBMEJOO0VBeEJFO0lBQ0ksVUFBQTtFQTBCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcblxuLy8gLmJhc2UtaGVhZGxpbmUge1xuXG4vLyB9XG4vLyAuYmFzZS10aXRsZSB7XG5cbi8vIH1cbi8vIC5iYXNlLXN1YmhlYWRpbmctMiB7XG4gICAgXG4vLyB9XG4vLyAuYmFzZS1zdWJoZWFkaW5nLTEge1xuXG4vLyB9XG4ubWF0LWRpc3BsYXktMiB7XG4gIGxldHRlci1zcGFjaW5nOiAycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOjA7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2UgIWltcG9ydGFudDsgXG59XG4ubWF0LWRpc3BsYXktNCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgICBtYXJnaW46IDA7XG59XG4ubWF0LWRpc3BsYXktMyB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5tYXQtYm9keS0yIHsvL2JvbGRlci8gc3Ryb25nXG4gICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHggIWltcG9ydGFudDtcbiAgICAvLyBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xufVxuLm1hdC1ib2R5LTEge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIC8vIGZvbnQtc2l6ZToxNnB4ICAhaW1wb3J0YW50O1xufVxuXG4ua2V2aW4tbG9nbyB7XG4gICAgLy8gZm9udC1mYW1pbHk6ICdBbmFoZWltJywgc2Fucy1zZXJpZjtcbiAgICBmb250LWZhbWlseTogJ01lZ3JpbScsIGN1cnNpdmU7XG5cbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxufVxuXG5cbi8vIC5jYXB0aW9uIHsvL1NtYWxsZXIgYm9keSBhbmQgaGludCB0ZXh0LlxuLy8gICAgIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDBweCAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiAkZndSZWd1bGFyICFpbXBvcnRhbnQ7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5tdC1idXR0b24ge1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDRweCAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiAkZndSZWd1bGFyICFpbXBvcnRhbnQ7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cblxuLm92ZXJsaW5lIHtcbiAgICBsaW5lLWhlaWdodDogMjBweCA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweCA7XG4gICAgY29sb3I6ICRmZ1doaXRlTWVkaXVtO1xufVxuXG4vLyAuZGlzcGxheS02IHtcbi8vICAgICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuLy8gICAgIGxldHRlci1zcGFjaW5nOjFweCAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiAkZndTZW1pQm9sZCAhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuLy8gICAgIGNvbG9yOiAkZmdXaGl0ZU1lZGl1bTtcbi8vIH0iLCJAaW1wb3J0ICdpbmRleCc7XG5cbi8vIC5kYXJrLXBhbmVsIHtcbi8vICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzAwMDAwMDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuLy8gICAgIC5vdmVybGF5IHtcbi8vICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDMwcHggMzBweDtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogMC4xMik7XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuLmV4cGVydGlzZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkU3RkU7XG4gICAgLmV4cGVydGlzZSB7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlDb2xvcjtcbiAgICB9XG59XG4uYmFzZS1sZXZlbC1hbmltYXRpb24ge1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG4uZXhwZXJ0LWxldmVsIHtcbiAgICBAZXh0ZW5kIC5iYXNlLWxldmVsLWFuaW1hdGlvbjtcbiAgICBhbmltYXRpb24tbmFtZTogZmlsbGluZy0xMDA7XG4gICBcbn1cblxuLnByb2ZpY2llbnQtbGV2ZWwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmaWxsaW5nLTgwO1xuICAgIEBleHRlbmQgLmJhc2UtbGV2ZWwtYW5pbWF0aW9uO1xufVxuLmNvbXBldGVudC1sZXZlbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZpbGxpbmctNjA7XG4gICAgQGV4dGVuZCAuYmFzZS1sZXZlbC1hbmltYXRpb247XG59XG5cbkBrZXlmcmFtZXMgZmlsbGluZy0xMDAge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6MCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgZmlsbGluZy04MCB7XG4gICAgMCUge1xuICAgICAgICB3aWR0aDowJTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHdpZHRoOjgwJTtcbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGZpbGxpbmctNjAge1xuICAgIDAlIHtcbiAgICAgICAgd2lkdGg6MCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB3aWR0aDo2MCU7XG4gICAgfVxufVxuICBcbiIsIlxuLy8gRm9udCBXZWlnaHRzXG4kZndMaWdodDpsaWdodGVyO1xuJGZ3UmVndWxhcjo0MDA7XG4kZndTZW1pQm9sZDo1NTA7XG4kZndCb2xkOjcwMDtcblxuXG5cbi8vY29sb3JcbiRmZ1doaXRlUHJpbWFyeTogI0ZGRkZGRjtcbiRmZ1doaXRlTWVkaXVtOnJnYmEoI0ZGRkZGRiwgODclKTtcblxuXG5cblxuLy9tYXRlcmlhbCBjb2xvclxuJHByaW1hcnlDb2xvcjIwMDogI0JCODZGQztcbiRwcmltYXJ5Q29sb3IxMDA6IGxpZ2h0ZW4oJHByaW1hcnlDb2xvcjIwMCwgMTAlKTtcbiRwcmltYXJ5Q29sb3I1MDogbGlnaHRlbigkcHJpbWFyeUNvbG9yMjAwLCA1JSk7XG5cblxuJHByaW1hcnlDb2xvcjogJHByaW1hcnlDb2xvcjIwMDtcblxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_go_top_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-go-top-button */ "./node_modules/ng-go-top-button/__ivy_ngcc__/fesm2015/ng-go-top-button.js");






function ProjectComponent_div_6_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stack_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stack_r3);
} }
function ProjectComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Technology Stack: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectComponent_div_6_div_12_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Company: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Visit the actual website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.websiteLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r1.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", project_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.techStacks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.websiteLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { "right": "7em", "border": "none", "background": "none", "top": "80%", "width": 0, "height": 0, "padding": "0px" }; };
class ProjectComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.projects = [];
    }
    ngOnInit() {
        this.projects = this.projectService.getProjects();
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 10, vars: 7, consts: [[1, "mat-display-2", "mt-5"], ["routerLink", "", 1, "portfolio-link", "float-right"], [1, "mat-caption"], ["class", "dark-panel mt-5", 4, "ngFor", "ngForOf"], [3, "animate", "speed", "acceleration", "scrollDistance", "styles"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30.698", "height", "31.504", "viewBox", "0 0 30.698 31.504"], ["id", "Icon_awesome-arrow-up", "data-name", "Icon awesome-arrow-up", "d", "M2.454,20.355.893,18.795a1.681,1.681,0,0,1,0-2.384L14.555,2.742a1.681,1.681,0,0,1,2.384,0L30.6,16.4a1.681,1.681,0,0,1,0,2.384l-1.561,1.561a1.689,1.689,0,0,1-2.412-.028l-8.065-8.466V32.063a1.683,1.683,0,0,1-1.687,1.688h-2.25a1.683,1.683,0,0,1-1.687-1.687V11.855L4.866,20.327a1.677,1.677,0,0,1-2.412.028Z", "transform", "translate(-0.397 -2.246)", "fill", "#bb86fc"], [1, "dark-panel", "mt-5"], [1, "overlay"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-md-6"], ["target", "_blank", 3, "href"], ["alt", "", 1, "img-fluid", "rounded", 3, "src"], [1, "col"], [1, "mat-title"], [1, "mat-body-1", 3, "innerHtml"], [1, "mat-body-2"], ["class", "portfolio-chip", 4, "ngFor", "ngForOf"], [1, "mt-4"], [1, "mat-body-1"], [1, "portfolio-link", "d-block"], [1, "portfolio-chip"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "These are the projects that I made and being part of since 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectComponent_div_6_Template, 21, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ng-go-top-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animate", true)("speed", 50)("acceleration", 2)("scrollDistance", 300)("styles", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_go_top_button__WEBPACK_IMPORTED_MODULE_4__["NgGoTopButtonComponent"]], styles: [".btn-go-up[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  border: none !important;\n}\n\n.custom-class[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: pink;\n  border-color: green;\n  height: 30px;\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1nby11cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNsYXNzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss']
            }]
    }], function () { return [{ type: _service_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



class ProjectService {
    constructor() {
        this.projects = [
            {
                name: "PayMaya",
                description: `
        This is my current project, I've been working here as Backend Java Spring Boot developer. my daily responsibilities here are continuous developing microservices, creating AWS lambdas, support QE, optimize and update existing microservices, collab with others, sharing ideas, performing burp scan, load testing,
        document the services.
      `,
                imageSrc: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host + "/assets/images/paymaya.jpg",
                company: "Collabera Inc.",
                websiteLink: "https://play.google.com/store/apps/details?id=com.paymaya&hl=en_ZA&gl=US",
                techStacks: [
                    "Java 8/11",
                    "Spring boot",
                    "Clean Architecture",
                    "PostGreSQL",
                    "Liquibase",
                    "JOOQ",
                    "Oracle",
                    "Maven",
                    "Git",
                    "Gitlab",
                    "DataGrip",
                    "IntelliJ",
                    "Kafka",
                    "AWS(SQS,SNS,Lambda,S3, ec2)",
                    "Microservices",
                    "RESTful API",
                    "Docker",
                    "Kubernetes",
                    "Wiremock",
                    "Localstack",
                    "Python",
                    "Behave",
                    "Gitlab CI",
                    "Burpscan",
                    "Load Testing",
                    "Junit4/5",
                    "mockwebserver",
                    "Spring EL"
                ]
            },
            {
                name: "Unionbank Online",
                "description": `
      I worked here for 1 year+ in work from home setup. I developed & integrated some apis here, update some apis and also add api versioning for backward compatibility.
      optimized some existing api by implementing caching and removing redundant repository/remote api call.`,
                "imageSrc": `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host}/assets/images/ub.PNG`,
                "websiteLink": "https://online.unionbankph.com/online-banking",
                "company": "Whitecloak Technology Inc.",
                "techStacks": [
                    "Java",
                    "Kotlin",
                    "Spring Boot",
                    "Spring Data",
                    "Spring Web",
                    "Spring Async",
                    "Spring Scheduling",
                    "Spring Caching",
                    "Spring Cloud",
                    "OpenFeign",
                    "Zuul",
                    "Retrofit",
                    "Oracle",
                    "WebLogic",
                    "Ubuntu",
                    "IntelliJ",
                    "Data Grip"
                ]
            },
            {
                "name": "GetGoPay",
                "description": `
        I worked here for 1 year+, I developed several internal apis and integrated such as instapay, cash in via UBP, optimized jumio implementation and other existing apis. 
      `,
                "imageSrc": "../../assets/images/getgo.PNG",
                "websiteLink": "https://www.getgopay.com.ph/",
                "company": "Whitecloak Technology Inc.",
                "techStacks": [
                    "Java",
                    "Spring Boot",
                    "Spring Data",
                    "Spring Web",
                    "Spring Security",
                    "Spring oauth2/JWT",
                    "Spring Async",
                    "Spring Scheduling",
                    "Spring Caching",
                    "Spring Cloud",
                    "OpenFeign",
                    "Zuul",
                    "Retrofit",
                    "Clean Architecture",
                    "Microservice",
                    "MySQL",
                    "Ubuntu",
                    "FTP",
                    "SFTP",
                    "Jumio",
                    "DataGrip",
                    "IntelliJ",
                    "AMLA"
                ]
            },
            {
                name: "Tradeline Statistics Philippines",
                description: `
      I worked for this project as full stack for I think 8 months+,
       We started this project from the scratch. We used spring boot + angular to develop this website and the apis.
       We handled the huge amount of data by indexing and implementing spring caching.
      `,
                "imageSrc": "../../assets/images/tradestats.PNG",
                "websiteLink": "http://www.tradelinephilippines.dti.gov.ph:8080/",
                "company": "Ziaplex Inc.",
                "techStacks": [
                    "Java",
                    "Spring boot",
                    "Spring Caching",
                    "Spring Web",
                    "Spring Data",
                    "Oracle",
                    "Angular",
                    "CSS/SCSS",
                    "Typescript",
                    "Javascript",
                    "HTML",
                    ""
                ]
            },
            {
                "name": "CityWash",
                "description": "This project is made by Wordpress it is short term project like 1 - 2 weeks development.",
                "imageSrc": "../../assets/images/citywash.PNG",
                "websiteLink": "https://citywash.com.sg/",
                "company": "Firstcom Solution Inc.",
                "techStacks": [
                    "PHP",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "WordPress",
                    "Sublime"
                ]
            },
            {
                "name": "Enetek",
                "description": "This project is made by Wordpress it is short term project like 1 - 2 weeks development.",
                "imageSrc": "../../assets/images/enetek.PNG",
                "websiteLink": "https://www.enetek-power.com/",
                "company": "Firstcom Solution Inc.",
                "techStacks": [
                    "PHP",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "WordPress",
                    "Sublime"
                ]
            },
            {
                "name": "Pacc Line",
                "description": "This project is made by Wordpress it is short term project like 1 - 2 weeks development",
                "imageSrc": "../../assets/images/pacc.PNG",
                "websiteLink": "http://www.pacc.com.sg/",
                "company": "Firstcom Solution Inc.",
                "techStacks": [
                    "PHP",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "WordPress",
                    "Sublime"
                ]
            },
            {
                "name": "QB Printing",
                "description": "This project is made by Opencart it is short term project like 1 - 2 weeks development.",
                "imageSrc": "../../assets/images/qb.PNG",
                "websiteLink": "https://qbprinting.com/",
                "company": "Firstcom Solution Inc.",
                "techStacks": [
                    "PHP",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "OpenCart",
                    "Sublime"
                ]
            },
            {
                "name": "Cryoviva",
                "description": "This project is made by Wordpress it is short term project like 1 - 2 weeks development.",
                "imageSrc": "../../assets/images/cryoviva.PNG",
                "websiteLink": "https://cryoviva.com.sg/",
                "company": "Firstcom Solution Inc.",
                "techStacks": [
                    "PHP",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "OpenCart",
                    "Sublime"
                ]
            },
            {
                "name": "Shiro-wa",
                "description": "This project is made by Opencart it is short term project like 1 - 2 weeks development.",
                "imageSrc": "../../assets/images/shirowa.PNG",
                "websiteLink": "https://shirowa-global.com/",
                "company": "Firstcom Solution Inc.",
                "techStacks": [
                    "PHP",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "OpenCart",
                    "Sublime"
                ]
            },
            {
                "name": "Emtech",
                "description": "This project is made by Opencart it is short term project like 1 - 2 weeks development.",
                "imageSrc": "../../assets/images/emtech.PNG",
                "websiteLink": "http://www.emtechinternational.com/",
                "company": "Firstcom Solution Inc.",
                "techStacks": [
                    "PHP",
                    "HTML",
                    "CSS",
                    "Javascript",
                    "OpenCart",
                    "Sublime"
                ]
            }
        ];
        this.socialMediaLinks = {
            facebook: '',
            linkedIn: '',
            github: '',
            cv: 'https://docs.google.com/document/d/1GlnaIsMdzJOf3Cw-IX-fD78YoW0lUeeoxRNZAQRYDok/edit?usp=sharing'
        };
        console.log("Number of projects: " + this.projects.length);
    }
    getProjects() {
        return this.projects;
    }
    getSocialMediaLinks() {
        return this.socialMediaLinks;
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    host: "localhost:4200"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/portfolio/portfolio/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map