import { collapseNav } from 'features/Header/actions/collapseNav';
import { expandNav } from 'features/Header/actions/expandNav';
import { BreadCrumbsComponent } from 'features/Header/components/BreadCrumbs/BreadCrumbsComponent';
import { NavListComponent } from 'features/Header/components/NavList/NavListComponent';
import React from 'react';
import { useDispatch } from 'react-redux';

export interface NavigationComponentProps {
  path: string[];
  fixed: boolean;
}

export const NavigationComponent: React.SFC<NavigationComponentProps> = ({
  path,
  fixed = false
}) => {
  const dispatch = useDispatch();
  return (
    <nav>
      <BreadCrumbsComponent
        path={path}
        onClick={() => {
          dispatch(expandNav());
        }}
        onBlur={() => {
          dispatch(collapseNav());
        }}
      />
      <NavListComponent fixed={fixed} />
    </nav>
  );
};
