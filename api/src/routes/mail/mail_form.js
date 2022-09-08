const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
const { Patient, Dates1 } = require("../../db.js");
require("dotenv").config();

router.post("/", async (req, res) => {
  const { id } = req.body;
  console.log(id, "IDDDDD");

  try {
    const turno = await Dates1.findOne({
      where: { id: id },
      include: [{ model: Patient }],
    });
    const email = turno.dataValues.patients[0].dataValues.email;
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "wellnessclinia.info@gmail.com", // generated ethereal user
        pass: "jetwuyzpbxxrdxly", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let info = await transporter.sendMail({
      from: "wellnesclinica@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Compartinos tu experiencia", // Subject line
      text: "Wellness", // plain text body
      html: `<!DOCTYPE html>
        <html   xmlns="http://www.w3.org/1999/xhtml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        style="font-family: arial, 'helvetica neue', helvetica, sans-serif">
        <head>
            <meta charset="UTF-8" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="x-apple-disable-message-reformatting" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta content="telephone=no" name="format-detection" />
            <title>Tu opinión nos importa</title>
           
        </head>
        <style type="text/css">
            .rollover div {
              font-size: 0;
            }
            #outlook a {
              padding: 0;
            }
            .es-button {
              mso-style-priority: 100 !important;
              text-decoration: none !important;
            }
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
            }
            .es-desk-hidden {
              display: none;
              float: left;
              overflow: hidden;
              width: 0;
              max-height: 0;
              line-height: 0;
              mso-hide: all;
            }
            [data-ogsb] .es-button {
              border-width: 0 !important;
              padding: 10px 30px 10px 30px !important;
            }
            @media only screen and (max-width: 600px) {
              p,
              ul li,
              ol li,
              a {
                line-height: 150% !important;
              }
              h1,
              h2,
              h3,
              h1 a,
              h2 a,
              h3 a {
                line-height: 120% !important;
              }
              h1 {
                font-size: 36px !important;
                text-align: left;
              }
              h2 {
                font-size: 26px !important;
                text-align: left;
              }
              h3 {
                font-size: 20px !important;
                text-align: left;
              }
              .es-header-body h1 a,
              .es-content-body h1 a,
              .es-footer-body h1 a {
                font-size: 36px !important;
                text-align: left;
              }
              .es-header-body h2 a,
              .es-content-body h2 a,
              .es-footer-body h2 a {
                font-size: 26px !important;
                text-align: left;
              }
              .es-header-body h3 a,
              .es-content-body h3 a,
              .es-footer-body h3 a {
                font-size: 20px !important;
                text-align: left;
              }
              .es-menu td a {
                font-size: 12px !important;
              }
              .es-header-body p,
              .es-header-body ul li,
              .es-header-body ol li,
              .es-header-body a {
                font-size: 14px !important;
              }
              .es-content-body p,
              .es-content-body ul li,
              .es-content-body ol li,
              .es-content-body a {
                font-size: 14px !important;
              }
              .es-footer-body p,
              .es-footer-body ul li,
              .es-footer-body ol li,
              .es-footer-body a {
                font-size: 14px !important;
              }
              .es-infoblock p,
              .es-infoblock ul li,
              .es-infoblock ol li,
              .es-infoblock a {
                font-size: 12px !important;
              }
              *[class="gmail-fix"] {
                display: none !important;
              }
              .es-m-txt-c,
              .es-m-txt-c h1,
              .es-m-txt-c h2,
              .es-m-txt-c h3 {
                text-align: center !important;
              }
              .es-m-txt-r,
              .es-m-txt-r h1,
              .es-m-txt-r h2,
              .es-m-txt-r h3 {
                text-align: right !important;
              }
              .es-m-txt-l,
              .es-m-txt-l h1,
              .es-m-txt-l h2,
              .es-m-txt-l h3 {
                text-align: left !important;
              }
              .es-m-txt-r img,
              .es-m-txt-c img,
              .es-m-txt-l img {
                display: inline !important;
              }
              .es-button-border {
                display: inline-block !important;
              }
              a.es-button,
              button.es-button {
                font-size: 20px !important;
                display: inline-block !important;
              }
              .es-adaptive table,
              .es-left,
              .es-right {
                width: 100% !important;
              }
              .es-content table,
              .es-header table,
              .es-footer table,
              .es-content,
              .es-footer,
              .es-header {
                width: 100% !important;
                max-width: 600px !important;
              }
              .es-adapt-td {
                display: block !important;
                width: 100% !important;
              }
              .adapt-img {
                width: 100% !important;
                height: auto !important;
              }
              .es-m-p0 {
                padding: 0 !important;
              }
              .es-m-p0r {
                padding-right: 0 !important;
              }
              .es-m-p0l {
                padding-left: 0 !important;
              }
              .es-m-p0t {
                padding-top: 0 !important;
              }
              .es-m-p0b {
                padding-bottom: 0 !important;
              }
              .es-m-p20b {
                padding-bottom: 20px !important;
              }
              .es-mobile-hidden,
              .es-hidden {
                display: none !important;
              }
              tr.es-desk-hidden,
              td.es-desk-hidden,
              table.es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important;
              }
              tr.es-desk-hidden {
                display: table-row !important;
              }
              table.es-desk-hidden {
                display: table !important;
              }
              td.es-desk-menu-hidden {
                display: table-cell !important;
              }
              .es-menu td {
                width: 1% !important;
              }
              table.es-table-not-adapt,
              .esd-block-html table {
                width: auto !important;
              }
              table.es-social {
                display: inline-block !important;
              }
              table.es-social td {
                display: inline-block !important;
              }
              .es-m-p5 {
                padding: 5px !important;
              }
              .es-m-p5t {
                padding-top: 5px !important;
              }
              .es-m-p5b {
                padding-bottom: 5px !important;
              }
              .es-m-p5r {
                padding-right: 5px !important;
              }
              .es-m-p5l {
                padding-left: 5px !important;
              }
              .es-m-p10 {
                padding: 10px !important;
              }
              .es-m-p10t {
                padding-top: 10px !important;
              }
              .es-m-p10b {
                padding-bottom: 10px !important;
              }
              .es-m-p10r {
                padding-right: 10px !important;
              }
              .es-m-p10l {
                padding-left: 10px !important;
              }
              .es-m-p15 {
                padding: 15px !important;
              }
              .es-m-p15t {
                padding-top: 15px !important;
              }
              .es-m-p15b {
                padding-bottom: 15px !important;
              }
              .es-m-p15r {
                padding-right: 15px !important;
              }
              .es-m-p15l {
                padding-left: 15px !important;
              }
              .es-m-p20 {
                padding: 20px !important;
              }
              .es-m-p20t {
                padding-top: 20px !important;
              }
              .es-m-p20r {
                padding-right: 20px !important;
              }
              .es-m-p20l {
                padding-left: 20px !important;
              }
              .es-m-p25 {
                padding: 25px !important;
              }
              .es-m-p25t {
                padding-top: 25px !important;
              }
              .es-m-p25b {
                padding-bottom: 25px !important;
              }
              .es-m-p25r {
                padding-right: 25px !important;
              }
              .es-m-p25l {
                padding-left: 25px !important;
              }
              .es-m-p30 {
                padding: 30px !important;
              }
              .es-m-p30t {
                padding-top: 30px !important;
              }
              .es-m-p30b {
                padding-bottom: 30px !important;
              }
              .es-m-p30r {
                padding-right: 30px !important;
              }
              .es-m-p30l {
                padding-left: 30px !important;
              }
              .es-m-p35 {
                padding: 35px !important;
              }
              .es-m-p35t {
                padding-top: 35px !important;
              }
              .es-m-p35b {
                padding-bottom: 35px !important;
              }
              .es-m-p35r {
                padding-right: 35px !important;
              }
              .es-m-p35l {
                padding-left: 35px !important;
              }
              .es-m-p40 {
                padding: 40px !important;
              }
              .es-m-p40t {
                padding-top: 40px !important;
              }
              .es-m-p40b {
                padding-bottom: 40px !important;
              }
              .es-m-p40r {
                padding-right: 40px !important;
              }
              .es-m-p40l {
                padding-left: 40px !important;
              }
            }
          </style>
        
        <body>
          <div class="es-wrapper-color" style="background-color: #fafafa">
            <!--[if gte mso 9]>
              <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#fafafa"></v:fill>
              </v:background>
            <![endif]-->
            <table
              class="es-wrapper"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
                background-repeat: repeat;
                background-position: center top;
                background-color: #fafafa;
              "
            >
              <tr>
                <td valign="top" style="padding: 0; margin: 0">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content es-visible-simple-html-only"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      table-layout: fixed !important;
                      width: 100%;
                    "
                  >
                    <tr>
                      <td
                        class="es-stripe-html"
                        align="center"
                        style="padding: 0; margin: 0"
                      >
                        <table
                          bgcolor="#ffffff"
                          class="es-content-body"
                          align="center"
                          cellpadding="0"
                          cellspacing="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            background-color: #ffffff;
                            width: 600px;
                          "
                        >
                          <tr>
                            <td align="left" style="padding: 0; margin: 0">
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    style="padding: 0; margin: 0; width: 600px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-top: 10px;
                                            padding-bottom: 10px;
                                            font-size: 0px;
                                          "
                                        >
                                          <img
                                            src="https://cdn.discordapp.com/attachments/971582340029636663/1011346926790250556/wellness.png"
                                            alt
                                            style="
                                              display: block;
                                              border: 0;
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                            "
                                            width="600"
                                            class="adapt-img"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="center"
                                          class="es-m-txt-c"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-top: 15px;
                                            padding-bottom: 15px;
                                          "
                                        >
                                          <h1
                                            style="
                                              margin: 0;
                                              line-height: 55px;
                                              mso-line-height-rule: exactly;
                                              font-family: arial, 'helvetica neue',
                                                helvetica, sans-serif;
                                              font-size: 46px;
                                              font-style: normal;
                                              font-weight: bold;
                                              color: #286650;
                                            "
                                          >
                                            Ayudanos a mejorar
                                          </h1>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="left"
                                          style="
                                            margin: 0;
                                            padding-top: 10px;
                                            padding-bottom: 10px;
                                            padding-left: 20px;
                                            padding-right: 20px;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family: arial, 'helvetica neue',
                                                helvetica, sans-serif;
                                              line-height: 21px;
                                              color: #333333;
                                              font-size: 14px;
                                            "
                                          >
                                            Muchas gracias por haber confiado en nosotros. 
                                            Te invitamos a completar el siguiente formulario para contarnos tu experiencia en Wellness.
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              class="esdev-adapt-off"
                              align="left"
                              style="padding: 20px; margin: 0"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                class="esdev-mso-table"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  width: 560px;
                                "
                              >
                                <tr>
                                  <td
                                    class="esdev-mso-td"
                                    valign="top"
                                    style="padding: 0; margin: 0"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-left"
                                      align="left"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                        float: left;
                                      "
                                    >
                                      <tr class="es-mobile-hidden">
                                        <td
                                          align="left"
                                          style="padding: 0; margin: 0; width: 146px"
                                        >
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              border-collapse: collapse;
                                              border-spacing: 0px;
                                            "
                                          >
                                            <tr>
                                              <td
                                                align="center"
                                                height="40"
                                                style="padding: 0; margin: 0"
                                              ></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td
                                    class="esdev-mso-td"
                                    valign="top"
                                    style="padding: 0; margin: 0"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-left"
                                      align="left"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                        float: left;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="left"
                                          style="padding: 0; margin: 0; width: 121px"
                                        >
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                           
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              border-collapse: separate;
                                              border-spacing: 0px;
                                            
                                              border-radius: 10px 0px 0px 10px;
                                            "
                                            role="presentation"
                                          >
                                            <tr>
                                              <td
                                                align="right"
                                                style="
                                                  padding: 0;
                                                  margin: 0;
                                                  padding-top: 10px;
                                                "
                                              >
                                              <a href='http://localhost:3000/testimonials'>
                                                <button
                                                  style="
                                                    background: #38B2AC;
                                                    border-radius:25px;
                                                    margin: 0;
                                                    border:none;
                                                    font-family: arial,
                                                      'helvetica neue', helvetica,
                                                      sans-serif;
                                                    line-height: 21px;
                                                    color: #f5f5dc;
                                                    font-size: 14px;
                                                    cursor:pointer;
                                                  "
                                                  type:"submite",
                                                >
                                                  Completar Formulario
                                                </button>
                                              </a>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                  <td
                                    class="esdev-mso-td"
                                    valign="top"
                                    style="padding: 0; margin: 0"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-right"
                                      align="right"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                        float: right;
                                      "
                                    >
                                      <tr class="es-mobile-hidden">
                                        <td
                                          align="left"
                                          style="padding: 0; margin: 0; width: 138px"
                                        >
                                          <table
                                            cellpadding="0"
                                            cellspacing="0"
                                            width="100%"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              border-collapse: collapse;
                                              border-spacing: 0px;
                                            "
                                          >
                                            <tr>
                                              <td
                                                align="center"
                                                height="40"
                                                style="padding: 0; margin: 0"
                                              ></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td
                              align="left"
                              style="
                                padding: 0;
                                margin: 0;
                                padding-bottom: 10px;
                                padding-left: 20px;
                                padding-right: 20px;
                              "
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    valign="top"
                                    style="padding: 0; margin: 0; width: 560px"
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: separate;
                                        border-spacing: 0px;
                                        border-radius: 5px;
                                      "
                                      role="presentation"
                                    >
                                      <tr>
                                        <td
                                          align="left"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-bottom: 10px;
                                            padding-top: 20px;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family: arial, 'helvetica neue',
                                                helvetica, sans-serif;
                                              line-height: 21px;
                                              color: #333333;
                                              font-size: 14px;
                                            "
                                          >
                                            Si tienes alguna consulta o sugerencia
                                            puedes comunicarte con nosotros
                                            escribiéndonos
                                            <a
                                              target="_blank"
                                              href=""
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #5c68e2;
                                                font-size: 14px;
                                              "
                                              >wellnesclinica@</a
                                            ><a
                                              target="_blank"
                                              href="wellnesclinica@gmail.com"
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #5c68e2;
                                                font-size: 14px;
                                              "
                                              >gmail</a
                                            ><a
                                              target="_blank"
                                              href=""
                                              style="
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #5c68e2;
                                                font-size: 14px;
                                              "
                                              >.com</a
                                          
                                            <br />
        </body>
        </html>;
        
        
        `, // html body
    });

    console.log("Message sent: %s", info);
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // verify connection configuration

    transporter.verify(function (err, success) {
      if (err) {
        res.send(
          "There is a problem in the server, please try again later " + err
        );
      } else {
        res.send("Your message was sent successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
