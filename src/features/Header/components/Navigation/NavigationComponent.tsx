import { breadcrumbsBlur } from 'features/Header/actions/breadcrumbsBlur';
import { breadcrumbsSelect } from 'features/Header/actions/breadcrumbsSelect';
import { BreadCrumbs } from 'features/Header/components/BreadCrumbs/BreadCrumbsComponent';
import { NavList } from 'features/Header/components/NavList/NavListComponent';
import React from 'react';
import { useDispatch } from 'react-redux';

export interface NavigationProps {
  path: string[];
  fixed: boolean;
}

export const Navigation: React.SFC<NavigationProps> = ({
  path,
  fixed = false
}) => {
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
