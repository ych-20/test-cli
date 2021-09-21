const inquirer = require('inquirer')
const {downGitProject} = require("./util/common");

module.exports =  (projectName) => {
    console.log(`此处是文件${projectName}`);
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'test',
            message: '你确定使用这个吗?',
            default: true
        }
    ]).then(async (answers) => {
        console.log('结果为:')
        console.log(answers.test)
        if (answers.test){
           const { dir } = await downGitProject('vue-test-template')
        }
    })
}