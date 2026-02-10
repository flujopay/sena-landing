import { AssetImage } from "@/lib/utils/assets/image";

export const OurTeamRecsa = () => {
    return (
        <section className=" bg-[#f9f9f9]">
            <div className="px-4 py-4 md:py-0 md:px-8 max-w-[1280px] mx-auto">
                {/* Desktop */}
                <div className="hidden md:block relative min-h-[600px] overflow-hidden">
                    {/* Mapa como fondo */}
                    <img
                        src={AssetImage.mapLatamRecsa.src}
                        alt="Mapa LATAM Recsa"
                        className="absolute top-0 right-0 h-full w-auto max-w-[65%] object-contain pointer-events-none"
                    />

                    {/* Texto superpuesto */}
                    <div className="relative z-10 max-w-[50%] pt-16 pb-8">
                        <h2 className="text-brand-primary-dark text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                            Nuestro<br />equipo
                        </h2>

                        <p className="text-sm lg:text-base text-gray-700 mb-6 leading-relaxed">
                            Un equipo multidisciplinario que une tecnología, experiencia
                            financiera y criterio humano. Especialistas en producto,
                            desarrollo y operaciones de cobranza que diseñan cada
                            funcionalidad pensando en el equilibrio entre efectividad y
                            relaciones.
                        </p>

                        <p className="text-sm lg:text-base text-gray-700 mb-6 leading-relaxed">
                            Respaldados por Recsa, con más de 40 años de experiencia y
                            presencia en 15 países de LATAM. Más de 146 millones de
                            gestiones mensuales nos dan el conocimiento sobre cómo
                            cobrar bien en cada mercado.
                        </p>

                        <p className="text-sm lg:text-base text-gray-700 mb-8 leading-relaxed">
                            Síguenos en{" "}
                            <a
                                href="https://www.linkedin.com/company/flujolink/posts/?feedView=all"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold underline text-gray-700"
                            >
                                LinkedIn
                            </a>{" "}
                            para conocer al equipo, ver cómo
                            trabajamos y aprender sobre el arte de la cobranza
                            profesional.
                        </p>

                        <a
                            href="https://recsa.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-primary font-semibold inline-flex items-center gap-2 hover:underline"
                        >
                            Ver más sobre Recsa
                            <span>→</span>
                        </a>
                    </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                    <h2 className="text-brand-primary-dark text-3xl font-extrabold leading-tight mb-4">
                        Nuestro<br />equipo
                    </h2>

                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                        Un equipo multidisciplinario que une tecnología, experiencia
                        financiera y criterio humano. Especialistas en producto,
                        desarrollo y operaciones de cobranza que diseñan cada
                        funcionalidad pensando en el equilibrio entre efectividad y
                        relaciones.
                    </p>

                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                        Respaldados por Recsa, con más de 40 años de experiencia y
                        presencia en 15 países de LATAM. Más de 146 millones de
                        gestiones mensuales nos dan el conocimiento sobre cómo
                        cobrar bien en cada mercado.
                    </p>

                    <a
                        href="https://recsa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-primary font-semibold inline-flex items-center gap-2 hover:underline "
                    >
                        Ver más sobre Recsa
                        <span>→</span>
                    </a>

                    {/* Mapa */}
                    <div className="my-6">
                        <img
                            src={AssetImage.mapLatamRecsa.src}
                            alt="Mapa LATAM Recsa"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        Síguenos en{" "}
                        <a
                            href="https://www.linkedin.com/company/flujolink/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline text-gray-700"
                        >
                            LinkedIn
                        </a>{" "}
                        para conocer al equipo, ver cómo
                        trabajamos y aprender sobre el arte de la cobranza
                        profesional.
                    </p>
                </div>
            </div>
        </section>
    );
};