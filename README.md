# Parla

Plateforme personnelle d’apprentissage des langues.

## Parcours actuellement publiés

### Italien — Parla! Italiano

- Fondations Pré-A1 : 6 unités
- A1 essentiel : 10 unités
- Total : **16 unités**
- Cycle pédagogique : **Immersion → Explication → Workbook → Encounter → Checkpoint**
- Checkpoint final : **80 %**
- grammaire, articles, conjugaison, temps verbaux, écoute, dictée, construction de phrases, production
- répétition espacée et révisions cumulatives

### Allemand — Sprich! Deutsch

- Fondations Pré-A1 : 6 unités
- A1 essentiel : 10 unités
- Total : **16 unités**
- même cycle pédagogique et mêmes seuils
- ordre des mots, der/die/das, nominatif, accusatif, datif de base, conjugaison, verbes séparables, modaux et Perfekt
- répétition espacée et révisions cumulatives

## Architecture

```text
/
├── index.html
├── shared/
│   ├── core-v2.js
│   └── styles-v2.css
├── italiano/
│   ├── foundation-v2.js
│   ├── a1-v2.js
│   └── course-v2.js
├── deutsch/
│   ├── foundation-v2.js
│   ├── a1-v2.js
│   └── course-v2.js
└── scripts/
    └── validate-courses.js
```

Les deux langues utilisent le même moteur pédagogique. Le contenu linguistique reste séparé.

GitHub Actions vérifie la syntaxe et la densité pédagogique avant chaque déploiement.
