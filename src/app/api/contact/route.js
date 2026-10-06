export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data ?? {};

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing details. Check the name, email and message.' },
        { status: 400 }
      );
    }

    return Response.json(
      { success: true, message: 'Message received. I reply within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { error: 'I could not send the message. Message me on WhatsApp and we will sort it out.' },
      { status: 500 }
    );
  }
}

export function GET() {
  return Response.json({ error: 'Method not allowed' }, { status: 405 });
}