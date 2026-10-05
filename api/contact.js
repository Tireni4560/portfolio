module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método no permitido' });
    return;
  }

  try {
    const data = req.body;
    const payload = typeof data === 'string' ? JSON.parse(data) : data;
    const { name, email, message } = payload;

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Faltan datos. Revisa el nombre, el email y el mensaje.' });
      return;
    }

    // When live, this endpoint can forward submissions to email, CRM, or a secure backend service.
    res.status(200).json({ success: true, message: 'Mensaje recibido. Te respondo en menos de 24 horas.' });
  } catch (error) {
    res.status(500).json({ error: 'No he podido enviar el mensaje. Escríbeme por WhatsApp y lo vemos.' });
  }
};
