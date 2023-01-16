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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.0819131789462677,
        "pitch": 0.20276445366205564,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06532545126452227,
          "pitch": 0.03779244574572971,
          "rotation": 0,
          "target": "2-corridor"
        },
        {
          "yaw": 2.8060814569332138,
          "pitch": 0.12011001635951501,
          "rotation": 0,
          "target": "1-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-outside",
      "name": "Outside",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7428210118797445,
          "pitch": -0.030503511343736633,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor",
      "name": "Corridor",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.4336917721042042,
        "pitch": 0.04445448183619405,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4768614425119964,
          "pitch": 0.009845069491746017,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 1.249393963767119,
          "pitch": 0.04507980227702468,
          "rotation": 0,
          "target": "3-r3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-r3",
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
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.060316680150528,
          "pitch": 0.21115623531034444,
          "rotation": 0,
          "target": "2-corridor"
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
