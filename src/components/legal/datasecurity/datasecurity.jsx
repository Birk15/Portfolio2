import React from "react";
import "./datasecurity.css";

const Datasecurity = () => {
  return (
    <div className="datasecurity">
      <h1>Datenschutzerklärung</h1>
      <div>
        <p>Verantwortlich für die Datenverarbeitung:</p>
        <p>
          [Dein Name/Deine Firma] <br />
          [Adresse] <br />
          [E-Mail-Adresse] <br />
          [Telefonnummer]
        </p>
      </div>

      <div>
        <b>1. Allgemeine Hinweise</b>
        <p>[Hier den Text aus der Vorlage einfügen]</p>
      </div>
      <div>
        <b>2. Verwendung von Google Fonts</b>
        <p>[Hier den Abschnitt zu Google Fonts einfügen]</p>
      </div>
      <div>
        <b>3. Hosting bei Netlify oder Vercel</b>
        <p>[Hier den Abschnitt zu Hosting einfügen]</p>
      </div>
      <div>
        <b>4. Rechte der betroffenen Personen</b>
        <p>[Hier den Abschnitt zu den Betroffenenrechten einfügen]</p>
      </div>
      <div>
        <b>5. Änderung dieser Datenschutzerklärung</b>
        <p>[Hier den Hinweis zur Änderung einfügen]</p>
      </div>

      <p>Stand: [Datum]</p>
    </div>
  );
};

export default Datasecurity;
