
let database = require('../config/database')

const getAllPermissions = async ()=>{
   let  query =` select * from permissions`
    return await database.executeOneParamQuery(query);

}

const getSingleUserPermission = async (rolename)=>{
    let query = `select distinct r.roleid,r.rolename,p.permissionname from roles r,permissions p,rolepermissions rp
    where  r.roleid=rp.roleid and p.permissionid=rp.permissionid and r.rolename = '${rolename}'`;
    return await database.executeOneParamQuery(query);
}


module.exports = {
    getAllPermissions,
    getSingleUserPermission

}