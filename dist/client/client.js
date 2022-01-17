"use strict";
(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["client"],{

/***/ "./src/client/index.tsx":
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/CookiesProvider.js");
/* harmony import */ var _core_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/app */ "./src/core/app.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _core_store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/store/store */ "./src/core/store/store.ts");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");







 // ReactDOM.hydrate(
//   <CookiesProvider>
//   <Provider store={store}>
//       <BrowserRouter forceRefresh={true}>
//           <ClientApp />
//       </BrowserRouter>
//   </Provider>
//   </CookiesProvider>
// ,
//   document.getElementById("root")
// );

var renderApp = function renderApp() {
  var rootContent = document.getElementById('root');
  var renderMethod =  false ? 0 : react_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate;
  renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_cookie__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _core_store_store__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, {
    forceRefresh: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_core_app__WEBPACK_IMPORTED_MODULE_2__.ClientApp, null)))), rootContent);
};

(0,_loadable_component__WEBPACK_IMPORTED_MODULE_5__.loadableReady)(function () {
  renderApp();
});

if (false) {}

/***/ }),

/***/ "./src/core/app.tsx":
/*!**************************!*\
  !*** ./src/core/app.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientApp": () => (/* binding */ ClientApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/core/page/index.ts");
/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/app.scss */ "./src/core/assets/styles/app.scss");




var ClientApp = function ClientApp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
    from: "/",
    to: "/search",
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/search",
    exact: true,
    component: _page__WEBPACK_IMPORTED_MODULE_1__.SearchPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/results",
    exact: true,
    component: _page__WEBPACK_IMPORTED_MODULE_1__.ResultPage
  }));
};

/***/ }),

/***/ "./src/core/assets/images/index.js":
/*!*****************************************!*\
  !*** ./src/core/assets/images/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TilesSelectedIconSvg = exports.TilesIconSvg = exports.RowsSelectedIconSvg = exports.RowsIconSvg = exports.DropdownCloseSvg = exports.DropdownOpenSvg = exports.SearchIconSvg = exports.LocationIconSvg = exports.CopyrightSymbolSvg = exports.HeaderLogoImage = exports.FooterLogoImage = void 0;

var footer_logo_png_1 = __webpack_require__(/*! ./footer-logo.png */ "./src/core/assets/images/footer-logo.png");

Object.defineProperty(exports, "FooterLogoImage", ({
  enumerable: true,
  get: function get() {
    return __importDefault(footer_logo_png_1).default;
  }
}));

var header_logo_png_1 = __webpack_require__(/*! ./header-logo.png */ "./src/core/assets/images/header-logo.png");

Object.defineProperty(exports, "HeaderLogoImage", ({
  enumerable: true,
  get: function get() {
    return __importDefault(header_logo_png_1).default;
  }
}));

var copyright_symbol_svg_1 = __webpack_require__(/*! ./copyright-symbol.svg */ "./src/core/assets/images/copyright-symbol.svg");

Object.defineProperty(exports, "CopyrightSymbolSvg", ({
  enumerable: true,
  get: function get() {
    return __importDefault(copyright_symbol_svg_1).default;
  }
}));

var location_icon_svg_1 = __webpack_require__(/*! ./location-icon.svg */ "./src/core/assets/images/location-icon.svg");

Object.defineProperty(exports, "LocationIconSvg", ({
  enumerable: true,
  get: function get() {
    return __importDefault(location_icon_svg_1).default;
  }
}));

var search_icon_svg_1 = __webpack_require__(/*! ./search-icon.svg */ "./src/core/assets/images/search-icon.svg");

Object.defineProperty(exports, "SearchIconSvg", ({
  enumerable: true,
  get: function get() {
    return __importDefault(search_icon_svg_1).default;
  }
}));

var dropdown_open_svg_1 = __webpack_require__(/*! ./dropdown-open.svg */ "./src/core/assets/images/dropdown-open.svg");

Object.defineProperty(exports, "DropdownOpenSvg", ({
  enumerable: true,
  get: function get() {
    return __importDefault(dropdown_open_svg_1).default;
  }
}));

var dropdown_close_svg_1 = __webpack_require__(/*! ./dropdown-close.svg */ "./src/core/assets/images/dropdown-close.svg");

Object.defineProperty(exports, "DropdownCloseSvg", ({
  enumerable: true,
  get: function get() {
    return __importDefault(dropdown_close_svg_1).default;
  }
}));

var rows_icon_svg_1 = __webpack_require__(/*! ./rows-icon.svg */ "./src/core/assets/images/rows-icon.svg");

Object.defineProperty(exports, "RowsIconSvg", ({
  enumerable: true,
  get: function get() {
    return __importDefault(rows_icon_svg_1).default;
  }
}));

var rows_selected_icon_svg_1 = __webpack_require__(/*! ./rows-selected-icon.svg */ "./src/core/assets/images/rows-selected-icon.svg");

Object.defineProperty(exports, "RowsSelectedIconSvg", ({
  enumerable: true,
  get: function get() {
    return __importDefault(rows_selected_icon_svg_1).default;
  }
}));

var tiles_icon_svg_1 = __webpack_require__(/*! ./tiles-icon.svg */ "./src/core/assets/images/tiles-icon.svg");

Object.defineProperty(exports, "TilesIconSvg", ({
  enumerable: true,
  get: function get() {
    return __importDefault(tiles_icon_svg_1).default;
  }
}));

var tiles_selected_icon_svg_1 = __webpack_require__(/*! ./tiles-selected-icon.svg */ "./src/core/assets/images/tiles-selected-icon.svg");

Object.defineProperty(exports, "TilesSelectedIconSvg", ({
  enumerable: true,
  get: function get() {
    return __importDefault(tiles_selected_icon_svg_1).default;
  }
}));

/***/ }),

/***/ "./src/core/components/AutocompleteInput/index.tsx":
/*!*********************************************************!*\
  !*** ./src/core/components/AutocompleteInput/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-autocomplete */ "./node_modules/react-autocomplete/build/lib/Autocomplete.js");
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_components_autocomplete_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/components/autocomplete.scss */ "./src/core/assets/components/autocomplete.scss");







var AutocompleteInput = function AutocompleteInput(_ref) {
  var _ref$autocomplete = _ref.autocomplete,
      autocomplete = _ref$autocomplete === void 0 ? [] : _ref$autocomplete,
      classes = _ref.classes,
      value = _ref.value,
      setValue = _ref.setValue,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
      onSubmit = _ref.onSubmit,
      selected = _ref.selected,
      grouping = _ref.grouping;

  var enterHandler = function enterHandler(e) {
    if (onSubmit) {
      if (e.key === "Enter") onSubmit(value);
    }
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (e, index) {
    var labels = Array.from(document.getElementsByClassName('label'))[index];
    setValue(labels.innerText);
    setShow(false);
  }, [setValue, show]);

  var items = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    if (grouping === true) {
      var filtering = autocomplete.filter(function (items) {
        return items.label.label.toLowerCase().includes(value.toLowerCase());
      });

      var arr = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(filtering.map(function (e) {
        return {
          _id: e._id
        };
      })));

      var filteringGroup = autocomplete.filter(function (e) {
        return arr.some(function (x) {
          return e._id === x._id;
        });
      });
      return filteringGroup;
    } else {
      return [];
    }
  }, [autocomplete, value]);

  var renderList = function renderList() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, items.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        key: item.label.label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "autocomplete__item",
        onClick: function onClick(e) {
          return _onClick(e, index);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "label"
      }, item.label.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", null, "(", item.label.type, ")")));
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement((react_autocomplete__WEBPACK_IMPORTED_MODULE_4___default()), {
    getItemValue: function getItemValue(item) {
      return grouping === true ? item.label.label : item.label;
    },
    items: autocomplete,
    shouldItemRender: function shouldItemRender(item, value) {
      return grouping === true ? item.label.label.toLowerCase().includes(value) : item.label.toLowerCase().includes(value);
    },
    renderItem: function renderItem(item, isHighlighted) {
      return grouping === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "none"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "autocomplete"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        className: "autocomplete__item"
      }, item.label));
    },
    value: value,
    menuStyle: grouping === true ? {
      display: "none"
    } : {
      borderRadius: "3px",
      boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
      marginTop: "2px",
      zIndex: "2",
      overflow: "auto",
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.9)',
      maxHeight: "300px",
      left: "5px",
      top: "50px",
      width: "661px"
    },
    onChange: function onChange(e) {
      setShow(true);
      setValue(e.target.value);
    },
    onSelect: function onSelect(value) {
      if (grouping === true) {
        return false;
      } else {
        setValue(value);
      }
    },
    renderInput: function renderInput(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        "aria-invalid": "false",
        className: classes,
        placeholder: placeholder,
        onKeyDown: enterHandler,
        maxLength: 30,
        value: value
      }));
    }
  }), grouping === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "menu"
  }, show === true ? renderList() : null) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutocompleteInput);

/***/ }),

/***/ "./src/core/components/Dropdown/index.tsx":
/*!************************************************!*\
  !*** ./src/core/components/Dropdown/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images */ "./src/core/assets/images/index.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_components_dropdown_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/components/dropdown.scss */ "./src/core/assets/components/dropdown.scss");





var Dropdown = function Dropdown(_ref) {
  var items = _ref.items,
      classes = _ref.classes,
      chosen = _ref.chosen,
      setChosen = _ref.setChosen,
      label = _ref.label;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1]; // useEffect(() => {
  //   if (items[0]) {
  //     setChosen(items[0]);
  //   }
  // }, [items]);


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (chosen) {
      setChosen(items.find(function (item) {
        return chosen === item;
      }) === chosen ? chosen : items[0]);
    }
  }, [chosen, items]);

  var onItemClick = function onItemClick(name) {
    setChosen(name);
  };

  var icon = isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_2__.DropdownCloseSvg,
    alt: ""
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_2__.DropdownOpenSvg,
    alt: ""
  });
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var clickListener = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {
    var _ref$current;

    if (!((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(e.target))) {
      setIsOpen(false);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    document.addEventListener("click", clickListener);
    return function () {
      document.removeEventListener("click", clickListener);
    };
  }, [clickListener]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dropdown ".concat(classes),
    ref: ref,
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dropdown__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, chosen), icon), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "dropdown__items"
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "dropdown__item",
      key: item,
      onClick: function onClick() {
        return onItemClick(item);
      }
    }, item);
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./src/core/components/Footer/index.tsx":
/*!**********************************************!*\
  !*** ./src/core/components/Footer/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images */ "./src/core/assets/images/index.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_components_footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/components/footer.scss */ "./src/core/assets/components/footer.scss");




var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_1__.FooterLogoImage,
    className: "footer__logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer__copyright-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_1__.CopyrightSymbolSvg,
    className: "footer__copyright-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "footer__text"
  }, " OpTimeRx All rights reserved"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "footer__text"
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "footer__number"
  }, "+111 2221 33314"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/core/components/InputField/index.tsx":
/*!**************************************************!*\
  !*** ./src/core/components/InputField/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AutocompleteInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AutocompleteInput */ "./src/core/components/AutocompleteInput/index.tsx");
/* harmony import */ var _assets_components_inputField_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/components/inputField.scss */ "./src/core/assets/components/inputField.scss");




var InputField = function InputField(_ref) {
  var classes = _ref.classes,
      autocompleteClasses = _ref.autocompleteClasses,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
      value = _ref.value,
      iconUrl = _ref.iconUrl,
      onChange = _ref.onChange,
      _ref$haveSubmit = _ref.haveSubmit,
      haveSubmit = _ref$haveSubmit === void 0 ? false : _ref$haveSubmit,
      buttonText = _ref.buttonText,
      onSubmit = _ref.onSubmit,
      _ref$autocomplete = _ref.autocomplete,
      autocomplete = _ref$autocomplete === void 0 ? [] : _ref$autocomplete,
      errorHandle = _ref.errorHandle,
      error = _ref.error,
      selected = _ref.selected,
      grouping = _ref.grouping,
      filtered = _ref.filtered,
      setFiltered = _ref.setFiltered;

  var submitAction = function submitAction(value) {
    if (onSubmit) onSubmit(value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: "flex",
      flexGrow: 1,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field ".concat(classes, " ").concat(errorHandle === true ? "error" : classes)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-field__icon-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: iconUrl,
    className: "input-field__icon",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AutocompleteInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    filtered: filtered,
    setFiltered: setFiltered,
    grouping: grouping,
    placeholder: placeholder,
    classes: autocompleteClasses === undefined ? "input-field__input" : autocompleteClasses,
    value: value,
    setValue: onChange,
    onSubmit: submitAction,
    autocomplete: autocomplete,
    selected: selected
  })), haveSubmit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "input-field__submit-button",
    onClick: function onClick() {
      return submitAction(value);
    }
  }, buttonText)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputField);

/***/ }),

/***/ "./src/core/components/ItemsControl/index.tsx":
/*!****************************************************!*\
  !*** ./src/core/components/ItemsControl/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITEMS_CONTROL_MODE": () => (/* binding */ ITEMS_CONTROL_MODE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images */ "./src/core/assets/images/index.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_components_itemscontrol_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/components/itemscontrol.scss */ "./src/core/assets/components/itemscontrol.scss");



var ITEMS_CONTROL_MODE;

(function (ITEMS_CONTROL_MODE) {
  ITEMS_CONTROL_MODE["ROWS"] = "ROWS";
  ITEMS_CONTROL_MODE["TILES"] = "TILES";
})(ITEMS_CONTROL_MODE || (ITEMS_CONTROL_MODE = {}));

var ItemsControl = function ItemsControl(_ref) {
  var sortingItems = _ref.sortingItems,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? ITEMS_CONTROL_MODE.ROWS : _ref$mode,
      action = _ref.action;
  var buttons;

  switch (mode) {
    case ITEMS_CONTROL_MODE.ROWS:
      {
        buttons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "items-control__buttons-wrapper"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          onClick: function onClick() {
            return action(ITEMS_CONTROL_MODE.ROWS);
          },
          className: "items-control__button"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
          src: _assets_images__WEBPACK_IMPORTED_MODULE_1__.RowsSelectedIconSvg,
          className: "items-control__icon"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          onClick: function onClick() {
            return action(ITEMS_CONTROL_MODE.TILES);
          },
          className: "items-control__button"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
          src: _assets_images__WEBPACK_IMPORTED_MODULE_1__.TilesIconSvg,
          className: "items-control__icon"
        })));
        break;
      }

    default:
      buttons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "items-control__buttons-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onClick: function onClick() {
          return action(ITEMS_CONTROL_MODE.ROWS);
        },
        className: "items-control__button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: _assets_images__WEBPACK_IMPORTED_MODULE_1__.RowsIconSvg,
        className: "items-control__icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onClick: function onClick() {
          return action(ITEMS_CONTROL_MODE.TILES);
        },
        className: "items-control__button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: _assets_images__WEBPACK_IMPORTED_MODULE_1__.TilesSelectedIconSvg,
        className: "items-control__icon"
      })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "items-control"
  }, buttons);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemsControl);

/***/ }),

/***/ "./src/core/components/Loader/index.tsx":
/*!**********************************************!*\
  !*** ./src/core/components/Loader/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_components_loader_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/components/loader.scss */ "./src/core/assets/components/loader.scss");



var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loader"
  }, "Loading");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./src/core/components/PlugSvg/index.tsx":
/*!***********************************************!*\
  !*** ./src/core/components/PlugSvg/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _assets_components_plugsvg_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/components/plugsvg.scss */ "./src/core/assets/components/plugsvg.scss");




var Plug = function Plug(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? "" : _ref$classes,
      url = _ref.url,
      title = _ref.title,
      alt = _ref.alt;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__.ReactSVG, {
    src: url,
    role: "img",
    "aria-label": alt || "".concat(title, " svg"),
    className: "plug-svg ".concat(classes),
    loading: function loading() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "plug-svg-loading ".concat(classes)
      });
    },
    fallback: function fallback() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "plug-svg-error ".concat(classes)
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Plug);

/***/ }),

/***/ "./src/core/components/RowItem/index.tsx":
/*!***********************************************!*\
  !*** ./src/core/components/RowItem/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/useCookies.js");
/* harmony import */ var _assets_components_rowitem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/components/rowitem.scss */ "./src/core/assets/components/rowitem.scss");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../types/env */ "./types/env.ts");








var RowItem = function RowItem(_ref) {
  var name = _ref.name,
      price = _ref.price,
      index = _ref.index,
      onClick = _ref.onClick,
      label = _ref.label,
      distance = _ref.distance,
      retailerId = _ref.retailerId,
      retailerName = _ref.retailerName,
      retailerLogo = _ref.retailerLogo,
      quantityDisplay = _ref.quantityDisplay,
      priceCurrency = _ref.priceCurrency,
      pbmId = _ref.pbmId,
      partnerId = _ref.partnerId,
      ndc = _ref.ndc,
      lowPriceAmount = _ref.lowPriceAmount,
      locationPhoneNumber = _ref.locationPhoneNumber,
      locationId = _ref.locationId,
      isOtcDrug = _ref.isOtcDrug,
      highPriceAmount = _ref.highPriceAmount,
      formulationId = _ref.formulationId,
      drugUrlSlug = _ref.drugUrlSlug,
      drugName = _ref.drugName,
      drugId = _ref.drugId,
      dosageDisplay = _ref.dosageDisplay;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useCookies2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useCookies, 2),
      cookies = _useCookies2[0],
      setCookies = _useCookies2[1];

  var _useLocation = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useLocation)(),
      state = _useLocation.state;

  var payload = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      retailerId: retailerId,
      retailerName: retailerName,
      retailerLogo: {
        imageUrl: retailerLogo === null || retailerLogo === void 0 ? void 0 : retailerLogo.imageUrl
      },
      quantityDisplay: quantityDisplay,
      priceCurrency: priceCurrency,
      pbmId: pbmId,
      partnerId: partnerId,
      ndc: ndc,
      lowPriceAmount: lowPriceAmount,
      locationPhoneNumber: locationPhoneNumber,
      locationId: locationId,
      isOtcDrug: isOtcDrug,
      highPriceAmount: highPriceAmount,
      formulationId: formulationId,
      drugUrlSlug: drugUrlSlug,
      drugName: drugName,
      drugId: drugId,
      dosageDisplay: dosageDisplay
    };
  }, [retailerId, retailerName, retailerLogo, quantityDisplay, priceCurrency, pbmId, partnerId, ndc, lowPriceAmount, locationPhoneNumber, locationId, isOtcDrug, highPriceAmount, formulationId, drugUrlSlug, drugName, drugId, dosageDisplay]);

  var LinkCoupon = function LinkCoupon() {
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: "POST",
      url: "".concat(_types_env__WEBPACK_IMPORTED_MODULE_4__.adress, "/api/coupon/get"),
      data: {
        data: payload,
        headers: {
          authorization: "Bearer ".concat(cookies['token']),
          'x-account-id': cookies['account']
        }
      }
    }).then(function (res) {
      setUrl(res.data.url);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (url && LinkCoupon) {
      window.open(url);
    }
  }, [url]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "row-item__name"
  }, name), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "row-item__label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "row-item__label"
  }, distance)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "row-item__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "row-item__price"
  }, price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "row-item__button",
    onClick: LinkCoupon
  }, "Get Coupon")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowItem);

/***/ }),

/***/ "./src/core/components/TileItem/index.tsx":
/*!************************************************!*\
  !*** ./src/core/components/TileItem/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/useCookies.js");
/* harmony import */ var _assets_components_tileitems_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/components/tileitems.scss */ "./src/core/assets/components/tileitems.scss");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../types/env */ "./types/env.ts");







var TileItem = function TileItem(_ref) {
  var name = _ref.name,
      price = _ref.price,
      index = _ref.index,
      onClick = _ref.onClick,
      label = _ref.label,
      distance = _ref.distance,
      retailerId = _ref.retailerId,
      retailerName = _ref.retailerName,
      retailerLogo = _ref.retailerLogo,
      quantityDisplay = _ref.quantityDisplay,
      priceCurrency = _ref.priceCurrency,
      pbmId = _ref.pbmId,
      partnerId = _ref.partnerId,
      ndc = _ref.ndc,
      lowPriceAmount = _ref.lowPriceAmount,
      locationPhoneNumber = _ref.locationPhoneNumber,
      locationId = _ref.locationId,
      isOtcDrug = _ref.isOtcDrug,
      highPriceAmount = _ref.highPriceAmount,
      formulationId = _ref.formulationId,
      drugUrlSlug = _ref.drugUrlSlug,
      drugName = _ref.drugName,
      drugId = _ref.drugId,
      dosageDisplay = _ref.dosageDisplay;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useCookies2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useCookies, 2),
      cookies = _useCookies2[0],
      setCookies = _useCookies2[1];

  var payload = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      retailerId: retailerId,
      retailerName: retailerName,
      retailerLogo: {
        imageUrl: retailerLogo === null || retailerLogo === void 0 ? void 0 : retailerLogo.imageUrl
      },
      quantityDisplay: quantityDisplay,
      priceCurrency: priceCurrency,
      pbmId: pbmId,
      partnerId: partnerId,
      ndc: ndc,
      lowPriceAmount: lowPriceAmount,
      locationPhoneNumber: locationPhoneNumber,
      locationId: locationId,
      isOtcDrug: isOtcDrug,
      highPriceAmount: highPriceAmount,
      formulationId: formulationId,
      drugUrlSlug: drugUrlSlug,
      drugName: drugName,
      drugId: drugId,
      dosageDisplay: dosageDisplay
    };
  }, [retailerId, retailerName, retailerLogo, quantityDisplay, priceCurrency, pbmId, partnerId, ndc, lowPriceAmount, locationPhoneNumber, locationId, isOtcDrug, highPriceAmount, formulationId, drugUrlSlug, drugName, drugId, dosageDisplay]);

  var LinkCoupon = function LinkCoupon() {
    axios__WEBPACK_IMPORTED_MODULE_3___default()({
      method: "POST",
      url: "".concat(_types_env__WEBPACK_IMPORTED_MODULE_4__.adress, "/api/coupon/get"),
      data: {
        data: payload,
        headers: {
          authorization: "Bearer ".concat(cookies['token']),
          'x-account-id': cookies['account']
        }
      }
    }).then(function (res) {
      setUrl(res.data.url);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (url && LinkCoupon) {
      window.open(url);
    }
  }, [url]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "tile-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "tile-item__name"
  }, name), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "tile-item__label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "tile-item__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "tile-item__price"
  }, price), distance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, distance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "tile-item__button",
    onClick: LinkCoupon
  }, "Get Coupon")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TileItem);

/***/ }),

/***/ "./src/core/components/index.tsx":
/*!***************************************!*\
  !*** ./src/core/components/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": () => (/* reexport safe */ _Dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "InputField": () => (/* reexport safe */ _InputField__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "ItemsControl": () => (/* reexport safe */ _ItemsControl__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Loader": () => (/* reexport safe */ _Loader__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "PlugSvg": () => (/* reexport safe */ _PlugSvg__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "RowItem": () => (/* reexport safe */ _RowItem__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "TileItem": () => (/* reexport safe */ _TileItem__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "./src/core/components/Dropdown/index.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/core/components/Footer/index.tsx");
/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputField */ "./src/core/components/InputField/index.tsx");
/* harmony import */ var _ItemsControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemsControl */ "./src/core/components/ItemsControl/index.tsx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loader */ "./src/core/components/Loader/index.tsx");
/* harmony import */ var _PlugSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlugSvg */ "./src/core/components/PlugSvg/index.tsx");
/* harmony import */ var _RowItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RowItem */ "./src/core/components/RowItem/index.tsx");
/* harmony import */ var _TileItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TileItem */ "./src/core/components/TileItem/index.tsx");









/***/ }),

/***/ "./src/core/page/SearchPage/index.tsx":
/*!********************************************!*\
  !*** ./src/core/page/SearchPage/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPage": () => (/* binding */ SearchPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/core/components/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/useCookies.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _store_topMed_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/topMed/action */ "./src/core/store/topMed/action.ts");
/* harmony import */ var _store_SearchZip_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/SearchZip/action */ "./src/core/store/SearchZip/action.ts");
/* harmony import */ var _store_currentMed_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/currentMed/action */ "./src/core/store/currentMed/action.ts");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images */ "./src/core/assets/images/index.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_pages_search_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/pages/search.scss */ "./src/core/assets/pages/search.scss");












