# Parla! — Language Hub

Parla! regroupe désormais plusieurs parcours linguistiques dans une même structure GitHub Pages.

## Structure

- `/` — **Parla! Language Hub**
- `/italiano/` — **Parla! Italiano Coach**
- `/deutsch/` — **Sprich! Deutsch Coach**

Le hub affiche localement, pour chaque langue :
- progression A1
- XP
- série de jours
- nombre de révisions dues

Les deux applications restent entièrement indépendantes côté progression.

## Italiano

Parla! Italiano Coach propose :

- A1 structuré
- 12 unités
- 48 leçons
- 108 exercices uniques + checkpoints
- grammaire, conjugaison, phrases, écoute, production
- répétition espacée
- révision ciblée des erreurs
- TTS natif `it-IT`

URL :
`https://philippepatekvd.github.io/parla-italiano/italiano/`

## Deutsch

Sprich! Deutsch Coach propose :

- A1 structuré
- 12 unités
- 48 leçons
- 108 exercices uniques + checkpoints
- ordre des mots, articles, accusatif, datif de base, modaux, verbes séparables et Perfekt
- répétition espacée
- révision ciblée des erreurs
- TTS natif `de-DE`

URL :
`https://philippepatekvd.github.io/parla-italiano/deutsch/`

## Hub

URL :
`https://philippepatekvd.github.io/parla-italiano/`

Chaque application contient un raccourci **Langues** dans la barre de navigation pour revenir immédiatement au hub.

## Confidentialité et coût

- aucun backend
- aucune API payante
- aucun abonnement
- aucune donnée d’apprentissage envoyée à un serveur
- progression stockée localement dans le navigateur
- export/import JSON disponible dans chaque langue

La progression italienne conserve la clé locale historique `parla_v1_1`, donc la migration vers `/italiano/` ne réinitialise pas les données existantes.

La progression allemande utilise `sprich_de_v1_0`.

## Déploiement

GitHub Actions valide automatiquement :
- le hub
- le moteur italien
- le cursus italien
- le moteur allemand
- le cursus allemand
- les deux PWA
- les manifestes et routes principales

L’ancien prototype italien reste archivé dans `legacy/index-v1.0.html`.
