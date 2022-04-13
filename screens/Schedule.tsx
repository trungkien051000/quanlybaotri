import React from 'react';
import { Text } from 'react-native';

import { useTrans } from '@utils/hooks';

const Schedule: IScheduleScreen<IScheduleScreenProps> = () => {
    const trans = useTrans();

    return <Text>{trans.schedule.title}</Text>;
};

export default Schedule;
