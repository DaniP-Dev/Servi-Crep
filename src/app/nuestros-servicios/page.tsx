import React from 'react';
import services from '@/lib/services';

const page = () => {
  return (
    <div>
      <section>
        {
          Object.entries(services).map(([key, service]) => (
            <a key={key} href={service.slug}>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
            </a>
          ))
        }
      </section>
    </div>
  );
};

export default page;