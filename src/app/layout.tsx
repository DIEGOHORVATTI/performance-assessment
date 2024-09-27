import './globals.css';

export const metadata = {
  title: 'Sistema Avaliação de Performance',
  description: 'Teste prático para vaga de desenvolvedor.'
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
