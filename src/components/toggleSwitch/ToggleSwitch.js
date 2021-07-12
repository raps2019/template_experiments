import React, {useContext} from 'react';
import * as Styled from './ToggleSwitch.styles';
import { ThemeContext } from '../../contexts/ThemeStore';

const ToggleSwitch = () => {

  const { toggleTheme, currentTheme } = useContext(ThemeContext)
  return (
    <>
      <Styled.Input currentTheme={currentTheme} onChange={toggleTheme} id={"toggleSwitch"} type="checkbox"></Styled.Input>
      <Styled.Label currentTheme={currentTheme} htmlFor={'toggleSwitch'}>
        <Styled.Span></Styled.Span>
      </Styled.Label>
    </>
  );
};

export default ToggleSwitch;
