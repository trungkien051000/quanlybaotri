import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Category, Home } from '@screens/index';
import { routes } from '@utils/constants';
import { useTrans } from '@utils/hooks';
import React from 'react';

const RootApp = createBottomTabNavigator();
const RouteApp: IRouteAppComponent<IRouteAppComponentProps> = ({ startScreen }) => {
    const trans = useTrans();

    return (
        <RootApp.Navigator initialRouteName={startScreen}>
            <RootApp.Screen name={routes.CLIENT.HOME} component={Home} />
            <RootApp.Screen name={routes.CLIENT.CATEGORY} component={Category} />
        </RootApp.Navigator>
    );
};

export default RouteApp;
