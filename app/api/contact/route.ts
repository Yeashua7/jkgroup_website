import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message, service } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Por favor, complete todos los campos requeridos.' },
        { status: 400 }
      )
    }

    // Include service if it exists, prepend to the message
    const fullMessage = service ? `[Servicio de Interés: ${service}]\n\n${message}` : message;

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        message: fullMessage,
      },
    })

    return NextResponse.json({ success: true, id: submission.id })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: 'Error interno del servidor. Intente más tarde.' },
      { status: 500 }
    )
  }
}
