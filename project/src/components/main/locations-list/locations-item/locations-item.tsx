import { createRef } from 'react';
import { bindActionCreators, Dispatch} from'@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { changeCity } from '../../../../store/action';

interface ILocationsItemProps {
  locationID: number;
  locationName: string;
  isActive: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onCityChange: changeCity,
}, dispatch);

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ILocationsItemProps;

function LocationsItem(props: ConnectedComponentProps): JSX.Element {
  const { locationID, locationName, isActive, onCityChange} = props;
  const linkRef = createRef<HTMLAnchorElement>();

  return (
    <li className="locations__item">
      <a className={isActive ?
        'locations__item-link tabs__item tabs__item--active' :
        'locations__item-link tabs__item'} ref={linkRef}
      onClick={() => {
        const link = linkRef.current;
        if(link && link.dataset.locationId) {
          onCityChange(Number(link.dataset.locationId));
        }
      }}
      data-location-name={locationName}
      data-location-id={locationID}
      >
        <span>{locationName}</span>
      </a>
    </li>
  );
}

export default connector(LocationsItem);
