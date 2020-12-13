import { breadcrumbsBlur, breadcrumbsSelect } from 'features/Header/state/headerActions';
import { BreadCrumbs } from 'features/Header/components/BreadCrumbs';
import { NavList } from 'features/Header/components/NavList';
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
