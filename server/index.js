const express = require('express');
const cors = require('cors');
const db = require('./connection_db');
var bodyParser = require('body-parser')

const app = express();
app.use(express.json())
app.use(cors());
app.use(bodyParser.json())


// ------------------------------------------------------------POSTING--------------------------------------------------------------
app.post('/posting',function(req,res){
    const name = req.body.name;
    const email = req.body.email;

    const sql = 'INSERT INTO students_tb (names,emails) VALUES ?'; 

    const xyz = [[name,email]];

    db.query(sql,[xyz],(error,result)=>{
        if(error) return res.json(error);
        console.log(result)
        // return res.json(result)
        res.json({"status":"success","message":"Record sent successfully","data":[req.body.result]});
    });
});
// -----------------------------------------------------------POSTING/SENDING COMPLETED--------------------------------------------------------------
// -----------------------------------------------------------GETTING ALL DATA------------------------------------------------------------------------
app.get('/getting',function(req,res){  
    const sql = 'SELECT * FROM students_tb';   
    db.query(sql,(error,result)=>{
        if(error) return res.json(error);
        // console.log(result)
         res.json(result);
    });
});
// -----------------------------------------------------------GETTING ALL DATA COMPLETED------------------------------------------------------------------------
// -------------------------------------------------------------------UPDATION---------------------------------------------------------------------------
app.get('/gettingforedit/:id',function(req,res){  
    const sql = 'SELECT * FROM students_tb WHERE sid = ?';   
    db.query(sql,[req.params.id],(error,result)=>{
        if(error) return res.json(error);
        console.log(result)
        return res.json(result);
    });
});
app.put('/updateddata/:id',function(req,res){  
    const sql = 'UPDATE students_tb SET names=?, emails=? WHERE sid = ?';   
    db.query(sql,[req.body.name,req.body.email,req.params.id],(error,result)=>{
        if(error) return res.json(error);
        console.log(result)
        return res.json({xyz:true});
    });
});
// ----------------------------------------------------------------UPDATION COMPLETED--------------------------------------------------------------
// ------------------------------------------------------------------DELETION--------------------------------------------------------------
app.delete('/erasing/:id',(req,res)=>{
    const q = "DELETE FROM students_tb WHERE sid = ?";
    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Books Deleted successfully");
    })
})
// ------------------------------------------------------------------DELETIONCOMPLETED--------------------------------------------------------------
// -----------------------------------------------------------------VALIDATION--------------------------------------------------------------//
// app.post('/checking',function(req,res){
//     const checkname = req.body.checkname;
//     const checkemail = req.body.checkemail;

//     db.query(
//         'SELECT * FROM students_tb WHERE names = ? AND emails = ?',[checkname,checkemail],
//         (err,result)=>{
//             if (err){
//                 res.send({err:err});
//             }
//             if(result.length > 0){
//                 res.send(result);
//             }
//             else{
//                 alert('Wrongly typed Name or email')
//                 res.send({message:'Wrongly typed Name or email'})
//             }
//         }
//     )
// })
// -----------------------------------------------------------------VALIDATION COMPLETED--------------------------------------------------------------//


app.listen(8081,()=>{
    console.log('backend rnning on port 8081')
})















