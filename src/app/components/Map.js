import { useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import AdvancedMarkerInfo from './AdvancedMarkerInfo';
import data from '../data.json';

const GoogleMap = () => {
    const [activeMarkerId, setActiveMarkerId] = useState(null); // Estado para el marcador activo
    const mapId = "b9a46f605cb1e045";

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
            <Map
                mapId={mapId}
                style={{ width: '100vw', height: '100vh' }}
                defaultZoom={11}
                defaultCenter={{ lat: 3.4508239012324067, lng: -76.52944552328202 }}
                options={{
                    gestureHandling: "greedy", // Permite mover el mapa con un dedo y deshabilita el mensaje de dos dedos
                    zoomControl: true,         // Activa los botones de zoom
                    fullscreenControl: false,  // Desactiva el botón de pantalla completa (opcional)
                    streetViewControl: false,  // Desactiva Street View (opcional)
                    mapTypeControl: false      // Desactiva el control de tipo de mapa (opcional)
                }}
            >
                {data.map((loc) => (
                    <AdvancedMarkerInfo
                        key={loc.id}
                        position={loc.location}
                        videoId={loc.videoId}
                        nombreObra={loc.nombreObra}
                        contrato={loc.contrato}
                        valorInicial={loc.valorInicial}
                        valorAdicionado={loc.valorAdicionado} // Nuevo campo
                        valorFinal={loc.valorFinal} // Nuevo campo
                        fechaInicio={loc.fechaInicio} // Nuevo campo
                        fechaTerminacionInicial={loc.fechaTerminacionInicial} // Nuevo campo
                        fechaTerminacionActual={loc.fechaTerminacionActual} // Nuevo campo
                        cantidadOtrosi={loc.cantidadOtrosi} // Nuevo campo
                        tiempoRetraso={loc.tiempoRetraso}
                        estado={loc.estado} // Nuevo campo
                        enlaceSECOP={loc.enlaceSECOP} // Nuevo campo
                        markerId={loc.id} // Pasamos el ID del marcador
                        activeMarkerId={activeMarkerId}
                        setActiveMarkerId={setActiveMarkerId} // Pasamos la función para actualizar el marcador activo
                        proyecto={loc.proyecto} // Nuevo campo
                        contratista={loc.contratista} // Nuevo campo
                        objetoContractual={loc.objetoContractual} // Nuevo campo
                    />
                ))}
            </Map>
        </APIProvider>
    );
}

export default GoogleMap;
