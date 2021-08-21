let app = {};

app.ucp = (() => {
    let self = {};

    // self.init = () => {
    //     console.log("init");
    // }

    self.generar = (numero) => {
        for (let i = 0; i < numero; i++) {
            let btn = document.createElement("button");
            btn.innerHTML = "Boton " + (i+1);
            btn.className = "btn btn-primary col-3 mt-2 me-2";

            let divCentro = document.getElementById("2fila");
            divCentro.appendChild(btn);
        }

    }

    return self;
})();
