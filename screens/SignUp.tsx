import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { SignUpForm } from '@components/index';

import { container, flexbox } from '@assets/styles';
const styles = StyleSheet.create({
    ...container,
    ...flexbox,
});
const SignUp: ISignUpScreen<ISignUpScreenProps> = (props) => {
    return (
        <ScrollView style={[styles.dFlex1]} contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false}>
            <SignUpForm {...props} />
        </ScrollView>
    );
};

export default SignUp;
