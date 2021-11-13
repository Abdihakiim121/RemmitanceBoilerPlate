const handleAsync = (fn) => (req, res, next) => {
    Promise 
        .resolve(fn(req, res, next))
        .catch((err) => next(err));
}

// const converObject = (data) =>{
//     if(!data.metaData || !data.rows)
//     {
//         return data;
//     }
//     var array = [];
//          for (let i = 0; i < data.rows.length ; i++) {
//              users = {};
//             for (let j = 0; j < data.rows[i].length; j++) {
//                 let col = data.metaData[j].name;
//                users[col] = data.rows[i][j];
//             }
//              array.push(users)
//         }
//         return array;
//     }

    const parseDatabaseObject = (data) => {

        if(!data.metaData || !data.rows){
            return data;
        }
    
        let columns = data.metaData;
        let rows = data.rows;
        let array = [];
    
        rows.forEach((row, i) => {
            var obj = {};
            columns.map((r, c) => {
                obj[r.name] = row[c];
            });
            array.push(obj);
        });
        return array;
    };
    
    
    module.exports = {
        handleAsync,
        parseDatabaseObject
        //converObject
    }
