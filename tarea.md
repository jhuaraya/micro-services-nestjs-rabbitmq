## 1.- Necesito un proyect (Microservicio - nestjs) con coneccion HTTP (@nestjs/axios) a los servicios de:

https://bo-qa.apps.intvnt.com/bo/devoluciones/consultaDeuda
por heacer userkey: user-key: ed8f8e77bb471b0651adbe00c2839c12
request:

```
{
    "audit": {
            "appId": "DEVO001V1",
            "usuario": "pflores@niubiz.com.pe",
            "ipServidor": "127.0.0.1",
            "transaccionId": "1234",
            "origen": "OMNICHANNEL"
        },
        "consultaDeudaRequest": {
            "comercio": {
                "ruc": "10000031556"
            }
    }
}
```

3.- En el miskmo proyecto necesito una conecc9ion HTTP @nestjs/axios a los servicios del bus.

https://bo-qa.apps.intvnt.com/devoluciones/consultarMovxFecha

se necesita consultar primero token:

https://access.intvnt.com/auth/realms/azure/protocol/openid-connect/token

```
client_id=data-wave
client_secret=47b51fee-9320-435b-beaf-75598a29c921
grant_type=client_credentials
```

Luego enviarlo por header hacia la api.: https://bo-qa.apps.intvnt.com/devoluciones/consultarMovxFecha

user-key: ed8f8e77bb471b0651adbe00c2839c12
token: { token del servicio https://access.intvnt.com/auth/realms/azure/protocol/openid-connect/token }

requesT:

```
{
    "pCodComercio": "552630801",
    "pFecTrxIni": "2022-01-12",
    "pFecTrxFin": "2022-01-12",
    "pOrigen": "OMNICHANNEL",
    "pModulo": "NEL-DEVOL",
    "pUsuario": "admin_canvia@yopmail.com"
}
```

4.- Generar una devolucion: https://bo-qa.apps.intvnt.com/bo/devolucion/devolucioncupon
por heacer userkey: user-key: ed8f8e77bb471b0651adbe00c2839c12

request:

```
{
"audit": {
    "appId": "DEVO002V1",
    "usuario": "OMNICHANNEL",
    "ipServidor": "127.0.0.1",
    "transaccionId": "159220260624408",
    "origen": "OMNICHANNEL"
    },
    "registroDevolucionRequest": {
    "comercio": {
        "id": "900377405",
        "ruc":"10000377401",
        "segmento": "C"
    },
    "transaccion": {
        "id": "959221300692565",
        "fechaTransaccion": "2022-05-10",
        "moneda": "PEN",
        "monto": 260,
        "tarjeta": {
            "marca": "MC",
            "nroTarjeta": "547880**\*\***6236"
        }
    },
    "devolucion": {
        "moneda": "PEN",
        "monto": 260,
        "usuarioRegistro": "admdevosol01@yopmail.com"
    },
    "isMassiveRefund": true
}
}
```

6.- Integracion con newwrelic para marcaciones exitoso y con error.

nota: Si quieren colocar las validaciones de seguridad con decoradores y guards es opcional.
