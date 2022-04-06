import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

interface TimerProps {}

export const Timer: React.FC<TimerProps> = () => {
  const [stopTimer, setStopTimer] = useState(moment().add(5, 'm'));
  const [timerRemaining, setTimerRemaining] = useState(moment());
  const minutes = 5;

  function calc() {
    setInterval(() => {
      setStopTimer(moment().add(minutes, 'm'));

      // moment subtract (stopTimer - currentTime)
      setTimerRemaining(stopTimer.subtract(moment().minute(), 'm'));

      // settimerRemaining
    }, 1000);
  }

  useEffect(() => {
    calc();
  }, []);

  return (
    <View>
      <Text>Timer</Text>
      <Text>{timerRemaining.format('h:mm:ss')}</Text>
    </View>
  );
};
