var APP_DATA = {
  "scenes": [
    {
      "id": "0-pcorredor",
      "name": "pCorredor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6853812300857065,
        "pitch": 0.2064848565884727,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": 1.205368962394088,
          "pitch": 0.40492252480338564,
          "rotation": 0,
          "target": "1-pentrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pentrada",
      "name": "pEntrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7331061456206012,
          "pitch": 0.13710611497666036,
          "rotation": 0,
          "target": "2-plavanderia"
        },
        {
          "yaw": 1.3265669164739116,
          "pitch": 0.4440545409975858,
          "rotation": 0,
          "target": "0-pcorredor"
        },
        {
          "yaw": -0.6747431497311798,
          "pitch": 0.45064183100825694,
          "rotation": 0,
          "target": "3-pcozinhaquarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-plavanderia",
      "name": "pLavanderia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.050247115708755,
          "pitch": 0.048835182648096165,
          "rotation": 0,
          "target": "1-pentrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pcozinhaquarto",
      "name": "pCozinhaQuarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1277001004510616,
          "pitch": 0.4054667274200643,
          "rotation": 0,
          "target": "1-pentrada"
        },
        {
          "yaw": -2.6540097668673717,
          "pitch": 0.45925253010256384,
          "rotation": 0,
          "target": "4-pentradaquarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pentradaquarto",
      "name": "pEntradaQuarto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0142528886633837,
          "pitch": 0.4042794185806855,
          "rotation": 0,
          "target": "3-pcozinhaquarto"
        },
        {
          "yaw": -0.7709044696490626,
          "pitch": 0.28050329946533736,
          "rotation": 0,
          "target": "5-pquartobanheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pquartobanheiro",
      "name": "pQuartoBanheiro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.3709687966639645,
        "pitch": 0.027775262216920282,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": 1.6564869948999412,
          "pitch": 0.6108576134968065,
          "rotation": 0,
          "target": "6-pbanheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pbanheiro",
      "name": "pBanheiro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8238490154527423,
          "pitch": 0.1782378821063304,
          "rotation": 0,
          "target": "5-pquartobanheiro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
