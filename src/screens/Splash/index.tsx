import React, { useRef, useState } from 'react';
import * as Styled from './styles';
import { Button } from '@src/components/Button';
import { Image } from '@src/components/Image';
import { Text } from '@src/components/Text';

import imageSplash01 from '@src/images/splash-01.png';
import imageSplash02 from '@src/images/splash-02.png';
import imageSplash03 from '@src/images/splash-03.png';

export default function Splash() {
  const [splashId, setSplashId] = useState(1);

  const handleClickNext = () => {
    setSplashId(splashId + 1);
  };

  const handleClickLogin = () => {
    console.log('Login');
  };

  return (
    <>
      <Styled.Container id={1} splashId={splashId}>
        <Image className="imageSplash" src={imageSplash01.src} alt="Primeira Imagem do Splash" width="21.875" />

        <Text as="h1" className="titleSplash" variant="heading1" color="black">
          Todos os Pokémons em um só Lugar
        </Text>

        <Text variant="body1" color="gray600">
          Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela Nintendo
        </Text>

        <Styled.IconCarousel>
          <div className="active"></div>
          <div className="dot"></div>
        </Styled.IconCarousel>

        <Button onClick={handleClickNext}>
          <Text variant="link1" color="white">
            Continuar
          </Text>
        </Button>
      </Styled.Container>

      <Styled.Container id={2} splashId={splashId}>
        <Image className="imageSplash" src={imageSplash02.src} alt="Primeira Imagem do Splash" width="21.875" />

        <Text as="h1" className="titleSplash" variant="heading1" color="black">
          Mantenha sua Pokédex atualizada
        </Text>

        <Text variant="body1" color="gray600">
          Cadastre-se e mantenha seu perfil, pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo
          sem conexão com a internet.
        </Text>

        <Styled.IconCarousel>
          <div className="dot"></div>
          <div className="active"></div>
        </Styled.IconCarousel>

        <Button onClick={handleClickNext}>
          <Text variant="link1" color="white">
            Vamos começar!
          </Text>
        </Button>
      </Styled.Container>

      <Styled.Container id={3} splashId={splashId}>
        <Image className="imageSplash" src={imageSplash03.src} alt="Primeira Imagem do Splash" width="21.875" />

        <Text as="h1" className="titleSplash" variant="heading1" color="black">
          Está pronto para essa aventura?
        </Text>

        <Text variant="body1" color="gray600">
          Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!
        </Text>

        <Button className="buttonSplash" onClick={handleClickLogin}>
          <Text variant="link1" color="white">
            Vamos começar!
          </Text>
        </Button>

        <Text variant="link1" color="primary">
          Ja tenho uma conta
        </Text>
      </Styled.Container>
    </>
  );
}
