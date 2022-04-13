import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Navbar from '@components/layouts/Navbar';
import { Login, Home } from '@screens/index';

import { routes } from '@utils/constants';
import { useTrans } from '@utils/hooks';

const RootApp = createStackNavigator();
const RouteApp: IRouteAppComponent<IRouteAppComponentProps> = ({ startScreen }) => {
    const trans = useTrans();

    return (
        <RootApp.Navigator
            initialRouteName={startScreen}
            screenOptions={{
                cardStyleInterpolator: ({ current, layouts }) => {
                    return {
                        cardStyle: {
                            transform: [
                                {
                                    translateX: current.progress.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [layouts.screen.width, 0],
                                    }),
                                },
                            ],
                        },
                    };
                },
            }}
        >
            <RootApp.Screen
                name={routes.CLIENT.LOGIN}
                component={Login}
                options={{
                    header: (props) => (
                        <Navbar {...props} isShowStatus={true} isShowBack={false} isShowSetting={true} title={trans.home.title} />
                    ),
                }}
            />

            <RootApp.Screen
                name={routes.CLIENT.HOME}
                component={Home}
                options={{
                    header: (props) => (
                        <Navbar {...props} isShowStatus={true} isShowBack={false} isShowSetting={true} title={trans.home.title} />
                    ),
                }}
            />
        </RootApp.Navigator>
    );
};

export default RouteApp;
