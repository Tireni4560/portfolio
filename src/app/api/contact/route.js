export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data ?? {};

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    return Response.json({ success: true, message: 'Contact request received.' }, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Failed to process contact form.' }, { status: 500 });
  }
}

export function GET() {
  return Response.json({ error: 'Method not allowed' }, { status: 405 });
}