import styles from "./card.module.css";
import Image from "next/image";

export const Card = ({
  imagePath,
  country,
  population,
  region,
  capital,
  code,
  key,
  openModal,
}) => {
  return (
    <div className="bg-slate-600 flex flex-col items-center p-6 border-2 border-white rounded-md"> 
      <div>
          <div>
            <Image
              src={imagePath}
              width={264}
              height={60}
              alt="flag"
              className="size-ful cursor-pointer"
              onClick={openModal}
              />
          </div>
          <div className="flex flex-col justify-items-start gap-4">
            <h2 className={styles.h2}>{country}</h2>
            <div className={styles.info}>
              <p>
                <span>Population: </span>
                {population.toLocaleString("pt-BR")}
              </p>
              <p>
                <span>Region: </span>
                {region}
              </p>
              <p>
                <span>Capital: </span>
                {capital}
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};
