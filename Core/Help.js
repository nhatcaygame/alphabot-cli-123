/**
 * @package     AlphaBot-cli
 * @version     1.0.0
 * @author      Vu Minh Nhat
 * @link        https://github.com/nhatcaygames/alphabot-cli
 * @link        https://www.facebook.com/taolagin2003
 */
const { greenLog } = require('../Helpers.js');

module.exports = {
    keywords: ['help'],
    params: [],
    description: 'Hiển Thị Danh Sách Lệnh',
    fn: async () => {
        let index = 0;
        for (const name in global.core){
            const { keywords , params ,description } = global.core[name];
            if(keywords.length > 0){
                greenLog(`${++index}. ${keywords.join(' | ')}`);
            }else{
                let joinParams = '';
                for(const param of params) {
                    if(params.length > 0) 
                        joinParams += 'ALPHABOT-CLI --';
                    else
                        joinParams += 'ALPHABOT-CLI -';
                    
                    if (params.indexOf(param) < params.length - 1) joinParams += ' | ';
                }
                greenLog(`${++index}.${joinParams}`);
            }
            console.log(' 	⇒ ' + description);
        }
    }
}