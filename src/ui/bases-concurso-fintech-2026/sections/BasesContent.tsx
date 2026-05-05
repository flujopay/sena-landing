export const BasesContent = () => {
  return (
    <div className="grow bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-8">
          <h1 className="text-brand-primary-dark text-3xl md:text-5xl font-extrabold mb-3">
            Bases del <span className="text-brand-primary">Concurso</span>
          </h1>
          <p className="text-slate-600 text-sm">
            Fintech Chile Forum 2026 · Sorteo Ópera Demo · Vigente: 6 al 9 de mayo de 2026
          </p>
        </div>

        <section className="bg-white text-slate-700 font-normal text-sm md:text-base p-8 md:p-14 rounded-2xl shadow-sm space-y-8">

          {/* 1 */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">1. Organizador</h2>
            <p className="leading-relaxed">
              El presente concurso es organizado por <strong>SERVICIOS DE TECNOLOGÍA FLUJOLINK SpA</strong>,
              RUT 77.655.018-8, con domicilio en Santiago de Chile (en adelante, "Sena"). El concurso se
              realiza en el marco de la participación de Sena en el <strong>Fintech Chile Forum 2026</strong>,
              los días 6 y 7 de mayo de 2026.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">2. Premio</h2>
            <p className="leading-relaxed">
              Se sorteará <strong>un (1) premio único</strong>:{" "}
              <strong>Amazon Echo Show 5 (3.ª generación) color Negro</strong>, valorado en
              aproximadamente $69.990 CLP (precio referencial). El premio no es canjeable por dinero en
              efectivo ni por otros productos o servicios. Sena se reserva el derecho de reemplazar el premio
              por uno de igual o mayor valor en caso de indisponibilidad, comunicándolo oportunamente.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">3. Participantes</h2>
            <p className="leading-relaxed">
              Podrá participar toda persona mayor de 18 años que, durante los días 6 y 7 de mayo de 2026,
              complete el formulario de registro en{" "}
              <strong>demo.somossena.com</strong> proporcionando información verídica: nombre completo,
              empresa, cargo, correo electrónico corporativo y número de teléfono.
            </p>
            <p className="leading-relaxed mt-3">
              Quedan excluidos de participar los empleados, colaboradores, directores y representantes de
              Sena, así como sus familiares directos (cónyuge, hijos, padres y hermanos).
            </p>
            <p className="leading-relaxed mt-3">
              Cada persona puede participar una sola vez. En caso de registros duplicados con el mismo correo
              electrónico, se considerará únicamente el primer registro.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">4. Período de participación</h2>
            <ul className="list-disc pl-5 space-y-1 leading-relaxed">
              <li><strong>Inicio:</strong> miércoles 6 de mayo de 2026, desde las 09:00 hrs.</li>
              <li><strong>Cierre:</strong> jueves 7 de mayo de 2026, a las 18:00 hrs.</li>
              <li><strong>Sorteo:</strong> viernes 8 de mayo de 2026.</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Los registros recibidos fuera de este período no serán considerados para el sorteo.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">5. Mecánica del sorteo</h2>
            <p className="leading-relaxed">
              El sorteo se realizará el viernes 8 de mayo de 2026 mediante selección aleatoria entre todos
              los participantes válidos registrados durante el período de participación. El proceso será
              supervisado internamente por Sena y el resultado será definitivo e inapelable.
            </p>
            <p className="leading-relaxed mt-3">
              El ganador será notificado mediante correo electrónico al email proporcionado en el formulario
              de registro, dentro de las 24 horas siguientes al sorteo. Si el ganador no responde en un plazo
              de <strong>48 horas</strong> desde el envío de la notificación, Sena se reserva el derecho de
              realizar un nuevo sorteo entre los participantes restantes.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">6. Entrega del premio</h2>
            <p className="leading-relaxed">
              El premio será entregado de forma presencial en las oficinas de Sena en Santiago, o enviado por
              correo a una dirección dentro del territorio de Chile continental, según acuerdo con el ganador.
              Los costos de envío serán asumidos por Sena. El plazo de entrega no superará los 15 días hábiles
              desde la confirmación del ganador.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">7. Tratamiento de datos personales</h2>
            <p className="leading-relaxed">
              Los datos personales recopilados a través del formulario de registro serán tratados por Sena con
              las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1 leading-relaxed">
              <li>Gestión y administración del presente concurso.</li>
              <li>Contacto comercial relacionado con los productos y servicios de Sena (Ópera).</li>
              <li>Envío de información relevante sobre Sena, previa autorización del participante.</li>
            </ul>
            <p className="leading-relaxed mt-3">
              El responsable del tratamiento es <strong>SERVICIOS DE TECNOLOGÍA FLUJOLINK SpA</strong>. Los
              datos serán almacenados en los sistemas CRM de Sena y no serán cedidos a terceros sin
              consentimiento expreso, salvo obligación legal.
            </p>
            <p className="leading-relaxed mt-3">
              Los participantes tienen derecho a acceder, rectificar, cancelar u oponerse al tratamiento de
              sus datos personales escribiendo a{" "}
              <a href="mailto:privacidad@somossena.com" className="text-brand-primary underline">
                privacidad@somossena.com
              </a>
              . Para mayor información, consulta nuestra{" "}
              <a href="/privacy" className="text-brand-primary underline">
                Política de Privacidad
              </a>
              .
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">8. Aceptación de las bases</h2>
            <p className="leading-relaxed">
              La participación en el concurso implica la aceptación íntegra de las presentes bases. Sena se
              reserva el derecho de modificar, suspender o cancelar el concurso por causas justificadas,
              comunicándolo a través de <strong>demo.somossena.com</strong> con la mayor antelación posible.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-brand-primary-dark text-xl md:text-2xl font-bold mb-3">9. Legislación aplicable</h2>
            <p className="leading-relaxed">
              El presente concurso se rige por la legislación chilena vigente. Cualquier controversia derivada
              de la interpretación o aplicación de estas bases será sometida a los tribunales ordinarios de
              justicia de la ciudad de Santiago de Chile.
            </p>
          </div>

          {/* Fecha */}
          <div className="border-t border-slate-100 pt-6">
            <p className="text-slate-400 text-xs">
              Bases publicadas el 5 de mayo de 2026 · SERVICIOS DE TECNOLOGÍA FLUJOLINK SpA ·{" "}
              <a href="/privacy" className="underline hover:text-brand-primary transition-colors">
                Política de Privacidad
              </a>
            </p>
          </div>

        </section>
      </div>
    </div>
  )
}
