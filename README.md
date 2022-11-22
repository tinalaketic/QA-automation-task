## Opis zahteva

Neophodno je kreirati automatske E2E testove koristeći [Cypress](https://www.cypress.io/).  
Scenariji trebaju biti sprovedeni nad mock [Aplikacijom](https://www.saucedemo.com/)

## Scenariji

### Uspešna prijava kao **standard_user** korisnik

* Korisnik otvara početnu stranu
* Unosi i potvrdjuje **ispravne** kredencijale
* Potvrdjuje da se uspešno prijavio

### Uspešna prijava kao **performance_glitch_user** korisnik

* Korisnik otvara početnu stranu
* Unosi i potvrdjuje **ispravne** kredencijale
* Potvrdjuje da se uspešno prijavio

### Neuspešna prijava

* Korisnik otvara početnu stranu
* Unosi i potvrdjuje **neispravne** kredencijale
* Potvrdjuje da je došlo do greške

### Korisnik **standard_user** dodaje najskuplji predmet i uspešno radi checkout
* Posle uspešne prijave
* Korisnik sortira u opadajućem nizu predmete u inventaru
* Dodaje najskuplji predmet u korpu
* Uspešno prolazi checkout proces

### Korisnik **performance_glitch_user** dodaje najskuplji predmet i uspešno radi checkout
* Posle uspešne prijave
* Korisnik sortira u opadajućem nizu predmete u inventaru
* Dodaje najskuplji predmet u korpu
* Uspešno prolazi checkout proces

### Korisnik **standard_user** dodaje najjeftiniji predmet i uspešno radi checkout
Posle uspešne prijave
Korisnik sortira u rastućem nizu predmete u inventaru
Dodaje najjeftiniji predmet u korpu
Uspešno prolazi checkout proces

### Korisnik **performance_glitch_user** dodaje najjeftiniji predmet i uspešno radi checkout
Posle uspešne prijave
Korisnik sortira u rastućem nizu predmete u inventaru
Dodaje najjeftiniji predmet u korpu
Uspešno prolazi checkout proces

### Korisnik **standard_user** se odjavljuje
Posle uspešne prijave
Korisnik se odjavljuje

## Preduslovi

* Mock [aplikacija](https://www.saucedemo.com/)

