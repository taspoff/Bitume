# Chroniques Oubliées Contemporain pour Foundry VTT

<img src="https://github.com/ZigmundKreud/coc/raw/master/ui/coc/logo.png" width="50%">

Ce programme est fait pour être exécuté dans le moteur [Foundry VTT](https://foundryvtt.com/).

Le système comporte les règles et le design du jeu de base, les settings spécifiques sont dans des modules séparés.

Modules disponibles :
* Cthulhu

---

### Installation automatique
* Allez dans la page d'accueil de Foundry (Configuration and Setup), cliquer sur Game Systems.
* Cliquez sur "Install System" et chercher le système.
* Cliquez sur "Install"
### Installation manuelle

* Allez dans la page d'accueil de Foundry (Configuration and Setup), cliquer sur Game Systems.
* Cliquez sur "Install System" et coller le lien vers le [manifest](https://raw.githubusercontent.com/ZigmundKreud/coc/master/system.json) dans le champ "Manifest URL" en bas de la fenêtre. 
* Cliquez sur "Install"

### Créer son monde
* Dans l'onglet "Game Worlds", cliquer sur "Create World", donner un nom et un chemin à votre monde et sélectionner "Chroniques Oubliées Contemporain" dans le champ "Game System". Cliquer sur "Create World".
* Lancer votre partie en cliquant sur le bouton "Launch World" de votre monde. Vous êtes prêts à jouer.
---
## Changelog
### Version 0.8.9.5
FONCTIONNALITES
- Dé explosif des DM désactivable par une option
- Ajout d'une option "Vérification des mains libres" : vérifie qu'il reste assez de mains pour équiper l'objet
		Ne pas vérifier
		Vérifié : ignorable par tout le monde en utilisant SHIFT
		Vérifié : ignorable uniquement par le MJ en utilisant SHIFT

- Ajout d'une option "Vérification des emplacements d'armure" : vérifie que le slot n'est pas déjà pris par une armure équipée
		Ne pas vérifier
		Vérifié : ignorable par tout le monde en utilisant SHIFT
		Vérifié : ignorable uniquement par le MJ en utilisant SHIFT
- Ajout du support du module Token Action HUD
	Caractéristiques : 
		Clic gauche : Jet avec dialogue
		Clic droit : Jet sans dialogue
		
		Caractéristiques : Jet de dé
		Attaques : Jet de dé

	Combat
		Clic gauche : Toucher + DM
		Shift + Click : DM
		
		Armes : armes de contact ou à distance équipées
		Sorts : de type armes ou les sorts activables
			Cliquer sur un sort activable ouvre sa fiche
		
	Inventaire
		Clic droit (si option activée): ouvre la fiche de l'objet
		Clic gauche :
			Armes et Protections : Equipe/Déséquipe
			Consommables : affiche les objets consommables sauf les sorts, consomme une unité de l'objet
			Sorts : consomme le sort s'il est "consommable", sinon ne fait rien
			Equipement : les autres objets, ne fait rien
			
	Capacité 
		Clic gauche : ouvre la capacité
- Mise à jour du compendium d'équipement avec le champ Emplacement et Deux mains
### Version 0.8.9.4
CORRECTIFS
* Correction si le profil n'a qu'une voie
* Correction de la valeur de l'incantation
* Correction de la sélection multiple des options du système
* Correction du calcul du Mod des jets d'attaque

FONCTIONNALITES
* Ajout d'un filtre sur l'onglet combat pour n'afficher que les "arme" et "protection
* Synchronisation de l'état des effets avec l'état "Equipé" des items parent
* Ajout de la possibilité d'ignorer la synchronisation des active effect avec leur item "équipable" en utilisant MAJ
### Version 0.8.9.3
CORRECTIFS
* Correction de la gestion du profil : drag and drop, édition, suppression
### Version 0.8.9.2
CORRECTIFS
* Correction du calcul Mod et DM d'une rencontre : calcul depuis l'onglet Combat et non l'objet
* Correction de la gestion des voies et capacités : drag and drop, édition, suppression

FONCTIONNALITES
* Prise en compte du dé explosif pour les DM
* Mise en place du verrou Joueur pour les Items
* Modification de l'actor-sheet et de l'item-sheet pour prise en compte du droit "Limité"
* Masquage des boutons d'actions si la feuille est en lecture seule
* Prise en compte du droit Limité sur les Rencontres
* Remplacement du jet de dé des points de récupération par un healing roll

### Version 0.8.9.1
Mise à jour pour supporter Foundry 0.8 et rattrapage des fonctionnalités déjà offertes par COF.

* Mis en oeuvre des Effets
* Ajout de l'onglet Effets dans les Items et les Actors
* Tous les calculs de la fiche sont maintenant réalisés après la prise en compte des effets
* Shift + Click sur un raccourci d'arme dans la hotbar pour avoir uniquement la fenêtre des dommages
* Changement de l'icône par défaut pour chaque type d'actors et d'items
* Dépense d'un PR en cliquant sur l'icône du Coeur : clic gauche avec gain de PV, clic droit sans
* Séparation de Bonus/Malus en Bonus et Malus dans les fenêtres de dialogue Jet de compétence / Jet d'attaque
* Possibilité d'infliger les dégâts des attaques depuis le chat à des tokens ciblés via des "boutons de dommages"
* Prise en compte de la Résistance aux Dommages
* Option "Affiche les boutons de dommages" : afficher ou non les boutons d'application des dégâts à tout le monde, par défaut uniquement au MJ
* Affiche uniquement les entêtes utiles à la catégorie dans la partie Combat
* Onglet Voies et Capacités : un clic permet de déplier/replier la description d'une capacité
* Possibilité de changer le label, la description du jet de compétences et la description des dommages des fenêtres de jet dans une macro
* Acteur de type Rencontre avec des items Armes de rencontre et Capacités

### Version 0.1.0
* Gestion de l'équipement dans l'onglet Combat
* Prise des bonuses du profil dans la feuille de perso
* Gestion du calcul de Points de Vie spécifiques à COC
* Calcul auto des points de mana et des points de chance/choc
* Gestion du malus d'armure au score d'init
* Prise en compte des jets de dommages qui explosent
* Ajout des derniers items au compendium équipement avec notamment les armes à distance
* Affichage des détails du profil et du trait en cliquant dessus à partir de la FdP
* Ajout d'un système de suivi des blessures graves.
* Correction de bugs d'affichage graphique dans les deux feuilles de style.


---
### Mentions Légales

### Chroniques Oubliées Contemporain
[Chroniques Oubliées Contemporain](http://www.black-book-editions.fr/catalogue.php?id=477) est un jeu de rôle simple et ludique créé par [Black Book Editions](http://www.black-book-editions.fr/) en 2009 comme jeu d’initiation.
Il a pleinement joué son rôle et a permis aussi à de nombreux « vieux » joueurs de se remettre au jeu de rôle. Ses règles ont par la suite été reprises en enrichies dans le magazine Casus Belli et un hors-série regroupant toutes les règles avancées est sorti en 2014.

Ce jeu est une dérivé des règles DD3/DD3.5 et à ce titre il est soumis à la licence OGL de Wizards of the Coast.

#### OPEN GAME LICENCE version 1.0a

The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc (“Wizards”).
All Rights Reserved.

1. Definitions: (a) “Contributors” means the copyright and/or trademark own-ers who have contributed Open Game Content;
(b) “Derivative Material” means copyrighted material including derivative works and translations (including into other
computer languages), potation, modification, correction, addition, exten-sion, upgrade, improvement, compilation, abridgment
or other form in which an existing work may be recast, transformed or adapted; (c) “Distribute” means to re-produce,
license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute; (d) “Open Game Content” means the
game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody
the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game
Content by the Contributor, and means any work covered by this License, including translations and derivative works under
copyright law, but specifically excludes Product Identity. (e) “Product Identity” means product and product line names, logos
and identifying marks including trade dress; artifacts, creatures, characters, stories, storylines, plots, the-matic elements, dialogue,
incidents, language, artwork, symbols, designs, depic-tions, likenesses, formats, poses, concepts, themes and graphic,
photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities,
teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or
supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly
identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content;
(f ) “Trademark” means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its
products or the associated products contrib-uted to the Open Game License by the Contributor (g) “Use”, “Used” or “Using”
means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content.
(h) “You” or “Your” means the licensee in terms of this agreement.

2. The License: This License applies to any Open Game Content that contains a notice indicating that the Open Game
Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that
you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms
or conditions may be applied to any Open Game Content distributed using this License.

3. Offer and Acceptance: By Using the Open Game Content You indicate Your acceptance of the terms of this License.

4. Grant and Consideration: In consideration for agreeing to use this License, the Contributors grant You a perpetual,
worldwide, royalty-free, non-exclusive li-cense with the exact terms of this License to Use, the Open Game Content.

5. Representation of Authority to Contribute: If You are contributing original material as Open Game Content, You represent
that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by
this License.

6. Notice of License Copyright: You must update the COPYRIGHT NOTICE por-tion of this License to include the exact
text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must
add the title, the copyright date, and the copyright holder’s name to the COPY-RIGHT NOTICE of any original Open Game
Content you Distribute.

7. Use of Product Identity: You agree not to Use any Product Identity, includ-ing as an indication as to compatibility, except
as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You
agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work
containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such
Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge
to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights,
title and interest in and to that Product Identity.

8. Identification: If you distribute Open Game Content You must clearly indicate which portions of the work that you are
distributing are Open Game Content.

9. Updating the License: Wizards or its designated Agents may publish updated versions of this License. You may use
any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under
any version of this License.

10. Copy of this License: You MUST include a copy of this License with every copy of the Open Game Content You distribute.

11. Use of Contributor Credits: You may not market or advertise the Open Game Content using the name of any Contributor
unless You have written per-mission from the Contributor to do so.

12. Inability to Comply: If it is impossible for You to comply with any of the terms of this License with respect to some or
all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open
Game Material so affected.

13. Termination: This License will terminate automatically if You fail to comply with all terms herein and fail to cure such
breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.

14. Reformation: If any provision of this License is held to be unenforce-able, such provision shall be reformed only to the
extent necessary to make it enforceable.

15. COPYRIGHT NOTICE
Open Game License v 1.0 Copyright 2000, Wizards of the Coast, Inc.
System Reference Document. Copyright 2000. Wizards of the Coast, Inc; Authors Jonathan Tweet, Monte Cook, Skip Williams,
based on material by E. Gary Gygax and Dave Arneson.
Chroniques Oubliées™ Contemporain – Copyright 2009. Black Book Éditions. Auteurs : Laurent Bernasconi, Raphaël Bombayl, David Burckle, Damien Coltice et Didier Guiserix.

---

#### Conditions d’utilisations Black Book Editions
Conformément aux conditions d’utilisation décrites sur le site de Black Book Editions.
Ce site utilise des marques déposées et/ou des droits d’auteurs qui sont la propriété de Black Book Editions comme l’y autorisent les conditions d’utilisation de Black Book Editions. Ce site n’est pas publié par Black Book Editions et n’a pas reçu son aval ni une quelconque approbation de sa part. Pour de plus amples informations sur Black Book Editions, consultez www.black-book-editions.fr.

---

### LICENCE
Ce programme est open-source sous [licence AGPL 3.0](https://opensource.org/licenses/AGPL-3.0).

La [licence AGPL 3.0](https://opensource.org/licenses/AGPL-3.0) est une licence de type [copyleft fort](https://fr.wikipedia.org/wiki/Copyleft#Copyleft_fort_/_Copyleft_standard).

L'auteur refuse donc que l'évolution possible de son travail soit accompagnée d'une restriction du droit à la copie, à l'étude, ou à de nouvelles évolutions. De ce fait, le contributeur apportant une modification (correction, ajout, réutilisation, etc.) est contraint de redistribuer ses propres contributions avec les mêmes libertés que l'original. Autrement dit, les nouvelles créations réalisées à partir d'œuvres sous copyleft héritent de fait de ce statut de copyleft : ainsi, ce type de licence permet un partage de la création ou de la connaissance, comme bien commun, qui permet aux œuvres culturelles d'être développées librement.

On parle de copyleft fort lorsque les redistributions du logiciel ou de l'œuvre en question, modifiés ou non, ainsi que de tous les composants ajoutés, ne peuvent se faire que sous la licence initiale.

--- 

### SOFTWARE LICENCE (AGPL)

Copyright (C) 2020 Nicolas "Zigmund" DELAFORGE (zigmund.razzia@gmail.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
