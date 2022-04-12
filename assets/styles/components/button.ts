import { StyleSheet } from 'react-native';

import { themes } from '@utils/constants';

const button = StyleSheet.create({
    button_container: {
        paddingVertical: 15,
        borderRadius: 36,
        backgroundColor: themes.COLOR.BUTTON,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_disabled: {
        opacity: 0.5,
    },
});

export default button;
