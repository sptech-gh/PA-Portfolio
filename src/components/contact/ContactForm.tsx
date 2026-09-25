'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2 } from 'lucide-react'
import { submitContactForm } from '@/app/contact/actions'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormValues = z.infer<typeof schema>

const fieldClasses =
  'w-full rounded-md border border-border bg-surface-1 px-4 py-2.5 text-[15px] text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'

export function ContactForm() {
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  const onSubmit = handleSubmit(async (values) => {
    try {
      const response = await submitContactForm(values)
      setResult(response)
    } catch {
      setResult({ success: false, error: 'Failed to send message. Please try again.' })
    }
  })

  if (result?.success) {
    return (
      <div
        role="status"
        className="rounded-lg border border-border bg-surface-1 p-8 text-center"
      >
        <h2 className="font-heading text-xl font-semibold text-text-primary">
          Message sent — thank you.
        </h2>
        <p className="mt-3 text-[15px] text-text-secondary">
          I&apos;ll get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-[14px] font-medium text-text-primary">
          Name <span className="text-accent" aria-hidden>*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={cn(fieldClasses, errors.name && 'border-error')}
          {...register('name')}
        />
        {errors.name ? (
          <p id="contact-name-error" role="alert" className="mt-2 text-[13px] text-error">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-[14px] font-medium text-text-primary">
          Email <span className="text-accent" aria-hidden>*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={cn(fieldClasses, errors.email && 'border-error')}
          {...register('email')}
        />
        {errors.email ? (
          <p id="contact-email-error" role="alert" className="mt-2 text-[13px] text-error">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-[14px] font-medium text-text-primary">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          aria-required="false"
          className={fieldClasses}
          {...register('subject')}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-[14px] font-medium text-text-primary">
          Message <span className="text-accent" aria-hidden>*</span>
        </label>
        <textarea
          id="contact-message"
          rows={6}
          aria-required="true"
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={cn(fieldClasses, 'resize-y', errors.message && 'border-error')}
          {...register('message')}
        />
        {errors.message ? (
          <p id="contact-message-error" role="alert" className="mt-2 text-[13px] text-error">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {result && !result.success ? (
        <p role="alert" className="rounded-md border border-error/40 bg-surface-1 px-4 py-3 text-[14px] text-error">
          {result.error}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (          <>
            <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          'Send message'
        )}
      </Button>
    </form>
  )
}
