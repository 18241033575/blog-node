/*
    * @Author: Jayshi
    * @Date: 2020.3.25
    * @Description: 网站设置
*/

// 使用schema
const NetSetting = require('../Schema/netSetting');


// 操作方法
// 获取分类列表
const getNetSetting = async (ctx, next) => {

    const netSet = await NetSetting.find();
    if (netSet) {
        ctx.body = {
            code: 200,
            data: netSet
        }
    } else {
        ctx.body = {
            code: 400,
            msg: '数据库错误'
        }
    }
};
// 添加、编辑分类
const setNetSetting = async (ctx, next) => {
    const req = ctx.request.body;
    if (req.type === 'add') {
        const findSettingValue = await NetSetting.findOne({keyName: req.keyName});
        if (findSettingValue) {
            ctx.body = {
                code: 400,
                msg: '添加失败，已经存在该键值对'
            }
        } else {
            const settingAdd = await NetSetting.create({value: req.value, keyName: req.keyName});
            if (settingAdd) {
                ctx.body = {
                    code: 200,
                    msg: '添加成功'
                }
            } else {
                ctx.body = {
                    code: 400,
                    msg: '添加失败'
                }
            }
        }
    } else if(req.type === 'edit') {
        const settingEdit = await NetSetting.updateOne({ _id: req._id }, { keyName: req.keyName, value: req.value });
        if (settingEdit.n === 1 && settingEdit.nModified === 1 && settingEdit.ok === 1) {
            ctx.body = {
                code: 200,
                msg: '编辑成功'
            }
        } else {
            ctx.body = {
                code: 400,
                msg: '编辑失败'
            }
        }
    }else {
        const settingDel = await NetSetting.deleteOne({_id: req._id});
        if (settingDel) {
            ctx.body = {
                code: 200,
                msg: '删除成功'
            }
        } else {
            ctx.body = {
                code: 400,
                msg: '删除失败'
            }
        }
    }
};


module.exports = {
    getNetSetting,
    setNetSetting
};