var tt = Object.defineProperty;
var Ne = (e, t) => {
	for (var n in t) tt(e, n, { get: t[n], enumerable: !0 });
};
var Te = {};
Ne(Te, {
	languages: () => Pe,
	options: () => we,
	parsers: () => Ee,
	printers: () => sn,
});
var nt = (e, t, n, r) => {
		if (!(e && t == null)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
	},
	Y = nt;
var re = "indent";
var se = "group";
var oe = "if-break";
var P = "line";
var ae = "break-parent";
var xe = () => {},
	b = xe,
	ce = xe;
function x(e) {
	return b(e), { type: re, contents: e };
}
function y(e, t = {}) {
	return (
		b(e),
		ce(t.expandedStates, !0),
		{
			type: se,
			id: t.id,
			contents: e,
			break: !!t.shouldBreak,
			expandedStates: t.expandedStates,
		}
	);
}
function O(e, t = "", n = {}) {
	return b(e), t !== "" && b(t), { type: oe, breakContents: e, flatContents: t, groupId: n.groupId };
}
var mt = { type: ae };
var Et = { type: P, hard: !0 };
var k = { type: P },
	p = { type: P, soft: !0 },
	f = [Et, mt];
function E(e, t) {
	b(e), ce(t);
	let n = [];
	for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
	return n;
}
function j(e) {
	return (t, n, r) => {
		let i = !!(r != null && r.backwards);
		if (n === !1) return !1;
		let { length: s } = t,
			a = n;
		for (; a >= 0 && a < s; ) {
			let u = t.charAt(a);
			if (e instanceof RegExp) {
				if (!e.test(u)) return a;
			} else if (!e.includes(u)) return a;
			i ? a-- : a++;
		}
		return a === -1 || a === s ? a : !1;
	};
}
var An = j(/\s/u),
	G = j(" 	"),
	_e = j(",; 	"),
	ye = j(/[^\n\r]/u);
function Tt(e, t, n) {
	let r = !!(n != null && n.backwards);
	if (t === !1) return !1;
	let i = e.charAt(t);
	if (r) {
		if (
			e.charAt(t - 1) === "\r" &&
			i ===
				`
`
		)
			return t - 2;
		if (
			i ===
				`
` ||
			i === "\r" ||
			i === "\u2028" ||
			i === "\u2029"
		)
			return t - 1;
	} else {
		if (
			i === "\r" &&
			e.charAt(t + 1) ===
				`
`
		)
			return t + 2;
		if (
			i ===
				`
` ||
			i === "\r" ||
			i === "\u2028" ||
			i === "\u2029"
		)
			return t + 1;
	}
	return t;
}
var $ = Tt;
function Nt(e, t, n = {}) {
	let r = G(e, n.backwards ? t - 1 : t, n),
		i = $(e, r, n);
	return r !== i;
}
var Ie = Nt;
function xt(e, t) {
	if (t === !1) return !1;
	if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
		for (let n = t + 2; n < e.length; ++n) if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
	}
	return t;
}
var Oe = xt;
function _t(e, t) {
	return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? ye(e, t) : t;
}
var De = _t;
function yt(e, t) {
	let n = null,
		r = t;
	for (; r !== n; ) (n = r), (r = _e(e, r)), (r = Oe(e, r)), (r = G(e, r));
	return (r = De(e, r)), (r = $(e, r)), r !== !1 && Ie(e, r);
}
var Ae = yt;
function It(e) {
	return Array.isArray(e) && e.length > 0;
}
var ue = It;
var le = class extends Error {
		name = "UnexpectedNodeError";
		constructor(t, n, r = "type") {
			super(`Unexpected ${n} node ${r}: ${JSON.stringify(t[r])}.`), (this.node = t);
		}
	},
	ge = le;
var F = null;
function w(e) {
	if (F !== null && typeof F.property) {
		let t = F;
		return (F = w.prototype = null), t;
	}
	return (F = w.prototype = e ?? Object.create(null)), new w();
}
var Ot = 10;
for (let e = 0; e <= Ot; e++) w();
function pe(e) {
	return w(e);
}
function Dt(e, t = "type") {
	pe(e);
	function n(r) {
		let i = r[t],
			s = e[i];
		if (!Array.isArray(s))
			throw Object.assign(new Error(`Missing visitor keys for '${i}'.`), {
				node: r,
			});
		return s;
	}
	return n;
}
var ke = Dt;
var J = class {
		constructor(t, n, r) {
			(this.start = t.start), (this.end = n.end), (this.startToken = t), (this.endToken = n), (this.source = r);
		}
		get [Symbol.toStringTag]() {
			return "Location";
		}
		toJSON() {
			return { start: this.start, end: this.end };
		}
	},
	V = class {
		constructor(t, n, r, i, s, a) {
			(this.kind = t), (this.start = n), (this.end = r), (this.line = i), (this.column = s), (this.value = a), (this.prev = null), (this.next = null);
		}
		get [Symbol.toStringTag]() {
			return "Token";
		}
		toJSON() {
			return {
				kind: this.kind,
				value: this.value,
				line: this.line,
				column: this.column,
			};
		}
	},
	X = {
		Name: [],
		Document: ["definitions"],
		OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
		VariableDefinition: ["variable", "type", "defaultValue", "directives"],
		Variable: ["name"],
		SelectionSet: ["selections"],
		Field: ["alias", "name", "arguments", "directives", "selectionSet"],
		Argument: ["name", "value"],
		FragmentSpread: ["name", "directives"],
		InlineFragment: ["typeCondition", "directives", "selectionSet"],
		FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
		IntValue: [],
		FloatValue: [],
		StringValue: [],
		BooleanValue: [],
		NullValue: [],
		EnumValue: [],
		ListValue: ["values"],
		ObjectValue: ["fields"],
		ObjectField: ["name", "value"],
		Directive: ["name", "arguments"],
		NamedType: ["name"],
		ListType: ["type"],
		NonNullType: ["type"],
		SchemaDefinition: ["description", "directives", "operationTypes"],
		OperationTypeDefinition: ["type"],
		ScalarTypeDefinition: ["description", "name", "directives"],
		ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
		FieldDefinition: ["description", "name", "arguments", "type", "directives"],
		InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
		InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
		UnionTypeDefinition: ["description", "name", "directives", "types"],
		EnumTypeDefinition: ["description", "name", "directives", "values"],
		EnumValueDefinition: ["description", "name", "directives"],
		InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
		DirectiveDefinition: ["description", "name", "arguments", "locations"],
		SchemaExtension: ["directives", "operationTypes"],
		ScalarTypeExtension: ["name", "directives"],
		ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
		InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
		UnionTypeExtension: ["name", "directives", "types"],
		EnumTypeExtension: ["name", "directives", "values"],
		InputObjectTypeExtension: ["name", "directives", "fields"],
	},
	Jn = new Set(Object.keys(X));
var S;
(function (e) {
	(e.QUERY = "query"), (e.MUTATION = "mutation"), (e.SUBSCRIPTION = "subscription");
})(S || (S = {}));
var At = ke(X, "kind"),
	Se = At;
