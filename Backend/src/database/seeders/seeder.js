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
                nombre: "Remera Oversize",
                descripcion: "Corte urbano pesado con estampa DISCIPLINE.",
                precio: 24500,
                imagen: "https://i.ibb.co/S4m8Wbsv/Remera-DISCIPLINE.png",
                edicionLimitada: true,
                tallesStock: { "S": 5, "M": 12, "L": 8, "XL": 4 }
            },
            {
                nombre: "Remera Banda",
                descripcion: "Algodón prémium Soda Estereo.",
                precio: 22000,
                imagen: "https://i.ibb.co/mrpVhKMB/Remera-soda-estereo.png",
                edicionLimitada: false,
                tallesStock: { "S": 15, "M": 20, "L": 15, "XL": 10 }
            },
            {
                nombre: "Remera Gotán",
                descripcion: "Corte urbano, Nirvana.",
                precio: 26000,
                imagen: "https://i.ibb.co/LDqFP0rW/Remera-Nirvana.png",
                edicionLimitada: false,
                tallesStock: { "S": 3, "M": 7, "L": 5, "XL": 2 }
            },
            {
                nombre: "Remera Malevo",
                descripcion: "Drop exclusivo Aghanims.",
                precio: 21500,
                imagen: "https://i.ibb.co/ZpzvgvmN/Remera-Aghanims.png",
                edicionLimitada: false,
                tallesStock: { "S": 8, "M": 14, "L": 12, "XL": 6 }
            },
            {
                nombre: "Remera Heavy",
                descripcion: "Algodon peinado con estampa Saints.",
                precio: 23000,
                imagen: "https://i.ibb.co/yczSR41s/Remera-saint.png",
                edicionLimitada: true,
                tallesStock: { "S": 10, "M": 18, "L": 14, "XL": 8 }
            },
            {
                nombre: "Remera ancha",
                descripcion: "Con estampa Noble,.",
                precio: 27500,
                imagen: "https://i.ibb.co/k6wL8hcL/Remera-Noble.png",
                edicionLimitada: true,
                tallesStock: { "S": 4, "M": 6, "L": 6, "XL": 3 }
            },
            {
                nombre: "Remera Rebusque",
                descripcion: "Rebusque puro, algodón con estampa The eyes.",
                precio: 22000,
                imagen: "https://i.ibb.co/QvXGWxqD/Remera-the-eyes.png",
                edicionLimitada: false,
                tallesStock: { "S": 12, "M": 15, "L": 15, "XL": 9 }
            },
            {
                nombre: "Remera Love Drop",
                descripcion: "Edición medianoche con detalles en contratono y costuras reforzadas.",
                precio: 25000,
                imagen: "https://i.ibb.co/ch1HcgB0/Remera-love.png",
                edicionLimitada: true,
                tallesStock: { "S": 2, "M": 5, "L": 8, "XL": 4 }
            },
            {
                nombre: "Gorra Arrabalera",
                descripcion: "Frente acolchado con parche clásico bordado de NY.",
                precio: 14000,
                imagen: "https://i.ibb.co/NdgNn4mQ/Gorra-ny.png",
                edicionLimitada: false,
                tallesStock: { "S": 10, "M": 25, "L": 20, "XL": 0 }
            },
            {
                nombre: "Cap Dad Hat",
                descripcion: "Gorra de pana gastada con visera curva, regulable.",
                precio: 16500,
                imagen: "https://i.ibb.co/9mMZvjp0/gorra-letras.png",
                edicionLimitada: true,
                tallesStock: { "S": 0, "M": 15, "L": 15, "XL": 0 }
            },
            {
                nombre: "Gorra Beanie Conventillo",
                descripcion: "Gorro de lana tejido premium doble capa para bancar el frío de la calle.",
                precio: 12000,
                imagen: "https://i.ibb.co/MyXs9jDc/Gorra-North.png",
                edicionLimitada: false,
                tallesStock: { "S": 20, "M": 20, "L": 0, "XL": 0 }
            },
            {
                nombre: "Gorra Rose Gold",
                descripcion: "Detalles blancos sobre fondo azul. Un clásico del pabellón.",
                precio: 18000,
                imagen: "https://i.ibb.co/fVn21nkL/Gorra-rose.png",
                edicionLimitada: true,
                tallesStock: { "S": 0, "M": 8, "L": 8, "XL": 0 }
            },
            {
                nombre: "Cap Lunfarda",
                descripcion: "Estampado urbano clasico LA.",
                precio: 15000,
                imagen: "https://i.ibb.co/JRf5LfGf/Gorra-LA.png",
                edicionLimitada: false,
                tallesStock: { "S": 0, "M": 10, "L": 10, "XL": 0 }
            },
            {
                nombre: "Gorra Malevo Clasica",
                descripcion: "Bucket hat de gabardina negra Nike tejida.",
                precio: 13500,
                imagen: "https://i.ibb.co/6cd2K4ds/Gorra-Nike.png",
                edicionLimitada: false,
                tallesStock: { "S": 5, "M": 15, "L": 10, "XL": 0 }
            },
            {
                nombre: "Gorra Clasica bordada",
                descripcion: "Parche de adidas y visera curva.",
                precio: 19500,
                imagen: "https://i.ibb.co/m5PxxfpD/Gorra-adidas.png",
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
        console.log('¡Ropa cargada!');

        await Contacto.insertMany(contactosPrueba);
        console.log('¡Mensajes cargados!');

        mongoose.disconnect();
        console.log('Desconectado de la base de datos.');
        process.exit(0);

    } catch (error) {
        console.error('Error corriendo el seeder:', error.message);
        process.exit(1);
    }
};

conectarEjecutar();