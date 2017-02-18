'use strict';

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaNunjucks = require('koa-nunjucks2');

var _koaNunjucks2 = _interopRequireDefault(_koaNunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var koaNunjucks2Middleware = (0, _koaNunjucks2.default)('views', { autoescape: true });
var app = new _koa2.default();

app.use(koaNunjucks2Middleware);

var router = require('koa-router')();
app.use(router.routes());

router.get('/', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        ctx.render('index', { name: 'koa@2' });

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

app.listen(process.env.PORT || 3000);
