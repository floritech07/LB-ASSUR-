'use client';

import { useEffect } from 'react';

export default function ConsoleSignature() {
    useEffect(() => {
        // Signature stylée dans la console
        console.log(
            '%c🚀 Développé avec amour par floridev07',
            'color: #3b82f6; font-size: 16px; font-weight: bold; text-shadow: 2px 2px 4px rgba(59, 130, 246, 0.3);'
        );

        console.log(
            '%cMarc-Florian CHAKOUN',
            'color: #60a5fa; font-size: 14px; font-weight: 600; font-style: italic;'
        );

        console.log(
            '%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'color: #3b82f6;'
        );

        console.log(
            '%cfloridev07 est une marque déposée de Floritech, Inc.',
            'color: #93c5fd; font-size: 12px; font-style: italic;'
        );

        console.log(
            '%c© ' + new Date().getFullYear() + ' Floritech, Inc. Tous droits réservés.',
            'color: #60a5fa; font-size: 11px;'
        );

        console.log(
            '%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
            'color: #3b82f6;'
        );
    }, []);

    return null;
}
