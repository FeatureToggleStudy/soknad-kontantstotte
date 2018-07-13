import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { selectBarn } from '../../barn/selectors';
import { IBarn } from '../../barn/types';
import NavigasjonKnapp from '../../component/NavigasjonKnapp/NavigasjonKnapp';
import SideContainer from '../../component/SideContainer/SideContainer';
import { IRootState } from '../../rootReducer';
import { soknadSettVerdi } from '../../soknad/actions';
import { selectValgtBarn } from '../../soknad/selectors';
import Barn from './Barn';

interface IMapStateToProps {
    barn: IBarn[];
    valgtBarn: IBarn;
}

interface IMapDispatchToProps {
    velgBarn: (barn: IBarn) => void;
}

type MineBarnSideProps = IMapStateToProps & IMapDispatchToProps;

const MineBarn: React.StatelessComponent<MineBarnSideProps> = ({ barn, valgtBarn, velgBarn }) => {
    return (
        <SideContainer className={'mine-barn'}>
            <h1>Mine barn</h1>
            <ul className={'mine-barn__liste'}>
                {barn.map(b => (
                    <li key={b.navn}>
                        <Barn valgt={b.navn === valgtBarn.navn} barn={b} onClick={velgBarn} />
                    </li>
                ))}
            </ul>
            <NavigasjonKnapp to="/familieforhold">Neste</NavigasjonKnapp>
        </SideContainer>
    );
};

const mapStateToProps = (state: IRootState): IMapStateToProps => {
    return {
        barn: selectBarn(state),
        valgtBarn: selectValgtBarn(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
    return {
        velgBarn: barn => dispatch(soknadSettVerdi('mineBarn', 'valgtBarn', barn)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MineBarn);
