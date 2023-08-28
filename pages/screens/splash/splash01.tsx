import React, { useState } from 'react';
import * as S from './styles';
import Link from 'next/link';

import { Button } from '@src/components/Button';
import { Image } from '@src/components/Image';
import { Text } from '@src/components/Text';

import imageSplash01 from '@src/images/splash-01.png';

export default function Splash01() {
  return (
    <>
      <S.Container>
        <Image id="splash01" className="image" src={imageSplash01.src} alt="Primeira Imagem do Splash" />

        <Text as="h1" className="title" variant="heading1" color="black">
          Todos os Pokémons em um só Lugar
        </Text>

        <Text variant="body1" color="gray600">
          Acesse uma vasta lista de Pokémon de todas as gerações já feitas pela Nintendo
        </Text>

        <S.IconCarousel>
          <div className="active"></div>
          <div className="dot"></div>
        </S.IconCarousel>

        <Button>
          <Link href="/screens/splash/splash02">
            <Text variant="link1" color="white">
              Continuar
            </Text>
          </Link>
        </Button>
      </S.Container>
    </>
  );
}
