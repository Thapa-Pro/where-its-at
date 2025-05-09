# Sammanfattning för README.md 
 jag implementerat följande externa bibliotek som inte har gåtts igenom under lektionerna, förutom Zustand. Jag valde dessa bibliotek för att de passar bra för projektets behov och är enkla att använda.  

---

##  Valda Bibliotek

###  1. Zustand (Global tillståndshantering)  
**Varför valde jag detta?**  
-  Zustand är enkelt att använda för att hantera global state.  
-  Kräver lite kod och är lätt att förstå.  
-  Bra för små till medelstora applikationer.  

**Användning i projektet:**  
- Hantera varukorgens innehåll.  
- Hålla koll på valt evenemang.  
- Dela data mellan flera sidor och komponenter.  

---

###  2. UUID (Unika biljettnummer)  
**Varför valde jag detta?**  
-  UUID är ett pålitligt sätt att generera unika ID.  
-  Perfekt för att skapa biljettnummer i projektet.  
-  Enkel att implementera och fungerar bra med React.  

**Användning i projektet:**  
- Generera unika ID för biljetter (stora bokstäver och siffror).  
- Kombinerat med egen logik för att få 5 tecken.  

---

###  3. Framer Motion (Animationer)  
**Varför valde jag detta?**  
-  Ger smidiga och snygga animationer.  
-  Gör applikationen mer interaktiv och användarvänlig.  
-  Lätt att implementera med React-komponenter.  

**Användning i projektet:**  
- Animera bekräftelsesidan (t.ex. fade/slide in).  
- Skapa snygga övergångar mellan sidor.
  
---


###  4. React Confetti (Firar biljettköp)
**Varför valde jag detta?** 

- React Confetti används för att skapa en visuell konfettieffekt.

- Gör applikationen mer rolig och engagerande.

- Perfekt för att fira ett lyckat biljettköp.

**Användning i projektet:**

- Visa konfetti när en biljett har köpts.

- Skapar en positiv upplevelse för användaren.

---

### 5. React Icons (Ikoner för UX)
**Varför valde jag detta?** 

- React Icons innehåller många användbara ikoner i olika stilar.

- Lätt att integrera i ett React-projekt.

- Förbättrar användarupplevelsen med visuella hjälpmedel.

**Användning i projektet:**

Visa ikon för "tom varukorg" när inga biljetter har köpts.

Förbättrar gränssnittets tydlighet och gör det mer intuitivt.

---

### 6. JsBarcode (Streckkodsgenerering)
**Varför valde jag detta?** 

- JsBarcode är ett bibliotek som enkelt genererar streckkoder i webbläsaren.

- Gör det möjligt att skapa professionella biljetter med streckkoder.

- Snabbt och lätt att integrera i React-projekt.

**Användning i projektet:**

- Generera streckkoder för biljetterna.

- Gör biljetterna mer realistiska och användbara.