var SearchPage = function SearchPage() {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();
  var state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.topMedReducer.top;
  });
  var grouping = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.topMedReducer.group;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      group = _useState2[0],
      setGroup = _useState2[1];

  var zip = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (zip) {
    return zip.zipReducer;
  });
  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.currentReducer;
  });

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      _useCookies2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useCookies, 2),
      cookies = _useCookies2[0],
      setCookies = _useCookies2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      zipError = _useState8[0],
      setZipError = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
      codes = _useState10[0],
      setCodes = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
      groups = _useState12[0],
      setGroups = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
      filteredItems = _useState14[0],
      setFilteredItems = _useState14[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,_store_topMed_action__WEBPACK_IMPORTED_MODULE_4__["default"])({
      authorization: "Bearer ".concat(cookies['token']),
      'x-account-id': cookies['account']
    }));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (codes) {
      dispatch((0,_store_SearchZip_action__WEBPACK_IMPORTED_MODULE_5__["default"])(codes));
    }

    return function () {
      dispatch((0,_store_SearchZip_action__WEBPACK_IMPORTED_MODULE_5__.ClearZip)());
    };
  }, [codes, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (data.name) {
      history.push({
        pathname: "/results",
        state: {
          name: search,
          location: zip.filter(function (item) {
            return item.label === codes;
          })
        }
      });
    }
  }, [data]);

  var submitAction = function submitAction() {
    if (search && codes && state.filter(function (item) {
      return item.label === search || item.label.label === search;
    })[0]) {
      dispatch((0,_store_currentMed_action__WEBPACK_IMPORTED_MODULE_6__["default"])(search, {
        authorization: "Bearer ".concat(cookies['token']),
        'x-account-id': cookies['account']
      }));
      return true;
    } else {
      codes ? setZipError(false) : setZipError(true);
      search && state.filter(function (item) {
        return item.label.label === search;
      })[0] ? setError(false) : setError(true);
      return false;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "search-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "search-page__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_7__.HeaderLogoImage,
    className: "search-page__header-logo",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "search-page__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", {
    className: "search-page__title"
  }, "Save on your medications today!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "search-page__input-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.InputField, {
    iconUrl: _assets_images__WEBPACK_IMPORTED_MODULE_7__.SearchIconSvg,
    value: search,
    placeholder: "Search Medications",
    onChange: setSearch,
    onSubmit: submitAction,
    buttonText: "Find lowest prices",
    autocomplete: search.length >= 3 && group === false ? state : [],
    errorHandle: error,
    grouping: true,
    filtered: filteredItems,
    setFiltered: setFilteredItems // error="Please type correct medication"

  }), error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "error_message"
  }, "Please choose correct medication") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.InputField, {
    iconUrl: _assets_images__WEBPACK_IMPORTED_MODULE_7__.LocationIconSvg,
    value: codes,
    placeholder: "ZIP (enter at least 3 characters)",
    onChange: setCodes,
    onSubmit: submitAction,
    buttonText: "Find lowest prices",
    autocomplete: zip,
    errorHandle: zipError,
    haveSubmit: true // error="Please type correct ZIP code"

  }), zipError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: "error_message"
  }, "Please choose correct Zip code") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Footer, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchPage);

/***/ }),

/***/ "./src/core/page/index.ts":
/*!********************************!*\
  !*** ./src/core/page/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultPage": () => (/* reexport safe */ _result__WEBPACK_IMPORTED_MODULE_0__.ResultPage),
/* harmony export */   "SearchPage": () => (/* reexport safe */ _SearchPage__WEBPACK_IMPORTED_MODULE_1__.SearchPage)
/* harmony export */ });
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result */ "./src/core/page/result/index.tsx");
/* harmony import */ var _SearchPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchPage */ "./src/core/page/SearchPage/index.tsx");



/***/ }),

/***/ "./src/core/page/result/index.tsx":
/*!****************************************!*\
  !*** ./src/core/page/result/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultPage": () => (/* binding */ ResultPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/useCookies.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./src/core/components/index.tsx");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images */ "./src/core/assets/images/index.js");
/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ItemsControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ItemsControl */ "./src/core/components/ItemsControl/index.tsx");
/* harmony import */ var _store_currentMed_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/currentMed/action */ "./src/core/store/currentMed/action.ts");
/* harmony import */ var _store_topMed_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/topMed/action */ "./src/core/store/topMed/action.ts");
/* harmony import */ var _store_SearchZip_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/SearchZip/action */ "./src/core/store/SearchZip/action.ts");
/* harmony import */ var _store_Price_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/Price/actions */ "./src/core/store/Price/actions.ts");
/* harmony import */ var _assets_pages_result_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/pages/result.scss */ "./src/core/assets/pages/result.scss");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var ResultPage = function ResultPage() {
  var store = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useStore)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(store.getState()),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      prices = _useState2[0],
      setPrices = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      errorZip = _useState6[0],
      setErrorZip = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
      searchMed = _useState8[0],
      setSearchMed = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
      searchZip = _useState10[0],
      setSearchZip = _useState10[1];

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_13__["default"])(),
      _useCookies2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCookies, 2),
      cookies = _useCookies2[0],
      setCookies = _useCookies2[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
      medicationError = _useState12[0],
      setMedicationError = _useState12[1];

  var currentMedication = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.currentReducer;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__.shallowEqual);

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
      description = _useState14[0],
      setDescription = _useState14[1];

  var topMed = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.topMedReducer.top;
  });
  var zip = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.zipReducer;
  });

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state;
  }),
      priceReducer = _useSelector.priceReducer;

  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_14__.useHistory)();
  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_14__.useLocation)();

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState15, 2),
      open = _useState16[0],
      setOpen = _useState16[1];

  var mockSorting = ["LOWEST", "HIGHEST"];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_components_ItemsControl__WEBPACK_IMPORTED_MODULE_7__.ITEMS_CONTROL_MODE.TILES),
      _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState17, 2),
      itemsMode = _useState18[0],
      setItemsMode = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState20 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState19, 2),
      loading = _useState20[0],
      setLoading = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    Manufacturer: "no items",
    Form: "no items",
    Dosage: "no items",
    Quantity: "no items"
  }),
      _useState22 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState21, 2),
      chosen = _useState22[0],
      _setChosen = _useState22[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!location.state) {
      return history.push("/search");
    }
  }, [location]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (searchZip) {
      dispatch((0,_store_SearchZip_action__WEBPACK_IMPORTED_MODULE_10__["default"])(searchZip));
    }

    return function () {
      dispatch((0,_store_SearchZip_action__WEBPACK_IMPORTED_MODULE_10__.ClearZip)());
    };
  }, [searchZip]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    dispatch((0,_store_topMed_action__WEBPACK_IMPORTED_MODULE_9__["default"])({
      authorization: "Bearer ".concat(cookies['token']),
      'x-account-id': cookies['account']
    }));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (location.state.name.length > 0) {
      dispatch((0,_store_currentMed_action__WEBPACK_IMPORTED_MODULE_8__["default"])(location.state.name, {
        authorization: "Bearer ".concat(cookies['token']),
        'x-account-id': cookies['account']
      }));
    }
  }, [location]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (currentMedication.name) {
      var name = currentMedication.name,
          defaultSettings = currentMedication.defaultSettings,
          brandSettings = currentMedication.brandSettings,
          comparing = currentMedication.comparing;
      var defaults = name === location.state.name ? brandSettings : comparing[0];

      if (defaults) {
        _setChosen({
          Manufacturer: "".concat(defaults.name, " (").concat(defaults.drugType, ")"),
          Form: defaults.form,
          Dosage: defaults.dosage.display,
          Quantity: defaults.commonQuantities.find(function (_ref) {
            var value = _ref.value;
            return value === defaultSettings.quantity;
          }).display
        });
      }
    }
  }, [currentMedication]);

  var SubmitActionValue = function SubmitActionValue() {
    if (searchMed && topMed.filter(function (item) {
      return item.label.label === searchMed;
    })[0]) {
      history.push({
        state: _objectSpread(_objectSpread({}, location.state), {}, {
          name: searchMed
        })
      });
      setError(false);
      return true;
    } else {
      searchMed && topMed.filter(function (item) {
        return item.label.label === searchMed;
      })[0] ? setError(false) : setError(true);
      return false;
    }
  };

  var SubmitActionZip = function SubmitActionZip() {
    if (searchZip) {
      history.push({
        state: _objectSpread(_objectSpread({}, location.state), {}, {
          location: zip
        })
      });
      setErrorZip(false);
      return true;
    } else {
      searchZip ? setErrorZip(false) : setErrorZip(true);
      return false;
    }
  };

  var sortedFunc = function sortedFunc() {
    if (currentMedication.name && chosen) {
      console.log('sorted 1');
      console.log("loading sorted 1", loading);
      var formulations = currentMedication.formulations,
          settings = currentMedication.settings;
      var manufacturer = settings.manufacturer;
      var setting = formulations.reduce(function (acc, next, index) {
        if (chosen.Manufacturer.split(" ").slice(0, -1).join(" ") === next.name) {
          acc.form.push(next.form);
        }

        if (chosen.Manufacturer.split(" ").slice(0, -1).join(" ") === next.name && next.form === chosen.Form) {
          acc.dosage.push(next.dosage.display);
        }

        if (next.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ") && chosen.Dosage === next.dosage.display && next.form === chosen.Form) {
          var _acc$quantity;

          (_acc$quantity = acc.quantity).push.apply(_acc$quantity, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(next.commonQuantities));

          acc.quantity = acc.quantity.map(function (_ref2) {
            var display = _ref2.display;
            return display;
          });
        }

        acc.form = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set(acc.form));
        return acc;
      }, {
        manufacturer: manufacturer,
        form: [],
        dosage: [],
        quantity: []
      });
      return {
        manufacturer: setting.manufacturer,
        form: setting.form,
        dosage: setting.dosage,
        quantity: setting.quantity
      };
    }
  };

  var priceFunc = function priceFunc() {
    if (currentMedication.name) {
      console.log('priceFunc 2');
      console.log("loading priceFunc 2", loading);
      var formulations = currentMedication.formulations; // const formulationsIds = formulations.reduce((arr:any, set:any) => {
      //   if(set.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ") && set.form === chosen.Form && set.dosage.display === chosen.Dosage ){
      //       arr.formulationId = set.ndc;
      //       arr.quantity = set.commonQuantities.find(({display}:any) => display === chosen.Quantity).value;
      //   }
      //   return arr;
      // },{});

      var formulationId = formulations.filter(function (e) {
        return e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ");
      }).filter(function (e) {
        return e.form === chosen.Form;
      }).filter(function (e) {
        return e.dosage.display === chosen.Dosage;
      }).map(function (e) {
        return e.commonQuantities;
      }).flat().filter(function (e) {
        return e.display === chosen.Quantity;
      }).map(function (e) {
        return e.ndc;
      });
      var value = formulations.filter(function (e) {
        return e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ");
      }).filter(function (e) {
        return e.form === chosen.Form;
      }).filter(function (e) {
        return e.dosage.display === chosen.Dosage;
      }).map(function (e) {
        return e.commonQuantities;
      }).flat().filter(function (e) {
        return e.display === chosen.Quantity;
      }).map(function (e) {
        return e.value;
      });
      var info = formulations.filter(function (e) {
        return e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ");
      }).filter(function (e) {
        return e.form === chosen.Form;
      }).filter(function (e) {
        return e.dosage.display === chosen.Dosage;
      })[0];
      return {
        type: info,
        formulationId: formulationId,
        quantity: value
      };
    }
  };

  var requestPrice = function requestPrice() {
    if (priceSettings) {
      console.log('requestPrice 3');
      console.log("loading requestPrice 3", loading);
      dispatch((0,_store_Price_actions__WEBPACK_IMPORTED_MODULE_11__["default"])(priceSettings.quantity, priceSettings.formulationId, priceSettings.type.drugType, priceSettings.type.name, priceSettings.type.gpi14, false, location.state.location[0].location, location.state.location[0].zip));
    }
  };

  var sorted = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    console.log('sorted memo 4');
    console.log("loading sorted memo 4", loading);
    setLoading(true);
    return sortedFunc();
  }, [chosen.Manufacturer, chosen.Form, chosen.Dosage, chosen.Quantity]);
  var priceSettings = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    console.log('priceSettings 5');
    console.log("loading priceSettings 5", loading);
    return priceFunc();
  }, [chosen.Manufacturer, chosen.Form, chosen.Dosage, sorted]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    console.log('effect request 6');
    console.log("loading effect request 6", loading);
    requestPrice();
  }, [priceSettings, sorted]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("img", {
    src: _assets_images__WEBPACK_IMPORTED_MODULE_6__.HeaderLogoImage,
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "input_search_error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.InputField, {
    value: searchMed,
    onChange: setSearchMed,
    placeholder: "Type your drug name",
    iconUrl: _assets_images__WEBPACK_IMPORTED_MODULE_6__.SearchIconSvg,
    classes: "result-page__header-input",
    autocompleteClasses: "result-page__autocomplete",
    onSubmit: SubmitActionValue,
    grouping: true,
    autocomplete: searchMed.length >= 3 ? topMed : [],
    errorHandle: error,
    haveSubmit: true,
    buttonText: "Search",
    error: "Incorrect medication",
    selected: true
  }), error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "error_message"
  }, "Please choose correct medication") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "null"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__row"
  }, open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "input_search_error fild_animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.InputField, {
    value: searchZip,
    iconUrl: _assets_images__WEBPACK_IMPORTED_MODULE_6__.LocationIconSvg,
    onChange: setSearchZip,
    placeholder: "ZIP (enter at least 3 characters)",
    classes: "result-page__header-input",
    autocompleteClasses: "result-page__autocomplete",
    onSubmit: SubmitActionZip,
    autocomplete: zip,
    haveSubmit: true,
    buttonText: "Search",
    errorHandle: errorZip,
    error: "Incorrect ZIP code"
  }), errorZip ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "error_message"
  }, "Please choose correct Zip code") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "null"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.PlugSvg, {
    url: _assets_images__WEBPACK_IMPORTED_MODULE_6__.LocationIconSvg,
    classes: "result-page__location-icon",
    title: "location"
  }), location.state && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "result-page__location-text",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, location.state.location[0].label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__description-title"
  }, location.state && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h1", {
    className: "title"
  }, location.state.name), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("p", {
    className: "description"
  }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__separator--green"
  }), sorted && chosen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__dropdowns"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
    label: "Manufacturer",
    items: sorted.manufacturer,
    chosen: chosen.Manufacturer,
    setChosen: function setChosen(e) {
      return _setChosen(_objectSpread(_objectSpread({}, chosen), {}, {
        Manufacturer: e
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
    label: "Form",
    items: sorted.form,
    chosen: chosen.Form,
    setChosen: function setChosen(e) {
      return _setChosen(_objectSpread(_objectSpread({}, chosen), {}, {
        Form: e
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
    label: "Dosage",
    items: sorted.dosage,
    chosen: chosen.Dosage,
    setChosen: function setChosen(e) {
      return _setChosen(_objectSpread(_objectSpread({}, chosen), {}, {
        Dosage: e
      }));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.Dropdown, {
    label: "Quantity",
    items: sorted.quantity,
    chosen: chosen.Quantity,
    setChosen: function setChosen(e) {
      return _setChosen(_objectSpread(_objectSpread({}, chosen), {}, {
        Quantity: e
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__items-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.ItemsControl, {
    sortingItems: mockSorting,
    mode: itemsMode,
    action: setItemsMode
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__separator--grey"
  }), itemsMode === _components_ItemsControl__WEBPACK_IMPORTED_MODULE_7__.ITEMS_CONTROL_MODE.TILES && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__tiles-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__tiles-wrapper"
  }, priceReducer.data && priceReducer.load === 'idle' ? priceReducer.data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.TileItem, {
      partnerId: null,
      isOtcDrug: false,
      highPriceAmount: null,
      priceCurrency: "USD",
      retailerName: item.retailer.name,
      retailerId: item.retailer.id,
      retailerLogo: item.retailer.logo,
      drugName: chosen.Manufacturer.split(" ")[0],
      dosageDisplay: chosen.Dosage,
      pbmId: item.pbmId,
      formulationId: priceSettings === null || priceSettings === void 0 ? void 0 : priceSettings.formulationId,
      ndc: priceSettings === null || priceSettings === void 0 ? void 0 : priceSettings.formulationId,
      key: item.retailer.name,
      locationId: item.retailer.location.id,
      locationPhoneNumber: item.retailer.location.phoneNumber,
      lowPriceAmount: item.price.amount,
      quantityDisplay: chosen.Quantity,
      drugUrlSlug: chosen.Manufacturer.split(" ")[0].toLowerCase(),
      drugId: currentMedication.id,
      name: item.retailer.name,
      price: item.price.display,
      label: " Optum Perks",
      index: index,
      onClick: function onClick() {},
      distance: "".concat(item.distance)
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.Loader, null))), itemsMode === _components_ItemsControl__WEBPACK_IMPORTED_MODULE_7__.ITEMS_CONTROL_MODE.ROWS && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__rows-wrapper"
  }, priceReducer.data && priceReducer.load === 'idle' ? priceReducer.data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.RowItem, {
      partnerId: null,
      isOtcDrug: false,
      highPriceAmount: null,
      priceCurrency: "USD",
      retailerName: item.retailer.name,
      retailerId: item.retailer.id,
      retailerLogo: item.retailer.logo,
      drugName: chosen.Manufacturer.split(" ")[0],
      dosageDisplay: chosen.Dosage,
      pbmId: item.pbmId,
      formulationId: priceSettings === null || priceSettings === void 0 ? void 0 : priceSettings.formulationId,
      ndc: priceSettings === null || priceSettings === void 0 ? void 0 : priceSettings.formulationId,
      key: item.retailer.name,
      locationId: item.retailer.location.id,
      locationPhoneNumber: item.retailer.location.phoneNumber,
      lowPriceAmount: item.price.amount,
      quantityDisplay: chosen.Quantity,
      drugUrlSlug: chosen.Manufacturer.split(" ")[0].toLowerCase(),
      drugId: currentMedication.id,
      name: item.retailer.name,
      price: item.price.display,
      label: " Optum Perks",
      index: index,
      onClick: function onClick() {},
      distance: "".concat(item.distance)
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.Loader, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "result-page__space-fill"
  }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.Footer, null)));
};
/*

  // const manufacturer: any = currentMedication.variants.map((e: any) => {
      //   return `${e.name} (${e.drugType})`;
      // });

      // const form: any = currentMedication.formulations
      //   .filter((e: any) => {
      //     return (
      //       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
      //     );
      //   })
      //   .map((e: any) => {
      //     return e.form;
      //   })
      //   .filter(function (value: any, index: any, self: any) {
      //     return self.indexOf(value.trim()) === index;
      //   });
      // const dosage = currentMedication.formulations
      //   .filter((e: any) => {
      //     return (
      //       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
      //     );
      //   })
      //   .filter((e: any) => {
      //     return e.form === chosen.Form;
      //   })
      //   .map((e: any) => {
      //     return e.dosage;
      //   })
      //   .map((e: any) => {
      //     return e.display;
      //   });
      // const quantity = currentMedication.formulations
      //   .filter((e: any) => {
      //     return (
      //       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
      //     );
      //   })
      //   .filter((e: any) => {
      //     return e.form === chosen.Form;
      //   })
      //   .filter((e: any) => {
      //     return e.dosage.display === chosen.Dosage;
      //   })
      //   .map((e: any) => {
      //     return e.commonQuantities;
      //   })
      //   .flat()
      //   .map((e: any) => {
      //     return e.display;
      //   });

*/

/* 
// const formId = currentMedication[0].defaultSettings.formulationId;
// const defaultMedQuantity = currentMedication[0].defaultSettings.quantity;
// const currentName = currentMedication[0].formulations.filter((item:any) => item.name=== location.state.name)[0];
// const formulations = currentMedication[0].formulations;
// const defaultArr = formulations.filter((item:any) => item.id === formId)[0];
  // const defaultForm = defaultArr.form;
// const defaultDosage = defaultArr.dosage.display;
// const defaultQuantity = defaultArr.commonQuantities.find((item:any) => item.value === defaultMedQuantity).display;
  // const formulationsName = formulations.filter((item:any) => item.name === currentName.name);
  // const formulationsNameForm = formulationsName.find((item:any) => item.form === defaultForm);
// const formulationsNameDosage = formulationsName.find((item:any) => item.dosage.display === defaultDosage);
// const formulationsNameQuantity = formulationsName.map((e:any) => e.commonQuantities).flat().find((item:any) => item.display === defaultQuantity);
  // const currentForm = formulationsNameForm !== undefined ? defaultForm : currentName.form;
// const currentDosage = formulationsNameDosage !== undefined ? defaultDosage : currentName.dosage.disaplay;
  // if(formulationsNameQuantity === undefined){
//   setChosen({Manufacturer:`${currentName.name} (${currentName.drugType})`, Form:currentForm, Dosage:currentDosage});
// }else{
//   setChosen({Manufacturer:`${currentName.name} (${currentName.drugType})`, Form:currentForm, Dosage:currentDosage, Quantity: defaultQuantity});
// }
  */
// const formulationId = formulations
//   .filter((e: any) => {
//     return (
//       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
//     );
//   })
//   .filter((e: any) => {
//     return e.form === chosen.Form;
//   })
//   .filter((e: any) => {
//     return e.dosage.display === chosen.Dosage;
//   })
//   .map((e: any) => {
//     return e.commonQuantities;
//   })
//   .flat()
//   .filter((e: any) => {
//     return e.display === chosen.Quantity;
//   })
//   .map((e: any) => {
//     return e.ndc;
//   });
// const value = formulations
//   .filter((e: any) => {
//     return (
//       e.name === chosen.Manufacturer.split(" ").slice(0, -1).join(" ")
//     );
//   })
//   .filter((e: any) => {
//     return e.form === chosen.Form;
//   })
//   .filter((e: any) => {
//     return e.dosage.display === chosen.Dosage;
//   })
//   .map((e: any) => {
//     return e.commonQuantities;
//   })
//   .flat()
//   .filter((e: any) => {
//     return e.display === chosen.Quantity;
//   })
//   .map((e: any) => {
//     return e.value;
//   });

/***/ }),

/***/ "./src/core/store/Price/actions.ts":
/*!*****************************************!*\
  !*** ./src/core/store/Price/actions.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _priceTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priceTypes */ "./src/core/store/Price/priceTypes.ts");
/* harmony import */ var _types_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../types/env */ "./types/env.ts");






var getPrice = function getPrice(quantity, formulationId, type, name, gpi14, ubi, searchLocation, searchLocationZipCode) {
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // try{
              //   const price:any = await axios({
              //     method:"POST",
              //     url: `${adress}/api/price/getting`,
              //     withCredentials:true,
              //     data:{
              //       quantity: quantity,
              //       formulationId: formulationId,
              //       type: type,
              //       name: name,
              //       gpi14: gpi14,
              //       ubi: ubi,
              //       searchLocation: searchLocation,
              //       searchLocationZipCode: searchLocationZipCode,
              //     }
              //   });
              //   dispatch({type: ActionsType.PRICE, payload: price.data});
              // }catch(err){
              //   console.error(err);
              // }
              dispatch({
                type: _priceTypes__WEBPACK_IMPORTED_MODULE_3__.ActionsType.PRICE,
                payload: {
                  load: 'loading'
                }
              });
              return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_2___default()({
                method: "POST",
                url: "".concat(_types_env__WEBPACK_IMPORTED_MODULE_4__.adress, "/api/price/getting"),
                withCredentials: true,
                data: {
                  quantity: quantity,
                  formulationId: formulationId,
                  type: type,
                  name: name,
                  gpi14: gpi14,
                  ubi: ubi,
                  searchLocation: searchLocation,
                  searchLocationZipCode: searchLocationZipCode
                }
              }).then(function (_ref2) {
                var data = _ref2.data;
                dispatch({
                  type: _priceTypes__WEBPACK_IMPORTED_MODULE_3__.ActionsType.PRICE,
                  payload: {
                    data: data,
                    load: 'idle'
                  }
                });
              }).catch(function (e) {
                console.error(e.message);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrice);

/***/ }),

/***/ "./src/core/store/Price/priceReducer.ts":
/*!**********************************************!*\
  !*** ./src/core/store/Price/priceReducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _priceTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./priceTypes */ "./src/core/store/Price/priceTypes.ts");


var priceReducer = function priceReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _priceTypes__WEBPACK_IMPORTED_MODULE_0__.ActionsType.PRICE:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceReducer);

/***/ }),

/***/ "./src/core/store/Price/priceTypes.ts":
/*!********************************************!*\
  !*** ./src/core/store/Price/priceTypes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsType": () => (/* binding */ ActionsType)
/* harmony export */ });
var ActionsType;

(function (ActionsType) {
  ActionsType["PRICE"] = "PRICE";
})(ActionsType || (ActionsType = {}));

;

/***/ }),

/***/ "./src/core/store/SearchMed/searchReducer.ts":
/*!***************************************************!*\
  !*** ./src/core/store/SearchMed/searchReducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _searchTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchTypes */ "./src/core/store/SearchMed/searchTypes.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var searchReducer = function searchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _searchTypes__WEBPACK_IMPORTED_MODULE_1__.ActionsType.SEARCH:
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchReducer);

/***/ }),

