export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        subject: String(subject).slice(0, 300),
        message: String(message).slice(0, 5000),
        status: 'new',
      },
    });

    return NextResponse.json({ success: true, id: submission?.id ?? '' }, { status: 201 });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
