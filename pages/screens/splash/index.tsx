import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';
import { Image } from '@src/components/Image';
import imageLogo from '@src/images/logo-pokedex.png';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/screens/splash/splash01');
    }, 1500);
  }, []);

  return (
    <>
      <S.Splash>
        <Image src={imageLogo.src} alt="Logo Pokédex" />
      </S.Splash>
    </>
  );
};

export default SplashScreen;
