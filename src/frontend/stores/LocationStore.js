import { observable, action } from 'mobx';

class LocationStore {
  @observable coordinates = {};

  constructor(rootStore, client) {
    this.store = rootStore;
    this.client = client;
  }

  @action.bound onSucces(pos) {
    this.coordinates = pos.coords;
  }

  @action.bound onError(error) {
    console.log(error);
  }

  @action getCoordinates() {
    navigator.geolocation.getCurrentPosition(this.onSucces, this.onError)
  }

}

export default LocationStore;