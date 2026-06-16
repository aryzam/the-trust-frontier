import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Substack free subscription endpoint
    const substackRes = await fetch(
      'https://thetrustfrontier.substack.com/api/v1/free',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Referer': 'https://thetrustfrontier.com',
        },
        body: new URLSearchParams({ email }),
      }
    );

    if (substackRes.ok) {
      return NextResponse.json({ ok: true });
    }

    // Substack returns 200 even on duplicate — anything non-200 is a real error
    const body = await substackRes.text();
    console.error('Substack error:', substackRes.status, body);
    return NextResponse.json({ error: 'Substack error' }, { status: 502 });
  } catch (err) {
    console.error('Subscribe route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
