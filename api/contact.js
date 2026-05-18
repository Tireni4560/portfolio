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
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // In production, this endpoint can forward submissions to email, CRM, or a secure backend service.
    res.status(200).json({ success: true, message: 'Contact request received.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process contact form.' });
  }
};
