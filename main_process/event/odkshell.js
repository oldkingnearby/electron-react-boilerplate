"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowsCmd = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var WindowsCmd = exports.WindowsCmd = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(params) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt("return", new Promise(function (resolve, reject) {
                            var t1 = new Date().getTime();
                            var temPath = path.join(_electron.app.getPath('temp'), t1 + ".bat");
                            var cmd = "";
                            params.forEach(function (item) {
                                cmd += item.replace('/ /g', "\" \"");
                                cmd += " ";
                            });
                            fs.writeFileSync(temPath, cmd);
                            var cmdParam = "chcp 65001 & cmd /c " + temPath;
                            shell.exec(cmdParam, function (code, stdout, stderr) {
                                fs.unlinkSync(temPath);
                                return resolve({ code: code, stdout: stdout, stderr: stderr });
                            });
                        }));

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function WindowsCmd(_x) {
        return _ref.apply(this, arguments);
    };
}();

var _electron = require("electron");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs-extra");
var path = require("path");
var shell = require('shelljs');