import React from 'react';

export default function BuscaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh">
      <div>{children}</div>
    </div>
  );
}