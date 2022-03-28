# goit-js-hw-08

## Project nr 1

:framed_picture: - Photo Gallery added by JavaScript

- photos have been added as a link to http://cdn.pixabay.com
- gallery-items.js contains JavaScript Array with the details of the displayed images
- code is functional - if you add another object in gallery-items.js it will display on website without change JavaScript file
- JavaScript is added by single operation
- used SimpleLightbox added by npm 
- Used three JavaScript Options from SimpleLightbox - add caption (captionData, captionSelecor) and delay before the caption shows


## Project nr 2
:film_strip: - if you reload a website, the video will resume from the time you stopped watching

### API
- lodash
- Vimeo Player

### What I did
- install API

- Video Player -> used way with pre-existing player, without add <script> in html
                  used method .on to add an event listener (timeupdate)
                  saved timeupdate in localStorage, data is JSON.stringify
- lodash ->       timeupdates every one second 











# Parcel boilerplate

## Kroki do uruchomienia:

1. Pobrać repozytorium na komputer, `git clone https://github.com/q-nick/goit8.git`
2. Uruchomić `npm ci` w linii komend (zainstalować pakiety, powinien pojawić się folder node_modules)
3. Serwer deweloperski uruchamia się wyłącznie komendą: `npm run dev`. Liveserver i inne usługi nie nadają się do zadań 8,9 itd
4. Po odpaleniu powyższej komendy nalezy wejść na http://localhost:1234 na którym odpalany jest serwer parcel

## Standardowe problemy:

Nie należy używać `type="module"` w definiowaniu skryptów js - jest to błąd uniemożliwiający poprawne działanie parcela.
