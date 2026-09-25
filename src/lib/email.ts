import { Resend } from 'resend'

export interface ContactEmailPayload {
  name: string
  email: string
  subject?: string
  message: string
}

export async function sendContactNotification(payload: ContactEmailPayload): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    // Email is not configured (see .env.example) — treat as failed so the caller can surface an error.
    return false
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'noreply@example.com',
      to: process.env.CONTACT_EMAIL ?? '',
      replyTo: payload.email,
      subject: `Portfolio contact: ${payload.subject ?? 'New message'}`,
      text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
    })
    return true
  } catch {
    return false
  }
}
