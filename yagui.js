!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.yagui=e():t.yagui=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=16)}([function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(){n(this,t)}return t.prototype._getInitialValue=function(t,e){return"string"!=typeof e?t:t[e]},t.prototype._getCheckCallback=function(t,e){return"string"!=typeof e?e:function(o){t[e]=o}},t.prototype._setDomContainer=function(t){this.domContainer=t},t.prototype.setCallback=function(t){this.callback=t},t.prototype.setVisibility=function(t){this.domContainer&&(this.domContainer.hidden=!t)},t}();e.a=i},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=o(9),r=o(10),a=o(11),s=o(12),u=o(14),d=o(15),l=function(){function t(){n(this,t)}return t.prototype._addLine=function(t){var e=document.createElement("li");return e.innerHTML=t||"",this.domUl.appendChild(e),e},t.prototype._createLabel=function(t){var e=document.createElement("label");return e.className="gui-label-side",e.innerHTML=t||"",e},t.prototype._setDomContainer=function(t){this.domContainer=t},t.prototype.addTitle=function(t){var e=new d.a(t);return this.domUl.appendChild(e.domText),e},t.prototype.addCheckbox=function(t,e,o){var n=new r.a(e,o),i=this._addLine();i.className+=" gui-pointerOnHover gui-glowOnHover";var a=this._createLabel(t);return a.style.overflow="visible",a.className+=" gui-pointerOnHover",i.appendChild(a),i.appendChild(n.domCheckbox),i.appendChild(n.domLabelCheckbox),i.addEventListener("mousedown",n._onMouseDown.bind(n)),n._setDomContainer(i),n},t.prototype.addCombobox=function(t,e,o,n){var i=new s.a(e,o,n),r=this._addLine();return t?r.appendChild(this._createLabel(t)):i.domSelect.style.width="100%",r.appendChild(i.domSelect),i._setDomContainer(r),i},t.prototype.addSlider=function(t,e,o,n,i,r){var a=new u.a(e,o,n,i,r),s=this._addLine();return t&&s.appendChild(this._createLabel(t)),s.appendChild(a.domInputText),s.appendChild(a.domSlider),a._setDomContainer(s),a},t.prototype.addColor=function(t,e,o){var n=new a.a(e,o),i=this._addLine();return t?i.appendChild(this._createLabel(t)):n.domColor.style.width="100%",i.appendChild(n.domColor),n._setDomContainer(i),n},t.prototype.addButton=function(t,e,o){var n=new i.a(t,e,o),r=this._addLine();return r.appendChild(n.domButton),n._setDomContainer(r),n},t.prototype.addDualButton=function(t,e,o,n,r,a){var s=new i.a(t,o,r),u=new i.a(e,n,a),d=this._addLine();d.appendChild(u.domButton),d.appendChild(s.domButton);var l=s.domButton.style,c=u.domButton.style;return l.width=c.width="49%",l.marginRight=c.marginLeft="1%",s._setDomContainer(d),u._setDomContainer(d),[s,u]},t.prototype.setVisibility=function(t){this.domContainer&&(this.domContainer.hidden=!t)},t}();e.a=l},function(t,e,o){"use strict";var n={};n.rgbToHsv=function(t){var e=t[0],o=t[1],n=t[2],i=Math.max(e,o,n),r=Math.min(e,o,n);if(r===i)return[0,0,r];var a=e===r?o-n:n===r?e-o:n-e;return[((e===r?3:n===r?1:5)-a/(i-r))/6,(i-r)/i,i]},n.hsvToRgb=function(t){var e=6*t[0],o=t[1],n=t[2],i=Math.floor(e),r=e-i,a=n*(1-o),s=n*(1-r*o),u=n*(1-(1-r)*o),d=i%6;return 0===d?[n,u,a]:1===d?[s,n,a]:2===d?[a,n,u]:3===d?[a,s,n]:4===d?[u,a,n]:[n,a,s]},n.getValidColor=function(t){for(var e=0,o=t.length;e<o;++e)t[e]=Math.max(0,Math.min(1,t[e]));return t},n.getStrColor=function(t){return 3===t.length?n.rgbToHex(t):"rgba("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+","+t[3]+")"},n.getColorMult=function(t,e){var o=[t[0]*e,t[1]*e,t[2]*e];return 4===t.length&&o.push(t[3]),n.getValidColor(o)},n.getColorAdd=function(t,e){var o=[t[0]+e,t[1]+e,t[2]+e];return 4===t.length&&o.push(t[3]),n.getValidColor(o)},n.rgbToHex=function(t){for(var e="#",o=0;o<3;++o){var n=Math.round(255*t[o]).toString(16);e+=1===n.length?"0"+n:n}return e},n.hexToRgb=function(t){var e=0;"#"===t[0]&&(t=t.slice(1));var o=t;if(t.length>6)o=t.slice(0,6);else if(t.length<6)for(o="",e=0;e<3;++e)o+=t[e]?t[e]+t[e]:"00";var n=[0,0,0];for(e=0;e<3;++e){var i=parseInt(o[2*e]+o[2*e+1],16);n[e]=(i!==i?0:i)/255}return n},e.a=n},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=o(6),r=o(7),a=function(){function t(e,o){n(this,t),this.domMain=document.createElement("div"),this.viewport=e,this.callbackResize=o,this.viewport&&(this.viewport.style.width=document.documentElement.clientWidth+"px",this.viewport.style.height=document.documentElement.clientHeight+"px"),this.cbResize_=this._onWindowResize.bind(this),document.body.appendChild(this.domMain),this.leftSidebar=void 0,this.rightSidebar=void 0,this.topbar=void 0,window.addEventListener("resize",this._onWindowResize.bind(this),!1)}return t.prototype._onWindowResize=function(){this.viewport&&(this.viewport.style.width=document.documentElement.clientWidth+"px",this.viewport.style.height=document.documentElement.clientHeight+"px",this.viewport.style.left="0px",this.viewport.style.top="0px",this.leftSidebar&&this.leftSidebar._updateViewportPosition(this.viewport),this.rightSidebar&&this.rightSidebar._updateViewportPosition(this.viewport),this.topbar&&this.topbar._updateViewportPosition(this.viewport)),this._updateSidebarsPosition(),this.callbackResize&&this.callbackResize()},t.prototype._updateSidebarsPosition=function(){if(this.topbar){var t=this.topbar.domTopbar.offsetHeight;this.leftSidebar&&this.leftSidebar._setTop(t),this.rightSidebar&&this.rightSidebar._setTop(t)}},t.prototype.addLeftSidebar=function(){this.leftSidebar=new i.a(this.cbResize_);var t=this.leftSidebar.domSidebar;return this.domMain.appendChild(t),this.domMain.appendChild(this.leftSidebar.domResize),this._updateSidebarsPosition(),this.leftSidebar._updateViewportPosition(this.viewport),this.leftSidebar},t.prototype.addRightSidebar=function(){this.rightSidebar=new i.a(this.cbResize_);var t=this.rightSidebar.domSidebar;return this.domMain.appendChild(t),this.domMain.appendChild(this.rightSidebar.domResize),this.rightSidebar._onTheRight(),this._updateSidebarsPosition(),this.rightSidebar._updateViewportPosition(this.viewport),this.rightSidebar},t.prototype.addTopbar=function(){return this.topbar=new r.a(this.cbResize_),this.domMain.appendChild(this.topbar.domTopbar),this._updateSidebarsPosition(),this.topbar._updateViewportPosition(this.viewport),this.topbar},t.prototype.setVisibility=function(t){this.domMain.hidden=!t,this._onWindowResize()},t}();e.default=a},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(1),s=function(t){function e(o){n(this,e);var r=i(this,t.call(this));r.domUl=document.createElement("ul"),r.domUl.setAttribute("opened",!0);var a=document.createElement("label");return a.innerHTML=o||"",a.addEventListener("mousedown",r._onMouseDown.bind(r)),r.domUl.appendChild(a),r.isOpen=!0,r}return r(e,t),e.prototype._onMouseDown=function(){this.isOpen=!this.isOpen,this.domUl.setAttribute("opened",this.isOpen)},e.prototype.open=function(){this.isOpen=!0,this.domUl.setAttribute("opened",!0)},e.prototype.close=function(){this.isOpen=!1,this.domUl.setAttribute("opened",!1)},e.prototype.setVisibility=function(t){t?this.isOpen&&this.domUl.setAttribute("opened",!0):this.domUl.setAttribute("opened",!1),this.domUl.style.height=t?"auto":"0px"},e}(a.a);e.a=s},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(1),s=o(13),u=function(t){function e(){n(this,e);var o=i(this,t.call(this));return o.domUl=document.createElement("ul"),o}return r(e,t),e.prototype.addButton=function(t,e,o,n){var i=new s.a(e,o,n),r=this._addLine(t);return r.appendChild(i.domSpan),i._setDomContainer(r),i},e.prototype.addSlider=function(e,o,n,i,r,a){var s=t.prototype.addSlider.call(this,e,o,n,i,r,a);return s.domInputText.style.width="18%",s.domSlider.style.width=e?"44%":"80%",s},e}(a.a);e.a=u},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=o(4),r=function(){function t(e){n(this,t),this.domSidebar=document.createElement("div"),this.domSidebar.className="gui-sidebar",this.domResize=document.createElement("div"),this.domResize.className="gui-resize",this.isDragging=!1,this.mouseX=0,this.domResize.addEventListener("mousedown",this._onMouseDown.bind(this)),window.addEventListener("mousemove",this._onMouseMove.bind(this)),window.addEventListener("mouseup",this._onMouseUp.bind(this)),this.callbackResize=e,this.isOnTheRight=!1}return t.prototype._setTop=function(t){this.domSidebar.style.top=this.domResize.style.top=t+"px"},t.prototype._onTheRight=function(){this.isOnTheRight=!0,this.domSidebar.style.right=0,this.domSidebar.style.borderRight=0,this.domSidebar.style.borderLeft="double",this.domSidebar.style.borderColor="rgba(255,255,255,0.3)",this.domResize.style.left="auto",this.domResize.style.right=this.domSidebar.offsetWidth+"px",this.domResize.style.marginRight="-3px"},t.prototype._onMouseDown=function(t){this.isDragging=!0,this.mouseX=t.clientX},t.prototype._updateViewportPosition=function(t){var e=this.domSidebar.hidden?0:this.domSidebar.offsetWidth;this.isOnTheRight?t.style.width=t.clientWidth-e+"px":(t.style.left=this.domSidebar.offsetLeft+e+"px",t.style.width=t.clientWidth-e+"px")},t.prototype._onMouseMove=function(t){if(this.isDragging!==!1){var e=t.clientX,o=e-this.mouseX;this.isOnTheRight&&(o=-o);var n=Math.max(50,this.domSidebar.offsetWidth+o),i=n+"px";this.domSidebar.style.width=i,this.isOnTheRight?this.domResize.style.right=this.domSidebar.offsetWidth+"px":this.domResize.style.left=i,this.mouseX=e,this.callbackResize()}},t.prototype._onMouseUp=function(){this.isDragging=!1},t.prototype.addMenu=function(t){var e=new i.a(t);return this.domSidebar.appendChild(e.domUl),e},t.prototype.setVisibility=function(t){this.domSidebar.hidden=!t,this.domResize.hidden=!t,this.callbackResize()},t}();e.a=r},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=o(5),r=o(8),a=function(){function t(e){n(this,t),this.domTopbar=document.createElement("div"),this.domTopbar.className="gui-topbar",this.domUl=document.createElement("ul"),this.domTopbar.appendChild(this.domUl),this.callbackResize=e,this.uiExtra={}}return t.prototype._updateViewportPosition=function(t){var e=this.domTopbar.hidden?0:this.domTopbar.offsetHeight;t.style.top=e+"px",t.style.height=t.clientHeight-e+"px"},t.prototype._onChangeColor=function(t,e){t(e),this.uiExtra.overallColor.setValue(r.a._curWidgetColor,!0),this.uiExtra.widgetColor.setValue(r.a._curWidgetColor,!0),this.uiExtra.backColor.setValue(r.a._curBackgroundColor,!0),this.uiExtra.textColor.setValue(r.a._curTextColor,!0)},t.prototype.addMenu=function(t){var e=new i.a,o=document.createElement("li");return o.innerHTML=t||"",this.domUl.appendChild(o),o.appendChild(e.domUl),e._setDomContainer(o),e},t.prototype.addExtra=function(){var t=this._onChangeColor,e=this.addMenu("Extra UI"),o=this.uiExtra;return e.addTitle("Overall"),o.overallColor=e.addColor("",r.a._curWidgetColor,t.bind(this,r.a.changeOverallColor)),e.addTitle("Advanced"),o.widgetColor=e.addColor("Widget",r.a._curWidgetColor,t.bind(this,r.a.changeWidgetsColor)),o.backColor=e.addColor("Back",r.a._curBackgroundColor,t.bind(this,r.a.changeBackgroundColor)),o.textColor=e.addColor("Text",r.a._curTextColor,t.bind(this,r.a.changeTextColor)),o.showBorder=e.addCheckbox("Border",r.a._curShowBorder,r.a.changeDisplayBoorder),e},t.prototype.setVisibility=function(t){this.domTopbar.hidden=!t,this.callbackResize()},t}();e.a=a},function(t,e,o){"use strict";var n=o(2),i={};i.refRules={};var r,a=function(){if(r)return r;for(var t=document.styleSheets,e=0,o=t.length;e<o;++e){var n=t[e].href;if(n&&n.indexOf("yagui.css")!==-1)return r=t[e]}},s=function(t,e,o){var n=a();if(n){var r=n.cssRules||n.rules,s=i.refRules[t];if(!s){var u=0,d=r.length;for(u=0;u<d&&r[u].selectorText!==t;++u);if(u===d)return!1;s=i.refRules[t]=r[u]}s&&(s.style[e]=o)}};i.changeWidgetsColor=function(t){var e=n.a.getStrColor(t);s(".gui-button","background",e),s(".gui-select","background",e),s(".gui-slider > div","background",e),i._curWidgetColor=t},i.changeDisplayBoorder=function(t){var e=t?"1px solid #000":"0";s(".gui-button","border",e),s(".gui-select","border",e),s(".gui-slider","border",e),s(".gui-input-number","border",e),s(".gui-sidebar > ul > label","borderTop",e),s(".gui-sidebar > ul > label","borderBottom",e),s(".gui-sidebar","borderLeft",e),s(".gui-sidebar","borderRight",e),s(".gui-topbar","borderBottom",e),i._curShowBorder=t},i.changeBackgroundColor=function(t){s(".gui-sidebar","background",n.a.getStrColor(t));var e=n.a.getStrColor(n.a.getColorMult(t,.5));s(".gui-topbar","background",e),s(".gui-topbar ul > li > ul","background",e),i._curBackgroundColor=t},i.changeTextColor=function(t){var e=n.a.getStrColor(t);s("*","color",e),s(".gui-sidebar > ul > label","color",e),i._curTextColor=t},i.changeOverallColor=function(t){i.changeWidgetsColor(t);var e=n.a.getColorMult(t,.5);e.length=3,i.changeBackgroundColor(e);for(var o=n.a.getColorAdd(t,.5),r=0;r<3;++r)o[r]=Math.min(.8,o[r]);i.changeTextColor(o),i._curWidgetColor=t,i._curBackgroundColor=e,i._curTextColor=o},i._curTextColor=[.73,.73,.73,1],i._curWidgetColor=[.32,.37,.39,1],i._curBackgroundColor=[.24,.24,.24],i._curShowBorder=!1,i.changeOverallColor([.3,.34,.4,1]),e.a=i},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(0),s=function(t){function e(o,r,a){n(this,e);var s=i(this,t.call(this)),u=a?r[a].bind(r):r;return s.domButton=document.createElement("button"),s.domButton.className="gui-button",s.domButton.innerHTML=o||"",s.domButton.addEventListener("click",s._onClick.bind(s)),s.setCallback(u),s}return r(e,t),e.prototype.setEnable=function(t){this.domButton.disabled=void 0!==t&&!t},e.prototype._onClick=function(){this.callback&&this.callback()},e}(a.a);e.a=s},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(0),s=function(t){function e(o,r){n(this,e);var a=i(this,t.call(this)),s=a._getInitialValue(o,r),u=a._getCheckCallback(o,r);return a.domCheckbox=document.createElement("input"),a.domCheckbox.className="gui-input-checkbox",a.domCheckbox.type="checkbox",a.domLabelCheckbox=document.createElement("label"),a.setValue(void 0===s||s),a.setCallback(u),a}return r(e,t),e.prototype._onMouseDown=function(){this.setValue(!this.domCheckbox.checked)},e.prototype.setValue=function(t,e){this.domCheckbox.checked=t,!e&&this.callback&&this.callback(t)},e.prototype.getValue=function(){return this.domCheckbox.checked},e}(a.a);e.a=s},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(2),s=o(0),u=["-moz-","-o-","-webkit-","-ms-",""],d='url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiPHPmDAMMGBsbw9lMDDgA6RKM%2F%2F%2F%2Fh3POnj1LCzsAAgwAQtYIcFfEyzkAAAAASUVORK5CYII%3D")',l=function(t){function e(o,r){n(this,e);var s=i(this,t.call(this)),u=s._getInitialValue(o,r),d=s._getCheckCallback(o,r);s.color=u?a.a.getValidColor(u.slice()):[1,0,0],s.domColor=document.createElement("div"),s.domColor.className="gui-widget-color",s.domInputColor=document.createElement("input"),s.domPopup=document.createElement("div"),s.domHue=document.createElement("div"),s.domHue.className="gui-color-hue",s.domHueKnob=document.createElement("div"),s.domHueKnob.className="gui-knob-hue",s.domSaturation=document.createElement("div"),s.domSaturation.className="gui-color-saturation";var l=document.createElement("div");return s.domSaturation.appendChild(l),s.domSaturationKnob=document.createElement("div"),s.domSaturationKnob.className="gui-knob-saturation",s.domHue.appendChild(s.domHueKnob),s.domPopup.appendChild(s.domSaturationKnob),s.domPopup.appendChild(s.domSaturation),s.domPopup.appendChild(s.domHue),s.domColor.appendChild(s.domInputColor),s.domColor.appendChild(s.domPopup),s._hueGradient(s.domHue),s._linearGradient(l,"top","rgba(0,0,0,0)","#000"),s.domColor.addEventListener("keydown",s._onInputDown.bind(s)),s.domSaturation.addEventListener("mousedown",s._onSaturationDown.bind(s)),s.domHue.addEventListener("mousedown",s._onHueDown.bind(s)),window.addEventListener("mouseup",s._onMouseUp.bind(s)),window.addEventListener("mouseout",s._onMouseUp.bind(s)),window.addEventListener("mousemove",s._onMouseMove.bind(s)),s.hasAlpha=4===s.color.length,s.alpha=1,s.hasAlpha&&(s.domPopup.style.width="142px",s.domAlpha=document.createElement("div"),s.domAlpha.className="gui-color-alpha",s.domAlphaKnob=document.createElement("div"),s.domAlphaKnob.className="gui-knob-alpha",s._alphaGradient(s.domAlpha,"top","rgba(0,0,0,1.0)","rgba(0,0,0,0.0)"),s.domAlpha.addEventListener("mousedown",s._onAlphaDown.bind(s)),s.domAlpha.appendChild(s.domAlphaKnob),s.domPopup.appendChild(s.domAlpha)),s.editHue=s.editSaturation=s.editAlpha=!1,s.widgetHeight=s.widgetWidth=100,s.setValue(s.color),s.setCallback(d),s}return r(e,t),e.prototype._onInputDown=function(t){t.stopPropagation(),13===t.keyCode&&this.setValue(a.a.hexToRgb(t.target.value))},e.prototype._onUpdateSaturation=function(t){var e=this.domSaturation.getBoundingClientRect(),o=a.a.rgbToHsv(this.getValue());o[1]=Math.min(1,Math.max(0,(t.clientX-e.left)/e.width)),o[2]=Math.min(1,Math.max(0,1-(t.clientY-e.top)/e.width)),this.setValue(a.a.hsvToRgb(o),!1,!0),this._updateGui()},e.prototype._onUpdateHue=function(t){var e=this.domHue.getBoundingClientRect(),o=a.a.rgbToHsv(this.getValue());o[0]=Math.min(1,Math.max(0,1-(t.clientY-e.top)/e.height)),this.setValue(a.a.hsvToRgb(o),!1,!0),this._updateGui()},e.prototype._onUpdateAlpha=function(t){var e=this.domAlpha.getBoundingClientRect(),o=this.getValue();o[3]=this.alpha=Math.min(1,Math.max(0,1-(t.clientY-e.top)/e.height)),this.setValue(o,!1,!0),this._updateGui()},e.prototype._updateGui=function(){var t=this.getValue(),e=a.a.rgbToHsv(t);this.domSaturationKnob.style.marginLeft=this.widgetWidth*e[1]-7+"px",this.domSaturationKnob.style.marginTop=this.widgetHeight*(1-e[2])-7+"px",e[1]=e[2]=1,this._linearGradient(this.domSaturation,"left","#fff",a.a.getStrColor(a.a.hsvToRgb(e))),this.domHueKnob.style.marginTop=(1-e[0])*this.widgetHeight+"px",this.hasAlpha&&void 0!==t[3]&&(this.domAlphaKnob.style.marginTop=(1-this.alpha)*this.widgetHeight+"px")},e.prototype._onMouseMove=function(t){if(this.editSaturation||this.editHue||this.editAlpha)return this.editSaturation?this._onUpdateSaturation(t):this.editHue?this._onUpdateHue(t):this.editAlpha?this._onUpdateAlpha(t):void 0},e.prototype._onSaturationDown=function(t){this.editSaturation=!0,this._onMouseMove(t)},e.prototype._onHueDown=function(t){this.editHue=!0,this._onMouseMove(t)},e.prototype._onAlphaDown=function(t){this.editAlpha=!0,this._onMouseMove(t)},e.prototype._onMouseUp=function(){this.editHue=this.editSaturation=this.editAlpha=!1},e.prototype._hueGradient=function(t){t.style.background="";for(var e=0,o=u.length;e<o;++e)t.style.cssText+="background: "+u[e]+"linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);"},e.prototype._alphaGradient=function(t,e,o,n){t.style.background="";for(var i=0,r=u.length;i<r;++i)t.style.cssText+="background: "+u[i]+"linear-gradient("+e+", "+o+","+n+"),"+d+";"},e.prototype._linearGradient=function(t,e,o,n){t.style.background="";for(var i=0,r=u.length;i<r;++i)t.style.cssText+="background: "+u[i]+"linear-gradient("+e+", "+o+" 0%, "+n+" 100%);"},e.prototype.setValue=function(t,e,o){for(var n=this.color,i=0,r=t.length;i<r;++i)n[i]=t[i];var s=a.a.rgbToHex(t);if(this.domInputColor.value=s,this.hasAlpha){t.length>=4?this.alpha=t[3]:t.push(this.alpha);var u="rgba("+parseInt(255*t[0],10)+","+parseInt(255*t[1],10)+","+parseInt(255*t[2],10)+","+this.alpha+")";this._alphaGradient(this.domInputColor,"0deg",u,u)}else this.domInputColor.style.background=s;var d=a.a.rgbToHsv(t);this.domSaturationKnob.style.borderColor=d[2]<.5||d[1]>.5?"#fff":"#000",this.domInputColor.style.color=this.alpha>.2&&(d[2]<.5||d[1]>.5)?"#fff":"#000",o||this._updateGui(),!e&&this.callback&&this.callback(t)},e.prototype.getValue=function(){return this.color},e}(s.a);e.a=l},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(0),s=function(t){function e(o,r,a){n(this,e);var s=i(this,t.call(this)),u=s._getInitialValue(o,r),d=s._getCheckCallback(o,r);return a=a||{},u=void 0!==u?u:a[0],s.isArray=void 0!==a.length,s.domSelect=document.createElement("select"),s.domSelect.className="gui-select",s.addOptions(a),s.domSelect.addEventListener("change",s._onChange.bind(s)),s.setValue(u),s.setCallback(d),s}return r(e,t),e.prototype._parseValue=function(t){return this.isArray?parseInt(t,10):t},e.prototype._onChange=function(t){this.setValue(t.target.value)},e.prototype.addOptions=function(t){for(var e=Object.keys(t),o=0;o<e.length;++o){var n=document.createElement("option");n.innerHTML=t[e[o]],n.value=e[o],this.domSelect.appendChild(n)}},e.prototype.setValue=function(t,e){this.domSelect.value=t,!e&&this.callback&&this.callback(this._parseValue(t))},e.prototype.getValue=function(){return this._parseValue(this.domSelect.value)},e}(a.a);e.a=s},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(0),s=function(t){function e(o,r,a){n(this,e);var s=i(this,t.call(this)),u=o;return u&&"function"!=typeof u?u=o[r].bind(o):a=r,s.domSpan=document.createElement("span"),s.domSpan.className="shortcut",s.domSpan.innerHTML=a||"",s.setCallback(u),s}return r(e,t),e.prototype._setDomContainer=function(t){this.domContainer=t,t.addEventListener("click",this._onClick.bind(this))},e.prototype._onClick=function(){this.callback&&this.callback()},e}(a.a);e.a=s},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(0),s=function(t){function e(o,r,a,s,u){n(this,e);var d=i(this,t.call(this)),l=d._getInitialValue(o,r),c=d._getCheckCallback(o,r);return l=void 0!==l?l:100,a=void 0!==a?a:0,s=void 0!==s?s:200,u=void 0!==u?u:1,d.domSlider=document.createElement("div"),d.domSlider.className="gui-slider",d.domSliderFill=document.createElement("div"),d.domSlider.appendChild(d.domSliderFill),d.domInputText=document.createElement("input"),d.domInputText.className="gui-input-number",d.domInputText.type="number",d.min=d.domInputText.min=a,d.max=d.domInputText.max=s,d.step=d.domInputText.step=u,d.domInputText.addEventListener("keydown",d._onKeyDown.bind(d)),d.domInputText.addEventListener("change",d._onInputText.bind(d)),d.domInputText.addEventListener("blur",d._onInputText.bind(d)),d.domSlider.addEventListener("mousedown",d._onMouseDown.bind(d)),window.addEventListener("mouseup",d._onMouseUp.bind(d),!0),window.addEventListener("mousemove",d._onMouseMove.bind(d)),d.lastValue=l,d.isDown=!1,d.setValue(l),d.setCallback(c),d}return r(e,t),e.prototype._onInputText=function(t){var e=parseFloat(t.target.value);e===e&&e!==this.lastValue&&this.setValue(e)},e.prototype._onKeyDown=function(t){t.stopPropagation(),13===t.which&&this.domInputText.blur()},e.prototype._onMouseMove=function(t){if(t.preventDefault(),this.isDown){var e=this.domSlider.getBoundingClientRect(),o=this.min+(this.max-this.min)*((t.clientX-e.left)/e.width);this.setValue(o)}},e.prototype._onMouseDown=function(t){this.isDown=!0,this._onMouseMove(t)},e.prototype._onMouseUp=function(){this.isDown=!1},e.prototype._setDomContainer=function(t){this.domContainer=t},e.prototype.getValue=function(){return parseFloat(this.domInputText.value)},e.prototype.setValue=function(t,e){this.lastValue=t,t=Math.max(Math.min(t,this.max),this.min),t=Math.round(t/this.step)*this.step,this.domInputText.value=t;var o=this.min;this.max!==this.min&&(o=(t-this.min)/(this.max-this.min)),this.domSliderFill.style.width=100*o+"%",!e&&this.callback&&this.callback(t)},e.prototype.setMax=function(t){return this.domInputText.max=this.max=t,this},e.prototype.setMin=function(t){return this.min=t,this},e}(a.a);e.a=s},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=o(0),s=function(t){function e(o){n(this,e);var r=i(this,t.call(this));return r.domText=document.createElement("div"),r.domText.innerHTML=o||"",r.domText.className="group-title",r}return r(e,t),e.prototype.setText=function(t){this.domText.innerHTML=t},e.prototype.setVisibility=function(t){this.domText.hidden=!t},e}(a.a);e.a=s},function(t,e,o){var n=o(3).default,i={GuiMain:n};t.exports=i}])});
//# sourceMappingURL=yagui.js.map