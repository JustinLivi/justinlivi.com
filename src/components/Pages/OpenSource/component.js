import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { fetchPackagesIfNeeded } from './reducers';
import styles from './style.scss';

const cx = classNames.bind( styles );

class OpenSource extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch( fetchPackagesIfNeeded());
    }

    render() {
        const { packages, isFetching } = this.props;
        return (
            <div className={cx( 'page', 'openSource' )}>
                <h1>OPEN SOURCE</h1>
                {isFetching ? 'Loading...' : packages.map(({ package: { name, links } }) => (
                    <div
                        key={name}
                    >
                        <p>{name}</p>
                        <p>
                            <a
                                href={links.npm}
                                target='_blank'
                                rel='noopener noreferrer'
                            >npm</a> | <a
                                href={links.repository}
                                target='_blank'
                                rel='noopener noreferrer'
                            >github</a>
                        </p>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

OpenSource.propTypes = {
    packages: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default OpenSource;
