/**
 * @package     AlphaBot-cli
 * @version     1.0.0
 * @author      Vu Minh Nhat
 * @link        https://github.com/nhatcaygames/alphabot
 * @link        https://www.facebook.com/taolagin2003
 */

const fs = require('fs');
const templates = ['Command', 'Manifest'];

for (const template of templates) {
	module.exports[template] = String(
		fs.readFileSync(__dirname + `/${template}.ejs`)
	);
}