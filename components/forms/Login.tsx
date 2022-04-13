import { common, flexbox, login, spacing } from '@assets/styles';
import Button from '@components/commons/Button';
import Input from '@components/commons/Input';
import Validator from '@components/commons/Validator';
import { images, routes } from '@utils/constants';
import { validateHelper } from '@utils/helpers';
import { useTrans } from '@utils/hooks';
import React, { createRef, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
    ...common,
    ...flexbox,
    ...spacing,
    ...login,
});
const LoginForm: ILoginFormComponent<ILoginFormComponentProps> = (props) => {
    const { navigation } = props;
    const trans = useTrans();

    const [state, setState] = useState<ILoginFormComponentState>({
        username: '',
        password: '',
    });
    const { username, password } = state;
    const usernameValidatorRef = createRef<IValidatorComponentHandle>();
    const passwordValidatorRef = createRef<IValidatorComponentHandle>();

    const navigationSchedule = () => {
        let isValidate = true;
        if (username === '') {
            usernameValidatorRef.current?.onValidateMessage(trans.login.err_inputUsername);
            isValidate = false;
        } else if (!validateHelper.isUser(username)) {
            usernameValidatorRef.current?.onValidateMessage(trans.login.err_formatUsername);
            isValidate = false;
        } else {
            usernameValidatorRef.current?.onValidateMessage('');
        }

        if (!password) {
            passwordValidatorRef.current?.onValidateMessage(trans.login.err_inputPassword);
            isValidate = false;
        } else if (!validateHelper.isPassword(password)) {
            passwordValidatorRef.current?.onValidateMessage(trans.login.err_formattPassword);
            isValidate = false;
        } else {
            passwordValidatorRef.current?.onValidateMessage('');
        }
        if (isValidate) {
            navigation?.navigate(routes.CLIENT.SCHEDULE);
        }
    };

    const handleChangeData = (field: string, value: string | number | boolean) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    return (
        <View style={[styles.dFlex1, styles.background_white, styles.border_Radius10, styles.padding10]}>
            <KeyboardAwareScrollView>
                <View style={[styles.dFlex4, styles.marginVertical15]}>
                    <View style={[styles.dFlex1, styles.justifyCenter, styles.alignItemsCenter, styles.margin15]}>
                        <Text style={[styles.font_size_30, styles.font_weight_bold]}>{trans.login.login}</Text>
                    </View>

                    {/* body */}
                    <View style={[styles.dFlex2, styles.marginTop20]}>
                        <Validator ref={usernameValidatorRef}>
                            <View>
                                <Text>{trans.login.username}</Text>
                                <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                    <View style={[styles.justifyCenter, styles.alignItemsCenter]}>
                                        <Image source={images.ICON_USER} />
                                    </View>
                                    <Input
                                        style={[styles.login_input]}
                                        placeholder={trans.login.inputname}
                                        value={username}
                                        onChangeText={(data) => {
                                            handleChangeData('username', data);
                                        }}
                                    />
                                </View>
                            </View>
                        </Validator>
                        <Validator ref={passwordValidatorRef}>
                            <View style={[styles.marginTop15]}>
                                <Text>{trans.login.password}</Text>
                                <View style={[styles.flexRow, styles.borderBottom_gray]}>
                                    <View style={[styles.justifyCenter, styles.alignItemsCenter]}>
                                        <Image source={images.ICON_PASSWORD} />
                                    </View>
                                    <Input
                                        placeholder={trans.login.inputpassword}
                                        style={[styles.login_input]}
                                        value={password}
                                        onChangeText={(data) => {
                                            handleChangeData('password', data);
                                        }}
                                        secureTextEntry={true}
                                    />
                                </View>
                            </View>
                        </Validator>
                        <View style={[styles.marginTop10, styles.alignItemsEnd]}>
                            <Text>{trans.login.forgotpassword}</Text>
                        </View>

                        <Button
                            style={[styles.marginTop34]}
                            styleText={[styles.font_size_17]}
                            text={trans.login.login}
                            onPress={navigationSchedule}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default LoginForm;
