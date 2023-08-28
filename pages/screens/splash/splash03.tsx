import React from 'react';
import * as Styled from './styles';
import Link from 'next/link';

import { Button } from '@src/components/Button';
import { Image } from '@src/components/Image';
import { Text } from '@src/components/Text';

import imageSplash03 from '@src/images/splash-03.png';
import arrow from '@src/images/arrow-splash.png';

export default function Splash03() {
  return (
    <>
      <Styled.Container>
        <div className="arrow flex space-between">
          <Link href="/screens/splash/splash02" className="flex center">
            <Image className="rotate" src={arrow.src} alt="Pular" />
            <Text variant="body2" color="black">
              Voltar
            </Text>
          </Link>

          <Link href="/screens/splash/splash01" className="flex center">
            <Text variant="body2" color="black">
              Pular
            </Text>
            <Image src={arrow.src} alt="Pular" />
          </Link>
        </div>

        <Image className="image" src={imageSplash03.src} alt="Primeira Imagem do Splash" />

        <Text as="h1" className="title" variant="heading1" color="black">
          Está pronto para essa aventura?
        </Text>

        <Text variant="body1" color="gray600">
          Basta criar uma conta e começar a explorar o mundo dos Pokémon hoje!
        </Text>

        <Button className="button">
          <Link href="/">
            <Text variant="link1" color="white">
              Vamos começar!
            </Text>
          </Link>
        </Button>

        <Link href="/">
          <Text variant="link1" color="primary">
            Ja tenho uma conta
          </Text>
        </Link>
      </Styled.Container>
    </>
  );
}
