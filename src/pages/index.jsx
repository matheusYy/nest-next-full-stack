import Image from 'next/image';
import { useEffect, useState } from 'react';

const fetchUser = async () => {
  const fetchUser = await fetch('/server/info');
  const json = await fetchUser.json();
  return {
    json: json,
    res: fetchUser.ok,
  };
};
const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchUser().then((res) => {
      setData(() => res.json);
    });
  }, [setData]);

  const AsideUser = (props) => {
    const { img, altImg, text } = props;

    return (
      <div>
        <Image src={img} alt={altImg} width={25} height={25} />
        <p>{text}</p>
      </div>
    );
  };

  return (
    <main>
      <aside>
        <AsideUser img={''} altImg={'texto'} text={'info User'} />
        <AsideUser
          img={''}
          altImg={'alguma coisaadfasjf'}
          text={'info alguma coisa'}
        />
      </aside>
      <div></div>
      <h1>seu nome: {data ? data.name : null}</h1>
    </main>
  );
};

export default Home;
