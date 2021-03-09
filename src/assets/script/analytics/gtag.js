/* eslint-disable */

// Copyright 2012 Google Inc. All rights reserved.
;(function () {
  var data = {
    resource: {
      version: '1',

      macros: [
        {
          function: '__e'
        },
        {
          vtp_signal: 0,
          function: '__c',
          vtp_value: 0
        },
        {
          function: '__c',
          vtp_value: 'google.cn'
        },
        {
          function: '__c',
          vtp_value: true
        },
        {
          function: '__aev',
          vtp_varType: 'URL',
          vtp_component: 'IS_OUTBOUND',
          vtp_affiliatedDomains: ['list']
        },
        {
          function: '__v',
          vtp_name: 'gtm.triggers',
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: ''
        },
        {
          function: '__v',
          vtp_name: 'gtm.elementId',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.elementClasses',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__aev',
          vtp_varType: 'URL',
          vtp_component: 'URL_NO_FRAGMENT'
        },
        {
          function: '__aev',
          vtp_varType: 'URL',
          vtp_component: 'HOST',
          vtp_stripWww: true
        },
        {
          function: '__aev',
          vtp_varType: 'URL',
          vtp_component: 'EXTENSION'
        },
        {
          function: '__aev',
          vtp_varType: 'TEXT'
        },
        {
          function: '__aev',
          vtp_varType: 'URL',
          vtp_component: 'PATH'
        },
        {
          function: '__v',
          vtp_name: 'gtm.videoStatus',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.videoUrl',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.videoTitle',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.videoProvider',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.videoCurrentTime',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.videoDuration',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.videoPercent',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.videoVisible',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__u',
          vtp_component: 'QUERY',
          vtp_queryKey: 'q,s,search,query,keyword',
          vtp_multiQueryKeys: true,
          vtp_ignoreEmptyQueryParam: true,
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false
        },
        {
          function: '__v',
          vtp_name: 'gtm.scrollThreshold',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.historyChangeSource',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.oldUrl',
          vtp_dataLayerVersion: 1
        },
        {
          function: '__v',
          vtp_name: 'gtm.newUrl',
          vtp_dataLayerVersion: 1
        }
      ],
      tags: [
        {
          function: '__gct',
          vtp_trackingId: 'G-XKZSL7J3N4',
          vtp_adFeatures: false,
          vtp_sessionDuration: 0,
          vtp_googleSignals: ['macro', 1],
          vtp_foreignTld: ['macro', 2],
          vtp_restrictDomain: ['macro', 3],
          vtp_eventSettings: [
            'map',
            'purchase',
            ['map', 'blacklisted', false, 'conversion', true]
          ],
          vtp_dynamicEventSettings: [
            'map',
            'edit_rules',
            ['list'],
            'synthesis_rules',
            ['list']
          ],
          tag_id: 7
        },
        {
          function: '__get',
          vtp_eventName: 'click',
          vtp_settings: [
            'map',
            'streamId',
            'G-XKZSL7J3N4',
            'eventParameters',
            [
              'map',
              'link_id',
              ['macro', 6],
              'link_classes',
              ['macro', 7],
              'link_url',
              ['macro', 8],
              'link_domain',
              ['macro', 9],
              'outbound',
              true
            ]
          ],
          vtp_deferrable: false,
          tag_id: 17
        },
        {
          function: '__get',
          vtp_eventName: 'file_download',
          vtp_settings: [
            'map',
            'streamId',
            'G-XKZSL7J3N4',
            'eventParameters',
            [
              'map',
              'link_id',
              ['macro', 6],
              'link_text',
              ['macro', 11],
              'link_url',
              ['macro', 8],
              'file_name',
              ['macro', 12],
              'file_extension',
              ['macro', 10]
            ]
          ],
          vtp_deferrable: false,
          tag_id: 24
        },
        {
          function: '__get',
          vtp_eventName: ['template', 'video_', ['macro', 13]],
          vtp_settings: [
            'map',
            'streamId',
            'G-XKZSL7J3N4',
            'eventParameters',
            [
              'map',
              'video_url',
              ['macro', 14],
              'video_title',
              ['macro', 15],
              'video_provider',
              ['macro', 16],
              'video_current_time',
              ['macro', 17],
              'video_duration',
              ['macro', 18],
              'video_percent',
              ['macro', 19],
              'visible',
              ['macro', 20]
            ]
          ],
          vtp_deferrable: false,
          tag_id: 27
        },
        {
          function: '__get',
          vtp_eventName: 'view_search_results',
          vtp_settings: [
            'map',
            'streamId',
            'G-XKZSL7J3N4',
            'eventParameters',
            ['map', 'search_term', ['macro', 21]]
          ],
          vtp_deferrable: true,
          tag_id: 32
        },
        {
          function: '__get',
          vtp_eventName: 'scroll',
          vtp_settings: [
            'map',
            'streamId',
            'G-XKZSL7J3N4',
            'eventParameters',
            ['map', 'percent_scrolled', ['macro', 22]]
          ],
          vtp_deferrable: false,
          tag_id: 35
        },
        {
          function: '__get',
          vtp_eventName: 'page_view',
          vtp_settings: [
            'map',
            'streamId',
            'G-XKZSL7J3N4',
            'eventParameters',
            ['map', 'page_referrer', ['macro', 24]]
          ],
          vtp_deferrable: false,
          tag_id: 38
        },
        {
          function: '__dlm',
          vtp_userInput: [
            'list',
            [
              'map',
              'key',
              'gtm.gtagReferrer.G-XKZSL7J3N4',
              'value',
              ['macro', 24]
            ]
          ],
          tag_id: 39
        },
        {
          function: '__lcl',
          vtp_waitForTags: false,
          vtp_checkValidation: true,
          vtp_uniqueTriggerId: '1_15',
          tag_id: 40
        },
        {
          function: '__lcl',
          vtp_waitForTags: false,
          vtp_checkValidation: true,
          vtp_uniqueTriggerId: '1_22',
          tag_id: 41
        },
        {
          function: '__ytl',
          vtp_captureStart: true,
          vtp_captureComplete: true,
          vtp_captureProgress: true,
          vtp_progressThresholdsPercent: '10,25,50,75',
          vtp_triggerStartOption: 'DOM_READY',
          vtp_uniqueTriggerId: '1_25',
          vtp_enableTriggerStartOption: true,
          tag_id: 42
        },
        {
          function: '__sdl',
          vtp_verticalThresholdUnits: 'PERCENT',
          vtp_verticalThresholdsPercent: '90',
          vtp_verticalThresholdOn: true,
          vtp_horizontalThresholdOn: false,
          vtp_triggerStartOption: 'WINDOW_LOAD',
          vtp_uniqueTriggerId: '1_33',
          vtp_enableTriggerStartOption: true,
          tag_id: 43
        },
        {
          function: '__ehl',
          vtp_groupEvents: true,
          vtp_groupEventsInterval: 1000,
          vtp_uniqueTriggerId: '1_36',
          tag_id: 44
        }
      ],
      predicates: [
        {
          function: '_eq',
          arg0: ['macro', 0],
          arg1: 'gtm.js'
        },
        {
          function: '_eq',
          arg0: ['macro', 4],
          arg1: true
        },
        {
          function: '_eq',
          arg0: ['macro', 0],
          arg1: 'gtm.linkClick'
        },
        {
          function: '_re',
          arg0: ['macro', 5],
          arg1: '(^$|((^|,)1_15($|,)))'
        },
        {
          function: '_re',
          arg0: ['macro', 10],
          arg1:
            'pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma',
          ignore_case: true
        },
        {
          function: '_re',
          arg0: ['macro', 5],
          arg1: '(^$|((^|,)1_22($|,)))'
        },
        {
          function: '_eq',
          arg0: ['macro', 0],
          arg1: 'gtm.video'
        },
        {
          function: '_re',
          arg0: ['macro', 5],
          arg1: '(^$|((^|,)1_25($|,)))'
        },
        {
          function: '_eq',
          arg0: ['macro', 21],
          arg1: 'undefined'
        },
        {
          function: '_eq',
          arg0: ['macro', 0],
          arg1: 'gtm.scrollDepth'
        },
        {
          function: '_re',
          arg0: ['macro', 5],
          arg1: '(^$|((^|,)1_33($|,)))'
        },
        {
          function: '_eq',
          arg0: ['macro', 23],
          arg1: ['list', 'pushState', 'popstate', 'replaceState'],
          any_of: true
        },
        {
          function: '_eq',
          arg0: ['macro', 24],
          arg1: ['macro', 25]
        },
        {
          function: '_eq',
          arg0: ['macro', 0],
          arg1: 'gtm.historyChange-v2'
        },
        {
          function: '_re',
          arg0: ['macro', 5],
          arg1: '(^$|((^|,)1_36($|,)))'
        },
        {
          function: '_eq',
          arg0: ['macro', 0],
          arg1: 'gtm.dom'
        },
        {
          function: '_eq',
          arg0: ['macro', 0],
          arg1: 'gtm.load'
        }
      ],
      rules: [
        [
          ['if', 0],
          ['add', 0, 8, 9, 12]
        ],
        [
          ['if', 1, 2, 3],
          ['add', 1]
        ],
        [
          ['if', 2, 4, 5],
          ['add', 2]
        ],
        [
          ['if', 6, 7],
          ['add', 3]
        ],
        [
          ['if', 0],
          ['unless', 8],
          ['add', 4]
        ],
        [
          ['if', 9, 10],
          ['add', 5]
        ],
        [
          ['if', 11, 13, 14],
          ['unless', 12],
          ['add', 6, 7]
        ],
        [
          ['if', 15],
          ['add', 10]
        ],
        [
          ['if', 16],
          ['add', 11]
        ]
      ]
    },
    runtime: []
  }
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var aa,
    ba =
      'function' == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {}
            b.prototype = a
            return new b()
          },
    da
  if ('function' == typeof Object.setPrototypeOf) da = Object.setPrototypeOf
  else {
    var ea
    a: {
      var fa = { pg: !0 },
        ha = {}
      try {
        ha.__proto__ = fa
        ea = ha.pg
        break a
      } catch (a) {}
      ea = !1
    }
    da = ea
      ? function (a, b) {
          a.__proto__ = b
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible')
          return a
        }
      : null
  }
  var ja = da,
    la = function (a, b) {
      a.prototype = ba(b.prototype)
      a.prototype.constructor = a
      if (ja) ja(a, b)
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c)
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c]
      a.Vh = b.prototype
    },
    ma = this || self,
    ra = function (a) {
      if (a && a != ma) return pa(a.document)
      null === qa && (qa = pa(ma.document))
      return qa
    },
    sa = /^[\w+/_-]+[=]{0,2}$/,
    qa = null,
    pa = function (a) {
      var b = a.querySelector && a.querySelector('script[nonce]')
      if (b) {
        var c = b.nonce || b.getAttribute('nonce')
        if (c && sa.test(c)) return c
      }
      return ''
    },
    ta = function (a) {
      var b = typeof a
      return 'object' != b ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null'
    },
    ua = function (a, b) {
      function c() {}
      c.prototype = b.prototype
      a.Vh = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.li = function (d, e, f) {
        for (
          var h = Array(arguments.length - 2), k = 2;
          k < arguments.length;
          k++
        )
          h[k - 2] = arguments[k]
        return b.prototype[e].apply(d, h)
      }
    },
    va = function (a) {
      return a
    }
  var wa = function () {},
    xa = function (a) {
      return 'function' == typeof a
    },
    g = function (a) {
      return 'string' == typeof a
    },
    ya = function (a) {
      return 'number' == typeof a && !isNaN(a)
    },
    za = function (a) {
      return '[object Array]' == Object.prototype.toString.call(Object(a))
    },
    Aa = function (a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b)
        return 'number' == typeof c ? c : -1
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d
      return -1
    },
    Ba = function (a, b) {
      if (a && za(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
    },
    Ca = function (a, b) {
      if (!ya(a) || !ya(b) || a > b) (a = 0), (b = 2147483647)
      return Math.floor(Math.random() * (b - a + 1) + a)
    },
    Ea = function (a, b) {
      for (var c = new Da(), d = 0; d < a.length; d++) c.set(a[d], !0)
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0
      return !1
    },
    Fa = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    },
    Ga = function (a) {
      return Math.round(Number(a)) || 0
    },
    Ha = function (a) {
      return 'false' == String(a).toLowerCase() ? !1 : !!a
    },
    Ia = function (a) {
      var b = []
      if (za(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]))
      return b
    },
    Ja = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, '') : ''
    },
    La = function () {
      return new Date().getTime()
    },
    Da = function () {
      this.prefix = 'gtm.'
      this.values = {}
    }
  Da.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b
  }
  Da.prototype.get = function (a) {
    return this.values[this.prefix + a]
  }
  var Ma = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c
    },
    Na = function (a) {
      var b = !1
      return function () {
        if (!b)
          try {
            a()
          } catch (c) {}
        b = !0
      }
    },
    Oa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    },
    Pa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0
      return !1
    },
    Qa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || [])
      return c
    },
    Va = function (a, b) {
      for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {}
      d[e[e.length - 1]] = b
      return c
    },
    Xa = function (a) {
      var b = []
      Fa(a, function (c, d) {
        10 > c.length && d && b.push(c)
      })
      return b.join(',')
    } /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Za = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    $a = function (a) {
      if (null == a) return String(a)
      var b = Za.exec(Object.prototype.toString.call(Object(a)))
      return b ? b[1].toLowerCase() : 'object'
    },
    ab = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    bb = function (a) {
      if (!a || 'object' != $a(a) || a.nodeType || a == a.window) return !1
      try {
        if (
          a.constructor &&
          !ab(a, 'constructor') &&
          !ab(a.constructor.prototype, 'isPrototypeOf')
        )
          return !1
      } catch (c) {
        return !1
      }
      for (var b in a);
      return void 0 === b || ab(a, b)
    },
    m = function (a, b) {
      var c = b || ('array' == $a(a) ? [] : {}),
        d
      for (d in a)
        if (ab(a, d)) {
          var e = a[d]
          'array' == $a(e)
            ? ('array' != $a(c[d]) && (c[d] = []), (c[d] = m(e, c[d])))
            : bb(e)
            ? (bb(c[d]) || (c[d] = {}), (c[d] = m(e, c[d])))
            : (c[d] = e)
        }
      return c
    }
  var cb = function (a) {
    if (void 0 === a || za(a) || bb(a)) return !0
    switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'function':
        return !0
    }
    return !1
  }
  var Ab
  var Bb = [],
    Cb = [],
    Db = [],
    Eb = [],
    Fb = [],
    Gb = {},
    Hb,
    Ib,
    Jb,
    Mb = function (a, b) {
      var c = a['function']
      if (!c) throw Error('Error: No function name given for function call.')
      var d = Gb[c],
        e = {},
        f
      for (f in a)
        a.hasOwnProperty(f) &&
          0 === f.indexOf('vtp_') &&
          (d && b && b.Se && b.Se(a[f]),
          (e[void 0 !== d ? f : f.substr(4)] = a[f]))
      return void 0 !== d ? d(e) : Ab(c, e, b)
    },
    Ob = function (a, b, c) {
      c = c || []
      var d = {},
        e
      for (e in a) a.hasOwnProperty(e) && (d[e] = Nb(a[e], b, c))
      return d
    },
    Pb = function (a) {
      var b = a['function']
      if (!b) throw 'Error: No function name given for function call.'
      var c = Gb[b]
      return c ? c.priorityOverride || 0 : 0
    },
    Nb = function (a, b, c) {
      if (za(a)) {
        var d
        switch (a[0]) {
          case 'function_id':
            return a[1]
          case 'list':
            d = []
            for (var e = 1; e < a.length; e++) d.push(Nb(a[e], b, c))
            return d
          case 'macro':
            var f = a[1]
            if (c[f]) return
            var h = Bb[f]
            if (!h || b.pd(h)) return
            c[f] = !0
            try {
              var k = Ob(h, b, c)
              k.vtp_gtmEventId = b.id
              d = Mb(k, b)
              Jb && (d = Jb.Og(d, k))
            } catch (y) {
              b.df && b.df(y, Number(f)), (d = !1)
            }
            c[f] = !1
            return d
          case 'map':
            d = {}
            for (var l = 1; l < a.length; l += 2)
              d[Nb(a[l], b, c)] = Nb(a[l + 1], b, c)
            return d
          case 'template':
            d = []
            for (var n = !1, p = 1; p < a.length; p++) {
              var r = Nb(a[p], b, c)
              Ib && (n = n || r === Ib.$b)
              d.push(r)
            }
            return Ib && n ? Ib.Rg(d) : d.join('')
          case 'escape':
            d = Nb(a[1], b, c)
            if (Ib && za(a[1]) && 'macro' === a[1][0] && Ib.ph(a))
              return Ib.Hh(d)
            d = String(d)
            for (var t = 2; t < a.length; t++) db[a[t]] && (d = db[a[t]](d))
            return d
          case 'tag':
            var q = a[1]
            if (!Eb[q])
              throw Error('Unable to resolve tag reference ' + q + '.')
            return (d = { Xe: a[2], index: q })
          case 'zb':
            var u = { arg0: a[2], arg1: a[3], ignore_case: a[5] }
            u['function'] = a[1]
            var v = Qb(u, b, c),
              x = !!a[4]
            return x || 2 !== v ? x !== (1 === v) : null
          default:
            throw Error(
              'Attempting to expand unknown Value type: ' + a[0] + '.'
            )
        }
      }
      return a
    },
    Qb = function (a, b, c) {
      try {
        return Hb(Ob(a, b, c))
      } catch (d) {
        JSON.stringify(a)
      }
      return 2
    }
  var Rb = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b
        }
      }
    }
    return {
      vf: a('consent'),
      Od: a('convert_case_to'),
      Pd: a('convert_false_to'),
      Qd: a('convert_null_to'),
      Rd: a('convert_true_to'),
      Sd: a('convert_undefined_to'),
      di: a('debug_mode_metadata'),
      Ha: a('function'),
      gg: a('instance_name'),
      hg: a('live_only'),
      ig: a('malware_disabled'),
      jg: a('metadata'),
      gi: a('original_vendor_template_id'),
      mg: a('once_per_event'),
      Ie: a('once_per_load'),
      Me: a('setup_tags'),
      Ne: a('tag_id'),
      Oe: a('teardown_tags')
    }
  })()
  var Sb = null,
    Vb = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0
      }
      var c = [],
        d = []
      Sb = Tb(a)
      for (var e = 0; e < Cb.length; e++) {
        var f = Cb[e],
          h = Ub(f)
        if (h) {
          for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0
          b(f.block || [])
        } else null === h && b(f.block || [])
      }
      for (var n = [], p = 0; p < Eb.length; p++) c[p] && !d[p] && (n[p] = !0)
      return n
    },
    Ub = function (a) {
      for (var b = a['if'] || [], c = 0; c < b.length; c++) {
        var d = Sb(b[c])
        if (0 === d) return !1
        if (2 === d) return null
      }
      for (var e = a.unless || [], f = 0; f < e.length; f++) {
        var h = Sb(e[f])
        if (2 === h) return null
        if (1 === h) return !1
      }
      return !0
    },
    Tb = function (a) {
      var b = []
      return function (c) {
        void 0 === b[c] && (b[c] = Qb(Db[c], a))
        return b[c]
      }
    }
  var Wb = {
    Og: function (a, b) {
      b[Rb.Od] &&
        'string' === typeof a &&
        (a = 1 == b[Rb.Od] ? a.toLowerCase() : a.toUpperCase())
      b.hasOwnProperty(Rb.Qd) && null === a && (a = b[Rb.Qd])
      b.hasOwnProperty(Rb.Sd) && void 0 === a && (a = b[Rb.Sd])
      b.hasOwnProperty(Rb.Rd) && !0 === a && (a = b[Rb.Rd])
      b.hasOwnProperty(Rb.Pd) && !1 === a && (a = b[Rb.Pd])
      return a
    }
  }
  var Xb = function (a, b) {
    var c = String(a)
    return c
  }
  var cc = function (a) {
      var b = {},
        c = 0
      Fa(a, function (e, f) {
        void 0 !== f &&
          ((f = Xb(f, 100)),
          $b.hasOwnProperty(e)
            ? (b[$b[e]] = ac(f))
            : bc.hasOwnProperty(e)
            ? b.hasOwnProperty(bc[e]) || (b[bc[e]] = ac(f))
            : 10 > c &&
              ((b['k' + c] = ac(Xb(e, 40))), (b['v' + c] = ac(f)), c++))
      })
      var d = []
      Fa(b, function (e, f) {
        d.push('' + e + f)
      })
      return d.join('~')
    },
    ac = function (a) {
      return ('' + a).replace(/~/g, function () {
        return '~~'
      })
    },
    $b = {
      item_id: 'id',
      item_name: 'nm',
      item_brand: 'br',
      item_category: 'ca',
      item_category2: 'c2',
      item_category3: 'c3',
      item_category4: 'c4',
      item_category5: 'c5',
      item_variant: 'va',
      price: 'pr',
      quantity: 'qt',
      coupon: 'cp',
      item_list_name: 'ln',
      index: 'lp',
      item_list_id: 'li',
      discount: 'ds',
      affiliation: 'af',
      promotion_id: 'pi',
      promotion_name: 'pn',
      creative_name: 'cn',
      creative_slot: 'cs',
      location_id: 'lo'
    },
    bc = {
      id: 'id',
      name: 'nm',
      brand: 'br',
      category: 'ca',
      variant: 'va',
      list_name: 'ln',
      list_position: 'lp',
      list: 'ln',
      position: 'lp',
      creative: 'cn'
    }
  var dc = function (a) {
      var b = []
      Fa(a, function (c, d) {
        null != d &&
          b.push(encodeURIComponent(c) + '=' + encodeURIComponent(String(d)))
      })
      return b.join('&')
    },
    ec = function (a, b, c) {
      this.qa = a.qa
      this.La = a.La
      this.I = a.I
      this.i = b
      this.o = dc(a.qa)
      this.h = dc(a.I)
      this.L = c ? this.h.length : 0
      if (16384 < this.L) throw Error('EVENT_TOO_LARGE')
    }
  var fc = function () {
    this.events = []
    this.i = this.qa = ''
    this.h = 0
  }
  fc.prototype.add = function (a) {
    return this.o(a)
      ? (this.events.push(a),
        (this.qa = a.o),
        (this.i = a.i),
        (this.h += a.L),
        !0)
      : !1
  }
  fc.prototype.o = function (a) {
    var b = 20 > this.events.length && 16384 > a.L + this.h,
      c = this.qa === a.o && this.i === a.i
    return 0 == this.events.length || (b && c)
  }
  var gc = function (a, b) {
      Fa(a, function (c, d) {
        null != d && b.push(encodeURIComponent(c) + '=' + encodeURIComponent(d))
      })
    },
    hc = function (a, b) {
      var c = []
      a.o && c.push(a.o)
      b && c.push('_s=' + b)
      gc(a.La, c)
      var d = !1
      a.h && (c.push(a.h), (d = !0))
      var e = c.join('&'),
        f = '',
        h = e.length + a.i.length + 1
      d && 2048 < h && ((f = c.pop()), (e = c.join('&')))
      return { xd: e, body: f }
    },
    ic = function (a, b) {
      var c = a.events
      if (1 == c.length) return hc(c[0], b)
      var d = []
      a.qa && d.push(a.qa)
      for (var e = {}, f = 0; f < c.length; f++)
        Fa(c[f].La, function (q, u) {
          null != u &&
            ((e[q] = e[q] || {}), (e[q][String(u)] = e[q][String(u)] + 1 || 1))
        })
      var h = {}
      Fa(e, function (q, u) {
        var v,
          x = -1,
          y = 0
        Fa(u, function (w, A) {
          y += A
          var z = (w.length + q.length + 2) * (A - 1)
          z > x && ((v = w), (x = z))
        })
        y == c.length && (h[q] = v)
      })
      gc(h, d)
      b && d.push('_s=' + b)
      for (
        var k = d.join('&'), l = [], n = {}, p = 0;
        p < c.length;
        n = { Qb: n.Qb }, p++
      ) {
        var r = []
        n.Qb = {}
        Fa(
          c[p].La,
          (function (q) {
            return function (u, v) {
              h[u] != '' + v && (q.Qb[u] = v)
            }
          })(n)
        )
        c[p].h && r.push(c[p].h)
        gc(n.Qb, r)
        l.push(r.join('&'))
      }
      var t = l.join('\r\n')
      return { xd: k, body: t }
    } /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
  var C = {
    wb: '_ee',
    bd: '_syn',
    ji: '_uei',
    hi: '_pci',
    Kc: 'event_callback',
    Wb: 'event_timeout',
    ia: 'gtag.config'
  }
  C.Da = 'gtag.get'
  C.sa = 'purchase'
  C.ib = 'refund'
  C.Pa = 'begin_checkout'
  C.gb = 'add_to_cart'
  C.hb = 'remove_from_cart'
  C.Ef = 'view_cart'
  C.Xd = 'add_to_wishlist'
  C.Ca = 'view_item'
  C.Wd = 'view_promotion'
  C.Vd = 'select_promotion'
  C.Ud = 'select_item'
  C.Sb = 'view_item_list'
  C.Td = 'add_payment_info'
  C.Df = 'add_shipping_info'
  ;(C.xa = 'value_key'), (C.wa = 'value_callback')
  C.ba = 'allow_ad_personalization_signals'
  C.Tc = 'restricted_data_processing'
  C.jb = 'allow_google_signals'
  C.ca = 'cookie_expires'
  C.Vb = 'cookie_update'
  C.tb = 'session_duration'
  C.la = 'user_properties'
  C.Ga = 'transport_url'
  C.M = 'ads_data_redaction'
  C.s = 'ad_storage'
  C.J = 'analytics_storage'
  C.wf = 'region'
  C.xf = 'wait_for_update'
  ;(C.Gc = 'page_view'),
    (C.Yd = 'user_engagement'),
    (C.yf = 'app_remove'),
    (C.zf = 'app_store_refund'),
    (C.Af = 'app_store_subscription_cancel'),
    (C.Bf = 'app_store_subscription_convert'),
    (C.Cf = 'app_store_subscription_renew'),
    (C.Ff = 'first_open'),
    (C.Gf = 'first_visit'),
    (C.Hf = 'in_app_purchase'),
    (C.If = 'session_start'),
    (C.Jf = 'allow_custom_scripts'),
    (C.Kf = 'allow_display_features'),
    (C.Hc = 'allow_enhanced_conversions'),
    (C.oe = 'enhanced_conversions'),
    (C.kb = 'client_id'),
    (C.V = 'cookie_domain'),
    (C.Ub = 'cookie_name'),
    (C.Qa = 'cookie_path'),
    (C.ja = 'cookie_flags'),
    (C.va = 'currency'),
    (C.he = 'custom_map'),
    (C.Oc = 'groups'),
    (C.Ra = 'language'),
    (C.ee = 'country'),
    (C.ei = 'non_interaction'),
    (C.rb = 'page_location'),
    (C.Ea = 'page_referrer'),
    (C.Rc = 'page_title'),
    (C.sb = 'send_page_view'),
    (C.Fa = 'send_to'),
    (C.Uc = 'session_engaged'),
    (C.Yb = 'session_id'),
    (C.Vc = 'session_number'),
    (C.cg = 'tracking_id'),
    (C.ka = 'linker'),
    (C.Sa = 'url_passthrough'),
    (C.ob = 'accept_incoming'),
    (C.D = 'domains'),
    (C.qb = 'url_position'),
    (C.pb = 'decorate_forms'),
    (C.ue = 'phone_conversion_number'),
    (C.se = 'phone_conversion_callback'),
    (C.te = 'phone_conversion_css_class'),
    (C.ve = 'phone_conversion_options'),
    (C.Yf = 'phone_conversion_ids'),
    (C.Xf = 'phone_conversion_country_code'),
    (C.Zd = 'aw_remarketing'),
    (C.$d = 'aw_remarketing_only'),
    (C.Tb = 'gclid'),
    (C.ya = 'value'),
    (C.Zf = 'quantity'),
    (C.Of = 'affiliation'),
    (C.ne = 'tax'),
    (C.me = 'shipping'),
    (C.Jc = 'list_name'),
    (C.ke = 'checkout_step'),
    (C.je = 'checkout_option'),
    (C.Pf = 'coupon'),
    (C.Qf = 'promotions'),
    (C.ub = 'transaction_id'),
    (C.vb = 'user_id'),
    (C.$f = 'retoken'),
    (C.mb = 'conversion_linker'),
    (C.lb = 'conversion_cookie_prefix'),
    (C.da = 'cookie_prefix'),
    (C.S = 'items'),
    (C.de = 'aw_merchant_id'),
    (C.be = 'aw_feed_country'),
    (C.ce = 'aw_feed_language'),
    (C.ae = 'discount'),
    (C.ie = 'disable_merchant_reported_purchases'),
    (C.qe = 'new_customer'),
    (C.fe = 'customer_lifetime_value'),
    (C.Nf = 'dc_natural_search'),
    (C.Mf = 'dc_custom_params'),
    (C.dg = 'trip_type'),
    (C.Wf = 'passengers'),
    (C.Uf = 'method'),
    (C.bg = 'search_term'),
    (C.Lf = 'content_type'),
    (C.Vf = 'optimize_id'),
    (C.Rf = 'experiments'),
    (C.nb = 'google_signals'),
    (C.Nc = 'google_tld'),
    (C.Zb = 'update'),
    (C.Mc = 'firebase_id'),
    (C.Xb = 'ga_restrict_domain'),
    (C.Lc = 'event_settings'),
    (C.Ic = 'dynamic_event_settings'),
    (C.ag = 'screen_name'),
    (C.Tf = '_x_19'),
    (C.Sf = '_x_20'),
    (C.Qc = 'internal_traffic_results'),
    (C.xe = 'traffic_type'),
    (C.Sc = 'referral_exclusion_definition'),
    (C.Pc = 'ignore_referrer'),
    (C.we = 'delivery_postal_code'),
    (C.pe = 'estimated_delivery_date'),
    (C.eg = [
      C.ba,
      C.Hc,
      C.jb,
      C.S,
      C.Tc,
      C.V,
      C.ca,
      C.ja,
      C.Ub,
      C.Qa,
      C.da,
      C.Vb,
      C.he,
      C.Ic,
      C.Kc,
      C.Lc,
      C.Wb,
      C.Xb,
      C.nb,
      C.Nc,
      C.Oc,
      C.Qc,
      C.ka,
      C.Sc,
      C.Fa,
      C.sb,
      C.tb,
      C.Ga,
      C.Zb,
      C.la
    ]),
    (C.ye = [C.rb, C.Ea, C.Rc, C.Ra, C.ag, C.vb, C.Mc]),
    (C.fg = [C.yf, C.zf, C.Af, C.Bf, C.Cf, C.Ff, C.Gf, C.Hf, C.If, C.Yd]),
    (C.Nd = [
      C.Fa,
      C.Zd,
      C.$d,
      C.sb,
      C.Ra,
      C.ya,
      C.va,
      C.ub,
      C.vb,
      C.mb,
      C.lb,
      C.da,
      C.V,
      C.ca,
      C.ja,
      C.rb,
      C.Ea,
      C.ue,
      C.se,
      C.te,
      C.ve,
      C.S,
      C.de,
      C.be,
      C.ce,
      C.ae,
      C.ie,
      C.qe,
      C.fe,
      C.ba,
      C.Tc,
      C.Zb,
      C.Mc,
      C.oe,
      C.Ga,
      C.Sa,
      C.Hc,
      C.we,
      C.pe
    ])
  C.Ae = [
    C.sa,
    C.ib,
    C.Pa,
    C.gb,
    C.hb,
    C.Ef,
    C.Xd,
    C.Ca,
    C.Wd,
    C.Vd,
    C.Sb,
    C.Ud,
    C.Td,
    C.Df
  ]
  C.ze = [C.ba, C.jb, C.Vb]
  C.Be = [C.ca, C.Wb, C.tb]
  var uc = {},
    vc = function (a, b) {
      uc[a] = uc[a] || []
      uc[a][b] = !0
    },
    wc = function (a) {
      for (var b = [], c = uc[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6)
      for (var e = 0; e < b.length; e++)
        b[
          e
        ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(
          b[e] || 0
        )
      return b.join('')
    }
  var D = function (a) {
    vc('GTM', a)
  }
  function xc(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, xc)
    else {
      var b = Error().stack
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  }
  ua(xc, Error)
  xc.prototype.name = 'CustomError'
  var yc = function (a, b) {
    for (var c = a.split('%s'), d = '', e = c.length - 1, f = 0; f < e; f++)
      d += c[f] + (f < b.length ? b[f] : '%s')
    xc.call(this, d + c[e])
  }
  ua(yc, xc)
  yc.prototype.name = 'AssertionError'
  var zc = function (a, b) {
    throw new yc(
      'Failure' + (a ? ': ' + a : ''),
      Array.prototype.slice.call(arguments, 1)
    )
  }
  var Ac = function (a, b) {
      var c = function () {}
      c.prototype = a.prototype
      var d = new c()
      a.apply(d, Array.prototype.slice.call(arguments, 1))
      return d
    },
    Bc = function (a) {
      var b = a
      return function () {
        if (b) {
          var c = b
          b = null
          c()
        }
      }
    }
  var Cc,
    Dc = function () {
      if (void 0 === Cc) {
        var a = null,
          b = ma.trustedTypes
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy('goog#html', {
              createHTML: va,
              createScript: va,
              createScriptURL: va
            })
          } catch (c) {
            ma.console && ma.console.error(c.message)
          }
          Cc = a
        } else Cc = a
      }
      return Cc
    }
  var Fc = function (a, b) {
    this.h = b === Ec ? a : ''
  }
  Fc.prototype.toString = function () {
    return 'TrustedResourceUrl{' + this.h + '}'
  }
  var Ec = {}
  var Gc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
  var Hc
  a: {
    var Ic = ma.navigator
    if (Ic) {
      var Jc = Ic.userAgent
      if (Jc) {
        Hc = Jc
        break a
      }
    }
    Hc = ''
  }
  var Kc = function (a) {
    return -1 != Hc.indexOf(a)
  }
  var Mc = function (a, b, c) {
    this.h = c === Lc ? a : ''
  }
  Mc.prototype.toString = function () {
    return 'SafeHtml{' + this.h + '}'
  }
  var Nc = function (a) {
      if (a instanceof Mc && a.constructor === Mc) return a.h
      zc("expected object of type SafeHtml, got '" + a + "' of type " + ta(a))
      return 'type_error:SafeHtml'
    },
    Lc = {},
    Oc = new Mc((ma.trustedTypes && ma.trustedTypes.emptyHTML) || '', 0, Lc)
  var Pc = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
    Qc = (function (a) {
      var b = !1,
        c
      return function () {
        b || ((c = a()), (b = !0))
        return c
      }
    })(function () {
      if ('undefined' === typeof document) return !1
      var a = document.createElement('div'),
        b = document.createElement('div')
      b.appendChild(document.createElement('div'))
      a.appendChild(b)
      if (!a.firstChild) return !1
      var c = a.firstChild.firstChild
      a.innerHTML = Nc(Oc)
      return !c.parentElement
    }),
    Rc = function (a, b) {
      if (a.tagName && Pc[a.tagName.toUpperCase()])
        throw Error(
          'goog.dom.safe.setInnerHtml cannot be used to set content of ' +
            a.tagName +
            '.'
        )
      if (Qc()) for (; a.lastChild; ) a.removeChild(a.lastChild)
      a.innerHTML = Nc(b)
    }
  var Sc = function (a) {
    var b = Dc(),
      c = b ? b.createHTML(a) : a
    return new Mc(c, null, Lc)
  }
  var F = window,
    H = document,
    Tc = navigator,
    Uc = H.currentScript && H.currentScript.src,
    Vc = function (a, b) {
      var c = F[a]
      F[a] = void 0 === c ? b : c
      return F[a]
    },
    Wc = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b())
            }))
    },
    Xc = function (a, b, c) {
      var d = H.createElement('script')
      d.type = 'text/javascript'
      d.async = !0
      var e,
        f = Dc(),
        h = f ? f.createScriptURL(a) : a
      e = new Fc(h, Ec)
      var k
      a: {
        try {
          var l = d && d.ownerDocument,
            n = l && (l.defaultView || l.parentWindow)
          n = n || ma
          if (n.Element && n.Location) {
            k = n
            break a
          }
        } catch (x) {}
        k = null
      }
      if (
        k &&
        'undefined' != typeof k.HTMLScriptElement &&
        (!d ||
          (!(d instanceof k.HTMLScriptElement) &&
            (d instanceof k.Location || d instanceof k.Element)))
      ) {
        var p
        var r = typeof d
        if (('object' == r && null != d) || 'function' == r)
          try {
            p =
              d.constructor.displayName ||
              d.constructor.name ||
              Object.prototype.toString.call(d)
          } catch (x) {
            p = '<object could not be stringified>'
          }
        else p = void 0 === d ? 'undefined' : null === d ? 'null' : typeof d
        zc(
          'Argument is not a %s (or a non-Element, non-Location mock); got: %s',
          'HTMLScriptElement',
          p
        )
      }
      var t
      e instanceof Fc && e.constructor === Fc
        ? (t = e.h)
        : (zc(
            "expected object of type TrustedResourceUrl, got '" +
              e +
              "' of type " +
              ta(e)
          ),
          (t = 'type_error:TrustedResourceUrl'))
      d.src = t
      var q = ra(d.ownerDocument && d.ownerDocument.defaultView)
      q && d.setAttribute('nonce', q)
      Wc(d, b)
      c && (d.onerror = c)
      var u = ra()
      u && d.setAttribute('nonce', u)
      var v = H.getElementsByTagName('script')[0] || H.body || H.head
      v.parentNode.insertBefore(d, v)
      return d
    },
    Yc = function () {
      if (Uc) {
        var a = Uc.toLowerCase()
        if (0 === a.indexOf('https://')) return 2
        if (0 === a.indexOf('http://')) return 3
      }
      return 1
    },
    Zc = function (a, b) {
      var c = H.createElement('iframe')
      c.height = '0'
      c.width = '0'
      c.style.display = 'none'
      c.style.visibility = 'hidden'
      var d = (H.body && H.body.lastChild) || H.body || H.head
      d.parentNode.insertBefore(c, d)
      Wc(c, b)
      void 0 !== a && (c.src = a)
      return c
    },
    $c = function (a, b, c) {
      var d = new Image(1, 1)
      d.onload = function () {
        d.onload = null
        b && b()
      }
      d.onerror = function () {
        d.onerror = null
        c && c()
      }
      d.src = a
      return d
    },
    ad = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent('on' + b, c)
    },
    bd = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent('on' + b, c)
    },
    I = function (a) {
      F.setTimeout(a, 0)
    },
    cd = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null
    },
    dd = function (a) {
      var b = a.innerText || a.textContent || ''
      b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''))
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '))
      return b
    },
    ed = function (a) {
      var b = H.createElement('div')
      Rc(b, Sc('A<div>' + a + '</div>'))
      b = b.lastChild
      for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild))
      return c
    },
    fd = function (a, b, c) {
      c = c || 100
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f
        f = f.parentElement
      }
      return null
    },
    gd = function (a) {
      ;(Tc.sendBeacon && Tc.sendBeacon(a)) || $c(a)
    },
    hd = function (a, b) {
      var c = a[b]
      c && 'string' === typeof c.animVal && (c = c.animVal)
      return c
    }
  var id = {},
    jd = function (a) {
      return void 0 == id[a] ? !1 : id[a]
    }
  var kd = []
  function ld() {
    var a = Vc('google_tag_data', {})
    a.ics ||
      (a.ics = {
        entries: {},
        set: md,
        update: nd,
        addListener: od,
        notifyListeners: pd,
        active: !1
      })
    return a.ics
  }
  function md(a, b, c, d, e, f) {
    var h = ld()
    h.active = !0
    if (void 0 != b) {
      var k = h.entries,
        l = k[a] || {},
        n = l.region,
        p = c && g(c) ? c.toUpperCase() : void 0
      d = d.toUpperCase()
      e = e.toUpperCase()
      if (p === e || (p === d ? n !== e : !p && !n)) {
        var r = !!(f && 0 < f && void 0 === l.update),
          t = {
            region: p,
            initial: 'granted' === b,
            update: l.update,
            quiet: r
          }
        k[a] = t
        r &&
          F.setTimeout(function () {
            k[a] === t &&
              t.quiet &&
              ((t.quiet = !1), qd(a), pd(), vc('TAGGING', 2))
          }, f)
      }
    }
  }
  function nd(a, b) {
    var c = ld()
    c.active = !0
    if (void 0 != b) {
      var d = rd(a),
        e = c.entries,
        f = (e[a] = e[a] || {})
      f.update = 'granted' === b
      var h = rd(a)
      f.quiet ? ((f.quiet = !1), qd(a)) : h !== d && qd(a)
    }
  }
  function od(a, b) {
    kd.push({ Ue: a, $g: b })
  }
  function qd(a) {
    for (var b = 0; b < kd.length; ++b) {
      var c = kd[b]
      za(c.Ue) && -1 !== c.Ue.indexOf(a) && (c.jf = !0)
    }
  }
  function pd(a) {
    for (var b = 0; b < kd.length; ++b) {
      var c = kd[b]
      if (c.jf) {
        c.jf = !1
        try {
          c.$g({ Te: a })
        } catch (d) {}
      }
    }
  }
  var rd = function (a) {
      var b = ld().entries[a] || {}
      return void 0 !== b.update
        ? b.update
        : void 0 !== b.initial
        ? b.initial
        : void 0
    },
    sd = function (a) {
      return !(ld().entries[a] || {}).quiet
    },
    td = function () {
      return jd('gtag_cs_api') ? ld().active : !1
    },
    ud = function (a, b) {
      ld().addListener(a, b)
    },
    vd = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!sd(b[e])) return !0
        return !1
      }
      if (c()) {
        var d = !1
        ud(b, function (e) {
          d || c() || ((d = !0), a(e))
        })
      } else a({})
    },
    wd = function (a, b) {
      if (!1 === rd(b)) {
        var c = !1
        ud([b], function (d) {
          !c && rd(b) && (a(d), (c = !0))
        })
      }
    }
  var xd = [C.s, C.J],
    yd = function (a) {
      var b = a[C.wf]
      b && D(40)
      var c = a[C.xf]
      c && D(41)
      for (var d = za(b) ? b : [b], e = 0; e < d.length; ++e)
        for (var f = 0; f < xd.length; f++) {
          var h = xd[f],
            k = a[xd[f]],
            l = d[e]
          ld().set(h, k, l, '', '', c)
        }
    },
    zd = function (a, b) {
      for (var c = 0; c < xd.length; c++) {
        var d = xd[c],
          e = a[xd[c]]
        ld().update(d, e)
      }
      ld().notifyListeners(b)
    },
    Ad = function (a) {
      var b = rd(a)
      return void 0 != b ? b : !0
    },
    Bd = function () {
      for (var a = [], b = 0; b < xd.length; b++) {
        var c = rd(xd[b])
        a[b] = !0 === c ? '1' : !1 === c ? '0' : '-'
      }
      return 'G1' + a.join('')
    },
    Cd = function (a, b) {
      vd(a, b)
    }
  var Hd = function (a) {
      return Gd ? H.querySelectorAll(a) : null
    },
    Id = function (a, b) {
      if (!Gd) return null
      if (Element.prototype.closest)
        try {
          return a.closest(b)
        } catch (e) {
          return null
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a
      if (!H.documentElement.contains(d)) return null
      do {
        try {
          if (c.call(d, b)) return d
        } catch (e) {
          break
        }
        d = d.parentElement || d.parentNode
      } while (null !== d && 1 === d.nodeType)
      return null
    },
    Jd = !1
  if (H.querySelectorAll)
    try {
      var Kd = H.querySelectorAll(':root')
      Kd && 1 == Kd.length && Kd[0] == H.documentElement && (Jd = !0)
    } catch (a) {}
  var Gd = Jd
  var Yd = {},
    L = null,
    Zd = Math.random()
  Yd.B = 'G-XKZSL7J3N4'
  Yd.fc = 'as1'
  Yd.fi = ''
  var $d = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0
    },
    ae = { __paused: !0, __tg: !0 },
    be
  for (be in $d) $d.hasOwnProperty(be) && (ae[be] = !0)
  var ce = 'www.googletagmanager.com/gtm.js'
  ce = 'www.googletagmanager.com/gtag/js'
  var de = ce,
    ee = Ha('true'),
    fe = null,
    ge = null,
    he = '//www.googletagmanager.com/a?id=' + Yd.B + '&cv=1',
    ie = {},
    je = {},
    ke = function () {
      var a = L.sequence || 1
      L.sequence = a + 1
      return a
    }
  var le = {},
    me = new Da(),
    ne = {},
    oe = {},
    re = {
      name: 'dataLayer',
      set: function (a, b) {
        m(Va(a, b), ne)
        pe()
      },
      get: function (a) {
        return qe(a, 2)
      },
      reset: function () {
        me = new Da()
        ne = {}
        pe()
      }
    },
    qe = function (a, b) {
      return 2 != b ? me.get(a) : se(a)
    },
    se = function (a) {
      var b,
        c = a.split('.')
      b = b || []
      for (var d = ne, e = 0; e < c.length; e++) {
        if (null === d) return !1
        if (void 0 === d) break
        d = d[c[e]]
        if (-1 !== Aa(b, d)) return
      }
      return d
    },
    te = function (a, b) {
      oe.hasOwnProperty(a) || (me.set(a, b), m(Va(a, b), ne), pe())
    },
    pe = function (a) {
      Fa(oe, function (b, c) {
        me.set(b, c)
        m(Va(b, void 0), ne)
        m(Va(b, c), ne)
        a && delete oe[b]
      })
    },
    ue = function (a, b, c) {
      le[a] = le[a] || {}
      var d = 1 !== c ? se(b) : me.get(b)
      'array' === $a(d) || 'object' === $a(d)
        ? (le[a][b] = m(d))
        : (le[a][b] = d)
    },
    ve = function (a, b) {
      if (le[a]) return le[a][b]
    },
    we = function (a, b) {
      le[a] && delete le[a][b]
    }
  var ze = {},
    Ae = function (a, b) {
      if (F._gtmexpgrp && F._gtmexpgrp.hasOwnProperty(a)) return F._gtmexpgrp[a]
      void 0 === ze[a] && (ze[a] = Math.floor(Math.random() * b))
      return ze[a]
    }
  var Be = /:[0-9]+$/,
    Ce = function (a, b, c) {
      for (var d = a.split('&'), e = 0; e < d.length; e++) {
        var f = d[e].split('=')
        if (decodeURIComponent(f[0]).replace(/\+/g, ' ') === b) {
          var h = f.slice(1).join('=')
          return c ? h : decodeURIComponent(h).replace(/\+/g, ' ')
        }
      }
    },
    Fe = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase())
      if ('protocol' === b || 'port' === b)
        a.protocol = De(a.protocol) || De(F.location.protocol)
      'port' === b
        ? (a.port = String(
            Number(a.hostname ? a.port : F.location.port) ||
              ('http' == a.protocol ? 80 : 'https' == a.protocol ? 443 : '')
          ))
        : 'host' === b &&
          (a.hostname = (a.hostname || F.location.hostname)
            .replace(Be, '')
            .toLowerCase())
      return Ee(a, b, c, d, e)
    },
    Ee = function (a, b, c, d, e) {
      var f,
        h = De(a.protocol)
      b && (b = String(b).toLowerCase())
      switch (b) {
        case 'url_no_fragment':
          f = Ge(a)
          break
        case 'protocol':
          f = h
          break
        case 'host':
          f = a.hostname.replace(Be, '').toLowerCase()
          if (c) {
            var k = /^www\d*\./.exec(f)
            k && k[0] && (f = f.substr(k[0].length))
          }
          break
        case 'port':
          f = String(
            Number(a.port) || ('http' == h ? 80 : 'https' == h ? 443 : '')
          )
          break
        case 'path':
          a.pathname || a.hostname || vc('TAGGING', 1)
          f = '/' == a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname
          var l = f.split('/')
          0 <= Aa(d || [], l[l.length - 1]) && (l[l.length - 1] = '')
          f = l.join('/')
          break
        case 'query':
          f = a.search.replace('?', '')
          e && (f = Ce(f, e, void 0))
          break
        case 'extension':
          var n = a.pathname.split('.')
          f = 1 < n.length ? n[n.length - 1] : ''
          f = f.split('/')[0]
          break
        case 'fragment':
          f = a.hash.replace('#', '')
          break
        default:
          f = a && a.href
      }
      return f
    },
    De = function (a) {
      return a ? a.replace(':', '').toLowerCase() : ''
    },
    Ge = function (a) {
      var b = ''
      if (a && a.href) {
        var c = a.href.indexOf('#')
        b = 0 > c ? a.href : a.href.substr(0, c)
      }
      return b
    },
    He = function (a) {
      var b = H.createElement('a')
      a && (b.href = a)
      var c = b.pathname
      '/' !== c[0] && (a || vc('TAGGING', 1), (c = '/' + c))
      var d = b.hostname.replace(Be, '')
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      }
    },
    Ie = function (a) {
      function b(n) {
        var p = n.split('=')[0]
        return 0 > d.indexOf(p) ? n : p + '=0'
      }
      function c(n) {
        return n
          .split('&')
          .map(b)
          .filter(function (p) {
            return void 0 != p
          })
          .join('&')
      }
      var d = 'gclid dclid gclaw gcldc gclgp gclha gclgf _gl'.split(' '),
        e = He(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        k = e.hash
      '?' === h[0] && (h = h.substring(1))
      '#' === k[0] && (k = k.substring(1))
      h = c(h)
      k = c(k)
      '' !== h && (h = '?' + h)
      '' !== k && (k = '#' + k)
      var l = '' + f + h + k
      '/' === l[l.length - 1] && (l = l.substring(0, l.length - 1))
      return l
    }
  function Je(a, b, c) {
    for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
      var h = e[f].split('='),
        k = h[0].replace(/^\s*|\s*$/g, '')
      if (k && k == a) {
        var l = h
          .slice(1)
          .join('=')
          .replace(/^\s*|\s*$/g, '')
        l && c && (l = decodeURIComponent(l))
        d.push(l)
      }
    }
    return d
  }
  var Le = function (a, b, c, d) {
      return Ke(d) ? Je(a, String(b || document.cookie), c) : []
    },
    Oe = function (a, b, c, d, e) {
      if (Ke(e)) {
        var f = Me(a, d, e)
        if (1 === f.length) return f[0].id
        if (0 !== f.length) {
          f = Ne(
            f,
            function (h) {
              return h.mc
            },
            b
          )
          if (1 === f.length) return f[0].id
          f = Ne(
            f,
            function (h) {
              return h.Ib
            },
            c
          )
          return f[0] ? f[0].id : void 0
        }
      }
    }
  function Qe(a, b, c, d) {
    var e = document.cookie
    document.cookie = a
    var f = document.cookie
    return e != f || (void 0 != c && 0 <= Le(b, f, !1, d).indexOf(c))
  }
  var Ue = function (a, b, c) {
      function d(q, u, v) {
        if (null == v) return delete h[u], q
        h[u] = v
        return q + '; ' + u + '=' + v
      }
      function e(q, u) {
        if (null == u) return delete h[u], q
        h[u] = !0
        return q + '; ' + u
      }
      if (!Ke(c.Ja)) return 2
      var f
      void 0 == b
        ? (f = a + '=deleted; expires=' + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Re(b)),
          (f = a + '=' + b))
      var h = {}
      f = d(f, 'path', c.path)
      var k
      c.expires instanceof Date
        ? (k = c.expires.toUTCString())
        : null != c.expires && (k = '' + c.expires)
      f = d(f, 'expires', k)
      f = d(f, 'max-age', c.wi)
      f = d(f, 'samesite', c.Ai)
      c.Bi && (f = e(f, 'secure'))
      var l = c.domain
      if ('auto' === l) {
        for (var n = Se(), p = 0; p < n.length; ++p) {
          var r = 'none' !== n[p] ? n[p] : void 0,
            t = d(f, 'domain', r)
          t = e(t, c.flags)
          if (!Te(r, c.path) && Qe(t, a, b, c.Ja)) return 0
        }
        return 1
      }
      l && 'none' !== l && (f = d(f, 'domain', l))
      f = e(f, c.flags)
      return Te(l, c.path) ? 1 : Qe(f, a, b, c.Ja) ? 0 : 1
    },
    Ve = function (a, b, c) {
      null == c.path && (c.path = '/')
      c.domain || (c.domain = 'auto')
      return Ue(a, b, c)
    }
  function Ne(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k)
      l === c
        ? d.push(k)
        : void 0 === f || l < f
        ? ((e = [k]), (f = l))
        : l === f && e.push(k)
    }
    return 0 < d.length ? d : e
  }
  function Me(a, b, c) {
    for (var d = [], e = Le(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split('.'),
        k = h.shift()
      if (!b || -1 !== b.indexOf(k)) {
        var l = h.shift()
        l &&
          ((l = l.split('-')),
          d.push({ id: h.join('.'), mc: 1 * l[0] || 1, Ib: 1 * l[1] || 1 }))
      }
    }
    return d
  }
  var Re = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200))
      return a
    },
    We = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Xe = /(^|\.)doubleclick\.net$/i,
    Te = function (a, b) {
      return Xe.test(document.location.hostname) || ('/' === b && We.test(a))
    },
    Se = function () {
      var a = [],
        b = document.location.hostname.split('.')
      if (4 === b.length) {
        var c = b[b.length - 1]
        if (parseInt(c, 10).toString() === c) return ['none']
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'))
      var e = document.location.hostname
      Xe.test(e) || We.test(e) || a.push('none')
      return a
    },
    Ke = function (a) {
      if (!jd('gtag_cs_api') || !a || !td()) return !0
      if (!sd(a)) return !1
      var b = rd(a)
      return null == b ? !0 : !!b
    }
  var Ye = function () {
      for (
        var a = Tc.userAgent + (H.cookie || '') + (H.referrer || ''),
          b = a.length,
          c = F.history.length;
        0 < c;

      )
        a += c-- ^ b++
      var d = 1,
        e,
        f,
        h
      if (a)
        for (d = 0, f = a.length - 1; 0 <= f; f--)
          (h = a.charCodeAt(f)),
            (d = ((d << 6) & 268435455) + h + (h << 14)),
            (e = d & 266338304),
            (d = 0 != e ? d ^ (e >> 21) : d)
      return [
        Math.round(2147483647 * Math.random()) ^ (d & 2147483647),
        Math.round(La() / 1e3)
      ].join('.')
    },
    af = function (a, b, c, d, e) {
      var f = Ze(b)
      return Oe(a, f, $e(c), d, e)
    },
    bf = function (a, b, c, d) {
      var e = '' + Ze(c),
        f = $e(d)
      1 < f && (e += '-' + f)
      return [b, e, a].join('.')
    },
    Ze = function (a) {
      if (!a) return 1
      a = 0 === a.indexOf('.') ? a.substr(1) : a
      return a.split('.').length
    },
    $e = function (a) {
      if (!a || '/' === a) return 1
      '/' !== a[0] && (a = '/' + a)
      '/' !== a[a.length - 1] && (a += '/')
      return a.split('/').length - 1
    }
  function cf(a, b, c) {
    var d,
      e = a.Hb
    null == e && (e = 7776e3)
    0 !== e && (d = new Date((b || La()) + 1e3 * e))
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: d
    }
  }
  var df = ['1'],
    ef = {},
    jf = function (a) {
      var b = ff(a.prefix)
      ef[b] ||
        gf(b, a.path, a.domain) ||
        (hf(b, Ye(), a), gf(b, a.path, a.domain))
    }
  function hf(a, b, c) {
    var d = bf(b, '1', c.domain, c.path),
      e = cf(c)
    e.Ja = 'ad_storage'
    Ve(a, d, e)
  }
  function gf(a, b, c) {
    var d = af(a, b, c, df, 'ad_storage')
    d && (ef[a] = d)
    return d
  }
  function ff(a) {
    return (a || '_gcl') + '_au'
  }
  function kf() {
    for (var a = lf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c
    return b
  }
  function mf() {
    var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    a += a.toLowerCase() + '0123456789-_'
    return a + '.'
  }
  var lf, nf
  function of(a) {
    lf = lf || mf()
    nf = nf || kf()
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        l = f >> 2,
        n = ((f & 3) << 4) | (h >> 4),
        p = ((h & 15) << 2) | (k >> 6),
        r = k & 63
      e || ((r = 64), d || (p = 64))
      b.push(lf[l], lf[n], lf[p], lf[r])
    }
    return b.join('')
  }
  function pf(a) {
    function b(l) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = nf[n]
        if (null != p) return p
        if (!/^[\s\xa0]*$/.test(n))
          throw Error('Unknown base64 encoding at char: ' + n)
      }
      return l
    }
    lf = lf || mf()
    nf = nf || kf()
    for (var c = '', d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        k = b(64)
      if (64 === k && -1 === e) return c
      c += String.fromCharCode((e << 2) | (f >> 4))
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != k && (c += String.fromCharCode(((h << 6) & 192) | k)))
    }
  }
  var qf
  var uf = function () {
      var a = rf,
        b = sf,
        c = tf(),
        d = function (h) {
          a(h.target || h.srcElement || {})
        },
        e = function (h) {
          b(h.target || h.srcElement || {})
        }
      if (!c.init) {
        ad(H, 'mousedown', d)
        ad(H, 'keyup', d)
        ad(H, 'submit', e)
        var f = HTMLFormElement.prototype.submit
        HTMLFormElement.prototype.submit = function () {
          b(this)
          f.call(this)
        }
        c.init = !0
      }
    },
    vf = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      }
      tf().decorators.push(f)
    },
    wf = function (a, b, c) {
      for (var d = tf().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          k
        if ((k = !c || h.forms))
          a: {
            var l = h.domains,
              n = a,
              p = !!h.sameHost
            if (l && (p || n !== H.location.hostname))
              for (var r = 0; r < l.length; r++)
                if (l[r] instanceof RegExp) {
                  if (l[r].test(n)) {
                    k = !0
                    break a
                  }
                } else if (
                  0 <= n.indexOf(l[r]) ||
                  (p && 0 <= l[r].indexOf(n))
                ) {
                  k = !0
                  break a
                }
            k = !1
          }
        if (k) {
          var t = h.placement
          void 0 == t && (t = h.fragment ? 2 : 1)
          t === b && Oa(e, h.callback())
        }
      }
      return e
    },
    tf = function () {
      var a = Vc('google_tag_data', {}),
        b = a.gl
      ;(b && b.decorators) || ((b = { decorators: [] }), (a.gl = b))
      return b
    }
  var xf = /(.*?)\*(.*?)\*(.*)/,
    yf = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    zf = /^(?:www\.|m\.|amp\.)+/,
    Af = /([^?#]+)(\?[^#]*)?(#.*)?/
  function Bf(a) {
    return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)')
  }
  var Df = function (a) {
      var b = [],
        c
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c]
          void 0 !== d &&
            d === d &&
            null !== d &&
            '[object Object]' !== d.toString() &&
            (b.push(c), b.push(of(String(d))))
        }
      var e = b.join('*')
      return ['1', Cf(e), e].join('*')
    },
    Cf = function (a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a
        ].join('*'),
        d
      if (!(d = qf)) {
        for (var e = Array(256), f = 0; 256 > f; f++) {
          for (var h = f, k = 0; 8 > k; k++)
            h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1
          e[f] = h
        }
        d = e
      }
      qf = d
      for (var l = 4294967295, n = 0; n < c.length; n++)
        l = (l >>> 8) ^ qf[(l ^ c.charCodeAt(n)) & 255]
      return ((l ^ -1) >>> 0).toString(36)
    },
    Ff = function () {
      return function (a) {
        var b = He(F.location.href),
          c = b.search.replace('?', ''),
          d = Ce(c, '_gl', !0) || ''
        a.query = Ef(d) || {}
        var e = Fe(b, 'fragment').match(Bf('_gl'))
        a.fragment = Ef((e && e[3]) || '') || {}
      }
    },
    Gf = function (a) {
      var b = Ff(),
        c = tf()
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data))
      var d = {},
        e = c.data
      e && (Oa(d, e.query), a && Oa(d, e.fragment))
      return d
    },
    Ef = function (a) {
      var b
      b = void 0 === b ? 3 : b
      try {
        if (a) {
          var c
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var f = xf.exec(d)
              if (f) {
                c = f
                break a
              }
              d = decodeURIComponent(d)
            }
            c = void 0
          }
          var h = c
          if (h && '1' === h[1]) {
            var k = h[3],
              l
            a: {
              for (var n = h[2], p = 0; p < b; ++p)
                if (n === Cf(k, p)) {
                  l = !0
                  break a
                }
              l = !1
            }
            if (l) {
              for (
                var r = {}, t = k ? k.split('*') : [], q = 0;
                q < t.length;
                q += 2
              )
                r[t[q]] = pf(t[q + 1])
              return r
            }
          }
        }
      } catch (u) {}
    }
  function Hf(a, b, c, d) {
    function e(p) {
      var r = p,
        t = Bf(a).exec(r),
        q = r
      if (t) {
        var u = t[2],
          v = t[4]
        q = t[1]
        v && (q = q + u + v)
      }
      p = q
      var x = p.charAt(p.length - 1)
      p && '&' !== x && (p += '&')
      return p + n
    }
    d = void 0 === d ? !1 : d
    var f = Af.exec(c)
    if (!f) return ''
    var h = f[1],
      k = f[2] || '',
      l = f[3] || '',
      n = a + '=' + b
    d ? (l = '#' + e(l.substring(1))) : (k = '?' + e(k.substring(1)))
    return '' + h + k + l
  }
  function If(a, b) {
    var c = 'FORM' === (a.tagName || '').toUpperCase(),
      d = wf(b, 1, c),
      e = wf(b, 2, c),
      f = wf(b, 3, c)
    if (Pa(d)) {
      var h = Df(d)
      c ? Jf('_gl', h, a) : Kf('_gl', h, a, !1)
    }
    if (!c && Pa(e)) {
      var k = Df(e)
      Kf('_gl', k, a, !0)
    }
    for (var l in f)
      if (f.hasOwnProperty(l))
        a: {
          var n = l,
            p = f[l],
            r = a
          if (r.tagName) {
            if ('a' === r.tagName.toLowerCase()) {
              Kf(n, p, r, void 0)
              break a
            }
            if ('form' === r.tagName.toLowerCase()) {
              Jf(n, p, r)
              break a
            }
          }
          'string' == typeof r && Hf(n, p, r, void 0)
        }
  }
  function Kf(a, b, c, d) {
    if (c.href) {
      var e = Hf(a, b, c.href, void 0 === d ? !1 : d)
      Gc.test(e) && (c.href = e)
    }
  }
  function Jf(a, b, c) {
    if (c && c.action) {
      var d = (c.method || '').toLowerCase()
      if ('get' === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var k = e[h]
          if (k.name === a) {
            k.setAttribute('value', b)
            f = !0
            break
          }
        }
        if (!f) {
          var l = H.createElement('input')
          l.setAttribute('type', 'hidden')
          l.setAttribute('name', a)
          l.setAttribute('value', b)
          c.appendChild(l)
        }
      } else if ('post' === d) {
        var n = Hf(a, b, c.action)
        Gc.test(n) && (c.action = n)
      }
    }
  }
  var rf = function (a) {
      try {
        var b
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c
              break a
            }
            c = c.parentNode
            d--
          }
          b = null
        }
        var e = b
        if (e) {
          var f = e.protocol
          ;('http:' !== f && 'https:' !== f) || If(e, e.hostname)
        }
      } catch (h) {}
    },
    sf = function (a) {
      try {
        if (a.action) {
          var b = Fe(He(a.action), 'host')
          If(a, b)
        }
      } catch (c) {}
    },
    Lf = function (a, b, c, d) {
      uf()
      vf(a, b, 'fragment' === c ? 2 : 1, !!d, !1)
    },
    Mf = function (a, b) {
      uf()
      vf(a, [Ee(F.location, 'host', !0)], b, !0, !0)
    },
    Nf = function () {
      var a = H.location.hostname,
        b = yf.exec(H.referrer)
      if (!b) return !1
      var c = b[2],
        d = b[1],
        e = ''
      if (c) {
        var f = c.split('/'),
          h = f[1]
        e = 's' === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
      } else if (d) {
        if (0 === d.indexOf('xn--')) return !1
        e = d.replace(/-/g, '.').replace(/\.\./g, '-')
      }
      var k = a.replace(zf, ''),
        l = e.replace(zf, ''),
        n
      if (!(n = k === l)) {
        var p = '.' + l
        n = k.substring(k.length - p.length, k.length) === p
      }
      return n
    },
    Of = function (a, b) {
      return !1 === a ? !1 : a || b || Nf()
    }
  var Pf = /^\w+$/,
    Qf = /^[\w-]+$/,
    Rf = /^~?[\w-]+$/,
    Sf = { aw: '_aw', dc: '_dc', gf: '_gf', ha: '_ha', gp: '_gp' },
    Tf = function () {
      if (!jd('gtag_cs_api') || !td()) return !0
      var a = rd('ad_storage')
      return null == a ? !0 : !!a
    },
    Uf = function (a, b) {
      sd('ad_storage')
        ? Tf()
          ? a()
          : wd(a, 'ad_storage')
        : b
        ? vc('TAGGING', 3)
        : vd(
            function () {
              Uf(a, !0)
            },
            ['ad_storage']
          )
    },
    Xf = function (a) {
      var b = []
      if (!H.cookie) return b
      var c = Le(a, H.cookie, void 0, 'ad_storage')
      if (!c || 0 == c.length) return b
      for (var d = 0; d < c.length; d++) {
        var e = Vf(c[d])
        e && -1 === Aa(b, e) && b.push(e)
      }
      return Wf(b)
    }
  function Yf(a) {
    return a && 'string' == typeof a && a.match(Pf) ? a : '_gcl'
  }
  var $f = function () {
      var a = He(F.location.href),
        b = Fe(a, 'query', !1, void 0, 'gclid'),
        c = Fe(a, 'query', !1, void 0, 'gclsrc'),
        d = Fe(a, 'query', !1, void 0, 'dclid')
      if (!b || !c) {
        var e = a.hash.replace('#', '')
        b = b || Ce(e, 'gclid', void 0)
        c = c || Ce(e, 'gclsrc', void 0)
      }
      return Zf(b, c, d)
    },
    Zf = function (a, b, c) {
      var d = {},
        e = function (f, h) {
          d[h] || (d[h] = [])
          d[h].push(f)
        }
      d.gclid = a
      d.gclsrc = b
      d.dclid = c
      if (void 0 !== a && a.match(Qf))
        switch (b) {
          case void 0:
            e(a, 'aw')
            break
          case 'aw.ds':
            e(a, 'aw')
            e(a, 'dc')
            break
          case 'ds':
            e(a, 'dc')
            break
          case '3p.ds':
            jd('gtm_3pds') && e(a, 'dc')
            break
          case 'gf':
            e(a, 'gf')
            break
          case 'ha':
            e(a, 'ha')
            break
          case 'gp':
            e(a, 'gp')
        }
      c && e(c, 'dc')
      return d
    },
    bg = function (a) {
      var b = $f()
      Uf(function () {
        ag(b, a)
      })
    }
  function ag(a, b, c) {
    function d(l, n) {
      var p = cg(l, e)
      p && Ve(p, n, f)
    }
    b = b || {}
    var e = Yf(b.prefix)
    c = c || La()
    var f = cf(b, c, !0)
    f.Ja = 'ad_storage'
    var h = Math.round(c / 1e3),
      k = function (l) {
        return ['GCL', h, l].join('.')
      }
    a.aw && (!0 === b.Gi ? d('aw', k('~' + a.aw[0])) : d('aw', k(a.aw[0])))
    a.dc && d('dc', k(a.dc[0]))
    a.gf && d('gf', k(a.gf[0]))
    a.ha && d('ha', k(a.ha[0]))
    a.gp && d('gp', k(a.gp[0]))
  }
  var eg = function (a, b) {
      var c = Gf(!0)
      Uf(function () {
        for (var d = Yf(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e]
          if (void 0 !== Sf[f]) {
            var h = cg(f, d),
              k = c[h]
            if (k) {
              var l = Math.min(dg(k), La()),
                n
              b: {
                for (
                  var p = l, r = Le(h, H.cookie, void 0, 'ad_storage'), t = 0;
                  t < r.length;
                  ++t
                )
                  if (dg(r[t]) > p) {
                    n = !0
                    break b
                  }
                n = !1
              }
              if (!n) {
                var q = cf(b, l, !0)
                q.Ja = 'ad_storage'
                Ve(h, k, q)
              }
            }
          }
        }
        ag(Zf(c.gclid, c.gclsrc), b)
      })
    },
    cg = function (a, b) {
      var c = Sf[a]
      if (void 0 !== c) return b + c
    },
    dg = function (a) {
      var b = a.split('.')
      return 3 !== b.length || 'GCL' !== b[0] ? 0 : 1e3 * (Number(b[1]) || 0)
    }
  function Vf(a) {
    var b = a.split('.')
    if (3 == b.length && 'GCL' == b[0] && b[1]) return b[2]
  }
  var fg = function (a, b, c, d, e) {
      if (za(b)) {
        var f = Yf(e),
          h = function () {
            for (var k = {}, l = 0; l < a.length; ++l) {
              var n = cg(a[l], f)
              if (n) {
                var p = Le(n, H.cookie, void 0, 'ad_storage')
                p.length && (k[n] = p.sort()[p.length - 1])
              }
            }
            return k
          }
        Uf(function () {
          Lf(h, b, c, d)
        })
      }
    },
    Wf = function (a) {
      return a.filter(function (b) {
        return Rf.test(b)
      })
    },
    gg = function (a, b) {
      for (var c = Yf(b.prefix), d = {}, e = 0; e < a.length; e++)
        Sf[a[e]] && (d[a[e]] = Sf[a[e]])
      Uf(function () {
        Fa(d, function (f, h) {
          var k = Le(c + h, H.cookie, void 0, 'ad_storage')
          if (k.length) {
            var l = k[0],
              n = dg(l),
              p = {}
            p[f] = [Vf(l)]
            ag(p, b, n)
          }
        })
      })
    }
  function hg(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0
    return !1
  }
  var ig = function () {
      function a(e, f, h) {
        h && (e[f] = h)
      }
      var b = ['aw', 'dc']
      if (td()) {
        var c = $f()
        if (hg(c, b)) {
          var d = {}
          a(d, 'gclid', c.gclid)
          a(d, 'dclid', c.dclid)
          a(d, 'gclsrc', c.gclsrc)
          Mf(function () {
            return d
          }, 3)
          Mf(function () {
            var e = {}
            return (e._up = '1'), e
          }, 1)
        }
      }
    },
    jg = function () {
      var a
      if (Tf()) {
        for (
          var b = [],
            c = H.cookie.split(';'),
            d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,
            e = 0;
          e < c.length;
          e++
        ) {
          var f = c[e].match(d)
          f && b.push({ Id: f[1], value: f[2] })
        }
        var h = {}
        if (b && b.length)
          for (var k = 0; k < b.length; k++) {
            var l = b[k].value.split('.')
            '1' == l[0] &&
              3 == l.length &&
              l[1] &&
              (h[b[k].Id] || (h[b[k].Id] = []),
              h[b[k].Id].push({ timestamp: l[1], bh: l[2] }))
          }
        a = h
      } else a = {}
      return a
    }
  var kg = /^\d+\.fls\.doubleclick\.net$/
  function lg(a, b) {
    sd(C.s)
      ? Ad(C.s)
        ? a()
        : wd(a, C.s)
      : b
      ? D(42)
      : Cd(
          function () {
            lg(a, !0)
          },
          [C.s]
        )
  }
  function mg(a) {
    var b = He(F.location.href),
      c = Fe(b, 'host', !1)
    if (c && c.match(kg)) {
      var d = Fe(b, 'path').split(a + '=')
      if (1 < d.length) return d[1].split(';')[0].split('?')[0]
    }
  }
  function ng(a, b, c) {
    if ('aw' == a || 'dc' == a) {
      var d = mg('gcl' + a)
      if (d) return d.split('.')
    }
    var e = Yf(b)
    if ('_gcl' == e) {
      c = void 0 === c ? !0 : c
      var f = !Ad(C.s) && c,
        h
      h = $f()[a] || []
      if (0 < h.length) return f ? ['0'] : h
    }
    var k = cg(a, e)
    return k ? Xf(k) : []
  }
  var og = function (a) {
      var b = mg('gac')
      if (b) return !Ad(C.s) && a ? '0' : decodeURIComponent(b)
      var c = jg(),
        d = []
      Fa(c, function (e, f) {
        for (var h = [], k = 0; k < f.length; k++) h.push(f[k].bh)
        h = Wf(h)
        h.length && d.push(e + ':' + h.join(','))
      })
      return d.join(';')
    },
    pg = function (a, b) {
      var c = $f().dc || []
      lg(function () {
        jf(b)
        var d = ef[ff(b.prefix)],
          e = !1
        if (d && 0 < c.length) {
          var f = (L.joined_au = L.joined_au || {}),
            h = b.prefix || '_gcl'
          if (!f[h])
            for (var k = 0; k < c.length; k++) {
              var l = 'http://ad.doubleclick.net/ddm/regclk'
              l = l + '?gclid=' + c[k] + '&auiddc=' + d
              gd(l)
              e = f[h] = !0
            }
        }
        null == a && (a = e)
        if (a && d) {
          var n = ff(b.prefix),
            p = ef[n]
          p && hf(n, p, b)
        }
      })
    }
  var qg = /[A-Z]+/,
    rg = /\s/,
    sg = function (a) {
      if (g(a) && ((a = Ja(a)), !rg.test(a))) {
        var b = a.indexOf('-')
        if (!(0 > b)) {
          var c = a.substring(0, b)
          if (qg.test(c)) {
            for (
              var d = a.substring(b + 1).split('/'), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return
            return { id: a, prefix: c, containerId: c + '-' + d[0], C: d }
          }
        }
      }
    },
    ug = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = sg(a[c])
        d && (b[d.id] = d)
      }
      tg(b)
      var e = []
      Fa(b, function (f, h) {
        e.push(h)
      })
      return e
    }
  function tg(a) {
    var b = [],
      c
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c]
        'AW' === d.prefix && d.C[1] && b.push(d.containerId)
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]]
  }
  var vg = function () {
    var a = !1
    return a
  }
  var xg = function (a, b, c, d) {
      return (2 === wg() || d || 'http:' != F.location.protocol ? a : b) + c
    },
    wg = function () {
      var a = Yc(),
        b
      if (1 === a)
        a: {
          var c = de
          c = c.toLowerCase()
          for (
            var d = 'https://' + c,
              e = 'http://' + c,
              f = 1,
              h = H.getElementsByTagName('script'),
              k = 0;
            k < h.length && 100 > k;
            k++
          ) {
            var l = h[k].src
            if (l) {
              l = l.toLowerCase()
              if (0 === l.indexOf(e)) {
                b = 3
                break a
              }
              1 === f && 0 === l.indexOf(d) && (f = 2)
            }
          }
          b = f
        }
      else b = a
      return b
    }
  var zg = function (a, b, c) {
      if (F[a.functionName]) return b.ud && I(b.ud), F[a.functionName]
      var d = yg()
      F[a.functionName] = d
      if (a.ic)
        for (var e = 0; e < a.ic.length; e++) F[a.ic[e]] = F[a.ic[e]] || yg()
      a.sc && void 0 === F[a.sc] && (F[a.sc] = c)
      Xc(xg('https://', 'http://', a.Fd), b.ud, b.Ch)
      return d
    },
    yg = function () {
      var a = function () {
        a.q = a.q || []
        a.q.push(arguments)
      }
      return a
    },
    Ag = {
      functionName: '_googWcmImpl',
      sc: '_googWcmAk',
      Fd: 'www.gstatic.com/wcm/loader.js'
    },
    Bg = {
      functionName: '_gaPhoneImpl',
      sc: 'ga_wpid',
      Fd: 'www.gstatic.com/gaphone/loader.js'
    },
    Cg = { uf: '', ng: '5' },
    Dg = {
      functionName: '_googCallTrackingImpl',
      ic: [Bg.functionName, Ag.functionName],
      Fd:
        'www.gstatic.com/call-tracking/call-tracking_' +
        (Cg.uf || Cg.ng) +
        '.js'
    },
    Eg = {},
    Fg = function (a, b, c, d) {
      D(22)
      if (c) {
        d = d || {}
        var e = zg(Ag, d, a),
          f = { ak: a, cl: b }
        void 0 === d.na && (f.autoreplace = c)
        e(2, d.na, f, c, 0, new Date(), d.options)
      }
    },
    Gg = function (a, b, c, d) {
      D(21)
      if (b && c) {
        d = d || {}
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: new Date()
            },
            f = 0;
          f < a.length;
          f++
        ) {
          var h = a[f]
          Eg[h.id] ||
            (h && 'AW' === h.prefix && !e.adData && 2 <= h.C.length
              ? ((e.adData = { ak: h.C[0], cl: h.C[1] }), (Eg[h.id] = !0))
              : h &&
                'UA' === h.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: h.containerId }), (Eg[h.id] = !0)))
        }
        ;(e.gaData || e.adData) && zg(Dg, d)(d.na, e, d.options)
      }
    },
    Hg = function () {
      var a = !1
      return a
    },
    Ig = function (a, b) {
      if (a)
        if (vg()) {
        } else {
          if (g(a)) {
            var c = sg(a)
            if (!c) return
            a = c
          }
          var d = void 0,
            e = !1,
            f = b.getWithConfig(C.Yf)
          if (f && za(f)) {
            d = []
            for (var h = 0; h < f.length; h++) {
              var k = sg(f[h])
              k &&
                (d.push(k),
                (a.id === k.id ||
                  (a.id === a.containerId &&
                    a.containerId === k.containerId)) &&
                  (e = !0))
            }
          }
          if (!d || e) {
            var l = b.getWithConfig(C.ue),
              n
            if (l) {
              za(l) ? (n = l) : (n = [l])
              var p = b.getWithConfig(C.se),
                r = b.getWithConfig(C.te),
                t = b.getWithConfig(C.ve),
                q = b.getWithConfig(C.Xf),
                u = p || r,
                v = 1
              'UA' !== a.prefix || d || (v = 5)
              for (var x = 0; x < n.length; x++)
                if (x < v)
                  if (d) Gg(d, n[x], q, { na: u, options: t })
                  else if ('AW' === a.prefix && a.C[1])
                    Hg()
                      ? Gg([a], n[x], q || 'US', { na: u, options: t })
                      : Fg(a.C[0], a.C[1], n[x], { na: u, options: t })
                  else if ('UA' === a.prefix)
                    if (Hg()) Gg([a], n[x], q || 'US', { na: u })
                    else {
                      var y = a.containerId,
                        w = n[x],
                        A = { na: u }
                      D(23)
                      if (w) {
                        A = A || {}
                        var z = zg(Bg, A, y),
                          B = {}
                        void 0 !== A.na ? (B.receiver = A.na) : (B.replace = w)
                        B.ga_wpid = y
                        B.destination = w
                        z(2, new Date(), B)
                      }
                    }
            }
          }
        }
    }
  var Lg = function (a) {
      return Ad(C.s)
        ? a
        : a.replace(/&url=([^&#]+)/, function (b, c) {
            var d = Ie(decodeURIComponent(c))
            return '&url=' + encodeURIComponent(d)
          })
    },
    Mg = function () {
      var a
      if (!(a = ee)) {
        var b
        if (!0 === F._gtmdgs) b = !0
        else {
          var c = (Tc && Tc.userAgent) || ''
          b =
            0 > c.indexOf('Safari') ||
            /Chrome|Coast|Opera|Edg|Silk|Android/.test(c) ||
            11 > ((/Version\/([\d]+)/.exec(c) || [])[1] || '')
              ? !1
              : !0
        }
        a = !b
      }
      if (a) return -1
      var d = Ga('1')
      return Ae(1, 100) < d ? Ae(2, 2) : -1
    },
    Ng = function (a) {
      var b
      return b
    }
  var Og = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Pg = {
      cl: ['ecl'],
      customPixels: ['nonGooglePixels'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: [
        'customScripts',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes'
      ],
      customScripts: [
        'html',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes'
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ['nonGooglePixels'],
      nonGoogleIframes: ['nonGooglePixels']
    },
    Qg = {
      cl: ['ecl'],
      customPixels: ['customScripts', 'html'],
      ecl: ['cl'],
      ehl: ['hl'],
      hl: ['ehl'],
      html: ['customScripts'],
      customScripts: ['html'],
      nonGooglePixels: [
        'customPixels',
        'customScripts',
        'html',
        'nonGoogleScripts',
        'nonGoogleIframes'
      ],
      nonGoogleScripts: ['customScripts', 'html'],
      nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts']
    },
    Rg = 'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
      ' '
    )
  var Tg = function (a) {
      var b
      qe('gtm.allowlist') && D(52)
      b = qe('gtm.allowlist')
      b || (b = qe('gtm.whitelist'))
      b && D(9)
      b = 'google gtagfl lcl zone oid op'.split(' ')
      var c = b && Qa(Ia(b), Pg),
        d
      qe('gtm.blocklist') && D(51)
      d = qe('gtm.blocklist')
      d || (d = qe('gtm.blacklist'))
      d || ((d = qe('tagTypeBlacklist')) && D(3))
      d ? D(8) : (d = [])
      Sg() &&
        ((d = Ia(d)),
        d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'))
      0 <= Aa(Ia(d), 'google') && D(2)
      var e = d && Qa(Ia(d), Qg),
        f = {}
      return function (h) {
        var k = h && h[Rb.Ha]
        if (!k || 'string' != typeof k) return !0
        k = k.replace(/^_*/, '')
        if (void 0 !== f[k]) return f[k]
        var l = je[k] || [],
          n = a(k, l)
        if (b) {
          var p
          if ((p = n))
            a: {
              if (0 > Aa(c, k))
                if (l && 0 < l.length)
                  for (var r = 0; r < l.length; r++) {
                    if (0 > Aa(c, l[r])) {
                      D(11)
                      p = !1
                      break a
                    }
                  }
                else {
                  p = !1
                  break a
                }
              p = !0
            }
          n = p
        }
        var t = !1
        if (d) {
          var q = 0 <= Aa(e, k)
          if (q) t = q
          else {
            var u = Ea(e, l || [])
            u && D(10)
            t = u
          }
        }
        var v = !n || t
        v ||
          !(0 <= Aa(l, 'sandboxedScripts')) ||
          (c && -1 !== Aa(c, 'sandboxedScripts')) ||
          (v = Ea(e, Rg))
        return (f[k] = v)
      }
    },
    Sg = function () {
      return Og.test(F.location && F.location.hostname)
    }
  var Ug = {
      active: !0,
      isAllowed: function () {
        return !0
      }
    },
    Vg = function (a) {
      var b = L.zones
      return b ? b.checkState(Yd.B, a) : Ug
    },
    Wg = function (a) {
      var b = L.zones
      !b && a && (b = L.zones = a())
      return b
    }
  var Xg = function () {},
    Yg = function () {}
  var Zg = !1,
    $g = 0,
    ah = []
  function bh(a) {
    if (!Zg) {
      var b = H.createEventObject,
        c = 'complete' == H.readyState,
        d = 'interactive' == H.readyState
      if (!a || 'readystatechange' != a.type || c || (!b && d)) {
        Zg = !0
        for (var e = 0; e < ah.length; e++) I(ah[e])
      }
      ah.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f])
        return 0
      }
    }
  }
  function ch() {
    if (!Zg && 140 > $g) {
      $g++
      try {
        H.documentElement.doScroll('left'), bh()
      } catch (a) {
        F.setTimeout(ch, 50)
      }
    }
  }
  var dh = function (a) {
    Zg ? a() : ah.push(a)
  }
  var eh = {},
    fh = {},
    gh = function (a, b, c, d) {
      if (!fh[a] || ae[b] || '__zone' === b) return -1
      var e = {}
      bb(d) && (e = m(d, e))
      e.id = c
      e.status = 'timeout'
      return fh[a].tags.push(e) - 1
    },
    hh = function (a, b, c, d) {
      if (fh[a]) {
        var e = fh[a].tags[b]
        e && ((e.status = c), (e.executionTime = d))
      }
    }
  function ih(a) {
    for (var b = eh[a] || [], c = 0; c < b.length; c++) b[c]()
    eh[a] = {
      push: function (d) {
        d(Yd.B, fh[a])
      }
    }
  }
  var lh = function (a, b, c) {
      fh[a] = { tags: [] }
      xa(b) && jh(a, b)
      c &&
        F.setTimeout(function () {
          return ih(a)
        }, Number(c))
      return kh(a)
    },
    jh = function (a, b) {
      eh[a] = eh[a] || []
      eh[a].push(
        Na(function () {
          return I(function () {
            b(Yd.B, fh[a])
          })
        })
      )
    }
  function kh(a) {
    var b = 0,
      c = 0,
      d = !1
    return {
      add: function () {
        c++
        return Na(function () {
          b++
          d && b >= c && ih(a)
        })
      },
      Bg: function () {
        d = !0
        b >= c && ih(a)
      }
    }
  }
  var mh = function () {
    function a(d) {
      return !ya(d) || 0 > d ? 0 : d
    }
    if (!L._li && F.performance && F.performance.timing) {
      var b = F.performance.timing.navigationStart,
        c = ya(re.get('gtm.start')) ? re.get('gtm.start') : 0
      L._li = { cst: a(c - b), cbt: a(ge - b) }
    }
  }
  var qh = {},
    rh = function () {
      return F.GoogleAnalyticsObject && F[F.GoogleAnalyticsObject]
    },
    sh = !1
  var th = function (a) {
      F.GoogleAnalyticsObject || (F.GoogleAnalyticsObject = a || 'ga')
      var b = F.GoogleAnalyticsObject
      if (F[b]) F.hasOwnProperty(b) || D(12)
      else {
        var c = function () {
          c.q = c.q || []
          c.q.push(arguments)
        }
        c.l = Number(new Date())
        F[b] = c
      }
      mh()
      return F[b]
    },
    uh = function (a, b, c, d) {
      b = String(b).replace(/\s+/g, '').split(',')
      var e = rh()
      e(a + 'require', 'linker')
      e(a + 'linker:autoLink', b, c, d)
    },
    vh = function (a) {}
  var xh = function (a) {},
    wh = function () {
      return F.GoogleAnalyticsObject || 'ga'
    },
    yh = function (a, b) {
      return function () {
        var c = rh(),
          d = c && c.getByName && c.getByName(a)
        if (d) {
          var e = d.get('sendHitTask')
          d.set('sendHitTask', function (f) {
            var h = f.get('hitPayload'),
              k = f.get('hitCallback'),
              l = 0 > h.indexOf('&tid=' + b)
            l &&
              (f.set(
                'hitPayload',
                h.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b),
                !0
              ),
              f.set('hitCallback', void 0, !0))
            e(f)
            l &&
              (f.set('hitPayload', h, !0),
              f.set('hitCallback', k, !0),
              f.set('_x_19', void 0, !0),
              e(f))
          })
        }
      }
    }
  var Dh = function () {
      return (
        '&tc=' +
        Eb.filter(function (a) {
          return a
        }).length
      )
    },
    Gh = function () {
      2022 <= Eh().length && Fh()
    },
    Ih = function () {
      Hh || (Hh = F.setTimeout(Fh, 500))
    },
    Fh = function () {
      Hh && (F.clearTimeout(Hh), (Hh = void 0))
      void 0 === Jh ||
        (Kh[Jh] && !Lh && !Mh) ||
        (Nh[Jh] || Oh.rh() || 0 >= Ph--
          ? (D(1), (Nh[Jh] = !0))
          : (Oh.Nh(), $c(Eh()), (Kh[Jh] = !0), (Qh = Rh = Sh = Mh = Lh = '')))
    },
    Eh = function () {
      var a = Jh
      if (void 0 === a) return ''
      var b = wc('GTM'),
        c = wc('TAGGING')
      return [
        Th,
        Kh[a] ? '' : '&es=1',
        Uh[a],
        b ? '&u=' + b : '',
        c ? '&ut=' + c : '',
        Dh(),
        Lh,
        Mh,
        Sh ? Sh : '',
        Rh,
        Qh,
        '&z=0'
      ].join('')
    },
    Vh = function () {
      return [he, '&v=3&t=t', '&pid=' + Ca(), '&rv=' + Yd.fc].join('')
    },
    Wh = '0.005000' > Math.random(),
    Th = Vh(),
    Xh = function () {
      Th = Vh()
    },
    Kh = {},
    Lh = '',
    Mh = '',
    Qh = '',
    Rh = '',
    Sh = '',
    Jh = void 0,
    Uh = {},
    Nh = {},
    Hh = void 0,
    Oh = (function (a, b) {
      var c = 0,
        d = 0
      return {
        rh: function () {
          if (c < a) return !1
          La() - d >= b && (c = 0)
          return c >= a
        },
        Nh: function () {
          La() - d >= b && (c = 0)
          c++
          d = La()
        }
      }
    })(2, 1e3),
    Ph = 1e3,
    Yh = function (a, b, c) {
      if (Wh && !Nh[a] && b) {
        a !== Jh && (Fh(), (Jh = a))
        var d,
          e = String(b[Rb.Ha] || '').replace(/_/g, '')
        0 === e.indexOf('cvt') && (e = 'cvt')
        d = e
        var f = c + d
        Lh = Lh ? Lh + '.' + f : '&tr=' + f
        var h = b['function']
        if (!h) throw Error('Error: No function name given for function call.')
        var k = (Gb[h] ? '1' : '2') + d
        Qh = Qh ? Qh + '.' + k : '&ti=' + k
        Ih()
        Gh()
      }
    },
    Zh = function (a, b, c) {
      if (Wh && !Nh[a]) {
        a !== Jh && (Fh(), (Jh = a))
        var d = c + b
        Mh = Mh ? Mh + '.' + d : '&epr=' + d
        Ih()
        Gh()
      }
    },
    $h = function (a, b, c) {}
  function ai(a, b, c, d) {
    var e = Eb[a],
      f = bi(a, b, c, d)
    if (!f) return null
    var h = Nb(e[Rb.Me], c, [])
    if (h && h.length) {
      var k = h[0]
      f = ai(
        k.index,
        { H: f, F: 1 === k.Xe ? b.terminate : f, terminate: b.terminate },
        c,
        d
      )
    }
    return f
  }
  function bi(a, b, c, d) {
    function e() {
      if (f[Rb.ig]) k()
      else {
        var x = Ob(f, c, [])
        var A = gh(c.id, String(f[Rb.Ha]), Number(f[Rb.Ne]), x[Rb.jg]),
          z = !1
        x.vtp_gtmOnSuccess = function () {
          if (!z) {
            z = !0
            var G = La() - E
            Yh(c.id, Eb[a], '5')
            hh(c.id, A, 'success', G)
            h()
          }
        }
        x.vtp_gtmOnFailure = function () {
          if (!z) {
            z = !0
            var G = La() - E
            Yh(c.id, Eb[a], '6')
            hh(c.id, A, 'failure', G)
            k()
          }
        }
        x.vtp_gtmTagId = f.tag_id
        x.vtp_gtmEventId = c.id
        Yh(c.id, f, '1')
        var B = function () {
          var G = La() - E
          Yh(c.id, f, '7')
          hh(c.id, A, 'exception', G)
          z || ((z = !0), k())
        }
        var E = La()
        try {
          Mb(x, c)
        } catch (G) {
          B(G)
        }
      }
    }
    var f = Eb[a],
      h = b.H,
      k = b.F,
      l = b.terminate
    if (c.pd(f)) return null
    var n = Nb(f[Rb.Oe], c, [])
    if (n && n.length) {
      var p = n[0],
        r = ai(p.index, { H: h, F: k, terminate: l }, c, d)
      if (!r) return null
      h = r
      k = 2 === p.Xe ? l : r
    }
    if (f[Rb.Ie] || f[Rb.mg]) {
      var t = f[Rb.Ie] ? Fb : c.Wh,
        q = h,
        u = k
      if (!t[a]) {
        e = Na(e)
        var v = ci(a, t, e)
        h = v.H
        k = v.F
      }
      return function () {
        t[a](q, u)
      }
    }
    return e
  }
  function ci(a, b, c) {
    var d = [],
      e = []
    b[a] = di(d, e, c)
    return {
      H: function () {
        b[a] = ei
        for (var f = 0; f < d.length; f++) d[f]()
      },
      F: function () {
        b[a] = fi
        for (var f = 0; f < e.length; f++) e[f]()
      }
    }
  }
  function di(a, b, c) {
    return function (d, e) {
      a.push(d)
      b.push(e)
      c()
    }
  }
  function ei(a) {
    a()
  }
  function fi(a, b) {
    b()
  }
  var ii = function (a, b, c) {
    for (var d = [], e = 0; e < Eb.length; e++)
      if (a[e]) {
        var f = Eb[e]
        var h = c.add()
        try {
          var k = ai(e, { H: h, F: h, terminate: h }, b, e)
          k ? d.push({ sf: e, kf: Pb(f), Yg: k }) : (gi(e, b), h())
        } catch (n) {
          h()
        }
      }
    c.Bg()
    d.sort(hi)
    for (var l = 0; l < d.length; l++) d[l].Yg()
    return 0 < d.length
  }
  function hi(a, b) {
    var c,
      d = b.kf,
      e = a.kf
    c = d > e ? 1 : d < e ? -1 : 0
    var f
    if (0 !== c) f = c
    else {
      var h = a.sf,
        k = b.sf
      f = h > k ? 1 : h < k ? -1 : 0
    }
    return f
  }
  function gi(a, b) {
    if (!Wh) return
    var c = function (d) {
      var e = b.pd(Eb[d]) ? '3' : '4',
        f = Nb(Eb[d][Rb.Me], b, [])
      f && f.length && c(f[0].index)
      Yh(b.id, Eb[d], e)
      var h = Nb(Eb[d][Rb.Oe], b, [])
      h && h.length && c(h[0].index)
    }
    c(a)
  }
  var ji = !1,
    oi = function (a) {
      var b = a['gtm.uniqueEventId'],
        c = a.event
      if ('gtm.js' === c) {
        if (ji) return !1
        ji = !0
      }
      var d = Vg(b),
        e = !1
      if (!d.active) {
        var f = !0
        if ('gtm.js' === c) {
          ;(f = !1), (e = !0), (d = Vg(Number.MAX_SAFE_INTEGER))
        }
        if (f) return !1
      }
      Wh &&
        !Nh[b] &&
        Jh !== b &&
        (Fh(),
        (Jh = b),
        (Qh = Lh = ''),
        (Uh[b] =
          '&e=' +
          (0 === c.indexOf('gtm.') ? encodeURIComponent(c) : '*') +
          '&eid=' +
          b),
        Ih())
      var h = {
          id: b,
          name: c,
          pd: Tg(d.isAllowed),
          Wh: [],
          df: function () {
            D(6)
          },
          Se: ki(b)
        },
        k = lh(b, a.eventCallback, a.eventTimeout)
      li(b)
      var l = Vb(h)
      e && (l = mi(l))
      var n = ii(l, h, k)
      ;('gtm.js' !== c && 'gtm.sync' !== c) || xh(Yd.B)
      switch (c) {
        case 'gtm.init':
          D(19), n && D(20)
      }
      return ni(l, n)
    }
  function ki(a) {
    return function (b) {
      Wh && (cb(b) || $h(a, 'input', b))
    }
  }
  function li(a) {
    ue(a, 'event', 1)
    ue(a, 'ecommerce', 1)
    ue(a, 'gtm')
    ue(a, 'eventModel')
  }
  function mi(a) {
    var b = []
    for (var c = 0; c < a.length; c++)
      a[c] && $d[String(Eb[c][Rb.Ha])] && (b[c] = !0)
    return b
  }
  function ni(a, b) {
    if (!b) return b
    for (var c = 0; c < a.length; c++)
      if (a[c] && Eb[c] && !ae[String(Eb[c][Rb.Ha])]) return !0
    return !1
  }
  function pi(a, b) {
    if (a) {
      var c = '' + a
      0 !== c.indexOf('http://') &&
        0 !== c.indexOf('https://') &&
        (c = 'https://' + c)
      '/' === c[c.length - 1] && (c = c.substring(0, c.length - 1))
      return He('' + c + b).href
    }
  }
  function qi(a, b) {
    return ri() ? pi(a, b) : void 0
  }
  function ri() {
    var a = !1
    return a
  }
  var si = function () {
      this.eventModel = {}
      this.targetConfig = {}
      this.containerConfig = {}
      this.h = {}
      this.globalConfig = {}
      this.H = function () {}
      this.F = function () {}
      this.eventId = void 0
    },
    ti = function (a) {
      var b = new si()
      b.eventModel = a
      return b
    },
    ui = function (a, b) {
      a.targetConfig = b
      return a
    },
    vi = function (a, b) {
      a.containerConfig = b
      return a
    },
    wi = function (a, b) {
      a.h = b
      return a
    },
    xi = function (a, b) {
      a.globalConfig = b
      return a
    },
    yi = function (a, b) {
      a.H = b
      return a
    },
    zi = function (a, b) {
      a.F = b
      return a
    }
  si.prototype.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a]
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a]
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a]
    if (void 0 !== this.h[a]) return this.h[a]
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a]
  }
  var Ai = function (a) {
    function b(e) {
      Fa(e, function (f) {
        c[f] = null
      })
    }
    var c = {}
    b(a.eventModel)
    b(a.targetConfig)
    b(a.containerConfig)
    b(a.globalConfig)
    var d = []
    Fa(c, function (e) {
      d.push(e)
    })
    return d
  }
  var Bi
  if (3 === Yd.fc.length) Bi = 'g'
  else {
    var Ci = 'G'
    Ci = 'g'
    Bi = Ci
  }
  var Di = {
      '': 'n',
      UA: 'u',
      AW: 'a',
      DC: 'd',
      G: 'e',
      GF: 'f',
      HA: 'h',
      GTM: Bi,
      OPT: 'o'
    },
    Ei = function (a) {
      var b = Yd.B.split('-'),
        c = b[0].toUpperCase(),
        d = Di[c] || 'i',
        e = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
        f
      if (3 === Yd.fc.length) {
        var h = 'w'
        h = vg() ? 's' : 'o'
        f = '2' + h
      } else f = ''
      return f + d + Yd.fc + e
    }
  var Fi = function (a, b) {
    a.addEventListener && a.addEventListener('message', b, !1)
  }
  var Gi = function () {
    return Kc('iPhone') && !Kc('iPod') && !Kc('iPad')
  }
  Kc('Opera')
  Kc('Trident') || Kc('MSIE')
  Kc('Edge')
  !Kc('Gecko') ||
    (-1 != Hc.toLowerCase().indexOf('webkit') && !Kc('Edge')) ||
    Kc('Trident') ||
    Kc('MSIE') ||
    Kc('Edge')
  ;-1 != Hc.toLowerCase().indexOf('webkit') && !Kc('Edge') && Kc('Mobile')
  Kc('Macintosh')
  Kc('Windows')
  Kc('Linux') || Kc('CrOS')
  var Hi = ma.navigator || null
  Hi && (Hi.appVersion || '').indexOf('X11')
  Kc('Android')
  Gi()
  Kc('iPad')
  Kc('iPod')
  Gi() || Kc('iPad') || Kc('iPod')
  Hc.toLowerCase().indexOf('kaios')
  var Ii = function (a, b) {
    for (var c = a, d = 0; 50 > d; ++d) {
      var e
      try {
        e = !(!c.frames || !c.frames[b])
      } catch (k) {
        e = !1
      }
      if (e) return c
      var f
      a: {
        try {
          var h = c.parent
          if (h && h != c) {
            f = h
            break a
          }
        } catch (k) {}
        f = null
      }
      if (!(c = f)) break
    }
    return null
  }
  var Ji = function () {}
  var Ki = function (a) {
      return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
        (void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies) ||
        (void 0 !== a.listenerId && 'number' !== typeof a.listenerId) ||
        (void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent)
        ? 2
        : a.cmpStatus && 'error' !== a.cmpStatus
        ? 0
        : 3
    },
    Li = function (a, b) {
      this.i = a
      this.h = null
      this.L = {}
      this.oa = 0
      this.fa = void 0 === b ? 500 : b
      this.o = null
    }
  la(Li, Ji)
  var Ni = function (a) {
    return 'function' === typeof a.i.__tcfapi || null != Mi(a)
  }
  Li.prototype.addEventListener = function (a) {
    var b = {},
      c = Bc(function () {
        return a(b)
      }),
      d = 0
    ;-1 !== this.fa &&
      (d = setTimeout(function () {
        b.tcString = 'tcunavailable'
        b.internalErrorState = 1
        c()
      }, this.fa))
    var e = function (f, h) {
      clearTimeout(d)
      f
        ? ((b = f),
          (b.internalErrorState = Ki(b)),
          (h && 0 === b.internalErrorState) ||
            ((b.tcString = 'tcunavailable'), h || (b.internalErrorState = 3)))
        : ((b.tcString = 'tcunavailable'), (b.internalErrorState = 3))
      a(b)
    }
    try {
      Oi(this, 'addEventListener', e)
    } catch (f) {
      ;(b.tcString = 'tcunavailable'),
        (b.internalErrorState = 3),
        d && (clearTimeout(d), (d = 0)),
        c()
    }
  }
  Li.prototype.removeEventListener = function (a) {
    a && a.listenerId && Oi(this, 'removeEventListener', null, a.listenerId)
  }
  var Qi = function (a, b, c) {
      var d
      d = void 0 === d ? '755' : d
      var e
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b]
          if (void 0 !== f) {
            e = f[void 0 === d ? '755' : d]
            break a
          }
        }
        e = void 0
      }
      var h = e
      if (0 === h) return !1
      var k = c
      2 === c
        ? ((k = 0), 2 === h && (k = 1))
        : 3 === c && ((k = 1), 1 === h && (k = 0))
      var l
      if (0 === k)
        if (a.purpose && a.vendor) {
          var n = Pi(a.vendor.consents, void 0 === d ? '755' : d)
          l =
            n && '1' === b && a.purposeOneTreatment && 'DE' === a.publisherCC
              ? !0
              : n && Pi(a.purpose.consents, b)
        } else l = jd('ticdac')
      else
        l =
          1 === k
            ? a.purpose && a.vendor
              ? Pi(a.purpose.legitimateInterests, b) &&
                Pi(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
              : jd('ticdac')
            : !0
      return l
    },
    Pi = function (a, b) {
      return !(!a || !a[b])
    },
    Oi = function (a, b, c, d) {
      c || (c = function () {})
      if ('function' === typeof a.i.__tcfapi) {
        var e = a.i.__tcfapi
        e(b, 2, c, d)
      } else if (Mi(a)) {
        Ri(a)
        var f = ++a.oa
        a.L[f] = c
        if (a.h) {
          var h = {}
          a.h.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d
            }),
            h),
            '*'
          )
        }
      } else c({}, !1)
    },
    Mi = function (a) {
      if (a.h) return a.h
      a.h = Ii(a.i, '__tcfapiLocator')
      return a.h
    },
    Ri = function (a) {
      a.o ||
        ((a.o = function (b) {
          try {
            var c, d
            'string' === typeof b.data ? (d = JSON.parse(b.data)) : (d = b.data)
            c = d.__tcfapiReturn
            a.L[c.callId](c.returnValue, c.success)
          } catch (e) {}
        }),
        Fi(a.i, a.o))
    }
  var Si = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 }
  function Ti(a, b) {
    if ('' === a) return b
    var c = Number(a)
    return isNaN(c) ? b : c
  }
  var Ui = Ti('', 550),
    Vi = Ti('', 500)
  function Wi() {
    var a = L.tcf || {}
    return (L.tcf = a)
  }
  var Xi = function (a, b) {
      this.o = a
      this.h = b
      this.i = La()
    },
    Yi = function (a) {},
    Zi = function (a) {},
    ej = function () {
      var a = Wi(),
        b = new Li(F, 3e3),
        c = new Xi(b, a)
      if (
        ($i()
          ? !0 === F.gtag_enable_tcf_support
          : !1 !== F.gtag_enable_tcf_support) &&
        !a.active &&
        ('function' === typeof F.__tcfapi || Ni(b))
      ) {
        a.active = !0
        a.Jb = {}
        aj()
        var d = setTimeout(function () {
          bj(a)
          cj(a)
          d = null
        }, Vi)
        try {
          b.addEventListener(function (e) {
            d && (clearTimeout(d), (d = null))
            if (0 !== e.internalErrorState) bj(a), cj(a), Yi(c)
            else {
              var f
              if (!1 === e.gdprApplies) (f = dj()), b.removeEventListener(e)
              else if (
                'tcloaded' === e.eventStatus ||
                'useractioncomplete' === e.eventStatus ||
                'cmpuishown' === e.eventStatus
              ) {
                var h = {},
                  k
                for (k in Si)
                  if (Si.hasOwnProperty(k))
                    if ('1' === k) {
                      var l = e,
                        n = !0
                      n = void 0 === n ? !1 : n
                      var p
                      var r = l
                      !1 === r.gdprApplies
                        ? (p = !0)
                        : (void 0 === r.internalErrorState &&
                            (r.internalErrorState = Ki(r)),
                          (p =
                            'error' === r.cmpStatus ||
                            0 !== r.internalErrorState ||
                            ('loaded' === r.cmpStatus &&
                              ('tcloaded' === r.eventStatus ||
                                'useractioncomplete' === r.eventStatus))
                              ? !0
                              : !1))
                      h['1'] = p
                        ? !1 === l.gdprApplies ||
                          'tcunavailable' === l.tcString ||
                          (jd('tugac') && void 0 === l.gdprApplies && !n) ||
                          (jd('tntac') &&
                            ('string' !== typeof l.tcString ||
                              !l.tcString.length))
                          ? !0
                          : Qi(l, '1', 0)
                        : !1
                    } else h[k] = Qi(e, k, Si[k])
                f = h
              }
              f &&
                ((a.tcString = e.tcString || 'tcempty'),
                (a.Jb = f),
                cj(a),
                Yi(c))
            }
          }),
            Zi(c)
        } catch (e) {
          d && (clearTimeout(d), (d = null)), bj(a), cj(a)
        }
      }
    }
  function bj(a) {
    a.type = 'e'
    a.tcString = 'tcunavailable'
    a.Jb = dj()
  }
  function aj() {
    var a = {}
    yd(((a.ad_storage = 'denied'), (a.wait_for_update = Ui), a))
  }
  var $i = function () {
    var a = !1
    a = !0
    return a
  }
  function dj() {
    var a = {},
      b
    for (b in Si) Si.hasOwnProperty(b) && (a[b] = !0)
    return a
  }
  function cj(a) {
    var b = {}
    zd(((b.ad_storage = a.Jb['1'] ? 'granted' : 'denied'), b))
  }
  var fj = function () {
      var a = Wi()
      if (a.active && void 0 !== a.loadTime) return Number(a.loadTime)
    },
    gj = function () {
      var a = Wi()
      return a.active ? a.tcString || '' : ''
    },
    hj = function (a) {
      if (!Si.hasOwnProperty(String(a))) return !0
      var b = Wi()
      return b.active && b.Jb ? !!b.Jb[String(a)] : !0
    }
  function ij(a, b, c) {
    function d(p) {
      var r
      L.reported_gclid || (L.reported_gclid = {})
      r = L.reported_gclid
      var t = f + (p ? 'gcu' : 'gcs')
      if (!r[t]) {
        r[t] = !0
        var q = [],
          u = function (A, z) {
            z && q.push(A + '=' + encodeURIComponent(z))
          },
          v = 'https://www.google.com'
        if (td()) {
          var x = Ad(C.s)
          u('gcs', Bd())
          p && u('gcu', '1')
          L.dedupe_gclid || (L.dedupe_gclid = '' + Ye())
          u('rnd', L.dedupe_gclid)
          if ((!f || (h && 'aw.ds' !== h)) && Ad(C.s)) {
            var y = Xf('_gcl_aw')
            u('gclaw', y.join('.'))
          }
          u('url', String(F.location).split(/[?#]/)[0])
          u('dclid', jj(b, k))
          !x && b && (v = 'https://pagead2.googlesyndication.com')
        }
        u('gdpr_consent', gj())
        '1' === Gf(!1)._up && u('gtm_up', '1')
        u('gclid', jj(b, f))
        u('gclsrc', h)
        u('gtm', Ei(!c))
        var w = v + '/pagead/landing?' + q.join('&')
        gd(w)
      }
    }
    var e = $f(),
      f = e.gclid || '',
      h = e.gclsrc,
      k = e.dclid || '',
      l = !a && (!f || (h && 'aw.ds' !== h) ? !1 : !0),
      n = td()
    if (l || n)
      n
        ? Cd(
            function () {
              d()
              Ad(C.s) ||
                wd(function (p) {
                  return d(!0, p.Te)
                }, C.s)
            },
            [C.s]
          )
        : d()
  }
  function jj(a, b) {
    var c = a && !Ad(C.s)
    return b && c ? '0' : b
  }
  var kj = function (a) {
    if (H.hidden) return !0
    var b = a.getBoundingClientRect()
    if (b.top == b.bottom || b.left == b.right || !F.getComputedStyle) return !0
    var c = F.getComputedStyle(a, null)
    if ('hidden' === c.visibility) return !0
    for (var d = a, e = c; d; ) {
      if ('none' === e.display) return !0
      var f = e.opacity,
        h = e.filter
      if (h) {
        var k = h.indexOf('opacity(')
        0 <= k &&
          ((h = h.substring(k + 8, h.indexOf(')', k))),
          '%' == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
          (f = Math.min(h, f)))
      }
      if (void 0 !== f && 0 >= f) return !0
      ;(d = d.parentElement) && (e = F.getComputedStyle(d, null))
    }
    return !1
  }
  var lj = function () {
      var a = H.body,
        b = H.documentElement || (a && a.parentElement),
        c,
        d
      if (H.compatMode && 'BackCompat' !== H.compatMode)
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0)
      else {
        var e = function (f, h) {
          return f && h ? Math.min(f, h) : Math.max(f, h)
        }
        D(7)
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0)
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
      }
      return { width: d, height: c }
    },
    mj = function (a) {
      var b = lj(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        h = e.right - e.left
      return f && h
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / h,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0
    }
  var tj = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
    uj = ['SCRIPT', 'IMG', 'SVG', 'PATH', 'BR'],
    vj = ['BR']
  function wj(a) {
    var b
    if (a === H.body) b = 'body'
    else {
      var c
      if (a.id) c = '#' + a.id
      else {
        var d
        if (a.parentElement) {
          var e
          a: {
            var f = a.parentElement
            if (f) {
              for (var h = 0; h < f.childElementCount; h++)
                if (f.children[h] === a) {
                  e = h + 1
                  break a
                }
              e = -1
            } else e = 1
          }
          d = wj(a.parentElement) + '>:nth-child(' + e + ')'
        } else d = ''
        c = d
      }
      b = c
    }
    return b
  }
  function xj() {
    var a
    var b = [],
      c = H.body
    if (c) {
      for (
        var d = c.querySelectorAll('*'), e = 0;
        e < d.length && 1e4 > e;
        e++
      ) {
        var f = d[e]
        if (!(0 <= uj.indexOf(f.tagName.toUpperCase()))) {
          for (var h = !1, k = 0; k < f.childElementCount && 1e4 > k; k++)
            if (!(0 <= vj.indexOf(f.children[k].tagName.toUpperCase()))) {
              h = !0
              break
            }
          h || b.push(f)
        }
      }
      a = { elements: b, status: 1e4 < d.length ? '2' : '1' }
    } else a = { elements: b, status: '4' }
    for (var l = a, n = l.elements, p = [], r = 0; r < n.length; r++) {
      var t = n[r],
        q = t.textContent
      t.value && (q = t.value)
      if (q) {
        var u = q.match(tj)
        if (u) {
          var v = u[0],
            x
          if (F.location) {
            var y = Ee(F.location, 'host', !0)
            x = 0 <= v.toLowerCase().indexOf(y)
          } else x = !1
          x || p.push({ element: t, Fi: v })
        }
      }
    }
    for (
      var w = [], A = 10 < p.length ? '3' : l.status, z = 0;
      z < p.length && 10 > z;
      z++
    ) {
      var B = p[z].element
      w.push({
        querySelector: wj(B),
        tagName: B.tagName,
        isVisible: !kj(B),
        type: 1
      })
    }
    return { elements: w, status: A }
  }
  var yj = function (a) {
      var b = qi(a, '/pagead/conversion_async.js')
      if (b) return b
      var c = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox'),
        d = xg('https://', 'http://', 'www.googleadservices.com')
      if (c || 1 === Mg()) d = 'https://www.google.com'
      return d + '/pagead/conversion_async.js'
    },
    zj = !1,
    Aj = [],
    Bj = ['aw', 'dc'],
    Cj = function (a) {
      var b = F.google_trackConversion,
        c = a.gtm_onFailure
      'function' == typeof b ? b(a) || c() : c()
    },
    Dj = function () {
      for (; 0 < Aj.length; ) Cj(Aj.shift())
    },
    Ej = function (a) {
      if (!zj) {
        zj = !0
        mh()
        var b = function () {
          Dj()
          Aj = { push: Cj }
        }
        vg()
          ? b()
          : Xc(a, b, function () {
              Dj()
              zj = !1
            })
      }
    },
    Fj = function (a) {
      if (a) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c]
          d &&
            b.push({
              item_id: d.id,
              quantity: d.quantity,
              value: d.price,
              start_date: d.start_date,
              end_date: d.end_date
            })
        }
        return b
      }
    },
    Gj = function (a, b, c, d) {
      function e() {
        T('gdpr_consent', gj())
      }
      function f() {}
      function h(R) {
        var ia = !0
        R && f()
        ia && Aj.push(J)
      }
      function k() {
        return function (R) {
          u && (R = Lg(R))
          return R
        }
      }
      var l = sg(a),
        n = b == C.ia,
        p = l.C[0],
        r = l.C[1],
        t = void 0 !== r,
        q = function (R) {
          return d.getWithConfig(R)
        },
        u = void 0 != q(C.M) && !1 !== q(C.M),
        v = !1 !== q(C.mb),
        x = q(C.lb) || q(C.da),
        y = q(C.V),
        w = q(C.ca),
        A = q(C.ja),
        z = q(C.Ga),
        B = yj(z)
      Ej(B)
      var E = { prefix: x, domain: y, Hb: w, flags: A }
      if (n) {
        var G = q(C.ka) || {}
        v && (Of(G[C.ob], !!G[C.D]) && eg(Bj, E), bg(E), gg(['aw', 'dc'], E))
        q(C.Sa) && ig()
        G[C.D] && fg(Bj, G[C.D], G[C.qb], !!G[C.pb], x)
        Ig(l, d)
        ij(!1, u, a)
      }
      if (b === C.Da) {
        var M = q(C.xa),
          O = q(C.wa),
          W = q(M)
        if (M === C.Tb && void 0 === W) {
          var Z = ng('aw', E.prefix, u)
          0 === Z.length ? O(void 0) : 1 === Z.length ? O(Z[0]) : O(Z)
        } else O(W)
        return
      }
      var ca = !1 === q(C.Zd) || !1 === q(C.sb)
      if (!n || (!t && !ca))
        if ((!0 === q(C.$d) && (t = !1), !1 !== q(C.ba) || t)) {
          var J = {
            google_conversion_id: p,
            google_remarketing_only: !t,
            onload_callback: d.H,
            gtm_onFailure: d.F,
            google_conversion_format: '3',
            google_conversion_color: 'ffffff',
            google_conversion_domain: '',
            google_conversion_label: r,
            google_conversion_language: q(C.Ra),
            google_conversion_value: q(C.ya),
            google_conversion_currency: q(C.va),
            google_conversion_order_id: q(C.ub),
            google_user_id: q(C.vb),
            google_conversion_page_url: q(C.rb),
            google_conversion_referrer_url: q(C.Ea),
            google_gtm: Ei()
          }
          t && (J.google_transport_url = pi(z, '/'))
          J.google_restricted_data_processing = q(C.Tc)
          vg() &&
            ((J.opt_image_generator = function () {
              return new Image()
            }),
            (J.google_enable_display_cookie_match = !1))
          !1 === q(C.ba) && (J.google_allow_ad_personalization_signals = !1)
          J.google_read_gcl_cookie_opt_out = !v
          v && x && (J.google_gcl_cookie_prefix = x)
          var K = (function () {
            var R = { event: b },
              ia = d.eventModel
            if (!ia) return null
            m(ia, R)
            for (var U = 0; U < C.Nd.length; ++U) delete R[C.Nd[U]]
            return R
          })()
          K && (J.google_custom_params = K)
          !t && q(C.S) && (J.google_gtag_event_data = { items: q(C.S) })
          if (t && b == C.sa) {
            J.google_conversion_merchant_id = q(C.de)
            J.google_basket_feed_country = q(C.be)
            J.google_basket_feed_language = q(C.ce)
            J.google_basket_discount = q(C.ae)
            J.google_basket_transaction_type = b
            J.google_disable_merchant_reported_conversions = !0 === q(C.ie)
            vg() && (J.google_disable_merchant_reported_conversions = !0)
            var P = Fj(q(C.S))
            P && (J.google_conversion_items = P)
          }
          var S = function (R, ia) {
              void 0 != ia &&
                '' !== ia &&
                ((J.google_additional_conversion_params =
                  J.google_additional_conversion_params || {}),
                (J.google_additional_conversion_params[R] = ia))
            },
            T = function (R, ia) {
              void 0 != ia &&
                '' !== ia &&
                ((J.google_additional_params =
                  J.google_additional_params || {}),
                (J.google_additional_params[R] = ia))
            }
          '1' === Gf(!1)._up && S('gtm_up', '1')
          t && (S('vdnc', q(C.qe)), S('vdltv', q(C.fe)))
          e()
          var na = Mg()
          0 === na ? T('dg', 'c') : 1 === na && T('dg', 'e')
          J.google_gtm_url_processor = k()
          ;(function () {
            td()
              ? Cd(
                  function () {
                    e()
                    var R = Ad(C.s)
                    if (t)
                      S('gcs', Bd()),
                        R ||
                          z ||
                          !u ||
                          (J.google_transport_url =
                            'https://pagead2.googlesyndication.com/'),
                        h(R)
                    else if (R) {
                      h(R)
                      return
                    }
                    R ||
                      wd(function (ia) {
                        var U = ia.Te
                        J = m(J)
                        J.google_gtm_url_processor = k(U)
                        !z &&
                          J.google_transport_url &&
                          delete J.google_transport_url
                        e()
                        t && (S('gcs', Bd()), S('gcu', '1'))
                        h(!0)
                      }, C.s)
                  },
                  [C.s]
                )
              : h(!0)
          })()
        }
    }

  var Hj = function (a) {
      return !(void 0 === a || null === a || 0 === (a + '').length)
    },
    Ij = function (a, b) {
      var c
      if (2 === b.Y) return a('ord', Ca(1e11, 1e13)), !0
      if (3 === b.Y) return a('ord', '1'), a('num', Ca(1e11, 1e13)), !0
      if (4 === b.Y) return Hj(b.sessionId) && a('ord', b.sessionId), !0
      if (5 === b.Y) c = '1'
      else if (6 === b.Y) c = b.Dd
      else return !1
      Hj(c) && a('qty', c)
      Hj(b.jc) && a('cost', b.jc)
      Hj(b.transactionId) && a('ord', b.transactionId)
      return !0
    },
    Kj = function (a, b, c) {
      function d(w, A, z) {
        p.hasOwnProperty(w) ||
          ((A = String(A)), n.push(';' + w + '=' + (z ? A : Jj(A))))
      }
      var e = a.hd,
        f = a.Gd,
        h = a.protocol
      h += f
        ? '//' + e + '.fls.doubleclick.net/activityi'
        : '//ad.doubleclick.net/activity'
      var k = ';',
        l = !Ad(C.s) && a.Kb
      l &&
        ((h = 'https://ade.googlesyndication.com/ddm/activity'),
        (k = '/'),
        (f = !1))
      var n = [k, 'src=' + Jj(e), ';type=' + Jj(a.ld), ';cat=' + Jj(a.zb)],
        p = a.Tg || {}
      Fa(p, function (w, A) {
        n.push(';' + Jj(w) + '=' + Jj(A + ''))
      })
      if (Ij(d, a)) {
        Hj(a.Dc) && d('u', a.Dc)
        Hj(a.Cc) && d('tran', a.Cc)
        d('gtm', Ei())
        td() && (d('gcs', Bd()), c && d('gcu', '1'))
        ;(function (w, A) {
          A && d(w, A)
        })('gdpr_consent', gj())
        '1' === Gf(!1)._up && d('gtm_up', '1')
        !1 === a.yg && d('npa', '1')
        if (a.gd) {
          var r = void 0 === a.Kb ? !0 : !!a.Kb,
            t = ng('dc', a.Ua, r)
          t && t.length && d('gcldc', t.join('.'))
          var q = ng('aw', a.Ua, r)
          q && q.length && d('gclaw', q.join('.'))
          var u = og(r)
          u && d('gac', u)
          jf({ prefix: a.Ua, Hb: a.Qg, domain: a.Pg, flags: a.ni })
          var v = ef[ff(a.Ua)]
          v && d('auiddc', v)
        }
        Hj(a.yd) && d('prd', a.yd, !0)
        Fa(a.Kd, function (w, A) {
          d(w, A)
        })
        n.push(b || '')
        if (Hj(a.uc)) {
          var x = a.uc || ''
          l && (x = Ie(x))
          d('~oref', x)
        }
        var y = h + n.join('') + '?'
        f ? Zc(y, a.H) : $c(y, a.H, a.F)
      } else I(a.F)
    },
    Jj = encodeURIComponent,
    Lj = function (a, b) {
      td()
        ? Cd(
            function () {
              Kj(a, b)
              Ad(C.s) ||
                wd(function () {
                  Kj(a, b, !0)
                }, C.s)
            },
            [C.s]
          )
        : Kj(a, b)
    }
  var Mj = function (a, b, c, d) {
      function e() {
        var f = { config: a, gtm: Ei() }
        c && (jf(d), (f.auiddc = ef[ff(d.prefix)]))
        b && (f.loadInsecure = b)
        void 0 === F.__dc_ns_processor && (F.__dc_ns_processor = [])
        F.__dc_ns_processor.push(f)
        Xc((b ? 'http' : 'https') + '://www.googletagmanager.com/dclk/ns/v1.js')
      }
      Ad(C.s) ? e() : wd(e, C.s)
    },
    Nj = function (a) {
      var b = /^u([1-9]\d?|100)$/,
        c = a.getWithConfig(C.he) || {},
        d = Ai(a),
        e = {},
        f = {}
      if (bb(c))
        for (var h in c)
          if (c.hasOwnProperty(h) && b.test(h)) {
            var k = c[h]
            g(k) && (e[h] = k)
          }
      for (var l = 0; l < d.length; l++) {
        var n = d[l]
        b.test(n) && (e[n] = n)
      }
      for (var p in e) e.hasOwnProperty(p) && (f[p] = a.getWithConfig(e[p]))
      return f
    },
    Oj = function (a) {
      function b(l, n, p) {
        void 0 !== p && 0 !== (p + '').length && d.push(l + n + ':' + c(p + ''))
      }
      var c = encodeURIComponent,
        d = [],
        e = a(C.S) || []
      if (za(e))
        for (var f = 0; f < e.length; f++) {
          var h = e[f],
            k = f + 1
          b('i', k, h.id)
          b('p', k, h.price)
          b('q', k, h.quantity)
          b('c', k, a(C.ee))
          b('l', k, a(C.Ra))
        }
      return d.join('|')
    },
    Pj = function (a) {
      var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a)
      if (b) {
        var c = {
          standard: 2,
          unique: 3,
          per_session: 4,
          transactions: 5,
          items_sold: 6,
          '': 1
        }[(b[5] || '').toLowerCase()]
        if (c)
          return {
            containerId: 'DC-' + b[1],
            aa: b[3] ? a : '',
            rg: b[1],
            qg: b[3] || '',
            zb: b[4] || '',
            Y: c
          }
      }
    },
    Rj = function (a, b, c, d) {
      var e = Pj(a)
      if (e) {
        var f = function (K) {
            return d.getWithConfig(K)
          },
          h = !1 !== f(C.mb),
          k = f(C.lb) || f(C.da),
          l = f(C.V),
          n = f(C.ca),
          p = f(C.ja),
          r = f(C.Nf),
          t = void 0 != f(C.M) && !1 !== f(C.M),
          q = 3 === wg()
        if (b === C.Da) {
          var u = f(C.xa),
            v = f(C.wa),
            x = f(u)
          if (u === C.Tb && void 0 === x) {
            var y = ng('dc', k, t)
            0 === y.length ? v(void 0) : 1 === y.length ? v(y[0]) : v(y)
          } else v(x)
          return
        }
        if (b === C.ia) {
          var w = { prefix: k, domain: l, Hb: n, flags: p },
            A = f(C.ka) || {},
            z = f(C.Vb),
            B = void 0 === z ? !0 : !!z
          h && (Of(A[C.ob], !!A[C.D]) && eg(Qj, w), bg(w), gg(Qj, w), pg(B, w))
          A[C.D] && fg(Qj, A[C.D], A[C.qb], !!A[C.pb], k)
          f(C.Sa) && ig()
          if (r && r.exclusion_parameters && r.engines)
            if (vg()) {
            } else Mj(r, q, h, w)
          ij(!0, t, a)
          I(d.H)
        } else {
          var E = {},
            G = f(C.Mf)
          if (bb(G))
            for (var M in G)
              if (G.hasOwnProperty(M)) {
                var O = G[M]
                void 0 !== O && null !== O && (E[M] = O)
              }
          var W = ''
          if (5 === e.Y || 6 === e.Y) W = Oj(f)
          var Z = Nj(d),
            ca = !0 === f(C.Jf)
          if (vg() && ca) {
            ca = !1
          }
          var J = {
            zb: e.zb,
            gd: h,
            Pg: l,
            Qg: n,
            Ua: k,
            jc: f(C.ya),
            Y: e.Y,
            Tg: E,
            hd: e.rg,
            ld: e.qg,
            F: d.F,
            H: d.H,
            uc: Ge(He(F.location.href)),
            yd: W,
            protocol: q ? 'http:' : 'https:',
            Dd: f(C.Zf),
            Gd: ca,
            sessionId: f(C.Yb),
            Cc: void 0,
            transactionId: f(C.ub),
            Dc: void 0,
            Kd: Z,
            yg: !1 !== f(C.ba),
            eventId: d.eventId,
            Kb: t
          }
          Lj(J)
        }
      } else I(d.F)
    },
    Qj = ['aw', 'dc']

  var Tj = function (a) {
      function b() {
        var d = c,
          e = Sj(JSON.stringify(a[d])),
          f =
            'https://www.google.com/travel/flights/click/conversion/' +
            Sj(a.conversion_id) +
            '/?' +
            d +
            '=' +
            e
        if (a.conversionLinkerEnabled) {
          var h = ng('gf', a.cookiePrefix, void 0)
          if (h && h.length)
            for (var k = 0; k < h.length; k++) f += '&gclgf=' + Sj(h[k])
        }
        $c(f, a.onSuccess, a.onFailure)
      }
      var c
      if (a.hasOwnProperty('conversion_data')) c = 'conversion_data'
      else if (a.hasOwnProperty('price')) c = 'price'
      else return
      Ad(C.s) ? b() : wd(b, C.s)
    },
    Sj = function (a) {
      return null === a || void 0 === a || 0 === String(a).length
        ? ''
        : encodeURIComponent(String(a))
    }
  var Uj = /.*\.google\.com(:\d+)?\/(?:booking|travel)\/flights.*/,
    Wj = function (a, b, c, d) {
      var e = function (E) {
          return d.getWithConfig(E)
        },
        f = sg(a).C[0],
        h = !1 !== e(C.mb),
        k = e(C.lb) || e(C.da),
        l = e(C.V),
        n = e(C.ca),
        p = e(C.ja)
      if (b === C.Da) {
        var r = e(C.xa),
          t = e(C.wa),
          q = e(r)
        if (r === C.Tb && void 0 === q) {
          var u = void 0 != e(C.M) && !1 !== e(C.M),
            v = ng('gf', k, u)
          0 === v.length ? t(void 0) : 1 === v.length ? t(v[0]) : t(v)
        } else t(q)
        return
      }
      if (b === C.ia) {
        if (h) {
          var x = { prefix: k, domain: l, flags: p, Hb: n }
          bg(x)
          gg(['aw', 'dc'], x)
        }
        I(d.H)
      } else {
        var y = {
            conversion_id: f,
            onFailure: d.F,
            onSuccess: d.H,
            conversionLinkerEnabled: h,
            cookiePrefix: k
          },
          w = Uj.test(F.location.href)
        if (b === C.Ca) {
          var A = {
            partner_id: f,
            is_direct_booking: w,
            total_price: e(C.ya),
            currency: e(C.va)
          }
          y.price = A
          Tj(y)
          return
        }
        if (b !== C.sa) I(d.F)
        else {
          var z = {
              partner_id: f,
              trip_type: e(C.dg),
              total_price: e(C.ya),
              currency: e(C.va),
              is_direct_booking: w,
              flight_segment: Vj(e(C.S))
            },
            B = e(C.Wf)
          B &&
            'object' === typeof B &&
            ((z.passengers_total = Ga(B.total)),
            (z.passengers_adult = Ga(B.adult)),
            (z.passengers_child = Ga(B.child)),
            (z.passengers_infant_in_seat = Ga(B.infant_in_seat)),
            (z.passengers_infant_in_lap = Ga(B.infant_in_lap)))
          y.conversion_data = z
          Tj(y)
        }
      }
    },
    Vj = function (a) {
      if (a) {
        for (var b = [], c = 0, d = 0; d < a.length; ++d) {
          var e = a[d]
          !e ||
            (void 0 !== e.category &&
              '' !== e.category &&
              'FlightSegment' !== e.category) ||
            ((b[c] = {
              cabin: e.travel_class,
              fare_product: e.fare_product,
              booking_code: e.booking_code,
              flight_number: e.flight_number,
              origin: e.origin,
              destination: e.destination,
              departure_date: e.start_date
            }),
            c++)
        }
        return b
      }
    }
  var bk = function (a, b, c, d) {
      function e() {
        gj() && (z += '&gdpr_consent=' + encodeURIComponent(gj()))
        if (k) {
          var G = b === C.Ca ? ng('aw', l, void 0) : ng('ha', l, void 0)
          z += G.map(function (M) {
            return '&gclha=' + encodeURIComponent(M)
          }).join('')
        }
        $c(z, d.H, d.F)
      }
      var f = sg(a),
        h = function (G) {
          return d.getWithConfig(G)
        },
        k = !1 !== h(C.mb),
        l = h(C.lb) || h(C.da),
        n = h(C.V),
        p = h(C.ca),
        r = h(C.ja)
      if (b === C.Da) {
        var t = h(C.xa),
          q = h(C.wa),
          u = h(t)
        if (t === C.Tb && void 0 === u) {
          var v = void 0 != h(C.M) && !1 !== h(C.M),
            x = ng('ha', l, v)
          0 === x.length ? q(void 0) : 1 === x.length ? q(x[0]) : q(x)
        } else q(u)
        return
      }
      if (b === C.ia) {
        var y = h(C.ka) || {}
        if (k) {
          var w = { prefix: l, domain: n, flags: r, Hb: p }
          Of(y[C.ob], !!y[C.D]) && eg(Xj, w)
          bg(w)
          gg(['aw', 'dc'], w)
        }
        y[C.D] && fg(Xj, y[C.D], y[C.qb], !!y[C.pb], l)
        I(d.H)
      } else {
        var A = f.C[0]
        if (/^\d+$/.test(A)) {
          var z =
            'https://www.googletraveladservices.com/travel/clk/pagead/conversion/' +
            encodeURIComponent(A) +
            '/'
          if (b === C.sa) {
            var B = Yj(h(C.ub), h(C.ya), h(C.va), h(C.S))
            B = encodeURIComponent(Zj(B))
            z += '?data=' + B
          } else if (b === C.Ca) {
            var E = ak(A, h(C.ya), h(C.ne), h(C.va), h(C.S))
            E = encodeURIComponent(Zj(E))
            z +=
              '?label=FH&guid=ON&script=0&ord=' +
              Ca(0, 4294967295) +
              ('&price=' + E)
          } else {
            I(d.F)
            return
          }
          Ad(C.s) ? e() : wd(e, C.s)
        } else I(d.F)
      }
    },
    Yj = function (a, b, c, d) {
      var e = {}
      ck(a) && (e.hct_booking_xref = a)
      g(c) && (e.hct_currency_code = c)
      ck(b) && ((e.hct_total_price = b), (e.hct_base_price = b))
      if (!za(d) || 0 === d.length) return e
      var f = d[0]
      if (!bb(f)) return e
      ck(f[dk.Zc]) && (e.hct_partner_hotel_id = f[dk.Zc])
      g(f[dk.ad]) && (e.hct_checkin_date = f[dk.ad])
      g(f[dk.Fc]) && (e.hct_checkout_date = f[dk.Fc])
      return e
    },
    ak = function (a, b, c, d, e) {
      function f(p) {
        void 0 === p && (p = 0)
        if (ck(p)) return l + p
      }
      function h(p, r, t) {
        t(r) && (k[p] = r)
      }
      var k = {}
      k.partner_id = a
      var l = 'USD'
      g(d) && (l = k.currency = d)
      ck(b) &&
        ((k.base_price_value_string = f(b)),
        (k.display_price_value_string = f(b)))
      ck(c) && (k.tax_price_value_string = f(c))
      g('LANDING_PAGE') && (k.page_type = 'LANDING_PAGE')
      if (!za(e) || 0 == e.length) return k
      var n = e[0]
      if (!bb(n)) return k
      ck(n[dk.Je]) && (k.total_price_value_string = f(n[dk.Je]))
      h('partner_hotel_id', n[dk.Zc], ck)
      h('check_in_date', n[dk.ad], g)
      h('check_out_date', n[dk.Fc], g)
      h('adults', n[dk.lg], ek)
      h(dk.Le, n[dk.Le], g)
      h(dk.Ke, n[dk.Ke], g)
      return k
    },
    Zj = function (a) {
      var b = []
      Fa(a, function (c, d) {
        b.push(c + '=' + d)
      })
      return b.join(';')
    },
    ck = function (a) {
      return g(a) || ek(a)
    },
    ek = function (a) {
      return 'number' === typeof a
    },
    dk = {
      Zc: 'id',
      Je: 'price',
      ad: 'start_date',
      Fc: 'end_date',
      lg: 'occupancy',
      Le: 'room_id',
      Ke: 'rate_rule_id'
    },
    Xj = ['ha']
  var gk = function () {
      var a = !0
      ;(hj(7) && hj(9) && hj(10)) || (a = !1)
      var b = !0
      b = !1
      b && !fk() && (a = !1)
      return a
    },
    fk = function () {
      var a = !0
      ;(hj(3) && hj(4)) || (a = !1)
      return a
    }
  var kk = function (a, b) {
      var c = b.getWithConfig(C.xa),
        d = b.getWithConfig(C.wa),
        e = b.getWithConfig(c)
      if (void 0 === e) {
        var f = void 0
        hk.hasOwnProperty(c) ? (f = hk[c]) : ik.hasOwnProperty(c) && (f = ik[c])
        1 === f && (f = jk(c))
        g(f)
          ? rh()(function () {
              var h = rh().getByName(a).get(f)
              d(h)
            })
          : d(void 0)
      } else d(e)
    },
    nk = function (a, b, c) {
      if (td()) {
        var d = function () {
          var e = rh(),
            f = lk(a, b, '', c)
          mk(b, f.za) &&
            (e(function () {
              e.remove(b)
            }),
            e('create', a, f.za))
        }
        wd(d, C.J)
        wd(d, C.s)
      }
    },
    uk = function (a, b, c) {
      var d = 'https://www.google-analytics.com/analytics.js',
        e = th()
      if (xa(e)) {
        var f = 'gtag_' + a.split('-').join('_'),
          h = function (y) {
            var w = [].slice.call(arguments, 0)
            w[0] = f + '.' + w[0]
            e.apply(window, w)
          },
          k = function () {
            var y = function (B, E) {
                for (var G = 0; E && G < E.length; G++) h(B, E[G])
              },
              w = ok(b, c)
            if (w) {
              var A = w.action
              if ('impressions' === A) y('ec:addImpression', w.kh)
              else if ('promo_click' === A || 'promo_view' === A) {
                var z = w.Ad
                y('ec:addPromo', w.Ad)
                z && 0 < z.length && 'promo_click' === A && h('ec:setAction', A)
              } else y('ec:addProduct', w.Xa), h('ec:setAction', A, w.yb)
            }
          },
          l = function () {
            if (vg()) {
            } else {
              var y = c.getWithConfig(C.Vf)
              y &&
                (h('require', y, { dataLayer: 'dataLayer' }),
                h('require', 'render'))
            }
          },
          n = lk(a, f, b, c),
          p = function (y, w, A) {
            A && (w = '' + w)
            n.Aa[y] = w
          }
        mk(f, n.za) &&
          (e(function () {
            rh() && rh().remove(f)
          }),
          (pk[f] = !1))
        e('create', a, n.za)
        if (n.za._x_19) {
          var r = qi(n.za._x_19, '/analytics.js')
          r && (d = r)
          n.za._x_20 && !pk[f] && ((pk[f] = !0), e(yh(f, n.za._x_20)))
        }
        ;(function () {
          var y = c.getWithConfig('custom_map')
          e(function () {
            if (bb(y)) {
              var w = n.Aa,
                A = rh().getByName(f),
                z
              for (z in y)
                if (
                  y.hasOwnProperty(z) &&
                  /^(dimension|metric)\d+$/.test(z) &&
                  void 0 != y[z]
                ) {
                  var B = A.get(jk(y[z]))
                  qk(w, z, B)
                }
            }
          })
        })()
        ;(function (y) {
          if (y) {
            var w = {}
            if (bb(y))
              for (var A in rk) rk.hasOwnProperty(A) && sk(rk[A], A, y[A], w)
            h('require', 'linkid', w)
          }
        })(n.linkAttribution)
        var t = n[C.ka]
        if (t && t[C.D]) {
          var q = t[C.qb]
          uh(
            f + '.',
            t[C.D],
            void 0 === q ? !!t.use_anchor : 'fragment' === q,
            !!t[C.pb]
          )
        }
        var u = !1
        u = b === C.Da
        if (b === C.Gc) l(), h('send', 'pageview', n.Aa)
        else if (b === C.ia)
          l(),
            Ig(a, c),
            c.getWithConfig(C.Sa) && (ig(), vh(f + '.')),
            0 != n.sendPageView && h('send', 'pageview', n.Aa),
            nk(a, f, c)
        else if (u) {
          kk(f, c)
        } else
          'screen_view' === b
            ? h('send', 'screenview', n.Aa)
            : 'timing_complete' === b
            ? (p('timingCategory', n.eventCategory, !0),
              p('timingVar', n.name, !0),
              p('timingValue', Ga(n.value)),
              void 0 !== n.eventLabel && p('timingLabel', n.eventLabel, !0),
              h('send', 'timing', n.Aa))
            : 'exception' === b
            ? h('send', 'exception', n.Aa)
            : 'optimize.callback' !== b &&
              (0 <=
                Aa(
                  [
                    C.Sb,
                    'select_content',
                    C.Ca,
                    C.gb,
                    C.hb,
                    C.Pa,
                    'set_checkout_option',
                    C.sa,
                    C.ib,
                    'view_promotion',
                    'checkout_progress'
                  ],
                  b
                ) && (h('require', 'ec', 'ec.js'), k()),
              p('eventCategory', n.eventCategory, !0),
              p('eventAction', n.eventAction || b, !0),
              void 0 !== n.eventLabel && p('eventLabel', n.eventLabel, !0),
              void 0 !== n.value && p('eventValue', Ga(n.value)),
              h('send', 'event', n.Aa))
        if (!tk) {
          tk = !0
          mh()
          var v = c.F,
            x = function () {
              rh().loaded || v()
            }
          vg() ? I(x) : Xc(d, x, v)
        }
      } else I(c.F)
    },
    vk = function (a, b, c, d) {
      Cd(
        function () {
          uk(a, b, d)
        },
        [C.J, C.s]
      )
    },
    wk = function (a) {
      return Ad(a)
    },
    tk,
    pk = {},
    hk = {
      client_id: 1,
      client_storage: 'storage',
      cookie_name: 1,
      cookie_domain: 1,
      cookie_expires: 1,
      cookie_path: 1,
      cookie_update: 1,
      cookie_flags: 1,
      sample_rate: 1,
      site_speed_sample_rate: 1,
      use_amp_client_id: 1,
      store_gac: 1,
      conversion_linker: 'storeGac'
    },
    ik = {
      anonymize_ip: 1,
      app_id: 1,
      app_installer_id: 1,
      app_name: 1,
      app_version: 1,
      campaign: {
        name: 'campaignName',
        source: 'campaignSource',
        medium: 'campaignMedium',
        term: 'campaignKeyword',
        content: 'campaignContent',
        id: 'campaignId'
      },
      currency: 'currencyCode',
      description: 'exDescription',
      fatal: 'exFatal',
      language: 1,
      non_interaction: 1,
      page_hostname: 'hostname',
      page_referrer: 'referrer',
      page_path: 'page',
      page_location: 'location',
      page_title: 'title',
      screen_name: 1,
      transport_type: 'transport',
      user_id: 1
    },
    xk = {
      content_id: 1,
      event_category: 1,
      event_action: 1,
      event_label: 1,
      link_attribution: 1,
      linker: 1,
      method: 1,
      name: 1,
      send_page_view: 1,
      value: 1
    },
    rk = { cookie_name: 1, cookie_expires: 'duration', levels: 1 },
    yk = {
      anonymize_ip: 1,
      fatal: 1,
      non_interaction: 1,
      use_amp_client_id: 1,
      send_page_view: 1,
      store_gac: 1,
      conversion_linker: 1
    },
    sk = function (a, b, c, d) {
      if (void 0 !== c)
        if (
          (yk[b] && (c = Ha(c)),
          'anonymize_ip' !== b || c || (c = void 0),
          1 === a)
        )
          d[jk(b)] = c
        else if (g(a)) d[a] = c
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    },
    jk = function (a) {
      return a && g(a)
        ? a.replace(/(_[a-z])/g, function (b) {
            return b[1].toUpperCase()
          })
        : a
    },
    zk = function (a) {
      var b = 'general'
      0 <=
      Aa(
        [
          C.Td,
          C.gb,
          C.Xd,
          C.Pa,
          'checkout_progress',
          C.sa,
          C.ib,
          C.hb,
          'set_checkout_option'
        ],
        a
      )
        ? (b = 'ecommerce')
        : 0 <=
          Aa(
            'generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results'.split(
              ' '
            ),
            a
          )
        ? (b = 'engagement')
        : 'exception' === a && (b = 'error')
      return b
    },
    qk = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c)
    },
    Ak = function (a) {
      if (za(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c]
          if (void 0 != d) {
            var e = d.id,
              f = d.variant
            void 0 != e && void 0 != f && b.push(String(e) + '.' + String(f))
          }
        }
        return 0 < b.length ? b.join('!') : void 0
      }
    },
    lk = function (a, b, c, d) {
      function e(G, M) {
        void 0 !== M && (k[G] = M)
      }
      var f = function (G) {
          return d.getWithConfig(G)
        },
        h = {},
        k = {},
        l = {},
        n = Ak(f(C.Rf))
      n && qk(k, 'exp', n)
      td() && (l._cs = wk)
      var p = f('custom_map')
      if (bb(p))
        for (var r in p)
          if (
            p.hasOwnProperty(r) &&
            /^(dimension|metric)\d+$/.test(r) &&
            void 0 != p[r]
          ) {
            var t = f(String(p[r]))
            void 0 !== t && qk(k, r, t)
          }
      for (var q = Ai(d), u = 0; u < q.length; ++u) {
        var v = q[u],
          x = f(v)
        if (xk.hasOwnProperty(v)) sk(xk[v], v, x, h)
        else if (ik.hasOwnProperty(v)) sk(ik[v], v, x, k)
        else if (hk.hasOwnProperty(v)) sk(hk[v], v, x, l)
        else if (/^(dimension|metric|content_group)\d+$/.test(v)) sk(1, v, x, k)
        else if ('developer_id' === v) {
          var y = Xa(x)
          y && (k['&did'] = y)
        } else v === C.da && 0 > Aa(q, C.Ub) && (l.cookieName = x + '_ga')
      }
      qk(l, 'cookieDomain', 'auto')
      qk(k, 'forceSSL', !0)
      qk(h, 'eventCategory', zk(c))
      0 <=
        Aa(
          [
            'view_item',
            'view_item_list',
            'view_promotion',
            'view_search_results'
          ],
          c
        ) && qk(k, 'nonInteraction', !0)
      'login' === c || 'sign_up' === c || 'share' === c
        ? qk(h, 'eventLabel', f(C.Uf))
        : 'search' === c || 'view_search_results' === c
        ? qk(h, 'eventLabel', f(C.bg))
        : 'select_content' === c && qk(h, 'eventLabel', f(C.Lf))
      var w = h[C.ka] || {},
        A = w[C.ob]
      A || (0 != A && w[C.D])
        ? (l.allowLinker = !0)
        : !1 === A && qk(l, 'useAmpClientId', !1)
      f(C.Sa) && (l._useUp = !0)
      ;(!1 !== f(C.Kf) && !1 !== f(C.jb) && gk()) || (k.allowAdFeatures = !1)
      if (!1 === f(C.ba) || !fk()) {
        var z = 'allowAdFeatures'
        z = 'allowAdPersonalizationSignals'
        k[z] = !1
      }
      l.name = b
      k['&gtm'] = Ei(!0)
      k.hitCallback = d.H
      td() &&
        ((k['&gcs'] = Bd()),
        Ad(C.J) || (l.storage = 'none'),
        Ad(C.s) || ((k.allowAdFeatures = !1), (l.storeGac = !1)))
      var B = f(C.Ga) || f(C.Tf) || qe('gtag.remote_config.' + a + '.url', 2),
        E = f(C.Sf) || qe('gtag.remote_config.' + a + '.dualId', 2)
      if (B && null != Uc) {
        l._x_19 = B
      }
      E && (l._x_20 = E)
      h.Aa = k
      h.za = l
      return h
    },
    ok = function (a, b) {
      function c(v) {
        function x(w, A) {
          for (var z = 0; z < A.length; z++) {
            var B = A[z]
            if (v[B]) {
              y[w] = v[B]
              break
            }
          }
        }
        var y = m(v)
        x('listPosition', ['list_position'])
        x('creative', ['creative_name'])
        x('list', ['list_name'])
        x('position', ['list_position', 'creative_slot'])
        return y
      }
      function d(v) {
        for (var x = [], y = 0; v && y < v.length; y++) v[y] && x.push(c(v[y]))
        return x.length ? x : void 0
      }
      function e(v) {
        return {
          id: f(C.ub),
          affiliation: f(C.Of),
          revenue: f(C.ya),
          tax: f(C.ne),
          shipping: f(C.me),
          coupon: f(C.Pf),
          list: f(C.Jc) || v
        }
      }
      for (
        var f = function (v) {
            return b.getWithConfig(v)
          },
          h = f(C.S),
          k,
          l = 0;
        h && l < h.length && !(k = h[l][C.Jc]);
        l++
      );
      var n = f('custom_map')
      if (bb(n))
        for (var p = 0; h && p < h.length; ++p) {
          var r = h[p],
            t
          for (t in n)
            n.hasOwnProperty(t) &&
              /^(dimension|metric)\d+$/.test(t) &&
              void 0 != n[t] &&
              qk(r, t, r[n[t]])
        }
      var q = null,
        u = f(C.Qf)
      a === C.sa || a === C.ib
        ? (q = { action: a, yb: e(), Xa: d(h) })
        : a === C.gb
        ? (q = { action: 'add', Xa: d(h) })
        : a === C.hb
        ? (q = { action: 'remove', Xa: d(h) })
        : a === C.Ca
        ? (q = { action: 'detail', yb: e(k), Xa: d(h) })
        : a === C.Sb
        ? (q = { action: 'impressions', kh: d(h) })
        : 'view_promotion' === a
        ? (q = { action: 'promo_view', Ad: d(u) })
        : 'select_content' === a && u && 0 < u.length
        ? (q = { action: 'promo_click', Ad: d(u) })
        : 'select_content' === a
        ? (q = { action: 'click', yb: { list: f(C.Jc) || k }, Xa: d(h) })
        : a === C.Pa || 'checkout_progress' === a
        ? (q = {
            action: 'checkout',
            Xa: d(h),
            yb: { step: a === C.Pa ? 1 : f(C.ke), option: f(C.je) }
          })
        : 'set_checkout_option' === a &&
          (q = {
            action: 'checkout_option',
            yb: { step: f(C.ke), option: f(C.je) }
          })
      q && (q.oi = f(C.va))
      return q
    },
    Bk = {},
    mk = function (a, b) {
      var c = Bk[a]
      Bk[a] = m(b)
      if (!c) return !1
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0
      return !1
    }
  function Ck() {
    var a = L
    return (a.gcq = a.gcq || new Dk())
  }
  var Ek = function (a, b, c) {
      Ck().register(a, b, c)
    },
    Fk = function (a, b, c, d) {
      Ck().push('event', [b, a], c, d)
    },
    Gk = function (a, b) {
      Ck().push('config', [a], b)
    },
    Hk = function (a, b, c) {
      Ck().push('get', [a, b], c)
    },
    Ik = {},
    Jk = function () {
      this.status = 1
      this.containerConfig = {}
      this.targetConfig = {}
      this.i = {}
      this.o = null
      this.h = !1
    },
    Kk = function (a, b, c, d, e) {
      this.type = a
      this.o = b
      this.aa = c || ''
      this.h = d
      this.i = e
    },
    Dk = function () {
      this.o = {}
      this.i = {}
      this.h = []
    },
    Lk = function (a, b) {
      var c = sg(b)
      return (a.o[c.containerId] = a.o[c.containerId] || new Jk())
    },
    Mk = function (a, b, c) {
      if (b) {
        var d = sg(b)
        if (d && 1 === Lk(a, b).status) {
          Lk(a, b).status = 2
          var e = {}
          Wh &&
            (e.timeoutId = F.setTimeout(function () {
              D(38)
              Ih()
            }, 3e3))
          a.push('require', [e], d.containerId)
          Ik[d.containerId] = La()
          if (vg()) {
          } else {
            var h =
                '/gtag/js?id=' +
                encodeURIComponent(d.containerId) +
                '&l=dataLayer&cx=c',
              k =
                ('http:' != F.location.protocol ? 'https:' : 'http:') +
                ('//www.googletagmanager.com' + h),
              l = qi(c, h) || k
            Xc(l)
          }
        }
      }
    },
    Nk = function (a, b, c, d) {
      if (d.aa) {
        var e = Lk(a, d.aa),
          f = e.o
        if (f) {
          var h = m(c),
            k = m(e.targetConfig[d.aa]),
            l = m(e.containerConfig),
            n = m(e.i),
            p = m(a.i),
            r = qe('gtm.uniqueEventId'),
            t = sg(d.aa).prefix,
            q = zi(
              yi(xi(wi(vi(ui(ti(h), k), l), n), p), function () {
                Zh(r, t, '2')
              }),
              function () {
                Zh(r, t, '3')
              }
            )
          try {
            Zh(r, t, '1')
            f(d.aa, b, d.o, q)
          } catch (u) {
            Zh(r, t, '4')
          }
        }
      }
    }
  Dk.prototype.register = function (a, b, c) {
    if (3 !== Lk(this, a).status) {
      Lk(this, a).o = b
      Lk(this, a).status = 3
      c && (Lk(this, a).i = c)
      var d = sg(a),
        e = Ik[d.containerId]
      if (void 0 !== e) {
        var f = L[d.containerId].bootstrap,
          h = d.prefix.toUpperCase()
        L[d.containerId]._spx && (h = h.toLowerCase())
        var k = qe('gtm.uniqueEventId'),
          l = h,
          n = La() - f
        if (Wh && !Nh[k]) {
          k !== Jh && (Fh(), (Jh = k))
          var p = l + '.' + Math.floor(f - e) + '.' + Math.floor(n)
          Rh = Rh ? Rh + ',' + p : '&cl=' + p
        }
        delete Ik[d.containerId]
      }
      this.flush()
    }
  }
  Dk.prototype.push = function (a, b, c, d) {
    var e = Math.floor(La() / 1e3)
    Mk(this, c, b[0][C.Ga] || this.i[C.Ga])
    this.h.push(new Kk(a, e, c, b, d))
    d || this.flush()
  }
  Dk.prototype.flush = function (a) {
    for (var b = this; this.h.length; ) {
      var c = this.h[0]
      if (c.i) (c.i = !1), this.h.push(c)
      else
        switch (c.type) {
          case 'require':
            if (3 !== Lk(this, c.aa).status && !a) return
            Wh && F.clearTimeout(c.h[0].timeoutId)
            break
          case 'set':
            Fa(c.h[0], function (p, r) {
              m(Va(p, r), b.i)
            })
            break
          case 'config':
            var d = c.h[0],
              e = !!d[C.Zb]
            delete d[C.Zb]
            var f = Lk(this, c.aa),
              h = sg(c.aa),
              k = h.containerId === h.id
            e || (k ? (f.containerConfig = {}) : (f.targetConfig[c.aa] = {}))
            ;(f.h && e) || Nk(this, C.ia, d, c)
            f.h = !0
            delete d[C.wb]
            k ? m(d, f.containerConfig) : m(d, f.targetConfig[c.aa])
            break
          case 'event':
            Nk(this, c.h[1], c.h[0], c)
            break
          case 'get':
            var l = {},
              n = ((l[C.xa] = c.h[0]), (l[C.wa] = c.h[1]), l)
            Nk(this, C.Da, n, c)
        }
      this.h.shift()
    }
  }
  var Ok = !1,
    Pk = []
  function Qk() {
    if (!Ok) {
      Ok = !0
      for (var a = 0; a < Pk.length; a++) I(Pk[a])
    }
  }
  var Rk = function (a) {
    Ok ? I(a) : Pk.push(a)
  }
  var Sk = 'HA GF G UA AW DC'.split(' '),
    Tk = !1,
    Uk = {},
    Vk = !1
  function Wk(a, b) {
    var c = { event: a }
    b &&
      ((c.eventModel = m(b)),
      b[C.Kc] && (c.eventCallback = b[C.Kc]),
      b[C.Wb] && (c.eventTimeout = b[C.Wb]))
    return c
  }
  function Xk() {
    ;(Tk = Tk || !L.gtagRegistered),
      (L.gtagRegistered = !0),
      Tk &&
        (L.addTargetToGroup = function (a) {
          Yk(a, 'default')
        })
    return Tk
  }
  var Zk = function (a) {
      Fa(Uk, function (b, c) {
        var d = Aa(c, a)
        0 <= d && c.splice(d, 1)
      })
    },
    Yk = function (a, b) {
      b = b.toString().split(',')
      for (var c = 0; c < b.length; c++)
        (Uk[b[c]] = Uk[b[c]] || []), Uk[b[c]].push(a)
    }
  var $k = {
    config: function (a) {
      if (2 > a.length || !g(a[1])) return
      var b = {}
      if (2 < a.length) {
        if ((void 0 != a[2] && !bb(a[2])) || 3 < a.length) return
        b = a[2]
      }
      var c = sg(a[1])
      if (!c) return
      Zk(c.id)
      Yk(c.id, b[C.Oc] || 'default')
      delete b[C.Oc]
      Vk || D(43)
      ke()
      if (Xk() && -1 !== Aa(Sk, c.prefix)) {
        'G' === c.prefix && (b[C.wb] = !0)
        Gk(b, c.id)
        return
      }
      te('gtag.targets.' + c.id, void 0)
      te('gtag.targets.' + c.id, m(b))
      var d = {}
      d[C.Fa] = c.id
      return Wk(C.ia, d)
    },
    event: function (a) {
      var b = a[1]
      if (!(2 > a.length) && g(b)) {
        var c
        if (2 < a.length) {
          if ((!bb(a[2]) && void 0 != a[2]) || 3 < a.length) return
          c = a[2]
        }
        var d = Wk(b, c)
        var e
        var f = c && c[C.Fa]
        void 0 === f && ((f = qe(C.Fa, 2)), void 0 === f && (f = 'default'))
        if (g(f) || za(f)) {
          for (
            var h = f.toString().replace(/\s+/g, '').split(','), k = [], l = 0;
            l < h.length;
            l++
          )
            0 <= h[l].indexOf('-')
              ? k.push(h[l])
              : (k = k.concat(Uk[h[l]] || []))
          e = ug(k)
        } else e = void 0
        var n = e
        if (!n) return
        var p = Xk()
        ke()
        for (var r = [], t = 0; p && t < n.length; t++) {
          var q = n[t]
          if (-1 !== Aa(Sk, q.prefix)) {
            var u = m(c)
            'G' === q.prefix && (u[C.wb] = !0)
            Fk(b, u, q.id)
          }
          r.push(q.id)
        }
        d.eventModel = d.eventModel || {}
        0 < n.length
          ? (d.eventModel[C.Fa] = r.join())
          : delete d.eventModel[C.Fa]
        Vk || D(43)
        return d
      }
    },
    js: function (a) {
      if (2 == a.length && a[1].getTime)
        return (Vk = !0), Xk(), { event: 'gtm.js', 'gtm.start': a[1].getTime() }
    },
    policy: function () {},
    set: function (a) {
      var b
      2 == a.length && bb(a[1])
        ? (b = m(a[1]))
        : 3 == a.length &&
          g(a[1]) &&
          ((b = {}),
          bb(a[2]) || za(a[2]) ? (b[a[1]] = m(a[2])) : (b[a[1]] = a[2]))
      if (b) {
        if ((ke(), Xk())) {
          m(b)
          var c = m(b)
          Ck().push('set', [c])
        }
        b._clear = !0
        return b
      }
    },
    consent: function (a) {
      function b() {
        Xk() && m(a[2], { subcommand: a[1] })
      }
      if (3 === a.length) {
        D(39)
        var c = ke(),
          d = a[1]
        'default' === d ? (b(), yd(a[2])) : 'update' === d && (b(), zd(a[2], c))
      }
    }
  }
  $k.get = function (a) {
    D(53)
    if (4 !== a.length || !g(a[1]) || !g(a[2]) || !xa(a[3])) return
    var b = sg(a[1]),
      c = String(a[2]),
      d = a[3]
    if (!b) return
    Vk || D(43)
    if (!Xk() || -1 === Aa(Sk, b.prefix)) return
    ke()
    var e = {}
    Xg(m(((e[C.xa] = c), (e[C.wa] = d), e)))
    Hk(
      c,
      function (f) {
        I(function () {
          return d(f)
        })
      },
      b.id
    )
  }
  var al = { policy: !0 }
  var bl = function (a, b) {
      var c = a.hide
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1
        var d = !0,
          e
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1
            break
          }
        d && (c.end(), (c.end = null))
      }
    },
    fl = function (a) {
      var b = el(),
        c = b && b.hide
      c && c.end && (c[a] = !0)
    }
  var wl = function (a) {
    if (vl(a)) return a
    this.h = a
  }
  wl.prototype.hh = function () {
    return this.h
  }
  var vl = function (a) {
    return !a || 'object' !== $a(a) || bb(a)
      ? !1
      : 'getUntrustedUpdateValue' in a
  }
  wl.prototype.getUntrustedUpdateValue = wl.prototype.hh
  var xl = [],
    yl = !1,
    zl = function (a) {
      return F['dataLayer'].push(a)
    },
    Al = function (a) {
      var b = L['dataLayer'],
        c = b ? b.subscribers : 1,
        d = 0
      return function () {
        ++d === c && a()
      }
    }
  function Bl(a) {
    var b = a._clear
    Fa(a, function (d, e) {
      '_clear' !== d && (b && te(d, void 0), te(d, e))
    })
    fe || (fe = a['gtm.start'])
    var c = a['gtm.uniqueEventId']
    if (!a.event) return !1
    c || ((c = ke()), (a['gtm.uniqueEventId'] = c), te('gtm.uniqueEventId', c))
    return oi(a)
  }
  function Cl() {
    for (var a = !1; !yl && 0 < xl.length; ) {
      yl = !0
      delete ne.eventModel
      pe()
      var b = xl.shift()
      if (null != b) {
        var c = vl(b)
        if (c) {
          var d = b
          b = vl(d) ? d.getUntrustedUpdateValue() : void 0
          for (
            var e = [
                'gtm.allowlist',
                'gtm.blocklist',
                'gtm.whitelist',
                'gtm.blacklist',
                'tagTypeBlacklist'
              ],
              f = 0;
            f < e.length;
            f++
          ) {
            var h = e[f],
              k = qe(h, 1)
            if (za(k) || bb(k)) k = m(k)
            oe[h] = k
          }
        }
        try {
          if (xa(b))
            try {
              b.call(re)
            } catch (x) {}
          else if (za(b)) {
            var l = b
            if (g(l[0])) {
              var n = l[0].split('.'),
                p = n.pop(),
                r = l.slice(1),
                t = qe(n.join('.'), 2)
              if (void 0 !== t && null !== t)
                try {
                  t[p].apply(t, r)
                } catch (x) {}
            }
          } else {
            var q = b
            if (
              q &&
              ('[object Arguments]' == Object.prototype.toString.call(q) ||
                Object.prototype.hasOwnProperty.call(q, 'callee'))
            ) {
              a: {
                var u = b
                if (u.length && g(u[0])) {
                  var v = $k[u[0]]
                  if (v && (!c || !al[u[0]])) {
                    b = v(u)
                    break a
                  }
                }
                b = void 0
              }
              if (!b) {
                yl = !1
                continue
              }
            }
            a = Bl(b) || a
          }
        } finally {
          c && pe(!0)
        }
      }
      yl = !1
    }
    return !a
  }
  function Dl() {
    var a = Cl()
    try {
      bl(F['dataLayer'], Yd.B)
    } catch (b) {}
    return a
  }
  var Fl = function () {
      var a = Vc('dataLayer', []),
        b = Vc('google_tag_manager', {})
      b = b['dataLayer'] = b['dataLayer'] || {}
      dh(function () {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: 'gtm.dom' }))
      })
      Rk(function () {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: 'gtm.load' }))
      })
      b.subscribers = (b.subscribers || 0) + 1
      var c = a.push
      a.push = function () {
        var e
        if (0 < L.SANDBOXED_JS_SEMAPHORE) {
          e = []
          for (var f = 0; f < arguments.length; f++) e[f] = new wl(arguments[f])
        } else e = [].slice.call(arguments, 0)
        var h = c.apply(a, e)
        xl.push.apply(xl, e)
        if (300 < this.length) for (D(4); 300 < this.length; ) this.shift()
        var k = 'boolean' !== typeof h || h
        return Cl() && k
      }
      var d = a.slice(0)
      xl.push.apply(xl, d)
      El() && I(Dl)
    },
    El = function () {
      var a = !0
      return a
    }
  var Gl = {}
  Gl.$b = new String('undefined')
  var Hl = function (a) {
    this.h = function (b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === Gl.$b ? b : a[d])
      return c.join('')
    }
  }
  Hl.prototype.toString = function () {
    return this.h('undefined')
  }
  Hl.prototype.valueOf = Hl.prototype.toString
  Gl.og = Hl
  Gl.$c = {}
  Gl.Rg = function (a) {
    return new Hl(a)
  }
  var Il = {}
  Gl.Oh = function (a, b) {
    var c = ke()
    Il[c] = [a, b]
    return c
  }
  Gl.Ve = function (a) {
    var b = a ? 0 : 1
    return function (c) {
      var d = Il[c]
      if (d && 'function' === typeof d[b]) d[b]()
      Il[c] = void 0
    }
  }
  Gl.ph = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d])
    return b && c
  }
  Gl.Hh = function (a) {
    if (a === Gl.$b) return a
    var b = ke()
    Gl.$c[b] = a
    return 'google_tag_manager["' + Yd.B + '"].macro(' + b + ')'
  }
  Gl.Ah = function (a, b, c) {
    a instanceof Gl.og && ((a = a.h(Gl.Oh(b, c))), (b = wa))
    return { nd: a, H: b }
  }
  var Jl = function (a, b, c) {
      function d(f, h) {
        var k = f[h]
        return k
      }
      var e = {
        event: b,
        'gtm.element': a,
        'gtm.elementClasses': d(a, 'className'),
        'gtm.elementId': a['for'] || cd(a, 'id') || '',
        'gtm.elementTarget': a.formTarget || d(a, 'target') || ''
      }
      c && (e['gtm.triggers'] = c.join(','))
      e['gtm.elementUrl'] =
        (a.attributes && a.attributes.formaction ? a.formAction : '') ||
        a.action ||
        d(a, 'href') ||
        a.src ||
        a.code ||
        a.codebase ||
        ''
      return e
    },
    Kl = function (a) {
      L.hasOwnProperty('autoEventsSettings') || (L.autoEventsSettings = {})
      var b = L.autoEventsSettings
      b.hasOwnProperty(a) || (b[a] = {})
      return b[a]
    },
    Ll = function (a, b, c) {
      Kl(a)[b] = c
    },
    Ml = function (a, b, c, d) {
      var e = Kl(a),
        f = Ma(e, b, d)
      e[b] = c(f)
    },
    Nl = function (a, b, c) {
      var d = Kl(a)
      return Ma(d, b, c)
    }
  var Ol = ['input', 'select', 'textarea'],
    Pl = ['button', 'hidden', 'image', 'reset', 'submit'],
    Ql = function (a) {
      var b = a.tagName.toLowerCase()
      return !Ba(Ol, function (c) {
        return c === b
      }) ||
        ('input' === b &&
          Ba(Pl, function (c) {
            return c === a.type.toLowerCase()
          }))
        ? !1
        : !0
    },
    Rl = function (a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : H.getElementById(a.form)
        : fd(a, ['form'], 100)
    },
    Sl = function (a, b, c) {
      if (!a.elements) return 0
      for (
        var d = b.getAttribute(c), e = 0, f = 1;
        e < a.elements.length;
        e++
      ) {
        var h = a.elements[e]
        if (Ql(h)) {
          if (h.getAttribute(c) === d) return f
          f++
        }
      }
      return 0
    }
  var Tl = !!F.MutationObserver,
    Ul = void 0,
    Vl = function (a) {
      if (!Ul) {
        var b = function () {
          var c = H.body
          if (c)
            if (Tl)
              new MutationObserver(function () {
                for (var e = 0; e < Ul.length; e++) I(Ul[e])
              }).observe(c, { childList: !0, subtree: !0 })
            else {
              var d = !1
              ad(c, 'DOMNodeInserted', function () {
                d ||
                  ((d = !0),
                  I(function () {
                    d = !1
                    for (var e = 0; e < Ul.length; e++) I(Ul[e])
                  }))
              })
            }
        }
        Ul = []
        H.body ? b() : I(b)
      }
      Ul.push(a)
    }
  var fm = function (a, b, c) {
    function d() {
      var h = a()
      f += e ? ((La() - e) * h.playbackRate) / 1e3 : 0
      e = La()
    }
    var e = 0,
      f = 0
    return {
      nc: function (h, k, l) {
        var n = a(),
          p = n.We,
          r =
            void 0 !== l
              ? Math.round(l)
              : void 0 !== k
              ? Math.round(n.We * k)
              : Math.round(n.Sg),
          t =
            void 0 !== k
              ? Math.round(100 * k)
              : 0 >= p
              ? 0
              : Math.round((r / p) * 100),
          q = H.hidden ? !1 : 0.5 <= mj(c)
        d()
        var u = Jl(c, 'gtm.video', [b])
        u['gtm.videoProvider'] = 'youtube'
        u['gtm.videoStatus'] = h
        u['gtm.videoUrl'] = n.url
        u['gtm.videoTitle'] = n.title
        u['gtm.videoDuration'] = Math.round(p)
        u['gtm.videoCurrentTime'] = Math.round(r)
        u['gtm.videoElapsedTime'] = Math.round(f)
        u['gtm.videoPercent'] = t
        u['gtm.videoVisible'] = q
        zl(u)
      },
      Qh: function () {
        e = La()
      },
      cd: function () {
        d()
      }
    }
  }
  var gm = F.clearTimeout,
    hm = F.setTimeout,
    N = function (a, b, c) {
      if (vg()) {
        b && I(b)
      } else return Xc(a, b, c)
    },
    im = function () {
      return new Date()
    },
    jm = function () {
      return F.location.href
    },
    km = function (a) {
      return Fe(He(a), 'fragment')
    },
    lm = function (a) {
      return Ge(He(a))
    },
    mm = function (a, b) {
      return qe(a, b || 2)
    },
    nm = function (a, b, c) {
      var d
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = zl(a)))
        : (d = zl(a))
      return d
    },
    om = function (a, b) {
      F[a] = b
    },
    V = function (a, b, c) {
      b && (void 0 === F[a] || (c && !F[a])) && (F[a] = b)
      return F[a]
    },
    pm = function (a, b, c) {
      return Le(a, b, void 0 === c ? !0 : !!c)
    },
    qm = function (a, b, c) {
      return 0 === Ve(a, b, c)
    },
    rm = function (a, b) {
      if (vg()) {
        b && I(b)
      } else Zc(a, b)
    },
    sm = function (a) {
      return !!Nl(a, 'init', !1)
    },
    tm = function (a) {
      Ll(a, 'init', !0)
    },
    um = function (a, b) {
      var c = (void 0 === b ? 0 : b) ? 'www.googletagmanager.com/gtag/js' : de
      c += '?id=' + encodeURIComponent(a) + '&l=dataLayer'
      N(xg('https://', 'http://', c))
    },
    vm = function (a, b) {
      var c = a[b]
      return c
    },
    wm = function (a, b, c) {
      Wh && (cb(a) || $h(c, b, a))
    }
  var xm = Gl.Ah
  function Um(a, b) {
    a = String(a)
    b = String(b)
    var c = a.length - b.length
    return 0 <= c && a.indexOf(b, c) == c
  }
  var Vm = new Da()
  function Wm(a, b) {
    function c(h) {
      var k = He(h),
        l = Fe(k, 'protocol'),
        n = Fe(k, 'host', !0),
        p = Fe(k, 'port'),
        r = Fe(k, 'path').toLowerCase().replace(/\/$/, '')
      if (
        void 0 === l ||
        ('http' == l && '80' == p) ||
        ('https' == l && '443' == p)
      )
        (l = 'web'), (p = 'default')
      return [l, n, p, r]
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1
    return !0
  }
  function Xm(a) {
    return Ym(a) ? 1 : 0
  }
  function Ym(a) {
    var b = a.arg0,
      c = a.arg1
    if (a.any_of && za(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = m(a, {})
        m({ arg1: c[d], any_of: void 0 }, e)
        if (Xm(e)) return !0
      }
      return !1
    }
    switch (a['function']) {
      case '_cn':
        return 0 <= String(b).indexOf(String(c))
      case '_css':
        var f
        a: {
          if (b) {
            var h = [
              'matches',
              'webkitMatchesSelector',
              'mozMatchesSelector',
              'msMatchesSelector',
              'oMatchesSelector'
            ]
            try {
              for (var k = 0; k < h.length; k++)
                if (b[h[k]]) {
                  f = b[h[k]](c)
                  break a
                }
            } catch (q) {}
          }
          f = !1
        }
        return f
      case '_ew':
        return Um(b, c)
      case '_eq':
        return String(b) == String(c)
      case '_ge':
        return Number(b) >= Number(c)
      case '_gt':
        return Number(b) > Number(c)
      case '_lc':
        var l
        l = String(b).split(',')
        return 0 <= Aa(l, String(c))
      case '_le':
        return Number(b) <= Number(c)
      case '_lt':
        return Number(b) < Number(c)
      case '_re':
        var n
        var p = a.ignore_case ? 'i' : void 0
        try {
          var r = String(c) + p,
            t = Vm.get(r)
          t || ((t = new RegExp(c, p)), Vm.set(r, t))
          n = t.test(b)
        } catch (q) {
          n = !1
        }
        return n
      case '_sw':
        return 0 == String(b).indexOf(String(c))
      case '_um':
        return Wm(b, c)
    }
    return !1
  }
  var Zm = {},
    $m = encodeURI,
    X = encodeURIComponent,
    an = $c
  var bn = function (a, b) {
    if (!a) return !1
    var c = Fe(He(a), 'host')
    if (!c) return !1
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase()
      if (e) {
        var f = c.length - e.length
        0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e))
        if (0 <= f && c.indexOf(e, f) == f) return !0
      }
    }
    return !1
  }
  var cn = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0))
    return e ? d : null
  }
  Zm.qh = function () {
    var a = !1
    return a
  }
  var $n = {}
  $n[C.Ub] = ''
  $n[C.da] = ''
  $n[C.ja] = ''
  $n[C.V] = 'auto'
  $n[C.Qa] = '/'
  $n[C.ca] = 63072e3
  $n[C.tb] = 30
  $n[C.sb] = !0
  var ao = function (a, b, c, d, e) {
    this.o = a
    this.P = b
    this.h = c
    this.I = d.eventModel
    this.kg = d.containerConfig
    this.De = d
    this.cb = d.getWithConfig(C.kb) ? 1 : 7
    this.Za = e
    this.L = this.eb = this.He = this.i = this.Fe = this.Ge = this.oa = !1
    this.Ia = 0
    this.Ee = this.Wc = !1
    this.Yc = void 0
    this.fa = 0
    this.fb = void 0
  }
  aa = ao.prototype
  aa.ma = function (a, b) {
    void 0 === this.m(a) && (this.I[a] = b)
  }
  aa.qf = function (a, b) {
    b < this.cb && ((this.I[C.kb] = a), (this.cb = b))
  }
  aa.m = function (a) {
    return void 0 !== this.I[a]
      ? this.I[a]
      : void 0 !== this.De.getWithConfig(a)
      ? this.De.getWithConfig(a)
      : void 0 !== this.Za[a]
      ? this.Za[a]
      : $n[a]
  }
  aa.fh = function () {
    return this.Za[C.ka]
  }
  aa.qc = function (a) {
    var b = this.Za[C.Lc]
    if (b && void 0 !== b[a || this.P]) return b[a || this.P]
  }
  aa.abort = function () {
    throw 'ABORT'
  }
  var bo = !1
  var go = function () {
      var a = 0,
        b = 0
      return {
        start: function () {
          a = La()
        },
        stop: function () {
          b = this.get()
        },
        get: function () {
          var c = 0
          co && eo && fo && (c = La() - a)
          return c + b
        }
      }
    },
    ko = function () {
      ho += io()
      jo = go()
      co && eo && fo && jo.start()
    },
    jo = void 0,
    ho = 0,
    co = !1,
    eo = !1,
    fo = !1,
    lo = void 0,
    mo = function () {
      if (!jo) {
        co = H.hasFocus()
        eo = !H.hidden
        fo = !0
        var a = function (b, c, d) {
          ad(b, c, function () {
            jo.stop()
            d()
            co && eo && fo && jo.start()
          })
        }
        a(F, 'focus', function () {
          co = !0
        })
        a(F, 'blur', function () {
          co = !1
        })
        a(F, 'pageshow', function () {
          fo = !0
        })
        a(F, 'pagehide', function () {
          fo = !1
          lo && lo()
        })
        a(H, 'visibilitychange', function () {
          eo = !H.hidden
        })
        ko()
        ho = 0
      }
    },
    io = function () {
      return (jo && jo.get()) || 0
    }
  function no() {
    return (F.gaGlobal = F.gaGlobal || {})
  }
  var oo = function () {
      var a = no()
      a.hid = a.hid || Ca()
      return a.hid
    },
    po = function (a, b) {
      var c = no()
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b)
    }
  var to = function (a, b) {
      var c = qo(b),
        d = String(b.m(C.V)),
        e = String(b.m(C.Qa)),
        f = Number(b.m(C.ca)),
        h = b.m(C.Vb),
        k = {
          Ja: C.J,
          domain: d,
          path: e,
          expires: f ? new Date(La() + 1e3 * f) : void 0,
          flags: String(b.m(C.ja))
        }
      if (!1 === h && ro(b) === a) return !0
      var l = bf(a, so[0], d, e)
      return 1 !== Ve(c, l, k)
    },
    ro = function (a) {
      var b = qo(a),
        c = String(a.m(C.V)),
        d = String(a.m(C.Qa)),
        e = af(b, c, d, so, C.J)
      if (!e) {
        var f = String(a.m(C.Ub))
        f && f != b && (e = af(f, c, d, so, C.J))
      }
      return e
    },
    qo = function (a) {
      return String(a.m(C.da)) + '_ga'
    },
    so = ['GA1']
  var wo = function (a, b) {
      var c = uo(b),
        d = String(b.m(C.V)),
        e = String(b.m(C.Qa)),
        f = Number(b.m(C.ca)),
        h = bf(a, vo[0], d, e),
        k = {
          Ja: C.J,
          domain: d,
          path: e,
          expires: f ? new Date(La() + 1e3 * f) : void 0,
          flags: String(b.m(C.ja))
        }
      return 1 !== Ve(c, h, k)
    },
    xo = function (a) {
      var b = uo(a),
        c = String(a.m(C.V)),
        d = String(a.m(C.Qa))
      return af(b, c, d, vo, C.J)
    },
    vo = ['GS1'],
    uo = function (a) {
      return String(a.m(C.da)) + '_ga_' + a.o.substr(2)
    }
  var yo = function (a) {
      var b = a.m(C.ka),
        c = a.fh()
      if (c === b) return c
      var d = m(b)
      c && c[C.D] && (d[C.D] = (d[C.D] || []).concat(c[C.D]))
      return d
    },
    zo = function (a, b, c) {
      var d = Gf(!0),
        e = d[b]
      e && (a.qf(e, 2), to(e, a))
      var f = d[c]
      f && wo(f, a)
      return !(!e || !f)
    },
    Ao = !1,
    Bo = !1
  Bo = !0
  var Co = function (a) {
    if (Bo) {
      var b = yo(a) || {},
        c = qo(a),
        d = uo(a)
      Of(b[C.ob], !!b[C.D]) && zo(a, c, d) && (Ao = !0)
      b[C.D] &&
        Lf(
          function () {
            var e = {},
              f = ro(a)
            f && (e[c] = f)
            var h = xo(a)
            h && (e[d] = h)
            return e
          },
          b[C.D],
          b[C.qb],
          !!b[C.pb]
        )
    }
  }
  var Do = function (a) {
    vc('GA4_EVENT', a)
  }
  var Fo = function (a) {
      return !a || Eo.test(a) || 0 <= Aa(C.fg, a)
    },
    Go = function (a, b, c) {
      if (c)
        switch (c.type) {
          case 'event_name':
            return a
          case 'const':
            return c.const_value
          case 'event_param':
            return b[c.event_param.param_name]
        }
    },
    Ho = function (a, b, c) {
      for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
        var f = d[e]
        if (f.edit_param) {
          var h
          var k = Go(a, b, f.edit_param.param_value)
          if (k) {
            var l = Number(k)
            h = isNaN(l) ? k : l
          } else h = k
          b[f.edit_param.param_name] = h
        } else f.delete_param && delete b[f.delete_param.param_name]
      }
    },
    Io = function (a, b) {
      var c = b.values || [],
        d = Go(a.P, a.I, c[0]),
        e = Go(a.P, a.I, c[1]),
        f = !1
      switch (b.type) {
        case 'eq':
          f = String(d) == String(e)
          break
        case 'sw':
          f = 0 == String(d).indexOf(String(e))
          break
        case 'ew':
          f = Um(d, e)
          break
        case 'cn':
          f = 0 <= String(d).indexOf(String(e))
          break
        case 'lt':
          f = Number(d) < Number(e)
          break
        case 'le':
          f = Number(d) <= Number(e)
          break
        case 'gt':
          f = Number(d) > Number(e)
          break
        case 'ge':
          f = Number(d) >= Number(e)
      }
      return !!b.negate !== f
    },
    Jo = function (a, b) {
      var c = b.event_name_predicate
      if (c && !Io(a, c)) return !1
      var d = b.conditions || []
      if (0 === d.length) return !0
      for (var e = 0; e < d.length; e++) {
        for (var f = d[e].predicates || [], h = !0, k = 0; k < f.length; k++)
          if (!Io(a, f[k])) {
            h = !1
            break
          }
        if (h) return !0
      }
      return !1
    },
    Eo = /^(_|ga_|google_|gtag\.|firebase_).*$/
  var Ko = function () {
    var a = La(),
      b = a + 864e5,
      c = 20,
      d = 5e3
    return function () {
      var e = La()
      e >= b && ((b = e + 864e5), (d = 5e3))
      if (1 > d) return !1
      c = Math.min(c + ((e - a) / 1e3) * 5, 20)
      a = e
      if (1 > c) return !1
      d--
      c--
      return !0
    }
  }
  var Lo = function (a) {
      var b = 'https://www.google-analytics.com/g/collect'
      if (null != Uc) {
        var c = pi(a.m(C.Ga), '/g/collect')
        if (c) return c
      }
      var d = !0
      ;(Ad(C.s) && Ad(C.J)) || (d = !1)
      var e = !1 !== a.m(C.ba)
      e = !0
      a.m(C.nb) &&
        !a.m(C.Xb) &&
        e &&
        !1 !== a.m(C.jb) &&
        gk() &&
        d &&
        (b = 'https://analytics.google.com/g/collect')
      return b
    },
    Mo = {}
  Mo[C.cg] = 'tid'
  Mo[C.kb] = 'cid'
  Mo[C.Ra] = 'ul'
  Mo[C.Mc] = '_fid'
  Mo[C.xe] = 'tt'
  var No = {}
  No[C.Yb] = 'sid'
  No[C.Vc] = 'sct'
  No[C.Uc] = 'seg'
  No[C.rb] = 'dl'
  No[C.Ea] = 'dr'
  No[C.Rc] = 'dt'
  No[C.va] = 'cu'
  No[C.vb] = 'uid'
  var Oo = function (a, b) {
    function c(t, q) {
      if (void 0 !== q && -1 == C.eg.indexOf(t)) {
        null === q && (q = '')
        var u
        if ('_' === t.charAt(0)) d[t] = Xb(q, 300)
        else if (Mo[t]) (u = Mo[t]), (d[u] = Xb(q, 300))
        else if (No[t]) (u = No[t]), (f[u] = Xb(q, 300))
        else {
          t = Xb(t, 40)
          var v = 'ep.' + t,
            x = 'epn.' + t
          u = ya(q) ? x : v
          var y = ya(q) ? v : x
          e.hasOwnProperty(y) && delete e[y]
          e[u] = Xb(q, 100)
        }
      }
    }
    var d = {},
      e = {},
      f = {}
    d.v = '2'
    d.tid = a.o
    d.gtm = Ei()
    d._p = oo()
    a.Yc && (d.sr = a.Yc)
    a.L && (d._gaz = 1)
    td() && (d.gcs = Bd())
    e.en = Xb(a.P, 40)
    a.oa && (e._fv = a.Ge ? 2 : 1)
    a.Fe && (e._nsi = 1)
    a.i && (e._ss = a.He ? 2 : 1)
    a.Wc && (e._c = 1)
    0 < a.fa && (e._et = a.fa)
    if (a.Ee) {
      var h = a.m(C.S)
      if (za(h))
        for (var k = 0; k < h.length && 200 > k; k++)
          e['pr' + (k + 1)] = cc(h[k])
    }
    a.fb && (e._eu = a.fb)
    for (var l = 0; l < C.ye.length; ++l) {
      var n = C.ye[l]
      c(n, a.m(n))
    }
    Fa(a.kg, c)
    Fa(a.I, c)
    var p = a.m(C.la) || {}
    ;(!1 !== a.m(C.ba) && fk()) || (p._npa = '1')
    Fa(p, function (t, q) {
      if (b[t] !== q) {
        if (t !== C.vb || f.uid) {
          var u = (ya(q) ? 'upn.' : 'up.') + Xb(t, 24)
          e[u] = Xb(q, 36)
        } else f.uid = Xb(q, 36)
        b[t] = q
      }
    })
    var r = !1
    return ec.call(this, { qa: d, La: f, I: e }, Lo(a), r) || this
  }
  la(Oo, ec)
  var Po = function (a) {
      return a && 0 === a.indexOf('google.') && 'google.com' != a
        ? 'https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&'.replace(
            '%',
            a
          )
        : void 0
    },
    Qo = function () {
      this.o = 1
      this.L = {}
      this.h = new fc()
      this.i = -1
    }
  Qo.prototype.add = function (a) {
    var b = this,
      c
    try {
      c = new Oo(a, this.L)
    } catch (f) {
      a.abort()
    }
    var d = !(!Tc.sendBeacon || a.Wc || a.i || a.eb || a.L || bo)
    ;(d && this.h.o(c)) || this.flush()
    if (d && this.h.add(c))
      0 > this.i &&
        (this.i = F.setTimeout(function () {
          return b.flush()
        }, 5e3))
    else {
      var e = hc(c, this.o++)
      Ro(c.i, e.xd, e.body)
      So(c, a.eb, a.L, String(a.m(C.Nc)))
    }
  }
  Qo.prototype.flush = function () {
    if (this.h.events.length) {
      var a = ic(this.h, this.o++)
      Ro(this.h.i, a.xd, a.body)
      this.h = new fc()
      0 <= this.i && (F.clearTimeout(this.i), (this.i = -1))
    }
  }
  var So = function (a, b, c, d) {
      function e(k) {
        f.push(k + '=' + encodeURIComponent('' + a.qa[k]))
      }
      if (b || c) {
        var f = []
        e('tid')
        e('cid')
        e('gtm')
        f.push('aip=1')
        a.La.uid && f.push('uid=' + encodeURIComponent('' + a.La.uid))
        b &&
          (Ro(
            'https://stats.g.doubleclick.net/g/collect',
            'v=2&' + f.join('&')
          ),
          Yg('https://stats.g.doubleclick.net/g/collect?v=2&' + f.join('&')))
        if (c) {
          f.push('z=' + Ca())
          var h = Po(d)
          h && $c(h + f.join('&'))
        }
      }
    },
    Ro = function (a, b, c) {
      var d = a + '?' + b
      c ? Tc.sendBeacon && Tc.sendBeacon(d, c) : gd(d)
    }
  var To = window,
    Uo = document,
    Vo = function (a) {
      var b = To._gaUserPrefs
      if ((b && b.ioo && b.ioo()) || (a && !0 === To['ga-disable-' + a]))
        return !0
      try {
        var c = To.external
        if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0
      } catch (f) {}
      for (
        var d = Je('AMP_TOKEN', String(Uo.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ('$OPT_OUT' == d[e]) return !0
      return Uo.getElementById('__gaOptOutExtension') ? !0 : !1
    }
  var Wo = function (a) {
      var b = qe('gtm.gtagReferrer.' + a.o)
      return b ? '' + b : H.referrer
    },
    Xo = function (a, b) {
      this.eb = a
      this.Za = b
      this.fa = new Qo()
      this.oa = !1
      this.i = this.o = this.h = void 0
      this.L = !1
    }
  Xo.prototype.cb = function (a, b, c) {
    var d = this
    this.oa || ((this.oa = !0), a !== C.ia && D(24))
    if (c.eventModel[C.wb]) {
      if ('_' === a.charAt(0)) return
      Yo(c)
    }
    var e = new ao(this.eb, a, b, c, this.Za),
      f = [C.J]
    e.m(C.nb) && f.push(C.s)
    Cd(function () {
      var h
      d.i = e
      try {
        Vo(e.o) && (D(28), e.abort())
        0 <= Aa(''.replace(/\s+/g, '').split(','), e.P) && (D(33), e.abort())
        var k = e.qc()
        k && k.blacklisted && (D(34), e.abort())
        var l = H.location.protocol
        'http:' != l && 'https:' != l && (D(29), e.abort())
        Tc && 'preview' == Tc.loadPurpose && (D(30), e.abort())
        var n = L.grl
        n || ((n = Ko()), (L.grl = n))
        n() || (D(35), e.abort())
        e.fa = io()
        e.P == C.ia &&
          (mo(), Co(e), e.m(C.Sa) && ig(), e.m(C.sb) || e.abort(), (e.P = C.Gc))
        var p = d.h,
          r = d.o,
          t = xo(e)
        t || (t = r)
        var q = Ga(e.m(C.tb)),
          u
        a: {
          if (t) {
            var v = t.split('.')
            if (!(4 > v.length || 5 < v.length)) {
              u = {
                sessionId: v[0],
                Hd: Number(v[1]),
                yc: !!Number(v[2]),
                qd: Number(v[3]),
                Ia: Number(v[4] || 0)
              }
              break a
            }
          }
          u = void 0
        }
        u && u.Ia && (e.Ia = Math.max(0, u.Ia - Math.max(0, e.h - u.qd)))
        var x = !1
        u ||
          ((x = e.oa = !0),
          (u = { sessionId: String(e.h), Hd: 1, yc: !1, qd: e.h }))
        e.h > u.qd + 60 * q &&
          ((x = !0), (u.sessionId = String(e.h)), u.Hd++, (u.yc = !1))
        if (x) (e.i = !0), (e.fa = 0), ko(), (ho = 0)
        else if (1e4 < ho + io() || e.P == C.Gc) u.yc = !0
        e.ma(C.Yb, u.sessionId)
        e.ma(C.Vc, u.Hd)
        e.ma(C.Uc, u.yc ? 1 : 0)
        var y = e.I[C.kb],
          w = e.cb
        y || ((y = ro(e)), (w = 3))
        y || ((y = p), (w = 4))
        if (!y) {
          var A = Ad(C.J),
            z = no()
          y = !z.from_cookie || A ? z.vid : void 0
          w = 5
        }
        y ? (y = '' + y) : ((e.oa = e.Fe = !0), (y = Ye()), (w = 6))
        e.qf(y, w)
        var B = '',
          E = H.location
        if (E) {
          var G = E.pathname || ''
          '/' != G.charAt(0) && (G = '/' + G)
          B = E.protocol + '//' + E.hostname + G + E.search
        }
        e.ma(C.rb, B)
        e.ma(C.Ea, Wo(e))
        e.ma(C.Rc, H.title)
        e.ma(C.Ra, (Tc.language || '').toLowerCase())
        var M = F.screen,
          O = M ? M.width : 0,
          W = M ? M.height : 0
        e.Yc = O + 'x' + W
        var Z = !1 !== e.m(C.ba)
        Z = !0
        if (Z && !1 !== e.m(C.jb) && gk() && Ad(C.s)) {
          var ca = e.m(C.nb),
            J = e.m(C.Xb)
          e.i && (e.eb = !!ca)
          ca && !J && 0 === e.Ia && ((e.Ia = 60), (e.L = !0))
        }
        Zo(e)
        e.Ee = 0 <= C.Ae.indexOf(e.P)
        for (var K = e.m(C.Qc) || [], P = 0; P < K.length; P++) {
          var S = K[P]
          if (S.rule_result) {
            e.ma(C.xe, S.traffic_type)
            Do(3)
            break
          }
        }
        if (e.P == C.Da) {
          var oa = e.m(C.xa)
          e.m(C.wa)(e.m(oa))
          e.abort()
        }
        if (e.I[C.bd]) delete e.I[C.bd]
        else {
          var Q = e.m(C.Ic)
          if (Q) {
            for (var Ya = Q.edit_rules || [], Kb = 0; Kb < Ya.length; Kb++)
              a: {
                var Ra = Ya[Kb]
                if (Jo(e, Ra)) {
                  if (Ra.new_event_name) {
                    var tb =
                      'string' === typeof Ra.new_event_name
                        ? String(Ra.new_event_name)
                        : Go(e.P, e.I, Ra.new_event_name)
                    if (Fo(tb)) break a
                    e.P = String(tb)
                  }
                  Ho(e.P, e.I, Ra)
                  Do(2)
                }
              }
            for (
              var Sa = Q.synthesis_rules || [], Ta = 0;
              Ta < Sa.length;
              Ta++
            ) {
              var Ua = Sa[Ta]
              if (Jo(e, Ua)) {
                var ub = Ua.new_event_name
                if (!Fo(ub)) {
                  var Ed = Ua.merge_source_event_params ? m(e.I) : {}
                  Ed[C.bd] = !0
                  Ho(ub, Ed, Ua)
                  Fk(ub, Ed, e.o, !0)
                  Do(1)
                }
              }
            }
          }
        }
        var Fd = wc('GA4_EVENT')
        Fd && (e.fb = Fd)
        var Pe = d.h,
          Lb
        var Yb
        var cl = e.I[C.Yb],
          dl = e.I[C.Vc]
        Yb = cl && dl ? [cl, dl, Ga(e.I[C.Uc]), e.h, e.Ia].join('.') : void 0
        Yb ? (wo(Yb, e) || (D(25), e.abort()), (Lb = Yb)) : (Lb = void 0)
        var ep = Lb
        a: {
          var Zb = e.I[C.kb]
          Zb
            ? ((Zb = '' + Zb),
              to(Zb, e) || (D(31), e.abort()),
              po(Zb, Ad(C.J)),
              (h = Zb))
            : (D(32), e.abort(), (h = ''))
        }
        d.h = h
        d.o = ep
        d.fb()
        ko()
        d.fa.add(e)
        c.H()
      } catch (kp) {
        c.F()
      }
      delete uc.GA4_EVENT
    }, f)
  }
  Xo.prototype.flush = function () {
    this.fa.flush()
  }
  Xo.prototype.fb = function () {
    var a = this
    if (!this.L) {
      var b = Ad(C.J)
      ud([C.J], function () {
        var c = Ad(C.J)
        if (b ^ c && a.i && a.o && a.h) {
          if (c) {
            var d = ro(a.i)
            d
              ? ((a.h = d), (a.o = xo(a.i)))
              : (to(a.h, a.i), wo(a.o, a.i), po(a.h, !0))
          } else (a.o = void 0), (a.h = void 0)
          b = c
        }
      })
      this.L = !0
    }
  }
  var Zo = function (a) {
    var b = function (c) {
      return !!c && c.conversion
    }
    a.Wc = b(a.qc())
    a.oa && (a.Ge = b(a.qc('first_visit')))
    a.i && (a.He = b(a.qc('session_start')))
  }
  function Yo(a) {
    delete a.eventModel[C.wb]
    $o(a.eventModel)
  }
  var $o = function (a) {
    Fa(a, function (c) {
      '_' === c.charAt(0) && delete a[c]
    })
    var b = a[C.la] || {}
    Fa(b, function (c) {
      '_' === c.charAt(0) && delete b[c]
    })
  }
  var ap = function (a) {
      if ('prerender' == H.visibilityState) return !1
      a()
      return !0
    },
    bp = function (a) {
      if (!ap(a)) {
        var b = !1,
          c = function () {
            !b && ap(a) && ((b = !0), bd(H, 'visibilitychange', c), D(55))
          }
        ad(H, 'visibilitychange', c)
        D(54)
      }
    }
  var cp = function (a, b, c) {
      Fk(b, c, a)
    },
    dp = function (a, b, c) {
      Fk(b, c, a, !0)
    },
    gp = function (a, b) {
      var c = new Xo(a, b)
      bp(function () {
        fp(a, c)
      })
    }
  function fp(a, b) {
    Ek(a, function (c, d, e, f) {
      b.cb(d, e, f)
    }),
      (lo = function () {
        Ck().flush()
        1e3 <= io() && Tc.sendBeacon && Fk(C.Yd, {}, a)
        b.flush()
      })
  }
  var Y = { a: {} }
  ;(Y.a.ehl = ['google']),
    (function () {
      function a(l) {
        return l.target && l.target.location && l.target.location.href
          ? l.target.location.href
          : jm()
      }
      function b(l, n) {
        ad(l, 'hashchange', function (p) {
          var r = a(p)
          n({ source: 'hashchange', state: null, url: lm(r), R: km(r) })
        })
      }
      function c(l, n) {
        ad(l, 'popstate', function (p) {
          var r = a(p)
          n({ source: 'popstate', state: p.state, url: lm(r), R: km(r) })
        })
      }
      function d(l, n, p) {
        var r = n.history,
          t = r[l]
        if (xa(t))
          try {
            r[l] = function (q, u, v) {
              t.apply(r, [].slice.call(arguments, 0))
              p({ source: l, state: q, url: lm(jm()), R: km(jm()) })
            }
          } catch (q) {}
      }
      function e() {
        var l = {
          source: null,
          state: V('history').state || null,
          url: lm(jm()),
          R: km(jm())
        }
        return function (n, p) {
          var r = l,
            t = {}
          t[r.source] = !0
          t[n.source] = !0
          if (!t.popstate || !t.hashchange || r.R != n.R) {
            var q = {
              event: 'gtm.historyChange-v2',
              'gtm.historyChangeSource': n.source,
              'gtm.oldUrlFragment': l.R,
              'gtm.newUrlFragment': n.R,
              'gtm.oldHistoryState': l.state,
              'gtm.newHistoryState': n.state,
              'gtm.oldUrl': l.url,
              'gtm.newUrl': n.url,
              'gtm.triggers': p.join(',')
            }
            l = n
            nm(q)
          }
        }
      }
      function f(l, n) {
        var p = '' + n
        if (h[p]) h[p].push(l)
        else {
          var r = [l]
          h[p] = r
          var t = e(),
            q = -1
          k.push(function (u) {
            0 <= q && gm(q)
            n
              ? (q = hm(function () {
                  t(u, r)
                  q = -1
                }, n))
              : t(u, r)
          })
        }
      }
      var h = {},
        k = []
      ;(function (l) {
        Y.__ehl = l
        Y.__ehl.b = 'ehl'
        Y.__ehl.g = !0
        Y.__ehl.priorityOverride = 0
      })(function (l) {
        var n = V('self'),
          p = l.vtp_uniqueTriggerId || '0',
          r = l.vtp_groupEvents ? Number(l.vtp_groupEventsInterval) : 0
        0 > r ? (r = 0) : isNaN(r) && (r = 1e3)
        if (sm('ehl')) {
          var t = Nl('ehl', 'reg')
          t ? (t(p, r), I(l.vtp_gtmOnSuccess)) : I(l.vtp_gtmOnFailure)
        } else {
          var q = function (u) {
            for (var v = 0; v < k.length; v++) k[v](u)
          }
          b(n, q)
          c(n, q)
          d('pushState', n, q)
          d('replaceState', n, q)
          f(p, r)
          Ll('ehl', 'reg', f)
          tm('ehl')
          I(l.vtp_gtmOnSuccess)
        }
      })
    })()
  ;(Y.a.sdl = ['google']),
    (function () {
      function a() {
        return !!(
          Object.keys(l('horiz.pix')).length ||
          Object.keys(l('horiz.pct')).length ||
          Object.keys(l('vert.pix')).length ||
          Object.keys(l('vert.pct')).length
        )
      }
      function b(w) {
        for (var A = [], z = w.split(','), B = 0; B < z.length; B++) {
          var E = Number(z[B])
          if (isNaN(E)) return []
          p.test(z[B]) || A.push(E)
        }
        return A
      }
      function c() {
        var w = 0,
          A = 0
        return function () {
          var z = lj(),
            B = z.height
          w = Math.max(v.scrollLeft + z.width, w)
          A = Math.max(v.scrollTop + B, A)
          return { Ug: w, Vg: A }
        }
      }
      function d() {
        q = V('self')
        u = q.document
        v = u.scrollingElement || (u.body && u.body.parentNode)
        y = c()
      }
      function e(w, A, z, B) {
        var E = l(A),
          G = {},
          M
        for (M in E) {
          G.Oa = M
          if (E.hasOwnProperty(G.Oa)) {
            var O = Number(G.Oa)
            w < O ||
              (nm({
                event: 'gtm.scrollDepth',
                'gtm.scrollThreshold': O,
                'gtm.scrollUnits': z.toLowerCase(),
                'gtm.scrollDirection': B,
                'gtm.triggers': E[G.Oa].join(',')
              }),
              Ml(
                'sdl',
                A,
                (function (W) {
                  return function (Z) {
                    delete Z[W.Oa]
                    return Z
                  }
                })(G),
                {}
              ))
          }
          G = { Oa: G.Oa }
        }
      }
      function f() {
        var w = y(),
          A = w.Ug,
          z = w.Vg,
          B = (A / v.scrollWidth) * 100,
          E = (z / v.scrollHeight) * 100
        e(A, 'horiz.pix', r.bc, t.Ce)
        e(B, 'horiz.pct', r.ac, t.Ce)
        e(z, 'vert.pix', r.bc, t.Pe)
        e(E, 'vert.pct', r.ac, t.Pe)
        Ll('sdl', 'pending', !1)
      }
      function h() {
        var w = 250,
          A = !1
        u.scrollingElement &&
          u.documentElement &&
          q.addEventListener &&
          ((w = 50), (A = !0))
        var z = 0,
          B = !1,
          E = function () {
            B
              ? (z = hm(E, w))
              : ((z = 0),
                f(),
                sm('sdl') &&
                  !a() &&
                  (bd(q, 'scroll', G),
                  bd(q, 'resize', G),
                  Ll('sdl', 'init', !1)))
            B = !1
          },
          G = function () {
            A && y()
            z ? (B = !0) : ((z = hm(E, w)), Ll('sdl', 'pending', !0))
          }
        return G
      }
      function k(w, A, z) {
        if (A) {
          var B = b(String(w))
          Ml(
            'sdl',
            z,
            function (E) {
              for (var G = 0; G < B.length; G++) {
                var M = String(B[G])
                E.hasOwnProperty(M) || (E[M] = [])
                E[M].push(A)
              }
              return E
            },
            {}
          )
        }
      }
      function l(w) {
        return Nl('sdl', w, {})
      }
      function n(w) {
        I(w.vtp_gtmOnSuccess)
        var A = w.vtp_uniqueTriggerId,
          z = w.vtp_horizontalThresholdsPixels,
          B = w.vtp_horizontalThresholdsPercent,
          E = w.vtp_verticalThresholdUnits,
          G = w.vtp_verticalThresholdsPixels,
          M = w.vtp_verticalThresholdsPercent
        switch (w.vtp_horizontalThresholdUnits) {
          case r.bc:
            k(z, A, 'horiz.pix')
            break
          case r.ac:
            k(B, A, 'horiz.pct')
        }
        switch (E) {
          case r.bc:
            k(G, A, 'vert.pix')
            break
          case r.ac:
            k(M, A, 'vert.pct')
        }
        sm('sdl')
          ? Nl('sdl', 'pending') ||
            (x || (d(), (x = !0)),
            I(function () {
              return f()
            }))
          : (d(),
            (x = !0),
            v &&
              (tm('sdl'),
              Ll('sdl', 'pending', !0),
              I(function () {
                f()
                if (a()) {
                  var O = h()
                  ad(q, 'scroll', O)
                  ad(q, 'resize', O)
                } else Ll('sdl', 'init', !1)
              })))
      }
      var p = /^\s*$/,
        r = { ac: 'PERCENT', bc: 'PIXELS' },
        t = { Pe: 'vertical', Ce: 'horizontal' },
        q,
        u,
        v,
        x = !1,
        y
      ;(function (w) {
        Y.__sdl = w
        Y.__sdl.b = 'sdl'
        Y.__sdl.g = !0
        Y.__sdl.priorityOverride = 0
      })(function (w) {
        w.vtp_triggerStartOption
          ? n(w)
          : Rk(function () {
              n(w)
            })
      })
    })()

  ;(Y.a.gtagha = ['google']),
    (function () {
      ;(function (a) {
        Y.__gtagha = a
        Y.__gtagha.b = 'gtagha'
        Y.__gtagha.g = !0
        Y.__gtagha.priorityOverride = 0
      })(function (a) {
        I(a.vtp_gtmOnSuccess)
      })
    })()
  ;(Y.a.c = ['google']),
    (function () {
      ;(function (a) {
        Y.__c = a
        Y.__c.b = 'c'
        Y.__c.g = !0
        Y.__c.priorityOverride = 0
      })(function (a) {
        wm(a.vtp_value, 'c', a.vtp_gtmEventId)
        return a.vtp_value
      })
    })()
  ;(Y.a.e = ['google']),
    (function () {
      ;(function (a) {
        Y.__e = a
        Y.__e.b = 'e'
        Y.__e.g = !0
        Y.__e.priorityOverride = 0
      })(function (a) {
        return String(ve(a.vtp_gtmEventId, 'event'))
      })
    })()

  ;(Y.a.u = ['google']),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b
          }
        }
      }
      ;(function (b) {
        Y.__u = b
        Y.__u.b = 'u'
        Y.__u.g = !0
        Y.__u.priorityOverride = 0
      })(function (b) {
        var c
        b.vtp_customUrlSource
          ? (c = b.vtp_customUrlSource)
          : (c = mm('gtm.url', 1))
        c = c || jm()
        var d = b[a('vtp_component')]
        if (!d || 'URL' == d) return lm(String(c))
        var e = He(String(c)),
          f
        if ('QUERY' === d)
          a: {
            var h = b[a('vtp_multiQueryKeys').toString()],
              k = b[a('vtp_queryKey').toString()] || '',
              l = b[a('vtp_ignoreEmptyQueryParam').toString()],
              n
            h
              ? za(k)
                ? (n = k)
                : (n = String(k).replace(/\s+/g, '').split(','))
              : (n = [String(k)])
            for (var p = 0; p < n.length; p++) {
              var r = Fe(e, 'QUERY', void 0, void 0, n[p])
              if (void 0 != r && (!l || '' !== r)) {
                f = r
                break a
              }
            }
            f = void 0
          }
        else
          f = Fe(
            e,
            d,
            'HOST' == d ? b[a('vtp_stripWww')] : void 0,
            'PATH' == d ? b[a('vtp_defaultPages')] : void 0,
            void 0
          )
        return f
      })
    })()
  ;(Y.a.v = ['google']),
    (function () {
      ;(function (a) {
        Y.__v = a
        Y.__v.b = 'v'
        Y.__v.g = !0
        Y.__v.priorityOverride = 0
      })(function (a) {
        var b = a.vtp_name
        if (!b || !b.replace) return !1
        var c = mm(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1),
          d = void 0 !== c ? c : a.vtp_defaultValue
        wm(d, 'v', a.vtp_gtmEventId)
        return d
      })
    })()

  ;(Y.a.ytl = ['google']),
    (function () {
      function a() {
        var v = Math.round(1e9 * Math.random()) + ''
        return H.getElementById(v) ? a() : v
      }
      function b(v, x) {
        if (!v) return !1
        for (var y = 0; y < r.length; y++)
          if (0 <= v.indexOf('//' + r[y] + '/' + x)) return !0
        return !1
      }
      function c(v) {
        var x = -1 !== v.indexOf('?') ? '&' : '?'
        if (-1 < v.indexOf('origin=')) return v + x + 'enablejsapi=1'
        if (!q) {
          var y = V('document')
          q = y.location.protocol + '//' + y.location.hostname
          y.location.port && (q += ':' + y.location.port)
        }
        return v + x + 'enablejsapi=1&origin=' + encodeURIComponent(q)
      }
      function d(v, x) {
        var y = v.getAttribute('src')
        if (b(y, 'embed/')) {
          if (0 < y.indexOf('enablejsapi=1')) return !0
          if (x) return v.setAttribute('src', c(y)), !0
        }
        return !1
      }
      function e(v, x) {
        if (
          !v.getAttribute('data-gtm-yt-inspected-' + x.Jd) &&
          (v.setAttribute('data-gtm-yt-inspected-' + x.Jd, 'true'), d(v, x.$e))
        ) {
          v.id || (v.id = a())
          var y = V('YT'),
            w = y.get(v.id)
          w || (w = new y.Player(v.id))
          var A = h(w, x),
            z = {},
            B
          for (B in A)
            (z.ab = B),
              A.hasOwnProperty(z.ab) &&
                w.addEventListener(
                  z.ab,
                  (function (E) {
                    return function (G) {
                      return A[E.ab](G.data)
                    }
                  })(z)
                ),
              (z = { ab: z.ab })
        }
      }
      function f(v) {
        I(function () {
          function x() {
            for (
              var w = y.getElementsByTagName('iframe'), A = w.length, z = 0;
              z < A;
              z++
            )
              e(w[z], v)
          }
          var y = V('document')
          x()
          Vl(x)
        })
      }
      function h(v, x) {
        var y, w
        function A() {
          ca = fm(
            function () {
              return {
                url: P,
                title: S,
                We: K,
                Sg: v.getCurrentTime(),
                playbackRate: T
              }
            },
            x.Jd,
            v.getIframe()
          )
          K = 0
          S = P = ''
          T = 1
          return z
        }
        function z(U) {
          switch (U) {
            case t.PLAYING:
              K = Math.round(v.getDuration())
              P = v.getVideoUrl()
              if (v.getVideoData) {
                var ka = v.getVideoData()
                S = ka ? ka.title : ''
              }
              T = v.getPlaybackRate()
              x.Mg ? ca.nc('start') : ca.cd()
              J = n(x.Jh, x.Ih, v.getDuration())
              return B(U)
            default:
              return z
          }
        }
        function B() {
          na = v.getCurrentTime()
          R = im().getTime()
          ca.Qh()
          Z()
          return E
        }
        function E(U) {
          var ka
          switch (U) {
            case t.ENDED:
              return M(U)
            case t.PAUSED:
              ka = 'pause'
            case t.BUFFERING:
              var Ka = v.getCurrentTime() - na
              ka =
                1 < Math.abs(((im().getTime() - R) / 1e3) * T - Ka)
                  ? 'seek'
                  : ka || 'buffering'
              v.getCurrentTime() && (x.Lg ? ca.nc(ka) : ca.cd())
              W()
              return G
            case t.UNSTARTED:
              return A(U)
            default:
              return E
          }
        }
        function G(U) {
          switch (U) {
            case t.ENDED:
              return M(U)
            case t.PLAYING:
              return B(U)
            case t.UNSTARTED:
              return A(U)
            default:
              return G
          }
        }
        function M() {
          for (; w; ) {
            var U = y
            gm(w)
            U()
          }
          x.Kg && ca.nc('complete', 1)
          return A(t.UNSTARTED)
        }
        function O() {}
        function W() {
          w && (gm(w), (w = 0), (y = O))
        }
        function Z() {
          if (J.length && 0 !== T) {
            var U = -1,
              ka
            do {
              ka = J[0]
              if (ka.Ka > v.getDuration()) return
              U = (ka.Ka - v.getCurrentTime()) / T
              if (0 > U && (J.shift(), 0 === J.length)) return
            } while (0 > U)
            y = function () {
              w = 0
              y = O
              0 < J.length &&
                J[0].Ka === ka.Ka &&
                (J.shift(), ca.nc('progress', ka.hf, ka.nf))
              Z()
            }
            w = hm(y, 1e3 * U)
          }
        }
        var ca,
          J = [],
          K,
          P,
          S,
          T,
          na,
          R,
          ia = A(t.UNSTARTED)
        w = 0
        y = O
        return {
          onStateChange: function (U) {
            ia = ia(U)
          },
          onPlaybackRateChange: function (U) {
            na = v.getCurrentTime()
            R = im().getTime()
            ca.cd()
            T = U
            W()
            Z()
          }
        }
      }
      function k(v) {
        for (var x = v.split(','), y = x.length, w = [], A = 0; A < y; A++) {
          var z = parseInt(x[A], 10)
          isNaN(z) || 100 < z || 0 > z || w.push(z / 100)
        }
        w.sort(function (B, E) {
          return B - E
        })
        return w
      }
      function l(v) {
        for (var x = v.split(','), y = x.length, w = [], A = 0; A < y; A++) {
          var z = parseInt(x[A], 10)
          isNaN(z) || 0 > z || w.push(z)
        }
        w.sort(function (B, E) {
          return B - E
        })
        return w
      }
      function n(v, x, y) {
        var w = v.map(function (B) {
          return { Ka: B, nf: B, hf: void 0 }
        })
        if (!x.length) return w
        var A = x.map(function (B) {
          return { Ka: B * y, nf: void 0, hf: B }
        })
        if (!w.length) return A
        var z = w.concat(A)
        z.sort(function (B, E) {
          return B.Ka - E.Ka
        })
        return z
      }
      function p(v) {
        var x = !!v.vtp_captureStart,
          y = !!v.vtp_captureComplete,
          w = !!v.vtp_capturePause,
          A = k(v.vtp_progressThresholdsPercent + ''),
          z = l(v.vtp_progressThresholdsTimeInSeconds + ''),
          B = !!v.vtp_fixMissingApi
        if (x || y || w || A.length || z.length) {
          var E = {
              Mg: x,
              Kg: y,
              Lg: w,
              Ih: A,
              Jh: z,
              $e: B,
              Jd: void 0 === v.vtp_uniqueTriggerId ? '' : v.vtp_uniqueTriggerId
            },
            G = V('YT'),
            M = function () {
              f(E)
            }
          I(v.vtp_gtmOnSuccess)
          if (G) G.ready && G.ready(M)
          else {
            var O = V('onYouTubeIframeAPIReady')
            om('onYouTubeIframeAPIReady', function () {
              O && O()
              M()
            })
            I(function () {
              for (
                var W = V('document'),
                  Z = W.getElementsByTagName('script'),
                  ca = Z.length,
                  J = 0;
                J < ca;
                J++
              ) {
                var K = Z[J].getAttribute('src')
                if (b(K, 'iframe_api') || b(K, 'player_api')) return
              }
              for (
                var P = W.getElementsByTagName('iframe'), S = P.length, T = 0;
                T < S;
                T++
              )
                if (!u && d(P[T], E.$e)) {
                  N('https://www.youtube.com/iframe_api')
                  u = !0
                  break
                }
            })
          }
        } else I(v.vtp_gtmOnSuccess)
      }
      var r = ['www.youtube.com', 'www.youtube-nocookie.com'],
        t = {
          UNSTARTED: -1,
          ENDED: 0,
          PLAYING: 1,
          PAUSED: 2,
          BUFFERING: 3,
          CUED: 5
        },
        q,
        u = !1
      ;(function (v) {
        Y.__ytl = v
        Y.__ytl.b = 'ytl'
        Y.__ytl.g = !0
        Y.__ytl.priorityOverride = 0
      })(function (v) {
        v.vtp_triggerStartOption
          ? p(v)
          : dh(function () {
              p(v)
            })
      })
    })()

  ;(Y.a.aev = ['google']),
    (function () {
      function a(q, u) {
        var v = ve(q, 'gtm')
        if (v) return v[u]
      }
      function b(q, u, v, x) {
        x || (x = 'element')
        var y = q + '.' + u,
          w
        if (p.hasOwnProperty(y)) w = p[y]
        else {
          var A = a(q, x)
          if (A && ((w = v(A)), (p[y] = w), r.push(y), 35 < r.length)) {
            var z = r.shift()
            delete p[z]
          }
        }
        return w
      }
      function c(q, u, v) {
        var x = a(q, t[u])
        return void 0 !== x ? x : v
      }
      function d(q, u) {
        if (!q) return !1
        var v = e(jm())
        za(u) ||
          (u = String(u || '')
            .replace(/\s+/g, '')
            .split(','))
        for (var x = [v], y = 0; y < u.length; y++) {
          var w = u[y]
          if (w.hasOwnProperty('is_regex'))
            if (w.is_regex)
              try {
                w = new RegExp(w.domain)
              } catch (z) {
                continue
              }
            else w = w.domain
          if (w instanceof RegExp) {
            if (w.test(q)) return !1
          } else {
            var A = w
            if (0 != A.length) {
              if (0 <= e(q).indexOf(A)) return !1
              x.push(e(A))
            }
          }
        }
        return !bn(q, x)
      }
      function e(q) {
        n.test(q) || (q = 'http://' + q)
        return Fe(He(q), 'HOST', !0)
      }
      function f(q, u, v) {
        switch (q) {
          case 'SUBMIT_TEXT':
            return b(u, 'FORM.' + q, h, 'formSubmitElement') || v
          case 'LENGTH':
            var x = b(u, 'FORM.' + q, k)
            return void 0 === x ? v : x
          case 'INTERACTED_FIELD_ID':
            return l(u, 'id', v)
          case 'INTERACTED_FIELD_NAME':
            return l(u, 'name', v)
          case 'INTERACTED_FIELD_TYPE':
            return l(u, 'type', v)
          case 'INTERACTED_FIELD_POSITION':
            var y = a(u, 'interactedFormFieldPosition')
            return void 0 === y ? v : y
          case 'INTERACT_SEQUENCE_NUMBER':
            var w = a(u, 'interactSequenceNumber')
            return void 0 === w ? v : w
          default:
            return v
        }
      }
      function h(q) {
        switch (q.tagName.toLowerCase()) {
          case 'input':
            return cd(q, 'value')
          case 'button':
            return dd(q)
          default:
            return null
        }
      }
      function k(q) {
        if ('form' === q.tagName.toLowerCase() && q.elements) {
          for (var u = 0, v = 0; v < q.elements.length; v++)
            Ql(q.elements[v]) && u++
          return u
        }
      }
      function l(q, u, v) {
        var x = a(q, 'interactedFormField')
        return (x && cd(x, u)) || v
      }
      var n = /^https?:\/\//i,
        p = {},
        r = [],
        t = {
          ATTRIBUTE: 'elementAttribute',
          CLASSES: 'elementClasses',
          ELEMENT: 'element',
          ID: 'elementId',
          HISTORY_CHANGE_SOURCE: 'historyChangeSource',
          HISTORY_NEW_STATE: 'newHistoryState',
          HISTORY_NEW_URL_FRAGMENT: 'newUrlFragment',
          HISTORY_OLD_STATE: 'oldHistoryState',
          HISTORY_OLD_URL_FRAGMENT: 'oldUrlFragment',
          TARGET: 'elementTarget'
        }
      ;(function (q) {
        Y.__aev = q
        Y.__aev.b = 'aev'
        Y.__aev.g = !0
        Y.__aev.priorityOverride = 0
      })(function (q) {
        var u = q.vtp_gtmEventId,
          v = q.vtp_defaultValue,
          x = q.vtp_varType
        switch (x) {
          case 'TAG_NAME':
            var y = a(u, 'element')
            return (y && y.tagName) || v
          case 'TEXT':
            return b(u, x, dd) || v
          case 'URL':
            var w
            a: {
              var A = String(a(u, 'elementUrl') || v || ''),
                z = He(A),
                B = String(q.vtp_component || 'URL')
              switch (B) {
                case 'URL':
                  w = A
                  break a
                case 'IS_OUTBOUND':
                  w = d(A, q.vtp_affiliatedDomains)
                  break a
                default:
                  w = Fe(
                    z,
                    B,
                    q.vtp_stripWww,
                    q.vtp_defaultPages,
                    q.vtp_queryKey
                  )
              }
            }
            return w
          case 'ATTRIBUTE':
            var E
            if (void 0 === q.vtp_attribute) E = c(u, x, v)
            else {
              var G = q.vtp_attribute,
                M = a(u, 'element')
              E = (M && cd(M, G)) || v || ''
            }
            return E
          case 'MD':
            var O = q.vtp_mdValue,
              W = b(u, 'MD', bm)
            return O && W ? em(W, O) || v : W || v
          case 'FORM':
            return f(String(q.vtp_component || 'SUBMIT_TEXT'), u, v)
          default:
            var Z = c(u, x, v)
            wm(Z, 'aev', q.vtp_gtmEventId)
            return Z
        }
      })
    })()
  ;(Y.a.dlm = ['google']),
    (function () {
      ;(function (a) {
        Y.__dlm = a
        Y.__dlm.b = 'dlm'
        Y.__dlm.g = !0
        Y.__dlm.priorityOverride = 0
      })(function (a) {
        var b = cn(a.vtp_userInput || [], 'key', 'value') || {}
        a.vtp_synchronousWrite
          ? Fa(b, function (c, d) {
              te(c, d)
            })
          : nm(b)
        I(a.vtp_gtmOnSuccess)
      })
    })()
  ;(Y.a.gct = ['google']),
    (function () {
      function a(b) {
        for (var c = [], d = 0; d < b.length; d++)
          try {
            c.push(new RegExp(b[d]))
          } catch (e) {}
        return c
      }
      ;(function (b) {
        Y.__gct = b
        Y.__gct.b = 'gct'
        Y.__gct.g = !0
        Y.__gct.priorityOverride = 0
      })(function (b) {
        var c = {}
        0 < b.vtp_sessionDuration && (c[C.tb] = b.vtp_sessionDuration)
        c[C.Lc] = b.vtp_eventSettings
        c[C.Ic] = b.vtp_dynamicEventSettings
        c[C.nb] = 1 === b.vtp_googleSignals
        c[C.Nc] = b.vtp_foreignTld
        c[C.Xb] = 1 === b.vtp_restrictDomain
        c[C.Qc] = b.vtp_internalTrafficResults
        var d = C.ka,
          e = b.vtp_linker
        e && e[C.D] && (e[C.D] = a(e[C.D]))
        c[d] = e
        var f = C.Sc,
          h = b.vtp_referralExclusionDefinition
        h &&
          h.include_conditions &&
          (h.include_conditions = a(h.include_conditions))
        c[f] = h
        gp(b.vtp_trackingId, c)
        I(b.vtp_gtmOnSuccess)
      })
    })()
  ;(Y.a.gtagaw = ['google']),
    (function () {
      ;(function (a) {
        Y.__gtagaw = a
        Y.__gtagaw.b = 'gtagaw'
        Y.__gtagaw.g = !0
        Y.__gtagaw.priorityOverride = 0
      })(function (a) {
        var b = 'AW-' + String(a.vtp_conversionId)
        Fk(
          String(a.vtp_eventName),
          a.vtp_eventData || {},
          a.vtp_conversionLabel ? b + '/' + String(a.vtp_conversionLabel) : b
        )
        I(a.vtp_gtmOnSuccess)
      })
    })()

  ;(Y.a.get = ['google']),
    (function () {
      ;(function (a) {
        Y.__get = a
        Y.__get.b = 'get'
        Y.__get.g = !0
        Y.__get.priorityOverride = 0
      })(function (a) {
        var b = a.vtp_settings
        ;(a.vtp_deferrable
          ? dp
          : cp)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {})
        a.vtp_gtmOnSuccess()
      })
    })()

  ;(Y.a.gtagfl = []),
    (function () {
      ;(function (a) {
        Y.__gtagfl = a
        Y.__gtagfl.b = 'gtagfl'
        Y.__gtagfl.g = !0
        Y.__gtagfl.priorityOverride = 0
      })(function (a) {
        I(a.vtp_gtmOnSuccess)
      })
    })()

  ;(Y.a.gtaggf = ['google']),
    (function () {
      ;(function (a) {
        Y.__gtaggf = a
        Y.__gtaggf.b = 'gtaggf'
        Y.__gtaggf.g = !0
        Y.__gtaggf.priorityOverride = 0
      })(function (a) {
        I(a.vtp_gtmOnSuccess)
      })
    })()

  ;(Y.a.gtagua = ['google']),
    (function () {
      ;(function (a) {
        Y.__gtagua = a
        Y.__gtagua.b = 'gtagua'
        Y.__gtagua.g = !0
        Y.__gtagua.priorityOverride = 0
      })(function (a) {
        I(a.vtp_gtmOnSuccess)
      })
    })()
  ;(Y.a.lcl = []),
    (function () {
      function a() {
        var c = V('document'),
          d = 0,
          e = function (f) {
            var h = f.target
            if (
              h &&
              3 !== f.which &&
              !(f.oh || (f.timeStamp && f.timeStamp === d))
            ) {
              d = f.timeStamp
              h = fd(h, ['a', 'area'], 100)
              if (!h) return f.returnValue
              var k = f.defaultPrevented || !1 === f.returnValue,
                l = Nl('lcl', k ? 'nv.mwt' : 'mwt', 0),
                n
              n = k ? Nl('lcl', 'nv.ids', []) : Nl('lcl', 'ids', [])
              if (n.length) {
                var p = Jl(h, 'gtm.linkClick', n)
                if (b(f, h, c) && !k && l && h.href) {
                  var r = String(vm(h, 'rel') || ''),
                    t = !!Ba(r.split(' '), function (v) {
                      return 'noreferrer' === v.toLowerCase()
                    })
                  t && D(36)
                  var q = V((vm(h, 'target') || '_self').substring(1)),
                    u = !0
                  if (
                    nm(
                      p,
                      Al(function () {
                        var v
                        if ((v = u && q)) {
                          var x
                          a: if (t) {
                            var y
                            try {
                              y = new MouseEvent(f.type)
                            } catch (w) {
                              if (!c.createEvent) {
                                x = !1
                                break a
                              }
                              y = c.createEvent('MouseEvents')
                              y.initEvent(f.type, !0, !0)
                            }
                            y.oh = !0
                            f.target.dispatchEvent(y)
                            x = !0
                          } else x = !1
                          v = !x
                        }
                        v && (q.location.href = vm(h, 'href'))
                      }),
                      l
                    )
                  )
                    u = !1
                  else
                    return (
                      f.preventDefault && f.preventDefault(),
                      (f.returnValue = !1)
                    )
                } else nm(p, function () {}, l || 2e3)
                return !0
              }
            }
          }
        ad(c, 'click', e, !1)
        ad(c, 'auxclick', e, !1)
      }
      function b(c, d, e) {
        if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey)
          return !1
        var f = vm(d, 'href'),
          h = f.indexOf('#'),
          k = vm(d, 'target')
        if ((k && '_self' !== k && '_parent' !== k && '_top' !== k) || 0 === h)
          return !1
        if (0 < h) {
          var l = lm(f),
            n = lm(e.location)
          return l !== n
        }
        return !0
      }
      ;(function (c) {
        Y.__lcl = c
        Y.__lcl.b = 'lcl'
        Y.__lcl.g = !0
        Y.__lcl.priorityOverride = 0
      })(function (c) {
        var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
          e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
          f = Number(c.vtp_waitForTagsTimeout)
        if (!f || 0 >= f) f = 2e3
        var h = c.vtp_uniqueTriggerId || '0'
        if (d) {
          var k = function (n) {
            return Math.max(f, n)
          }
          Ml('lcl', 'mwt', k, 0)
          e || Ml('lcl', 'nv.mwt', k, 0)
        }
        var l = function (n) {
          n.push(h)
          return n
        }
        Ml('lcl', 'ids', l, [])
        e || Ml('lcl', 'nv.ids', l, [])
        sm('lcl') || (a(), tm('lcl'))
        I(c.vtp_gtmOnSuccess)
      })
    })()

  var hp = {}
  ;(hp.macro = function (a) {
    if (Gl.$c.hasOwnProperty(a)) return Gl.$c[a]
  }),
    (hp.onHtmlSuccess = Gl.Ve(!0)),
    (hp.onHtmlFailure = Gl.Ve(!1))
  hp.dataLayer = re
  hp.callback = function (a) {
    ie.hasOwnProperty(a) && xa(ie[a]) && ie[a]()
    delete ie[a]
  }
  hp.bootstrap = 0
  hp._spx = !1
  function ip() {
    L[Yd.B] = hp
    Oa(je, Y.a)
    Ib = Ib || Gl
    Jb = Wb
  }
  function jp() {
    id.gtm_3pds = !0
    id.gtag_cs_api = !0
    L = F.google_tag_manager = F.google_tag_manager || {}
    ej()
    if (L[Yd.B]) {
      var a = L.zones
      a && a.unregisterChild(Yd.B)
    } else {
      for (
        var b = data.resource || {}, c = b.macros || [], d = 0;
        d < c.length;
        d++
      )
        Bb.push(c[d])
      for (var e = b.tags || [], f = 0; f < e.length; f++) Eb.push(e[f])
      for (var h = b.predicates || [], k = 0; k < h.length; k++) Db.push(h[k])
      for (var l = b.rules || [], n = 0; n < l.length; n++) {
        for (var p = l[n], r = {}, t = 0; t < p.length; t++)
          r[p[t][0]] = Array.prototype.slice.call(p[t], 1)
        Cb.push(r)
      }
      Gb = Y
      Hb = Xm
      ip()
      Fl()
      Zg = !1
      $g = 0
      if (
        ('interactive' == H.readyState && !H.createEventObject) ||
        'complete' == H.readyState
      )
        bh()
      else {
        ad(H, 'DOMContentLoaded', bh)
        ad(H, 'readystatechange', bh)
        if (H.createEventObject && H.documentElement.doScroll) {
          var q = !0
          try {
            q = !F.frameElement
          } catch (w) {}
          q && ch()
        }
        ad(F, 'load', bh)
      }
      Ok = !1
      'complete' === H.readyState ? Qk() : ad(F, 'load', Qk)
      a: {
        if (!Wh) break a
        F.setInterval(Xh, 864e5)
      }
      ge = new Date().getTime()
      hp.bootstrap = ge
    }
  }
  ;(function (a) {
    var e = !0
    e = !1
    e = !1
    if (e) {
      a()
      return
    }
    var f = function () {
        var n = F['google.tagmanager.debugui2.queue']
        n ||
          ((n = []),
          (F['google.tagmanager.debugui2.queue'] = n),
          Xc('https://www.googletagmanager.com/debug/bootstrap'))
        return n
      },
      h = 'x' === Fe(F.location, 'query', !1, void 0, 'gtm_debug')
    if (!h && H.referrer) {
      var k = He(H.referrer)
      h = 'tagassistant.google.com' === Ee(k, 'host')
    }
    if (!h) {
      var l = Le('__TAG_ASSISTANT')
      h = l.length && l[0].length
    }
    F.__TAG_ASSISTANT_API && (h = !0)
    if (h && Uc) {
      f().push({
        messageType: 'CONTAINER_STARTING',
        data: {
          scriptSource: Uc,
          resume: function () {
            a()
          }
        }
      })
      return
    }
    a()
  })(jp)
})()

export function gtag() {
  dataLayer.push(arguments)
}
