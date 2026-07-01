import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

const crearPreferencia = async (req, res) => {
  try {
    const { items } = req.body;

    const itemsMP = items.map(item => ({
      id: item._id,
      title: `${item.nombre} - Talle ${item.talle}`,
      quantity: Number(item.cantidad),
      unit_price: Number(item.precio),
      currency_id: 'ARS'
    }));

    const preference = new Preference(client);

    const body = {
      items: itemsMP,
      backUrls: {
        success: 'http://localhost:5173/carrito',
        failure: 'http://localhost:5173/carrito',
        pending: 'http://localhost:5173/carrito',
      },
      autoReturn: 'approved'
    };

    const response = await preference.create({ body });

    res.status(200).json({
      id: response.id,
      init_point: response.init_point
    });

  } catch (error) {
    console.error("Error al crear preferencia de MP:", error);
    res.status(500).json({ status: 500, message: error.message });
  }
};

export default { crearPreferencia };