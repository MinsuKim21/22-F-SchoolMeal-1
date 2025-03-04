import {HStack, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {getDay, getWeek} from '../utils/Day';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setDay} from '../redux/slices/pickday';

const DayPicker = () => {
  const date = getWeek() || ['.', '.', '.', '.', '.'];
  const day = ['월', '화', '수', '목', '금'];

  const dispatch = useDispatch();

  const [btnActive, setBtnActive] = useState(0);

  const handleTouch = (index: number) => {
    setBtnActive(index);
    dispatch(setDay(index));
  };

  const today = getDay();

  useEffect(() => {
    handleTouch(today - 1);
  }, []);
  return (
    <HStack className="gap-[26px] justify-center py-5">
      {date.map((date: string, index: number) => (
        <TouchableOpacity
          onPressOut={() => {
            handleTouch(index);
          }}
          className={`${
            btnActive === index ? 'bg-BrandColor/Default' : ''
          } w-[42px] h-[64px] rounded-[12px] justify-center items-center`}
          key={index}
        >
          <VStack className="items-center">
            <Text
              color={btnActive === index ? 'white' : '#D9D9D9'}
              fontSize={16}
              fontWeight="medium"
            >
              {day[index]}
            </Text>
            <Text
              color={btnActive === index ? 'white' : '#D9D9D9'}
              fontSize={14}
              fontWeight="medium"
            >
              {date}
            </Text>
          </VStack>
        </TouchableOpacity>
      ))}
    </HStack>
  );
};

export default DayPicker;
