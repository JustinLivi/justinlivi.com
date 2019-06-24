import classNames from 'classnames/bind';
import React, { Component } from 'react';

import { Package } from '../../pagesState';
import styles from './OpenSourceStyles.scss';

const cx = classNames.bind(styles);

export interface OpenSourceProps {
  packages: Package[];
  isFetching: boolean;
  fetchPackagesIfNeeded: () => void;
}

export class OpenSourceComponent extends Component<OpenSourceProps> {
  componentDidMount() {
    const { fetchPackagesIfNeeded } = this.props;
    fetchPackagesIfNeeded();
  }

  render() {
    const { packages, isFetching } = this.props;
    return (
      <div className={cx('page', 'openSource')}>
        <h1>OPEN SOURCE</h1>
        {isFetching
          ? 'Loading...'
          : packages.map(({ name, links }) => (
              <div key={name}>
                <p>{name}</p>
                <p>
                  <a href={links.npm} target='_blank' rel='noopener noreferrer'>
                    npm
                  </a>{' '}
                  |{' '}
                  <a
                    href={links.repository}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    github
                  </a>
                </p>
                <hr />
              </div>
            ))}
      </div>
    );
  }
}
