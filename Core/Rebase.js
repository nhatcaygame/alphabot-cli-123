/**
 * @package     AlphaBot-cli
 * @version     1.0.0
 * @author      Vu Minh Nhat
 * @link        https://github.com/nhatcaygames/alphabot-cli
 * @link        https://www.facebook.com/taolagin2003
 */
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const template = require('../Templates');
const {subname} = require('../Helpers.js');

module.exports = {
	keywords: ['rebase', 'rb'],
	params: [],
	description:
		'Comment code command hiện tại rồi init lại cấu trúc command (FOR DEV ONLY)',
	fn: async argv => {
		if (!argv._[1])
			throw 'Ban chưa nhập địa chỉ file command! \n alphabot-cli rebase <địa chỉ file command>';
		const name = argv._[1].trim();
		const fixedName = fs.existsSync(path.resolve(process.cwd(), name))
			? name
			: name + '.js';
		const cpath = path.resolve(process.cwd(), fixedName);
		const currentContent = fs.readFileSync(cpath);
		const newContent = ejs.render(template.command, {
			name: subname(path.basename(cpath)),
			...argv
		});
		fs.writeFileSync(cpath, `${newContent}\n\n/*\n${currentContent}\n*/`);
	}
};