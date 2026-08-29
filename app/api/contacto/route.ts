import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const nombre = String(formData.get("nombre") || "").trim();
const empresa = String(formData.get("empresa") || "").trim();

let telefono = String(formData.get("telefono") || "").trim();
let correo = String(formData.get("correo") || "").trim();

const contacto = String(formData.get("contacto") || "").trim();
const perfil = String(formData.get("perfil") || "").trim();
const autorizacion = String(
  formData.get("autorizacion") || ""
).trim();

const servicio = String(formData.get("servicio") || "").trim();
const mensaje = String(formData.get("mensaje") || "").trim();
const redirectTo = String(formData.get("redirectTo") || "").trim();

if (contacto) {
  if (contacto.includes("@")) {
    correo = correo || contacto;
  } else {
    telefono = telefono || contacto;
  }
}

if (!nombre || (!telefono && !correo) || !mensaje) {
  return NextResponse.json(
    {
      error:
        "Debes indicar tu nombre, un medio de contacto y la información solicitada.",
    },
    { status: 400 }
  );
}

if (perfil && autorizacion !== "si") {
  return NextResponse.json(
    {
      error:
        "Debes autorizar el tratamiento de datos para solicitar la evaluación.",
    },
    { status: 400 }
  );
}
    const safeNombre = escapeHtml(nombre);
    const safeEmpresa = escapeHtml(empresa || "No especificada");
    const safeTelefono = escapeHtml(telefono || "No especificado");
    const safeCorreo = escapeHtml(correo || "No especificado");
    const safePerfil = escapeHtml(perfil || "No especificado");
    const safeServicio = escapeHtml(servicio || "No especificado");
    const safeMensaje = escapeHtml(mensaje).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from: "Grupo A&C <contacto@grupoayc.co>",
      to: ["grupoanalisisyconsultoria@gmail.com"],
     replyTo: correo || undefined,
      subject: `Nueva solicitud web · ${nombre}`,

      html: `
        <!DOCTYPE html>
        <html lang="es">
          <body
            style="
              margin:0;
              padding:0;
              background:#f5f2eb;
              font-family:Arial,Helvetica,sans-serif;
              color:#111111;
            "
          >
            <div
              style="
                max-width:720px;
                margin:0 auto;
                padding:48px 24px;
              "
            >
              <div
                style="
                  overflow:hidden;
                  border-radius:28px;
                  background:#090909;
                  box-shadow:0 30px 80px rgba(0,0,0,0.15);
                "
              >
                <div
                  style="
                    height:4px;
                    background:linear-gradient(
                      90deg,
                      #f5e7d2,
                      #e9aa34,
                      #c96a1b
                    );
                  "
                ></div>

                <div style="padding:42px;">
                  <p
                    style="
                      margin:0 0 18px;
                      font-size:11px;
                      letter-spacing:4px;
                      text-transform:uppercase;
                      color:#d98945;
                    "
                  >
                    Grupo Análisis & Consultorías
                  </p>

                  <h1
                    style="
                      margin:0;
                      font-size:32px;
                      line-height:1.08;
                      color:#ffffff;
                    "
                  >
                    Nueva solicitud recibida desde el sitio web
                  </h1>

                  <p
                    style="
                      margin:18px 0 0;
                      font-size:15px;
                      line-height:1.8;
                      color:rgba(255,255,255,0.58);
                    "
                  >
                    Un usuario acaba de enviar una solicitud desde el formulario
                    de contacto de Grupo A&C.
                  </p>
                </div>

                <div
                  style="
                    margin:0 24px 24px;
                    padding:30px;
                    border-radius:22px;
                    background:#ffffff;
                  "
                >
                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      border-collapse:collapse;
                      font-size:14px;
                    "
                  >
                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #ececec;color:#777;width:150px;">
                        Nombre
                      </td>
                      <td style="padding:14px 0;border-bottom:1px solid #ececec;font-weight:600;">
                        ${safeNombre}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #ececec;color:#777;">
                        Empresa
                      </td>
                      <td style="padding:14px 0;border-bottom:1px solid #ececec;font-weight:600;">
                        ${safeEmpresa}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #ececec;color:#777;">
                        Teléfono
                      </td>
                      <td style="padding:14px 0;border-bottom:1px solid #ececec;font-weight:600;">
                        ${safeTelefono}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #ececec;color:#777;">
                        Correo
                      </td>
                      <td style="padding:14px 0;border-bottom:1px solid #ececec;font-weight:600;">
                        ${safeCorreo}
                      </td>
                    </tr>

                    <tr>
  <td style="padding:14px 0;border-bottom:1px solid #ececec;color:#777;">
    Servicio
  </td>

  <td style="padding:14px 0;border-bottom:1px solid #ececec;font-weight:600;">
    ${safeServicio}
  </td>
</tr>

${
  perfil
    ? `
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #ececec;color:#777;">
          Perfil tributario
        </td>

        <td style="padding:14px 0;border-bottom:1px solid #ececec;font-weight:600;">
          ${safePerfil}
        </td>
      </tr>
    `
    : ""
}

</table>

                  <div style="margin-top:28px;">
                    <p
                      style="
                        margin:0 0 10px;
                        font-size:11px;
                        letter-spacing:2px;
                        text-transform:uppercase;
                        color:#c96a1b;
                      "
                    >
                      Solicitud
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:15px;
                        line-height:1.8;
                        color:#333333;
                      "
                    >
                      ${safeMensaje}
                    </p>
                  </div>
                </div>

                <div
                  style="
                    padding:4px 42px 34px;
                    font-size:11px;
                    color:rgba(255,255,255,0.30);
                  "
                >
                  Solicitud generada automáticamente desde www.grupoayc.co
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "No fue posible enviar la solicitud.",
          detail: error.message,
        },
        {
          status: 500,
        }
      );
    }

    const finalRedirect =
  redirectTo.startsWith("/") && !redirectTo.startsWith("//")
    ? redirectTo
    : "/contacto?enviado=1#formulario-contacto";

return NextResponse.redirect(
  new URL(finalRedirect, request.url),
  303
);
  } catch (error) {
    console.error("Error en /api/contacto:", error);

    return NextResponse.json(
      {
        error: "Ocurrió un error procesando la solicitud.",
      },
      {
        status: 500,
      }
    );
  }
}