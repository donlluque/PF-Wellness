const mercadopago = require("mercadopago");
const { Router } = require("express");
const router = Router();

//CREDENCIALES DE VENDEDOR
mercadopago.configure({
  access_token:
    "APP_USR-4067337467625481-082317-34c50b1feac26df8f1f74a935a92b0c5-1185064072",
});

router.post("/", async (req, res, next) => {
  let preference = {
    reason: req.body.reason,
    auto_recurring: {
      frequency: 1,
      frequency_type: "months",
      transaction_amount: parseInt(req.body.price),
      currency_id: "ARS",
      //unit_price: parseInt(req.body.price), TIENE QUE SER UN NUMERO por eso arriba esta el parseInt por si viene un STRING
    },

    back_urls: {
      success: "https://pf-wellness.vercel.app/", // redireccionar de nuevo a Wellness componente de PAGO EXITOSO
      failure: "http://www.failure.com", //no la vamos a usar, por si falla el pago con tarjeta
      pending: "http://www.pending.com", //no la vamos a usar, para pagos en efectivo o pedido de autorizacion de tarjeta
    },
    
    payer_email: "test_user_67403553@testuser.com",
  };


  mercadopago.preapproval
    .create(preference)
    .then(function (response) {
      res.status(200).json(response.body.init_point); // REDIRECCIONA a la pagina de MP para pagar
      console.log(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
