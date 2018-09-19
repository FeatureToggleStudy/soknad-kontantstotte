import PanelBase from 'nav-frontend-paneler';
import { TextareaControlled } from 'nav-frontend-skjema';
import * as React from 'react';
import { IFeil } from '../../common/lib/validation/types';
import { IFelt } from '../../soknad/types';

interface ITilleggsinformasjonInputProps {
    className?: string;
    defaultValue: IFelt;
    feil: IFeil | undefined;
    label: string;
    onBlur: (value: string) => void;
}

type TilleggsinformasjonInputProps = ITilleggsinformasjonInputProps;

const TilleggsinformasjonInput: React.StatelessComponent<TilleggsinformasjonInputProps> = ({
    className,
    defaultValue,
    feil,
    label,
    onBlur,
}) => {
    return (
        <PanelBase className={'tilleggsinformasjon'}>
            <TextareaControlled
                label={label}
                defaultValue={defaultValue.verdi}
                maxLength={500}
                onBlur={(evt: any) => {
                    onBlur(evt.target.value);
                }}
                feil={feil}
            />
        </PanelBase>
    );
};

export default TilleggsinformasjonInput;