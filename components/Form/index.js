import { View, Text, TextInput, StyleSheet} from "react-native";
import ResultImc from "./Result";
import { useState } from "react";
import { Button } from "react-native-web";


export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura")
    const [imc, setImc] = useState(null)
    const [textBtn, setTextBtn] = useState("Calcular")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextBtn("Calcular Novamente")
            return
        }
        setImc(null)
        setTextBtn("Calcular")
        setMessageImc("Preencha o Peso e a Altura")
    }

    return(
        <View>
           <View>
                <Text>Peso</Text>
                <TextInput 
                    style = {style.input}
                    keyboardType="numeric"
                    placeholder="Ex: 65.2"
                    onChangeText={setWeight}
                    value={weight}
                />
                <Text>Altura</Text>
                <TextInput 
                    style = {style.input}
                    placeholder="Ex: 1.85"
                    keyboardType="numeric"
                    onChangeText={setHeight}
                    value={height}
                />
                <Button 
                    title={textBtn} 
                    onPress={() => validationImc()}
                />
                <ResultImc 
                    messageResultImc={messageImc}
                    resultImc={imc}
                />
           </View>
        </View>
    )
}

const style =  StyleSheet.create({
    input: {
        height: 40,
        margin: 12
    }
})


    


