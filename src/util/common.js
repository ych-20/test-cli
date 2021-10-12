const mapActions = {
    create: {
        alias: 'c', //别名
        description: '创建一个项目', // 描述
        examples: [ //用法
            'ych-test-cli create <project-name>'
        ]
    },
    config: { //配置文件
        alias: 'conf', //别名
        description: 'config project variable', // 描述
        examples: [ //用法
            'ych-test-cli config set <k> <v>',
            'ych-test-cli config get <k>'
        ]
    },
    '*': {
        alias: '', //别名
        description: 'command not found', // 描述
        examples: [] //用法
    }}
const { downloadDir } = require('./constants')
const downloadGit = require('download-git-repo')
const downGitProject = (repo,tag)=>{
    // console.log(tag, 'downDir方法');
    return new Promise(((resolve, reject) => {
        let project = `ych-20/${repo}`; //下载的项目
        if(tag){
            project += `#${tag}`;
        }
        let dest = `${downloadDir}/${repo}`;
        //把项目下载当对应的目录中
        // console.log(dest, 'dest的内容。。。。。。。。。。');
        // console.log(project, 'dest的内容。。。。。。。。。。');
        try {
            downloadGit(project, dest,function (err) {
                console.log(err ? 'Error' : 'Success')
                // console.log(err)
                err ? reject(err) : resolve(dest)
            });
        } catch (error) {
            // console.log('错误了吗？？？\n');
            console.log(error);
            reject(error)
        }
    }))
    // return dest;
}

module.exports = {
    mapActions,
    downGitProject
};
