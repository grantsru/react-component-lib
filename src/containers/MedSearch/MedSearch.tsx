import React from 'react';
import Downshift from 'downshift';

import { items } from '../../data';
import { MedSearchProps } from '../../global';

const MedSearch: React.FC<MedSearchProps> = ({ onMedicationChange }) => (
  <Downshift

    onChange={onMedicationChange}
    itemToString={(item) => (item ? item.label : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
      getRootProps,
    }) => (
      <div>
        <div
          style={{ display: 'inline-block' }}
          {...getRootProps({ refKey: 'ref' }, { suppressRefError: true })}
        >
          <label {...getLabelProps()}>Search for a medication: </label>
          <input {...getInputProps()} />
        </div>
        <ul {...getMenuProps()}>
          {isOpen
            ? items
              .filter((item) => !inputValue || item.label.includes(inputValue))
              .map((item, index) => (
                <li
                  {...getItemProps({
                      key: item.label,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                >
                  {item.label}
                </li>
              ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
);

export default MedSearch;
