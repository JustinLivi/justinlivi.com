import { State } from 'features/App/store/stateDefinition';
import { OpenSourceComponent } from 'features/Pages/components/OpenSource/OpenSourceComponent';
import { connect } from 'react-redux';

export const mapStateToProps = ({
  pages: { packages, isFetching }
}: State) => ({
  packages,
  isFetching
});

export const OpenSourceContainer = connect(mapStateToProps)(
  OpenSourceComponent
);
