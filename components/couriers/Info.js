import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

//Shows the terms and conditions for courier
class Info extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.h1}> Terms and conditions for Couriers</Text>
        <Text style={styles.h2}>The standard Lorem Ipsum passage, used since the 1500s</Text>
        <Text style={styles.text}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."</Text>
        <Text style={styles.h2}>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</Text>
        <Text style={styles.text}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur?"</Text>
        <Text style={styles.h2}>1914 translation by H. Rackham</Text>
        <Text style={styles.text}>"But I must explain to you how all this mistaken idea of denouncing pleasure and
            praising pain was born and I will give you a complete account of the system, and expound the actual teachings
            of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids
            pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    h1: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff441f',
        textAlign: 'center'
    },
    h2: {
        flex: 1,
        marginHorizontal: 20,
        marginBottom: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ff441f'
    },
    text: {
        marginHorizontal: 20,
        marginBottom: 40,
    },
});

export default Info;