function q(e) {
	return e.loc.start;
}
function Q(e) {
	return e.loc.end;
}
function Ce(e) {
	return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/u.test(e);
}
function ve(e) {
	return (
		`# @format

` + e
	);
}
function gt(e, t, n) {
	let { node: r } = e;
	if (!r.description) return "";
	let i = [n("description")];
	return r.kind === "InputValueDefinition" && !r.description.block ? i.push(k) : i.push(f), i;
}
var A = gt;
function kt(e, t, n) {
	let { node: r } = e;
	switch (r.kind) {
		case "Document":
			return [...E(f, g(e, t, n, "definitions")), f];
		case "OperationDefinition": {
			let i = t.originalText[q(r)] !== "{",
				s = !!r.name;
			return [i ? r.operation : "", i && s ? [" ", n("name")] : "", i && !s && ue(r.variableDefinitions) ? " " : "", be(e, n), _(e, n, r), !i && !s ? "" : " ", n("selectionSet")];
		}
		case "FragmentDefinition":
			return ["fragment ", n("name"), be(e, n), " on ", n("typeCondition"), _(e, n, r), " ", n("selectionSet")];
		case "SelectionSet":
			return ["{", x([f, E(f, g(e, t, n, "selections"))]), f, "}"];
		case "Field":
			return y([r.alias ? [n("alias"), ": "] : "", n("name"), r.arguments.length > 0 ? y(["(", x([p, E([O("", ", "), p], g(e, t, n, "arguments"))]), p, ")"]) : "", _(e, n, r), r.selectionSet ? " " : "", n("selectionSet")]);
		case "Name":
			return r.value;
		case "StringValue":
			if (r.block) {
				let i = Y(!1, r.value, '"""', String.raw`\"""`).split(`
`);
				return i.length === 1 && (i[0] = i[0].trim()), i.every((s) => s === "") && (i.length = 0), E(f, ['"""', ...i, '"""']);
			}
			return [
				'"',
				Y(
					!1,
					Y(!1, r.value, /["\\]/gu, String.raw`\$&`),
					`
`,
					String.raw`\n`,
				),
				'"',
			];
		case "IntValue":
		case "FloatValue":
		case "EnumValue":
			return r.value;
		case "BooleanValue":
			return r.value ? "true" : "false";
		case "NullValue":
			return "null";
		case "Variable":
			return ["$", n("name")];
		case "ListValue":
			return y(["[", x([p, E([O("", ", "), p], e.map(n, "values"))]), p, "]"]);
		case "ObjectValue": {
			let i = t.bracketSpacing && r.fields.length > 0 ? " " : "";
			return y(["{", i, x([p, E([O("", ", "), p], e.map(n, "fields"))]), p, O("", i), "}"]);
		}
		case "ObjectField":
		case "Argument":
			return [n("name"), ": ", n("value")];
		case "Directive":
			return ["@", n("name"), r.arguments.length > 0 ? y(["(", x([p, E([O("", ", "), p], g(e, t, n, "arguments"))]), p, ")"]) : ""];
		case "NamedType":
			return n("name");
		case "VariableDefinition":
			return [n("variable"), ": ", n("type"), r.defaultValue ? [" = ", n("defaultValue")] : "", _(e, n, r)];
		case "ObjectTypeExtension":
		case "ObjectTypeDefinition":
		case "InputObjectTypeExtension":
		case "InputObjectTypeDefinition":
		case "InterfaceTypeExtension":
		case "InterfaceTypeDefinition": {
			let { kind: i } = r,
				s = [];
			return i.endsWith("TypeDefinition") ? s.push(A(e, t, n)) : s.push("extend "), i.startsWith("ObjectType") ? s.push("type") : i.startsWith("InputObjectType") ? s.push("input") : s.push("interface"), s.push(" ", n("name")), !i.startsWith("InputObjectType") && r.interfaces.length > 0 && s.push(" implements ", ...vt(e, t, n)), s.push(_(e, n, r)), r.fields.length > 0 && s.push([" {", x([f, E(f, g(e, t, n, "fields"))]), f, "}"]), s;
		}
		case "FieldDefinition":
			return [A(e, t, n), n("name"), r.arguments.length > 0 ? y(["(", x([p, E([O("", ", "), p], g(e, t, n, "arguments"))]), p, ")"]) : "", ": ", n("type"), _(e, n, r)];
		case "DirectiveDefinition":
			return [A(e, t, n), "directive ", "@", n("name"), r.arguments.length > 0 ? y(["(", x([p, E([O("", ", "), p], g(e, t, n, "arguments"))]), p, ")"]) : "", r.repeatable ? " repeatable" : "", " on ", ...E(" | ", e.map(n, "locations"))];
		case "EnumTypeExtension":
		case "EnumTypeDefinition":
			return [A(e, t, n), r.kind === "EnumTypeExtension" ? "extend " : "", "enum ", n("name"), _(e, n, r), r.values.length > 0 ? [" {", x([f, E(f, g(e, t, n, "values"))]), f, "}"] : ""];
		case "EnumValueDefinition":
			return [A(e, t, n), n("name"), _(e, n, r)];
		case "InputValueDefinition":
			return [A(e, t, n), n("name"), ": ", n("type"), r.defaultValue ? [" = ", n("defaultValue")] : "", _(e, n, r)];
		case "SchemaExtension":
			return ["extend schema", _(e, n, r), ...(r.operationTypes.length > 0 ? [" {", x([f, E(f, g(e, t, n, "operationTypes"))]), f, "}"] : [])];
		case "SchemaDefinition":
			return [A(e, t, n), "schema", _(e, n, r), " {", r.operationTypes.length > 0 ? x([f, E(f, g(e, t, n, "operationTypes"))]) : "", f, "}"];
		case "OperationTypeDefinition":
			return [r.operation, ": ", n("type")];
		case "FragmentSpread":
			return ["...", n("name"), _(e, n, r)];
		case "InlineFragment":
			return ["...", r.typeCondition ? [" on ", n("typeCondition")] : "", _(e, n, r), " ", n("selectionSet")];
		case "UnionTypeExtension":
		case "UnionTypeDefinition":
			return y([A(e, t, n), y([r.kind === "UnionTypeExtension" ? "extend " : "", "union ", n("name"), _(e, n, r), r.types.length > 0 ? [" =", O("", " "), x([O([k, "| "]), E([k, "| "], e.map(n, "types"))])] : ""])]);
		case "ScalarTypeExtension":
		case "ScalarTypeDefinition":
			return [A(e, t, n), r.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", n("name"), _(e, n, r)];
		case "NonNullType":
			return [n("type"), "!"];
		case "ListType":
			return ["[", n("type"), "]"];
		default:
			throw new ge(r, "Graphql", "kind");
	}
}
function _(e, t, n) {
	if (n.directives.length === 0) return "";
	let r = E(k, e.map(t, "directives"));
	return n.kind === "FragmentDefinition" || n.kind === "OperationDefinition" ? y([k, r]) : [" ", y(x([p, r]))];
}
function g(e, t, n, r) {
	return e.map(({ isLast: i, node: s }) => {
		let a = n();
		return !i && Ae(t.originalText, Q(s)) ? [a, f] : a;
	}, r);
}
function St(e) {
	return e.kind !== "Comment";
}
function Ct(e) {
	let t = e.node;
	if (t.kind === "Comment") return "#" + t.value.trimEnd();
	throw new Error("Not a comment: " + JSON.stringify(t));
}
function vt(e, t, n) {
	let { node: r } = e,
		i = [],
		{ interfaces: s } = r,
		a = e.map(n, "interfaces");
	for (let u = 0; u < s.length; u++) {
		let l = s[u];
		i.push(a[u]);
		let T = s[u + 1];
		if (T) {
			let D = t.originalText.slice(l.loc.end, T.loc.start).includes("#");
			i.push(" &", D ? k : " ");
		}
	}
	return i;
}
function be(e, t) {
	let { node: n } = e;
	return ue(n.variableDefinitions) ? y(["(", x([p, E([O("", ", "), p], e.map(t, "variableDefinitions"))]), p, ")"]) : "";
}
function Le(e, t) {
	e.kind === "StringValue" &&
		e.block &&
		!e.value.includes(`
`) &&
		(t.value = e.value.trim());
}
Le.ignoredProperties = new Set(["loc", "comments"]);
function bt(e) {
	var n;
	let { node: t } = e;
	return (n = t == null ? void 0 : t.comments) == null ? void 0 : n.some((r) => r.value.trim() === "prettier-ignore");
}
var Lt = {
		print: kt,
		massageAstNode: Le,
		hasPrettierIgnore: bt,
		insertPragma: ve,
		printComment: Ct,
		canAttachComment: St,
		getVisitorKeys: Se,
	},
	Re = Lt;
var Pe = [
	{
		linguistLanguageId: 139,
		name: "GraphQL",
		type: "data",
		color: "#e10098",
		extensions: [".graphql", ".gql", ".graphqls"],
		tmScope: "source.graphql",
		aceMode: "text",
		parsers: ["graphql"],
		vscodeLanguageIds: ["graphql"],
	},
];
var Fe = {
	bracketSpacing: {
		category: "Common",
		type: "boolean",
		default: !0,
		description: "Print spaces between brackets.",
		oppositeDescription: "Do not print spaces between brackets.",
	},
	singleQuote: {
		category: "Common",
		type: "boolean",
		default: !1,
		description: "Use single quotes instead of double quotes.",
	},
	proseWrap: {
		category: "Common",
		type: "choice",
		default: "preserve",
		description: "How to wrap prose.",
		choices: [
			{
				value: "always",
				description: "Wrap prose if it exceeds the print width.",
			},
			{ value: "never", description: "Do not wrap prose." },
			{ value: "preserve", description: "Wrap prose as-is." },
		],
	},
	bracketSameLine: {
		category: "Common",
		type: "boolean",
		default: !1,
		description: "Put > of opening tags on the last line instead of on a new line.",
	},
	singleAttributePerLine: {
		category: "Common",
		type: "boolean",
		default: !1,
		description: "Enforce single attribute per line in HTML, Vue and JSX.",
	},
};
var Rt = { bracketSpacing: Fe.bracketSpacing },
	we = Rt;
var Ee = {};
Ne(Ee, { graphql: () => rn });
function Ve(e) {
	return typeof e == "object" && e !== null;
}
function Be(e, t) {
	if (!!!e) throw new Error(t ?? "Unexpected invariant triggered.");
}
var Pt = /\r\n|[\n\r]/g;
function B(e, t) {
	let n = 0,
		r = 1;
	for (let i of e.body.matchAll(Pt)) {
		if ((typeof i.index == "number" || Be(!1), i.index >= t)) break;
		(n = i.index + i[0].length), (r += 1);
	}
	return { line: r, column: t + 1 - n };
}
function Me(e) {
	return fe(e.source, B(e.source, e.start));
}
function fe(e, t) {
	let n = e.locationOffset.column - 1,
		r = "".padStart(n) + e.body,
		i = t.line - 1,
		s = e.locationOffset.line - 1,
		a = t.line + s,
		u = t.line === 1 ? n : 0,
		l = t.column + u,
		T = `${e.name}:${a}:${l}
`,
		h = r.split(/\r\n|[\n\r]/g),
		D = h[i];
	if (D.length > 120) {
		let I = Math.floor(l / 80),
			ie = l % 80,
			N = [];
		for (let v = 0; v < D.length; v += 80) N.push(D.slice(v, v + 80));
		return T + Ue([[`${a} |`, N[0]], ...N.slice(1, I + 1).map((v) => ["|", v]), ["|", "^".padStart(ie)], ["|", N[I + 1]]]);
	}
	return (
		T +
		Ue([
			[`${a - 1} |`, h[i - 1]],
			[`${a} |`, D],
			["|", "^".padStart(l)],
			[`${a + 1} |`, h[i + 1]],
		])
	);
}
function Ue(e) {
	let t = e.filter(([r, i]) => i !== void 0),
		n = Math.max(...t.map(([r]) => r.length));
	return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function Ft(e) {
	let t = e[0];
	return t == null || "kind" in t || "length" in t
		? {
				nodes: t,
				source: e[1],
				positions: e[2],
				path: e[3],
				originalError: e[4],
				extensions: e[5],
			}
		: t;
}
var W = class e extends Error {
	constructor(t, ...n) {
		var r, i, s;
		let { nodes: a, source: u, positions: l, path: T, originalError: h, extensions: D } = Ft(n);
		super(t), (this.name = "GraphQLError"), (this.path = T ?? void 0), (this.originalError = h ?? void 0), (this.nodes = Ye(Array.isArray(a) ? a : a ? [a] : void 0));
		let I = Ye((r = this.nodes) === null || r === void 0 ? void 0 : r.map((N) => N.loc).filter((N) => N != null));
		(this.source = u ?? (I == null || (i = I[0]) === null || i === void 0 ? void 0 : i.source)), (this.positions = l ?? (I == null ? void 0 : I.map((N) => N.start))), (this.locations = l && u ? l.map((N) => B(u, N)) : I == null ? void 0 : I.map((N) => B(N.source, N.start)));
		let ie = Ve(h == null ? void 0 : h.extensions) ? (h == null ? void 0 : h.extensions) : void 0;
		(this.extensions = (s = D ?? ie) !== null && s !== void 0 ? s : Object.create(null)),
			Object.defineProperties(this, {
				message: { writable: !0, enumerable: !0 },
				name: { enumerable: !1 },
				nodes: { enumerable: !1 },
				source: { enumerable: !1 },
				positions: { enumerable: !1 },
				originalError: { enumerable: !1 },
			}),
			h != null && h.stack
				? Object.defineProperty(this, "stack", {
						value: h.stack,
						writable: !0,
						configurable: !0,
					})
				: Error.captureStackTrace
					? Error.captureStackTrace(this, e)
					: Object.defineProperty(this, "stack", {
							value: Error().stack,
							writable: !0,
							configurable: !0,
						});
	}
	get [Symbol.toStringTag]() {
		return "GraphQLError";
	}
	toString() {
		let t = this.message;
		if (this.nodes)
			for (let n of this.nodes)
				n.loc &&
					(t +=
						`

` + Me(n.loc));
		else if (this.source && this.locations)
			for (let n of this.locations)
				t +=
					`

` + fe(this.source, n);
		return t;
	}
	toJSON() {
		let t = { message: this.message };
		return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
	}
};
function Ye(e) {
	return e === void 0 || e.length === 0 ? void 0 : e;
}
function d(e, t, n) {
	return new W(`Syntax Error: ${n}`, { source: e, positions: [t] });
}
var H;
(function (e) {
	(e.QUERY = "QUERY"), (e.MUTATION = "MUTATION"), (e.SUBSCRIPTION = "SUBSCRIPTION"), (e.FIELD = "FIELD"), (e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION"), (e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD"), (e.INLINE_FRAGMENT = "INLINE_FRAGMENT"), (e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION"), (e.SCHEMA = "SCHEMA"), (e.SCALAR = "SCALAR"), (e.OBJECT = "OBJECT"), (e.FIELD_DEFINITION = "FIELD_DEFINITION"), (e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION"), (e.INTERFACE = "INTERFACE"), (e.UNION = "UNION"), (e.ENUM = "ENUM"), (e.ENUM_VALUE = "ENUM_VALUE"), (e.INPUT_OBJECT = "INPUT_OBJECT"), (e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION");
})(H || (H = {}));
var c;
(function (e) {
	(e.NAME = "Name"),
		(e.DOCUMENT = "Document"),
		(e.OPERATION_DEFINITION = "OperationDefinition"),
		(e.VARIABLE_DEFINITION = "VariableDefinition"),
		(e.SELECTION_SET = "SelectionSet"),
		(e.FIELD = "Field"),
		(e.ARGUMENT = "Argument"),
		(e.FRAGMENT_SPREAD = "FragmentSpread"),
		(e.INLINE_FRAGMENT = "InlineFragment"),
		(e.FRAGMENT_DEFINITION = "FragmentDefinition"),
		(e.VARIABLE = "Variable"),
		(e.INT = "IntValue"),
		(e.FLOAT = "FloatValue"),
		(e.STRING = "StringValue"),
		(e.BOOLEAN = "BooleanValue"),
		(e.NULL = "NullValue"),
		(e.ENUM = "EnumValue"),
		(e.LIST = "ListValue"),
		(e.OBJECT = "ObjectValue"),
		(e.OBJECT_FIELD = "ObjectField"),
		(e.DIRECTIVE = "Directive"),
		(e.NAMED_TYPE = "NamedType"),
		(e.LIST_TYPE = "ListType"),
		(e.NON_NULL_TYPE = "NonNullType"),
		(e.SCHEMA_DEFINITION = "SchemaDefinition"),
		(e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
		(e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
		(e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
		(e.FIELD_DEFINITION = "FieldDefinition"),
		(e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
		(e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
		(e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
		(e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
		(e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
		(e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
		(e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
		(e.SCHEMA_EXTENSION = "SchemaExtension"),
		(e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
		(e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
		(e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
		(e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
		(e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
		(e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
})(c || (c = {}));
function je(e) {
	return e === 9 || e === 32;
}
function L(e) {
	return e >= 48 && e <= 57;
}
function Ge(e) {
	return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function he(e) {
	return Ge(e) || e === 95;
}
function $e(e) {
	return Ge(e) || L(e) || e === 95;
}
function Je(e) {
	var t;
	let n = Number.MAX_SAFE_INTEGER,
		r = null,
		i = -1;
	for (let a = 0; a < e.length; ++a) {
		var s;
		let u = e[a],
			l = wt(u);
		l !== u.length && ((r = (s = r) !== null && s !== void 0 ? s : a), (i = a), a !== 0 && l < n && (n = l));
	}
	return e.map((a, u) => (u === 0 ? a : a.slice(n))).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
}
function wt(e) {
	let t = 0;
	for (; t < e.length && je(e.charCodeAt(t)); ) ++t;
	return t;
}
var o;
(function (e) {
	(e.SOF = "<SOF>"), (e.EOF = "<EOF>"), (e.BANG = "!"), (e.DOLLAR = "$"), (e.AMP = "&"), (e.PAREN_L = "("), (e.PAREN_R = ")"), (e.SPREAD = "..."), (e.COLON = ":"), (e.EQUALS = "="), (e.AT = "@"), (e.BRACKET_L = "["), (e.BRACKET_R = "]"), (e.BRACE_L = "{"), (e.PIPE = "|"), (e.BRACE_R = "}"), (e.NAME = "Name"), (e.INT = "Int"), (e.FLOAT = "Float"), (e.STRING = "String"), (e.BLOCK_STRING = "BlockString"), (e.COMMENT = "Comment");
})(o || (o = {}));
var z = class {
	constructor(t) {
		let n = new V(o.SOF, 0, 0, 0, 0);
		(this.source = t), (this.lastToken = n), (this.token = n), (this.line = 1), (this.lineStart = 0);
	}
	get [Symbol.toStringTag]() {
		return "Lexer";
	}
	advance() {
		return (this.lastToken = this.token), (this.token = this.lookahead());
	}
	lookahead() {
		let t = this.token;
		if (t.kind !== o.EOF)
			do
				if (t.next) t = t.next;
				else {
					let n = Vt(this, t.end);
					(t.next = n), (n.prev = t), (t = n);
				}
			while (t.kind === o.COMMENT);
		return t;
	}
};
function qe(e) {
	return e === o.BANG || e === o.DOLLAR || e === o.AMP || e === o.PAREN_L || e === o.PAREN_R || e === o.SPREAD || e === o.COLON || e === o.EQUALS || e === o.AT || e === o.BRACKET_L || e === o.BRACKET_R || e === o.BRACE_L || e === o.PIPE || e === o.BRACE_R;
}
function R(e) {
	return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
}
function K(e, t) {
	return Qe(e.charCodeAt(t)) && We(e.charCodeAt(t + 1));
}
function Qe(e) {
	return e >= 55296 && e <= 56319;
}
function We(e) {
	return e >= 56320 && e <= 57343;
}
function C(e, t) {
	let n = e.source.body.codePointAt(t);
	if (n === void 0) return o.EOF;
	if (n >= 32 && n <= 126) {
		let r = String.fromCodePoint(n);
		return r === '"' ? `'"'` : `"${r}"`;
	}
	return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function m(e, t, n, r, i) {
	let s = e.line,
		a = 1 + n - e.lineStart;
	return new V(t, n, r, s, a, i);
}
function Vt(e, t) {
	let n = e.source.body,
		r = n.length,
		i = t;
	for (; i < r; ) {
		let s = n.charCodeAt(i);
		switch (s) {
			case 65279:
			case 9:
			case 32:
			case 44:
				++i;
				continue;
			case 10:
				++i, ++e.line, (e.lineStart = i);
				continue;
			case 13:
				n.charCodeAt(i + 1) === 10 ? (i += 2) : ++i, ++e.line, (e.lineStart = i);
				continue;
			case 35:
				return Bt(e, i);
			case 33:
				return m(e, o.BANG, i, i + 1);
			case 36:
				return m(e, o.DOLLAR, i, i + 1);
			case 38:
				return m(e, o.AMP, i, i + 1);
			case 40:
				return m(e, o.PAREN_L, i, i + 1);
			case 41:
				return m(e, o.PAREN_R, i, i + 1);
			case 46:
				if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return m(e, o.SPREAD, i, i + 3);
				break;
			case 58:
				return m(e, o.COLON, i, i + 1);
			case 61:
				return m(e, o.EQUALS, i, i + 1);
			case 64:
				return m(e, o.AT, i, i + 1);
			case 91:
				return m(e, o.BRACKET_L, i, i + 1);
			case 93:
				return m(e, o.BRACKET_R, i, i + 1);
			case 123:
				return m(e, o.BRACE_L, i, i + 1);
			case 124:
				return m(e, o.PIPE, i, i + 1);
			case 125:
				return m(e, o.BRACE_R, i, i + 1);
			case 34:
				return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? $t(e, i) : Mt(e, i);
		}
		if (L(s) || s === 45) return Ut(e, i, s);
		if (he(s)) return Jt(e, i);
		throw d(e.source, i, s === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : R(s) || K(n, i) ? `Unexpected character: ${C(e, i)}.` : `Invalid character: ${C(e, i)}.`);
	}
	return m(e, o.EOF, r, r);
}
function Bt(e, t) {
	let n = e.source.body,
		r = n.length,
		i = t + 1;
	for (; i < r; ) {
		let s = n.charCodeAt(i);
		if (s === 10 || s === 13) break;
		if (R(s)) ++i;
		else if (K(n, i)) i += 2;
		else break;
	}
	return m(e, o.COMMENT, t, i, n.slice(t + 1, i));
}
function Ut(e, t, n) {
	let r = e.source.body,
		i = t,
		s = n,
		a = !1;
	if ((s === 45 && (s = r.charCodeAt(++i)), s === 48)) {
		if (((s = r.charCodeAt(++i)), L(s))) throw d(e.source, i, `Invalid number, unexpected digit after 0: ${C(e, i)}.`);
	} else (i = de(e, i, s)), (s = r.charCodeAt(i));
	if ((s === 46 && ((a = !0), (s = r.charCodeAt(++i)), (i = de(e, i, s)), (s = r.charCodeAt(i))), (s === 69 || s === 101) && ((a = !0), (s = r.charCodeAt(++i)), (s === 43 || s === 45) && (s = r.charCodeAt(++i)), (i = de(e, i, s)), (s = r.charCodeAt(i))), s === 46 || he(s))) throw d(e.source, i, `Invalid number, expected digit but got: ${C(e, i)}.`);
	return m(e, a ? o.FLOAT : o.INT, t, i, r.slice(t, i));
}
function de(e, t, n) {
	if (!L(n)) throw d(e.source, t, `Invalid number, expected digit but got: ${C(e, t)}.`);
	let r = e.source.body,
		i = t + 1;
	for (; L(r.charCodeAt(i)); ) ++i;
	return i;
}
function Mt(e, t) {
	let n = e.source.body,
		r = n.length,
		i = t + 1,
		s = i,
		a = "";
	for (; i < r; ) {
		let u = n.charCodeAt(i);
		if (u === 34) return (a += n.slice(s, i)), m(e, o.STRING, t, i + 1, a);
		if (u === 92) {
			a += n.slice(s, i);
			let l = n.charCodeAt(i + 1) === 117 ? (n.charCodeAt(i + 2) === 123 ? Yt(e, i) : jt(e, i)) : Gt(e, i);
			(a += l.value), (i += l.size), (s = i);
			continue;
		}
		if (u === 10 || u === 13) break;
		if (R(u)) ++i;
		else if (K(n, i)) i += 2;
		else throw d(e.source, i, `Invalid character within String: ${C(e, i)}.`);
	}
	throw d(e.source, i, "Unterminated string.");
}
function Yt(e, t) {
	let n = e.source.body,
		r = 0,
		i = 3;
	for (; i < 12; ) {
		let s = n.charCodeAt(t + i++);
		if (s === 125) {
			if (i < 5 || !R(r)) break;
			return { value: String.fromCodePoint(r), size: i };
		}
		if (((r = (r << 4) | U(s)), r < 0)) break;
	}
	throw d(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`);
}
function jt(e, t) {
	let n = e.source.body,
		r = Xe(n, t + 2);
	if (R(r)) return { value: String.fromCodePoint(r), size: 6 };
	if (Qe(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
		let i = Xe(n, t + 8);
		if (We(i)) return { value: String.fromCodePoint(r, i), size: 12 };
	}
	throw d(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`);
}
function Xe(e, t) {
	return (U(e.charCodeAt(t)) << 12) | (U(e.charCodeAt(t + 1)) << 8) | (U(e.charCodeAt(t + 2)) << 4) | U(e.charCodeAt(t + 3));
}
function U(e) {
	return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function Gt(e, t) {
	let n = e.source.body;
	switch (n.charCodeAt(t + 1)) {
		case 34:
			return { value: '"', size: 2 };
		case 92:
			return { value: "\\", size: 2 };
		case 47:
			return { value: "/", size: 2 };
		case 98:
			return { value: "\b", size: 2 };
		case 102:
			return { value: "\f", size: 2 };
		case 110:
			return {
				value: `
`,
				size: 2,
			};
		case 114:
			return { value: "\r", size: 2 };
		case 116:
			return { value: "	", size: 2 };
	}
	throw d(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`);
}
function $t(e, t) {
	let n = e.source.body,
		r = n.length,
		i = e.lineStart,
		s = t + 3,
		a = s,
		u = "",
		l = [];
	for (; s < r; ) {
		let T = n.charCodeAt(s);
		if (T === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
			(u += n.slice(a, s)), l.push(u);
			let h = m(
				e,
				o.BLOCK_STRING,
				t,
				s + 3,
				Je(l).join(`
`),
			);
			return (e.line += l.length - 1), (e.lineStart = i), h;
		}
		if (T === 92 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34 && n.charCodeAt(s + 3) === 34) {
			(u += n.slice(a, s)), (a = s + 1), (s += 4);
			continue;
		}
		if (T === 10 || T === 13) {
			(u += n.slice(a, s)), l.push(u), T === 13 && n.charCodeAt(s + 1) === 10 ? (s += 2) : ++s, (u = ""), (a = s), (i = s);
			continue;
		}
		if (R(T)) ++s;
		else if (K(n, s)) s += 2;
		else throw d(e.source, s, `Invalid character within String: ${C(e, s)}.`);
	}
	throw d(e.source, s, "Unterminated string.");
}
function Jt(e, t) {
	let n = e.source.body,
		r = n.length,
		i = t + 1;
	for (; i < r; ) {
		let s = n.charCodeAt(i);
		if ($e(s)) ++i;
		else break;
	}
	return m(e, o.NAME, t, i, n.slice(t, i));
}
function Z(e, t) {
	if (!!!e) throw new Error(t);
}
function ee(e) {
	return te(e, []);
}
function te(e, t) {
	switch (typeof e) {
		case "string":
			return JSON.stringify(e);
		case "function":
			return e.name ? `[function ${e.name}]` : "[function]";
		case "object":
			return Xt(e, t);
		default:
			return String(e);
	}
}
function Xt(e, t) {
	if (e === null) return "null";
	if (t.includes(e)) return "[Circular]";
	let n = [...t, e];
	if (qt(e)) {
		let r = e.toJSON();
		if (r !== e) return typeof r == "string" ? r : te(r, n);
	} else if (Array.isArray(e)) return Wt(e, n);
	return Qt(e, n);
}
function qt(e) {
	return typeof e.toJSON == "function";
}
function Qt(e, t) {
	let n = Object.entries(e);
	return n.length === 0 ? "{}" : t.length > 2 ? "[" + Ht(e) + "]" : "{ " + n.map(([i, s]) => i + ": " + te(s, t)).join(", ") + " }";
}
function Wt(e, t) {
	if (e.length === 0) return "[]";
	if (t.length > 2) return "[Array]";
	let n = Math.min(10, e.length),
		r = e.length - n,
		i = [];
	for (let s = 0; s < n; ++s) i.push(te(e[s], t));
	return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]";
}
function Ht(e) {
	let t = Object.prototype.toString
		.call(e)
		.replace(/^\[object /, "")
		.replace(/]$/, "");
	if (t === "Object" && typeof e.constructor == "function") {
		let n = e.constructor.name;
		if (typeof n == "string" && n !== "") return n;
	}
	return t;
}
var zt = globalThis.process && !0,
	He = zt
		? function (t, n) {
				return t instanceof n;
			}
		: function (t, n) {
				if (t instanceof n) return !0;
				if (typeof t == "object" && t !== null) {
					var r;
					let i = n.prototype[Symbol.toStringTag],
						s = Symbol.toStringTag in t ? t[Symbol.toStringTag] : (r = t.constructor) === null || r === void 0 ? void 0 : r.name;
					if (i === s) {
						let a = ee(t);
						throw new Error(`Cannot use ${i} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
					}
				}
				return !1;
			};
var M = class {
	constructor(t, n = "GraphQL request", r = { line: 1, column: 1 }) {
		typeof t == "string" || Z(!1, `Body must be a string. Received: ${ee(t)}.`), (this.body = t), (this.name = n), (this.locationOffset = r), this.locationOffset.line > 0 || Z(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Z(!1, "column in locationOffset is 1-indexed and must be positive.");
	}
	get [Symbol.toStringTag]() {
		return "Source";
	}
};
function ze(e) {
	return He(e, M);
}
function Ke(e, t) {
	return new me(e, t).parseDocument();
}
var me = class {
	constructor(t, n = {}) {
		let r = ze(t) ? t : new M(t);
		(this._lexer = new z(r)), (this._options = n), (this._tokenCounter = 0);
	}
	parseName() {
		let t = this.expectToken(o.NAME);
		return this.node(t, { kind: c.NAME, value: t.value });
	}
	parseDocument() {
		return this.node(this._lexer.token, {
			kind: c.DOCUMENT,
			definitions: this.many(o.SOF, this.parseDefinition, o.EOF),
		});
	}
	parseDefinition() {
		if (this.peek(o.BRACE_L)) return this.parseOperationDefinition();
		let t = this.peekDescription(),
			n = t ? this._lexer.lookahead() : this._lexer.token;
		if (n.kind === o.NAME) {
			switch (n.value) {
				case "schema":
					return this.parseSchemaDefinition();
				case "scalar":
					return this.parseScalarTypeDefinition();
				case "type":
					return this.parseObjectTypeDefinition();
				case "interface":
					return this.parseInterfaceTypeDefinition();
				case "union":
					return this.parseUnionTypeDefinition();
				case "enum":
					return this.parseEnumTypeDefinition();
				case "input":
					return this.parseInputObjectTypeDefinition();
				case "directive":
					return this.parseDirectiveDefinition();
			}
			if (t) throw d(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
			switch (n.value) {
				case "query":
				case "mutation":
				case "subscription":
					return this.parseOperationDefinition();
				case "fragment":
					return this.parseFragmentDefinition();
				case "extend":
					return this.parseTypeSystemExtension();
			}
		}
		throw this.unexpected(n);
	}
	parseOperationDefinition() {
		let t = this._lexer.token;
		if (this.peek(o.BRACE_L))
			return this.node(t, {
				kind: c.OPERATION_DEFINITION,
				operation: S.QUERY,
				name: void 0,
				variableDefinitions: [],
				directives: [],
				selectionSet: this.parseSelectionSet(),
			});
		let n = this.parseOperationType(),
			r;
		return (
			this.peek(o.NAME) && (r = this.parseName()),
			this.node(t, {
				kind: c.OPERATION_DEFINITION,
				operation: n,
				name: r,
				variableDefinitions: this.parseVariableDefinitions(),
				directives: this.parseDirectives(!1),
				selectionSet: this.parseSelectionSet(),
			})
		);
	}
	parseOperationType() {
		let t = this.expectToken(o.NAME);
		switch (t.value) {
			case "query":
				return S.QUERY;
			case "mutation":
				return S.MUTATION;
			case "subscription":
				return S.SUBSCRIPTION;
		}
		throw this.unexpected(t);
	}
	parseVariableDefinitions() {
		return this.optionalMany(o.PAREN_L, this.parseVariableDefinition, o.PAREN_R);
	}
	parseVariableDefinition() {
		return this.node(this._lexer.token, {
			kind: c.VARIABLE_DEFINITION,
			variable: this.parseVariable(),
			type: (this.expectToken(o.COLON), this.parseTypeReference()),
			defaultValue: this.expectOptionalToken(o.EQUALS) ? this.parseConstValueLiteral() : void 0,
			directives: this.parseConstDirectives(),
		});
	}
	parseVariable() {
		let t = this._lexer.token;
		return this.expectToken(o.DOLLAR), this.node(t, { kind: c.VARIABLE, name: this.parseName() });
	}
	parseSelectionSet() {
		return this.node(this._lexer.token, {
			kind: c.SELECTION_SET,
			selections: this.many(o.BRACE_L, this.parseSelection, o.BRACE_R),
		});
	}
	parseSelection() {
		return this.peek(o.SPREAD) ? this.parseFragment() : this.parseField();
	}
	parseField() {
		let t = this._lexer.token,
			n = this.parseName(),
			r,
			i;
		return (
			this.expectOptionalToken(o.COLON) ? ((r = n), (i = this.parseName())) : (i = n),
			this.node(t, {
				kind: c.FIELD,
				alias: r,
				name: i,
				arguments: this.parseArguments(!1),
				directives: this.parseDirectives(!1),
				selectionSet: this.peek(o.BRACE_L) ? this.parseSelectionSet() : void 0,
			})
		);
	}
	parseArguments(t) {
		let n = t ? this.parseConstArgument : this.parseArgument;
		return this.optionalMany(o.PAREN_L, n, o.PAREN_R);
	}
	parseArgument(t = !1) {
		let n = this._lexer.token,
			r = this.parseName();
		return (
			this.expectToken(o.COLON),
			this.node(n, {
				kind: c.ARGUMENT,
				name: r,
				value: this.parseValueLiteral(t),
			})
		);
	}
	parseConstArgument() {
		return this.parseArgument(!0);
	}
	parseFragment() {
		let t = this._lexer.token;
		this.expectToken(o.SPREAD);
		let n = this.expectOptionalKeyword("on");
		return !n && this.peek(o.NAME)
			? this.node(t, {
					kind: c.FRAGMENT_SPREAD,
					name: this.parseFragmentName(),
					directives: this.parseDirectives(!1),
				})
			: this.node(t, {
					kind: c.INLINE_FRAGMENT,
					typeCondition: n ? this.parseNamedType() : void 0,
					directives: this.parseDirectives(!1),
					selectionSet: this.parseSelectionSet(),
				});
	}
	parseFragmentDefinition() {
		let t = this._lexer.token;
		return (
			this.expectKeyword("fragment"),
			this._options.allowLegacyFragmentVariables === !0
				? this.node(t, {
						kind: c.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						variableDefinitions: this.parseVariableDefinitions(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
					})
				: this.node(t, {
						kind: c.FRAGMENT_DEFINITION,
						name: this.parseFragmentName(),
						typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
						directives: this.parseDirectives(!1),
						selectionSet: this.parseSelectionSet(),
					})
		);
	}
	parseFragmentName() {
		if (this._lexer.token.value === "on") throw this.unexpected();
		return this.parseName();
	}
	parseValueLiteral(t) {
		let n = this._lexer.token;
		switch (n.kind) {
			case o.BRACKET_L:
				return this.parseList(t);
			case o.BRACE_L:
				return this.parseObject(t);
			case o.INT:
				return this.advanceLexer(), this.node(n, { kind: c.INT, value: n.value });
			case o.FLOAT:
				return this.advanceLexer(), this.node(n, { kind: c.FLOAT, value: n.value });
			case o.STRING:
			case o.BLOCK_STRING:
				return this.parseStringLiteral();
			case o.NAME:
				switch ((this.advanceLexer(), n.value)) {
					case "true":
						return this.node(n, { kind: c.BOOLEAN, value: !0 });
					case "false":
						return this.node(n, { kind: c.BOOLEAN, value: !1 });
					case "null":
						return this.node(n, { kind: c.NULL });
					default:
						return this.node(n, { kind: c.ENUM, value: n.value });
				}
			case o.DOLLAR:
				if (t)
					if ((this.expectToken(o.DOLLAR), this._lexer.token.kind === o.NAME)) {
						let r = this._lexer.token.value;
						throw d(this._lexer.source, n.start, `Unexpected variable "$${r}" in constant value.`);
					} else throw this.unexpected(n);
				return this.parseVariable();
			default:
				throw this.unexpected();
		}
	}
	parseConstValueLiteral() {
		return this.parseValueLiteral(!0);
	}
	parseStringLiteral() {
		let t = this._lexer.token;
		return (
			this.advanceLexer(),
			this.node(t, {
				kind: c.STRING,
				value: t.value,
				block: t.kind === o.BLOCK_STRING,
			})
		);
	}
	parseList(t) {
		let n = () => this.parseValueLiteral(t);
		return this.node(this._lexer.token, {
			kind: c.LIST,
			values: this.any(o.BRACKET_L, n, o.BRACKET_R),
		});
	}
	parseObject(t) {
		let n = () => this.parseObjectField(t);
		return this.node(this._lexer.token, {
			kind: c.OBJECT,
			fields: this.any(o.BRACE_L, n, o.BRACE_R),
		});
	}
	parseObjectField(t) {
		let n = this._lexer.token,
			r = this.parseName();
		return (
			this.expectToken(o.COLON),
			this.node(n, {
				kind: c.OBJECT_FIELD,
				name: r,
				value: this.parseValueLiteral(t),
			})
		);
	}
	parseDirectives(t) {
		let n = [];
		for (; this.peek(o.AT); ) n.push(this.parseDirective(t));
		return n;
	}
	parseConstDirectives() {
		return this.parseDirectives(!0);
	}
	parseDirective(t) {
		let n = this._lexer.token;
		return (
			this.expectToken(o.AT),
			this.node(n, {
				kind: c.DIRECTIVE,
				name: this.parseName(),
				arguments: this.parseArguments(t),
			})
		);
	}
	parseTypeReference() {
		let t = this._lexer.token,
			n;
		if (this.expectOptionalToken(o.BRACKET_L)) {
			let r = this.parseTypeReference();
			this.expectToken(o.BRACKET_R), (n = this.node(t, { kind: c.LIST_TYPE, type: r }));
		} else n = this.parseNamedType();
		return this.expectOptionalToken(o.BANG) ? this.node(t, { kind: c.NON_NULL_TYPE, type: n }) : n;
	}
	parseNamedType() {
		return this.node(this._lexer.token, {
			kind: c.NAMED_TYPE,
			name: this.parseName(),
		});
	}
	peekDescription() {
		return this.peek(o.STRING) || this.peek(o.BLOCK_STRING);
	}
	parseDescription() {
		if (this.peekDescription()) return this.parseStringLiteral();
	}
	parseSchemaDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription();
		this.expectKeyword("schema");
		let r = this.parseConstDirectives(),
			i = this.many(o.BRACE_L, this.parseOperationTypeDefinition, o.BRACE_R);
		return this.node(t, {
			kind: c.SCHEMA_DEFINITION,
			description: n,
			directives: r,
			operationTypes: i,
		});
	}
	parseOperationTypeDefinition() {
		let t = this._lexer.token,
			n = this.parseOperationType();
		this.expectToken(o.COLON);
		let r = this.parseNamedType();
		return this.node(t, {
			kind: c.OPERATION_TYPE_DEFINITION,
			operation: n,
			type: r,
		});
	}
	parseScalarTypeDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription();
		this.expectKeyword("scalar");
		let r = this.parseName(),
			i = this.parseConstDirectives();
		return this.node(t, {
			kind: c.SCALAR_TYPE_DEFINITION,
			description: n,
			name: r,
			directives: i,
		});
	}
	parseObjectTypeDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription();
		this.expectKeyword("type");
		let r = this.parseName(),
			i = this.parseImplementsInterfaces(),
			s = this.parseConstDirectives(),
			a = this.parseFieldsDefinition();
		return this.node(t, {
			kind: c.OBJECT_TYPE_DEFINITION,
			description: n,
			name: r,
			interfaces: i,
			directives: s,
			fields: a,
		});
	}
	parseImplementsInterfaces() {
		return this.expectOptionalKeyword("implements") ? this.delimitedMany(o.AMP, this.parseNamedType) : [];
	}
	parseFieldsDefinition() {
		return this.optionalMany(o.BRACE_L, this.parseFieldDefinition, o.BRACE_R);
	}
	parseFieldDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription(),
			r = this.parseName(),
			i = this.parseArgumentDefs();
		this.expectToken(o.COLON);
		let s = this.parseTypeReference(),
			a = this.parseConstDirectives();
		return this.node(t, {
			kind: c.FIELD_DEFINITION,
			description: n,
			name: r,
			arguments: i,
			type: s,
			directives: a,
		});
	}
	parseArgumentDefs() {
		return this.optionalMany(o.PAREN_L, this.parseInputValueDef, o.PAREN_R);
	}
	parseInputValueDef() {
		let t = this._lexer.token,
			n = this.parseDescription(),
			r = this.parseName();
		this.expectToken(o.COLON);
		let i = this.parseTypeReference(),
			s;
		this.expectOptionalToken(o.EQUALS) && (s = this.parseConstValueLiteral());
		let a = this.parseConstDirectives();
		return this.node(t, {
			kind: c.INPUT_VALUE_DEFINITION,
			description: n,
			name: r,
			type: i,
			defaultValue: s,
			directives: a,
		});
	}
	parseInterfaceTypeDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription();
		this.expectKeyword("interface");
		let r = this.parseName(),
			i = this.parseImplementsInterfaces(),
			s = this.parseConstDirectives(),
			a = this.parseFieldsDefinition();
		return this.node(t, {
			kind: c.INTERFACE_TYPE_DEFINITION,
			description: n,
			name: r,
			interfaces: i,
			directives: s,
			fields: a,
		});
	}
	parseUnionTypeDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription();
		this.expectKeyword("union");
		let r = this.parseName(),
			i = this.parseConstDirectives(),
			s = this.parseUnionMemberTypes();
		return this.node(t, {
			kind: c.UNION_TYPE_DEFINITION,
			description: n,
			name: r,
			directives: i,
			types: s,
		});
	}
	parseUnionMemberTypes() {
		return this.expectOptionalToken(o.EQUALS) ? this.delimitedMany(o.PIPE, this.parseNamedType) : [];
	}
	parseEnumTypeDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription();
		this.expectKeyword("enum");
		let r = this.parseName(),
			i = this.parseConstDirectives(),
			s = this.parseEnumValuesDefinition();
		return this.node(t, {
			kind: c.ENUM_TYPE_DEFINITION,
			description: n,
			name: r,
			directives: i,
			values: s,
		});
	}
	parseEnumValuesDefinition() {
		return this.optionalMany(o.BRACE_L, this.parseEnumValueDefinition, o.BRACE_R);
	}
	parseEnumValueDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription(),
			r = this.parseEnumValueName(),
			i = this.parseConstDirectives();
		return this.node(t, {
			kind: c.ENUM_VALUE_DEFINITION,
			description: n,
			name: r,
			directives: i,
		});
	}
	parseEnumValueName() {
		if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw d(this._lexer.source, this._lexer.token.start, `${ne(this._lexer.token)} is reserved and cannot be used for an enum value.`);
		return this.parseName();
	}
	parseInputObjectTypeDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription();
		this.expectKeyword("input");
		let r = this.parseName(),
			i = this.parseConstDirectives(),
			s = this.parseInputFieldsDefinition();
		return this.node(t, {
			kind: c.INPUT_OBJECT_TYPE_DEFINITION,
			description: n,
			name: r,
			directives: i,
			fields: s,
		});
	}
	parseInputFieldsDefinition() {
		return this.optionalMany(o.BRACE_L, this.parseInputValueDef, o.BRACE_R);
	}
	parseTypeSystemExtension() {
		let t = this._lexer.lookahead();
		if (t.kind === o.NAME)
			switch (t.value) {
				case "schema":
					return this.parseSchemaExtension();
				case "scalar":
					return this.parseScalarTypeExtension();
				case "type":
					return this.parseObjectTypeExtension();
				case "interface":
					return this.parseInterfaceTypeExtension();
				case "union":
					return this.parseUnionTypeExtension();
				case "enum":
					return this.parseEnumTypeExtension();
				case "input":
					return this.parseInputObjectTypeExtension();
			}
		throw this.unexpected(t);
	}
	parseSchemaExtension() {
		let t = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("schema");
		let n = this.parseConstDirectives(),
			r = this.optionalMany(o.BRACE_L, this.parseOperationTypeDefinition, o.BRACE_R);
		if (n.length === 0 && r.length === 0) throw this.unexpected();
		return this.node(t, {
			kind: c.SCHEMA_EXTENSION,
			directives: n,
			operationTypes: r,
		});
	}
	parseScalarTypeExtension() {
		let t = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("scalar");
		let n = this.parseName(),
			r = this.parseConstDirectives();
		if (r.length === 0) throw this.unexpected();
		return this.node(t, {
			kind: c.SCALAR_TYPE_EXTENSION,
			name: n,
			directives: r,
		});
	}
	parseObjectTypeExtension() {
		let t = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("type");
		let n = this.parseName(),
			r = this.parseImplementsInterfaces(),
			i = this.parseConstDirectives(),
			s = this.parseFieldsDefinition();
		if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected();
		return this.node(t, {
			kind: c.OBJECT_TYPE_EXTENSION,
			name: n,
			interfaces: r,
			directives: i,
			fields: s,
		});
	}
	parseInterfaceTypeExtension() {
		let t = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("interface");
		let n = this.parseName(),
			r = this.parseImplementsInterfaces(),
			i = this.parseConstDirectives(),
			s = this.parseFieldsDefinition();
		if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected();
		return this.node(t, {
			kind: c.INTERFACE_TYPE_EXTENSION,
			name: n,
			interfaces: r,
			directives: i,
			fields: s,
		});
	}
	parseUnionTypeExtension() {
		let t = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("union");
		let n = this.parseName(),
			r = this.parseConstDirectives(),
			i = this.parseUnionMemberTypes();
		if (r.length === 0 && i.length === 0) throw this.unexpected();
		return this.node(t, {
			kind: c.UNION_TYPE_EXTENSION,
			name: n,
			directives: r,
			types: i,
		});
	}
	parseEnumTypeExtension() {
		let t = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("enum");
		let n = this.parseName(),
			r = this.parseConstDirectives(),
			i = this.parseEnumValuesDefinition();
		if (r.length === 0 && i.length === 0) throw this.unexpected();
		return this.node(t, {
			kind: c.ENUM_TYPE_EXTENSION,
			name: n,
			directives: r,
			values: i,
		});
	}
	parseInputObjectTypeExtension() {
		let t = this._lexer.token;
		this.expectKeyword("extend"), this.expectKeyword("input");
		let n = this.parseName(),
			r = this.parseConstDirectives(),
			i = this.parseInputFieldsDefinition();
		if (r.length === 0 && i.length === 0) throw this.unexpected();
		return this.node(t, {
			kind: c.INPUT_OBJECT_TYPE_EXTENSION,
			name: n,
			directives: r,
			fields: i,
		});
	}
	parseDirectiveDefinition() {
		let t = this._lexer.token,
			n = this.parseDescription();
		this.expectKeyword("directive"), this.expectToken(o.AT);
		let r = this.parseName(),
			i = this.parseArgumentDefs(),
			s = this.expectOptionalKeyword("repeatable");
		this.expectKeyword("on");
		let a = this.parseDirectiveLocations();
		return this.node(t, {
			kind: c.DIRECTIVE_DEFINITION,
			description: n,
			name: r,
			arguments: i,
			repeatable: s,
			locations: a,
		});
	}
	parseDirectiveLocations() {
		return this.delimitedMany(o.PIPE, this.parseDirectiveLocation);
	}
	parseDirectiveLocation() {
		let t = this._lexer.token,
			n = this.parseName();
		if (Object.prototype.hasOwnProperty.call(H, n.value)) return n;
		throw this.unexpected(t);
	}
	node(t, n) {
		return this._options.noLocation !== !0 && (n.loc = new J(t, this._lexer.lastToken, this._lexer.source)), n;
	}
	peek(t) {
		return this._lexer.token.kind === t;
	}
	expectToken(t) {
		let n = this._lexer.token;
		if (n.kind === t) return this.advanceLexer(), n;
		throw d(this._lexer.source, n.start, `Expected ${Ze(t)}, found ${ne(n)}.`);
	}
	expectOptionalToken(t) {
		return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
	}
	expectKeyword(t) {
		let n = this._lexer.token;
		if (n.kind === o.NAME && n.value === t) this.advanceLexer();
		else throw d(this._lexer.source, n.start, `Expected "${t}", found ${ne(n)}.`);
	}
	expectOptionalKeyword(t) {
		let n = this._lexer.token;
		return n.kind === o.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
	}
	unexpected(t) {
		let n = t ?? this._lexer.token;
		return d(this._lexer.source, n.start, `Unexpected ${ne(n)}.`);
	}
	any(t, n, r) {
		this.expectToken(t);
		let i = [];
		for (; !this.expectOptionalToken(r); ) i.push(n.call(this));
		return i;
	}
	optionalMany(t, n, r) {
		if (this.expectOptionalToken(t)) {
			let i = [];
			do i.push(n.call(this));
			while (!this.expectOptionalToken(r));
			return i;
		}
		return [];
	}
	many(t, n, r) {
		this.expectToken(t);
		let i = [];
		do i.push(n.call(this));
		while (!this.expectOptionalToken(r));
		return i;
	}
	delimitedMany(t, n) {
		this.expectOptionalToken(t);
		let r = [];
		do r.push(n.call(this));
		while (this.expectOptionalToken(t));
		return r;
	}
	advanceLexer() {
		let { maxTokens: t } = this._options,
			n = this._lexer.advance();
		if (t !== void 0 && n.kind !== o.EOF && (++this._tokenCounter, this._tokenCounter > t)) throw d(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`);
	}
};
function ne(e) {
	let t = e.value;
	return Ze(e.kind) + (t != null ? ` "${t}"` : "");
}
function Ze(e) {
	return qe(e) ? `"${e}"` : e;
}
function Kt(e, t) {
	let n = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
	return Object.assign(n, t);
}
var et = Kt;
function Zt(e) {
	let t = [],
		{ startToken: n, endToken: r } = e.loc;
	for (let i = n; i !== r; i = i.next) i.kind === "Comment" && t.push({ ...i, loc: { start: i.start, end: i.end } });
	return t;
}
var en = { allowLegacyFragmentVariables: !0 };
function tn(e) {
	if ((e == null ? void 0 : e.name) === "GraphQLError") {
		let {
			message: t,
			locations: [n],
		} = e;
		return et(t, { loc: { start: n }, cause: e });
	}
	return e;
}
function nn(e) {
	let t;
	try {
		t = Ke(e, en);
	} catch (n) {
		throw tn(n);
	}
	return (t.comments = Zt(t)), t;
}
var rn = {
	parse: nn,
	astFormat: "graphql",
	hasPragma: Ce,
	locStart: q,
	locEnd: Q,
};
var sn = { graphql: Re };
var fr = Te;
export { fr as default, Pe as languages, we as options, Ee as parsers, sn as printers };
