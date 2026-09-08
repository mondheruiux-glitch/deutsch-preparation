# 🇩🇪 A1 Deutsch Vorbereitung — Progress & Architecture Documentation

Comprehensive overview of the architecture, authentication workflows, study modules, and development progress for the **ÖSD / Goethe A1 Deutsch Prüfungsvorbereitung** web and mobile application.

---

## 📊 System Architecture & Component Graph

```mermaid
graph TD
    subgraph Client_Platform ["📱 Client Platforms"]
        Web["Web Application (Vite + React 19 + Tailwind CSS)"]
        Mobile["Mobile App (Capacitor: Android & iOS)"]
    end

    subgraph State_And_Routing ["🔄 Application Core"]
        Router["React Router v7"]
        AuthCtx["AuthContext (User, Session, Config Checks)"]
        Theme["UI Theme / Dark Mode / Responsive Engine"]
    end

    subgraph Study_Modules ["📚 Learning Modules"]
        Sprechen["🗣️ Sprechen (Speaking)<br/>• 24 Topics (0-23)<br/>• Bildbeschreibung<br/>• Musterantworten (Q&A)<br/>• Wortschatz"]
        Schreiben["✍️ Schreiben (Writing)<br/>• Email / Brief Tasks<br/>• A1 Model Answers (>30 Words)<br/>• Vocabulary & Tips"]
        Lesen["📖 Lesen (Reading)<br/>• Reading Comprehension<br/>• Practice Tests & Questions"]
    end

    subgraph Backend_Services ["☁️ Backend & External Integrations"]
        SupabaseAuth["Supabase Auth (fhgqinnfoothziltwivl)"]
        GoogleOAuth["Google Cloud Identity (OAuth 2.0 Web)"]
        PostgresDB["Supabase PostgreSQL Database & RLS"]
        CapBrowser["Capacitor In-App Browser (Deep Linking)"]
    end

    Web --> Router
    Mobile --> Router
    Router --> AuthCtx
    AuthCtx --> SupabaseAuth
    SupabaseAuth --> GoogleOAuth
    SupabaseAuth --> PostgresDB
    Mobile --> CapBrowser
    CapBrowser --> SupabaseAuth

    Router --> Sprechen
    Router --> Schreiben
    Router --> Lesen
```

---

## 🔐 Authentication Architecture & Flow (Web & Mobile)

```mermaid
sequenceDiagram
    autonumber
    actor User as 👤 Learner
    participant App as 🖥️ A1 Deutsch App
    participant AuthContext as 🛡️ AuthContext & supabase.ts
    participant Supabase as ⚡ Supabase Auth
    participant Google as 🌐 Google OAuth 2.0

    alt Google Sign-In Flow
        User->>App: Click "Mit Google anmelden"
        App->>AuthContext: signInWithOAuth('google')
        Note over AuthContext: Checks if anon key is valid<br/>Guards against sb_secret_ keys
        AuthContext->>Supabase: signInWithOAuth({ provider: 'google', redirectTo })
        Supabase->>Google: Redirect to OAuth Consent Screen
        User->>Google: Authorize Google Account
        Google->>Supabase: Callback with Auth Code
        Supabase->>App: Redirect to /auth/callback
        App->>Supabase: exchangeCodeForSession(code) / setSession()
        Supabase-->>App: Return User & Session
        App->>User: Logged In & Redirect to Home (/)
    else Email & Password Flow
        User->>App: Enter Email + Password (Login / Register)
        App->>AuthContext: signInWithPassword() / signUp()
        AuthContext->>Supabase: Authenticate Credentials
        Supabase-->>App: Session or Verification Email Sent
        App->>User: Confirmation Message / Dashboard Access
    end
```

---

## 🗂️ Sprechen Module (Speaking Topics 0 – 23)

