"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = require("clsx");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
exports.Button = (0, react_1.forwardRef)((_a, ref) => {
    var { children, type = 'button', className } = _a, rest = __rest(_a, ["children", "type", "className"]);
    return ((0, jsx_runtime_1.jsx)(StyledButton, Object.assign({}, rest, { ref: ref, className: (0, clsx_1.clsx)(className), children: children })));
});
exports.Button.displayName = 'Button';
const StyledButton = styled_components_1.default.button `
  background-color: var(--colorsPrimary950);
  border-radius: var(--aldo2);
  font: var(--textBaseFontMedium);
  border: none;
  color: var(--colorsBaseWhite);
  font: var(--textBaseFontMedium);
  cursor: pointer;
`;
//# sourceMappingURL=Button.js.map