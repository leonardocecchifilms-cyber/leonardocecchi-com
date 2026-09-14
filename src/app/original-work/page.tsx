import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import OriginalWorkIndexContent from "@/components/OriginalWorkIndexContent";

export const metadata = {
  title: "Original Work — Leonardo Cecchi",
  description:
    "Original film and series projects written, produced, and starring Leonardo Cecchi — including Call It All Love and Escape to Italy, both currently in development and pitching.",
};

export default function OriginalWorkPage() {
  return (
    <LanguageProvider>
      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <Navigation />
        <main style={{ paddingTop: "72px" }}>
          <OriginalWorkIndexContent />
        </main>
      </div>
    </LanguageProvider>
  );
}
