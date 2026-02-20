import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTool from "@/components/ComparisonTool";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comparer les Assurances au Bénin - LB ASSUR",
    description: "Utilisez notre comparateur gratuit pour trouver la meilleure assurance Auto, Vie, Santé ou Moto au Bénin. Comparez les tarifs et garanties de tous les assureurs.",
};

export default function ComparePage() {
    return (
        <main className="bg-white">
            <Navbar />
            <ComparisonTool />
            <Footer />
        </main>
    );
}
