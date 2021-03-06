/**
 * @package     AlphaBot-cli
 * @version     1.0.0
 * @author      Vu Minh Nhat
 * @link        https://github.com/nhatcaygames/alphabot-cli
 * @link        https://www.facebook.com/taolagin2003
 */
const {execShellCommand, greenLog, redLog} = require('../Helpers.js');
module.exports = {
    keywords: ['clone','c'],
    params: [],
    description: 'Cập nhật bản mới cho Alphabot',
    fn: async () => {
        try {
            console.log('Đang cập nhật phiên bản mới cho Alphabot');
            await execShellCommand('git clone https://github.com/nhatcaygame/alphabot');
        } catch (e) {
            redLog('Đã gặp lỗi trong quá trình cập nhật');
            throw e.message;
        }
        greenLog('Cập nhật Alphabot thành công');
    }
}