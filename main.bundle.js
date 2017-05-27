webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "h1, h2 {\n  color: white;\n  font-family: Sketch;\n  text-align: center;\n}\n\nh1 {\n  font-size: 4em;\n}\n\nh2.project {\n  font-family: inherit;\n}\n\n.header {\n  padding: 5px;\n}\n\n.navbar {\n  box-shadow: 0px 5px 10px #d3d3d3!important;\n  border-radius: 0!important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<app-header [currentProject] = 'currentProject'></app-header>\n<div class=\"container\">\n  <div class=\"row\" *ngIf='projects.length>0'>\n    <div class=\"col-md-3 panel panel-default\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">Todo</h2>\n      </div>\n      <div class=\"panel-body\">\n        <app-list-todo class='text-center' *ngFor='let Task of Tasks' [currentProject]='currentProject' [task]='Task' (taskClicked)='onStateUpdate($event)'></app-list-todo>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-md-offset-1 panel panel-default\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">Current</h2>\n      </div>\n      <div class=\"panel-body\">\n        <app-list-current class='text-center' *ngFor='let Task of Tasks' [currentProject]='currentProject' [task]='Task' (taskClicked)='onStateUpdate($event)'></app-list-current>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-md-offset-1 panel panel-default\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">Done</h2>\n      </div>\n      <div class=\"panel-body\">\n        <app-list-done class='text-center' *ngFor='let Task of Tasks' [currentProject]='currentProject' [task]='Task' (taskClicked)='onStateUpdate($event)'></app-list-done>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <app-projects *ngIf='projects.length===0' class='col-md-12' (projectCreated)='onNewProject($event)' (projectDeleted)='onDeleteProject($event)' (projectSelected)='onSelectedProject($event)' [projects]='projects' [selectedProject]='currentProject'></app-projects>\n    <app-projects *ngIf='projects.length>0'class='col-md-6' (projectCreated)='onNewProject($event)' (projectDeleted)='onDeleteProject($event)' (projectSelected)='onSelectedProject($event)' [projects]='projects' [selectedProject]='currentProject'></app-projects>\n    <app-new-task class=\"col-md-6\" *ngIf='projects.length>0' (taskCreated)='onNewTask($event)' [currentProject]='currentProject' [timesVisited]='timesVisited'></app-new-task>\n  </div>\n  <h3 *ngIf='projects.length === 0'>Start by creating a new project!</h3>\n  <hr>\n\n</div>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"header\">\n        <h1>TreAngular</h1>\n        <h2 *ngIf='!currentProject'>An Angular project</h2>\n        <h2 *ngIf='currentProject' class=\"project\"> Project: {{currentProject}}</h2>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div>\n  <button class='btn btn-success' type=\"button\" title=\"You're done? Then click me!\" name=\"button\" *ngIf='(task.state === \"current\") && (task.project === currentProject)' (click)='onTaskClicked(task.description,task.state, task.project)'>{{task.description}}, started at {{task.start | date: 'HH:mm on dd/MM/yyyy '}} <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span></button>\n</div>\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<div>\n  <button class='btn btn-danger' type=\"button\" title=\"Carefull! If you click me I'll disappear!\" name=\"button\" *ngIf='(task.state === \"done\") && (task.project === currentProject)' (click)='onTaskClicked(task.description,task.state, task.project)'>{{task.description}} <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n</div>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<div>\n  <button class='btn btn-default' type=\"button\" title=\"Let's get to work!\" name=\"button\" *ngIf='(task.state === \"todo\") && (task.project === currentProject)' (click)='onTaskClicked(task.description,task.state, task.project)'>{{task.description}} <span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span></button>\n</div>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"newtask\">Create a new task</label>\n    <input name='description' type=\"text\" class=\"form-control\" #description>\n  </div>\n  <button class=\"btn btn-success\" (click)='onNewTaskCreated(description)'>Add a new Task</button>\n  <h3 class='taskcreation' *ngIf='timesVisited <= 5'>Then Create your tasks!</h3>\n</form>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div *ngIf='projects.length>1' class=\"form-group\">\n  <label for=\"projects\">Select your project</label>\n  <select (click)='onSelectedProject(selectedProject)' class=\"form-control\" id=\"projects\" [(ngModel)]=\"selectedProject\">\n    <option  *ngFor=\"let project of projects\" [value]=\"project\">{{project}}</option>\n  </select>\n</div>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"newproject\">Create a new project</label>\n      <input required type=\"text\" class=\"form-control\" #newprojectName>\n    </div>\n    <button class=\"btn btn-success\" (click)='onNewProjectCreated(newprojectName)'>Add a new Project</button>\n    <button class=\"btn btn-danger\" (click)='onDeleteProject(selectedProject)' *ngIf='projects.length>0'><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete the current Project </button>\n  </form>\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 75:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 75;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(95);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.Tasks = [];
        this.projects = [];
        this.timesVisited = 0;
        console.log(JSON.parse(localStorage.getItem('Tasks')));
        if ((localStorage.getItem('Tasks')) !== null) {
            this.Tasks = JSON.parse(localStorage.getItem('Tasks'));
        }
        if ((localStorage.getItem('projects')) !== null) {
            this.projects = JSON.parse(localStorage.getItem('projects'));
        }
        if ((localStorage.getItem('currentProject')) !== null) {
            this.currentProject = JSON.parse(localStorage.getItem('currentProject'));
        }
        if ((localStorage.getItem('timesVisited')) !== null) {
            this.timesVisited = JSON.parse(localStorage.getItem('timesVisited'));
        }
        this.timesVisited++;
        console.log(this.timesVisited);
        localStorage.setItem("timesVisited", JSON.stringify(this.timesVisited));
    }
    AppComponent.prototype.onNewTask = function (newTaskData) {
        this.Tasks.push(newTaskData);
        this.JSONTasks = JSON.stringify(this.Tasks);
        localStorage.setItem("Tasks", this.JSONTasks);
    };
    AppComponent.prototype.onNewProject = function (newProjectData) {
        this.projects.push(newProjectData.projectName);
        this.JSONprojects = JSON.stringify(this.projects);
        localStorage.setItem("projects", this.JSONprojects);
        this.currentProject = newProjectData.projectName;
        this.JSONcurrentProject = JSON.stringify(this.currentProject);
        localStorage.setItem("currentProject", this.JSONcurrentProject);
    };
    AppComponent.prototype.onDeleteProject = function (deleteProjectData) {
        var newProjects = [];
        //search through the projects array and delete it
        for (var i = 0; i < this.projects.length; i++) {
            if (this.projects[i] !== deleteProjectData.projectName) {
                newProjects.push(this.projects[i]);
            }
        }
        this.projects = newProjects;
        this.JSONprojects = JSON.stringify(this.projects);
        localStorage.setItem("projects", this.JSONprojects);
        this.currentProject = this.projects[0];
        this.JSONcurrentProject = JSON.stringify(this.currentProject);
        localStorage.setItem("currentProject", this.JSONcurrentProject);
        //search through Tasks array and suppress every Task within the project to delete
        var newTasks = [];
        for (var i = 0; i < this.Tasks.length; i++) {
            if (this.Tasks[i].project !== deleteProjectData.projectName) {
                newTasks.push(this.Tasks[i]);
            }
        }
        this.Tasks = newTasks;
        this.JSONTasks = JSON.stringify(this.Tasks);
        localStorage.setItem("Tasks", this.JSONTasks);
    };
    AppComponent.prototype.onStateUpdate = function (taskClicked) {
        if (taskClicked.state === 'todo') {
            var newTasks = [];
            for (var i = 0; i < this.Tasks.length; i++) {
                if (this.Tasks[i].description !== taskClicked.description) {
                    newTasks.push(this.Tasks[i]);
                }
            }
            taskClicked.state = 'current';
            taskClicked.start = new Date();
            newTasks.push(taskClicked);
            this.Tasks = newTasks;
            this.JSONTasks = JSON.stringify(this.Tasks);
            localStorage.setItem("Tasks", this.JSONTasks);
        }
        else if (taskClicked.state === 'current') {
            var newTasks = [];
            for (var i = 0; i < this.Tasks.length; i++) {
                if (this.Tasks[i].description !== taskClicked.description) {
                    newTasks.push(this.Tasks[i]);
                }
            }
            taskClicked.state = 'done';
            newTasks.push(taskClicked);
            this.Tasks = newTasks;
            this.JSONTasks = JSON.stringify(this.Tasks);
            localStorage.setItem("Tasks", this.JSONTasks);
        }
        else if (taskClicked.state === 'done') {
            var newTasks = [];
            for (var i = 0; i < this.Tasks.length; i++) {
                if (this.Tasks[i].description !== taskClicked.description) {
                    newTasks.push(this.Tasks[i]);
                }
            }
            this.Tasks = newTasks;
            this.JSONTasks = JSON.stringify(this.Tasks);
            localStorage.setItem("Tasks", this.JSONTasks);
        }
    };
    AppComponent.prototype.onSelectedProject = function (selectedProjectData) {
        this.currentProject = selectedProjectData.projectName;
        this.JSONcurrentProject = JSON.stringify(this.currentProject);
        localStorage.setItem("currentProject", this.JSONcurrentProject);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(159),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_todo_list_todo_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_current_list_current_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_done_list_done_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_task_new_task_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__list_todo_list_todo_component__["a" /* ListTodoComponent */],
            __WEBPACK_IMPORTED_MODULE_8__list_current_list_current_component__["a" /* ListCurrentComponent */],
            __WEBPACK_IMPORTED_MODULE_9__list_done_list_done_component__["a" /* ListDoneComponent */],
            __WEBPACK_IMPORTED_MODULE_10__new_task_new_task_component__["a" /* NewTaskComponent */],
            __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "currentProject", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(160),
        styles: [__webpack_require__(151)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCurrentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListCurrentComponent = (function () {
    function ListCurrentComponent() {
        this.taskClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    ListCurrentComponent.prototype.ngOnInit = function () {
    };
    ListCurrentComponent.prototype.onTaskClicked = function (description, state, project) {
        this.taskClicked.emit({ description: description, state: state, project: project });
    };
    return ListCurrentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], ListCurrentComponent.prototype, "taskClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ListCurrentComponent.prototype, "task", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ListCurrentComponent.prototype, "currentProject", void 0);
ListCurrentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-list-current',
        template: __webpack_require__(161),
        styles: [__webpack_require__(152)]
    }),
    __metadata("design:paramtypes", [])
], ListCurrentComponent);

