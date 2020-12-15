import React, { FocusEventHandler, MouseEventHandler } from 'react';
import styled from 'styled-components';

export interface BreadCrumbsProps {
  path: string[];
  onClick: MouseEventHandler<HTMLButtonElement>;
  onBlur: FocusEventHandler<HTMLButtonElement>;
}

const BreadCrumbsContainer = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  font-size: 1rem;
`;

const BreadCrumbsList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const BreadcrumbsElement = styled.li`
  display: inline;
  padding-right: 0.5rem;

  &:last-child {
    padding-right: 0;
  }

  &:before {
    content: '/';
    padding-right: 0.5rem;
  }
`;

export const BreadCrumbs: React.FunctionComponent<BreadCrumbsProps> = ({ path, onClick, onBlur }) => (
  <BreadCrumbsContainer>
    <BreadCrumbsList>
      {path.length === 0 ? (
        <BreadcrumbsElement />
      ) : (
        path.map(node => (
          <BreadcrumbsElement key={node}>
            <button type="button" disabled={path.length === 0} onClick={onClick} onBlur={onBlur}>
              {node}
            </button>
          </BreadcrumbsElement>
        ))
      )}
    </BreadCrumbsList>
  </BreadCrumbsContainer>
);
