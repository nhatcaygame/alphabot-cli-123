#!/usr/bin/env node

/**
 * @package     AlphaBot-cli
 * @version     1.0.0
 * @author      Vu Minh Nhat
 * @link        https://github.com/nhatcaygames/alphabot-cli
 * @link        https://www.facebook.com/taolagin2003
 */

global.core = require('./core'); 
const pkgDir = require('pkg-dir');
const minimist = require('minimist');
const {redLog} = require('./Helpers.js');
const argv = minimist(process.argv.slice(2));

(async () => {
    global.alphabotDir = await pkgDir(process.cwd());

	/**
	 * Const Varialble Alert
	 */
    let notFound = true;

    for (const name in global.core){
        const {keywords, params, fn} = global.core[name];
        const method = argv._[0];

        try {
            if (keywords.includes(method)) {
				await fn(argv);
				notFound = false;
            } else {
				for (const param in argv) {
					if (param == '_') continue;
		 			if (params.includes(param)) {
						await fn(argv);
						notFound = false;
					}
				}
			}
        } catch (message) {
            redLog(`Error: ${message}`);
			console.log(message);
			process.exit();
        }
    }
    if (notFound) {
		global.core.help.fn();
	}
})();