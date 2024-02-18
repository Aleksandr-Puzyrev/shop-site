

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>
        <ul>
          <li>Телефон</li>
          <li>Эмаил</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
