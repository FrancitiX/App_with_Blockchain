import React, { useState, useEffect } from 'react';
import Navbar from './../components/Nav';
import Footer from './../components/Footer';
import styles from './../styles/Properties.module.css';
function Properties() {
  const [properties, setProperties] = useState([]);

  
  useEffect(() => {
    const fetchedProperties = [
      { id: 1, title: "Propiedad 1", description: "Eres dueño de un agua de Horchata", date: "2024-11-01" },
      { id: 2, title: "Propiedad 2", description: "Tienes 3 llantas en tu propiedad", date: "2024-11-10" },
      { id: 3, title: "Propiedad 3", description: "Tienes 2 logotipos de tu propiedad", date: "2024-11-15" },
    ];
    setProperties(fetchedProperties);
  }, []);

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.propertiesSection}>
          <h2>Propiedades Digitales Registradas</h2>

          {properties.length === 0 ? (
            <p>No hay propiedades registradas.</p>
          ) : (
            <div className={styles.propertiesList}>
              {properties.map(property => (
                <div key={property.id} className={styles.propertyCard}>
                  <h3>{property.title}</h3>
                  <p>{property.description}</p>
                  <span>{property.date}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Properties;
