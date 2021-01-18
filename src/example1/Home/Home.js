import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';

// Components
import NavBar from '../Common/NavBar';
import AlarmList from './AlarmList';

const Home = () => {
  const handleAddAlarm = () => {
    Actions.AddAlarms();
  };

  return (
    <View style={{display: 'flex', flex: 1}}>
      <NavBar
        title="Alarmes"
        rightButtonIcon="plus"
        /* Button add Alarms**/
        onRightButtonPress={handleAddAlarm}
      />

      <SafeAreaView style={{display: 'flex', flex: 1}}>
        {/**List Alarms*/}
        <AlarmList />

      </SafeAreaView>
    </View>
  );
};

export default Home;
