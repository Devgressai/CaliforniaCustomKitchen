// Minimal test to see if the issue is with the component definition
export function TestComponent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export default function TestPage() {
  return (
    <TestComponent>
      <div>Test content</div>
    </TestComponent>
  )
}