//# sourceMappingURL=list-current.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListDoneComponent = (function () {
    function ListDoneComponent() {
        this.taskClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    ListDoneComponent.prototype.ngOnInit = function () {
    };
    ListDoneComponent.prototype.onTaskClicked = function (description, state, project) {
        this.taskClicked.emit({ description: description, state: state, project: project });
    };
    return ListDoneComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], ListDoneComponent.prototype, "taskClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ListDoneComponent.prototype, "task", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ListDoneComponent.prototype, "currentProject", void 0);
ListDoneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-list-done',
        template: __webpack_require__(162),
        styles: [__webpack_require__(153)]
    }),
    __metadata("design:paramtypes", [])
], ListDoneComponent);

//# sourceMappingURL=list-done.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListTodoComponent = (function () {
    function ListTodoComponent() {
        this.taskClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    ListTodoComponent.prototype.ngOnInit = function () {
    };
    ListTodoComponent.prototype.onTaskClicked = function (description, state, project) {
        this.taskClicked.emit({ description: description, state: state, project: project });
    };
    return ListTodoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], ListTodoComponent.prototype, "taskClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ListTodoComponent.prototype, "task", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ListTodoComponent.prototype, "currentProject", void 0);
ListTodoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-list-todo',
        template: __webpack_require__(163),
        styles: [__webpack_require__(154)]
    }),
    __metadata("design:paramtypes", [])
], ListTodoComponent);

