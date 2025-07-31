import React from 'react';

const Service = () => {
    return (
        <section className="container py-5" id="services">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Servicios Especializados para Estaciones de Servicio</h2>
                <p className="lead text-secondary">Soluciones integrales y acreditadas para el sector de combustibles líquidos, GNV y GLP.</p>
            </div>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body text-center">
                            <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
                            <h5 className="card-title fw-bold">Inspección de Hermeticidad</h5>
                            <p className="card-text">Inspección de hermeticidad en tanques y líneas de combustible (líquidos, GNV, GLP) para garantizar la seguridad y cumplimiento normativo.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body text-center">
                            <i className="bi bi-speedometer2 display-4 text-success mb-3"></i>
                            <h5 className="card-title fw-bold">Calibración de Surtidores y Medidores</h5>
                            <p className="card-text">Calibración precisa de surtidores y medidores según la regulación nacional, asegurando exactitud y confianza en cada despacho.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body text-center">
                            <i className="bi bi-award display-4 text-warning mb-3"></i>
                            <h5 className="card-title fw-bold">Pruebas Complementarias y Metrología</h5>
                            <p className="card-text">Pruebas complementarias, ensayos acreditados y servicios de metrología respaldados por ONAC y bajo normatividad vigente.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <a href="https://mercaestaciones.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary px-4 me-2">Ver más en Mercaestaciones</a>
                <span className="badge bg-primary ms-2">ONAC +3</span>
            </div>
        </section>
    );
};

export default Service;