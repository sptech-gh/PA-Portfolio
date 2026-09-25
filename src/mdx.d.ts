declare module '*.mdx' {
  import type * as React from 'react'
  import type { MDXComponents } from 'mdx/types'

  const MDXContent: React.ComponentType<{ components?: MDXComponents }>
  export default MDXContent
}
