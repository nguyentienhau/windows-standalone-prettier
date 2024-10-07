var rs = Object.defineProperty;
var Fr = (t) => {
	throw TypeError(t);
};
var zt = (t, e) => {
	for (var r in e) rs(t, r, { get: e[r], enumerable: !0 });
};
var Mr = (t, e, r) => e.has(t) || Fr("Cannot " + r);
var $ = (t, e, r) => (Mr(t, e, "read from private field"), r ? r.call(t) : e.get(t)),
	Gt = (t, e, r) => (e.has(t) ? Fr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r)),
	Yt = (t, e, r, n) => (Mr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
var Rr = {};
zt(Rr, { languages: () => Sn, parsers: () => Ir, printers: () => pa });
var ns = (t, e, r, n) => {
		if (!(t && e == null)) return e.replaceAll ? e.replaceAll(r, n) : r.global ? e.replace(r, n) : e.split(r).join(n);
	},
	Kt = ns;
var ze = "string",
	Ge = "array",
	Ye = "cursor",
	Le = "indent",
	_e = "align",
	Ke = "trim",
	De = "group",
	Oe = "fill",
	Be = "if-break",
	We = "indent-if-break",
	$e = "line-suffix",
	je = "line-suffix-boundary",
	ee = "line",
	Qe = "label",
	Ie = "break-parent",
	ft = new Set([Ye, Le, _e, Ke, De, Oe, Be, We, $e, je, ee, Qe, Ie]);
function ss(t) {
	if (typeof t == "string") return ze;
	if (Array.isArray(t)) return Ge;
	if (!t) return;
	let { type: e } = t;
	if (ft.has(e)) return e;
}
var Xe = ss;
var is = (t) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t);
function as(t) {
	let e = t === null ? "null" : typeof t;
	if (e !== "string" && e !== "object")
		return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
	if (Xe(t)) throw new Error("doc is valid.");
	let r = Object.prototype.toString.call(t);
	if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
	let n = is([...ft].map((s) => `'${s}'`));
	return `Unexpected doc.type '${t.type}'.
Expected it to be ${n}.`;
}
var Wt = class extends Error {
		name = "InvalidDocError";
		constructor(e) {
			super(as(e)), (this.doc = e);
		}
	},
	$t = Wt;
var zr = () => {},
	be = zr,
	dt = zr;
function R(t) {
	return be(t), { type: Le, contents: t };
}
function os(t, e) {
	return be(e), { type: _e, contents: e, n: t };
}
function q(t, e = {}) {
	return (
		be(t),
		dt(e.expandedStates, !0),
		{
			type: De,
			id: e.id,
			contents: t,
			break: !!e.shouldBreak,
			expandedStates: e.expandedStates,
		}
	);
}
function jt(t) {
	return os(-1, t);
}
function Qt(t) {
	return dt(t), { type: Oe, parts: t };
}
function Xt(t, e = "", r = {}) {
	return be(t), e !== "" && be(e), { type: Be, breakContents: t, flatContents: e, groupId: r.groupId };
}
var Gr = { type: Ie };
var ls = { type: ee, hard: !0 },
	cs = { type: ee, hard: !0, literal: !0 },
	D = { type: ee },
	Y = { type: ee, soft: !0 },
	ye = [ls, Gr],
	Yr = [cs, Gr];
function Ee(t, e) {
	be(t), dt(e);
	let r = [];
	for (let n = 0; n < e.length; n++) n !== 0 && r.push(t), r.push(e[n]);
	return r;
}
var us = (t, e, r) => {
		if (!(t && e == null)) return Array.isArray(e) || typeof e == "string" ? e[r < 0 ? e.length + r : r] : e.at(r);
	},
	oe = us;
function hs(t, e) {
	if (typeof t == "string") return e(t);
	let r = new Map();
	return n(t);
	function n(i) {
		if (r.has(i)) return r.get(i);
		let a = s(i);
		return r.set(i, a), a;
	}
	function s(i) {
		switch (Xe(i)) {
			case Ge:
				return e(i.map(n));
			case Oe:
				return e({ ...i, parts: i.parts.map(n) });
			case Be:
				return e({
					...i,
					breakContents: n(i.breakContents),
					flatContents: n(i.flatContents),
				});
			case De: {
				let { expandedStates: a, contents: o } = i;
				return a ? ((a = a.map(n)), (o = a[0])) : (o = n(o)), e({ ...i, contents: o, expandedStates: a });
			}
			case _e:
			case Le:
			case We:
			case Qe:
			case $e:
				return e({ ...i, contents: n(i.contents) });
			case ze:
			case Ye:
			case Ke:
			case je:
			case ee:
			case Ie:
				return e(i);
			default:
				throw new $t(i);
		}
	}
}
function Kr(t, e = Yr) {
	return hs(t, (r) =>
		typeof r == "string"
			? Ee(
					e,
					r.split(`
`),
				)
			: r,
	);
}
var mt = "'",
	Wr = '"';
function ps(t, e) {
	let r = e === !0 || e === mt ? mt : Wr,
		n = r === mt ? Wr : mt,
		s = 0,
		i = 0;
	for (let a of t) a === r ? s++ : a === n && i++;
	return s > i ? n : r;
}
var gt = ps;
function Jt(t) {
	if (typeof t != "string") throw new TypeError("Expected a string");
	return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var G,
	Zt = class {
		constructor(e) {
			Gt(this, G);
			Yt(this, G, new Set(e));
		}
		getLeadingWhitespaceCount(e) {
			let r = $(this, G),
				n = 0;
			for (let s = 0; s < e.length && r.has(e.charAt(s)); s++) n++;
			return n;
		}
		getTrailingWhitespaceCount(e) {
			let r = $(this, G),
				n = 0;
			for (let s = e.length - 1; s >= 0 && r.has(e.charAt(s)); s--) n++;
			return n;
		}
		getLeadingWhitespace(e) {
			let r = this.getLeadingWhitespaceCount(e);
			return e.slice(0, r);
		}
		getTrailingWhitespace(e) {
			let r = this.getTrailingWhitespaceCount(e);
			return e.slice(e.length - r);
		}
		hasLeadingWhitespace(e) {
			return $(this, G).has(e.charAt(0));
		}
		hasTrailingWhitespace(e) {
			return $(this, G).has(oe(!1, e, -1));
		}
		trimStart(e) {
			let r = this.getLeadingWhitespaceCount(e);
			return e.slice(r);
		}
		trimEnd(e) {
			let r = this.getTrailingWhitespaceCount(e);
			return e.slice(0, e.length - r);
		}
		trim(e) {
			return this.trimEnd(this.trimStart(e));
		}
		split(e, r = !1) {
			let n = `[${Jt([...$(this, G)].join(""))}]+`,
				s = new RegExp(r ? `(${n})` : n, "u");
			return e.split(s);
		}
		hasWhitespaceCharacter(e) {
			let r = $(this, G);
			return Array.prototype.some.call(e, (n) => r.has(n));
		}
		hasNonWhitespaceCharacter(e) {
			let r = $(this, G);
			return Array.prototype.some.call(e, (n) => !r.has(n));
		}
		isWhitespaceOnly(e) {
			let r = $(this, G);
			return Array.prototype.every.call(e, (n) => r.has(n));
		}
	};
G = new WeakMap();
var $r = Zt;
var fs = [
		"	",
		`
`,
		"\f",
		"\r",
		" ",
	],
	ds = new $r(fs),
	K = ds;
function ms(t) {
	return Array.isArray(t) && t.length > 0;
}
var Je = ms;
var er = class extends Error {
		name = "UnexpectedNodeError";
		constructor(e, r, n = "type") {
			super(`Unexpected ${r} node ${n}: ${JSON.stringify(e[n])}.`), (this.node = e);
		}
	},
	jr = er;
function Qr(t, e) {
	if (t.type === "TextNode") {
		let r = t.chars.trim();
		if (!r) return null;
		e.chars = K.split(r).join(" ");
	}
	t.type === "ElementNode" && (delete e.startTag, delete e.openTag, delete e.parts, delete e.endTag, delete e.closeTag, delete e.nameNode, delete e.body, delete e.blockParamNodes, delete e.params, delete e.path), t.type === "Block" && (delete e.blockParamNodes, delete e.params), t.type === "AttrNode" && t.name.toLowerCase() === "class" && delete e.value, t.type === "PathExpression" && (e.head = t.head.original);
}
Qr.ignoredProperties = new Set(["loc", "selfClosing"]);
var Xr = Qr;
var Ze = null;
function et(t) {
	if (Ze !== null && typeof Ze.property) {
		let e = Ze;
		return (Ze = et.prototype = null), e;
	}
	return (Ze = et.prototype = t ?? Object.create(null)), new et();
}
var gs = 10;
for (let t = 0; t <= gs; t++) et();
function tr(t) {
	return et(t);
}
function bs(t, e = "type") {
	tr(t);
	function r(n) {
		let s = n[e],
			i = t[s];
		if (!Array.isArray(i))
			throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), {
				node: n,
			});
		return i;
	}
	return r;
}
var Jr = bs;
var Zr = {
	Template: ["body"],
	Block: ["body"],
	MustacheStatement: ["path", "params", "hash"],
	BlockStatement: ["path", "params", "hash", "program", "inverse"],
	ElementModifierStatement: ["path", "params", "hash"],
	CommentStatement: [],
	MustacheCommentStatement: [],
	ElementNode: ["attributes", "modifiers", "children", "comments"],
	AttrNode: ["value"],
	TextNode: [],
	ConcatStatement: ["parts"],
	SubExpression: ["path", "params", "hash"],
	PathExpression: [],
	StringLiteral: [],
	BooleanLiteral: [],
	NumberLiteral: [],
	NullLiteral: [],
	UndefinedLiteral: [],
	Hash: ["pairs"],
	HashPair: ["value"],
};
var ys = Jr(Zr),
	en = ys;
