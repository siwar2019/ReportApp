import React from 'react'
import {Button, Header, Title, Icon, Container, Left, Body, Right} from "native-base";
import {StyleSheet} from "react-native";

export default function Nav () {

    return(
            <Header style={[styles.headerBg]}>
                <Body>
                    <Title style={[styles.colorGrey]}>Report incident App</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon style={styles.colorGrey} name='log-out' />
                    </Button>
                </Right>
            </Header>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1},
    headerBg: {backgroundColor: '#F7FAFC'},
    colorGrey: {color:'#4A5568'}
});
