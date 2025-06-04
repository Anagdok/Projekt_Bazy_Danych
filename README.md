# Dokumentacja projektu: CrackGrilla

## Opis projektu
CrackGrilla to nowoczesny sklep z grami wykorzystujący najnowsze technologie frontendowe i chmurową bazę danych. Aplikacja umożliwia przeglądanie gier, składanie zamówień oraz zarządzanie kontem użytkownika.

## Architektura technologiczna

### Frontend
1. **React z TypeScript**:
   - Komponentowa struktura aplikacji
   - Silne typowanie przez TypeScript
   - Hooks do zarządzania stanem
   - React Router do nawigacji

2. **Vite**:
   - Szybkie środowisko developerskie
   - Optymalizacja budowania projektu
   - Hot Module Replacement

3. **Tailwind CSS**:
   - Utility-first CSS framework
   - Responsywny design
   - Dark mode out-of-the-box

4. **Lucide React**:
   - Biblioteka ikon
   - Tree-shakable komponenty
   - Prosta customizacja

### Backend i baza danych
1. **Supabase**:
   - PostgreSQL jako baza danych
   - Autentykacja przez magic links
   - Realtime subscriptions
   - Row Level Security

2. **Supabase JavaScript Client**:
   - Typowane zapytania
   - Obsługa błędów
   - Zarządzanie sesją
   

### Uwagi dodatkowe
   - Projekt wykorzystuje podejście komponentowe
   - Wszystkie zapytania do bazy danych są typowane przez TypeScript
   - Stylowanie oparte o utility classes (Tailwind)
   - Ikony są wczytywane dynamicznie (Lucide React)
   
### Rozwój projektu
**Możliwe kierunki rozbudowy**:
   - System ocen i recenzji gier
   - Wyszukiwarka z zaawansowanymi filtrami
   - Integracja z systemem płatności
   
## Wymagania systemowe
- Node.js v18+
- npm 9+
- Konto Supabase (darmowy tier)