/***/ "./src/core/store/SearchMed/searchTypes.ts":
/*!*************************************************!*\
  !*** ./src/core/store/SearchMed/searchTypes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsType": () => (/* binding */ ActionsType)
/* harmony export */ });
var ActionsType;

(function (ActionsType) {
  ActionsType["SEARCH"] = "SEARCH";
})(ActionsType || (ActionsType = {}));

;

/***/ }),

/***/ "./src/core/store/SearchZip/action.ts":
/*!********************************************!*\
  !*** ./src/core/store/SearchZip/action.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClearZip": () => (/* binding */ ClearZip),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _zipTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zipTypes */ "./src/core/store/SearchZip/zipTypes.ts");
/* harmony import */ var _types_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../types/env */ "./types/env.ts");






var SearchZip = function SearchZip(zip) {
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var code, codes;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              code = zip.split(" ")[0];
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_2___default()({
                method: "POST",
                url: "".concat(_types_env__WEBPACK_IMPORTED_MODULE_4__.adress, "/api/zip/searchzip"),
                data: {
                  zip: code
                }
              });

            case 4:
              codes = _context.sent;

              if (zip.length >= 3) {
                dispatch({
                  type: _zipTypes__WEBPACK_IMPORTED_MODULE_3__.ActionsType.ZIP,
                  payload: codes.data
                });
              }

              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var ClearZip = function ClearZip() {
  return /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              try {
                dispatch({
                  type: _zipTypes__WEBPACK_IMPORTED_MODULE_3__.ActionsType.CLEAR,
                  payload: []
                });
              } catch (err) {
                console.error(err);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchZip);

/***/ }),

/***/ "./src/core/store/SearchZip/zipReducer.ts":
/*!************************************************!*\
  !*** ./src/core/store/SearchZip/zipReducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _zipTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipTypes */ "./src/core/store/SearchZip/zipTypes.ts");


var zipReducer = function zipReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _zipTypes__WEBPACK_IMPORTED_MODULE_0__.ActionsType.ZIP:
      return action.payload;

    case _zipTypes__WEBPACK_IMPORTED_MODULE_0__.ActionsType.CLEAR:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zipReducer);

/***/ }),

/***/ "./src/core/store/SearchZip/zipTypes.ts":
/*!**********************************************!*\
  !*** ./src/core/store/SearchZip/zipTypes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsType": () => (/* binding */ ActionsType)
/* harmony export */ });
var ActionsType;

(function (ActionsType) {
  ActionsType["ZIP"] = "ZIP";
  ActionsType["CLEAR"] = "CLEAR";
})(ActionsType || (ActionsType = {}));

;
;

/***/ }),

/***/ "./src/core/store/coupon/couponReducer.ts":
/*!************************************************!*\
  !*** ./src/core/store/coupon/couponReducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _couponTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./couponTypes */ "./src/core/store/coupon/couponTypes.ts");


var couponReducer = function couponReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _couponTypes__WEBPACK_IMPORTED_MODULE_0__.ActionsType.COUPON:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (couponReducer);

/***/ }),

/***/ "./src/core/store/coupon/couponTypes.ts":
/*!**********************************************!*\
  !*** ./src/core/store/coupon/couponTypes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsType": () => (/* binding */ ActionsType)
/* harmony export */ });
var ActionsType;

(function (ActionsType) {
  ActionsType["COUPON"] = "COUPON";
})(ActionsType || (ActionsType = {}));

;
;

/***/ }),

/***/ "./src/core/store/currentMed/action.ts":
/*!*********************************************!*\
  !*** ./src/core/store/currentMed/action.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _currentTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentTypes */ "./src/core/store/currentMed/currentTypes.ts");
/* harmony import */ var _types_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../types/env */ "./types/env.ts");






var CurrentMed = function CurrentMed(name, header) {
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var current;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default()({
                method: "POST",
                url: "".concat(_types_env__WEBPACK_IMPORTED_MODULE_4__.adress, "/api/medication/current"),
                data: {
                  name: name,
                  headers: {
                    authorization: header.authorization,
                    'x-account-id': header['x-account-id']
                  }
                }
              });

            case 3:
              current = _context.sent;
              dispatch({
                type: _currentTypes__WEBPACK_IMPORTED_MODULE_3__.ActionsType.CURRENT,
                payload: current.data
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentMed);

/***/ }),

/***/ "./src/core/store/currentMed/currentReducer.ts":
/*!*****************************************************!*\
  !*** ./src/core/store/currentMed/currentReducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentTypes */ "./src/core/store/currentMed/currentTypes.ts");


var currentReducer = function currentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _currentTypes__WEBPACK_IMPORTED_MODULE_0__.ActionsType.CURRENT:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentReducer);

/***/ }),

/***/ "./src/core/store/currentMed/currentTypes.ts":
/*!***************************************************!*\
  !*** ./src/core/store/currentMed/currentTypes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsType": () => (/* binding */ ActionsType)
/* harmony export */ });
var ActionsType;

(function (ActionsType) {
  ActionsType["CURRENT"] = "CURRENT";
})(ActionsType || (ActionsType = {}));

;
;

/***/ }),

/***/ "./src/core/store/rootReducer.ts":
/*!***************************************!*\
  !*** ./src/core/store/rootReducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _SearchMed_searchReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchMed/searchReducer */ "./src/core/store/SearchMed/searchReducer.ts");
/* harmony import */ var _SearchZip_zipReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchZip/zipReducer */ "./src/core/store/SearchZip/zipReducer.ts");
/* harmony import */ var _topMed_topMedReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topMed/topMedReducer */ "./src/core/store/topMed/topMedReducer.ts");
/* harmony import */ var _currentMed_currentReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentMed/currentReducer */ "./src/core/store/currentMed/currentReducer.ts");
/* harmony import */ var _Price_priceReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Price/priceReducer */ "./src/core/store/Price/priceReducer.ts");
/* harmony import */ var _coupon_couponReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coupon/couponReducer */ "./src/core/store/coupon/couponReducer.ts");







var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_6__.combineReducers)({
  searchReducer: _SearchMed_searchReducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  zipReducer: _SearchZip_zipReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  topMedReducer: _topMed_topMedReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  currentReducer: _currentMed_currentReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  priceReducer: _Price_priceReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  couponReducer: _coupon_couponReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./src/core/store/store.ts":
/*!*********************************!*\
  !*** ./src/core/store/store.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rootReducer */ "./src/core/store/rootReducer.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");




var store = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_rootReducer__WEBPACK_IMPORTED_MODULE_0__["default"], undefined, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_3__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"])));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/core/store/topMed/action.ts":
/*!*****************************************!*\
  !*** ./src/core/store/topMed/action.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchGroup": () => (/* binding */ SearchGroup),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _topMedTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topMedTypes */ "./src/core/store/topMed/topMedTypes.ts");
/* harmony import */ var _types_env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../types/env */ "./types/env.ts");






var TopMed = function TopMed(headers) {
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var topMed;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default()({
                method: "POST",
                url: "".concat(_types_env__WEBPACK_IMPORTED_MODULE_4__.adress, "/api/medication/top"),
                data: {
                  headers: {
                    Authorization: headers.authorization,
                    'x-account-id': headers['x-account-id']
                  }
                }
              });

            case 3:
              topMed = _context.sent;
              dispatch({
                type: _topMedTypes__WEBPACK_IMPORTED_MODULE_3__.ActionsType.TOP,
                payload: topMed.data
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var SearchGroup = function SearchGroup(name) {
  return /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch) {
      var group;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default()({
                url: "".concat(_types_env__WEBPACK_IMPORTED_MODULE_4__.adress, "/api/medication/group"),
                data: {
                  name: name
                }
              });

            case 3:
              group = _context2.sent;
              dispatch({
                type: _topMedTypes__WEBPACK_IMPORTED_MODULE_3__.ActionsType.GROUP,
                payload: group.data
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopMed);

/***/ }),

/***/ "./src/core/store/topMed/topMedReducer.ts":
/*!************************************************!*\
  !*** ./src/core/store/topMed/topMedReducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _topMedTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topMedTypes */ "./src/core/store/topMed/topMedTypes.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var topMedReducer = function topMedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _topMedTypes__WEBPACK_IMPORTED_MODULE_1__.ActionsType.TOP:
      return _objectSpread(_objectSpread({}, state), {}, {
        top: action.payload
      });

    case _topMedTypes__WEBPACK_IMPORTED_MODULE_1__.ActionsType.GROUP:
      return _objectSpread(_objectSpread({}, state), {}, {
        group: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topMedReducer);

/***/ }),

/***/ "./src/core/store/topMed/topMedTypes.ts":
/*!**********************************************!*\
  !*** ./src/core/store/topMed/topMedTypes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsType": () => (/* binding */ ActionsType)
/* harmony export */ });
var ActionsType;

(function (ActionsType) {
  ActionsType["TOP"] = "TOP";
  ActionsType["GROUP"] = "GROUP";
})(ActionsType || (ActionsType = {}));

/***/ }),

/***/ "./types/env.ts":
/*!**********************!*\
  !*** ./types/env.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adress": () => (/* binding */ adress),
/* harmony export */   "adressServer": () => (/* binding */ adressServer),
/* harmony export */   "mongoLocal": () => (/* binding */ mongoLocal),
/* harmony export */   "mongoServer": () => (/* binding */ mongoServer)
/* harmony export */ });
var adress = 'http://localhost:5000';
var adressServer = 'http://178.128.176.87:5000';
var mongoLocal = 'mongodb+srv://optimerx:3377@example.3acev.mongodb.net/OptimeRX';
var mongoServer = 'mongodb+srv://optimerx:3377@example.3acev.mongodb.net/OptimeRX';

/***/ }),

/***/ "./src/core/assets/components/autocomplete.scss":
/*!******************************************************!*\
  !*** ./src/core/assets/components/autocomplete.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/components/dropdown.scss":
/*!**************************************************!*\
  !*** ./src/core/assets/components/dropdown.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/components/footer.scss":
/*!************************************************!*\
  !*** ./src/core/assets/components/footer.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/components/inputField.scss":
/*!****************************************************!*\
  !*** ./src/core/assets/components/inputField.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/components/itemscontrol.scss":
/*!******************************************************!*\
  !*** ./src/core/assets/components/itemscontrol.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/components/loader.scss":
/*!************************************************!*\
  !*** ./src/core/assets/components/loader.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/components/plugsvg.scss":
/*!*************************************************!*\
  !*** ./src/core/assets/components/plugsvg.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/components/rowitem.scss":
/*!*************************************************!*\
  !*** ./src/core/assets/components/rowitem.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/components/tileitems.scss":
/*!***************************************************!*\
  !*** ./src/core/assets/components/tileitems.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/pages/result.scss":
/*!*******************************************!*\
  !*** ./src/core/assets/pages/result.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/pages/search.scss":
/*!*******************************************!*\
  !*** ./src/core/assets/pages/search.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/styles/app.scss":
/*!*****************************************!*\
  !*** ./src/core/assets/styles/app.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/core/assets/images/copyright-symbol.svg":
/*!*****************************************************!*\
  !*** ./src/core/assets/images/copyright-symbol.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNCAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02LjY0MDYyIDBDMi45NzUgMCAwIDIuODI4MjIgMCA2LjMxMjk5QzAgOS43OTc3NiAyLjk3NSAxMi42MjYgNi42NDA2MiAxMi42MjZDMTAuMzA2MiAxMi42MjYgMTMuMjgxMiA5Ljc5Nzc2IDEzLjI4MTIgNi4zMTI5OUMxMy4yODEyIDIuODI4MjIgMTAuMzA2MiAwIDYuNjQwNjIgMFpNNi42NDA2MiAxMS4zNjM0QzMuNzE4NzUgMTEuMzYzNCAxLjMyODEyIDkuMDkwNyAxLjMyODEyIDYuMzEyOTlDMS4zMjgxMiAzLjUzNTI3IDMuNzE4NzUgMS4yNjI2IDYuNjQwNjIgMS4yNjI2QzkuNTYyNSAxLjI2MjYgMTEuOTUzMSAzLjUzNTI3IDExLjk1MzEgNi4zMTI5OUMxMS45NTMxIDkuMDkwNyA5LjU2MjUgMTEuMzYzNCA2LjY0MDYyIDExLjM2MzRaIiBmaWxsPSIjN0Q3RDdEIi8+DQo8cGF0aCBkPSJNNC44ODc0NSA0LjM2Nzk2QzUuMTI2NTEgNC4xMTU0OSA1LjQxODcgMy45MTM1MSA1Ljc2NDAxIDMuNzg3MjdDNi4xMDkzMiAzLjYzNTc5IDYuNDU0NjQgMy41NjAwNSA2LjgyNjUxIDMuNTYwMDVDNy4yNzgwNyAzLjU2MDA1IDcuNzI5NjMgMy42NjEwNCA4LjEwMTUxIDMuODg4MjZDOC40NzMzOCA0LjA5MDI0IDguODE4NyA0LjM5MzIxIDkuMDU3NzYgNC43MjE0M0wxMC4wMTQgNC4wMzk3NUM5LjY0MjEzIDMuNTg1MjkgOS4xOTA1NyAzLjE4MTMzIDguNjU5MzIgMi45Mjg4NkM4LjEwMTUxIDIuNjUxMTQgNy41MTcxMyAyLjUyNDkgNi44NTMwNyAyLjUyNDlDNi4zMjE4MiAyLjUyNDkgNS43OTA1NyAyLjYyNTg5IDUuMzEyNDUgMi44Mjc4N0M0LjgzNDMyIDMuMDI5ODUgNC40MDkzMiAzLjMwNzU3IDQuMDY0MDEgMy42MzU3OUMzLjcxODcgMy45ODkyNSAzLjQyNjUxIDQuMzY3OTYgMy4yMTQwMSA0Ljg0NzY2QzMuMDAxNTEgNS4zMDIxMiAyLjg5NTI2IDUuODA3MDYgMi44OTUyNiA2LjMxMjAxQzIuODk1MjYgNi44NDIyMSAzLjAwMTUxIDcuMzIxOTEgMy4yMTQwMSA3Ljc3NjM2QzMuNDI2NTEgOC4yMzA4MSAzLjY5MjE0IDguNjM0NzcgNC4wNjQwMSA4Ljk4ODIzQzQuNDA5MzIgOS4zNDE3IDQuODM0MzIgOS41OTQxNyA1LjMxMjQ1IDkuNzk2MTVDNS43OTA1NyA5Ljk5ODEzIDYuMjk1MjYgMTAuMDk5MSA2Ljg1MzA3IDEwLjA5OTFDNy41MTcxMyAxMC4wOTkxIDguMTI4MDcgOS45NzI4OCA4LjY1OTMyIDkuNjk1MTZDOS4xOTA1NyA5LjQxNzQ0IDkuNjY4NyA5LjAzODczIDEwLjAxNCA4LjU4NDI4TDkuMDU3NzYgNy45MDI2QzguODE4NyA4LjI1NjA2IDguNDk5OTUgOC41MzM3OCA4LjEwMTUxIDguNzM1NzZDNy43MDMwNyA4LjkzNzc0IDcuMjc4MDcgOS4wMzg3MyA2LjgyNjUxIDkuMDM4NzNDNi40NTQ2NCA5LjAzODczIDYuMTA5MzIgOC45NjI5OSA1Ljc2NDAxIDguODExNUM1LjQ0NTI2IDguNjYwMDIgNS4xNTMwNyA4LjQ1ODA0IDQuODg3NDUgOC4yMzA4MUM0LjY0ODM5IDcuOTc4MzQgNC40MzU4OSA3LjcwMDYyIDQuMzAzMDggNy4zNzI0QzQuMTcwMjYgNy4wNDQxOSA0LjA5MDU4IDYuNjkwNzIgNC4wOTA1OCA2LjMxMjAxQzQuMDkwNTggNS45MzMzIDQuMTcwMjYgNS41Nzk4NCA0LjMwMzA4IDUuMjUxNjJDNC40MzU4OSA0LjkyMzQgNC42NDgzOSA0LjYyMDQ0IDQuODg3NDUgNC4zNjc5NloiIGZpbGw9IiM3RDdEN0QiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./src/core/assets/images/dropdown-close.svg":
/*!***************************************************!*\
  !*** ./src/core/assets/images/dropdown-close.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxOCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03LjkxMDE3IDEuMTkyNjhMMC4yNzQxMzEgOC44Mjg4NkMwLjA5NzM3NTYgOS4wMDU0NyAtNy42ODc3OWUtMDggOS4yNDEyNCAtNi41ODg5MmUtMDggOS40OTI2M0MtNS40OTAwNmUtMDggOS43NDQwMiAwLjA5NzM3NTcgOS45Nzk3OSAwLjI3NDEzMSAxMC4xNTY0TDAuODM2MzQzIDEwLjcxODhDMS4yMDI2OSAxMS4wODQ3IDEuNzk4MSAxMS4wODQ3IDIuMTYzODkgMTAuNzE4OEw4LjU3NjE4IDQuMzA2NDdMMTQuOTk1NiAxMC43MjU5QzE1LjE3MjMgMTAuOTAyNSAxNS40MDggMTEgMTUuNjU5MiAxMUMxNS45MTA3IDExIDE2LjE0NjQgMTAuOTAyNSAxNi4zMjMzIDEwLjcyNTlMMTYuODg1MyAxMC4xNjM1QzE3LjA2MjEgOS45ODY3NiAxNy4xNTk1IDkuNzUxMTMgMTcuMTU5NSA5LjQ5OTc0QzE3LjE1OTUgOS4yNDgzNSAxNy4wNjIxIDkuMDEyNTkgMTYuODg1MyA4LjgzNTk3TDkuMjQyMzIgMS4xOTI2OEM5LjA2NTAxIDEuMDE1NjQgOC44MjgyNiAwLjkxODQwNiA4LjU3NjU5IDAuOTE4OTY0QzguMzIzOTUgMC45MTg0MDYgOC4wODczNCAxLjAxNTY0IDcuOTEwMTcgMS4xOTI2OFoiIGZpbGw9IiM1NjVBNEYiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./src/core/assets/images/dropdown-open.svg":
/*!**************************************************!*\
  !*** ./src/core/assets/images/dropdown-open.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxOCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC4wODk4IDkuODA3MzJMMTcuNzI1OSAyLjE3MTE0QzE3LjkwMjYgMS45OTQ1MyAxOCAxLjc1ODc2IDE4IDEuNTA3MzdDMTggMS4yNTU5OCAxNy45MDI2IDEuMDIwMjEgMTcuNzI1OSAwLjg0MzU5N0wxNy4xNjM3IDAuMjgxMjQ2QzE2Ljc5NzMgLTAuMDg0NjgwNSAxNi4yMDE5IC0wLjA4NDY4MDUgMTUuODM2MSAwLjI4MTI0Nkw5LjQyMzgzIDYuNjkzNTNMMy4wMDQ0MyAwLjI3NDEzQzIuODI3NjcgMC4wOTc1MTQ1IDIuNTkyMDQgLTYuNzM1MDNlLTA3IDIuMzQwNzkgLTYuODQ0ODZlLTA3QzIuMDg5MjYgLTYuOTU0OGUtMDcgMS44NTM2MyAwLjA5NzUxNDUgMS42NzY3NCAwLjI3NDEzTDEuMTE0NjcgMC44MzY0ODFDMC45Mzc5MTIgMS4wMTMyNCAwLjg0MDUzNiAxLjI0ODg2IDAuODQwNTM2IDEuNTAwMjVDMC44NDA1MzYgMS43NTE2NSAwLjkzNzkxMiAxLjk4NzQxIDEuMTE0NjcgMi4xNjQwM0w4Ljc1NzY4IDkuODA3MzJDOC45MzQ5OSA5Ljk4NDM1IDkuMTcxNzQgMTAuMDgxNiA5LjQyMzQxIDEwLjA4MUM5LjY3NjA1IDEwLjA4MTYgOS45MTI2NiA5Ljk4NDM1IDEwLjA4OTggOS44MDczMloiIGZpbGw9IiM1NjVBNEYiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./src/core/assets/images/location-icon.svg":
/*!**************************************************!*\
  !*** ./src/core/assets/images/location-icon.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxNCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02Ljk5OTgxIDBDMy4zMjM4NyAwIDAuMzMzMTMgMi44NDEyMSAwLjMzMzEzIDYuMzMzMzVDMC4zMzMxMyA3LjM4MTY5IDAuNjA5MDI4IDguNDIxMTIgMS4xMzM1MiA5LjM0MzA2TDYuNjM1MjQgMTguNzk1OUM2LjcwODQ4IDE4LjkyMTkgNi44NDgwNSAxOSA2Ljk5OTgxIDE5QzcuMTUxNTcgMTkgNy4yOTExNCAxOC45MjE5IDcuMzY0MzggMTguNzk1OUwxMi44NjgxIDkuMzM5OTVDMTMuMzkwNiA4LjQyMTEyIDEzLjY2NjUgNy4zODE2NSAxMy42NjY1IDYuMzMzMzFDMTMuNjY2NSAyLjg0MTIxIDEwLjY3NTcgMCA2Ljk5OTgxIDBaTTYuOTk5ODEgOS41QzUuMTYxODQgOS41IDMuNjY2NDkgOC4wNzk0MiAzLjY2NjQ5IDYuMzMzMzVDMy42NjY0OSA0LjU4NzI4IDUuMTYxODQgMy4xNjY2OSA2Ljk5OTgxIDMuMTY2NjlDOC44Mzc3OCAzLjE2NjY5IDEwLjMzMzEgNC41ODcyOCAxMC4zMzMxIDYuMzMzMzVDMTAuMzMzMSA4LjA3OTQyIDguODM3NzggOS41IDYuOTk5ODEgOS41WiIgZmlsbD0iIzU2NUE0RiIvPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./src/core/assets/images/rows-icon.svg":
/*!**********************************************!*\
  !*** ./src/core/assets/images/rows-icon.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyOSAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxsaW5lIHgxPSIxIiB5MT0iMjIiIHgyPSIyOCIgeTI9IjIyIiBzdHJva2U9IiM3RDdEN0QiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8bGluZSB4MT0iMSIgeTE9IjE1IiB4Mj0iMjgiIHkyPSIxNSIgc3Ryb2tlPSIjN0Q3RDdEIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPGxpbmUgeDE9IjEiIHkxPSI4IiB4Mj0iMjgiIHkyPSI4IiBzdHJva2U9IiM3RDdEN0QiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8bGluZSB4MT0iMSIgeTE9IjEiIHgyPSIyOCIgeTI9IjEiIHN0cm9rZT0iIzdEN0Q3RCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./src/core/assets/images/rows-selected-icon.svg":
/*!*******************************************************!*\
  !*** ./src/core/assets/images/rows-selected-icon.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyOSAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yOSAxMy45OTk5SDBWMTUuOTk5OUgyOVYxMy45OTk5WiIgZmlsbD0iIzA1MDUwNSIvPg0KPHBhdGggZD0iTTI5IDIwLjk5OTlIMFYyMi45OTk5SDI5VjIwLjk5OTlaIiBmaWxsPSIjMDUwNTA1Ii8+DQo8cGF0aCBkPSJNMjkgNi45OTk4OEgwVjguOTk5ODhIMTQuNUgyOVY2Ljk5OTg4WiIgZmlsbD0iIzA1MDUwNSIvPg0KPHBhdGggZD0iTTI5IC0wLjAwMDEyMjA3SDBWMS45OTk4OEgyOVYtMC4wMDAxMjIwN1oiIGZpbGw9IiMwNTA1MDUiLz4NCjwvc3ZnPg0K";

/***/ }),

