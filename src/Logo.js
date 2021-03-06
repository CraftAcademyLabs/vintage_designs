import React from 'react';
import { Image } from '@chakra-ui/react';
import logo from './vintage_designs_rasterized.svg';

export const Logo = (props) => {
  return <Image src={logo} {...props} />;
};
