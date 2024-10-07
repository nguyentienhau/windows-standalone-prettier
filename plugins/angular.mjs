var Je = Object.defineProperty;
var ae = (r) => {
	throw TypeError(r);
};
var oe = (r, t) => {
	for (var e in t) Je(r, e, { get: t[e], enumerable: !0 });
};
var Ut = (r, t, e) => t.has(r) || ae("Cannot " + e);
var O = (r, t, e) => (Ut(r, t, "read from private field"), e ? e.call(r) : t.get(r)),
	P = (r, t, e) => (t.has(r) ? ae("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e)),
	Y = (r, t, e, s) => (Ut(r, t, "write to private field"), s ? s.call(r, e) : t.set(r, e), e),
	c = (r, t, e) => (Ut(r, t, "access private method"), e);
var ne = {};
oe(ne, { parsers: () => ie });
var ie = {};
oe(ie, {
	__ng_action: () => js,
	__ng_binding: () => Ys,
	__ng_directive: () => Js,
	__ng_interpolation: () => Zs,
});
var Z = class {
		constructor(t, e, s, i) {
			(this.input = e), (this.errLocation = s), (this.ctxLocation = i), (this.message = `Parser Error: ${t} ${s} [${e}] in ${i}`);
		}
	},
	b = class {
		constructor(t, e) {
			(this.start = t), (this.end = e);
		}
		toAbsolute(t) {
			return new L(t + this.start, t + this.end);
		}
	},
	m = class {
		constructor(t, e) {
			(this.span = t), (this.sourceSpan = e);
		}
		toString() {
			return "AST";
		}
	},
	J = class extends m {
		constructor(t, e, s) {
			super(t, e), (this.nameSpan = s);
		}
	},
	$ = class extends m {
		visit(t, e = null) {}
	},
	K = class extends m {
		visit(t, e = null) {
			return t.visitImplicitReceiver(this, e);
		}
	},
	Lt = class extends K {
		visit(t, e = null) {
			var s;
			return (s = t.visitThisReceiver) == null ? void 0 : s.call(t, this, e);
		}
	},
	X = class extends m {
		constructor(t, e, s) {
			super(t, e), (this.expressions = s);
		}
		visit(t, e = null) {
			return t.visitChain(this, e);
		}
	},
	tt = class extends m {
		constructor(t, e, s, i, n) {
			super(t, e), (this.condition = s), (this.trueExp = i), (this.falseExp = n);
		}
		visit(t, e = null) {
			return t.visitConditional(this, e);
		}
	},
	M = class extends J {
		constructor(t, e, s, i, n) {
			super(t, e, s), (this.receiver = i), (this.name = n);
		}
		visit(t, e = null) {
			return t.visitPropertyRead(this, e);
		}
	},
	et = class extends J {
		constructor(t, e, s, i, n, a) {
			super(t, e, s), (this.receiver = i), (this.name = n), (this.value = a);
		}
		visit(t, e = null) {
			return t.visitPropertyWrite(this, e);
		}
	},
	_ = class extends J {
		constructor(t, e, s, i, n) {
			super(t, e, s), (this.receiver = i), (this.name = n);
		}
		visit(t, e = null) {
			return t.visitSafePropertyRead(this, e);
		}
	},
	st = class extends m {
		constructor(t, e, s, i) {
			super(t, e), (this.receiver = s), (this.key = i);
		}
		visit(t, e = null) {
			return t.visitKeyedRead(this, e);
		}
	},
	U = class extends m {
		constructor(t, e, s, i) {
			super(t, e), (this.receiver = s), (this.key = i);
		}
		visit(t, e = null) {
			return t.visitSafeKeyedRead(this, e);
		}
	},
	rt = class extends m {
		constructor(t, e, s, i, n) {
			super(t, e), (this.receiver = s), (this.key = i), (this.value = n);
		}
		visit(t, e = null) {
			return t.visitKeyedWrite(this, e);
		}
	},
	it = class extends J {
		constructor(t, e, s, i, n, a) {
			super(t, e, a), (this.exp = s), (this.name = i), (this.args = n);
		}
		visit(t, e = null) {
			return t.visitPipe(this, e);
		}
	},
	E = class extends m {
		constructor(t, e, s) {
			super(t, e), (this.value = s);
		}
		visit(t, e = null) {
			return t.visitLiteralPrimitive(this, e);
		}
	},
	nt = class extends m {
		constructor(t, e, s) {
			super(t, e), (this.expressions = s);
		}
		visit(t, e = null) {
			return t.visitLiteralArray(this, e);
		}
	},
	at = class extends m {
		constructor(t, e, s, i) {
			super(t, e), (this.keys = s), (this.values = i);
		}
		visit(t, e = null) {
			return t.visitLiteralMap(this, e);
		}
	},
	ot = class extends m {
		constructor(t, e, s, i) {
			super(t, e), (this.strings = s), (this.expressions = i);
		}
		visit(t, e = null) {
			return t.visitInterpolation(this, e);
		}
	},
	A = class extends m {
		constructor(t, e, s, i, n) {
			super(t, e), (this.operation = s), (this.left = i), (this.right = n);
		}
		visit(t, e = null) {
			return t.visitBinary(this, e);
		}
	},
	F = class r extends A {
		static createMinus(t, e, s) {
			return new r(t, e, "-", s, "-", new E(t, e, 0), s);
		}
		static createPlus(t, e, s) {
			return new r(t, e, "+", s, "-", s, new E(t, e, 0));
		}
		constructor(t, e, s, i, n, a, o) {
			super(t, e, n, a, o), (this.operator = s), (this.expr = i), (this.left = null), (this.right = null), (this.operation = null);
		}
		visit(t, e = null) {
			return t.visitUnary !== void 0 ? t.visitUnary(this, e) : t.visitBinary(this, e);
		}
	},
	ct = class extends m {
		constructor(t, e, s) {
			super(t, e), (this.expression = s);
		}
		visit(t, e = null) {
			return t.visitPrefixNot(this, e);
		}
	},
	ht = class extends m {
		constructor(t, e, s) {
			super(t, e), (this.expression = s);
		}
		visit(t, e = null) {
			return t.visitNonNullAssert(this, e);
		}
	},
	pt = class extends m {
		constructor(t, e, s, i, n) {
			super(t, e), (this.receiver = s), (this.args = i), (this.argumentSpan = n);
		}
		visit(t, e = null) {
			return t.visitCall(this, e);
		}
	},
	D = class extends m {
		constructor(t, e, s, i, n) {
			super(t, e), (this.receiver = s), (this.args = i), (this.argumentSpan = n);
		}
		visit(t, e = null) {
			return t.visitSafeCall(this, e);
		}
	},
	L = class {
		constructor(t, e) {
			(this.start = t), (this.end = e);
		}
	},
	R = class extends m {
		constructor(t, e, s, i, n) {
			super(new b(0, e === null ? 0 : e.length), new L(i, e === null ? i : i + e.length)), (this.ast = t), (this.source = e), (this.location = s), (this.errors = n);
		}
		visit(t, e = null) {
			return t.visitASTWithSource ? t.visitASTWithSource(this, e) : this.ast.visit(t, e);
		}
		toString() {
			return `${this.source} in ${this.location}`;
		}
	},
	W = class {
		constructor(t, e, s) {
			(this.sourceSpan = t), (this.key = e), (this.value = s);
		}
	},
	ut = class {
		constructor(t, e, s) {
			(this.sourceSpan = t), (this.key = e), (this.value = s);
		}
	},
	Rt = class {
		visit(t, e) {
			t.visit(this, e);
		}
		visitUnary(t, e) {
			this.visit(t.expr, e);
		}
		visitBinary(t, e) {
			this.visit(t.left, e), this.visit(t.right, e);
		}
		visitChain(t, e) {
			this.visitAll(t.expressions, e);
		}
		visitConditional(t, e) {
			this.visit(t.condition, e), this.visit(t.trueExp, e), this.visit(t.falseExp, e);
		}
		visitPipe(t, e) {
			this.visit(t.exp, e), this.visitAll(t.args, e);
		}
		visitImplicitReceiver(t, e) {}
		visitThisReceiver(t, e) {}
		visitInterpolation(t, e) {
			this.visitAll(t.expressions, e);
		}
		visitKeyedRead(t, e) {
			this.visit(t.receiver, e), this.visit(t.key, e);
		}
		visitKeyedWrite(t, e) {
			this.visit(t.receiver, e), this.visit(t.key, e), this.visit(t.value, e);
		}
		visitLiteralArray(t, e) {
			this.visitAll(t.expressions, e);
		}
		visitLiteralMap(t, e) {
			this.visitAll(t.values, e);
		}
		visitLiteralPrimitive(t, e) {}
		visitPrefixNot(t, e) {
			this.visit(t.expression, e);
		}
		visitNonNullAssert(t, e) {
			this.visit(t.expression, e);
		}
		visitPropertyRead(t, e) {
			this.visit(t.receiver, e);
		}
		visitPropertyWrite(t, e) {
			this.visit(t.receiver, e), this.visit(t.value, e);
		}
		visitSafePropertyRead(t, e) {
			this.visit(t.receiver, e);
		}
		visitSafeKeyedRead(t, e) {
			this.visit(t.receiver, e), this.visit(t.key, e);
		}
		visitCall(t, e) {
			this.visit(t.receiver, e), this.visitAll(t.args, e);
		}
		visitSafeCall(t, e) {
			this.visit(t.receiver, e), this.visitAll(t.args, e);
		}
		visitAll(t, e) {
			for (let s of t) this.visit(s, e);
		}
	};
var ce;
(function (r) {
	(r[(r.DEFAULT = 0)] = "DEFAULT"), (r[(r.LITERAL_ATTR = 1)] = "LITERAL_ATTR"), (r[(r.ANIMATION = 2)] = "ANIMATION"), (r[(r.TWO_WAY = 3)] = "TWO_WAY");
})(ce || (ce = {}));
var he;
(function (r) {
	(r[(r.Regular = 0)] = "Regular"), (r[(r.Animation = 1)] = "Animation"), (r[(r.TwoWay = 2)] = "TwoWay");
})(he || (he = {}));
var pe;
(function (r) {
	(r[(r.Property = 0)] = "Property"), (r[(r.Attribute = 1)] = "Attribute"), (r[(r.Class = 2)] = "Class"), (r[(r.Style = 3)] = "Style"), (r[(r.Animation = 4)] = "Animation"), (r[(r.TwoWay = 5)] = "TwoWay");
})(pe || (pe = {}));
function ue(r) {
	return (r >= 9 && r <= 32) || r == 160;
}
function B(r) {
	return 48 <= r && r <= 57;
}
function le(r) {
	return (r >= 97 && r <= 122) || (r >= 65 && r <= 90);
}
function Ft(r) {
	return r === 39 || r === 34 || r === 96;
}
var l;
(function (r) {
	(r[(r.Character = 0)] = "Character"), (r[(r.Identifier = 1)] = "Identifier"), (r[(r.PrivateIdentifier = 2)] = "PrivateIdentifier"), (r[(r.Keyword = 3)] = "Keyword"), (r[(r.String = 4)] = "String"), (r[(r.Operator = 5)] = "Operator"), (r[(r.Number = 6)] = "Number"), (r[(r.Error = 7)] = "Error");
})(l || (l = {}));
var ks = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this"],
	yt = class {
		tokenize(t) {
			let e = new Gt(t),
				s = [],
				i = e.scanToken();
			for (; i != null; ) s.push(i), (i = e.scanToken());
			return s;
		}
	},
	I = class {
		constructor(t, e, s, i, n) {
			(this.index = t), (this.end = e), (this.type = s), (this.numValue = i), (this.strValue = n);
		}
		isCharacter(t) {
			return this.type == l.Character && this.numValue == t;
		}
		isNumber() {
			return this.type == l.Number;
		}
		isString() {
			return this.type == l.String;
		}
		isOperator(t) {
			return this.type == l.Operator && this.strValue == t;
		}
		isIdentifier() {
			return this.type == l.Identifier;
		}
		isPrivateIdentifier() {
			return this.type == l.PrivateIdentifier;
		}
		isKeyword() {
			return this.type == l.Keyword;
		}
		isKeywordLet() {
			return this.type == l.Keyword && this.strValue == "let";
		}
		isKeywordAs() {
			return this.type == l.Keyword && this.strValue == "as";
		}
		isKeywordNull() {
			return this.type == l.Keyword && this.strValue == "null";
		}
		isKeywordUndefined() {
			return this.type == l.Keyword && this.strValue == "undefined";
		}
		isKeywordTrue() {
			return this.type == l.Keyword && this.strValue == "true";
		}
		isKeywordFalse() {
			return this.type == l.Keyword && this.strValue == "false";
		}
		isKeywordThis() {
			return this.type == l.Keyword && this.strValue == "this";
		}
		isError() {
			return this.type == l.Error;
		}
		toNumber() {
			return this.type == l.Number ? this.numValue : -1;
		}
		toString() {
			switch (this.type) {
				case l.Character:
				case l.Identifier:
				case l.Keyword:
				case l.Operator:
				case l.PrivateIdentifier:
				case l.String:
				case l.Error:
					return this.strValue;
				case l.Number:
					return this.numValue.toString();
				default:
					return null;
			}
		}
	};
function ge(r, t, e) {
	return new I(r, t, l.Character, e, String.fromCharCode(e));
}
function Ns(r, t, e) {
	return new I(r, t, l.Identifier, 0, e);
}
function Ls(r, t, e) {
	return new I(r, t, l.PrivateIdentifier, 0, e);
}
function Rs(r, t, e) {
	return new I(r, t, l.Keyword, 0, e);
}
function Wt(r, t, e) {
	return new I(r, t, l.Operator, 0, e);
}
function Ps(r, t, e) {
	return new I(r, t, l.String, 0, e);
}
function bs(r, t, e) {
	return new I(r, t, l.Number, e, "");
}
function Ks(r, t, e) {
	return new I(r, t, l.Error, 0, e);
}
var Bt = new I(-1, -1, l.Character, 0, ""),
	Gt = class {
		constructor(t) {
			(this.input = t), (this.peek = 0), (this.index = -1), (this.length = t.length), this.advance();
		}
		advance() {
			this.peek = ++this.index >= this.length ? 0 : this.input.charCodeAt(this.index);
		}
		scanToken() {
			let t = this.input,
				e = this.length,
				s = this.peek,
				i = this.index;
			for (; s <= 32; )
				if (++i >= e) {
					s = 0;
					break;
				} else s = t.charCodeAt(i);
			if (((this.peek = s), (this.index = i), i >= e)) return null;
			if (me(s)) return this.scanIdentifier();
			if (B(s)) return this.scanNumber(i);
			let n = i;
			switch (s) {
				case 46:
					return this.advance(), B(this.peek) ? this.scanNumber(n) : ge(n, this.index, 46);
				case 40:
				case 41:
				case 123:
				case 125:
				case 91:
				case 93:
				case 44:
				case 58:
				case 59:
					return this.scanCharacter(n, s);
				case 39:
				case 34:
					return this.scanString();
				case 35:
					return this.scanPrivateIdentifier();
				case 43:
				case 45:
				case 42:
				case 47:
				case 37:
				case 94:
					return this.scanOperator(n, String.fromCharCode(s));
				case 63:
					return this.scanQuestion(n);
				case 60:
				case 62:
					return this.scanComplexOperator(n, String.fromCharCode(s), 61, "=");
				case 33:
				case 61:
					return this.scanComplexOperator(n, String.fromCharCode(s), 61, "=", 61, "=");
				case 38:
					return this.scanComplexOperator(n, "&", 38, "&");
				case 124:
					return this.scanComplexOperator(n, "|", 124, "|");
				case 160:
					for (; ue(this.peek); ) this.advance();
					return this.scanToken();
			}
			return this.advance(), this.error(`Unexpected character [${String.fromCharCode(s)}]`, 0);
		}
		scanCharacter(t, e) {
			return this.advance(), ge(t, this.index, e);
		}
		scanOperator(t, e) {
			return this.advance(), Wt(t, this.index, e);
		}
		scanComplexOperator(t, e, s, i, n, a) {
			this.advance();
			let o = e;
			return this.peek == s && (this.advance(), (o += i)), n != null && this.peek == n && (this.advance(), (o += a)), Wt(t, this.index, o);
		}
		scanIdentifier() {
			let t = this.index;
			for (this.advance(); Se(this.peek); ) this.advance();
			let e = this.input.substring(t, this.index);
			return ks.indexOf(e) > -1 ? Rs(t, this.index, e) : Ns(t, this.index, e);
		}
		scanPrivateIdentifier() {
			let t = this.index;
			if ((this.advance(), !me(this.peek))) return this.error("Invalid character [#]", -1);
			for (; Se(this.peek); ) this.advance();
			let e = this.input.substring(t, this.index);
			return Ls(t, this.index, e);
		}
		scanNumber(t) {
			let e = this.index === t,
				s = !1;
			for (this.advance(); ; ) {
				if (!B(this.peek))
					if (this.peek === 95) {
						if (!B(this.input.charCodeAt(this.index - 1)) || !B(this.input.charCodeAt(this.index + 1))) return this.error("Invalid numeric separator", 0);
						s = !0;
					} else if (this.peek === 46) e = !1;
					else if (Bs(this.peek)) {
						if ((this.advance(), Ts(this.peek) && this.advance(), !B(this.peek))) return this.error("Invalid exponent", -1);
						e = !1;
					} else break;
				this.advance();
			}
			let i = this.input.substring(t, this.index);
			s && (i = i.replace(/_/g, ""));
			let n = e ? _s(i) : parseFloat(i);
			return bs(t, this.index, n);
		}
		scanString() {
			let t = this.index,
				e = this.peek;
			this.advance();
			let s = "",
				i = this.index,
				n = this.input;
			for (; this.peek != e; )
				if (this.peek == 92) {
					s += n.substring(i, this.index);
					let o;
					if ((this.advance(), this.peek == 117)) {
						let p = n.substring(this.index + 1, this.index + 5);
						if (/^[0-9a-f]+$/i.test(p)) o = parseInt(p, 16);
						else return this.error(`Invalid unicode escape [\\u${p}]`, 0);
						for (let u = 0; u < 5; u++) this.advance();
					} else (o = Ms(this.peek)), this.advance();
					(s += String.fromCharCode(o)), (i = this.index);
				} else {
					if (this.peek == 0) return this.error("Unterminated quote", 0);
					this.advance();
				}
			let a = n.substring(i, this.index);
			return this.advance(), Ps(t, this.index, s + a);
		}
		scanQuestion(t) {
			this.advance();
			let e = "?";
			return (this.peek === 63 || this.peek === 46) && ((e += this.peek === 46 ? "." : "?"), this.advance()), Wt(t, this.index, e);
		}
		error(t, e) {
			let s = this.index + e;
			return Ks(s, this.index, `Lexer Error: ${t} at column ${s} in expression [${this.input}]`);
		}
	};
function me(r) {
	return (97 <= r && r <= 122) || (65 <= r && r <= 90) || r == 95 || r == 36;
}
function Se(r) {
	return le(r) || B(r) || r == 95 || r == 36;
}
function Bs(r) {
	return r == 101 || r == 69;
}
function Ts(r) {
	return r == 45 || r == 43;
}
function Ms(r) {
	switch (r) {
		case 110:
			return 10;
		case 102:
			return 12;
		case 114:
			return 13;
		case 116:
			return 9;
		case 118:
			return 11;
		default:
			return r;
	}
}
function _s(r) {
	let t = parseInt(r);
	if (isNaN(t)) throw new Error("Invalid integer literal when parsing " + r);
	return t;
}
var Us = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function Ee(r, t) {
	if (t != null && !(Array.isArray(t) && t.length == 2)) throw new Error(`Expected '${r}' to be an array, [start, end].`);
	if (t != null) {
		let e = t[0],
			s = t[1];
		Us.forEach((i) => {
			if (i.test(e) || i.test(s)) throw new Error(`['${e}', '${s}'] contains unusable interpolation symbol.`);
		});
	}
}
var Qt = class r {
		static fromArray(t) {
			return t ? (Ee("interpolation", t), new r(t[0], t[1])) : Q;
		}
		constructor(t, e) {
			(this.start = t), (this.end = e);
		}
	},
	Q = new Qt("{{", "}}");
var zt = class {
		constructor(t, e, s) {
			(this.strings = t), (this.expressions = e), (this.offsets = s);
		}
	},
	qt = class {
		constructor(t, e, s) {
			(this.templateBindings = t), (this.warnings = e), (this.errors = s);
		}
	},
	mt = class {
		constructor(t) {
			(this._lexer = t), (this.errors = []);
		}
		parseAction(t, e, s, i = Q) {
			this._checkNoInterpolation(t, e, i);
			let n = this._stripComments(t),
				a = this._lexer.tokenize(n),
				o = new z(t, e, s, a, 1, this.errors, 0).parseChain();
			return new R(o, t, e, s, this.errors);
		}
		parseBinding(t, e, s, i = Q) {
			let n = this._parseBindingAst(t, e, s, i);
			return new R(n, t, e, s, this.errors);
		}
		checkSimpleExpression(t) {
			let e = new Ht();
			return t.visit(e), e.errors;
		}
		parseSimpleBinding(t, e, s, i = Q) {
			let n = this._parseBindingAst(t, e, s, i),
				a = this.checkSimpleExpression(n);
			return a.length > 0 && this._reportError(`Host binding expression cannot contain ${a.join(" ")}`, t, e), new R(n, t, e, s, this.errors);
		}
		_reportError(t, e, s, i) {
			this.errors.push(new Z(t, e, s, i));
		}
		_parseBindingAst(t, e, s, i) {
			this._checkNoInterpolation(t, e, i);
			let n = this._stripComments(t),
				a = this._lexer.tokenize(n);
			return new z(t, e, s, a, 0, this.errors, 0).parseChain();
		}
		parseTemplateBindings(t, e, s, i, n) {
			let a = this._lexer.tokenize(e);
			return new z(e, s, n, a, 0, this.errors, 0).parseTemplateBindings({
				source: t,
				span: new L(i, i + t.length),
			});
		}
		parseInterpolation(t, e, s, i, n = Q) {
			let { strings: a, expressions: o, offsets: p } = this.splitInterpolation(t, e, i, n);
			if (o.length === 0) return null;
			let u = [];
			for (let f = 0; f < o.length; ++f) {
				let S = o[f].text,
					g = this._stripComments(S),
					y = this._lexer.tokenize(g),
					w = new z(t, e, s, y, 0, this.errors, p[f]).parseChain();
				u.push(w);
			}
			return this.createInterpolationAst(
				a.map((f) => f.text),
				u,
				t,
				e,
				s,
			);
		}
		parseInterpolationExpression(t, e, s) {
			let i = this._stripComments(t),
				n = this._lexer.tokenize(i),
				a = new z(t, e, s, n, 0, this.errors, 0).parseChain(),
				o = ["", ""];
			return this.createInterpolationAst(o, [a], t, e, s);
		}
		createInterpolationAst(t, e, s, i, n) {
			let a = new b(0, s.length),
				o = new ot(a, a.toAbsolute(n), t, e);
			return new R(o, s, i, n, this.errors);
		}
		splitInterpolation(t, e, s, i = Q) {
			let n = [],
				a = [],
				o = [],
				p = s ? Fs(s) : null,
				u = 0,
				f = !1,
				S = !1,
				{ start: g, end: y } = i;
			for (; u < t.length; )
				if (f) {
					let w = u,
						H = w + g.length,
						j = this._getInterpolationEndIndex(t, y, H);
					if (j === -1) {
						(f = !1), (S = !0);
						break;
					}
					let T = j + y.length,
						Nt = t.substring(H, j);
					Nt.trim().length === 0 && this._reportError("Blank expressions are not allowed in interpolated strings", t, `at column ${u} in`, e), a.push({ text: Nt, start: w, end: T });
					let Ze = ((p == null ? void 0 : p.get(w)) ?? w) + g.length;
					o.push(Ze), (u = T), (f = !1);
				} else {
					let w = u;
					(u = t.indexOf(g, u)), u === -1 && (u = t.length);
					let H = t.substring(w, u);
					n.push({ text: H, start: w, end: u }), (f = !0);
				}
			if (!f)
				if (S) {
					let w = n[n.length - 1];
					(w.text += t.substring(u)), (w.end = t.length);
				} else n.push({ text: t.substring(u), start: u, end: t.length });
			return new zt(n, a, o);
		}
		wrapLiteralPrimitive(t, e, s) {
			let i = new b(0, t == null ? 0 : t.length);
			return new R(new E(i, i.toAbsolute(s), t), t, e, s, this.errors);
		}
		_stripComments(t) {
			let e = this._commentStart(t);
			return e != null ? t.substring(0, e) : t;
		}
		_commentStart(t) {
			let e = null;
			for (let s = 0; s < t.length - 1; s++) {
				let i = t.charCodeAt(s),
					n = t.charCodeAt(s + 1);
				if (i === 47 && n == 47 && e == null) return s;
				e === i ? (e = null) : e == null && Ft(i) && (e = i);
			}
			return null;
		}
		_checkNoInterpolation(t, e, { start: s, end: i }) {
			let n = -1,
				a = -1;
			for (let o of this._forEachUnquotedChar(t, 0))
				if (n === -1) t.startsWith(s) && (n = o);
				else if (((a = this._getInterpolationEndIndex(t, i, o)), a > -1)) break;
			n > -1 && a > -1 && this._reportError(`Got interpolation (${s}${i}) where expression was expected`, t, `at column ${n} in`, e);
		}
		_getInterpolationEndIndex(t, e, s) {
			for (let i of this._forEachUnquotedChar(t, s)) {
				if (t.startsWith(e, i)) return i;
				if (t.startsWith("//", i)) return t.indexOf(e, i);
			}
			return -1;
		}
		*_forEachUnquotedChar(t, e) {
			let s = null,
				i = 0;
			for (let n = e; n < t.length; n++) {
				let a = t[n];
				Ft(t.charCodeAt(n)) && (s === null || s === a) && i % 2 === 0 ? (s = s === null ? a : null) : s === null && (yield n), (i = a === "\\" ? i + 1 : 0);
			}
		}
	},
	gt;
(function (r) {
	(r[(r.None = 0)] = "None"), (r[(r.Writable = 1)] = "Writable");
})(gt || (gt = {}));
var z = class {
		constructor(t, e, s, i, n, a, o) {
			(this.input = t), (this.location = e), (this.absoluteOffset = s), (this.tokens = i), (this.parseFlags = n), (this.errors = a), (this.offset = o), (this.rparensExpected = 0), (this.rbracketsExpected = 0), (this.rbracesExpected = 0), (this.context = gt.None), (this.sourceSpanCache = new Map()), (this.index = 0);
		}
		peek(t) {
			let e = this.index + t;
			return e < this.tokens.length ? this.tokens[e] : Bt;
		}
		get next() {
			return this.peek(0);
		}
		get atEOF() {
			return this.index >= this.tokens.length;
		}
		get inputIndex() {
			return this.atEOF ? this.currentEndIndex : this.next.index + this.offset;
		}
		get currentEndIndex() {
			return this.index > 0 ? this.peek(-1).end + this.offset : this.tokens.length === 0 ? this.input.length + this.offset : this.next.index + this.offset;
		}
		get currentAbsoluteOffset() {
			return this.absoluteOffset + this.inputIndex;
		}
		span(t, e) {
			let s = this.currentEndIndex;
			if ((e !== void 0 && e > this.currentEndIndex && (s = e), t > s)) {
				let i = s;
				(s = t), (t = i);
			}
			return new b(t, s);
		}
		sourceSpan(t, e) {
			let s = `${t}@${this.inputIndex}:${e}`;
			return this.sourceSpanCache.has(s) || this.sourceSpanCache.set(s, this.span(t, e).toAbsolute(this.absoluteOffset)), this.sourceSpanCache.get(s);
		}
		advance() {
			this.index++;
		}
		withContext(t, e) {
			this.context |= t;
			let s = e();
			return (this.context ^= t), s;
		}
		consumeOptionalCharacter(t) {
			return this.next.isCharacter(t) ? (this.advance(), !0) : !1;
		}
		peekKeywordLet() {
			return this.next.isKeywordLet();
		}
		peekKeywordAs() {
			return this.next.isKeywordAs();
		}
		expectCharacter(t) {
			this.consumeOptionalCharacter(t) || this.error(`Missing expected ${String.fromCharCode(t)}`);
		}
		consumeOptionalOperator(t) {
			return this.next.isOperator(t) ? (this.advance(), !0) : !1;
		}
		expectOperator(t) {
			this.consumeOptionalOperator(t) || this.error(`Missing expected operator ${t}`);
		}
		prettyPrintToken(t) {
			return t === Bt ? "end of input" : `token ${t}`;
		}
		expectIdentifierOrKeyword() {
			let t = this.next;
			return !t.isIdentifier() && !t.isKeyword() ? (t.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(t, "expected identifier or keyword") : this.error(`Unexpected ${this.prettyPrintToken(t)}, expected identifier or keyword`), null) : (this.advance(), t.toString());
		}
		expectIdentifierOrKeywordOrString() {
			let t = this.next;
			return !t.isIdentifier() && !t.isKeyword() && !t.isString() ? (t.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(t, "expected identifier, keyword or string") : this.error(`Unexpected ${this.prettyPrintToken(t)}, expected identifier, keyword, or string`), "") : (this.advance(), t.toString());
		}
		parseChain() {
			let t = [],
				e = this.inputIndex;
			for (; this.index < this.tokens.length; ) {
				let s = this.parsePipe();
				if ((t.push(s), this.consumeOptionalCharacter(59))) for (this.parseFlags & 1 || this.error("Binding expression cannot contain chained expression"); this.consumeOptionalCharacter(59); );
				else if (this.index < this.tokens.length) {
					let i = this.index;
					if ((this.error(`Unexpected token '${this.next}'`), this.index === i)) break;
				}
			}
			if (t.length === 0) {
				let s = this.offset,
					i = this.offset + this.input.length;
				return new $(this.span(s, i), this.sourceSpan(s, i));
			}
			return t.length == 1 ? t[0] : new X(this.span(e), this.sourceSpan(e), t);
		}
		parsePipe() {
			let t = this.inputIndex,
				e = this.parseExpression();
			if (this.consumeOptionalOperator("|")) {
				this.parseFlags & 1 && this.error("Cannot have a pipe in an action expression");
				do {
					let s = this.inputIndex,
						i = this.expectIdentifierOrKeyword(),
						n,
						a;
					i !== null ? (n = this.sourceSpan(s)) : ((i = ""), (a = this.next.index !== -1 ? this.next.index : this.input.length + this.offset), (n = new b(a, a).toAbsolute(this.absoluteOffset)));
					let o = [];
					for (; this.consumeOptionalCharacter(58); ) o.push(this.parseExpression());
					e = new it(this.span(t), this.sourceSpan(t, a), e, i, o, n);
				} while (this.consumeOptionalOperator("|"));
			}
			return e;
		}
		parseExpression() {
			return this.parseConditional();
		}
		parseConditional() {
			let t = this.inputIndex,
				e = this.parseLogicalOr();
			if (this.consumeOptionalOperator("?")) {
				let s = this.parsePipe(),
					i;
				if (this.consumeOptionalCharacter(58)) i = this.parsePipe();
				else {
					let n = this.inputIndex,
						a = this.input.substring(t, n);
					this.error(`Conditional expression ${a} requires all 3 expressions`), (i = new $(this.span(t), this.sourceSpan(t)));
				}
				return new tt(this.span(t), this.sourceSpan(t), e, s, i);
			} else return e;
		}
		parseLogicalOr() {
			let t = this.inputIndex,
				e = this.parseLogicalAnd();
			for (; this.consumeOptionalOperator("||"); ) {
				let s = this.parseLogicalAnd();
				e = new A(this.span(t), this.sourceSpan(t), "||", e, s);
			}
			return e;
		}
		parseLogicalAnd() {
			let t = this.inputIndex,
				e = this.parseNullishCoalescing();
			for (; this.consumeOptionalOperator("&&"); ) {
				let s = this.parseNullishCoalescing();
				e = new A(this.span(t), this.sourceSpan(t), "&&", e, s);
			}
			return e;
		}
		parseNullishCoalescing() {
			let t = this.inputIndex,
				e = this.parseEquality();
			for (; this.consumeOptionalOperator("??"); ) {
				let s = this.parseEquality();
				e = new A(this.span(t), this.sourceSpan(t), "??", e, s);
			}
			return e;
		}
		parseEquality() {
			let t = this.inputIndex,
				e = this.parseRelational();
			for (; this.next.type == l.Operator; ) {
				let s = this.next.strValue;
				switch (s) {
					case "==":
					case "===":
					case "!=":
					case "!==":
						this.advance();
						let i = this.parseRelational();
						e = new A(this.span(t), this.sourceSpan(t), s, e, i);
						continue;
				}
				break;
			}
			return e;
		}
		parseRelational() {
			let t = this.inputIndex,
				e = this.parseAdditive();
			for (; this.next.type == l.Operator; ) {
				let s = this.next.strValue;
				switch (s) {
					case "<":
					case ">":
					case "<=":
					case ">=":
						this.advance();
						let i = this.parseAdditive();
						e = new A(this.span(t), this.sourceSpan(t), s, e, i);
						continue;
				}
				break;
			}
			return e;
		}
		parseAdditive() {
			let t = this.inputIndex,
				e = this.parseMultiplicative();
			for (; this.next.type == l.Operator; ) {
				let s = this.next.strValue;
				switch (s) {
					case "+":
					case "-":
						this.advance();
						let i = this.parseMultiplicative();
						e = new A(this.span(t), this.sourceSpan(t), s, e, i);
						continue;
				}
				break;
			}
			return e;
		}
		parseMultiplicative() {
			let t = this.inputIndex,
				e = this.parsePrefix();
			for (; this.next.type == l.Operator; ) {
				let s = this.next.strValue;
				switch (s) {
					case "*":
					case "%":
					case "/":
						this.advance();
						let i = this.parsePrefix();
						e = new A(this.span(t), this.sourceSpan(t), s, e, i);
						continue;
				}
				break;
			}
			return e;
		}
		parsePrefix() {
			if (this.next.type == l.Operator) {
				let t = this.inputIndex,
					e = this.next.strValue,
					s;
				switch (e) {
					case "+":
						return this.advance(), (s = this.parsePrefix()), F.createPlus(this.span(t), this.sourceSpan(t), s);
					case "-":
						return this.advance(), (s = this.parsePrefix()), F.createMinus(this.span(t), this.sourceSpan(t), s);
					case "!":
						return this.advance(), (s = this.parsePrefix()), new ct(this.span(t), this.sourceSpan(t), s);
				}
			}
			return this.parseCallChain();
		}
		parseCallChain() {
			let t = this.inputIndex,
				e = this.parsePrimary();
			for (;;)
				if (this.consumeOptionalCharacter(46)) e = this.parseAccessMember(e, t, !1);
				else if (this.consumeOptionalOperator("?.")) this.consumeOptionalCharacter(40) ? (e = this.parseCall(e, t, !0)) : (e = this.consumeOptionalCharacter(91) ? this.parseKeyedReadOrWrite(e, t, !0) : this.parseAccessMember(e, t, !0));
				else if (this.consumeOptionalCharacter(91)) e = this.parseKeyedReadOrWrite(e, t, !1);
				else if (this.consumeOptionalCharacter(40)) e = this.parseCall(e, t, !1);
				else if (this.consumeOptionalOperator("!")) e = new ht(this.span(t), this.sourceSpan(t), e);
				else return e;
		}
		parsePrimary() {
			let t = this.inputIndex;
			if (this.consumeOptionalCharacter(40)) {
				this.rparensExpected++;
				let e = this.parsePipe();
				return this.rparensExpected--, this.expectCharacter(41), e;
			} else {
				if (this.next.isKeywordNull()) return this.advance(), new E(this.span(t), this.sourceSpan(t), null);
				if (this.next.isKeywordUndefined()) return this.advance(), new E(this.span(t), this.sourceSpan(t), void 0);
				if (this.next.isKeywordTrue()) return this.advance(), new E(this.span(t), this.sourceSpan(t), !0);
				if (this.next.isKeywordFalse()) return this.advance(), new E(this.span(t), this.sourceSpan(t), !1);
				if (this.next.isKeywordThis()) return this.advance(), new Lt(this.span(t), this.sourceSpan(t));
				if (this.consumeOptionalCharacter(91)) {
					this.rbracketsExpected++;
					let e = this.parseExpressionList(93);
					return this.rbracketsExpected--, this.expectCharacter(93), new nt(this.span(t), this.sourceSpan(t), e);
				} else {
					if (this.next.isCharacter(123)) return this.parseLiteralMap();
					if (this.next.isIdentifier()) return this.parseAccessMember(new K(this.span(t), this.sourceSpan(t)), t, !1);
					if (this.next.isNumber()) {
						let e = this.next.toNumber();
						return this.advance(), new E(this.span(t), this.sourceSpan(t), e);
					} else if (this.next.isString()) {
						let e = this.next.toString();
						return this.advance(), new E(this.span(t), this.sourceSpan(t), e);
					} else return this.next.isPrivateIdentifier() ? (this._reportErrorForPrivateIdentifier(this.next, null), new $(this.span(t), this.sourceSpan(t))) : this.index >= this.tokens.length ? (this.error(`Unexpected end of expression: ${this.input}`), new $(this.span(t), this.sourceSpan(t))) : (this.error(`Unexpected token ${this.next}`), new $(this.span(t), this.sourceSpan(t)));
				}
			}
		}
		parseExpressionList(t) {
			let e = [];
			do
				if (!this.next.isCharacter(t)) e.push(this.parsePipe());
				else break;
			while (this.consumeOptionalCharacter(44));
			return e;
		}
		parseLiteralMap() {
			let t = [],
				e = [],
				s = this.inputIndex;
			if ((this.expectCharacter(123), !this.consumeOptionalCharacter(125))) {
				this.rbracesExpected++;
				do {
					let i = this.inputIndex,
						n = this.next.isString(),
						a = this.expectIdentifierOrKeywordOrString(),
						o = { key: a, quoted: n };
					if ((t.push(o), n)) this.expectCharacter(58), e.push(this.parsePipe());
					else if (this.consumeOptionalCharacter(58)) e.push(this.parsePipe());
					else {
						o.isShorthandInitialized = !0;
						let p = this.span(i),
							u = this.sourceSpan(i);
						e.push(new M(p, u, u, new K(p, u), a));
					}
				} while (this.consumeOptionalCharacter(44) && !this.next.isCharacter(125));
				this.rbracesExpected--, this.expectCharacter(125);
			}
			return new at(this.span(s), this.sourceSpan(s), t, e);
		}
		parseAccessMember(t, e, s) {
			let i = this.inputIndex,
				n = this.withContext(gt.Writable, () => {
					let p = this.expectIdentifierOrKeyword() ?? "";
					return p.length === 0 && this.error("Expected identifier for property access", t.span.end), p;
				}),
				a = this.sourceSpan(i),
				o;
			if (s) this.consumeOptionalOperator("=") ? (this.error("The '?.' operator cannot be used in the assignment"), (o = new $(this.span(e), this.sourceSpan(e)))) : (o = new _(this.span(e), this.sourceSpan(e), a, t, n));
			else if (this.consumeOptionalOperator("=")) {
				if (!(this.parseFlags & 1)) return this.error("Bindings cannot contain assignments"), new $(this.span(e), this.sourceSpan(e));
				let p = this.parseConditional();
				o = new et(this.span(e), this.sourceSpan(e), a, t, n, p);
			} else o = new M(this.span(e), this.sourceSpan(e), a, t, n);
			return o;
		}
		parseCall(t, e, s) {
			let i = this.inputIndex;
			this.rparensExpected++;
			let n = this.parseCallArguments(),
				a = this.span(i, this.inputIndex).toAbsolute(this.absoluteOffset);
			this.expectCharacter(41), this.rparensExpected--;
			let o = this.span(e),
				p = this.sourceSpan(e);
			return s ? new D(o, p, t, n, a) : new pt(o, p, t, n, a);
		}
		parseCallArguments() {
			if (this.next.isCharacter(41)) return [];
			let t = [];
			do t.push(this.parsePipe());
			while (this.consumeOptionalCharacter(44));
			return t;
		}
		expectTemplateBindingKey() {
			let t = "",
				e = !1,
				s = this.currentAbsoluteOffset;
			do (t += this.expectIdentifierOrKeywordOrString()), (e = this.consumeOptionalOperator("-")), e && (t += "-");
			while (e);
			return { source: t, span: new L(s, s + t.length) };
		}
		parseTemplateBindings(t) {
			let e = [];
			for (e.push(...this.parseDirectiveKeywordBindings(t)); this.index < this.tokens.length; ) {
				let s = this.parseLetBinding();
				if (s) e.push(s);
				else {
					let i = this.expectTemplateBindingKey(),
						n = this.parseAsBinding(i);
					n ? e.push(n) : ((i.source = t.source + i.source.charAt(0).toUpperCase() + i.source.substring(1)), e.push(...this.parseDirectiveKeywordBindings(i)));
				}
				this.consumeStatementTerminator();
			}
			return new qt(e, [], this.errors);
		}
		parseKeyedReadOrWrite(t, e, s) {
			return this.withContext(gt.Writable, () => {
				this.rbracketsExpected++;
				let i = this.parsePipe();
				if ((i instanceof $ && this.error("Key access cannot be empty"), this.rbracketsExpected--, this.expectCharacter(93), this.consumeOptionalOperator("=")))
					if (s) this.error("The '?.' operator cannot be used in the assignment");
					else {
						let n = this.parseConditional();
						return new rt(this.span(e), this.sourceSpan(e), t, i, n);
					}
				else return s ? new U(this.span(e), this.sourceSpan(e), t, i) : new st(this.span(e), this.sourceSpan(e), t, i);
				return new $(this.span(e), this.sourceSpan(e));
			});
		}
		parseDirectiveKeywordBindings(t) {
			let e = [];
			this.consumeOptionalCharacter(58);
			let s = this.getDirectiveBoundTarget(),
				i = this.currentAbsoluteOffset,
				n = this.parseAsBinding(t);
			n || (this.consumeStatementTerminator(), (i = this.currentAbsoluteOffset));
			let a = new L(t.span.start, i);
			return e.push(new ut(a, t, s)), n && e.push(n), e;
		}
		getDirectiveBoundTarget() {
			if (this.next === Bt || this.peekKeywordAs() || this.peekKeywordLet()) return null;
			let t = this.parsePipe(),
				{ start: e, end: s } = t.span,
				i = this.input.substring(e, s);
			return new R(t, i, this.location, this.absoluteOffset + e, this.errors);
		}
		parseAsBinding(t) {
			if (!this.peekKeywordAs()) return null;
			this.advance();
			let e = this.expectTemplateBindingKey();
			this.consumeStatementTerminator();
			let s = new L(t.span.start, this.currentAbsoluteOffset);
			return new W(s, e, t);
		}
		parseLetBinding() {
			if (!this.peekKeywordLet()) return null;
			let t = this.currentAbsoluteOffset;
			this.advance();
			let e = this.expectTemplateBindingKey(),
				s = null;
			this.consumeOptionalOperator("=") && (s = this.expectTemplateBindingKey()), this.consumeStatementTerminator();
			let i = new L(t, this.currentAbsoluteOffset);
			return new W(i, e, s);
		}
		consumeStatementTerminator() {
			this.consumeOptionalCharacter(59) || this.consumeOptionalCharacter(44);
		}
		error(t, e = null) {
			this.errors.push(new Z(t, this.input, this.locationText(e), this.location)), this.skip();
		}
		locationText(t = null) {
			return t == null && (t = this.index), t < this.tokens.length ? `at column ${this.tokens[t].index + 1} in` : "at the end of the expression";
		}
		_reportErrorForPrivateIdentifier(t, e) {
			let s = `Private identifiers are not supported. Unexpected private identifier: ${t}`;
			e !== null && (s += `, ${e}`), this.error(s);
		}
		skip() {
			let t = this.next;
			for (; this.index < this.tokens.length && !t.isCharacter(59) && !t.isOperator("|") && (this.rparensExpected <= 0 || !t.isCharacter(41)) && (this.rbracesExpected <= 0 || !t.isCharacter(125)) && (this.rbracketsExpected <= 0 || !t.isCharacter(93)) && (!(this.context & gt.Writable) || !t.isOperator("=")); ) this.next.isError() && this.errors.push(new Z(this.next.toString(), this.input, this.locationText(), this.location)), this.advance(), (t = this.next);
		}
	},
	Ht = class extends Rt {
		constructor() {
			super(...arguments), (this.errors = []);
		}
		visitPipe() {
			this.errors.push("pipes");
		}
	};
function Fs(r) {
	let t = new Map(),
		e = 0,
		s = 0,
		i = 0;
	for (; i < r.length; ) {
		let n = r[i];
		if (n.type === 9) {
			let [a, o] = n.parts;
			(e += o.length), (s += a.length);
		} else {
			let a = n.parts.reduce((o, p) => o + p.length, 0);
			(s += a), (e += a);
		}
		t.set(s, e), i++;
	}
	return t;
}
function Ce({ start: r, end: t }, e) {
	let s = r,
		i = t;
	for (; i !== s && /\s/.test(e[i - 1]); ) i--;
	for (; s !== i && /\s/.test(e[s]); ) s++;
	return { start: s, end: i };
}
function Ws({ start: r, end: t }, e) {
	let s = r,
		i = t;
	for (; i !== e.length && /\s/.test(e[i]); ) i++;
	for (; s !== 0 && /\s/.test(e[s - 1]); ) s--;
	return { start: s, end: i };
}
function Gs(r, t) {
	return t[r.start - 1] === "(" && t[r.end] === ")" ? { start: r.start - 1, end: r.end + 1 } : r;
}
function Ae(r, t, e) {
	let s = 0,
		i = { start: r.start, end: r.end };
	for (;;) {
		let n = Ws(i, t),
			a = Gs(n, t);
		if (n.start === a.start && n.end === a.end) break;
		(i.start = a.start), (i.end = a.end), s++;
	}
	return {
		hasParens: (e ? s - 1 : s) !== 0,
		outerSpan: Ce(e ? { start: i.start + 1, end: i.end - 1 } : i, t),
		innerSpan: Ce(r, t),
	};
}
function Oe(r) {
	return typeof r == "string" ? (t) => t === r : (t) => r.test(t);
}
function Ie(r, t, e) {
	let s = Oe(t);
	for (let i = e; i >= 0; i--) {
		let n = r[i];
		if (s(n)) return i;
	}
	throw new Error(`Cannot find front char ${t} from index ${e} in ${JSON.stringify(r)}`);
}
function ke(r, t, e) {
	let s = Oe(t);
	for (let i = e; i < r.length; i++) {
		let n = r[i];
		if (s(n)) return i;
	}
	throw new Error(`Cannot find character ${t} from index ${e} in ${JSON.stringify(r)}`);
}
function Ne(r) {
	return r.slice(0, 1).toLowerCase() + r.slice(1);
}
function Ct(r) {
	let { start: t, end: e } = r;
	return { start: t, end: e, range: [t, e] };
}
var Vs = (r) => mt.prototype._commentStart(r);
function Qs(r, t) {
	let e = t ? Vs(r) : null;
	if (e === null) return { text: r, comments: [] };
	let s = {
		type: "CommentLine",
		value: r.slice(e + 2),
		...Ct({ start: e, end: r.length }),
	};
	return { text: r.slice(0, e), comments: [s] };
}
function At(r, t = !0) {
	return (e) => {
		let s = new yt(),
			i = new mt(s),
			{ text: n, comments: a } = Qs(e, t),
			o = r(n, i);
		if (o.errors.length !== 0) {
			let [{ message: p }] = o.errors;
			throw new SyntaxError(p.replace(/^Parser Error: | at column \d+ in [^]*$/g, ""));
		}
		return { result: o, comments: a, text: n };
	};
}
var Le = At((r, t) => t.parseBinding(r, "", 0)),
	zs = At((r, t) => t.parseSimpleBinding(r, "", 0)),
	Re = At((r, t) => t.parseAction(r, "", 0)),
	Pe = At((r, t) => t.parseInterpolationExpression(r, "", 0)),
	be = At((r, t) => t.parseTemplateBindings("", r, "", 0, 0), !1);
var Hs = (r, t, e) => {
		if (!(r && t == null)) return Array.isArray(t) || typeof t == "string" ? t[e < 0 ? t.length + e : e] : t.at(e);
	},
	Tt = Hs;
var jt = class {
		text;
		constructor(t) {
			this.text = t;
		}
		getCharacterIndex(t, e) {
			return ke(this.text, t, e);
		}
		getCharacterLastIndex(t, e) {
			return Ie(this.text, t, e);
		}
		transformSpan(t, { stripSpaces: e = !1, hasParentParens: s = !1 } = {}) {
			if (!e) return Ct(t);
			let { outerSpan: i, innerSpan: n, hasParens: a } = Ae(t, this.text, s),
				o = Ct(n);
			return (
				a &&
					(o.extra = {
						parenthesized: !0,
						parenStart: i.start,
						parenEnd: i.end,
					}),
				o
			);
		}
		createNode(t, { stripSpaces: e = !0, hasParentParens: s = !1 } = {}) {
			let { type: i, start: n, end: a } = t,
				o = {
					...t,
					...this.transformSpan({ start: n, end: a }, { stripSpaces: e, hasParentParens: s }),
				};
			switch (i) {
				case "NumericLiteral":
				case "StringLiteral": {
					let p = this.text.slice(o.start, o.end),
						{ value: u } = o;
					o.extra = { ...o.extra, raw: p, rawValue: u };
					break;
				}
				case "ObjectProperty": {
					let { shorthand: p } = o;
					p && (o.extra = { ...o.extra, shorthand: p });
					break;
				}
			}
			return o;
		}
	},
	Ke = jt;
function Zt(r) {
	var t;
	return !!((t = r.extra) != null && t.parenthesized);
}
function k(r) {
	return Zt(r) ? r.extra.parenStart : r.start;
}
function N(r) {
	return Zt(r) ? r.extra.parenEnd : r.end;
}
function Be(r) {
	return (r.type === "OptionalCallExpression" || r.type === "OptionalMemberExpression") && !Zt(r);
}
function Te(r, t) {
	let { start: e, end: s } = r.sourceSpan;
	return e >= s || /^\s+$/.test(t.slice(e, s));
}
var kt,
	St,
	h,
	d,
	Ot,
	v,
	Yt,
	It = class extends Ke {
		constructor(e, s) {
			super(s);
			P(this, h);
			P(this, kt);
			P(this, St);
			Y(this, kt, e), Y(this, St, s);
		}
		get node() {
			return c(this, h, v).call(this, O(this, kt));
		}
		transformNode(e) {
			return c(this, h, Yt).call(this, e);
		}
	};
(kt = new WeakMap()),
	(St = new WeakMap()),
	(h = new WeakSet()),
	(d = function (e, { stripSpaces: s = !0, hasParentParens: i = !1 } = {}) {
		return this.createNode(e, { stripSpaces: s, hasParentParens: i });
	}),
	(Ot = function (e, s, { computed: i, optional: n, end: a = N(s), hasParentParens: o = !1 }) {
		if (Te(e, O(this, St)) || e.sourceSpan.start === s.start) return s;
		let p = c(this, h, v).call(this, e),
			u = Be(p);
		return c(this, h, d).call(
			this,
			{
				type: n || u ? "OptionalMemberExpression" : "MemberExpression",
				object: p,
				property: s,
				computed: i,
				...(n ? { optional: !0 } : u ? { optional: !1 } : void 0),
				start: k(p),
				end: a,
			},
			{ hasParentParens: o },
		);
	}),
	(v = function (e, s = !1) {
		return c(this, h, Yt).call(this, e, s);
	}),
	(Yt = function (e, s = !1) {
		if (e instanceof ot) {
			let { expressions: i } = e;
			if (i.length !== 1) throw new Error("Unexpected 'Interpolation'");
			return c(this, h, v).call(this, i[0]);
		}
		if (e instanceof F)
			return c(this, h, d).call(
				this,
				{
					type: "UnaryExpression",
					prefix: !0,
					argument: c(this, h, v).call(this, e.expr),
					operator: e.operator,
					...e.sourceSpan,
				},
				{ hasParentParens: s },
			);
		if (e instanceof A) {
			let { left: i, operation: n, right: a } = e,
				o = c(this, h, v).call(this, i),
				p = c(this, h, v).call(this, a),
				u = k(o),
				f = N(p),
				S = { left: o, right: p, start: u, end: f };
			return n === "&&" || n === "||" || n === "??" ? c(this, h, d).call(this, { ...S, type: "LogicalExpression", operator: n }, { hasParentParens: s }) : c(this, h, d).call(this, { ...S, type: "BinaryExpression", operator: n }, { hasParentParens: s });
		}
		if (e instanceof it) {
			let { exp: i, name: n, args: a } = e,
				o = c(this, h, v).call(this, i),
				p = k(o),
				u = N(o),
				f = this.getCharacterIndex(/\S/, this.getCharacterIndex("|", u) + 1),
				S = c(this, h, d).call(this, {
					type: "Identifier",
					name: n,
					start: f,
					end: f + n.length,
				}),
				g = a.map((y) => c(this, h, v).call(this, y));
			return c(this, h, d).call(
				this,
				{
					type: "NGPipeExpression",
					left: o,
					right: S,
					arguments: g,
					start: p,
					end: N(g.length === 0 ? S : Tt(!1, g, -1)),
				},
				{ hasParentParens: s },
			);
		}
		if (e instanceof X)
			return c(this, h, d).call(
				this,
				{
					type: "NGChainedExpression",
					expressions: e.expressions.map((i) => c(this, h, v).call(this, i)),
					...e.sourceSpan,
				},
				{ hasParentParens: s },
			);
		if (e instanceof tt) {
			let { condition: i, trueExp: n, falseExp: a } = e,
				o = c(this, h, v).call(this, i),
				p = c(this, h, v).call(this, n),
				u = c(this, h, v).call(this, a);
			return c(this, h, d).call(
				this,
				{
					type: "ConditionalExpression",
					test: o,
					consequent: p,
					alternate: u,
					start: k(o),
					end: N(u),
				},
				{ hasParentParens: s },
			);
		}
		if (e instanceof $) return c(this, h, d).call(this, { type: "NGEmptyExpression", ...e.sourceSpan }, { hasParentParens: s });
		if (e instanceof K) return c(this, h, d).call(this, { type: "ThisExpression", ...e.sourceSpan }, { hasParentParens: s });
		if (e instanceof st || e instanceof U)
			return c(this, h, Ot).call(this, e.receiver, c(this, h, v).call(this, e.key), {
				computed: !0,
				optional: e instanceof U,
				end: e.sourceSpan.end,
				hasParentParens: s,
			});
		if (e instanceof nt)
			return c(this, h, d).call(
				this,
				{
					type: "ArrayExpression",
					elements: e.expressions.map((i) => c(this, h, v).call(this, i)),
					...e.sourceSpan,
				},
				{ hasParentParens: s },
			);
		if (e instanceof at) {
			let { keys: i, values: n } = e,
				a = n.map((p) => c(this, h, v).call(this, p)),
				o = i.map(({ key: p, quoted: u }, f) => {
					let S = a[f],
						g = k(S),
						y = N(S),
						w = this.getCharacterIndex(/\S/, f === 0 ? e.sourceSpan.start + 1 : this.getCharacterIndex(",", N(a[f - 1])) + 1),
						H = g === w ? y : this.getCharacterLastIndex(/\S/, this.getCharacterLastIndex(":", g - 1) - 1) + 1,
						j = { start: w, end: H },
						T = u
							? c(this, h, d).call(this, {
									type: "StringLiteral",
									value: p,
									...j,
								})
							: c(this, h, d).call(this, {
									type: "Identifier",
									name: p,
									...j,
								}),
						Nt = T.end < T.start || w === g;
					return c(this, h, d).call(this, {
						type: "ObjectProperty",
						key: T,
						value: S,
						shorthand: Nt,
						computed: !1,
						start: k(T),
						end: y,
					});
				});
			return c(this, h, d).call(this, { type: "ObjectExpression", properties: o, ...e.sourceSpan }, { hasParentParens: s });
		}
		if (e instanceof E) {
			let { value: i } = e;
			switch (typeof i) {
				case "boolean":
					return c(this, h, d).call(this, { type: "BooleanLiteral", value: i, ...e.sourceSpan }, { hasParentParens: s });
				case "number":
					return c(this, h, d).call(this, { type: "NumericLiteral", value: i, ...e.sourceSpan }, { hasParentParens: s });
				case "object":
					return c(this, h, d).call(this, { type: "NullLiteral", ...e.sourceSpan }, { hasParentParens: s });
				case "string":
					return c(this, h, d).call(this, { type: "StringLiteral", value: i, ...e.sourceSpan }, { hasParentParens: s });
				case "undefined":
					return c(this, h, d).call(
						this,
						{
							type: "Identifier",
							name: "undefined",
							...e.sourceSpan,
						},
						{ hasParentParens: s },
					);
				default:
					throw new Error(`Unexpected LiteralPrimitive value type ${typeof i}`);
			}
		}
		if (e instanceof pt || e instanceof D) {
			let i = e instanceof D,
				{ receiver: n, args: a } = e,
				o = a.length === 1 ? [c(this, h, v).call(this, a[0], !0)] : a.map((S) => c(this, h, v).call(this, S)),
				p = c(this, h, v).call(this, n),
				u = Be(p),
				f = i || u ? "OptionalCallExpression" : "CallExpression";
			return c(this, h, d).call(
				this,
				{
					type: f,
					callee: p,
					arguments: o,
					optional: f === "OptionalCallExpression" ? i : void 0,
					start: k(p),
					end: e.sourceSpan.end,
				},
				{ hasParentParens: s },
			);
		}
		if (e instanceof ht) {
			let i = c(this, h, v).call(this, e.expression);
			return c(this, h, d).call(
				this,
				{
					type: "TSNonNullExpression",
					expression: i,
					start: k(i),
					end: e.sourceSpan.end,
				},
				{ hasParentParens: s },
			);
		}
		if (e instanceof ct) {
			let i = c(this, h, v).call(this, e.expression);
			return c(this, h, d).call(
				this,
				{
					type: "UnaryExpression",
					prefix: !0,
					operator: "!",
					argument: i,
					start: e.sourceSpan.start,
					end: N(i),
				},
				{ hasParentParens: s },
			);
		}
		if (e instanceof M || e instanceof _) {
			let { receiver: i, name: n } = e,
				a = this.getCharacterLastIndex(/\S/, e.sourceSpan.end - 1) + 1,
				o = c(this, h, d).call(
					this,
					{
						type: "Identifier",
						name: n,
						start: a - n.length,
						end: a,
					},
					Te(i, O(this, St)) ? { hasParentParens: s } : {},
				);
			return c(this, h, Ot).call(this, i, o, {
				computed: !1,
				optional: e instanceof _,
				hasParentParens: s,
			});
		}
		if (e instanceof rt) {
			let i = c(this, h, v).call(this, e.key),
				n = c(this, h, v).call(this, e.value),
				a = c(this, h, Ot).call(this, e.receiver, i, {
					computed: !0,
					optional: !1,
					end: this.getCharacterIndex("]", N(i)) + 1,
				});
			return c(this, h, d).call(
				this,
				{
					type: "AssignmentExpression",
					left: a,
					operator: "=",
					right: n,
					start: k(a),
					end: N(n),
				},
				{ hasParentParens: s },
			);
		}
		if (e instanceof et) {
			let { receiver: i, name: n, value: a } = e,
				o = c(this, h, v).call(this, a),
				p = this.getCharacterLastIndex(/\S/, this.getCharacterLastIndex("=", k(o) - 1) - 1) + 1,
				u = c(this, h, d).call(this, {
					type: "Identifier",
					name: n,
					start: p - n.length,
					end: p,
				}),
				f = c(this, h, Ot).call(this, i, u, {
					computed: !1,
					optional: !1,
				});
			return c(this, h, d).call(
				this,
				{
					type: "AssignmentExpression",
					left: f,
					operator: "=",
					right: o,
					start: k(f),
					end: N(o),
				},
				{ hasParentParens: s },
			);
		}
		throw Object.assign(new Error("Unexpected node"), { node: e });
	});
function Me(r, t) {
	return new It(r, t).node;
}
function _e(r) {
	return r instanceof ut;
}
function Ue(r) {
	return r instanceof W;
}
var wt,
	q,
	x,
	Fe,
	C,
	Xt,
	te,
	ee,
	De,
	We,
	Ge,
	Ve,
	Jt = class extends It {
		constructor(e, s) {
			super(void 0, s);
			P(this, x);
			P(this, wt);
			P(this, q);
			Y(this, wt, e), Y(this, q, s);
			for (let i of e) c(this, x, De).call(this, i);
		}
		get expressions() {
			return c(this, x, Ge).call(this);
		}
	};
(wt = new WeakMap()),
	(q = new WeakMap()),
	(x = new WeakSet()),
	(Fe = function () {
		return O(this, wt)[0].key;
	}),
	(C = function (e, { stripSpaces: s = !0 } = {}) {
		return this.createNode(e, { stripSpaces: s });
	}),
	(Xt = function (e) {
		return this.transformNode(e);
	}),
	(te = function (e) {
		return Ne(e.slice(O(this, x, Fe).source.length));
	}),
	(ee = function (e) {
		let s = O(this, q);
		if (s[e.start] !== '"' && s[e.start] !== "'") return;
		let i = s[e.start],
			n = !1;
		for (let a = e.start + 1; a < s.length; a++)
			switch (s[a]) {
				case i:
					if (!n) {
						e.end = a + 1;
						return;
					}
				default:
					n = !1;
					break;
				case "\\":
					n = !n;
					break;
			}
	}),
	(De = function (e) {
		c(this, x, ee).call(this, e.key.span), Ue(e) && e.value && c(this, x, ee).call(this, e.value.span);
	}),
	(We = function (e) {
		if (!e.value || e.value.source) return e.value;
		let s = this.getCharacterIndex(/\S/, e.sourceSpan.start);
		return { source: "$implicit", span: { start: s, end: s } };
	}),
	(Ge = function () {
		let e = O(this, wt),
			[s] = e,
			i = O(this, q).slice(s.sourceSpan.start, s.sourceSpan.end).trim().length === 0 ? e.slice(1) : e,
			n = [],
			a = null;
		for (let [o, p] of i.entries()) {
			if (a && _e(a) && Ue(p) && p.value && p.value.source === a.key.source) {
				let u = c(this, x, C).call(this, {
						type: "NGMicrosyntaxKey",
						name: p.key.source,
						...p.key.span,
					}),
					f = (y, w) => ({
						...y,
						...this.transformSpan({ start: y.start, end: w }),
					}),
					S = (y) => ({ ...f(y, u.end), alias: u }),
					g = n.pop();
				if (g.type === "NGMicrosyntaxExpression") n.push(S(g));
				else if (g.type === "NGMicrosyntaxKeyedExpression") {
					let y = S(g.expression);
					n.push(f({ ...g, expression: y }, y.end));
				} else throw new Error(`Unexpected type ${g.type}`);
			} else n.push(c(this, x, Ve).call(this, p, o));
			a = p;
		}
		return c(this, x, C).call(this, {
			type: "NGMicrosyntax",
			body: n,
			...(n.length === 0 ? e[0].sourceSpan : { start: n[0].start, end: Tt(!1, n, -1).end }),
		});
	}),
	(Ve = function (e, s) {
		if (_e(e)) {
			let { key: i, value: n } = e;
			return n
				? s === 0
					? c(this, x, C).call(this, {
							type: "NGMicrosyntaxExpression",
							expression: c(this, x, Xt).call(this, n.ast),
							alias: null,
							...n.sourceSpan,
						})
					: c(this, x, C).call(this, {
							type: "NGMicrosyntaxKeyedExpression",
							key: c(this, x, C).call(this, {
								type: "NGMicrosyntaxKey",
								name: c(this, x, te).call(this, i.source),
								...i.span,
							}),
							expression: c(this, x, C).call(this, {
								type: "NGMicrosyntaxExpression",
								expression: c(this, x, Xt).call(this, n.ast),
								alias: null,
								...n.sourceSpan,
							}),
							start: i.span.start,
							end: n.sourceSpan.end,
						})
				: c(this, x, C).call(this, {
						type: "NGMicrosyntaxKey",
						name: c(this, x, te).call(this, i.source),
						...i.span,
					});
		} else {
			let { key: i, sourceSpan: n } = e;
			if (/^let\s$/.test(O(this, q).slice(n.start, n.start + 4))) {
				let { value: o } = e;
				return c(this, x, C).call(this, {
					type: "NGMicrosyntaxLet",
					key: c(this, x, C).call(this, {
						type: "NGMicrosyntaxKey",
						name: i.source,
						...i.span,
					}),
					value: o
						? c(this, x, C).call(this, {
								type: "NGMicrosyntaxKey",
								name: o.source,
								...o.span,
							})
						: null,
					start: n.start,
					end: o ? o.span.end : i.span.end,
				});
			} else {
				let o = c(this, x, We).call(this, e);
				return c(this, x, C).call(this, {
					type: "NGMicrosyntaxAs",
					key: c(this, x, C).call(this, {
						type: "NGMicrosyntaxKey",
						name: o.source,
						...o.span,
					}),
					alias: c(this, x, C).call(this, {
						type: "NGMicrosyntaxKey",
						name: i.source,
						...i.span,
					}),
					start: o.span.start,
					end: i.span.end,
				});
			}
		}
	});
function Qe(r, t) {
	return new Jt(r, t).expressions;
}
function Mt({ result: { ast: r }, text: t, comments: e }) {
	return Object.assign(Me(r, t), { comments: e });
}
function ze({ result: { templateBindings: r }, text: t }) {
	return Qe(r, t);
}
var qe = (r) => Mt(Le(r));
var He = (r) => Mt(Pe(r)),
	se = (r) => Mt(Re(r)),
	je = (r) => ze(be(r));
function re(r) {
	var s, i, n;
	let t = ((s = r.range) == null ? void 0 : s[0]) ?? r.start,
		e = (n = ((i = r.declaration) == null ? void 0 : i.decorators) ?? r.decorators) == null ? void 0 : n[0];
	return e ? Math.min(re(e), t) : t;
}
function Ye(r) {
	var t;
	return ((t = r.range) == null ? void 0 : t[1]) ?? r.end;
}
function _t(r) {
	return {
		astFormat: "estree",
		parse(t) {
			let e = r(t);
			return {
				type: "NGRoot",
				node:
					r === se && e.type !== "NGChainedExpression"
						? {
								...e,
								type: "NGChainedExpression",
								expressions: [e],
							}
						: e,
			};
		},
		locStart: re,
		locEnd: Ye,
	};
}
var js = _t(se),
	Ys = _t(qe),
	Zs = _t(He),
	Js = _t(je);
var Ur = ne;
export { Ur as default, ie as parsers };
