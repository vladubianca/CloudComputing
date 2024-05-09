# Realizarea unei aplicatii web pentru pasionații de Formula 1 utilizând servicii cloud

### Vladu Bianca-Florentina
### Grupa 1133
link video - prezentare proiect: https://youtu.be/tBsxOiDS5fk

link publicare: https://cloud-computing-five.vercel.app/

## Introducere

În acest proiect am dezvoltat o aplicație web dedicată pasionaților de Formula 1 care oferă detalii despre curse incluzând locația, data, pilotul și echipa câștigătoare și opinii personale. Prin intermediul tehnologiilor moderne și a serviciilor cloud, am creat o experiență interactivă și personalizată pentru utilizatori. Baza de date MongoDB asigură stocarea și gestionarea eficientă a informațiilor despre curse, în timp ce Vercel furnizează un mediu de găzduire fiabil și scalabil pentru aplicația noastră web. Integrarea cu OpenAI ne permite să oferim un chatbot avansat, alimentat de tehnologii AI, pentru a răspunde întrebărilor utilizatorilor și a le oferi o experiență de interacțiune reală și captivantă.

Această aplicație reprezintă mai mult decât un simplu instrument informativ pentru entuziaștii de Formula 1; este o platformă interactivă și participativă ce integrează aspecte ale comunității virtuale și ale tehnologiilor cloud pentru a oferi o experiență completă și personalizată utilizatorilor săi.
Prin intermediul funcționalităților de adăugare, editare și ștergere a informațiilor despre curse, utilizatorii devin parte activă a ecosistemului aplicației, contribuind la dezvoltarea și îmbogățirea conținutului. Această abordare participativă încurajează interacțiunea și implicarea utilizatorilor, consolidând comunitatea și creând o bază de cunoștințe dinamică și actualizată în timp real.


## Descrierea aplicației

Proiectul realizat constă într-o aplicație web destinată fanilor de Formula 1, oferindu-le acces la detalii esențiale despre cursele Grand Prix. Utilizatorii pot explora o varietate de informații, inclusiv date despre locația circuitului, data evenimentului, câștigătorul cursei și echipa acestuia și o opinie personală asupra cursei.

Un aspect distinctiv al aplicației îl reprezintă interactivitatea oferită prin posibilitatea utilizatorilor de a adăuga, edita și șterge cursele și detaliile acestora. Această funcționalitate le permite utilizatorilor să contribuie la extinderea și actualizarea bazei de date a aplicației, asigurându-se că informațiile sunt mereu relevante și la zi. În plus, integrarea unui chatbot GPT aduce o dimensiune suplimentară de interactivitate și angajament. Utilizatorii pot interacționa cu chatbot-ul pentru a obține răspunsuri la întrebări legate de Formula 1 sau alte subiecte.
Utilizând serviciile de cloud, precum MongoDB pentru baza de date, OpenAI pentru chatbot și Vercel pentru hosting, aplicația beneficiază de următoarele avantaje:

**Scalabilitate**

Serviciile de cloud permit aplicației să crească și să se adapteze la cerințele în continuă schimbare, fără să fie necesară o investiție suplimentară în infrastructură.

**Ușurința de administrare**

Administrarea și întreținerea infrastructurii sunt gestionate de furnizorii de servicii cloud, astfel încât dezvoltatorul se poate concentra mai mult pe implementarea și îmbunătățirea aplicației.

**Fiabilitate**

Serviciile de cloud oferă o disponibilitate ridicată și o redundanță integrată, asigurând că aplicația este întotdeauna disponibilă pentru utilizatori.

**Accesibilitate globală**

Prin intermediul serviciilor de cloud, aplicația poate fi accesată și utilizată de către utilizatori din întreaga lume, asigurându-le o experiență fluidă și fără întreruperi.

**Flexibilitate**

Utilizând serviciile de cloud, pot fi integrate ușor noi tehnologii și servicii în aplicație, extinzându-i funcționalitățile și oferind utilizatorilor o experiență îmbunătățită.


## Descriere API 

Cu ajutorul framework-ului de Next.js am creat un API simplu folosind framework-ul care permite crearea rapidă a unor endpoint-uri pentru a efectua operațiuni CRUD (Create, Read, Update, Delete) pe o colecție de înregistrări (records). 

API-urile sunt punctele de acces din aplicație care permit comunicarea și interacțiunea cu resursele și datele. API-urile sunt folosite pentru a gestiona o colecție de înregistrări legate de cursele Grand Prix de Formula 1. Acestea sunt responsabile pentru preluarea și procesarea cererilor HTTP primite de la client și pentru a returna răspunsuri corespunzătoare.

**Operații CRUD**

**GET**: __path/api/records__ si __path/api/records?id=”object_id”__

Metoda GET este folosită pentru a obține datele existente din colecția de înregistrări. Poate fi folosită pentru a obține o singură înregistrare sau o listă întreagă de înregistrări, în funcție de necesitățile aplicației.

