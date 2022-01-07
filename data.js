var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living room",
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
        "yaw": 0.5908441242261304,
        "pitch": 0.28741583317505004,
        "fov": 1.3378744097411812
      },
      "linkHotspots": [
        {
          "yaw": 0.4176229766618125,
          "pitch": 0.21785997870520823,
          "rotation": 0,
          "target": "1-r3"
        },
        {
          "yaw": 2.7278696195592307,
          "pitch": 0.15635892987654998,
          "rotation": 0,
          "target": "2-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-r3",
      "name": "R3",
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
          "yaw": -3.1211959525290247,
          "pitch": 0.14459051857003935,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama",
      "name": "Panorama",
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
          "yaw": -2.7448485395080375,
          "pitch": -0.0032065152109872486,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Home",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
