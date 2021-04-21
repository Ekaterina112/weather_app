import React from "react";
import {MainLayout} from "../../components/MainLayout";
import {API_key} from "../weather";
import styled from 'styled-components'
import img from './../../public/assets/img_wd.jpg';

export default function DetailWeather({initialWeather}) {
    //const router = useRouter()
    return <MainLayout>
        <StyledDetailWeather>
            <StyledImageBlock>
                {/*here image*/}
            </StyledImageBlock>
            <StyledWeatherBlock>
                <h3>Your weather forecast for today</h3>
                <table>
                    <tbody>
                    <tr>
                        <td> Temperature</td>
                        <td>{initialWeather.main.temp}&deg;</td>
                    </tr>
                    <tr>
                        <td>Feels Like</td>
                        <td>{initialWeather.main.feels_like}&deg;</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{initialWeather.main.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Atmospheric pressure</td>
                        <td>{initialWeather.main.pressure} hPa</td>
                    </tr>
                    <tr>
                        <td>Cloudiness</td>
                        <td>{initialWeather.clouds.all}%</td>
                    </tr>
                    <tr>
                        <td>Wind speed</td>
                        <td>{initialWeather.wind.speed} meter/sec</td>
                    </tr>
                    </tbody>
                </table>
            </StyledWeatherBlock>
        </StyledDetailWeather>
    </MainLayout>
}
DetailWeather.getInitialProps = async (ctx) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${ctx.query.id}&units=metric&appid=${API_key}`)
    const initialWeather = await response.json()

    return {
        initialWeather
    }
}


const StyledDetailWeather = styled.div`
  display: flex;
  align-items: center;
  background: #ececec;
  @media only screen and (max-width: 767.98px) {
    flex-direction: column;
  }`


const StyledImageBlock = styled.div`
  width: 50%;
  min-height: 70vh;
  background-image: url(${img});;
  background-position: center center;
  background-size: cover; /*//для сохранеия пропорций*/
  @media only screen and (max-width: 767.98px) {
    min-height: 30vh;
    width: 100%;
  }`


const StyledWeatherBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & td {
    border-bottom: 1px solid white;
    padding: 10px;
  }

`