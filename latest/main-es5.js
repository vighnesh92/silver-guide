function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <aside class=\"sidebar\">\n        <a href=\"/\" class=\"logo\">iManage</a>\n        <nav>\n            <ng-container *ngFor=\"let menu of menuItems\">\n                <p class=\"section-heading\">{{menu.name}}</p>\n\n                <ul *ngIf=\"menu.children?.length\">\n                    <li *ngFor=\"let submenu of menu.children\">\n                        <a [routerLink]=\"submenu.route\" routerLinkActive=\"active\">{{submenu.name}}</a>\n                    </li>\n                </ul>\n            </ng-container>\n        </nav>\n    </aside>\n\n    <main>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    </main>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/example-viewer/example-viewer.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/example-viewer/example-viewer.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreExampleViewerExampleViewerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-viewer-container\">\n    <button (click)=\"toggleDisplay()\">{{showFiles ? 'Hide Files' : 'Show Files'}}</button>\n    <ng-content></ng-content>\n\n    <hr />\n    <ng-container *ngIf=\"showFiles\">\n        <pre *ngFor=\"let fileName of files\">\n        <p>{{fileName}}</p>\n            <textarea highlight-js [lang]=\"guessLanguages(fileName)\">\n                {{ filesData[fileName] }}\n            </textarea>\n            <!-- <code [highlight]=\"filesData[fileName]\" [languages]=\"guessLanguages(fileName)\"></code> -->\n        </pre>\n    </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/input-ex1/input-ex1.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/input-ex1/input-ex1.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExamplesInputEx1InputEx1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>input-ex1 works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/input-ex2/input-ex2.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/input-ex2/input-ex2.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExamplesInputEx2InputEx2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>input-ex2 works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/input/input.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/input/input.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGalleryInputInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ice-input-container\">\n    <app-example-viewer [config]=\"demoConfig.example1\">\n        <app-input-ex1></app-input-ex1>\n    </app-example-viewer>\n\n    <app-example-viewer [config]=\"demoConfig.example2\">\n        <app-input-ex2></app-input-ex2>\n    </app-example-viewer>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: MenuItems, routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItems", function () {
      return MenuItems;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _gallery_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gallery/input/input.component */
    "./src/app/gallery/input/input.component.ts");

    var MenuItems = [{
      name: 'Components',
      children: [{
        name: 'Input',
        route: '/input'
      }]
    }];
    var routes = [{
      path: 'input',
      component: _gallery_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"],
      pathMatch: 'full'
    }, {
      path: '',
      redirectTo: 'input',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'input',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { MenuItems } from './app-routing.module';


    var MenuItems = [{
      name: 'Components',
      children: [{
        name: 'Input',
        route: '/input'
      }]
    }];

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'demo-ice';
      this.menuItems = MenuItems;
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-highlightjs */
    "./node_modules/ngx-highlightjs/fesm2015/ngx-highlightjs.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gallery/gallery.module */
    "./src/app/gallery/gallery.module.ts"); // import xml from 'highlight.js/lib/languages/xml';
    // import scss from 'highlight.js/lib/languages/scss';
    // import typescript from 'highlight.js/lib/languages/typescript';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_6__["GalleryModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__["HighlightModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./example-viewer/example-viewer.component */
    "./src/app/core/example-viewer/example-viewer.component.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_4__["ExampleViewerComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      exports: [_example_viewer_example_viewer_component__WEBPACK_IMPORTED_MODULE_4__["ExampleViewerComponent"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/example-viewer/example-viewer.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/core/example-viewer/example-viewer.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreExampleViewerExampleViewerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXhhbXBsZS12aWV3ZXIvZXhhbXBsZS12aWV3ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/core/example-viewer/example-viewer.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/example-viewer/example-viewer.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ExampleViewerComponent */

  /***/
  function srcAppCoreExampleViewerExampleViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExampleViewerComponent", function () {
      return ExampleViewerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LanguageFullname = {
      ts: 'typescript',
      html: 'html',
      scss: 'scss',
      css: 'css'
    };
    var DefaultExtensions = ['html', 'ts', 'scss'];

    var ExampleViewerComponent =
    /*#__PURE__*/
    function () {
      function ExampleViewerComponent(http) {
        _classCallCheck(this, ExampleViewerComponent);

        this.http = http;
        this.config = {};
        this.files = [];
        this.filesData = {};
        this.showFiles = false;
      }

      _createClass(ExampleViewerComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this = this;

          if (this.config.files) {
            this.files = this.config.files;
          } else if (this.config.basePath && this.config.fileName) {
            this.files = (this.config.extensions || DefaultExtensions).map(function (ext) {
              return "".concat(_this.config.basePath, "/").concat(_this.config.fileName, ".").concat(ext);
            }).map(function (file) {
              return file.replace(/^\//, '');
            });
          } else {
            this.files = [];
          }
        }
      }, {
        key: "toggleDisplay",
        value: function toggleDisplay() {
          var _this2 = this;

          this.showFiles = !this.showFiles;
          this.files.map(function (file) {
            if (!_this2.filesData.hasOwnProperty(file)) {
              _this2.filesData[file] = 'Loading ...';

              _this2.http.get(file, {
                responseType: 'text'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('Error in loading content ...');
              })).subscribe(function (content) {
                return _this2.filesData[file] = content;
              });
            }
          });
        }
      }, {
        key: "guessLanguages",
        value: function guessLanguages() {
          var fileName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var extension = fileName.match(/\.(\w+)$/)[1];
          var lang = LanguageFullname[extension];
          return lang ? [lang] : [];
        }
      }]);

      return ExampleViewerComponent;
    }();

    ExampleViewerComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ExampleViewerComponent.prototype, "config", void 0);
    ExampleViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-example-viewer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./example-viewer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/example-viewer/example-viewer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./example-viewer.component.scss */
      "./src/app/core/example-viewer/example-viewer.component.scss")).default]
    })], ExampleViewerComponent);
    /***/
  },

  /***/
  "./src/app/examples/examples.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/examples/examples.module.ts ***!
    \*********************************************/

  /*! exports provided: ExamplesModule */

  /***/
  function srcAppExamplesExamplesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamplesModule", function () {
      return ExamplesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _input_ex2_input_ex2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./input-ex2/input-ex2.component */
    "./src/app/examples/input-ex2/input-ex2.component.ts");
    /* harmony import */


    var _input_ex1_input_ex1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./input-ex1/input-ex1.component */
    "./src/app/examples/input-ex1/input-ex1.component.ts");

    var ExamplesModule = function ExamplesModule() {
      _classCallCheck(this, ExamplesModule);
    };

    ExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_input_ex1_input_ex1_component__WEBPACK_IMPORTED_MODULE_4__["InputEx1Component"], _input_ex2_input_ex2_component__WEBPACK_IMPORTED_MODULE_3__["InputEx2Component"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_input_ex1_input_ex1_component__WEBPACK_IMPORTED_MODULE_4__["InputEx1Component"], _input_ex2_input_ex2_component__WEBPACK_IMPORTED_MODULE_3__["InputEx2Component"]]
    })], ExamplesModule);
    /***/
  },

  /***/
  "./src/app/examples/input-ex1/input-ex1.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/examples/input-ex1/input-ex1.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExamplesInputEx1InputEx1ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2lucHV0LWV4MS9pbnB1dC1leDEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/examples/input-ex1/input-ex1.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/examples/input-ex1/input-ex1.component.ts ***!
    \***********************************************************/

  /*! exports provided: InputEx1Component */

  /***/
  function srcAppExamplesInputEx1InputEx1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputEx1Component", function () {
      return InputEx1Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InputEx1Component =
    /*#__PURE__*/
    function () {
      function InputEx1Component() {
        _classCallCheck(this, InputEx1Component);
      }

      _createClass(InputEx1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputEx1Component;
    }();

    InputEx1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-input-ex1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input-ex1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/input-ex1/input-ex1.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input-ex1.component.scss */
      "./src/app/examples/input-ex1/input-ex1.component.scss")).default]
    })], InputEx1Component);
    /***/
  },

  /***/
  "./src/app/examples/input-ex2/input-ex2.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/examples/input-ex2/input-ex2.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExamplesInputEx2InputEx2ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2lucHV0LWV4Mi9pbnB1dC1leDIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/examples/input-ex2/input-ex2.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/examples/input-ex2/input-ex2.component.ts ***!
    \***********************************************************/

  /*! exports provided: InputEx2Component */

  /***/
  function srcAppExamplesInputEx2InputEx2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputEx2Component", function () {
      return InputEx2Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InputEx2Component =
    /*#__PURE__*/
    function () {
      function InputEx2Component() {
        _classCallCheck(this, InputEx2Component);
      }

      _createClass(InputEx2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputEx2Component;
    }();

    InputEx2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-input-ex2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input-ex2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/input-ex2/input-ex2.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input-ex2.component.scss */
      "./src/app/examples/input-ex2/input-ex2.component.scss")).default]
    })], InputEx2Component);
    /***/
  },

  /***/
  "./src/app/gallery/gallery.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/gallery/gallery.module.ts ***!
    \*******************************************/

  /*! exports provided: GalleryModule */

  /***/
  function srcAppGalleryGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryModule", function () {
      return GalleryModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./input/input.component */
    "./src/app/gallery/input/input.component.ts");
    /* harmony import */


    var _examples_examples_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../examples/examples.module */
    "./src/app/examples/examples.module.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/core.module */
    "./src/app/core/core.module.ts");

    var GalleryModule = function GalleryModule() {
      _classCallCheck(this, GalleryModule);
    };

    GalleryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _examples_examples_module__WEBPACK_IMPORTED_MODULE_4__["ExamplesModule"]],
      exports: [_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"]]
    })], GalleryModule);
    /***/
  },

  /***/
  "./src/app/gallery/input/input.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/gallery/input/input.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGalleryInputInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/gallery/input/input.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/gallery/input/input.component.ts ***!
    \**************************************************/

  /*! exports provided: InputComponent */

  /***/
  function srcAppGalleryInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InputComponent = function InputComponent() {
      _classCallCheck(this, InputComponent);

      this.demoConfig = {
        example1: {
          basePath: '/app/examples/input-ex1',
          fileName: 'input-ex1.component'
        },
        example2: {
          basePath: '/app/examples/input-ex2',
          fileName: 'input-ex2.component'
        }
      };
    };

    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/input/input.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input.component.scss */
      "./src/app/gallery/input/input.component.scss")).default]
    })], InputComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /System/Volumes/Data/Developer/playground/demo-ice/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map