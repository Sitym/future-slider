import React, { useRef, useEffect, useState, Children } from 'react';

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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

var css_248z$2 = ".slider-stm_container__14yVJ {\n  position: relative; }\n  .slider-stm_container__14yVJ .slider-stm_wrapper__1COnn {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    overflow: hidden; }\n    .slider-stm_container__14yVJ .slider-stm_wrapper__1COnn .slider-stm_sliders__T28cV {\n      width: 100%;\n      height: 100%;\n      transform: translate3d(-100%, 0, 0);\n      padding: 0;\n      margin: 0;\n      display: flex;\n      white-space: nowrap; }\n\n.slider-stm_wrapper__1COnn:not(:hover) .slider-stm_arrow__1YRw1 {\n  opacity: 0;\n  transition: 0.5s; }\n\n.slider-stm_wrapper__1COnn:not(:hover) .slider-stm_dot_container__28c8- {\n  opacity: 0;\n  transition: 0.5s; }\n\n.slider-stm_arrow__1YRw1 {\n  position: absolute;\n  top: 50%;\n  transition: 0.5s;\n  transform: translateY(-50%);\n  border: none;\n  border-radius: 20px;\n  padding: 5px 10px;\n  cursor: pointer; }\n\n.slider-stm_left__3PFer {\n  left: 10px; }\n\n.slider-stm_right__2JclY {\n  right: 10px; }\n\n.slider-stm_dot_container__28c8- {\n  position: absolute;\n  height: 50px;\n  bottom: 0;\n  transition: 0.5s;\n  left: 50%;\n  transform: translateX(-50%);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center; }\n  .slider-stm_dot_container__28c8- .slider-stm_dot__3zbG7 {\n    width: 20px;\n    height: 20px;\n    margin-right: 10px;\n    cursor: pointer; }\n";
var css$2 = {
  "container": "slider-stm_container__14yVJ",
  "wrapper": "slider-stm_wrapper__1COnn",
  "sliders": "slider-stm_sliders__T28cV",
  "arrow": "slider-stm_arrow__1YRw1",
  "dot_container": "slider-stm_dot_container__28c8-",
  "left": "slider-stm_left__3PFer",
  "right": "slider-stm_right__2JclY",
  "dot": "slider-stm_dot__3zbG7"
};
styleInject(css_248z$2);

var css_248z$1 = ".slide-stm_item__3nbXB {\n  flex: none;\n  width: 100%; }\n\n.slide-stm_inner__3IIX_ {\n  width: 100%;\n  height: 100%; }\n\n.slide-stm_flex__1a8IR {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%; }\n\n.slide-stm_topLeft__2p-4S {\n  align-items: flex-start; }\n\n.slide-stm_topCenter__tlS17 {\n  align-items: center; }\n\n.slide-stm_topRight__3U4cL {\n  align-items: flex-end; }\n\n.slide-stm_centerRight__15AsZ {\n  justify-content: center;\n  align-items: flex-end; }\n\n.slide-stm_centerLeft__HR8p7 {\n  justify-content: center;\n  align-items: flex-start; }\n\n.slide-stm_center__FNl8Z {\n  justify-content: center;\n  align-items: center; }\n\n.slide-stm_bottomLeft__YqbMV {\n  justify-content: flex-start; }\n\n.slide-stm_bottomRight__2Np13 {\n  justify-content: flex-end; }\n\n.slide-stm_bottomCenter__veSCw {\n  justify-content: flex-end;\n  align-items: center; }\n";
var css$1 = {
  "item": "slide-stm_item__3nbXB",
  "inner": "slide-stm_inner__3IIX_",
  "flex": "slide-stm_flex__1a8IR",
  "topLeft": "slide-stm_topLeft__2p-4S",
  "topCenter": "slide-stm_topCenter__tlS17",
  "topRight": "slide-stm_topRight__3U4cL",
  "centerRight": "slide-stm_centerRight__15AsZ",
  "centerLeft": "slide-stm_centerLeft__HR8p7",
  "center": "slide-stm_center__FNl8Z",
  "bottomLeft": "slide-stm_bottomLeft__YqbMV",
  "bottomRight": "slide-stm_bottomRight__2Np13",
  "bottomCenter": "slide-stm_bottomCenter__veSCw"
};
styleInject(css_248z$1);

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
        return css$1.topLeft;

      case 'topCenter':
        return css$1.topCenter;

      case 'topRight':
        return css$1.topRight;

      case 'centerLeft':
        return css$1.centerLeft;

      case 'center':
        return css$1.center;

      case 'centerRight':
        return css$1.centerRight;

      case 'bottomLeft':
        return css$1.bottomLeft;

      case 'bottomCenter':
        return css$1.bottomCenter;

      case 'bottomRight':
        return css$1.bottomRight;

      default:
        return undefined;
    }
  };

  var background = bgImage ? {
    backgroundImage: "url(" + bgImage.url + ")",
    backgroundRepeat: bgImage.repeat || 'no-repeat',
    backgroundSize: bgImage.size || 'cover'
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    className: css$1.item + " " + (className || ''),
    "dat-index": index,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: css$1.inner + " " + (contentPosition(content) ? contentPosition(content) + " " + css$1.flex : ''),
    style: background
  }, children));
};

