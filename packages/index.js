'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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

var css_248z$1 = ".slider-stm_container__213S- {\n  position: relative;\n}\n.slider-stm_wrapper__1O_lh {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.slider-stm_sliders__3DQCb {\n  width: 100%;\n  height: 100%;\n  transform: translate3d(-100%, 0, 0);\n  padding: 0;\n  margin: 0;\n  white-space: nowrap;\n}\n.slider-stm_wrapper__1O_lh:not(:hover) .slider-stm_arrow__10fpq {\n  opacity: 0;\n  transition: 0.5s;\n}\n.slider-stm_arrow__10fpq {\n  position: absolute;\n  top: 50%;\n  transition: 0.5s;\n  transform: translateY(-50%);\n  border: none;\n  border-radius: 20px;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.slider-stm_left__3rpN5 {\n  left: 10px;\n}\n.slider-stm_right__1RtjJ {\n  right: 10px;\n}\n.slider-stm_dot_container__uDcra {\n  position: absolute;\n  height: 50px;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.slider-stm_dot__3ZiQY {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n";
var css$1 = {
  "container": "slider-stm_container__213S-",
  "wrapper": "slider-stm_wrapper__1O_lh",
  "sliders": "slider-stm_sliders__3DQCb",
  "arrow": "slider-stm_arrow__10fpq",
  "left": "slider-stm_left__3rpN5",
  "right": "slider-stm_right__1RtjJ",
  "dot_container": "slider-stm_dot_container__uDcra",
  "dot": "slider-stm_dot__3ZiQY"
};
styleInject(css_248z$1);

var css_248z = ".slide-stm_item__yXB6Y {\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  height: 100%;\n}\n.slide-stm_inner__RhBi1 {\n  width: 100%;\n  height: 100%;\n}\n.slide-stm_flex__3NjoX {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n.slide-stm_topLeft__3uPlx {\n  align-items: flex-start;\n}\n.slide-stm_topCenter__38vdi {\n  align-items: center;\n}\n.slide-stm_topRight__17Nfr {\n  align-items: flex-end;\n}\n.slide-stm_centerRight__2waYk {\n  justify-content: center;\n  align-items: flex-end;\n}\n.slide-stm_centerLeft__Hj3XW {\n  justify-content: center;\n  align-items: flex-start;\n}\n.slide-stm_center__1PpqE {\n  justify-content: center;\n  align-items: center;\n}\n.slide-stm_bottomLeft__16pX8 {\n  justify-content: flex-start;\n}\n.slide-stm_bottomRight__3vX6c {\n  justify-content: flex-end;\n}\n.slide-stm_bottomCenter__3GnxM {\n  justify-content: flex-end;\n  align-items: center;\n}\n";
var css = {
  "item": "slide-stm_item__yXB6Y",
  "inner": "slide-stm_inner__RhBi1",
  "flex": "slide-stm_flex__3NjoX",
  "topLeft": "slide-stm_topLeft__3uPlx",
  "topCenter": "slide-stm_topCenter__38vdi",
  "topRight": "slide-stm_topRight__17Nfr",
  "centerRight": "slide-stm_centerRight__2waYk",
  "centerLeft": "slide-stm_centerLeft__Hj3XW",
  "center": "slide-stm_center__1PpqE",
  "bottomLeft": "slide-stm_bottomLeft__16pX8",
  "bottomRight": "slide-stm_bottomRight__3vX6c",
  "bottomCenter": "slide-stm_bottomCenter__3GnxM"
};
styleInject(css_248z);

var SliderItem = function SliderItem(_a) {
  var children = _a.children,
      index = _a.index,
      className = _a.className,
      style = _a.style,
      content = _a.content,
      bgImage = _a.bgImage;

  var contentPosition = function contentPosition(position) {
    switch (position) {
      case 'topLeft':
        return css.topLeft;

      case 'topCenter':
        return css.topCenter;

      case 'topRight':
        return css.topRight;

      case 'centerLeft':
        return css.centerLeft;

      case 'center':
        return css.center;

      case 'centerRight':
        return css.centerRight;

      case 'bottomLeft':
        return css.bottomLeft;

      case 'bottomCenter':
        return css.bottomCenter;

      case 'bottomRight':
        return css.bottomRight;

      default:
        return undefined;
    }
  };

  var background = bgImage ? {
    backgroundImage: "url(" + bgImage.url + ")",
    backgroundRepeat: bgImage.repeat || 'no-repeat',
    backgroundSize: bgImage.size || 'cover'
  } : {};
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: css.item + " " + (className || ''),
    "dat-index": index,
    style: style
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: css.inner + " " + (contentPosition(content) ? contentPosition(content) + " " + css.flex : ''),
    style: background
  }, children));
};

var useInterval = function useInterval(callback, delay) {
  var savedCallback = React.useRef(callback); // Remember the latest callback if it changes.

  React.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  React.useEffect(function () {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return;
    }

    var id = setInterval(function () {
      return savedCallback.current();
    }, delay);
    return function () {
      return clearInterval(id);
    };
  }, [delay]);
};

var Dot = function Dot(_a) {
  var color = _a.color,
      onClick = _a.onClick,
      index = _a.index,
      className = _a.className;

  var handleClick = function handleClick(event) {
    event.preventDefault();
    onClick ? onClick(index) : undefined;
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: handleClick,
    "data-target-dot": index,
    className: className || ''
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 426.667 426.667",
    fill: color || '#d2d2d2'
  }, /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M213.333,106.667c-58.88,0-106.667,47.787-106.667,106.667S154.453,320,213.333,320S320,272.213,320,213.333     S272.213,106.667,213.333,106.667z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333     S331.2,0,213.333,0z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667     S384,119.04,384,213.333S307.627,384,213.333,384z"
  }))))));
};

