import React, { Component } from "react";
import {
    View, Image, TouchableOpacity, Text, Platform
} from "react-native";
import { IndicatorViewPager } from 'rn-viewpager';
import { updateNotification, updateFcmToken } from "../../actions/actions";
import SocketListing from "../../../assets/utils/socket-listening";
import firebase from "react-native-firebase";

import {
    BaseReduceCompnentClass,
    BaseReduceCompnentRedux
} from "../../BaseReduceCompnent";

export const ViewPager = BaseReduceCompnentRedux(
    (state, stateDefault) => {
        return stateDefault;
    },
    (dispatch, dispatchDefault) => {
        dispatchDefault.updateNotification = (count) => {
            dispatch(updateNotification(count));
        };

        dispatchDefault.updateFcmToken = (token) => {
            dispatch(updateFcmToken(token));
        };
        return dispatchDefault;
    },

    class extends BaseReduceCompnentClass {
        constructor(props) {
            super(props);
            this.thongBaoTabText = 'Thông báo';
            this.navigation = this.props.screenProps.rootNavigation;
            this.state = {
                currentTab: 0
            };

            // Kiểm tra có tab thông báo không;
            this.hastabNotification = false;
            this.props.tabs.forEach(tab => {
                if (tab.text.toString().trim() == this.thongBaoTabText)
                    this.hastabNotification = true;
            })
        }

        async requestFireBaseCloundMessagePermission() {
            await firebase.messaging().requestPermission();
            setTimeout(() => {
                this.getFcmToken();
            }, 1000);
        }

        async getFcmToken() {
            const fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                this.props.updateFcmToken(fcmToken);
                this.props.baseRequest('/update-user-fcm-token.html', { token: fcmToken }, false, null, null, false, false, 'post');
            }
        }

        componentDidMount() {
            if (this.hastabNotification) {
                SocketListing(this.props.mainApp.user, this.props.baseRequest, (data) => {
                    switch (data.type) {
                        case 'notifyCount':
                            this.props.updateNotification(data.count);
                            if (this.props.tabs[this.state.currentTab].text == this.thongBaoTabText) {
                                // goi ham load thong bao;
                                if (this.props.mainApp.loadNotification) this.props.mainApp.loadNotification();
                            }
                            break;
                    }
                });

                this.requestFireBaseCloundMessagePermission();
            }

            if (Platform.OS == 'ios') {
                setTimeout(() => {
                    firebase.notifications().setBadge(0)
                }, 2000);
            }

            firebase.notifications().getInitialNotification()
                .then(async notificationOpen => {
                    if (notificationOpen) {
                        const notification = notificationOpen.notification;
                        if (notification._data && notification._data.notifyType) {
                            let item = notification._data;
                            if (item.userId != this.props.mainApp.user._id) return;

                            if (item.watched == 0) {
                                this.props.baseRequest(`/da-xem-thong-bao.html/${item._id}`, {}, false, null, null, false, false, 'get');
                            }

                            switch (Number(item.notifyType)) {
                                case 1:
                                    this.navigation.navigate("ChiTietVayNoLogistic", { billId: item.billId, logisticId: item.userNotiId });
                                    break
                                case 2:
                                    this.navigation.navigate("ChiTietVayNoLogistic", { billId: item.billId, logisticId: item.userNotiId });
                                    break
                                case 3:
                                    this.navigation.navigate("ChiTietDonHang", { billId: item.billId });
                                    break
                                case 4:
                                    this.navigation.navigate("ChiTietDonHang", { billId: item.billId });
                                    break
                                case 5:
                                    this.navigation.navigate("ChiTietDonHang", { billId: item.billId });
                                    break
                                case 6:
                                    this.navigation.navigate("ChiTietVayNoLogistic", { billId: item.billId, logisticId: item.userNotiId });
                                    break
                                case 7:
                                    this.navigation.navigate("ChiTietVayNoLogistic", { billId: item.billId, logisticId: item.userNotiId });
                                    break
                                case 8:
                                    this.navigation.navigate("ChiTietDonHang", { billId: item.billId });
                                    break
                                case 9:
                                    this.navigation.navigate("ChiTietVanChuyen", { transportId: item.transportId });
                                    break
                                case 10:
                                    this.navigation.navigate("ChiTietXuatKho", {
                                        dataExport: {
                                            _id: item.exportId,
                                            name: item.exportName
                                        }
                                    });
                                    break
                                case 11:
                                    this.navigation.navigate("ChiTietVanChuyen", { transportId: item.transportId });
                                    break
                                case 12:
                                    this.navigation.navigate("ChiTietVanChuyen", { transportId: item.transportId });
                                    break
                                case 13:
                                    this.navigation.navigate("ChiTietDonHang", { billId: item.billId });
                                    break
                                case 14:
                                    this.navigation.navigate("ChiTietHopDong", {
                                        contract: {
                                            _id: item.contractId,
                                            name: item.title
                                        }
                                    });
                                    break
                                case 15:
                                    if (item.shipmentId) {
                                        this.navigation.navigate("ChiTietLoKyGuiTheoLo", {
                                            shipmentId: item.shipmentId
                                        });
                                    } else {
                                        this.navigation.navigate("DanhSachLo");
                                    }
                                    break
                                case 16:
                                    if (item.shipmentId) {
                                        this.navigation.navigate("ChiTietLoKyGuiTheoLo", {
                                            shipmentId: item.shipmentId
                                        });
                                    } else {
                                        this.navigation.navigate("DanhSachLo");
                                    }
                                    break
                                case 17:
                                    this.navigation.navigate("ChiTietVanChuyen", { transportId: item.transportId });
                                    break
                                case 18:
                                    this.navigation.navigate("ChiTietVanChuyen", { transportId: item.transportId });
                                    break
                                case 19:
                                    this.navigation.navigate("ChiTietVanChuyen", { transportId: item.transportId });
                                    break;
                                case 20:
                                    this.navigation.navigate("ChiTietDonHang", { billId: item.billId });
                                    break;
                                case 21:
                                    this.navigation.navigate("ChiTietVanChuyen", { transportId: item.transportId });
                                    break;
                                case 22:
                                    this.navigation.navigate("ChiTietDonHang", { billId: item.billId });
                                    break;
                                case 23:
                                    this.navigation.navigate("ChiTietDonHang", { billId: item.billId, more: 'mo-trao-doi' });
                                    break;
                            }
                        }
                    }
                });
        }

        renderItemTab() {
            return this.props.tabs.map((tab, index) => {
                return <TouchableOpacity
                    key={index + 'tab-item'}
                    disabled={index == this.state.currentTab}
                    onPress={() => {
                        if (this.viewPager) this.viewPager.setPage(index);
                        this.setState({ currentTab: index })
                    }}
                    style={{
                        flexDirection: 'column', backgroundColor: '#fff', justifyContent: 'center',
                        alignItems: 'center', flex: 2, height: '100%', position: 'relative'
                    }}>
                    <Image source={this.state.currentTab == index ? tab.selectedIconSource : tab.iconSource} style={{ width: 16, height: 16, resizeMode: 'contain' }} />
                    <Text style={this.state.currentTab == index ? { color: '#b21a0c', fontSize: 11, marginTop: 3 } : { color: '#626265', fontSize: 11, marginTop: 3 }}>
                        {tab.text}
                    </Text>

                    {(tab.notification && tab.notification > 0) ?
                        <Text style={{
                            width: 16, height: 16, borderRadius: 8, color: '#fff', backgroundColor: '#b21a0c', textAlign: 'center', fontSize: 10,
                            padding: 2, position: 'absolute', top: 10, right: 10
                        }}>{tab.notification > 9 ? '9+' : tab.notification}</Text> : null}
                </TouchableOpacity>
            })
        }

        render() {
            return <View style={{ ...this.props.style, flex: 1 }}>
                <View style={{
                    width: '100%', height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopColor: '#f7f7f7',
                    borderBottomColor: '#f7f7f7', borderTopWidth: (this.props.style && this.props.style.flexDirection && this.props.style.flexDirection == 'column-reverse') ? 2 : 0,
                    borderBottomWidth: (this.props.style && this.props.style.flexDirection && this.props.style.flexDirection == 'column-reverse') ? 0 : 2
                }}>
                    {this.renderItemTab()}
                </View>
                <IndicatorViewPager
                    ref={(ref) => { this.viewPager = ref }}
                    style={{ flex: 1 }}
                    onPageSelected={(x) => {
                        this.setState({ currentTab: x.position });
                        if (this.props.onPageSelected) this.props.onPageSelected(x.position);
                        if (this.props.tabs[x.position].notification && this.props.tabs[x.position].notification > 0) {
                            this.props.updateNotification(0);
                        }

                        if (this.props.tabs[x.position].text == this.thongBaoTabText) {
                            // goi ham load thong bao;
                            if (this.props.mainApp.loadNotification) this.props.mainApp.loadNotification();
                        }
                    }}
                >
                    {this.props.children}
                </IndicatorViewPager>
            </View>
        }
    }
);