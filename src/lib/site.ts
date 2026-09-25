// Site-wide configuration — real owner data (see PORTFOLIO_DATA_SUPPLEMENT.md).
// Search for [PLACEHOLDER and TODO: to find remaining owner-supplied gaps.

export const OWNER_FULL_NAME = 'Prosper Ami'

export const OWNER_INITIALS = 'PA'

export const CONTACT_EMAIL = 'sedempee@gmail.com'

export const OWNER_LOCATION = 'Kumasi, Ashanti Region, Ghana'

export const OWNER_COMPANY = 'SPtech Ghana'

export const socialLinks = {
  github: {
    label: 'GitHub',
    url: 'https://github.com/sptech-gh',
  },
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prosper-ami-469037a4',
  },
}

export const NAV_ITEMS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
] as const
