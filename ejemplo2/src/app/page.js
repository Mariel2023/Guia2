import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li className={styles.container__list} key={jugador.id}>
                <strong>{jugador.nombre}</strong>
                <p>
                  Altura: {jugador.Altura}m <br /> Peso: {jugador.Peso}Kg
                </p>
                {jugador.fotoUrl && (
                  <img
                    src={jugador.fotoUrl}
                    alt={`Foto de ${jugador.nombre}`}
                    className={styles.playerImage}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        {"id": 1, "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74Kg", "fotoUrl": "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd7411b5172177dea/6530e02e14e93ba2cb6c378c/GettyImages-1731720017_(1).jpg?auto=webp&format=pjpg&width=640&quality=60"},
        {"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74Kg", "fotoUrl": "https://s.hs-data.com/bilder/spieler/gross/600867.jpg?fallback=png"},
        {"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81Kg", "fotoUrl": "https://img2.rtve.es/i/?w=1600&i=1686041143239.jpg"}
      ],
    },
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla": [
        {"id": 1, "nombre": "Marc-André ter Stegen", "Altura": "1.75", "Peso": "74Kg", "fotoUrl": "https://s.hs-data.com/bilder/spieler/gross/150720.jpg?fallback=png"},
        {"id": 2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74Kg", "fotoUrl": "https://pbs.twimg.com/profile_images/1676673383688294407/ZCG2fM-H_400x400.jpg"},
        {"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81Kg", "fotoUrl": "https://www.fcbarcelonanoticias.com/uploads/s1/13/16/72/6/gavi-en-un-partido-con-el-barc-a-copy_4_641x361.jpeg"}
       
      ],
    },
   
  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
