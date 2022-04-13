import { common, flexbox, navbar, spacing } from '@assets/styles';
import Button from '@components/commons/Button';
import TextView from '@components/commons/TextView';
import Loader from '@components/layouts/Loader';
import Modal from '@components/layouts/Modal';
import { images } from '@utils/constants';
import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    ...flexbox,
    ...common,
    ...spacing,
    ...navbar,
});
const Navbar: INavbarComponent<INavbarComponentProps> = (props) => {
    const { isShowMenu, title } = props;
    return (
        <SafeAreaView>
            <Modal />
            <Loader />
            <ImageBackground source={images.ICON_NAVBAR_BG} style={[styles.navbar_wrapper]}>
                {isShowMenu && (
                    <View style={[styles.navbar_container, styles.flexRow, styles.alignItemsEnd]}>
                        <Button
                            icon={images.ICON_MENU}
                            style={[styles.navbar_icon_back, styles.marginLeft12]}
                            styleIcon={[styles.navbar_icon, styles.alignItemsEnd]}
                        />
                    </View>
                )}
                <View style={[styles.position_absolute_center, styles.alignItemsCenter, styles.justifyCenter, styles.marginTop5]}>
                    <TextView style={[styles.color_white, styles.font_size_24, styles.font_weight_bold]}>{title}</TextView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

Navbar.defaultProps = {
    isHandleBack: false,
};

export default Navbar;