var useInterval = function useInterval(callback, delay) {
  var savedCallback = useRef(callback); // Remember the latest callback if it changes.

  useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  useEffect(function () {
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

  return /*#__PURE__*/React.createElement("div", {
    onClick: handleClick,
    "data-target-dot": index,
    className: className || ''
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 426.667 426.667",
    fill: color || '#d2d2d2'
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M213.333,106.667c-58.88,0-106.667,47.787-106.667,106.667S154.453,320,213.333,320S320,272.213,320,213.333     S272.213,106.667,213.333,106.667z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333     S331.2,0,213.333,0z M213.333,384c-94.293,0-170.667-76.373-170.667-170.667S119.04,42.667,213.333,42.667     S384,119.04,384,213.333S307.627,384,213.333,384z"
  }))))));
};

var useTimeout = function useTimeout(callback, delay) {
  var savedCallback = useRef(callback); // Remember the latest callback if it changes.

  useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the timeout.

  useEffect(function () {
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

  var _b = useState(1),
      index = _b[0],
      setIndex = _b[1];

  var _c = useState(autoPlay || false),
      autoRun = _c[0],
      setAutoRun = _c[1];

  var _d = useState(0),
      transDuration = _d[0],
      setTransitionDuration = _d[1];

  var childrenCount = Children.count(children);

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

  useEffect(function () {
    var timer = setTimeout(function () {
      if (index === 0) {
        setTransitionDuration(0);
        setIndex(childrenCount);
      } else if (index === childrenCount + 1) {
        setTransitionDuration(0);
        setIndex(1);
      }
    }, transition || 500);

    for (var i = 0; i < childrenCount; i++) {
      var active = document.querySelector("div[data-target-dot=\"" + (i + 1) + "\"] svg");

      if (active && i + 1 !== index) {
        active.style.fill = dotColor || '#d2d2d2';
      } else if (active && i + 1 === index) {
        active.style.fill = dotActive || '#fff';
      }
    }

    return function () {
      return clearTimeout(timer);
    };
  }, [index]); // render slides items

  var slideItems = function slideItems() {
    return Children.map(children, function (child, index) {
      if ( /*#__PURE__*/React.isValidElement(child)) {
        return /*#__PURE__*/React.createElement(SliderItem, __assign({
          key: index
        }, child.props), child.props.children);
      }
    });
  }; // render slides items cloned before


  var slideItemsclonedBefore = function slideItemsclonedBefore() {
    return Children.map(children, function (child, index) {
      if (index + 1 === childrenCount) {
        if ( /*#__PURE__*/React.isValidElement(child)) {
          return /*#__PURE__*/React.createElement(SliderItem, __assign({
            key: index
          }, child.props), child.props.children);
        }
      }
    });
  }; // render slides items cloned after


  var slideItemsclonedAfter = function slideItemsclonedAfter() {
    return Children.map(children, function (child, index) {
      if (index === 0) {
        if ( /*#__PURE__*/React.isValidElement(child)) {
          return /*#__PURE__*/React.createElement(SliderItem, __assign({
            key: index
          }, child.props), child.props.children);
        }
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
    className: css$2.container
  }, /*#__PURE__*/React.createElement("div", {
    className: css$2.wrapper,
    style: {
      height: height || ''
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: css$2.sliders,
    style: {
      transform: "translate3d(" + -index * 100 + "%,0,0)",
      transitionDuration: transDuration + "ms"
    }
  }, slideItemsclonedBefore(), slideItems(), slideItemsclonedAfter()), /*#__PURE__*/React.createElement("div", {
    onClick: PrevSlide,
    className: css$2.arrow + " " + css$2.left
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
    className: css$2.arrow + " " + css$2.right
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: arrowSizes(arrowSize),
    height: arrowSizes(arrowSize),
    viewBox: "0 0 24 24",
    fill: arrowColor || '#fff'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: css$2.dot_container,
    style: dot === false ? {
      display: 'none'
    } : {}
  }, Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.createElement(Dot, {
        key: index,
        index: child.props.index || index + 1,
        color: dotColor,
        className: css$2.dot,
        onClick: onDotClick
      });
    } else {
      return /*#__PURE__*/React.createElement(Dot, {
        key: index,
        index: index + 1,
        color: dotColor,
        className: css$2.dot,
        onClick: onDotClick
      });
    }
  })))));
};

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var css_248z = ".typing-stm_typed__3wKI3 {\n  opacity: 1; }\n\n.typing-stm_blink__1MbOC {\n  animation: typing-stm_typedCursor__1YaQo 0.7s infinite;\n  -webkit-animation: typing-stm_typedCursor__1YaQo 0.7s infinite;\n  animation: typing-stm_typedCursor__1YaQo 0.7s infinite; }\n\n@keyframes typing-stm_typedCursor__1YaQo {\n  50% {\n    opacity: 0; } }\n\n@-webkit-keyframes typing-stm_typedCursor__1YaQo {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n";
var css = {
  "typed": "typing-stm_typed__3wKI3",
  "blink": "typing-stm_blink__1MbOC",
  "typedCursor": "typing-stm_typedCursor__1YaQo"
};
styleInject(css_248z);

