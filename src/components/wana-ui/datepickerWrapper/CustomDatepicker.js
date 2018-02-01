import DatePicker from "react-datepicker";

class CustomDatePicker extends DatePicker {
  constructor(props) {
    super(props);
  }

  deferFocusInput = () => {
    this.cancelFocusInput();
  }
}

export default CustomDatePicker;
