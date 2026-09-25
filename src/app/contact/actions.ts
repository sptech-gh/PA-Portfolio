'use server'

import { z } from 'zod'
import { sendContactNotification } from '@/lib/email'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

export type ContactFormValues = z.infer<typeof schema>

export interface ContactFormResult {
  success: boolean
  error?: string
}

// TODO: Owner to configure RESEND_API_KEY / CONTACT_EMAIL in .env (see .env.example)
export async function submitContactForm(data: ContactFormValues): Promise<ContactFormResult> {
  const parsed = schema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Validation failed' }
  }

  const sent = await sendContactNotification(parsed.data)
  if (!sent) {
    return { success: false, error: 'Failed to send message. Please try again.' }
  }

  return { success: true }
}
