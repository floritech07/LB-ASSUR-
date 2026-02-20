import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComparisonHomeSection from "@/components/ComparisonHomeSection";
import FeatureSection from "@/components/FeatureSection";
import GridSection from "@/components/GridSection";
import StatsSection from "@/components/StatsSection";
import PartnersSection from "@/components/PartnersSection";
import ProcessSection from "@/components/ProcessSection";
import BookingSection from "@/components/BookingSection";
import GlossarySection from "@/components/GlossarySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <Hero />
      <ComparisonHomeSection />

      <div className="relative z-20 -mt-20 sm:-mt-32">
        <GridSection />
      </div>

      <PartnersSection />

      <ProcessSection />

      <StatsSection />

      <div id="services">
        {/* ... existing feature sections ... */}
        <FeatureSection
          title="L’Audit"
          subtitle="Analyse & Expertise"
          description="Étude approfondie de vos risques et de vos contrats en cours pour identifier clairement les éventuels vides ou insuffisances de couverture. Nous garantissons une analyse précise pour une protection optimale."
          backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
          align="left"
        />

        <FeatureSection
          title="L’Assurance"
          subtitle="Solutions Sur Mesure"
          description="Nous offrons un panorama représentatif des meilleurs contrats du marché, sélectionnés par nos soins pour tous types de risques. Simplifiez votre processus d'assurance avec nos solutions adaptées."
          backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
          align="right"
        />

        <FeatureSection
          title="Conseil & Accompagnement"
          subtitle="Support Continu"
          description="LBASSUR et son équipe vous apportent conseil, écoute et accompagnement durant toute la durée de votre contrat. Une réelle prise en compte de chaque assuré pour suivre l’évolution des risques."
          backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
          align="left"
        />

        <FeatureSection
          title="Indemnisation Rapide"
          subtitle="Engagement Qualité"
          description="En cas de sinistre, comptez sur nous pour une indemnisation rapide et équitable. Nous prenons en charge toutes les démarches administratives pour garantir votre tranquillité d'esprit."
          backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
          align="right"
        />
      </div>

      <GlossarySection />
      <BookingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
