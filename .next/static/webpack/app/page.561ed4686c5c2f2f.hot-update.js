"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Todo/TodoForm.tsx":
/*!******************************************!*\
  !*** ./src/components/Todo/TodoForm.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/pencil.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/check.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TodoForm = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [taskTitle, setTaskTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAddTask = (event)=>{\n        event.preventDefault();\n        if (taskTitle.trim()) {\n            const newTask = {\n                id: Date.now(),\n                title: taskTitle\n            };\n            setTasks([\n                ...tasks,\n                newTask\n            ]);\n            setTaskTitle(\"\");\n        }\n    };\n    const handleDeleteTask = (id)=>{\n        // Filter out the task with the given id\n        setTasks((prevTasks)=>prevTasks.filter((task)=>task.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleAddTask,\n                className: \"flex w-full max-w-sm items-center space-x-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add a new task\",\n                        value: taskTitle,\n                        onChange: (e)=>setTaskTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"submit\",\n                        className: \"p-2 text-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"mt-10 text-xl font-semibold\",\n                    children: \"Tasks to do:\"\n                }, void 0, false, {\n                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    className: \"w-full mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                    className: \"font-normal text-xl\",\n                                    children: task.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"p-2 text-sm\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"p-2 text-sm border-green-500 text-green-500 hover:bg-green-100\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"destructive\",\n                                            className: \"p-2 text-sm\",\n                                            onClick: ()=>handleDeleteTask(task.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                }, task.id, false, {\n                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n_s(TodoForm, \"D9BwF+EcJ39iWwzC2LppRYaxqxs=\");\n_c = TodoForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoForm);\nvar _c;\n$RefreshReg$(_c, \"TodoForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RvZG8vVG9kb0Zvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDK0M7QUFDaEM7QUFDRjtBQUNZO0FBTzFELE1BQU1VLFdBQXFCOztJQUN6QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQVMsRUFBRTtJQUM3QyxNQUFNLENBQUNhLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWUsZ0JBQWdCLENBQUNDO1FBQ3JCQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUlKLFVBQVVLLElBQUksSUFBSTtZQUNwQixNQUFNQyxVQUFnQjtnQkFDcEJDLElBQUlDLEtBQUtDLEdBQUc7Z0JBQ1pDLE9BQU9WO1lBQ1Q7WUFDQUQsU0FBUzttQkFBSUQ7Z0JBQU9RO2FBQVE7WUFDNUJMLGFBQWE7UUFDZjtJQUNGO0lBQ0EsTUFBTVUsbUJBQW1CLENBQUNKO1FBQ3hCLHdDQUF3QztRQUN4Q1IsU0FBUyxDQUFDYSxZQUFjQSxVQUFVQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1AsRUFBRSxLQUFLQTtJQUNqRTtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ1E7Z0JBQ0NDLFVBQVVkO2dCQUNWZSxXQUFVOztrQ0FFViw4REFBQ3pCLHVEQUFLQTt3QkFDSjBCLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU9wQjt3QkFDUHFCLFVBQVUsQ0FBQ0MsSUFBTXJCLGFBQWFxQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFOUMsOERBQUM3Qix5REFBTUE7d0JBQUMyQixNQUFLO3dCQUFTRCxXQUFVO2tDQUM5Qiw0RUFBQ3hCLG1HQUFJQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHVCw4REFBQytCOzBCQUNDLDRFQUFDQztvQkFBR1IsV0FBVTs4QkFBOEI7Ozs7Ozs7Ozs7O1lBRzdDbkIsTUFBTTRCLEdBQUcsQ0FBQyxDQUFDWixxQkFDViw4REFBQzFCLHFEQUFJQTtvQkFBZTZCLFdBQVU7OEJBQzVCLDRFQUFDM0IsMkRBQVVBO2tDQUNULDRFQUFDa0M7NEJBQUlQLFdBQVU7OzhDQUNiLDhEQUFDNUIsMERBQVNBO29DQUFDNEIsV0FBVTs4Q0FDbEJILEtBQUtKLEtBQUs7Ozs7Ozs4Q0FFYiw4REFBQ2M7b0NBQUlQLFdBQVU7O3NEQUNiLDhEQUFDMUIseURBQU1BOzRDQUFDb0MsU0FBUTs0Q0FBVVYsV0FBVTtzREFDbEMsNEVBQUN2QixtR0FBTUE7Ozs7Ozs7Ozs7c0RBRVQsOERBQUNILHlEQUFNQTs0Q0FDTG9DLFNBQVE7NENBQ1JWLFdBQVU7c0RBRVYsNEVBQUNyQixtR0FBS0E7Ozs7Ozs7Ozs7c0RBRVIsOERBQUNMLHlEQUFNQTs0Q0FDTG9DLFNBQVE7NENBQ1JWLFdBQVU7NENBQ1ZXLFNBQVMsSUFBTWpCLGlCQUFpQkcsS0FBS1AsRUFBRTtzREFFdkMsNEVBQUNaLG1HQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQXJCTG1CLEtBQUtQLEVBQUU7Ozs7Ozs7QUE4QjFCO0dBdkVNVjtLQUFBQTtBQXlFTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub2RvL1RvZG9Gb3JtLnRzeD9hNzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZFRpdGxlLCBDYXJkSGVhZGVyLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgUGx1cywgUGVuY2lsLCBUcmFzaCwgQ2hlY2sgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmludGVyZmFjZSBUYXNrIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgVG9kb0Zvcm06IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlPFRhc2tbXT4oW10pO1xuICBjb25zdCBbdGFza1RpdGxlLCBzZXRUYXNrVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlQWRkVGFzayA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGFza1RpdGxlLnRyaW0oKSkge1xuICAgICAgY29uc3QgbmV3VGFzazogVGFzayA9IHtcbiAgICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICAgIHRpdGxlOiB0YXNrVGl0bGUsXG4gICAgICB9O1xuICAgICAgc2V0VGFza3MoWy4uLnRhc2tzLCBuZXdUYXNrXSk7XG4gICAgICBzZXRUYXNrVGl0bGUoXCJcIik7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVEZWxldGVUYXNrID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICAvLyBGaWx0ZXIgb3V0IHRoZSB0YXNrIHdpdGggdGhlIGdpdmVuIGlkXG4gICAgc2V0VGFza3MoKHByZXZUYXNrcykgPT4gcHJldlRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gaWQpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlQWRkVGFza31cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbWF4LXctc20gaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiXG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0YXNrXCJcbiAgICAgICAgICB2YWx1ZT17dGFza1RpdGxlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza1RpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicC0yIHRleHQtc21cIj5cbiAgICAgICAgICA8UGx1cyAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJtdC0xMCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5UYXNrcyB0byBkbzo8L2gzPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgPENhcmQga2V5PXt0YXNrLmlkfSBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNVwiPlxuICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAge3Rhc2sudGl0bGV9XG4gICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICA8UGVuY2lsIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtc20gYm9yZGVyLWdyZWVuLTUwMCB0ZXh0LWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi0xMDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDaGVjayAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUYXNrKHRhc2suaWQpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUcmFzaCAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhcmQiLCJDYXJkVGl0bGUiLCJDYXJkSGVhZGVyIiwiQnV0dG9uIiwiSW5wdXQiLCJQbHVzIiwiUGVuY2lsIiwiVHJhc2giLCJDaGVjayIsIlRvZG9Gb3JtIiwidGFza3MiLCJzZXRUYXNrcyIsInRhc2tUaXRsZSIsInNldFRhc2tUaXRsZSIsImhhbmRsZUFkZFRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsIm5ld1Rhc2siLCJpZCIsIkRhdGUiLCJub3ciLCJ0aXRsZSIsImhhbmRsZURlbGV0ZVRhc2siLCJwcmV2VGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJkaXYiLCJoMyIsIm1hcCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Todo/TodoForm.tsx\n"));

/***/ })

});