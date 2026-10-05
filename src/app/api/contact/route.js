export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data ?? {};

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Faltan datos. Revisa el nombre, el email y el mensaje.' },
        { status: 400 }
      );
    }

    return Response.json(
      { success: true, message: 'Mensaje recibido. Te respondo en menos de 24 horas.' },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { error: 'No he podido enviar el mensaje. Escríbeme por WhatsApp y lo vemos.' },
      { status: 500 }
    );
  }
}

export function GET() {
  return Response.json({ error: 'Método no permitido' }, { status: 405 });
}