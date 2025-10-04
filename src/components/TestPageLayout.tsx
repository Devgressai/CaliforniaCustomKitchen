import { ReactNode } from 'react'

export function ServiceAreaPageLayout({
  children,
  location,
  service,
  structuredData,
  className = ""
}: {
  children: ReactNode
  location: string
  service: string
  structuredData?: any
  className?: string
}) {
  return (
    <div className={className}>
      <div>Location: {location}</div>
      <div>Service: {service}</div>
      {children}
    </div>
  )
}
