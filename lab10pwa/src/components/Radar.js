

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Radar.css';


export default class Radar extends React.Component {

    componentDidMount() {
        if ('geolocation' in navigator) {   // Lo primero que deben hacer es validar si el dispositivo soporta geolocacion
            console.log('has geolocation')


            const success = position => {   // Esta funcion va a ser un callback que va a recibir la posición del dispositivo
                console.log('success', position)

                /* 
                    Position acá es un objeto con las siguientes propiedades:
    
                    latitude : la latitud
                    longitude : la longitud
                    altitude : la altitud en metros sobre el nivel del mar
                    accuracy : el radio, en metros que indica la incertidumbre de la medida de la posición
                    altitudeAccuracy : el radio, en metros que indica la incertidumbre de la medida de la altitud
                    heading : indica la direccion en la que este dispositivo se esta moviendo (con relacion al norte absoluto)
                    speed : la velocidad a la que se mueve en metros sobre segundo
                */
            }

            const error = err => {
                console.log('error', err)

                /*
                    El error tiene dos valores, un código de error y un texto
    
                    el codigo puede ser
                    - 0 si es un error generico
                    - 1 si el usuario respondio que "no" al prompt de "This webpage wants to know your location"
                    - 2 si no se pudo determinar la ubicacion, por ejemplo, si no tiene acceso a los satelites de GPS ni a wifi
                    - 3 si no se pudo acceder al sensor en el tiempo limite
                */
            }

            // Este metodo nos da la ubicación una unica vez
            const loc = navigator.geolocation.getCurrentPosition(
                success, // esta funcion se va a llamar si fue exitosa la medida
                error,  // esta se va a llamar si no
                { // estos parametros son para configurar la medida
                    maximumAge: 1000000,  // esto controla la cache de las mediciones, no necesitan cambiarlo
                    timeout: 1000, // si la medida toma un tiempo mayor a este parametro, se va a generar el error 3
                    enableHighAccurancy: true // highAccurancy gasta mas bateria y toma mas tiempo, pero tiene mejor accurancy
                }
            )


            // Este metodo nos da la ubicacion cada vez que el usuario se mueva
            const watcher = navigator.geolocation.watchPosition(
                success,  // success se va a llamar dos veces por cada cambio de ubicacion
                error,
                {
                    maximumAge: 0,
                    enableHighAccurancy: true
                }
            )

            // Para debuggear, usen sus developer tools > el menu de los tres puntos > More tools > Sensors > geolocation
            // Pueden cambiar su ubicacion mientras desarrollan

        } else {
            console.log('doesnt have geolocation')
        }
    }

    render() {

        return (
            <div>
                <div className="titulo">
                    TITULO
      </div>
            </div>
        )
    }
}