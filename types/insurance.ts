export type InsuranceCategory = "IARD" | "VIE";

export interface Guarantee {
    id: string;
    name: string;
    included: boolean;
    description?: string;
}

export interface InsuranceOffer {
    id: string;
    category: InsuranceCategory;
    insuranceType: string;
    insurer: string;
    insurerSlug: string;
    premium: number; // Annuelle ou Mensuelle selon le cas
    rate?: number; // Pour l'assurance Vie par exemple
    coverageAmount: number;
    franchise: number;
    guarantees: string[];
    optionalGuarantees: string[];
    exclusions: string[];
    duration: string;
    waitingPeriod: string;
    terms: string;
    rating: number; // Scoring de 1 à 5
}

export interface Insurer {
    id: string;
    name: string;
    slug: string;
    logo: string;
    description: string;
    categories: InsuranceCategory[];
    website: string;
}
