const inquirer = require('inquirer')
const ora = require('ora')
// import ora from "ora";
const ncp = require('ncp')
const path = require('path')
const {downloadDir} = require("./util/constants");
const {downGitProject} = require("./util/common");
const fse = require('fs-extra');

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
        // console.log('结果为:')
        // console.log(answers.test)
        if (answers.test){
            const spinner = ora('正在拉取模板中...... 稍等').start();
            // const { dir } = await downGitProject('vue-test-template')
            spinner.color = 'red';
            // spinner.text = 'Loading ora哈哈哈';
            // 成功
            const resolvePath = path.join(path.resolve(), projectName);
            const target = `${downloadDir}/vue-test-template`
            console.log('dirdirdir',target)
            await ncp(target, resolvePath);
            fse.remove(target);
            spinner.succeed('拉取成功');
        }
    })
}
