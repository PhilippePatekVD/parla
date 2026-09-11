# Parla

Plateforme personnelle d’apprentissage des langues.

## Méthode

Les quatre parcours utilisent la même trame pédagogique :

**Immersion → Explication → Workbook → Encounter → Checkpoint**

Principes retenus : micro-leçons progressives, exposition en contexte, explication grammaticale courte mais explicite, récupération active, feedback immédiat, production guidée, répétition espacée et réactivation cumulative.

Le contenu est original et ne reproduit aucun cours tiers.

## Parcours actuellement publiés

### Italien — Parla! Italiano

- Fondations Pré-A1 : 6 unités
- A1 essentiel : 10 unités
- **16 unités**
- articles, accords, conjugaison, présent, modaux, passato prossimo, situations quotidiennes

### Allemand — Sprich! Deutsch

- Fondations Pré-A1 : 6 unités
- A1 essentiel : 10 unités
- **16 unités**
- ordre des mots, der/die/das, nominatif, accusatif, datif de base, verbes séparables, modaux, Perfekt

### Anglais — Speak! English

- Fondations Pré-A1 : 6 unités
- A1 essentiel : 10 unités
- **16 unités**
- be/have, articles, présent simple, do/does, some/any, there is/are, can/must, present continuous, past simple, going to

### Espagnol — ¡Habla! Español

- Fondations Pré-A1 : 6 unités
- A1 essentiel : 10 unités
- **16 unités**
- ser/estar, articles, accords, présent -ar/-er/-ir, verbes pronominaux, gustar, modaux, estar + gerundio, pretérito perfecto, ir a + infinitif

## Architecture

```text
/
├── index.html
├── shared/
│   ├── core-v2.js
│   └── styles-v2.css
├── italiano/
├── deutsch/
├── english/
├── espanol/
└── scripts/
    └── validate-courses.js
```

Chaque langue conserve sa progression séparément dans le navigateur tout en utilisant le même moteur pédagogique.

GitHub Actions vérifie la syntaxe, les assets, les routes et une densité pédagogique minimale avant chaque déploiement.
