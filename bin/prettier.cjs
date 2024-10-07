"use strict";

var dynamicImport = new Function("module", "return import(module)");
module.exports.__promise = dynamicImport("./cli.mjs").then(function (cli) {
	return cli.run();
});
