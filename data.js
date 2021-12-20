var APP_DATA = {
  "scenes": [
    {
      "id": "0-welcome-lobby",
      "name": "Welcome Lobby",
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
        "yaw": 1.536283940851341,
        "pitch": 0.04938532889684133,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.4979000136264924,
          "pitch": 0.3405308890976926,
          "rotation": 0,
          "target": "1-stimulation-bay"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.846723799584944,
          "pitch": 0.2044095281788163,
          "title": "Breastfeeding Room",
          "text": "Text"
        },
        {
          "yaw": 2.1029973349794506,
          "pitch": 0.37781396606992956,
          "title": "Concierge Room",
          "text": "Text"
        },
        {
          "yaw": -2.4573593303591768,
          "pitch": -0.2139483996417475,
          "title": "Safety Management",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-stimulation-bay",
      "name": "Stimulation Bay",
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
        "yaw": -3.083121820438052,
        "pitch": -0.0980654930106688,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.4648152992724484,
          "pitch": 0.15650798245151165,
          "rotation": 0,
          "target": "0-welcome-lobby"
        },
        {
          "yaw": -0.8162122831349734,
          "pitch": 0.024978298729735116,
          "rotation": 0,
          "target": "2-family-bonding-bay"
        },
        {
          "yaw": 0.7266090165446126,
          "pitch": 0.05343381129974745,
          "rotation": 0,
          "target": "3-brain-development-bay"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3861127875281802,
          "pitch": -0.11384541928261704,
          "title": "Body Fitness",
          "text": "Text"
        },
        {
          "yaw": -0.21604115744345265,
          "pitch": -0.11672959494005752,
          "title": "Language Stimulation",
          "text": "Text"
        },
        {
          "yaw": 2.026326320951032,
          "pitch": 0.26210315064667,
          "title": "Social Interaction",
          "text": "Text"
        },
        {
          "yaw": -2.8186636462906343,
          "pitch": -0.1357220341400911,
          "title": "Music Stimulation",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-family-bonding-bay",
      "name": "Family Bonding Bay",
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
        "yaw": 3.139005665181994,
        "pitch": -0.0690509212823418,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 1.326540362646961,
          "pitch": 0.18023195734394903,
          "rotation": 0,
          "target": "1-stimulation-bay"
        },
        {
          "yaw": 0.032762509366950354,
          "pitch": 0.31005225442520334,
          "rotation": 0,
          "target": "3-brain-development-bay"
        },
        {
          "yaw": -1.8370458251097936,
          "pitch": 0.07299686027417529,
          "rotation": 0,
          "target": "6-education-bay"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7524545865370786,
          "pitch": -0.11352981854842348,
          "title": "Social-Emotional Development",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-brain-development-bay",
      "name": "Brain Development Bay",
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
        "yaw": -0.8297026751788632,
        "pitch": 0.0036759588973396262,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.012992173449587696,
          "pitch": 0.2718308219660486,
          "rotation": 0,
          "target": "2-family-bonding-bay"
        },
        {
          "yaw": -2.055293889968116,
          "pitch": 0.11695860507092348,
          "rotation": 0,
          "target": "1-stimulation-bay"
        },
        {
          "yaw": 2.2912679737663613,
          "pitch": 0.1714378314702536,
          "rotation": 6.283185307179586,
          "target": "4-washing--diapering"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.111033505908977,
          "pitch": -0.10892288173973341,
          "title": "Creative Brain Training",
          "text": "Text"
        },
        {
          "yaw": -1.259762751827754,
          "pitch": 0.013435270095179419,
          "title": "Cognitive Development",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-washing--diapering",
      "name": "Washing & Diapering",
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
        "yaw": 1.2942283637664662,
        "pitch": -0.04962544511436562,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.3831331952384947,
          "pitch": 0.4465646543598414,
          "rotation": 0,
          "target": "5-relaxation--nap-bay"
        },
        {
          "yaw": 2.899371249115978,
          "pitch": 0.26270988258713857,
          "rotation": 0,
          "target": "3-brain-development-bay"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7380513490603047,
          "pitch": -0.12606445015067358,
          "title": "Special Onsen Baby Bath",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-relaxation--nap-bay",
      "name": "Relaxation & Nap Bay",
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
        "yaw": 0.776694741357991,
        "pitch": 0.09942605930302051,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.15737315476411062,
          "pitch": 0.18987603884098903,
          "rotation": 0,
          "target": "4-washing--diapering"
        },
        {
          "yaw": 2.996026667640713,
          "pitch": 0.1803996689123597,
          "rotation": 0,
          "target": "6-education-bay"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-education-bay",
      "name": "Education Bay",
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
        "yaw": 2.7370500825497786,
        "pitch": -0.02995625255259249,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.1424483346308385,
          "pitch": -0.007748887053930176,
          "rotation": 0,
          "target": "2-family-bonding-bay"
        },
        {
          "yaw": -2.7970818405638003,
          "pitch": 0.21120797165884753,
          "rotation": 0,
          "target": "5-relaxation--nap-bay"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.515305330790797,
          "pitch": -0.48165692530924,
          "title": "Multi Ability Training",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "AKARUI @ Centre",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
