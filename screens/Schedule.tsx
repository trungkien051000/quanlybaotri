import { common, container, schedule } from '@assets/styles';
import { routes } from '@utils/constants';
import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    ...container,
    ...schedule,
    ...common,
});
const Schedule: IScheduleScreen<IScheduleScreenProps> = (props) => {
    const { navigation } = props;
    const [state, setState] = useState([
        {
            MaBaoTri: 4,
            TenNhanVien: 'Nguyễn Văn An',
            TenKhachHang: 'Bạch Trung Kiên',
            Thietbi: 'Máy Ascaso Basic 11',
            TienDo: '90%',
            TieuDe: 'Bảo trì vòi đánh sữa',
            MoTa: 'Vòi đánh sữa không hoạt động',
        },
        {
            MaBaoTri: 5,
            TenNhanVien: 'Lê Văn Luyện',
            TenKhachHang: 'Bạch Trung Kiên',
            Thietbi: 'Máy Jura Impressa A8',
            TienDo: '50%',
            TieuDe: 'Sửa chữa máy cà phê',
            MoTa: 'Cà phê chảy ra quá nhiều, dẫn đến bị lỏng, uống không còn đậm đà',
        },
        {
            MaBaoTri: 6,
            TenNhanVien: 'Võ Thị Sáu',
            TenKhachHang: 'Bạch Trung Kiên',
            Thietbi: 'Máy Jura Impressa S9',
            TienDo: '60%',
            TieuDe: 'Bảo trì máy pha cà phê',
            MoTa: 'Mo ta',
        },
        {
            MaBaoTri: 7,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Bạch Trung Kiên',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '50%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 34,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Bạch Trung Kiên',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '40%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 56,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Bạch Trung Kiên',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '30%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 78,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Bạch Trung Kiên',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '20%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
        {
            MaBaoTri: 97,
            TenNhanVien: 'Lê Trương Bảo',
            TenKhachHang: 'Bạch Trung Kiên',
            Thietbi: 'Máy Melitta Caffeo Passione',
            TienDo: '10%',
            TieuDe: 'Sửa chữa vòi đánh sữa',
            MoTa: 'abc',
        },
    ]);

    return (
        <View style={[{ flex: 1 }, styles.container]}>
            <FlatList
                data={state}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            navigation?.navigate(routes.CLIENT.DETAILSCHEDULE);
                        }}
                    >
                        <View style={[styles.schedule_container]}>
                            <Text style={styles.color_blue}>
                                {item.MaBaoTri} - {item.TieuDe}
                            </Text>
                            <View style={[{ flexDirection: 'row' }]}>
                                <Text>Nhân viên: </Text>
                                <Text style={[styles.color_green, { flexShrink: 1 }]}>{item.TenNhanVien}</Text>
                            </View>
                            <Text>Mô tả: {item.MoTa}</Text>
                            <View style={[{ flex: 1, flexDirection: 'row' }]}>
                                <Text>Tên khách hàng: </Text>
                                <Text style={styles.color_orange}>{item.TenKhachHang}</Text>
                            </View>
                            <Text>{item.Thietbi}</Text>
                            <Text style={styles.color_blue}>Tiến độ: {item.TienDo}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </View>
    );
};

export default Schedule;
