import React, {useState} from "react";

import { Picker } from "@react-native-picker/picker";

export default function SelectPicker(){
    const [valorSelecionado, setValorSelecionado] = useState(0)

    const [items, setItems] = useState([
        {key: 1, label: 'USD', value: 'USD' },
        {key: 2, label: 'EUR', value: 'EUR'},
    ])
  
    let selectItems = items.map((v, k) =>{
        return <Picker.item key ={k} value ={k} label= {v.value} />
    })

    return(  
        <Picker
        selectedValue={valorSelecionado}
        onValueChange={(itemValue) => console.log(itemValue)}
        >

        {selectItems}
        </Picker>
    )
}