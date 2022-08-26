const mercadopago = require ('mercadopago');
const { Router } = require("express");
const router = Router();


//CREDENCIALES DE VENDEDOR
mercadopago.configure({
	access_token: "APP_USR-4067337467625481-082317-34c50b1feac26df8f1f74a935a92b0c5-1185064072",
});

router.post("/", async (req, res, next) => {

	let preference = {
		items: [	// Array de Objetos, cada objeto 1 producto que se compra.
			{
				title: req.body.title,
				quantity: 1,
				currency_id: "ARS",
				unit_price: parseInt(req.body.price), //viene desde el front como "price"
				//unit_price: parseInt(req.body.price), TIENE QUE SER UN NUMERO por eso arriba esta el parseInt por si viene un STRING
			},
		],
		back_urls: {
			success: "https://www.google.com",	// redireccionar de nuevo a Wellness componente de PAGO EXITOSO
			failure: "http://www.failure.com",	//no la vamos a usar, por si falla el pago con tarjeta
			pending: "http://www.pending.com"	//no la vamos a usar, para pagos en efectivo o pedido de autorizacion de tarjeta
		},
	};

	mercadopago.preferences.create(preference)
    .then(function(response){

        res.redirect(response.body.init_point);	// REDIRECCIONA a la pagina de MP para pagar
		console.log(response.body.init_point)

    }).catch(function(error){
        console.log(error);
    });

});








module.exports = router;