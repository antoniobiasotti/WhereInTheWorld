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
    <div className="flex flex-col border-2 border-white" onClick={openModal}>
        <Image
          src={imagePath}
          width={264}
          height={60}
          alt="flag"
          className="cursor-pointer"
        />
      <div className={styles.text}>
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
  );
};
