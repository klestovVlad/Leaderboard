import React from 'react';
import {
  Icon,
  InputProps,
  Input as InputUI,
  useStyleSheet,
} from '@ui-kitten/components';
import {ImageProps, TouchableOpacity} from 'react-native';

import {themedStyles} from './input.styles';

interface InputThemingShowcaseProps extends InputProps {
  value: string;
  setValue: (value: string) => void;
}

export const Input = ({
  value,
  setValue,
  ...rest
}: InputThemingShowcaseProps) => {
  const styles = useStyleSheet(themedStyles);

  const onValueReset = () => {
    setValue('');
  };

  const renderCloseIcon = (props?: ImageProps): React.ReactElement => {
    if (!value) {
      return <></>;
    }
    return (
      <TouchableOpacity onPress={onValueReset}>
        <Icon {...props} name="close" />
      </TouchableOpacity>
    );
  };

  return (
    <InputUI
      style={styles.root}
      value={value}
      placeholder="Place your Text"
      accessoryLeft={<Icon name="search" />}
      accessoryRight={renderCloseIcon}
      onChangeText={nextValue => setValue(nextValue)}
      {...rest}
    />
  );
};
