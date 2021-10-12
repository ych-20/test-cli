const {version, name} = require('../src/util/constants')
const path = require('path')
console.log("ych test-cli,", name);
// console.log("ych test-cli,",process.argv);
const program = require('commander');

const {mapActions} = require('./util/common')
// 配置command
Reflect.ownKeys(mapActions).forEach((action) =>{
    program.command(action)
        .alias(mapActions[action].alias)
        .description(mapActions[action].description + 'yyyyyyy') // 命令对应的描述
        .action(()=>{
            console.log('asdf:',action)
            if(action === '*'){  //访问不到对应的命令 就打印找不到命令
                console.log(mapActions[action].description);
            }else{
                // console.log(action);
                // console.log('path::',process.argv.slice(3))
                // 分解命令 到文件里 有多少文件 就有多少配置 create config
                // lee-cli create project-name ->[node,lee-cli,create,project-name]
                // console.log(process.argv);
                // console.log(path.resolve());
                require(path.join(__dirname,action))(...process.argv.slice(3));
            }
        })
})


program.on('--help', () => {
    console.log('\nExamples:');
    Reflect.ownKeys(mapActions).forEach((action) => {
        mapActions[action].examples.forEach((example) => {
            console.log(` ${example}`);
        })
    })})


program.version(version)
    .parse(process.argv); // process.argv就是用户在命令行中传入的参数
