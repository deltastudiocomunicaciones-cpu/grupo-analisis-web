"use client";

import Link from "next/link";
import { useState } from "react";
import type {
  ServiceCta,
  ServiceLandingItem,
} from "@/data/services";

type Props = {
  items: ServiceLandingItem[];
  primaryCta?: ServiceCta;
  accentColor: string;
};

export default function ServiceAssessmentCards({
  items,
  primaryCta,
  accentColor,
}: Props) {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  function toggleItem(index: number) {
    setSelectedItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  }

  const selectedCount = selectedItems.length;

  const feedback =
    selectedCount === 0
      ? "Marca las situaciones que se parezcan a tu realidad."
      : selectedCount === 1
        ? "Identificamos un factor que conviene revisar frente a los topes vigentes."
        : `Identificamos ${selectedCount} factores que deberían analizarse antes de preparar tu declaración.`;

  return (
    <div className="mt-14">
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => {
          const selected = selectedItems.includes(index);

          return (
            <article
              key={item.title}
              className={`
                relative
                flex
                min-h-[370px]
                flex-col
                overflow-hidden
                rounded-[2rem]
                border
                bg-white/80
                p-7
                shadow-[0_22px_70px_rgba(7,30,46,0.06)]
                transition
                duration-300
                md:p-8
                ${
                  selected
                    ? "border-[#c96a1b] shadow-[0_24px_80px_rgba(201,106,27,0.14)]"
                    : "border-[#071e2e]/10 hover:-translate-y-1 hover:border-[#c96a1b]/40"
                }
              `}
            >
              <div className="flex items-start justify-between gap-5">
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: accentColor }}
                >
                  0{index + 1}
                </span>

                <span
                  className={`
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-sm
                    transition
                    ${
                      selected
                        ? "border-[#c96a1b] bg-[#c96a1b] text-white"
                        : "border-[#071e2e]/20 text-transparent"
                    }
                  `}
                  aria-hidden="true"
                >
                  ✓
                </span>
              </div>

              <h3 className="mt-10 font-serif text-3xl font-semibold leading-tight tracking-[-0.035em]">
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="mt-4 text-sm font-light leading-[1.75] text-[#071e2e]/60">
                  {item.subtitle}
                </p>
              )}

              {item.criterion && (
                <div className="mt-7 border-t border-[#071e2e]/10 pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c96a1b]">
                    Criterio para revisar
                  </p>

                  <p className="mt-3 text-sm font-medium leading-[1.7] text-[#071e2e]/75">
                    {item.criterion}
                  </p>
                </div>
              )}

              {item.badge && (
                <p className="mt-6 rounded-2xl bg-[#071e2e]/[0.045] px-4 py-3 text-xs font-light leading-[1.6] text-[#071e2e]/58">
                  {item.badge}
                </p>
              )}

              <button
                type="button"
                aria-pressed={selected}
                onClick={() => toggleItem(index)}
                className={`
                  mt-auto
                  pt-7
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  transition
                  ${
                    selected
                      ? "text-[#c96a1b]"
                      : "text-[#071e2e]/45 hover:text-[#c96a1b]"
                  }
                `}
              >
                {selected ? "Situación marcada ✓" : "Marcar esta situación"}
              </button>
            </article>
          );
        })}
      </div>

      <div
        className={`
          mt-8
          overflow-hidden
          rounded-[2rem]
          border
          p-7
          transition-all
          duration-500
          md:flex
          md:items-center
          md:justify-between
          md:gap-10
          md:p-9
          ${
            selectedCount > 0
              ? "border-[#c96a1b]/35 bg-[#061d2e] text-white shadow-[0_25px_80px_rgba(7,30,46,0.16)]"
              : "border-[#071e2e]/10 bg-white/65 text-[#071e2e]"
          }
        `}
        aria-live="polite"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#c96a1b]">
            Orientación inicial
          </p>

          <p
            className={`mt-3 max-w-3xl text-base font-light leading-[1.75] ${
              selectedCount > 0 ? "text-white/75" : "text-[#071e2e]/60"
            }`}
          >
            {feedback}
          </p>
        </div>

        {selectedCount > 0 && primaryCta && (
          <Link
            href={`${primaryCta.href}&factores=${selectedCount}`}
            className="mt-7 inline-flex min-h-14 shrink-0 items-center justify-center rounded-full bg-[#c96a1b] px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#dc741b] md:mt-0"
          >
            Validar mi caso
            <span className="ml-3 text-lg">→</span>
          </Link>
        )}
      </div>

      <p className="mt-5 text-xs font-light leading-[1.7] text-[#071e2e]/42">
        Esta orientación no determina por sí sola la obligación de declarar.
        La validación debe realizarse con los topes y condiciones del año
        gravable correspondiente.
      </p>
    </div>
  );
}