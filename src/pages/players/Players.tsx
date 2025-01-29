import React from "react";
import "./styles.css";
import CardGrid from "../../components/cardPlayers/cardPlayers";
import adrianCaffesse from "../../assets/img/players/Ficha Adrian Caffesse.jpg"
import adrianOvejero from "../../assets/img/players/Ficha Adrian Ovejero.jpg"
import adrielDelgado from "../../assets/img/players/Ficha Adriel Delgado.jpg"
import alcideVallejos from "../../assets/img/players/Ficha Alcides Vallejos.jpg"
import andresPicca from "../../assets/img/players/Ficha Andres Picca.jpg"
import angelMoreita from "../../assets/img/players/Ficha Angel Moreira.jpg"
import arielRamos from "../../assets/img/players/Ficha Ariel ramos.jpg"
import braianLujan from "../../assets/img/players/Ficha Braian Lujan.jpg"
import braianPogonza from "../../assets/img/players/Ficha Braian Pogonza.jpg"
import carlosMoreno from "../../assets/img/players/Ficha Carlos Moreno.jpg"
import carlosRicce from "../../assets/img/players/Ficha Carlos Ricce.jpg"
import cristianAguirre from "../../assets/img/players/Ficha Cristian Aguirre.jpg"
import danielMorales from "../../assets/img/players/Ficha Daniel Morales.jpg";
import javierGuglialmelli from "../../assets/img/players/Ficha Javier Guglialmelli.jpg";
import joaquinBaum from "../../assets/img/players/Ficha Joaquin Baum.jpg";
import jonatanCelestino from "../../assets/img/players/Ficha Jonatan Celestino.jpg";
import joseProfeta from "../../assets/img/players/Ficha Jose Profeta.jpg";
import juanCruzCheiro from "../../assets/img/players/Ficha Juan Cruz Cheiro.jpg";
import juanManuelSantucho from "../../assets/img/players/Ficha Juan Manuel Santucho.jpg";
import julioAguilar from "../../assets/img/players/Ficha Julio Aguilar.jpg";
import leandroRiartes from "../../assets/img/players/Ficha Leandro Riartes.jpg";
import lucasCordoba from "../../assets/img/players/Ficha Lucas Cordoba.jpg";
import lucasCuello from "../../assets/img/players/Ficha Lucas Cuello.jpg";
import lucianoViva from "../../assets/img/players/Ficha Luciano Viva.jpg";
import marceloYbanez from "../../assets/img/players/Ficha Marcelo Ybañez.jpg";
import marcosDiaz from "../../assets/img/players/Ficha Marcos Diaz.jpg";
import matiasOrtiz from "../../assets/img/players/Ficha Matias Ortiz.jpg";
import nahuelAmado from "../../assets/img/players/Ficha Nahuel Amado.jpg";
import nicolasDiorio from "../../assets/img/players/Ficha Nicolas Diorio.jpg";
import nicolasJofre from "../../assets/img/players/Ficha Nicolas Jofre.jpg";
import pabloBarreto from "../../assets/img/players/Ficha Pablo Barreto.jpg";
import pabloZubiria from "../../assets/img/players/Ficha Pablo Zubiria.jpg";
import pauloDominguez from "../../assets/img/players/Ficha Paulo Dominguez.jpg";
import ricardoSarmentero from "../../assets/img/players/Ficha Ricardo Sarmentero.jpg";
import robertoBruzzo from "../../assets/img/players/Ficha Roberto Bruzzo.jpg";
import rodrigoMolina from "../../assets/img/players/Ficha Rodrigo Molina.jpg";
import rodrigoVargas from "../../assets/img/players/Ficha Rodrigo Vargas.jpg";
import santiagoGutierrez from "../../assets/img/players/Ficha Santiago Gutierrez.jpg";
import sebastianKubransky from "../../assets/img/players/Ficha Sebastian Kubransky.jpg";
import sebastianVila from "../../assets/img/players/Ficha Sebastian Vila.jpg";
import sergioBrazao from "../../assets/img/players/Ficha Sergio Brazao.jpg";
import tomasDominguez from "../../assets/img/players/Ficha Tomas Dominguez.jpg";
import tomasLayes from "../../assets/img/players/Ficha Tomas Layes.jpg";
import valentinEscalante from "../../assets/img/players/Ficha Valentin Escalante.jpg";
import walterBartoli from "../../assets/img/players/Ficha Walter Bartoli.jpg";
import walterVilte from "../../assets/img/players/Ficha Walter Vilte.jpg";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/Nav";

 const players = [
    { image: adrianCaffesse, name: "Adrian Caffesse", category: "C8", position: 'REVES'  },
    { image: adrianOvejero, name: "Adrian Ovejero", category: "C6", position: 'REVES' },
    { image: adrielDelgado, name: "Adriel Delgado", category: "C7", position: 'REVES' },
    { image: alcideVallejos, name: "Alcides Vallejos", category: "C6", position: 'DRIVE' },
    { image: andresPicca, name: "Andres Picca", category: "C7", position: 'DRIVE' },
    { image: angelMoreita, name: "Angel Moreita", category: "C8", position: 'REVES'  },
    { image: arielRamos, name: "Ariel Ramos", category: "C8" , position: 'REVES'},
    { image: braianLujan, name: "Braian Lujan", category: "C7", position: 'DRIVE' },
    { image: braianPogonza, name: "Braian Pogonza", category: "C6", position: 'DRIVE' },
    { image: carlosMoreno, name: "Carlos Moreno", category: "C7" , position: 'REVES' },
    { image: carlosRicce, name: "Carlos Ricce", category: "C7" , position: 'REVES' },
    { image: cristianAguirre, name: "Cristian Aguirre", category: "C6", position: 'DRIVE' },
    { image: danielMorales, name: "Daniel Morales" ,category: "C8", position: 'REVES'},
    { image: javierGuglialmelli, name: "Javier Guglialmelli" ,category: "C6", position: 'DRIVE'},
    { image: joaquinBaum, name: "Joaquin Baum" ,category: "C6", position: 'REVES'},
    { image: jonatanCelestino, name: "Jonatan Celestino" ,category: "C5", position: 'REVES'},
    { image: joseProfeta, name: "Jose Profeta" ,category: "C7", position: 'REVES'},
    { image: juanCruzCheiro, name: "Juan Cruz Cheiro" ,category: "C8", position: 'DRIVE'},
    { image: juanManuelSantucho, name: "Juan Manuel Santucho" ,category: "C7", position: 'DRIVE'},
    { image: julioAguilar, name: "Julio Aguilar" ,category: "C8", position: 'DRIVE'},
    { image: leandroRiartes, name: "Leandro Riartes" ,category: "C6", position: 'DRIVE'},
    { image: lucasCordoba, name: "Lucas Cordoba" ,category: "C7", position: 'DRIVE'},
    { image: lucasCuello, name: "Lucas Cuello" ,category: "C7", position: 'REVES'},
    { image: lucianoViva, name: "Luciano Viva" ,category: "C7", position: 'DRIVE'},
    { image: marceloYbanez, name: "Marcelo Ybañez" ,category: "C8", position: 'DRIVE'},
    { image: marcosDiaz, name: "Marcos Diaz" ,category: "C7", position: 'REVES'},
    { image: matiasOrtiz, name: "Matias Ortiz" ,category: "C8", position: 'DRIVE'},
    { image: nahuelAmado, name: "Nahuel Amado" ,category: "C7", position: 'REVES'},
    { image: nicolasDiorio, name: "Nicolas Diorio" ,category: "C8", position: 'DRIVE'},
    { image: nicolasJofre, name: "Nicolas Jofre" ,category: "C7", position: 'DRIVE'},
    { image: pabloBarreto, name: "Pablo Barreto" ,category: "C7", position: 'REVES'},
    { image: pabloZubiria, name: "Pablo Zubiria" ,category: "C8", position: 'DRIVE'},
    { image: pauloDominguez, name: "Paulo Dominguez" ,category: "C8", position: 'REVES'},
    { image: ricardoSarmentero, name: "Ricardo Sarmentero" ,category: "C7", position: 'DRIVE'},
    { image: robertoBruzzo, name: "Roberto Bruzzo" ,category: "C7", position: 'DRIVE'},
    { image: rodrigoMolina, name: "Rodrigo Molina" ,category: "C7", position: 'REVES'},
    { image: rodrigoVargas, name: "Rodrigo Vargas" ,category: "C8", position: 'REVES'},
    { image: santiagoGutierrez, name: "Santiago Gutierrez" ,category: "C6", position: 'REVES'},
    { image: sebastianKubransky, name: "Sebastian Kubransky" ,category: "C7", position: 'DRIVE'},
    { image: sebastianVila, name: "Sebastian Vila" ,category: "C6", position: 'REVES'},
    { image: sergioBrazao, name: "Sergio Brazao" ,category: "C8", position: 'DRIVE'},
    { image: tomasDominguez, name: "Tomas Dominguez" ,category: "C8", position: 'DRIVE'},
    { image: tomasLayes, name: "Tomas Layes" ,category: "C8", position: 'DRIVE'},
    { image: valentinEscalante, name: "Valentin Escalante" ,category: "C6", position: 'REVES'},
    { image: walterBartoli, name: "Walter Bartoli" ,category: "C7", position: 'REVES'},
    { image: walterVilte, name: "Walter Vilte" ,category: "C7", position: 'DRIVE'},
  ];



const Players = () => {

  return (
    <div>
      <Navbar toggle={false}/>
      <section className="container mt-4" data-aos="fade-up">
        <div className="section-title">
          <h2>Jugadores</h2>
        </div>   
        <CardGrid players={players} />;
      </section>
    </div>
  );
};

export default Players;
