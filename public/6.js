(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/components/Register/Register.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Register/Register.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _TextError_TextError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TextError/TextError */ "./resources/js/components/TextError/TextError.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_apiUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/apiUrl */ "./resources/js/components/shared/apiUrl.js");
/* harmony import */ var _Spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Spinner/Spinner */ "./resources/js/components/Spinner/Spinner.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Register = function Register(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loging = _useState6[0],
      setLoging = _useState6[1];

  var onSubmit = function onSubmit(values, onSubmitProps) {
    setLoging(true);
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(_shared_apiUrl__WEBPACK_IMPORTED_MODULE_6__["REGISTER_URL"], values).then(function (response) {
      setMessage(response.data.message);
      onSubmitProps.setSubmitting(false);
      setLoging(false);
    })["catch"](function (error) {
      setError(true);
      onSubmitProps.setSubmitting(false);
      setLoging(false);
    });
  };

  var initialValues = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  };
  var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]({
    username: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().required('This field is required!').matches(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/, 'Invalid username format!'),
    email: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().email("Invalid email format!").required('This field is required!'),
    password: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[.,:;^@$!%*#?&])[A-Za-z\d@.,:;^@$!%*#?&]{1,}$/, "Must be 1 character, 1 number and 1 special character!").min(8, "Must be 8 charachters long").required("This field is required!"),
    password_confirmation: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[.,:;^@$!%*#?&])[A-Za-z\d@.,:;^@$!%*#?&]{1,}$/, "Must be 1 character, 1 number and 1 special character!").min(8, "Must be 8 charachters long").required("This field is required!")
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-register-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Create account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema
  }, function (formik) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "username"
    }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      type: "text",
      id: "username",
      name: "username"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "username",
      component: _TextError_TextError__WEBPACK_IMPORTED_MODULE_3__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email"
    }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      type: "email",
      id: "email",
      name: "email"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "email",
      component: _TextError_TextError__WEBPACK_IMPORTED_MODULE_3__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password"
    }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      type: "password",
      id: "password",
      name: "password"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "password",
      component: _TextError_TextError__WEBPACK_IMPORTED_MODULE_3__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password_confirmation"
    }, "Repeat Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      type: "password",
      id: "password_confirmation",
      name: "password_confirmation"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["ErrorMessage"], {
      name: "password_confirmation",
      component: _TextError_TextError__WEBPACK_IMPORTED_MODULE_3__["default"]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      disabled: !formik.isValid || formik.isSubmitting
    }, "Create account")), error === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "error-handler"
    }, "Something went wrong, please try again!") : null, message !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message"
    }, message) : null));
  }), loging ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], null) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Register));

/***/ }),

/***/ "./resources/js/components/TextError/TextError.js":
/*!********************************************************!*\
  !*** ./resources/js/components/TextError/TextError.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TextError(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error"
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (TextError);

/***/ })

}]);