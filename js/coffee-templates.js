// Generated by CoffeeScript 1.4.0

(function(context, definition) {
  if ('function' === typeof require && typeof exports === typeof module) {
    return module.exports = definition;
  }
  return context.CoffeeTemplates = definition;
})(this, (function() {
  var C, y;
  y = function(v) {
    return (typeof v)[0];
  };
  C = function(o, templates) {
    this.o = o || {};
    this.templates = templates || {};
    this.o.doctype = this.o.doctype || {
      '5': '<!doctype html>'
    };
    this.o.block = 'a abbr address article aside audio b bdi bdo blockquote body button canvas caption cite code colgroup command data datagrid datalist dd del details dfn div dl dt em embed eventsource fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup html i iframe ins kbd keygen label legend li mark map menu meter nav noscript object ol optgroup option output p pre progress q ruby rp rt s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr'.split(' ');
    this.o.atomic = 'area base br col hr img input link meta param'.split(' ');
    this.o.special = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    this.o.indent = (this.o.format || '') && (this.o.indent || '  ');
    return this.o.newline = (this.o.format || '') && (this.o.newline || "\n");
  };
  C.prototype.render = function(tf, i) {
    var atts, g, l, o, t, x;
    t = '';
    l = 0;
    o = this.o;
    o.indent = (function(x) {
      return function() {
        return (new Array(l)).join(x);
      };
    })(o.indent);
    g = {
      tag: function(a, b, c, d) {
        return function() {
          var e, f, h, s, x;
          e = arguments;
          f = {};
          l++;
          s = '';
          for (x in e) {
            s += y(e[x]);
          }
          if (s === 'sof' || s === 'sos' || s === 'so' || s === 'sf' || s === 'ss') {
            e[0].replace(/([#.][\w\d-_]+)/g, function(m) {
              var k='class';
              (m[0] === '.') && (f[k] = (f[k] || '') + (f[k] ? ' ' : '') + m.substr(1));
              (m[0] === '#') && (f.id = m.substr(1));
            });
          }
          (s === 'of' || s === 'os' || s === 'o') && (f = e[0]);
          (s === 'f' || s === 's') && (h = e[0]);
          if (s === 'sof' || s === 'sos' || s === 'so') {
            for (x in e[1]) {
              f[x] = e[1][x];
            }
            h = e[2];
          }
          (s === 'of' || s === 'os' || s === 'sf' || s === 'ss') && (h = e[1]);
          f = y(b) === 'f' ? b(f) : '';
          if (y(h) === 'f') {
            t += (function() {
              t = '';
              h.call(i);
              if (t !== '') {
                t = o.newline + t + o.indent();
              }
              return t = o.indent() + a + f + c + t + d + o.newline;
            })();
          } else {
            t += o.indent() + a + f + c + (y(h) === 'u' ? '' : o.escape ? g.h(h) : h) + d + o.newline;
          }
          return l--;
        };
      },
      block: function(s, f) {
        return g.tag('{{' + (o.handlebars ? '#' : '') + s, null, '}}', '{{/' + (s.split(/ +/)[0]) + '}}')(f);
      },
      coffeescript: function(f) {
        return g.script(('' + f).replace(/^function \(\) ?{\s*/, '').replace(/\s*}$/, ''));
      },
      doctype: function(v) {
        return t = o.doctype[v || 5] + t;
      },
      comment: function(s, f) {
        return g.tag('<!--' + s, null, '', '-->')(f);
      },
      ie: function(s, f) {
        return g.tag('<!--[if ' + s + ']>', null, '', '<![endif]-->')(f);
      },
      h: function(s) {
        return ('' + s).replace(/[&<>"']/g, function(c) {
          return o.special[c] || c;
        });
      },
      text: function(s) {
        return t += o.escape ? g.h(s) : s;
      },
      literal: function(s) {
        return t += s;
      }
    };
    atts = function(a) {
      var k, z;
      z = '';
      for (k in a) {
        z += y(a[k]) !== 'b' ? ' ' + k + '="' + (o.escape ? g.h(a[k]) : a[k]) + '"' : a[k] ? ' ' + k : '';
      }
      return z;
    };
    for (x in o.block) {
      g[o.block[x]] = g.tag('<' + o.block[x], atts, '>', '</' + o.block[x] + '>');
    }
    for (x in o.atomic) {
      g[o.atomic[x]] = g.tag('<' + o.atomic[x], atts, '/>', '');
    }
    (Function('g', '_i', 'with(g){(' + tf + ').call(_i)}'))(g, i);
    return t;
  };
  C.engine = "var o='',w=function(f,a){o='';f.apply(i, a);return o}";
  C.compile = function(t, wrap) {
    var a, b, c, d, e, f, g, i, k, lvl, push, tokm, toks;
    if (wrap == null) {
      wrap = true;
    }
    lvl = 1;
    toks = [];
    tokm = {};
    t.replace(/\{\{([\/#]?[^ }]+)( [^}]+)?\}\}/g, function() {
      var a, b, cf, k, l, n, tok;
      a = arguments;
      cf = a[1][0] === '/';
      tok = {
        s: a[0],
        b: b = typeof a[2] === 'string',
        a: (b && a[2]) || '',
        v: b === cf,
        n: n = b === cf ? a[1] : a[1][0] === '/' || a[1][0] === '#' ? a[1].slice(1) : a[1],
        l: l = (b === cf && lvl) || (b && lvl++) || (cf && --lvl),
        x: a[3]
      };
      k = l + '.' + n;
      return !!((l === 1) && (cf && (toks[tokm[k]].o = tok)) || ((tok.v || tok.b) && (tokm[k] = toks.push(tok) - 1))) || a[0];
    });
    if (!toks.length) {
      return JSON.stringify(t);
    }
    a = [];
    push = function(m, s) {
      if (a.length % 2 === m || a.length < 1) {
        a.push(s);
      } else {
        a[a.length - 1] += s;
      }
    };
    b = 0;
    g = t.length - 1;
    for (k in toks) {
      if (!(toks[k].l === 1)) {
        continue;
      }
      c = toks[k].x;
      d = c + toks[k].s.length;
      push(0, t.substr(b, c - b));
      if (toks[k].v) {
        push(1, toks[k].n);
        b = d;
      } else if (toks[k].b) {
        e = toks[k].o.x;
        f = e + toks[k].o.s.length;
        toks[k].a = toks[k].a.replace(/(^ *| *$)/, '').replace(/,? *\((.+)\) *$/, function() {
          toks[k].c = arguments[1].split(/[, ]+/).join(',');
          return '';
        }).split(/[, ]+/).join(',');
        push(1, 'w(' + toks[k].n + ',[' + (toks[k].a ? toks[k].a + ',' : '') + 'function(' + (toks[k].c || '') + '){o+=' + C.compile(t.substr(d, e - d), false) + '}])');
        b = f;
      }
    }
    if (g - b) {
      push(0, t.substr(b, g - b + 1));
    }
    t = '';
    for (i in a) {
      if (a.hasOwnProperty(i) && a[i] !== '') {
        t += (t ? '+' : '') + (i % 2 ? a[i] : JSON.stringify(a[i]));
      }
    }
    if (wrap) {
      return Function('i', 'with(i){' + C.engine + ';return ' + t + '}');
    } else {
      return t;
    }
  };
  C.compileAll = function(a) {
    var f, k, t;
    f = 'with(i){' + C.engine + ",t={}\n";
    for (k in a) {
      t = a[k];
      f += 't[' + JSON.stringify(k) + ']=function(){return ' + a[k] + "}\n";
    }
    return Function('n', 'i', f + 'return t[n].call(i)}');
  };
  return C;
})());
