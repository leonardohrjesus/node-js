
const mysql      = require('mysql');
const connection = mysql.createConnection({
 //* host     : 'localhost',
  host     : 'mysql785.umbler.com',
  //port     : 80,
  //port     : 3306,
  user     : 'leonardohrjesus',
  //user     : 'root',
  password : 'Drleonardo10.',
  database : 'notas'
});


connection.connect(function(err){
  if(err) return console.log(err);
 console.log('conectou!');
  //createTable(connection);
})



function createTable(conn){
 
      const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
                  "ID int NOT NULL AUTO_INCREMENT,\n"+
                  "Nome varchar(150) NOT NULL,\n"+
                  "CPF char(11) NOT NULL,\n"+
                  "PRIMARY KEY (ID)\n"+
                  ");";
      
      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('criou a tabela!');
      });


}

/*function addRows(conn){
    const sql = "INSERT INTO tb_nota(titulo,descricao) VALUES ?";
    const values = [
          ['teste1', '123'],
          ['teste1', 'nao sei'],
          ['teste3', 'teste']
        ];
    conn.query(sql, [values], function (error, results, fields){
            if(error) return console.log(error);
            console.log('adicionou registros!');
            conn.end();//fecha a conexão
        });
}*/