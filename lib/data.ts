import { Insurer, InsuranceOffer } from "../types/insurance";

export const INSURERS: Insurer[] = [
    // IARD
    {
        id: "1",
        name: "L’Africaine des Assurances",
        slug: "africaine-assurances",
        logo: "https://via.placeholder.com/150",
        description: "Leader historique en IARD au Bénin.",
        categories: ["IARD"],
        website: "https://lafricaine.bj",
    },
    {
        id: "2",
        name: "SanlamAllianz",
        slug: "sanlam-allianz",
        logo: "https://via.placeholder.com/150",
        description: "Leader panafricain.",
        categories: ["IARD", "VIE"],
        website: "https://sanlamallianz.bj",
    },
    {
        id: "3",
        name: "SUNU Assurances",
        slug: "sunu-assurances",
        logo: "https://via.placeholder.com/150",
        description: "Expertise régionale reconnue.",
        categories: ["IARD", "VIE"],
        website: "https://sunu-assurances.com",
    },
    {
        id: "4",
        name: "NSIA Assurances",
        slug: "nsia-assurances",
        logo: "https://via.placeholder.com/150",
        description: "Vrai visage de l'assurance.",
        categories: ["IARD", "VIE"],
        website: "https://groupensia.com",
    },
    {
        id: "5",
        name: "NOBILA Assurances",
        slug: "nobila-assurances",
        logo: "https://via.placeholder.com/150",
        description: "Acteur dynamique du marché.",
        categories: ["IARD"],
        website: "https://nobilaassurances.com",
    },
];

export const MOCK_OFFERS: InsuranceOffer[] = [
    {
        id: "auto-1",
        category: "IARD",
        insuranceType: "Assurance Auto",
        insurer: "SanlamAllianz",
        insurerSlug: "sanlam-allianz",
        premium: 45000,
        coverageAmount: 10000000,
        franchise: 25000,
        guarantees: ["Responsabilité Civile", "Défense et Recours", "Sécurité Chauffeur"],
        optionalGuarantees: ["Vol", "Incendie", "Bris de Glace"],
        exclusions: ["Conduite en état d'ivresse", "Absence de permis"],
        duration: "12 mois",
        waitingPeriod: "Immédiat",
        terms: "Conditions générales disponibles en agence.",
        rating: 4.5
    },
    {
        id: "auto-2",
        category: "IARD",
        insuranceType: "Assurance Auto",
        insurer: "SUNU Assurances",
        insurerSlug: "sunu-assurances",
        premium: 42000,
        coverageAmount: 8000000,
        franchise: 30000,
        guarantees: ["Responsabilité Civile", "Sécurité Chauffeur"],
        optionalGuarantees: ["Accident"],
        exclusions: ["Usage non conforme"],
        duration: "12 mois",
        waitingPeriod: "Immédiat",
        terms: "Contrat flexible.",
        rating: 4.2
    },
    {
        id: "vie-1",
        category: "VIE",
        insuranceType: "Assurance Vie Épargne",
        insurer: "SanlamAllianz Vie",
        insurerSlug: "sanlam-allianz-vie",
        premium: 10000, // Mensuel
        rate: 3.5,
        coverageAmount: 5000000,
        franchise: 0,
        guarantees: ["Capital Garanti", "Participation aux bénéfices"],
        optionalGuarantees: ["Doublement décès accidentel"],
        exclusions: ["Suicide la première année"],
        duration: "minimum 8 ans",
        waitingPeriod: "3 mois",
        terms: "Droit d'entrée 1%.",
        rating: 4.8
    }
];
