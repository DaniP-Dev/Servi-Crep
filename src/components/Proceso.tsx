import React from 'react';

const Proceso = () => {
    return (
        <section className="container py-5" id="proceso">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Proceso de Inspección</h2>
                <p className="lead text-secondary">Transparencia, imparcialidad e integridad en cada etapa, bajo estándares ISO 17020 y NTC-ISO/IEC 17020:2012.</p>
            </div>
            <div className="row justify-content-center mb-4">
                <div className="col-lg-10">
                    <div className="accordion" id="accordionProceso">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    1. Solicitud
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionProceso">
                                <div className="accordion-body">
                                    El cliente realiza la solicitud de inspección a través de nuestros formularios o herramientas en línea, facilitando el inicio del proceso de manera ágil y transparente.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    2. Planificación
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionProceso">
                                <div className="accordion-body">
                                    Nuestro equipo coordina fechas y recursos, asegurando cumplimiento normativo, eficiencia y comunicación clara con el cliente.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    3. Ejecución
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionProceso">
                                <div className="accordion-body">
                                    Se realiza la inspección en campo, siguiendo protocolos acreditados y garantizando imparcialidad y calidad en cada etapa.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    4. Emisión de informe
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionProceso">
                                <div className="accordion-body">
                                    Se entrega un informe detallado, transparente y conforme a la normativa vigente, asegurando la trazabilidad y confianza en los resultados.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    5. Seguimiento
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionProceso">
                                <div className="accordion-body">
                                    Ofrecemos acompañamiento y soporte post-inspección para asegurar la satisfacción y el cumplimiento continuo de nuestros clientes.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="alert alert-info d-flex align-items-center mt-4" role="alert">
                        <i className="bi bi-shield-lock-fill me-2 display-6"></i>
                        <div>
                            Nuestro proceso está alineado con los principios de transparencia, imparcialidad e integridad, conforme a ISO 17020 y NTC-ISO/IEC 17020:2012.
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-4">
                <div className="col-lg-10 text-center">
                    <a href="https://site.onac.org.co" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary px-4 me-2 mb-2">Solicitar inspección ONAC (SIPSO)</a>
                    <a href="https://mercaestaciones.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary px-4 me-2 mb-2">Mercaestaciones</a>
                    <a href="https://faresbcs.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary px-4 me-2 mb-2">Fares BCS</a>
                    <a href="https://intertek.com.co" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary px-4 me-2 mb-2">Intertek</a>
                    <a href="https://iticgroup.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary px-4 me-2 mb-2">ITIC Group</a>
                </div>
            </div>
        </section>
    );
};

export default Proceso;