```mermaid
graph LR
    subgraph Topics_Catalog ["🗣️ Sprechen Topics Catalog"]
        T0["0: Wortschatz Themen (Core Vocab)"]
        T13["13: Sich vorstellen"]
        T14["14: Buchhandlung"]
        T15["15: Schuhgeschäft"]
        T16["16: Autowerkstatt"]
        T17["17: Hotelrezeption"]
        T18["18: Arzt"]
        T19["19: Fernsehen"]
        T20["20: Reinigung"]
        T21["21: Umzug"]
        T22["22: Grillen im Garten"]
        T23["23: Im Restaurant (New)"]
        T_Rest["1-12: Classic Themes (Möbel, Kleidung, Reisen, Essen...)"]
    end

    subgraph Topic_Structure ["📋 Topic Structure"]
        BB["1. Bildbeschreibung (Easy A1 German)"]
        MA["2. Musterantworten (Was sehen Sie? Wo sind sie? etc.)"]
        VOC["3. Wortschatz (Nouns with Articles, Verbs)"]
    end

    T23 --> BB
    T23 --> MA
    T23 --> VOC
```

### Newest Added Topic: `23 - Im Restaurant — At the Restaurant`
- **Asset**: `topic23_restaurant.jpg`
- **Musterantwort**:
  - *Was sehen Sie?* 👉 Auf dem Bild sehe ich eine Kellnerin, zwei Gäste, eine Speisekarte, zwei Teller Salat und zwei Gläser Bier.
  - *Wie viele Personen sehen Sie?* 👉 Ich sehe drei Personen.
  - *Wo sind diese Personen?* 👉 Sie sind im Restaurant.
  - *Was machen diese Personen?* 👉 Ich glaube, die Gäste möchten etwas zu essen bestellen.
- **Wortschatz**: *das Restaurant, die Kellnerin, der Kellner, der Gast, die Speisekarte, der Salat, das Glas Bier, bestellen, bezahlen*.

---

## ✍️ Schreiben Module (Letter & Email Writing)

All model answers are tailored strictly for **ÖSD / Goethe A1**:
- **Grammar & Tone**: Direct, standard A1 phrasing, no complex subordinate clauses.
- **Length Constraint**: Strictly formulated with **≥ 30 words** to meet examination requirements while remaining easy to memorize.
- **Standard Layout**:
  - Salutation (*Liebe Anna,* / *Lieber Michael,*)
  - Body addressing all exam points with simple connectors (*und*, *oder*, *weil* when basic)
  - Closing (*Liebe Grüße,* / *Herzliche Grüße,*) + Name

---

## 🛠️ Key Bugfixes & Hardening Implemented

| Issue | Root Cause | Solution |
|---|---|---|
| `Forbidden use of secret API key in browser` | `sb_secret_...` was pasted into `.env` instead of `anon` key | Switched to valid Supabase JWT `anon` key; added safety guards in `src/lib/supabase.ts` |
| Google OAuth `redirect_uri_mismatch` (Error 400) | OAuth client configured as "Desktop app" with `http://localhost` | Created Web Application client with `https://fhgqinnfoothziltwivl.supabase.co/auth/v1/callback` |
| Safe Key Fallback & Developer DX | Fatal crash if secret key is present in client bundle | Added `isSecretKeyConfigured` detection and helpful warning banner in `LoginPage` and `SignupPage` |

---

## 📈 Milestones & Roadmap

```mermaid
gantt
    title A1 Deutsch App Development Roadmap
    dateFormat  YYYY-MM-DD
    section Core Features
    UI Design & Theme System        :done, des1, 2026-09-01, 2026-09-03
    Sprechen Topics 0-22            :done, des2, 2026-09-03, 2026-09-06
    Schreiben A1 Model Answers      :done, des3, 2026-09-05, 2026-09-07
    Restaurant Topic 23 Addition    :done, des4, 2026-09-08, 2026-09-08
    section Authentication & Cloud
    Supabase Integration           :done, auth1, 2026-09-07, 2026-09-08
    Secret Key Hardening            :done, auth2, 2026-09-08, 2026-09-08
    Google OAuth Web Client Config  :done, auth3, 2026-09-08, 2026-09-08
    section Mobile & Packaging
    Capacitor Setup (Android/iOS)   :done, mob1, 2026-09-05, 2026-09-07
    Mobile Deep-link OAuth Callback :done, mob2, 2026-09-07, 2026-09-08
    Play Store / APK Release Prep   :active, mob3, 2026-09-08, 2026-09-12
```
