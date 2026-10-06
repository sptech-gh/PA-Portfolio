# Security Policy

## Reporting a vulnerability

Use this repository's **Security** tab to submit a private security advisory. Do not open a public issue containing API keys, private contact submissions, personal information, or exploit details.

Include the affected route or component, reproduction steps, impact, and a suggested mitigation when available.

## Secret and privacy rules

Never commit:

- Resend API keys or other provider credentials
- `.env` or `.env.local` files
- Private contact-form submissions
- Unpublished personal documents or identity information
- Hosting tokens, private keys, or deployment credentials

Only variables intended for browsers may use the `NEXT_PUBLIC_` prefix.

## Contact-form protections

- Validate and normalize all submitted fields server-side.
- Apply abuse and rate-limit controls at the hosting edge or API layer.
- Avoid logging message bodies or personal contact details.
- Return generic errors that do not disclose provider configuration.

## Incident response

If a credential or private submission is committed, rotate the credential, restrict access, remove the data from Git history, review provider logs, and require collaborators to discard old clones after a history rewrite.