/***/ "./src/core/assets/images/search-icon.svg":
/*!************************************************!*\
  !*** ./src/core/assets/images/search-icon.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xOS43NTU2IDE4LjU3NzNMMTQuMDY4MiAxMi44ODk5QzE1LjE2OTkgMTEuNTI5MSAxNS44MzMyIDkuNzk5OTEgMTUuODMzMiA3LjkxNjYxQzE1LjgzMzIgMy41NTE2NSAxMi4yODE1IDAgNy45MTY1NyAwQzMuNTUxNjEgMCAwIDMuNTUxNjEgMCA3LjkxNjU3QzAgMTIuMjgxNSAzLjU1MTY1IDE1LjgzMzIgNy45MTY2IDE1LjgzMzJDOS43OTk5MSAxNS44MzMyIDExLjUyOTEgMTUuMTY5OSAxMi44ODk5IDE0LjA2ODJMMTguNTc3MyAxOS43NTU2QzE4LjczOTggMTkuOTE4MSAxOC45NTMxIDE5Ljk5OTggMTkuMTY2NSAxOS45OTk4QzE5LjM3OTkgMTkuOTk5OCAxOS41OTMyIDE5LjkxODEgMTkuNzU1NyAxOS43NTU2QzIwLjA4MTUgMTkuNDI5OCAyMC4wODE1IDE4LjkwMzEgMTkuNzU1NiAxOC41NzczWk03LjkxNjYgMTQuMTY2NUM0LjQ2OTk2IDE0LjE2NjUgMS42NjY2NiAxMS4zNjMyIDEuNjY2NjYgNy45MTY1N0MxLjY2NjY2IDQuNDY5OTIgNC40Njk5NiAxLjY2NjYzIDcuOTE2NiAxLjY2NjYzQzExLjM2MzMgMS42NjY2MyAxNC4xNjY1IDQuNDY5OTIgMTQuMTY2NSA3LjkxNjU3QzE0LjE2NjUgMTEuMzYzMiAxMS4zNjMyIDE0LjE2NjUgNy45MTY2IDE0LjE2NjVaIiBmaWxsPSIjNTY1QTRGIi8+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./src/core/assets/images/tiles-icon.svg":
/*!***********************************************!*\
  !*** ./src/core/assets/images/tiles-icon.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC43NDAxIDAuNjI4MjI4QzEwLjc0MDEgMC4zMzU3MjggMTAuNTAzMSAwLjA5ODgxNTkgMTAuMjEwNiAwLjA5ODgxNTlIMC42MjgyODlDMC4zMzU3ODkgMC4wOTg4MTU5IDAuMDk4ODc3IDAuMzM1NzI4IDAuMDk4ODc3IDAuNjI4MjI4VjEwLjIxMDZDMC4wOTg4NzcgMTAuNTAzMSAwLjMzNTc4OSAxMC43NCAwLjYyODI4OSAxMC43NEgxMC4yMTA2QzEwLjUwMzEgMTAuNzQgMTAuNzQwMSAxMC41MDMxIDEwLjc0MDEgMTAuMjEwNlYwLjYyODIyOFpNOS42ODEyMyA5LjY4MTE3SDEuMTU3N1YxLjE1NzY0SDkuNjgxMjNWOS42ODExN1oiIGZpbGw9IiM3RDdEN0QiLz4NCjxwYXRoIGQ9Ik0yMy45MjI0IDAuNjI4MjI4QzIzLjkyMjQgMC4zMzU3MjggMjMuNjg1NSAwLjA5ODgxNTkgMjMuMzkzIDAuMDk4ODE1OUgxMy44MTA3QzEzLjUxODIgMC4wOTg4MTU5IDEzLjI4MTIgMC4zMzU3MjggMTMuMjgxMiAwLjYyODIyOFYxMC4yMTA2QzEzLjI4MTIgMTAuNTAzMSAxMy41MTgyIDEwLjc0IDEzLjgxMDcgMTAuNzRIMjMuMzkzQzIzLjY4NTUgMTAuNzQgMjMuOTIyNCAxMC41MDMxIDIzLjkyMjQgMTAuMjEwNlYwLjYyODIyOFpNMjIuODYzNiA5LjY4MTE3SDE0LjM0MDFWMS4xNTc2NEgyMi44NjM2VjkuNjgxMTdaIiBmaWxsPSIjN0Q3RDdEIi8+DQo8cGF0aCBkPSJNMTAuNzQwMSAxMy44MTA2QzEwLjc0MDEgMTMuNTE4MSAxMC41MDMxIDEzLjI4MTIgMTAuMjEwNiAxMy4yODEySDAuNjI4Mjg5QzAuMzM1Nzg5IDEzLjI4MTIgMC4wOTg4NzcgMTMuNTE4MSAwLjA5ODg3NyAxMy44MTA2VjIzLjM5M0MwLjA5ODg3NyAyMy42ODU1IDAuMzM1Nzg5IDIzLjkyMjQgMC42MjgyODkgMjMuOTIyNEgxMC4yMTA2QzEwLjUwMzEgMjMuOTIyNCAxMC43NDAxIDIzLjY4NTUgMTAuNzQwMSAyMy4zOTNWMTMuODEwNlpNOS42ODEyMyAyMi44MTA2SDEuMTU3N1YxNC4zNEg5LjY4MTIzVjIyLjgxMDZaIiBmaWxsPSIjN0Q3RDdEIi8+DQo8cGF0aCBkPSJNMjMuOTIyNCAxMy44MTA2QzIzLjkyMjQgMTMuNTE4MSAyMy42ODU1IDEzLjI4MTIgMjMuMzkzIDEzLjI4MTJIMTMuODEwN0MxMy41MTgyIDEzLjI4MTIgMTMuMjgxMiAxMy41MTgxIDEzLjI4MTIgMTMuODEwNlYyMy4zOTNDMTMuMjgxMiAyMy42ODU1IDEzLjUxODIgMjMuOTIyNCAxMy44MTA3IDIzLjkyMjRIMjMuMzkzQzIzLjY4NTUgMjMuOTIyNCAyMy45MjI0IDIzLjY4NTUgMjMuOTIyNCAyMy4zOTNWMTMuODEwNlpNMjIuODYzNiAyMi44MTA2SDE0LjM0MDFWMTQuMzRIMjIuODYzNlYyMi44MTA2WiIgZmlsbD0iIzdEN0Q3RCIvPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./src/core/assets/images/tiles-selected-icon.svg":
/*!********************************************************!*\
  !*** ./src/core/assets/images/tiles-selected-icon.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wLjUgMTQuNUMwLjUgMTMuNjcxNiAxLjE3MTU3IDEzIDIgMTNIOC41QzkuMzI4NDMgMTMgMTAgMTMuNjcxNiAxMCAxNC41VjIxQzEwIDIxLjgyODQgOS4zMjg0MyAyMi41IDguNSAyMi41SDJDMS4xNzE1NyAyMi41IDAuNSAyMS44Mjg0IDAuNSAyMVYxNC41WiIgc3Ryb2tlPSIjMDA5Njg4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0wLjUgMkMwLjUgMS4xNzE1NyAxLjE3MTU3IDAuNSAyIDAuNUg4LjVDOS4zMjg0MyAwLjUgMTAgMS4xNzE1NyAxMCAyVjguNUMxMCA5LjMyODQzIDkuMzI4NDMgMTAgOC41IDEwSDJDMS4xNzE1NyAxMCAwLjUgOS4zMjg0MyAwLjUgOC41VjJaIiBzdHJva2U9IiMwMDk2ODgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTEzIDE0LjVDMTMgMTMuNjcxNiAxMy42NzE2IDEzIDE0LjUgMTNIMjFDMjEuODI4NCAxMyAyMi41IDEzLjY3MTYgMjIuNSAxNC41VjIxQzIyLjUgMjEuODI4NCAyMS44Mjg0IDIyLjUgMjEgMjIuNUgxNC41QzEzLjY3MTYgMjIuNSAxMyAyMS44Mjg0IDEzIDIxVjE0LjVaIiBzdHJva2U9IiMwMDk2ODgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPHBhdGggZD0iTTEzIDJDMTMgMS4xNzE1NyAxMy42NzE2IDAuNSAxNC41IDAuNUgyMUMyMS44Mjg0IDAuNSAyMi41IDEuMTcxNTcgMjIuNSAyVjguNUMyMi41IDkuMzI4NDMgMjEuODI4NCAxMCAyMSAxMEgxNC41QzEzLjY3MTYgMTAgMTMgOS4zMjg0MyAxMyA4LjVWMloiIHN0cm9rZT0iIzAwOTY4OCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./src/core/assets/images/footer-logo.png":
/*!************************************************!*\
  !*** ./src/core/assets/images/footer-logo.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d02588b9faa869a974b8.png";

/***/ }),

