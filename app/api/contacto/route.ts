import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(value: string) {
  const characters: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return value.replace(/[&<>"']/g, (character) => characters[character]);
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

    /*
     * El formulario de FASI utiliza un único campo llamado "contacto".
     * Si contiene @ se interpreta como correo; de lo contrario, teléfono.
     */
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
        {
          status: 400,
        }
      );
    }

    /*
     * La autorización se exige en los formularios de diagnóstico
     * que envían un perfil tributario.
     */
    if (perfil && autorizacion !== "si") {
      return NextResponse.json(
        {
          error:
            "Debes autorizar el tratamiento de datos para solicitar la evaluación.",
        },
        {
          status: 400,
        }
      );
    }

    /*
     * Resend se inicializa dentro del POST.
     * Así Next.js no intenta ejecutarlo durante el build.
     */
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY no está configurada.");

      return NextResponse.json(
        {
          error: "El servicio de correo no está configurado.",
        },
        {
          status: 500,
        }
      );
    }

    const resend = new Resend(resendApiKey);

    const safeNombre = escapeHtml(nombre);
    const safeEmpresa = escapeHtml(empresa || "No especificada");
    const safeTelefono = escapeHtml(telefono || "No especificado");
    const safeCorreo = escapeHtml(correo || "No especificado");
    const safePerfil = escapeHtml(perfil || "No especificado");
    const safeServicio = escapeHtml(servicio || "No especificado");
    const safeMensaje = escapeHtml(mensaje).replace(/\n/g, "<br />");

    const profileRow = perfil
      ? `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;color:#777;width:160px;">
            Perfil
          </td>

          <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;font-weight:600;">
            ${safePerfil}
          </td>
        </tr>
      `
      : "";

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
              background:#edf2f3;
              font-family:Arial,Helvetica,sans-serif;
              color:#07141f;
            "
          >
            <div
              style="
                max-width:720px;
                margin:0 auto;
                padding:48px 20px;
              "
            >
              <div
                style="
                  overflow:hidden;
                  border-radius:28px;
                  background:#07141f;
                  box-shadow:0 30px 80px rgba(7,20,31,0.18);
                "
              >
                <div
                  style="
                    height:4px;
                    background:linear-gradient(
                      90deg,
                      #61d4c2,
                      #4d7cff,
                      #c96a1b
                    );
                  "
                ></div>

                <div style="padding:40px;">
                  <p
                    style="
                      margin:0 0 16px;
                      font-size:11px;
                      letter-spacing:3px;
                      text-transform:uppercase;
                      color:#61d4c2;
                    "
                  >
                    Grupo Análisis & Consultorías
                  </p>

                  <h1
                    style="
                      margin:0;
                      font-size:30px;
                      line-height:1.1;
                      color:#ffffff;
                    "
                  >
                    Nueva solicitud recibida
                  </h1>

                  <p
                    style="
                      margin:16px 0 0;
                      font-size:14px;
                      line-height:1.8;
                      color:rgba(255,255,255,0.58);
                    "
                  >
                    Un usuario envió una solicitud desde www.grupoayc.co.
                  </p>
                </div>

                <div
                  style="
                    margin:0 22px 22px;
                    padding:28px;
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
                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;color:#777;width:160px;">
                        Nombre
                      </td>

                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;font-weight:600;">
                        ${safeNombre}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;color:#777;">
                        Empresa
                      </td>

                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;font-weight:600;">
                        ${safeEmpresa}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;color:#777;">
                        Teléfono
                      </td>

                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;font-weight:600;">
                        ${safeTelefono}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;color:#777;">
                        Correo
                      </td>

                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;font-weight:600;">
                        ${safeCorreo}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;color:#777;">
                        Servicio
                      </td>

                      <td style="padding:14px 0;border-bottom:1px solid #e8e8e8;font-weight:600;">
                        ${safeServicio}
                      </td>
                    </tr>

                    ${profileRow}
                  </table>

                  <div style="margin-top:28px;">
                    <p
                      style="
                        margin:0 0 10px;
                        font-size:10px;
                        letter-spacing:2px;
                        text-transform:uppercase;
                        color:#327f75;
                      "
                    >
                      Solicitud
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:15px;
                        line-height:1.8;
                        color:#33414c;
                      "
                    >
                      ${safeMensaje}
                    </p>
                  </div>
                </div>

                <div
                  style="
                    padding:4px 40px 32px;
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