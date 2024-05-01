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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _barrel_optimize_names_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _barrel_optimize_names_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/pencil.js\");\n/* harmony import */ var _barrel_optimize_names_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst TodoForm = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [taskTitle, setTaskTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAddTask = (event)=>{\n        event.preventDefault();\n        if (taskTitle.trim()) {\n            const newTask = {\n                id: Date.now(),\n                title: taskTitle\n            };\n            setTasks([\n                ...tasks,\n                newTask\n            ]);\n            setTaskTitle(\"\");\n        }\n    };\n    const handleDeleteTask = (id)=>{\n        // Filter out the task with the given id\n        setTasks((prevTasks)=>prevTasks.filter((task)=>task.id !== id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleAddTask,\n                className: \"flex w-full max-w-sm items-center space-x-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add a new task\",\n                        value: taskTitle,\n                        onChange: (e)=>setTaskTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"submit\",\n                        className: \"p-2 text-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"mt-10 text-xl font-semibold\",\n                    children: \"Tasks to do:\"\n                }, void 0, false, {\n                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    className: \"w-full mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                    className: \"font-normal text-xl\",\n                                    children: task.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"p-2 text-sm\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"destructive\",\n                                            className: \"p-2 text-sm\",\n                                            onClick: ()=>handleDeleteTask(task.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                }, task.id, false, {\n                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n_s(TodoForm, \"D9BwF+EcJ39iWwzC2LppRYaxqxs=\");\n_c = TodoForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoForm);\nvar _c;\n$RefreshReg$(_c, \"TodoForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RvZG8vVG9kb0Zvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVpQztBQUMrQztBQUNoQztBQUNGO0FBQ1k7QUFPMUQsTUFBTVMsV0FBcUI7O0lBQ3pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBUyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1ksV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNYyxnQkFBZ0IsQ0FBQ0M7UUFDckJBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSUosVUFBVUssSUFBSSxJQUFJO1lBQ3BCLE1BQU1DLFVBQWdCO2dCQUNwQkMsSUFBSUMsS0FBS0MsR0FBRztnQkFDWkMsT0FBT1Y7WUFDVDtZQUNBRCxTQUFTO21CQUFJRDtnQkFBT1E7YUFBUTtZQUM1QkwsYUFBYTtRQUNmO0lBQ0Y7SUFDQSxNQUFNVSxtQkFBbUIsQ0FBQ0o7UUFDeEIsd0NBQXdDO1FBQ3hDUixTQUFTLENBQUNhLFlBQWNBLFVBQVVDLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLUCxFQUFFLEtBQUtBO0lBQ2pFO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDUTtnQkFDQ0MsVUFBVWQ7Z0JBQ1ZlLFdBQVU7O2tDQUVWLDhEQUFDeEIsdURBQUtBO3dCQUNKeUIsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT3BCO3dCQUNQcUIsVUFBVSxDQUFDQyxJQUFNckIsYUFBYXFCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUU5Qyw4REFBQzVCLHlEQUFNQTt3QkFBQzBCLE1BQUs7d0JBQVNELFdBQVU7a0NBQzlCLDRFQUFDdkIsNkZBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDOEI7MEJBQ0MsNEVBQUNDO29CQUFHUixXQUFVOzhCQUE4Qjs7Ozs7Ozs7Ozs7WUFHN0NuQixNQUFNNEIsR0FBRyxDQUFDLENBQUNaLHFCQUNWLDhEQUFDekIscURBQUlBO29CQUFlNEIsV0FBVTs4QkFDNUIsNEVBQUMxQiwyREFBVUE7a0NBQ1QsNEVBQUNpQzs0QkFBSVAsV0FBVTs7OENBQ2IsOERBQUMzQiwwREFBU0E7b0NBQUMyQixXQUFVOzhDQUNsQkgsS0FBS0osS0FBSzs7Ozs7OzhDQUViLDhEQUFDYztvQ0FBSVAsV0FBVTs7c0RBQ2IsOERBQUN6Qix5REFBTUE7NENBQUNtQyxTQUFROzRDQUFVVixXQUFVO3NEQUNsQyw0RUFBQ3RCLDZGQUFNQTs7Ozs7Ozs7OztzREFFVCw4REFBQ0gseURBQU1BOzRDQUNMbUMsU0FBUTs0Q0FDUlYsV0FBVTs0Q0FDVlcsU0FBUyxJQUFNakIsaUJBQWlCRyxLQUFLUCxFQUFFO3NEQUV2Qyw0RUFBQ1gsNkZBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBZkxrQixLQUFLUCxFQUFFOzs7Ozs7O0FBd0IxQjtHQWpFTVY7S0FBQUE7QUFtRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kby9Ub2RvRm9ybS50c3g/YTc0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIENhcmRUaXRsZSwgQ2FyZEhlYWRlciwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IFBsdXMsIFBlbmNpbCwgVHJhc2gsIENoZWNrIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbnRlcmZhY2UgVGFzayB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFRvZG9Gb3JtOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrW10+KFtdKTtcbiAgY29uc3QgW3Rhc2tUaXRsZSwgc2V0VGFza1RpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRhc2tUaXRsZS50cmltKCkpIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2s6IFRhc2sgPSB7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgICAgfTtcbiAgICAgIHNldFRhc2tzKFsuLi50YXNrcywgbmV3VGFza10pO1xuICAgICAgc2V0VGFza1RpdGxlKFwiXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgLy8gRmlsdGVyIG91dCB0aGUgdGFzayB3aXRoIHRoZSBnaXZlbiBpZFxuICAgIHNldFRhc2tzKChwcmV2VGFza3MpID0+IHByZXZUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUFkZFRhc2t9XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIG1heC13LXNtIGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIlxuICAgICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuZXcgdGFza1wiXG4gICAgICAgICAgdmFsdWU9e3Rhc2tUaXRsZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRhc2tUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXNtXCI+XG4gICAgICAgICAgPFBsdXMgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtMTAgdGV4dC14bCBmb250LXNlbWlib2xkXCI+VGFza3MgdG8gZG86PC9oMz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7dGFza3MubWFwKCh0YXNrKSA9PiAoXG4gICAgICAgIDxDYXJkIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPVwidy1mdWxsIG10LTVcIj5cbiAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC14bFwiPlxuICAgICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJwLTIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgPFBlbmNpbCAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVUYXNrKHRhc2suaWQpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxUcmFzaCAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhcmQiLCJDYXJkVGl0bGUiLCJDYXJkSGVhZGVyIiwiQnV0dG9uIiwiSW5wdXQiLCJQbHVzIiwiUGVuY2lsIiwiVHJhc2giLCJUb2RvRm9ybSIsInRhc2tzIiwic2V0VGFza3MiLCJ0YXNrVGl0bGUiLCJzZXRUYXNrVGl0bGUiLCJoYW5kbGVBZGRUYXNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJuZXdUYXNrIiwiaWQiLCJEYXRlIiwibm93IiwidGl0bGUiLCJoYW5kbGVEZWxldGVUYXNrIiwicHJldlRhc2tzIiwiZmlsdGVyIiwidGFzayIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZGl2IiwiaDMiLCJtYXAiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Todo/TodoForm.tsx\n"));

/***/ })

});