/***/ "./src/core/assets/images/header-logo.png":
/*!************************************************!*\
  !*** ./src/core/assets/images/header-logo.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bffa93ff91d82e8c6ac4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__("./node_modules/webpack-hot-middleware/client.js?reload=true&noInfo=true"), __webpack_exec__("./src/client/index.tsx"), __webpack_exec__("./node_modules/babel-polyfill/lib/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBT0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7QUNmQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQVNBO0FBRUE7O0FBaUJBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFGQTtBQWFBOztBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQWxDQTtBQW9DQTtBQUFBO0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBQ0E7QUFFQTs7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBUUE7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBRUE7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUVBOztBQXdCQTtBQWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFvQkE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQVVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBR0E7QUFDQTtBQVFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQXJCQTs7QUEyQkE7QUFDQTtBQUFBO0FBUUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFFQTs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZ0NBO0FBMEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBOztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBSEE7QUFXQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBTUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUErQkE7QUEwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBOztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBSEE7QUFZQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFNQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUZBO0FBT0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWEE7QUFlQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBYUE7QUFBQTtBQVVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQUE7O0FBRUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWlCQTtBQUFBO0FBSUE7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTtBQUFBO0FBSUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUZBO0FBREE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUZBO0FBREE7QUFKQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUFEQTtBQXFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNCQTtBQTZCQTtBQVNBO0FBQUE7QUFNQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFuQkE7QUFDQTtBQUNBOztBQUdBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXZCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUpBO0FBY0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBRUE7QUFDQTs7QUFoREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrREE7O0FBS0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTs7QUFHQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFKQTtBQU1BOztBQUdBOzs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUFBO0FBQUE7QUFBQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBOztBQUlBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBQUE7QUFBQTtBQUFBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBOztBQUhBO0FBR0E7O0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQVpBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY0E7O0FBZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBOztBQUdBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBTkE7QUFRQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7QUFFQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFKQTtBQU1BOztBQUlBOzs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBSEE7O0FBRkE7QUFFQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFlQTs7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBOztBQUVBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFIQTs7QUFGQTtBQUVBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNBOztBQWRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUJBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUZBOztBQUZBO0FBRUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVUE7O0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBOztBQUlBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFOQTtBQVFBOztBQUdBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY2xpZW50L2luZGV4LnRzeCIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL2FwcC50c3giLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9hc3NldHMvaW1hZ2VzL2luZGV4LmpzIiwiQzovVXNlcnMvVXNlci9EZXNrdG9wL9CY0LfRg9GH0LXQvdC40LUvc3NyVHMvc3JjL2NvcmUvY29tcG9uZW50cy9BdXRvY29tcGxldGVJbnB1dC9pbmRleC50c3giLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9jb21wb25lbnRzL0Ryb3Bkb3duL2luZGV4LnRzeCIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL2NvbXBvbmVudHMvSW5wdXRGaWVsZC9pbmRleC50c3giLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9jb21wb25lbnRzL0l0ZW1zQ29udHJvbC9pbmRleC50c3giLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9jb21wb25lbnRzL0xvYWRlci9pbmRleC50c3giLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9jb21wb25lbnRzL1BsdWdTdmcvaW5kZXgudHN4IiwiQzovVXNlcnMvVXNlci9EZXNrdG9wL9CY0LfRg9GH0LXQvdC40LUvc3NyVHMvc3JjL2NvcmUvY29tcG9uZW50cy9Sb3dJdGVtL2luZGV4LnRzeCIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL2NvbXBvbmVudHMvVGlsZUl0ZW0vaW5kZXgudHN4IiwiQzovVXNlcnMvVXNlci9EZXNrdG9wL9CY0LfRg9GH0LXQvdC40LUvc3NyVHMvc3JjL2NvcmUvY29tcG9uZW50cy9pbmRleC50c3giLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9wYWdlL1NlYXJjaFBhZ2UvaW5kZXgudHN4IiwiQzovVXNlcnMvVXNlci9EZXNrdG9wL9CY0LfRg9GH0LXQvdC40LUvc3NyVHMvc3JjL2NvcmUvcGFnZS9pbmRleC50cyIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL3BhZ2UvcmVzdWx0L2luZGV4LnRzeCIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL3N0b3JlL1ByaWNlL2FjdGlvbnMudHMiLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9zdG9yZS9QcmljZS9wcmljZVJlZHVjZXIudHMiLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9zdG9yZS9QcmljZS9wcmljZVR5cGVzLnRzIiwiQzovVXNlcnMvVXNlci9EZXNrdG9wL9CY0LfRg9GH0LXQvdC40LUvc3NyVHMvc3JjL2NvcmUvc3RvcmUvU2VhcmNoTWVkL3NlYXJjaFJlZHVjZXIudHMiLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9zdG9yZS9TZWFyY2hNZWQvc2VhcmNoVHlwZXMudHMiLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9zdG9yZS9TZWFyY2haaXAvYWN0aW9uLnRzIiwiQzovVXNlcnMvVXNlci9EZXNrdG9wL9CY0LfRg9GH0LXQvdC40LUvc3NyVHMvc3JjL2NvcmUvc3RvcmUvU2VhcmNoWmlwL3ppcFJlZHVjZXIudHMiLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9zdG9yZS9TZWFyY2haaXAvemlwVHlwZXMudHMiLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9zdG9yZS9jb3Vwb24vY291cG9uUmVkdWNlci50cyIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL3N0b3JlL2NvdXBvbi9jb3Vwb25UeXBlcy50cyIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL3N0b3JlL2N1cnJlbnRNZWQvYWN0aW9uLnRzIiwiQzovVXNlcnMvVXNlci9EZXNrdG9wL9CY0LfRg9GH0LXQvdC40LUvc3NyVHMvc3JjL2NvcmUvc3RvcmUvY3VycmVudE1lZC9jdXJyZW50UmVkdWNlci50cyIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL3N0b3JlL2N1cnJlbnRNZWQvY3VycmVudFR5cGVzLnRzIiwiQzovVXNlcnMvVXNlci9EZXNrdG9wL9CY0LfRg9GH0LXQvdC40LUvc3NyVHMvc3JjL2NvcmUvc3RvcmUvcm9vdFJlZHVjZXIudHMiLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9zdG9yZS9zdG9yZS50cyIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL3N0b3JlL3RvcE1lZC9hY3Rpb24udHMiLCJDOi9Vc2Vycy9Vc2VyL0Rlc2t0b3Av0JjQt9GD0YfQtdC90LjQtS9zc3JUcy9zcmMvY29yZS9zdG9yZS90b3BNZWQvdG9wTWVkUmVkdWNlci50cyIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3NyYy9jb3JlL3N0b3JlL3RvcE1lZC90b3BNZWRUeXBlcy50cyIsIkM6L1VzZXJzL1VzZXIvRGVza3RvcC/QmNC30YPRh9C10L3QuNC1L3NzclRzL3R5cGVzL2Vudi50cyIsIndlYnBhY2s6Ly9zc3J0cy8uL3NyYy9jb3JlL2Fzc2V0cy9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS5zY3NzPzA0OTYiLCJ3ZWJwYWNrOi8vc3NydHMvLi9zcmMvY29yZS9hc3NldHMvY29tcG9uZW50cy9kcm9wZG93bi5zY3NzPzRiOTMiLCJ3ZWJwYWNrOi8vc3NydHMvLi9zcmMvY29yZS9hc3NldHMvY29tcG9uZW50cy9mb290ZXIuc2Nzcz8zMjQxIiwid2VicGFjazovL3NzcnRzLy4vc3JjL2NvcmUvYXNzZXRzL2NvbXBvbmVudHMvaW5wdXRGaWVsZC5zY3NzPzZmNzAiLCJ3ZWJwYWNrOi8vc3NydHMvLi9zcmMvY29yZS9hc3NldHMvY29tcG9uZW50cy9pdGVtc2NvbnRyb2wuc2Nzcz9iNzcyIiwid2VicGFjazovL3NzcnRzLy4vc3JjL2NvcmUvYXNzZXRzL2NvbXBvbmVudHMvbG9hZGVyLnNjc3M/MGRmNyIsIndlYnBhY2s6Ly9zc3J0cy8uL3NyYy9jb3JlL2Fzc2V0cy9jb21wb25lbnRzL3BsdWdzdmcuc2Nzcz9hZWE1Iiwid2VicGFjazovL3NzcnRzLy4vc3JjL2NvcmUvYXNzZXRzL2NvbXBvbmVudHMvcm93aXRlbS5zY3NzPzIyMzciLCJ3ZWJwYWNrOi8vc3NydHMvLi9zcmMvY29yZS9hc3NldHMvY29tcG9uZW50cy90aWxlaXRlbXMuc2Nzcz8wMWNkIiwid2VicGFjazovL3NzcnRzLy4vc3JjL2NvcmUvYXNzZXRzL3BhZ2VzL3Jlc3VsdC5zY3NzPzhlN2EiLCJ3ZWJwYWNrOi8vc3NydHMvLi9zcmMvY29yZS9hc3NldHMvcGFnZXMvc2VhcmNoLnNjc3M/NjllMCIsIndlYnBhY2s6Ly9zc3J0cy8uL3NyYy9jb3JlL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OTllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3JlbmRlciwgaHlkcmF0ZX0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xuaW1wb3J0IHsgQ2xpZW50QXBwIH0gZnJvbSBcIi4uL2NvcmUvYXBwXCI7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2NvcmUvc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgbG9hZGFibGVSZWFkeSB9IGZyb20gXCJAbG9hZGFibGUvY29tcG9uZW50XCI7XG4vLyBSZWFjdERPTS5oeWRyYXRlKFxuLy8gICA8Q29va2llc1Byb3ZpZGVyPlxuLy8gICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbi8vICAgICAgIDxCcm93c2VyUm91dGVyIGZvcmNlUmVmcmVzaD17dHJ1ZX0+XG4vLyAgICAgICAgICAgPENsaWVudEFwcCAvPlxuLy8gICAgICAgPC9Ccm93c2VyUm91dGVyPlxuLy8gICA8L1Byb3ZpZGVyPlxuLy8gICA8L0Nvb2tpZXNQcm92aWRlcj5cbi8vICxcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4vLyApO1xuXG5jb25zdCByZW5kZXJBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHJvb3RDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbiAgY29uc3QgcmVuZGVyTWV0aG9kID0gbW9kdWxlLmhvdCAgPyByZW5kZXIgOiBoeWRyYXRlO1xuXG4gIHJlbmRlck1ldGhvZChcbiAgICAgIDxDb29raWVzUHJvdmlkZXI+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIDxCcm93c2VyUm91dGVyIGZvcmNlUmVmcmVzaD17dHJ1ZX0+XG4gICAgICAgICAgICA8Q2xpZW50QXBwIC8+XG4gICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgPC9Db29raWVzUHJvdmlkZXI+LFxuICByb290Q29udGVudFxuICApXG59O1xuXG5sb2FkYWJsZVJlYWR5KCgpID0+IHtcbiAgcmVuZGVyQXBwKCk7XG59KVxuXG5pZihtb2R1bGUuaG90KXtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1Jlc3VsdFBhZ2UsIFNlYXJjaFBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MnO1xuXG5cblxuZXhwb3J0IGNvbnN0IENsaWVudEFwcDpSZWFjdC5GQyA9KCkgPT4ge1xuICByZXR1cm4oXG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8UmVkaXJlY3QgZnJvbT0nLycgdG89Jy9zZWFyY2gnIGV4YWN0Lz5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9zZWFyY2gnIGV4YWN0IGNvbXBvbmVudD17U2VhcmNoUGFnZX0vPlxuICAgICAgICA8Um91dGUgcGF0aD0nL3Jlc3VsdHMnIGV4YWN0ICBjb21wb25lbnQ9e1Jlc3VsdFBhZ2V9Lz5cbiAgICAgIDwvU3dpdGNoPlxuICApXG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVGlsZXNTZWxlY3RlZEljb25TdmcgPSBleHBvcnRzLlRpbGVzSWNvblN2ZyA9IGV4cG9ydHMuUm93c1NlbGVjdGVkSWNvblN2ZyA9IGV4cG9ydHMuUm93c0ljb25TdmcgPSBleHBvcnRzLkRyb3Bkb3duQ2xvc2VTdmcgPSBleHBvcnRzLkRyb3Bkb3duT3BlblN2ZyA9IGV4cG9ydHMuU2VhcmNoSWNvblN2ZyA9IGV4cG9ydHMuTG9jYXRpb25JY29uU3ZnID0gZXhwb3J0cy5Db3B5cmlnaHRTeW1ib2xTdmcgPSBleHBvcnRzLkhlYWRlckxvZ29JbWFnZSA9IGV4cG9ydHMuRm9vdGVyTG9nb0ltYWdlID0gdm9pZCAwO1xyXG52YXIgZm9vdGVyX2xvZ29fcG5nXzEgPSByZXF1aXJlKFwiLi9mb290ZXItbG9nby5wbmdcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkZvb3RlckxvZ29JbWFnZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KGZvb3Rlcl9sb2dvX3BuZ18xKS5kZWZhdWx0OyB9IH0pO1xyXG52YXIgaGVhZGVyX2xvZ29fcG5nXzEgPSByZXF1aXJlKFwiLi9oZWFkZXItbG9nby5wbmdcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkhlYWRlckxvZ29JbWFnZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KGhlYWRlcl9sb2dvX3BuZ18xKS5kZWZhdWx0OyB9IH0pO1xyXG52YXIgY29weXJpZ2h0X3N5bWJvbF9zdmdfMSA9IHJlcXVpcmUoXCIuL2NvcHlyaWdodC1zeW1ib2wuc3ZnXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb3B5cmlnaHRTeW1ib2xTdmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChjb3B5cmlnaHRfc3ltYm9sX3N2Z18xKS5kZWZhdWx0OyB9IH0pO1xyXG52YXIgbG9jYXRpb25faWNvbl9zdmdfMSA9IHJlcXVpcmUoXCIuL2xvY2F0aW9uLWljb24uc3ZnXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJMb2NhdGlvbkljb25TdmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChsb2NhdGlvbl9pY29uX3N2Z18xKS5kZWZhdWx0OyB9IH0pO1xyXG52YXIgc2VhcmNoX2ljb25fc3ZnXzEgPSByZXF1aXJlKFwiLi9zZWFyY2gtaWNvbi5zdmdcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNlYXJjaEljb25TdmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChzZWFyY2hfaWNvbl9zdmdfMSkuZGVmYXVsdDsgfSB9KTtcclxudmFyIGRyb3Bkb3duX29wZW5fc3ZnXzEgPSByZXF1aXJlKFwiLi9kcm9wZG93bi1vcGVuLnN2Z1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRHJvcGRvd25PcGVuU3ZnXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoZHJvcGRvd25fb3Blbl9zdmdfMSkuZGVmYXVsdDsgfSB9KTtcclxudmFyIGRyb3Bkb3duX2Nsb3NlX3N2Z18xID0gcmVxdWlyZShcIi4vZHJvcGRvd24tY2xvc2Uuc3ZnXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEcm9wZG93bkNsb3NlU3ZnXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoZHJvcGRvd25fY2xvc2Vfc3ZnXzEpLmRlZmF1bHQ7IH0gfSk7XHJcbnZhciByb3dzX2ljb25fc3ZnXzEgPSByZXF1aXJlKFwiLi9yb3dzLWljb24uc3ZnXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3dzSWNvblN2Z1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KHJvd3NfaWNvbl9zdmdfMSkuZGVmYXVsdDsgfSB9KTtcclxudmFyIHJvd3Nfc2VsZWN0ZWRfaWNvbl9zdmdfMSA9IHJlcXVpcmUoXCIuL3Jvd3Mtc2VsZWN0ZWQtaWNvbi5zdmdcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvd3NTZWxlY3RlZEljb25TdmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChyb3dzX3NlbGVjdGVkX2ljb25fc3ZnXzEpLmRlZmF1bHQ7IH0gfSk7XHJcbnZhciB0aWxlc19pY29uX3N2Z18xID0gcmVxdWlyZShcIi4vdGlsZXMtaWNvbi5zdmdcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlRpbGVzSWNvblN2Z1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KHRpbGVzX2ljb25fc3ZnXzEpLmRlZmF1bHQ7IH0gfSk7XHJcbnZhciB0aWxlc19zZWxlY3RlZF9pY29uX3N2Z18xID0gcmVxdWlyZShcIi4vdGlsZXMtc2VsZWN0ZWQtaWNvbi5zdmdcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlRpbGVzU2VsZWN0ZWRJY29uU3ZnXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQodGlsZXNfc2VsZWN0ZWRfaWNvbl9zdmdfMSkuZGVmYXVsdDsgfSB9KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7XHJcbiAgRkMsXHJcbiAgS2V5Ym9hcmRFdmVudCxcclxuICB1c2VDYWxsYmFjayxcclxuICB1c2VSZWYsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZU1lbW8sXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSBcInJlYWN0LWF1dG9jb21wbGV0ZVwiO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLnNjc3NcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgYXV0b2NvbXBsZXRlOiBBcnJheTx7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gIH0+O1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBzZXRWYWx1ZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgb25TdWJtaXQ/OiBhbnk7XHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGdyb3VwaW5nPzpib29sZWFuO1xyXG4gIGZpbHRlcmVkPzphbnk7XHJcbiAgc2V0RmlsdGVyZWQ/OmFueVxyXG59O1xyXG5cclxuY29uc3QgQXV0b2NvbXBsZXRlSW5wdXQ6IEZDPFByb3BzPiA9ICh7XHJcbiAgYXV0b2NvbXBsZXRlID0gW10sXHJcbiAgY2xhc3NlcyxcclxuICB2YWx1ZSxcclxuICBzZXRWYWx1ZSxcclxuICBwbGFjZWhvbGRlciA9IFwiXCIsXHJcbiAgb25TdWJtaXQsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgZ3JvdXBpbmcsXHJcbn0pID0+IHtcclxuICBjb25zdCBlbnRlckhhbmRsZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKG9uU3VibWl0KSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBvblN1Ym1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBbc2hvdyxzZXRTaG93XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKChlOmFueSxpbmRleDphbnkpID0+IHtcclxuICAgIGNvbnN0IGxhYmVsczphbnkgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhYmVsJykpW2luZGV4XTtcclxuICAgIHNldFZhbHVlKGxhYmVscy5pbm5lclRleHQpO1xyXG4gICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgfSxbc2V0VmFsdWUsc2hvd10pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgIGlmKGdyb3VwaW5nID09PSB0cnVlKXtcclxuICAgIGNvbnN0IGZpbHRlcmluZzphbnkgPSBhdXRvY29tcGxldGUuZmlsdGVyKChpdGVtczphbnkpID0+IGl0ZW1zLmxhYmVsLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpO1xyXG4gICAgY29uc3QgYXJyID0gWy4uLm5ldyBTZXQoZmlsdGVyaW5nLm1hcCgoZTphbnkpID0+ICh7X2lkOmUuX2lkfSkpKV1cclxuICAgIGNvbnN0IGZpbHRlcmluZ0dyb3VwID0gYXV0b2NvbXBsZXRlLmZpbHRlcigoZTphbnkpID0+IGFyci5zb21lKCh4OmFueSkgPT4gZS5faWQgPT09IHguX2lkKSlcclxuICAgIHJldHVybiBmaWx0ZXJpbmdHcm91cDtcclxuICB9ZWxzZXtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgfSxbYXV0b2NvbXBsZXRlLHZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtOmFueSxpbmRleDphbnkpID0+ICg8ZGl2IGtleT17aXRlbS5sYWJlbC5sYWJlbH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJhdXRvY29tcGxldGVfX2l0ZW1cIn0gb25DbGljaz17KGUpID0+IG9uQ2xpY2soZSxpbmRleCl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIiA+e2l0ZW0ubGFiZWwubGFiZWx9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuID4oe2l0ZW0ubGFiZWwudHlwZX0pPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+KSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApXHJcbiAgICAgIFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgIGdldEl0ZW1WYWx1ZT17KGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gZ3JvdXBpbmcgPT09IHRydWUgPyBpdGVtLmxhYmVsLmxhYmVsIDogaXRlbS5sYWJlbFxyXG4gICAgICB9fVxyXG4gICAgICBpdGVtcz17YXV0b2NvbXBsZXRlfVxyXG4gICAgICBzaG91bGRJdGVtUmVuZGVyPXsoaXRlbTogYW55LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBncm91cGluZyA9PT0gdHJ1ZSA/IGl0ZW0ubGFiZWwubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkgOiBpdGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpO1xyXG5cclxuICAgICAgfX1cclxuICAgICAgcmVuZGVySXRlbT17KGl0ZW0saXNIaWdobGlnaHRlZCk9Pmdyb3VwaW5nID09PSB0cnVlID8gKDxkaXYgY2xhc3NOYW1lPVwibm9uZVwiPjwvZGl2PikgOiA8ZGl2IGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZVwiID48ZGl2IGNsYXNzTmFtZT1cImF1dG9jb21wbGV0ZV9faXRlbVwiPntpdGVtLmxhYmVsfTwvZGl2PjwvZGl2Pn1cclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICBtZW51U3R5bGU9e2dyb3VwaW5nID09PSB0cnVlID8ge2Rpc3BsYXk6XCJub25lXCJ9IDoge2JvcmRlclJhZGl1czpcIjNweFwiLGJveFNoYWRvdzpcIjAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsbWFyZ2luVG9wOlwiMnB4XCIsekluZGV4OlwiMlwiLG92ZXJmbG93OlwiYXV0b1wiLHBvc2l0aW9uOidhYnNvbHV0ZScsYmFja2dyb3VuZDoncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpJyxtYXhIZWlnaHQ6XCIzMDBweFwiLGxlZnQ6XCI1cHhcIix0b3A6XCI1MHB4XCIsd2lkdGg6XCI2NjFweFwifX1cclxuICAgICAgb25DaGFuZ2U9eyhlOiBhbnkpID0+IHtcclxuICAgICAgICBzZXRTaG93KHRydWUpXHJcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICBvblNlbGVjdD17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBpZihncm91cGluZyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRWYWx1ZSh2YWx1ZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICByZW5kZXJJbnB1dD17KHByb3BzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgIG9uS2V5RG93bj17ZW50ZXJIYW5kbGVyfVxyXG4gICAgICAgICAgICBtYXhMZW5ndGg9ezMwfVxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICAge2dyb3VwaW5nID09PSB0cnVlID8gPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+eyBzaG93ID09PSB0cnVlID8gcmVuZGVyTGlzdCgpIDogbnVsbH08L2Rpdj4gOiBudWxsfVxyXG4gIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRvY29tcGxldGVJbnB1dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERyb3Bkb3duQ2xvc2VTdmcsIERyb3Bkb3duT3BlblN2ZyB9IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi8uLi9hc3NldHMvY29tcG9uZW50cy9kcm9wZG93bi5zY3NzXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGl0ZW1zOiBBcnJheTxzdHJpbmc+IHwgYW55O1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgY2hvc2VuPzogYW55O1xyXG4gIHNldENob3Nlbj86IGFueTtcclxuICBsYWJlbD86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IERyb3Bkb3duOiBGQzxQcm9wcz4gPSAoeyBpdGVtcywgY2xhc3NlcywgY2hvc2VuLCBzZXRDaG9zZW4sIGxhYmVsIH0pID0+IHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoaXRlbXNbMF0pIHtcclxuICAvLyAgICAgc2V0Q2hvc2VuKGl0ZW1zWzBdKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbaXRlbXNdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoY2hvc2VuKXtcclxuICAgICAgc2V0Q2hvc2VuKGl0ZW1zLmZpbmQoKGl0ZW06YW55KSA9PiBjaG9zZW4gPT09IGl0ZW0pID09PSBjaG9zZW4gPyBjaG9zZW4gOiBpdGVtc1swXSApO1xyXG4gICAgfVxyXG4gIH0sW2Nob3NlbiwgaXRlbXNdKVxyXG4gIGNvbnN0IG9uSXRlbUNsaWNrID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0Q2hvc2VuKG5hbWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGljb24gPSBpc09wZW4gPyAoXHJcbiAgICA8aW1nIHNyYz17RHJvcGRvd25DbG9zZVN2Z30gYWx0PVwiXCIgLz5cclxuICApIDogKFxyXG4gICAgPGltZyBzcmM9e0Ryb3Bkb3duT3BlblN2Z30gYWx0PVwiXCIgLz5cclxuICApO1xyXG5cclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGNsaWNrTGlzdGVuZXIgPSB1c2VDYWxsYmFjaygoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgaWYgKCEocmVmLmN1cnJlbnQhIGFzIGFueSk/LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0xpc3RlbmVyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0xpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgfSwgW2NsaWNrTGlzdGVuZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24gJHtjbGFzc2VzfWB9XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XHJcbiAgICA+XHJcbiAgICAgIDxsYWJlbD57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9faGVhZGVyXCI+XHJcbiAgICAgICAgPHA+e2Nob3Nlbn08L3A+XHJcblxyXG4gICAgICAgIHtpY29ufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9faXRlbXNcIj5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duX19pdGVtXCJcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uSXRlbUNsaWNrKGl0ZW0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29weXJpZ2h0U3ltYm9sU3ZnLCBGb290ZXJMb2dvSW1hZ2UgfSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2NvbXBvbmVudHMvZm9vdGVyLnNjc3NcIjtcclxuXHJcbmNvbnN0IEZvb3RlcjogRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX3Jvd1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e0Zvb3RlckxvZ29JbWFnZX0gY2xhc3NOYW1lPVwiZm9vdGVyX19sb2dvXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jb3B5cmlnaHQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Q29weXJpZ2h0U3ltYm9sU3ZnfSBjbGFzc05hbWU9XCJmb290ZXJfX2NvcHlyaWdodC1pY29uXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX190ZXh0XCI+IE9wVGltZVJ4IEFsbCByaWdodHMgcmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl9fcm93XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJfX3RleHRcIj5Db250YWN0IFVzPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX19udW1iZXJcIj4rMTExIDIyMjEgMzMzMTQ8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1dG9jb21wbGV0ZUlucHV0IGZyb20gXCIuLi9BdXRvY29tcGxldGVJbnB1dFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2NvbXBvbmVudHMvaW5wdXRGaWVsZC5zY3NzXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNsYXNzZXM/OiBzdHJpbmc7XHJcbiAgYXV0b2NvbXBsZXRlQ2xhc3Nlcz86IHN0cmluZztcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGljb25Vcmw/OiBzdHJpbmc7XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIGhhdmVTdWJtaXQ/OiBib29sZWFuO1xyXG4gIGJ1dHRvblRleHQ/OiBzdHJpbmc7XHJcbiAgb25TdWJtaXQ/OiBhbnk7XHJcbiAgLy8gYXV0b2NvbXBsZXRlPzogQXJyYXk8e1xyXG4gIC8vICAgbGFiZWw6IHN0cmluZztcclxuICAvLyB9PjtcclxuICBhdXRvY29tcGxldGU6IGFueTtcclxuICBlcnJvckhhbmRsZT86IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gIGdyb3VwaW5nPzpib29sZWFuO1xyXG4gIGZpbHRlcmVkPzphbnk7XHJcbiAgc2V0RmlsdGVyZWQ/OmFueVxyXG59O1xyXG5cclxuY29uc3QgSW5wdXRGaWVsZDogRkM8UHJvcHM+ID0gKHtcclxuICBjbGFzc2VzLFxyXG4gIGF1dG9jb21wbGV0ZUNsYXNzZXMsXHJcbiAgcGxhY2Vob2xkZXIgPSBcIlwiLFxyXG4gIHZhbHVlLFxyXG4gIGljb25VcmwsXHJcbiAgb25DaGFuZ2UsXHJcbiAgaGF2ZVN1Ym1pdCA9IGZhbHNlLFxyXG4gIGJ1dHRvblRleHQsXHJcbiAgb25TdWJtaXQsXHJcbiAgYXV0b2NvbXBsZXRlID0gW10sXHJcbiAgZXJyb3JIYW5kbGUsXHJcbiAgZXJyb3IsXHJcbiAgc2VsZWN0ZWQsXHJcbiAgZ3JvdXBpbmcsXHJcbiAgZmlsdGVyZWQsXHJcbiAgc2V0RmlsdGVyZWQsXHJcbn0pID0+IHtcclxuICBjb25zdCBzdWJtaXRBY3Rpb24gPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKG9uU3VibWl0KSBvblN1Ym1pdCh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhHcm93OiAxLCBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIgfX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BpbnB1dC1maWVsZCAke2NsYXNzZXN9ICR7XHJcbiAgICAgICAgICBlcnJvckhhbmRsZSA9PT0gdHJ1ZSA/IFwiZXJyb3JcIiA6IGNsYXNzZXNcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRfX3Jvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZF9faWNvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtpY29uVXJsfSBjbGFzc05hbWU9XCJpbnB1dC1maWVsZF9faWNvblwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVJbnB1dFxyXG4gICAgICAgICAgICAgIGZpbHRlcmVkPXtmaWx0ZXJlZH1cclxuICAgICAgICAgICAgICBzZXRGaWx0ZXJlZD17c2V0RmlsdGVyZWR9XHJcbiAgICAgICAgICAgICAgZ3JvdXBpbmc9e2dyb3VwaW5nfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICBjbGFzc2VzPXtcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZUNsYXNzZXMgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICA/IFwiaW5wdXQtZmllbGRfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgOiBhdXRvY29tcGxldGVDbGFzc2VzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBzZXRWYWx1ZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3N1Ym1pdEFjdGlvbn1cclxuICAgICAgICAgICAgICBhdXRvY29tcGxldGU9e2F1dG9jb21wbGV0ZX1cclxuICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtoYXZlU3VibWl0ICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRfX3N1Ym1pdC1idXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdWJtaXRBY3Rpb24odmFsdWUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YnV0dG9uVGV4dH1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0RmllbGQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCIuLlwiO1xyXG5cclxuaW1wb3J0IHsgUm93c0ljb25TdmcsIFJvd3NTZWxlY3RlZEljb25TdmcsIFRpbGVzSWNvblN2ZywgVGlsZXNTZWxlY3RlZEljb25TdmcgfSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9hc3NldHMvY29tcG9uZW50cy9pdGVtc2NvbnRyb2wuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBzb3J0aW5nSXRlbXM6IEFycmF5PHN0cmluZz47XHJcbiAgbW9kZT86IElURU1TX0NPTlRST0xfTU9ERTtcclxuICBhY3Rpb246IChzZWxlY3RlZE1vZGU6IElURU1TX0NPTlRST0xfTU9ERSkgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIElURU1TX0NPTlRST0xfTU9ERSB7XHJcbiAgUk9XUyA9IFwiUk9XU1wiLFxyXG4gIFRJTEVTID0gXCJUSUxFU1wiXHJcbn1cclxuXHJcbmNvbnN0IEl0ZW1zQ29udHJvbDogRkM8UHJvcHM+ID0gKHsgc29ydGluZ0l0ZW1zLCBtb2RlID0gSVRFTVNfQ09OVFJPTF9NT0RFLlJPV1MsIGFjdGlvbiB9KSA9PiB7XHJcbiAgbGV0IGJ1dHRvbnM7XHJcblxyXG4gIHN3aXRjaCAobW9kZSkge1xyXG4gICAgY2FzZSBJVEVNU19DT05UUk9MX01PREUuUk9XUzoge1xyXG4gICAgICBidXR0b25zID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXMtY29udHJvbF9fYnV0dG9ucy13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGFjdGlvbihJVEVNU19DT05UUk9MX01PREUuUk9XUyl9IGNsYXNzTmFtZT1cIml0ZW1zLWNvbnRyb2xfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17Um93c1NlbGVjdGVkSWNvblN2Z30gY2xhc3NOYW1lPVwiaXRlbXMtY29udHJvbF9faWNvblwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gYWN0aW9uKElURU1TX0NPTlRST0xfTU9ERS5USUxFUyl9IGNsYXNzTmFtZT1cIml0ZW1zLWNvbnRyb2xfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17VGlsZXNJY29uU3ZnfSBjbGFzc05hbWU9XCJpdGVtcy1jb250cm9sX19pY29uXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJ1dHRvbnMgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jb250cm9sX19idXR0b25zLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gYWN0aW9uKElURU1TX0NPTlRST0xfTU9ERS5ST1dTKX0gY2xhc3NOYW1lPVwiaXRlbXMtY29udHJvbF9fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtSb3dzSWNvblN2Z30gY2xhc3NOYW1lPVwiaXRlbXMtY29udHJvbF9faWNvblwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gYWN0aW9uKElURU1TX0NPTlRST0xfTU9ERS5USUxFUyl9IGNsYXNzTmFtZT1cIml0ZW1zLWNvbnRyb2xfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17VGlsZXNTZWxlY3RlZEljb25Tdmd9IGNsYXNzTmFtZT1cIml0ZW1zLWNvbnRyb2xfX2ljb25cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jb250cm9sXCI+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNvbnRyb2xfX3Jvd1wiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIml0ZW1zLWNvbnRyb2xfX3NvcnRpbmctbGFiZWxcIj5QcmljZSBzb3J0aW5nOjwvcD5cclxuICAgICAgICA8RHJvcGRvd24gaXRlbXM9e3NvcnRpbmdJdGVtc30gY2xhc3Nlcz1cIml0ZW1zLWNvbnRyb2xfX2Ryb3Bkb3duXCIgLz5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICB7YnV0dG9uc31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtc0NvbnRyb2w7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZGVyLnNjc3NcIjtcclxuXHJcbmNvbnN0IExvYWRlcjogYW55ID0gKCkgPT4ge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPkxvYWRpbmc8L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jb21wb25lbnRzL3BsdWdzdmcuc2Nzc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjbGFzc2VzPzogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYWx0Pzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgUGx1ZzogRkM8UHJvcHM+ID0gKHsgY2xhc3NlcyA9IFwiXCIsIHVybCwgdGl0bGUsIGFsdCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdFNWR1xyXG4gICAgICBzcmM9e3VybH1cclxuICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgIGFyaWEtbGFiZWw9e2FsdCB8fCBgJHt0aXRsZX0gc3ZnYH1cclxuICAgICAgY2xhc3NOYW1lPXtgcGx1Zy1zdmcgJHtjbGFzc2VzfWB9XHJcbiAgICAgIGxvYWRpbmc9eygpID0+IDxkaXYgY2xhc3NOYW1lPXtgcGx1Zy1zdmctbG9hZGluZyAke2NsYXNzZXN9YH0gLz59XHJcbiAgICAgIGZhbGxiYWNrPXsoKSA9PiA8ZGl2IGNsYXNzTmFtZT17YHBsdWctc3ZnLWVycm9yICR7Y2xhc3Nlc31gfSAvPn1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsdWc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiO1xyXG5pbXBvcnQgXCIuLi8uLi9hc3NldHMvY29tcG9uZW50cy9yb3dpdGVtLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHthZHJlc3N9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzL2Vudic7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwcmljZTogc3RyaW5nO1xyXG4gIGluZGV4OiBudW1iZXI7XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgb25DbGljazogKG51bTogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGRpc3RhbmNlOiBzdHJpbmc7XHJcblxyXG4gIHJldGFpbGVySWQ/OiBzdHJpbmc7XHJcbiAgcmV0YWlsZXJOYW1lPzogc3RyaW5nO1xyXG4gIHJldGFpbGVyTG9nbz86IHtcclxuICAgIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgfTtcclxuICBxdWFudGl0eURpc3BsYXk/OiBzdHJpbmc7XHJcbiAgcHJpY2VDdXJyZW5jeT86IHN0cmluZztcclxuICBwYm1JZD86IHN0cmluZztcclxuICBwYXJ0bmVySWQ/OiBudWxsO1xyXG4gIG5kYz86IHN0cmluZztcclxuICBsb3dQcmljZUFtb3VudD86IHN0cmluZztcclxuICBsb2NhdGlvblBob25lTnVtYmVyPzogc3RyaW5nO1xyXG4gIGxvY2F0aW9uSWQ/OiBzdHJpbmc7XHJcbiAgaXNPdGNEcnVnPzogYm9vbGVhbjtcclxuICBoaWdoUHJpY2VBbW91bnQ/OiBudWxsO1xyXG4gIGZvcm11bGF0aW9uSWQ/OiBzdHJpbmc7XHJcbiAgZHJ1Z1VybFNsdWc/OiBzdHJpbmc7XHJcbiAgZHJ1Z05hbWU/OiBzdHJpbmc7XHJcbiAgZHJ1Z0lkPzogYW55O1xyXG4gIGRvc2FnZURpc3BsYXk/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBSb3dJdGVtOiBGQzxQcm9wcz4gPSAoe1xyXG4gIG5hbWUsXHJcbiAgcHJpY2UsXHJcbiAgaW5kZXgsXHJcbiAgb25DbGljayxcclxuICBsYWJlbCxcclxuICBkaXN0YW5jZSxcclxuXHJcbiAgcmV0YWlsZXJJZCxcclxuICByZXRhaWxlck5hbWUsXHJcbiAgcmV0YWlsZXJMb2dvLFxyXG4gIHF1YW50aXR5RGlzcGxheSxcclxuICBwcmljZUN1cnJlbmN5LFxyXG4gIHBibUlkLFxyXG4gIHBhcnRuZXJJZCxcclxuICBuZGMsXHJcbiAgbG93UHJpY2VBbW91bnQsXHJcbiAgbG9jYXRpb25QaG9uZU51bWJlcixcclxuICBsb2NhdGlvbklkLFxyXG4gIGlzT3RjRHJ1ZyxcclxuICBoaWdoUHJpY2VBbW91bnQsXHJcbiAgZm9ybXVsYXRpb25JZCxcclxuICBkcnVnVXJsU2x1ZyxcclxuICBkcnVnTmFtZSxcclxuICBkcnVnSWQsXHJcbiAgZG9zYWdlRGlzcGxheSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt1cmwsIHNldFVybF06IGFueSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVzXSA9IHVzZUNvb2tpZXMoKTtcclxuICBjb25zdCB7IHN0YXRlIH06IGFueSA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgcGF5bG9hZCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmV0YWlsZXJJZCxcclxuICAgICAgcmV0YWlsZXJOYW1lLFxyXG4gICAgICByZXRhaWxlckxvZ286IHtcclxuICAgICAgICBpbWFnZVVybDogcmV0YWlsZXJMb2dvPy5pbWFnZVVybCxcclxuICAgICAgfSxcclxuICAgICAgcXVhbnRpdHlEaXNwbGF5LFxyXG4gICAgICBwcmljZUN1cnJlbmN5LFxyXG4gICAgICBwYm1JZCxcclxuICAgICAgcGFydG5lcklkLFxyXG4gICAgICBuZGMsXHJcbiAgICAgIGxvd1ByaWNlQW1vdW50LFxyXG4gICAgICBsb2NhdGlvblBob25lTnVtYmVyLFxyXG4gICAgICBsb2NhdGlvbklkLFxyXG4gICAgICBpc090Y0RydWcsXHJcbiAgICAgIGhpZ2hQcmljZUFtb3VudCxcclxuICAgICAgZm9ybXVsYXRpb25JZCxcclxuICAgICAgZHJ1Z1VybFNsdWcsXHJcbiAgICAgIGRydWdOYW1lLFxyXG4gICAgICBkcnVnSWQsXHJcbiAgICAgIGRvc2FnZURpc3BsYXksXHJcbiAgICB9O1xyXG4gIH0sIFtcclxuICAgIHJldGFpbGVySWQsXHJcbiAgICByZXRhaWxlck5hbWUsXHJcbiAgICByZXRhaWxlckxvZ28sXHJcbiAgICBxdWFudGl0eURpc3BsYXksXHJcbiAgICBwcmljZUN1cnJlbmN5LFxyXG4gICAgcGJtSWQsXHJcbiAgICBwYXJ0bmVySWQsXHJcbiAgICBuZGMsXHJcbiAgICBsb3dQcmljZUFtb3VudCxcclxuICAgIGxvY2F0aW9uUGhvbmVOdW1iZXIsXHJcbiAgICBsb2NhdGlvbklkLFxyXG4gICAgaXNPdGNEcnVnLFxyXG4gICAgaGlnaFByaWNlQW1vdW50LFxyXG4gICAgZm9ybXVsYXRpb25JZCxcclxuICAgIGRydWdVcmxTbHVnLFxyXG4gICAgZHJ1Z05hbWUsXHJcbiAgICBkcnVnSWQsXHJcbiAgICBkb3NhZ2VEaXNwbGF5LFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBMaW5rQ291cG9uID0gKCkgPT4ge1xyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IGAke2FkcmVzc30vYXBpL2NvdXBvbi9nZXRgLFxyXG4gICAgICBkYXRhOntcclxuICAgICAgICBkYXRhOiBwYXlsb2FkLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXNbJ3Rva2VuJ119YCwgXHJcbiAgICAgICAgICAneC1hY2NvdW50LWlkJzpjb29raWVzWydhY2NvdW50J11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4oKHJlczphbnkpID0+IHtcclxuICAgICAgICBzZXRVcmwocmVzLmRhdGEudXJsKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYodXJsICYmIExpbmtDb3Vwb24pe1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgfVxyXG4gIH0sIFt1cmxdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaXRlbVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJvdy1pdGVtX19uYW1lXCI+e25hbWV9PC9wPlxyXG4gICAgICAgIHtsYWJlbCAmJiA8cCBjbGFzc05hbWU9XCJyb3ctaXRlbV9fbGFiZWxcIj57bGFiZWx9PC9wPn1cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJyb3ctaXRlbV9fbGFiZWxcIj57ZGlzdGFuY2V9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaXRlbV9fY29udGVudFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJvdy1pdGVtX19wcmljZVwiPntwcmljZX08L3A+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicm93LWl0ZW1fX2J1dHRvblwiIG9uQ2xpY2s9e0xpbmtDb3Vwb259PlxyXG4gICAgICAgICAgR2V0IENvdXBvblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3dJdGVtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IFwiLi4vLi4vYXNzZXRzL2NvbXBvbmVudHMvdGlsZWl0ZW1zLnNjc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge2FkcmVzc30gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMvZW52JztcclxudHlwZSBQcm9wcyA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcHJpY2U6IHN0cmluZztcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s6IChudW06IG51bWJlcikgPT4gdm9pZDtcclxuICBkaXN0YW5jZT86IGFueTtcclxuXHJcbiAgcmV0YWlsZXJJZD86IHN0cmluZztcclxuICByZXRhaWxlck5hbWU/OiBzdHJpbmc7XHJcbiAgcmV0YWlsZXJMb2dvPzoge1xyXG4gICAgaW1hZ2VVcmw6IHN0cmluZztcclxuICB9O1xyXG4gIHF1YW50aXR5RGlzcGxheT86IHN0cmluZztcclxuICBwcmljZUN1cnJlbmN5Pzogc3RyaW5nO1xyXG4gIHBibUlkPzogc3RyaW5nO1xyXG4gIHBhcnRuZXJJZD86IG51bGw7XHJcbiAgbmRjPzogc3RyaW5nO1xyXG4gIGxvd1ByaWNlQW1vdW50Pzogc3RyaW5nO1xyXG4gIGxvY2F0aW9uUGhvbmVOdW1iZXI/OiBzdHJpbmc7XHJcbiAgbG9jYXRpb25JZD86IHN0cmluZztcclxuICBpc090Y0RydWc/OiBib29sZWFuO1xyXG4gIGhpZ2hQcmljZUFtb3VudD86IG51bGw7XHJcbiAgZm9ybXVsYXRpb25JZD86IHN0cmluZztcclxuICBkcnVnVXJsU2x1Zz86IHN0cmluZztcclxuICBkcnVnTmFtZT86IHN0cmluZztcclxuICBkcnVnSWQ/OiBhbnk7XHJcbiAgZG9zYWdlRGlzcGxheT86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFRpbGVJdGVtOiBGQzxQcm9wcz4gPSAoe1xyXG4gIG5hbWUsXHJcbiAgcHJpY2UsXHJcbiAgaW5kZXgsXHJcbiAgb25DbGljayxcclxuICBsYWJlbCxcclxuICBkaXN0YW5jZSxcclxuXHJcbiAgcmV0YWlsZXJJZCxcclxuICByZXRhaWxlck5hbWUsXHJcbiAgcmV0YWlsZXJMb2dvLFxyXG4gIHF1YW50aXR5RGlzcGxheSxcclxuICBwcmljZUN1cnJlbmN5LFxyXG4gIHBibUlkLFxyXG4gIHBhcnRuZXJJZCxcclxuICBuZGMsXHJcbiAgbG93UHJpY2VBbW91bnQsXHJcbiAgbG9jYXRpb25QaG9uZU51bWJlcixcclxuICBsb2NhdGlvbklkLFxyXG4gIGlzT3RjRHJ1ZyxcclxuICBoaWdoUHJpY2VBbW91bnQsXHJcbiAgZm9ybXVsYXRpb25JZCxcclxuICBkcnVnVXJsU2x1ZyxcclxuICBkcnVnTmFtZSxcclxuICBkcnVnSWQsXHJcbiAgZG9zYWdlRGlzcGxheSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFt1cmwsIHNldFVybF06IGFueSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVzXSA9IHVzZUNvb2tpZXMoKTtcclxuICBjb25zdCBwYXlsb2FkID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXRhaWxlcklkLFxyXG4gICAgICByZXRhaWxlck5hbWUsXHJcbiAgICAgIHJldGFpbGVyTG9nbzoge1xyXG4gICAgICAgIGltYWdlVXJsOiByZXRhaWxlckxvZ28/LmltYWdlVXJsLFxyXG4gICAgICB9LFxyXG4gICAgICBxdWFudGl0eURpc3BsYXksXHJcbiAgICAgIHByaWNlQ3VycmVuY3ksXHJcbiAgICAgIHBibUlkLFxyXG4gICAgICBwYXJ0bmVySWQsXHJcbiAgICAgIG5kYyxcclxuICAgICAgbG93UHJpY2VBbW91bnQsXHJcbiAgICAgIGxvY2F0aW9uUGhvbmVOdW1iZXIsXHJcbiAgICAgIGxvY2F0aW9uSWQsXHJcbiAgICAgIGlzT3RjRHJ1ZyxcclxuICAgICAgaGlnaFByaWNlQW1vdW50LFxyXG4gICAgICBmb3JtdWxhdGlvbklkLFxyXG4gICAgICBkcnVnVXJsU2x1ZyxcclxuICAgICAgZHJ1Z05hbWUsXHJcbiAgICAgIGRydWdJZCxcclxuICAgICAgZG9zYWdlRGlzcGxheSxcclxuICAgIH07XHJcbiAgfSwgW1xyXG4gICAgcmV0YWlsZXJJZCxcclxuICAgIHJldGFpbGVyTmFtZSxcclxuICAgIHJldGFpbGVyTG9nbyxcclxuICAgIHF1YW50aXR5RGlzcGxheSxcclxuICAgIHByaWNlQ3VycmVuY3ksXHJcbiAgICBwYm1JZCxcclxuICAgIHBhcnRuZXJJZCxcclxuICAgIG5kYyxcclxuICAgIGxvd1ByaWNlQW1vdW50LFxyXG4gICAgbG9jYXRpb25QaG9uZU51bWJlcixcclxuICAgIGxvY2F0aW9uSWQsXHJcbiAgICBpc090Y0RydWcsXHJcbiAgICBoaWdoUHJpY2VBbW91bnQsXHJcbiAgICBmb3JtdWxhdGlvbklkLFxyXG4gICAgZHJ1Z1VybFNsdWcsXHJcbiAgICBkcnVnTmFtZSxcclxuICAgIGRydWdJZCxcclxuICAgIGRvc2FnZURpc3BsYXksXHJcbiAgXSk7XHJcblxyXG4gXHJcblxyXG4gIGNvbnN0IExpbmtDb3Vwb24gPSAoKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogYCR7YWRyZXNzfS9hcGkvY291cG9uL2dldGAsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGRhdGE6cGF5bG9hZCxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWyd0b2tlbiddfWAsIFxyXG4gICAgICAgICAgJ3gtYWNjb3VudC1pZCc6Y29va2llc1snYWNjb3VudCddXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSkudGhlbigocmVzOmFueSkgPT4ge1xyXG4gICAgICBzZXRVcmwocmVzLmRhdGEudXJsKVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZih1cmwgJiYgTGlua0NvdXBvbil7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICB9XHJcbiAgfSwgW3VybF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUtaXRlbVwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0aWxlLWl0ZW1fX25hbWVcIj57bmFtZX08L3A+XHJcbiAgICAgIHtsYWJlbCAmJiA8cCBjbGFzc05hbWU9XCJ0aWxlLWl0ZW1fX2xhYmVsXCI+e2xhYmVsfTwvcD59XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlsZS1pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGlsZS1pdGVtX19wcmljZVwiPntwcmljZX08L3A+XHJcbiAgICAgICAge2Rpc3RhbmNlICYmIDxwPntkaXN0YW5jZX08L3A+fVxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGlsZS1pdGVtX19idXR0b25cIiBvbkNsaWNrPXtMaW5rQ291cG9ufT5cclxuICAgICAgICAgIEdldCBDb3Vwb25cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZUl0ZW07XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcGRvd24gfSBmcm9tIFwiLi9Ecm9wZG93blwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0RmllbGQgfSBmcm9tIFwiLi9JbnB1dEZpZWxkXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSXRlbXNDb250cm9sIH0gZnJvbSBcIi4vSXRlbXNDb250cm9sXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGVyIH0gZnJvbSBcIi4vTG9hZGVyXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGx1Z1N2ZyB9IGZyb20gXCIuL1BsdWdTdmdcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3dJdGVtIH0gZnJvbSBcIi4vUm93SXRlbVwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRpbGVJdGVtIH0gZnJvbSBcIi4vVGlsZUl0ZW1cIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2t9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb290ZXIsIElucHV0RmllbGQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBUb3BNZWQgZnJvbSBcIi4uLy4uL3N0b3JlL3RvcE1lZC9hY3Rpb25cIjtcclxuaW1wb3J0IFNlYXJjaFppcCBmcm9tIFwiLi4vLi4vc3RvcmUvU2VhcmNoWmlwL2FjdGlvblwiO1xyXG5pbXBvcnQgeyBDbGVhclppcCB9IGZyb20gXCIuLi8uLi9zdG9yZS9TZWFyY2haaXAvYWN0aW9uXCI7XHJcbmltcG9ydCBDdXJyZW50TWVkIGZyb20gXCIuLi8uLi9zdG9yZS9jdXJyZW50TWVkL2FjdGlvblwiO1xyXG5pbXBvcnQge1xyXG4gIEhlYWRlckxvZ29JbWFnZSxcclxuICBMb2NhdGlvbkljb25TdmcsXHJcbiAgU2VhcmNoSWNvblN2ZyxcclxufSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9hc3NldHMvcGFnZXMvc2VhcmNoLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUudG9wTWVkUmVkdWNlci50b3ApO1xyXG4gIGNvbnN0IGdyb3VwaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlOmFueSkgPT4gc3RhdGUudG9wTWVkUmVkdWNlci5ncm91cClcclxuICBjb25zdCBbZ3JvdXAsc2V0R3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHppcCA9IHVzZVNlbGVjdG9yKCh6aXA6YW55KSA9PiB6aXAuemlwUmVkdWNlcik7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLmN1cnJlbnRSZWR1Y2VyKTtcclxuICBjb25zdCBbY29va2llcywgc2V0Q29va2llc10gPSB1c2VDb29raWVzKCk7XHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlcnJvcixzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ppcEVycm9yLHNldFppcEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29kZXMsIHNldENvZGVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtncm91cHMsc2V0R3JvdXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmlsdGVyZWRJdGVtcyxzZXRGaWx0ZXJlZEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBcclxuICAgIGRpc3BhdGNoKFRvcE1lZCh7YXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXNbJ3Rva2VuJ119YCwgJ3gtYWNjb3VudC1pZCc6Y29va2llc1snYWNjb3VudCddfSkpO1xyXG4gICAgXHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoY29kZXMpe1xyXG4gICAgICBkaXNwYXRjaChTZWFyY2haaXAoY29kZXMpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuICgpID0+IHtkaXNwYXRjaChDbGVhclppcCgpKX1cclxuICAgIFxyXG4gIH0sW2NvZGVzLGRpc3BhdGNoXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGRhdGEubmFtZSl7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTpcIi9yZXN1bHRzXCIsXHJcbiAgICAgICAgc3RhdGU6e1xyXG4gICAgICAgICAgbmFtZTogc2VhcmNoLFxyXG4gICAgICAgICAgbG9jYXRpb246IHppcC5maWx0ZXIoKGl0ZW06YW55KSA9PiBpdGVtLmxhYmVsID09PSBjb2RlcyksXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcbiAgY29uc3Qgc3VibWl0QWN0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYoc2VhcmNoICYmIGNvZGVzICYmIHN0YXRlLmZpbHRlcigoaXRlbTphbnkpID0+IGl0ZW0ubGFiZWwgPT09IHNlYXJjaCB8fCBpdGVtLmxhYmVsLmxhYmVsID09PSBzZWFyY2gpWzBdKXtcclxuICAgICAgZGlzcGF0Y2goQ3VycmVudE1lZChzZWFyY2gse2F1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWyd0b2tlbiddfWAsICd4LWFjY291bnQtaWQnOmNvb2tpZXNbJ2FjY291bnQnXX0pKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1lbHNle1xyXG4gICAgICBjb2RlcyA/IHNldFppcEVycm9yKGZhbHNlKSA6c2V0WmlwRXJyb3IodHJ1ZSk7XHJcbiAgICAgIHNlYXJjaCAmJiBzdGF0ZS5maWx0ZXIoKGl0ZW06YW55KSA9PiBpdGVtLmxhYmVsLmxhYmVsID09PSBzZWFyY2gpWzBdID8gc2V0RXJyb3IoZmFsc2UpIDogc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXBhZ2VcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1wYWdlX19oZWFkZXJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtIZWFkZXJMb2dvSW1hZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1wYWdlX19oZWFkZXItbG9nb1wiXHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXBhZ2VfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWFyY2gtcGFnZV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgU2F2ZSBvbiB5b3VyIG1lZGljYXRpb25zIHRvZGF5IVxyXG4gICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1wYWdlX19pbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8SW5wdXRGaWVsZFxyXG4gICAgICAgICAgICAgIGljb25Vcmw9e1NlYXJjaEljb25Tdmd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBNZWRpY2F0aW9uc1wiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlYXJjaH1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17c3VibWl0QWN0aW9ufVxyXG4gICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJGaW5kIGxvd2VzdCBwcmljZXNcIlxyXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT17c2VhcmNoLmxlbmd0aCA+PSAzICYmIGdyb3VwID09PSBmYWxzZSA/IHN0YXRlIDogW119XHJcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGU9e2Vycm9yfVxyXG4gICAgICAgICAgICAgIGdyb3VwaW5nPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGZpbHRlcmVkPXtmaWx0ZXJlZEl0ZW1zfVxyXG4gICAgICAgICAgICAgIHNldEZpbHRlcmVkPXtzZXRGaWx0ZXJlZEl0ZW1zfVxyXG4gICAgICAgICAgICAgIC8vIGVycm9yPVwiUGxlYXNlIHR5cGUgY29ycmVjdCBtZWRpY2F0aW9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2Vycm9yID8gKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIj5QbGVhc2UgY2hvb3NlIGNvcnJlY3QgbWVkaWNhdGlvbjwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgaWNvblVybD17TG9jYXRpb25JY29uU3ZnfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb2Rlc31cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlpJUCAoZW50ZXIgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzKVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENvZGVzfVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtzdWJtaXRBY3Rpb259XHJcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkZpbmQgbG93ZXN0IHByaWNlc1wiXHJcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPXt6aXB9XHJcbiAgICAgICAgICAgICAgZXJyb3JIYW5kbGU9e3ppcEVycm9yfVxyXG4gICAgICAgICAgICAgIGhhdmVTdWJtaXRcclxuICAgICAgICAgICAgICAvLyBlcnJvcj1cIlBsZWFzZSB0eXBlIGNvcnJlY3QgWklQIGNvZGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7emlwRXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3JfbWVzc2FnZVwiPlBsZWFzZSBjaG9vc2UgY29ycmVjdCBaaXAgY29kZTwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hQYWdlO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3Jlc3VsdCc7XG5leHBvcnQgKiBmcm9tICcuL1NlYXJjaFBhZ2UnOyIsImltcG9ydCBSZWFjdCwge1xyXG4gIEZDLFxyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VTdGF0ZSxcclxuICB1c2VNZW1vLFxyXG4gIFN1c3BlbnNlLFxyXG4gIHVzZUNhbGxiYWNrLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBnZXREaXN0YW5jZSwgY29udmVydERpc3RhbmNlIH0gZnJvbSBcImdlb2xpYlwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IsIHVzZVN0b3JlLCBzaGFsbG93RXF1YWwgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcclxuaW1wb3J0IHsgTG9hZGVyLCBQbHVnU3ZnLCBSb3dJdGVtLCBUaWxlSXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgSGVhZGVyTG9nb0ltYWdlLFxyXG4gIExvY2F0aW9uSWNvblN2ZyxcclxuICBTZWFyY2hJY29uU3ZnLFxyXG59IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzXCI7XHJcbmltcG9ydCB7IElucHV0RmllbGQsIERyb3Bkb3duLCBJdGVtc0NvbnRyb2wsIEZvb3RlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IElURU1TX0NPTlRST0xfTU9ERSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0l0ZW1zQ29udHJvbFwiO1xyXG5pbXBvcnQgQ3VycmVudE1lZCBmcm9tIFwiLi4vLi4vc3RvcmUvY3VycmVudE1lZC9hY3Rpb25cIjtcclxuaW1wb3J0IFRvcE1lZCBmcm9tICcuLi8uLi9zdG9yZS90b3BNZWQvYWN0aW9uJztcclxuaW1wb3J0IFNlYXJjaFppcCBmcm9tICcuLi8uLi9zdG9yZS9TZWFyY2haaXAvYWN0aW9uJztcclxuaW1wb3J0IHsgQ2xlYXJaaXAgfSBmcm9tIFwiLi4vLi4vc3RvcmUvU2VhcmNoWmlwL2FjdGlvblwiO1xyXG5pbXBvcnQgZ2V0UHJpY2UgZnJvbSAnLi4vLi4vc3RvcmUvUHJpY2UvYWN0aW9ucyc7XHJcbmltcG9ydCB7IE9wdGltZVJvb3RSZWR1Y2VyIH0gZnJvbSBcImNvcmUvc3RvcmUvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0ICcuLi8uLi9hc3NldHMvcGFnZXMvcmVzdWx0LnNjc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc3VsdFBhZ2U6IEZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTtcclxuICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoc3RvcmUuZ2V0U3RhdGUoKSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yWmlwLCBzZXRFcnJvclppcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaE1lZCwgc2V0U2VhcmNoTWVkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2haaXAsIHNldFNlYXJjaFppcF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29va2llcywgc2V0Q29va2llc10gPSB1c2VDb29raWVzKCk7XHJcbiAgY29uc3QgW21lZGljYXRpb25FcnJvciwgc2V0TWVkaWNhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjdXJyZW50TWVkaWNhdGlvbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTpPcHRpbWVSb290UmVkdWNlcikgPT4gc3RhdGUuY3VycmVudFJlZHVjZXIsIHNoYWxsb3dFcXVhbCk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHRvcE1lZCA9IHVzZVNlbGVjdG9yKChzdGF0ZTphbnkpID0+IHN0YXRlLnRvcE1lZFJlZHVjZXIudG9wKTtcclxuICBjb25zdCB6aXAgPSB1c2VTZWxlY3Rvcigoc3RhdGU6YW55KSA9PiBzdGF0ZS56aXBSZWR1Y2VyKTtcclxuICBjb25zdCB7IHByaWNlUmVkdWNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOk9wdGltZVJvb3RSZWR1Y2VyKSA9PiBzdGF0ZSk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCBsb2NhdGlvbjphbnkgPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBtb2NrU29ydGluZyA9IFtcIkxPV0VTVFwiLCBcIkhJR0hFU1RcIl07XHJcbiAgY29uc3QgW2l0ZW1zTW9kZSwgc2V0SXRlbXNNb2RlXSA9IHVzZVN0YXRlKElURU1TX0NPTlRST0xfTU9ERS5USUxFUyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaG9zZW4sIHNldENob3Nlbl06IGFueSA9IHVzZVN0YXRlKHtcclxuICAgIE1hbnVmYWN0dXJlcjogXCJubyBpdGVtc1wiLFxyXG4gICAgRm9ybTogXCJubyBpdGVtc1wiLFxyXG4gICAgRG9zYWdlOiBcIm5vIGl0ZW1zXCIsXHJcbiAgICBRdWFudGl0eTogXCJubyBpdGVtc1wiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsb2NhdGlvbi5zdGF0ZSkgeyAgXHJcbiAgICAgIHJldHVybiBoaXN0b3J5LnB1c2goXCIvc2VhcmNoXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2NhdGlvbl0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihzZWFyY2haaXApe1xyXG4gICAgICBkaXNwYXRjaChTZWFyY2haaXAoc2VhcmNoWmlwKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoKSA9PiB7ZGlzcGF0Y2goQ2xlYXJaaXAoKSl9XHJcbiAgfSwgW3NlYXJjaFppcF0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChUb3BNZWQoe2F1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWyd0b2tlbiddfWAsICd4LWFjY291bnQtaWQnOmNvb2tpZXNbJ2FjY291bnQnXX0pKTtcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobG9jYXRpb24uc3RhdGUubmFtZS5sZW5ndGggPiAwKXtcclxuICAgICAgZGlzcGF0Y2goQ3VycmVudE1lZChsb2NhdGlvbi5zdGF0ZS5uYW1lLHthdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1sndG9rZW4nXX1gLCAneC1hY2NvdW50LWlkJzpjb29raWVzWydhY2NvdW50J119KSlcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb25dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgaWYoY3VycmVudE1lZGljYXRpb24ubmFtZSl7XHJcbiAgICAgICAgICBjb25zdCB7bmFtZSwgZGVmYXVsdFNldHRpbmdzLCBicmFuZFNldHRpbmdzLCBjb21wYXJpbmd9ID0gY3VycmVudE1lZGljYXRpb247XHJcbiAgICAgICAgICBjb25zdCBkZWZhdWx0cyA9IG5hbWUgPT09IGxvY2F0aW9uLnN0YXRlLm5hbWUgPyBicmFuZFNldHRpbmdzIDogY29tcGFyaW5nWzBdO1xyXG4gICAgICAgICAgaWYoZGVmYXVsdHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENob3Nlbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICBNYW51ZmFjdHVyZXI6YCR7ZGVmYXVsdHMubmFtZX0gKCR7ZGVmYXVsdHMuZHJ1Z1R5cGV9KWAsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9ybTogZGVmYXVsdHMuZm9ybSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICBEb3NhZ2U6IGRlZmF1bHRzLmRvc2FnZS5kaXNwbGF5LCBcclxuICAgICAgICAgICAgICAgICAgICAgIFF1YW50aXR5OiBkZWZhdWx0cy5jb21tb25RdWFudGl0aWVzLmZpbmQoKHt2YWx1ZX06YW55KSA9PiB2YWx1ZSA9PT0gZGVmYXVsdFNldHRpbmdzLnF1YW50aXR5KS5kaXNwbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9LCBbY3VycmVudE1lZGljYXRpb25dKTtcclxuXHJcbiAgY29uc3QgU3VibWl0QWN0aW9uVmFsdWUgPSAoKSA9PiB7XHJcbiAgICBpZihzZWFyY2hNZWQgJiYgdG9wTWVkLmZpbHRlcigoaXRlbTphbnkpID0+IGl0ZW0ubGFiZWwubGFiZWwgPT09IHNlYXJjaE1lZClbMF0pe1xyXG4gICAgICBoaXN0b3J5LnB1c2goe1xyXG4gICAgICAgIHN0YXRlOntcclxuICAgICAgICAgIC4uLmxvY2F0aW9uLnN0YXRlLFxyXG4gICAgICAgICAgbmFtZTogc2VhcmNoTWVkLFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgc2V0RXJyb3IoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1lbHNle1xyXG4gICAgICBzZWFyY2hNZWQgJiYgdG9wTWVkLmZpbHRlcigoaXRlbTphbnkpID0+IGl0ZW0ubGFiZWwubGFiZWwgPT09IHNlYXJjaE1lZClbMF0gPyBzZXRFcnJvcihmYWxzZSkgOiBzZXRFcnJvcih0cnVlKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBTdWJtaXRBY3Rpb25aaXAgPSAoKSA9PiB7XHJcbiAgICBpZihzZWFyY2haaXApe1xyXG4gICAgICBoaXN0b3J5LnB1c2goe1xyXG4gICAgICAgIHN0YXRlOntcclxuICAgICAgICAgIC4uLmxvY2F0aW9uLnN0YXRlLFxyXG4gICAgICAgICAgbG9jYXRpb246emlwXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBzZXRFcnJvclppcChmYWxzZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHNlYXJjaFppcCA/IHNldEVycm9yWmlwKGZhbHNlKSA6IHNldEVycm9yWmlwKHRydWUpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb3J0ZWRGdW5jOiBhbnkgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudE1lZGljYXRpb24ubmFtZSAmJiBjaG9zZW4pIHtcclxuICAgICAgY29uc29sZS5sb2coJ3NvcnRlZCAxJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBzb3J0ZWQgMVwiLGxvYWRpbmcpO1xyXG4gICAgICBjb25zdCB7Zm9ybXVsYXRpb25zLCBzZXR0aW5nc30gPSBjdXJyZW50TWVkaWNhdGlvbjtcclxuICAgICAgY29uc3QgbWFudWZhY3R1cmVyID0gc2V0dGluZ3MubWFudWZhY3R1cmVyO1xyXG4gICAgICBjb25zdCBzZXR0aW5nID0gZm9ybXVsYXRpb25zLnJlZHVjZSgoYWNjOmFueSwgbmV4dDphbnksIGluZGV4OmFueSkgPT4ge1xyXG4gICAgICAgIGlmKGNob3Nlbi5NYW51ZmFjdHVyZXIuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIC0xKS5qb2luKFwiIFwiKSA9PT0gbmV4dC5uYW1lKXtcclxuICAgICAgICAgIGFjYy5mb3JtLnB1c2gobmV4dC5mb3JtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2hvc2VuLk1hbnVmYWN0dXJlci5zcGxpdChcIiBcIikuc2xpY2UoMCwgLTEpLmpvaW4oXCIgXCIpID09PSBuZXh0Lm5hbWUgJiYgbmV4dC5mb3JtID09PSBjaG9zZW4uRm9ybSl7XHJcbiAgICAgICAgICBhY2MuZG9zYWdlLnB1c2gobmV4dC5kb3NhZ2UuZGlzcGxheSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobmV4dC5uYW1lID09PSBjaG9zZW4uTWFudWZhY3R1cmVyLnNwbGl0KFwiIFwiKS5zbGljZSgwLCAtMSkuam9pbihcIiBcIikgJiYgY2hvc2VuLkRvc2FnZSA9PT0gbmV4dC5kb3NhZ2UuZGlzcGxheSAmJiBuZXh0LmZvcm0gPT09IGNob3Nlbi5Gb3JtKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYWNjLnF1YW50aXR5LnB1c2goLi4ubmV4dC5jb21tb25RdWFudGl0aWVzKTtcclxuICAgICAgICAgIGFjYy5xdWFudGl0eSA9IGFjYy5xdWFudGl0eS5tYXAoKHtkaXNwbGF5fTphbnkpID0+IGRpc3BsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhY2MuZm9ybSA9IFsuLi5uZXcgU2V0KGFjYy5mb3JtKV07XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSx7XHJcbiAgICAgICAgbWFudWZhY3R1cmVyOiBtYW51ZmFjdHVyZXIsXHJcbiAgICAgICAgZm9ybTpbXSxcclxuICAgICAgICBkb3NhZ2U6W10sXHJcbiAgICAgICAgcXVhbnRpdHk6W11cclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtYW51ZmFjdHVyZXI6IHNldHRpbmcubWFudWZhY3R1cmVyLFxyXG4gICAgICAgIGZvcm06IHNldHRpbmcuZm9ybSxcclxuICAgICAgICBkb3NhZ2U6IHNldHRpbmcuZG9zYWdlLFxyXG4gICAgICAgIHF1YW50aXR5OiBzZXR0aW5nLnF1YW50aXR5XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICBjb25zdCBwcmljZUZ1bmMgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudE1lZGljYXRpb24ubmFtZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygncHJpY2VGdW5jIDInKVxyXG4gICAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgcHJpY2VGdW5jIDJcIixsb2FkaW5nKTtcclxuICAgICAgY29uc3Qge2Zvcm11bGF0aW9uc30gPSBjdXJyZW50TWVkaWNhdGlvbjtcclxuICAgICAgLy8gY29uc3QgZm9ybXVsYXRpb25zSWRzID0gZm9ybXVsYXRpb25zLnJlZHVjZSgoYXJyOmFueSwgc2V0OmFueSkgPT4ge1xyXG4gICAgICAvLyAgIGlmKHNldC5uYW1lID09PSBjaG9zZW4uTWFudWZhY3R1cmVyLnNwbGl0KFwiIFwiKS5zbGljZSgwLCAtMSkuam9pbihcIiBcIikgJiYgc2V0LmZvcm0gPT09IGNob3Nlbi5Gb3JtICYmIHNldC5kb3NhZ2UuZGlzcGxheSA9PT0gY2hvc2VuLkRvc2FnZSApe1xyXG4gICAgICAvLyAgICAgICBhcnIuZm9ybXVsYXRpb25JZCA9IHNldC5uZGM7XHJcbiAgICAgIC8vICAgICAgIGFyci5xdWFudGl0eSA9IHNldC5jb21tb25RdWFudGl0aWVzLmZpbmQoKHtkaXNwbGF5fTphbnkpID0+IGRpc3BsYXkgPT09IGNob3Nlbi5RdWFudGl0eSkudmFsdWU7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIHJldHVybiBhcnI7XHJcbiAgICAgIC8vIH0se30pO1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBmb3JtdWxhdGlvbklkID0gZm9ybXVsYXRpb25zXHJcbiAgICAgICAgLmZpbHRlcigoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBlLm5hbWUgPT09IGNob3Nlbi5NYW51ZmFjdHVyZXIuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIC0xKS5qb2luKFwiIFwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGUuZm9ybSA9PT0gY2hvc2VuLkZvcm07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKChlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBlLmRvc2FnZS5kaXNwbGF5ID09PSBjaG9zZW4uRG9zYWdlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZS5jb21tb25RdWFudGl0aWVzO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZsYXQoKVxyXG4gICAgICAgIC5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGUuZGlzcGxheSA9PT0gY2hvc2VuLlF1YW50aXR5O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZS5uZGM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZm9ybXVsYXRpb25zXHJcbiAgICAgICAgLmZpbHRlcigoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBlLm5hbWUgPT09IGNob3Nlbi5NYW51ZmFjdHVyZXIuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIC0xKS5qb2luKFwiIFwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGUuZm9ybSA9PT0gY2hvc2VuLkZvcm07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKChlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBlLmRvc2FnZS5kaXNwbGF5ID09PSBjaG9zZW4uRG9zYWdlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZS5jb21tb25RdWFudGl0aWVzO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZsYXQoKVxyXG4gICAgICAgIC5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGUuZGlzcGxheSA9PT0gY2hvc2VuLlF1YW50aXR5O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZS52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5mbyA9IGZvcm11bGF0aW9uc1xyXG4gICAgICAgIC5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZS5uYW1lID09PSBjaG9zZW4uTWFudWZhY3R1cmVyLnNwbGl0KFwiIFwiKS5zbGljZSgwLCAtMSkuam9pbihcIiBcIilcclxuICAgICAgICAgIClcclxuICAgICAgICB9KS5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGUuZm9ybSA9PT0gY2hvc2VuLkZvcm07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKChlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiBlLmRvc2FnZS5kaXNwbGF5ID09PSBjaG9zZW4uRG9zYWdlO1xyXG4gICAgICAgIH0pWzBdXHJcblxyXG4gICAgICByZXR1cm4ge3R5cGU6aW5mbywgZm9ybXVsYXRpb25JZDpmb3JtdWxhdGlvbklkLHF1YW50aXR5OnZhbHVlfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXF1ZXN0UHJpY2U6YW55ID0gKCkgPT4ge1xyXG4gICAgaWYocHJpY2VTZXR0aW5ncyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0UHJpY2UgMycpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyByZXF1ZXN0UHJpY2UgM1wiLGxvYWRpbmcpO1xyXG4gICAgICBkaXNwYXRjaCggZ2V0UHJpY2UoXHJcbiAgICAgICAgcHJpY2VTZXR0aW5ncy5xdWFudGl0eSwgXHJcbiAgICAgICAgcHJpY2VTZXR0aW5ncy5mb3JtdWxhdGlvbklkLCBcclxuICAgICAgICBwcmljZVNldHRpbmdzLnR5cGUuZHJ1Z1R5cGUsIFxyXG4gICAgICAgIHByaWNlU2V0dGluZ3MudHlwZS5uYW1lLCBcclxuICAgICAgICBwcmljZVNldHRpbmdzLnR5cGUuZ3BpMTQsIFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIGxvY2F0aW9uLnN0YXRlLmxvY2F0aW9uWzBdLmxvY2F0aW9uLFxyXG4gICAgICAgIGxvY2F0aW9uLnN0YXRlLmxvY2F0aW9uWzBdLnppcCxcclxuICAgICAgICApKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc29ydGVkID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnc29ydGVkIG1lbW8gNCcpXHJcbiAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcgc29ydGVkIG1lbW8gNFwiLGxvYWRpbmcpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHJldHVybiBzb3J0ZWRGdW5jKCk7XHJcbiB9LCBbXHJcbiAgIGNob3Nlbi5NYW51ZmFjdHVyZXIsXHJcbiAgIGNob3Nlbi5Gb3JtLFxyXG4gICBjaG9zZW4uRG9zYWdlLFxyXG4gICBjaG9zZW4uUXVhbnRpdHlcclxuIF0pO1xyXG4gIGNvbnN0IHByaWNlU2V0dGluZ3MgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdwcmljZVNldHRpbmdzIDUnKVxyXG4gICAgY29uc29sZS5sb2coXCJsb2FkaW5nIHByaWNlU2V0dGluZ3MgNVwiLGxvYWRpbmcpO1xyXG4gICAgcmV0dXJuIHByaWNlRnVuYygpO1xyXG4gIH0sW2Nob3Nlbi5NYW51ZmFjdHVyZXIsIGNob3Nlbi5Gb3JtLCBjaG9zZW4uRG9zYWdlLCBzb3J0ZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdlZmZlY3QgcmVxdWVzdCA2JylcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBlZmZlY3QgcmVxdWVzdCA2XCIsbG9hZGluZyk7XHJcbiAgICByZXF1ZXN0UHJpY2UoKTtcclxuICAgXHJcbiAgfSxbcHJpY2VTZXR0aW5ncywgc29ydGVkXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXBhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1wYWdlX19oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXBhZ2VfX3Jvd1wiPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17SGVhZGVyTG9nb0ltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfc2VhcmNoX2Vycm9yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hNZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VhcmNoTWVkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZHJ1ZyBuYW1lXCJcclxuICAgICAgICAgICAgICAgIGljb25Vcmw9e1NlYXJjaEljb25Tdmd9XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPVwicmVzdWx0LXBhZ2VfX2hlYWRlci1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVDbGFzc2VzPVwicmVzdWx0LXBhZ2VfX2F1dG9jb21wbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17U3VibWl0QWN0aW9uVmFsdWV9XHJcbiAgICAgICAgICAgICAgICBncm91cGluZz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT17c2VhcmNoTWVkLmxlbmd0aCA+PSAzID8gdG9wTWVkIDogW119XHJcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZT17ZXJyb3J9XHJcbiAgICAgICAgICAgICAgICBoYXZlU3VibWl0XHJcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIGVycm9yPVwiSW5jb3JyZWN0IG1lZGljYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7ZXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgUGxlYXNlIGNob29zZSBjb3JyZWN0IG1lZGljYXRpb25cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtcGFnZV9fcm93XCI+XHJcbiAgICAgICAgICAgIHtvcGVuICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X3NlYXJjaF9lcnJvciBmaWxkX2FuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFppcH1cclxuICAgICAgICAgICAgICAgICAgaWNvblVybD17TG9jYXRpb25JY29uU3ZnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0U2VhcmNoWmlwfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlpJUCAoZW50ZXIgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzKVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJyZXN1bHQtcGFnZV9faGVhZGVyLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlQ2xhc3Nlcz1cInJlc3VsdC1wYWdlX19hdXRvY29tcGxldGVcIlxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17U3VibWl0QWN0aW9uWmlwfVxyXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9e3ppcH1cclxuICAgICAgICAgICAgICAgICAgaGF2ZVN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGU9e2Vycm9yWmlwfVxyXG4gICAgICAgICAgICAgICAgICBlcnJvcj1cIkluY29ycmVjdCBaSVAgY29kZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9yWmlwID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yX21lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgY2hvb3NlIGNvcnJlY3QgWmlwIGNvZGVcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxQbHVnU3ZnXHJcbiAgICAgICAgICAgICAgdXJsPXtMb2NhdGlvbkljb25Tdmd9XHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz1cInJlc3VsdC1wYWdlX19sb2NhdGlvbi1pY29uXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cImxvY2F0aW9uXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtsb2NhdGlvbi5zdGF0ZSAmJiAoPHBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXN1bHQtcGFnZV9fbG9jYXRpb24tdGV4dFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bG9jYXRpb24uc3RhdGUubG9jYXRpb25bMF0ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvcD4pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXBhZ2VfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXN1bHQtcGFnZV9fZGVzY3JpcHRpb24tdGl0bGUnPlxyXG4gICAgICAgICAgICB7bG9jYXRpb24uc3RhdGUgJiYgKDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntsb2NhdGlvbi5zdGF0ZS5uYW1lfTwvaDE+KX1cclxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmICg8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L3A+KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtcGFnZV9fc2VwYXJhdG9yLS1ncmVlblwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAge3NvcnRlZCAmJiBjaG9zZW4gJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1wYWdlX19kcm9wZG93bnNcIj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTWFudWZhY3R1cmVyXCJcclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtzb3J0ZWQubWFudWZhY3R1cmVyfVxyXG4gICAgICAgICAgICAgICAgY2hvc2VuPXtjaG9zZW4uTWFudWZhY3R1cmVyfVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hvc2VuPXsoZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRDaG9zZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNob3NlbixcclxuICAgICAgICAgICAgICAgICAgICBNYW51ZmFjdHVyZXI6IGUsXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9ybVwiXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17c29ydGVkLmZvcm19XHJcbiAgICAgICAgICAgICAgICBjaG9zZW49e2Nob3Nlbi5Gb3JtfVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hvc2VuPXsoZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICBzZXRDaG9zZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmNob3NlbixcclxuICAgICAgICAgICAgICAgICAgICBGb3JtOiBlLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRvc2FnZVwiXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17c29ydGVkLmRvc2FnZX1cclxuICAgICAgICAgICAgICAgIGNob3Nlbj17Y2hvc2VuLkRvc2FnZX1cclxuICAgICAgICAgICAgICAgIHNldENob3Nlbj17KGU6IGFueSkgPT4gc2V0Q2hvc2VuKHsgLi4uY2hvc2VuLCBEb3NhZ2U6IGUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e3NvcnRlZC5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgIGNob3Nlbj17Y2hvc2VuLlF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hvc2VuPXsoZTogYW55KSA9PiBzZXRDaG9zZW4oeyAuLi5jaG9zZW4sIFF1YW50aXR5OiBlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXBhZ2VfX2l0ZW1zLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgPEl0ZW1zQ29udHJvbFxyXG4gICAgICAgICAgICAgIHNvcnRpbmdJdGVtcz17bW9ja1NvcnRpbmd9XHJcbiAgICAgICAgICAgICAgbW9kZT17aXRlbXNNb2RlfVxyXG4gICAgICAgICAgICAgIGFjdGlvbj17c2V0SXRlbXNNb2RlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1wYWdlX19zZXBhcmF0b3ItLWdyZXlcIiAvPlxyXG4gICAgICAgICAge2l0ZW1zTW9kZSA9PT0gSVRFTVNfQ09OVFJPTF9NT0RFLlRJTEVTICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXBhZ2VfX3RpbGVzLWFyZWFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtcGFnZV9fdGlsZXMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIHtwcmljZVJlZHVjZXIuZGF0YSAmJiBwcmljZVJlZHVjZXIubG9hZCA9PT0gJ2lkbGUnICA/IHByaWNlUmVkdWNlci5kYXRhLm1hcCgoaXRlbTphbnksIGluZGV4OmFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRpbGVJdGVtXHJcbiAgICAgICAgICAgICAgICBwYXJ0bmVySWQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICBpc090Y0RydWc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaGlnaFByaWNlQW1vdW50PXtudWxsfVxyXG4gICAgICAgICAgICAgICAgcHJpY2VDdXJyZW5jeT17XCJVU0RcIn1cclxuICAgICAgICAgICAgICAgIHJldGFpbGVyTmFtZT17aXRlbS5yZXRhaWxlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgcmV0YWlsZXJJZD17aXRlbS5yZXRhaWxlci5pZH1cclxuICAgICAgICAgICAgICAgIHJldGFpbGVyTG9nbz17aXRlbS5yZXRhaWxlci5sb2dvfVxyXG4gICAgICAgICAgICAgICAgZHJ1Z05hbWU9e2Nob3Nlbi5NYW51ZmFjdHVyZXIuc3BsaXQoXCIgXCIpWzBdfVxyXG4gICAgICAgICAgICAgICAgZG9zYWdlRGlzcGxheT17Y2hvc2VuLkRvc2FnZX1cclxuICAgICAgICAgICAgICAgIHBibUlkPXtpdGVtLnBibUlkfVxyXG4gICAgICAgICAgICAgICAgZm9ybXVsYXRpb25JZD17cHJpY2VTZXR0aW5ncz8uZm9ybXVsYXRpb25JZH1cclxuICAgICAgICAgICAgICAgIG5kYz17cHJpY2VTZXR0aW5ncz8uZm9ybXVsYXRpb25JZH1cclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5yZXRhaWxlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25JZD17aXRlbS5yZXRhaWxlci5sb2NhdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uUGhvbmVOdW1iZXI9e2l0ZW0ucmV0YWlsZXIubG9jYXRpb24ucGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICBsb3dQcmljZUFtb3VudD17aXRlbS5wcmljZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eURpc3BsYXk9e2Nob3Nlbi5RdWFudGl0eX1cclxuICAgICAgICAgICAgICAgIGRydWdVcmxTbHVnPXtjaG9zZW4uTWFudWZhY3R1cmVyLnNwbGl0KFxyXG4gICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgKVswXS50b0xvd2VyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgZHJ1Z0lkPXtjdXJyZW50TWVkaWNhdGlvbi5pZH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ucmV0YWlsZXIubmFtZX1cclxuICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlLmRpc3BsYXl9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIiBPcHR1bSBQZXJrc1wiXHJcbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlPXtgJHtpdGVtLmRpc3RhbmNlfWB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICkpIDogKDxMb2FkZXIgLz4pfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtpdGVtc01vZGUgPT09IElURU1TX0NPTlRST0xfTU9ERS5ST1dTICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtcGFnZV9fcm93cy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7IHByaWNlUmVkdWNlci5kYXRhICYmIHByaWNlUmVkdWNlci5sb2FkID09PSAnaWRsZScgPyBwcmljZVJlZHVjZXIuZGF0YS5tYXAoKGl0ZW06YW55LCBpbmRleDphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd0l0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0bmVySWQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPdGNEcnVnPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdoUHJpY2VBbW91bnQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VDdXJyZW5jeT17XCJVU0RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxlck5hbWU9e2l0ZW0ucmV0YWlsZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxlcklkPXtpdGVtLnJldGFpbGVyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbGVyTG9nbz17aXRlbS5yZXRhaWxlci5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRydWdOYW1lPXtjaG9zZW4uTWFudWZhY3R1cmVyLnNwbGl0KFwiIFwiKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb3NhZ2VEaXNwbGF5PXtjaG9zZW4uRG9zYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBibUlkPXtpdGVtLnBibUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm11bGF0aW9uSWQ9e3ByaWNlU2V0dGluZ3M/LmZvcm11bGF0aW9uSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmRjPXtwcmljZVNldHRpbmdzPy5mb3JtdWxhdGlvbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5yZXRhaWxlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWQ9e2l0ZW0ucmV0YWlsZXIubG9jYXRpb24uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25QaG9uZU51bWJlcj17aXRlbS5yZXRhaWxlci5sb2NhdGlvbi5waG9uZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb3dQcmljZUFtb3VudD17aXRlbS5wcmljZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHlEaXNwbGF5PXtjaG9zZW4uUXVhbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJ1Z1VybFNsdWc9e2Nob3Nlbi5NYW51ZmFjdHVyZXIuc3BsaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClbMF0udG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcnVnSWQ9e2N1cnJlbnRNZWRpY2F0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ucmV0YWlsZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZS5kaXNwbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiIE9wdHVtIFBlcmtzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U9e2Ake2l0ZW0uZGlzdGFuY2V9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfSkgIFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA6ICg8TG9hZGVyIC8+KVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtcGFnZV9fc3BhY2UtZmlsbFwiPiA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICBcclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG5cclxuICAvLyBjb25zdCBtYW51ZmFjdHVyZXI6IGFueSA9IGN1cnJlbnRNZWRpY2F0aW9uLnZhcmlhbnRzLm1hcCgoZTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgcmV0dXJuIGAke2UubmFtZX0gKCR7ZS5kcnVnVHlwZX0pYDtcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAvLyBjb25zdCBmb3JtOiBhbnkgPSBjdXJyZW50TWVkaWNhdGlvbi5mb3JtdWxhdGlvbnNcclxuICAgICAgLy8gICAuZmlsdGVyKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAgIC8vICAgICAgIGUubmFtZSA9PT0gY2hvc2VuLk1hbnVmYWN0dXJlci5zcGxpdChcIiBcIikuc2xpY2UoMCwgLTEpLmpvaW4oXCIgXCIpXHJcbiAgICAgIC8vICAgICApO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLm1hcCgoZTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZS5mb3JtO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLmZpbHRlcihmdW5jdGlvbiAodmFsdWU6IGFueSwgaW5kZXg6IGFueSwgc2VsZjogYW55KSB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlLnRyaW0oKSkgPT09IGluZGV4O1xyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyBjb25zdCBkb3NhZ2UgPSBjdXJyZW50TWVkaWNhdGlvbi5mb3JtdWxhdGlvbnNcclxuICAgICAgLy8gICAuZmlsdGVyKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAgIC8vICAgICAgIGUubmFtZSA9PT0gY2hvc2VuLk1hbnVmYWN0dXJlci5zcGxpdChcIiBcIikuc2xpY2UoMCwgLTEpLmpvaW4oXCIgXCIpXHJcbiAgICAgIC8vICAgICApO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLmZpbHRlcigoZTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZS5mb3JtID09PSBjaG9zZW4uRm9ybTtcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyAgIC5tYXAoKGU6IGFueSkgPT4ge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIGUuZG9zYWdlO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLm1hcCgoZTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZS5kaXNwbGF5O1xyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyBjb25zdCBxdWFudGl0eSA9IGN1cnJlbnRNZWRpY2F0aW9uLmZvcm11bGF0aW9uc1xyXG4gICAgICAvLyAgIC5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIChcclxuICAgICAgLy8gICAgICAgZS5uYW1lID09PSBjaG9zZW4uTWFudWZhY3R1cmVyLnNwbGl0KFwiIFwiKS5zbGljZSgwLCAtMSkuam9pbihcIiBcIilcclxuICAgICAgLy8gICAgICk7XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAuZmlsdGVyKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiBlLmZvcm0gPT09IGNob3Nlbi5Gb3JtO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLmZpbHRlcigoZTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZS5kb3NhZ2UuZGlzcGxheSA9PT0gY2hvc2VuLkRvc2FnZTtcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyAgIC5tYXAoKGU6IGFueSkgPT4ge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIGUuY29tbW9uUXVhbnRpdGllcztcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyAgIC5mbGF0KClcclxuICAgICAgLy8gICAubWFwKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiBlLmRpc3BsYXk7XHJcbiAgICAgIC8vICAgfSk7XHJcblxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8qIFxyXG4gICAgICAgIC8vIGNvbnN0IGZvcm1JZCA9IGN1cnJlbnRNZWRpY2F0aW9uWzBdLmRlZmF1bHRTZXR0aW5ncy5mb3JtdWxhdGlvbklkO1xyXG4gICAgICAgIC8vIGNvbnN0IGRlZmF1bHRNZWRRdWFudGl0eSA9IGN1cnJlbnRNZWRpY2F0aW9uWzBdLmRlZmF1bHRTZXR0aW5ncy5xdWFudGl0eTtcclxuICAgICAgICAvLyBjb25zdCBjdXJyZW50TmFtZSA9IGN1cnJlbnRNZWRpY2F0aW9uWzBdLmZvcm11bGF0aW9ucy5maWx0ZXIoKGl0ZW06YW55KSA9PiBpdGVtLm5hbWU9PT0gbG9jYXRpb24uc3RhdGUubmFtZSlbMF07XHJcbiAgICAgICAgLy8gY29uc3QgZm9ybXVsYXRpb25zID0gY3VycmVudE1lZGljYXRpb25bMF0uZm9ybXVsYXRpb25zO1xyXG4gICAgICAgIC8vIGNvbnN0IGRlZmF1bHRBcnIgPSBmb3JtdWxhdGlvbnMuZmlsdGVyKChpdGVtOmFueSkgPT4gaXRlbS5pZCA9PT0gZm9ybUlkKVswXTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgZGVmYXVsdEZvcm0gPSBkZWZhdWx0QXJyLmZvcm07XHJcbiAgICAgICAgLy8gY29uc3QgZGVmYXVsdERvc2FnZSA9IGRlZmF1bHRBcnIuZG9zYWdlLmRpc3BsYXk7XHJcbiAgICAgICAgLy8gY29uc3QgZGVmYXVsdFF1YW50aXR5ID0gZGVmYXVsdEFyci5jb21tb25RdWFudGl0aWVzLmZpbmQoKGl0ZW06YW55KSA9PiBpdGVtLnZhbHVlID09PSBkZWZhdWx0TWVkUXVhbnRpdHkpLmRpc3BsYXk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGZvcm11bGF0aW9uc05hbWUgPSBmb3JtdWxhdGlvbnMuZmlsdGVyKChpdGVtOmFueSkgPT4gaXRlbS5uYW1lID09PSBjdXJyZW50TmFtZS5uYW1lKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgZm9ybXVsYXRpb25zTmFtZUZvcm0gPSBmb3JtdWxhdGlvbnNOYW1lLmZpbmQoKGl0ZW06YW55KSA9PiBpdGVtLmZvcm0gPT09IGRlZmF1bHRGb3JtKTtcclxuICAgICAgICAvLyBjb25zdCBmb3JtdWxhdGlvbnNOYW1lRG9zYWdlID0gZm9ybXVsYXRpb25zTmFtZS5maW5kKChpdGVtOmFueSkgPT4gaXRlbS5kb3NhZ2UuZGlzcGxheSA9PT0gZGVmYXVsdERvc2FnZSk7XHJcbiAgICAgICAgLy8gY29uc3QgZm9ybXVsYXRpb25zTmFtZVF1YW50aXR5ID0gZm9ybXVsYXRpb25zTmFtZS5tYXAoKGU6YW55KSA9PiBlLmNvbW1vblF1YW50aXRpZXMpLmZsYXQoKS5maW5kKChpdGVtOmFueSkgPT4gaXRlbS5kaXNwbGF5ID09PSBkZWZhdWx0UXVhbnRpdHkpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBjdXJyZW50Rm9ybSA9IGZvcm11bGF0aW9uc05hbWVGb3JtICE9PSB1bmRlZmluZWQgPyBkZWZhdWx0Rm9ybSA6IGN1cnJlbnROYW1lLmZvcm07XHJcbiAgICAgICAgLy8gY29uc3QgY3VycmVudERvc2FnZSA9IGZvcm11bGF0aW9uc05hbWVEb3NhZ2UgIT09IHVuZGVmaW5lZCA/IGRlZmF1bHREb3NhZ2UgOiBjdXJyZW50TmFtZS5kb3NhZ2UuZGlzYXBsYXk7XHJcblxyXG4gICAgICAgIC8vIGlmKGZvcm11bGF0aW9uc05hbWVRdWFudGl0eSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAvLyAgIHNldENob3Nlbih7TWFudWZhY3R1cmVyOmAke2N1cnJlbnROYW1lLm5hbWV9ICgke2N1cnJlbnROYW1lLmRydWdUeXBlfSlgLCBGb3JtOmN1cnJlbnRGb3JtLCBEb3NhZ2U6Y3VycmVudERvc2FnZX0pO1xyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgc2V0Q2hvc2VuKHtNYW51ZmFjdHVyZXI6YCR7Y3VycmVudE5hbWUubmFtZX0gKCR7Y3VycmVudE5hbWUuZHJ1Z1R5cGV9KWAsIEZvcm06Y3VycmVudEZvcm0sIERvc2FnZTpjdXJyZW50RG9zYWdlLCBRdWFudGl0eTogZGVmYXVsdFF1YW50aXR5fSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgICAgKi9cclxuXHJcblxyXG4gICAgICAgICAgICAgIC8vIGNvbnN0IGZvcm11bGF0aW9uSWQgPSBmb3JtdWxhdGlvbnNcclxuICAgICAgLy8gICAuZmlsdGVyKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAgIC8vICAgICAgIGUubmFtZSA9PT0gY2hvc2VuLk1hbnVmYWN0dXJlci5zcGxpdChcIiBcIikuc2xpY2UoMCwgLTEpLmpvaW4oXCIgXCIpXHJcbiAgICAgIC8vICAgICApO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLmZpbHRlcigoZTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZS5mb3JtID09PSBjaG9zZW4uRm9ybTtcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyAgIC5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIGUuZG9zYWdlLmRpc3BsYXkgPT09IGNob3Nlbi5Eb3NhZ2U7XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAubWFwKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiBlLmNvbW1vblF1YW50aXRpZXM7XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAuZmxhdCgpXHJcbiAgICAgIC8vICAgLmZpbHRlcigoZTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZS5kaXNwbGF5ID09PSBjaG9zZW4uUXVhbnRpdHk7XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAubWFwKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiBlLm5kYztcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gY29uc3QgdmFsdWUgPSBmb3JtdWxhdGlvbnNcclxuICAgICAgLy8gICAuZmlsdGVyKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiAoXHJcbiAgICAgIC8vICAgICAgIGUubmFtZSA9PT0gY2hvc2VuLk1hbnVmYWN0dXJlci5zcGxpdChcIiBcIikuc2xpY2UoMCwgLTEpLmpvaW4oXCIgXCIpXHJcbiAgICAgIC8vICAgICApO1xyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICAgLmZpbHRlcigoZTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZS5mb3JtID09PSBjaG9zZW4uRm9ybTtcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyAgIC5maWx0ZXIoKGU6IGFueSkgPT4ge1xyXG4gICAgICAvLyAgICAgcmV0dXJuIGUuZG9zYWdlLmRpc3BsYXkgPT09IGNob3Nlbi5Eb3NhZ2U7XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAubWFwKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiBlLmNvbW1vblF1YW50aXRpZXM7XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAuZmxhdCgpXHJcbiAgICAgIC8vICAgLmZpbHRlcigoZTogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZS5kaXNwbGF5ID09PSBjaG9zZW4uUXVhbnRpdHk7XHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gICAubWFwKChlOiBhbnkpID0+IHtcclxuICAgICAgLy8gICAgIHJldHVybiBlLnZhbHVlO1xyXG4gICAgICAvLyAgIH0pOyIsImltcG9ydCB7QWN0aW9uQ3JlYXRvciwgRGlzcGF0Y2h9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7VGh1bmtBY3Rpb259IGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge0FjdGlvbnNUeXBlLCBDdXJyZW50UHJpY2V9IGZyb20gJy4vcHJpY2VUeXBlcyc7XG5pbXBvcnQgeyBhZHJlc3MgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcy9lbnYnO1xuXG5cbmNvbnN0IGdldFByaWNlOkFjdGlvbkNyZWF0b3I8VGh1bmtBY3Rpb248UHJvbWlzZTxhbnk+LGFueSwgbnVsbCxDdXJyZW50UHJpY2U+PiA9IChcbnF1YW50aXR5OnN0cmluZyxcbmZvcm11bGF0aW9uSWQ6c3RyaW5nLFxudHlwZTpzdHJpbmcsXG5uYW1lOnN0cmluZyxcbmdwaTE0OnN0cmluZyxcbnViaTpib29sZWFuLFxuc2VhcmNoTG9jYXRpb246c3RyaW5nLFxuc2VhcmNoTG9jYXRpb25aaXBDb2RlOiBzdHJpbmcsXG4pID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDpEaXNwYXRjaCkgPT4ge1xuICAgIC8vIHRyeXtcbiAgICAvLyAgIGNvbnN0IHByaWNlOmFueSA9IGF3YWl0IGF4aW9zKHtcbiAgICAvLyAgICAgbWV0aG9kOlwiUE9TVFwiLFxuICAgIC8vICAgICB1cmw6IGAke2FkcmVzc30vYXBpL3ByaWNlL2dldHRpbmdgLFxuICAgIC8vICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZSxcbiAgICAvLyAgICAgZGF0YTp7XG4gICAgLy8gICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICAgIC8vICAgICAgIGZvcm11bGF0aW9uSWQ6IGZvcm11bGF0aW9uSWQsXG4gICAgLy8gICAgICAgdHlwZTogdHlwZSxcbiAgICAvLyAgICAgICBuYW1lOiBuYW1lLFxuICAgIC8vICAgICAgIGdwaTE0OiBncGkxNCxcbiAgICAvLyAgICAgICB1Ymk6IHViaSxcbiAgICAvLyAgICAgICBzZWFyY2hMb2NhdGlvbjogc2VhcmNoTG9jYXRpb24sXG4gICAgLy8gICAgICAgc2VhcmNoTG9jYXRpb25aaXBDb2RlOiBzZWFyY2hMb2NhdGlvblppcENvZGUsXG4gICAgICAgICBcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSk7XG5cbiAgICAvLyAgIGRpc3BhdGNoKHt0eXBlOiBBY3Rpb25zVHlwZS5QUklDRSwgcGF5bG9hZDogcHJpY2UuZGF0YX0pO1xuICAgIC8vIH1jYXRjaChlcnIpe1xuICAgIC8vICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIC8vIH1cbiAgICBkaXNwYXRjaCh7dHlwZTpBY3Rpb25zVHlwZS5QUklDRSxwYXlsb2FkOntcbiAgICAgIGxvYWQ6J2xvYWRpbmcnXG4gICAgfX0pO1xuICAgIHJldHVybiBheGlvcyh7XG4gICAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgICB1cmw6YCR7YWRyZXNzfS9hcGkvcHJpY2UvZ2V0dGluZ2AsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6dHJ1ZSxcbiAgICAgIGRhdGE6e1xuICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgICBmb3JtdWxhdGlvbklkOiBmb3JtdWxhdGlvbklkLFxuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBncGkxNDogZ3BpMTQsXG4gICAgICAgICAgdWJpOiB1YmksXG4gICAgICAgICAgc2VhcmNoTG9jYXRpb246IHNlYXJjaExvY2F0aW9uLFxuICAgICAgICAgIHNlYXJjaExvY2F0aW9uWmlwQ29kZTogc2VhcmNoTG9jYXRpb25aaXBDb2RlLFxuICAgICAgfVxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgZGlzcGF0Y2goe3R5cGU6QWN0aW9uc1R5cGUuUFJJQ0UscGF5bG9hZDp7XG4gICAgICAgIGRhdGE6ZGF0YSxcbiAgICAgICAgbG9hZDonaWRsZSdcbiAgICAgIH19KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgIH0pXG4gIH1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJpY2U7IiwiaW1wb3J0IHsgQWN0aW9uc1R5cGUsIFByaWNlTWVkICB9IGZyb20gJy4vcHJpY2VUeXBlcyc7XG5cblxuY29uc3QgcHJpY2VSZWR1Y2VyID0gKHN0YXRlOmFueSA9IHt9LCBhY3Rpb246IFByaWNlTWVkKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSBBY3Rpb25zVHlwZS5QUklDRTpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgcHJpY2VSZWR1Y2VyOyIsImV4cG9ydCBlbnVtIEFjdGlvbnNUeXBle1xuICBQUklDRSA9IFwiUFJJQ0VcIlxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudFByaWNle1xuICB0eXBlOiB0eXBlb2YgQWN0aW9uc1R5cGUuUFJJQ0UsXG4gIHBheWxvYWQ6IGFueVxufTtcblxuXG5leHBvcnQgdHlwZSBQcmljZU1lZCA9IEN1cnJlbnRQcmljZTtcbiIsImltcG9ydCB7U2VhcmNoQWN0aW9uc1R5cGUsIEFjdGlvbnNUeXBlfSBmcm9tICcuL3NlYXJjaFR5cGVzJ1xuXG5cblxuY29uc3Qgc2VhcmNoUmVkdWNlciA9IChzdGF0ZTphbnkgPSB7fSwgYWN0aW9uOlNlYXJjaEFjdGlvbnNUeXBlKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSBBY3Rpb25zVHlwZS5TRUFSQ0g6XG4gICAgICByZXR1cm4gey4uLnN0YXRlLC4uLmFjdGlvbi5wYXlsb2FkfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFJlZHVjZXI7IiwiZXhwb3J0IGVudW0gQWN0aW9uc1R5cGV7XG4gIFNFQVJDSCA9IFwiU0VBUkNIXCIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoTWVkQWN0aW9ue1xuICB0eXBlOiB0eXBlb2YgQWN0aW9uc1R5cGUuU0VBUkNILFxuICBwYXlsb2FkOmFueVxufTtcblxuXG5leHBvcnQgdHlwZSBTZWFyY2hBY3Rpb25zVHlwZSA9IFNlYXJjaE1lZEFjdGlvbjsiLCJpbXBvcnQge0FjdGlvbkNyZWF0b3IsIERpc3BhdGNofSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge1RodW5rQWN0aW9ufSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQWN0aW9uc1R5cGUsU2VhcmNoWmlwQWN0aW9uLCBDbGVhclppcEFjdGlvbn0gZnJvbSAnLi96aXBUeXBlcyc7XG5pbXBvcnQgeyBhZHJlc3MgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcy9lbnYnO1xuXG5cbmNvbnN0IFNlYXJjaFppcDpBY3Rpb25DcmVhdG9yPFRodW5rQWN0aW9uPFByb21pc2U8YW55PiwgYW55LCBudWxsLCBTZWFyY2haaXBBY3Rpb24+PiA9ICh6aXA6c3RyaW5nKSA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2g6RGlzcGF0Y2gpID0+IHtcbiAgICB0cnl7XG4gICAgICBjb25zdCBjb2RlID0gemlwLnNwbGl0KFwiIFwiKVswXTtcbiAgICAgIGNvbnN0IGNvZGVzID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXG4gICAgICAgIHVybDpgJHthZHJlc3N9L2FwaS96aXAvc2VhcmNoemlwYCxcbiAgICAgICAgZGF0YTp7XG4gICAgICAgICAgemlwOmNvZGVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZih6aXAubGVuZ3RoID49Myl7XG4gICAgICBkaXNwYXRjaCh7dHlwZTpBY3Rpb25zVHlwZS5aSVAsIHBheWxvYWQ6IGNvZGVzLmRhdGF9KVxuICAgICAgfVxuICAgIH1jYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ2xlYXJaaXA6QWN0aW9uQ3JlYXRvcjxUaHVua0FjdGlvbjxQcm9taXNlPGFueT4sIGFueSwgbnVsbCwgQ2xlYXJaaXBBY3Rpb24+PiA9ICgpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDpEaXNwYXRjaCkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBBY3Rpb25zVHlwZS5DTEVBUiwgcGF5bG9hZDogW119KTtcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFppcDtcblxuIiwiaW1wb3J0IHtTZWFyY2haaXBBY3Rpb25zVHlwZSwgQWN0aW9uc1R5cGV9IGZyb20gJy4vemlwVHlwZXMnO1xuXG5cbmNvbnN0IHppcFJlZHVjZXIgPSAoc3RhdGU6YW55ID0gW10sIGFjdGlvbjpTZWFyY2haaXBBY3Rpb25zVHlwZSkgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgQWN0aW9uc1R5cGUuWklQOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIGNhc2UgQWN0aW9uc1R5cGUuQ0xFQVI6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHppcFJlZHVjZXI7IiwiZXhwb3J0IGVudW0gQWN0aW9uc1R5cGV7XG4gIFpJUCA9IFwiWklQXCIsXG4gIENMRUFSID0gXCJDTEVBUlwiXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFppcEFjdGlvbntcbiAgdHlwZTogdHlwZW9mIEFjdGlvbnNUeXBlLlpJUCxcbiAgcGF5bG9hZDogYW55XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFyWmlwQWN0aW9ue1xuICB0eXBlOiB0eXBlb2YgQWN0aW9uc1R5cGUuQ0xFQVIsXG4gIHBheWxvYWQ6IGFueVxufVxuZXhwb3J0IHR5cGUgU2VhcmNoWmlwQWN0aW9uc1R5cGUgPSBTZWFyY2haaXBBY3Rpb24gfCBDbGVhclppcEFjdGlvbjsiLCJpbXBvcnQge0FjdGlvbnNUeXBlLENvdXBvbkFjdGlvblR5cGV9IGZyb20gXCIuL2NvdXBvblR5cGVzXCI7XG5cbmNvbnN0IGNvdXBvblJlZHVjZXIgPSAoc3RhdGU6YW55ID0ge30sIGFjdGlvbjpDb3Vwb25BY3Rpb25UeXBlKSA9PiB7XG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSBBY3Rpb25zVHlwZS5DT1VQT046XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvdXBvblJlZHVjZXI7XG4iLCJleHBvcnQgZW51bSBBY3Rpb25zVHlwZXtcbiAgQ09VUE9OID0gXCJDT1VQT05cIlxufTtcblxuXG5leHBvcnQgaW50ZXJmYWNlIENvdXBvbkFjdGlvbntcbiAgdHlwZTogdHlwZW9mIEFjdGlvbnNUeXBlLkNPVVBPTixcbiAgcGF5bG9hZDogYW55LFxufTtcblxuXG5leHBvcnQgdHlwZSBDb3Vwb25BY3Rpb25UeXBlID0gQ291cG9uQWN0aW9uOyIsImltcG9ydCB7QWN0aW9uQ3JlYXRvciwgRGlzcGF0Y2h9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7VGh1bmtBY3Rpb259IGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge0FjdGlvbnNUeXBlLCBDdXJyZW50TWVkQWN0aW9ufSBmcm9tICcuL2N1cnJlbnRUeXBlcyc7XG5pbXBvcnQgeyBhZHJlc3MsYWRyZXNzU2VydmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMvZW52JztcblxuY29uc3QgQ3VycmVudE1lZDpBY3Rpb25DcmVhdG9yPFRodW5rQWN0aW9uPFByb21pc2U8YW55PiwgYW55LCBudWxsLCBDdXJyZW50TWVkQWN0aW9uPj4gPSAobmFtZTpzdHJpbmcsIGhlYWRlcjphbnkpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDpEaXNwYXRjaCkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDpcIlBPU1RcIixcbiAgICAgICAgdXJsOmAke2FkcmVzc30vYXBpL21lZGljYXRpb24vY3VycmVudGAsXG4gICAgICAgIGRhdGE6e1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICBhdXRob3JpemF0aW9uOiBoZWFkZXIuYXV0aG9yaXphdGlvbixcbiAgICAgICAgICAgICd4LWFjY291bnQtaWQnOiBoZWFkZXJbJ3gtYWNjb3VudC1pZCddLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkaXNwYXRjaCh7dHlwZTpBY3Rpb25zVHlwZS5DVVJSRU5ULCBwYXlsb2FkOiBjdXJyZW50LmRhdGF9KTtcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudE1lZDsiLCJpbXBvcnQge0FjdGlvbnNUeXBlLEN1cnJlbnRBY3Rpb25zVHlwZX0gZnJvbSAnLi9jdXJyZW50VHlwZXMnO1xuXG5jb25zdCBjdXJyZW50UmVkdWNlciA9IChzdGF0ZTphbnkgPSB7fSwgYWN0aW9uOkN1cnJlbnRBY3Rpb25zVHlwZSkgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgQWN0aW9uc1R5cGUuQ1VSUkVOVDpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbnRSZWR1Y2VyOyIsImV4cG9ydCBlbnVtIEFjdGlvbnNUeXBle1xuICBDVVJSRU5UID0gXCJDVVJSRU5UXCJcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudE1lZEFjdGlvbntcbiAgdHlwZTogdHlwZW9mIEFjdGlvbnNUeXBlLkNVUlJFTlQsXG4gIHBheWxvYWQ6IGFueVxufTtcblxuZXhwb3J0IHR5cGUgQ3VycmVudEFjdGlvbnNUeXBlID0gQ3VycmVudE1lZEFjdGlvbjsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBzZWFyY2hSZWR1Y2VyIGZyb20gXCIuL1NlYXJjaE1lZC9zZWFyY2hSZWR1Y2VyXCI7XG5pbXBvcnQgemlwUmVkdWNlciBmcm9tIFwiLi9TZWFyY2haaXAvemlwUmVkdWNlclwiO1xuaW1wb3J0IHRvcE1lZFJlZHVjZXIgZnJvbSBcIi4vdG9wTWVkL3RvcE1lZFJlZHVjZXJcIjtcbmltcG9ydCBjdXJyZW50UmVkdWNlciBmcm9tIFwiLi9jdXJyZW50TWVkL2N1cnJlbnRSZWR1Y2VyXCI7XG5pbXBvcnQgcHJpY2VSZWR1Y2VyIGZyb20gXCIuL1ByaWNlL3ByaWNlUmVkdWNlclwiO1xuaW1wb3J0IGNvdXBvblJlZHVjZXIgZnJvbSBcIi4vY291cG9uL2NvdXBvblJlZHVjZXJcIjtcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgc2VhcmNoUmVkdWNlcixcbiAgemlwUmVkdWNlcixcbiAgdG9wTWVkUmVkdWNlcixcbiAgY3VycmVudFJlZHVjZXIsXG4gIHByaWNlUmVkdWNlcixcbiAgY291cG9uUmVkdWNlcixcbn0pO1xuXG5cbmV4cG9ydCB0eXBlIE9wdGltZVJvb3RSZWR1Y2VyID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3Jvb3RSZWR1Y2VyXCI7XG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHVuZGVmaW5lZCxjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwiaW1wb3J0IHtBY3Rpb25DcmVhdG9yLCBEaXNwYXRjaH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgVGh1bmtBY3Rpb24gfSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgYXhpb3MsIHtBeGlvc1Jlc3BvbnNlfSBmcm9tICdheGlvcyc7XG5pbXBvcnQge0FjdGlvbnNUeXBlLCBUb3BNZWRBY3Rpb24sIFNlYXJjaEdyb3VwQWN0aW9ufSBmcm9tICcuL3RvcE1lZFR5cGVzJztcbmltcG9ydCB7IGFkcmVzcyB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzL2Vudic7XG5cblxuXG5jb25zdCBUb3BNZWQ6QWN0aW9uQ3JlYXRvcjxUaHVua0FjdGlvbjxQcm9taXNlPGFueT4sYW55LG51bGwsVG9wTWVkQWN0aW9uPj4gPSAoaGVhZGVyczphbnkpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDpEaXNwYXRjaCkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHRvcE1lZDphbnkgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIHVybDogYCR7YWRyZXNzfS9hcGkvbWVkaWNhdGlvbi90b3BgLFxuICAgICAgICBkYXRhOntcbiAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGhlYWRlcnMuYXV0aG9yaXphdGlvbixcbiAgICAgICAgICAgICd4LWFjY291bnQtaWQnOiBoZWFkZXJzWyd4LWFjY291bnQtaWQnXSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZGlzcGF0Y2goe3R5cGU6QWN0aW9uc1R5cGUuVE9QLCBwYXlsb2FkOiB0b3BNZWQuZGF0YX0pO1xuICAgIH1jYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEdyb3VwOkFjdGlvbkNyZWF0b3I8VGh1bmtBY3Rpb248UHJvbWlzZTxhbnk+LCBhbnksIG51bGwsIFNlYXJjaEdyb3VwQWN0aW9uPj4gPSAobmFtZTpzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDpEaXNwYXRjaCkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IGdyb3VwOkF4aW9zUmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgIHVybDpgJHthZHJlc3N9L2FwaS9tZWRpY2F0aW9uL2dyb3VwYCxcbiAgICAgICAgZGF0YTp7XG4gICAgICAgICAgbmFtZTpuYW1lXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZGlzcGF0Y2goe3R5cGU6QWN0aW9uc1R5cGUuR1JPVVAsIHBheWxvYWQ6Z3JvdXAuZGF0YX0pO1xuICAgIH1jYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BNZWQ7IiwiaW1wb3J0IHsgVG9wTWVkQWN0aW9uc1R5cGUsIEFjdGlvbnNUeXBlIH0gZnJvbSBcIi4vdG9wTWVkVHlwZXNcIjtcblxuXG5cbmNvbnN0IHRvcE1lZFJlZHVjZXIgPSAoc3RhdGU6YW55ID0gW10sIGFjdGlvbjpUb3BNZWRBY3Rpb25zVHlwZSkgPT4ge1xuICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgQWN0aW9uc1R5cGUuVE9QOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgdG9wOmFjdGlvbi5wYXlsb2FkfTtcbiAgICBjYXNlIEFjdGlvbnNUeXBlLkdST1VQOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZ3JvdXA6YWN0aW9uLnBheWxvYWR9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB0b3BNZWRSZWR1Y2VyOyIsImV4cG9ydCBlbnVtIEFjdGlvbnNUeXBlIHtcbiAgVE9QID0gXCJUT1BcIixcbiAgR1JPVVAgPSBcIkdST1VQXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb3BNZWRBY3Rpb257XG4gIHR5cGU6IHR5cGVvZiBBY3Rpb25zVHlwZS5UT1AsXG4gIHBheWxvYWQ6IGFueVxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoR3JvdXBBY3Rpb257XG4gIHR5cGU6IHR5cGVvZiBBY3Rpb25zVHlwZS5HUk9VUCxcbiAgcGF5bG9hZDphbnlcbn1cblxuZXhwb3J0IHR5cGUgVG9wTWVkQWN0aW9uc1R5cGUgPSBUb3BNZWRBY3Rpb24gfCBTZWFyY2hHcm91cEFjdGlvbjsiLCJleHBvcnQgY29uc3QgYWRyZXNzOnN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnO1xuZXhwb3J0IGNvbnN0IGFkcmVzc1NlcnZlcjpzdHJpbmcgPSAnaHR0cDovLzE3OC4xMjguMTc2Ljg3OjUwMDAnO1xuZXhwb3J0IGNvbnN0IG1vbmdvTG9jYWw6c3RyaW5nID0gJ21vbmdvZGIrc3J2Oi8vb3B0aW1lcng6MzM3N0BleGFtcGxlLjNhY2V2Lm1vbmdvZGIubmV0L09wdGltZVJYJztcbmV4cG9ydCBjb25zdCBtb25nb1NlcnZlcjpzdHJpbmcgPSAnbW9uZ29kYitzcnY6Ly9vcHRpbWVyeDozMzc3QGV4YW1wbGUuM2FjZXYubW9uZ29kYi5uZXQvT3B0aW1lUlgnOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==