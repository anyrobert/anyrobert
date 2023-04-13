import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="dark:bg-black h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
      <Footer />
    </div>
  );
}