**POST**: __path/api/records__

Metoda POST este folosită pentru a adăuga o nouă înregistrare în colecția de înregistrări. Prin trimiterea unei cereri POST cu datele pentru o nouă înregistrare, aceasta este adăugată în baza de date.

**PUT**: __path/api/records__

Metoda PUT este folosită pentru a actualiza o înregistrare existentă în colecția de înregistrări. Prin trimiterea unei cereri PUT cu datele actualizate pentru o anumită înregistrare, aceasta este actualizată în baza de date.

**DELETE**: __path/api/records?id=”object_id”__
Metoda DELETE este folosită pentru a șterge o înregistrare existentă din colecția de înregistrări. Prin trimiterea unei cereri DELETE cu id-ul înregistrării care trebuie ștearsă, aceasta este eliminată din baza de date.

## Tehnologiile utilizate

**MongoDB Cloud Services**

MongoDB este o bază de date NoSQL care oferă o structură flexibilă pentru stocarea și gestionarea datelor. MongoDB Cloud Services sunt soluții de găzduire și gestionare a bazelor de date MongoDB în cloud. Aceste servicii oferă o serie de avantaje, inclusiv scalabilitate automată, backup-uri automate și securitate îmbunătățită. Utilizarea MongoDB Cloud Services mi-a permis să mă concentrez pe dezvoltarea aplicației, fără să-mi fac griji în privința administrării și întreținerii bazei de date.

**Vercel**

Vercel este o platformă de găzduire și livrare a aplicațiilor web și a site-urilor statice. Aceasta oferă un mediu de dezvoltare rapidă și scalabilă, permițându-mi publicarea și distribuirea aplicațiilor web într-un mod simplu și eficient. Vercel oferă funcții avansate precum actualizări atomice și scalabilitate automată, asigurând o experiență fluidă pentru utilizatori. Prin intermediul Vercel, poți beneficia de o infrastructură fiabilă și performantă pentru aplicațiile dezvoltate, indiferent de mărimea sau complexitatea acesteia.

**ChatGPT ChatBot**

ChatGPT este un chatbot bazat pe inteligență artificială dezvoltat de OpenAI. El utilizează un model de limbaj generativ pentru a genera răspunsuri inteligente și contextuale la întrebările utilizatorilor. ChatGPT poate fi integrat în diverse aplicații și platforme, oferind o experiență de conversație naturală și interactivă. 

Prin intermediul ChatGPT, utilizatorii pot pune întrebări despre Formula 1 sau alte subiecte și pot primi răspunsuri relevante și utile. Integrarea ChatGPT în aplicație adaugă o dimensiune de interactivitate și angajament, îmbunătățind experiența utilizatorului și oferind o modalitate eficientă de comunicare.

## Fluxul de date 

Stocarea datelor se face în baza de date MongoDB sub formă de documente, structuri de date asemănătoare unui JSON.
{
            "_id": "663cda3ab5cc36a725060fe0",
            "grand_prix": "Bahrain",
            "date": "02 Mar 2024",
            "winner": "Max Verstappen",
            "team": "Red Bull Racing",
            "opinion": "The atmosphere was electric, and the race had me hooked from the first corner."
}


Pentru metoda GET se va face un request pe ruta path/api/records si se va primi ca response întreaga colecție de date. Această acțiune poate fi simulată și din Postman.
 
Pentru metoda POST se va trimite un request la aceeași rută, cu un body care conține datele despre cursă, fără id, deoarece acesta se generează automat de baza de date, și se va primi următorul response:
 


Pentru metoda UPDATE se trimite un request cu datele actualizate despre cursă și id-ul curent al acesteia și primește următorul response:
 
Pentru metoda DELETE se adaugă la ruta folosită și un query parameter cu id-ul cursei care va fi ștearsă și se primește următorul response:
 



## Capturi de ecran din aplicație 

Pagina principala: afisarea informatiilor despre curse cu butoanele de Update si Delete; navigarea catre formularul de adaugare cursa si pagina de chatbot prin intermediul butoanelor

Formularul de adaugare cursă
 
Formularul de editare detalii cursă – este același ca și formularul de creare, doar că datele existente sunt precompletate
 
Pagina de conversație cu chatbot-ul
 


## Referințe

1. https://aws.amazon.com/what-is/restful-api/
2. https://www.freecodecamp.org/news/crud-operations-explained/
3. https://www.javatpoint.com/advantages-and-disadvantages-of-cloud-computing
4. https://www.mongodb.com/products/platform/cloud?utm_content=controldbaasterms&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_emea-ro_ps-all_desktop_eng_lead&utm_term=cloud%20mongo&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624554&adgroup=115749711263&cq_cmp=12212624554&gad_source=1&gclid=Cj0KCQjw6PGxBhCVARIsAIumnWbdui0emDmmXhptsPAgN0ZyYRESbwnJ44mKEBtcdKcd30YELVWvHksaAqPREALw_wcB
5. https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy
6. https://openai.com/





