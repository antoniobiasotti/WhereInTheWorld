// essa página será renderizada do lado do cliente
"use client";
/*
3 formas de renderizar aplicações com Next: 
dinamica no server
estatico no server
direto no navegador
*/

import { useState, useEffect } from "react";

import { Card } from "@/app/components/Card/Card";
import { Modal } from "@/app/components/Modal/Modal";
import { Header } from "@/app/components/Header/Header";

export default function Home() {
  const [countries, setCountries] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);

  
  // Montar o objeto, passar o segundo parâmetro como vazio
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/country", { cache: "no-store" });
      const data = await response.json();
      setCountries(data);
    }
    fetchData();
  }, []);

  const openModal = (country) => { 
    setSelectedCountry(country); // "Avisa" a home qual o país selecionado pelo useState
  };

  const closeModal = () => {
    setSelectedCountry(null); // Limpa o país selecionado
  }

  return (
      <div>
        <Header/>
        <main className="mt-8 px-8 py-8 border-2 border-white">
          <div className="grid justify-center gap-14 grid-cols-3">
            {countries.map((country, index) => {
              return (
                <Card
                  imagePath={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  subregion={country.subregion}
                  capital={country.capital}
                  topleveldomain={country.topLevelDomain}
                  flag={country.flag}
                  code={country.code}
                  key={index}
                  openModal={() => openModal(country)} //callback function -> chama a openModal para setar o país clickado, ou seja, diferente de nulo
                />
                )
              })}
          </div>
          {selectedCountry && (
                <Modal
                  imagePath={selectedCountry.flag}
                  name={selectedCountry.name}
                  population={selectedCountry.population}
                  region={selectedCountry.region}
                  subregion={selectedCountry.subregion}
                  capital={selectedCountry.capital}
                  topleveldomain={selectedCountry.topLevelDomain}
                  flag={selectedCountry.flag}
                  code={selectedCountry.code}
                  closeModal={() => closeModal()}
                />
          )}  
        </main>
      </div>
  );
}
