'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".slider-stm_intro__1WLRo {\n  font-size: 20px;\n  text-transform: uppercase;\n}\n";
var css = {
  "intro": "slider-stm_intro__1WLRo"
};
styleInject(css_248z);

/**
 * Simple proto slider
 * @param {React.ReactElement} children Children
 * @param {string} className Children
 * @param {string} id Children
 * @param {React.CSSProperties} style Children
 * @returns Slider
 */
var Slider = function Slider(_ref) {
    var children = _ref.children, className = _ref.className, id = _ref.id, style = _ref.style;
    return /*#__PURE__*/ React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/ React__default['default'].createElement("div", {
        className: "".concat(css.intro, " ").concat(className),
        id: id,
        style: style
    }, children));
};

exports.Slider = Slider;
//# sourceMappingURL=index.js.map
