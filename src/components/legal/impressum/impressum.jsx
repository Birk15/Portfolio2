import React from "react";
import "./impressum.css";

const Impressum = () => {
  return (
    <div className="impressum">
      <h1>Impressum</h1>
      <div className="content">
        <div className="text">
          <b>Angaben gemäß § 5 TMG:</b>
        </div>
        <div className="text">
          <p>[Name des Betreibers/Unternehmens]</p>
          <p>[Adresse]</p>
          <p>[Telefonnummer (optional)]</p>
          <p>[E-Mail-Adresse]</p>
        </div>
        <div className="text">
          <p>Vertreten durch:</p>
          <p>[Name der vertretungsberechtigten Person]</p>
        </div>
        <div className="text">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          </p>
          <p>[falls zutreffend]</p>
        </div>
        <div className="text">
          <p>Zuständige Aufsichtsbehörde:</p>
          <p>[falls zutreffend]</p>
        </div>
        <div className="text">
          <p>Verantwortlich für den Inhalt gemäß § 18 MStV:</p>
          <p>[Name, Anschrift]</p>
        </div>
        <div className="text">
          <p>Haftung für Inhalte:</p>
          <p>[Haftungsausschluss hier einfügen]</p>
        </div>
        <div className="text">
          <p>Haftung für Links:</p>
          <p>[Hinweis zu externen Links hier einfügen]</p>
        </div>
        <div className="text">
          <p>Streitschlichtung:</p>
          <p>
            [Optionale Angabe zur Teilnahme an einem Streitbeilegungsverfahren]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
