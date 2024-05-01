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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/pencil.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/check.js\");\n/* harmony import */ var _barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Pencil,Plus,Trash!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.js\");\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst TodoForm = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [taskTitle, setTaskTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taskToDelete, setTaskToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleAddTask = (event)=>{\n        event.preventDefault();\n        if (taskTitle.trim()) {\n            const newTask = {\n                id: Date.now(),\n                title: taskTitle\n            };\n            setTasks([\n                ...tasks,\n                newTask\n            ]);\n            setTaskTitle(\"\");\n        }\n    };\n    const handleDeleteTask = (id)=>{\n        setTasks((prevTasks)=>prevTasks.filter((task)=>task.id !== id));\n    };\n    const confirmDeleteTask = ()=>{\n        if (taskToDelete) {\n            handleDeleteTask(taskToDelete.id);\n            setTaskToDelete(null);\n        }\n    };\n    const handleCancelDelete = ()=>{\n        setTaskToDelete(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleAddTask,\n                className: \"flex w-full max-w-sm items-center space-x-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        type: \"text\",\n                        placeholder: \"Add a new task\",\n                        value: taskTitle,\n                        onChange: (e)=>setTaskTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"submit\",\n                        className: \"p-2 text-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"mt-10 text-xl font-semibold\",\n                    children: \"Tasks to do:\"\n                }, void 0, false, {\n                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    className: \"w-full mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                    className: \"font-normal text-xl\",\n                                    children: task.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"p-2 text-sm\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            variant: \"outline\",\n                                            className: \"p-2 text-sm border-green-500 text-green-500 hover:bg-green-100\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_5__.Dialog, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogTrigger, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        variant: \"destructive\",\n                                                        className: \"p-2 text-sm\",\n                                                        onClick: ()=>setTaskToDelete(task),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Pencil_Plus_Trash_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogContent, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogHeader, {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogTitle, {\n                                                                    children: \"Are you sure you want to delete this task?\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                                    lineNumber: 110,\n                                                                    columnNumber: 23\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogDescription, {\n                                                                    children: \"This action cannot be undone.\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                                    lineNumber: 113,\n                                                                    columnNumber: 23\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                            lineNumber: 109,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"mt-4 flex justify-end space-x-2\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                                    variant: \"destructive\",\n                                                                    onClick: confirmDeleteTask,\n                                                                    children: \"Confirm\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                                    lineNumber: 118,\n                                                                    columnNumber: 23\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                                    variant: \"outline\",\n                                                                    onClick: handleCancelDelete,\n                                                                    children: \"Cancel\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                                    lineNumber: 121,\n                                                                    columnNumber: 23\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                            lineNumber: 117,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined)\n                }, task.id, false, {\n                    fileName: \"/Users/alishakhatri/Desktop/todo-app/src/components/Todo/TodoForm.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true);\n};\n_s(TodoForm, \"X8RKr2AGYkVr5xzDeK7Ht7anA2M=\");\n_c = TodoForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoForm);\nvar _c;\n$RefreshReg$(_c, \"TodoForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RvZG8vVG9kb0Zvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ2tDO0FBQ25CO0FBQ0Y7QUFDWTtBQVUxQjtBQU9oQyxNQUFNZ0IsV0FBcUI7O0lBQ3pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQVMsRUFBRTtJQUM3QyxNQUFNLENBQUNtQixXQUFXQyxhQUFhLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNxQixjQUFjQyxnQkFBZ0IsR0FBR3RCLCtDQUFRQSxDQUFjO0lBRTlELE1BQU11QixnQkFBZ0IsQ0FBQ0M7UUFDckJBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSU4sVUFBVU8sSUFBSSxJQUFJO1lBQ3BCLE1BQU1DLFVBQWdCO2dCQUNwQkMsSUFBSUMsS0FBS0MsR0FBRztnQkFDWkMsT0FBT1o7WUFDVDtZQUNBRCxTQUFTO21CQUFJRDtnQkFBT1U7YUFBUTtZQUM1QlAsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxNQUFNWSxtQkFBbUIsQ0FBQ0o7UUFDeEJWLFNBQVMsQ0FBQ2UsWUFBY0EsVUFBVUMsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtQLEVBQUUsS0FBS0E7SUFDakU7SUFFQSxNQUFNUSxvQkFBb0I7UUFDeEIsSUFBSWYsY0FBYztZQUNoQlcsaUJBQWlCWCxhQUFhTyxFQUFFO1lBQ2hDTixnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLE1BQU1lLHFCQUFxQjtRQUN6QmYsZ0JBQWdCO0lBQ2xCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDZ0I7Z0JBQ0NDLFVBQVVoQjtnQkFDVmlCLFdBQVU7O2tDQUVWLDhEQUFDbkMsdURBQUtBO3dCQUNKb0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT3hCO3dCQUNQeUIsVUFBVSxDQUFDQyxJQUFNekIsYUFBYXlCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O2tDQUU5Qyw4REFBQ3ZDLHlEQUFNQTt3QkFBQ3FDLE1BQUs7d0JBQVNELFdBQVU7a0NBQzlCLDRFQUFDbEMsbUdBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUlULDhEQUFDeUM7MEJBQ0MsNEVBQUNDO29CQUFHUixXQUFVOzhCQUE4Qjs7Ozs7Ozs7Ozs7WUFHN0N2QixNQUFNZ0MsR0FBRyxDQUFDLENBQUNkLHFCQUNWLDhEQUFDbEMscURBQUlBO29CQUFldUMsV0FBVTs4QkFDNUIsNEVBQUNyQywyREFBVUE7a0NBQ1QsNEVBQUM0Qzs0QkFBSVAsV0FBVTs7OENBQ2IsOERBQUN0QywwREFBU0E7b0NBQUNzQyxXQUFVOzhDQUNsQkwsS0FBS0osS0FBSzs7Ozs7OzhDQUViLDhEQUFDZ0I7b0NBQUlQLFdBQVU7O3NEQUNiLDhEQUFDcEMseURBQU1BOzRDQUFDOEMsU0FBUTs0Q0FBVVYsV0FBVTtzREFDbEMsNEVBQUNqQyxtR0FBTUE7Ozs7Ozs7Ozs7c0RBRVQsOERBQUNILHlEQUFNQTs0Q0FDTDhDLFNBQVE7NENBQ1JWLFdBQVU7c0RBRVYsNEVBQUMvQixtR0FBS0E7Ozs7Ozs7Ozs7c0RBSVIsOERBQUNDLHlEQUFNQTs7OERBQ0wsOERBQUNDLGdFQUFhQTs4REFDWiw0RUFBQ1AseURBQU1BO3dEQUNMOEMsU0FBUTt3REFDUlYsV0FBVTt3REFDVlcsU0FBUyxJQUFNN0IsZ0JBQWdCYTtrRUFFL0IsNEVBQUMzQixtR0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs4REFLViw4REFBQ0ksZ0VBQWFBOztzRUFDWiw4REFBQ0MsK0RBQVlBOzs4RUFDWCw4REFBQ0MsOERBQVdBOzhFQUFDOzs7Ozs7OEVBR2IsOERBQUNDLG9FQUFpQkE7OEVBQUM7Ozs7Ozs7Ozs7OztzRUFJckIsOERBQUNnQzs0REFBSVAsV0FBVTs7OEVBQ2IsOERBQUNwQyx5REFBTUE7b0VBQUM4QyxTQUFRO29FQUFjQyxTQUFTZjs4RUFBbUI7Ozs7Ozs4RUFHMUQsOERBQUNoQyx5REFBTUE7b0VBQUM4QyxTQUFRO29FQUFVQyxTQUFTZDs4RUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQTNDMURGLEtBQUtQLEVBQUU7Ozs7Ozs7QUF3RDFCO0dBOUdNWjtLQUFBQTtBQWdITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub2RvL1RvZG9Gb3JtLnRzeD9hNzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZFRpdGxlLCBDYXJkSGVhZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBQbHVzLCBQZW5jaWwsIFRyYXNoLCBDaGVjayB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xuXG5pbXBvcnQge1xuICBEaWFsb2csXG4gIERpYWxvZ1RyaWdnZXIsXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0hlYWRlcixcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ0Rlc2NyaXB0aW9uLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuXG5pbnRlcmZhY2UgVGFzayB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IFRvZG9Gb3JtOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrW10+KFtdKTtcbiAgY29uc3QgW3Rhc2tUaXRsZSwgc2V0VGFza1RpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGFza1RvRGVsZXRlLCBzZXRUYXNrVG9EZWxldGVdID0gdXNlU3RhdGU8VGFzayB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRhc2tUaXRsZS50cmltKCkpIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2s6IFRhc2sgPSB7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICB0aXRsZTogdGFza1RpdGxlLFxuICAgICAgfTtcbiAgICAgIHNldFRhc2tzKFsuLi50YXNrcywgbmV3VGFza10pO1xuICAgICAgc2V0VGFza1RpdGxlKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVUYXNrID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBzZXRUYXNrcygocHJldlRhc2tzKSA9PiBwcmV2VGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBpZCkpO1xuICB9O1xuXG4gIGNvbnN0IGNvbmZpcm1EZWxldGVUYXNrID0gKCkgPT4ge1xuICAgIGlmICh0YXNrVG9EZWxldGUpIHtcbiAgICAgIGhhbmRsZURlbGV0ZVRhc2sodGFza1RvRGVsZXRlLmlkKTtcbiAgICAgIHNldFRhc2tUb0RlbGV0ZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsRGVsZXRlID0gKCkgPT4ge1xuICAgIHNldFRhc2tUb0RlbGV0ZShudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlQWRkVGFza31cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbWF4LXctc20gaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiXG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0YXNrXCJcbiAgICAgICAgICB2YWx1ZT17dGFza1RpdGxlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza1RpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicC0yIHRleHQtc21cIj5cbiAgICAgICAgICA8UGx1cyAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm10LTEwIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPlRhc2tzIHRvIGRvOjwvaDM+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gKFxuICAgICAgICA8Q2FyZCBrZXk9e3Rhc2suaWR9IGNsYXNzTmFtZT1cInctZnVsbCBtdC01XCI+XG4gICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQteGxcIj5cbiAgICAgICAgICAgICAgICB7dGFzay50aXRsZX1cbiAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwicC0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgIDxQZW5jaWwgLz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1zbSBib3JkZXItZ3JlZW4tNTAwIHRleHQtZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTEwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENoZWNrIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICB7LyogRGlhbG9nVHJpZ2dlciB3cmFwcGVkIGFyb3VuZCBkZWxldGUgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgIDxEaWFsb2c+XG4gICAgICAgICAgICAgICAgICA8RGlhbG9nVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhc2tUb0RlbGV0ZSh0YXNrKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFzaCAvPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRGlhbG9nVHJpZ2dlcj5cblxuICAgICAgICAgICAgICAgICAgey8qIERpYWxvZ0NvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cbiAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuXG4gICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dEZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17Y29uZmlybURlbGV0ZVRhc2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWxEZWxldGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNhcmQiLCJDYXJkVGl0bGUiLCJDYXJkSGVhZGVyIiwiQnV0dG9uIiwiSW5wdXQiLCJQbHVzIiwiUGVuY2lsIiwiVHJhc2giLCJDaGVjayIsIkRpYWxvZyIsIkRpYWxvZ1RyaWdnZXIiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dEZXNjcmlwdGlvbiIsIlRvZG9Gb3JtIiwidGFza3MiLCJzZXRUYXNrcyIsInRhc2tUaXRsZSIsInNldFRhc2tUaXRsZSIsInRhc2tUb0RlbGV0ZSIsInNldFRhc2tUb0RlbGV0ZSIsImhhbmRsZUFkZFRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsIm5ld1Rhc2siLCJpZCIsIkRhdGUiLCJub3ciLCJ0aXRsZSIsImhhbmRsZURlbGV0ZVRhc2siLCJwcmV2VGFza3MiLCJmaWx0ZXIiLCJ0YXNrIiwiY29uZmlybURlbGV0ZVRhc2siLCJoYW5kbGVDYW5jZWxEZWxldGUiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImRpdiIsImgzIiwibWFwIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Todo/TodoForm.tsx\n"));

/***/ })

});