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
const {greenLog} = require('../Helpers.js');
const template = require('../Templates');
module.exports = {
    keywords: ['create-modules'],
    params:[],
    description: 'Tạo 1 folder modules',
    fn: async argv => {
        const modulesDir = path.join(global.alphabotDir,'Modules');
        if(!argv._[1]) throw 'Bạn chưa Nhập tên modules! \n alphabot-cli create-modules <Tên Modules>';
        const name = argv._[1].trim();

        if(fs.existsSync(modulesDir)) {
            const modunDir = path.join(modulesDir,name);
            if(fs.existsSync(modunDir)) {
                throw 'Trùng tên thư mục Module';
            }
            fs.mkdirSync(modunDir);
            fs.writeFileSync(path.join(modunDir,'index.js'),ejs.render(template.Command,{name, listCommand: true, ...argv}));
            fs.writeFileSync(path.join(modunDir,'manifest.json'),ejs.render(template.manifest,{name,...argv}));
            greenLog(`Đã tạo 1 thư mục module tại đường dẫn ${modunDir}`);
        }else{
             throw 'Không tìm thấy thư mục chứa "module", Vui lòng gắn kết đến' + ' alphabot , hoặc có thể cài lại bằng lệnh alphabot-cli clone';

        }
    }
};