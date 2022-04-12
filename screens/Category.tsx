import React from 'react';
import { Text } from 'react-native';

import { useTrans } from '@utils/hooks';

const Category: ICategoryScreen<ICategoryScreenProps> = () => {
    const trans = useTrans();

    return <Text>{trans.category.title}</Text>;
};

export default Category;
