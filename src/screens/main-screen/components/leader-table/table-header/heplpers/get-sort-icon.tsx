import React from 'react';
import {Icon} from '@ui-kitten/components';
import {SORT_DIRECTION} from 'src/shared/constants/sort-options';

export const getSortIcon = (sortDirection?: SORT_DIRECTION) => {
  switch (sortDirection) {
    case SORT_DIRECTION.Ascending:
      return <Icon name="arrow-up" />;
    case SORT_DIRECTION.Descending:
      return <Icon name="arrow-down" />;
    default:
      return null;
  }
};
