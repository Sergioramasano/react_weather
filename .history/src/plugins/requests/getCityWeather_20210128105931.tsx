import axios from "axios";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setCity, setCityWeather, setError } from "../../redux/actionCreators";

export const setWeatherCity = (props: any) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        props.cityName
      }&appid=${"89131358011ec8066582be44f133475a"}`
    )
    .then((res: any) => {
      props.setCityWeatherByName(res.data);
      const localData = JSON.stringify(res.data);
      localStorage.setItem("weather", localData);
    })
    .catch((error?: any) => {
      props.setError("Некорректное название города");
    });
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCityName: (payload: string) => dispatch(setCity(payload)),
    setCityWeatherByName: (payload: any) => setCityWeather(dispatch, payload),
    setError: (payload: string) => dispatch(setError(payload)),
  };
};

export default connect(mapDispatchToProps)(setWeatherCity);
