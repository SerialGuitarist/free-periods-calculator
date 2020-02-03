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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='bg-light'>\n\n  <app-navbar (input)='changePage($event)'></app-navbar>\n\n\n  <div class=\"container\">\n    <app-input *ngIf='input; else table'></app-input>\n    <ng-template #table>\n      <app-table></app-table>\n    </ng-template>\n    \n  </div>\n\n</div>\n\n<!-- <div class=\"\">\n  <br><br><br><br>\n  <p styles='border:2px solid black;'>Yaeis lorem ipudwaodhgawudhij;eflgrjhjakbflk;lja dhadwauu; awl;duahlhawo;hlj <br> dwouaghifpjorhjkafpu wagdhpojejkfbahf</p>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/input/input.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/input/input.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n\n<div class=\"form-group row\">\n    <label for=\"name\" class='col-md-2 col-form-label'>Name</label>\n    <div class=\"col-md-8\">\n        <input type=\"text\" class=\"form-control\" placeholder='Name' id='name' [(ngModel)]='name'>\n    </div>\n    <div class=\"col-md-1\">\n        <button class=\"btn btn-secondary\" (click)='clear()'>Clear</button>\n    </div>\n    <div class=\"col-md-1\">\n        <button class=\"btn btn-dark\" (click)='save()'>Save</button>\n    </div>\n    <!-- <div class=\"cik-md-1\">\n        <button class=\"btn btn-dark\" (click)='emission()'>Emit</button>\n    </div> -->\n</div>\n\n<table class=\"table table-striped table-dark table-bordered\">\n    <thead class=\"thead-dark\">\n        <tr>\n            <th *ngFor='let day of days'>{{  day  }}</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr *ngFor='let time of times; let timeIndex=index'>\n            <td *ngFor='let day of days; let dayIndex=index'>\n                <a (click)='bowie(dayIndex,timeIndex)'>\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <button class=\"btn btn-light\" *ngIf=\"checks[dayIndex][timeIndex]==-1; else busy\">Free</button>\n                        <ng-template #busy>\n                            <button type=\"button\" class=\"btn btn-warning\">Busy</button>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-md-8\">\n                        <p>{{ days[dayIndex] }} <br> {{ times[timeIndex] }}</p>\n                    </div>\n                </div>\n                </a>\n            </td>\n        </tr>\n    \n    </tbody>\n</table>\n\n<div class=\"form-group row\">\n    <label for=\"name\" class='col-md-3 col-form-label'>Save/Backup from/to text</label>\n    <div class=\"col-md-7\">\n        <input type=\"text\" class=\"form-control\" id='backup' [(ngModel)]='backup' id='backup'>\n    </div>\n    <div class=\"col-md-1\">\n        <button class=\"btn btn-dark\" (click)='saveFromText()'>Restore</button>\n    </div>\n    <div class=\"col-md-1\">\n        <button class=\"btn btn-dark\" (click)='saveToText()'>Backup</button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Free Periods Calculator</a>\n    <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button> -->\n  \n    <!-- <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"> -->\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" [ngClass]=\"{active: !table}\">\n          <a class=\"nav-link \" (click)='selectInput()'>Add a schedule</a>\n        </li>\n        <li class=\"nav-item\" [ngClass]=\"{active: table}\">\n          <a class=\"nav-link \" (click)='selectTable()'>Show Free Periods</a>\n        </li>\n      </ul>\n    <!-- </div> -->\n  </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/table/table.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/table/table.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"card-header d-flex justify-content-between\">\n            <div class=\"col-md-2 align-self-center\">\n                Saved Schedules\n            </div>\n            <button class=\"btn btn-secondary\" (click)='output()'>Show Free Periods</button>\n    </div>\n\n    <ul class=\"list-group\" *ngIf=\"schedules.length > 0; else prompt\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor='let schedule of schedules; let i = index'>\n                <div>\n                    <input type=\"checkbox\" [(ngModel)]='workingList[i]'>\n                    {{schedule.name}}\n                </div>\n                <button class=\"btn btn-danger\" (click)='delete(i)'>Delete</button>\n        </li>\n    </ul>\n\n    <ng-template #prompt>\n        <h1 class='mx-5'>Add some schedules to get started</h1>\n    </ng-template>\n\n    <div class=\"card-header d-flex justify-content-between\">\n        <div>\n            <button class=\"btn btn-secondary mr-2\" (click)='selectAll()'>Select All</button>\n            <button class=\"btn btn-secondary\" (click)='unselectAll()'>Unselect All</button>\n        </div>\n        <button class=\"btn btn-danger\" (click)='deleteAll()'>Delete All</button>\n    </div>\n</div>\n\n<table class=\"table table-striped table-dark table-bordered\">\n    <thead class=\"thead-dark\">\n        <tr>\n            <th *ngFor='let day of days'>{{  day  }}</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr *ngFor='let time of times; let timeIndex=index'>\n            <td *ngFor='let day of days; let dayIndex=index'>\n                <a>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <button class=\"btn btn-light\" *ngIf=\"busyFolk[dayIndex][timeIndex].length==0; else busy\">Free</button>\n                        \n                        <ng-template #busy>\n                            <button class=\"btn btn-warning outerHover\" title=\"\" (click)='logEm(dayIndex, timeIndex)'>{{ busyFolk[dayIndex][timeIndex].length }} Busy\n                                <div class=\"innerHover busyHover\">{{busyFolk[dayIndex][timeIndex]}}</div>\n                                <div class=\"innerHover freeHover\">{{freeFolk[dayIndex][timeIndex]}}</div>\n                            </button>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <p>{{ days[dayIndex] }} <br> {{ times[timeIndex] }}</p>\n                    </div>\n                </div>\n                </a>\n            </td>\n        </tr>\n    \n    </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".floatation {\r\n    position: fixed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXRhdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _schedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule.service */ "./src/app/schedule.service.ts");



