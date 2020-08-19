import React from 'react';

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

var css_248z = ".medication-container {\n  width: 400px;\n  height: 400px;\n  border: 1px solid #CCC; }\n";
styleInject(css_248z);

var MedicationContainer = function () { return (React.createElement("div", { className: 'medication-container' }, "Test")); };

export { MedicationContainer };
//# sourceMappingURL=index.es.js.map
