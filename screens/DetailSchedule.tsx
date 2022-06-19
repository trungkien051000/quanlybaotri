import { button, common, container, flexbox, login, spacing } from '@assets/styles';
import Input from '@components/commons/Input';
import TextView from '@components/commons/TextView';
import { ReduxStates } from '@redux/reducers';
import { images } from '@utils/constants';
import { useTrans } from '@utils/hooks';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import Button from '@components/commons/Button';
const styles = StyleSheet.create({
    ...common,
    ...flexbox,
    ...spacing,
    ...login,
    ...container,
    ...button,
});
const DetailSchedule: IDetailScheduleScreen<IDetailScheduleScreenProps> = (props) => {
    const { navigation } = props;
    const { detailSchedule, locale } = useSelector((states: ReduxStates) => states);
    const [state, setState] = useState<IDetailScheduleFormComponentState>({
        detailScheduleData: detailSchedule,
        oldDetailScheduleData: detailSchedule,
    });
    const { detailScheduleData, oldDetailScheduleData } = state;
    const trans = useTrans();

    const showToast = () => {
        ToastAndroid.show('Bạn đã cập nhật thành công !', ToastAndroid.LONG);
    };

    const handleChangeData = (field: string, value: string | number | boolean) => {
        setState((prevState) => ({
            ...prevState,
            detailScheduleData: {
                ...prevState.detailScheduleData,
                [field]: value,
            },
        }));
    };
    return (
        <>
            <View style={[{ width: '100%' }, styles.padding15, styles.background_white, styles.flexRow, styles.justifyBetween]}>
                <TouchableOpacity onPress={navigation?.goBack}>
                    <Image source={images.ICON_LEFTARROW} />
                </TouchableOpacity>
                <TextView
                    style={[
                        styles.color_blue,
                        styles.alignSelfCenter,
                        styles.alignItemsCenter,
                        styles.justifyCenter,
                        styles.font_weight_regular,
                        styles.font_size_27,
                    ]}
                >
                    {trans.detailSchedule.title}
                </TextView>
                <Button text={trans.common.save} style={styles.button_save} onPress={() => showToast()} />
            </View>

            <ScrollView style={[styles.dFlex1]} contentContainerStyle={[styles.container]} showsVerticalScrollIndicator={false}>
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.MaBaoTri}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.MaBaoTri}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.TieuDe}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.TieuDe}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.MoTa}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.MoTa}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.ThietBi}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.ThietBi}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.NhanVien}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.NhanVien}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.KhachHang}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.KhachHang}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.DiaChi}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray, { height: 80 }]}
                    value={detailScheduleData.DiaChi}
                    multiline={true}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.NgayBatDau}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.NgayBatDau}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.NgayKetThuc}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.NgayKetThuc}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.NgayHoanThanh}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.NgayHoanThanh}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.TienDo}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.TienDo}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.TrangThai}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.color_gray]}
                    value={detailScheduleData.TrangThai}
                    selectTextOnFocus={false}
                    editable={false}
                    maxLength={128}
                />
                <TextView
                    style={[
                        styles.color_gray,
                        styles.font_weight_bold,
                        styles.font_size_13,
                        locale === 'vi' ? styles.width_50Percent : styles.width_40Percent,
                    ]}
                >
                    {trans.detailSchedule.BinhLuan}
                </TextView>
                <Input
                    style={[styles.marginTop8, styles.borderBottom_gray, { height: 200 }]}
                    value={detailScheduleData.BinhLuan}
                    multiline={true}
                    onChangeText={(data) => {
                        handleChangeData('BinhLuan', data);
                    }}
                    maxLength={128}
                />
            </ScrollView>
        </>
    );
};
export default DetailSchedule;