let AppComponent = class AppComponent {
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
        this.input = true;
        this.title = 'Angular';
    }
    changePage(page) {
        this.input = page;
    }
};
AppComponent.ctorParameters = () => [
    { type: _schedule_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        providers: [_schedule_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleService"]],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
            _input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"],
            _table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/input/input.component.css":
/*!*******************************************!*\
  !*** ./src/app/input/input.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _schedule_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schedule.model */ "./src/app/schedule.model.ts");
/* harmony import */ var _schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schedule.service */ "./src/app/schedule.service.ts");




let InputComponent = class InputComponent {
    constructor(service) {
        this.service = service;
        this.schedules = [];
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        this.times = ['07:40-09:10', '09:20-10:50', '11:00-12:30', '12:40-14:10', '14:20-15:50', '16:00-17:30', '17:40-19:10', '19:20-20:50'];
        this.name = '';
        this.schedule = [[], [], [], [], []];
        this.checks = [[-1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1]];
    }
    ngOnInit() {
        this.schedules = this.service.schedules;
    }
    bowie(day, time) {
        if (this.checks[day][time] == -1) {
            this.checks[day][time] = time;
            this.schedule[day].push(time);
        }
        else {
            this.checks[day][time] = -1;
            this.schedule[day].splice(this.schedule[day].indexOf(time));
        }
    }
    clear() {
        this.name = '';
        this.schedule = [[], [], [], [], []];
        this.checks = [[-1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1]];
    }
    // emission() {
    //   //testing purposes
    //   console.log(this.schedule);
    // }
    save() {
        this.service.newSchedule(new _schedule_model__WEBPACK_IMPORTED_MODULE_2__["Schedule"](this.name, this.schedule));
        this.clear();
    }
    saveToText() {
        var individual;
        var backup = [];
        for (var person of this.schedules) {
            individual = [];
            individual.push(person.name, person.schedule);
            backup.push(individual);
        }
        console.log(backup);
        this.backup = JSON.stringify(backup, null);
    }
    saveFromText() {
        var backup = [];
        backup = JSON.parse(this.backup);
        for (var person of backup) {
            this.service.newSchedule(new _schedule_model__WEBPACK_IMPORTED_MODULE_2__["Schedule"](person[0], person[1]));
        }
        this.backup = '';
    }
};
InputComponent.ctorParameters = () => [
    { type: _schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"] }
];
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: __webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/index.js!./src/app/input/input.component.html"),
        styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/input/input.component.css")]
    })
], InputComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.table = false;
    }
    ngOnInit() {
    }
    selectInput() {
        this.input.emit(true);
        this.table = false;
    }
    selectTable() {
        this.input.emit(false);
        this.table = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavbarComponent.prototype, "input", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/schedule.model.ts":
/*!***********************************!*\
  !*** ./src/app/schedule.model.ts ***!
  \***********************************/
/*! exports provided: Schedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
class Schedule {
    constructor(name, schedule) {
        this.name = name;
        this.schedule = schedule;
    }
}
Schedule.ctorParameters = () => [
    { type: String },
    { type: Array }
];


/***/ }),

