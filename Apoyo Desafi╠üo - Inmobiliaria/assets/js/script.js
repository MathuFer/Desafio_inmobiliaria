function agregarPropiedades(propiedades, tipo) {
    const contenedor = document.getElementById(`${tipo.toLowerCase()}Container`);

    for (let i = 0; i < propiedades.length; i++) {
      const smokeIcon = propiedades[i].smoke ? '🚬' : '🚭';
      const petsIcon = propiedades[i].pets ? '🐾' : '🚫';
      const smokeMessage = propiedades[i].smoke ? 'Permitido fumar' : 'No se permite fumar';
      const petsMessage = propiedades[i].pets ? 'Mascotas permitidas' : 'No se permiten mascotas';
      const smokeClass = propiedades[i].smoke ? 'permitido' : 'prohibido';
      const petsClass = propiedades[i].pets ? 'permitido' : 'prohibido';

      const template = `
        <div class="contenedor">
            <div class="propiedad">
                    <img src="${propiedades[i].src}" alt="${propiedades[i].nombre}"  onclick="mostrarAlerta('${propiedades[i].nombre}', '${smokeMessage}', '${petsMessage}')">
                <div class="interior">
                    <h3>${propiedades[i].nombre}</h3>
                    <p>${propiedades[i].descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> Ubicación: ${propiedades[i].ubicacion}</p>
                    <p><i class="fas fa-bed"></i> Habitaciones: ${propiedades[i].habitaciones}</p>
                    <p><i class="fas fa-bath"></i> Baños: ${propiedades[i].banos}</p>
                    <p>${tipo === 'Venta' ? 'Costo' : 'Costo Mensual'}: $${tipo === 'Venta' ? propiedades[i].costo : propiedades[i].costo}</p>
                    <p>Fumar: <span class="${smokeClass}">${smokeIcon} ${smokeMessage}</span></p>
                    <p>Mascotas: <span class="${petsClass}">${petsIcon} ${petsMessage}</span></p>
                </div>
            </div>
        </div>
      `;

      contenedor.innerHTML += template;
    }
  }

  function mostrarAlerta(nombrePropiedad, smokeMessage, petsMessage) {
    const smokeIconToShow = smokeMessage.includes('Permitido') ? '🚬' : '🚭';
    const petsIconToShow = petsMessage.includes('Mascotas') ? '🐾' : '🚫';
  
    const alertMessage = `
      <strong>${nombrePropiedad}</strong>
      <br>
      <br>${smokeIconToShow} ${smokeMessage} 
      <br>${petsIconToShow} ${petsMessage}
    `;
  
    alertCentered(alertMessage);
  }
  
  function alertCentered(message) {
    const alertDiv = document.createElement('div');
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '50%';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translate(-50%, -50%)';
    alertDiv.style.backgroundColor = 'white';
    alertDiv.style.padding = '40px'; 
    alertDiv.style.borderRadius = '14px';
    alertDiv.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)'; 
    alertDiv.style.zIndex = '9999';
    alertDiv.style.fontSize = '18px';
    
    alertDiv.innerHTML = `<div>${message}</div>`;
  
    document.body.appendChild(alertDiv);
  
    setTimeout(() => {
        document.body.removeChild(alertDiv);
      }, 5000);
    }
