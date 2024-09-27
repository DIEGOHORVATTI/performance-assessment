import './globals.css'

export const metadata = {
  title: 'Sistema Avaliação de Performance',
  description: 'Teste prático para vaga de desenvolvedor.',
}

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html lang="pt-br">
      <link
        href="https://cdn.prod.website-files.com/6511cfd2606eaef1830868c7/652981fdf93a28fdd36ae332_favicon-suzano.png"
        rel="shortcut icon"
        type="image/x-icon"
      />

      <body>{children}</body>
    </html>
  )
}
