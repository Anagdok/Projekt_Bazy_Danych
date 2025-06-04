/*
  # Update game descriptions to Polish
  
  1. Changes
    - Update all game descriptions to Polish language
    - Maintain proper SQL formatting
    - Ensure natural and marketing-friendly language
*/

UPDATE products
SET description = CASE name
  WHEN 'Cyberpunk 2077' THEN 'Wkrocz do świata Night City - megalopolis przyszłości opanowanego przez korporacje, gdzie liczy się władza, przepych i modyfikacje ciała. Wciel się w V, cyberpunka-najemnika szukającego implantu zapewniającego nieśmiertelność. Podejmuj decyzje, które zmienią losy miasta i jego mieszkańców.'
  WHEN 'Elden Ring' THEN 'Powstań, Zmatowiony, i pozwól się prowadzić łasce ku władaniu mocą Elden Ring i zostaniu Elden Lordem w Międzyziemiu. Epicka przygoda w świecie fantasy stworzonym przez Hidetaka Miyazaki i George R. R. Martina, pełnym niebezpieczeństw, tajemnic i potężnych przeciwników.'
  WHEN 'Red Dead Redemption 2' THEN 'Epicka opowieść o życiu w bezwzględnym sercu Ameryki. Gdy federalni agenci polują na ostatnich członków gangu Van der Linde, Arthur Morgan musi dokonać wyboru między własnymi ideałami a lojalnością wobec gangu, który go wychował.'
  WHEN 'The Legend of Zelda: Tears of the Kingdom' THEN 'Wyrusz w epicką podróż przez ląd i przestworza Hyrule. Odkryj nowe wyspy unoszące się nad królestwem, zmierz się z mroczną siłą zagrażającą światu i wykorzystaj nowe moce Linka do tworzenia niezwykłych konstrukcji i pojazdów.'
  WHEN 'God of War Ragnarök' THEN 'Kratos i Atreus muszą wyruszyć w podróż do każdego z Dziewięciu Światów w poszukiwaniu odpowiedzi, przygotowując się jednocześnie do przepowiedzianej bitwy, która ma doprowadzić do końca świata. Wspólnie będą musieli zdecydować, czego są gotowi się podjąć dla dobra swojej rodziny.'
  WHEN 'Baldur''s Gate 3' THEN 'Epicka przygoda w świecie Dungeons & Dragons, gdzie każdy wybór ma znaczenie. Uwolnij się spod wpływu pasożytniczych Mind Flayerów i wyrusz w podróż przez Zapomniane Krainy. Zbierz drużynę wyjątkowych bohaterów i razem napiszcie własną legendę.'
  WHEN 'Final Fantasy XVI' THEN 'Zanurz się w mrocznym świecie fantasy, gdzie Dominanty - potężni wojownicy władający mocą Eikonów - ścierają się w epickich bitwach. Poznaj historię Clive''a Rosfielda, pierwszego tarczownika Rosarii, w jego misji zemsty i odkupienia.'
  WHEN 'Resident Evil 4 Remake' THEN 'Przeżyj na nowo klasyczną historię horroru w całkowicie odświeżonej formie. Jako agent Leon S. Kennedy, musisz uratować córkę prezydenta z tajemniczej europejskiej wioski, gdzie mieszkańcy zostali opanowani przez mroczny kult.'
  WHEN 'Star Wars Jedi: Survivor' THEN 'Kontynuuj podróż Cala Kestisa, jednego z ostatnich rycerzy Jedi, pięć lat po wydarzeniach z Fallen Order. Rozwijaj swoje umiejętności Mocy, poznawaj nowe techniki walki mieczem świetlnym i odkrywaj niezbadane zakątki galaktyki.'
  WHEN 'Diablo IV' THEN 'Powróć do świata Sanktuarium w najnowszej odsłonie legendarnej serii hack''n''slash. Wybierz swoją klasę postaci, poluj na hordy demonów, zdobywaj potężne przedmioty i staw czoła Lilith, Córce Nienawiści.'
  WHEN 'Street Fighter 6' THEN 'Nowa era legendarnej serii walk powraca z przełomową grafiką, nowymi systemami walki i trybami gry. Wybierz spośród zróżnicowanej obsady wojowników i pokaż swoje umiejętności w pojedynkach lokalnych i online.'
  WHEN 'Dead Space Remake' THEN 'Przeżyj na nowo kultowy horror science fiction w oszałamiającej oprawie graficznej nowej generacji. Jako Isaac Clarke, inżynier statku kosmicznego, musisz przetrwać koszmar na pokładzie USG Ishimura.'
  WHEN 'Hogwarts Legacy' THEN 'Zostań uczniem Hogwartu w XIX wieku i przeżyj własną przygodę w świecie Harry''ego Pottera. Ucz się zaklęć, warz eliksiry, oswajaj magiczne stworzenia i odkryj tajemnicę, która może zagrozić całemu czarodziejskiemu światu.'
  WHEN 'Marvel''s Spider-Man 2' THEN 'Peter Parker i Miles Morales łączą siły w epickim starciu o losy Nowego Jorku. Przemierzaj miasto jako dwóch Spider-Manów, wykorzystuj nowe moce i gadżety, oraz staw czoła kultowemu złoczyńcy - Venomowi.'
  WHEN 'Alan Wake 2' THEN 'Zanurz się w mrocznym thrillerze psychologicznym, gdzie rzeczywistość miesza się z koszmarem. Jako pisarz Alan Wake i agentka FBI Saga Anderson, musisz rozwikłać tajemnicę serii rytualnych morderstw w małym miasteczku.'
  WHEN 'Starfield' THEN 'Wyrusz w epicką podróż przez kosmos w pierwszym nowym uniwersum Bethesdy od 25 lat. Eksploruj setki układów gwiezdnych, twórz własny statek kosmiczny, rekrutuj załogę i odkryj tajemnice wszechświata.'
  WHEN 'Lies of P' THEN 'Mroczna interpretacja klasycznej historii Pinokia w stylu souls-like. Jako mechaniczna marionetka P, musisz odnaleźć swojego twórcę w upadłym mieście Krat, gdzie szaleństwo i przemoc opanowały ulice.'
  WHEN 'Mortal Kombat 1' THEN 'Nowy rozdział w legendarnej serii walk. Odkryj odświeżony wszechświat Mortal Kombat stworzony przez Boga Ognia Liu Kanga, z nowymi wersjami znanych wojowników i jeszcze bardziej brutalnymi fatality.'
  WHEN 'Assassin''s Creed Mirage' THEN 'Powrót do korzeni serii w IX-wiecznym Bagdadzie. Jako młody złodziej Basim, zostań śmiercionośnym Asasynem i odkryj mroczne tajemnice Ukrytych w Złotym Wieku islamu.'
  WHEN 'Lords of the Fallen' THEN 'Epicka przygoda dark fantasy w rozległym, połączonym świecie. Jako jeden z mitycznych Mrocznych Krzyżowców, musisz powstrzymać boga demonów Adyra przed powrotem do świata żywych.'
  WHEN 'Dragon''s Dogma 2' THEN 'Długo wyczekiwana kontynuacja kultowego RPG akcji. Jako Zbudzony, stwórz własną przygodę w fantastycznym świecie, gdzie każda decyzja ma znaczenie, a epickie starcia z potworami wymagają strategii i zręczności.'
  WHEN 'Super Gra 1' THEN 'Epicka gra RPG z otwartym światem, gdzie Twoje wybory kształtują losy królestwa. Odkryj tajemnice starożytnych ruin, rozwijaj umiejętności swojej postaci i staw czoła legendarnym bestiom.'
  WHEN 'Super Gra 2' THEN 'Dynamiczna strzelanka FPS z zaawansowanym systemem walki. Dołącz do elitarnej jednostki specjalnej i wykonuj niebezpieczne misje w różnych zakątkach świata.'
  WHEN 'Mystic Quest' THEN 'Magiczna przygoda w świecie pełnym zagadek i tajemnic. Jako młody czarodziej, musisz odkryć sekrety starożytnej magii i powstrzymać nadciągającą ciemność.'
  WHEN 'Speed Racers' THEN 'Poczuj adrenalinę w najbardziej ekscytujących wyścigach arcade. Wybierz spośród dziesiątek licencjonowanych pojazdów i ścigaj się na spektakularnych trasach z całego świata.'
  WHEN 'Galaxy Wars' THEN 'Epickie MMO science fiction, gdzie możesz zostać kapitanem własnego statku kosmicznego. Eksploruj nieznane układy planetarne, handluj z obcymi rasami i walcz w kosmicznych bitwach.'
  WHEN 'Zombie Survival' THEN 'Survival horror z trybem kooperacji, gdzie musisz przetrwać w świecie opanowanym przez zombie. Zbieraj zasoby, buduj fortyfikacje i współpracuj z innymi ocalałymi.'
  WHEN 'Soccer Stars 2025' THEN 'Najbardziej realistyczny symulator piłki nożnej z oficjalnymi licencjami. Poprowadź swoją drużynę do zwycięstwa w najważniejszych rozgrywkach świata.'
  WHEN 'Farm Life' THEN 'Relaksująca gra o prowadzeniu własnego gospodarstwa. Uprawiaj rośliny, hoduj zwierzęta i rozwijaj swoją farmę w malowniczej dolinie.'
  WHEN 'Puzzle Master' THEN 'Wciągająca gra logiczna z setkami unikalnych łamigłówek. Rozwiązuj coraz trudniejsze zagadki i odkrywaj ukryte wzory w pięknej, minimalistycznej oprawie.'
  WHEN 'VR Battle Arena' THEN 'Intensywna strzelanka VR z dynamicznym systemem walki. Rywalizuj z innymi graczami w futurystycznych arenach wykorzystując zaawansowany arsenał broni.'
  ELSE description
END;