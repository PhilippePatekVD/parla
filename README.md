# Parla! — Italiano Coach

Parla! est une PWA gratuite d’apprentissage de l’italien pensée comme un **cours A1 progressif pour adulte**, utilisable sur iPhone et navigateur sans compte ni API payante.

## Version 1.1

La v1.1 remplace le prototype de 6 micro-leçons par une véritable architecture pédagogique.

### Parcours A1

- **12 unités**
- **48 leçons**
- **108 exercices uniques** + checkpoints de réactivation
- progression : **Découvrir → Construire → Dialoguer → Checkpoint**
- seuil de **70 %** au checkpoint pour ouvrir l’unité suivante

### Contenu

Le parcours couvre notamment :

1. salutations et `essere`
2. présentation, nationalités et `chiamarsi`
3. lieu de vie, `avere`, `a/in`, `c’è/ci sono`
4. famille, articles et possessifs
5. commandes au bar, `vorrei`, nombres et politesse
6. routine, présent régulier et heure
7. goûts, `piacere`, `preferire`, `fare`
8. déplacements, `andare`, directions et prépositions articulées
9. restaurant, `prendere`, avec/sans et paiement
10. shopping, couleurs, tailles et accords
11. projets du week-end, `potere/dovere/volere + infinitif`
12. introduction au `passato prossimo`

### Types d’exercices

- QCM contextuels
- phrases à trous
- traduction guidée FR → IT
- construction de phrases mot par mot
- compréhension orale avec synthèse vocale italienne native
- mini-dialogues
- production écrite
- checkpoints de fin d’unité

### Suivi pédagogique

Parla suit séparément :

- vocabulaire
- grammaire
- conjugaison
- compréhension
- production

Une erreur n’est pas simplement oubliée : elle devient une **carte de révision ciblée**. Le vocabulaire de chaque unité rejoint également le système de répétition espacée.

## Confidentialité et coût

- aucune API IA
- aucun abonnement
- aucun backend
- aucune donnée d’apprentissage envoyée à un serveur
- progression stockée localement dans le navigateur
- export/import JSON disponible dans l’application

La progression de l’ancienne v1 est conservée en historique lors de la première ouverture de la v1.1.

## iPhone

Après publication GitHub Pages :

**Safari → Partager → Sur l’écran d’accueil → Ajouter**

La PWA peut ensuite fonctionner hors ligne après une première visite réussie.

## Architecture

- `index.html` : shell de l’application
- `styles.css` : interface
- `curriculum.js` : contenu pédagogique A1
- `app.js` : moteur d’apprentissage, progression et SRS
- `sw.js` : fonctionnement hors ligne
- `manifest.json` : installation PWA
- `legacy/index-v1.0.html` : archive de la version précédente

Cette séparation permet d’ajouter plus tard A2 puis B1 sans réécrire le moteur.


## Sprich! — Deutsch Coach

Le même moteur pédagogique existe désormais pour l'allemand dans `/deutsch/`.

- progression A1 indépendante
- 12 unités / 48 leçons / 108 exercices
- ordre du verbe, articles, accusatif, datif de base, modaux, verbes séparables et Perfekt
- synthèse vocale native `de-DE`
- stockage local séparé de Parla

URL GitHub Pages : `/parla-italiano/deutsch/`
