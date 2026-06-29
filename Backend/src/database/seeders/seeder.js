import mongoose from 'mongoose';
import config from '../../config.js';
import Producto from '../models/Producto.js';
import Contacto from '../models/Contacto.js';

const conectarEjecutar = async () => {
    try {
        console.log('Conectando a base de datos...');
        await mongoose.connect(config.MONGO_URI);
        console.log('Conexión exitosa.');

        await Producto.deleteMany({});
        await Contacto.deleteMany({});
        console.log('Base de datos limpia (Productos y Contactos eliminados).');

        const productosPrueba = [
            {
                nombre: "Remera Caminito Oversize",
                descripcion: "Corte urbano pesado con estampa inspirada en los pasajes del arrabal.",
                precio: 24500,
                imagen: "",
                edicionLimitada: true,
                tallesStock: { "S": 5, "M": 12, "L": 8, "XL": 4 }
            },
            {
                nombre: "Remera Lunfardo Black",
                descripcion: "Algodón prémium con tipografía gótica y jerga callejera de Buenos Aires.",
                precio: 22000,
                imagen: "",
                edicionLimitada: false,
                tallesStock: { "S": 15, "M": 20, "L": 15, "XL": 10 }
            },
            {
                nombre: "Remera Gotán Acid Wash",
                descripcion: "Efecto gastado gris oscuro con vibras de los 2000 y el Obelisco de fondo.",
                precio: 26000,
                imagen: "",
                edicionLimitada: true,
                tallesStock: { "S": 3, "M": 7, "L": 5, "XL": 2 }
            },
            {
                nombre: "Remera Malevo Street",
                descripcion: "Drop exclusivo con estampa trasera minimalista de la cultura de esquina.",
                precio: 21500,
                imagen: "",
                edicionLimitada: false,
                tallesStock: { "S": 8, "M": 14, "L": 12, "XL": 6 }
            },
            {
                nombre: "Remera Bandoneón Heavy Metal",
                descripcion: "Gráfica disruptiva que fusiona el tango clásico con la estética metalera urbana.",
                precio: 23000,
                imagen: "",
                edicionLimitada: false,
                tallesStock: { "S": 10, "M": 18, "L": 14, "XL": 8 }
            },
            {
                nombre: "Remera Arraby Boxy Fit",
                descripcion: "Silueta cuadrada, talle ancho y bordado sutil dorado en el pecho.",
                precio: 27500,
                imagen: "",
                edicionLimitada: true,
                tallesStock: { "S": 4, "M": 6, "L": 6, "XL": 3 }
            },
            {
                nombre: "Remera Rebusque White",
                descripcion: "Blanco puro, algodón pesado y estampa reflectiva ideal para la noche.",
                precio: 22000,
                imagen: "",
                edicionLimitada: false,
                tallesStock: { "S": 12, "M": 15, "L": 15, "XL": 9 }
            },
            {
                nombre: "Remera Milonga Dark Drop",
                descripcion: "Edición medianoche con detalles en contratono y costuras reforzadas.",
                precio: 25000,
                imagen: "",
                edicionLimitada: true,
                tallesStock: { "S": 2, "M": 5, "L": 8, "XL": 4 }
            },
            {
                nombre: "Gorra Trucker Arrabalera",
                descripcion: "Frente acolchado con parche clásico bordado de la marca y red negra.",
                precio: 14000,
                imagen: "",
                edicionLimitada: false,
                tallesStock: { "S": 10, "M": 25, "L": 20, "XL": 0 }
            },
            {
                nombre: "Cap Dad Hat 2die4",
                descripcion: "Gorra de pana gastada con visera curva y hebilla de bronce regulable.",
                precio: 16500,
                imagen: "",
                edicionLimitada: true,
                tallesStock: { "S": 0, "M": 15, "L": 15, "XL": 0 }
            },
            {
                nombre: "Gorra Snapback Esquina",
                descripcion: "Visera plana, estructura rígida y bordado en alto relieve 3D frontal.",
                precio: 15500,
                imagen: "",
                edicionLimitada: false,
                tallesStock: { "S": 0, "M": 12, "L": 18, "XL": 0 }
            },
            {
                nombre: "Gorra Beanie Conventillo",
                descripcion: "Gorro de lana tejido premium doble capa para bancar el frío de la calle.",
                precio: 12000,
                imagen: "",
                edicionLimitada: false,
                tallesStock: { "S": 20, "M": 20, "L": 0, "XL": 0 }
            },
            {
                nombre: "Gorra Trucker Fantasma Gold",
                descripcion: "Detalles dorados sobre fondo negro satinado. Un clásico del pabellón.",
                precio: 18000,
                imagen: "",
                edicionLimitada: true,
                tallesStock: { "S": 0, "M": 8, "L": 8, "XL": 0 }
            },
            {
                nombre: "Cap Camuflada Lunfarda",
                descripcion: "Estampado militar urbano sutil con cierre strapback de cuero.",
                precio: 15000,
                imagen: "",
                edicionLimitada: false,
                tallesStock: { "S": 0, "M": 10, "L": 10, "XL": 0 }
            },
            {
                nombre: "Gorra Piluso Malevo",
                descripcion: "Bucket hat de gabardina negra pesada con etiqueta tejida lateral.",
                precio: 13500,
                imagen: "",
                edicionLimitada: false,
                tallesStock: { "S": 5, "M": 15, "L": 10, "XL": 0 }
            },
            {
                nombre: "Gorra Trucker 2die4 Limited",
                descripcion: "La joya de la corona. Parche de cuero grabado a fuego y visera tracker.",
                precio: 19500,
                imagen: "",
                edicionLimitada: true,
                tallesStock: { "S": 0, "M": 5, "L": 5, "XL": 0 }
            }
        ];

        const contactosPrueba = [
            {
                nombre: "Mateo Silva",
                email: "mateosilva@skatearg.com",
                proposicion: "Buenas gente de 2die4, me interesa distribuir sus remeras oversize en nuestro local del centro de Córdoba. Manejamos muy buena movida urbana acá.",
                fecha: new Date(Date.now() - 3 * 60 * 60 * 1000)
            },
            {
                nombre: "Sofía G",
                email: "sofiag.rec@gmail.com",
                proposicion: "¡Buenas! Soy fotógrafa de indumentaria streetwear y me coparía armar un shooting de colaboración para el drop de la gorra fantasma limited. Avisen si les sirve.",
                fecha: new Date(Date.now() - 24 * 60 * 60 * 1000)
            },
            {
                nombre: "Valentino (Distro)",
                email: "v.urbano@outlook.com",
                proposicion: "Hola. Quería consultar precios mayoristas de las gorras trucker y si hacen envíos a locales multimarca en el interior de Buenos Aires. Saludos.",
                fecha: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
            },
            {
                nombre: "Gero T",
                email: "gero_tattoos@live.com.ar",
                proposicion: "Qué onda bro, sigo la marca en redes. ¿Hay chances de meter unos diseños míos estilo flash tattoo tradicional en las próximas estampas de remeras? Chiflen.",
                fecha: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000)
            }
        ];

        await Producto.insertMany(productosPrueba);
        console.log('¡16 prendas cargadas exitosamente!');

        await Contacto.insertMany(contactosPrueba);
        console.log('¡4 mensajes de contacto cargados exitosamente!');

        mongoose.disconnect();
        console.log('Desconectado de la base de datos.');
        process.exit(0);

    } catch (error) {
        console.error('Error corriendo el seeder:', error.message);
        process.exit(1);
    }
};

conectarEjecutar();