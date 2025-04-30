# Dokumentacja projektu: Sklep z grami

## Cel projektu
Stworzenie funkcjonalnego sklepu internetowego z grami wideo z wykorzystaniem następujących technologii:
- **Frontend**: HTML, CSS
- **Backend**: PHP
- **Baza danych**: MySQL

---
## Zadania do wykonania

### Baza danych

#### Kluczowe tabele:
Jest rozpisane na zdjeciu na discordzie

#### Relacje:
1. **Klienci → Zamówienia**: jeden-do-wielu (jeden klient może mieć wiele zamówień).
2. **Zamówienia → Pozycje_Zamówienia**: jeden-do-wielu (jedno zamówienie może zawierać wiele pozycji).
3. **Produkty → Pozycje_Zamówienia**: jeden-do-wielu (jeden produkt może być w wielu zamówieniach).
4. **Produkty → platformy_produktu**: jeden-do-wielu (gra może być na wielu platformach).
5. **Platformy → platformy_produktu**:  wiele-do-wielu (poprzez tabelę łączącą).
6. **Produkty → Gatunki_produktu**: wiele-do-wielu (poprzez tabelę łączącą).
7. **Gatunki_gier → Gatunki_produktu**: wiele-do-wielu (poprzez tabelę łączącą).
---


### Backend
1. **Wyszukiwarka produktów**:
   - Implementacja rozbudowanej wyszukiwarki z wieloma filtrami (np. platforma, gatunek, cena).
   - Możliwość łączenia filtrów (np. "RPG na PlayStation w cenie do 100 zł").
2. **System zakupów**:
   - Obsługa procesu zamówienia (dodawanie nowego zamówienia do bazy).
   - Aktualizacja stanu magazynowego (zmniejszenie liczby dostępnych kopii po zakupie).
3. **Historia zakupów**:
   - Wyświetlanie historii zamówień dla zalogowanego klienta.
   - Szczegóły zamówień (data, produkty, ceny).

### Frontend
1. **Interfejs użytkownika**:
   - Strona główna z listą produktów.
   - Strona produktu ze szczegółami (opis, cena, platformy, gatunki)(raczej bez zdjęcia zobaczymy czy będzie czas je dodać).
   - Koszyk zakupowy.
   - Panel użytkownika (historia zakupów, dane konta).
2. **Integracja z backendem**:
   - Wyświetlanie danych z API (np. lista produktów, wyniki wyszukiwania).
   - Obsługa formularzy (logowanie, rejestracja).

---

## Wymagania techniczne
- **Baza danych**: MySQL z opisaną powyżej strukturą.
- **Backend**: PHP z użyciem przygotowanych endpointów API.
- **Frontend**: HTML, CSS.

---

## zaplanowany harmonogram prac (do 18 maja)
1. **Backend**:
   - Wdrożenie podstawowych endpointów (CRUD dla produktów, zamówień, klientów).
   - Implementacja wyszukiwarki z filtrami.
2. **Frontend**:
   - Stworzenie szkieletu strony (HTML/CSS).
   - Integracja z podstawowymi funkcjami backendu (np. wyświetlanie produktów).
3. **Baza danych**:
   - Utworzenie i wypełnienie tabel testowymi danymi.

---
