import React, {useState} from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { 
    Container, 
    ButtonFilterText,
    ModalContent,
    ButtonFilter 
} from './style';

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeCalendar';

//Traduzindo Calendário
LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({setVisible, handleFilter}) {

  const [dateNow, setDateNow] = useState(new Date());
  const [markeddates, setMarkedDates] = useState({});

  function handleOnDayPress(date){

    setDateNow(new Date(date.dateString));

    let markedDay = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3b3dbf',
      textColor: '#fff'
    }

    setMarkedDates(markedDay)
  }

  function handleFilterDate(){
    handleFilter(dateNow);
    setVisible();
  }

  return (

    <Container>

      <TouchableWithoutFeedback
      onPress={setVisible}
      >

          <View style = {{flex: 1}}></View>

      </TouchableWithoutFeedback>

      <Calendar
      onDayPress={handleOnDayPress}
      markedDates={markeddates}
      enableSwipeMonths={true}
      theme ={{
        todayTextColor: "#ff0000",
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#fff',
      }}
      >

      </Calendar>

      <ModalContent>

        <ButtonFilter onPress={handleFilterDate}>

          <ButtonFilterText>
              Filtrar
          </ButtonFilterText>

        </ButtonFilter>  

      </ModalContent>

    </Container>

    );
}