import React from 'react';
import * as S from './styles';
import Link from 'next/link';

import { Button } from '@src/components/Button';
import { Image } from '@src/components/Image';
import { Text } from '@src/components/Text';

import imageSplash02 from '@src/images/splash-02.png';
import arrow from '@src/images/arrow-splash.png';

export default function Splash02() {
  return (
    <>
      <S.Container>
        <div className="arrow flex space-between">
          <Link href="/screens/splash/splash01" className="flex center">
            <Image className="rotate" src={arrow.src} alt="Pular" />
            <Text variant="body2" color="black">
              Voltar
            </Text>
          </Link>
        </div>
        <Image className="image" src={imageSplash02.src} alt="Primeira Imagem do Splash" />

        <Text as="h1" className="title" variant="heading1" color="black">
          Mantenha sua Pokédex atualizada
        </Text>

        <Text variant="body1" color="gray600">
          Cadastre-se e mantenha seu perfil, pokémon favoritos, configurações e muito mais, salvos no aplicativo, mesmo
          sem conexão com a internet.
        </Text>

        <S.IconCarousel>
          <div className="dot"></div>
          <div className="active"></div>
        </S.IconCarousel>

        <Button>
          <Link href="/screens/splash/splash03">
            <Text variant="link1" color="white">
              Vamos começar!
            </Text>
          </Link>
        </Button>
      </S.Container>
    </>
  );
}
