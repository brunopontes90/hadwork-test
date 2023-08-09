
export const metadata = {
  title: 'Hadwork Test',
  description: 'Teste de para empresa Hadwork',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
