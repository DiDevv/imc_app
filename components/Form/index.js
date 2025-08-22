import { View, Text, TextInput, StyleSheet, Button} from "react-native";
import ResultImc from "./Result";
import { useState } from "react";


export default function Form(){

    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura")
    const [imc, setImc] = useState(null)
    const [textBtn, setTextBtn] = useState("Calcular")

    function imcCalculator(){
        return setImc((parseFloat(weight.replace(",", "."))/(parseFloat(height.replace(",", "."))*parseFloat(height.replace(",", ".")))).toFixed(2))
    }

    function validationImc(){
        if(weight != "" && height != ""){
            imcCalculator()
            setMessageImc("Seu IMC é igual:")
            setTextBtn("Calcular Novamente")
            setHeight("")
            setWeight("")
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


    


