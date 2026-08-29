import type { ServiceLandingSection } from "@/data/services";

type Props = {
  section: ServiceLandingSection;
};

export default function ServiceDiagnosticForm({ section }: Props) {
  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.48fr]">
      <form
        action={section.primaryCta?.href ?? "/api/contacto"}
        method="POST"
        className="rounded-[2rem] border border-[#071e2e]/10 bg-white/75 p-6 shadow-[0_28px_90px_rgba(7,30,46,0.08)] md:p-9"
      >
        <input
          type="hidden"
          name="servicio"
          value="Declaración de renta · TRACO"
        />

        <input
          type="hidden"
          name="mensaje"
          value="Solicitud de evaluación inicial para declaración de renta con TRACO."
        />

        <input
          type="hidden"
          name="redirectTo"
          value="/soluciones/declaracion-de-renta?enviado=1#comencemos"
        />

        <div className="grid gap-5">
          <div>
            <label
              htmlFor="diagnostico-nombre"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#071e2e]/55"
            >
              Nombre
            </label>

            <input
              id="diagnostico-nombre"
              name="nombre"
              required
              autoComplete="name"
              placeholder="¿Cómo te llamas?"
              className="w-full rounded-2xl border border-[#071e2e]/12 bg-[#f6f2eb] px-5 py-4 text-[#071e2e] outline-none transition focus:border-[#c96a1b]"
            />
          </div>

          <div>
            <label
              htmlFor="diagnostico-contacto"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#071e2e]/55"
            >
              WhatsApp o correo
            </label>

            <input
              id="diagnostico-contacto"
              name="contacto"
              required
              autoComplete="email"
              placeholder="Tu número de WhatsApp o correo electrónico"
              className="w-full rounded-2xl border border-[#071e2e]/12 bg-[#f6f2eb] px-5 py-4 text-[#071e2e] outline-none transition focus:border-[#c96a1b]"
            />
          </div>

          <div>
            <label
              htmlFor="diagnostico-perfil"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#071e2e]/55"
            >
              ¿Cuál describe mejor tu situación?
            </label>

            <select
              id="diagnostico-perfil"
              name="perfil"
              required
              defaultValue=""
              className="w-full rounded-2xl border border-[#071e2e]/12 bg-[#f6f2eb] px-5 py-4 text-[#071e2e] outline-none transition focus:border-[#c96a1b]"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Empleado o pensionado">
                Empleado o pensionado
              </option>
              <option value="Profesional independiente">
                Profesional independiente
              </option>
              <option value="Inversionista">Inversionista</option>
              <option value="Empresario o socio">
                Empresario o socio
              </option>
              <option value="Otro perfil">Otro</option>
            </select>
          </div>

          <label className="flex items-start gap-3 text-xs leading-[1.7] text-[#071e2e]/55">
            <input
              type="checkbox"
              name="autorizacion"
              value="si"
              required
              className="mt-1 h-4 w-4 accent-[#c96a1b]"
            />

            <span>
              Autorizo el tratamiento de mis datos para recibir orientación
              sobre esta solicitud.
            </span>
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#c96a1b] px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_18px_45px_rgba(201,106,27,0.25)] transition hover:-translate-y-0.5 hover:bg-[#dc741b] sm:text-sm"
          >
            {section.primaryCta?.label ??
              "Solicitar evaluación inicial sin costo"}
            <span className="ml-3 text-lg">→</span>
          </button>
        </div>
      </form>

      <aside className="flex flex-col justify-between rounded-[2rem] bg-[#061d2e] p-7 text-white md:p-9">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#c96a1b]">
            Orientación humana
          </p>

          <h3 className="mt-7 font-serif text-3xl font-semibold leading-[1.05]">
            Tu caso será revisado por un especialista.
          </h3>

          <p className="mt-5 text-sm font-light leading-[1.8] text-white/60">
            La evaluación inicial permite identificar el tipo de acompañamiento
            que podrías necesitar. No constituye todavía una liquidación ni una
            declaración definitiva.
          </p>
        </div>

        {section.secondaryCta && (
          <a
            href={section.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#c96a1b] hover:bg-[#c96a1b]"
          >
            {section.secondaryCta.label}
          </a>
        )}
      </aside>
    </div>
  );
}