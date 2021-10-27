const e = require("express");

const users =[
    {
        firstName: "Mohamed Ali",
        lastName: "Osmaan",
        age: 90,
        email: "xyz@gmail.com",
        password: "1234"
    },

    {
        firstName: "Yuusuf Ali",
        lastName: "Mohamed",
        age: 90,
        email: "abc@gmaill.com",
        password: "123"
    }
];
//========================================
const getUsers= ()=>{
    return users;
}

const getOneUser= (email)=>{
    return users.filter(u=>u.email===email);
}

const getUserByEmailAndPassword= (email, password)=>{
    return users.filter(u=>u.email===email &&  u.password===password);
}

const create=(user)=>{
    users.push(user)
    return true;
}

const isEmailExist =(email) =>{
    return users.filter(e=> e.email==email).length
}

const update = (data) =>{
    new_user = users.filter(u=> u.email == data.email)
    new_user.map(function (value,index) { 

        new_user[index].firstName = data.firstName;
        new_user[index].lastName = data.lastName;
        new_user[index].age = data.age;
    });
    return true
}

const del = (data) =>{
    new_user = users.filter(u=> u.email == data.email)
    new_user.map(function (value, index){
        users.splice(index, 1);
    });
    return true;
}


module.exports={
    getUsers, 
    getOneUser, 
    create, 
    update, 
    del,
    isEmailExist,
    getUserByEmailAndPassword
}
