/*
    * @Author: Jayshi
    * @Date: 2019.12.23
    * @Description: 分类列表
*/

// 使用schema
const Projects = require('../Schema/projects');
const ProjectsResolve = require('../Schema/projects_resolve');
// 操作方法
// 获取分类列表
const getProjects = async (ctx, next) => {
    const project = await Projects.aggregate([{
        $lookup: {
            from: 'projects_resolve',
            localField: 'id',
            foreignField: 'parentId',
            as: 'children'
        },
    }]);

    if (project) {
        ctx.body = {
            code: 200,
            data: project
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '未查询到数据'
        }
    }
};

// 更新任务
const setProjects = async (ctx, next) => {
    const req = ctx.request.body;
    const pro1 =  await Projects.find({_id: req._id});
    console.log(pro1);
    console.log(typeof pro1);
    console.log(pro1 != {});
    if (pro1 !== {}) {
        console.log(1);
        const project = await Projects.updateOne({_id: req._id}, req);
        if (project) {
            ctx.body = {
                code: 200,
                msg: '修改成功'
            }
        }
    }
    const pro2 = await ProjectsResolve.find({_id: req._id});
    if (pro2 !== []) {
        console.log(2);
        const projectsResolve = await ProjectsResolve.updateOne({_id: req._id}, req);
        if (projectsResolve) {
            ctx.body = {
                code: 200,
                msg: '修改成功'
            }
        }
    }
};

module.exports = {
    getProjects,
    setProjects
};