var useTimeout = function useTimeout(callback, delay) {
  var savedCallback = React.useRef(callback); // Remember the latest callback if it changes.

  React.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the timeout.

  React.useEffect(function () {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return;
    }

    var id = setTimeout(function () {
      return savedCallback.current();
    }, delay);
    return function () {
      return clearTimeout(id);
    };
  }, [delay]);
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
      height = _a.height,
      autoPlay = _a.autoPlay,
      dotColor = _a.dotColor,
      dot = _a.dot,
      dotActive = _a.dotActive; //

  var _b = React.useState(1),
      index = _b[0],
      setIndex = _b[1];

  var _c = React.useState(autoPlay || false),
      autoRun = _c[0],
      setAutoRun = _c[1];

  var _d = React.useState(0),
      transDuration = _d[0],
      setTransitionDuration = _d[1];

  var childrenCount = React.Children.count(children);

  var PrevSlide = function PrevSlide(event) {
    event.preventDefault();
    setAutoRun(false);
    setTransitionDuration(500);
    setIndex(function (prev) {
      return prev - 1;
    });
  };

  var NextSlide = function NextSlide(event) {
    setTransitionDuration(500);
    event.preventDefault();
    setAutoRun(false);
    setIndex(function (prev) {
      return prev + 1;
    });
  };

  var onDotClick = function onDotClick(index) {
    setIndex(index);
  };

  if (autoRun) {
    useInterval(function () {
      setTransitionDuration(500);
      setIndex(function (prev) {
        return prev + 1;
      });
    }, typeof autoPlay === 'number' ? autoPlay : 7000);
  }

  if (autoPlay && !autoRun) {
    useTimeout(function () {
      setAutoRun(true);
    }, typeof autoPlay === 'number' ? autoPlay : 7000);
  }

  React.useEffect(function () {
    if (index === 0) {
      setTimeout(function () {
        setTransitionDuration(0);
        setIndex(4);
      }, transition || 500);
    } else if (index === childrenCount + 1) {
      setTimeout(function () {
        setTransitionDuration(0);
        setIndex(1);
      }, transition || 500);
    }

    for (var i = 0; i < childrenCount; i++) {
      var active = document.querySelector("div[data-target-dot=\"" + (i + 1) + "\"] svg");

      if (active && i + 1 !== index) {
        active.style.fill = dotColor || '#d2d2d2';
      } else if (active && i + 1 === index) {
        active.style.fill = dotActive || '#fff';
      }
    }

    return function () {
      return undefined;
    };
  }, [index]); // render slides items

  var slideItems = function slideItems() {
    return React.Children.map(children, function (child, index) {
      if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
        return /*#__PURE__*/React__default['default'].createElement(SliderItem, __assign({
          key: index
        }, child.props), child.props.children);
      }
    });
  }; // render slides items cloned before


  var slideItemsclonedBefore = function slideItemsclonedBefore() {
    return React.Children.map(children, function (child, index) {
      if (index + 1 === childrenCount) {
        if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
          return /*#__PURE__*/React__default['default'].createElement(SliderItem, __assign({
            key: index
          }, child.props), child.props.children);
        }
      }
    });
  }; // render slides items cloned after


  var slideItemsclonedAfter = function slideItemsclonedAfter() {
    return React.Children.map(children, function (child, index) {
      if (index === 0) {
        if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
          return /*#__PURE__*/React__default['default'].createElement(SliderItem, __assign({
            key: index
          }, child.props), child.props.children);
        }
      }
    });
  }; // const cloneBefore = () => {
  //   return Children.map(
  //     children,
  //     (slide: SliderItemProps | ReactNode, index: number) => {
  //       if (index + 1 === childrenCount) {
  //         return (
  //           <SliderItem key={index} index={index} children={slide} />
  //         );
  //       }
  //     },
  //   );
  // };
  // const cloneAfter = () => {
  //   return Children.map(
  //     children,
  //     (slide: SliderItemProps | ReactNode, index: number) => {
  //       if (index === 0) {
  //         return (
  //           <SliderItem key={index} index={index} children={slide} />
  //         );
  //       }
  //     },
  //   );
  // };
  // Arrow controller


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

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: css$1.container
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: css$1.wrapper,
    style: {
      height: height || ''
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: css$1.sliders,
    style: {
      transform: "translate3d(" + -index * 100 + "%,0,0)",
      transitionDuration: transDuration + "ms"
    }
  }, slideItemsclonedBefore(), slideItems(), slideItemsclonedAfter()), /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: PrevSlide,
    className: css$1.arrow + " " + css$1.left
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arrowSizes(arrowSize),
    height: arrowSizes(arrowSize),
    viewBox: "0 0 24 24",
    fill: arrowColor || '#fff'
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: NextSlide,
    className: css$1.arrow + " " + css$1.right
  }, /*#__PURE__*/React__default['default'].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arrowSizes(arrowSize),
    height: arrowSizes(arrowSize),
    viewBox: "0 0 24 24",
    fill: arrowColor || '#fff'
  }, /*#__PURE__*/React__default['default'].createElement("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z"
  }))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: css$1.dot_container,
    style: dot === false ? {
      display: 'none'
    } : {}
  }, React.Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
      return /*#__PURE__*/React__default['default'].createElement(Dot, {
        key: index,
        index: child.props.index || index + 1,
        color: dotColor,
        className: css$1.dot,
        onClick: onDotClick
      });
    } else {
      return /*#__PURE__*/React__default['default'].createElement(Dot, {
        key: index,
        index: index + 1,
        color: dotColor,
        className: css$1.dot,
        onClick: onDotClick
      });
    }
  })))));
};

exports.Slider = Slider;
exports.SliderItem = SliderItem;
//# sourceMappingURL=index.js.map
