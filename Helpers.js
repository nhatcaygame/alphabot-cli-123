/**
 * @package     AlphaBot-cli
 * @version     1.0.0
 * @author      Vu Minh Nhat
 * @link        https://github.com/nhatcaygames/alphabot-cli
 * @link        https://www.facebook.com/taolagin2003
 */
const logger = require('node-color-log');
const childProcess = require('child_process');

const execShellCommand = (cmd, options) => {
	return new Promise(resolve => {
		childProcess.exec(cmd, options, (error, stdout, stderr) => {
			if (error) {
				console.warn(error);
				resolve();
			}
			resolve(stdout ? stdout : stderr);
		});
	});
};

const greenLog = text => {
	logger.fontColorLog('green', text);
};

const redLog = text => {
	logger.fontColorLog('red', text);
};

const subname = text => {
	return text
		.split('.')
		.slice(0, -1)
		.join('.');
};

module.exports = {
	execShellCommand,
	greenLog,
	redLog,
	subname
};