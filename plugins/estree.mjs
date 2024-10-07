var Wa = Object.defineProperty;
var Js = (e) => {
	throw TypeError(e);
};
var Ar = (e, t) => {
	for (var r in t) Wa(e, r, { get: t[r], enumerable: !0 });
};
var qs = (e, t, r) => t.has(e) || Js("Cannot " + r);
var pt = (e, t, r) => (qs(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
	Ws = (e, t, r) => (t.has(e) ? Js("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r)),
	Gs = (e, t, r, n) => (qs(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var _s = {};
Ar(_s, { languages: () => nm, options: () => va, printers: () => rm });
var Us = [
	{
		linguistLanguageId: 183,
		name: "JavaScript",
		type: "programming",
		tmScope: "source.js",
		aceMode: "javascript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "text/javascript",
		color: "#f1e05a",
		aliases: ["js", "node"],
		extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib", ".wxs"],
		filenames: ["Jakefile"],
		interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell", "zx"],
		parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"],
		vscodeLanguageIds: ["javascript", "mongo"],
	},
	{
		linguistLanguageId: 183,
		name: "Flow",
		type: "programming",
		tmScope: "source.js",
		aceMode: "javascript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "text/javascript",
		color: "#f1e05a",
		aliases: [],
		extensions: [".js.flow"],
		filenames: [],
		interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"],
		parsers: ["flow", "babel-flow"],
		vscodeLanguageIds: ["javascript"],
	},
	{
		linguistLanguageId: 183,
		name: "JSX",
		type: "programming",
		tmScope: "source.js.jsx",
		aceMode: "javascript",
		codemirrorMode: "jsx",
		codemirrorMimeType: "text/jsx",
		color: void 0,
		aliases: void 0,
		extensions: [".jsx"],
		filenames: void 0,
		interpreters: void 0,
		parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"],
		vscodeLanguageIds: ["javascriptreact"],
		group: "JavaScript",
	},
	{
		linguistLanguageId: 378,
		name: "TypeScript",
		type: "programming",
		color: "#3178c6",
		aliases: ["ts"],
		interpreters: ["deno", "ts-node"],
		extensions: [".ts", ".cts", ".mts"],
		tmScope: "source.ts",
		aceMode: "typescript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "application/typescript",
		parsers: ["typescript", "babel-ts"],
		vscodeLanguageIds: ["typescript"],
	},
	{
		linguistLanguageId: 94901924,
		name: "TSX",
		type: "programming",
		color: "#3178c6",
		group: "TypeScript",
		extensions: [".tsx"],
		tmScope: "source.tsx",
		aceMode: "javascript",
		codemirrorMode: "jsx",
		codemirrorMimeType: "text/jsx",
		parsers: ["typescript", "babel-ts"],
		vscodeLanguageIds: ["typescriptreact"],
	},
];
var ws = {};
Ar(ws, {
	canAttachComment: () => fp,
	embed: () => Qu,
	experimentalFeatures: () => Kl,
	getCommentChildNodes: () => Ep,
	getVisitorKeys: () => gr,
	handleComments: () => Kn,
	insertPragma: () => pi,
	isBlockComment: () => re,
	isGap: () => Fp,
	massageAstNode: () => Cu,
	print: () => Ia,
	printComment: () => Pu,
	willPrintOwnComments: () => zn,
});
var Ga = (e, t, r, n) => {
		if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
	},
	N = Ga;
var Ua = (e, t, r) => {
		if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
	},
	O = Ua;
function Na(e) {
	return e !== null && typeof e == "object";
}
var Ns = Na;
function* Xa(e, t) {
	let { getVisitorKeys: r, filter: n = () => !0 } = t,
		s = (u) => Ns(u) && n(u);
	for (let u of r(e)) {
		let i = e[u];
		if (Array.isArray(i)) for (let a of i) s(a) && (yield a);
		else s(i) && (yield i);
	}
}
function* Ya(e, t) {
	let r = [e];
	for (let n = 0; n < r.length; n++) {
		let s = r[n];
		for (let u of Xa(s, t)) yield u, r.push(u);
	}
}
function Xs(e, { getVisitorKeys: t, predicate: r }) {
	for (let n of Ya(e, { getVisitorKeys: t })) if (r(n)) return !0;
	return !1;
}
var Ys = () =>
	/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function Hs(e) {
	return e === 12288 || (e >= 65281 && e <= 65376) || (e >= 65504 && e <= 65510);
}
function Vs(e) {
	return (
		(e >= 4352 && e <= 4447) ||
		e === 8986 ||
		e === 8987 ||
		e === 9001 ||
		e === 9002 ||
		(e >= 9193 && e <= 9196) ||
		e === 9200 ||
		e === 9203 ||
		e === 9725 ||
		e === 9726 ||
		e === 9748 ||
		e === 9749 ||
		(e >= 9800 && e <= 9811) ||
		e === 9855 ||
		e === 9875 ||
		e === 9889 ||
		e === 9898 ||
		e === 9899 ||
		e === 9917 ||
		e === 9918 ||
		e === 9924 ||
		e === 9925 ||
		e === 9934 ||
		e === 9940 ||
		e === 9962 ||
		e === 9970 ||
		e === 9971 ||
		e === 9973 ||
		e === 9978 ||
		e === 9981 ||
		e === 9989 ||
		e === 9994 ||
		e === 9995 ||
		e === 10024 ||
		e === 10060 ||
		e === 10062 ||
		(e >= 10067 && e <= 10069) ||
		e === 10071 ||
		(e >= 10133 && e <= 10135) ||
		e === 10160 ||
		e === 10175 ||
		e === 11035 ||
		e === 11036 ||
		e === 11088 ||
		e === 11093 ||
		(e >= 11904 && e <= 11929) ||
		(e >= 11931 && e <= 12019) ||
		(e >= 12032 && e <= 12245) ||
		(e >= 12272 && e <= 12287) ||
		(e >= 12289 && e <= 12350) ||
		(e >= 12353 && e <= 12438) ||
		(e >= 12441 && e <= 12543) ||
		(e >= 12549 && e <= 12591) ||
		(e >= 12593 && e <= 12686) ||
		(e >= 12688 && e <= 12771) ||
		(e >= 12783 && e <= 12830) ||
		(e >= 12832 && e <= 12871) ||
		(e >= 12880 && e <= 19903) ||
		(e >= 19968 && e <= 42124) ||
		(e >= 42128 && e <= 42182) ||
		(e >= 43360 && e <= 43388) ||
		(e >= 44032 && e <= 55203) ||
		(e >= 63744 && e <= 64255) ||
		(e >= 65040 && e <= 65049) ||
		(e >= 65072 && e <= 65106) ||
		(e >= 65108 && e <= 65126) ||
		(e >= 65128 && e <= 65131) ||
		(e >= 94176 && e <= 94180) ||
		e === 94192 ||
		e === 94193 ||
		(e >= 94208 && e <= 100343) ||
		(e >= 100352 && e <= 101589) ||
		(e >= 101632 && e <= 101640) ||
		(e >= 110576 && e <= 110579) ||
		(e >= 110581 && e <= 110587) ||
		e === 110589 ||
		e === 110590 ||
		(e >= 110592 && e <= 110882) ||
		e === 110898 ||
		(e >= 110928 && e <= 110930) ||
		e === 110933 ||
		(e >= 110948 && e <= 110951) ||
		(e >= 110960 && e <= 111355) ||
		e === 126980 ||
		e === 127183 ||
		e === 127374 ||
		(e >= 127377 && e <= 127386) ||
		(e >= 127488 && e <= 127490) ||
		(e >= 127504 && e <= 127547) ||
		(e >= 127552 && e <= 127560) ||
		e === 127568 ||
		e === 127569 ||
		(e >= 127584 && e <= 127589) ||
		(e >= 127744 && e <= 127776) ||
		(e >= 127789 && e <= 127797) ||
		(e >= 127799 && e <= 127868) ||
		(e >= 127870 && e <= 127891) ||
		(e >= 127904 && e <= 127946) ||
		(e >= 127951 && e <= 127955) ||
		(e >= 127968 && e <= 127984) ||
		e === 127988 ||
		(e >= 127992 && e <= 128062) ||
		e === 128064 ||
		(e >= 128066 && e <= 128252) ||
		(e >= 128255 && e <= 128317) ||
		(e >= 128331 && e <= 128334) ||
		(e >= 128336 && e <= 128359) ||
		e === 128378 ||
		e === 128405 ||
		e === 128406 ||
		e === 128420 ||
		(e >= 128507 && e <= 128591) ||
		(e >= 128640 && e <= 128709) ||
		e === 128716 ||
		(e >= 128720 && e <= 128722) ||
		(e >= 128725 && e <= 128727) ||
		(e >= 128732 && e <= 128735) ||
		e === 128747 ||
		e === 128748 ||
		(e >= 128756 && e <= 128764) ||
		(e >= 128992 && e <= 129003) ||
		e === 129008 ||
		(e >= 129292 && e <= 129338) ||
		(e >= 129340 && e <= 129349) ||
		(e >= 129351 && e <= 129535) ||
		(e >= 129648 && e <= 129660) ||
		(e >= 129664 && e <= 129672) ||
		(e >= 129680 && e <= 129725) ||
		(e >= 129727 && e <= 129733) ||
		(e >= 129742 && e <= 129755) ||
		(e >= 129760 && e <= 129768) ||
		(e >= 129776 && e <= 129784) ||
		(e >= 131072 && e <= 196605) ||
		(e >= 196608 && e <= 262141)
	);
}
var $s = (e) => !(Hs(e) || Vs(e));
var Ha = /[^\x20-\x7F]/u;
function Va(e) {
	if (!e) return 0;
	if (!Ha.test(e)) return e.length;
	e = e.replace(Ys(), "  ");
	let t = 0;
	for (let r of e) {
		let n = r.codePointAt(0);
		n <= 31 || (n >= 127 && n <= 159) || (n >= 768 && n <= 879) || (t += $s(n) ? 1 : 2);
	}
	return t;
}
var et = Va;
function Tr(e) {
	return (t, r, n) => {
		let s = !!(n != null && n.backwards);
		if (r === !1) return !1;
		let { length: u } = t,
			i = r;
		for (; i >= 0 && i < u; ) {
			let a = t.charAt(i);
			if (e instanceof RegExp) {
				if (!e.test(a)) return i;
			} else if (!e.includes(a)) return i;
			s ? i-- : i++;
		}
		return i === -1 || i === u ? i : !1;
	};
}
var dm = Tr(/\s/u),
	Ge = Tr(" 	"),
	Ks = Tr(",; 	"),
	zs = Tr(/[^\n\r]/u);
function $a(e, t, r) {
	let n = !!(r != null && r.backwards);
	if (t === !1) return !1;
	let s = e.charAt(t);
	if (n) {
		if (
			e.charAt(t - 1) === "\r" &&
			s ===
				`
`
		)
			return t - 2;
		if (
			s ===
				`
` ||
			s === "\r" ||
			s === "\u2028" ||
			s === "\u2029"
		)
			return t - 1;
	} else {
		if (
			s === "\r" &&
			e.charAt(t + 1) ===
				`
`
		)
			return t + 2;
		if (
			s ===
				`
` ||
			s === "\r" ||
			s === "\u2028" ||
			s === "\u2029"
		)
			return t + 1;
	}
	return t;
}
var Ue = $a;
function Ka(e, t, r = {}) {
	let n = Ge(e, r.backwards ? t - 1 : t, r),
		s = Ue(e, n, r);
	return n !== s;
}
var te = Ka;
function za(e, t) {
	if (t === !1) return !1;
	if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
		for (let r = t + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
	}
	return t;
}
var Lt = za;
function Qa(e, t) {
	return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? zs(e, t) : t;
}
var wt = Qa;
function Za(e, t) {
	let r = null,
		n = t;
	for (; n !== r; ) (r = n), (n = Ks(e, n)), (n = Lt(e, n)), (n = Ge(e, n));
	return (n = wt(e, n)), (n = Ue(e, n)), n !== !1 && te(e, n);
}
var Ot = Za;
function eo(e) {
	return Array.isArray(e) && e.length > 0;
}
var w = eo;
var dr = "'",
	Qs = '"';
function to(e, t) {
	let r = t === !0 || t === dr ? dr : Qs,
		n = r === dr ? Qs : dr,
		s = 0,
		u = 0;
	for (let i of e) i === r ? s++ : i === n && u++;
	return s > u ? n : r;
}
var xr = to;
function ro(e, t, r) {
	let n = t === '"' ? "'" : '"',
		u = N(!1, e, /\\(.)|(["'])/gsu, (i, a, o) => (a === n ? a : o === t ? "\\" + o : o || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(a) ? a : "\\" + a)));
	return t + u + t;
}
var Zs = ro;
function no(e, t) {
	let r = e.slice(1, -1),
		n = t.parser === "json" || t.parser === "jsonc" || (t.parser === "json5" && t.quoteProps === "preserve" && !t.singleQuote) ? '"' : t.__isInHtmlAttribute ? "'" : xr(r, t.singleQuote);
	return Zs(r, n, !(t.parser === "css" || t.parser === "less" || t.parser === "scss" || t.__embeddedInHtml));
}
var tt = no;
function R(e) {
	var n, s, u;
	let t = ((n = e.range) == null ? void 0 : n[0]) ?? e.start,
		r = (u = ((s = e.declaration) == null ? void 0 : s.decorators) ?? e.decorators) == null ? void 0 : u[0];
	return r ? Math.min(R(r), t) : t;
}
function k(e) {
	var t;
	return ((t = e.range) == null ? void 0 : t[1]) ?? e.end;
}
function ht(e, t) {
	let r = R(e);
	return Number.isInteger(r) && r === R(t);
}
function so(e, t) {
	let r = k(e);
	return Number.isInteger(r) && r === k(t);
}
function eu(e, t) {
	return ht(e, t) && so(e, t);
}
var Qt = null;
function Zt(e) {
	if (Qt !== null && typeof Qt.property) {
		let t = Qt;
		return (Qt = Zt.prototype = null), t;
	}
	return (Qt = Zt.prototype = e ?? Object.create(null)), new Zt();
}
var uo = 10;
for (let e = 0; e <= uo; e++) Zt();
function In(e) {
	return Zt(e);
}
function io(e, t = "type") {
	In(e);
	function r(n) {
		let s = n[t],
			u = e[s];
		if (!Array.isArray(u))
			throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), {
				node: n,
			});
		return u;
	}
	return r;
}
var hr = io;
var tu = {
	ArrayExpression: ["elements"],
	AssignmentExpression: ["left", "right"],
	BinaryExpression: ["left", "right"],
	InterpreterDirective: [],
	Directive: ["value"],
	DirectiveLiteral: [],
	BlockStatement: ["directives", "body"],
	BreakStatement: ["label"],
	CallExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
	CatchClause: ["param", "body"],
	ConditionalExpression: ["test", "consequent", "alternate"],
	ContinueStatement: ["label"],
	DebuggerStatement: [],
	DoWhileStatement: ["test", "body"],
	EmptyStatement: [],
	ExpressionStatement: ["expression"],
	File: ["program"],
	ForInStatement: ["left", "right", "body"],
	ForStatement: ["init", "test", "update", "body"],
	FunctionDeclaration: ["id", "params", "body", "returnType", "typeParameters", "predicate"],
	FunctionExpression: ["id", "params", "body", "returnType", "typeParameters"],
	Identifier: ["typeAnnotation", "decorators"],
	IfStatement: ["test", "consequent", "alternate"],
	LabeledStatement: ["label", "body"],
	StringLiteral: [],
	NumericLiteral: [],
	NullLiteral: [],
	BooleanLiteral: [],
	RegExpLiteral: [],
	LogicalExpression: ["left", "right"],
	MemberExpression: ["object", "property"],
	NewExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
	Program: ["directives", "body"],
	ObjectExpression: ["properties"],
	ObjectMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
	ObjectProperty: ["key", "value", "decorators"],
	RestElement: ["argument", "typeAnnotation", "decorators"],
	ReturnStatement: ["argument"],
	SequenceExpression: ["expressions"],
	ParenthesizedExpression: ["expression"],
	SwitchCase: ["test", "consequent"],
	SwitchStatement: ["discriminant", "cases"],
	ThisExpression: [],
	ThrowStatement: ["argument"],
	TryStatement: ["block", "handler", "finalizer"],
	UnaryExpression: ["argument"],
	UpdateExpression: ["argument"],
	VariableDeclaration: ["declarations"],
	VariableDeclarator: ["id", "init"],
	WhileStatement: ["test", "body"],
	WithStatement: ["object", "body"],
	AssignmentPattern: ["left", "right", "decorators", "typeAnnotation"],
	ArrayPattern: ["elements", "typeAnnotation", "decorators"],
	ArrowFunctionExpression: ["params", "body", "returnType", "typeParameters", "predicate"],
	ClassBody: ["body"],
	ClassExpression: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators", "superTypeArguments"],
	ClassDeclaration: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators", "superTypeArguments"],
	ExportAllDeclaration: ["source", "attributes", "exported"],
	ExportDefaultDeclaration: ["declaration"],
	ExportNamedDeclaration: ["declaration", "specifiers", "source", "attributes"],
	ExportSpecifier: ["local", "exported"],
	ForOfStatement: ["left", "right", "body"],
	ImportDeclaration: ["specifiers", "source", "attributes"],
	ImportDefaultSpecifier: ["local"],
	ImportNamespaceSpecifier: ["local"],
	ImportSpecifier: ["local", "imported"],
	ImportExpression: ["source", "options", "attributes"],
	MetaProperty: ["meta", "property"],
	ClassMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
	ObjectPattern: ["properties", "typeAnnotation", "decorators"],
	SpreadElement: ["argument"],
	Super: [],
	TaggedTemplateExpression: ["tag", "quasi", "typeParameters", "typeArguments"],
	TemplateElement: [],
	TemplateLiteral: ["quasis", "expressions"],
	YieldExpression: ["argument"],
	AwaitExpression: ["argument"],
	Import: [],
	BigIntLiteral: [],
	ExportNamespaceSpecifier: ["exported"],
	OptionalMemberExpression: ["object", "property"],
	OptionalCallExpression: ["callee", "arguments", "typeParameters", "typeArguments"],
	ClassProperty: ["key", "value", "typeAnnotation", "decorators", "variance"],
	ClassAccessorProperty: ["key", "value", "typeAnnotation", "decorators"],
	ClassPrivateProperty: ["key", "value", "decorators", "typeAnnotation", "variance"],
	ClassPrivateMethod: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
	PrivateName: ["id"],
	StaticBlock: ["body"],
	AnyTypeAnnotation: [],
	ArrayTypeAnnotation: ["elementType"],
	BooleanTypeAnnotation: [],
	BooleanLiteralTypeAnnotation: [],
	NullLiteralTypeAnnotation: [],
	ClassImplements: ["id", "typeParameters"],
	DeclareClass: ["id", "typeParameters", "extends", "mixins", "implements", "body"],
	DeclareFunction: ["id", "predicate"],
	DeclareInterface: ["id", "typeParameters", "extends", "body"],
	DeclareModule: ["id", "body"],
	DeclareModuleExports: ["typeAnnotation"],
	DeclareTypeAlias: ["id", "typeParameters", "right"],
	DeclareOpaqueType: ["id", "typeParameters", "supertype"],
	DeclareVariable: ["id"],
	DeclareExportDeclaration: ["declaration", "specifiers", "source"],
	DeclareExportAllDeclaration: ["source"],
	DeclaredPredicate: ["value"],
	ExistsTypeAnnotation: [],
	FunctionTypeAnnotation: ["typeParameters", "params", "rest", "returnType", "this"],
	FunctionTypeParam: ["name", "typeAnnotation"],
	GenericTypeAnnotation: ["id", "typeParameters"],
	InferredPredicate: [],
	InterfaceExtends: ["id", "typeParameters"],
	InterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
	InterfaceTypeAnnotation: ["extends", "body"],
	IntersectionTypeAnnotation: ["types"],
	MixedTypeAnnotation: [],
	EmptyTypeAnnotation: [],
	NullableTypeAnnotation: ["typeAnnotation"],
	NumberLiteralTypeAnnotation: [],
	NumberTypeAnnotation: [],
	ObjectTypeAnnotation: ["properties", "indexers", "callProperties", "internalSlots"],
	ObjectTypeInternalSlot: ["id", "value"],
	ObjectTypeCallProperty: ["value"],
	ObjectTypeIndexer: ["id", "key", "value", "variance"],
	ObjectTypeProperty: ["key", "value", "variance"],
	ObjectTypeSpreadProperty: ["argument"],
	OpaqueType: ["id", "typeParameters", "supertype", "impltype"],
	QualifiedTypeIdentifier: ["id", "qualification"],
	StringLiteralTypeAnnotation: [],
	StringTypeAnnotation: [],
	SymbolTypeAnnotation: [],
	ThisTypeAnnotation: [],
	TupleTypeAnnotation: ["types", "elementTypes"],
	TypeofTypeAnnotation: ["argument", "typeArguments"],
	TypeAlias: ["id", "typeParameters", "right"],
	TypeAnnotation: ["typeAnnotation"],
	TypeCastExpression: ["expression", "typeAnnotation"],
	TypeParameter: ["bound", "default", "variance"],
	TypeParameterDeclaration: ["params"],
	TypeParameterInstantiation: ["params"],
	UnionTypeAnnotation: ["types"],
	Variance: [],
	VoidTypeAnnotation: [],
	EnumDeclaration: ["id", "body"],
	EnumBooleanBody: ["members"],
	EnumNumberBody: ["members"],
	EnumStringBody: ["members"],
	EnumSymbolBody: ["members"],
	EnumBooleanMember: ["id", "init"],
	EnumNumberMember: ["id", "init"],
	EnumStringMember: ["id", "init"],
	EnumDefaultedMember: ["id"],
	IndexedAccessType: ["objectType", "indexType"],
	OptionalIndexedAccessType: ["objectType", "indexType"],
	JSXAttribute: ["name", "value"],
	JSXClosingElement: ["name"],
	JSXElement: ["openingElement", "children", "closingElement"],
	JSXEmptyExpression: [],
	JSXExpressionContainer: ["expression"],
	JSXSpreadChild: ["expression"],
	JSXIdentifier: [],
	JSXMemberExpression: ["object", "property"],
	JSXNamespacedName: ["namespace", "name"],
	JSXOpeningElement: ["name", "attributes", "typeArguments", "typeParameters"],
	JSXSpreadAttribute: ["argument"],
	JSXText: [],
	JSXFragment: ["openingFragment", "children", "closingFragment"],
	JSXOpeningFragment: [],
	JSXClosingFragment: [],
	Noop: [],
	Placeholder: [],
	V8IntrinsicIdentifier: [],
	ArgumentPlaceholder: [],
	BindExpression: ["object", "callee"],
	ImportAttribute: ["key", "value"],
	Decorator: ["expression"],
	DoExpression: ["body"],
	ExportDefaultSpecifier: ["exported"],
	RecordExpression: ["properties"],
	TupleExpression: ["elements"],
	DecimalLiteral: [],
	ModuleExpression: ["body"],
	TopicReference: [],
	PipelineTopicExpression: ["expression"],
	PipelineBareFunction: ["callee"],
	PipelinePrimaryTopicReference: [],
	TSParameterProperty: ["parameter", "decorators"],
	TSDeclareFunction: ["id", "typeParameters", "params", "returnType", "body"],
	TSDeclareMethod: ["decorators", "key", "typeParameters", "params", "returnType"],
	TSQualifiedName: ["left", "right"],
	TSCallSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
	TSConstructSignatureDeclaration: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
	TSPropertySignature: ["key", "typeAnnotation"],
	TSMethodSignature: ["key", "typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
	TSIndexSignature: ["parameters", "typeAnnotation"],
	TSAnyKeyword: [],
	TSBooleanKeyword: [],
	TSBigIntKeyword: [],
	TSIntrinsicKeyword: [],
	TSNeverKeyword: [],
	TSNullKeyword: [],
	TSNumberKeyword: [],
	TSObjectKeyword: [],
	TSStringKeyword: [],
	TSSymbolKeyword: [],
	TSUndefinedKeyword: [],
	TSUnknownKeyword: [],
	TSVoidKeyword: [],
	TSThisType: [],
	TSFunctionType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
	TSConstructorType: ["typeParameters", "parameters", "typeAnnotation", "params", "returnType"],
	TSTypeReference: ["typeName", "typeParameters", "typeArguments"],
	TSTypePredicate: ["parameterName", "typeAnnotation"],
	TSTypeQuery: ["exprName", "typeParameters", "typeArguments"],
	TSTypeLiteral: ["members"],
	TSArrayType: ["elementType"],
	TSTupleType: ["elementTypes"],
	TSOptionalType: ["typeAnnotation"],
	TSRestType: ["typeAnnotation"],
	TSNamedTupleMember: ["label", "elementType"],
	TSUnionType: ["types"],
	TSIntersectionType: ["types"],
	TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"],
	TSInferType: ["typeParameter"],
	TSParenthesizedType: ["typeAnnotation"],
	TSTypeOperator: ["typeAnnotation"],
	TSIndexedAccessType: ["objectType", "indexType"],
	TSMappedType: ["typeParameter", "typeAnnotation", "nameType"],
	TSLiteralType: ["literal"],
	TSExpressionWithTypeArguments: ["expression", "typeParameters"],
	TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
	TSInterfaceBody: ["body"],
	TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"],
	TSInstantiationExpression: ["expression", "typeParameters", "typeArguments"],
	TSAsExpression: ["expression", "typeAnnotation"],
	TSSatisfiesExpression: ["expression", "typeAnnotation"],
	TSTypeAssertion: ["typeAnnotation", "expression"],
	TSEnumDeclaration: ["id", "members"],
	TSEnumMember: ["id", "initializer"],
	TSModuleDeclaration: ["id", "body"],
	TSModuleBlock: ["body"],
	TSImportType: ["argument", "qualifier", "typeParameters", "typeArguments"],
	TSImportEqualsDeclaration: ["id", "moduleReference"],
	TSExternalModuleReference: ["expression"],
	TSNonNullExpression: ["expression"],
	TSExportAssignment: ["expression"],
	TSNamespaceExportDeclaration: ["id"],
	TSTypeAnnotation: ["typeAnnotation"],
	TSTypeParameterInstantiation: ["params"],
	TSTypeParameterDeclaration: ["params"],
	TSTypeParameter: ["constraint", "default", "name"],
	ChainExpression: ["expression"],
	ExperimentalRestProperty: ["argument"],
	ExperimentalSpreadProperty: ["argument"],
	Literal: [],
	MethodDefinition: ["decorators", "key", "value"],
	PrivateIdentifier: [],
	Property: ["key", "value"],
	PropertyDefinition: ["decorators", "key", "typeAnnotation", "value", "variance"],
	AccessorProperty: ["decorators", "key", "typeAnnotation", "value"],
	TSAbstractAccessorProperty: ["decorators", "key", "typeAnnotation"],
	TSAbstractKeyword: [],
	TSAbstractMethodDefinition: ["key", "value"],
	TSAbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"],
	TSAsyncKeyword: [],
	TSClassImplements: ["expression", "typeArguments", "typeParameters"],
	TSDeclareKeyword: [],
	TSEmptyBodyFunctionExpression: ["id", "typeParameters", "params", "returnType"],
	TSEnumBody: ["members"],
	TSExportKeyword: [],
	TSInterfaceHeritage: ["expression", "typeArguments", "typeParameters"],
	TSPrivateKeyword: [],
	TSProtectedKeyword: [],
	TSPublicKeyword: [],
	TSReadonlyKeyword: [],
	TSStaticKeyword: [],
	TSTemplateLiteralType: ["quasis", "types"],
	AsConstExpression: ["expression"],
	AsExpression: ["expression", "typeAnnotation"],
	BigIntLiteralTypeAnnotation: [],
	BigIntTypeAnnotation: [],
	ComponentDeclaration: ["id", "params", "body", "typeParameters", "rendersType"],
	ComponentParameter: ["name", "local"],
	ComponentTypeAnnotation: ["params", "rest", "typeParameters", "rendersType"],
	ComponentTypeParameter: ["name", "typeAnnotation"],
	ConditionalTypeAnnotation: ["checkType", "extendsType", "trueType", "falseType"],
	DeclareComponent: ["id", "params", "rest", "typeParameters", "rendersType"],
	DeclareEnum: ["id", "body"],
	DeclareHook: ["id"],
	DeclareNamespace: ["id", "body"],
	EnumBigIntBody: ["members"],
	EnumBigIntMember: ["id", "init"],
	HookDeclaration: ["id", "params", "body", "typeParameters", "returnType"],
	HookTypeAnnotation: ["params", "returnType", "rest", "typeParameters"],
	InferTypeAnnotation: ["typeParameter"],
	KeyofTypeAnnotation: ["argument"],
	ObjectTypeMappedTypeProperty: ["keyTparam", "propType", "sourceType", "variance"],
	QualifiedTypeofIdentifier: ["qualification", "id"],
	TupleTypeLabeledElement: ["label", "elementType", "variance"],
	TupleTypeSpreadElement: ["label", "typeAnnotation"],
	TypeOperator: ["typeAnnotation"],
	TypePredicate: ["parameterName", "typeAnnotation", "asserts"],
	NGRoot: ["node"],
	NGPipeExpression: ["left", "right", "arguments"],
	NGChainedExpression: ["expressions"],
	NGEmptyExpression: [],
	NGMicrosyntax: ["body"],
	NGMicrosyntaxKey: [],
	NGMicrosyntaxExpression: ["expression", "alias"],
	NGMicrosyntaxKeyedExpression: ["key", "expression"],
	NGMicrosyntaxLet: ["key", "value"],
	NGMicrosyntaxAs: ["key", "alias"],
	JsExpressionRoot: ["node"],
	JsonRoot: ["node"],
	TSJSDocAllType: [],
	TSJSDocUnknownType: [],
	TSJSDocNullableType: ["typeAnnotation"],
	TSJSDocNonNullableType: ["typeAnnotation"],
	NeverTypeAnnotation: [],
	UndefinedTypeAnnotation: [],
	UnknownTypeAnnotation: [],
	SatisfiesExpression: ["expression", "typeAnnotation"],
};
var ao = hr(tu),
	gr = ao;
function oo(e) {
	let t = new Set(e);
	return (r) => t.has(r == null ? void 0 : r.type);
}
var v = oo;
var po = v(["Block", "CommentBlock", "MultiLine"]),
	re = po;
var co = v(["AnyTypeAnnotation", "ThisTypeAnnotation", "NumberTypeAnnotation", "VoidTypeAnnotation", "BooleanTypeAnnotation", "BigIntTypeAnnotation", "SymbolTypeAnnotation", "StringTypeAnnotation", "NeverTypeAnnotation", "UndefinedTypeAnnotation", "UnknownTypeAnnotation", "EmptyTypeAnnotation", "MixedTypeAnnotation"]),
	Sr = co;
function lo(e, t) {
	let r = t.split(".");
	for (let n = r.length - 1; n >= 0; n--) {
		let s = r[n];
		if (n === 0) return e.type === "Identifier" && e.name === s;
		if (e.type !== "MemberExpression" || e.optional || e.computed || e.property.type !== "Identifier" || e.property.name !== s) return !1;
		e = e.object;
	}
}
function mo(e, t) {
	return t.some((r) => lo(e, r));
}
var ru = mo;
function yo({ type: e }) {
	return e.startsWith("TS") && e.endsWith("Keyword");
}
var Br = yo;
function tr(e, t) {
	return t(e) || Xs(e, { getVisitorKeys: gr, predicate: t });
}
function jt(e) {
	return e.type === "AssignmentExpression" || e.type === "BinaryExpression" || e.type === "LogicalExpression" || e.type === "NGPipeExpression" || e.type === "ConditionalExpression" || L(e) || q(e) || e.type === "SequenceExpression" || e.type === "TaggedTemplateExpression" || e.type === "BindExpression" || (e.type === "UpdateExpression" && !e.prefix) || Te(e) || e.type === "TSNonNullExpression" || e.type === "ChainExpression";
}
function uu(e) {
	return e.expressions ? e.expressions[0] : (e.left ?? e.test ?? e.callee ?? e.object ?? e.tag ?? e.argument ?? e.expression);
}
function Pr(e) {
	if (e.expressions) return ["expressions", 0];
	if (e.left) return ["left"];
	if (e.test) return ["test"];
	if (e.object) return ["object"];
	if (e.callee) return ["callee"];
	if (e.tag) return ["tag"];
	if (e.argument) return ["argument"];
	if (e.expression) return ["expression"];
	throw new Error("Unexpected node has no left side.");
}
var vt = v(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose", "Hashbang", "InterpreterDirective"]),
	iu = v(["ExportDefaultDeclaration", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration", "DeclareExportAllDeclaration"]),
	U = v(["ArrayExpression", "TupleExpression"]),
	se = v(["ObjectExpression", "RecordExpression"]);
function au(e) {
	return e.type === "LogicalExpression" && e.operator === "??";
}
function Ce(e) {
	return e.type === "NumericLiteral" || (e.type === "Literal" && typeof e.value == "number");
}
function jn(e) {
	return e.type === "UnaryExpression" && (e.operator === "+" || e.operator === "-") && Ce(e.argument);
}
function Q(e) {
	return !!(e && (e.type === "StringLiteral" || (e.type === "Literal" && typeof e.value == "string")));
}
function vn(e) {
	return e.type === "RegExpLiteral" || (e.type === "Literal" && !!e.regex);
}
var kr = v(["Literal", "BooleanLiteral", "BigIntLiteral", "DecimalLiteral", "DirectiveLiteral", "NullLiteral", "NumericLiteral", "RegExpLiteral", "StringLiteral"]),
	Do = v(["Identifier", "ThisExpression", "Super", "PrivateName", "PrivateIdentifier", "Import"]),
	we = v(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]),
	_t = v(["FunctionExpression", "ArrowFunctionExpression"]);
function fo(e) {
	return e.type === "FunctionExpression" || (e.type === "ArrowFunctionExpression" && e.body.type === "BlockStatement");
}
function Ln(e) {
	return L(e) && e.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(e.callee.name);
}
var X = v(["JSXElement", "JSXFragment"]);
function gt(e) {
	return (e.method && e.kind === "init") || e.kind === "get" || e.kind === "set";
}
function Ir(e) {
	return (e.type === "ObjectTypeProperty" || e.type === "ObjectTypeInternalSlot") && !e.static && !e.method && e.kind !== "get" && e.kind !== "set" && e.value.type === "FunctionTypeAnnotation";
}
function ou(e) {
	return (e.type === "TypeAnnotation" || e.type === "TSTypeAnnotation") && e.typeAnnotation.type === "FunctionTypeAnnotation" && !e.static && !ht(e, e.typeAnnotation);
}
var De = v(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
function Ft(e) {
	return q(e) || (e.type === "BindExpression" && !!e.object);
}
var Eo = v(["TSThisType", "NullLiteralTypeAnnotation", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType"]);
function Mt(e) {
	return Br(e) || Sr(e) || Eo(e) || ((e.type === "GenericTypeAnnotation" || e.type === "TSTypeReference") && !e.typeParameters && !e.typeArguments);
}
function Fo(e) {
	return e.type === "Identifier" && (e.name === "beforeEach" || e.name === "beforeAll" || e.name === "afterEach" || e.name === "afterAll");
}
var Co = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
function Ao(e) {
	return ru(e, Co);
}
function St(e, t) {
	if ((e == null ? void 0 : e.type) !== "CallExpression" || e.optional) return !1;
	let r = oe(e);
	if (r.length === 1) {
		if (Ln(e) && St(t)) return _t(r[0]);
		if (Fo(e.callee)) return Ln(r[0]);
	} else if ((r.length === 2 || r.length === 3) && (r[0].type === "TemplateLiteral" || Q(r[0])) && Ao(e.callee)) return r[2] && !Ce(r[2]) ? !1 : (r.length === 2 ? _t(r[1]) : fo(r[1]) && K(r[1]).length <= 1) || Ln(r[1]);
	return !1;
}
var pu = (e) => (t) => ((t == null ? void 0 : t.type) === "ChainExpression" && (t = t.expression), e(t)),
	L = pu(v(["CallExpression", "OptionalCallExpression"])),
	q = pu(v(["MemberExpression", "OptionalMemberExpression"]));
function Mn(e, t = 5) {
	return cu(e, t) <= t;
}
function cu(e, t) {
	let r = 0;
	for (let n in e) {
		let s = e[n];
		if ((s && typeof s == "object" && typeof s.type == "string" && (r++, (r += cu(s, t - r))), r > t)) return r;
	}
	return r;
}
var To = 0.25;
function rr(e, t) {
	let { printWidth: r } = t;
	if (d(e)) return !1;
	let n = r * To;
	if (e.type === "ThisExpression" || (e.type === "Identifier" && e.name.length <= n) || (jn(e) && !d(e.argument))) return !0;
	let s = (e.type === "Literal" && "regex" in e && e.regex.pattern) || (e.type === "RegExpLiteral" && e.pattern);
	return s
		? s.length <= n
		: Q(e)
			? tt(fe(e), t).length <= n
			: e.type === "TemplateLiteral"
				? e.expressions.length === 0 &&
					e.quasis[0].value.raw.length <= n &&
					!e.quasis[0].value.raw.includes(`
`)
				: e.type === "UnaryExpression"
					? rr(e.argument, { printWidth: r })
					: e.type === "CallExpression" && e.arguments.length === 0 && e.callee.type === "Identifier"
						? e.callee.name.length <= n - 2
						: kr(e);
}
function Oe(e, t) {
	return X(t) ? Bt(t) : d(t, g.Leading, (r) => te(e, k(r)));
}
function nu(e) {
	return e.quasis.some((t) =>
		t.value.raw.includes(`
`),
	);
}
function Lr(e, t) {
	return ((e.type === "TemplateLiteral" && nu(e)) || (e.type === "TaggedTemplateExpression" && nu(e.quasi))) && !te(t, R(e), { backwards: !0 });
}
function wr(e) {
	if (!d(e)) return !1;
	let t = O(!1, ct(e, g.Dangling), -1);
	return t && !re(t);
}
function lu(e) {
	if (e.length <= 1) return !1;
	let t = 0;
	for (let r of e)
		if (_t(r)) {
			if (((t += 1), t > 1)) return !0;
		} else if (L(r)) {
			for (let n of oe(r)) if (_t(n)) return !0;
		}
	return !1;
}
function Or(e) {
	let { node: t, parent: r, key: n } = e;
	return n === "callee" && L(t) && L(r) && r.arguments.length > 0 && t.arguments.length > r.arguments.length;
}
var xo = new Set(["!", "-", "+", "~"]);
function be(e, t = 2) {
	if (t <= 0) return !1;
	if (e.type === "ChainExpression" || e.type === "TSNonNullExpression") return be(e.expression, t);
	let r = (n) => be(n, t - 1);
	if (vn(e)) return et(e.pattern ?? e.regex.pattern) <= 5;
	if (kr(e) || Do(e) || e.type === "ArgumentPlaceholder") return !0;
	if (e.type === "TemplateLiteral")
		return (
			e.quasis.every(
				(n) =>
					!n.value.raw.includes(`
`),
			) && e.expressions.every(r)
		);
	if (se(e)) return e.properties.every((n) => !n.computed && (n.shorthand || (n.value && r(n.value))));
	if (U(e)) return e.elements.every((n) => n === null || r(n));
	if (lt(e)) {
		if (e.type === "ImportExpression" || be(e.callee, t)) {
			let n = oe(e);
			return n.length <= t && n.every(r);
		}
		return !1;
	}
	return q(e) ? be(e.object, t) && be(e.property, t) : (e.type === "UnaryExpression" && xo.has(e.operator)) || e.type === "UpdateExpression" ? be(e.argument, t) : !1;
}
function fe(e) {
	var t;
	return ((t = e.extra) == null ? void 0 : t.raw) ?? e.raw;
}
function mu(e) {
	return e;
}
function ae(e, t = "es5") {
	return (e.trailingComma === "es5" && t === "es5") || (e.trailingComma === "all" && (t === "all" || t === "es5"));
}
function ie(e, t) {
	switch (e.type) {
		case "BinaryExpression":
		case "LogicalExpression":
		case "AssignmentExpression":
		case "NGPipeExpression":
			return ie(e.left, t);
		case "MemberExpression":
		case "OptionalMemberExpression":
			return ie(e.object, t);
		case "TaggedTemplateExpression":
			return e.tag.type === "FunctionExpression" ? !1 : ie(e.tag, t);
		case "CallExpression":
		case "OptionalCallExpression":
			return e.callee.type === "FunctionExpression" ? !1 : ie(e.callee, t);
		case "ConditionalExpression":
			return ie(e.test, t);
		case "UpdateExpression":
			return !e.prefix && ie(e.argument, t);
		case "BindExpression":
			return e.object && ie(e.object, t);
		case "SequenceExpression":
			return ie(e.expressions[0], t);
		case "ChainExpression":
		case "TSSatisfiesExpression":
		case "TSAsExpression":
		case "TSNonNullExpression":
		case "AsExpression":
		case "AsConstExpression":
		case "SatisfiesExpression":
			return ie(e.expression, t);
		default:
			return t(e);
	}
}
var su = { "==": !0, "!=": !0, "===": !0, "!==": !0 },
	br = { "*": !0, "/": !0, "%": !0 },
	_n = { ">>": !0, ">>>": !0, "<<": !0 };
function nr(e, t) {
	return !(er(t) !== er(e) || e === "**" || (su[e] && su[t]) || (t === "%" && br[e]) || (e === "%" && br[t]) || (t !== e && br[t] && br[e]) || (_n[e] && _n[t]));
}
var ho = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((e, t) => e.map((r) => [r, t])));
function er(e) {
	return ho.get(e);
}
function yu(e) {
	return !!_n[e] || e === "|" || e === "^" || e === "&";
}
function Du(e) {
	var r;
	if (e.rest) return !0;
	let t = K(e);
	return ((r = O(!1, t, -1)) == null ? void 0 : r.type) === "RestElement";
}
var wn = new WeakMap();
function K(e) {
	if (wn.has(e)) return wn.get(e);
	let t = [];
	return e.this && t.push(e.this), Array.isArray(e.parameters) ? t.push(...e.parameters) : Array.isArray(e.params) && t.push(...e.params), e.rest && t.push(e.rest), wn.set(e, t), t;
}
function fu(e, t) {
	let { node: r } = e,
		n = 0,
		s = (u) => t(u, n++);
	r.this && e.call(s, "this"), Array.isArray(r.parameters) ? e.each(s, "parameters") : Array.isArray(r.params) && e.each(s, "params"), r.rest && e.call(s, "rest");
}
var On = new WeakMap();
function oe(e) {
	if (On.has(e)) return On.get(e);
	if (e.type === "ChainExpression") return oe(e.expression);
	let t = e.arguments;
	return e.type === "ImportExpression" && ((t = [e.source]), e.attributes && t.push(e.attributes), e.options && t.push(e.options)), On.set(e, t), t;
}
function Rt(e, t) {
	let { node: r } = e;
	if (r.type === "ChainExpression") return e.call(() => Rt(e, t), "expression");
	r.type === "ImportExpression" ? (e.call((n) => t(n, 0), "source"), r.attributes && e.call((n) => t(n, 1), "attributes"), r.options && e.call((n) => t(n, 1), "options")) : e.each(t, "arguments");
}
function Rn(e, t) {
	let r = [];
	if ((e.type === "ChainExpression" && ((e = e.expression), r.push("expression")), e.type === "ImportExpression")) {
		if (t === 0 || t === (e.attributes || e.options ? -2 : -1)) return [...r, "source"];
		if (e.attributes && (t === 1 || t === -1)) return [...r, "attributes"];
		if (e.options && (t === 1 || t === -1)) return [...r, "options"];
		throw new RangeError("Invalid argument index");
	}
	if ((t < 0 && (t = e.arguments.length + t), t < 0 || t >= e.arguments.length)) throw new RangeError("Invalid argument index");
	return [...r, "arguments", t];
}
function sr(e) {
	return e.value.trim() === "prettier-ignore" && !e.unignore;
}
function Bt(e) {
	return (e == null ? void 0 : e.prettierIgnore) || d(e, g.PrettierIgnore);
}
var g = {
		Leading: 2,
		Trailing: 4,
		Dangling: 8,
		Block: 16,
		Line: 32,
		PrettierIgnore: 64,
		First: 128,
		Last: 256,
	},
	Eu = (e, t) => {
		if ((typeof e == "function" && ((t = e), (e = 0)), e || t)) return (r, n, s) => !((e & g.Leading && !r.leading) || (e & g.Trailing && !r.trailing) || (e & g.Dangling && (r.leading || r.trailing)) || (e & g.Block && !re(r)) || (e & g.Line && !vt(r)) || (e & g.First && n !== 0) || (e & g.Last && n !== s.length - 1) || (e & g.PrettierIgnore && !sr(r)) || (t && !t(r)));
	};
function d(e, t, r) {
	if (!w(e == null ? void 0 : e.comments)) return !1;
	let n = Eu(t, r);
	return n ? e.comments.some(n) : !0;
}
function ct(e, t, r) {
	if (!Array.isArray(e == null ? void 0 : e.comments)) return [];
	let n = Eu(t, r);
	return n ? e.comments.filter(n) : e.comments;
}
var pe = (e, { originalText: t }) => Ot(t, k(e));
function lt(e) {
	return L(e) || e.type === "NewExpression" || e.type === "ImportExpression";
}
function Ae(e) {
	return e && (e.type === "ObjectProperty" || (e.type === "Property" && !gt(e)));
}
var Te = v(["TSAsExpression", "TSSatisfiesExpression", "AsExpression", "AsConstExpression", "SatisfiesExpression"]),
	Ne = v(["UnionTypeAnnotation", "TSUnionType"]),
	_r = v(["IntersectionTypeAnnotation", "TSIntersectionType"]);
var go = new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]),
	Jt = (e) => {
		for (let t of e.quasis) delete t.value;
	};
function Fu(e, t, r) {
	var s, u;
	if ((e.type === "Program" && delete t.sourceType, (e.type === "BigIntLiteral" || e.type === "BigIntLiteralTypeAnnotation") && e.value && (t.value = e.value.toLowerCase()), (e.type === "BigIntLiteral" || e.type === "Literal") && e.bigint && (t.bigint = e.bigint.toLowerCase()), e.type === "DecimalLiteral" && (t.value = Number(e.value)), e.type === "Literal" && t.decimal && (t.decimal = Number(e.decimal)), e.type === "EmptyStatement" || e.type === "JSXText" || (e.type === "JSXExpressionContainer" && (e.expression.type === "Literal" || e.expression.type === "StringLiteral") && e.expression.value === " "))) return null;
	if ((e.type === "Property" || e.type === "ObjectProperty" || e.type === "MethodDefinition" || e.type === "ClassProperty" || e.type === "ClassMethod" || e.type === "PropertyDefinition" || e.type === "TSDeclareMethod" || e.type === "TSPropertySignature" || e.type === "ObjectTypeProperty" || e.type === "ImportAttribute") && e.key && !e.computed) {
		let { key: i } = e;
		Q(i) || Ce(i) ? (t.key = String(i.value)) : i.type === "Identifier" && (t.key = i.name);
	}
	if (e.type === "JSXElement" && e.openingElement.name.name === "style" && e.openingElement.attributes.some((i) => i.type === "JSXAttribute" && i.name.name === "jsx")) for (let { type: i, expression: a } of t.children) i === "JSXExpressionContainer" && a.type === "TemplateLiteral" && Jt(a);
	e.type === "JSXAttribute" && e.name.name === "css" && e.value.type === "JSXExpressionContainer" && e.value.expression.type === "TemplateLiteral" && Jt(t.value.expression), e.type === "JSXAttribute" && ((s = e.value) == null ? void 0 : s.type) === "Literal" && /["']|&quot;|&apos;/u.test(e.value.value) && (t.value.value = N(!1, e.value.value, /["']|&quot;|&apos;/gu, '"'));
	let n = e.expression || e.callee;
	if (e.type === "Decorator" && n.type === "CallExpression" && n.callee.name === "Component" && n.arguments.length === 1) {
		let i = e.expression.arguments[0].properties;
		for (let [a, o] of t.expression.arguments[0].properties.entries())
			switch (i[a].key.name) {
				case "styles":
					U(o.value) && Jt(o.value.elements[0]);
					break;
				case "template":
					o.value.type === "TemplateLiteral" && Jt(o.value);
					break;
			}
	}
	e.type === "TaggedTemplateExpression" && (e.tag.type === "MemberExpression" || (e.tag.type === "Identifier" && (e.tag.name === "gql" || e.tag.name === "graphql" || e.tag.name === "css" || e.tag.name === "md" || e.tag.name === "markdown" || e.tag.name === "html")) || e.tag.type === "CallExpression") && Jt(t.quasi), e.type === "TemplateLiteral" && (((u = e.leadingComments) != null && u.some((a) => re(a) && ["GraphQL", "HTML"].some((o) => a.value === ` ${o} `))) || (r.type === "CallExpression" && r.callee.name === "graphql") || !e.leadingComments) && Jt(t), e.type === "ChainExpression" && e.expression.type === "TSNonNullExpression" && ((t.type = "TSNonNullExpression"), (t.expression.type = "ChainExpression")), e.type === "TSMappedType" && (delete t.key, delete t.constraint), e.type === "TSEnumDeclaration" && delete t.body;
}
Fu.ignoredProperties = go;
var Cu = Fu;
var rt = "string",
	_e = "array",
	nt = "cursor",
	Xe = "indent",
	Ye = "align",
	st = "trim",
	le = "group",
	Pe = "fill",
	xe = "if-break",
	He = "indent-if-break",
	Ve = "line-suffix",
	$e = "line-suffix-boundary",
	me = "line",
	je = "label",
	ve = "break-parent",
	jr = new Set([nt, Xe, Ye, st, le, Pe, xe, He, Ve, $e, me, je, ve]);
function So(e) {
	if (typeof e == "string") return rt;
	if (Array.isArray(e)) return _e;
	if (!e) return;
	let { type: t } = e;
	if (jr.has(t)) return t;
}
var ut = So;
var Bo = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function bo(e) {
	let t = e === null ? "null" : typeof e;
	if (t !== "string" && t !== "object")
		return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
	if (ut(e)) throw new Error("doc is valid.");
	let r = Object.prototype.toString.call(e);
	if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
	let n = Bo([...jr].map((s) => `'${s}'`));
	return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Jn = class extends Error {
		name = "InvalidDocError";
		constructor(t) {
			super(bo(t)), (this.doc = t);
		}
	},
	Ct = Jn;
var Au = {};
function Po(e, t, r, n) {
	let s = [e];
	for (; s.length > 0; ) {
		let u = s.pop();
		if (u === Au) {
			r(s.pop());
			continue;
		}
		r && s.push(u, Au);
		let i = ut(u);
		if (!i) throw new Ct(u);
		if ((t == null ? void 0 : t(u)) !== !1)
			switch (i) {
				case _e:
				case Pe: {
					let a = i === _e ? u : u.parts;
					for (let o = a.length, c = o - 1; c >= 0; --c) s.push(a[c]);
					break;
				}
				case xe:
					s.push(u.flatContents, u.breakContents);
					break;
				case le:
					if (n && u.expandedStates) for (let a = u.expandedStates.length, o = a - 1; o >= 0; --o) s.push(u.expandedStates[o]);
					else s.push(u.contents);
					break;
				case Ye:
				case Xe:
				case He:
				case je:
				case Ve:
					s.push(u.contents);
					break;
				case rt:
				case nt:
				case st:
				case $e:
				case me:
				case ve:
					break;
				default:
					throw new Ct(u);
			}
	}
}
var qn = Po;
var Tu = () => {},
	Ke = Tu,
	vr = Tu;
function f(e) {
	return Ke(e), { type: Xe, contents: e };
}
function he(e, t) {
	return Ke(t), { type: Ye, contents: t, n: e };
}
function l(e, t = {}) {
	return (
		Ke(e),
		vr(t.expandedStates, !0),
		{
			type: le,
			id: t.id,
			contents: e,
			break: !!t.shouldBreak,
			expandedStates: t.expandedStates,
		}
	);
}
function du(e) {
	return he(Number.NEGATIVE_INFINITY, e);
}
function Mr(e) {
	return he(-1, e);
}
function ze(e, t) {
	return l(e[0], { ...t, expandedStates: e });
}
function qt(e) {
	return vr(e), { type: Pe, parts: e };
}
function b(e, t = "", r = {}) {
	return Ke(e), t !== "" && Ke(t), { type: xe, breakContents: e, flatContents: t, groupId: r.groupId };
}
function At(e, t) {
	return Ke(e), { type: He, contents: e, groupId: t.groupId, negate: t.negate };
}
function Wn(e) {
	return Ke(e), { type: Ve, contents: e };
}
var ke = { type: $e },
	Ee = { type: ve };
var Gn = { type: me, hard: !0 },
	ko = { type: me, hard: !0, literal: !0 },
	x = { type: me },
	E = { type: me, soft: !0 },
	F = [Gn, Ee],
	Rr = [ko, Ee],
	Un = { type: nt };
function P(e, t) {
	Ke(e), vr(t);
	let r = [];
	for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
	return r;
}
function xu(e, t, r) {
	Ke(e);
	let n = e;
	if (t > 0) {
		for (let s = 0; s < Math.floor(t / r); ++s) n = f(n);
		(n = he(t % r, n)), (n = he(Number.NEGATIVE_INFINITY, n));
	}
	return n;
}
function it(e, t) {
	return Ke(t), e ? { type: je, label: e, contents: t } : t;
}
function mt(e, t) {
	if (typeof e == "string") return t(e);
	let r = new Map();
	return n(e);
	function n(u) {
		if (r.has(u)) return r.get(u);
		let i = s(u);
		return r.set(u, i), i;
	}
	function s(u) {
		switch (ut(u)) {
			case _e:
				return t(u.map(n));
			case Pe:
				return t({ ...u, parts: u.parts.map(n) });
			case xe:
				return t({
					...u,
					breakContents: n(u.breakContents),
					flatContents: n(u.flatContents),
				});
			case le: {
				let { expandedStates: i, contents: a } = u;
				return i ? ((i = i.map(n)), (a = i[0])) : (a = n(a)), t({ ...u, contents: a, expandedStates: i });
			}
			case Ye:
			case Xe:
			case He:
			case je:
			case Ve:
				return t({ ...u, contents: n(u.contents) });
			case rt:
			case nt:
			case st:
			case $e:
			case me:
			case ve:
				return t(u);
			default:
				throw new Ct(u);
		}
	}
}
function gu(e, t, r) {
	let n = r,
		s = !1;
	function u(i) {
		if (s) return !1;
		let a = t(i);
		a !== void 0 && ((s = !0), (n = a));
	}
	return qn(e, u), n;
}
function Io(e) {
	if ((e.type === le && e.break) || (e.type === me && e.hard) || e.type === ve) return !0;
}
function ne(e) {
	return gu(e, Io, !1);
}
function hu(e) {
	if (e.length > 0) {
		let t = O(!1, e, -1);
		!t.expandedStates && !t.break && (t.break = "propagated");
	}
	return null;
}
function Su(e) {
	let t = new Set(),
		r = [];
	function n(u) {
		if ((u.type === ve && hu(r), u.type === le)) {
			if ((r.push(u), t.has(u))) return !1;
			t.add(u);
		}
	}
	function s(u) {
		u.type === le && r.pop().break && hu(r);
	}
	qn(e, n, s, !0);
}
function Lo(e) {
	return e.type === me && !e.hard ? (e.soft ? "" : " ") : e.type === xe ? e.flatContents : e;
}
function ur(e) {
	return mt(e, Lo);
}
function wo(e) {
	switch (ut(e)) {
		case Pe:
			if (e.parts.every((t) => t === "")) return "";
			break;
		case le:
			if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
			if (e.contents.type === le && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
			break;
		case Ye:
		case Xe:
		case He:
		case Ve:
			if (!e.contents) return "";
			break;
		case xe:
			if (!e.flatContents && !e.breakContents) return "";
			break;
		case _e: {
			let t = [];
			for (let r of e) {
				if (!r) continue;
				let [n, ...s] = Array.isArray(r) ? r : [r];
				typeof n == "string" && typeof O(!1, t, -1) == "string" ? (t[t.length - 1] += n) : t.push(n), t.push(...s);
			}
			return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
		}
		case rt:
		case nt:
		case st:
		case $e:
		case me:
		case je:
		case ve:
			break;
		default:
			throw new Ct(e);
	}
	return e;
}
function Wt(e) {
	return mt(e, (t) => wo(t));
}
function Ie(e, t = Rr) {
	return mt(e, (r) =>
		typeof r == "string"
			? P(
					t,
					r.split(`
`),
				)
			: r,
	);
}
function Oo(e) {
	if (e.type === me) return !0;
}
function Bu(e) {
	return gu(e, Oo, !1);
}
function ir(e, t) {
	return e.type === je ? { ...e, contents: t(e.contents) } : t(e);
}
function _o(e) {
	let t = `*${e.value}*`.split(`
`);
	return t.length > 1 && t.every((r) => r.trimStart()[0] === "*");
}
var bu = _o;
function Pu(e, t) {
	let r = e.node;
	if (vt(r)) return t.originalText.slice(R(r), k(r)).trimEnd();
	if (re(r)) return bu(r) ? jo(r) : ["/*", Ie(r.value), "*/"];
	throw new Error("Not a comment: " + JSON.stringify(r));
}
function jo(e) {
	let t = e.value.split(`
`);
	return [
		"/*",
		P(
			F,
			t.map((r, n) => (n === 0 ? r.trimEnd() : " " + (n < t.length - 1 ? r.trim() : r.trimStart()))),
		),
		"*/",
	];
}
var Kn = {};
Ar(Kn, { endOfLine: () => Go, ownLine: () => Wo, remaining: () => Uo });
function vo(e) {
	let t = e.type || e.kind || "(unknown type)",
		r = String(e.name || (e.id && (typeof e.id == "object" ? e.id.name : e.id)) || (e.key && (typeof e.key == "object" ? e.key.name : e.key)) || (e.value && (typeof e.value == "object" ? "" : String(e.value))) || e.operator || "");
	return r.length > 20 && (r = r.slice(0, 19) + "\u2026"), t + (r ? " " + r : "");
}
function Nn(e, t) {
	(e.comments ?? (e.comments = [])).push(t), (t.printed = !1), (t.nodeDescription = vo(e));
}
function ce(e, t) {
	(t.leading = !0), (t.trailing = !1), Nn(e, t);
}
function Le(e, t, r) {
	(t.leading = !1), (t.trailing = !1), r && (t.marker = r), Nn(e, t);
}
function z(e, t) {
	(t.leading = !1), (t.trailing = !0), Nn(e, t);
}
function Mo(e, t) {
	let r = null,
		n = t;
	for (; n !== r; ) (r = n), (n = Ge(e, n)), (n = Lt(e, n)), (n = wt(e, n)), (n = Ue(e, n));
	return n;
}
var yt = Mo;
function Ro(e, t) {
	let r = yt(e, t);
	return r === !1 ? "" : e.charAt(r);
}
var ge = Ro;
function Jo(e, t, r) {
	for (let n = t; n < r; ++n)
		if (
			e.charAt(n) ===
			`
`
		)
			return !0;
	return !1;
}
var de = Jo;
function qo(e) {
	return re(e) && e.value[0] === "*" && /@(?:type|satisfies)\b/u.test(e.value);
}
var ku = qo;
function Wo(e) {
	return [Mu, Lu, _u, ep, Xo, Yn, Hn, Iu, wu, sp, rp, $n, vu, up, Ou, ju, Vn, Yo, yp].some((t) => t(e));
}
function Go(e) {
	return [No, _u, Lu, vu, Yn, Hn, Iu, wu, ju, tp, np, $n, op, Vn, lp, mp].some((t) => t(e));
}
function Uo(e) {
	return [Mu, Yn, Hn, Ho, Zo, Ou, $n, Qo, zo, cp, Vn, pp].some((t) => t(e));
}
function bt(e, t) {
	let r = (e.body || e.properties).find(({ type: n }) => n !== "EmptyStatement");
	r ? ce(r, t) : Le(e, t);
}
function Xn(e, t) {
	e.type === "BlockStatement" ? bt(e, t) : ce(e, t);
}
function No({ comment: e, followingNode: t }) {
	return t && ku(e) ? (ce(t, e), !0) : !1;
}
function Yn({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
	if ((r == null ? void 0 : r.type) !== "IfStatement" || !n) return !1;
	if (ge(s, k(e)) === ")") return z(t, e), !0;
	if (t === r.consequent && n === r.alternate) {
		if (t.type === "BlockStatement") z(t, e);
		else {
			let i = vt(e) || e.loc.start.line === e.loc.end.line,
				a = e.loc.start.line === t.loc.start.line;
			i && a ? z(t, e) : Le(r, e);
		}
		return !0;
	}
	return n.type === "BlockStatement" ? (bt(n, e), !0) : n.type === "IfStatement" ? (Xn(n.consequent, e), !0) : r.consequent === n ? (ce(n, e), !0) : !1;
}
function Hn({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
	return (r == null ? void 0 : r.type) !== "WhileStatement" || !n ? !1 : ge(s, k(e)) === ")" ? (z(t, e), !0) : n.type === "BlockStatement" ? (bt(n, e), !0) : r.body === n ? (ce(n, e), !0) : !1;
}
function Iu({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	return ((r == null ? void 0 : r.type) !== "TryStatement" && (r == null ? void 0 : r.type) !== "CatchClause") || !n ? !1 : r.type === "CatchClause" && t ? (z(t, e), !0) : n.type === "BlockStatement" ? (bt(n, e), !0) : n.type === "TryStatement" ? (Xn(n.finalizer, e), !0) : n.type === "CatchClause" ? (Xn(n.body, e), !0) : !1;
}
function Xo({ comment: e, enclosingNode: t, followingNode: r }) {
	return q(t) && (r == null ? void 0 : r.type) === "Identifier" ? (ce(t, e), !0) : !1;
}
function Yo({ comment: e, enclosingNode: t, followingNode: r, options: n }) {
	return !n.experimentalTernaries || !((t == null ? void 0 : t.type) === "ConditionalExpression" || (t == null ? void 0 : t.type) === "ConditionalTypeAnnotation" || (t == null ? void 0 : t.type) === "TSConditionalType") ? !1 : (r == null ? void 0 : r.type) === "ConditionalExpression" || (r == null ? void 0 : r.type) === "ConditionalTypeAnnotation" || (r == null ? void 0 : r.type) === "TSConditionalType" ? (Le(t, e), !0) : !1;
}
function Lu({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s, options: u }) {
	let i = t && !de(s, k(t), R(e));
	return (!t || !i) && ((r == null ? void 0 : r.type) === "ConditionalExpression" || (r == null ? void 0 : r.type) === "ConditionalTypeAnnotation" || (r == null ? void 0 : r.type) === "TSConditionalType") && n ? (u.experimentalTernaries && r.alternate === n && !(re(e) && !de(u.originalText, R(e), k(e))) ? (Le(r, e), !0) : (ce(n, e), !0)) : !1;
}
function Ho({ comment: e, precedingNode: t, enclosingNode: r }) {
	return Ae(r) && r.shorthand && r.key === t && r.value.type === "AssignmentPattern" ? (z(r.value.left, e), !0) : !1;
}
var Vo = new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
function wu({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	if (Vo.has(r == null ? void 0 : r.type)) {
		if (w(r.decorators) && (n == null ? void 0 : n.type) !== "Decorator") return z(O(!1, r.decorators, -1), e), !0;
		if (r.body && n === r.body) return bt(r.body, e), !0;
		if (n) {
			if (r.superClass && n === r.superClass && t && (t === r.id || t === r.typeParameters)) return z(t, e), !0;
			for (let s of ["implements", "extends", "mixins"]) if (r[s] && n === r[s][0]) return t && (t === r.id || t === r.typeParameters || t === r.superClass) ? z(t, e) : Le(r, e, s), !0;
		}
	}
	return !1;
}
var $o = new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
function Ou({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
	return r && t && ge(n, k(e)) === "(" && (r.type === "Property" || r.type === "TSDeclareMethod" || r.type === "TSAbstractMethodDefinition") && t.type === "Identifier" && r.key === t && ge(n, k(t)) !== ":" ? (z(t, e), !0) : (t == null ? void 0 : t.type) === "Decorator" && $o.has(r == null ? void 0 : r.type) ? (z(t, e), !0) : !1;
}
var Ko = new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
function zo({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
	return ge(n, k(e)) !== "(" ? !1 : t && Ko.has(r == null ? void 0 : r.type) ? (z(t, e), !0) : !1;
}
function Qo({ comment: e, enclosingNode: t, text: r }) {
	if ((t == null ? void 0 : t.type) !== "ArrowFunctionExpression") return !1;
	let n = yt(r, k(e));
	return n !== !1 && r.slice(n, n + 2) === "=>" ? (Le(t, e), !0) : !1;
}
function Zo({ comment: e, enclosingNode: t, text: r }) {
	return ge(r, k(e)) !== ")" ? !1 : t && ((Ru(t) && K(t).length === 0) || (lt(t) && oe(t).length === 0)) ? (Le(t, e), !0) : ((t == null ? void 0 : t.type) === "MethodDefinition" || (t == null ? void 0 : t.type) === "TSAbstractMethodDefinition") && K(t.value).length === 0 ? (Le(t.value, e), !0) : !1;
}
function ep({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
	return (t == null ? void 0 : t.type) === "ComponentTypeParameter" && ((r == null ? void 0 : r.type) === "DeclareComponent" || (r == null ? void 0 : r.type) === "ComponentTypeAnnotation") && (n == null ? void 0 : n.type) !== "ComponentTypeParameter" ? (z(t, e), !0) : ((t == null ? void 0 : t.type) === "ComponentParameter" || (t == null ? void 0 : t.type) === "RestElement") && (r == null ? void 0 : r.type) === "ComponentDeclaration" && ge(s, k(e)) === ")" ? (z(t, e), !0) : !1;
}
function _u({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n, text: s }) {
	return (t == null ? void 0 : t.type) === "FunctionTypeParam" && (r == null ? void 0 : r.type) === "FunctionTypeAnnotation" && (n == null ? void 0 : n.type) !== "FunctionTypeParam" ? (z(t, e), !0) : ((t == null ? void 0 : t.type) === "Identifier" || (t == null ? void 0 : t.type) === "AssignmentPattern" || (t == null ? void 0 : t.type) === "ObjectPattern" || (t == null ? void 0 : t.type) === "ArrayPattern" || (t == null ? void 0 : t.type) === "RestElement" || (t == null ? void 0 : t.type) === "TSParameterProperty") && Ru(r) && ge(s, k(e)) === ")" ? (z(t, e), !0) : !re(e) && ((r == null ? void 0 : r.type) === "FunctionDeclaration" || (r == null ? void 0 : r.type) === "FunctionExpression" || (r == null ? void 0 : r.type) === "ObjectMethod") && (n == null ? void 0 : n.type) === "BlockStatement" && r.body === n && yt(s, k(e)) === R(n) ? (bt(n, e), !0) : !1;
}
function ju({ comment: e, enclosingNode: t }) {
	return (t == null ? void 0 : t.type) === "LabeledStatement" ? (ce(t, e), !0) : !1;
}
function Vn({ comment: e, enclosingNode: t }) {
	return ((t == null ? void 0 : t.type) === "ContinueStatement" || (t == null ? void 0 : t.type) === "BreakStatement") && !t.label ? (z(t, e), !0) : !1;
}
function tp({ comment: e, precedingNode: t, enclosingNode: r }) {
	return L(r) && t && r.callee === t && r.arguments.length > 0 ? (ce(r.arguments[0], e), !0) : !1;
}
function rp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	return Ne(r) ? (sr(e) && ((n.prettierIgnore = !0), (e.unignore = !0)), t ? (z(t, e), !0) : !1) : (Ne(n) && sr(e) && ((n.types[0].prettierIgnore = !0), (e.unignore = !0)), !1);
}
function np({ comment: e, enclosingNode: t }) {
	return Ae(t) ? (ce(t, e), !0) : !1;
}
function $n({ comment: e, enclosingNode: t, ast: r, isLastComment: n }) {
	var s;
	return ((s = r == null ? void 0 : r.body) == null ? void 0 : s.length) === 0 ? (n ? Le(r, e) : ce(r, e), !0) : (t == null ? void 0 : t.type) === "Program" && t.body.length === 0 && !w(t.directives) ? (n ? Le(t, e) : ce(t, e), !0) : !1;
}
function sp({ comment: e, enclosingNode: t }) {
	return (t == null ? void 0 : t.type) === "ForInStatement" || (t == null ? void 0 : t.type) === "ForOfStatement" ? (ce(t, e), !0) : !1;
}
function vu({ comment: e, precedingNode: t, enclosingNode: r, text: n }) {
	if ((r == null ? void 0 : r.type) === "ImportSpecifier" || (r == null ? void 0 : r.type) === "ExportSpecifier") return ce(r, e), !0;
	let s = (t == null ? void 0 : t.type) === "ImportSpecifier" && (r == null ? void 0 : r.type) === "ImportDeclaration",
		u = (t == null ? void 0 : t.type) === "ExportSpecifier" && (r == null ? void 0 : r.type) === "ExportNamedDeclaration";
	return (s || u) && te(n, k(e)) ? (z(t, e), !0) : !1;
}
function up({ comment: e, enclosingNode: t }) {
	return (t == null ? void 0 : t.type) === "AssignmentPattern" ? (ce(t, e), !0) : !1;
}
var ip = new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]),
	ap = new Set(["ObjectExpression", "RecordExpression", "ArrayExpression", "TupleExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
function op({ comment: e, enclosingNode: t, followingNode: r }) {
	return ip.has(t == null ? void 0 : t.type) && r && (ap.has(r.type) || re(e)) ? (ce(r, e), !0) : !1;
}
function pp({ comment: e, enclosingNode: t, followingNode: r, text: n }) {
	return !r && ((t == null ? void 0 : t.type) === "TSMethodSignature" || (t == null ? void 0 : t.type) === "TSDeclareFunction" || (t == null ? void 0 : t.type) === "TSAbstractMethodDefinition") && ge(n, k(e)) === ";" ? (z(t, e), !0) : !1;
}
function Mu({ comment: e, enclosingNode: t, followingNode: r }) {
	if (sr(e) && (t == null ? void 0 : t.type) === "TSMappedType" && (r == null ? void 0 : r.type) === "TSTypeParameter" && r.constraint) return (t.prettierIgnore = !0), (e.unignore = !0), !0;
}
function cp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	return (r == null ? void 0 : r.type) !== "TSMappedType" ? !1 : (n == null ? void 0 : n.type) === "TSTypeParameter" && n.name ? (ce(n.name, e), !0) : (t == null ? void 0 : t.type) === "TSTypeParameter" && t.constraint ? (z(t.constraint, e), !0) : !1;
}
function lp({ comment: e, enclosingNode: t, followingNode: r }) {
	return !t || t.type !== "SwitchCase" || t.test || !r || r !== t.consequent[0] ? !1 : (r.type === "BlockStatement" && vt(e) ? bt(r, e) : Le(t, e), !0);
}
function mp({ comment: e, precedingNode: t, enclosingNode: r, followingNode: n }) {
	return Ne(t) && (((r.type === "TSArrayType" || r.type === "ArrayTypeAnnotation") && !n) || _r(r)) ? (z(O(!1, t.types, -1), e), !0) : !1;
}
function yp({ comment: e, enclosingNode: t, precedingNode: r, followingNode: n }) {
	if (((t == null ? void 0 : t.type) === "ObjectPattern" || (t == null ? void 0 : t.type) === "ArrayPattern") && (n == null ? void 0 : n.type) === "TSTypeAnnotation") return r ? z(r, e) : Le(t, e), !0;
}
var Ru = v(["ArrowFunctionExpression", "FunctionExpression", "FunctionDeclaration", "ObjectMethod", "ClassMethod", "TSDeclareFunction", "TSCallSignatureDeclaration", "TSConstructSignatureDeclaration", "TSMethodSignature", "TSConstructorType", "TSFunctionType", "TSDeclareMethod"]);
var Dp = new Set(["EmptyStatement", "TemplateElement", "Import", "TSEmptyBodyFunctionExpression", "ChainExpression"]);
function fp(e) {
	return !Dp.has(e.type);
}
function Ep(e, t) {
	var r;
	if ((t.parser === "typescript" || t.parser === "flow" || t.parser === "acorn" || t.parser === "espree" || t.parser === "meriyah" || t.parser === "__babel_estree") && e.type === "MethodDefinition" && ((r = e.value) == null ? void 0 : r.type) === "FunctionExpression" && K(e.value).length === 0 && !e.value.returnType && !w(e.value.typeParameters) && e.value.body) return [...(e.decorators || []), e.key, e.value.body];
}
function zn(e) {
	let { node: t, parent: r } = e;
	return (X(t) || (r && (r.type === "JSXSpreadAttribute" || r.type === "JSXSpreadChild" || Ne(r) || ((r.type === "ClassDeclaration" || r.type === "ClassExpression") && r.superClass === t)))) && (!Bt(t) || Ne(r));
}
function Fp(e, { parser: t }) {
	if (t === "flow" || t === "babel-flow") return (e = N(!1, e, /[\s(]/gu, "")), e === "" || e === "/*" || e === "/*::";
}
function Ju(e) {
	switch (e) {
		case "cr":
			return "\r";
		case "crlf":
			return `\r
`;
		default:
			return `
`;
	}
}
var Se = Symbol("MODE_BREAK"),
	at = Symbol("MODE_FLAT"),
	ar = Symbol("cursor");
function qu() {
	return { value: "", length: 0, queue: [] };
}
function Cp(e, t) {
	return Qn(e, { type: "indent" }, t);
}
function Ap(e, t, r) {
	return t === Number.NEGATIVE_INFINITY
		? e.root || qu()
		: t < 0
			? Qn(e, { type: "dedent" }, r)
			: t
				? t.type === "root"
					? { ...e, root: e }
					: Qn(
							e,
							{
								type: typeof t == "string" ? "stringAlign" : "numberAlign",
								n: t,
							},
							r,
						)
				: e;
}
function Qn(e, t, r) {
	let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t],
		s = "",
		u = 0,
		i = 0,
		a = 0;
	for (let p of n)
		switch (p.type) {
			case "indent":
				m(), r.useTabs ? o(1) : c(r.tabWidth);
				break;
			case "stringAlign":
				m(), (s += p.n), (u += p.n.length);
				break;
			case "numberAlign":
				(i += 1), (a += p.n);
				break;
			default:
				throw new Error(`Unexpected type '${p.type}'`);
		}
	return y(), { ...e, value: s, length: u, queue: n };
	function o(p) {
		(s += "	".repeat(p)), (u += r.tabWidth * p);
	}
	function c(p) {
		(s += " ".repeat(p)), (u += p);
	}
	function m() {
		r.useTabs ? D() : y();
	}
	function D() {
		i > 0 && o(i), C();
	}
	function y() {
		a > 0 && c(a), C();
	}
	function C() {
		(i = 0), (a = 0);
	}
}
function Zn(e) {
	let t = 0,
		r = 0,
		n = e.length;
	e: for (; n--; ) {
		let s = e[n];
		if (s === ar) {
			r++;
			continue;
		}
		for (let u = s.length - 1; u >= 0; u--) {
			let i = s[u];
			if (i === " " || i === "	") t++;
			else {
				e[n] = s.slice(0, u + 1);
				break e;
			}
		}
	}
	if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(ar);
	return t;
}
function Jr(e, t, r, n, s, u) {
	if (r === Number.POSITIVE_INFINITY) return !0;
	let i = t.length,
		a = [e],
		o = [];
	for (; r >= 0; ) {
		if (a.length === 0) {
			if (i === 0) return !0;
			a.push(t[--i]);
			continue;
		}
		let { mode: c, doc: m } = a.pop(),
			D = ut(m);
		switch (D) {
			case rt:
				o.push(m), (r -= et(m));
				break;
			case _e:
			case Pe: {
				let y = D === _e ? m : m.parts;
				for (let C = y.length - 1; C >= 0; C--) a.push({ mode: c, doc: y[C] });
				break;
			}
			case Xe:
			case Ye:
			case He:
			case je:
				a.push({ mode: c, doc: m.contents });
				break;
			case st:
				r += Zn(o);
				break;
			case le: {
				if (u && m.break) return !1;
				let y = m.break ? Se : c,
					C = m.expandedStates && y === Se ? O(!1, m.expandedStates, -1) : m.contents;
				a.push({ mode: y, doc: C });
				break;
			}
			case xe: {
				let C = (m.groupId ? s[m.groupId] || at : c) === Se ? m.breakContents : m.flatContents;
				C && a.push({ mode: c, doc: C });
				break;
			}
			case me:
				if (c === Se || m.hard) return !0;
				m.soft || (o.push(" "), r--);
				break;
			case Ve:
				n = !0;
				break;
			case $e:
				if (n) return !1;
				break;
		}
	}
	return !1;
}
function es(e, t) {
	let r = {},
		n = t.printWidth,
		s = Ju(t.endOfLine),
		u = 0,
		i = [{ ind: qu(), mode: Se, doc: e }],
		a = [],
		o = !1,
		c = [],
		m = 0;
	for (Su(e); i.length > 0; ) {
		let { ind: y, mode: C, doc: p } = i.pop();
		switch (ut(p)) {
			case rt: {
				let A =
					s !==
					`
`
						? N(
								!1,
								p,
								`
`,
								s,
							)
						: p;
				a.push(A), i.length > 0 && (u += et(A));
				break;
			}
			case _e:
				for (let A = p.length - 1; A >= 0; A--) i.push({ ind: y, mode: C, doc: p[A] });
				break;
			case nt:
				if (m >= 2) throw new Error("There are too many 'cursor' in doc.");
				a.push(ar), m++;
				break;
			case Xe:
				i.push({ ind: Cp(y, t), mode: C, doc: p.contents });
				break;
			case Ye:
				i.push({ ind: Ap(y, p.n, t), mode: C, doc: p.contents });
				break;
			case st:
				u -= Zn(a);
				break;
			case le:
				switch (C) {
					case at:
						if (!o) {
							i.push({
								ind: y,
								mode: p.break ? Se : at,
								doc: p.contents,
							});
							break;
						}
					case Se: {
						o = !1;
						let A = { ind: y, mode: at, doc: p.contents },
							T = n - u,
							S = c.length > 0;
						if (!p.break && Jr(A, i, T, S, r)) i.push(A);
						else if (p.expandedStates) {
							let B = O(!1, p.expandedStates, -1);
							if (p.break) {
								i.push({ ind: y, mode: Se, doc: B });
								break;
							} else
								for (let _ = 1; _ < p.expandedStates.length + 1; _++)
									if (_ >= p.expandedStates.length) {
										i.push({ ind: y, mode: Se, doc: B });
										break;
									} else {
										let J = p.expandedStates[_],
											j = { ind: y, mode: at, doc: J };
										if (Jr(j, i, T, S, r)) {
											i.push(j);
											break;
										}
									}
						} else i.push({ ind: y, mode: Se, doc: p.contents });
						break;
					}
				}
				p.id && (r[p.id] = O(!1, i, -1).mode);
				break;
			case Pe: {
				let A = n - u,
					{ parts: T } = p;
				if (T.length === 0) break;
				let [S, B] = T,
					_ = { ind: y, mode: at, doc: S },
					J = { ind: y, mode: Se, doc: S },
					j = Jr(_, [], A, c.length > 0, r, !0);
				if (T.length === 1) {
					j ? i.push(_) : i.push(J);
					break;
				}
				let h = { ind: y, mode: at, doc: B },
					W = { ind: y, mode: Se, doc: B };
				if (T.length === 2) {
					j ? i.push(h, _) : i.push(W, J);
					break;
				}
				T.splice(0, 2);
				let Fe = { ind: y, mode: C, doc: qt(T) },
					H = T[0];
				Jr({ ind: y, mode: at, doc: [S, B, H] }, [], A, c.length > 0, r, !0) ? i.push(Fe, h, _) : j ? i.push(Fe, W, _) : i.push(Fe, W, J);
				break;
			}
			case xe:
			case He: {
				let A = p.groupId ? r[p.groupId] : C;
				if (A === Se) {
					let T = p.type === xe ? p.breakContents : p.negate ? p.contents : f(p.contents);
					T && i.push({ ind: y, mode: C, doc: T });
				}
				if (A === at) {
					let T = p.type === xe ? p.flatContents : p.negate ? f(p.contents) : p.contents;
					T && i.push({ ind: y, mode: C, doc: T });
				}
				break;
			}
			case Ve:
				c.push({ ind: y, mode: C, doc: p.contents });
				break;
			case $e:
				c.length > 0 && i.push({ ind: y, mode: C, doc: Gn });
				break;
			case me:
				switch (C) {
					case at:
						if (p.hard) o = !0;
						else {
							p.soft || (a.push(" "), (u += 1));
							break;
						}
					case Se:
						if (c.length > 0) {
							i.push({ ind: y, mode: C, doc: p }, ...c.reverse()), (c.length = 0);
							break;
						}
						p.literal ? (y.root ? (a.push(s, y.root.value), (u = y.root.length)) : (a.push(s), (u = 0))) : ((u -= Zn(a)), a.push(s + y.value), (u = y.length));
						break;
				}
				break;
			case je:
				i.push({ ind: y, mode: C, doc: p.contents });
				break;
			case ve:
				break;
			default:
				throw new Ct(p);
		}
		i.length === 0 && c.length > 0 && (i.push(...c.reverse()), (c.length = 0));
	}
	let D = a.indexOf(ar);
	if (D !== -1) {
		let y = a.indexOf(ar, D + 1),
			C = a.slice(0, D).join(""),
			p = a.slice(D + 1, y).join(""),
			A = a.slice(y + 1).join("");
		return {
			formatted: C + p + A,
			cursorNodeStart: C.length,
			cursorNodeText: p,
		};
	}
	return { formatted: a.join("") };
}
function Tp(e, t, r = 0) {
	let n = 0;
	for (let s = r; s < e.length; ++s) e[s] === "	" ? (n = n + t - (n % t)) : n++;
	return n;
}
var Wu = Tp;
function dp(e, t) {
	let r = e.lastIndexOf(`
`);
	return r === -1 ? 0 : Wu(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
}
var Gu = dp;
function qr(e, t, r) {
	let { node: n } = e;
	if (n.type === "TemplateLiteral" && gp(e)) {
		let c = xp(e, r, t);
		if (c) return c;
	}
	let u = "expressions";
	n.type === "TSTemplateLiteralType" && (u = "types");
	let i = [],
		a = e.map(t, u);
	i.push(ke, "`");
	let o = 0;
	return (
		e.each(({ index: c, node: m }) => {
			if ((i.push(t()), m.tail)) return;
			let { tabWidth: D } = r,
				y = m.value.raw,
				C = y.includes(`
`)
					? Gu(y, D)
					: o;
			o = C;
			let p = a[c],
				A = n[u][c],
				T = de(r.originalText, k(m), R(n.quasis[c + 1]));
			if (!T) {
				let B = es(p, {
					...r,
					printWidth: Number.POSITIVE_INFINITY,
				}).formatted;
				B.includes(`
`)
					? (T = !0)
					: (p = B);
			}
			T && (d(A) || A.type === "Identifier" || q(A) || A.type === "ConditionalExpression" || A.type === "SequenceExpression" || Te(A) || De(A)) && (p = [f([E, p]), E]);
			let S =
				C === 0 &&
				y.endsWith(`
`)
					? he(Number.NEGATIVE_INFINITY, p)
					: xu(p, C, D);
			i.push(l(["${", S, ke, "}"]));
		}, "quasis"),
		i.push("`"),
		i
	);
}
function Uu(e, t) {
	let r = t("quasi");
	return it(r.label && { tagged: !0, ...r.label }, [t("tag"), t(e.node.typeArguments ? "typeArguments" : "typeParameters"), ke, r]);
}
function xp(e, t, r) {
	let { node: n } = e,
		s = n.quasis[0].value.raw.trim().split(/\s*\|\s*/u);
	if (s.length > 1 || s.some((u) => u.length > 0)) {
		t.__inJestEach = !0;
		let u = e.map(r, "expressions");
		t.__inJestEach = !1;
		let i = [],
			a = u.map(
				(y) =>
					"${" +
					es(y, {
						...t,
						printWidth: Number.POSITIVE_INFINITY,
						endOfLine: "lf",
					}).formatted +
					"}",
			),
			o = [{ hasLineBreak: !1, cells: [] }];
		for (let y = 1; y < n.quasis.length; y++) {
			let C = O(!1, o, -1),
				p = a[y - 1];
			C.cells.push(p),
				p.includes(`
`) && (C.hasLineBreak = !0),
				n.quasis[y].value.raw.includes(`
`) && o.push({ hasLineBreak: !1, cells: [] });
		}
		let c = Math.max(s.length, ...o.map((y) => y.cells.length)),
			m = Array.from({ length: c }).fill(0),
			D = [{ cells: s }, ...o.filter((y) => y.cells.length > 0)];
		for (let { cells: y } of D.filter((C) => !C.hasLineBreak)) for (let [C, p] of y.entries()) m[C] = Math.max(m[C], et(p));
		return (
			i.push(
				ke,
				"`",
				f([
					F,
					P(
						F,
						D.map((y) =>
							P(
								" | ",
								y.cells.map((C, p) => (y.hasLineBreak ? C : C + " ".repeat(m[p] - et(C)))),
							),
						),
					),
				]),
				F,
				"`",
			),
			i
		);
	}
}
function hp(e, t) {
	let { node: r } = e,
		n = t();
	return d(r) && (n = l([f([E, n]), E])), ["${", n, ke, "}"];
}
function Gt(e, t) {
	return e.map((r) => hp(r, t), "expressions");
}
function Wr(e, t) {
	return mt(e, (r) => (typeof r == "string" ? (t ? N(!1, r, /(\\*)`/gu, "$1$1\\`") : ts(r)) : r));
}
function ts(e) {
	return N(!1, e, /([\\`]|\$\{)/gu, String.raw`\$1`);
}
function gp({ node: e, parent: t }) {
	let r = /^[fx]?(?:describe|it|test)$/u;
	return t.type === "TaggedTemplateExpression" && t.quasi === e && t.tag.type === "MemberExpression" && t.tag.property.type === "Identifier" && t.tag.property.name === "each" && ((t.tag.object.type === "Identifier" && r.test(t.tag.object.name)) || (t.tag.object.type === "MemberExpression" && t.tag.object.property.type === "Identifier" && (t.tag.object.property.name === "only" || t.tag.object.property.name === "skip") && t.tag.object.object.type === "Identifier" && r.test(t.tag.object.object.name)));
}
var ns = [(e, t) => e.type === "ObjectExpression" && t === "properties", (e, t) => e.type === "CallExpression" && e.callee.type === "Identifier" && e.callee.name === "Component" && t === "arguments", (e, t) => e.type === "Decorator" && t === "expression"];
function Nu(e) {
	let t = (n) => n.type === "TemplateLiteral",
		r = (n, s) => Ae(n) && !n.computed && n.key.type === "Identifier" && n.key.name === "styles" && s === "value";
	return e.match(t, (n, s) => U(n) && s === "elements", r, ...ns) || e.match(t, r, ...ns);
}
function Xu(e) {
	return e.match(
		(t) => t.type === "TemplateLiteral",
		(t, r) => Ae(t) && !t.computed && t.key.type === "Identifier" && t.key.name === "template" && r === "value",
		...ns,
	);
}
function rs(e, t) {
	return d(e, g.Block | g.Leading, ({ value: r }) => r === ` ${t} `);
}
function Gr({ node: e, parent: t }, r) {
	return rs(e, r) || (Sp(t) && rs(t, r)) || (t.type === "ExpressionStatement" && rs(t, r));
}
function Sp(e) {
	return e.type === "AsConstExpression" || (e.type === "TSAsExpression" && e.typeAnnotation.type === "TSTypeReference" && e.typeAnnotation.typeName.type === "Identifier" && e.typeAnnotation.typeName.name === "const");
}
async function Bp(e, t, r) {
	let { node: n } = r,
		s = n.quasis.map((m) => m.value.raw),
		u = 0,
		i = s.reduce((m, D, y) => (y === 0 ? D : m + "@prettier-placeholder-" + u++ + "-id" + D), ""),
		a = await e(i, { parser: "scss" }),
		o = Gt(r, t),
		c = bp(a, o);
	if (!c) throw new Error("Couldn't insert all the expressions");
	return ["`", f([F, c]), E, "`"];
}
function bp(e, t) {
	if (!w(t)) return e;
	let r = 0,
		n = mt(Wt(e), (s) => (typeof s != "string" || !s.includes("@prettier-placeholder") ? s : s.split(/@prettier-placeholder-(\d+)-id/u).map((u, i) => (i % 2 === 0 ? Ie(u) : (r++, t[u])))));
	return t.length === r ? n : null;
}
function Pp({ node: e, parent: t, grandparent: r }) {
	return (r && e.quasis && t.type === "JSXExpressionContainer" && r.type === "JSXElement" && r.openingElement.name.name === "style" && r.openingElement.attributes.some((n) => n.type === "JSXAttribute" && n.name.name === "jsx")) || ((t == null ? void 0 : t.type) === "TaggedTemplateExpression" && t.tag.type === "Identifier" && t.tag.name === "css") || ((t == null ? void 0 : t.type) === "TaggedTemplateExpression" && t.tag.type === "MemberExpression" && t.tag.object.name === "css" && (t.tag.property.name === "global" || t.tag.property.name === "resolve"));
}
function Ur(e) {
	return e.type === "Identifier" && e.name === "styled";
}
function Yu(e) {
	return /^[A-Z]/u.test(e.object.name) && e.property.name === "extend";
}
function kp({ parent: e }) {
	if (!e || e.type !== "TaggedTemplateExpression") return !1;
	let t = e.tag.type === "ParenthesizedExpression" ? e.tag.expression : e.tag;
	switch (t.type) {
		case "MemberExpression":
			return Ur(t.object) || Yu(t);
		case "CallExpression":
			return Ur(t.callee) || (t.callee.type === "MemberExpression" && ((t.callee.object.type === "MemberExpression" && (Ur(t.callee.object.object) || Yu(t.callee.object))) || (t.callee.object.type === "CallExpression" && Ur(t.callee.object.callee))));
		case "Identifier":
			return t.name === "css";
		default:
			return !1;
	}
}
function Ip({ parent: e, grandparent: t }) {
	return (t == null ? void 0 : t.type) === "JSXAttribute" && e.type === "JSXExpressionContainer" && t.name.type === "JSXIdentifier" && t.name.name === "css";
}
function Lp(e) {
	if (Pp(e) || kp(e) || Ip(e) || Nu(e)) return Bp;
}
var Hu = Lp;
async function wp(e, t, r) {
	let { node: n } = r,
		s = n.quasis.length,
		u = Gt(r, t),
		i = [];
	for (let a = 0; a < s; a++) {
		let o = n.quasis[a],
			c = a === 0,
			m = a === s - 1,
			D = o.value.cooked,
			y = D.split(`
`),
			C = y.length,
			p = u[a],
			A = C > 2 && y[0].trim() === "" && y[1].trim() === "",
			T = C > 2 && y[C - 1].trim() === "" && y[C - 2].trim() === "",
			S = y.every((_) => /^\s*(?:#[^\n\r]*)?$/u.test(_));
		if (!m && /#[^\n\r]*$/u.test(y[C - 1])) return null;
		let B = null;
		S ? (B = Op(y)) : (B = await e(D, { parser: "graphql" })), B ? ((B = Wr(B, !1)), !c && A && i.push(""), i.push(B), !m && T && i.push("")) : !c && !m && A && i.push(""), p && i.push(p);
	}
	return ["`", f([F, P(F, i)]), F, "`"];
}
function Op(e) {
	let t = [],
		r = !1,
		n = e.map((s) => s.trim());
	for (let [s, u] of n.entries()) u !== "" && (n[s - 1] === "" && r ? t.push([F, u]) : t.push(u), (r = !0));
	return t.length === 0 ? null : P(F, t);
}
function _p({ node: e, parent: t }) {
	return Gr({ node: e, parent: t }, "GraphQL") || (t && ((t.type === "TaggedTemplateExpression" && ((t.tag.type === "MemberExpression" && t.tag.object.name === "graphql" && t.tag.property.name === "experimental") || (t.tag.type === "Identifier" && (t.tag.name === "gql" || t.tag.name === "graphql")))) || (t.type === "CallExpression" && t.callee.type === "Identifier" && t.callee.name === "graphql")));
}
function jp(e) {
	if (_p(e)) return wp;
}
var Vu = jp;
var ss = 0;
async function $u(e, t, r, n, s) {
	let { node: u } = n,
		i = ss;
	ss = (ss + 1) >>> 0;
	let a = (S) => `PRETTIER_HTML_PLACEHOLDER_${S}_${i}_IN_JS`,
		o = u.quasis.map((S, B, _) => (B === _.length - 1 ? S.value.cooked : S.value.cooked + a(B))).join(""),
		c = Gt(n, r),
		m = new RegExp(a(String.raw`(\d+)`), "gu"),
		D = 0,
		y = await t(o, {
			parser: e,
			__onHtmlRoot(S) {
				D = S.children.length;
			},
		}),
		C = mt(y, (S) => {
			if (typeof S != "string") return S;
			let B = [],
				_ = S.split(m);
			for (let J = 0; J < _.length; J++) {
				let j = _[J];
				if (J % 2 === 0) {
					j && ((j = ts(j)), s.__embeddedInHtml && (j = N(!1, j, /<\/(?=script\b)/giu, String.raw`<\/`)), B.push(j));
					continue;
				}
				let h = Number(j);
				B.push(c[h]);
			}
			return B;
		}),
		p = /^\s/u.test(o) ? " " : "",
		A = /\s$/u.test(o) ? " " : "",
		T = s.htmlWhitespaceSensitivity === "ignore" ? F : p && A ? x : null;
	return T ? l(["`", f([T, l(C)]), T, "`"]) : it({ hug: !1 }, l(["`", p, D > 1 ? f(l(C)) : l(C), A, "`"]));
}
function vp(e) {
	return (
		Gr(e, "HTML") ||
		e.match(
			(t) => t.type === "TemplateLiteral",
			(t, r) => t.type === "TaggedTemplateExpression" && t.tag.type === "Identifier" && t.tag.name === "html" && r === "quasi",
		)
	);
}
var Mp = $u.bind(void 0, "html"),
	Rp = $u.bind(void 0, "angular");
function Jp(e) {
	if (vp(e)) return Mp;
	if (Xu(e)) return Rp;
}
var Ku = Jp;
async function qp(e, t, r) {
	let { node: n } = r,
		s = N(!1, n.quasis[0].value.raw, /((?:\\\\)*)\\`/gu, (o, c) => "\\".repeat(c.length / 2) + "`"),
		u = Wp(s),
		i = u !== "";
	i && (s = N(!1, s, new RegExp(`^${u}`, "gmu"), ""));
	let a = Wr(await e(s, { parser: "markdown", __inJsTemplate: !0 }), !0);
	return ["`", i ? f([E, a]) : [Rr, du(a)], E, "`"];
}
function Wp(e) {
	let t = e.match(/^([^\S\n]*)\S/mu);
	return t === null ? "" : t[1];
}
function Gp(e) {
	if (Up(e)) return qp;
}
function Up({ node: e, parent: t }) {
	return (t == null ? void 0 : t.type) === "TaggedTemplateExpression" && e.quasis.length === 1 && t.tag.type === "Identifier" && (t.tag.name === "md" || t.tag.name === "markdown");
}
var zu = Gp;
function Np(e) {
	let { node: t } = e;
	if (t.type !== "TemplateLiteral" || Xp(t)) return;
	let r;
	for (let n of [Hu, Vu, Ku, zu])
		if (((r = n(e)), !!r))
			return t.quasis.length === 1 && t.quasis[0].value.raw.trim() === ""
				? "``"
				: async (...s) => {
						let u = await r(...s);
						return u && it({ embed: !0, ...u.label }, u);
					};
}
function Xp({ quasis: e }) {
	return e.some(({ value: { cooked: t } }) => t === null);
}
var Qu = Np;
var Yp = /\*\/$/,
	Hp = /^\/\*\*?/,
	ri = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
	Vp = /(^|\s+)\/\/([^\n\r]*)/g,
	Zu = /^(\r?\n)+/,
	$p = /(?:^|\r?\n) *(@[^\n\r]*?) *\r?\n *(?![^\n\r@]*\/\/[^]*)([^\s@][^\n\r@]+?) *\r?\n/g,
	ei = /(?:^|\r?\n) *@(\S+) *([^\n\r]*)/g,
	Kp = /(\r?\n|^) *\* ?/g,
	ni = [];
function si(e) {
	let t = e.match(ri);
	return t ? t[0].trimStart() : "";
}
function ui(e) {
	let t = e.match(ri),
		r = t == null ? void 0 : t[0];
	return r == null ? e : e.slice(r.length);
}
function ii(e) {
	let t = `
`;
	e = N(!1, e.replace(Hp, "").replace(Yp, ""), Kp, "$1");
	let r = "";
	for (; r !== e; ) (r = e), (e = N(!1, e, $p, `${t}$1 $2${t}`));
	e = e.replace(Zu, "").trimEnd();
	let n = Object.create(null),
		s = N(!1, e, ei, "").replace(Zu, "").trimEnd(),
		u;
	for (; (u = ei.exec(e)); ) {
		let i = N(!1, u[2], Vp, "");
		if (typeof n[u[1]] == "string" || Array.isArray(n[u[1]])) {
			let a = n[u[1]];
			n[u[1]] = [...ni, ...(Array.isArray(a) ? a : [a]), i];
		} else n[u[1]] = i;
	}
	return { comments: s, pragmas: n };
}
function ai({ comments: e = "", pragmas: t = {} }) {
	let r = `
`,
		n = "/**",
		s = " *",
		u = " */",
		i = Object.keys(t),
		a = i
			.flatMap((c) => ti(c, t[c]))
			.map((c) => `${s} ${c}${r}`)
			.join("");
	if (!e) {
		if (i.length === 0) return "";
		if (i.length === 1 && !Array.isArray(t[i[0]])) {
			let c = t[i[0]];
			return `${n} ${ti(i[0], c)[0]}${u}`;
		}
	}
	let o =
		e
			.split(r)
			.map((c) => `${s} ${c}`)
			.join(r) + r;
	return n + r + (e ? o : "") + (e && i.length > 0 ? s + r : "") + a + u;
}
function ti(e, t) {
	return [...ni, ...(Array.isArray(t) ? t : [t])].map((r) => `@${e} ${r}`.trim());
}
function zp(e) {
	if (!e.startsWith("#!")) return "";
	let t = e.indexOf(`
`);
	return t === -1 ? e : e.slice(0, t);
}
var oi = zp;
function Qp(e) {
	let t = oi(e);
	t && (e = e.slice(t.length + 1));
	let r = si(e),
		{ pragmas: n, comments: s } = ii(r);
	return { shebang: t, text: e, pragmas: n, comments: s };
}
function pi(e) {
	let { shebang: t, text: r, pragmas: n, comments: s } = Qp(e),
		u = ui(r),
		i = ai({ pragmas: { format: "", ...n }, comments: s.trimStart() });
	return (
		(t
			? `${t}
`
			: "") +
		i +
		(u.startsWith(`
`)
			? `
`
			: `

`) +
		u
	);
}
function Zp(e, t) {
	let { originalText: r, [Symbol.for("comments")]: n, locStart: s, locEnd: u, [Symbol.for("printedComments")]: i } = t,
		{ node: a } = e,
		o = s(a),
		c = u(a);
	for (let m of n) s(m) >= o && u(m) <= c && i.add(m);
	return r.slice(o, c);
}
var ci = Zp;
function us(e, t) {
	var u, i, a, o, c, m, D, y, C;
	if (e.isRoot) return !1;
	let { node: r, key: n, parent: s } = e;
	if (t.__isInHtmlInterpolation && !t.bracketSpacing && nc(r) && or(e)) return !0;
	if (ec(r)) return !1;
	if (r.type === "Identifier") {
		if (((u = r.extra) != null && u.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(r.name)) || (n === "left" && ((r.name === "async" && !s.await) || r.name === "let") && s.type === "ForOfStatement")) return !0;
		if (r.name === "let") {
			let p = (i = e.findAncestor((A) => A.type === "ForOfStatement")) == null ? void 0 : i.left;
			if (p && ie(p, (A) => A === r)) return !0;
		}
		if (n === "object" && r.name === "let" && s.type === "MemberExpression" && s.computed && !s.optional) {
			let p = e.findAncestor((T) => T.type === "ExpressionStatement" || T.type === "ForStatement" || T.type === "ForInStatement"),
				A = p ? (p.type === "ExpressionStatement" ? p.expression : p.type === "ForStatement" ? p.init : p.left) : void 0;
			if (A && ie(A, (T) => T === r)) return !0;
		}
		if (n === "expression")
			switch (r.name) {
				case "await":
				case "interface":
				case "module":
				case "using":
				case "yield":
				case "let":
				case "component":
				case "hook":
				case "type": {
					let p = e.findAncestor((A) => !Te(A));
					if (p !== s && p.type === "ExpressionStatement") return !0;
				}
			}
		return !1;
	}
	if (r.type === "ObjectExpression" || r.type === "FunctionExpression" || r.type === "ClassExpression" || r.type === "DoExpression") {
		let p = (a = e.findAncestor((A) => A.type === "ExpressionStatement")) == null ? void 0 : a.expression;
		if (p && ie(p, (A) => A === r)) return !0;
	}
	if (r.type === "ObjectExpression") {
		let p = (o = e.findAncestor((A) => A.type === "ArrowFunctionExpression")) == null ? void 0 : o.body;
		if (p && p.type !== "SequenceExpression" && p.type !== "AssignmentExpression" && ie(p, (A) => A === r)) return !0;
	}
	switch (s.type) {
		case "ParenthesizedExpression":
			return !1;
		case "ClassDeclaration":
		case "ClassExpression":
			if (n === "superClass" && (r.type === "ArrowFunctionExpression" || r.type === "AssignmentExpression" || r.type === "AwaitExpression" || r.type === "BinaryExpression" || r.type === "ConditionalExpression" || r.type === "LogicalExpression" || r.type === "NewExpression" || r.type === "ObjectExpression" || r.type === "SequenceExpression" || r.type === "TaggedTemplateExpression" || r.type === "UnaryExpression" || r.type === "UpdateExpression" || r.type === "YieldExpression" || r.type === "TSNonNullExpression" || (r.type === "ClassExpression" && w(r.decorators)))) return !0;
			break;
		case "ExportDefaultDeclaration":
			return li(e, t) || r.type === "SequenceExpression";
		case "Decorator":
			if (n === "expression" && !uc(r)) return !0;
			break;
		case "TypeAnnotation":
			if (e.match(void 0, void 0, (p, A) => A === "returnType" && p.type === "ArrowFunctionExpression") && rc(r)) return !0;
			break;
		case "BinaryExpression":
			if (n === "left" && (s.operator === "in" || s.operator === "instanceof") && r.type === "UnaryExpression") return !0;
			break;
		case "VariableDeclarator":
			if (
				n === "init" &&
				e.match(
					void 0,
					void 0,
					(p, A) => A === "declarations" && p.type === "VariableDeclaration",
					(p, A) => A === "left" && p.type === "ForInStatement",
				)
			)
				return !0;
			break;
	}
	switch (r.type) {
		case "UpdateExpression":
			if (s.type === "UnaryExpression") return r.prefix && ((r.operator === "++" && s.operator === "+") || (r.operator === "--" && s.operator === "-"));
		case "UnaryExpression":
			switch (s.type) {
				case "UnaryExpression":
					return r.operator === s.operator && (r.operator === "+" || r.operator === "-");
				case "BindExpression":
					return !0;
				case "MemberExpression":
				case "OptionalMemberExpression":
					return n === "object";
				case "TaggedTemplateExpression":
					return !0;
				case "NewExpression":
				case "CallExpression":
				case "OptionalCallExpression":
					return n === "callee";
				case "BinaryExpression":
					return n === "left" && s.operator === "**";
				case "TSNonNullExpression":
					return !0;
				default:
					return !1;
			}
		case "BinaryExpression":
			if (s.type === "UpdateExpression" || (r.operator === "in" && tc(e))) return !0;
			if (r.operator === "|>" && (c = r.extra) != null && c.parenthesized) {
				let p = e.grandparent;
				if (p.type === "BinaryExpression" && p.operator === "|>") return !0;
			}
		case "TSTypeAssertion":
		case "TSAsExpression":
		case "TSSatisfiesExpression":
		case "AsExpression":
		case "AsConstExpression":
		case "SatisfiesExpression":
		case "LogicalExpression":
			switch (s.type) {
				case "TSAsExpression":
				case "TSSatisfiesExpression":
				case "AsExpression":
				case "AsConstExpression":
				case "SatisfiesExpression":
					return !Te(r);
				case "ConditionalExpression":
					return Te(r) || au(r);
				case "CallExpression":
				case "NewExpression":
				case "OptionalCallExpression":
					return n === "callee";
				case "ClassExpression":
				case "ClassDeclaration":
					return n === "superClass";
				case "TSTypeAssertion":
				case "TaggedTemplateExpression":
				case "UnaryExpression":
				case "JSXSpreadAttribute":
				case "SpreadElement":
				case "BindExpression":
				case "AwaitExpression":
				case "TSNonNullExpression":
				case "UpdateExpression":
					return !0;
				case "MemberExpression":
				case "OptionalMemberExpression":
					return n === "object";
				case "AssignmentExpression":
				case "AssignmentPattern":
					return n === "left" && (r.type === "TSTypeAssertion" || Te(r));
				case "LogicalExpression":
					if (r.type === "LogicalExpression") return s.operator !== r.operator;
				case "BinaryExpression": {
					let { operator: p, type: A } = r;
					if (!p && A !== "TSTypeAssertion") return !0;
					let T = er(p),
						S = s.operator,
						B = er(S);
					return B > T || (n === "right" && B === T) || (B === T && !nr(S, p)) ? !0 : B < T && p === "%" ? S === "+" || S === "-" : !!yu(S);
				}
				default:
					return !1;
			}
		case "SequenceExpression":
			switch (s.type) {
				case "ReturnStatement":
					return !1;
				case "ForStatement":
					return !1;
				case "ExpressionStatement":
					return n !== "expression";
				case "ArrowFunctionExpression":
					return n !== "body";
				default:
					return !0;
			}
		case "YieldExpression":
			if (s.type === "AwaitExpression" || s.type === "TSTypeAssertion") return !0;
		case "AwaitExpression":
			switch (s.type) {
				case "TaggedTemplateExpression":
				case "UnaryExpression":
				case "LogicalExpression":
				case "SpreadElement":
				case "TSAsExpression":
				case "TSSatisfiesExpression":
				case "TSNonNullExpression":
				case "AsExpression":
				case "AsConstExpression":
				case "SatisfiesExpression":
				case "BindExpression":
					return !0;
				case "MemberExpression":
				case "OptionalMemberExpression":
					return n === "object";
				case "NewExpression":
				case "CallExpression":
				case "OptionalCallExpression":
					return n === "callee";
				case "ConditionalExpression":
					return n === "test";
				case "BinaryExpression":
					return !(!r.argument && s.operator === "|>");
				default:
					return !1;
			}
		case "TSFunctionType":
			if (
				e.match(
					(p) => p.type === "TSFunctionType",
					(p, A) => A === "typeAnnotation" && p.type === "TSTypeAnnotation",
					(p, A) => A === "returnType" && p.type === "ArrowFunctionExpression",
				)
			)
				return !0;
		case "TSConditionalType":
		case "TSConstructorType":
			if (n === "extendsType" && s.type === "TSConditionalType") {
				if (r.type === "TSConditionalType") return !0;
				let { typeAnnotation: p } = r.returnType || r.typeAnnotation;
				if ((p.type === "TSTypePredicate" && p.typeAnnotation && (p = p.typeAnnotation.typeAnnotation), p.type === "TSInferType" && p.typeParameter.constraint)) return !0;
			}
			if (n === "checkType" && s.type === "TSConditionalType") return !0;
		case "TSUnionType":
		case "TSIntersectionType":
			if ((s.type === "TSUnionType" || s.type === "TSIntersectionType") && s.types.length > 1 && (!r.types || r.types.length > 1)) return !0;
		case "TSInferType":
			if (r.type === "TSInferType") {
				if (s.type === "TSRestType") return !1;
				if (n === "types" && (s.type === "TSUnionType" || s.type === "TSIntersectionType") && r.typeParameter.type === "TSTypeParameter" && r.typeParameter.constraint) return !0;
			}
		case "TSTypeOperator":
			return s.type === "TSArrayType" || s.type === "TSOptionalType" || s.type === "TSRestType" || (n === "objectType" && s.type === "TSIndexedAccessType") || s.type === "TSTypeOperator" || (s.type === "TSTypeAnnotation" && e.grandparent.type.startsWith("TSJSDoc"));
		case "TSTypeQuery":
			return (n === "objectType" && s.type === "TSIndexedAccessType") || (n === "elementType" && s.type === "TSArrayType");
		case "TypeOperator":
			return s.type === "ArrayTypeAnnotation" || s.type === "NullableTypeAnnotation" || (n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType")) || s.type === "TypeOperator";
		case "TypeofTypeAnnotation":
			return (n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType")) || (n === "elementType" && s.type === "ArrayTypeAnnotation");
		case "ArrayTypeAnnotation":
			return s.type === "NullableTypeAnnotation";
		case "IntersectionTypeAnnotation":
		case "UnionTypeAnnotation":
			return s.type === "TypeOperator" || s.type === "ArrayTypeAnnotation" || s.type === "NullableTypeAnnotation" || s.type === "IntersectionTypeAnnotation" || s.type === "UnionTypeAnnotation" || (n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType"));
		case "InferTypeAnnotation":
		case "NullableTypeAnnotation":
			return s.type === "ArrayTypeAnnotation" || (n === "objectType" && (s.type === "IndexedAccessType" || s.type === "OptionalIndexedAccessType"));
		case "ComponentTypeAnnotation":
		case "FunctionTypeAnnotation": {
			if (r.type === "ComponentTypeAnnotation" && (r.rendersType === null || r.rendersType === void 0)) return !1;
			if (
				e.match(
					void 0,
					(A, T) => T === "typeAnnotation" && A.type === "TypeAnnotation",
					(A, T) => T === "returnType" && A.type === "ArrowFunctionExpression",
				) ||
				e.match(
					void 0,
					(A, T) => T === "typeAnnotation" && A.type === "TypePredicate",
					(A, T) => T === "typeAnnotation" && A.type === "TypeAnnotation",
					(A, T) => T === "returnType" && A.type === "ArrowFunctionExpression",
				)
			)
				return !0;
			let p = s.type === "NullableTypeAnnotation" ? e.grandparent : s;
			return (
				p.type === "UnionTypeAnnotation" ||
				p.type === "IntersectionTypeAnnotation" ||
				p.type === "ArrayTypeAnnotation" ||
				(n === "objectType" && (p.type === "IndexedAccessType" || p.type === "OptionalIndexedAccessType")) ||
				(n === "checkType" && s.type === "ConditionalTypeAnnotation") ||
				(n === "extendsType" && s.type === "ConditionalTypeAnnotation" && ((m = r.returnType) == null ? void 0 : m.type) === "InferTypeAnnotation" && ((D = r.returnType) == null ? void 0 : D.typeParameter.bound)) ||
				p.type === "NullableTypeAnnotation" ||
				(s.type === "FunctionTypeParam" &&
					s.name === null &&
					K(r).some((A) => {
						var T;
						return ((T = A.typeAnnotation) == null ? void 0 : T.type) === "NullableTypeAnnotation";
					}))
			);
		}
		case "ConditionalTypeAnnotation":
			if ((n === "extendsType" && s.type === "ConditionalTypeAnnotation" && r.type === "ConditionalTypeAnnotation") || (n === "checkType" && s.type === "ConditionalTypeAnnotation")) return !0;
		case "OptionalIndexedAccessType":
			return n === "objectType" && s.type === "IndexedAccessType";
		case "StringLiteral":
		case "NumericLiteral":
		case "Literal":
			if (typeof r.value == "string" && s.type === "ExpressionStatement" && !s.directive) {
				let p = e.grandparent;
				return p.type === "Program" || p.type === "BlockStatement";
			}
			return n === "object" && s.type === "MemberExpression" && typeof r.value == "number";
		case "AssignmentExpression": {
			let p = e.grandparent;
			return n === "body" && s.type === "ArrowFunctionExpression" ? !0 : (n === "key" && (s.type === "ClassProperty" || s.type === "PropertyDefinition") && s.computed) || ((n === "init" || n === "update") && s.type === "ForStatement") ? !1 : s.type === "ExpressionStatement" ? r.left.type === "ObjectPattern" : !((n === "key" && s.type === "TSPropertySignature") || s.type === "AssignmentExpression" || (s.type === "SequenceExpression" && p.type === "ForStatement" && (p.init === s || p.update === s)) || (n === "value" && s.type === "Property" && p.type === "ObjectPattern" && p.properties.includes(s)) || s.type === "NGChainedExpression");
		}
		case "ConditionalExpression":
			switch (s.type) {
				case "TaggedTemplateExpression":
				case "UnaryExpression":
				case "SpreadElement":
				case "BinaryExpression":
				case "LogicalExpression":
				case "NGPipeExpression":
				case "ExportDefaultDeclaration":
				case "AwaitExpression":
				case "JSXSpreadAttribute":
				case "TSTypeAssertion":
				case "TypeCastExpression":
				case "TSAsExpression":
				case "TSSatisfiesExpression":
				case "AsExpression":
				case "AsConstExpression":
				case "SatisfiesExpression":
				case "TSNonNullExpression":
					return !0;
				case "NewExpression":
				case "CallExpression":
				case "OptionalCallExpression":
					return n === "callee";
				case "ConditionalExpression":
					return t.experimentalTernaries ? !1 : n === "test";
				case "MemberExpression":
				case "OptionalMemberExpression":
					return n === "object";
				default:
					return !1;
			}
		case "FunctionExpression":
			switch (s.type) {
				case "NewExpression":
				case "CallExpression":
				case "OptionalCallExpression":
					return n === "callee";
				case "TaggedTemplateExpression":
					return !0;
				default:
					return !1;
			}
		case "ArrowFunctionExpression":
			switch (s.type) {
				case "BinaryExpression":
					return s.operator !== "|>" || ((y = r.extra) == null ? void 0 : y.parenthesized);
				case "NewExpression":
				case "CallExpression":
				case "OptionalCallExpression":
					return n === "callee";
				case "MemberExpression":
				case "OptionalMemberExpression":
					return n === "object";
				case "TSAsExpression":
				case "TSSatisfiesExpression":
				case "AsExpression":
				case "AsConstExpression":
				case "SatisfiesExpression":
				case "TSNonNullExpression":
				case "BindExpression":
				case "TaggedTemplateExpression":
				case "UnaryExpression":
				case "LogicalExpression":
				case "AwaitExpression":
				case "TSTypeAssertion":
					return !0;
				case "ConditionalExpression":
					return n === "test";
				default:
					return !1;
			}
		case "ClassExpression":
			switch (s.type) {
				case "NewExpression":
					return n === "callee";
				default:
					return !1;
			}
		case "OptionalMemberExpression":
		case "OptionalCallExpression":
		case "CallExpression":
		case "MemberExpression":
			if (sc(e)) return !0;
		case "TaggedTemplateExpression":
		case "TSNonNullExpression":
			if (n === "callee" && (s.type === "BindExpression" || s.type === "NewExpression")) {
				let p = r;
				for (; p; )
					switch (p.type) {
						case "CallExpression":
						case "OptionalCallExpression":
							return !0;
						case "MemberExpression":
						case "OptionalMemberExpression":
						case "BindExpression":
							p = p.object;
							break;
						case "TaggedTemplateExpression":
							p = p.tag;
							break;
						case "TSNonNullExpression":
							p = p.expression;
							break;
						default:
							return !1;
					}
			}
			return !1;
		case "BindExpression":
			return (n === "callee" && (s.type === "BindExpression" || s.type === "NewExpression")) || (n === "object" && q(s));
		case "NGPipeExpression":
			return !(s.type === "NGRoot" || s.type === "NGMicrosyntaxExpression" || (s.type === "ObjectProperty" && !((C = r.extra) != null && C.parenthesized)) || U(s) || (n === "arguments" && L(s)) || (n === "right" && s.type === "NGPipeExpression") || (n === "property" && s.type === "MemberExpression") || s.type === "AssignmentExpression");
		case "JSXFragment":
		case "JSXElement":
			return n === "callee" || (n === "left" && s.type === "BinaryExpression" && s.operator === "<") || (!U(s) && s.type !== "ArrowFunctionExpression" && s.type !== "AssignmentExpression" && s.type !== "AssignmentPattern" && s.type !== "BinaryExpression" && s.type !== "NewExpression" && s.type !== "ConditionalExpression" && s.type !== "ExpressionStatement" && s.type !== "JsExpressionRoot" && s.type !== "JSXAttribute" && s.type !== "JSXElement" && s.type !== "JSXExpressionContainer" && s.type !== "JSXFragment" && s.type !== "LogicalExpression" && !L(s) && !Ae(s) && s.type !== "ReturnStatement" && s.type !== "ThrowStatement" && s.type !== "TypeCastExpression" && s.type !== "VariableDeclarator" && s.type !== "YieldExpression");
		case "TSInstantiationExpression":
			return n === "object" && q(s);
	}
	return !1;
}
var ec = v([
	"BlockStatement",
	"BreakStatement",
	"ComponentDeclaration",
	"ClassBody",
	"ClassDeclaration",
	"ClassMethod",
	"ClassProperty",
	"PropertyDefinition",
	"ClassPrivateProperty",
	"ContinueStatement",
	"DebuggerStatement",
	"DeclareComponent",
	"DeclareClass",
	"DeclareExportAllDeclaration",
	"DeclareExportDeclaration",
	"DeclareFunction",
	"DeclareHook",
	"DeclareInterface",
	"DeclareModule",
	"DeclareModuleExports",
	"DeclareNamespace",
	"DeclareVariable",
	"DeclareEnum",
	"DoWhileStatement",
	"EnumDeclaration",
	"ExportAllDeclaration",
	"ExportDefaultDeclaration",
	"ExportNamedDeclaration",
	"ExpressionStatement",
	"ForInStatement",
	"ForOfStatement",
	"ForStatement",
	"FunctionDeclaration",
	"HookDeclaration",
	"IfStatement",
	"ImportDeclaration",
	"InterfaceDeclaration",
	"LabeledStatement",
	"MethodDefinition",
	"ReturnStatement",
	"SwitchStatement",
	"ThrowStatement",
	"TryStatement",
	"TSDeclareFunction",
	"TSEnumDeclaration",
	"TSImportEqualsDeclaration",
	"TSInterfaceDeclaration",
	"TSModuleDeclaration",
	"TSNamespaceExportDeclaration",
	"TypeAlias",
	"VariableDeclaration",
	"WhileStatement",
	"WithStatement",
]);
function tc(e) {
	let t = 0,
		{ node: r } = e;
	for (; r; ) {
		let n = e.getParentNode(t++);
		if ((n == null ? void 0 : n.type) === "ForStatement" && n.init === r) return !0;
		r = n;
	}
	return !1;
}
function rc(e) {
	return tr(e, (t) => t.type === "ObjectTypeAnnotation" && tr(t, (r) => r.type === "FunctionTypeAnnotation"));
}
function nc(e) {
	return se(e);
}
function or(e) {
	let { parent: t, key: r } = e;
	switch (t.type) {
		case "NGPipeExpression":
			if (r === "arguments" && e.isLast) return e.callParent(or);
			break;
		case "ObjectProperty":
			if (r === "value") return e.callParent(() => e.key === "properties" && e.isLast);
			break;
		case "BinaryExpression":
		case "LogicalExpression":
			if (r === "right") return e.callParent(or);
			break;
		case "ConditionalExpression":
			if (r === "alternate") return e.callParent(or);
			break;
		case "UnaryExpression":
			if (t.prefix) return e.callParent(or);
			break;
	}
	return !1;
}
function li(e, t) {
	let { node: r, parent: n } = e;
	return r.type === "FunctionExpression" || r.type === "ClassExpression" ? n.type === "ExportDefaultDeclaration" || !us(e, t) : !jt(r) || (n.type !== "ExportDefaultDeclaration" && us(e, t)) ? !1 : e.call(() => li(e, t), ...Pr(r));
}
function sc(e) {
	let { node: t, parent: r, grandparent: n, key: s } = e;
	return !!(
		((t.type === "OptionalMemberExpression" || t.type === "OptionalCallExpression") && ((s === "object" && r.type === "MemberExpression") || (s === "callee" && (r.type === "CallExpression" || r.type === "NewExpression")) || (r.type === "TSNonNullExpression" && n.type === "MemberExpression" && n.object === r))) ||
		(e.match(
			() => t.type === "CallExpression" || t.type === "MemberExpression",
			(u, i) => i === "expression" && u.type === "ChainExpression",
		) &&
			(e.match(void 0, void 0, (u, i) => (i === "callee" && ((u.type === "CallExpression" && !u.optional) || u.type === "NewExpression")) || (i === "object" && u.type === "MemberExpression" && !u.optional)) ||
				e.match(
					void 0,
					void 0,
					(u, i) => i === "expression" && u.type === "TSNonNullExpression",
					(u, i) => i === "object" && u.type === "MemberExpression",
				))) ||
		e.match(
			() => t.type === "CallExpression" || t.type === "MemberExpression",
			(u, i) => i === "expression" && u.type === "TSNonNullExpression",
			(u, i) => i === "expression" && u.type === "ChainExpression",
			(u, i) => i === "object" && u.type === "MemberExpression",
		)
	);
}
function is(e) {
	return e.type === "Identifier" ? !0 : q(e) ? !e.computed && !e.optional && e.property.type === "Identifier" && is(e.object) : !1;
}
function uc(e) {
	return e.type === "ChainExpression" && (e = e.expression), is(e) || (L(e) && !e.optional && is(e.callee));
}
var Be = us;
function ic(e, t) {
	let r = t - 1;
	(r = Ge(e, r, { backwards: !0 })), (r = Ue(e, r, { backwards: !0 })), (r = Ge(e, r, { backwards: !0 }));
	let n = Ue(e, r, { backwards: !0 });
	return r !== n;
}
var mi = ic;
var ac = () => !0;
function as(e, t) {
	let r = e.node;
	return (r.printed = !0), t.printer.printComment(e, t);
}
function oc(e, t) {
	var m;
	let r = e.node,
		n = [as(e, t)],
		{ printer: s, originalText: u, locStart: i, locEnd: a } = t;
	if ((m = s.isBlockComment) == null ? void 0 : m.call(s, r)) {
		let D = te(u, a(r)) ? (te(u, i(r), { backwards: !0 }) ? F : x) : " ";
		n.push(D);
	} else n.push(F);
	let c = Ue(u, Ge(u, a(r)));
	return c !== !1 && te(u, c) && n.push(F), n;
}
function pc(e, t, r) {
	var c;
	let n = e.node,
		s = as(e, t),
		{ printer: u, originalText: i, locStart: a } = t,
		o = (c = u.isBlockComment) == null ? void 0 : c.call(u, n);
	if ((r != null && r.hasLineSuffix && !(r != null && r.isBlock)) || te(i, a(n), { backwards: !0 })) {
		let m = mi(i, a(n));
		return { doc: Wn([F, m ? F : "", s]), isBlock: o, hasLineSuffix: !0 };
	}
	return !o || (r != null && r.hasLineSuffix) ? { doc: [Wn([" ", s]), Ee], isBlock: o, hasLineSuffix: !0 } : { doc: [" ", s], isBlock: o, hasLineSuffix: !1 };
}
function M(e, t, r = {}) {
	let { node: n } = e;
	if (!w(n == null ? void 0 : n.comments)) return "";
	let { indent: s = !1, marker: u, filter: i = ac } = r,
		a = [];
	if (
		(e.each(({ node: c }) => {
			c.leading || c.trailing || c.marker !== u || !i(c) || a.push(as(e, t));
		}, "comments"),
		a.length === 0)
	)
		return "";
	let o = P(F, a);
	return s ? f([F, o]) : o;
}
function os(e, t) {
	let r = e.node;
	if (!r) return {};
	let n = t[Symbol.for("printedComments")];
	if ((r.comments || []).filter((o) => !n.has(o)).length === 0) return { leading: "", trailing: "" };
	let u = [],
		i = [],
		a;
	return (
		e.each(() => {
			let o = e.node;
			if (n != null && n.has(o)) return;
			let { leading: c, trailing: m } = o;
			c ? u.push(oc(e, t)) : m && ((a = pc(e, t, a)), i.push(a.doc));
		}, "comments"),
		{ leading: u, trailing: i }
	);
}
function ye(e, t, r) {
	let { leading: n, trailing: s } = os(e, r);
	return !n && !s ? t : ir(t, (u) => [n, u, s]);
}
var ps = class extends Error {
		name = "UnexpectedNodeError";
		constructor(t, r, n = "type") {
			super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`), (this.node = t);
		}
	},
	Me = ps;
function cs(e) {
	if (typeof e != "string") throw new TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var Re,
	ls = class {
		constructor(t) {
			Ws(this, Re);
			Gs(this, Re, new Set(t));
		}
		getLeadingWhitespaceCount(t) {
			let r = pt(this, Re),
				n = 0;
			for (let s = 0; s < t.length && r.has(t.charAt(s)); s++) n++;
			return n;
		}
		getTrailingWhitespaceCount(t) {
			let r = pt(this, Re),
				n = 0;
			for (let s = t.length - 1; s >= 0 && r.has(t.charAt(s)); s--) n++;
			return n;
		}
		getLeadingWhitespace(t) {
			let r = this.getLeadingWhitespaceCount(t);
			return t.slice(0, r);
		}
		getTrailingWhitespace(t) {
			let r = this.getTrailingWhitespaceCount(t);
			return t.slice(t.length - r);
		}
		hasLeadingWhitespace(t) {
			return pt(this, Re).has(t.charAt(0));
		}
		hasTrailingWhitespace(t) {
			return pt(this, Re).has(O(!1, t, -1));
		}
		trimStart(t) {
			let r = this.getLeadingWhitespaceCount(t);
			return t.slice(r);
		}
		trimEnd(t) {
			let r = this.getTrailingWhitespaceCount(t);
			return t.slice(0, t.length - r);
		}
		trim(t) {
			return this.trimEnd(this.trimStart(t));
		}
		split(t, r = !1) {
			let n = `[${cs([...pt(this, Re)].join(""))}]+`,
				s = new RegExp(r ? `(${n})` : n, "u");
			return t.split(s);
		}
		hasWhitespaceCharacter(t) {
			let r = pt(this, Re);
			return Array.prototype.some.call(t, (n) => r.has(n));
		}
		hasNonWhitespaceCharacter(t) {
			let r = pt(this, Re);
			return Array.prototype.some.call(t, (n) => !r.has(n));
		}
		isWhitespaceOnly(t) {
			let r = pt(this, Re);
			return Array.prototype.every.call(t, (n) => r.has(n));
		}
	};
Re = new WeakMap();
var yi = ls;
var Nr = new yi(` 
\r	`),
	ms = (e) => e === "" || e === x || e === F || e === E;
function cc(e, t, r) {
	var _, J, j;
	let { node: n } = e;
	if (n.type === "JSXElement" && gc(n)) return [r("openingElement"), r("closingElement")];
	let s = n.type === "JSXElement" ? r("openingElement") : r("openingFragment"),
		u = n.type === "JSXElement" ? r("closingElement") : r("closingFragment");
	if (n.children.length === 1 && n.children[0].type === "JSXExpressionContainer" && (n.children[0].expression.type === "TemplateLiteral" || n.children[0].expression.type === "TaggedTemplateExpression")) return [s, ...e.map(r, "children"), u];
	n.children = n.children.map((h) => (Sc(h) ? { type: "JSXText", value: " ", raw: " " } : h));
	let i = n.children.some(X),
		a = n.children.filter((h) => h.type === "JSXExpressionContainer").length > 1,
		o = n.type === "JSXElement" && n.openingElement.attributes.length > 1,
		c = ne(s) || i || o || a,
		m = e.parent.rootMarker === "mdx",
		D = t.singleQuote ? "{' '}" : '{" "}',
		y = m ? " " : b([D, E], " "),
		C = ((J = (_ = n.openingElement) == null ? void 0 : _.name) == null ? void 0 : J.name) === "fbt",
		p = lc(e, t, r, y, C),
		A = n.children.some((h) => pr(h));
	for (let h = p.length - 2; h >= 0; h--) {
		let W = p[h] === "" && p[h + 1] === "",
			Fe = p[h] === F && p[h + 1] === "" && p[h + 2] === F,
			H = (p[h] === E || p[h] === F) && p[h + 1] === "" && p[h + 2] === y,
			ue = p[h] === y && p[h + 1] === "" && (p[h + 2] === E || p[h + 2] === F),
			Z = p[h] === y && p[h + 1] === "" && p[h + 2] === y,
			It = (p[h] === E && p[h + 1] === "" && p[h + 2] === F) || (p[h] === F && p[h + 1] === "" && p[h + 2] === E);
		(Fe && A) || W || H || Z || It ? p.splice(h, 2) : ue && p.splice(h + 1, 2);
	}
	for (; p.length > 0 && ms(O(!1, p, -1)); ) p.pop();
	for (; p.length > 1 && ms(p[0]) && ms(p[1]); ) p.shift(), p.shift();
	let T = [];
	for (let [h, W] of p.entries()) {
		if (W === y) {
			if (h === 1 && p[h - 1] === "") {
				if (p.length === 2) {
					T.push(D);
					continue;
				}
				T.push([D, F]);
				continue;
			} else if (h === p.length - 1) {
				T.push(D);
				continue;
			} else if (p[h - 1] === "" && p[h - 2] === F) {
				T.push(D);
				continue;
			}
		}
		T.push(W), ne(W) && (c = !0);
	}
	let S = A ? qt(T) : l(T, { shouldBreak: !0 });
	if ((((j = t.cursorNode) == null ? void 0 : j.type) === "JSXText" && n.children.includes(t.cursorNode) && (S = [Un, S, Un]), m)) return S;
	let B = l([s, f([F, S]), F, u]);
	return c ? B : ze([l([s, ...p, u]), B]);
}
function lc(e, t, r, n, s) {
	let u = [];
	return (
		e.each(({ node: i, next: a }) => {
			if (i.type === "JSXText") {
				let o = fe(i);
				if (pr(i)) {
					let c = Nr.split(o, !0);
					c[0] === "" && (u.push(""), c.shift(), /\n/u.test(c[0]) ? u.push(fi(s, c[1], i, a)) : u.push(n), c.shift());
					let m;
					if ((O(!1, c, -1) === "" && (c.pop(), (m = c.pop())), c.length === 0)) return;
					for (let [D, y] of c.entries()) D % 2 === 1 ? u.push(x) : u.push(y);
					m !== void 0 ? (/\n/u.test(m) ? u.push(fi(s, O(!1, u, -1), i, a)) : u.push(n)) : u.push(Di(s, O(!1, u, -1), i, a));
				} else /\n/u.test(o) ? o.match(/\n/gu).length > 1 && u.push("", F) : u.push("", n);
			} else {
				let o = r();
				if ((u.push(o), a && pr(a))) {
					let m = Nr.trim(fe(a)),
						[D] = Nr.split(m);
					u.push(Di(s, D, i, a));
				} else u.push(F);
			}
		}, "children"),
		u
	);
}
function Di(e, t, r, n) {
	return e ? "" : (r.type === "JSXElement" && !r.closingElement) || ((n == null ? void 0 : n.type) === "JSXElement" && !n.closingElement) ? (t.length === 1 ? E : F) : E;
}
function fi(e, t, r, n) {
	return e ? F : t.length === 1 ? ((r.type === "JSXElement" && !r.closingElement) || ((n == null ? void 0 : n.type) === "JSXElement" && !n.closingElement) ? F : E) : F;
}
var mc = new Set(["ArrayExpression", "TupleExpression", "JSXAttribute", "JSXElement", "JSXExpressionContainer", "JSXFragment", "ExpressionStatement", "CallExpression", "OptionalCallExpression", "ConditionalExpression", "JsExpressionRoot"]);
function yc(e, t, r) {
	let { parent: n } = e;
	if (mc.has(n.type)) return t;
	let s = e.match(
			void 0,
			(i) => i.type === "ArrowFunctionExpression",
			L,
			(i) => i.type === "JSXExpressionContainer",
		),
		u = Be(e, r);
	return l([u ? "" : b("("), f([E, t]), E, u ? "" : b(")")], {
		shouldBreak: s,
	});
}
function Dc(e, t, r) {
	let { node: n } = e,
		s = [];
	if ((s.push(r("name")), n.value)) {
		let u;
		if (Q(n.value)) {
			let i = fe(n.value),
				a = N(!1, N(!1, i.slice(1, -1), "&apos;", "'"), "&quot;", '"'),
				o = xr(a, t.jsxSingleQuote);
			(a = o === '"' ? N(!1, a, '"', "&quot;") : N(!1, a, "'", "&apos;")), (u = e.call(() => ye(e, Ie(o + a + o), t), "value"));
		} else u = r("value");
		s.push("=", u);
	}
	return s;
}
function fc(e, t, r) {
	let { node: n } = e,
		s = (u, i) => u.type === "JSXEmptyExpression" || (!d(u) && (U(u) || se(u) || u.type === "ArrowFunctionExpression" || (u.type === "AwaitExpression" && (s(u.argument, u) || u.argument.type === "JSXElement")) || L(u) || (u.type === "ChainExpression" && L(u.expression)) || u.type === "FunctionExpression" || u.type === "TemplateLiteral" || u.type === "TaggedTemplateExpression" || u.type === "DoExpression" || (X(i) && (u.type === "ConditionalExpression" || De(u)))));
	return s(n.expression, e.parent) ? l(["{", r("expression"), ke, "}"]) : l(["{", f([E, r("expression")]), E, ke, "}"]);
}
function Ec(e, t, r) {
	var a, o;
	let { node: n } = e,
		s = d(n.name) || d(n.typeParameters) || d(n.typeArguments);
	if (n.selfClosing && n.attributes.length === 0 && !s) return ["<", r("name"), n.typeArguments ? r("typeArguments") : r("typeParameters"), " />"];
	if (
		((a = n.attributes) == null ? void 0 : a.length) === 1 &&
		Q(n.attributes[0].value) &&
		!n.attributes[0].value.value.includes(`
`) &&
		!s &&
		!d(n.attributes[0])
	)
		return l(["<", r("name"), n.typeArguments ? r("typeArguments") : r("typeParameters"), " ", ...e.map(r, "attributes"), n.selfClosing ? " />" : ">"]);
	let u =
			(o = n.attributes) == null
				? void 0
				: o.some(
						(c) =>
							Q(c.value) &&
							c.value.value.includes(`
`),
					),
		i = t.singleAttributePerLine && n.attributes.length > 1 ? F : x;
	return l(["<", r("name"), n.typeArguments ? r("typeArguments") : r("typeParameters"), f(e.map(() => [i, r()], "attributes")), ...Fc(n, t, s)], { shouldBreak: u });
}
function Fc(e, t, r) {
	return e.selfClosing ? [x, "/>"] : Cc(e, t, r) ? [">"] : [E, ">"];
}
function Cc(e, t, r) {
	let n = e.attributes.length > 0 && d(O(!1, e.attributes, -1), g.Trailing);
	return (e.attributes.length === 0 && !r) || ((t.bracketSameLine || t.jsxBracketSameLine) && (!r || e.attributes.length > 0) && !n);
}
function Ac(e, t, r) {
	let { node: n } = e,
		s = [];
	s.push("</");
	let u = r("name");
	return d(n.name, g.Leading | g.Line) ? s.push(f([F, u]), F) : d(n.name, g.Leading | g.Block) ? s.push(" ", u) : s.push(u), s.push(">"), s;
}
function Tc(e, t) {
	let { node: r } = e,
		n = d(r),
		s = d(r, g.Line),
		u = r.type === "JSXOpeningFragment";
	return [u ? "<" : "</", f([s ? F : n && !u ? " " : "", M(e, t)]), s ? F : "", ">"];
}
function dc(e, t, r) {
	let n = ye(e, cc(e, t, r), t);
	return yc(e, n, t);
}
function xc(e, t) {
	let { node: r } = e,
		n = d(r, g.Line);
	return [M(e, t, { indent: n }), n ? F : ""];
}
function hc(e, t, r) {
	let { node: n } = e;
	return [
		"{",
		e.call(
			({ node: s }) => {
				let u = ["...", r()];
				return !d(s) || !zn(e) ? u : [f([E, ye(e, u, t)]), E];
			},
			n.type === "JSXSpreadAttribute" ? "argument" : "expression",
		),
		"}",
	];
}
function Ei(e, t, r) {
	let { node: n } = e;
	if (n.type.startsWith("JSX"))
		switch (n.type) {
			case "JSXAttribute":
				return Dc(e, t, r);
			case "JSXIdentifier":
				return n.name;
			case "JSXNamespacedName":
				return P(":", [r("namespace"), r("name")]);
			case "JSXMemberExpression":
				return P(".", [r("object"), r("property")]);
			case "JSXSpreadAttribute":
			case "JSXSpreadChild":
				return hc(e, t, r);
			case "JSXExpressionContainer":
				return fc(e, t, r);
			case "JSXFragment":
			case "JSXElement":
				return dc(e, t, r);
			case "JSXOpeningElement":
				return Ec(e, t, r);
			case "JSXClosingElement":
				return Ac(e, t, r);
			case "JSXOpeningFragment":
			case "JSXClosingFragment":
				return Tc(e, t);
			case "JSXEmptyExpression":
				return xc(e, t);
			case "JSXText":
				throw new Error("JSXText should be handled by JSXElement");
			default:
				throw new Me(n, "JSX");
		}
}
function gc(e) {
	if (e.children.length === 0) return !0;
	if (e.children.length > 1) return !1;
	let t = e.children[0];
	return t.type === "JSXText" && !pr(t);
}
function pr(e) {
	return e.type === "JSXText" && (Nr.hasNonWhitespaceCharacter(fe(e)) || !/\n/u.test(fe(e)));
}
function Sc(e) {
	return e.type === "JSXExpressionContainer" && Q(e.expression) && e.expression.value === " " && !d(e.expression);
}
function Fi(e) {
	let { node: t, parent: r } = e;
	if (!X(t) || !X(r)) return !1;
	let { index: n, siblings: s } = e,
		u;
	for (let i = n; i > 0; i--) {
		let a = s[i - 1];
		if (!(a.type === "JSXText" && !pr(a))) {
			u = a;
			break;
		}
	}
	return (u == null ? void 0 : u.type) === "JSXExpressionContainer" && u.expression.type === "JSXEmptyExpression" && Bt(u.expression);
}
function Bc(e) {
	return Bt(e.node) || Fi(e);
}
var Xr = Bc;
var bc = 0;
function Yr(e, t, r) {
	var J;
	let { node: n, parent: s, grandparent: u, key: i } = e,
		a = i !== "body" && (s.type === "IfStatement" || s.type === "WhileStatement" || s.type === "SwitchStatement" || s.type === "DoWhileStatement"),
		o = n.operator === "|>" && ((J = e.root.extra) == null ? void 0 : J.__isUsingHackPipeline),
		c = ys(e, r, t, !1, a);
	if (a) return c;
	if (o) return l(c);
	if ((L(s) && s.callee === n) || s.type === "UnaryExpression" || (q(s) && !s.computed)) return l([f([E, ...c]), E]);
	let m = s.type === "ReturnStatement" || s.type === "ThrowStatement" || (s.type === "JSXExpressionContainer" && u.type === "JSXAttribute") || (n.operator !== "|" && s.type === "JsExpressionRoot") || (n.type !== "NGPipeExpression" && ((s.type === "NGRoot" && t.parser === "__ng_binding") || (s.type === "NGMicrosyntaxExpression" && u.type === "NGMicrosyntax" && u.body.length === 1))) || (n === s.body && s.type === "ArrowFunctionExpression") || (n !== s.body && s.type === "ForStatement") || (s.type === "ConditionalExpression" && u.type !== "ReturnStatement" && u.type !== "ThrowStatement" && !L(u)) || s.type === "TemplateLiteral",
		D = s.type === "AssignmentExpression" || s.type === "VariableDeclarator" || s.type === "ClassProperty" || s.type === "PropertyDefinition" || s.type === "TSAbstractPropertyDefinition" || s.type === "ClassPrivateProperty" || Ae(s),
		y = De(n.left) && nr(n.operator, n.left.operator);
	if (m || (Ut(n) && !y) || (!Ut(n) && D)) return l(c);
	if (c.length === 0) return "";
	let C = X(n.right),
		p = c.findIndex((j) => typeof j != "string" && !Array.isArray(j) && j.type === le),
		A = c.slice(0, p === -1 ? 1 : p + 1),
		T = c.slice(A.length, C ? -1 : void 0),
		S = Symbol("logicalChain-" + ++bc),
		B = l([...A, f(T)], { id: S });
	if (!C) return B;
	let _ = O(!1, c, -1);
	return l([B, At(_, { groupId: S })]);
}
function ys(e, t, r, n, s) {
	var A;
	let { node: u } = e;
	if (!De(u)) return [l(t())];
	let i = [];
	nr(u.operator, u.left.operator) ? (i = e.call((T) => ys(T, t, r, !0, s), "left")) : i.push(l(t("left")));
	let a = Ut(u),
		o = (u.operator === "|>" || u.type === "NGPipeExpression" || Pc(e, r)) && !Oe(r.originalText, u.right),
		c = u.type === "NGPipeExpression" ? "|" : u.operator,
		m =
			u.type === "NGPipeExpression" && u.arguments.length > 0
				? l(
						f([
							E,
							": ",
							P(
								[x, ": "],
								e.map(() => he(2, l(t())), "arguments"),
							),
						]),
					)
				: "",
		D;
	if (a) D = [c, " ", t("right"), m];
	else {
		let S = c === "|>" && ((A = e.root.extra) == null ? void 0 : A.__isUsingHackPipeline) ? e.call((B) => ys(B, t, r, !0, s), "right") : t("right");
		D = [o ? x : "", c, o ? " " : x, S, m];
	}
	let { parent: y } = e,
		C = d(u.left, g.Trailing | g.Line),
		p = C || (!(s && u.type === "LogicalExpression") && y.type !== u.type && u.left.type !== u.type && u.right.type !== u.type);
	if ((i.push(o ? "" : " ", p ? l(D, { shouldBreak: C }) : D), n && d(u))) {
		let T = Wt(ye(e, i, r));
		return T.type === Pe ? T.parts : Array.isArray(T) ? T : [T];
	}
	return i;
}
function Ut(e) {
	return e.type !== "LogicalExpression" ? !1 : !!((se(e.right) && e.right.properties.length > 0) || (U(e.right) && e.right.elements.length > 0) || X(e.right));
}
var Ci = (e) => e.type === "BinaryExpression" && e.operator === "|";
function Pc(e, t) {
	return (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && Ci(e.node) && !e.hasAncestor((r) => !Ci(r) && r.type !== "JsExpressionRoot");
}
function Ti(e, t, r) {
	let { node: n } = e;
	if (n.type.startsWith("NG"))
		switch (n.type) {
			case "NGRoot":
				return [r("node"), d(n.node) ? " //" + ct(n.node)[0].value.trimEnd() : ""];
			case "NGPipeExpression":
				return Yr(e, t, r);
			case "NGChainedExpression":
				return l(
					P(
						[";", x],
						e.map(() => (Ic(e) ? r() : ["(", r(), ")"]), "expressions"),
					),
				);
			case "NGEmptyExpression":
				return "";
			case "NGMicrosyntax":
				return e.map(() => [e.isFirst ? "" : Ai(e) ? " " : [";", x], r()], "body");
			case "NGMicrosyntaxKey":
				return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/iu.test(n.name) ? n.name : JSON.stringify(n.name);
			case "NGMicrosyntaxExpression":
				return [r("expression"), n.alias === null ? "" : [" as ", r("alias")]];
			case "NGMicrosyntaxKeyedExpression": {
				let { index: s, parent: u } = e,
					i = Ai(e) || (((s === 1 && (n.key.name === "then" || n.key.name === "else" || n.key.name === "as")) || ((s === 2 || s === 3) && ((n.key.name === "else" && u.body[s - 1].type === "NGMicrosyntaxKeyedExpression" && u.body[s - 1].key.name === "then") || n.key.name === "track"))) && u.body[0].type === "NGMicrosyntaxExpression");
				return [r("key"), i ? " " : ": ", r("expression")];
			}
			case "NGMicrosyntaxLet":
				return ["let ", r("key"), n.value === null ? "" : [" = ", r("value")]];
			case "NGMicrosyntaxAs":
				return [r("key"), " as ", r("alias")];
			default:
				throw new Me(n, "Angular");
		}
}
function Ai({ node: e, index: t }) {
	return e.type === "NGMicrosyntaxKeyedExpression" && e.key.name === "of" && t === 1;
}
var kc = v(["CallExpression", "OptionalCallExpression", "AssignmentExpression"]);
function Ic({ node: e }) {
	return tr(e, kc);
}
function Ds(e, t, r) {
	let { node: n } = e;
	return l([P(x, e.map(r, "decorators")), hi(n, t) ? F : x]);
}
function di(e, t, r) {
	return gi(e.node) ? [P(F, e.map(r, "declaration", "decorators")), F] : "";
}
function xi(e, t, r) {
	let { node: n, parent: s } = e,
		{ decorators: u } = n;
	if (!w(u) || gi(s) || Xr(e)) return "";
	let i = n.type === "ClassExpression" || n.type === "ClassDeclaration" || hi(n, t);
	return [e.key === "declaration" && iu(s) ? F : i ? Ee : "", P(x, e.map(r, "decorators")), x];
}
function hi(e, t) {
	return e.decorators.some((r) => te(t.originalText, k(r)));
}
function gi(e) {
	var r;
	if (e.type !== "ExportDefaultDeclaration" && e.type !== "ExportNamedDeclaration" && e.type !== "DeclareExportDeclaration") return !1;
	let t = (r = e.declaration) == null ? void 0 : r.decorators;
	return w(t) && ht(e, t[0]);
}
var Dt = class extends Error {
	name = "ArgExpansionBailout";
};
function Lc(e, t, r) {
	let { node: n } = e,
		s = oe(n);
	if (s.length === 0) return ["(", M(e, t), ")"];
	let u = s.length - 1;
	if (_c(s)) {
		let y = ["("];
		return (
			Rt(e, (C, p) => {
				y.push(r()), p !== u && y.push(", ");
			}),
			y.push(")"),
			y
		);
	}
	let i = !1,
		a = [];
	Rt(e, ({ node: y }, C) => {
		let p = r();
		C === u || (pe(y, t) ? ((i = !0), (p = [p, ",", F, F])) : (p = [p, ",", x])), a.push(p);
	});
	let o = n.type === "ImportExpression" || n.callee.type === "Import",
		c = !t.parser.startsWith("__ng_") && !o && ae(t, "all") ? "," : "";
	function m() {
		return l(["(", f([x, ...a]), c, x, ")"], { shouldBreak: !0 });
	}
	if (i || (e.parent.type !== "Decorator" && lu(s))) return m();
	if (Oc(s)) {
		let y = a.slice(1);
		if (y.some(ne)) return m();
		let C;
		try {
			C = r(Rn(n, 0), { expandFirstArg: !0 });
		} catch (p) {
			if (p instanceof Dt) return m();
			throw p;
		}
		return ne(C) ? [Ee, ze([["(", l(C, { shouldBreak: !0 }), ", ", ...y, ")"], m()])] : ze([["(", C, ", ", ...y, ")"], ["(", l(C, { shouldBreak: !0 }), ", ", ...y, ")"], m()]);
	}
	if (wc(s, a, t)) {
		let y = a.slice(0, -1);
		if (y.some(ne)) return m();
		let C;
		try {
			C = r(Rn(n, -1), { expandLastArg: !0 });
		} catch (p) {
			if (p instanceof Dt) return m();
			throw p;
		}
		return ne(C) ? [Ee, ze([["(", ...y, l(C, { shouldBreak: !0 }), ")"], m()])] : ze([["(", ...y, C, ")"], ["(", ...y, l(C, { shouldBreak: !0 }), ")"], m()]);
	}
	let D = ["(", f([E, ...a]), b(c), E, ")"];
	return Or(e) ? D : l(D, { shouldBreak: a.some(ne) || i });
}
function cr(e, t = !1) {
	return (se(e) && (e.properties.length > 0 || d(e))) || (U(e) && (e.elements.length > 0 || d(e))) || (e.type === "TSTypeAssertion" && cr(e.expression)) || (Te(e) && cr(e.expression)) || e.type === "FunctionExpression" || (e.type === "ArrowFunctionExpression" && (!e.returnType || !e.returnType.typeAnnotation || e.returnType.typeAnnotation.type !== "TSTypeReference" || jc(e.body)) && (e.body.type === "BlockStatement" || (e.body.type === "ArrowFunctionExpression" && cr(e.body, !0)) || se(e.body) || U(e.body) || (!t && (L(e.body) || e.body.type === "ConditionalExpression")) || X(e.body))) || e.type === "DoExpression" || e.type === "ModuleExpression";
}
function wc(e, t, r) {
	var u, i;
	let n = O(!1, e, -1);
	if (e.length === 1) {
		let a = O(!1, t, -1);
		if ((u = a.label) != null && u.embed && ((i = a.label) == null ? void 0 : i.hug) !== !1) return !0;
	}
	let s = O(!1, e, -2);
	return !d(n, g.Leading) && !d(n, g.Trailing) && cr(n) && (!s || s.type !== n.type) && (e.length !== 2 || s.type !== "ArrowFunctionExpression" || !U(n)) && !(e.length > 1 && fs(n, r));
}
function Oc(e) {
	if (e.length !== 2) return !1;
	let [t, r] = e;
	return t.type === "ModuleExpression" && vc(r) ? !0 : !d(t) && (t.type === "FunctionExpression" || (t.type === "ArrowFunctionExpression" && t.body.type === "BlockStatement")) && r.type !== "FunctionExpression" && r.type !== "ArrowFunctionExpression" && r.type !== "ConditionalExpression" && Bi(r) && !cr(r);
}
function Bi(e) {
	if (e.type === "ParenthesizedExpression") return Bi(e.expression);
	if (Te(e) || e.type === "TypeCastExpression") {
		let { typeAnnotation: t } = e;
		if ((t.type === "TypeAnnotation" && (t = t.typeAnnotation), t.type === "TSArrayType" && ((t = t.elementType), t.type === "TSArrayType" && (t = t.elementType)), t.type === "GenericTypeAnnotation" || t.type === "TSTypeReference")) {
			let r = t.typeArguments ?? t.typeParameters;
			(r == null ? void 0 : r.params.length) === 1 && (t = r.params[0]);
		}
		return Mt(t) && be(e.expression, 1);
	}
	return lt(e) && oe(e).length > 1 ? !1 : De(e) ? be(e.left, 1) && be(e.right, 1) : vn(e) || be(e);
}
function _c(e) {
	return e.length === 2 ? Si(e, 0) : e.length === 3 ? e[0].type === "Identifier" && Si(e, 1) : !1;
}
function Si(e, t) {
	let r = e[t],
		n = e[t + 1];
	return r.type === "ArrowFunctionExpression" && K(r).length === 0 && r.body.type === "BlockStatement" && n.type === "ArrayExpression" && !e.some((s) => d(s));
}
function jc(e) {
	return e.type === "BlockStatement" && (e.body.some((t) => t.type !== "EmptyStatement") || d(e, g.Dangling));
}
function vc(e) {
	return e.type === "ObjectExpression" && e.properties.length === 1 && Ae(e.properties[0]) && e.properties[0].key.type === "Identifier" && e.properties[0].key.name === "type" && Q(e.properties[0].value) && e.properties[0].value.value === "module";
}
var lr = Lc;
var Mc = (e) => ((e.type === "ChainExpression" || e.type === "TSNonNullExpression") && (e = e.expression), L(e) && oe(e).length > 0);
function bi(e, t, r) {
	var c;
	let n = r("object"),
		s = Es(e, t, r),
		{ node: u } = e,
		i = e.findAncestor((m) => !(q(m) || m.type === "TSNonNullExpression")),
		a = e.findAncestor((m) => !(m.type === "ChainExpression" || m.type === "TSNonNullExpression")),
		o = (i && (i.type === "NewExpression" || i.type === "BindExpression" || (i.type === "AssignmentExpression" && i.left.type !== "Identifier"))) || u.computed || (u.object.type === "Identifier" && u.property.type === "Identifier" && !q(a)) || ((a.type === "AssignmentExpression" || a.type === "VariableDeclarator") && (Mc(u.object) || ((c = n.label) == null ? void 0 : c.memberChain)));
	return it(n.label, [n, o ? s : l(f([E, s]))]);
}
function Es(e, t, r) {
	let n = r("property"),
		{ node: s } = e,
		u = V(e);
	return s.computed ? (!s.property || Ce(s.property) ? [u, "[", n, "]"] : l([u, "[", f([E, n]), E, "]"])) : [u, ".", n];
}
function Pi(e, t, r) {
	if (e.node.type === "ChainExpression") return e.call(() => Pi(e, t, r), "expression");
	let { parent: n } = e,
		s = !n || n.type === "ExpressionStatement",
		u = [];
	function i(I) {
		let { originalText: G } = t,
			ee = yt(G, k(I));
		return G.charAt(ee) === ")" ? ee !== !1 && Ot(G, ee + 1) : pe(I, t);
	}
	function a(I) {
		let { node: G } = I;
		if (G.type === "ChainExpression") return I.call(() => a(I), "expression");
		if (L(G) && (Ft(G.callee) || L(G.callee))) {
			let ee = i(G);
			u.unshift({
				node: G,
				hasTrailingEmptyLine: ee,
				printed: [ye(I, [V(I), Qe(I, t, r), lr(I, t, r)], t), ee ? F : ""],
			}),
				I.call((qe) => a(qe), "callee");
		} else
			Ft(G)
				? (u.unshift({
						node: G,
						needsParens: Be(I, t),
						printed: ye(I, q(G) ? Es(I, t, r) : Hr(I, t, r), t),
					}),
					I.call((ee) => a(ee), "object"))
				: G.type === "TSNonNullExpression"
					? (u.unshift({ node: G, printed: ye(I, "!", t) }), I.call((ee) => a(ee), "expression"))
					: u.unshift({ node: G, printed: r() });
	}
	let { node: o } = e;
	u.unshift({ node: o, printed: [V(e), Qe(e, t, r), lr(e, t, r)] }), o.callee && e.call((I) => a(I), "callee");
	let c = [],
		m = [u[0]],
		D = 1;
	for (; D < u.length && (u[D].node.type === "TSNonNullExpression" || L(u[D].node) || (q(u[D].node) && u[D].node.computed && Ce(u[D].node.property))); ++D) m.push(u[D]);
	if (!L(u[0].node)) for (; D + 1 < u.length && Ft(u[D].node) && Ft(u[D + 1].node); ++D) m.push(u[D]);
	c.push(m), (m = []);
	let y = !1;
	for (; D < u.length; ++D) {
		if (y && Ft(u[D].node)) {
			if (u[D].node.computed && Ce(u[D].node.property)) {
				m.push(u[D]);
				continue;
			}
			c.push(m), (m = []), (y = !1);
		}
		(L(u[D].node) || u[D].node.type === "ImportExpression") && (y = !0), m.push(u[D]), d(u[D].node, g.Trailing) && (c.push(m), (m = []), (y = !1));
	}
	m.length > 0 && c.push(m);
	function C(I) {
		return /^[A-Z]|^[$_]+$/u.test(I);
	}
	function p(I) {
		return I.length <= t.tabWidth;
	}
	function A(I) {
		var qe;
		let G = (qe = I[1][0]) == null ? void 0 : qe.node.computed;
		if (I[0].length === 1) {
			let xt = I[0][0].node;
			return xt.type === "ThisExpression" || (xt.type === "Identifier" && (C(xt.name) || (s && p(xt.name)) || G));
		}
		let ee = O(!1, I[0], -1).node;
		return q(ee) && ee.property.type === "Identifier" && (C(ee.property.name) || G);
	}
	let T = c.length >= 2 && !d(c[1][0].node) && A(c);
	function S(I) {
		let G = I.map((ee) => ee.printed);
		return I.length > 0 && O(!1, I, -1).needsParens ? ["(", ...G, ")"] : G;
	}
	function B(I) {
		return I.length === 0 ? "" : f([F, P(F, I.map(S))]);
	}
	let _ = c.map(S),
		J = _,
		j = T ? 3 : 2,
		h = c.flat(),
		W = h.slice(1, -1).some((I) => d(I.node, g.Leading)) || h.slice(0, -1).some((I) => d(I.node, g.Trailing)) || (c[j] && d(c[j][0].node, g.Leading));
	if (c.length <= j && !W && !c.some((I) => O(!1, I, -1).hasTrailingEmptyLine)) return Or(e) ? J : l(J);
	let Fe = O(!1, c[T ? 1 : 0], -1).node,
		H = !L(Fe) && i(Fe),
		ue = [S(c[0]), T ? c.slice(1, 2).map(S) : "", H ? F : "", B(c.slice(T ? 2 : 1))],
		Z = u.map(({ node: I }) => I).filter(L);
	function It() {
		let I = O(!1, O(!1, c, -1), -1).node,
			G = O(!1, _, -1);
		return L(I) && ne(G) && Z.slice(0, -1).some((ee) => ee.arguments.some(_t));
	}
	let $t;
	return W || (Z.length > 2 && Z.some((I) => !I.arguments.every((G) => be(G)))) || _.slice(0, -1).some(ne) || It() ? ($t = l(ue)) : ($t = [ne(J) || H ? Ee : "", ze([J, ue])]), it({ memberChain: !0 }, $t);
}
var ki = Pi;
function Vr(e, t, r) {
	var m;
	let { node: n } = e,
		s = n.type === "NewExpression",
		u = n.type === "ImportExpression",
		i = V(e),
		a = oe(n),
		o = a.length === 1 && Lr(a[0], t.originalText);
	if (o || Rc(e) || St(n, e.parent)) {
		let D = [];
		if (
			(Rt(e, () => {
				D.push(r());
			}),
			!(o && (m = D[0].label) != null && m.embed))
		)
			return [s ? "new " : "", Ii(e, r), i, Qe(e, t, r), "(", P(", ", D), ")"];
	}
	if (!u && !s && Ft(n.callee) && !e.call((D) => Be(D, t), "callee", ...(n.callee.type === "ChainExpression" ? ["expression"] : []))) return ki(e, t, r);
	let c = [s ? "new " : "", Ii(e, r), i, Qe(e, t, r), lr(e, t, r)];
	return u || L(n.callee) ? l(c) : c;
}
function Ii(e, t) {
	let { node: r } = e;
	return r.type === "ImportExpression" ? `import${r.phase ? `.${r.phase}` : ""}` : t("callee");
}
function Rc(e) {
	let { node: t } = e;
	if (t.type !== "CallExpression" || t.optional || t.callee.type !== "Identifier") return !1;
	let r = oe(t);
	return t.callee.name === "require" ? (r.length === 1 && Q(r[0])) || r.length > 1 : t.callee.name === "define" && e.parent.type === "ExpressionStatement" ? r.length === 1 || (r.length === 2 && r[0].type === "ArrayExpression") || (r.length === 3 && Q(r[0]) && r[1].type === "ArrayExpression") : !1;
}
function Tt(e, t, r, n, s, u) {
	let i = Jc(e, t, r, n, u),
		a = u ? r(u, { assignmentLayout: i }) : "";
	switch (i) {
		case "break-after-operator":
			return l([l(n), s, l(f([x, a]))]);
		case "never-break-after-operator":
			return l([l(n), s, " ", a]);
		case "fluid": {
			let o = Symbol("assignment");
			return l([l(n), s, l(f(x), { id: o }), ke, At(a, { groupId: o })]);
		}
		case "break-lhs":
			return l([n, s, " ", l(a)]);
		case "chain":
			return [l(n), s, x, a];
		case "chain-tail":
			return [l(n), s, f([x, a])];
		case "chain-tail-arrow-chain":
			return [l(n), s, a];
		case "only-left":
			return n;
	}
}
function wi(e, t, r) {
	let { node: n } = e;
	return Tt(e, t, r, r("left"), [" ", n.operator], "right");
}
function Oi(e, t, r) {
	return Tt(e, t, r, r("id"), " =", "init");
}
function Jc(e, t, r, n, s) {
	let { node: u } = e,
		i = u[s];
	if (!i) return "only-left";
	let a = !$r(i);
	if (e.match($r, _i, (y) => !a || (y.type !== "ExpressionStatement" && y.type !== "VariableDeclaration"))) return a ? (i.type === "ArrowFunctionExpression" && i.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail") : "chain";
	if ((!a && $r(i.right)) || Oe(t.originalText, i)) return "break-after-operator";
	if (u.type === "ImportAttribute" || (i.type === "CallExpression" && i.callee.name === "require") || t.parser === "json5" || t.parser === "jsonc" || t.parser === "json") return "never-break-after-operator";
	let m = Bu(n);
	if (Wc(u) || Xc(u) || (Fs(u) && m)) return "break-lhs";
	let D = Hc(u, n, t);
	return e.call(() => qc(e, t, r, D), s) ? "break-after-operator" : Gc(u) ? "break-lhs" : !m && (D || i.type === "TemplateLiteral" || i.type === "TaggedTemplateExpression" || i.type === "BooleanLiteral" || Ce(i) || i.type === "ClassExpression") ? "never-break-after-operator" : "fluid";
}
function qc(e, t, r, n) {
	let s = e.node;
	if (De(s) && !Ut(s)) return !0;
	switch (s.type) {
		case "StringLiteralTypeAnnotation":
		case "SequenceExpression":
			return !0;
		case "TSConditionalType":
		case "ConditionalTypeAnnotation":
			if (!t.experimentalTernaries && !Kc(s)) break;
			return !0;
		case "ConditionalExpression": {
			if (!t.experimentalTernaries) {
				let { test: c } = s;
				return De(c) && !Ut(c);
			}
			let { consequent: a, alternate: o } = s;
			return a.type === "ConditionalExpression" || o.type === "ConditionalExpression";
		}
		case "ClassExpression":
			return w(s.decorators);
	}
	if (n) return !1;
	let u = s,
		i = [];
	for (;;)
		if (u.type === "UnaryExpression" || u.type === "AwaitExpression" || (u.type === "YieldExpression" && u.argument !== null)) (u = u.argument), i.push("argument");
		else if (u.type === "TSNonNullExpression") (u = u.expression), i.push("expression");
		else break;
	return !!(Q(u) || e.call(() => ji(e, t, r), ...i));
}
function Wc(e) {
	if (_i(e)) {
		let t = e.left || e.id;
		return (
			t.type === "ObjectPattern" &&
			t.properties.length > 2 &&
			t.properties.some((r) => {
				var n;
				return Ae(r) && (!r.shorthand || ((n = r.value) == null ? void 0 : n.type) === "AssignmentPattern");
			})
		);
	}
	return !1;
}
function $r(e) {
	return e.type === "AssignmentExpression";
}
function _i(e) {
	return $r(e) || e.type === "VariableDeclarator";
}
function Gc(e) {
	let t = Nc(e);
	if (w(t)) {
		let r = e.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
		if (t.length > 1 && t.some((n) => n[r] || n.default)) return !0;
	}
	return !1;
}
var Uc = v(["TSTypeAliasDeclaration", "TypeAlias"]);
function Nc(e) {
	var t;
	if (Uc(e)) return (t = e.typeParameters) == null ? void 0 : t.params;
}
function Xc(e) {
	if (e.type !== "VariableDeclarator") return !1;
	let { typeAnnotation: t } = e.id;
	if (!t || !t.typeAnnotation) return !1;
	let r = Li(t.typeAnnotation);
	return w(r) && r.length > 1 && r.some((n) => w(Li(n)) || n.type === "TSConditionalType");
}
function Fs(e) {
	var t;
	return e.type === "VariableDeclarator" && ((t = e.init) == null ? void 0 : t.type) === "ArrowFunctionExpression";
}
var Yc = v(["TSTypeReference", "GenericTypeAnnotation"]);
function Li(e) {
	var t;
	if (Yc(e)) return (t = e.typeArguments ?? e.typeParameters) == null ? void 0 : t.params;
}
function ji(e, t, r, n = !1) {
	var i;
	let { node: s } = e,
		u = () => ji(e, t, r, !0);
	if (s.type === "ChainExpression" || s.type === "TSNonNullExpression") return e.call(u, "expression");
	if (L(s)) {
		if ((i = Vr(e, t, r).label) != null && i.memberChain) return !1;
		let o = oe(s);
		return !(o.length === 0 || (o.length === 1 && rr(o[0], t))) || Vc(s, r) ? !1 : e.call(u, "callee");
	}
	return q(s) ? e.call(u, "object") : n && (s.type === "Identifier" || s.type === "ThisExpression");
}
function Hc(e, t, r) {
	return Ae(e) ? ((t = Wt(t)), typeof t == "string" && et(t) < r.tabWidth + 3) : !1;
}
function Vc(e, t) {
	let r = $c(e);
	if (w(r)) {
		if (r.length > 1) return !0;
		if (r.length === 1) {
			let s = r[0];
			if (Ne(s) || _r(s) || s.type === "TSTypeLiteral" || s.type === "ObjectTypeAnnotation") return !0;
		}
		let n = e.typeParameters ? "typeParameters" : "typeArguments";
		if (ne(t(n))) return !0;
	}
	return !1;
}
function $c(e) {
	var t;
	return (t = e.typeParameters ?? e.typeArguments) == null ? void 0 : t.params;
}
function Kc(e) {
	function t(r) {
		switch (r.type) {
			case "FunctionTypeAnnotation":
			case "GenericTypeAnnotation":
			case "TSFunctionType":
				return !!r.typeParameters;
			case "TSTypeReference":
				return !!(r.typeArguments ?? r.typeParameters);
			default:
				return !1;
		}
	}
	return t(e.checkType) || t(e.extendsType);
}
function Je(e, t, r, n, s) {
	let u = e.node,
		i = K(u),
		a = s ? Qe(e, r, t) : "";
	if (i.length === 0) return [a, "(", M(e, r, { filter: (p) => ge(r.originalText, k(p)) === ")" }), ")"];
	let { parent: o } = e,
		c = St(o),
		m = Cs(u),
		D = [];
	if (
		(fu(e, (p, A) => {
			let T = A === i.length - 1;
			T && u.rest && D.push("..."), D.push(t()), !T && (D.push(","), c || m ? D.push(" ") : pe(i[A], r) ? D.push(F, F) : D.push(x));
		}),
		n && !Qc(e))
	) {
		if (ne(a) || ne(D)) throw new Dt();
		return l([ur(a), "(", ur(D), ")"]);
	}
	let y = i.every((p) => !w(p.decorators));
	return m && y ? [a, "(", ...D, ")"] : c ? [a, "(", ...D, ")"] : (Ir(o) || ou(o) || o.type === "TypeAlias" || o.type === "UnionTypeAnnotation" || o.type === "IntersectionTypeAnnotation" || (o.type === "FunctionTypeAnnotation" && o.returnType === u)) && i.length === 1 && i[0].name === null && u.this !== i[0] && i[0].typeAnnotation && u.typeParameters === null && Mt(i[0].typeAnnotation) && !u.rest ? (r.arrowParens === "always" || u.type === "HookTypeAnnotation" ? ["(", ...D, ")"] : D) : [a, "(", f([E, ...D]), b(!Du(u) && ae(r, "all") ? "," : ""), E, ")"];
}
function Cs(e) {
	if (!e) return !1;
	let t = K(e);
	if (t.length !== 1) return !1;
	let [r] = t;
	return !d(r) && (r.type === "ObjectPattern" || r.type === "ArrayPattern" || (r.type === "Identifier" && r.typeAnnotation && (r.typeAnnotation.type === "TypeAnnotation" || r.typeAnnotation.type === "TSTypeAnnotation") && we(r.typeAnnotation.typeAnnotation)) || (r.type === "FunctionTypeParam" && we(r.typeAnnotation) && r !== e.rest) || (r.type === "AssignmentPattern" && (r.left.type === "ObjectPattern" || r.left.type === "ArrayPattern") && (r.right.type === "Identifier" || (se(r.right) && r.right.properties.length === 0) || (U(r.right) && r.right.elements.length === 0))));
}
function zc(e) {
	let t;
	return e.returnType ? ((t = e.returnType), t.typeAnnotation && (t = t.typeAnnotation)) : e.typeAnnotation && (t = e.typeAnnotation), t;
}
function ot(e, t) {
	var s;
	let r = zc(e);
	if (!r) return !1;
	let n = (s = e.typeParameters) == null ? void 0 : s.params;
	if (n) {
		if (n.length > 1) return !1;
		if (n.length === 1) {
			let u = n[0];
			if (u.constraint || u.default) return !1;
		}
	}
	return K(e).length === 1 && (we(r) || ne(t));
}
function Qc(e) {
	return e.match(
		(t) => t.type === "ArrowFunctionExpression" && t.body.type === "BlockStatement",
		(t, r) => {
			if (t.type === "CallExpression" && r === "arguments" && t.arguments.length === 1 && t.callee.type === "CallExpression") {
				let n = t.callee.callee;
				return n.type === "Identifier" || (n.type === "MemberExpression" && !n.computed && n.object.type === "Identifier" && n.property.type === "Identifier");
			}
			return !1;
		},
		(t, r) => (t.type === "VariableDeclarator" && r === "init") || (t.type === "ExportDefaultDeclaration" && r === "declaration") || (t.type === "TSExportAssignment" && r === "expression") || (t.type === "AssignmentExpression" && r === "right" && t.left.type === "MemberExpression" && t.left.object.type === "Identifier" && t.left.object.name === "module" && t.left.property.type === "Identifier" && t.left.property.name === "exports"),
		(t) => t.type !== "VariableDeclaration" || (t.kind === "const" && t.declarations.length === 1),
	);
}
function vi(e) {
	let t = K(e);
	return t.length > 1 && t.some((r) => r.type === "TSParameterProperty");
}
var Zc = v(["VoidTypeAnnotation", "TSVoidKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword"]),
	el = v(["ObjectTypeAnnotation", "TSTypeLiteral", "GenericTypeAnnotation", "TSTypeReference"]);
function tl(e) {
	let { types: t } = e;
	if (t.some((n) => d(n))) return !1;
	let r = t.find((n) => el(n));
	return r ? t.every((n) => n === r || Zc(n)) : !1;
}
function As(e) {
	return Mt(e) || we(e) ? !0 : Ne(e) ? tl(e) : !1;
}
function Mi(e, t, r) {
	let n = t.semi ? ";" : "",
		{ node: s } = e,
		u = [$(e), "opaque type ", r("id"), r("typeParameters")];
	return s.supertype && u.push(": ", r("supertype")), s.impltype && u.push(" = ", r("impltype")), u.push(n), u;
}
function Kr(e, t, r) {
	let n = t.semi ? ";" : "",
		{ node: s } = e,
		u = [$(e)];
	u.push("type ", r("id"), r("typeParameters"));
	let i = s.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
	return [Tt(e, t, r, u, " =", i), n];
}
function zr(e, t, r) {
	let n = !1;
	return l(
		e.map(({ isFirst: s, previous: u, node: i, index: a }) => {
			let o = r();
			if (s) return o;
			let c = we(i),
				m = we(u);
			return m && c ? [" & ", n ? f(o) : o] : !m && !c ? f([" &", x, o]) : (a > 1 && (n = !0), [" & ", a > 1 ? f(o) : o]);
		}, "types"),
	);
}
function Qr(e, t, r) {
	let { node: n } = e,
		{ parent: s } = e,
		u = s.type !== "TypeParameterInstantiation" && (s.type !== "TSConditionalType" || !t.experimentalTernaries) && (s.type !== "ConditionalTypeAnnotation" || !t.experimentalTernaries) && s.type !== "TSTypeParameterInstantiation" && s.type !== "GenericTypeAnnotation" && s.type !== "TSTypeReference" && s.type !== "TSTypeAssertion" && s.type !== "TupleTypeAnnotation" && s.type !== "TSTupleType" && !(s.type === "FunctionTypeParam" && !s.name && e.grandparent.this !== s) && !((s.type === "TypeAlias" || s.type === "VariableDeclarator" || s.type === "TSTypeAliasDeclaration") && Oe(t.originalText, n)),
		i = As(n),
		a = e.map((m) => {
			let D = r();
			return i || (D = he(2, D)), ye(m, D, t);
		}, "types");
	if (i) return P(" | ", a);
	let o = u && !Oe(t.originalText, n),
		c = [b([o ? x : "", "| "]), P([x, "| "], a)];
	return Be(e, t) ? l([f(c), E]) : (s.type === "TupleTypeAnnotation" || s.type === "TSTupleType") && s[s.type === "TupleTypeAnnotation" && s.types ? "types" : "elementTypes"].length > 1 ? l([f([b(["(", E]), c]), E, b(")")]) : l(u ? f(c) : c);
}
function rl(e) {
	var n;
	let { node: t, parent: r } = e;
	return t.type === "FunctionTypeAnnotation" && (Ir(r) || !(((r.type === "ObjectTypeProperty" || r.type === "ObjectTypeInternalSlot") && !r.variance && !r.optional && ht(r, t)) || r.type === "ObjectTypeCallProperty" || ((n = e.getParentNode(2)) == null ? void 0 : n.type) === "DeclareFunction"));
}
function Zr(e, t, r) {
	let { node: n } = e,
		s = [Nt(e)];
	(n.type === "TSConstructorType" || n.type === "TSConstructSignatureDeclaration") && s.push("new ");
	let u = Je(e, r, t, !1, !0),
		i = [];
	return n.type === "FunctionTypeAnnotation" ? i.push(rl(e) ? " => " : ": ", r("returnType")) : i.push(Y(e, r, n.returnType ? "returnType" : "typeAnnotation")), ot(n, i) && (u = l(u)), s.push(u, i), l(s);
}
function en(e, t, r) {
	return [r("objectType"), V(e), "[", r("indexType"), "]"];
}
function tn(e, t, r) {
	return ["infer ", r("typeParameter")];
}
function Ts(e, t, r) {
	let { node: n } = e;
	return [n.postfix ? "" : r, Y(e, t), n.postfix ? r : ""];
}
function rn(e, t, r) {
	let { node: n } = e;
	return ["...", ...(n.type === "TupleTypeSpreadElement" && n.label ? [r("label"), ": "] : []), r("typeAnnotation")];
}
function nn(e, t, r) {
	let { node: n } = e;
	return [n.variance ? r("variance") : "", r("label"), n.optional ? "?" : "", ": ", r("elementType")];
}
var nl = new WeakSet();
function Y(e, t, r = "typeAnnotation") {
	let {
		node: { [r]: n },
	} = e;
	if (!n) return "";
	let s = !1;
	if (n.type === "TSTypeAnnotation" || n.type === "TypeAnnotation") {
		let u = e.call(Ri, r);
		(u === "=>" || (u === ":" && d(n, g.Leading))) && (s = !0), nl.add(n);
	}
	return s ? [" ", t(r)] : t(r);
}
var Ri = (e) =>
	e.match(
		(t) => t.type === "TSTypeAnnotation",
		(t, r) => (r === "returnType" || r === "typeAnnotation") && (t.type === "TSFunctionType" || t.type === "TSConstructorType"),
	)
		? "=>"
		: e.match(
					(t) => t.type === "TSTypeAnnotation",
					(t, r) => r === "typeAnnotation" && (t.type === "TSJSDocNullableType" || t.type === "TSJSDocNonNullableType" || t.type === "TSTypePredicate"),
			  ) ||
			  e.match(
					(t) => t.type === "TypeAnnotation",
					(t, r) => r === "typeAnnotation" && t.type === "Identifier",
					(t, r) => r === "id" && t.type === "DeclareFunction",
			  ) ||
			  e.match(
					(t) => t.type === "TypeAnnotation",
					(t, r) => r === "typeAnnotation" && t.type === "Identifier",
					(t, r) => r === "id" && t.type === "DeclareHook",
			  ) ||
			  e.match(
					(t) => t.type === "TypeAnnotation",
					(t, r) => r === "bound" && t.type === "TypeParameter" && t.usesExtendsBound,
			  )
			? ""
			: ":";
function sn(e, t, r) {
	let n = Ri(e);
	return n ? [n, " ", r("typeAnnotation")] : r("typeAnnotation");
}
function un(e) {
	return [e("elementType"), "[]"];
}
function an({ node: e }, t) {
	let r = e.type === "TSTypeQuery" ? "exprName" : "argument",
		n = e.type === "TypeofTypeAnnotation" || e.typeArguments ? "typeArguments" : "typeParameters";
	return ["typeof ", t(r), t(n)];
}
function on(e, t) {
	let { node: r } = e;
	return [r.type === "TSTypePredicate" && r.asserts ? "asserts " : r.type === "TypePredicate" && r.kind ? `${r.kind} ` : "", t("parameterName"), r.typeAnnotation ? [" is ", Y(e, t)] : ""];
}
function V(e) {
	let { node: t } = e;
	return !t.optional || (t.type === "Identifier" && t === e.parent.key) ? "" : L(t) || (q(t) && t.computed) || t.type === "OptionalIndexedAccessType" ? "?." : "?";
}
function pn(e) {
	return e.node.definite || e.match(void 0, (t, r) => r === "id" && t.type === "VariableDeclarator" && t.definite) ? "!" : "";
}
var sl = new Set(["DeclareClass", "DeclareComponent", "DeclareFunction", "DeclareHook", "DeclareVariable", "DeclareExportDeclaration", "DeclareExportAllDeclaration", "DeclareOpaqueType", "DeclareTypeAlias", "DeclareEnum", "DeclareInterface"]);
function $(e) {
	let { node: t } = e;
	return t.declare || (sl.has(t.type) && e.parent.type !== "DeclareExportDeclaration") ? "declare " : "";
}
var ul = new Set(["TSAbstractMethodDefinition", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function Nt({ node: e }) {
	return e.abstract || ul.has(e.type) ? "abstract " : "";
}
function Qe(e, t, r) {
	let n = e.node;
	return n.typeArguments ? r("typeArguments") : n.typeParameters ? r("typeParameters") : "";
}
function Hr(e, t, r) {
	return ["::", r("callee")];
}
function ft(e, t, r) {
	return e.type === "EmptyStatement" ? ";" : e.type === "BlockStatement" || r ? [" ", t] : f([x, t]);
}
function cn(e, t) {
	return ["...", t("argument"), Y(e, t)];
}
function Xt(e) {
	return e.accessibility ? e.accessibility + " " : "";
}
function il(e, t, r, n) {
	let { node: s } = e,
		u = s.inexact ? "..." : "";
	return d(s, g.Dangling) ? l([r, u, M(e, t, { indent: !0 }), E, n]) : [r, u, n];
}
function Yt(e, t, r) {
	let { node: n } = e,
		s = [],
		u = n.type === "TupleExpression" ? "#[" : "[",
		i = "]",
		a = n.type === "TupleTypeAnnotation" && n.types ? "types" : n.type === "TSTupleType" || n.type === "TupleTypeAnnotation" ? "elementTypes" : "elements",
		o = n[a];
	if (o.length === 0) s.push(il(e, t, u, i));
	else {
		let c = O(!1, o, -1),
			m = (c == null ? void 0 : c.type) !== "RestElement" && !n.inexact,
			D = c === null,
			y = Symbol("array"),
			C =
				!t.__inJestEach &&
				o.length > 1 &&
				o.every((T, S, B) => {
					let _ = T == null ? void 0 : T.type;
					if (!U(T) && !se(T)) return !1;
					let J = B[S + 1];
					if (J && _ !== J.type) return !1;
					let j = U(T) ? "elements" : "properties";
					return T[j] && T[j].length > 1;
				}),
			p = fs(n, t),
			A = m ? (D ? "," : ae(t) ? (p ? b(",", "", { groupId: y }) : b(",")) : "") : "";
		s.push(l([u, f([E, p ? ol(e, t, r, A) : [al(e, t, a, n.inexact, r), A], M(e, t)]), E, i], { shouldBreak: C, id: y }));
	}
	return s.push(V(e), Y(e, r)), s;
}
function fs(e, t) {
	return U(e) && e.elements.length > 1 && e.elements.every((r) => r && (Ce(r) || (jn(r) && !d(r.argument))) && !d(r, g.Trailing | g.Line, (n) => !te(t.originalText, R(n), { backwards: !0 })));
}
function Ji({ node: e }, { originalText: t }) {
	let r = (s) => Lt(t, wt(t, s)),
		n = (s) => (t[s] === "," ? s : n(r(s + 1)));
	return Ot(t, n(k(e)));
}
function al(e, t, r, n, s) {
	let u = [];
	return (
		e.each(({ node: i, isLast: a }) => {
			u.push(i ? l(s()) : ""), (!a || n) && u.push([",", x, i && Ji(e, t) ? E : ""]);
		}, r),
		n && u.push("..."),
		u
	);
}
function ol(e, t, r, n) {
	let s = [];
	return (
		e.each(({ isLast: u, next: i }) => {
			s.push([r(), u ? n : ","]), u || s.push(Ji(e, t) ? [F, F] : d(i, g.Leading | g.Line) ? F : x);
		}, "elements"),
		qt(s)
	);
}
var qi = new Proxy(() => {}, { get: () => qi }),
	ln = qi;
var pl =
		/^[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC][\$0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/,
	cl = (e) => pl.test(e),
	Wi = cl;
function ll(e) {
	return e.length === 1
		? e
		: e
				.toLowerCase()
				.replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/u, "$1$2")
				.replace(/^([+-]?[\d.]+)e[+-]?0+$/u, "$1")
				.replace(/^([+-])?\./u, "$10.")
				.replace(/(\.\d+?)0+(?=e|$)/u, "$1")
				.replace(/\.(?=e|$)/u, "");
}
var Ze = ll;
var mn = new WeakMap();
function Ui(e) {
	return /^(?:\d+|\d+\.\d+)$/u.test(e);
}
function Gi(e, t) {
	return t.parser === "json" || t.parser === "jsonc" || !Q(e.key) || tt(fe(e.key), t).slice(1, -1) !== e.key.value ? !1 : !!((Wi(e.key.value) && !((t.parser === "babel-ts" && e.type === "ClassProperty") || (t.parser === "typescript" && e.type === "PropertyDefinition"))) || (Ui(e.key.value) && String(Number(e.key.value)) === e.key.value && e.type !== "ImportAttribute" && (t.parser === "babel" || t.parser === "acorn" || t.parser === "espree" || t.parser === "meriyah" || t.parser === "__babel_estree")));
}
function ml(e, t) {
	let { key: r } = e.node;
	return (r.type === "Identifier" || (Ce(r) && Ui(Ze(fe(r))) && String(r.value) === Ze(fe(r)) && !(t.parser === "typescript" || t.parser === "babel-ts"))) && (t.parser === "json" || t.parser === "jsonc" || (t.quoteProps === "consistent" && mn.get(e.parent)));
}
function Et(e, t, r) {
	let { node: n } = e;
	if (n.computed) return ["[", r("key"), "]"];
	let { parent: s } = e,
		{ key: u } = n;
	if (t.quoteProps === "consistent" && !mn.has(s)) {
		let i = e.siblings.some((a) => !a.computed && Q(a.key) && !Gi(a, t));
		mn.set(s, i);
	}
	if (ml(e, t)) {
		let i = tt(JSON.stringify(u.type === "Identifier" ? u.name : u.value.toString()), t);
		return e.call((a) => ye(a, i, t), "key");
	}
	return Gi(n, t) && (t.quoteProps === "as-needed" || (t.quoteProps === "consistent" && !mn.get(s))) ? e.call((i) => ye(i, /^\d/u.test(u.value) ? Ze(u.value) : u.value, t), "key") : r("key");
}
function yn(e, t, r) {
	let { node: n } = e;
	return n.shorthand ? r("value") : Tt(e, t, r, Et(e, t, r), ":", "value");
}
var yl = ({ node: e, key: t, parent: r }) => t === "value" && e.type === "FunctionExpression" && (r.type === "ObjectMethod" || r.type === "ClassMethod" || r.type === "ClassPrivateMethod" || r.type === "MethodDefinition" || r.type === "TSAbstractMethodDefinition" || r.type === "TSDeclareMethod" || (r.type === "Property" && gt(r)));
function Dn(e, t, r, n) {
	if (yl(e)) return fn(e, r, t);
	let { node: s } = e,
		u = !1;
	if ((s.type === "FunctionDeclaration" || s.type === "FunctionExpression") && n != null && n.expandLastArg) {
		let { parent: m } = e;
		L(m) && (oe(m).length > 1 || K(s).every((D) => D.type === "Identifier" && !D.typeAnnotation)) && (u = !0);
	}
	let i = [$(e), s.async ? "async " : "", `function${s.generator ? "*" : ""} `, s.id ? t("id") : ""],
		a = Je(e, t, r, u),
		o = Ht(e, t),
		c = ot(s, o);
	return i.push(Qe(e, r, t), l([c ? l(a) : a, o]), s.body ? " " : "", t("body")), r.semi && (s.declare || !s.body) && i.push(";"), i;
}
function mr(e, t, r) {
	let { node: n } = e,
		{ kind: s } = n,
		u = n.value || n,
		i = [];
	return !s || s === "init" || s === "method" || s === "constructor" ? u.async && i.push("async ") : (ln.ok(s === "get" || s === "set"), i.push(s, " ")), u.generator && i.push("*"), i.push(Et(e, t, r), n.optional || n.key.optional ? "?" : "", n === u ? fn(e, t, r) : r("value")), i;
}
function fn(e, t, r) {
	let { node: n } = e,
		s = Je(e, r, t),
		u = Ht(e, r),
		i = vi(n),
		a = ot(n, u),
		o = [Qe(e, t, r), l([i ? l(s, { shouldBreak: !0 }) : a ? l(s) : s, u])];
	return n.body ? o.push(" ", r("body")) : o.push(t.semi ? ";" : ""), o;
}
function Dl(e) {
	let t = K(e);
	return t.length === 1 && !e.typeParameters && !d(e, g.Dangling) && t[0].type === "Identifier" && !t[0].typeAnnotation && !d(t[0]) && !t[0].optional && !e.predicate && !e.returnType;
}
function En(e, t) {
	if (t.arrowParens === "always") return !1;
	if (t.arrowParens === "avoid") {
		let { node: r } = e;
		return Dl(r);
	}
	return !1;
}
function Ht(e, t) {
	let { node: r } = e,
		s = [Y(e, t, "returnType")];
	return r.predicate && s.push(t("predicate")), s;
}
function Ni(e, t, r) {
	let { node: n } = e,
		s = t.semi ? ";" : "",
		u = [];
	if (n.argument) {
		let o = r("argument");
		fl(t, n.argument) ? (o = ["(", f([F, o]), F, ")"]) : (De(n.argument) || n.argument.type === "SequenceExpression" || (t.experimentalTernaries && n.argument.type === "ConditionalExpression" && (n.argument.consequent.type === "ConditionalExpression" || n.argument.alternate.type === "ConditionalExpression"))) && (o = l([b("("), f([E, o]), E, b(")")])), u.push(" ", o);
	}
	let i = d(n, g.Dangling),
		a = s && i && d(n, g.Last | g.Line);
	return a && u.push(s), i && u.push(" ", M(e, t)), a || u.push(s), u;
}
function Xi(e, t, r) {
	return ["return", Ni(e, t, r)];
}
function Yi(e, t, r) {
	return ["throw", Ni(e, t, r)];
}
function fl(e, t) {
	if (Oe(e.originalText, t) || (d(t, g.Leading, (r) => de(e.originalText, R(r), k(r))) && !X(t))) return !0;
	if (jt(t)) {
		let r = t,
			n;
		for (; (n = uu(r)); ) if (((r = n), Oe(e.originalText, r))) return !0;
	}
	return !1;
}
var ds = new WeakMap();
function Hi(e) {
	return ds.has(e) || ds.set(e, e.type === "ConditionalExpression" && !ie(e, (t) => t.type === "ObjectExpression")), ds.get(e);
}
var Vi = (e) => e.type === "SequenceExpression";
function $i(e, t, r, n = {}) {
	let s = [],
		u,
		i = [],
		a = !1,
		o = !n.expandLastArg && e.node.body.type === "ArrowFunctionExpression",
		c;
	(function T() {
		let { node: S } = e,
			B = El(e, t, r, n);
		if (s.length === 0) s.push(B);
		else {
			let { leading: _, trailing: J } = os(e, t);
			s.push([_, B]), i.unshift(J);
		}
		o && (a || (a = (S.returnType && K(S).length > 0) || S.typeParameters || K(S).some((_) => _.type !== "Identifier"))), !o || S.body.type !== "ArrowFunctionExpression" ? ((u = r("body", n)), (c = S.body)) : e.call(T, "body");
	})();
	let m = !Oe(t.originalText, c) && (Vi(c) || Fl(c, u, t) || (!a && Hi(c))),
		D = e.key === "callee" && lt(e.parent),
		y = Symbol("arrow-chain"),
		C = Cl(e, n, { signatureDocs: s, shouldBreak: a }),
		p,
		A = !1;
	return (
		o && (D || n.assignmentLayout) && ((A = !0), (p = n.assignmentLayout === "chain-tail-arrow-chain" || (D && !m))),
		(u = Al(e, t, n, {
			bodyDoc: u,
			bodyComments: i,
			functionBody: c,
			shouldPutBodyOnSameLine: m,
		})),
		l([l(A ? f([E, C]) : C, { shouldBreak: p, id: y }), " =>", o ? At(u, { groupId: y }) : l(u), o && D ? b(E, "", { groupId: y }) : ""])
	);
}
function El(e, t, r, n) {
	let { node: s } = e,
		u = [];
	if ((s.async && u.push("async "), En(e, t))) u.push(r(["params", 0]));
	else {
		let a = n.expandLastArg || n.expandFirstArg,
			o = Ht(e, r);
		if (a) {
			if (ne(o)) throw new Dt();
			o = l(ur(o));
		}
		u.push(l([Je(e, r, t, a, !0), o]));
	}
	let i = M(e, t, {
		filter(a) {
			let o = yt(t.originalText, k(a));
			return o !== !1 && t.originalText.slice(o, o + 2) === "=>";
		},
	});
	return i && u.push(" ", i), u;
}
function Fl(e, t, r) {
	var n, s;
	return U(e) || se(e) || e.type === "ArrowFunctionExpression" || e.type === "DoExpression" || e.type === "BlockStatement" || X(e) || (((n = t.label) == null ? void 0 : n.hug) !== !1 && (((s = t.label) == null ? void 0 : s.embed) || Lr(e, r.originalText)));
}
function Cl(e, t, { signatureDocs: r, shouldBreak: n }) {
	if (r.length === 1) return r[0];
	let { parent: s, key: u } = e;
	return (u !== "callee" && lt(s)) || De(s)
		? l([r[0], " =>", f([x, P([" =>", x], r.slice(1))])], {
				shouldBreak: n,
			})
		: (u === "callee" && lt(s)) || t.assignmentLayout
			? l(P([" =>", x], r), { shouldBreak: n })
			: l(f(P([" =>", x], r)), { shouldBreak: n });
}
function Al(e, t, r, { bodyDoc: n, bodyComments: s, functionBody: u, shouldPutBodyOnSameLine: i }) {
	let { node: a, parent: o } = e,
		c = r.expandLastArg && ae(t, "all") ? b(",") : "",
		m = (r.expandLastArg || o.type === "JSXExpressionContainer") && !d(a) ? E : "";
	return i && Hi(u) ? [" ", l([b("", "("), f([E, n]), b("", ")"), c, m]), s] : (Vi(u) && (n = l(["(", f([E, n]), E, ")"])), i ? [" ", n, s] : [f([x, n, s]), c, m]);
}
var Tl = (e, t, r) => {
		if (!(e && t == null)) {
			if (t.findLast) return t.findLast(r);
			for (let n = t.length - 1; n >= 0; n--) {
				let s = t[n];
				if (r(s, n, t)) return s;
			}
		}
	},
	Ki = Tl;
function yr(e, t, r, n) {
	let { node: s } = e,
		u = [],
		i = Ki(!1, s[n], (a) => a.type !== "EmptyStatement");
	return (
		e.each(({ node: a }) => {
			a.type !== "EmptyStatement" && (u.push(r()), a !== i && (u.push(F), pe(a, t) && u.push(F)));
		}, n),
		u
	);
}
function Fn(e, t, r) {
	let n = dl(e, t, r),
		{ node: s, parent: u } = e;
	if (s.type === "Program" && (u == null ? void 0 : u.type) !== "ModuleExpression") return n ? [n, F] : "";
	let i = [];
	if ((s.type === "StaticBlock" && i.push("static "), i.push("{"), n)) i.push(f([F, n]), F);
	else {
		let a = e.grandparent;
		u.type === "ArrowFunctionExpression" || u.type === "FunctionExpression" || u.type === "FunctionDeclaration" || u.type === "ComponentDeclaration" || u.type === "HookDeclaration" || u.type === "ObjectMethod" || u.type === "ClassMethod" || u.type === "ClassPrivateMethod" || u.type === "ForStatement" || u.type === "WhileStatement" || u.type === "DoWhileStatement" || u.type === "DoExpression" || u.type === "ModuleExpression" || (u.type === "CatchClause" && !a.finalizer) || u.type === "TSModuleDeclaration" || s.type === "StaticBlock" || i.push(F);
	}
	return i.push("}"), i;
}
function dl(e, t, r) {
	let { node: n } = e,
		s = w(n.directives),
		u = n.body.some((o) => o.type !== "EmptyStatement"),
		i = d(n, g.Dangling);
	if (!s && !u && !i) return "";
	let a = [];
	return s && (a.push(yr(e, t, r, "directives")), (u || i) && (a.push(F), pe(O(!1, n.directives, -1), t) && a.push(F))), u && a.push(yr(e, t, r, "body")), i && a.push(M(e, t)), a;
}
function xl(e) {
	let t = new WeakMap();
	return function (r) {
		return t.has(r) || t.set(r, Symbol(e)), t.get(r);
	};
}
var Cn = xl;
function hl(e) {
	switch (e) {
		case null:
			return "";
		case "PlusOptional":
			return "+?";
		case "MinusOptional":
			return "-?";
		case "Optional":
			return "?";
	}
}
function zi(e, t, r) {
	let { node: n } = e;
	return l([n.variance ? r("variance") : "", "[", f([r("keyTparam"), " in ", r("sourceType")]), "]", hl(n.optional), ": ", r("propType")]);
}
function xs(e, t) {
	return e === "+" || e === "-" ? e + t : t;
}
function Qi(e, t, r) {
	let { node: n } = e,
		s = de(t.originalText, R(n), R(n.typeParameter));
	return l(["{", f([t.bracketSpacing ? x : E, l([r("typeParameter"), n.optional ? xs(n.optional, "?") : "", n.typeAnnotation ? ": " : "", r("typeAnnotation")]), t.semi ? b(";") : ""]), M(e, t), t.bracketSpacing ? x : E, "}"], { shouldBreak: s });
}
var Dr = Cn("typeParameters");
function gl(e, t, r) {
	let { node: n } = e;
	return K(n).length === 1 && n.type.startsWith("TS") && !n[r][0].constraint && e.parent.type === "ArrowFunctionExpression" && !(t.filepath && /\.ts$/u.test(t.filepath));
}
function Pt(e, t, r, n) {
	let { node: s } = e;
	if (!s[n]) return "";
	if (!Array.isArray(s[n])) return r(n);
	let u = St(e.grandparent),
		i = e.match(
			(c) => !(c[n].length === 1 && we(c[n][0])),
			void 0,
			(c, m) => m === "typeAnnotation",
			(c) => c.type === "Identifier",
			Fs,
		);
	if (s[n].length === 0 || (!i && (u || (s[n].length === 1 && (s[n][0].type === "NullableTypeAnnotation" || As(s[n][0])))))) return ["<", P(", ", e.map(r, n)), Sl(e, t), ">"];
	let o = s.type === "TSTypeParameterInstantiation" ? "" : gl(e, t, n) ? "," : ae(t) ? b(",") : "";
	return l(["<", f([E, P([",", x], e.map(r, n))]), o, E, ">"], { id: Dr(s) });
}
function Sl(e, t) {
	let { node: r } = e;
	if (!d(r, g.Dangling)) return "";
	let n = !d(r, g.Line),
		s = M(e, t, { indent: !n });
	return n ? s : [s, F];
}
function An(e, t, r) {
	let { node: n, parent: s } = e,
		u = [n.type === "TSTypeParameter" && n.const ? "const " : ""],
		i = n.type === "TSTypeParameter" ? r("name") : n.name;
	if (s.type === "TSMappedType")
		return (
			s.readonly && u.push(xs(s.readonly, "readonly"), " "),
			u.push("[", i),
			n.constraint && u.push(" in ", r("constraint")),
			s.nameType &&
				u.push(
					" as ",
					e.callParent(() => r("nameType")),
				),
			u.push("]"),
			u
		);
	if ((n.variance && u.push(r("variance")), n.in && u.push("in "), n.out && u.push("out "), u.push(i), n.bound && (n.usesExtendsBound && u.push(" extends "), u.push(Y(e, r, "bound"))), n.constraint)) {
		let a = Symbol("constraint");
		u.push(" extends", l(f(x), { id: a }), ke, At(r("constraint"), { groupId: a }));
	}
	return n.default && u.push(" = ", r("default")), l(u);
}
var Zi = v(["ClassProperty", "PropertyDefinition", "ClassPrivateProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractPropertyDefinition", "TSAbstractAccessorProperty"]);
function Tn(e, t, r) {
	let { node: n } = e,
		s = [$(e), Nt(e), "class"],
		u = d(n.id, g.Trailing) || d(n.typeParameters, g.Trailing) || d(n.superClass) || w(n.extends) || w(n.mixins) || w(n.implements),
		i = [],
		a = [];
	if ((n.id && i.push(" ", r("id")), i.push(r("typeParameters")), n.superClass)) {
		let o = [bl(e, t, r), r(n.superTypeArguments ? "superTypeArguments" : "superTypeParameters")],
			c = e.call((m) => ["extends ", ye(m, o, t)], "superClass");
		u ? a.push(x, l(c)) : a.push(" ", c);
	} else a.push(hs(e, t, r, "extends"));
	if ((a.push(hs(e, t, r, "mixins"), hs(e, t, r, "implements")), u)) {
		let o;
		ta(n) ? (o = [...i, f(a)]) : (o = f([...i, a])), s.push(l(o, { id: ea(n) }));
	} else s.push(...i, ...a);
	return s.push(" ", r("body")), s;
}
var ea = Cn("heritageGroup");
function gs(e) {
	return b(F, "", { groupId: ea(e) });
}
function Bl(e) {
	return ["extends", "mixins", "implements"].reduce((t, r) => t + (Array.isArray(e[r]) ? e[r].length : 0), e.superClass ? 1 : 0) > 1;
}
function ta(e) {
	return e.typeParameters && !d(e.typeParameters, g.Trailing | g.Line) && !Bl(e);
}
function hs(e, t, r, n) {
	let { node: s } = e;
	if (!w(s[n])) return "";
	let u = M(e, t, { marker: n });
	return [ta(s) ? b(" ", x, { groupId: Dr(s.typeParameters) }) : x, u, u && F, n, l(f([x, P([",", x], e.map(r, n))]))];
}
function bl(e, t, r) {
	let n = r("superClass"),
		{ parent: s } = e;
	return s.type === "AssignmentExpression" ? l(b(["(", f([E, n]), E, ")"], n)) : n;
}
function dn(e, t, r) {
	let { node: n } = e,
		s = [];
	return w(n.decorators) && s.push(Ds(e, t, r)), s.push(Xt(n)), n.static && s.push("static "), s.push(Nt(e)), n.override && s.push("override "), s.push(mr(e, t, r)), s;
}
function xn(e, t, r) {
	let { node: n } = e,
		s = [],
		u = t.semi ? ";" : "";
	w(n.decorators) && s.push(Ds(e, t, r)), s.push(Xt(n), $(e)), n.static && s.push("static "), s.push(Nt(e)), n.override && s.push("override "), n.readonly && s.push("readonly "), n.variance && s.push(r("variance")), (n.type === "ClassAccessorProperty" || n.type === "AccessorProperty" || n.type === "TSAbstractAccessorProperty") && s.push("accessor "), s.push(Et(e, t, r), V(e), pn(e), Y(e, r));
	let i = n.type === "TSAbstractPropertyDefinition" || n.type === "TSAbstractAccessorProperty";
	return [Tt(e, t, r, s, " =", i ? void 0 : "value"), u];
}
function ra(e, t, r) {
	let { node: n } = e,
		s = [];
	return (
		e.each(({ node: u, next: i, isLast: a }) => {
			s.push(r()), !t.semi && Zi(u) && Pl(u, i) && s.push(";"), a || (s.push(F), pe(u, t) && s.push(F));
		}, "body"),
		d(n, g.Dangling) && s.push(M(e, t)),
		[w(n.body) ? gs(e.parent) : "", "{", s.length > 0 ? [f([F, s]), F] : "", "}"]
	);
}
function Pl(e, t) {
	var s;
	let { type: r, name: n } = e.key;
	if (!e.computed && r === "Identifier" && (n === "static" || n === "get" || n === "set") && !e.value && !e.typeAnnotation) return !0;
	if (!t || t.static || t.accessibility || t.readonly) return !1;
	if (!t.computed) {
		let u = (s = t.key) == null ? void 0 : s.name;
		if (u === "in" || u === "instanceof") return !0;
	}
	if (Zi(t) && t.variance && !t.static && !t.declare) return !0;
	switch (t.type) {
		case "ClassProperty":
		case "PropertyDefinition":
		case "TSAbstractPropertyDefinition":
			return t.computed;
		case "MethodDefinition":
		case "TSAbstractMethodDefinition":
		case "ClassMethod":
		case "ClassPrivateMethod": {
			if ((t.value ? t.value.async : t.async) || t.kind === "get" || t.kind === "set") return !1;
			let i = t.value ? t.value.generator : t.generator;
			return !!(t.computed || i);
		}
		case "TSIndexSignature":
			return !0;
	}
	return !1;
}
function na(e, t) {
	if (t.semi || Ss(e, t) || bs(e, t)) return !1;
	let { node: r, key: n, parent: s } = e;
	return !!(r.type === "ExpressionStatement" && ((n === "body" && (s.type === "Program" || s.type === "BlockStatement" || s.type === "StaticBlock" || s.type === "TSModuleBlock")) || (n === "consequent" && s.type === "SwitchCase")) && e.call(() => sa(e, t), "expression"));
}
function sa(e, t) {
	let { node: r } = e;
	switch (r.type) {
		case "ParenthesizedExpression":
		case "TypeCastExpression":
		case "ArrayExpression":
		case "ArrayPattern":
		case "TemplateLiteral":
		case "TemplateElement":
		case "RegExpLiteral":
			return !0;
		case "ArrowFunctionExpression":
			if (!En(e, t)) return !0;
			break;
		case "UnaryExpression": {
			let { prefix: n, operator: s } = r;
			if (n && (s === "+" || s === "-")) return !0;
			break;
		}
		case "BindExpression":
			if (!r.object) return !0;
			break;
		case "Literal":
			if (r.regex) return !0;
			break;
		default:
			if (X(r)) return !0;
	}
	return Be(e, t) ? !0 : jt(r) ? e.call(() => sa(e, t), ...Pr(r)) : !1;
}
function Ss({ node: e, parent: t }, r) {
	return (r.parentParser === "markdown" || r.parentParser === "mdx") && e.type === "ExpressionStatement" && X(e.expression) && t.type === "Program" && t.body.length === 1;
}
function Bs(e) {
	switch (e.type) {
		case "MemberExpression":
			switch (e.property.type) {
				case "Identifier":
				case "NumericLiteral":
				case "StringLiteral":
					return Bs(e.object);
			}
			return !1;
		case "Identifier":
			return !0;
		default:
			return !1;
	}
}
function bs({ node: e, parent: t }, r) {
	return (r.parser === "__vue_event_binding" || r.parser === "__vue_ts_event_binding") && e.type === "ExpressionStatement" && t.type === "Program" && t.body.length === 1;
}
function ua(e, t, r) {
	let n = [r("expression")];
	return bs(e, t) ? Bs(e.node.expression) && n.push(";") : Ss(e, t) || (t.semi && n.push(";")), n;
}
function ia(e, t, r) {
	if (t.__isVueBindings || t.__isVueForBindingLeft) {
		let n = e.map(r, "program", "body", 0, "params");
		if (n.length === 1) return n[0];
		let s = P([",", x], n);
		return t.__isVueForBindingLeft ? ["(", f([E, l(s)]), E, ")"] : s;
	}
	if (t.__isEmbeddedTypescriptGenericParameters) {
		let n = e.map(r, "program", "body", 0, "typeParameters", "params");
		return P([",", x], n);
	}
}
function pa(e, t) {
	let { node: r } = e;
	switch (r.type) {
		case "RegExpLiteral":
			return aa(r);
		case "BigIntLiteral":
			return hn(r.extra.raw);
		case "NumericLiteral":
			return Ze(r.extra.raw);
		case "StringLiteral":
			return Ie(tt(r.extra.raw, t));
		case "NullLiteral":
			return "null";
		case "BooleanLiteral":
			return String(r.value);
		case "DecimalLiteral":
			return Ze(r.value) + "m";
		case "DirectiveLiteral":
			return oa(r.extra.raw, t);
		case "Literal": {
			if (r.regex) return aa(r.regex);
			if (r.bigint) return hn(r.raw);
			if (r.decimal) return Ze(r.decimal) + "m";
			let { value: n } = r;
			return typeof n == "number" ? Ze(r.raw) : typeof n == "string" ? (kl(e) ? oa(r.raw, t) : Ie(tt(r.raw, t))) : String(n);
		}
	}
}
function kl(e) {
	if (e.key !== "expression") return;
	let { parent: t } = e;
	return t.type === "ExpressionStatement" && t.directive;
}
function hn(e) {
	return e.toLowerCase();
}
function aa({ pattern: e, flags: t }) {
	return (t = [...t].sort().join("")), `/${e}/${t}`;
}
function oa(e, t) {
	let r = e.slice(1, -1);
	if (r.includes('"') || r.includes("'")) return e;
	let n = t.singleQuote ? "'" : '"';
	return n + r + n;
}
function Il(e, t, r) {
	let n = e.originalText.slice(t, r);
	for (let s of e[Symbol.for("comments")]) {
		let u = R(s);
		if (u > r) break;
		let i = k(s);
		if (i < t) continue;
		let a = i - u;
		n = n.slice(0, u - t) + " ".repeat(a) + n.slice(i - t);
	}
	return n;
}
var fr = Il;
function ca(e, t, r) {
	let { node: n } = e;
	return ["import", n.module ? " module" : "", n.phase ? ` ${n.phase}` : "", ks(n), ya(e, t, r), ma(e, t, r), fa(e, t, r), t.semi ? ";" : ""];
}
var la = (e) => e.type === "ExportDefaultDeclaration" || (e.type === "DeclareExportDeclaration" && e.default);
function gn(e, t, r) {
	let { node: n } = e,
		s = [di(e, t, r), $(e), "export", la(n) ? " default" : ""],
		{ declaration: u, exported: i } = n;
	return d(n, g.Dangling) && (s.push(" ", M(e, t)), wr(n) && s.push(F)), u ? s.push(" ", r("declaration")) : (s.push(Ol(n)), n.type === "ExportAllDeclaration" || n.type === "DeclareExportAllDeclaration" ? (s.push(" *"), i && s.push(" as ", r("exported"))) : s.push(ya(e, t, r)), s.push(ma(e, t, r), fa(e, t, r))), s.push(wl(n, t)), s;
}
var Ll = v(["ClassDeclaration", "ComponentDeclaration", "FunctionDeclaration", "TSInterfaceDeclaration", "DeclareClass", "DeclareComponent", "DeclareFunction", "DeclareHook", "HookDeclaration", "TSDeclareFunction", "EnumDeclaration"]);
function wl(e, t) {
	return t.semi && (!e.declaration || (la(e) && !Ll(e.declaration))) ? ";" : "";
}
function Ps(e, t = !0) {
	return e && e !== "value" ? `${t ? " " : ""}${e}${t ? "" : " "}` : "";
}
function ks(e, t) {
	return Ps(e.importKind, t);
}
function Ol(e) {
	return Ps(e.exportKind);
}
function ma(e, t, r) {
	let { node: n } = e;
	if (!n.source) return "";
	let s = [];
	return Da(n, t) && s.push(" from"), s.push(" ", r("source")), s;
}
function ya(e, t, r) {
	let { node: n } = e;
	if (!Da(n, t)) return "";
	let s = [" "];
	if (w(n.specifiers)) {
		let u = [],
			i = [];
		e.each(() => {
			let a = e.node.type;
			if (a === "ExportNamespaceSpecifier" || a === "ExportDefaultSpecifier" || a === "ImportNamespaceSpecifier" || a === "ImportDefaultSpecifier") u.push(r());
			else if (a === "ExportSpecifier" || a === "ImportSpecifier") i.push(r());
			else throw new Me(n, "specifier");
		}, "specifiers"),
			s.push(P(", ", u)),
			i.length > 0 && (u.length > 0 && s.push(", "), i.length > 1 || u.length > 0 || n.specifiers.some((o) => d(o)) ? s.push(l(["{", f([t.bracketSpacing ? x : E, P([",", x], i)]), b(ae(t) ? "," : ""), t.bracketSpacing ? x : E, "}"])) : s.push(["{", t.bracketSpacing ? " " : "", ...i, t.bracketSpacing ? " " : "", "}"]));
	} else s.push("{}");
	return s;
}
function Da(e, t) {
	return e.type !== "ImportDeclaration" || w(e.specifiers) || e.importKind === "type" ? !0 : fr(t, R(e), R(e.source)).trimEnd().endsWith("from");
}
function _l(e, t) {
	var n, s;
	if ((n = e.extra) != null && n.deprecatedAssertSyntax) return "assert";
	let r = fr(t, k(e.source), (s = e.attributes) != null && s[0] ? R(e.attributes[0]) : k(e)).trimStart();
	return r.startsWith("assert") ? "assert" : r.startsWith("with") || w(e.attributes) ? "with" : void 0;
}
function fa(e, t, r) {
	let { node: n } = e;
	if (!n.source) return "";
	let s = _l(n, t);
	if (!s) return "";
	let u = [` ${s} {`];
	return w(n.attributes) && (t.bracketSpacing && u.push(" "), u.push(P(", ", e.map(r, "attributes"))), t.bracketSpacing && u.push(" ")), u.push("}"), u;
}
function Ea(e, t, r) {
	let { node: n } = e,
		{ type: s } = n,
		u = s.startsWith("Import"),
		i = u ? "imported" : "local",
		a = u ? "local" : "exported",
		o = n[i],
		c = n[a],
		m = "",
		D = "";
	return s === "ExportNamespaceSpecifier" || s === "ImportNamespaceSpecifier" ? (m = "*") : o && (m = r(i)), c && !jl(n) && (D = r(a)), [Ps(s === "ImportSpecifier" ? n.importKind : n.exportKind, !1), m, m && D ? " as " : "", D];
}
function jl(e) {
	if (e.type !== "ImportSpecifier" && e.type !== "ExportSpecifier") return !1;
	let { local: t, [e.type === "ImportSpecifier" ? "imported" : "exported"]: r } = e;
	if (t.type !== r.type || !eu(t, r)) return !1;
	if (Q(t)) return t.value === r.value && fe(t) === fe(r);
	switch (t.type) {
		case "Identifier":
			return t.name === r.name;
		default:
			return !1;
	}
}
function dt(e, t, r) {
	var j;
	let n = t.semi ? ";" : "",
		{ node: s } = e,
		u = s.type === "ObjectTypeAnnotation",
		i = s.type === "TSEnumDeclaration" || s.type === "EnumBooleanBody" || s.type === "EnumNumberBody" || s.type === "EnumBigIntBody" || s.type === "EnumStringBody" || s.type === "EnumSymbolBody",
		a = [s.type === "TSTypeLiteral" || i ? "members" : s.type === "TSInterfaceBody" ? "body" : "properties"];
	u && a.push("indexers", "callProperties", "internalSlots");
	let o = a.flatMap((h) => e.map(({ node: W }) => ({ node: W, printed: r(), loc: R(W) }), h));
	a.length > 1 && o.sort((h, W) => h.loc - W.loc);
	let { parent: c, key: m } = e,
		D = u && m === "body" && (c.type === "InterfaceDeclaration" || c.type === "DeclareInterface" || c.type === "DeclareClass"),
		y = s.type === "TSInterfaceBody" || i || D || (s.type === "ObjectPattern" && c.type !== "FunctionDeclaration" && c.type !== "FunctionExpression" && c.type !== "ArrowFunctionExpression" && c.type !== "ObjectMethod" && c.type !== "ClassMethod" && c.type !== "ClassPrivateMethod" && c.type !== "AssignmentPattern" && c.type !== "CatchClause" && s.properties.some((h) => h.value && (h.value.type === "ObjectPattern" || h.value.type === "ArrayPattern"))) || (s.type !== "ObjectPattern" && o.length > 0 && de(t.originalText, R(s), o[0].loc)),
		C = D ? ";" : s.type === "TSInterfaceBody" || s.type === "TSTypeLiteral" ? b(n, ";") : ",",
		p = s.type === "RecordExpression" ? "#{" : s.exact ? "{|" : "{",
		A = s.exact ? "|}" : "}",
		T = [],
		S = o.map((h) => {
			let W = [...T, l(h.printed)];
			return (T = [C, x]), (h.node.type === "TSPropertySignature" || h.node.type === "TSMethodSignature" || h.node.type === "TSConstructSignatureDeclaration" || h.node.type === "TSCallSignatureDeclaration") && d(h.node, g.PrettierIgnore) && T.shift(), pe(h.node, t) && T.push(F), W;
		});
	if (s.inexact || s.hasUnknownMembers) {
		let h;
		if (d(s, g.Dangling)) {
			let W = d(s, g.Line);
			h = [M(e, t), W || te(t.originalText, k(O(!1, ct(s), -1))) ? F : x, "..."];
		} else h = ["..."];
		S.push([...T, ...h]);
	}
	let B = (j = O(!1, o, -1)) == null ? void 0 : j.node,
		_ = !(s.inexact || s.hasUnknownMembers || (B && (B.type === "RestElement" || ((B.type === "TSPropertySignature" || B.type === "TSCallSignatureDeclaration" || B.type === "TSMethodSignature" || B.type === "TSConstructSignatureDeclaration") && d(B, g.PrettierIgnore))))),
		J;
	if (S.length === 0) {
		if (!d(s, g.Dangling)) return [p, A, Y(e, r)];
		J = l([p, M(e, t, { indent: !0 }), E, A, V(e), Y(e, r)]);
	} else J = [D && w(s.properties) ? gs(c) : "", p, f([t.bracketSpacing ? x : E, ...S]), b(_ && (C !== "," || ae(t)) ? C : ""), t.bracketSpacing ? x : E, A, V(e), Y(e, r)];
	return e.match((h) => h.type === "ObjectPattern" && !w(h.decorators), Is) ||
		(we(s) &&
			(e.match(
				void 0,
				(h, W) => W === "typeAnnotation",
				(h, W) => W === "typeAnnotation",
				Is,
			) ||
				e.match(void 0, (h, W) => h.type === "FunctionTypeParam" && W === "typeAnnotation", Is))) ||
		(!y &&
			e.match(
				(h) => h.type === "ObjectPattern",
				(h) => h.type === "AssignmentExpression" || h.type === "VariableDeclarator",
			))
		? J
		: l(J, { shouldBreak: y });
}
function Is(e, t) {
	return (t === "params" || t === "parameters" || t === "this" || t === "rest") && Cs(e);
}
function vl(e) {
	let t = [e];
	for (let r = 0; r < t.length; r++) {
		let n = t[r];
		for (let s of ["test", "consequent", "alternate"]) {
			let u = n[s];
			if (X(u)) return !0;
			u.type === "ConditionalExpression" && t.push(u);
		}
	}
	return !1;
}
function Ml(e, t, r) {
	let { node: n } = e,
		s = n.type === "ConditionalExpression",
		u = s ? "alternate" : "falseType",
		{ parent: i } = e,
		a = s ? r("test") : [r("checkType"), " ", "extends", " ", r("extendsType")];
	return i.type === n.type && i[u] === n ? he(2, a) : a;
}
var Rl = new Map([
	["AssignmentExpression", "right"],
	["VariableDeclarator", "init"],
	["ReturnStatement", "argument"],
	["ThrowStatement", "argument"],
	["UnaryExpression", "argument"],
	["YieldExpression", "argument"],
	["AwaitExpression", "argument"],
]);
function Jl(e) {
	let { node: t } = e;
	if (t.type !== "ConditionalExpression") return !1;
	let r,
		n = t;
	for (let s = 0; !r; s++) {
		let u = e.getParentNode(s);
		if ((u.type === "ChainExpression" && u.expression === n) || (L(u) && u.callee === n) || (q(u) && u.object === n) || (u.type === "TSNonNullExpression" && u.expression === n)) {
			n = u;
			continue;
		}
		(u.type === "NewExpression" && u.callee === n) || (Te(u) && u.expression === n) ? ((r = e.getParentNode(s + 1)), (n = u)) : (r = u);
	}
	return n === t ? !1 : r[Rl.get(r.type)] === n;
}
function Fa(e, t, r) {
	let { node: n } = e,
		s = n.type === "ConditionalExpression",
		u = s ? "consequent" : "trueType",
		i = s ? "alternate" : "falseType",
		a = s ? ["test"] : ["checkType", "extendsType"],
		o = n[u],
		c = n[i],
		m = [],
		D = !1,
		{ parent: y } = e,
		C = y.type === n.type && a.some((H) => y[H] === n),
		p = y.type === n.type && !C,
		A,
		T,
		S = 0;
	do (T = A || n), (A = e.getParentNode(S)), S++;
	while (A && A.type === n.type && a.every((H) => A[H] !== T));
	let B = A || y,
		_ = T;
	if (s && (X(n[a[0]]) || X(o) || X(c) || vl(_))) {
		(D = !0), (p = !0);
		let H = (Z) => [b("("), f([E, Z]), E, b(")")],
			ue = (Z) => Z.type === "NullLiteral" || (Z.type === "Literal" && Z.value === null) || (Z.type === "Identifier" && Z.name === "undefined");
		m.push(" ? ", ue(o) ? r(u) : H(r(u)), " : ", c.type === n.type || ue(c) ? r(i) : H(r(i)));
	} else {
		let H = (Z) => (t.useTabs ? f(r(Z)) : he(2, r(Z))),
			ue = [x, "? ", o.type === n.type ? b("", "(") : "", H(u), o.type === n.type ? b("", ")") : "", x, ": ", H(i)];
		m.push(y.type !== n.type || y[i] === n || C ? ue : t.useTabs ? Mr(f(ue)) : he(Math.max(0, t.tabWidth - 2), ue));
	}
	let J = [u, i, ...a].some((H) => d(n[H], (ue) => re(ue) && de(t.originalText, R(ue), k(ue)))),
		j = (H) => (y === B ? l(H, { shouldBreak: J }) : J ? [H, Ee] : H),
		h = !D && (q(y) || (y.type === "NGPipeExpression" && y.left === n)) && !y.computed,
		W = Jl(e),
		Fe = j([Ml(e, t, r), p ? m : f(m), s && h && !W ? E : ""]);
	return C || W ? l([f([E, Fe]), E]) : Fe;
}
function ql(e, t) {
	return (q(t) || (t.type === "NGPipeExpression" && t.left === e)) && !t.computed;
}
function Wl(e, t, r, n) {
	return [...e.map((u) => ct(u)), ct(t), ct(r)].flat().some((u) => re(u) && de(n.originalText, R(u), k(u)));
}
var Gl = new Map([
	["AssignmentExpression", "right"],
	["VariableDeclarator", "init"],
	["ReturnStatement", "argument"],
	["ThrowStatement", "argument"],
	["UnaryExpression", "argument"],
	["YieldExpression", "argument"],
	["AwaitExpression", "argument"],
]);
function Ul(e) {
	let { node: t } = e;
	if (t.type !== "ConditionalExpression") return !1;
	let r,
		n = t;
	for (let s = 0; !r; s++) {
		let u = e.getParentNode(s);
		if ((u.type === "ChainExpression" && u.expression === n) || (L(u) && u.callee === n) || (q(u) && u.object === n) || (u.type === "TSNonNullExpression" && u.expression === n)) {
			n = u;
			continue;
		}
		(u.type === "NewExpression" && u.callee === n) || (Te(u) && u.expression === n) ? ((r = e.getParentNode(s + 1)), (n = u)) : (r = u);
	}
	return n === t ? !1 : r[Gl.get(r.type)] === n;
}
var Ls = (e) => [b("("), f([E, e]), E, b(")")];
function Vt(e, t, r, n) {
	if (!t.experimentalTernaries) return Fa(e, t, r);
	let { node: s } = e,
		u = s.type === "ConditionalExpression",
		i = s.type === "TSConditionalType" || s.type === "ConditionalTypeAnnotation",
		a = u ? "consequent" : "trueType",
		o = u ? "alternate" : "falseType",
		c = u ? ["test"] : ["checkType", "extendsType"],
		m = s[a],
		D = s[o],
		y = c.map((We) => s[We]),
		{ parent: C } = e,
		p = C.type === s.type,
		A = p && c.some((We) => C[We] === s),
		T = p && C[o] === s,
		S = m.type === s.type,
		B = D.type === s.type,
		_ = B || T,
		J = t.tabWidth > 2 || t.useTabs,
		j,
		h,
		W = 0;
	do (h = j || s), (j = e.getParentNode(W)), W++;
	while (j && j.type === s.type && c.every((We) => j[We] !== h));
	let Fe = j || C,
		H = n && n.assignmentLayout && n.assignmentLayout !== "break-after-operator" && (C.type === "AssignmentExpression" || C.type === "VariableDeclarator" || C.type === "ClassProperty" || C.type === "PropertyDefinition" || C.type === "ClassPrivateProperty" || C.type === "ObjectProperty" || C.type === "Property"),
		ue = (C.type === "ReturnStatement" || C.type === "ThrowStatement") && !(S || B),
		Z = u && Fe.type === "JSXExpressionContainer" && e.grandparent.type !== "JSXAttribute",
		It = Ul(e),
		$t = ql(s, C),
		I = i && Be(e, t),
		G = J ? (t.useTabs ? "	" : " ".repeat(t.tabWidth - 1)) : "",
		ee = Wl(y, m, D, t) || S || B,
		qe = !_ && !p && !i && (Z ? m.type === "NullLiteral" || (m.type === "Literal" && m.value === null) : rr(m, t) && Mn(s.test, 3)),
		xt = _ || T || (i && !p) || (p && u && Mn(s.test, 1)) || qe,
		js = [];
	!S &&
		d(m, g.Dangling) &&
		e.call((We) => {
			js.push(M(We, t), F);
		}, "consequent");
	let Kt = [];
	d(s.test, g.Dangling) &&
		e.call((We) => {
			Kt.push(M(We, t));
		}, "test"),
		!B &&
			d(D, g.Dangling) &&
			e.call((We) => {
				Kt.push(M(We, t));
			}, "alternate"),
		d(s, g.Dangling) && Kt.push(M(e, t));
	let vs = Symbol("test"),
		Ma = Symbol("consequent"),
		Fr = Symbol("test-and-consequent"),
		Ra = u ? [Ls(r("test")), s.test.type === "ConditionalExpression" ? Ee : ""] : [r("checkType"), " ", "extends", " ", s.extendsType.type === "TSConditionalType" || s.extendsType.type === "ConditionalTypeAnnotation" || s.extendsType.type === "TSMappedType" ? r("extendsType") : l(Ls(r("extendsType")))],
		Ms = l([Ra, " ?"], { id: vs }),
		Ja = r(a),
		Cr = f([S || (Z && (X(m) || p || _)) ? F : x, js, Ja]),
		qa = xt
			? l([Ms, _ ? Cr : b(Cr, l(Cr, { id: Ma }), { groupId: vs })], {
					id: Fr,
				})
			: [Ms, Cr],
		kn = r(o),
		Rs = qe ? b(kn, Mr(Ls(kn)), { groupId: Fr }) : kn,
		zt = [qa, Kt.length > 0 ? [f([F, Kt]), F] : B ? F : qe ? b(x, " ", { groupId: Fr }) : x, ":", B ? " " : J ? (xt ? b(G, b(_ || qe ? " " : G, " "), { groupId: Fr }) : b(G, " ")) : " ", B ? Rs : l([f(Rs), Z && !qe ? E : ""]), $t && !It ? E : "", ee ? Ee : ""];
	return H && !ee ? l(f([E, l(zt)])) : H || ue ? l(f(zt)) : It || (i && A) ? l([f([E, zt]), I ? E : ""]) : C === Fe ? l(zt) : zt;
}
function Ca(e, t, r, n) {
	let { node: s } = e;
	if (kr(s)) return pa(e, t);
	let u = t.semi ? ";" : "",
		i = [];
	switch (s.type) {
		case "JsExpressionRoot":
			return r("node");
		case "JsonRoot":
			return [r("node"), F];
		case "File":
			return ia(e, t, r) ?? r("program");
		case "EmptyStatement":
			return "";
		case "ExpressionStatement":
			return ua(e, t, r);
		case "ChainExpression":
			return r("expression");
		case "ParenthesizedExpression":
			return !d(s.expression) && (se(s.expression) || U(s.expression)) ? ["(", r("expression"), ")"] : l(["(", f([E, r("expression")]), E, ")"]);
		case "AssignmentExpression":
			return wi(e, t, r);
		case "VariableDeclarator":
			return Oi(e, t, r);
		case "BinaryExpression":
		case "LogicalExpression":
			return Yr(e, t, r);
		case "AssignmentPattern":
			return [r("left"), " = ", r("right")];
		case "OptionalMemberExpression":
		case "MemberExpression":
			return bi(e, t, r);
		case "MetaProperty":
			return [r("meta"), ".", r("property")];
		case "BindExpression":
			return s.object && i.push(r("object")), i.push(l(f([E, Hr(e, t, r)]))), i;
		case "Identifier":
			return [s.name, V(e), pn(e), Y(e, r)];
		case "V8IntrinsicIdentifier":
			return ["%", s.name];
		case "SpreadElement":
		case "SpreadElementPattern":
		case "SpreadPropertyPattern":
		case "RestElement":
			return cn(e, r);
		case "FunctionDeclaration":
		case "FunctionExpression":
			return Dn(e, r, t, n);
		case "ArrowFunctionExpression":
			return $i(e, t, r, n);
		case "YieldExpression":
			return i.push("yield"), s.delegate && i.push("*"), s.argument && i.push(" ", r("argument")), i;
		case "AwaitExpression":
			if ((i.push("await"), s.argument)) {
				i.push(" ", r("argument"));
				let { parent: a } = e;
				if ((L(a) && a.callee === s) || (q(a) && a.object === s)) {
					i = [f([E, ...i]), E];
					let o = e.findAncestor((c) => c.type === "AwaitExpression" || c.type === "BlockStatement");
					if ((o == null ? void 0 : o.type) !== "AwaitExpression" || !ie(o.argument, (c) => c === s)) return l(i);
				}
			}
			return i;
		case "ExportDefaultDeclaration":
		case "ExportNamedDeclaration":
		case "ExportAllDeclaration":
			return gn(e, t, r);
		case "ImportDeclaration":
			return ca(e, t, r);
		case "ImportSpecifier":
		case "ExportSpecifier":
		case "ImportNamespaceSpecifier":
		case "ExportNamespaceSpecifier":
		case "ImportDefaultSpecifier":
		case "ExportDefaultSpecifier":
			return Ea(e, t, r);
		case "ImportAttribute":
			return yn(e, t, r);
		case "Import":
			return "import";
		case "Program":
		case "BlockStatement":
		case "StaticBlock":
			return Fn(e, t, r);
		case "ClassBody":
			return ra(e, t, r);
		case "ThrowStatement":
			return Yi(e, t, r);
		case "ReturnStatement":
			return Xi(e, t, r);
		case "NewExpression":
		case "ImportExpression":
		case "OptionalCallExpression":
		case "CallExpression":
			return Vr(e, t, r);
		case "ObjectExpression":
		case "ObjectPattern":
		case "RecordExpression":
			return dt(e, t, r);
		case "Property":
			return gt(s) ? mr(e, t, r) : yn(e, t, r);
		case "ObjectProperty":
			return yn(e, t, r);
		case "ObjectMethod":
			return mr(e, t, r);
		case "Decorator":
			return ["@", r("expression")];
		case "ArrayExpression":
		case "ArrayPattern":
		case "TupleExpression":
			return Yt(e, t, r);
		case "SequenceExpression": {
			let { parent: a } = e;
			if (a.type === "ExpressionStatement" || a.type === "ForStatement") {
				let o = [];
				return (
					e.each(({ isFirst: c }) => {
						c ? o.push(r()) : o.push(",", f([x, r()]));
					}, "expressions"),
					l(o)
				);
			}
			return l(P([",", x], e.map(r, "expressions")));
		}
		case "ThisExpression":
			return "this";
		case "Super":
			return "super";
		case "Directive":
			return [r("value"), u];
		case "UnaryExpression":
			return i.push(s.operator), /[a-z]$/u.test(s.operator) && i.push(" "), d(s.argument) ? i.push(l(["(", f([E, r("argument")]), E, ")"])) : i.push(r("argument")), i;
		case "UpdateExpression":
			return [s.prefix ? s.operator : "", r("argument"), s.prefix ? "" : s.operator];
		case "ConditionalExpression":
			return Vt(e, t, r, n);
		case "VariableDeclaration": {
			let a = e.map(r, "declarations"),
				o = e.parent,
				c = o.type === "ForStatement" || o.type === "ForInStatement" || o.type === "ForOfStatement",
				m = s.declarations.some((y) => y.init),
				D;
			return a.length === 1 && !d(s.declarations[0]) ? (D = a[0]) : a.length > 0 && (D = f(a[0])), (i = [$(e), s.kind, D ? [" ", D] : "", f(a.slice(1).map((y) => [",", m && !c ? F : x, y]))]), (c && o.body !== s) || i.push(u), l(i);
		}
		case "WithStatement":
			return l(["with (", r("object"), ")", ft(s.body, r("body"))]);
		case "IfStatement": {
			let a = ft(s.consequent, r("consequent")),
				o = l(["if (", l([f([E, r("test")]), E]), ")", a]);
			if ((i.push(o), s.alternate)) {
				let c = d(s.consequent, g.Trailing | g.Line) || wr(s),
					m = s.consequent.type === "BlockStatement" && !c;
				i.push(m ? " " : F), d(s, g.Dangling) && i.push(M(e, t), c ? F : " "), i.push("else", l(ft(s.alternate, r("alternate"), s.alternate.type === "IfStatement")));
			}
			return i;
		}
		case "ForStatement": {
			let a = ft(s.body, r("body")),
				o = M(e, t),
				c = o ? [o, E] : "";
			return !s.init && !s.test && !s.update ? [c, l(["for (;;)", a])] : [c, l(["for (", l([f([E, r("init"), ";", x, r("test"), ";", x, r("update")]), E]), ")", a])];
		}
		case "WhileStatement":
			return l(["while (", l([f([E, r("test")]), E]), ")", ft(s.body, r("body"))]);
		case "ForInStatement":
			return l(["for (", r("left"), " in ", r("right"), ")", ft(s.body, r("body"))]);
		case "ForOfStatement":
			return l(["for", s.await ? " await" : "", " (", r("left"), " of ", r("right"), ")", ft(s.body, r("body"))]);
		case "DoWhileStatement": {
			let a = ft(s.body, r("body"));
			return (i = [l(["do", a])]), s.body.type === "BlockStatement" ? i.push(" ") : i.push(F), i.push("while (", l([f([E, r("test")]), E]), ")", u), i;
		}
		case "DoExpression":
			return [s.async ? "async " : "", "do ", r("body")];
		case "BreakStatement":
		case "ContinueStatement":
			return i.push(s.type === "BreakStatement" ? "break" : "continue"), s.label && i.push(" ", r("label")), i.push(u), i;
		case "LabeledStatement":
			return s.body.type === "EmptyStatement" ? [r("label"), ":;"] : [r("label"), ": ", r("body")];
		case "TryStatement":
			return ["try ", r("block"), s.handler ? [" ", r("handler")] : "", s.finalizer ? [" finally ", r("finalizer")] : ""];
		case "CatchClause":
			if (s.param) {
				let a = d(s.param, (c) => !re(c) || (c.leading && te(t.originalText, k(c))) || (c.trailing && te(t.originalText, R(c), { backwards: !0 }))),
					o = r("param");
				return ["catch ", a ? ["(", f([E, o]), E, ") "] : ["(", o, ") "], r("body")];
			}
			return ["catch ", r("body")];
		case "SwitchStatement":
			return [
				l(["switch (", f([E, r("discriminant")]), E, ")"]),
				" {",
				s.cases.length > 0
					? f([
							F,
							P(
								F,
								e.map(({ node: a, isLast: o }) => [r(), !o && pe(a, t) ? F : ""], "cases"),
							),
						])
					: "",
				F,
				"}",
			];
		case "SwitchCase": {
			s.test ? i.push("case ", r("test"), ":") : i.push("default:"), d(s, g.Dangling) && i.push(" ", M(e, t));
			let a = s.consequent.filter((o) => o.type !== "EmptyStatement");
			if (a.length > 0) {
				let o = yr(e, t, r, "consequent");
				i.push(a.length === 1 && a[0].type === "BlockStatement" ? [" ", o] : f([F, o]));
			}
			return i;
		}
		case "DebuggerStatement":
			return ["debugger", u];
		case "ClassDeclaration":
		case "ClassExpression":
			return Tn(e, t, r);
		case "ClassMethod":
		case "ClassPrivateMethod":
		case "MethodDefinition":
			return dn(e, t, r);
		case "ClassProperty":
		case "PropertyDefinition":
		case "ClassPrivateProperty":
		case "ClassAccessorProperty":
		case "AccessorProperty":
			return xn(e, t, r);
		case "TemplateElement":
			return Ie(s.value.raw);
		case "TemplateLiteral":
			return qr(e, r, t);
		case "TaggedTemplateExpression":
			return Uu(e, r);
		case "PrivateIdentifier":
			return ["#", s.name];
		case "PrivateName":
			return ["#", r("id")];
		case "TopicReference":
			return "%";
		case "ArgumentPlaceholder":
			return "?";
		case "ModuleExpression":
			return ["module ", r("body")];
		case "InterpreterDirective":
		default:
			throw new Me(s, "ESTree");
	}
}
function Sn(e, t, r) {
	let { parent: n, node: s, key: u } = e,
		i = [r("expression")];
	switch (s.type) {
		case "AsConstExpression":
			i.push(" as const");
			break;
		case "AsExpression":
		case "TSAsExpression":
			i.push(" as ", r("typeAnnotation"));
			break;
		case "SatisfiesExpression":
		case "TSSatisfiesExpression":
			i.push(" satisfies ", r("typeAnnotation"));
			break;
	}
	return (u === "callee" && L(n)) || (u === "object" && q(n)) ? l([f([E, ...i]), E]) : i;
}
function Aa(e, t, r) {
	let { node: n } = e,
		s = [$(e), "component"];
	n.id && s.push(" ", r("id")), s.push(r("typeParameters"));
	let u = Nl(e, r, t);
	return n.rendersType ? s.push(l([u, " ", r("rendersType")])) : s.push(l([u])), n.body && s.push(" ", r("body")), t.semi && n.type === "DeclareComponent" && s.push(";"), s;
}
function Nl(e, t, r) {
	let { node: n } = e,
		s = n.params;
	if ((n.rest && (s = [...s, n.rest]), s.length === 0)) return ["(", M(e, r, { filter: (i) => ge(r.originalText, k(i)) === ")" }), ")"];
	let u = [];
	return (
		Yl(e, (i, a) => {
			let o = a === s.length - 1;
			o && n.rest && u.push("..."), u.push(t()), !o && (u.push(","), pe(s[a], r) ? u.push(F, F) : u.push(x));
		}),
		["(", f([E, ...u]), b(ae(r, "all") && !Xl(n, s) ? "," : ""), E, ")"]
	);
}
function Xl(e, t) {
	var r;
	return e.rest || ((r = O(!1, t, -1)) == null ? void 0 : r.type) === "RestElement";
}
function Yl(e, t) {
	let { node: r } = e,
		n = 0,
		s = (u) => t(u, n++);
	e.each(s, "params"), r.rest && e.call(s, "rest");
}
function Ta(e, t, r) {
	let { node: n } = e;
	return n.shorthand ? r("local") : [r("name"), " as ", r("local")];
}
function da(e, t, r) {
	let { node: n } = e,
		s = [];
	return n.name && s.push(r("name"), n.optional ? "?: " : ": "), s.push(r("typeAnnotation")), s;
}
function xa(e, t, r) {
	return dt(e, r, t);
}
function Bn(e, t) {
	let { node: r } = e,
		n = t("id");
	r.computed && (n = ["[", n, "]"]);
	let s = "";
	return r.initializer && (s = t("initializer")), r.init && (s = t("init")), s ? [n, " = ", s] : n;
}
function ha(e, t, r) {
	let { node: n } = e,
		s;
	if (n.type === "EnumSymbolBody" || n.explicitType)
		switch (n.type) {
			case "EnumBooleanBody":
				s = "boolean";
				break;
			case "EnumNumberBody":
				s = "number";
				break;
			case "EnumBigIntBody":
				s = "bigint";
				break;
			case "EnumStringBody":
				s = "string";
				break;
			case "EnumSymbolBody":
				s = "symbol";
				break;
		}
	return [s ? `of ${s} ` : "", xa(e, t, r)];
}
function bn(e, t, r) {
	let { node: n } = e;
	return [$(e), n.const ? "const " : "", "enum ", t("id"), " ", n.type === "TSEnumDeclaration" ? xa(e, t, r) : t("body")];
}
function Sa(e, t, r) {
	let { node: n } = e,
		s = ["hook"];
	n.id && s.push(" ", r("id"));
	let u = Je(e, r, t, !1, !0),
		i = Ht(e, r),
		a = ot(n, i);
	return s.push(l([a ? l(u) : u, i]), n.body ? " " : "", r("body")), s;
}
function Ba(e, t, r) {
	let { node: n } = e,
		s = [$(e), "hook"];
	return n.id && s.push(" ", r("id")), t.semi && s.push(";"), s;
}
function ga(e) {
	var r;
	let { node: t } = e;
	return t.type === "HookTypeAnnotation" && ((r = e.getParentNode(2)) == null ? void 0 : r.type) === "DeclareHook";
}
function ba(e, t, r) {
	let { node: n } = e,
		s = [];
	s.push(ga(e) ? "" : "hook ");
	let u = Je(e, r, t, !1, !0),
		i = [];
	return i.push(ga(e) ? ": " : " => ", r("returnType")), ot(n, i) && (u = l(u)), s.push(u, i), l(s);
}
function Pn(e, t, r) {
	let { node: n } = e,
		s = [$(e), "interface"],
		u = [],
		i = [];
	n.type !== "InterfaceTypeAnnotation" && u.push(" ", r("id"), r("typeParameters"));
	let a = n.typeParameters && !d(n.typeParameters, g.Trailing | g.Line);
	return w(n.extends) && i.push(a ? b(" ", x, { groupId: Dr(n.typeParameters) }) : x, "extends ", (n.extends.length === 1 ? mu : f)(P([",", x], e.map(r, "extends")))), d(n.id, g.Trailing) || w(n.extends) ? (a ? s.push(l([...u, f(i)])) : s.push(l(f([...u, ...i])))) : s.push(...u, ...i), s.push(" ", r("body")), l(s);
}
function Pa(e, t, r) {
	let { node: n } = e;
	if (Sr(n)) return n.type.slice(0, -14).toLowerCase();
	let s = t.semi ? ";" : "";
	switch (n.type) {
		case "ComponentDeclaration":
		case "DeclareComponent":
		case "ComponentTypeAnnotation":
			return Aa(e, t, r);
		case "ComponentParameter":
			return Ta(e, t, r);
		case "ComponentTypeParameter":
			return da(e, t, r);
		case "HookDeclaration":
			return Sa(e, t, r);
		case "DeclareHook":
			return Ba(e, t, r);
		case "HookTypeAnnotation":
			return ba(e, t, r);
		case "DeclareClass":
			return Tn(e, t, r);
		case "DeclareFunction":
			return [$(e), "function ", r("id"), r("predicate"), s];
		case "DeclareModule":
			return ["declare module ", r("id"), " ", r("body")];
		case "DeclareModuleExports":
			return ["declare module.exports", Y(e, r), s];
		case "DeclareNamespace":
			return ["declare namespace ", r("id"), " ", r("body")];
		case "DeclareVariable":
			return [$(e), n.kind ?? "var", " ", r("id"), s];
		case "DeclareExportDeclaration":
		case "DeclareExportAllDeclaration":
			return gn(e, t, r);
		case "DeclareOpaqueType":
		case "OpaqueType":
			return Mi(e, t, r);
		case "DeclareTypeAlias":
		case "TypeAlias":
			return Kr(e, t, r);
		case "IntersectionTypeAnnotation":
			return zr(e, t, r);
		case "UnionTypeAnnotation":
			return Qr(e, t, r);
		case "ConditionalTypeAnnotation":
			return Vt(e, t, r);
		case "InferTypeAnnotation":
			return tn(e, t, r);
		case "FunctionTypeAnnotation":
			return Zr(e, t, r);
		case "TupleTypeAnnotation":
			return Yt(e, t, r);
		case "TupleTypeLabeledElement":
			return nn(e, t, r);
		case "TupleTypeSpreadElement":
			return rn(e, t, r);
		case "GenericTypeAnnotation":
			return [r("id"), Pt(e, t, r, "typeParameters")];
		case "IndexedAccessType":
		case "OptionalIndexedAccessType":
			return en(e, t, r);
		case "TypeAnnotation":
			return sn(e, t, r);
		case "TypeParameter":
			return An(e, t, r);
		case "TypeofTypeAnnotation":
			return an(e, r);
		case "ExistsTypeAnnotation":
			return "*";
		case "ArrayTypeAnnotation":
			return un(r);
		case "DeclareEnum":
		case "EnumDeclaration":
			return bn(e, r, t);
		case "EnumBooleanBody":
		case "EnumNumberBody":
		case "EnumBigIntBody":
		case "EnumStringBody":
		case "EnumSymbolBody":
			return ha(e, r, t);
		case "EnumBooleanMember":
		case "EnumNumberMember":
		case "EnumBigIntMember":
		case "EnumStringMember":
		case "EnumDefaultedMember":
			return Bn(e, r);
		case "FunctionTypeParam": {
			let u = n.name ? r("name") : e.parent.this === n ? "this" : "";
			return [u, V(e), u ? ": " : "", r("typeAnnotation")];
		}
		case "DeclareInterface":
		case "InterfaceDeclaration":
		case "InterfaceTypeAnnotation":
			return Pn(e, t, r);
		case "ClassImplements":
		case "InterfaceExtends":
			return [r("id"), r("typeParameters")];
		case "NullableTypeAnnotation":
			return ["?", r("typeAnnotation")];
		case "Variance": {
			let { kind: u } = n;
			return ln.ok(u === "plus" || u === "minus"), u === "plus" ? "+" : "-";
		}
		case "KeyofTypeAnnotation":
			return ["keyof ", r("argument")];
		case "ObjectTypeCallProperty":
			return [n.static ? "static " : "", r("value")];
		case "ObjectTypeMappedTypeProperty":
			return zi(e, t, r);
		case "ObjectTypeIndexer":
			return [n.static ? "static " : "", n.variance ? r("variance") : "", "[", r("id"), n.id ? ": " : "", r("key"), "]: ", r("value")];
		case "ObjectTypeProperty": {
			let u = "";
			return n.proto ? (u = "proto ") : n.static && (u = "static "), [u, n.kind !== "init" ? n.kind + " " : "", n.variance ? r("variance") : "", Et(e, t, r), V(e), gt(n) ? "" : ": ", r("value")];
		}
		case "ObjectTypeAnnotation":
			return dt(e, t, r);
		case "ObjectTypeInternalSlot":
			return [n.static ? "static " : "", "[[", r("id"), "]]", V(e), n.method ? "" : ": ", r("value")];
		case "ObjectTypeSpreadProperty":
			return cn(e, r);
		case "QualifiedTypeofIdentifier":
		case "QualifiedTypeIdentifier":
			return [r("qualification"), ".", r("id")];
		case "NullLiteralTypeAnnotation":
			return "null";
		case "BooleanLiteralTypeAnnotation":
			return String(n.value);
		case "StringLiteralTypeAnnotation":
			return Ie(tt(fe(n), t));
		case "NumberLiteralTypeAnnotation":
			return Ze(n.raw ?? n.extra.raw);
		case "BigIntLiteralTypeAnnotation":
			return hn(n.raw ?? n.extra.raw);
		case "TypeCastExpression":
			return ["(", r("expression"), Y(e, r), ")"];
		case "TypePredicate":
			return on(e, r);
		case "TypeOperator":
			return [n.operator, " ", r("typeAnnotation")];
		case "TypeParameterDeclaration":
		case "TypeParameterInstantiation":
			return Pt(e, t, r, "params");
		case "InferredPredicate":
		case "DeclaredPredicate":
			return [e.key === "predicate" && e.parent.type !== "DeclareFunction" && !e.parent.returnType ? ": " : " ", "%checks", ...(n.type === "DeclaredPredicate" ? ["(", r("value"), ")"] : [])];
		case "AsExpression":
		case "AsConstExpression":
		case "SatisfiesExpression":
			return Sn(e, t, r);
	}
}
function ka(e, t, r) {
	var i;
	let { node: n } = e;
	if (!n.type.startsWith("TS")) return;
	if (Br(n)) return n.type.slice(2, -7).toLowerCase();
	let s = t.semi ? ";" : "",
		u = [];
	switch (n.type) {
		case "TSThisType":
			return "this";
		case "TSTypeAssertion": {
			let a = !(U(n.expression) || se(n.expression)),
				o = l(["<", f([E, r("typeAnnotation")]), E, ">"]),
				c = [b("("), f([E, r("expression")]), E, b(")")];
			return a
				? ze([
						[o, r("expression")],
						[o, l(c, { shouldBreak: !0 })],
						[o, r("expression")],
					])
				: l([o, r("expression")]);
		}
		case "TSDeclareFunction":
			return Dn(e, r, t);
		case "TSExportAssignment":
			return ["export = ", r("expression"), s];
		case "TSModuleBlock":
			return Fn(e, t, r);
		case "TSInterfaceBody":
		case "TSTypeLiteral":
			return dt(e, t, r);
		case "TSTypeAliasDeclaration":
			return Kr(e, t, r);
		case "TSQualifiedName":
			return [r("left"), ".", r("right")];
		case "TSAbstractMethodDefinition":
		case "TSDeclareMethod":
			return dn(e, t, r);
		case "TSAbstractAccessorProperty":
		case "TSAbstractPropertyDefinition":
			return xn(e, t, r);
		case "TSInterfaceHeritage":
		case "TSClassImplements":
		case "TSExpressionWithTypeArguments":
		case "TSInstantiationExpression":
			return [r("expression"), r(n.typeArguments ? "typeArguments" : "typeParameters")];
		case "TSTemplateLiteralType":
			return qr(e, r, t);
		case "TSNamedTupleMember":
			return nn(e, t, r);
		case "TSRestType":
			return rn(e, t, r);
		case "TSOptionalType":
			return [r("typeAnnotation"), "?"];
		case "TSInterfaceDeclaration":
			return Pn(e, t, r);
		case "TSTypeParameterDeclaration":
		case "TSTypeParameterInstantiation":
			return Pt(e, t, r, "params");
		case "TSTypeParameter":
			return An(e, t, r);
		case "TSAsExpression":
		case "TSSatisfiesExpression":
			return Sn(e, t, r);
		case "TSArrayType":
			return un(r);
		case "TSPropertySignature":
			return [n.readonly ? "readonly " : "", Et(e, t, r), V(e), Y(e, r)];
		case "TSParameterProperty":
			return [Xt(n), n.static ? "static " : "", n.override ? "override " : "", n.readonly ? "readonly " : "", r("parameter")];
		case "TSTypeQuery":
			return an(e, r);
		case "TSIndexSignature": {
			let a = n.parameters.length > 1 ? b(ae(t) ? "," : "") : "",
				o = l([f([E, P([", ", E], e.map(r, "parameters"))]), a, E]),
				c = e.parent.type === "ClassBody" && e.key === "body";
			return [c && n.static ? "static " : "", n.readonly ? "readonly " : "", "[", n.parameters ? o : "", "]", Y(e, r), c ? s : ""];
		}
		case "TSTypePredicate":
			return on(e, r);
		case "TSNonNullExpression":
			return [r("expression"), "!"];
		case "TSImportType":
			return [n.isTypeOf ? "typeof " : "", "import(", r("argument"), ")", n.qualifier ? [".", r("qualifier")] : "", Pt(e, t, r, n.typeArguments ? "typeArguments" : "typeParameters")];
		case "TSLiteralType":
			return r("literal");
		case "TSIndexedAccessType":
			return en(e, t, r);
		case "TSTypeOperator":
			return [n.operator, " ", r("typeAnnotation")];
		case "TSMappedType":
			return Qi(e, t, r);
		case "TSMethodSignature": {
			let a = n.kind && n.kind !== "method" ? `${n.kind} ` : "";
			u.push(Xt(n), a, n.computed ? "[" : "", r("key"), n.computed ? "]" : "", V(e));
			let o = Je(e, r, t, !1, !0),
				c = n.returnType ? "returnType" : "typeAnnotation",
				m = n[c],
				D = m ? Y(e, r, c) : "",
				y = ot(n, D);
			return u.push(y ? l(o) : o), m && u.push(l(D)), l(u);
		}
		case "TSNamespaceExportDeclaration":
			return ["export as namespace ", r("id"), t.semi ? ";" : ""];
		case "TSEnumDeclaration":
			return bn(e, r, t);
		case "TSEnumMember":
			return Bn(e, r);
		case "TSImportEqualsDeclaration":
			return [n.isExport ? "export " : "", "import ", ks(n, !1), r("id"), " = ", r("moduleReference"), t.semi ? ";" : ""];
		case "TSExternalModuleReference":
			return ["require(", r("expression"), ")"];
		case "TSModuleDeclaration": {
			let { parent: a } = e,
				o = a.type === "TSModuleDeclaration",
				c = ((i = n.body) == null ? void 0 : i.type) === "TSModuleDeclaration";
			if (o) u.push(".");
			else if ((u.push($(e)), !(n.kind === "global" || n.global))) {
				let D = n.kind ?? (Q(n.id) || fr(t, R(n), R(n.id)).trim().endsWith("module") ? "module" : "namespace");
				u.push(D, " ");
			}
			return u.push(r("id")), c ? u.push(r("body")) : n.body ? u.push(" ", l(r("body"))) : u.push(s), u;
		}
		case "TSConditionalType":
			return Vt(e, t, r);
		case "TSInferType":
			return tn(e, t, r);
		case "TSIntersectionType":
			return zr(e, t, r);
		case "TSUnionType":
			return Qr(e, t, r);
		case "TSFunctionType":
		case "TSCallSignatureDeclaration":
		case "TSConstructorType":
		case "TSConstructSignatureDeclaration":
			return Zr(e, t, r);
		case "TSTupleType":
			return Yt(e, t, r);
		case "TSTypeReference":
			return [r("typeName"), Pt(e, t, r, n.typeArguments ? "typeArguments" : "typeParameters")];
		case "TSTypeAnnotation":
			return sn(e, t, r);
		case "TSEmptyBodyFunctionExpression":
			return fn(e, t, r);
		case "TSJSDocAllType":
			return "*";
		case "TSJSDocUnknownType":
			return "?";
		case "TSJSDocNullableType":
			return Ts(e, r, "?");
		case "TSJSDocNonNullableType":
			return Ts(e, r, "!");
		case "TSParenthesizedType":
		default:
			throw new Me(n, "TypeScript");
	}
}
function Hl(e, t, r, n) {
	if (Xr(e)) return ci(e, t);
	for (let s of [Ti, Ei, Pa, ka, Ca]) {
		let u = s(e, t, r, n);
		if (u !== void 0) return u;
	}
}
var Vl = v(["ClassMethod", "ClassPrivateMethod", "ClassProperty", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "ClassPrivateProperty", "MethodDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod"]);
function $l(e, t, r, n) {
	var D;
	e.isRoot && ((D = t.__onHtmlBindingRoot) == null || D.call(t, e.node, t));
	let s = Hl(e, t, r, n);
	if (!s) return "";
	let { node: u } = e;
	if (Vl(u)) return s;
	let i = w(u.decorators),
		a = xi(e, t, r),
		o = u.type === "ClassExpression";
	if (i && !o) return ir(s, (y) => l([a, y]));
	let c = Be(e, t),
		m = na(e, t);
	return !a && !c && !m ? s : ir(s, (y) => [m ? ";" : "", c ? "(" : "", c && o && i ? [f([x, a, y]), x] : [a, y], c ? ")" : ""]);
}
var Ia = $l;
var Kl = { avoidAstMutation: !0 };
var La = [
	{
		linguistLanguageId: 174,
		name: "JSON.stringify",
		type: "data",
		color: "#292929",
		tmScope: "source.json",
		aceMode: "json",
		codemirrorMode: "javascript",
		codemirrorMimeType: "application/json",
		aliases: ["geojson", "jsonl", "topojson"],
		extensions: [".importmap"],
		filenames: ["package.json", "package-lock.json", "composer.json"],
		parsers: ["json-stringify"],
		vscodeLanguageIds: ["json"],
	},
	{
		linguistLanguageId: 174,
		name: "JSON",
		type: "data",
		color: "#292929",
		tmScope: "source.json",
		aceMode: "json",
		codemirrorMode: "javascript",
		codemirrorMimeType: "application/json",
		aliases: ["geojson", "jsonl", "topojson"],
		extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"],
		filenames: [".all-contributorsrc", ".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "flake.lock", "mcmod.info", ".babelrc", ".jscsrc", ".jshintrc", ".jslintrc", ".swcrc"],
		parsers: ["json"],
		vscodeLanguageIds: ["json"],
	},
	{
		linguistLanguageId: 423,
		name: "JSON with Comments",
		type: "data",
		color: "#292929",
		group: "JSON",
		tmScope: "source.js",
		aceMode: "javascript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "text/javascript",
		aliases: ["jsonc"],
		extensions: [".jsonc", ".code-snippets", ".code-workspace", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"],
		filenames: [],
		parsers: ["jsonc"],
		vscodeLanguageIds: ["jsonc"],
	},
	{
		linguistLanguageId: 175,
		name: "JSON5",
		type: "data",
		color: "#267CB9",
		extensions: [".json5"],
		tmScope: "source.js",
		aceMode: "javascript",
		codemirrorMode: "javascript",
		codemirrorMimeType: "application/json",
		parsers: ["json5"],
		vscodeLanguageIds: ["json5"],
	},
];
var Os = {};
Ar(Os, { getVisitorKeys: () => Oa, massageAstNode: () => ja, print: () => Zl });
var zl = {
		JsonRoot: ["node"],
		ArrayExpression: ["elements"],
		ObjectExpression: ["properties"],
		ObjectProperty: ["key", "value"],
		UnaryExpression: ["argument"],
		NullLiteral: [],
		BooleanLiteral: [],
		StringLiteral: [],
		NumericLiteral: [],
		Identifier: [],
		TemplateLiteral: ["quasis"],
		TemplateElement: [],
	},
	wa = zl;
var Ql = hr(wa),
	Oa = Ql;
function Zl(e, t, r) {
	let { node: n } = e;
	switch (n.type) {
		case "JsonRoot":
			return [r("node"), F];
		case "ArrayExpression": {
			if (n.elements.length === 0) return "[]";
			let s = e.map(() => (e.node === null ? "null" : r()), "elements");
			return ["[", f([F, P([",", F], s)]), F, "]"];
		}
		case "ObjectExpression":
			return n.properties.length === 0 ? "{}" : ["{", f([F, P([",", F], e.map(r, "properties"))]), F, "}"];
		case "ObjectProperty":
			return [r("key"), ": ", r("value")];
		case "UnaryExpression":
			return [n.operator === "+" ? "" : n.operator, r("argument")];
		case "NullLiteral":
			return "null";
		case "BooleanLiteral":
			return n.value ? "true" : "false";
		case "StringLiteral":
			return JSON.stringify(n.value);
		case "NumericLiteral":
			return _a(e) ? JSON.stringify(String(n.value)) : JSON.stringify(n.value);
		case "Identifier":
			return _a(e) ? JSON.stringify(n.name) : n.name;
		case "TemplateLiteral":
			return r(["quasis", 0]);
		case "TemplateElement":
			return JSON.stringify(n.value.cooked);
		default:
			throw new Me(n, "JSON");
	}
}
function _a(e) {
	return e.key === "key" && e.parent.type === "ObjectProperty";
}
var em = new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
function ja(e, t) {
	let { type: r } = e;
	if (r === "ObjectProperty") {
		let { key: n } = e;
		n.type === "Identifier" ? (t.key = { type: "StringLiteral", value: n.name }) : n.type === "NumericLiteral" && (t.key = { type: "StringLiteral", value: String(n.value) });
		return;
	}
	if (r === "UnaryExpression" && e.operator === "+") return t.argument;
	if (r === "ArrayExpression") {
		for (let [n, s] of e.elements.entries()) s === null && t.elements.splice(n, 0, { type: "NullLiteral" });
		return;
	}
	if (r === "TemplateLiteral") return { type: "StringLiteral", value: e.quasis[0].value.cooked };
}
ja.ignoredProperties = em;
var Er = {
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
var kt = "JavaScript",
	tm = {
		arrowParens: {
			category: kt,
			type: "choice",
			default: "always",
			description: "Include parentheses around a sole arrow function parameter.",
			choices: [
				{
					value: "always",
					description: "Always include parens. Example: `(x) => x`",
				},
				{
					value: "avoid",
					description: "Omit parens when possible. Example: `x => x`",
				},
			],
		},
		bracketSameLine: Er.bracketSameLine,
		bracketSpacing: Er.bracketSpacing,
		jsxBracketSameLine: {
			category: kt,
			type: "boolean",
			description: "Put > on the last line instead of at a new line.",
			deprecated: "2.4.0",
		},
		semi: {
			category: kt,
			type: "boolean",
			default: !0,
			description: "Print semicolons.",
			oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them.",
		},
		experimentalTernaries: {
			category: kt,
			type: "boolean",
			default: !1,
			description: "Use curious ternaries, with the question mark after the condition.",
			oppositeDescription: "Default behavior of ternaries; keep question marks on the same line as the consequent.",
		},
		singleQuote: Er.singleQuote,
		jsxSingleQuote: {
			category: kt,
			type: "boolean",
			default: !1,
			description: "Use single quotes in JSX.",
		},
		quoteProps: {
			category: kt,
			type: "choice",
			default: "as-needed",
			description: "Change when properties in objects are quoted.",
			choices: [
				{
					value: "as-needed",
					description: "Only add quotes around object properties where required.",
				},
				{
					value: "consistent",
					description: "If at least one property in an object requires quotes, quote all properties.",
				},
				{
					value: "preserve",
					description: "Respect the input use of quotes in object properties.",
				},
			],
		},
		trailingComma: {
			category: kt,
			type: "choice",
			default: "all",
			description: "Print trailing commas wherever possible when multi-line.",
			choices: [
				{
					value: "all",
					description: "Trailing commas wherever possible (including function arguments).",
				},
				{
					value: "es5",
					description: "Trailing commas where valid in ES5 (objects, arrays, etc.)",
				},
				{ value: "none", description: "No trailing commas." },
			],
		},
		singleAttributePerLine: Er.singleAttributePerLine,
	},
	va = tm;
var rm = { estree: ws, "estree-json": Os },
	nm = [...Us, ...La];
var $d = _s;
export { $d as default, nm as languages, va as options, rm as printers };