function Se(t) {
	return t.loc.start.offset;
}
function tt(t) {
	return t.loc.end.offset;
}
var tn = new Set(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function nn(t) {
	return t.toUpperCase() === t;
}
function Es(t) {
	return t.type === "ElementNode" && typeof t.tag == "string" && !t.tag.startsWith(":") && (nn(t.tag[0]) || t.tag.includes("."));
}
function Ss(t) {
	return tn.has(t.toLowerCase()) && !nn(t[0]);
}
function rr(t) {
	return t.selfClosing === !0 || Ss(t.tag) || (Es(t) && t.children.every((e) => bt(e)));
}
function bt(t) {
	return t.type === "TextNode" && !/\S/u.test(t.chars);
}
function rn(t) {
	return (t == null ? void 0 : t.type) === "MustacheCommentStatement" && typeof t.value == "string" && t.value.trim() === "prettier-ignore";
}
function sn(t) {
	return rn(t.node) || (t.isInArray && (t.key === "children" || t.key === "body" || t.key === "parts") && rn(t.siblings[t.index - 2]));
}
var fn = 2;
function ws(t, e, r) {
	var s, i, a, o, c, p, h, d, N;
	let { node: n } = t;
	switch (n.type) {
		case "Block":
		case "Program":
		case "Template":
			return q(t.map(r, "body"));
		case "ElementNode": {
			let g = q(Ts(t, r)),
				T = e.htmlWhitespaceSensitivity === "ignore" && ((s = t.next) == null ? void 0 : s.type) === "ElementNode" ? Y : "";
			if (rr(n)) return [g, T];
			let x = ["</", n.tag, ">"];
			return n.children.length === 0 ? [g, R(x), T] : e.htmlWhitespaceSensitivity === "ignore" ? [g, R(an(t, e, r)), ye, R(x), T] : [g, R(q(an(t, e, r))), R(x), T];
		}
		case "BlockStatement":
			return Cs(t) ? [Ls(t, r), cn(t, r, e), un(t, r, e)] : [Ps(t, r), q([cn(t, r, e), un(t, r, e), _s(t, r, e)])];
		case "ElementModifierStatement":
			return q(["{{", pn(t, r), "}}"]);
		case "MustacheStatement":
			return q([yt(n), pn(t, r), Et(n)]);
		case "SubExpression":
			return q(["(", Hs(t, r), Y, ")"]);
		case "AttrNode": {
			let { name: g, value: T } = n,
				x = T.type === "TextNode";
			if (x && T.chars === "" && Se(T) === tt(T)) return g;
			let v = x ? gt(T.chars, e.singleQuote) : T.type === "ConcatStatement" ? gt(T.parts.map((H) => (H.type === "TextNode" ? H.chars : "")).join(""), e.singleQuote) : "",
				M = r("value");
			return [g, "=", v, g === "class" && v ? q(R(M)) : M, v];
		}
		case "ConcatStatement":
			return t.map(r, "parts");
		case "Hash":
			return Ee(D, t.map(r, "pairs"));
		case "HashPair":
			return [n.key, "=", r("value")];
		case "TextNode": {
			let g = Kt(!1, n.chars, "{{", String.raw`\{{`),
				T = Os(t);
			if (T) {
				if (T === "class") {
					let J = g.trim().split(/\s+/u).join(" "),
						re = !1,
						V = !1;
					return t.parent.type === "ConcatStatement" && (((i = t.previous) == null ? void 0 : i.type) === "MustacheStatement" && /^\s/u.test(g) && (re = !0), ((a = t.next) == null ? void 0 : a.type) === "MustacheStatement" && /\s$/u.test(g) && J !== "" && (V = !0)), [re ? D : "", J, V ? D : ""];
				}
				return Kr(g);
			}
			let x = K.isWhitespaceOnly(g),
				{ isFirst: C, isLast: v } = t;
			if (e.htmlWhitespaceSensitivity !== "ignore") {
				let J = v && t.parent.type === "Template",
					re = C && t.parent.type === "Template";
				if (x) {
					if (re || J) return "";
					let _ = [D],
						se = Re(g);
					return se && (_ = rt(se)), v && (_ = _.map((ut) => jt(ut))), _;
				}
				let V = K.getLeadingWhitespace(g),
					Pe = [];
				if (V) {
					Pe = [D];
					let _ = Re(V);
					_ && (Pe = rt(_)), (g = g.slice(V.length));
				}
				let U = K.getTrailingWhitespace(g),
					ne = [];
				if (U) {
					if (!J) {
						ne = [D];
						let _ = Re(U);
						_ && (ne = rt(_)), v && (ne = ne.map((se) => jt(se)));
					}
					g = g.slice(0, -U.length);
				}
				return [...Pe, Qt(hn(g)), ...ne];
			}
			let M = Re(g),
				H = Bs(g),
				X = Is(g);
			if ((C || v) && x && (t.parent.type === "Block" || t.parent.type === "ElementNode" || t.parent.type === "Template")) return "";
			x && M ? ((H = Math.min(M, fn)), (X = 0)) : ((((o = t.next) == null ? void 0 : o.type) === "BlockStatement" || ((c = t.next) == null ? void 0 : c.type) === "ElementNode") && (X = Math.max(X, 1)), (((p = t.previous) == null ? void 0 : p.type) === "BlockStatement" || ((h = t.previous) == null ? void 0 : h.type) === "ElementNode") && (H = Math.max(H, 1)));
			let ve = "",
				Ae = "";
			return X === 0 && ((d = t.next) == null ? void 0 : d.type) === "MustacheStatement" && (Ae = " "), H === 0 && ((N = t.previous) == null ? void 0 : N.type) === "MustacheStatement" && (ve = " "), C && ((H = 0), (ve = "")), v && ((X = 0), (Ae = "")), K.hasLeadingWhitespace(g) && (g = ve + K.trimStart(g)), K.hasTrailingWhitespace(g) && (g = K.trimEnd(g) + Ae), [...rt(H), Qt(hn(g)), ...rt(X)];
		}
		case "MustacheCommentStatement": {
			let g = Se(n),
				T = tt(n),
				x = e.originalText.charAt(g + 2) === "~",
				C = e.originalText.charAt(T - 3) === "~",
				v = n.value.includes("}}") ? "--" : "";
			return ["{{", x ? "~" : "", "!", v, n.value, v, C ? "~" : "", "}}"];
		}
		case "PathExpression":
			return Ms(n);
		case "BooleanLiteral":
			return String(n.value);
		case "CommentStatement":
			return ["<!--", n.value, "-->"];
		case "StringLiteral":
			return Rs(t, e);
		case "NumberLiteral":
			return String(n.value);
		case "UndefinedLiteral":
			return "undefined";
		case "NullLiteral":
			return "null";
		case "AtHead":
		case "VarHead":
		case "ThisHead":
		default:
			throw new jr(n, "Handlebars");
	}
}
function ks(t, e) {
	return Se(t) - Se(e);
}
function Ts(t, e) {
	let { node: r } = t,
		n = ["attributes", "modifiers", "comments"].filter((i) => Je(r[i])),
		s = n.flatMap((i) => r[i]).sort(ks);
	for (let i of n)
		t.each(({ node: a }) => {
			let o = s.indexOf(a);
			s.splice(o, 1, [D, e()]);
		}, i);
	return Je(r.blockParams) && s.push(D, sr(r)), ["<", r.tag, R(s), Ns(r)];
}
function an(t, e, r) {
	let { node: n } = t,
		s = n.children.every((i) => bt(i));
	return e.htmlWhitespaceSensitivity === "ignore" && s
		? ""
		: t.map(({ isFirst: i }) => {
				let a = r();
				return i && e.htmlWhitespaceSensitivity === "ignore" ? [Y, a] : a;
			}, "children");
}
function Ns(t) {
	return rr(t) ? Xt([Y, "/>"], [" />", Y]) : Xt([Y, ">"], ">");
}
function yt(t) {
	var n;
	let e = t.trusting ? "{{{" : "{{",
		r = (n = t.strip) != null && n.open ? "~" : "";
	return [e, r];
}
function Et(t) {
	var n;
	let e = t.trusting ? "}}}" : "}}";
	return [(n = t.strip) != null && n.close ? "~" : "", e];
}
function vs(t) {
	let e = yt(t),
		r = t.openStrip.open ? "~" : "";
	return [e, r, "#"];
}
function As(t) {
	let e = Et(t);
	return [t.openStrip.close ? "~" : "", e];
}
function on(t) {
	let e = yt(t),
		r = t.closeStrip.open ? "~" : "";
	return [e, r, "/"];
}
function ln(t) {
	let e = Et(t);
	return [t.closeStrip.close ? "~" : "", e];
}
function dn(t) {
	let e = yt(t),
		r = t.inverseStrip.open ? "~" : "";
	return [e, r];
}
function mn(t) {
	let e = Et(t);
	return [t.inverseStrip.close ? "~" : "", e];
}
function Ps(t, e) {
	let { node: r } = t,
		n = [],
		s = St(t, e);
	return s && n.push(q(s)), Je(r.program.blockParams) && n.push(sr(r.program)), q([vs(r), nr(t, e), n.length > 0 ? R([D, Ee(D, n)]) : "", Y, As(r)]);
}
function xs(t, e) {
	return [e.htmlWhitespaceSensitivity === "ignore" ? ye : "", dn(t), "else", mn(t)];
}
var gn = (t, e) => t.head.type === "VarHead" && e.head.type === "VarHead" && t.head.name === e.head.name;
function Cs(t) {
	var n;
	let { grandparent: e, node: r } = t;
	return ((n = e == null ? void 0 : e.inverse) == null ? void 0 : n.body.length) === 1 && e.inverse.body[0] === r && gn(e.inverse.body[0].path, e.path);
}
function Ls(t, e) {
	let { node: r, grandparent: n } = t;
	return q([dn(n), ["else", " ", n.inverse.body[0].path.head.name], R([D, q(St(t, e)), ...(Je(r.program.blockParams) ? [D, sr(r.program)] : [])]), Y, mn(n)]);
}
function _s(t, e, r) {
	let { node: n } = t;
	return r.htmlWhitespaceSensitivity === "ignore" ? [bn(n) ? Y : ye, on(n), e("path"), ln(n)] : [on(n), e("path"), ln(n)];
}
function bn(t) {
	return t.type === "BlockStatement" && t.program.body.every((e) => bt(e));
}
function Ds(t) {
	return yn(t) && t.inverse.body.length === 1 && t.inverse.body[0].type === "BlockStatement" && gn(t.inverse.body[0].path, t.path);
}
function yn(t) {
	return t.type === "BlockStatement" && t.inverse;
}
function cn(t, e, r) {
	let { node: n } = t;
	if (bn(n)) return "";
	let s = e("program");
	return r.htmlWhitespaceSensitivity === "ignore" ? R([ye, s]) : R(s);
}
function un(t, e, r) {
	let { node: n } = t,
		s = e("inverse"),
		i = r.htmlWhitespaceSensitivity === "ignore" ? [ye, s] : s;
	return Ds(n) ? i : yn(n) ? [xs(n, r), R(i)] : "";
}
function hn(t) {
	return Ee(D, K.split(t));
}
function Os(t) {
	for (let e = 0; e < 2; e++) {
		let r = t.getParentNode(e);
		if ((r == null ? void 0 : r.type) === "AttrNode") return r.name.toLowerCase();
	}
}
function Re(t) {
	return (
		(t = typeof t == "string" ? t : ""),
		t.split(`
`).length - 1
	);
}
function Bs(t) {
	t = typeof t == "string" ? t : "";
	let e = (t.match(/^([^\S\n\r]*[\n\r])+/gu) || [])[0] || "";
	return Re(e);
}
function Is(t) {
	t = typeof t == "string" ? t : "";
	let e = (t.match(/([\n\r][^\S\n\r]*)+$/gu) || [])[0] || "";
	return Re(e);
}
function rt(t = 0) {
	return Array.from({ length: Math.min(t, fn) }).fill(ye);
}
function Rs(t, e) {
	let {
			node: { value: r },
		} = t,
		n = gt(r, qs(t) ? !e.singleQuote : e.singleQuote);
	return [n, Kt(!1, r, n, `\\${n}`), n];
}
function qs(t) {
	let { ancestors: e } = t,
		r = e.findIndex((n) => n.type !== "SubExpression");
	return r !== -1 && e[r + 1].type === "ConcatStatement" && e[r + 2].type === "AttrNode";
}
function Hs(t, e) {
	let r = nr(t, e),
		n = St(t, e);
	return n ? R([r, D, q(n)]) : r;
}
function pn(t, e) {
	let r = nr(t, e),
		n = St(t, e);
	return n ? [R([r, D, n]), Y] : r;
}
function nr(t, e) {
	return e("path");
}
function St(t, e) {
	var s;
	let { node: r } = t,
		n = [];
	return r.params.length > 0 && n.push(...t.map(e, "params")), ((s = r.hash) == null ? void 0 : s.pairs.length) > 0 && n.push(e("hash")), n.length === 0 ? "" : Ee(D, n);
}
function sr(t) {
	return ["as |", t.blockParams.join(" "), "|"];
}
var Vs = new Set("!\"#%&'()*+,./;<=>@[\\]^`{|}~"),
	Us = new Set(["true", "false", "null", "undefined"]),
	Fs = (t, e) => (e === 0 && t.startsWith("@") ? !1 : (e !== 0 && Us.has(t)) || /\s/u.test(t) || /^\d/u.test(t) || Array.prototype.some.call(t, (r) => Vs.has(r)));
function Ms(t) {
	return t.tail.length === 0 && t.original.includes("/") ? t.original : [t.head.original, ...t.tail].map((r, n) => (Fs(r, n) ? `[${r}]` : r)).join(".");
}
var zs = {
		print: ws,
		massageAstNode: Xr,
		hasPrettierIgnore: sn,
		getVisitorKeys: en,
	},
	En = zs;
var Sn = [
	{
		linguistLanguageId: 155,
		name: "Handlebars",
		type: "markup",
		color: "#f7931e",
		aliases: ["hbs", "htmlbars"],
		extensions: [".handlebars", ".hbs"],
		tmScope: "text.html.handlebars",
		aceMode: "handlebars",
		parsers: ["glimmer"],
		vscodeLanguageIds: ["handlebars"],
	},
];
var Ir = {};
zt(Ir, { glimmer: () => ha });
var Gs = Object.freeze([]);
function kn() {
	return Gs;
}
var Po = kn(),
	xo = kn();
function w(t, e) {
	if (!t) throw new Error(e || "assertion failure");
}
function F(t) {
	Js.warn(`DEPRECATION: ${t}`);
}
function kt(t) {
	if (t == null) throw new Error("Expected value to be present");
	return t;
}
function Tn(t, e) {
	if (t == null) throw new Error(e);
	return t;
}
function we(t) {
	return t.length > 0;
}
function Tt(t, e = "unexpected empty list") {
	if (!we(t)) throw new Error(e);
}
function qe(t, e = "unexpected empty list") {
	return Tt(t, e), t;
}
function Nt(t) {
	return t.length === 0 ? void 0 : t[t.length - 1];
}
function Nn(t) {
	return t.length === 0 ? void 0 : t[0];
}
var Ys;
if (!1) {
	let t = (n) => {
			let s = n.name;
			if (s === void 0) {
				let i = /function (\w+)\s*\(/u.exec(String(n));
				s = (i && i[1]) || "";
			}
			return s.replace(/^bound /u, "");
		},
		e = (n) => {
			let s, i;
			return n.constructor && typeof n.constructor == "function" && (i = t(n.constructor)), "toString" in n && n.toString !== Object.prototype.toString && n.toString !== Function.prototype.toString && (s = n.toString()), s && /<.*:ember\d+>/u.test(s) && i && i[0] !== "_" && i.length > 2 && i !== "Class" ? s.replace(/<.*:/u, `<${i}:`) : s || i;
		},
		r = (n) => String(n);
	Ys = (n) => (typeof n == "function" ? t(n) || "(unknown function)" : typeof n == "object" && n !== null ? e(n) || "(unknown object)" : r(n));
}
var ir = (function (t) {
	return (t[(t.MAX_SMI = 1073741823)] = "MAX_SMI"), (t[(t.MIN_SMI = -1073741824)] = "MIN_SMI"), (t[(t.SIGN_BIT = -536870913)] = "SIGN_BIT"), (t[(t.MAX_INT = 536870911)] = "MAX_INT"), (t[(t.MIN_INT = -536870912)] = "MIN_INT"), (t[(t.FALSE_HANDLE = 0)] = "FALSE_HANDLE"), (t[(t.TRUE_HANDLE = 1)] = "TRUE_HANDLE"), (t[(t.NULL_HANDLE = 2)] = "NULL_HANDLE"), (t[(t.UNDEFINED_HANDLE = 3)] = "UNDEFINED_HANDLE"), (t[(t.ENCODED_FALSE_HANDLE = 0)] = "ENCODED_FALSE_HANDLE"), (t[(t.ENCODED_TRUE_HANDLE = 1)] = "ENCODED_TRUE_HANDLE"), (t[(t.ENCODED_NULL_HANDLE = 2)] = "ENCODED_NULL_HANDLE"), (t[(t.ENCODED_UNDEFINED_HANDLE = 3)] = "ENCODED_UNDEFINED_HANDLE"), t;
})({});
function Ks(t) {
	return t & ir.SIGN_BIT;
}
function Ws(t) {
	return t | ~ir.SIGN_BIT;
}
function $s(t) {
	return ~t;
}
function js(t) {
	return ~t;
}
function Qs(t) {
	return (t |= 0), t < 0 ? Ks(t) : $s(t);
}
function Xs(t) {
	return (t |= 0), t > ir.SIGN_BIT ? js(t) : Ws(t);
}
[1, -1].forEach((t) => Xs(Qs(t)));
var ar = Object.assign;
var Js = console,
	wn = console;
function vn(t, e = "unexpected unreachable branch") {
	throw (wn.log("unreachable", t), wn.log(`${e} :: ${JSON.stringify(t)} (${t})`), new Error("code reached unreachable"));
}
var Zs = (function () {
		var t = function (ie, m, E, b) {
				for (E = E || {}, b = ie.length; b--; E[ie[b]] = m);
				return E;
			},
			e = [2, 44],
			r = [1, 20],
			n = [5, 14, 15, 19, 29, 34, 39, 44, 47, 48, 52, 56, 60],
			s = [1, 35],
			i = [1, 38],
			a = [1, 30],
			o = [1, 31],
			c = [1, 32],
			p = [1, 33],
			h = [1, 34],
			d = [1, 37],
			N = [14, 15, 19, 29, 34, 39, 44, 47, 48, 52, 56, 60],
			g = [14, 15, 19, 29, 34, 44, 47, 48, 52, 56, 60],
			T = [15, 18],
			x = [14, 15, 19, 29, 34, 47, 48, 52, 56, 60],
			C = [33, 64, 71, 79, 80, 81, 82, 83, 84],
			v = [23, 33, 55, 64, 67, 71, 74, 79, 80, 81, 82, 83, 84],
			M = [1, 51],
			H = [23, 33, 55, 64, 67, 71, 74, 79, 80, 81, 82, 83, 84, 86],
			X = [2, 43],
			ve = [55, 64, 71, 79, 80, 81, 82, 83, 84],
			Ae = [1, 58],
			J = [1, 59],
			re = [1, 66],
			V = [33, 64, 71, 74, 79, 80, 81, 82, 83, 84],
			Pe = [23, 64, 71, 79, 80, 81, 82, 83, 84],
			U = [1, 76],
			ne = [64, 67, 71, 79, 80, 81, 82, 83, 84],
			_ = [33, 74],
			se = [23, 33, 55, 67, 71, 74],
			ut = [1, 106],
			It = [1, 118],
			qr = [71, 76],
			Rt = {
				trace: function () {},
				yy: {},
				symbols_: {
					error: 2,
					root: 3,
					program: 4,
					EOF: 5,
					program_repetition0: 6,
					statement: 7,
					mustache: 8,
					block: 9,
					rawBlock: 10,
					partial: 11,
					partialBlock: 12,
					content: 13,
					COMMENT: 14,
					CONTENT: 15,
					openRawBlock: 16,
					rawBlock_repetition0: 17,
					END_RAW_BLOCK: 18,
					OPEN_RAW_BLOCK: 19,
					helperName: 20,
					openRawBlock_repetition0: 21,
					openRawBlock_option0: 22,
					CLOSE_RAW_BLOCK: 23,
					openBlock: 24,
					block_option0: 25,
					closeBlock: 26,
					openInverse: 27,
					block_option1: 28,
					OPEN_BLOCK: 29,
					openBlock_repetition0: 30,
					openBlock_option0: 31,
					openBlock_option1: 32,
					CLOSE: 33,
					OPEN_INVERSE: 34,
					openInverse_repetition0: 35,
					openInverse_option0: 36,
					openInverse_option1: 37,
					openInverseChain: 38,
					OPEN_INVERSE_CHAIN: 39,
					openInverseChain_repetition0: 40,
					openInverseChain_option0: 41,
					openInverseChain_option1: 42,
					inverseAndProgram: 43,
					INVERSE: 44,
					inverseChain: 45,
					inverseChain_option0: 46,
					OPEN_ENDBLOCK: 47,
					OPEN: 48,
					expr: 49,
					mustache_repetition0: 50,
					mustache_option0: 51,
					OPEN_UNESCAPED: 52,
					mustache_repetition1: 53,
					mustache_option1: 54,
					CLOSE_UNESCAPED: 55,
					OPEN_PARTIAL: 56,
					partial_repetition0: 57,
					partial_option0: 58,
					openPartialBlock: 59,
					OPEN_PARTIAL_BLOCK: 60,
					openPartialBlock_repetition0: 61,
					openPartialBlock_option0: 62,
					sexpr: 63,
					OPEN_SEXPR: 64,
					sexpr_repetition0: 65,
					sexpr_option0: 66,
					CLOSE_SEXPR: 67,
					hash: 68,
					hash_repetition_plus0: 69,
					hashSegment: 70,
					ID: 71,
					EQUALS: 72,
					blockParams: 73,
					OPEN_BLOCK_PARAMS: 74,
					blockParams_repetition_plus0: 75,
					CLOSE_BLOCK_PARAMS: 76,
					path: 77,
					dataName: 78,
					STRING: 79,
					NUMBER: 80,
					BOOLEAN: 81,
					UNDEFINED: 82,
					NULL: 83,
					DATA: 84,
					pathSegments: 85,
					SEP: 86,
					$accept: 0,
					$end: 1,
				},
				terminals_: {
					2: "error",
					5: "EOF",
					14: "COMMENT",
					15: "CONTENT",
					18: "END_RAW_BLOCK",
					19: "OPEN_RAW_BLOCK",
					23: "CLOSE_RAW_BLOCK",
					29: "OPEN_BLOCK",
					33: "CLOSE",
					34: "OPEN_INVERSE",
					39: "OPEN_INVERSE_CHAIN",
					44: "INVERSE",
					47: "OPEN_ENDBLOCK",
					48: "OPEN",
					52: "OPEN_UNESCAPED",
					55: "CLOSE_UNESCAPED",
					56: "OPEN_PARTIAL",
					60: "OPEN_PARTIAL_BLOCK",
					64: "OPEN_SEXPR",
					67: "CLOSE_SEXPR",
					71: "ID",
					72: "EQUALS",
					74: "OPEN_BLOCK_PARAMS",
					76: "CLOSE_BLOCK_PARAMS",
					79: "STRING",
					80: "NUMBER",
					81: "BOOLEAN",
					82: "UNDEFINED",
					83: "NULL",
					84: "DATA",
					86: "SEP",
				},
				productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [49, 1], [49, 1], [63, 5], [68, 1], [70, 3], [73, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [78, 2], [77, 1], [85, 3], [85, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [50, 0], [50, 2], [51, 0], [51, 1], [53, 0], [53, 2], [54, 0], [54, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [65, 0], [65, 2], [66, 0], [66, 1], [69, 1], [69, 2], [75, 1], [75, 2]],
				performAction: function (m, E, b, y, P, l, xe) {
					var u = l.length - 1;
					switch (P) {
						case 1:
							return l[u - 1];
						case 2:
							this.$ = y.prepareProgram(l[u]);
							break;
						case 3:
						case 4:
						case 5:
						case 6:
						case 7:
						case 8:
						case 20:
						case 27:
						case 28:
						case 33:
						case 34:
							this.$ = l[u];
							break;
						case 9:
							this.$ = {
								type: "CommentStatement",
								value: y.stripComment(l[u]),
								strip: y.stripFlags(l[u], l[u]),
								loc: y.locInfo(this._$),
							};
							break;
						case 10:
							this.$ = {
								type: "ContentStatement",
								original: l[u],
								value: l[u],
								loc: y.locInfo(this._$),
							};
							break;
						case 11:
							this.$ = y.prepareRawBlock(l[u - 2], l[u - 1], l[u], this._$);
							break;
						case 12:
							this.$ = {
								path: l[u - 3],
								params: l[u - 2],
								hash: l[u - 1],
							};
							break;
						case 13:
							this.$ = y.prepareBlock(l[u - 3], l[u - 2], l[u - 1], l[u], !1, this._$);
							break;
						case 14:
							this.$ = y.prepareBlock(l[u - 3], l[u - 2], l[u - 1], l[u], !0, this._$);
							break;
						case 15:
							this.$ = {
								open: l[u - 5],
								path: l[u - 4],
								params: l[u - 3],
								hash: l[u - 2],
								blockParams: l[u - 1],
								strip: y.stripFlags(l[u - 5], l[u]),
							};
							break;
						case 16:
						case 17:
							this.$ = {
								path: l[u - 4],
								params: l[u - 3],
								hash: l[u - 2],
								blockParams: l[u - 1],
								strip: y.stripFlags(l[u - 5], l[u]),
							};
							break;
						case 18:
							this.$ = {
								strip: y.stripFlags(l[u - 1], l[u - 1]),
								program: l[u],
							};
							break;
						case 19:
							var ae = y.prepareBlock(l[u - 2], l[u - 1], l[u], l[u], !1, this._$),
								Me = y.prepareProgram([ae], l[u - 1].loc);
							(Me.chained = !0),
								(this.$ = {
									strip: l[u - 2].strip,
									program: Me,
									chain: !0,
								});
							break;
						case 21:
							this.$ = {
								path: l[u - 1],
								strip: y.stripFlags(l[u - 2], l[u]),
							};
							break;
						case 22:
						case 23:
							this.$ = y.prepareMustache(l[u - 3], l[u - 2], l[u - 1], l[u - 4], y.stripFlags(l[u - 4], l[u]), this._$);
							break;
						case 24:
							this.$ = {
								type: "PartialStatement",
								name: l[u - 3],
								params: l[u - 2],
								hash: l[u - 1],
								indent: "",
								strip: y.stripFlags(l[u - 4], l[u]),
								loc: y.locInfo(this._$),
							};
							break;
						case 25:
							this.$ = y.preparePartialBlock(l[u - 2], l[u - 1], l[u], this._$);
							break;
						case 26:
							this.$ = {
								path: l[u - 3],
								params: l[u - 2],
								hash: l[u - 1],
								strip: y.stripFlags(l[u - 4], l[u]),
							};
							break;
						case 29:
							this.$ = {
								type: "SubExpression",
								path: l[u - 3],
								params: l[u - 2],
								hash: l[u - 1],
								loc: y.locInfo(this._$),
							};
							break;
						case 30:
							this.$ = {
								type: "Hash",
								pairs: l[u],
								loc: y.locInfo(this._$),
							};
							break;
						case 31:
							this.$ = {
								type: "HashPair",
								key: y.id(l[u - 2]),
								value: l[u],
								loc: y.locInfo(this._$),
							};
							break;
						case 32:
							this.$ = y.id(l[u - 1]);
							break;
						case 35:
							this.$ = {
								type: "StringLiteral",
								value: l[u],
								original: l[u],
								loc: y.locInfo(this._$),
							};
							break;
						case 36:
							this.$ = {
								type: "NumberLiteral",
								value: Number(l[u]),
								original: Number(l[u]),
								loc: y.locInfo(this._$),
							};
							break;
						case 37:
							this.$ = {
								type: "BooleanLiteral",
								value: l[u] === "true",
								original: l[u] === "true",
								loc: y.locInfo(this._$),
							};
							break;
						case 38:
							this.$ = {
								type: "UndefinedLiteral",
								original: void 0,
								value: void 0,
								loc: y.locInfo(this._$),
							};
							break;
						case 39:
							this.$ = {
								type: "NullLiteral",
								original: null,
								value: null,
								loc: y.locInfo(this._$),
							};
							break;
						case 40:
							this.$ = y.preparePath(!0, l[u], this._$);
							break;
						case 41:
							this.$ = y.preparePath(!1, l[u], this._$);
							break;
						case 42:
							l[u - 2].push({
								part: y.id(l[u]),
								original: l[u],
								separator: l[u - 1],
							}),
								(this.$ = l[u - 2]);
							break;
						case 43:
							this.$ = [{ part: y.id(l[u]), original: l[u] }];
							break;
						case 44:
						case 46:
						case 48:
						case 56:
						case 62:
						case 68:
						case 76:
						case 80:
						case 84:
						case 88:
						case 92:
							this.$ = [];
							break;
						case 45:
						case 47:
						case 49:
						case 57:
						case 63:
						case 69:
						case 77:
						case 81:
						case 85:
						case 89:
						case 93:
						case 97:
						case 99:
							l[u - 1].push(l[u]);
							break;
						case 96:
						case 98:
							this.$ = [l[u]];
							break;
					}
				},
				table: [
					t([5, 14, 15, 19, 29, 34, 48, 52, 56, 60], e, {
						3: 1,
						4: 2,
						6: 3,
					}),
					{ 1: [3] },
					{ 5: [1, 4] },
					t([5, 39, 44, 47], [2, 2], {
						7: 5,
						8: 6,
						9: 7,
						10: 8,
						11: 9,
						12: 10,
						13: 11,
						24: 15,
						27: 16,
						16: 17,
						59: 19,
						14: [1, 12],
						15: r,
						19: [1, 23],
						29: [1, 21],
						34: [1, 22],
						48: [1, 13],
						52: [1, 14],
						56: [1, 18],
						60: [1, 24],
					}),
					{ 1: [2, 1] },
					t(n, [2, 45]),
					t(n, [2, 3]),
					t(n, [2, 4]),
					t(n, [2, 5]),
					t(n, [2, 6]),
					t(n, [2, 7]),
					t(n, [2, 8]),
					t(n, [2, 9]),
					{
						20: 26,
						49: 25,
						63: 27,
						64: s,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					{
						20: 26,
						49: 39,
						63: 27,
						64: s,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					t(N, e, { 6: 3, 4: 40 }),
					t(g, e, { 6: 3, 4: 41 }),
					t(T, [2, 46], { 17: 42 }),
					{
						20: 26,
						49: 43,
						63: 27,
						64: s,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					t(x, e, { 6: 3, 4: 44 }),
					t([5, 14, 15, 18, 19, 29, 34, 39, 44, 47, 48, 52, 56, 60], [2, 10]),
					{
						20: 45,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					{
						20: 46,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					{
						20: 47,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					{
						20: 26,
						49: 48,
						63: 27,
						64: s,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					t(C, [2, 76], { 50: 49 }),
					t(v, [2, 27]),
					t(v, [2, 28]),
					t(v, [2, 33]),
					t(v, [2, 34]),
					t(v, [2, 35]),
					t(v, [2, 36]),
					t(v, [2, 37]),
					t(v, [2, 38]),
					t(v, [2, 39]),
					{
						20: 26,
						49: 50,
						63: 27,
						64: s,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					t(v, [2, 41], { 86: M }),
					{ 71: i, 85: 52 },
					t(H, X),
					t(ve, [2, 80], { 53: 53 }),
					{
						25: 54,
						38: 56,
						39: Ae,
						43: 57,
						44: J,
						45: 55,
						47: [2, 52],
					},
					{ 28: 60, 43: 61, 44: J, 47: [2, 54] },
					{ 13: 63, 15: r, 18: [1, 62] },
					t(C, [2, 84], { 57: 64 }),
					{ 26: 65, 47: re },
					t(V, [2, 56], { 30: 67 }),
					t(V, [2, 62], { 35: 68 }),
					t(Pe, [2, 48], { 21: 69 }),
					t(C, [2, 88], { 61: 70 }),
					{
						20: 26,
						33: [2, 78],
						49: 72,
						51: 71,
						63: 27,
						64: s,
						68: 73,
						69: 74,
						70: 75,
						71: U,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					t(ne, [2, 92], { 65: 77 }),
					{ 71: [1, 78] },
					t(v, [2, 40], { 86: M }),
					{
						20: 26,
						49: 80,
						54: 79,
						55: [2, 82],
						63: 27,
						64: s,
						68: 81,
						69: 74,
						70: 75,
						71: U,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					{ 26: 82, 47: re },
					{ 47: [2, 53] },
					t(N, e, { 6: 3, 4: 83 }),
					{ 47: [2, 20] },
					{
						20: 84,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					t(x, e, { 6: 3, 4: 85 }),
					{ 26: 86, 47: re },
					{ 47: [2, 55] },
					t(n, [2, 11]),
					t(T, [2, 47]),
					{
						20: 26,
						33: [2, 86],
						49: 88,
						58: 87,
						63: 27,
						64: s,
						68: 89,
						69: 74,
						70: 75,
						71: U,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					t(n, [2, 25]),
					{
						20: 90,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					t(_, [2, 58], {
						20: 26,
						63: 27,
						77: 28,
						78: 29,
						85: 36,
						69: 74,
						70: 75,
						31: 91,
						49: 92,
						68: 93,
						64: s,
						71: U,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
					}),
					t(_, [2, 64], {
						20: 26,
						63: 27,
						77: 28,
						78: 29,
						85: 36,
						69: 74,
						70: 75,
						36: 94,
						49: 95,
						68: 96,
						64: s,
						71: U,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
					}),
					{
						20: 26,
						22: 97,
						23: [2, 50],
						49: 98,
						63: 27,
						64: s,
						68: 99,
						69: 74,
						70: 75,
						71: U,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					{
						20: 26,
						33: [2, 90],
						49: 101,
						62: 100,
						63: 27,
						64: s,
						68: 102,
						69: 74,
						70: 75,
						71: U,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					{ 33: [1, 103] },
					t(C, [2, 77]),
					{ 33: [2, 79] },
					t([23, 33, 55, 67, 74], [2, 30], { 70: 104, 71: [1, 105] }),
					t(se, [2, 96]),
					t(H, X, { 72: ut }),
					{
						20: 26,
						49: 108,
						63: 27,
						64: s,
						66: 107,
						67: [2, 94],
						68: 109,
						69: 74,
						70: 75,
						71: U,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					t(H, [2, 42]),
					{ 55: [1, 110] },
					t(ve, [2, 81]),
					{ 55: [2, 83] },
					t(n, [2, 13]),
					{
						38: 56,
						39: Ae,
						43: 57,
						44: J,
						45: 112,
						46: 111,
						47: [2, 74],
					},
					t(V, [2, 68], { 40: 113 }),
					{ 47: [2, 18] },
					t(n, [2, 14]),
					{ 33: [1, 114] },
					t(C, [2, 85]),
					{ 33: [2, 87] },
					{ 33: [1, 115] },
					{ 32: 116, 33: [2, 60], 73: 117, 74: It },
					t(V, [2, 57]),
					t(_, [2, 59]),
					{ 33: [2, 66], 37: 119, 73: 120, 74: It },
					t(V, [2, 63]),
					t(_, [2, 65]),
					{ 23: [1, 121] },
					t(Pe, [2, 49]),
					{ 23: [2, 51] },
					{ 33: [1, 122] },
					t(C, [2, 89]),
					{ 33: [2, 91] },
					t(n, [2, 22]),
					t(se, [2, 97]),
					{ 72: ut },
					{
						20: 26,
						49: 123,
						63: 27,
						64: s,
						71: i,
						77: 28,
						78: 29,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
						85: 36,
					},
					{ 67: [1, 124] },
					t(ne, [2, 93]),
					{ 67: [2, 95] },
					t(n, [2, 23]),
					{ 47: [2, 19] },
					{ 47: [2, 75] },
					t(_, [2, 70], {
						20: 26,
						63: 27,
						77: 28,
						78: 29,
						85: 36,
						69: 74,
						70: 75,
						41: 125,
						49: 126,
						68: 127,
						64: s,
						71: U,
						79: a,
						80: o,
						81: c,
						82: p,
						83: h,
						84: d,
					}),
					t(n, [2, 24]),
					t(n, [2, 21]),
					{ 33: [1, 128] },
					{ 33: [2, 61] },
					{ 71: [1, 130], 75: 129 },
					{ 33: [1, 131] },
					{ 33: [2, 67] },
					t(T, [2, 12]),
					t(x, [2, 26]),
					t(se, [2, 31]),
					t(v, [2, 29]),
					{ 33: [2, 72], 42: 132, 73: 133, 74: It },
					t(V, [2, 69]),
					t(_, [2, 71]),
					t(N, [2, 15]),
					{ 71: [1, 135], 76: [1, 134] },
					t(qr, [2, 98]),
					t(g, [2, 16]),
					{ 33: [1, 136] },
					{ 33: [2, 73] },
					{ 33: [2, 32] },
					t(qr, [2, 99]),
					t(N, [2, 17]),
				],
				defaultActions: {
					4: [2, 1],
					55: [2, 53],
					57: [2, 20],
					61: [2, 55],
					73: [2, 79],
					81: [2, 83],
					85: [2, 18],
					89: [2, 87],
					99: [2, 51],
					102: [2, 91],
					109: [2, 95],
					111: [2, 19],
					112: [2, 75],
					117: [2, 61],
					120: [2, 67],
					133: [2, 73],
					134: [2, 32],
				},
				parseError: function (m, E) {
					if (E.recoverable) this.trace(m);
					else {
						var b = new Error(m);
						throw ((b.hash = E), b);
					}
				},
				parse: function (m) {
					var E = this,
						b = [0],
						y = [],
						P = [null],
						l = [],
						xe = this.table,
						u = "",
						ae = 0,
						Me = 0,
						Hr = 0,
						Jn = 2,
						Vr = 1,
						Zn = l.slice.call(arguments, 1),
						L = Object.create(this.lexer),
						me = { yy: {} };
					for (var Ht in this.yy) Object.prototype.hasOwnProperty.call(this.yy, Ht) && (me.yy[Ht] = this.yy[Ht]);
					L.setInput(m, me.yy), (me.yy.lexer = L), (me.yy.parser = this), typeof L.yylloc > "u" && (L.yylloc = {});
					var Vt = L.yylloc;
					l.push(Vt);
					var es = L.options && L.options.ranges;
					typeof me.yy.parseError == "function" ? (this.parseError = me.yy.parseError) : (this.parseError = Object.getPrototypeOf(this).parseError);
					function fa(W) {
						(b.length = b.length - 2 * W), (P.length = P.length - W), (l.length = l.length - W);
					}
					for (
						var ts = function () {
								var W;
								return (W = L.lex() || Vr), typeof W != "number" && (W = E.symbols_[W] || W), W;
							},
							I,
							Ut,
							ge,
							z,
							da,
							Ft,
							Ce = {},
							ht,
							Z,
							Ur,
							pt;
						;

					) {
						if (((ge = b[b.length - 1]), this.defaultActions[ge] ? (z = this.defaultActions[ge]) : ((I === null || typeof I > "u") && (I = ts()), (z = xe[ge] && xe[ge][I])), typeof z > "u" || !z.length || !z[0])) {
							var Mt = "";
							pt = [];
							for (ht in xe[ge]) this.terminals_[ht] && ht > Jn && pt.push("'" + this.terminals_[ht] + "'");
							L.showPosition
								? (Mt =
										"Parse error on line " +
										(ae + 1) +
										`:
` +
										L.showPosition() +
										`
Expecting ` +
										pt.join(", ") +
										", got '" +
										(this.terminals_[I] || I) +
										"'")
								: (Mt = "Parse error on line " + (ae + 1) + ": Unexpected " + (I == Vr ? "end of input" : "'" + (this.terminals_[I] || I) + "'")),
								this.parseError(Mt, {
									text: L.match,
									token: this.terminals_[I] || I,
									line: L.yylineno,
									loc: Vt,
									expected: pt,
								});
						}
						if (z[0] instanceof Array && z.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + ge + ", token: " + I);
						switch (z[0]) {
							case 1:
								b.push(I), P.push(L.yytext), l.push(L.yylloc), b.push(z[1]), (I = null), Ut ? ((I = Ut), (Ut = null)) : ((Me = L.yyleng), (u = L.yytext), (ae = L.yylineno), (Vt = L.yylloc), Hr > 0 && Hr--);
								break;
							case 2:
								if (
									((Z = this.productions_[z[1]][1]),
									(Ce.$ = P[P.length - Z]),
									(Ce._$ = {
										first_line: l[l.length - (Z || 1)].first_line,
										last_line: l[l.length - 1].last_line,
										first_column: l[l.length - (Z || 1)].first_column,
										last_column: l[l.length - 1].last_column,
									}),
									es && (Ce._$.range = [l[l.length - (Z || 1)].range[0], l[l.length - 1].range[1]]),
									(Ft = this.performAction.apply(Ce, [u, Me, ae, me.yy, z[1], P, l].concat(Zn))),
									typeof Ft < "u")
								)
									return Ft;
								Z && ((b = b.slice(0, -1 * Z * 2)), (P = P.slice(0, -1 * Z)), (l = l.slice(0, -1 * Z))), b.push(this.productions_[z[1]][0]), P.push(Ce.$), l.push(Ce._$), (Ur = xe[b[b.length - 2]][b[b.length - 1]]), b.push(Ur);
								break;
							case 3:
								return !0;
						}
					}
					return !0;
				},
			},
			Xn = (function () {
				var ie = {
					EOF: 1,
					parseError: function (E, b) {
						if (this.yy.parser) this.yy.parser.parseError(E, b);
						else throw new Error(E);
					},
					setInput: function (m, E) {
						return (
							(this.yy = E || this.yy || {}),
							(this._input = m),
							(this._more = this._backtrack = this.done = !1),
							(this.yylineno = this.yyleng = 0),
							(this.yytext = this.matched = this.match = ""),
							(this.conditionStack = ["INITIAL"]),
							(this.yylloc = {
								first_line: 1,
								first_column: 0,
								last_line: 1,
								last_column: 0,
							}),
							this.options.ranges && (this.yylloc.range = [0, 0]),
							(this.offset = 0),
							this
						);
					},
					input: function () {
						var m = this._input[0];
						(this.yytext += m), this.yyleng++, this.offset++, (this.match += m), (this.matched += m);
						var E = m.match(/(?:\r\n?|\n).*/g);
						return E ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, (this._input = this._input.slice(1)), m;
					},
					unput: function (m) {
						var E = m.length,
							b = m.split(/(?:\r\n?|\n)/g);
						(this._input = m + this._input), (this.yytext = this.yytext.substr(0, this.yytext.length - E)), (this.offset -= E);
						var y = this.match.split(/(?:\r\n?|\n)/g);
						(this.match = this.match.substr(0, this.match.length - 1)), (this.matched = this.matched.substr(0, this.matched.length - 1)), b.length - 1 && (this.yylineno -= b.length - 1);
						var P = this.yylloc.range;
						return (
							(this.yylloc = {
								first_line: this.yylloc.first_line,
								last_line: this.yylineno + 1,
								first_column: this.yylloc.first_column,
								last_column: b ? (b.length === y.length ? this.yylloc.first_column : 0) + y[y.length - b.length].length - b[0].length : this.yylloc.first_column - E,
							}),
							this.options.ranges && (this.yylloc.range = [P[0], P[0] + this.yyleng - E]),
							(this.yyleng = this.yytext.length),
							this
						);
					},
					more: function () {
						return (this._more = !0), this;
					},
					reject: function () {
						if (this.options.backtrack_lexer) this._backtrack = !0;
						else
							return this.parseError(
								"Lexical error on line " +
									(this.yylineno + 1) +
									`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` +
									this.showPosition(),
								{ text: "", token: null, line: this.yylineno },
							);
						return this;
					},
					less: function (m) {
						this.unput(this.match.slice(m));
					},
					pastInput: function () {
						var m = this.matched.substr(0, this.matched.length - this.match.length);
						return (m.length > 20 ? "..." : "") + m.substr(-20).replace(/\n/g, "");
					},
					upcomingInput: function () {
						var m = this.match;
						return m.length < 20 && (m += this._input.substr(0, 20 - m.length)), (m.substr(0, 20) + (m.length > 20 ? "..." : "")).replace(/\n/g, "");
					},
					showPosition: function () {
						var m = this.pastInput(),
							E = new Array(m.length + 1).join("-");
						return (
							m +
							this.upcomingInput() +
							`
` +
							E +
							"^"
						);
					},
					test_match: function (m, E) {
						var b, y, P;
						if (
							(this.options.backtrack_lexer &&
								((P = {
									yylineno: this.yylineno,
									yylloc: {
										first_line: this.yylloc.first_line,
										last_line: this.last_line,
										first_column: this.yylloc.first_column,
										last_column: this.yylloc.last_column,
									},
									yytext: this.yytext,
									match: this.match,
									matches: this.matches,
									matched: this.matched,
									yyleng: this.yyleng,
									offset: this.offset,
									_more: this._more,
									_input: this._input,
									yy: this.yy,
									conditionStack: this.conditionStack.slice(0),
									done: this.done,
								}),
								this.options.ranges && (P.yylloc.range = this.yylloc.range.slice(0))),
							(y = m[0].match(/(?:\r\n?|\n).*/g)),
							y && (this.yylineno += y.length),
							(this.yylloc = {
								first_line: this.yylloc.last_line,
								last_line: this.yylineno + 1,
								first_column: this.yylloc.last_column,
								last_column: y ? y[y.length - 1].length - y[y.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + m[0].length,
							}),
							(this.yytext += m[0]),
							(this.match += m[0]),
							(this.matches = m),
							(this.yyleng = this.yytext.length),
							this.options.ranges && (this.yylloc.range = [this.offset, (this.offset += this.yyleng)]),
							(this._more = !1),
							(this._backtrack = !1),
							(this._input = this._input.slice(m[0].length)),
							(this.matched += m[0]),
							(b = this.performAction.call(this, this.yy, this, E, this.conditionStack[this.conditionStack.length - 1])),
							this.done && this._input && (this.done = !1),
							b)
						)
							return b;
						if (this._backtrack) {
							for (var l in P) this[l] = P[l];
							return !1;
						}
						return !1;
					},
					next: function () {
						if (this.done) return this.EOF;
						this._input || (this.done = !0);
						var m, E, b, y;
						this._more || ((this.yytext = ""), (this.match = ""));
						for (var P = this._currentRules(), l = 0; l < P.length; l++)
							if (((b = this._input.match(this.rules[P[l]])), b && (!E || b[0].length > E[0].length))) {
								if (((E = b), (y = l), this.options.backtrack_lexer)) {
									if (((m = this.test_match(b, P[l])), m !== !1)) return m;
									if (this._backtrack) {
										E = !1;
										continue;
									} else return !1;
								} else if (!this.options.flex) break;
							}
						return E
							? ((m = this.test_match(E, P[y])), m !== !1 ? m : !1)
							: this._input === ""
								? this.EOF
								: this.parseError(
										"Lexical error on line " +
											(this.yylineno + 1) +
											`. Unrecognized text.
` +
											this.showPosition(),
										{
											text: "",
											token: null,
											line: this.yylineno,
										},
									);
					},
					lex: function () {
						var E = this.next();
						return E || this.lex();
					},
					begin: function (E) {
						this.conditionStack.push(E);
					},
					popState: function () {
						var E = this.conditionStack.length - 1;
						return E > 0 ? this.conditionStack.pop() : this.conditionStack[0];
					},
					_currentRules: function () {
						return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
					},
					topState: function (E) {
						return (E = this.conditionStack.length - 1 - Math.abs(E || 0)), E >= 0 ? this.conditionStack[E] : "INITIAL";
					},
					pushState: function (E) {
						this.begin(E);
					},
					stateStackSize: function () {
						return this.conditionStack.length;
					},
					options: {},
					performAction: function (E, b, y, P) {
						function l(u, ae) {
							return (b.yytext = b.yytext.substring(u, b.yyleng - ae + u));
						}
						var xe = P;
						switch (y) {
							case 0:
								if ((b.yytext.slice(-2) === "\\\\" ? (l(0, 1), this.begin("mu")) : b.yytext.slice(-1) === "\\" ? (l(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext)) return 15;
								break;
							case 1:
								return 15;
							case 2:
								return this.popState(), 15;
								break;
							case 3:
								return this.begin("raw"), 15;
								break;
							case 4:
								return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (l(5, 9), 18);
							case 5:
								return 15;
							case 6:
								return this.popState(), 14;
								break;
							case 7:
								return 64;
							case 8:
								return 67;
							case 9:
								return 19;
							case 10:
								return this.popState(), this.begin("raw"), 23;
								break;
							case 11:
								return 56;
							case 12:
								return 60;
							case 13:
								return 29;
							case 14:
								return 47;
							case 15:
								return this.popState(), 44;
								break;
							case 16:
								return this.popState(), 44;
								break;
							case 17:
								return 34;
							case 18:
								return 39;
							case 19:
								return 52;
							case 20:
								return 48;
							case 21:
								this.unput(b.yytext), this.popState(), this.begin("com");
								break;
							case 22:
								return this.popState(), 14;
								break;
							case 23:
								return 48;
							case 24:
								return 72;
							case 25:
								return 71;
							case 26:
								return 71;
							case 27:
								return 86;
							case 28:
								break;
							case 29:
								return this.popState(), 55;
								break;
							case 30:
								return this.popState(), 33;
								break;
							case 31:
								return (b.yytext = l(1, 2).replace(/\\"/g, '"')), 79;
								break;
							case 32:
								return (b.yytext = l(1, 2).replace(/\\'/g, "'")), 79;
								break;
							case 33:
								return 84;
							case 34:
								return 81;
							case 35:
								return 81;
							case 36:
								return 82;
							case 37:
								return 83;
							case 38:
								return 80;
							case 39:
								return 74;
							case 40:
								return 76;
							case 41:
								return 71;
							case 42:
								return (b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1")), 71;
								break;
							case 43:
								return "INVALID";
							case 44:
								return 5;
						}
					},
					rules: [
						/^(?:[^\x00]*?(?=(\{\{)))/,
						/^(?:[^\x00]+)/,
						/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
						/^(?:\{\{\{\{(?=[^/]))/,
						/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
						/^(?:[^\x00]+?(?=(\{\{\{\{)))/,
						/^(?:[\s\S]*?--(~)?\}\})/,
						/^(?:\()/,
						/^(?:\))/,
						/^(?:\{\{\{\{)/,
						/^(?:\}\}\}\})/,
						/^(?:\{\{(~)?>)/,
						/^(?:\{\{(~)?#>)/,
						/^(?:\{\{(~)?#\*?)/,
						/^(?:\{\{(~)?\/)/,
						/^(?:\{\{(~)?\^\s*(~)?\}\})/,
						/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
						/^(?:\{\{(~)?\^)/,
						/^(?:\{\{(~)?\s*else\b)/,
						/^(?:\{\{(~)?\{)/,
						/^(?:\{\{(~)?&)/,
						/^(?:\{\{(~)?!--)/,
						/^(?:\{\{(~)?![\s\S]*?\}\})/,
						/^(?:\{\{(~)?\*?)/,
						/^(?:=)/,
						/^(?:\.\.)/,
						/^(?:\.(?=([=~}\s\/.)|])))/,
						/^(?:[\/.])/,
						/^(?:\s+)/,
						/^(?:\}(~)?\}\})/,
						/^(?:(~)?\}\})/,
						/^(?:"(\\["]|[^"])*")/,
						/^(?:'(\\[']|[^'])*')/,
						/^(?:@)/,
						/^(?:true(?=([~}\s)])))/,
						/^(?:false(?=([~}\s)])))/,
						/^(?:undefined(?=([~}\s)])))/,
						/^(?:null(?=([~}\s)])))/,
						/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
						/^(?:as\s+\|)/,
						/^(?:\|)/,
						/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
						/^(?:\[(\\\]|[^\]])*\])/,
						/^(?:.)/,
						/^(?:$)/,
					],
					conditions: {
						mu: {
							rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
							inclusive: !1,
						},
						emu: { rules: [2], inclusive: !1 },
						com: { rules: [6], inclusive: !1 },
						raw: { rules: [3, 4, 5], inclusive: !1 },
						INITIAL: { rules: [0, 1, 44], inclusive: !0 },
					},
				};
				return ie;
			})();
		Rt.lexer = Xn;
		function qt() {
			this.yy = {};
		}
		return (qt.prototype = Rt), (Rt.Parser = qt), new qt();
	})(),
	vt = Zs;
var or = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
function lr(t, e) {
	var r = e && e.loc,
		n,
		s,
		i,
		a;
	r && ((n = r.start.line), (s = r.end.line), (i = r.start.column), (a = r.end.column), (t += " - " + n + ":" + i));
	for (var o = Error.prototype.constructor.call(this, t), c = 0; c < or.length; c++) this[or[c]] = o[or[c]];
	Error.captureStackTrace && Error.captureStackTrace(this, lr);
	try {
		r &&
			((this.lineNumber = n),
			(this.endLineNumber = s),
			Object.defineProperty
				? (Object.defineProperty(this, "column", {
						value: i,
						enumerable: !0,
					}),
					Object.defineProperty(this, "endColumn", {
						value: a,
						enumerable: !0,
					}))
				: ((this.column = i), (this.endColumn = a)));
	} catch {}
}
lr.prototype = new Error();
var le = lr;
function At() {
	this.parents = [];
}
At.prototype = {
	constructor: At,
	mutating: !1,
	acceptKey: function (t, e) {
		var r = this.accept(t[e]);
		if (this.mutating) {
			if (r && !At.prototype[r.type]) throw new le('Unexpected node type "' + r.type + '" found when accepting ' + e + " on " + t.type);
			t[e] = r;
		}
	},
	acceptRequired: function (t, e) {
		if ((this.acceptKey(t, e), !t[e])) throw new le(t.type + " requires " + e);
	},
	acceptArray: function (t) {
		for (var e = 0, r = t.length; e < r; e++) this.acceptKey(t, e), t[e] || (t.splice(e, 1), e--, r--);
	},
	accept: function (t) {
		if (t) {
			if (!this[t.type]) throw new le("Unknown type: " + t.type, t);
			this.current && this.parents.unshift(this.current), (this.current = t);
			var e = this[t.type](t);
			if (((this.current = this.parents.shift()), !this.mutating || e)) return e;
			if (e !== !1) return t;
		}
	},
	Program: function (t) {
		this.acceptArray(t.body);
	},
	MustacheStatement: Pt,
	Decorator: Pt,
	BlockStatement: An,
	DecoratorBlock: An,
	PartialStatement: Pn,
	PartialBlockStatement: function (t) {
		Pn.call(this, t), this.acceptKey(t, "program");
	},
	ContentStatement: function () {},
	CommentStatement: function () {},
	SubExpression: Pt,
	PathExpression: function () {},
	StringLiteral: function () {},
	NumberLiteral: function () {},
	BooleanLiteral: function () {},
	UndefinedLiteral: function () {},
	NullLiteral: function () {},
	Hash: function (t) {
		this.acceptArray(t.pairs);
	},
	HashPair: function (t) {
		this.acceptRequired(t, "value");
	},
};
function Pt(t) {
	this.acceptRequired(t, "path"), this.acceptArray(t.params), this.acceptKey(t, "hash");
}
function An(t) {
	Pt.call(this, t), this.acceptKey(t, "program"), this.acceptKey(t, "inverse");
}
function Pn(t) {
	this.acceptRequired(t, "name"), this.acceptArray(t.params), this.acceptKey(t, "hash");
}
var xn = At;
function j(t) {
	t === void 0 && (t = {}), (this.options = t);
}
j.prototype = new xn();
j.prototype.Program = function (t) {
	var e = !this.options.ignoreStandalone,
		r = !this.isRootSeen;
	this.isRootSeen = !0;
	for (var n = t.body, s = 0, i = n.length; s < i; s++) {
		var a = n[s],
			o = this.accept(a);
		if (o) {
			var c = cr(n, s, r),
				p = ur(n, s, r),
				h = o.openStandalone && c,
				d = o.closeStandalone && p,
				N = o.inlineStandalone && c && p;
			o.close && ke(n, s, !0), o.open && ce(n, s, !0), e && N && (ke(n, s), ce(n, s) && a.type === "PartialStatement" && (a.indent = /([ \t]+$)/.exec(n[s - 1].original)[1])), e && h && (ke((a.program || a.inverse).body), ce(n, s)), e && d && (ke(n, s), ce((a.inverse || a.program).body));
		}
	}
	return t;
};
j.prototype.BlockStatement =
	j.prototype.DecoratorBlock =
	j.prototype.PartialBlockStatement =
		function (t) {
			this.accept(t.program), this.accept(t.inverse);
			var e = t.program || t.inverse,
				r = t.program && t.inverse,
				n = r,
				s = r;
			if (r && r.chained) for (n = r.body[0].program; s.chained; ) s = s.body[s.body.length - 1].program;
			var i = {
				open: t.openStrip.open,
				close: t.closeStrip.close,
				openStandalone: ur(e.body),
				closeStandalone: cr((n || e).body),
			};
			if ((t.openStrip.close && ke(e.body, null, !0), r)) {
				var a = t.inverseStrip;
				a.open && ce(e.body, null, !0), a.close && ke(n.body, null, !0), t.closeStrip.open && ce(s.body, null, !0), !this.options.ignoreStandalone && cr(e.body) && ur(n.body) && (ce(e.body), ke(n.body));
			} else t.closeStrip.open && ce(e.body, null, !0);
			return i;
		};
j.prototype.Decorator = j.prototype.MustacheStatement = function (t) {
	return t.strip;
};
j.prototype.PartialStatement = j.prototype.CommentStatement = function (t) {
	var e = t.strip || {};
	return { inlineStandalone: !0, open: e.open, close: e.close };
};
function cr(t, e, r) {
	e === void 0 && (e = t.length);
	var n = t[e - 1],
		s = t[e - 2];
	if (!n) return r;
	if (n.type === "ContentStatement") return (s || !r ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(n.original);
}
function ur(t, e, r) {
	e === void 0 && (e = -1);
	var n = t[e + 1],
		s = t[e + 2];
	if (!n) return r;
	if (n.type === "ContentStatement") return (s || !r ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(n.original);
}
function ke(t, e, r) {
	var n = t[e == null ? 0 : e + 1];
	if (!(!n || n.type !== "ContentStatement" || (!r && n.rightStripped))) {
		var s = n.value;
		(n.value = n.value.replace(r ? /^\s+/ : /^[ \t]*\r?\n?/, "")), (n.rightStripped = n.value !== s);
	}
}
function ce(t, e, r) {
	var n = t[e == null ? t.length - 1 : e - 1];
	if (!(!n || n.type !== "ContentStatement" || (!r && n.leftStripped))) {
		var s = n.value;
		return (n.value = n.value.replace(r ? /\s+$/ : /[ \t]+$/, "")), (n.leftStripped = n.value !== s), n.leftStripped;
	}
}
var Cn = j;
var nt = {};
zt(nt, {
	SourceLocation: () => pr,
	id: () => ei,
	prepareBlock: () => ai,
	prepareMustache: () => si,
	preparePartialBlock: () => li,
	preparePath: () => ni,
	prepareProgram: () => oi,
	prepareRawBlock: () => ii,
	stripComment: () => ri,
	stripFlags: () => ti,
});
function hr(t, e) {
	if (((e = e.path ? e.path.original : e), t.path.original !== e)) {
		var r = { loc: t.path.loc };
		throw new le(t.path.original + " doesn't match " + e, r);
	}
}
function pr(t, e) {
	(this.source = t), (this.start = { line: e.first_line, column: e.first_column }), (this.end = { line: e.last_line, column: e.last_column });
}
function ei(t) {
	return /^\[.*\]$/.test(t) ? t.substring(1, t.length - 1) : t;
}
function ti(t, e) {
	return { open: t.charAt(2) === "~", close: e.charAt(e.length - 3) === "~" };
}
function ri(t) {
	return t.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
}
function ni(t, e, r) {
	r = this.locInfo(r);
	for (var n = t ? "@" : "", s = [], i = 0, a = 0, o = e.length; a < o; a++) {
		var c = e[a].part,
			p = e[a].original !== c;
		if (((n += (e[a].separator || "") + c), !p && (c === ".." || c === "." || c === "this"))) {
			if (s.length > 0) throw new le("Invalid path: " + n, { loc: r });
			c === ".." && i++;
		} else s.push(c);
	}
	return {
		type: "PathExpression",
		data: t,
		depth: i,
		parts: s,
		original: n,
		loc: r,
	};
}
function si(t, e, r, n, s, i) {
	var a = n.charAt(3) || n.charAt(2),
		o = a !== "{" && a !== "&",
		c = /\*/.test(n);
	return {
		type: c ? "Decorator" : "MustacheStatement",
		path: t,
		params: e,
		hash: r,
		escaped: o,
		strip: s,
		loc: this.locInfo(i),
	};
}
function ii(t, e, r, n) {
	hr(t, r), (n = this.locInfo(n));
	var s = { type: "Program", body: e, strip: {}, loc: n };
	return {
		type: "BlockStatement",
		path: t.path,
		params: t.params,
		hash: t.hash,
		program: s,
		openStrip: {},
		inverseStrip: {},
		closeStrip: {},
		loc: n,
	};
}
function ai(t, e, r, n, s, i) {
	n && n.path && hr(t, n);
	var a = /\*/.test(t.open);
	e.blockParams = t.blockParams;
	var o, c;
	if (r) {
		if (a) throw new le("Unexpected inverse block on decorator", r);
		r.chain && (r.program.body[0].closeStrip = n.strip), (c = r.strip), (o = r.program);
	}
	return (
		s && ((s = o), (o = e), (e = s)),
		{
			type: a ? "DecoratorBlock" : "BlockStatement",
			path: t.path,
			params: t.params,
			hash: t.hash,
			program: e,
			inverse: o,
			openStrip: t.strip,
			inverseStrip: c,
			closeStrip: n && n.strip,
			loc: this.locInfo(i),
		}
	);
}
function oi(t, e) {
	if (!e && t.length) {
		var r = t[0].loc,
			n = t[t.length - 1].loc;
		r &&
			n &&
			(e = {
				source: r.source,
				start: { line: r.start.line, column: r.start.column },
				end: { line: n.end.line, column: n.end.column },
			});
	}
	return { type: "Program", body: t, strip: {}, loc: e };
}
function li(t, e, r, n) {
	return (
		hr(t, r),
		{
			type: "PartialBlockStatement",
			name: t.path,
			params: t.params,
			hash: t.hash,
			program: e,
			openStrip: t.strip,
			closeStrip: r && r.strip,
			loc: this.locInfo(n),
		}
	);
}
var Ln = {};
for (xt in nt) Object.prototype.hasOwnProperty.call(nt, xt) && (Ln[xt] = nt[xt]);
var xt;
function Ct(t, e) {
	if (t.type === "Program") return t;
	(vt.yy = Ln),
		(vt.yy.locInfo = function (n) {
			return new pr(e && e.srcName, n);
		});
	var r = vt.parse(t);
	return r;
}
function fr(t, e) {
	var r = Ct(t, e),
		n = new Cn(e);
	return n.accept(r);
}
var Dn = {
		Aacute: "\xC1",
		aacute: "\xE1",
		Abreve: "\u0102",
		abreve: "\u0103",
		ac: "\u223E",
		acd: "\u223F",
		acE: "\u223E\u0333",
		Acirc: "\xC2",
		acirc: "\xE2",
		acute: "\xB4",
		Acy: "\u0410",
		acy: "\u0430",
		AElig: "\xC6",
		aelig: "\xE6",
		af: "\u2061",
		Afr: "\u{1D504}",
		afr: "\u{1D51E}",
		Agrave: "\xC0",
		agrave: "\xE0",
		alefsym: "\u2135",
		aleph: "\u2135",
		Alpha: "\u0391",
		alpha: "\u03B1",
		Amacr: "\u0100",
		amacr: "\u0101",
		amalg: "\u2A3F",
		amp: "&",
		AMP: "&",
		andand: "\u2A55",
		And: "\u2A53",
		and: "\u2227",
		andd: "\u2A5C",
		andslope: "\u2A58",
		andv: "\u2A5A",
		ang: "\u2220",
		ange: "\u29A4",
		angle: "\u2220",
		angmsdaa: "\u29A8",
		angmsdab: "\u29A9",
		angmsdac: "\u29AA",
		angmsdad: "\u29AB",
		angmsdae: "\u29AC",
		angmsdaf: "\u29AD",
		angmsdag: "\u29AE",
		angmsdah: "\u29AF",
		angmsd: "\u2221",
		angrt: "\u221F",
		angrtvb: "\u22BE",
		angrtvbd: "\u299D",
		angsph: "\u2222",
		angst: "\xC5",
		angzarr: "\u237C",
		Aogon: "\u0104",
		aogon: "\u0105",
		Aopf: "\u{1D538}",
		aopf: "\u{1D552}",
		apacir: "\u2A6F",
		ap: "\u2248",
		apE: "\u2A70",
		ape: "\u224A",
		apid: "\u224B",
		apos: "'",
		ApplyFunction: "\u2061",
		approx: "\u2248",
		approxeq: "\u224A",
		Aring: "\xC5",
		aring: "\xE5",
		Ascr: "\u{1D49C}",
		ascr: "\u{1D4B6}",
		Assign: "\u2254",
		ast: "*",
		asymp: "\u2248",
		asympeq: "\u224D",
		Atilde: "\xC3",
		atilde: "\xE3",
		Auml: "\xC4",
		auml: "\xE4",
		awconint: "\u2233",
		awint: "\u2A11",
		backcong: "\u224C",
		backepsilon: "\u03F6",
		backprime: "\u2035",
		backsim: "\u223D",
		backsimeq: "\u22CD",
		Backslash: "\u2216",
		Barv: "\u2AE7",
		barvee: "\u22BD",
		barwed: "\u2305",
		Barwed: "\u2306",
		barwedge: "\u2305",
		bbrk: "\u23B5",
		bbrktbrk: "\u23B6",
		bcong: "\u224C",
		Bcy: "\u0411",
		bcy: "\u0431",
		bdquo: "\u201E",
		becaus: "\u2235",
		because: "\u2235",
		Because: "\u2235",
		bemptyv: "\u29B0",
		bepsi: "\u03F6",
		bernou: "\u212C",
		Bernoullis: "\u212C",
		Beta: "\u0392",
		beta: "\u03B2",
		beth: "\u2136",
		between: "\u226C",
		Bfr: "\u{1D505}",
		bfr: "\u{1D51F}",
		bigcap: "\u22C2",
		bigcirc: "\u25EF",
		bigcup: "\u22C3",
		bigodot: "\u2A00",
		bigoplus: "\u2A01",
		bigotimes: "\u2A02",
		bigsqcup: "\u2A06",
		bigstar: "\u2605",
		bigtriangledown: "\u25BD",
		bigtriangleup: "\u25B3",
		biguplus: "\u2A04",
		bigvee: "\u22C1",
		bigwedge: "\u22C0",
		bkarow: "\u290D",
		blacklozenge: "\u29EB",
		blacksquare: "\u25AA",
		blacktriangle: "\u25B4",
		blacktriangledown: "\u25BE",
		blacktriangleleft: "\u25C2",
		blacktriangleright: "\u25B8",
		blank: "\u2423",
		blk12: "\u2592",
		blk14: "\u2591",
		blk34: "\u2593",
		block: "\u2588",
		bne: "=\u20E5",
		bnequiv: "\u2261\u20E5",
		bNot: "\u2AED",
		bnot: "\u2310",
		Bopf: "\u{1D539}",
		bopf: "\u{1D553}",
		bot: "\u22A5",
		bottom: "\u22A5",
		bowtie: "\u22C8",
		boxbox: "\u29C9",
		boxdl: "\u2510",
		boxdL: "\u2555",
		boxDl: "\u2556",
		boxDL: "\u2557",
		boxdr: "\u250C",
		boxdR: "\u2552",
		boxDr: "\u2553",
		boxDR: "\u2554",
		boxh: "\u2500",
		boxH: "\u2550",
		boxhd: "\u252C",
		boxHd: "\u2564",
		boxhD: "\u2565",
		boxHD: "\u2566",
		boxhu: "\u2534",
		boxHu: "\u2567",
		boxhU: "\u2568",
		boxHU: "\u2569",
		boxminus: "\u229F",
		boxplus: "\u229E",
		boxtimes: "\u22A0",
		boxul: "\u2518",
		boxuL: "\u255B",
		boxUl: "\u255C",
		boxUL: "\u255D",
		boxur: "\u2514",
		boxuR: "\u2558",
		boxUr: "\u2559",
		boxUR: "\u255A",
		boxv: "\u2502",
		boxV: "\u2551",
		boxvh: "\u253C",
		boxvH: "\u256A",
		boxVh: "\u256B",
		boxVH: "\u256C",
		boxvl: "\u2524",
		boxvL: "\u2561",
		boxVl: "\u2562",
		boxVL: "\u2563",
		boxvr: "\u251C",
		boxvR: "\u255E",
		boxVr: "\u255F",
		boxVR: "\u2560",
		bprime: "\u2035",
		breve: "\u02D8",
		Breve: "\u02D8",
		brvbar: "\xA6",
		bscr: "\u{1D4B7}",
		Bscr: "\u212C",
		bsemi: "\u204F",
		bsim: "\u223D",
		bsime: "\u22CD",
		bsolb: "\u29C5",
		bsol: "\\",
		bsolhsub: "\u27C8",
		bull: "\u2022",
		bullet: "\u2022",
		bump: "\u224E",
		bumpE: "\u2AAE",
		bumpe: "\u224F",
		Bumpeq: "\u224E",
		bumpeq: "\u224F",
		Cacute: "\u0106",
		cacute: "\u0107",
		capand: "\u2A44",
		capbrcup: "\u2A49",
		capcap: "\u2A4B",
		cap: "\u2229",
		Cap: "\u22D2",
		capcup: "\u2A47",
		capdot: "\u2A40",
		CapitalDifferentialD: "\u2145",
		caps: "\u2229\uFE00",
		caret: "\u2041",
		caron: "\u02C7",
		Cayleys: "\u212D",
		ccaps: "\u2A4D",
		Ccaron: "\u010C",
		ccaron: "\u010D",
		Ccedil: "\xC7",
		ccedil: "\xE7",
		Ccirc: "\u0108",
		ccirc: "\u0109",
		Cconint: "\u2230",
		ccups: "\u2A4C",
		ccupssm: "\u2A50",
		Cdot: "\u010A",
		cdot: "\u010B",
		cedil: "\xB8",
		Cedilla: "\xB8",
		cemptyv: "\u29B2",
		cent: "\xA2",
		centerdot: "\xB7",
		CenterDot: "\xB7",
		cfr: "\u{1D520}",
		Cfr: "\u212D",
		CHcy: "\u0427",
		chcy: "\u0447",
		check: "\u2713",
		checkmark: "\u2713",
		Chi: "\u03A7",
		chi: "\u03C7",
		circ: "\u02C6",
		circeq: "\u2257",
		circlearrowleft: "\u21BA",
		circlearrowright: "\u21BB",
		circledast: "\u229B",
		circledcirc: "\u229A",
		circleddash: "\u229D",
		CircleDot: "\u2299",
		circledR: "\xAE",
		circledS: "\u24C8",
		CircleMinus: "\u2296",
		CirclePlus: "\u2295",
		CircleTimes: "\u2297",
		cir: "\u25CB",
		cirE: "\u29C3",
		cire: "\u2257",
		cirfnint: "\u2A10",
		cirmid: "\u2AEF",
		cirscir: "\u29C2",
		ClockwiseContourIntegral: "\u2232",
		CloseCurlyDoubleQuote: "\u201D",
		CloseCurlyQuote: "\u2019",
		clubs: "\u2663",
		clubsuit: "\u2663",
		colon: ":",
		Colon: "\u2237",
		Colone: "\u2A74",
		colone: "\u2254",
		coloneq: "\u2254",
		comma: ",",
		commat: "@",
		comp: "\u2201",
		compfn: "\u2218",
		complement: "\u2201",
		complexes: "\u2102",
		cong: "\u2245",
		congdot: "\u2A6D",
		Congruent: "\u2261",
		conint: "\u222E",
		Conint: "\u222F",
		ContourIntegral: "\u222E",
		copf: "\u{1D554}",
		Copf: "\u2102",
		coprod: "\u2210",
		Coproduct: "\u2210",
		copy: "\xA9",
		COPY: "\xA9",
		copysr: "\u2117",
		CounterClockwiseContourIntegral: "\u2233",
		crarr: "\u21B5",
		cross: "\u2717",
		Cross: "\u2A2F",
		Cscr: "\u{1D49E}",
		cscr: "\u{1D4B8}",
		csub: "\u2ACF",
		csube: "\u2AD1",
		csup: "\u2AD0",
		csupe: "\u2AD2",
		ctdot: "\u22EF",
		cudarrl: "\u2938",
		cudarrr: "\u2935",
		cuepr: "\u22DE",
		cuesc: "\u22DF",
		cularr: "\u21B6",
		cularrp: "\u293D",
		cupbrcap: "\u2A48",
		cupcap: "\u2A46",
		CupCap: "\u224D",
		cup: "\u222A",
		Cup: "\u22D3",
		cupcup: "\u2A4A",
		cupdot: "\u228D",
		cupor: "\u2A45",
		cups: "\u222A\uFE00",
		curarr: "\u21B7",
		curarrm: "\u293C",
		curlyeqprec: "\u22DE",
		curlyeqsucc: "\u22DF",
		curlyvee: "\u22CE",
		curlywedge: "\u22CF",
		curren: "\xA4",
		curvearrowleft: "\u21B6",
		curvearrowright: "\u21B7",
		cuvee: "\u22CE",
		cuwed: "\u22CF",
		cwconint: "\u2232",
		cwint: "\u2231",
		cylcty: "\u232D",
		dagger: "\u2020",
		Dagger: "\u2021",
		daleth: "\u2138",
		darr: "\u2193",
		Darr: "\u21A1",
		dArr: "\u21D3",
		dash: "\u2010",
		Dashv: "\u2AE4",
		dashv: "\u22A3",
		dbkarow: "\u290F",
		dblac: "\u02DD",
		Dcaron: "\u010E",
		dcaron: "\u010F",
		Dcy: "\u0414",
		dcy: "\u0434",
		ddagger: "\u2021",
		ddarr: "\u21CA",
		DD: "\u2145",
		dd: "\u2146",
		DDotrahd: "\u2911",
		ddotseq: "\u2A77",
		deg: "\xB0",
		Del: "\u2207",
		Delta: "\u0394",
		delta: "\u03B4",
		demptyv: "\u29B1",
		dfisht: "\u297F",
		Dfr: "\u{1D507}",
		dfr: "\u{1D521}",
		dHar: "\u2965",
		dharl: "\u21C3",
		dharr: "\u21C2",
		DiacriticalAcute: "\xB4",
		DiacriticalDot: "\u02D9",
		DiacriticalDoubleAcute: "\u02DD",
		DiacriticalGrave: "`",
		DiacriticalTilde: "\u02DC",
		diam: "\u22C4",
		diamond: "\u22C4",
		Diamond: "\u22C4",
		diamondsuit: "\u2666",
		diams: "\u2666",
		die: "\xA8",
		DifferentialD: "\u2146",
		digamma: "\u03DD",
		disin: "\u22F2",
		div: "\xF7",
		divide: "\xF7",
		divideontimes: "\u22C7",
		divonx: "\u22C7",
		DJcy: "\u0402",
		djcy: "\u0452",
		dlcorn: "\u231E",
		dlcrop: "\u230D",
		dollar: "$",
		Dopf: "\u{1D53B}",
		dopf: "\u{1D555}",
		Dot: "\xA8",
		dot: "\u02D9",
		DotDot: "\u20DC",
		doteq: "\u2250",
		doteqdot: "\u2251",
		DotEqual: "\u2250",
		dotminus: "\u2238",
		dotplus: "\u2214",
		dotsquare: "\u22A1",
		doublebarwedge: "\u2306",
		DoubleContourIntegral: "\u222F",
		DoubleDot: "\xA8",
		DoubleDownArrow: "\u21D3",
		DoubleLeftArrow: "\u21D0",
		DoubleLeftRightArrow: "\u21D4",
		DoubleLeftTee: "\u2AE4",
		DoubleLongLeftArrow: "\u27F8",
		DoubleLongLeftRightArrow: "\u27FA",
		DoubleLongRightArrow: "\u27F9",
		DoubleRightArrow: "\u21D2",
		DoubleRightTee: "\u22A8",
		DoubleUpArrow: "\u21D1",
		DoubleUpDownArrow: "\u21D5",
		DoubleVerticalBar: "\u2225",
		DownArrowBar: "\u2913",
		downarrow: "\u2193",
		DownArrow: "\u2193",
		Downarrow: "\u21D3",
		DownArrowUpArrow: "\u21F5",
		DownBreve: "\u0311",
		downdownarrows: "\u21CA",
		downharpoonleft: "\u21C3",
		downharpoonright: "\u21C2",
		DownLeftRightVector: "\u2950",
		DownLeftTeeVector: "\u295E",
		DownLeftVectorBar: "\u2956",
		DownLeftVector: "\u21BD",
		DownRightTeeVector: "\u295F",
		DownRightVectorBar: "\u2957",
		DownRightVector: "\u21C1",
		DownTeeArrow: "\u21A7",
		DownTee: "\u22A4",
		drbkarow: "\u2910",
		drcorn: "\u231F",
		drcrop: "\u230C",
		Dscr: "\u{1D49F}",
		dscr: "\u{1D4B9}",
		DScy: "\u0405",
		dscy: "\u0455",
		dsol: "\u29F6",
		Dstrok: "\u0110",
		dstrok: "\u0111",
		dtdot: "\u22F1",
		dtri: "\u25BF",
		dtrif: "\u25BE",
		duarr: "\u21F5",
		duhar: "\u296F",
		dwangle: "\u29A6",
		DZcy: "\u040F",
		dzcy: "\u045F",
		dzigrarr: "\u27FF",
		Eacute: "\xC9",
		eacute: "\xE9",
		easter: "\u2A6E",
		Ecaron: "\u011A",
		ecaron: "\u011B",
		Ecirc: "\xCA",
		ecirc: "\xEA",
		ecir: "\u2256",
		ecolon: "\u2255",
		Ecy: "\u042D",
		ecy: "\u044D",
		eDDot: "\u2A77",
		Edot: "\u0116",
		edot: "\u0117",
		eDot: "\u2251",
		ee: "\u2147",
		efDot: "\u2252",
		Efr: "\u{1D508}",
		efr: "\u{1D522}",
		eg: "\u2A9A",
		Egrave: "\xC8",
		egrave: "\xE8",
		egs: "\u2A96",
		egsdot: "\u2A98",
		el: "\u2A99",
		Element: "\u2208",
		elinters: "\u23E7",
		ell: "\u2113",
		els: "\u2A95",
		elsdot: "\u2A97",
		Emacr: "\u0112",
		emacr: "\u0113",
		empty: "\u2205",
		emptyset: "\u2205",
		EmptySmallSquare: "\u25FB",
		emptyv: "\u2205",
		EmptyVerySmallSquare: "\u25AB",
		emsp13: "\u2004",
		emsp14: "\u2005",
		emsp: "\u2003",
		ENG: "\u014A",
		eng: "\u014B",
		ensp: "\u2002",
		Eogon: "\u0118",
		eogon: "\u0119",
		Eopf: "\u{1D53C}",
		eopf: "\u{1D556}",
		epar: "\u22D5",
		eparsl: "\u29E3",
		eplus: "\u2A71",
		epsi: "\u03B5",
		Epsilon: "\u0395",
		epsilon: "\u03B5",
		epsiv: "\u03F5",
		eqcirc: "\u2256",
		eqcolon: "\u2255",
		eqsim: "\u2242",
		eqslantgtr: "\u2A96",
		eqslantless: "\u2A95",
		Equal: "\u2A75",
		equals: "=",
		EqualTilde: "\u2242",
		equest: "\u225F",
		Equilibrium: "\u21CC",
		equiv: "\u2261",
		equivDD: "\u2A78",
		eqvparsl: "\u29E5",
		erarr: "\u2971",
		erDot: "\u2253",
		escr: "\u212F",
		Escr: "\u2130",
		esdot: "\u2250",
		Esim: "\u2A73",
		esim: "\u2242",
		Eta: "\u0397",
		eta: "\u03B7",
		ETH: "\xD0",
		eth: "\xF0",
		Euml: "\xCB",
		euml: "\xEB",
		euro: "\u20AC",
		excl: "!",
		exist: "\u2203",
		Exists: "\u2203",
		expectation: "\u2130",
		exponentiale: "\u2147",
		ExponentialE: "\u2147",
		fallingdotseq: "\u2252",
		Fcy: "\u0424",
		fcy: "\u0444",
		female: "\u2640",
		ffilig: "\uFB03",
		fflig: "\uFB00",
		ffllig: "\uFB04",
		Ffr: "\u{1D509}",
		ffr: "\u{1D523}",
		filig: "\uFB01",
		FilledSmallSquare: "\u25FC",
		FilledVerySmallSquare: "\u25AA",
		fjlig: "fj",
		flat: "\u266D",
		fllig: "\uFB02",
		fltns: "\u25B1",
		fnof: "\u0192",
		Fopf: "\u{1D53D}",
		fopf: "\u{1D557}",
		forall: "\u2200",
		ForAll: "\u2200",
		fork: "\u22D4",
		forkv: "\u2AD9",
		Fouriertrf: "\u2131",
		fpartint: "\u2A0D",
		frac12: "\xBD",
		frac13: "\u2153",
		frac14: "\xBC",
		frac15: "\u2155",
		frac16: "\u2159",
		frac18: "\u215B",
		frac23: "\u2154",
		frac25: "\u2156",
		frac34: "\xBE",
		frac35: "\u2157",
		frac38: "\u215C",
		frac45: "\u2158",
		frac56: "\u215A",
		frac58: "\u215D",
		frac78: "\u215E",
		frasl: "\u2044",
		frown: "\u2322",
		fscr: "\u{1D4BB}",
		Fscr: "\u2131",
		gacute: "\u01F5",
		Gamma: "\u0393",
		gamma: "\u03B3",
		Gammad: "\u03DC",
		gammad: "\u03DD",
		gap: "\u2A86",
		Gbreve: "\u011E",
		gbreve: "\u011F",
		Gcedil: "\u0122",
		Gcirc: "\u011C",
		gcirc: "\u011D",
		Gcy: "\u0413",
		gcy: "\u0433",
		Gdot: "\u0120",
		gdot: "\u0121",
		ge: "\u2265",
		gE: "\u2267",
		gEl: "\u2A8C",
		gel: "\u22DB",
		geq: "\u2265",
		geqq: "\u2267",
		geqslant: "\u2A7E",
		gescc: "\u2AA9",
		ges: "\u2A7E",
		gesdot: "\u2A80",
		gesdoto: "\u2A82",
		gesdotol: "\u2A84",
		gesl: "\u22DB\uFE00",
		gesles: "\u2A94",
		Gfr: "\u{1D50A}",
		gfr: "\u{1D524}",
		gg: "\u226B",
		Gg: "\u22D9",
		ggg: "\u22D9",
		gimel: "\u2137",
		GJcy: "\u0403",
		gjcy: "\u0453",
		gla: "\u2AA5",
		gl: "\u2277",
		glE: "\u2A92",
		glj: "\u2AA4",
		gnap: "\u2A8A",
		gnapprox: "\u2A8A",
		gne: "\u2A88",
		gnE: "\u2269",
		gneq: "\u2A88",
		gneqq: "\u2269",
		gnsim: "\u22E7",
		Gopf: "\u{1D53E}",
		gopf: "\u{1D558}",
		grave: "`",
		GreaterEqual: "\u2265",
		GreaterEqualLess: "\u22DB",
		GreaterFullEqual: "\u2267",
		GreaterGreater: "\u2AA2",
		GreaterLess: "\u2277",
		GreaterSlantEqual: "\u2A7E",
		GreaterTilde: "\u2273",
		Gscr: "\u{1D4A2}",
		gscr: "\u210A",
		gsim: "\u2273",
		gsime: "\u2A8E",
		gsiml: "\u2A90",
		gtcc: "\u2AA7",
		gtcir: "\u2A7A",
		gt: ">",
		GT: ">",
		Gt: "\u226B",
		gtdot: "\u22D7",
		gtlPar: "\u2995",
		gtquest: "\u2A7C",
		gtrapprox: "\u2A86",
		gtrarr: "\u2978",
		gtrdot: "\u22D7",
		gtreqless: "\u22DB",
		gtreqqless: "\u2A8C",
		gtrless: "\u2277",
		gtrsim: "\u2273",
		gvertneqq: "\u2269\uFE00",
		gvnE: "\u2269\uFE00",
		Hacek: "\u02C7",
		hairsp: "\u200A",
		half: "\xBD",
		hamilt: "\u210B",
		HARDcy: "\u042A",
		hardcy: "\u044A",
		harrcir: "\u2948",
		harr: "\u2194",
		hArr: "\u21D4",
		harrw: "\u21AD",
		Hat: "^",
		hbar: "\u210F",
		Hcirc: "\u0124",
		hcirc: "\u0125",
		hearts: "\u2665",
		heartsuit: "\u2665",
		hellip: "\u2026",
		hercon: "\u22B9",
		hfr: "\u{1D525}",
		Hfr: "\u210C",
		HilbertSpace: "\u210B",
		hksearow: "\u2925",
		hkswarow: "\u2926",
		hoarr: "\u21FF",
		homtht: "\u223B",
		hookleftarrow: "\u21A9",
		hookrightarrow: "\u21AA",
		hopf: "\u{1D559}",
		Hopf: "\u210D",
		horbar: "\u2015",
		HorizontalLine: "\u2500",
		hscr: "\u{1D4BD}",
		Hscr: "\u210B",
		hslash: "\u210F",
		Hstrok: "\u0126",
		hstrok: "\u0127",
		HumpDownHump: "\u224E",
		HumpEqual: "\u224F",
		hybull: "\u2043",
		hyphen: "\u2010",
		Iacute: "\xCD",
		iacute: "\xED",
		ic: "\u2063",
		Icirc: "\xCE",
		icirc: "\xEE",
		Icy: "\u0418",
		icy: "\u0438",
		Idot: "\u0130",
		IEcy: "\u0415",
		iecy: "\u0435",
		iexcl: "\xA1",
		iff: "\u21D4",
		ifr: "\u{1D526}",
		Ifr: "\u2111",
		Igrave: "\xCC",
		igrave: "\xEC",
		ii: "\u2148",
		iiiint: "\u2A0C",
		iiint: "\u222D",
		iinfin: "\u29DC",
		iiota: "\u2129",
		IJlig: "\u0132",
		ijlig: "\u0133",
		Imacr: "\u012A",
		imacr: "\u012B",
		image: "\u2111",
		ImaginaryI: "\u2148",
		imagline: "\u2110",
		imagpart: "\u2111",
		imath: "\u0131",
		Im: "\u2111",
		imof: "\u22B7",
		imped: "\u01B5",
		Implies: "\u21D2",
		incare: "\u2105",
		in: "\u2208",
		infin: "\u221E",
		infintie: "\u29DD",
		inodot: "\u0131",
		intcal: "\u22BA",
		int: "\u222B",
		Int: "\u222C",
		integers: "\u2124",
		Integral: "\u222B",
		intercal: "\u22BA",
		Intersection: "\u22C2",
		intlarhk: "\u2A17",
		intprod: "\u2A3C",
		InvisibleComma: "\u2063",
		InvisibleTimes: "\u2062",
		IOcy: "\u0401",
		iocy: "\u0451",
		Iogon: "\u012E",
		iogon: "\u012F",
		Iopf: "\u{1D540}",
		iopf: "\u{1D55A}",
		Iota: "\u0399",
		iota: "\u03B9",
		iprod: "\u2A3C",
		iquest: "\xBF",
		iscr: "\u{1D4BE}",
		Iscr: "\u2110",
		isin: "\u2208",
		isindot: "\u22F5",
		isinE: "\u22F9",
		isins: "\u22F4",
		isinsv: "\u22F3",
		isinv: "\u2208",
		it: "\u2062",
		Itilde: "\u0128",
		itilde: "\u0129",
		Iukcy: "\u0406",
		iukcy: "\u0456",
		Iuml: "\xCF",
		iuml: "\xEF",
		Jcirc: "\u0134",
		jcirc: "\u0135",
		Jcy: "\u0419",
		jcy: "\u0439",
		Jfr: "\u{1D50D}",
		jfr: "\u{1D527}",
		jmath: "\u0237",
		Jopf: "\u{1D541}",
		jopf: "\u{1D55B}",
		Jscr: "\u{1D4A5}",
		jscr: "\u{1D4BF}",
		Jsercy: "\u0408",
		jsercy: "\u0458",
		Jukcy: "\u0404",
		jukcy: "\u0454",
		Kappa: "\u039A",
		kappa: "\u03BA",
		kappav: "\u03F0",
		Kcedil: "\u0136",
		kcedil: "\u0137",
		Kcy: "\u041A",
		kcy: "\u043A",
		Kfr: "\u{1D50E}",
		kfr: "\u{1D528}",
		kgreen: "\u0138",
		KHcy: "\u0425",
		khcy: "\u0445",
		KJcy: "\u040C",
		kjcy: "\u045C",
		Kopf: "\u{1D542}",
		kopf: "\u{1D55C}",
		Kscr: "\u{1D4A6}",
		kscr: "\u{1D4C0}",
		lAarr: "\u21DA",
		Lacute: "\u0139",
		lacute: "\u013A",
		laemptyv: "\u29B4",
		lagran: "\u2112",
		Lambda: "\u039B",
		lambda: "\u03BB",
		lang: "\u27E8",
		Lang: "\u27EA",
		langd: "\u2991",
		langle: "\u27E8",
		lap: "\u2A85",
		Laplacetrf: "\u2112",
		laquo: "\xAB",
		larrb: "\u21E4",
		larrbfs: "\u291F",
		larr: "\u2190",
		Larr: "\u219E",
		lArr: "\u21D0",
		larrfs: "\u291D",
		larrhk: "\u21A9",
		larrlp: "\u21AB",
		larrpl: "\u2939",
		larrsim: "\u2973",
		larrtl: "\u21A2",
		latail: "\u2919",
		lAtail: "\u291B",
		lat: "\u2AAB",
		late: "\u2AAD",
		lates: "\u2AAD\uFE00",
		lbarr: "\u290C",
		lBarr: "\u290E",
		lbbrk: "\u2772",
		lbrace: "{",
		lbrack: "[",
		lbrke: "\u298B",
		lbrksld: "\u298F",
		lbrkslu: "\u298D",
		Lcaron: "\u013D",
		lcaron: "\u013E",
		Lcedil: "\u013B",
		lcedil: "\u013C",
		lceil: "\u2308",
		lcub: "{",
		Lcy: "\u041B",
		lcy: "\u043B",
		ldca: "\u2936",
		ldquo: "\u201C",
		ldquor: "\u201E",
		ldrdhar: "\u2967",
		ldrushar: "\u294B",
		ldsh: "\u21B2",
		le: "\u2264",
		lE: "\u2266",
		LeftAngleBracket: "\u27E8",
		LeftArrowBar: "\u21E4",
		leftarrow: "\u2190",
		LeftArrow: "\u2190",
		Leftarrow: "\u21D0",
		LeftArrowRightArrow: "\u21C6",
		leftarrowtail: "\u21A2",
		LeftCeiling: "\u2308",
		LeftDoubleBracket: "\u27E6",
		LeftDownTeeVector: "\u2961",
		LeftDownVectorBar: "\u2959",
		LeftDownVector: "\u21C3",
		LeftFloor: "\u230A",
		leftharpoondown: "\u21BD",
		leftharpoonup: "\u21BC",
		leftleftarrows: "\u21C7",
		leftrightarrow: "\u2194",
		LeftRightArrow: "\u2194",
		Leftrightarrow: "\u21D4",
		leftrightarrows: "\u21C6",
		leftrightharpoons: "\u21CB",
		leftrightsquigarrow: "\u21AD",
		LeftRightVector: "\u294E",
		LeftTeeArrow: "\u21A4",
		LeftTee: "\u22A3",
		LeftTeeVector: "\u295A",
		leftthreetimes: "\u22CB",
		LeftTriangleBar: "\u29CF",
		LeftTriangle: "\u22B2",
		LeftTriangleEqual: "\u22B4",
		LeftUpDownVector: "\u2951",
		LeftUpTeeVector: "\u2960",
		LeftUpVectorBar: "\u2958",
		LeftUpVector: "\u21BF",
		LeftVectorBar: "\u2952",
		LeftVector: "\u21BC",
		lEg: "\u2A8B",
		leg: "\u22DA",
		leq: "\u2264",
		leqq: "\u2266",
		leqslant: "\u2A7D",
		lescc: "\u2AA8",
		les: "\u2A7D",
		lesdot: "\u2A7F",
		lesdoto: "\u2A81",
		lesdotor: "\u2A83",
		lesg: "\u22DA\uFE00",
		lesges: "\u2A93",
		lessapprox: "\u2A85",
		lessdot: "\u22D6",
		lesseqgtr: "\u22DA",
		lesseqqgtr: "\u2A8B",
		LessEqualGreater: "\u22DA",
		LessFullEqual: "\u2266",
		LessGreater: "\u2276",
		lessgtr: "\u2276",
		LessLess: "\u2AA1",
		lesssim: "\u2272",
		LessSlantEqual: "\u2A7D",
		LessTilde: "\u2272",
		lfisht: "\u297C",
		lfloor: "\u230A",
		Lfr: "\u{1D50F}",
		lfr: "\u{1D529}",
		lg: "\u2276",
		lgE: "\u2A91",
		lHar: "\u2962",
		lhard: "\u21BD",
		lharu: "\u21BC",
		lharul: "\u296A",
		lhblk: "\u2584",
		LJcy: "\u0409",
		ljcy: "\u0459",
		llarr: "\u21C7",
		ll: "\u226A",
		Ll: "\u22D8",
		llcorner: "\u231E",
		Lleftarrow: "\u21DA",
		llhard: "\u296B",
		lltri: "\u25FA",
		Lmidot: "\u013F",
		lmidot: "\u0140",
		lmoustache: "\u23B0",
		lmoust: "\u23B0",
		lnap: "\u2A89",
		lnapprox: "\u2A89",
		lne: "\u2A87",
		lnE: "\u2268",
		lneq: "\u2A87",
		lneqq: "\u2268",
		lnsim: "\u22E6",
		loang: "\u27EC",
		loarr: "\u21FD",
		lobrk: "\u27E6",
		longleftarrow: "\u27F5",
		LongLeftArrow: "\u27F5",
		Longleftarrow: "\u27F8",
		longleftrightarrow: "\u27F7",
		LongLeftRightArrow: "\u27F7",
		Longleftrightarrow: "\u27FA",
		longmapsto: "\u27FC",
		longrightarrow: "\u27F6",
		LongRightArrow: "\u27F6",
		Longrightarrow: "\u27F9",
		looparrowleft: "\u21AB",
		looparrowright: "\u21AC",
		lopar: "\u2985",
		Lopf: "\u{1D543}",
		lopf: "\u{1D55D}",
		loplus: "\u2A2D",
		lotimes: "\u2A34",
		lowast: "\u2217",
		lowbar: "_",
		LowerLeftArrow: "\u2199",
		LowerRightArrow: "\u2198",
		loz: "\u25CA",
		lozenge: "\u25CA",
		lozf: "\u29EB",
		lpar: "(",
		lparlt: "\u2993",
		lrarr: "\u21C6",
		lrcorner: "\u231F",
		lrhar: "\u21CB",
		lrhard: "\u296D",
		lrm: "\u200E",
		lrtri: "\u22BF",
		lsaquo: "\u2039",
		lscr: "\u{1D4C1}",
		Lscr: "\u2112",
		lsh: "\u21B0",
		Lsh: "\u21B0",
		lsim: "\u2272",
		lsime: "\u2A8D",
		lsimg: "\u2A8F",
		lsqb: "[",
		lsquo: "\u2018",
		lsquor: "\u201A",
		Lstrok: "\u0141",
		lstrok: "\u0142",
		ltcc: "\u2AA6",
		ltcir: "\u2A79",
		lt: "<",
		LT: "<",
		Lt: "\u226A",
		ltdot: "\u22D6",
		lthree: "\u22CB",
		ltimes: "\u22C9",
		ltlarr: "\u2976",
		ltquest: "\u2A7B",
		ltri: "\u25C3",
		ltrie: "\u22B4",
		ltrif: "\u25C2",
		ltrPar: "\u2996",
		lurdshar: "\u294A",
		luruhar: "\u2966",
		lvertneqq: "\u2268\uFE00",
		lvnE: "\u2268\uFE00",
		macr: "\xAF",
		male: "\u2642",
		malt: "\u2720",
		maltese: "\u2720",
		Map: "\u2905",
		map: "\u21A6",
		mapsto: "\u21A6",
		mapstodown: "\u21A7",
		mapstoleft: "\u21A4",
		mapstoup: "\u21A5",
		marker: "\u25AE",
		mcomma: "\u2A29",
		Mcy: "\u041C",
		mcy: "\u043C",
		mdash: "\u2014",
		mDDot: "\u223A",
		measuredangle: "\u2221",
		MediumSpace: "\u205F",
		Mellintrf: "\u2133",
		Mfr: "\u{1D510}",
		mfr: "\u{1D52A}",
		mho: "\u2127",
		micro: "\xB5",
		midast: "*",
		midcir: "\u2AF0",
		mid: "\u2223",
		middot: "\xB7",
		minusb: "\u229F",
		minus: "\u2212",
		minusd: "\u2238",
		minusdu: "\u2A2A",
		MinusPlus: "\u2213",
		mlcp: "\u2ADB",
		mldr: "\u2026",
		mnplus: "\u2213",
		models: "\u22A7",
		Mopf: "\u{1D544}",
		mopf: "\u{1D55E}",
		mp: "\u2213",
		mscr: "\u{1D4C2}",
		Mscr: "\u2133",
		mstpos: "\u223E",
		Mu: "\u039C",
		mu: "\u03BC",
		multimap: "\u22B8",
		mumap: "\u22B8",
		nabla: "\u2207",
		Nacute: "\u0143",
		nacute: "\u0144",
		nang: "\u2220\u20D2",
		nap: "\u2249",
		napE: "\u2A70\u0338",
		napid: "\u224B\u0338",
		napos: "\u0149",
		napprox: "\u2249",
		natural: "\u266E",
		naturals: "\u2115",
		natur: "\u266E",
		nbsp: "\xA0",
		nbump: "\u224E\u0338",
		nbumpe: "\u224F\u0338",
		ncap: "\u2A43",
		Ncaron: "\u0147",
		ncaron: "\u0148",
		Ncedil: "\u0145",
		ncedil: "\u0146",
		ncong: "\u2247",
		ncongdot: "\u2A6D\u0338",
		ncup: "\u2A42",
		Ncy: "\u041D",
		ncy: "\u043D",
		ndash: "\u2013",
		nearhk: "\u2924",
		nearr: "\u2197",
		neArr: "\u21D7",
		nearrow: "\u2197",
		ne: "\u2260",
		nedot: "\u2250\u0338",
		NegativeMediumSpace: "\u200B",
		NegativeThickSpace: "\u200B",
		NegativeThinSpace: "\u200B",
		NegativeVeryThinSpace: "\u200B",
		nequiv: "\u2262",
		nesear: "\u2928",
		nesim: "\u2242\u0338",
		NestedGreaterGreater: "\u226B",
		NestedLessLess: "\u226A",
		NewLine: `
`,
		nexist: "\u2204",
		nexists: "\u2204",
		Nfr: "\u{1D511}",
		nfr: "\u{1D52B}",
		ngE: "\u2267\u0338",
		nge: "\u2271",
		ngeq: "\u2271",
		ngeqq: "\u2267\u0338",
		ngeqslant: "\u2A7E\u0338",
		nges: "\u2A7E\u0338",
		nGg: "\u22D9\u0338",
		ngsim: "\u2275",
		nGt: "\u226B\u20D2",
		ngt: "\u226F",
		ngtr: "\u226F",
		nGtv: "\u226B\u0338",
		nharr: "\u21AE",
		nhArr: "\u21CE",
		nhpar: "\u2AF2",
		ni: "\u220B",
		nis: "\u22FC",
		nisd: "\u22FA",
		niv: "\u220B",
		NJcy: "\u040A",
		njcy: "\u045A",
		nlarr: "\u219A",
		nlArr: "\u21CD",
		nldr: "\u2025",
		nlE: "\u2266\u0338",
		nle: "\u2270",
		nleftarrow: "\u219A",
		nLeftarrow: "\u21CD",
		nleftrightarrow: "\u21AE",
		nLeftrightarrow: "\u21CE",
		nleq: "\u2270",
		nleqq: "\u2266\u0338",
		nleqslant: "\u2A7D\u0338",
		nles: "\u2A7D\u0338",
		nless: "\u226E",
		nLl: "\u22D8\u0338",
		nlsim: "\u2274",
		nLt: "\u226A\u20D2",
		nlt: "\u226E",
		nltri: "\u22EA",
		nltrie: "\u22EC",
		nLtv: "\u226A\u0338",
		nmid: "\u2224",
		NoBreak: "\u2060",
		NonBreakingSpace: "\xA0",
		nopf: "\u{1D55F}",
		Nopf: "\u2115",
		Not: "\u2AEC",
		not: "\xAC",
		NotCongruent: "\u2262",
		NotCupCap: "\u226D",
		NotDoubleVerticalBar: "\u2226",
		NotElement: "\u2209",
		NotEqual: "\u2260",
		NotEqualTilde: "\u2242\u0338",
		NotExists: "\u2204",
		NotGreater: "\u226F",
		NotGreaterEqual: "\u2271",
		NotGreaterFullEqual: "\u2267\u0338",
		NotGreaterGreater: "\u226B\u0338",
		NotGreaterLess: "\u2279",
		NotGreaterSlantEqual: "\u2A7E\u0338",
		NotGreaterTilde: "\u2275",
		NotHumpDownHump: "\u224E\u0338",
		NotHumpEqual: "\u224F\u0338",
		notin: "\u2209",
		notindot: "\u22F5\u0338",
		notinE: "\u22F9\u0338",
		notinva: "\u2209",
		notinvb: "\u22F7",
		notinvc: "\u22F6",
		NotLeftTriangleBar: "\u29CF\u0338",
		NotLeftTriangle: "\u22EA",
		NotLeftTriangleEqual: "\u22EC",
		NotLess: "\u226E",
		NotLessEqual: "\u2270",
		NotLessGreater: "\u2278",
		NotLessLess: "\u226A\u0338",
		NotLessSlantEqual: "\u2A7D\u0338",
		NotLessTilde: "\u2274",
		NotNestedGreaterGreater: "\u2AA2\u0338",
		NotNestedLessLess: "\u2AA1\u0338",
		notni: "\u220C",
		notniva: "\u220C",
		notnivb: "\u22FE",
		notnivc: "\u22FD",
		NotPrecedes: "\u2280",
		NotPrecedesEqual: "\u2AAF\u0338",
		NotPrecedesSlantEqual: "\u22E0",
		NotReverseElement: "\u220C",
		NotRightTriangleBar: "\u29D0\u0338",
		NotRightTriangle: "\u22EB",
		NotRightTriangleEqual: "\u22ED",
		NotSquareSubset: "\u228F\u0338",
		NotSquareSubsetEqual: "\u22E2",
		NotSquareSuperset: "\u2290\u0338",
		NotSquareSupersetEqual: "\u22E3",
		NotSubset: "\u2282\u20D2",
		NotSubsetEqual: "\u2288",
		NotSucceeds: "\u2281",
		NotSucceedsEqual: "\u2AB0\u0338",
		NotSucceedsSlantEqual: "\u22E1",
		NotSucceedsTilde: "\u227F\u0338",
		NotSuperset: "\u2283\u20D2",
		NotSupersetEqual: "\u2289",
		NotTilde: "\u2241",
		NotTildeEqual: "\u2244",
		NotTildeFullEqual: "\u2247",
		NotTildeTilde: "\u2249",
		NotVerticalBar: "\u2224",
		nparallel: "\u2226",
		npar: "\u2226",
		nparsl: "\u2AFD\u20E5",
		npart: "\u2202\u0338",
		npolint: "\u2A14",
		npr: "\u2280",
		nprcue: "\u22E0",
		nprec: "\u2280",
		npreceq: "\u2AAF\u0338",
		npre: "\u2AAF\u0338",
		nrarrc: "\u2933\u0338",
		nrarr: "\u219B",
		nrArr: "\u21CF",
		nrarrw: "\u219D\u0338",
		nrightarrow: "\u219B",
		nRightarrow: "\u21CF",
		nrtri: "\u22EB",
		nrtrie: "\u22ED",
		nsc: "\u2281",
		nsccue: "\u22E1",
		nsce: "\u2AB0\u0338",
		Nscr: "\u{1D4A9}",
		nscr: "\u{1D4C3}",
		nshortmid: "\u2224",
		nshortparallel: "\u2226",
		nsim: "\u2241",
		nsime: "\u2244",
		nsimeq: "\u2244",
		nsmid: "\u2224",
		nspar: "\u2226",
		nsqsube: "\u22E2",
		nsqsupe: "\u22E3",
		nsub: "\u2284",
		nsubE: "\u2AC5\u0338",
		nsube: "\u2288",
		nsubset: "\u2282\u20D2",
		nsubseteq: "\u2288",
		nsubseteqq: "\u2AC5\u0338",
		nsucc: "\u2281",
		nsucceq: "\u2AB0\u0338",
		nsup: "\u2285",
		nsupE: "\u2AC6\u0338",
		nsupe: "\u2289",
		nsupset: "\u2283\u20D2",
		nsupseteq: "\u2289",
		nsupseteqq: "\u2AC6\u0338",
		ntgl: "\u2279",
		Ntilde: "\xD1",
		ntilde: "\xF1",
		ntlg: "\u2278",
		ntriangleleft: "\u22EA",
		ntrianglelefteq: "\u22EC",
		ntriangleright: "\u22EB",
		ntrianglerighteq: "\u22ED",
		Nu: "\u039D",
		nu: "\u03BD",
		num: "#",
		numero: "\u2116",
		numsp: "\u2007",
		nvap: "\u224D\u20D2",
		nvdash: "\u22AC",
		nvDash: "\u22AD",
		nVdash: "\u22AE",
		nVDash: "\u22AF",
		nvge: "\u2265\u20D2",
		nvgt: ">\u20D2",
		nvHarr: "\u2904",
		nvinfin: "\u29DE",
		nvlArr: "\u2902",
		nvle: "\u2264\u20D2",
		nvlt: "<\u20D2",
		nvltrie: "\u22B4\u20D2",
		nvrArr: "\u2903",
		nvrtrie: "\u22B5\u20D2",
		nvsim: "\u223C\u20D2",
		nwarhk: "\u2923",
		nwarr: "\u2196",
		nwArr: "\u21D6",
		nwarrow: "\u2196",
		nwnear: "\u2927",
		Oacute: "\xD3",
		oacute: "\xF3",
		oast: "\u229B",
		Ocirc: "\xD4",
		ocirc: "\xF4",
		ocir: "\u229A",
		Ocy: "\u041E",
		ocy: "\u043E",
		odash: "\u229D",
		Odblac: "\u0150",
		odblac: "\u0151",
		odiv: "\u2A38",
		odot: "\u2299",
		odsold: "\u29BC",
		OElig: "\u0152",
		oelig: "\u0153",
		ofcir: "\u29BF",
		Ofr: "\u{1D512}",
		ofr: "\u{1D52C}",
		ogon: "\u02DB",
		Ograve: "\xD2",
		ograve: "\xF2",
		ogt: "\u29C1",
		ohbar: "\u29B5",
		ohm: "\u03A9",
		oint: "\u222E",
		olarr: "\u21BA",
		olcir: "\u29BE",
		olcross: "\u29BB",
		oline: "\u203E",
		olt: "\u29C0",
		Omacr: "\u014C",
		omacr: "\u014D",
		Omega: "\u03A9",
		omega: "\u03C9",
		Omicron: "\u039F",
		omicron: "\u03BF",
		omid: "\u29B6",
		ominus: "\u2296",
		Oopf: "\u{1D546}",
		oopf: "\u{1D560}",
		opar: "\u29B7",
		OpenCurlyDoubleQuote: "\u201C",
		OpenCurlyQuote: "\u2018",
		operp: "\u29B9",
		oplus: "\u2295",
		orarr: "\u21BB",
		Or: "\u2A54",
		or: "\u2228",
		ord: "\u2A5D",
		order: "\u2134",
		orderof: "\u2134",
		ordf: "\xAA",
		ordm: "\xBA",
		origof: "\u22B6",
		oror: "\u2A56",
		orslope: "\u2A57",
		orv: "\u2A5B",
		oS: "\u24C8",
		Oscr: "\u{1D4AA}",
		oscr: "\u2134",
		Oslash: "\xD8",
		oslash: "\xF8",
		osol: "\u2298",
		Otilde: "\xD5",
		otilde: "\xF5",
		otimesas: "\u2A36",
		Otimes: "\u2A37",
		otimes: "\u2297",
		Ouml: "\xD6",
		ouml: "\xF6",
		ovbar: "\u233D",
		OverBar: "\u203E",
		OverBrace: "\u23DE",
		OverBracket: "\u23B4",
		OverParenthesis: "\u23DC",
		para: "\xB6",
		parallel: "\u2225",
		par: "\u2225",
		parsim: "\u2AF3",
		parsl: "\u2AFD",
		part: "\u2202",
		PartialD: "\u2202",
		Pcy: "\u041F",
		pcy: "\u043F",
		percnt: "%",
		period: ".",
		permil: "\u2030",
		perp: "\u22A5",
		pertenk: "\u2031",
		Pfr: "\u{1D513}",
		pfr: "\u{1D52D}",
		Phi: "\u03A6",
		phi: "\u03C6",
		phiv: "\u03D5",
		phmmat: "\u2133",
		phone: "\u260E",
		Pi: "\u03A0",
		pi: "\u03C0",
		pitchfork: "\u22D4",
		piv: "\u03D6",
		planck: "\u210F",
		planckh: "\u210E",
		plankv: "\u210F",
		plusacir: "\u2A23",
		plusb: "\u229E",
		pluscir: "\u2A22",
		plus: "+",
		plusdo: "\u2214",
		plusdu: "\u2A25",
		pluse: "\u2A72",
		PlusMinus: "\xB1",
		plusmn: "\xB1",
		plussim: "\u2A26",
		plustwo: "\u2A27",
		pm: "\xB1",
		Poincareplane: "\u210C",
		pointint: "\u2A15",
		popf: "\u{1D561}",
		Popf: "\u2119",
		pound: "\xA3",
		prap: "\u2AB7",
		Pr: "\u2ABB",
		pr: "\u227A",
		prcue: "\u227C",
		precapprox: "\u2AB7",
		prec: "\u227A",
		preccurlyeq: "\u227C",
		Precedes: "\u227A",
		PrecedesEqual: "\u2AAF",
		PrecedesSlantEqual: "\u227C",
		PrecedesTilde: "\u227E",
		preceq: "\u2AAF",
		precnapprox: "\u2AB9",
		precneqq: "\u2AB5",
		precnsim: "\u22E8",
		pre: "\u2AAF",
		prE: "\u2AB3",
		precsim: "\u227E",
		prime: "\u2032",
		Prime: "\u2033",
		primes: "\u2119",
		prnap: "\u2AB9",
		prnE: "\u2AB5",
		prnsim: "\u22E8",
		prod: "\u220F",
		Product: "\u220F",
		profalar: "\u232E",
		profline: "\u2312",
		profsurf: "\u2313",
		prop: "\u221D",
		Proportional: "\u221D",
		Proportion: "\u2237",
		propto: "\u221D",
		prsim: "\u227E",
		prurel: "\u22B0",
		Pscr: "\u{1D4AB}",
		pscr: "\u{1D4C5}",
		Psi: "\u03A8",
		psi: "\u03C8",
		puncsp: "\u2008",
		Qfr: "\u{1D514}",
		qfr: "\u{1D52E}",
		qint: "\u2A0C",
		qopf: "\u{1D562}",
		Qopf: "\u211A",
		qprime: "\u2057",
		Qscr: "\u{1D4AC}",
		qscr: "\u{1D4C6}",
		quaternions: "\u210D",
		quatint: "\u2A16",
		quest: "?",
		questeq: "\u225F",
		quot: '"',
		QUOT: '"',
		rAarr: "\u21DB",
		race: "\u223D\u0331",
		Racute: "\u0154",
		racute: "\u0155",
		radic: "\u221A",
		raemptyv: "\u29B3",
		rang: "\u27E9",
		Rang: "\u27EB",
		rangd: "\u2992",
		range: "\u29A5",
		rangle: "\u27E9",
		raquo: "\xBB",
		rarrap: "\u2975",
		rarrb: "\u21E5",
		rarrbfs: "\u2920",
		rarrc: "\u2933",
		rarr: "\u2192",
		Rarr: "\u21A0",
		rArr: "\u21D2",
		rarrfs: "\u291E",
		rarrhk: "\u21AA",
		rarrlp: "\u21AC",
		rarrpl: "\u2945",
		rarrsim: "\u2974",
		Rarrtl: "\u2916",
		rarrtl: "\u21A3",
		rarrw: "\u219D",
		ratail: "\u291A",
		rAtail: "\u291C",
		ratio: "\u2236",
		rationals: "\u211A",
		rbarr: "\u290D",
		rBarr: "\u290F",
		RBarr: "\u2910",
		rbbrk: "\u2773",
		rbrace: "}",
		rbrack: "]",
		rbrke: "\u298C",
		rbrksld: "\u298E",
		rbrkslu: "\u2990",
		Rcaron: "\u0158",
		rcaron: "\u0159",
		Rcedil: "\u0156",
		rcedil: "\u0157",
		rceil: "\u2309",
		rcub: "}",
		Rcy: "\u0420",
		rcy: "\u0440",
		rdca: "\u2937",
		rdldhar: "\u2969",
		rdquo: "\u201D",
		rdquor: "\u201D",
		rdsh: "\u21B3",
		real: "\u211C",
		realine: "\u211B",
		realpart: "\u211C",
		reals: "\u211D",
		Re: "\u211C",
		rect: "\u25AD",
		reg: "\xAE",
		REG: "\xAE",
		ReverseElement: "\u220B",
		ReverseEquilibrium: "\u21CB",
		ReverseUpEquilibrium: "\u296F",
		rfisht: "\u297D",
		rfloor: "\u230B",
		rfr: "\u{1D52F}",
		Rfr: "\u211C",
		rHar: "\u2964",
		rhard: "\u21C1",
		rharu: "\u21C0",
		rharul: "\u296C",
		Rho: "\u03A1",
		rho: "\u03C1",
		rhov: "\u03F1",
		RightAngleBracket: "\u27E9",
		RightArrowBar: "\u21E5",
		rightarrow: "\u2192",
		RightArrow: "\u2192",
		Rightarrow: "\u21D2",
		RightArrowLeftArrow: "\u21C4",
		rightarrowtail: "\u21A3",
		RightCeiling: "\u2309",
		RightDoubleBracket: "\u27E7",
		RightDownTeeVector: "\u295D",
		RightDownVectorBar: "\u2955",
		RightDownVector: "\u21C2",
		RightFloor: "\u230B",
		rightharpoondown: "\u21C1",
		rightharpoonup: "\u21C0",
		rightleftarrows: "\u21C4",
		rightleftharpoons: "\u21CC",
		rightrightarrows: "\u21C9",
		rightsquigarrow: "\u219D",
		RightTeeArrow: "\u21A6",
		RightTee: "\u22A2",
		RightTeeVector: "\u295B",
		rightthreetimes: "\u22CC",
		RightTriangleBar: "\u29D0",
		RightTriangle: "\u22B3",
		RightTriangleEqual: "\u22B5",
		RightUpDownVector: "\u294F",
		RightUpTeeVector: "\u295C",
		RightUpVectorBar: "\u2954",
		RightUpVector: "\u21BE",
		RightVectorBar: "\u2953",
		RightVector: "\u21C0",
		ring: "\u02DA",
		risingdotseq: "\u2253",
		rlarr: "\u21C4",
		rlhar: "\u21CC",
		rlm: "\u200F",
		rmoustache: "\u23B1",
		rmoust: "\u23B1",
		rnmid: "\u2AEE",
		roang: "\u27ED",
		roarr: "\u21FE",
		robrk: "\u27E7",
		ropar: "\u2986",
		ropf: "\u{1D563}",
		Ropf: "\u211D",
		roplus: "\u2A2E",
		rotimes: "\u2A35",
		RoundImplies: "\u2970",
		rpar: ")",
		rpargt: "\u2994",
		rppolint: "\u2A12",
		rrarr: "\u21C9",
		Rrightarrow: "\u21DB",
		rsaquo: "\u203A",
		rscr: "\u{1D4C7}",
		Rscr: "\u211B",
		rsh: "\u21B1",
		Rsh: "\u21B1",
		rsqb: "]",
		rsquo: "\u2019",
		rsquor: "\u2019",
		rthree: "\u22CC",
		rtimes: "\u22CA",
		rtri: "\u25B9",
		rtrie: "\u22B5",
		rtrif: "\u25B8",
		rtriltri: "\u29CE",
		RuleDelayed: "\u29F4",
		ruluhar: "\u2968",
		rx: "\u211E",
		Sacute: "\u015A",
		sacute: "\u015B",
		sbquo: "\u201A",
		scap: "\u2AB8",
		Scaron: "\u0160",
		scaron: "\u0161",
		Sc: "\u2ABC",
		sc: "\u227B",
		sccue: "\u227D",
		sce: "\u2AB0",
		scE: "\u2AB4",
		Scedil: "\u015E",
		scedil: "\u015F",
		Scirc: "\u015C",
		scirc: "\u015D",
		scnap: "\u2ABA",
		scnE: "\u2AB6",
		scnsim: "\u22E9",
		scpolint: "\u2A13",
		scsim: "\u227F",
		Scy: "\u0421",
		scy: "\u0441",
		sdotb: "\u22A1",
		sdot: "\u22C5",
		sdote: "\u2A66",
		searhk: "\u2925",
		searr: "\u2198",
		seArr: "\u21D8",
		searrow: "\u2198",
		sect: "\xA7",
		semi: ";",
		seswar: "\u2929",
		setminus: "\u2216",
		setmn: "\u2216",
		sext: "\u2736",
		Sfr: "\u{1D516}",
		sfr: "\u{1D530}",
		sfrown: "\u2322",
		sharp: "\u266F",
		SHCHcy: "\u0429",
		shchcy: "\u0449",
		SHcy: "\u0428",
		shcy: "\u0448",
		ShortDownArrow: "\u2193",
		ShortLeftArrow: "\u2190",
		shortmid: "\u2223",
		shortparallel: "\u2225",
		ShortRightArrow: "\u2192",
		ShortUpArrow: "\u2191",
		shy: "\xAD",
		Sigma: "\u03A3",
		sigma: "\u03C3",
		sigmaf: "\u03C2",
		sigmav: "\u03C2",
		sim: "\u223C",
		simdot: "\u2A6A",
		sime: "\u2243",
		simeq: "\u2243",
		simg: "\u2A9E",
		simgE: "\u2AA0",
		siml: "\u2A9D",
		simlE: "\u2A9F",
		simne: "\u2246",
		simplus: "\u2A24",
		simrarr: "\u2972",
		slarr: "\u2190",
		SmallCircle: "\u2218",
		smallsetminus: "\u2216",
		smashp: "\u2A33",
		smeparsl: "\u29E4",
		smid: "\u2223",
		smile: "\u2323",
		smt: "\u2AAA",
		smte: "\u2AAC",
		smtes: "\u2AAC\uFE00",
		SOFTcy: "\u042C",
		softcy: "\u044C",
		solbar: "\u233F",
		solb: "\u29C4",
		sol: "/",
		Sopf: "\u{1D54A}",
		sopf: "\u{1D564}",
		spades: "\u2660",
		spadesuit: "\u2660",
		spar: "\u2225",
		sqcap: "\u2293",
		sqcaps: "\u2293\uFE00",
		sqcup: "\u2294",
		sqcups: "\u2294\uFE00",
		Sqrt: "\u221A",
		sqsub: "\u228F",
		sqsube: "\u2291",
		sqsubset: "\u228F",
		sqsubseteq: "\u2291",
		sqsup: "\u2290",
		sqsupe: "\u2292",
		sqsupset: "\u2290",
		sqsupseteq: "\u2292",
		square: "\u25A1",
		Square: "\u25A1",
		SquareIntersection: "\u2293",
		SquareSubset: "\u228F",
		SquareSubsetEqual: "\u2291",
		SquareSuperset: "\u2290",
		SquareSupersetEqual: "\u2292",
		SquareUnion: "\u2294",
		squarf: "\u25AA",
		squ: "\u25A1",
		squf: "\u25AA",
		srarr: "\u2192",
		Sscr: "\u{1D4AE}",
		sscr: "\u{1D4C8}",
		ssetmn: "\u2216",
		ssmile: "\u2323",
		sstarf: "\u22C6",
		Star: "\u22C6",
		star: "\u2606",
		starf: "\u2605",
		straightepsilon: "\u03F5",
		straightphi: "\u03D5",
		strns: "\xAF",
		sub: "\u2282",
		Sub: "\u22D0",
		subdot: "\u2ABD",
		subE: "\u2AC5",
		sube: "\u2286",
		subedot: "\u2AC3",
		submult: "\u2AC1",
		subnE: "\u2ACB",
		subne: "\u228A",
		subplus: "\u2ABF",
		subrarr: "\u2979",
		subset: "\u2282",
		Subset: "\u22D0",
		subseteq: "\u2286",
		subseteqq: "\u2AC5",
		SubsetEqual: "\u2286",
		subsetneq: "\u228A",
		subsetneqq: "\u2ACB",
		subsim: "\u2AC7",
		subsub: "\u2AD5",
		subsup: "\u2AD3",
		succapprox: "\u2AB8",
		succ: "\u227B",
		succcurlyeq: "\u227D",
		Succeeds: "\u227B",
		SucceedsEqual: "\u2AB0",
		SucceedsSlantEqual: "\u227D",
		SucceedsTilde: "\u227F",
		succeq: "\u2AB0",
		succnapprox: "\u2ABA",
		succneqq: "\u2AB6",
		succnsim: "\u22E9",
		succsim: "\u227F",
		SuchThat: "\u220B",
		sum: "\u2211",
		Sum: "\u2211",
		sung: "\u266A",
		sup1: "\xB9",
		sup2: "\xB2",
		sup3: "\xB3",
		sup: "\u2283",
		Sup: "\u22D1",
		supdot: "\u2ABE",
		supdsub: "\u2AD8",
		supE: "\u2AC6",
		supe: "\u2287",
		supedot: "\u2AC4",
		Superset: "\u2283",
		SupersetEqual: "\u2287",
		suphsol: "\u27C9",
		suphsub: "\u2AD7",
		suplarr: "\u297B",
		supmult: "\u2AC2",
		supnE: "\u2ACC",
		supne: "\u228B",
		supplus: "\u2AC0",
		supset: "\u2283",
		Supset: "\u22D1",
		supseteq: "\u2287",
		supseteqq: "\u2AC6",
		supsetneq: "\u228B",
		supsetneqq: "\u2ACC",
		supsim: "\u2AC8",
		supsub: "\u2AD4",
		supsup: "\u2AD6",
		swarhk: "\u2926",
		swarr: "\u2199",
		swArr: "\u21D9",
		swarrow: "\u2199",
		swnwar: "\u292A",
		szlig: "\xDF",
		Tab: "	",
		target: "\u2316",
		Tau: "\u03A4",
		tau: "\u03C4",
		tbrk: "\u23B4",
		Tcaron: "\u0164",
		tcaron: "\u0165",
		Tcedil: "\u0162",
		tcedil: "\u0163",
		Tcy: "\u0422",
		tcy: "\u0442",
		tdot: "\u20DB",
		telrec: "\u2315",
		Tfr: "\u{1D517}",
		tfr: "\u{1D531}",
		there4: "\u2234",
		therefore: "\u2234",
		Therefore: "\u2234",
		Theta: "\u0398",
		theta: "\u03B8",
		thetasym: "\u03D1",
		thetav: "\u03D1",
		thickapprox: "\u2248",
		thicksim: "\u223C",
		ThickSpace: "\u205F\u200A",
		ThinSpace: "\u2009",
		thinsp: "\u2009",
		thkap: "\u2248",
		thksim: "\u223C",
		THORN: "\xDE",
		thorn: "\xFE",
		tilde: "\u02DC",
		Tilde: "\u223C",
		TildeEqual: "\u2243",
		TildeFullEqual: "\u2245",
		TildeTilde: "\u2248",
		timesbar: "\u2A31",
		timesb: "\u22A0",
		times: "\xD7",
		timesd: "\u2A30",
		tint: "\u222D",
		toea: "\u2928",
		topbot: "\u2336",
		topcir: "\u2AF1",
		top: "\u22A4",
		Topf: "\u{1D54B}",
		topf: "\u{1D565}",
		topfork: "\u2ADA",
		tosa: "\u2929",
		tprime: "\u2034",
		trade: "\u2122",
		TRADE: "\u2122",
		triangle: "\u25B5",
		triangledown: "\u25BF",
		triangleleft: "\u25C3",
		trianglelefteq: "\u22B4",
		triangleq: "\u225C",
		triangleright: "\u25B9",
		trianglerighteq: "\u22B5",
		tridot: "\u25EC",
		trie: "\u225C",
		triminus: "\u2A3A",
		TripleDot: "\u20DB",
		triplus: "\u2A39",
		trisb: "\u29CD",
		tritime: "\u2A3B",
		trpezium: "\u23E2",
		Tscr: "\u{1D4AF}",
		tscr: "\u{1D4C9}",
		TScy: "\u0426",
		tscy: "\u0446",
		TSHcy: "\u040B",
		tshcy: "\u045B",
		Tstrok: "\u0166",
		tstrok: "\u0167",
		twixt: "\u226C",
		twoheadleftarrow: "\u219E",
		twoheadrightarrow: "\u21A0",
		Uacute: "\xDA",
		uacute: "\xFA",
		uarr: "\u2191",
		Uarr: "\u219F",
		uArr: "\u21D1",
		Uarrocir: "\u2949",
		Ubrcy: "\u040E",
		ubrcy: "\u045E",
		Ubreve: "\u016C",
		ubreve: "\u016D",
		Ucirc: "\xDB",
		ucirc: "\xFB",
		Ucy: "\u0423",
		ucy: "\u0443",
		udarr: "\u21C5",
		Udblac: "\u0170",
		udblac: "\u0171",
		udhar: "\u296E",
		ufisht: "\u297E",
		Ufr: "\u{1D518}",
		ufr: "\u{1D532}",
		Ugrave: "\xD9",
		ugrave: "\xF9",
		uHar: "\u2963",
		uharl: "\u21BF",
		uharr: "\u21BE",
		uhblk: "\u2580",
		ulcorn: "\u231C",
		ulcorner: "\u231C",
		ulcrop: "\u230F",
		ultri: "\u25F8",
		Umacr: "\u016A",
		umacr: "\u016B",
		uml: "\xA8",
		UnderBar: "_",
		UnderBrace: "\u23DF",
		UnderBracket: "\u23B5",
		UnderParenthesis: "\u23DD",
		Union: "\u22C3",
		UnionPlus: "\u228E",
		Uogon: "\u0172",
		uogon: "\u0173",
		Uopf: "\u{1D54C}",
		uopf: "\u{1D566}",
		UpArrowBar: "\u2912",
		uparrow: "\u2191",
		UpArrow: "\u2191",
		Uparrow: "\u21D1",
		UpArrowDownArrow: "\u21C5",
		updownarrow: "\u2195",
		UpDownArrow: "\u2195",
		Updownarrow: "\u21D5",
		UpEquilibrium: "\u296E",
		upharpoonleft: "\u21BF",
		upharpoonright: "\u21BE",
		uplus: "\u228E",
		UpperLeftArrow: "\u2196",
		UpperRightArrow: "\u2197",
		upsi: "\u03C5",
		Upsi: "\u03D2",
		upsih: "\u03D2",
		Upsilon: "\u03A5",
		upsilon: "\u03C5",
		UpTeeArrow: "\u21A5",
		UpTee: "\u22A5",
		upuparrows: "\u21C8",
		urcorn: "\u231D",
		urcorner: "\u231D",
		urcrop: "\u230E",
		Uring: "\u016E",
		uring: "\u016F",
		urtri: "\u25F9",
		Uscr: "\u{1D4B0}",
		uscr: "\u{1D4CA}",
		utdot: "\u22F0",
		Utilde: "\u0168",
		utilde: "\u0169",
		utri: "\u25B5",
		utrif: "\u25B4",
		uuarr: "\u21C8",
		Uuml: "\xDC",
		uuml: "\xFC",
		uwangle: "\u29A7",
		vangrt: "\u299C",
		varepsilon: "\u03F5",
		varkappa: "\u03F0",
		varnothing: "\u2205",
		varphi: "\u03D5",
		varpi: "\u03D6",
		varpropto: "\u221D",
		varr: "\u2195",
		vArr: "\u21D5",
		varrho: "\u03F1",
		varsigma: "\u03C2",
		varsubsetneq: "\u228A\uFE00",
		varsubsetneqq: "\u2ACB\uFE00",
		varsupsetneq: "\u228B\uFE00",
		varsupsetneqq: "\u2ACC\uFE00",
		vartheta: "\u03D1",
		vartriangleleft: "\u22B2",
		vartriangleright: "\u22B3",
		vBar: "\u2AE8",
		Vbar: "\u2AEB",
		vBarv: "\u2AE9",
		Vcy: "\u0412",
		vcy: "\u0432",
		vdash: "\u22A2",
		vDash: "\u22A8",
		Vdash: "\u22A9",
		VDash: "\u22AB",
		Vdashl: "\u2AE6",
		veebar: "\u22BB",
		vee: "\u2228",
		Vee: "\u22C1",
		veeeq: "\u225A",
		vellip: "\u22EE",
		verbar: "|",
		Verbar: "\u2016",
		vert: "|",
		Vert: "\u2016",
		VerticalBar: "\u2223",
		VerticalLine: "|",
		VerticalSeparator: "\u2758",
		VerticalTilde: "\u2240",
		VeryThinSpace: "\u200A",
		Vfr: "\u{1D519}",
		vfr: "\u{1D533}",
		vltri: "\u22B2",
		vnsub: "\u2282\u20D2",
		vnsup: "\u2283\u20D2",
		Vopf: "\u{1D54D}",
		vopf: "\u{1D567}",
		vprop: "\u221D",
		vrtri: "\u22B3",
		Vscr: "\u{1D4B1}",
		vscr: "\u{1D4CB}",
		vsubnE: "\u2ACB\uFE00",
		vsubne: "\u228A\uFE00",
		vsupnE: "\u2ACC\uFE00",
		vsupne: "\u228B\uFE00",
		Vvdash: "\u22AA",
		vzigzag: "\u299A",
		Wcirc: "\u0174",
		wcirc: "\u0175",
		wedbar: "\u2A5F",
		wedge: "\u2227",
		Wedge: "\u22C0",
		wedgeq: "\u2259",
		weierp: "\u2118",
		Wfr: "\u{1D51A}",
		wfr: "\u{1D534}",
		Wopf: "\u{1D54E}",
		wopf: "\u{1D568}",
		wp: "\u2118",
		wr: "\u2240",
		wreath: "\u2240",
		Wscr: "\u{1D4B2}",
		wscr: "\u{1D4CC}",
		xcap: "\u22C2",
		xcirc: "\u25EF",
		xcup: "\u22C3",
		xdtri: "\u25BD",
		Xfr: "\u{1D51B}",
		xfr: "\u{1D535}",
		xharr: "\u27F7",
		xhArr: "\u27FA",
		Xi: "\u039E",
		xi: "\u03BE",
		xlarr: "\u27F5",
		xlArr: "\u27F8",
		xmap: "\u27FC",
		xnis: "\u22FB",
		xodot: "\u2A00",
		Xopf: "\u{1D54F}",
		xopf: "\u{1D569}",
		xoplus: "\u2A01",
		xotime: "\u2A02",
		xrarr: "\u27F6",
		xrArr: "\u27F9",
		Xscr: "\u{1D4B3}",
		xscr: "\u{1D4CD}",
		xsqcup: "\u2A06",
		xuplus: "\u2A04",
		xutri: "\u25B3",
		xvee: "\u22C1",
		xwedge: "\u22C0",
		Yacute: "\xDD",
		yacute: "\xFD",
		YAcy: "\u042F",
		yacy: "\u044F",
		Ycirc: "\u0176",
		ycirc: "\u0177",
		Ycy: "\u042B",
		ycy: "\u044B",
		yen: "\xA5",
		Yfr: "\u{1D51C}",
		yfr: "\u{1D536}",
		YIcy: "\u0407",
		yicy: "\u0457",
		Yopf: "\u{1D550}",
		yopf: "\u{1D56A}",
		Yscr: "\u{1D4B4}",
		yscr: "\u{1D4CE}",
		YUcy: "\u042E",
		yucy: "\u044E",
		yuml: "\xFF",
		Yuml: "\u0178",
		Zacute: "\u0179",
		zacute: "\u017A",
		Zcaron: "\u017D",
		zcaron: "\u017E",
		Zcy: "\u0417",
		zcy: "\u0437",
		Zdot: "\u017B",
		zdot: "\u017C",
		zeetrf: "\u2128",
		ZeroWidthSpace: "\u200B",
		Zeta: "\u0396",
		zeta: "\u03B6",
		zfr: "\u{1D537}",
		Zfr: "\u2128",
		ZHcy: "\u0416",
		zhcy: "\u0436",
		zigrarr: "\u21DD",
		zopf: "\u{1D56B}",
		Zopf: "\u2124",
		Zscr: "\u{1D4B5}",
		zscr: "\u{1D4CF}",
		zwj: "\u200D",
		zwnj: "\u200C",
	},
	ci = /^#[xX]([A-Fa-f0-9]+)$/,
	ui = /^#([0-9]+)$/,
	hi = /^([A-Za-z0-9]+)$/,
	dr = (function () {
		function t(e) {
			this.named = e;
		}
		return (
			(t.prototype.parse = function (e) {
				if (e) {
					var r = e.match(ci);
					if (r) return String.fromCharCode(parseInt(r[1], 16));
					if (((r = e.match(ui)), r)) return String.fromCharCode(parseInt(r[1], 10));
					if (((r = e.match(hi)), r)) return this.named[r[1]];
				}
			}),
			t
		);
	})(),
	pi = /[\t\n\f ]/,
	fi = /[A-Za-z]/,
	di = /\r\n?/g;
function B(t) {
	return pi.test(t);
}
function _n(t) {
	return fi.test(t);
}
function mi(t) {
	return t.replace(
		di,
		`
`,
	);
}
var mr = (function () {
		function t(e, r, n) {
			n === void 0 && (n = "precompile"),
				(this.delegate = e),
				(this.entityParser = r),
				(this.mode = n),
				(this.state = "beforeData"),
				(this.line = -1),
				(this.column = -1),
				(this.input = ""),
				(this.index = -1),
				(this.tagNameBuffer = ""),
				(this.states = {
					beforeData: function () {
						var s = this.peek();
						if (s === "<" && !this.isIgnoredEndTag()) this.transitionTo("tagOpen"), this.markTagStart(), this.consume();
						else {
							if (
								this.mode === "precompile" &&
								s ===
									`
`
							) {
								var i = this.tagNameBuffer.toLowerCase();
								(i === "pre" || i === "textarea") && this.consume();
							}
							this.transitionTo("data"), this.delegate.beginData();
						}
					},
					data: function () {
						var s = this.peek(),
							i = this.tagNameBuffer;
						s === "<" && !this.isIgnoredEndTag() ? (this.delegate.finishData(), this.transitionTo("tagOpen"), this.markTagStart(), this.consume()) : s === "&" && i !== "script" && i !== "style" ? (this.consume(), this.delegate.appendToData(this.consumeCharRef() || "&")) : (this.consume(), this.delegate.appendToData(s));
					},
					tagOpen: function () {
						var s = this.consume();
						s === "!" ? this.transitionTo("markupDeclarationOpen") : s === "/" ? this.transitionTo("endTagOpen") : (s === "@" || s === ":" || _n(s)) && (this.transitionTo("tagName"), (this.tagNameBuffer = ""), this.delegate.beginStartTag(), this.appendToTagName(s));
					},
					markupDeclarationOpen: function () {
						var s = this.consume();
						if (s === "-" && this.peek() === "-") this.consume(), this.transitionTo("commentStart"), this.delegate.beginComment();
						else {
							var i = s.toUpperCase() + this.input.substring(this.index, this.index + 6).toUpperCase();
							i === "DOCTYPE" && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.transitionTo("doctype"), this.delegate.beginDoctype && this.delegate.beginDoctype());
						}
					},
					doctype: function () {
						var s = this.consume();
						B(s) && this.transitionTo("beforeDoctypeName");
					},
					beforeDoctypeName: function () {
						var s = this.consume();
						B(s) || (this.transitionTo("doctypeName"), this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(s.toLowerCase()));
					},
					doctypeName: function () {
						var s = this.consume();
						B(s) ? this.transitionTo("afterDoctypeName") : s === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeName && this.delegate.appendToDoctypeName(s.toLowerCase());
					},
					afterDoctypeName: function () {
						var s = this.consume();
						if (!B(s))
							if (s === ">") this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData");
							else {
								var i = s.toUpperCase() + this.input.substring(this.index, this.index + 5).toUpperCase(),
									a = i.toUpperCase() === "PUBLIC",
									o = i.toUpperCase() === "SYSTEM";
								(a || o) && (this.consume(), this.consume(), this.consume(), this.consume(), this.consume(), this.consume()), a ? this.transitionTo("afterDoctypePublicKeyword") : o && this.transitionTo("afterDoctypeSystemKeyword");
							}
					},
					afterDoctypePublicKeyword: function () {
						var s = this.peek();
						B(s) ? (this.transitionTo("beforeDoctypePublicIdentifier"), this.consume()) : s === '"' ? (this.transitionTo("doctypePublicIdentifierDoubleQuoted"), this.consume()) : s === "'" ? (this.transitionTo("doctypePublicIdentifierSingleQuoted"), this.consume()) : s === ">" && (this.consume(), this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData"));
					},
					doctypePublicIdentifierDoubleQuoted: function () {
						var s = this.consume();
						s === '"' ? this.transitionTo("afterDoctypePublicIdentifier") : s === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypePublicIdentifier && this.delegate.appendToDoctypePublicIdentifier(s);
					},
					doctypePublicIdentifierSingleQuoted: function () {
						var s = this.consume();
						s === "'" ? this.transitionTo("afterDoctypePublicIdentifier") : s === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypePublicIdentifier && this.delegate.appendToDoctypePublicIdentifier(s);
					},
					afterDoctypePublicIdentifier: function () {
						var s = this.consume();
						B(s) ? this.transitionTo("betweenDoctypePublicAndSystemIdentifiers") : s === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : s === '"' ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : s === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted");
					},
					betweenDoctypePublicAndSystemIdentifiers: function () {
						var s = this.consume();
						B(s) || (s === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : s === '"' ? this.transitionTo("doctypeSystemIdentifierDoubleQuoted") : s === "'" && this.transitionTo("doctypeSystemIdentifierSingleQuoted"));
					},
					doctypeSystemIdentifierDoubleQuoted: function () {
						var s = this.consume();
						s === '"' ? this.transitionTo("afterDoctypeSystemIdentifier") : s === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeSystemIdentifier && this.delegate.appendToDoctypeSystemIdentifier(s);
					},
					doctypeSystemIdentifierSingleQuoted: function () {
						var s = this.consume();
						s === "'" ? this.transitionTo("afterDoctypeSystemIdentifier") : s === ">" ? (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")) : this.delegate.appendToDoctypeSystemIdentifier && this.delegate.appendToDoctypeSystemIdentifier(s);
					},
					afterDoctypeSystemIdentifier: function () {
						var s = this.consume();
						B(s) || (s === ">" && (this.delegate.endDoctype && this.delegate.endDoctype(), this.transitionTo("beforeData")));
					},
					commentStart: function () {
						var s = this.consume();
						s === "-" ? this.transitionTo("commentStartDash") : s === ">" ? (this.delegate.finishComment(), this.transitionTo("beforeData")) : (this.delegate.appendToCommentData(s), this.transitionTo("comment"));
					},
					commentStartDash: function () {
						var s = this.consume();
						s === "-" ? this.transitionTo("commentEnd") : s === ">" ? (this.delegate.finishComment(), this.transitionTo("beforeData")) : (this.delegate.appendToCommentData("-"), this.transitionTo("comment"));
					},
					comment: function () {
						var s = this.consume();
						s === "-" ? this.transitionTo("commentEndDash") : this.delegate.appendToCommentData(s);
					},
					commentEndDash: function () {
						var s = this.consume();
						s === "-" ? this.transitionTo("commentEnd") : (this.delegate.appendToCommentData("-" + s), this.transitionTo("comment"));
					},
					commentEnd: function () {
						var s = this.consume();
						s === ">" ? (this.delegate.finishComment(), this.transitionTo("beforeData")) : (this.delegate.appendToCommentData("--" + s), this.transitionTo("comment"));
					},
					tagName: function () {
						var s = this.consume();
						B(s) ? this.transitionTo("beforeAttributeName") : s === "/" ? this.transitionTo("selfClosingStartTag") : s === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData")) : this.appendToTagName(s);
					},
					endTagName: function () {
						var s = this.consume();
						B(s) ? (this.transitionTo("beforeAttributeName"), (this.tagNameBuffer = "")) : s === "/" ? (this.transitionTo("selfClosingStartTag"), (this.tagNameBuffer = "")) : s === ">" ? (this.delegate.finishTag(), this.transitionTo("beforeData"), (this.tagNameBuffer = "")) : this.appendToTagName(s);
					},
					beforeAttributeName: function () {
						var s = this.peek();
						if (B(s)) {
							this.consume();
							return;
						} else s === "/" ? (this.transitionTo("selfClosingStartTag"), this.consume()) : s === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : s === "=" ? (this.delegate.reportSyntaxError("attribute name cannot start with equals sign"), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(s)) : (this.transitionTo("attributeName"), this.delegate.beginAttribute());
					},
					attributeName: function () {
						var s = this.peek();
						B(s) ? (this.transitionTo("afterAttributeName"), this.consume()) : s === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : s === "=" ? (this.transitionTo("beforeAttributeValue"), this.consume()) : s === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : s === '"' || s === "'" || s === "<" ? (this.delegate.reportSyntaxError(s + " is not a valid character within attribute names"), this.consume(), this.delegate.appendToAttributeName(s)) : (this.consume(), this.delegate.appendToAttributeName(s));
					},
					afterAttributeName: function () {
						var s = this.peek();
						if (B(s)) {
							this.consume();
							return;
						} else s === "/" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : s === "=" ? (this.consume(), this.transitionTo("beforeAttributeValue")) : s === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.transitionTo("attributeName"), this.delegate.beginAttribute(), this.consume(), this.delegate.appendToAttributeName(s));
					},
					beforeAttributeValue: function () {
						var s = this.peek();
						B(s) ? this.consume() : s === '"' ? (this.transitionTo("attributeValueDoubleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : s === "'" ? (this.transitionTo("attributeValueSingleQuoted"), this.delegate.beginAttributeValue(!0), this.consume()) : s === ">" ? (this.delegate.beginAttributeValue(!1), this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.transitionTo("attributeValueUnquoted"), this.delegate.beginAttributeValue(!1), this.consume(), this.delegate.appendToAttributeValue(s));
					},
					attributeValueDoubleQuoted: function () {
						var s = this.consume();
						s === '"' ? (this.delegate.finishAttributeValue(), this.transitionTo("afterAttributeValueQuoted")) : s === "&" ? this.delegate.appendToAttributeValue(this.consumeCharRef() || "&") : this.delegate.appendToAttributeValue(s);
					},
					attributeValueSingleQuoted: function () {
						var s = this.consume();
						s === "'" ? (this.delegate.finishAttributeValue(), this.transitionTo("afterAttributeValueQuoted")) : s === "&" ? this.delegate.appendToAttributeValue(this.consumeCharRef() || "&") : this.delegate.appendToAttributeValue(s);
					},
					attributeValueUnquoted: function () {
						var s = this.peek();
						B(s) ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("beforeAttributeName")) : s === "/" ? (this.delegate.finishAttributeValue(), this.consume(), this.transitionTo("selfClosingStartTag")) : s === "&" ? (this.consume(), this.delegate.appendToAttributeValue(this.consumeCharRef() || "&")) : s === ">" ? (this.delegate.finishAttributeValue(), this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : (this.consume(), this.delegate.appendToAttributeValue(s));
					},
					afterAttributeValueQuoted: function () {
						var s = this.peek();
						B(s) ? (this.consume(), this.transitionTo("beforeAttributeName")) : s === "/" ? (this.consume(), this.transitionTo("selfClosingStartTag")) : s === ">" ? (this.consume(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
					},
					selfClosingStartTag: function () {
						var s = this.peek();
						s === ">" ? (this.consume(), this.delegate.markTagAsSelfClosing(), this.delegate.finishTag(), this.transitionTo("beforeData")) : this.transitionTo("beforeAttributeName");
					},
					endTagOpen: function () {
						var s = this.consume();
						(s === "@" || s === ":" || _n(s)) && (this.transitionTo("endTagName"), (this.tagNameBuffer = ""), this.delegate.beginEndTag(), this.appendToTagName(s));
					},
				}),
				this.reset();
		}
		return (
			(t.prototype.reset = function () {
				this.transitionTo("beforeData"), (this.input = ""), (this.tagNameBuffer = ""), (this.index = 0), (this.line = 1), (this.column = 0), this.delegate.reset();
			}),
			(t.prototype.transitionTo = function (e) {
				this.state = e;
			}),
			(t.prototype.tokenize = function (e) {
				this.reset(), this.tokenizePart(e), this.tokenizeEOF();
			}),
			(t.prototype.tokenizePart = function (e) {
				for (this.input += mi(e); this.index < this.input.length; ) {
					var r = this.states[this.state];
					if (r !== void 0) r.call(this);
					else throw new Error("unhandled state " + this.state);
				}
			}),
			(t.prototype.tokenizeEOF = function () {
				this.flushData();
			}),
			(t.prototype.flushData = function () {
				this.state === "data" && (this.delegate.finishData(), this.transitionTo("beforeData"));
			}),
			(t.prototype.peek = function () {
				return this.input.charAt(this.index);
			}),
			(t.prototype.consume = function () {
				var e = this.peek();
				return (
					this.index++,
					e ===
					`
`
						? (this.line++, (this.column = 0))
						: this.column++,
					e
				);
			}),
			(t.prototype.consumeCharRef = function () {
				var e = this.input.indexOf(";", this.index);
				if (e !== -1) {
					var r = this.input.slice(this.index, e),
						n = this.entityParser.parse(r);
					if (n) {
						for (var s = r.length; s; ) this.consume(), s--;
						return this.consume(), n;
					}
				}
			}),
			(t.prototype.markTagStart = function () {
				this.delegate.tagOpen();
			}),
			(t.prototype.appendToTagName = function (e) {
				(this.tagNameBuffer += e), this.delegate.appendToTagName(e);
			}),
			(t.prototype.isIgnoredEndTag = function () {
				var e = this.tagNameBuffer;
				return (e === "title" && this.input.substring(this.index, this.index + 8) !== "</title>") || (e === "style" && this.input.substring(this.index, this.index + 8) !== "</style>") || (e === "script" && this.input.substring(this.index, this.index + 9) !== "</script>");
			}),
			t
		);
	})(),
	Uo = (function () {
		function t(e, r) {
			r === void 0 && (r = {}), (this.options = r), (this.token = null), (this.startLine = 1), (this.startColumn = 0), (this.tokens = []), (this.tokenizer = new mr(this, e, r.mode)), (this._currentAttribute = void 0);
		}
		return (
			(t.prototype.tokenize = function (e) {
				return (this.tokens = []), this.tokenizer.tokenize(e), this.tokens;
			}),
			(t.prototype.tokenizePart = function (e) {
				return (this.tokens = []), this.tokenizer.tokenizePart(e), this.tokens;
			}),
			(t.prototype.tokenizeEOF = function () {
				return (this.tokens = []), this.tokenizer.tokenizeEOF(), this.tokens[0];
			}),
			(t.prototype.reset = function () {
				(this.token = null), (this.startLine = 1), (this.startColumn = 0);
			}),
			(t.prototype.current = function () {
				var e = this.token;
				if (e === null) throw new Error("token was unexpectedly null");
				if (arguments.length === 0) return e;
				for (var r = 0; r < arguments.length; r++) if (e.type === arguments[r]) return e;
				throw new Error("token type was unexpectedly " + e.type);
			}),
			(t.prototype.push = function (e) {
				(this.token = e), this.tokens.push(e);
			}),
			(t.prototype.currentAttribute = function () {
				return this._currentAttribute;
			}),
			(t.prototype.addLocInfo = function () {
				this.options.loc &&
					(this.current().loc = {
						start: {
							line: this.startLine,
							column: this.startColumn,
						},
						end: {
							line: this.tokenizer.line,
							column: this.tokenizer.column,
						},
					}),
					(this.startLine = this.tokenizer.line),
					(this.startColumn = this.tokenizer.column);
			}),
			(t.prototype.beginDoctype = function () {
				this.push({ type: "Doctype", name: "" });
			}),
			(t.prototype.appendToDoctypeName = function (e) {
				this.current("Doctype").name += e;
			}),
			(t.prototype.appendToDoctypePublicIdentifier = function (e) {
				var r = this.current("Doctype");
				r.publicIdentifier === void 0 ? (r.publicIdentifier = e) : (r.publicIdentifier += e);
			}),
			(t.prototype.appendToDoctypeSystemIdentifier = function (e) {
				var r = this.current("Doctype");
				r.systemIdentifier === void 0 ? (r.systemIdentifier = e) : (r.systemIdentifier += e);
			}),
			(t.prototype.endDoctype = function () {
				this.addLocInfo();
			}),
			(t.prototype.beginData = function () {
				this.push({ type: "Chars", chars: "" });
			}),
			(t.prototype.appendToData = function (e) {
				this.current("Chars").chars += e;
			}),
			(t.prototype.finishData = function () {
				this.addLocInfo();
			}),
			(t.prototype.beginComment = function () {
				this.push({ type: "Comment", chars: "" });
			}),
			(t.prototype.appendToCommentData = function (e) {
				this.current("Comment").chars += e;
			}),
			(t.prototype.finishComment = function () {
				this.addLocInfo();
			}),
			(t.prototype.tagOpen = function () {}),
			(t.prototype.beginStartTag = function () {
				this.push({
					type: "StartTag",
					tagName: "",
					attributes: [],
					selfClosing: !1,
				});
			}),
			(t.prototype.beginEndTag = function () {
				this.push({ type: "EndTag", tagName: "" });
			}),
			(t.prototype.finishTag = function () {
				this.addLocInfo();
			}),
			(t.prototype.markTagAsSelfClosing = function () {
				this.current("StartTag").selfClosing = !0;
			}),
			(t.prototype.appendToTagName = function (e) {
				this.current("StartTag", "EndTag").tagName += e;
			}),
			(t.prototype.beginAttribute = function () {
				this._currentAttribute = ["", "", !1];
			}),
			(t.prototype.appendToAttributeName = function (e) {
				this.currentAttribute()[0] += e;
			}),
			(t.prototype.beginAttributeValue = function (e) {
				this.currentAttribute()[2] = e;
			}),
			(t.prototype.appendToAttributeValue = function (e) {
				this.currentAttribute()[1] += e;
			}),
			(t.prototype.finishAttributeValue = function () {
				this.current("StartTag").attributes.push(this._currentAttribute);
			}),
			(t.prototype.reportSyntaxError = function (e) {
				this.current().syntaxError = e;
			}),
			t
		);
	})();
var gr = {
	Append: 1,
	TrustingAppend: 2,
	Comment: 3,
	Modifier: 4,
	StrictModifier: 5,
	Block: 6,
	StrictBlock: 7,
	Component: 8,
	OpenElement: 10,
	OpenElementWithSplat: 11,
	FlushElement: 12,
	CloseElement: 13,
	StaticAttr: 14,
	DynamicAttr: 15,
	ComponentAttr: 16,
	AttrSplat: 17,
	Yield: 18,
	DynamicArg: 20,
	StaticArg: 21,
	TrustingDynamicAttr: 22,
	TrustingComponentAttr: 23,
	StaticComponentAttr: 24,
	Debugger: 26,
	Undefined: 27,
	Call: 28,
	Concat: 29,
	GetSymbol: 30,
	GetLexicalSymbol: 32,
	GetStrictKeyword: 31,
	GetFreeAsComponentOrHelperHead: 35,
	GetFreeAsHelperHead: 37,
	GetFreeAsModifierHead: 38,
	GetFreeAsComponentHead: 39,
	InElement: 40,
	If: 41,
	Each: 42,
	Let: 44,
	WithDynamicVars: 45,
	InvokeComponent: 46,
	HasBlock: 48,
	HasBlockParams: 49,
	Curry: 50,
	Not: 51,
	IfInline: 52,
	GetDynamicVar: 53,
	Log: 54,
};
function On(t) {
	return function (e) {
		return Array.isArray(e) && e[0] === t;
	};
}
var Mo = On(gr.FlushElement);
var zo = On(gr.GetSymbol);
var gi = /["&\xA0]/u,
	Zo = new RegExp(gi.source, "gu"),
	bi = /[&<>\xA0]/u,
	el = new RegExp(bi.source, "gu");
var kr = new Set(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function yi(t) {
	var e;
	return kr.has(t.toLowerCase()) && ((e = t[0]) == null ? void 0 : e.toLowerCase()) === t[0];
}
var pe = Object.freeze({ line: 1, column: 0 }),
	Ei = Object.freeze({ source: "(synthetic)", start: pe, end: pe }),
	st = Object.freeze({ source: "(nonexistent)", start: pe, end: pe }),
	ue = Object.freeze({ source: "(broken)", start: pe, end: pe }),
	k = (function (t) {
		return (t.CharPosition = "CharPosition"), (t.HbsPosition = "HbsPosition"), (t.InternalsSynthetic = "InternalsSynthetic"), (t.NonExistent = "NonExistent"), (t.Broken = "Broken"), t;
	})({}),
	it = "MATCH_ANY",
	Tr = "IS_INVISIBLE",
	Nr = class {
		_whens;
		constructor(e) {
			this._whens = e;
		}
		first(e) {
			for (let r of this._whens) {
				let n = r.match(e);
				if (we(n)) return n[0];
			}
			return null;
		}
	},
	Dt = class {
		_map = new Map();
		get(e, r) {
			let n = this._map.get(e);
			return n || ((n = r()), this._map.set(e, n), n);
		}
		add(e, r) {
			this._map.set(e, r);
		}
		match(e) {
			let r = Si(e),
				n = [],
				s = this._map.get(r),
				i = this._map.get(it);
			return s && n.push(s), i && n.push(i), n;
		}
	};
function Hn(t) {
	return t(new vr()).check();
}
var vr = class {
	_whens = new Dt();
	check() {
		return (e, r) => this.matchFor(e.kind, r.kind)(e, r);
	}
	matchFor(e, r) {
		let n = this._whens.match(e);
		w(we(n), `no match defined for (${e}, ${r}) and no AnyMatch defined either`);
		let s = new Nr(n).first(r);
		return w(s !== null, `no match defined for (${e}, ${r}) and no AnyMatch defined either`), s;
	}
	when(e, r, n) {
		return this._whens.get(e, () => new Dt()).add(r, n), this;
	}
};
function Si(t) {
	switch (t) {
		case k.Broken:
		case k.InternalsSynthetic:
		case k.NonExistent:
			return Tr;
		default:
			return t;
	}
}
var Ar = class t {
		static synthetic(e) {
			let r = O.synthetic(e);
			return new t({ loc: r, chars: e });
		}
		static load(e, r) {
			return new t({ loc: O.load(e, r[1]), chars: r[0] });
		}
		chars;
		loc;
		constructor(e) {
			(this.loc = e.loc), (this.chars = e.chars);
		}
		getString() {
			return this.chars;
		}
		serialize() {
			return [this.chars, this.loc.serialize()];
		}
	},
	O = class t {
		static get NON_EXISTENT() {
			return new te(k.NonExistent, st).wrap();
		}
		static load(e, r) {
			if (typeof r == "number") return t.forCharPositions(e, r, r);
			if (typeof r == "string") return t.synthetic(r);
			if (Array.isArray(r)) return t.forCharPositions(e, r[0], r[1]);
			if (r === k.NonExistent) return t.NON_EXISTENT;
			if (r === k.Broken) return t.broken(ue);
			vn(r);
		}
		static forHbsLoc(e, r) {
			let n = new de(e, r.start),
				s = new de(e, r.end);
			return new ot(e, { start: n, end: s }, r).wrap();
		}
		static forCharPositions(e, r, n) {
			let s = new Ne(e, r),
				i = new Ne(e, n);
			return new at(e, { start: s, end: i }).wrap();
		}
		static synthetic(e) {
			return new te(k.InternalsSynthetic, st, e).wrap();
		}
		static broken(e = ue) {
			return new te(k.Broken, e).wrap();
		}
		isInvisible;
		constructor(e) {
			(this.data = e), (this.isInvisible = e.kind !== k.CharPosition && e.kind !== k.HbsPosition);
		}
		getStart() {
			return this.data.getStart().wrap();
		}
		getEnd() {
			return this.data.getEnd().wrap();
		}
		get loc() {
			let e = this.data.toHbsSpan();
			return e === null ? ue : e.toHbsLoc();
		}
		get module() {
			return this.data.getModule();
		}
		get startPosition() {
			return this.loc.start;
		}
		get endPosition() {
			return this.loc.end;
		}
		toJSON() {
			return this.loc;
		}
		withStart(e) {
			return Q(e.data, this.data.getEnd());
		}
		withEnd(e) {
			return Q(this.data.getStart(), e.data);
		}
		asString() {
			return this.data.asString();
		}
		toSlice(e) {
			let r = this.data.asString();
			return !1, new Ar({ loc: this, chars: e || r });
		}
		get start() {
			return this.loc.start;
		}
		set start(e) {
			this.data.locDidUpdate({ start: e });
		}
		get end() {
			return this.loc.end;
		}
		set end(e) {
			this.data.locDidUpdate({ end: e });
		}
		get source() {
			return this.module;
		}
		collapse(e) {
			switch (e) {
				case "start":
					return this.getStart().collapsed();
				case "end":
					return this.getEnd().collapsed();
			}
		}
		extend(e) {
			return Q(this.data.getStart(), e.data.getEnd());
		}
		serialize() {
			return this.data.serialize();
		}
		slice({ skipStart: e = 0, skipEnd: r = 0 }) {
			return Q(this.getStart().move(e).data, this.getEnd().move(-r).data);
		}
		sliceStartChars({ skipStart: e = 0, chars: r }) {
			return Q(this.getStart().move(e).data, this.getStart().move(e + r).data);
		}
		sliceEndChars({ skipEnd: e = 0, chars: r }) {
			return Q(this.getEnd().move(e - r).data, this.getStart().move(-e).data);
		}
	},
	at = class {
		kind = k.CharPosition;
		_locPosSpan = null;
		constructor(e, r) {
			(this.source = e), (this.charPositions = r);
		}
		wrap() {
			return new O(this);
		}
		asString() {
			return this.source.slice(this.charPositions.start.charPos, this.charPositions.end.charPos);
		}
		getModule() {
			return this.source.module;
		}
		getStart() {
			return this.charPositions.start;
		}
		getEnd() {
			return this.charPositions.end;
		}
		locDidUpdate() {}
		toHbsSpan() {
			let e = this._locPosSpan;
			if (e === null) {
				let r = this.charPositions.start.toHbsPos(),
					n = this.charPositions.end.toHbsPos();
				r === null || n === null ? (e = this._locPosSpan = fe) : (e = this._locPosSpan = new ot(this.source, { start: r, end: n }));
			}
			return e === fe ? null : e;
		}
		serialize() {
			let {
				start: { charPos: e },
				end: { charPos: r },
			} = this.charPositions;
			return e === r ? e : [e, r];
		}
		toCharPosSpan() {
			return this;
		}
	},
	ot = class {
		kind = k.HbsPosition;
		_charPosSpan = null;
		_providedHbsLoc;
		constructor(e, r, n = null) {
			(this.source = e), (this.hbsPositions = r), (this._providedHbsLoc = n);
		}
		serialize() {
			let e = this.toCharPosSpan();
			return e === null ? k.Broken : e.wrap().serialize();
		}
		wrap() {
			return new O(this);
		}
		updateProvided(e, r) {
			this._providedHbsLoc && (this._providedHbsLoc[r] = e), (this._charPosSpan = null), (this._providedHbsLoc = { start: e, end: e });
		}
		locDidUpdate({ start: e, end: r }) {
			e !== void 0 && (this.updateProvided(e, "start"), (this.hbsPositions.start = new de(this.source, e, null))), r !== void 0 && (this.updateProvided(r, "end"), (this.hbsPositions.end = new de(this.source, r, null)));
		}
		asString() {
			let e = this.toCharPosSpan();
			return e === null ? "" : e.asString();
		}
		getModule() {
			return this.source.module;
		}
		getStart() {
			return this.hbsPositions.start;
		}
		getEnd() {
			return this.hbsPositions.end;
		}
		toHbsLoc() {
			return {
				start: this.hbsPositions.start.hbsPos,
				end: this.hbsPositions.end.hbsPos,
			};
		}
		toHbsSpan() {
			return this;
		}
		toCharPosSpan() {
			let e = this._charPosSpan;
			if (e === null) {
				let r = this.hbsPositions.start.toCharPos(),
					n = this.hbsPositions.end.toCharPos();
				if (r && n)
					e = this._charPosSpan = new at(this.source, {
						start: r,
						end: n,
					});
				else return (e = this._charPosSpan = fe), null;
			}
			return e === fe ? null : e;
		}
	},
	te = class {
		constructor(e, r, n = null) {
			(this.kind = e), (this.loc = r), (this.string = n);
		}
		serialize() {
			switch (this.kind) {
				case k.Broken:
				case k.NonExistent:
					return this.kind;
				case k.InternalsSynthetic:
					return this.string || "";
			}
		}
		wrap() {
			return new O(this);
		}
		asString() {
			return this.string || "";
		}
		locDidUpdate({ start: e, end: r }) {
			e !== void 0 && (this.loc.start = e), r !== void 0 && (this.loc.end = r);
		}
		getModule() {
			return "an unknown module";
		}
		getStart() {
			return new lt(this.kind, this.loc.start);
		}
		getEnd() {
			return new lt(this.kind, this.loc.end);
		}
		toCharPosSpan() {
			return this;
		}
		toHbsSpan() {
			return null;
		}
		toHbsLoc() {
			return ue;
		}
	},
	Q = Hn((t) =>
		t
			.when(k.HbsPosition, k.HbsPosition, (e, r) => new ot(e.source, { start: e, end: r }).wrap())
			.when(k.CharPosition, k.CharPosition, (e, r) => new at(e.source, { start: e, end: r }).wrap())
			.when(k.CharPosition, k.HbsPosition, (e, r) => {
				let n = r.toCharPos();
				return n === null ? new te(k.Broken, ue).wrap() : Q(e, n);
			})
			.when(k.HbsPosition, k.CharPosition, (e, r) => {
				let n = e.toCharPos();
				return n === null ? new te(k.Broken, ue).wrap() : Q(n, r);
			})
			.when(Tr, it, (e) => new te(e.kind, ue).wrap())
			.when(it, Tr, (e, r) => new te(r.kind, ue).wrap()),
	),
	fe = "BROKEN",
	Ue = class t {
		static forHbsPos(e, r) {
			return new de(e, r, null).wrap();
		}
		static broken(e = pe) {
			return new lt(k.Broken, e).wrap();
		}
		constructor(e) {
			this.data = e;
		}
		get offset() {
			let e = this.data.toCharPos();
			return e === null ? null : e.offset;
		}
		eql(e) {
			return wi(this.data, e.data);
		}
		until(e) {
			return Q(this.data, e.data);
		}
		move(e) {
			let r = this.data.toCharPos();
			if (r === null) return t.broken();
			{
				let n = r.offset + e;
				return r.source.check(n) ? new Ne(r.source, n).wrap() : t.broken();
			}
		}
		collapsed() {
			return Q(this.data, this.data);
		}
		toJSON() {
			return this.data.toJSON();
		}
	},
	Ne = class {
		kind = k.CharPosition;
		_locPos = null;
		constructor(e, r) {
			(this.source = e), (this.charPos = r);
		}
		toCharPos() {
			return this;
		}
		toJSON() {
			let e = this.toHbsPos();
			return e === null ? pe : e.toJSON();
		}
		wrap() {
			return new Ue(this);
		}
		get offset() {
			return this.charPos;
		}
		toHbsPos() {
			let e = this._locPos;
			if (e === null) {
				let r = this.source.hbsPosFor(this.charPos);
				r === null ? (this._locPos = e = fe) : (this._locPos = e = new de(this.source, r, this.charPos));
			}
			return e === fe ? null : e;
		}
	},
	de = class {
		kind = k.HbsPosition;
		_charPos;
		constructor(e, r, n = null) {
			(this.source = e), (this.hbsPos = r), (this._charPos = n === null ? null : new Ne(e, n));
		}
		toCharPos() {
			let e = this._charPos;
			if (e === null) {
				let r = this.source.charPosFor(this.hbsPos);
				r === null ? (this._charPos = e = fe) : (this._charPos = e = new Ne(this.source, r));
			}
			return e === fe ? null : e;
		}
		toJSON() {
			return this.hbsPos;
		}
		wrap() {
			return new Ue(this);
		}
		toHbsPos() {
			return this;
		}
	},
	lt = class {
		constructor(e, r) {
			(this.kind = e), (this.pos = r);
		}
		toCharPos() {
			return null;
		}
		toJSON() {
			return this.pos;
		}
		wrap() {
			return new Ue(this);
		}
		get offset() {
			return null;
		}
	},
	wi = Hn((t) =>
		t
			.when(k.HbsPosition, k.HbsPosition, ({ hbsPos: e }, { hbsPos: r }) => e.column === r.column && e.line === r.line)
			.when(k.CharPosition, k.CharPosition, ({ charPos: e }, { charPos: r }) => e === r)
			.when(k.CharPosition, k.HbsPosition, ({ offset: e }, r) => {
				var n;
				return e === ((n = r.toCharPos()) == null ? void 0 : n.offset);
			})
			.when(k.HbsPosition, k.CharPosition, (e, { offset: r }) => {
				var n;
				return ((n = e.toCharPos()) == null ? void 0 : n.offset) === r;
			})
			.when(it, it, () => !1),
	),
	Te = class t {
		static from(e, r = {}) {
			var n;
			return new t(e, (n = r.meta) == null ? void 0 : n.moduleName);
		}
		constructor(e, r = "an unknown module") {
			(this.source = e), (this.module = r);
		}
		check(e) {
			return e >= 0 && e <= this.source.length;
		}
		slice(e, r) {
			return this.source.slice(e, r);
		}
		offsetFor(e, r) {
			return Ue.forHbsPos(this, { line: e, column: r });
		}
		spanFor({ start: e, end: r }) {
			return O.forHbsLoc(this, {
				start: { line: e.line, column: e.column },
				end: { line: r.line, column: r.column },
			});
		}
		hbsPosFor(e) {
			let r = 0,
				n = 0;
			if (e > this.source.length) return null;
			for (;;) {
				let s = this.source.indexOf(
					`
`,
					n,
				);
				if (e <= s || s === -1) return { line: r + 1, column: e - n };
				(r += 1), (n = s + 1);
			}
		}
		charPosFor(e) {
			let { line: r, column: n } = e,
				i = this.source.length,
				a = 0,
				o = 0;
			for (; o < i; ) {
				let c = this.source.indexOf(
					`
`,
					o,
				);
				if ((c === -1 && (c = this.source.length), a === r - 1)) {
					if (o + n > c) return c;
					if (!1) {
						let p = this.hbsPosFor(o + n);
						w(p !== null, "the returned offset failed to round-trip"), w(p.line === r, "the round-tripped line didn't match the original line"), w(p.column === n, "the round-tripped column didn't match the original column");
					}
					return o + n;
				} else {
					if (c === -1) return 0;
					(a += 1), (o = c + 1);
				}
			}
			return i;
		}
	};
function S(t, e) {
	let { module: r, loc: n } = e,
		{ line: s, column: i } = n.start,
		a = e.asString(),
		o = a
			? `

|
|  ${a.split(`
`).join(`
|  `)}
|

`
			: "",
		c = new Error(`${t}: ${o}(error occurred in '${r}' @ line ${s} : column ${i})`);
	return (c.name = "SyntaxError"), (c.location = e), (c.code = a), c;
}
var ki = {
		Template: ["body"],
		Block: ["body"],
		MustacheStatement: ["path", "params", "hash"],
		BlockStatement: ["path", "params", "hash", "program", "inverse"],
		ElementModifierStatement: ["path", "params", "hash"],
		CommentStatement: [],
		MustacheCommentStatement: [],
		ElementNode: ["attributes", "modifiers", "children", "comments"],
		AttrNode: ["value"],
		TextNode: [],
		ConcatStatement: ["parts"],
		SubExpression: ["path", "params", "hash"],
		PathExpression: [],
		StringLiteral: [],
		BooleanLiteral: [],
		NumberLiteral: [],
		NullLiteral: [],
		UndefinedLiteral: [],
		Hash: ["pairs"],
		HashPair: ["value"],
	},
	Or = (function () {
		(t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t);
		function t(e, r, n, s) {
			let i = Error.call(this, e);
			(this.key = s), (this.message = e), (this.node = r), (this.parent = n), i.stack && (this.stack = i.stack);
		}
		return t;
	})();
function Bn(t, e, r) {
	return new Or("Cannot remove a node unless it is part of an array", t, e, r);
}
function Ti(t, e, r) {
	return new Or("Cannot replace a node with multiple nodes unless it is part of an array", t, e, r);
}
function In(t, e) {
	return new Or("Replacing and removing in key handlers is not yet supported.", t, null, e);
}
var Fe = class {
		node;
		parent;
		parentKey;
		constructor(e, r = null, n = null) {
			(this.node = e), (this.parent = r), (this.parentKey = n);
		}
		get parentNode() {
			return this.parent ? this.parent.node : null;
		}
		parents() {
			return { [Symbol.iterator]: () => new Pr(this) };
		}
	},
	Pr = class {
		path;
		constructor(e) {
			this.path = e;
		}
		next() {
			return this.path.parent ? ((this.path = this.path.parent), { done: !1, value: this.path }) : { done: !0, value: null };
		}
	};
function Vn(t) {
	return typeof t == "function" ? t : t.enter;
}
function Un(t) {
	if (typeof t != "function") return t.exit;
}
function Ni(t, e) {
	let r = typeof t != "function" ? t.keys : void 0;
	if (r === void 0) return;
	let n = r[e];
	return n !== void 0 ? n : r.All;
}
function vi(t, e) {
	if (t.Program && ((e === "Template" && !t.Template) || (e === "Block" && !t.Block))) return F(`The 'Program' visitor node is deprecated. Use 'Template' or 'Block' instead (node was '${e}') `), t.Program;
	let r = t[e];
	return r !== void 0 ? r : t.All;
}
function Ot(t, e) {
	let { node: r, parent: n, parentKey: s } = e,
		i = vi(t, r.type),
		a,
		o;
	i !== void 0 && ((a = Vn(i)), (o = Un(i)));
	let c;
	if ((a !== void 0 && (c = a(r, e)), c != null))
		if (JSON.stringify(r) === JSON.stringify(c)) c = void 0;
		else {
			if (Array.isArray(c)) return Fn(t, c, n, s), c;
			{
				let p = new Fe(c, n, s);
				return Ot(t, p) || c;
			}
		}
	if (c === void 0) {
		let p = ki[r.type];
		for (let h = 0; h < p.length; h++) {
			let d = p[h];
			Pi(t, i, e, d);
		}
		o !== void 0 && (c = o(r, e));
	}
	return c;
}
function Ai(t, e) {
	return t[e];
}
function Rn(t, e, r) {
	t[e] = r;
}
function Pi(t, e, r, n) {
	let { node: s } = r,
		i = Ai(s, n);
	if (!i) return;
	let a, o;
	if (e !== void 0) {
		let c = Ni(e, n);
		c !== void 0 && ((a = Vn(c)), (o = Un(c)));
	}
	if (a !== void 0 && a(s, n) !== void 0) throw In(s, n);
	if (Array.isArray(i)) Fn(t, i, r, n);
	else {
		let c = new Fe(i, r, n),
			p = Ot(t, c);
		p !== void 0 && xi(s, n, i, p);
	}
	if (o !== void 0 && o(s, n) !== void 0) throw In(s, n);
}
function Fn(t, e, r, n) {
	for (let s = 0; s < e.length; s++) {
		let i = kt(e[s]),
			a = new Fe(i, r, n),
			o = Ot(t, a);
		o !== void 0 && (s += Ci(e, s, o) - 1);
	}
}
function xi(t, e, r, n) {
	if (n === null) throw Bn(r, t, e);
	if (Array.isArray(n))
		if (n.length === 1) Rn(t, e, n[0]);
		else throw n.length === 0 ? Bn(r, t, e) : Ti(r, t, e);
	else Rn(t, e, n);
}
function Ci(t, e, r) {
	return r === null ? (t.splice(e, 1), 0) : Array.isArray(r) ? (t.splice(e, 1, ...r), r.length) : (t.splice(e, 1, r), 1);
}
function Li(t, e) {
	let r = new Fe(t);
	Ot(e, r);
}
function _i(t) {
	switch (t.type) {
		case "Block":
		case "Template":
			return t.body;
		case "ElementNode":
			return t.children;
	}
}
function Ve(t, e) {
	_i(t).push(e);
}
function Mn(t) {
	return t.type === "StringLiteral" || t.type === "BooleanLiteral" || t.type === "NumberLiteral" || t.type === "NullLiteral" || t.type === "UndefinedLiteral";
}
function Di(t) {
	return t.type === "UndefinedLiteral" ? "undefined" : JSON.stringify(t.value);
}
var br;
function yr() {
	return br || (br = new Te("", "(synthetic)")), br;
}
function Oi(t, e = [], r = ct([]), n = !1, s, i) {
	return f.mustache({
		path: he(t),
		params: e,
		hash: r,
		trusting: n,
		strip: i,
		loc: A(s || null),
	});
}
function Bi(t, e, r, n, s = null, i, a, o, c) {
	let p,
		h = null;
	return (
		n.type === "Template"
			? (F("b.program is deprecated. Use b.blockItself instead."),
				(p = f.blockItself({
					params: Gn(n.blockParams),
					body: n.body,
					loc: n.loc,
				})))
			: (p = n),
		(s == null ? void 0 : s.type) === "Template" ? (F("b.program is deprecated. Use b.blockItself instead."), w(s.blockParams.length === 0, "{{else}} block cannot have block params"), (h = f.blockItself({ params: [], body: s.body, loc: s.loc }))) : (h = s),
		f.block({
			path: he(t),
			params: e || [],
			hash: r || ct([]),
			defaultBlock: p,
			elseBlock: h,
			loc: A(i || null),
			openStrip: a,
			inverseStrip: o,
			closeStrip: c,
		})
	);
}
function Ii(t, e, r, n) {
	return f.elementModifier({
		path: he(t),
		params: e || [],
		hash: r || ct([]),
		loc: A(n || null),
	});
}
function Ri(t, e) {
	return f.comment({ value: t, loc: A(e || null) });
}
function qi(t, e) {
	return f.mustacheComment({ value: t, loc: A(e || null) });
}
function Hi(t, e) {
	if (!we(t)) throw new Error("b.concat requires at least one part");
	return f.concat({ parts: t, loc: A(e || null) });
}
function Vi(t, e = {}) {
	let { attrs: r, blockParams: n, modifiers: s, comments: i, children: a, openTag: o, closeTag: c, loc: p } = e,
		h,
		d;
	typeof t == "string" ? (t.endsWith("/") ? ((h = he(t.slice(0, -1))), (d = !0)) : (h = he(t))) : "type" in t ? (w(t.type === "PathExpression", `Invalid tag type ${t.type}`), (h = t)) : "path" in t ? (w(t.path.type === "PathExpression", `Invalid tag type ${t.path.type}`), (h = t.path), (d = t.selfClosing)) : ((h = he(t.name)), (d = t.selfClosing)), d && w(c == null, "Cannot build a self-closing tag with a closeTag source location");
	let N = n == null ? void 0 : n.map((T) => (typeof T == "string" ? zn(T) : T)),
		g = null;
	return (
		c ? (g = A(c || null)) : c === void 0 && (g = d || yi(h.original) ? null : A(null)),
		f.element({
			path: h,
			selfClosing: d || !1,
			attributes: r || [],
			params: N || [],
			modifiers: s || [],
			comments: i || [],
			children: a || [],
			openTag: A(o || null),
			closeTag: g,
			loc: A(p || null),
		})
	);
}
function Ui(t, e, r) {
	return f.attr({ name: t, value: e, loc: A(r || null) });
}
function Fi(t = "", e) {
	return f.text({ chars: t, loc: A(e || null) });
}
function Mi(t, e = [], r = ct([]), n) {
	return f.sexpr({ path: he(t), params: e, hash: r, loc: A(n || null) });
}
function zi(t, e) {
	let [r, ...n] = qe(t.split(".")),
		s = f.head({ original: r, loc: A(e || null) });
	return f.path({ head: s, tail: n, loc: A(e || null) });
}
function Gi(t) {
	return f.this({ loc: A(t || null) });
}
function Yi(t, e) {
	return f.atName({ name: t, loc: A(e || null) });
}
function zn(t, e) {
	return f.var({ name: t, loc: A(e || null) });
}
function Ki(t, e) {
	return f.head({ original: t, loc: A(e || null) });
}
function Wi(t, e = [], r) {
	return f.path({ head: t, tail: e, loc: A(r || null) });
}
function he(t, e) {
	let r = A(e || null);
	if (typeof t != "string") {
		if ("type" in t) return t;
		{
			w(t.head.indexOf(".") === -1, "builder.path({ head, tail }) should not be called with a head with dots in it");
			let { head: i, tail: a } = t;
			return f.path({
				head: f.head({
					original: i,
					loc: r.sliceStartChars({ chars: i.length }),
				}),
				tail: a,
				loc: A(e || null),
			});
		}
	}
	let { head: n, tail: s } = zi(t, r);
	return f.path({ head: n, tail: s, loc: r });
}
function _t(t, e, r) {
	return f.literal({ type: t, value: e, loc: A(r || null) });
}
function ct(t = [], e) {
	return f.hash({ pairs: t, loc: A(e || null) });
}
function $i(t, e, r) {
	return f.pair({ key: t, value: e, loc: A(r || null) });
}
function ji(t, e, r) {
	return F("b.program is deprecated. Use b.template or b.blockItself instead."), e && e.length ? Yn(t, e, !1, r) : Kn(t, [], r);
}
function Gn(t) {
	return t.map((e) => (typeof e == "string" ? f.var({ name: e, loc: O.synthetic(e) }) : e));
}
function Yn(t = [], e = [], r = !1, n) {
	return f.blockItself({
		body: t,
		params: Gn(e),
		chained: r,
		loc: A(n || null),
	});
}
function Kn(t = [], e = [], r) {
	return f.template({ body: t, blockParams: e, loc: A(r || null) });
}
function Qi(t, e) {
	return f.pos({ line: t, column: e });
}
function A(...t) {
	if (t.length === 1) {
		let e = t[0];
		return e && typeof e == "object" ? O.forHbsLoc(yr(), e) : O.forHbsLoc(yr(), Ei);
	} else {
		let [e, r, n, s, i] = t,
			a = i ? new Te("", i) : yr();
		return O.forHbsLoc(a, {
			start: { line: e, column: r },
			end: { line: n || e, column: s || r },
		});
	}
}
var Xi = {
	mustache: Oi,
	block: Bi,
	comment: Ri,
	mustacheComment: qi,
	element: Vi,
	elementModifier: Ii,
	attr: Ui,
	text: Fi,
	sexpr: Mi,
	concat: Hi,
	hash: ct,
	pair: $i,
	literal: _t,
	program: ji,
	blockItself: Yn,
	template: Kn,
	loc: A,
	pos: Qi,
	path: he,
	fullPath: Wi,
	head: Ki,
	at: Yi,
	var: zn,
	this: Gi,
	string: Er("StringLiteral"),
	boolean: Er("BooleanLiteral"),
	number: Er("NumberLiteral"),
	undefined() {
		return _t("UndefinedLiteral", void 0);
	},
	null() {
		return _t("NullLiteral", null);
	},
};
function Er(t) {
	return function (e, r) {
		return _t(t, e, r);
	};
}
function Ji({ path: t, params: e, hash: r, trusting: n, strip: s, loc: i }) {
	let a = {
		type: "MustacheStatement",
		path: t,
		params: e,
		hash: r,
		trusting: n,
		strip: s,
		loc: i,
	};
	return (
		Object.defineProperty(a, "escaped", {
			enumerable: !1,
			get() {
				return F("The escaped property on mustache nodes is deprecated, use trusting instead"), !this.trusting;
			},
			set(o) {
				F("The escaped property on mustache nodes is deprecated, use trusting instead"), (this.trusting = !o);
			},
		}),
		a
	);
}
function Zi({ head: t, tail: e, loc: r }) {
	let n = {
		type: "PathExpression",
		head: t,
		tail: e,
		get original() {
			return [this.head.original, ...this.tail].join(".");
		},
		set original(s) {
			let [i, ...a] = qe(s.split("."));
			(this.head = Xi.head(i, this.head.loc)), (this.tail = a);
		},
		loc: r,
	};
	return (
		Object.defineProperty(n, "parts", {
			enumerable: !1,
			get() {
				F("The parts property on path nodes is deprecated, use head and tail instead");
				let s = qe(this.original.split("."));
				return s[0] === "this" ? s.shift() : s[0].startsWith("@") && (s[0] = s[0].slice(1)), Object.freeze(s);
			},
			set(s) {
				var a;
				F("The parts property on mustache nodes is deprecated, use head and tail instead");
				let i = [...s];
				i[0] !== "this" && !((a = i[0]) != null && a.startsWith("@")) && (this.head.type === "ThisHead" ? i.unshift("this") : this.head.type === "AtHead" && (i[0] = `@${i[0]}`)), (this.original = i.join("."));
			},
		}),
		Object.defineProperty(n, "this", {
			enumerable: !1,
			get() {
				return F("The this property on path nodes is deprecated, use head.type instead"), this.head.type === "ThisHead";
			},
		}),
		Object.defineProperty(n, "data", {
			enumerable: !1,
			get() {
				return F("The data property on path nodes is deprecated, use head.type instead"), this.head.type === "AtHead";
			},
		}),
		n
	);
}
function ea({ type: t, value: e, loc: r }) {
	let n = { type: t, value: e, loc: r };
	return (
		Object.defineProperty(n, "original", {
			enumerable: !1,
			get() {
				return F("The original property on literal nodes is deprecated, use value instead"), this.value;
			},
			set(s) {
				F("The original property on literal nodes is deprecated, use value instead"), (this.value = s);
			},
		}),
		n
	);
}
var Lt = { close: !1, open: !1 },
	xr = class {
		pos({ line: e, column: r }) {
			return { line: e, column: r };
		}
		blockItself({ body: e, params: r, chained: n = !1, loc: s }) {
			return {
				type: "Block",
				body: e,
				params: r,
				get blockParams() {
					return this.params.map((i) => i.name);
				},
				set blockParams(i) {
					this.params = i.map((a) => f.var({ name: a, loc: O.synthetic(a) }));
				},
				chained: n,
				loc: s,
			};
		}
		template({ body: e, blockParams: r, loc: n }) {
			return { type: "Template", body: e, blockParams: r, loc: n };
		}
		mustache({ path: e, params: r, hash: n, trusting: s, loc: i, strip: a = Lt }) {
			return Ji({
				path: e,
				params: r,
				hash: n,
				trusting: s,
				strip: a,
				loc: i,
			});
		}
		block({ path: e, params: r, hash: n, defaultBlock: s, elseBlock: i = null, loc: a, openStrip: o = Lt, inverseStrip: c = Lt, closeStrip: p = Lt }) {
			return {
				type: "BlockStatement",
				path: e,
				params: r,
				hash: n,
				program: s,
				inverse: i,
				loc: a,
				openStrip: o,
				inverseStrip: c,
				closeStrip: p,
			};
		}
		comment({ value: e, loc: r }) {
			return { type: "CommentStatement", value: e, loc: r };
		}
		mustacheComment({ value: e, loc: r }) {
			return { type: "MustacheCommentStatement", value: e, loc: r };
		}
		concat({ parts: e, loc: r }) {
			return { type: "ConcatStatement", parts: e, loc: r };
		}
		element({ path: e, selfClosing: r, attributes: n, modifiers: s, params: i, comments: a, children: o, openTag: c, closeTag: p, loc: h }) {
			let d = r;
			return {
				type: "ElementNode",
				path: e,
				attributes: n,
				modifiers: s,
				params: i,
				comments: a,
				children: o,
				openTag: c,
				closeTag: p,
				loc: h,
				get tag() {
					return this.path.original;
				},
				set tag(N) {
					this.path.original = N;
				},
				get blockParams() {
					return this.params.map((N) => N.name);
				},
				set blockParams(N) {
					this.params = N.map((g) => f.var({ name: g, loc: O.synthetic(g) }));
				},
				get selfClosing() {
					return d;
				},
				set selfClosing(N) {
					(d = N), N ? (this.closeTag = null) : (this.closeTag = O.synthetic(`</${this.tag}>`));
				},
			};
		}
		elementModifier({ path: e, params: r, hash: n, loc: s }) {
			return {
				type: "ElementModifierStatement",
				path: e,
				params: r,
				hash: n,
				loc: s,
			};
		}
		attr({ name: e, value: r, loc: n }) {
			return { type: "AttrNode", name: e, value: r, loc: n };
		}
		text({ chars: e, loc: r }) {
			return { type: "TextNode", chars: e, loc: r };
		}
		sexpr({ path: e, params: r, hash: n, loc: s }) {
			return {
				type: "SubExpression",
				path: e,
				params: r,
				hash: n,
				loc: s,
			};
		}
		path({ head: e, tail: r, loc: n }) {
			return Zi({ head: e, tail: r, loc: n });
		}
		head({ original: e, loc: r }) {
			return e === "this" ? this.this({ loc: r }) : e[0] === "@" ? this.atName({ name: e, loc: r }) : this.var({ name: e, loc: r });
		}
		this({ loc: e }) {
			return {
				type: "ThisHead",
				get original() {
					return "this";
				},
				loc: e,
			};
		}
		atName({ name: e, loc: r }) {
			let n = "",
				s = {
					type: "AtHead",
					get name() {
						return n;
					},
					set name(i) {
						w(i[0] === "@", "call builders.at() with a string that starts with '@'"), w(i.indexOf(".") === -1, "builder.at() should not be called with a name with dots in it"), (n = i);
					},
					get original() {
						return this.name;
					},
					set original(i) {
						this.name = i;
					},
					loc: r,
				};
			return (s.name = e), s;
		}
		var({ name: e, loc: r }) {
			let n = "",
				s = {
					type: "VarHead",
					get name() {
						return n;
					},
					set name(i) {
						w(i !== "this", "You called builders.var() with 'this'. Call builders.this instead"), w(i[0] !== "@", `You called builders.var() with '${e}'. Call builders.at('${e}') instead`), w(i.indexOf(".") === -1, "builder.var() should not be called with a name with dots in it"), (n = i);
					},
					get original() {
						return this.name;
					},
					set original(i) {
						this.name = i;
					},
					loc: r,
				};
			return (s.name = e), s;
		}
		hash({ pairs: e, loc: r }) {
			return { type: "Hash", pairs: e, loc: r };
		}
		pair({ key: e, value: r, loc: n }) {
			return { type: "HashPair", key: e, value: r, loc: n };
		}
		literal({ type: e, value: r, loc: n }) {
			return ea({ type: e, value: r, loc: n });
		}
	},
	f = new xr(),
	Cr = class {
		elementStack = [];
		lines;
		source;
		currentAttribute = null;
		currentNode = null;
		tokenizer;
		constructor(e, r = new dr(Dn), n = "precompile") {
			(this.source = e), (this.lines = e.source.split(/\r\n?|\n/u)), (this.tokenizer = new mr(this, r, n));
		}
		offset() {
			let { line: e, column: r } = this.tokenizer;
			return this.source.offsetFor(e, r);
		}
		pos({ line: e, column: r }) {
			return this.source.offsetFor(e, r);
		}
		finish(e) {
			return ar({}, e, { loc: e.start.until(this.offset()) });
		}
		get currentAttr() {
			return Tn(this.currentAttribute, "expected attribute");
		}
		get currentTag() {
			let e = this.currentNode;
			return w(e && (e.type === "StartTag" || e.type === "EndTag"), "expected tag"), e;
		}
		get currentStartTag() {
			let e = this.currentNode;
			return w(e && e.type === "StartTag", "expected start tag"), e;
		}
		get currentEndTag() {
			let e = this.currentNode;
			return w(e && e.type === "EndTag", "expected end tag"), e;
		}
		get currentComment() {
			let e = this.currentNode;
			return w(e && e.type === "CommentStatement", "expected a comment"), e;
		}
		get currentData() {
			let e = this.currentNode;
			return w(e && e.type === "TextNode", "expected a text node"), e;
		}
		acceptNode(e) {
			return this[e.type](e);
		}
		currentElement() {
			return Nt(qe(this.elementStack));
		}
		sourceForNode(e, r) {
			let n = e.loc.start.line - 1,
				s = n - 1,
				i = e.loc.start.column,
				a = [],
				o,
				c,
				p;
			for (r ? ((c = r.loc.end.line - 1), (p = r.loc.end.column)) : ((c = e.loc.end.line - 1), (p = e.loc.end.column)); s < c; ) s++, (o = kt(this.lines[s])), s === n ? (n === c ? a.push(o.slice(i, p)) : a.push(o.slice(i))) : s === c ? a.push(o.slice(0, p)) : a.push(o);
			return a.join(`
`);
		}
	},
	qn = "beforeAttributeName",
	ta = "attributeValueUnquoted",
	Lr = class extends Cr {
		pendingError = null;
		parse(e, r) {
			var i;
			let n = f.template({
					body: [],
					blockParams: r,
					loc: this.source.spanFor(e.loc),
				}),
				s = this.parseProgram(n, e);
			return (i = this.pendingError) == null || i.eof(s.loc.getEnd()), s;
		}
		Program(e, r) {
			w(Array.isArray(r), "[BUG] Program in parser unexpectedly called without block params");
			let n = f.blockItself({
				body: [],
				params: r,
				chained: e.chained,
				loc: this.source.spanFor(e.loc),
			});
			return this.parseProgram(n, e);
		}
		parseProgram(e, r) {
			if (r.body.length === 0) return e;
			let n;
			try {
				this.elementStack.push(e);
				for (let s of r.body) this.acceptNode(s);
			} finally {
				n = this.elementStack.pop();
			}
			if (e !== n) {
				if ((n == null ? void 0 : n.type) === "ElementNode") throw S(`Unclosed element \`${n.tag}\``, n.loc);
				w(n !== void 0, "[BUG] empty parser elementStack"), w(!1, `[BUG] mismatched parser elementStack node: ${e.type}`);
			}
			return e;
		}
		BlockStatement(e) {
			var d;
			if (this.tokenizer.state === "comment") {
				this.appendToCommentData(this.sourceForNode(e));
				return;
			}
			if (this.tokenizer.state !== "data" && this.tokenizer.state !== "beforeData") throw S("A block may only be used inside an HTML element or another block.", this.source.spanFor(e.loc));
			let { path: r, params: n, hash: s } = Sr(this, e),
				i = this.source.spanFor(e.loc),
				a = [];
			if ((d = e.program.blockParams) != null && d.length) {
				let N = s.loc.collapse("end");
				e.program.loc ? (N = N.withEnd(this.source.spanFor(e.program.loc).getStart())) : e.program.body[0] ? (N = N.withEnd(this.source.spanFor(e.program.body[0].loc).getStart())) : (N = N.withEnd(i.getEnd()));
				let g = N.asString(),
					T = g.indexOf("|") + 1,
					x = g.indexOf("|", T);
				for (let C of e.program.blockParams) {
					let v, M;
					T >= x ? (v = -1) : (v = g.indexOf(C, T)),
						v === -1 || v + C.length > x
							? ((T = x), (M = this.source.spanFor(st)))
							: ((T = v),
								(M = N.sliceStartChars({
									skipStart: T,
									chars: C.length,
								})),
								(T += C.length)),
						a.push(f.var({ name: C, loc: M }));
				}
			}
			e.program.loc || (e.program.loc = st), e.inverse && !e.inverse.loc && (e.inverse.loc = st);
			let o = this.Program(e.program, a),
				c = e.inverse ? this.Program(e.inverse, []) : null,
				p = f.block({
					path: r,
					params: n,
					hash: s,
					defaultBlock: o,
					elseBlock: c,
					loc: this.source.spanFor(e.loc),
					openStrip: e.openStrip,
					inverseStrip: e.inverseStrip,
					closeStrip: e.closeStrip,
				}),
				h = this.currentElement();
			Ve(h, p);
		}
		MustacheStatement(e) {
			var o;
			(o = this.pendingError) == null || o.mustache(this.source.spanFor(e.loc));
			let { tokenizer: r } = this;
			if (r.state === "comment") {
				this.appendToCommentData(this.sourceForNode(e));
				return;
			}
			let n,
				{ escaped: s, loc: i, strip: a } = e;
			if ("original" in e.path && e.path.original === "...attributes") throw S("Illegal use of ...attributes", this.source.spanFor(e.loc));
			if (Mn(e.path))
				n = f.mustache({
					path: this.acceptNode(e.path),
					params: [],
					hash: f.hash({
						pairs: [],
						loc: this.source.spanFor(e.path.loc).collapse("end"),
					}),
					trusting: !s,
					loc: this.source.spanFor(i),
					strip: a,
				});
			else {
				let { path: c, params: p, hash: h } = Sr(this, e);
				n = f.mustache({
					path: c,
					params: p,
					hash: h,
					trusting: !s,
					loc: this.source.spanFor(i),
					strip: a,
				});
			}
			switch (r.state) {
				case "tagOpen":
				case "tagName":
					throw S("Cannot use mustaches in an elements tagname", n.loc);
				case "beforeAttributeName":
					wr(this.currentStartTag, n);
					break;
				case "attributeName":
				case "afterAttributeName":
					this.beginAttributeValue(!1), this.finishAttributeValue(), wr(this.currentStartTag, n), r.transitionTo(qn);
					break;
				case "afterAttributeValueQuoted":
					wr(this.currentStartTag, n), r.transitionTo(qn);
					break;
				case "beforeAttributeValue":
					this.beginAttributeValue(!1), this.appendDynamicAttributeValuePart(n), r.transitionTo(ta);
					break;
				case "attributeValueDoubleQuoted":
				case "attributeValueSingleQuoted":
				case "attributeValueUnquoted":
					this.appendDynamicAttributeValuePart(n);
					break;
				default:
					Ve(this.currentElement(), n);
			}
			return n;
		}
		appendDynamicAttributeValuePart(e) {
			this.finalizeTextPart();
			let r = this.currentAttr;
			(r.isDynamic = !0), r.parts.push(e);
		}
		finalizeTextPart() {
			let r = this.currentAttr.currentPart;
			r !== null && (this.currentAttr.parts.push(r), this.startTextPart());
		}
		startTextPart() {
			this.currentAttr.currentPart = null;
		}
		ContentStatement(e) {
			na(this.tokenizer, e), this.tokenizer.tokenizePart(e.value), this.tokenizer.flushData();
		}
		CommentStatement(e) {
			let { tokenizer: r } = this;
			if (r.state === "comment") return this.appendToCommentData(this.sourceForNode(e)), null;
			let { value: n, loc: s } = e,
				i = f.mustacheComment({
					value: n,
					loc: this.source.spanFor(s),
				});
			switch (r.state) {
				case "beforeAttributeName":
				case "afterAttributeName":
					this.currentStartTag.comments.push(i);
					break;
				case "beforeData":
				case "data":
					Ve(this.currentElement(), i);
					break;
				default:
					throw S(`Using a Handlebars comment when in the \`${r.state}\` state is not supported`, this.source.spanFor(e.loc));
			}
			return i;
		}
		PartialStatement(e) {
			throw S("Handlebars partials are not supported", this.source.spanFor(e.loc));
		}
		PartialBlockStatement(e) {
			throw S("Handlebars partial blocks are not supported", this.source.spanFor(e.loc));
		}
		Decorator(e) {
			throw S("Handlebars decorators are not supported", this.source.spanFor(e.loc));
		}
		DecoratorBlock(e) {
			throw S("Handlebars decorator blocks are not supported", this.source.spanFor(e.loc));
		}
		SubExpression(e) {
			let { path: r, params: n, hash: s } = Sr(this, e);
			return f.sexpr({
				path: r,
				params: n,
				hash: s,
				loc: this.source.spanFor(e.loc),
			});
		}
		PathExpression(e) {
			let { original: r } = e,
				n;
			if (r.indexOf("/") !== -1) {
				if (r.slice(0, 2) === "./") throw S('Using "./" is not supported in Glimmer and unnecessary', this.source.spanFor(e.loc));
				if (r.slice(0, 3) === "../") throw S('Changing context using "../" is not supported in Glimmer', this.source.spanFor(e.loc));
				if (r.indexOf(".") !== -1) throw S("Mixing '.' and '/' in paths is not supported in Glimmer; use only '.' to separate property paths", this.source.spanFor(e.loc));
				n = [e.parts.join("/")];
			} else {
				if (r === ".") throw S("'.' is not a supported path in Glimmer; check for a path with a trailing '.'", this.source.spanFor(e.loc));
				n = e.parts;
			}
			let s = !1;
			/^this(?:\..+)?$/u.test(r) && (s = !0);
			let i;
			if (s)
				i = f.this({
					loc: this.source.spanFor({
						start: e.loc.start,
						end: {
							line: e.loc.start.line,
							column: e.loc.start.column + 4,
						},
					}),
				});
			else if (e.data) {
				let a = n.shift();
				if (a === void 0) throw S("Attempted to parse a path expression, but it was not valid. Paths beginning with @ must start with a-z.", this.source.spanFor(e.loc));
				i = f.atName({
					name: `@${a}`,
					loc: this.source.spanFor({
						start: e.loc.start,
						end: {
							line: e.loc.start.line,
							column: e.loc.start.column + a.length + 1,
						},
					}),
				});
			} else {
				let a = n.shift();
				if (a === void 0) throw S("Attempted to parse a path expression, but it was not valid. Paths must start with a-z or A-Z.", this.source.spanFor(e.loc));
				i = f.var({
					name: a,
					loc: this.source.spanFor({
						start: e.loc.start,
						end: {
							line: e.loc.start.line,
							column: e.loc.start.column + a.length,
						},
					}),
				});
			}
			return f.path({
				head: i,
				tail: n,
				loc: this.source.spanFor(e.loc),
			});
		}
		Hash(e) {
			let r = e.pairs.map((n) =>
				f.pair({
					key: n.key,
					value: this.acceptNode(n.value),
					loc: this.source.spanFor(n.loc),
				}),
			);
			return f.hash({ pairs: r, loc: this.source.spanFor(e.loc) });
		}
		StringLiteral(e) {
			return f.literal({
				type: "StringLiteral",
				value: e.value,
				loc: this.source.spanFor(e.loc),
			});
		}
		BooleanLiteral(e) {
			return f.literal({
				type: "BooleanLiteral",
				value: e.value,
				loc: this.source.spanFor(e.loc),
			});
		}
		NumberLiteral(e) {
			return f.literal({
				type: "NumberLiteral",
				value: e.value,
				loc: this.source.spanFor(e.loc),
			});
		}
		UndefinedLiteral(e) {
			return f.literal({
				type: "UndefinedLiteral",
				value: void 0,
				loc: this.source.spanFor(e.loc),
			});
		}
		NullLiteral(e) {
			return f.literal({
				type: "NullLiteral",
				value: null,
				loc: this.source.spanFor(e.loc),
			});
		}
	};
function ra(t, e) {
	if (e === "")
		return {
			lines:
				t.split(`
`).length - 1,
			columns: 0,
		};
	let [r] = t.split(e),
		n = r.split(/\n/u),
		s = n.length - 1;
	return { lines: s, columns: kt(n[s]).length };
}
function na(t, e) {
	let r = e.loc.start.line,
		n = e.loc.start.column,
		s = ra(e.original, e.value);
	(r = r + s.lines), s.lines ? (n = s.columns) : (n = n + s.columns), (t.line = r), (t.column = n);
}
function Sr(t, e) {
	let r;
	switch (e.path.type) {
		case "PathExpression":
			r = t.PathExpression(e.path);
			break;
		case "SubExpression":
			r = t.SubExpression(e.path);
			break;
		case "StringLiteral":
		case "UndefinedLiteral":
		case "NullLiteral":
		case "NumberLiteral":
		case "BooleanLiteral": {
			let a;
			throw (e.path.type === "BooleanLiteral" ? (a = e.path.original.toString()) : e.path.type === "StringLiteral" ? (a = `"${e.path.original}"`) : e.path.type === "NullLiteral" ? (a = "null") : e.path.type === "NumberLiteral" ? (a = e.path.value.toString()) : (a = "undefined"), S(`${e.path.type} "${e.path.type === "StringLiteral" ? e.path.original : a}" cannot be called as a sub-expression, replace (${a}) with ${a}`, t.source.spanFor(e.path.loc)));
		}
	}
	let n = e.params ? e.params.map((a) => t.acceptNode(a)) : [],
		s = we(n) ? Nt(n).loc : r.loc,
		i = e.hash ? t.Hash(e.hash) : f.hash({ pairs: [], loc: t.source.spanFor(s).collapse("end") });
	return { path: r, params: n, hash: i };
}
function wr(t, e) {
	let { path: r, params: n, hash: s, loc: i } = e;
	if (Mn(r)) {
		let o = `{{${Di(r)}}}`,
			c = `<${t.name} ... ${o} ...`;
		throw S(`In ${c}, ${o} is not a valid modifier`, e.loc);
	}
	let a = f.elementModifier({ path: r, params: n, hash: s, loc: i });
	t.modifiers.push(a);
}
function He(t) {
	return /[\t\n\f ]/u.test(t);
}
var _r = class extends Lr {
		tagOpenLine = 0;
		tagOpenColumn = 0;
		reset() {
			this.currentNode = null;
		}
		beginComment() {
			this.currentNode = {
				type: "CommentStatement",
				value: "",
				start: this.source.offsetFor(this.tagOpenLine, this.tagOpenColumn),
			};
		}
		appendToCommentData(e) {
			this.currentComment.value += e;
		}
		finishComment() {
			Ve(this.currentElement(), f.comment(this.finish(this.currentComment)));
		}
		beginData() {
			this.currentNode = {
				type: "TextNode",
				chars: "",
				start: this.offset(),
			};
		}
		appendToData(e) {
			this.currentData.chars += e;
		}
		finishData() {
			Ve(this.currentElement(), f.text(this.finish(this.currentData)));
		}
		tagOpen() {
			(this.tagOpenLine = this.tokenizer.line), (this.tagOpenColumn = this.tokenizer.column);
		}
		beginStartTag() {
			this.currentNode = {
				type: "StartTag",
				name: "",
				nameStart: null,
				nameEnd: null,
				attributes: [],
				modifiers: [],
				comments: [],
				params: [],
				selfClosing: !1,
				start: this.source.offsetFor(this.tagOpenLine, this.tagOpenColumn),
			};
		}
		beginEndTag() {
			this.currentNode = {
				type: "EndTag",
				name: "",
				start: this.source.offsetFor(this.tagOpenLine, this.tagOpenColumn),
			};
		}
		finishTag() {
			let e = this.finish(this.currentTag);
			if (e.type === "StartTag") {
				if ((this.finishStartTag(), e.name === ":"))
					throw S(
						"Invalid named block named detected, you may have created a named block without a name, or you may have began your name with a number. Named blocks must have names that are at least one character long, and begin with a lower case letter",
						this.source.spanFor({
							start: this.currentTag.start.toJSON(),
							end: this.offset().toJSON(),
						}),
					);
				(kr.has(e.name) || e.selfClosing) && this.finishEndTag(!0);
			} else e.type === "EndTag" && this.finishEndTag(!1);
		}
		finishStartTag() {
			let { name: e, nameStart: r, nameEnd: n } = this.currentStartTag;
			w(e !== "", "tag name cannot be empty"), w(r !== null, "nameStart unexpectedly null"), w(n !== null, "nameEnd unexpectedly null");
			let s = r.until(n),
				[i, ...a] = qe(e.split(".")),
				o = f.path({
					head: f.head({
						original: i,
						loc: s.sliceStartChars({ chars: i.length }),
					}),
					tail: a,
					loc: s,
				}),
				{ attributes: c, modifiers: p, comments: h, params: d, selfClosing: N, loc: g } = this.finish(this.currentStartTag),
				T = f.element({
					path: o,
					selfClosing: N,
					attributes: c,
					modifiers: p,
					comments: h,
					params: d,
					children: [],
					openTag: g,
					closeTag: N ? null : O.broken(),
					loc: g,
				});
			this.elementStack.push(T);
		}
		finishEndTag(e) {
			let { start: r } = this.currentTag,
				n = this.finish(this.currentTag),
				s = this.elementStack.pop();
			this.validateEndTag(n, s, e);
			let i = this.currentElement();
			e ? (s.closeTag = null) : s.selfClosing ? w(s.closeTag === null, "element.closeTag unexpectedly present") : (s.closeTag = r.until(this.offset())), (s.loc = s.loc.withEnd(this.offset())), Ve(i, f.element(s));
		}
		markTagAsSelfClosing() {
			let e = this.currentTag;
			if (e.type === "StartTag") e.selfClosing = !0;
			else
				throw S(
					"Invalid end tag: closing tag must not be self-closing",
					this.source.spanFor({
						start: e.start.toJSON(),
						end: this.offset().toJSON(),
					}),
				);
		}
		appendToTagName(e) {
			let r = this.currentTag;
			if (((r.name += e), r.type === "StartTag")) {
				let n = this.offset();
				r.nameStart === null && (w(r.nameEnd === null, "nameStart and nameEnd must both be null"), (r.nameStart = n.move(-1))), (r.nameEnd = n);
			}
		}
		beginAttribute() {
			let e = this.offset();
			this.currentAttribute = {
				name: "",
				parts: [],
				currentPart: null,
				isQuoted: !1,
				isDynamic: !1,
				start: e,
				valueSpan: e.collapsed(),
			};
		}
		appendToAttributeName(e) {
			(this.currentAttr.name += e), this.currentAttr.name === "as" && this.parsePossibleBlockParams();
		}
		beginAttributeValue(e) {
			(this.currentAttr.isQuoted = e), this.startTextPart(), (this.currentAttr.valueSpan = this.offset().collapsed());
		}
		appendToAttributeValue(e) {
			let r = this.currentAttr.parts,
				n = r[r.length - 1],
				s = this.currentAttr.currentPart;
			if (s) (s.chars += e), (s.loc = s.loc.withEnd(this.offset()));
			else {
				let i = this.offset();
				e ===
				`
`
					? (i = n ? n.loc.getEnd() : this.currentAttr.valueSpan.getStart())
					: (i = i.move(-1)),
					(this.currentAttr.currentPart = f.text({
						chars: e,
						loc: i.collapsed(),
					}));
			}
		}
		finishAttributeValue() {
			this.finalizeTextPart();
			let e = this.currentTag,
				r = this.offset();
			if (e.type === "EndTag")
				throw S(
					"Invalid end tag: closing tag must not have attributes",
					this.source.spanFor({
						start: e.start.toJSON(),
						end: r.toJSON(),
					}),
				);
			let { name: n, parts: s, start: i, isQuoted: a, isDynamic: o, valueSpan: c } = this.currentAttr;
			if (n.startsWith("|") && s.length === 0 && !a && !o) throw S("Invalid block parameters syntax: block parameters must be preceded by the `as` keyword", i.until(i.move(n.length)));
			let p = this.assembleAttributeValue(s, a, o, i.until(r));
			p.loc = c.withEnd(r);
			let h = f.attr({ name: n, value: p, loc: i.until(r) });
			this.currentStartTag.attributes.push(h);
		}
		parsePossibleBlockParams() {
			let e = "beforeAttributeName",
				r = "attributeName",
				n = "afterAttributeName",
				s = /[!"#%&'()*+./;<=>@[\\\]^`{|}~]/u;
			w(this.tokenizer.state === r, "must be in TokenizerState.attributeName");
			let i = this.currentStartTag,
				a = this.currentAttr,
				o = { state: "PossibleAs" },
				c = {
					PossibleAs: (h) => {
						if ((w(o.state === "PossibleAs", "bug in block params parser"), He(h))) (o = { state: "BeforeStartPipe" }), this.tokenizer.transitionTo(n), this.tokenizer.consume();
						else {
							if (h === "|") throw S('Invalid block parameters syntax: expecting at least one space character between "as" and "|"', a.start.until(this.offset().move(1)));
							o = { state: "Done" };
						}
					},
					BeforeStartPipe: (h) => {
						w(o.state === "BeforeStartPipe", "bug in block params parser"), He(h) ? this.tokenizer.consume() : h === "|" ? ((o = { state: "BeforeBlockParamName" }), this.tokenizer.transitionTo(e), this.tokenizer.consume()) : (o = { state: "Done" });
					},
					BeforeBlockParamName: (h) => {
						if ((w(o.state === "BeforeBlockParamName", "bug in block params parser"), He(h))) this.tokenizer.consume();
						else if (h === "")
							(o = { state: "Done" }),
								(this.pendingError = {
									mustache(d) {
										throw S("Invalid block parameters syntax: mustaches cannot be used inside parameters list", d);
									},
									eof(d) {
										throw S('Invalid block parameters syntax: expecting the tag to be closed with ">" or "/>" after parameters list', a.start.until(d));
									},
								});
						else if (h === "|") {
							if (i.params.length === 0) throw S("Invalid block parameters syntax: empty parameters list, expecting at least one identifier", a.start.until(this.offset().move(1)));
							(o = { state: "AfterEndPipe" }), this.tokenizer.consume();
						} else {
							if (h === ">" || h === "/") throw S('Invalid block parameters syntax: incomplete parameters list, expecting "|" but the tag was closed prematurely', a.start.until(this.offset().move(1)));
							(o = {
								state: "BlockParamName",
								name: h,
								start: this.offset(),
							}),
								this.tokenizer.consume();
						}
					},
					BlockParamName: (h) => {
						if ((w(o.state === "BlockParamName", "bug in block params parser"), h === ""))
							(o = { state: "Done" }),
								(this.pendingError = {
									mustache(d) {
										throw S("Invalid block parameters syntax: mustaches cannot be used inside parameters list", d);
									},
									eof(d) {
										throw S('Invalid block parameters syntax: expecting the tag to be closed with ">" or "/>" after parameters list', a.start.until(d));
									},
								});
						else if (h === "|" || He(h)) {
							let d = o.start.until(this.offset());
							if (o.name === "this" || s.test(o.name)) throw S(`Invalid block parameters syntax: invalid identifier name \`${o.name}\``, d);
							i.params.push(f.var({ name: o.name, loc: d })), (o = h === "|" ? { state: "AfterEndPipe" } : { state: "BeforeBlockParamName" }), this.tokenizer.consume();
						} else {
							if (h === ">" || h === "/") throw S('Invalid block parameters syntax: expecting "|" but the tag was closed prematurely', a.start.until(this.offset().move(1)));
							(o.name += h), this.tokenizer.consume();
						}
					},
					AfterEndPipe: (h) => {
						w(o.state === "AfterEndPipe", "bug in block params parser"),
							He(h)
								? this.tokenizer.consume()
								: h === ""
									? ((o = { state: "Done" }),
										(this.pendingError = {
											mustache(d) {
												throw S("Invalid block parameters syntax: modifiers cannot follow parameters list", d);
											},
											eof(d) {
												throw S('Invalid block parameters syntax: expecting the tag to be closed with ">" or "/>" after parameters list', a.start.until(d));
											},
										}))
									: h === ">" || h === "/"
										? (o = { state: "Done" })
										: ((o = {
												state: "Error",
												message: 'Invalid block parameters syntax: expecting the tag to be closed with ">" or "/>" after parameters list',
												start: this.offset(),
											}),
											this.tokenizer.consume());
					},
					Error: (h) => {
						if ((w(o.state === "Error", "bug in block params parser"), h === "" || h === "/" || h === ">" || He(h))) throw S(o.message, o.start.until(this.offset()));
						this.tokenizer.consume();
					},
					Done: () => {
						w(!1, "This should never be called");
					},
				},
				p;
			do (p = this.tokenizer.peek()), c[o.state](p);
			while (o.state !== "Done" && p !== "");
			w(o.state === "Done", "bug in block params parser");
		}
		reportSyntaxError(e) {
			throw S(e, this.offset().collapsed());
		}
		assembleConcatenatedValue(e) {
			for (let s of e) if (s.type !== "MustacheStatement" && s.type !== "TextNode") throw S(`Unsupported node in quoted attribute value: ${s.type}`, s.loc);
			Tt(e, "the concatenation parts of an element should not be empty");
			let r = Nn(e),
				n = Nt(e);
			return f.concat({
				parts: e,
				loc: this.source.spanFor(r.loc).extend(this.source.spanFor(n.loc)),
			});
		}
		validateEndTag(e, r, n) {
			if (kr.has(e.name) && !n) throw S(`<${e.name}> elements do not need end tags. You should remove it`, e.loc);
			if (r.tag === void 0) throw S(`Closing tag </${e.name}> without an open tag`, e.loc);
			if (r.tag !== e.name) throw S(`Closing tag </${e.name}> did not match last open tag <${r.tag}> (on line ${r.loc.startPosition.line})`, e.loc);
		}
		assembleAttributeValue(e, r, n, s) {
			if (n) {
				if (r) return this.assembleConcatenatedValue(e);
				{
					Tt(e);
					let [i, a] = e;
					if (a === void 0 || (a.type === "TextNode" && a.chars === "/")) return i;
					throw S("An unquoted attribute value must be a string or a mustache, preceded by whitespace or a '=' character, and followed by whitespace, a '>' character, or '/>'", s);
				}
			} else return we(e) ? e[0] : f.text({ chars: "", loc: s });
		}
	},
	sa = {},
	Dr = class extends dr {
		constructor() {
			super({});
		}
		parse() {}
	};
function Wn(t, e = {}) {
	var c, p, h;
	let r = e.mode || "precompile",
		n,
		s;
	typeof t == "string" ? ((n = new Te(t, (c = e.meta) == null ? void 0 : c.moduleName)), r === "codemod" ? (s = Ct(t, e.parseOptions)) : (s = fr(t, e.parseOptions))) : t instanceof Te ? ((n = t), r === "codemod" ? (s = Ct(t.source, e.parseOptions)) : (s = fr(t.source, e.parseOptions))) : ((n = new Te("", (p = e.meta) == null ? void 0 : p.moduleName)), (s = t));
	let i;
	r === "codemod" && (i = new Dr());
	let a = O.forCharPositions(n, 0, n.source.length);
	s.loc = { source: "(program)", start: a.startPosition, end: a.endPosition };
	let o = new _r(n, i, r).parse(s, e.locals ?? []);
	if ((h = e == null ? void 0 : e.plugins) != null && h.ast)
		for (let d of e.plugins.ast) {
			let N = ar({}, e, { syntax: sa }, { plugins: void 0 }),
				g = d(N);
			Li(o, g.visitor);
		}
	return o;
}
var Br = (function (t) {
		return (t.Helper = "Helper"), (t.Modifier = "Modifier"), (t.Component = "Component"), t;
	})({}),
	tl = Br.Helper,
	rl = Br.Modifier,
	nl = Br.Component;
var Bt = `
`,
	$n = "\r",
	jn = (function () {
		function t(e) {
			this.length = e.length;
			for (var r = [0], n = 0; n < e.length; )
				switch (e[n]) {
					case Bt:
						(n += Bt.length), r.push(n);
						break;
					case $n:
						(n += $n.length), e[n] === Bt && (n += Bt.length), r.push(n);
						break;
					default:
						n++;
						break;
				}
			this.offsets = r;
		}
		return (
			(t.prototype.locationForIndex = function (e) {
				if (e < 0 || e > this.length) return null;
				for (var r = 0, n = this.offsets; n[r + 1] <= e; ) r++;
				var s = e - n[r];
				return { line: r, column: s };
			}),
			(t.prototype.indexForLocation = function (e) {
				var r = e.line,
					n = e.column;
				return r < 0 || r >= this.offsets.length || n < 0 || n > this.lengthOfLine(r) ? null : this.offsets[r] + n;
			}),
			(t.prototype.lengthOfLine = function (e) {
				var r = this.offsets[e],
					n = e === this.offsets.length - 1 ? this.length : this.offsets[e + 1];
				return n - r;
			}),
			t
		);
	})();
function ia(t, e) {
	let r = new SyntaxError(t + " (" + e.loc.start.line + ":" + e.loc.start.column + ")");
	return Object.assign(r, e);
}
var Qn = ia;
function aa(t) {
	let e = t.children ?? t.body;
	if (e) for (let r = 0; r < e.length - 1; r++) e[r].type === "TextNode" && e[r + 1].type === "MustacheStatement" && (e[r].chars = e[r].chars.replace(/\\$/u, "\\\\"));
}
function oa(t) {
	let e = new jn(t),
		r = ({ line: s, column: i }) => e.indexForLocation({ line: s - 1, column: i }),
		n = (s) => {
			let { start: i, end: a } = s.loc;
			(i.offset = r(i)), (a.offset = r(a));
		};
	return () => ({
		name: "prettierParsePlugin",
		visitor: {
			All(s) {
				n(s), aa(s);
			},
		},
	});
}
function la(t) {
	let e;
	try {
		e = Wn(t, { mode: "codemod", plugins: { ast: [oa(t)] } });
	} catch (r) {
		let n = ua(r);
		if (n) {
			let s = ca(r);
			throw Qn(s, { loc: n, cause: r });
		}
		throw r;
	}
	return e;
}
function ca(t) {
	let { message: e } = t,
		r = e.split(`
`);
	return r.length >= 4 && /^Parse error on line \d+:$/u.test(r[0]) && /^-*\^$/u.test(oe(!1, r, -2)) ? oe(!1, r, -1) : r.length >= 4 && /:\s?$/u.test(r[0]) && /^\(error occurred in '.*?' @ line \d+ : column \d+\)$/u.test(oe(!1, r, -1)) && r[1] === "" && oe(!1, r, -2) === "" && r.slice(2, -2).every((n) => n.startsWith("|")) ? r[0].trim().slice(0, -1) : e;
}
function ua(t) {
	let { location: e, hash: r } = t;
	if (e) {
		let { start: n, end: s } = e;
		return typeof s.line != "number" ? { start: n } : e;
	}
	if (r) {
		let {
			loc: { last_line: n, last_column: s },
		} = r;
		return { start: { line: n, column: s + 1 } };
	}
}
var ha = { parse: la, astFormat: "glimmer", locStart: Se, locEnd: tt };
var pa = { glimmer: En };
var bl = Rr;
export { bl as default, Sn as languages, Ir as parsers, pa as printers };
