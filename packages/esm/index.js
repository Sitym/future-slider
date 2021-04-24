import React, { useState, useEffect, Children } from 'react';

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

var css_248z$1 = ".slider-stm_container__213S- {\n  position: relative;\n}\n.slider-stm_wrapper__1O_lh {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.slider-stm_sliders__3DQCb {\n  width: 100%;\n  height: 100%;\n  transform: translate3d(-100%, 0, 0);\n  padding: 0;\n  margin: 0;\n  white-space: nowrap;\n}\n.slider-stm_arrow__10fpq {\n  position: absolute;\n  top: 50%;\n  border: none;\n  border-radius: 20px;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.slider-stm_left__3rpN5 {\n  left: 10px;\n}\n.slider-stm_right__1RtjJ {\n  right: 10px;\n}\n";
var css$1 = {
  "container": "slider-stm_container__213S-",
  "wrapper": "slider-stm_wrapper__1O_lh",
  "sliders": "slider-stm_sliders__3DQCb",
  "arrow": "slider-stm_arrow__10fpq",
  "left": "slider-stm_left__3rpN5",
  "right": "slider-stm_right__1RtjJ"
};
styleInject(css_248z$1);

var css_248z = ".slide-stm_item__yXB6Y {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n";
var css = {
  "item": "slide-stm_item__yXB6Y"
};
styleInject(css_248z);

var SliderItem = function SliderItem(_a) {
  var children = _a.children,
      index = _a.index,
      className = _a.className,
      style = _a.style;
  return /*#__PURE__*/React.createElement("div", {
    className: css.item + " " + className,
    "dat-index": index,
    style: style
  }, children);
};

/**
 * SiTYM sliders doesn't re-render.
 *
 */

var Slider = function Slider(_a) {
  var children = _a.children,
      transition = _a.transition,
      arrowColor = _a.arrowColor,
      arrowSize = _a.arrowSize,
      height = _a.height; //

  var _b = useState(1),
      index = _b[0],
      setIndex = _b[1];

  var _c = useState(0),
      transDuration = _c[0],
      setTransitionDuration = _c[1];

  var PrevSlide = function PrevSlide(event) {
    event.preventDefault();
    setTransitionDuration(500);
    setIndex(function (prev) {
      return prev - 1;
    });
  };

  var NextSlide = function NextSlide(event) {
    setTransitionDuration(500);
    event.preventDefault();
    setIndex(function (prev) {
      return prev + 1;
    });
  };

  useEffect(function () {
    // setTransitionDuration(0);
    if (index === 0) {
      setTimeout(function () {
        setTransitionDuration(0);
        setIndex(4);
      }, transition || 500);
    } else if (index === 5) {
      setTimeout(function () {
        setTransitionDuration(0);
        setIndex(1);
      }, transition || 500);
    }
  }, [index]);

  var slides = function slides() {
    return Children.map(children, function (slide, index) {
      return /*#__PURE__*/React.createElement(SliderItem, {
        key: index,
        index: index,
        children: slide
      });
    });
  };

  var cloneBefore = function cloneBefore() {
    return Children.map(children, function (slide, index) {
      if (index + 1 === (children === null || children === void 0 ? void 0 : children.length)) {
        return /*#__PURE__*/React.createElement(SliderItem, {
          key: index,
          index: index,
          children: slide
        });
      }
    });
  };

  var cloneAfter = function cloneAfter() {
    return Children.map(children, function (slide, index) {
      if (index === 0) {
        return /*#__PURE__*/React.createElement(SliderItem, {
          key: index,
          index: index,
          children: slide
        });
      }
    });
  }; // Arrow controller


  var arrowSizes = function arrowSizes(size) {
    switch (size) {
      case 1:
        return '25px';

      case 2:
        return '30px';

      case 3:
        return '35px';

      case 4:
        return '40px';

      case 5:
        return '45px';

      case 6:
        return '50px';

      default:
        return '35px';
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: css$1.container
  }, /*#__PURE__*/React.createElement("div", {
    className: css$1.wrapper,
    style: {
      height: height || ''
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: css$1.sliders,
    style: {
      transform: "translate3d(" + -index * 100 + "%,0,0)",
      transitionDuration: transDuration + "ms"
    }
  }, cloneBefore(), slides(), cloneAfter()), /*#__PURE__*/React.createElement("div", {
    onClick: PrevSlide,
    className: css$1.arrow + " " + css$1.left
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arrowSizes(arrowSize),
    height: arrowSizes(arrowSize),
    viewBox: "0 0 24 24",
    fill: arrowColor || '#fff'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: NextSlide,
    className: css$1.arrow + " " + css$1.right
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arrowSizes(arrowSize),
    height: arrowSizes(arrowSize),
    viewBox: "0 0 24 24",
    fill: arrowColor || '#fff'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z"
  }))))));
};

export { Slider, SliderItem };
//# sourceMappingURL=index.js.map
