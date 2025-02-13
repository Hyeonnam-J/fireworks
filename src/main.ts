import './style.scss'

import scene from './module/core/scene'
import ambientLight from './module/core/ambientLight'
import particlePoolManager from './module/core/particle/particlePoolManager'
import eventManager from './module/feature/eventManager'

import registerAnimationHandler from './handler/animationHandler'
import registerPlayHandler from './handler/playHandler'
import uiManager from './module/feature/uiManager'

main()

async function main() {
    particlePoolManager.init()
    eventManager.init()
    
    uiManager.init()
    scene.add(ambientLight)     
    
    uiManager.registerUiListeners()
    
    registerAnimationHandler()  
    registerPlayHandler()
}