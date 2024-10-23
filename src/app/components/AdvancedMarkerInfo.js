import { useAdvancedMarkerRef, Pin, InfoWindow, AdvancedMarker } from "@vis.gl/react-google-maps";
import YoutubeVideo from "../components/Video";

const AdvancedMarkerInfo = ({
    position,
    nombreObra,
    contrato,
    valorInicial,
    tiempoRetraso,
    videoId,
    activeMarkerId,
    setActiveMarkerId,
    markerId,
    proyecto,
    contratista,
    objetoContractual,
    valorAdicionado,
    valorFinal,
    fechaInicio,
    fechaTerminacionInicial,
    fechaTerminacionActual,
    cantidadOtrosi,
    estado,
    enlaceSECOP,
}) => {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const openWindow = activeMarkerId === markerId;

    return (
        <AdvancedMarker
            position={position}
            ref={markerRef}
            onClick={() => setActiveMarkerId(markerId)}
        >
            <Pin background='#15ED2E' glyphColor='#333' borderColor='#333' />
            {openWindow && (
                <InfoWindow anchor={marker} onCloseClick={() => setActiveMarkerId(null)}>
                    <div>
                        <YoutubeVideo videoId={videoId} />
                        <h1>{nombreObra}</h1>
                        <p><strong>Contrato:</strong> {contrato}</p>
                        <p><strong>Proyecto:</strong> {proyecto}</p>
                        <p><strong>Contratista:</strong> {contratista}</p>
                        <p><strong>Objeto Contractual:</strong> {objetoContractual}</p>
                        <p><strong>Valor Inicial:</strong> {valorInicial}</p>
                        <p><strong>Valor Adicionado:</strong> {valorAdicionado}</p>
                        <p><strong>Valor Final:</strong> {valorFinal}</p>
                        <p><strong>Fecha de Inicio:</strong> {fechaInicio}</p>
                        <p><strong>Fecha de Terminación Inicial:</strong> {fechaTerminacionInicial}</p>
                        <p><strong>Fecha de Terminación Actual:</strong> {fechaTerminacionActual}</p>
                        <p><strong>Cantidad de Otrosí:</strong> {cantidadOtrosi}</p>
                        <p><strong>Tiempo de Retraso:</strong> {tiempoRetraso}</p>
                        <p><strong>Estado:</strong> {estado}</p>
                        <p><a href={enlaceSECOP} target="_blank" rel="noopener noreferrer">Ver contrato</a></p>
                    </div>
                </InfoWindow>
            )}
        </AdvancedMarker>
    );
};

export default AdvancedMarkerInfo;