//# sourceMappingURL=list-todo.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewTaskComponent = (function () {
    function NewTaskComponent() {
        this.description = '';
        this.taskCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent.prototype.onNewTaskCreated = function (description, selectedValue, project) {
        this.taskCreated.emit({ description: description.value, state: 'todo', project: this.currentProject });
        description.value = '';
    };
    return NewTaskComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], NewTaskComponent.prototype, "taskCreated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], NewTaskComponent.prototype, "currentProject", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], NewTaskComponent.prototype, "timesVisited", void 0);
NewTaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-new-task',
        template: __webpack_require__(164),
        styles: [__webpack_require__(155)]
    }),
    __metadata("design:paramtypes", [])
], NewTaskComponent);

//# sourceMappingURL=new-task.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
        this.projectCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.projectDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.projectSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    ProjectsComponent.prototype.onNewProjectCreated = function (newprojectName) {
        this.projectCreated.emit({ projectName: newprojectName.value });
        newprojectName.value = '';
    };
    ProjectsComponent.prototype.onDeleteProject = function (selectedProject) {
        this.projectDeleted.emit({ projectName: selectedProject });
    };
    ProjectsComponent.prototype.onSelectedProject = function (selectedProject) {
        this.projectSelected.emit({ projectName: selectedProject });
    };
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ProjectsComponent.prototype, "projects", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], ProjectsComponent.prototype, "projectCreated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], ProjectsComponent.prototype, "projectDeleted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(),
    __metadata("design:type", Object)
], ProjectsComponent.prototype, "projectSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], ProjectsComponent.prototype, "selectedProject", void 0);
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__(165),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.bundle.js.map