/***/ "./src/app/schedule.service.ts":
/*!*************************************!*\
  !*** ./src/app/schedule.service.ts ***!
  \*************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
class ScheduleService {
    constructor() {
        this.schedules = [
        // new Schedule('Altai',[ [1,3,5],[1,2,4,6],[1,2,3],[2,3],[] ]),
        // new Schedule('Bilguudei',[ [0,1,3],[0,2],[0,1,2,5],[2],[] ]),
        // new Schedule('Misheel', [ [1,2,3],[2,4,5],[1,2,3],[1,3,4],[5] ])
        ];
        this.workingList = [true, true, true];
        this.busyFolk = [[[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []]];
        this.freeFolk = [[[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], []]];
        this.testList = ['yes', 'yaeis'];
        this.workingTestList = [];
        //[["Altai",[[1,3,5],[1,2,4,6],[1,2,3],[2,3],[]]],["Tsoomoo",[[0,1,2,3],[4,6],[1,3,4],[],[0,1,2,3,4,5]]]]
    }
    newSchedule(schedule) {
        this.schedules.push(schedule);
        this.workingList.push(true);
    }
    deleteSchedule(target) {
        this.schedules.splice(target, 1);
        this.workingList.splice(target, 1);
    }
    deleteAll() {
        while (this.schedules.length > 0) {
            this.deleteSchedule(0);
        }
    }
    // findFreeTimes() {
    //   for (var day in this.busyFolk) {
    //     this.busyFolk[day] = [ [],[],[],[],[],[],[],[] ];
    //     this.freeFolk[day] = [ [],[],[],[],[],[],[],[] ];
    //   }
    //   for (var schedule in this.schedules) {
    //     for (var day in this.schedules[schedule].schedule) {
    //       for (var period of this.schedules[schedule].schedule[day]) {
    //         if(this.workingList[schedule] === true) {
    //           this.busyFolk[day][period].push(this.schedules[schedule].name);
    //         }
    //       }
    //     }
    //   }
    // }
    findFreeTimes() {
        for (var day in this.busyFolk) {
            this.busyFolk[day] = [[], [], [], [], [], [], [], []];
            this.freeFolk[day] = [[], [], [], [], [], [], [], []];
        }
        for (var schedule in this.schedules) {
            for (let day = 0; day < 5; day++) {
                for (let period = 0; period < 8; period++) {
                    if (this.workingList[schedule] === true) {
                        // this.busyFolk[day][period].push(this.schedules[schedule].name);
                        if (this.schedules[schedule].schedule[day].includes(period)) {
                            this.busyFolk[day][period].push(this.schedules[schedule].name);
                        }
                        else {
                            this.freeFolk[day][period].push(this.schedules[schedule].name);
                        }
                    }
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='checkbox'] {\r\n    width:30px;\r\n    height:30px;\r\n    border-radius:5px;\r\n    border:2px solid #555;\r\n}\r\ninput[type='checkbox']:checked {\r\n    background: #abd;\r\n}\r\n/********/\r\n/********/\r\n.outerHover {\r\n    position: relative;\r\n  }\r\n.outerHover .innerHover {\r\n    visibility: hidden;\r\n    /* width: 120px; */\r\n    /* max-width: 250px; */\r\n    /* text-align: center; */\r\n    padding: 0 10px 0 10px;\r\n    border-radius: 6px;\r\n\r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    /* bottom: -100%; */\r\n    /* left: 75%; */\r\n    /* margin-left: -60px; */\r\n}\r\n.outerHover:hover .innerHover {\r\n    visibility: visible;\r\n}\r\n.busyHover {\r\n    background-color: #666;\r\n    color: #fff;\r\n}\r\n.freeHover {\r\n    background-color: #eee;\r\n    color: #444;\r\n    /* top: 10px; */\r\n    margin-top: 24px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUEsU0FBUztBQUVULFNBQVM7QUFDVDtJQUNJLGtCQUFrQjtFQUNwQjtBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixrQkFBa0I7O0lBRWxCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICAgIHdpZHRoOjMwcHg7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjNTU1O1xyXG59XHJcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYWJkO1xyXG59XHJcblxyXG4vKioqKioqKiovXHJcblxyXG4vKioqKioqKiovXHJcbi5vdXRlckhvdmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4ub3V0ZXJIb3ZlciAuaW5uZXJIb3ZlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAvKiB3aWR0aDogMTIwcHg7ICovXHJcbiAgICAvKiBtYXgtd2lkdGg6IDI1MHB4OyAqL1xyXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCB0ZXh0ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLyogYm90dG9tOiAtMTAwJTsgKi9cclxuICAgIC8qIGxlZnQ6IDc1JTsgKi9cclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAtNjBweDsgKi9cclxufVxyXG5cclxuLm91dGVySG92ZXI6aG92ZXIgLmlubmVySG92ZXIge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmJ1c3lIb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5mcmVlSG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgLyogdG9wOiAxMHB4OyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _schedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schedule.service */ "./src/app/schedule.service.ts");



let TableComponent = class TableComponent {
    //following is test
    // testList: Array<string>;
    // workingTestList: Array<string> = []; 
    constructor(service) {
        this.service = service;
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        this.times = ['07:40-09:10', '09:20-10:50', '11:00-12:30', '12:40-14:10', '14:20-15:50', '16:00-17:30', '17:40-19:10', '19:20-20:50'];
    }
    ngOnInit() {
        this.schedules = this.service.schedules;
        this.busyFolk = this.service.busyFolk;
        this.freeFolk = this.service.freeFolk;
        this.workingList = this.service.workingList;
    }
    output() {
        this.service.findFreeTimes();
    }
    delete(target) {
        this.service.deleteSchedule(target);
    }
    deleteAll() {
        this.service.deleteAll();
    }
    selectAll() {
        this.workingList.fill(true);
    }
    unselectAll() {
        this.workingList.fill(false);
    }
    logEm(day, time) {
        console.log('Busy Folk: ', this.busyFolk[day][time]);
        console.log('Free Folk: ', this.freeFolk[day][time]);
    }
};
TableComponent.ctorParameters = () => [
    { type: _schedule_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleService"] }
];
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/table/table.component.html"),
        styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
    })
], TableComponent);



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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\leade\Desktop\Programming\Free Periods\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map