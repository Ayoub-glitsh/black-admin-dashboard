# Lux Admin Dashboard

Tableau de bord moderne, minimaliste et 100% dark, construit avec React (Vite + TypeScript), Tailwind CSS et Recharts.

## Caractéristiques
- Layout responsive avec sidebar repliable (sticky), navbar supérieure (search, notifications, profil)
- 4 cartes KPI, courbe (LineChart), histogramme (BarChart), table sombre, barres de progression
- Palette noir/blanc uniquement, bordures gris sombre `#1f1f1f`, ombres douces, grandes espacements, coins arrondis
- Composants réutilisables, données mock, animations discrètes (hover + fade-in)

## Démarrage
```bash
npm install
npm run dev
# Ouvrir http://localhost:5173
```

## Build
```bash
npm run build
npm run preview
```

## Structure
- `src/components` : `Layout`, `Sidebar`, `Navbar`, `KPICard`, `Charts`, `DataTable`, `ProgressBar`
- `src/pages/Dashboard.tsx` : page principale du dashboard
- `src/data/mock.ts` : données factices

## Déploiement sur Vercel
Ce projet inclut `vercel.json` (build avec Vite et sortie `dist`).

1. Pousser le repo sur GitHub.
2. Créer un projet sur [Vercel](https://vercel.com) et importer le repo.
3. Paramètres par défaut (Framework: Autre / Vite), build `npm run build`, output `dist`.
4. Déployer.

## Personnalisation rapide
- Modifier les couleurs, ombres, arrondis et animation dans `tailwind.config.js`
- Ajuster les tokens utilitaires dans `src/index.css` (`.card`, `.surface`, `.hover-lift`, `.focus-ring`)
- Mettre à jour les datasets dans `src/data/mock.ts`

## Licence
MIT
*** End Patch***}#!json```】}"""