var Typing = function Typing(_a) {
  var tag = _a.tag,
      children = _a.children,
      props = __rest(_a, ["tag", "children"]);

  if (typeof children !== 'string') {
    throw TypeError("Typing accept only string as child : Recieved type " + _typeof(children));
  }

  var tagName = tag || 'p';
  var wordLength = children.length;

  var _b = useState(''),
      word = _b[0],
      setWord = _b[1];

  var _c = useState(0),
      count = _c[0],
      setCount = _c[1];

  var _d = useState(false);
      _d[0];
      _d[1];

  useInterval(function () {
    var arr = children.split('');
    setWord(function (prev) {
      return prev.length < wordLength ? prev + arr[count] : children;
    });
  }, 100);
  useInterval(function () {
    if (count < wordLength) {
      setCount(function (prev) {
        return prev + 1;
      });
    }
  }, 100);
  useEffect(function () {
    var timer = setTimeout(function () {
      if (count === wordLength) {
        setCount(0);
        setWord('');
      }
    }, 1000);
    return function () {
      return clearTimeout(timer);
    };
  }, [count]);
  var child = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, word), /*#__PURE__*/React.createElement("span", {
    className: css.typed + " " + (count === wordLength || !count ? "" + css.blink : '')
  }, "|"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(tagName, props, child)));
};

export { Slider, SliderItem, Typing };
//# sourceMappingURL=index.js.map
