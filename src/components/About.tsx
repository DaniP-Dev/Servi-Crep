import React from 'react';

const About = () => {
    return (
        <section className="container py-5" id="about">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                    <img
                        src="/globe.svg"
                        alt="Quiénes somos"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '350px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold mb-3">Quiénes Somos</h2>
                    <p className="lead text-secondary mb-3">
                        <strong>Historia y misión:</strong> Desde nuestros inicios, nos hemos dedicado a brindar servicios de alta calidad, guiados por la integridad, la innovación y el compromiso con nuestros clientes. Nuestra misión es ser referentes en el sector, aportando soluciones confiables y eficientes que contribuyan al desarrollo de nuestros aliados y la sociedad.
                    </p>
                    <p className="mb-3">
                        <strong>Equipo técnico y profesional:</strong> Contamos con un equipo multidisciplinario de profesionales altamente calificados, con amplia experiencia en el sector y en constante capacitación para garantizar los mejores resultados en cada proyecto.
                    </p>
                    <div className="mb-4">
                        <strong>Acreditaciones:</strong>
                        <ul className="list-unstyled mt-2">
                            <li className="mb-2"><i className="bi bi-patch-check-fill text-primary me-2"></i> Acreditación vigente con ONAC</li>
                            <li className="mb-2"><i className="bi bi-patch-check-fill text-primary me-2"></i> Certificación bajo la norma ISO/IEC 17020:2012</li>
                        </ul>
                    </div>
                    <a href="#contact" className="btn btn-primary px-4">Contáctanos</a>
                </div>
            </div>
        </section>
    );
};

export default About;