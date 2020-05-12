class Usuario{
    constructor(nombre,contraseña){ 
    
    this.nombre = nombre;
    this.contraseña = contraseña;
    };
};
    var intentos = 0;
    function validar(){
    var user = new Usuario(document.getElementById('username').value, 
    document.getElementById('password').value
    );
    var username = "admin"
    var password = "12345";
         if(intentos != 3){
            if(user.nombre == username && user.contraseña == password){   
            alert("Bienvenido al sistema");
                }else{
                alert("Usuario o contraseña invalido");
                 intentos++;
                  alert(intentos);
            }
                if(intentos == 3){
              document.write("Limite de intentos");
         }
    }
}