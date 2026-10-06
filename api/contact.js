module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const data = req.body;
    const payload = typeof data === 'string' ? JSON.parse(data) : data;
    const { name, email, message } = payload;

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing details. Check the name, email and message.' });
      return;
    }

    // When live, this endpoint can forward submissions to email, CRM, or a secure backend service.
    res.status(200).json({ success: true, message: 'Message received. I reply within 24 hours.' });
  } catch (error) {
    res.status(500).json({ error: 'I could not send the message. Message me on WhatsApp and we will sort it out.' });
  }
};
