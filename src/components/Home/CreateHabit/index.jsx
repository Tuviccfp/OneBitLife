import React from "react";
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

export default function CreateHabit({
    habitArea, 
    borderColor,
}) {
    
    var count = -1;
    function handleCreateHabit() {
        count += 1;
        console.warn('Botão da área criado', count, habitArea) 
    }

    function test(a) {
        if(a === 'Mente'){
            return <Text style={styles.habitText}>Adicionar meta da {a}</Text>
        }
        if(a === 'Finanças'){
            return <Text style={styles.habitText}>Adicionar meta de {a}</Text>
        }
        if(a === 'Corpo'){
            return <Text style={styles.habitText}>Adicionar meta do {a}</Text>
        }
        if(a === 'Diversão'){
            return <Text style={styles.habitText}>Adicionar meta da {a}</Text>
        }
    }

    return(
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, {borderColor: borderColor}]}
            onPress={handleCreateHabit}
            >
            {test(habitArea)} 
            </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        width: 315,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderStyle: 'dotted',
        borderColor: 'white',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center'
    },
    habitText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    }
})

//<Text style={styles.habitText}>Adicionar meta {habitArea === 'Mente' ? "da" : "do" || habitArea === "Finanças" ? 'de' : '' || habitArea === "Corpo" ? 'do' : 'da'} {habitArea}</Text>