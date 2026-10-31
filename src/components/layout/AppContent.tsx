import type { ReactNode } from "react";

type AppContentProps = {
  children: ReactNode;
};

export default function AppContent({ children }: AppContentProps) {
  return (
    <main
      id="main-content"
      className="mx-auto w-full max-w-[1600px] p-5 lg:p-8"
    >
      {children}
    </main>
  );
}
