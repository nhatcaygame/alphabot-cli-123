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
const {greenLog} = require('../Helpers.js');

module.exports = {
	keywords: ['create-command'],
	params: [],
	description: 'Tạo 1 file command',
	fn: async argv => {
		if (!argv._[1])
			throw 'Bạn chưa nhập lệnh!\n alphabot-cli create-command <tên lệnh>';
		const name = argv._[1].trim();
		const cmdPath = path.join(process.cwd(), name + '.js');
		if (fs.existsSync(cmdPath)) {
			throw `Tên file đã tồn tại vui lòng chọn tên khác`;
		}
		fs.writeFileSync(cmdPath, ejs.render(template.command, {name, ...argv}));
		greenLog(`Đã tạo 1 file lệnh tên ${name}.js \n Tại đường dẫn:`);
		console.log(cmdPath);
	}
};