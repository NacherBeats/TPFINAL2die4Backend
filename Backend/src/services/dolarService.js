const consultarAPIExterna = async () => {
    const response = await fetch("https://dolarapi.com/v1/dolares/blue");
    if (!response.ok) {
        throw new Error("No se pudo obtener respuesta de la API externa");
    }
    return await response.json();
};

export default { consultarAPIExterna };