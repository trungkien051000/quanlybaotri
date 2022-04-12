import React from 'react';
import { Text } from 'react-native';

import { useTrans } from '@utils/hooks';

const Home: IHomeScreen<IHomeScreenProps> = () => {
    const trans = useTrans();

    return <Text>{trans.home.title}</Text>;
};

export default Home;
