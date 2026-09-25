import { Hero } from '@/components/home/Hero'
import { CapabilityStrip } from '@/components/home/CapabilityStrip'
import { SelectedWork } from '@/components/home/SelectedWork'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { ProductsPreview } from '@/components/home/ProductsPreview'
import { ProcessSteps } from '@/components/home/ProcessSteps'
import { AboutSnippet } from '@/components/home/AboutSnippet'
import { InsightsPreview } from '@/components/home/InsightsPreview'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <SelectedWork />
      <ServicesPreview />
      <ProductsPreview />
      <ProcessSteps />
      <AboutSnippet />
      <InsightsPreview />
      <FinalCTA />
    </>
  )
}
