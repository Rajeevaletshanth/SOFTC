import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleOption from './particleOption.json'

const ReactParticles = () => {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
            "fullScreen": {
                "enable": true,
                "zIndex": 0
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": ["grab"]
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "resize": false
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 0.2
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100
                    },
                    "push": {
                        "particles_nb": 2
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "particles": {
                "links": {
                    "enable": true
                },
                "move": {
                    "enable": true
                },
                "size": {
                    "value": 0.5
                },
                "collisions": {
                    "enable": true,
                    "mode": "bounce"
                },
                "number": {
                    "density": {
                      "enable": false,
                      "area": 400,
                      "factor": 800
                    },
                    "limit": 60,
                    "value": 50
                },
                "detectRetina": true,
            },
            "retina_detect": true,
            "background": {
                // "color": "#111",
                "image": "",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            }
        }}
    />
  )
}

export default ReactParticles