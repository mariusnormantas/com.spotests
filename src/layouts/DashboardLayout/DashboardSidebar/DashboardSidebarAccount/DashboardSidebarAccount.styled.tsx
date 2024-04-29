/** @format */

import styled from "styled-components";
import { tokens } from "@/library/core";

export const Trigger = {
  Base: styled.button`
    user-select: none;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.25em;
  `,
  User: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25em;
  `,
  Icon: styled.div`
    margin-inline: auto 0;

    svg {
      color: ${tokens.colorNeutralForeground4};
    }
  `,
  Illustration: styled.div`
    position: relative;
    width: 45px;
    min-width: 45px;
    height: 45px;
    border-radius: ${tokens.borderRadiusCircular};
    color: ${tokens.colorNeutralBackground4};
    background-color: ${tokens.colorNeutralForeground4};
    box-shadow: ${tokens.shadow2Brand};
    overflow: hidden;

    svg {
      position: absolute;
      top: calc(50% + 0.5em);
      left: 50%;
      translate: -50% -50%;
    }
  `,
  Name: styled.div`
    max-width: 9em;
    font-size: ${tokens.fontSizeBase400};
    font-weight: ${tokens.fontWeightMedium};
    color: ${tokens.colorNeutralForegroundInvertedAlpha1};
    line-height: 1.3;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
  Email: styled.div`
    max-width: 9em;
    font-size: ${tokens.fontSizeBase300};
    font-weight: ${tokens.fontWeightRegular};
    color: ${tokens.colorNeutralForeground4};
    line-height: 1.3;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
};

export const Dialog = {
  Base: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    min-width: 25em;
    max-width: 30em;
    padding-block: 1em;
    padding-inline: 1em;
    border-radius: ${tokens.borderRadiusLarge};
  `,
  Details: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    width: 100%;
  `,
  Text: styled.div`
    max-width: 18em;
    line-height: 1.2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:is(h4) {
      font-size: ${tokens.fontSizeBase500};
      font-weight: ${tokens.fontWeightSemibold};
      color: ${tokens.colorNeutralForeground1};
    }

    &:is(span) {
      font-size: ${tokens.fontSizeBase300};
      font-weight: ${tokens.fontWeightRegular};
      color: ${tokens.colorNeutralForeground2};
    }
  `,
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Initials = styled.span`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75em;
  min-width: 2.75em;
  height: 2.75em;
  border-radius: ${tokens.borderRadiusCircular};
  font-weight: ${tokens.fontWeightSemibold};
  line-height: 1;
  color: ${tokens.colorNeutralForeground2};
  background-color: ${tokens.colorNeutralBackground3};
`;

export const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1em;
`;
