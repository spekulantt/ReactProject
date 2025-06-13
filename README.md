

## ✨ Kľúčové funkcie

Aplikácia spĺňa a prekračuje všetky požiadavky pôvodného zadania:

* **Viacero obrazoviek:** Intuitívne rozhranie s viacerými stránkami (Domov, Kalendár, Pridanie poznámky, Detail, Profil, atď.).
* **Moderná navigácia:** Plynulé prechody medzi stránkami pomocou `react-router-dom`.
* **Správa stavu:** Aktívne využitie React hookov `useState` a `useEffect` na správu stavu a vedľajšie efekty.
* **Lokálne úložisko:** Ukladanie preferencií (napr. témy) a dát (meno v profile) do `localStorage`.
* **Databáza a CRUD:** Aplikácia je napojená na lokálnu databázu (`json-server`) a umožňuje všetky základné CRUD (Create, Read, Update, Delete) operácie s poznámkami.
* **Vlastná téma:** Elegantný dizajn s možnosťou prepínania medzi svetlou pastelovou a tmavou témou.

### Pokročilé funkcie navyše:

* **Interaktívny kalendár:** Prehľadné zobrazenie poznámok v kalendári s možnosťou pridávať poznámky na konkrétny deň.
* **Bohatý textový editor:** Použitie CKEditora na pokročilé formátovanie textu v poznámkach.
* **Užívateľský profil:** Možnosť nastaviť si meno a zobraziť základné štatistiky.
* **Externé API:** Stránka "Inšpirácia", ktorá načítava náhodné vtipy z verejného API.
* **Responzívny dizajn:** Aplikácia je navrhnutá tak, aby sa prispôsobila rôznym veľkostiam obrazovky.

---

## 🛠️ Použité technológie

* **React** (knižnica pre používateľské rozhrania)
* **Vite** (buildovací nástroj pre rýchly vývoj)
* **React Router** (pre navigáciu v aplikácii)
* **React Calendar** (pre komponent kalendára)
* **CKEditor 5** (pre rich text editor)
* **JSON Server** (pre simuláciu REST API a lokálnu databázu)
* **CSS Modules & Moderné CSS** (pre štýlovanie komponentov)

---

## 🚀 Ako spustiť projekt lokálne

Ak si chcete projekt vyskúšať, postupujte podľa týchto krokov:

1.  **Naklonujte si repozitár:**
    ```bash
    git clone [https://github.com/spekulantt/ReactProject.git](https://github.com/spekulantt/ReactProject.git)
    cd ReactProject
    ```

2.  **Nainštalujte závislosti:**
    ```bash
    npm install
    ```

3.  **Spustite databázový server:**
    * V jednom termináli spustite `json-server`.
    ```bash
    npx json-server --watch db.json --port 3001
    ```

4.  **Spustite vývojový server aplikácie:**
    * V druhom, novom termináli spustite React aplikáciu.
    ```bash
    npm run dev
    ```

5.  **Otvorte aplikáciu v prehliadači** na adrese `http://localhost:5173` (alebo na adrese, ktorú vám vypíše terminál).
