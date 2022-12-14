import React from "react";
import styled from "styled-components";
import colors from "../../global-styles/colors";
import PropTypes from "prop-types";
import MainStyle, { InputStyle } from "./MainStyle";
import Label from "./Label";

export const Combobox = ({ id, name, children, title, onChange }) => {
  return (
    <>
      <MainStyle />
      <InputStyle width={400}>
        <select
          placeholder="teste"
          onChange={onChange}
          className="styled select"
          name={name}
          id={id}
        >
          <Option disabled selected value="">
            Selecione uma opção
          </Option>
          {children}
        </select>
        <span className="arrow"></span>
        <Label isRequired className="label" htmlFor={id}>
          {title}
        </Label>
      </InputStyle>
    </>
  );
};

export const Option = styled.option`
  color: ${colors.white};
`;

Combobox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

Combobox.defaultProps = {
  isRequired: false,
  title: "{{title}}",
};
