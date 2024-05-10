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
    <div className="items-center p-6 border-2 border-white rounded-md" onClick={openModal}>
        <Image
          src={imagePath}
          width={264}
          height={60}
          alt="flag"
          className="size-3/5 cursor-pointer"
        />
      <div className="flex flex-col gap-4">
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
