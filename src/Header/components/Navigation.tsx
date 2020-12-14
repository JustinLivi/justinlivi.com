import { breadcrumbsBlur, breadcrumbsSelect } from 'Header/state/headerActions';
import { BreadCrumbs } from 'Header/components/BreadCrumbs';
import { NavList } from 'Header/components/NavList';
import React from 'react';
import { useDispatch } from 'react-redux';

export interface NavigationProps {
  path: string[];
  fixed: boolean;
}

export const Navigation: React.FunctionComponent<NavigationProps> = ({ path, fixed = false }) => {
  const dispatch = useDispatch();
  return (
    <nav>
      <BreadCrumbs
        path={path}
        onClick={() => {
          dispatch(breadcrumbsSelect());
        }}
        onBlur={() => {
          dispatch(breadcrumbsBlur());
        }}
      />
      <NavList fixed={fixed} path={path} />
    </nav>
  );
};
