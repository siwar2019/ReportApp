import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import {Container, Text} from 'native-base';
import Nav from "./Nav";

export default class AcceuilScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <Container>
                <Nav/>
                <ScrollView>
                    <Text style={[{fontWeight: 'bold', padding: 6}, styles.textColor]}> Duis in turpis orci. Quisque at
                        viverra massa
                    </Text>
                    <View style={{flexDirection: 'row', padding: 6}}>

                        <Text style={[styles.textColor, {flex: 2}]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mi iaculis, consequat dui a,
                            egestas nisl.
                            Aenean molestie venenatis ultrices. Fusce ut lobortis ipsum.
                            Vestibulum scelerisque sagittis tellus eu posuere. Proin vel fermentum ipsum.
                        </Text>
                        <Image
                            style={{width: 150, height: 150}}
                            source={require('../assets/victor/home_img_1.png')}
                        />
                    </View>
                    <View style={{padding: 6}}>
                        <Text style={[styles.textColor]}>
                            auris elementum mauris mauris, in finibus lorem ultrices et. Fusce sed blandit turpis, sit
                            amet laoreet nunc.
                            Vivamus nec lacus dictum risus suscipit auctor ac sit amet libero.
                        </Text>
                        <Image
                            style={{width: '100%', height: 150, resizeMode: 'contain'}}
                            source={require('../assets/victor/home_img_2.png')}
                        />
                    </View>
                </ScrollView>
            </Container>

        );


    }

}
const styles = StyleSheet.create({
    textColor: {color: '#4A5568'}
});

