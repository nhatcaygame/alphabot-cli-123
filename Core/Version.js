/**
 * @package     AlphaBot-cli
 * @version     1.0.0
 * @author      Vu Minh Nhat
 * @link        https://github.com/nhatcaygames/alphabot-cli
 * @link        https://www.facebook.com/taolagin2003
 */
 const {version} = require('../package.json');

 module.exports = {
     keywords: [],
     params: ['version', 'v'],
     description: 'Kiểm tra phiên bản của Alphabot-cli',
     fn: async () => {
         console.log(version);
     }
 };