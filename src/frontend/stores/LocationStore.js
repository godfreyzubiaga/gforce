import { observable, action } from 'mobx';

class LocationStore {
  @observable coordinates = {};
  // coordinates = {};

  constructor(rootStore, client) {
    this.store = rootStore;
    this.client = client;
    this.getCoordinates();
  }

  @action.bound onSuccess(pos) {
    this.coordinates = pos.coords;
    // console.log(this.coordinates, ' da coords')
  }

  @action.bound onError(error) {
    console.log(error);
  }

  @action getCoordinates() {
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError)
  }

}

export default LocationStore;