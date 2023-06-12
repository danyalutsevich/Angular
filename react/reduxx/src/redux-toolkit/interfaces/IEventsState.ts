import IEvent from "./IEvent";

interface IEventsState {
  Events: IEvent[];
  Categories: string[];
  CurrentCategory: string;
}

export default IEventsState;
