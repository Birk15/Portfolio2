import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./offers.css";
import Haircut from "../../assets/Haarschnitt.jpg";
import Beard from "../../assets/Bart.jpg";

const Offers = () => {
  const [showDesc, setShowDesc] = useState({});
  const offers = [
    {
      id: 0,
      title: "Haare schneiden",
      desc: "Wir haben unzählige gut ausgebildete Friseure, die deine Frisur definitiv auf ein neues Level bringen.",
      img: Haircut,
    },
    {
      id: 1,
      title: "Bart schneiden",
      desc: "Unsere professionellen Friseure sorgen dafür, dass dein Bart perfekt in Form gebracht wird – von klassisch bis modern.",
      img: Beard,
    },
    {
      id: 2,
      title: "Haare färben",
      desc: "Mit unseren Farbtechniken verleihen wir deinem Haar aufregende Nuancen und frische Akzente, ganz nach deinem Stil.",
      img: Haircut,
    },
    {
      id: 3,
      title: "Hochsteckfrisuren",
      desc: "Ob für besondere Anlässe oder den Alltag – wir kreieren elegante Hochsteckfrisuren, die alle Blicke auf sich ziehen.",
      img: Haircut,
    },
    {
      id: 4,
      title: "Haare schneiden",
      desc: "Wir haben unzählige gut ausgebildete Friseure, die deine Frisur definitiv auf ein neues Level bringen.",
      img: Haircut,
    },
    {
      id: 5,
      title: "Bart schneiden",
      desc: "Unsere professionellen Friseure sorgen dafür, dass dein Bart perfekt in Form gebracht wird – von klassisch bis modern.",
      img: Beard,
    },
    {
      id: 6,
      title: "Haare färben",
      desc: "Mit unseren Farbtechniken verleihen wir deinem Haar aufregende Nuancen und frische Akzente, ganz nach deinem Stil.",
      img: Haircut,
    },
    {
      id: 7,
      title: "Hochsteckfrisuren",
      desc: "Ob für besondere Anlässe oder den Alltag – wir kreieren elegante Hochsteckfrisuren, die alle Blicke auf sich ziehen.",
      img: Haircut,
    },
  ];
  const handleDesc = (id) => {
    setShowDesc((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <Container className="offers">
      <h1 className="fontstyle">Offers</h1>
      <Row>
        {offers.map((offer) => (
          <Col key={offer.id}>
            <Card style={{ marginBottom: 50, minWidth: 300, height: 400 }}>
              <Card.Img
                className="img"
                variant="top"
                src={offer.img}
                alt={Offers.title}
              />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                {showDesc[offer.id] && <Card.Text>{offer.desc}</Card.Text>}
                <Button onClick={() => handleDesc(offer.id)} variant="primary">
                  Mehr erfahren
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
