import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactNotification } from '@/lib/email'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(20),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed' }, { status: 422 })
  }

  const sent = await sendContactNotification(parsed.data)
  if (!sent) {
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}
