$(document).ready(function () {

    $("#mostrarTodos").click(function () {

        $.ajax({
                url: './index.php', // url del archivo php de recepcion de datos
                type: 'POST', // tipo de metodo POST  o GET
                data: {} // datos a enviar, en este caso datos del json
            }


        ).done(function (data) {
            datos = JSON.parse(data);
            for (var i = 0; i < datos.length; i++) {

                $('.resultados').append(`<div class="card horizontal">
                <div class="card-image place-wrapper">
                <img class="img-responsive place-image" src="img/home.jpg">
                </div>
                <div class="card-stacked">
                <div class="card-content">
                <p>
                <b>Dirección: </b>${datos[i].Direccion}<br>

                <b>Ciudad: </b>${datos[i].Cuidad}<br>

                <b>Teléfono: </b>${datos[i].Telefono}<br>

                <b>Código Postal: </b>${datos[i].Codigo_Postal}<br>

                <b>Tipo: </b>${datos[i].Tipo}<br>

                <span class="price"><b>Precio: ${datos[i].Precio}<br></span>
                </p>
                </div>
                <div class="card-action">
                <a>Ver mas</a>
                </div>
                </div>
                </div>`);

            }

        });




    });

});