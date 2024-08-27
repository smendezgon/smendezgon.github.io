import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
import cube from "./basic/figuras/Cubo.js";
import light from "./basic/Light.js";
import resize from "./basic/Resize.js";
import plane from "./basic/figuras/Plano.js";
import loopMachine from "./basic/LoopMachine.js";
import keyListener from "./basic/KeyListener.js";
import keyCode from "./basic/KeyCode.js"
import characterController from "./controllers/CharacterController.js";
import keyController from "./controllers/KeyController.js";
import moveController from "./controllers/MoveController.js";

scene.add( cube );
scene.add( light );
scene.add( plane );
camera.position.set(2,2,-2);


characterController.addCharacter(cube);
characterController.addController(keyController);
characterController.addController(moveController);

loopMachine.addCallback(() => {
    camera.lookAt(cube.position);
    if(keyListener.isPressed(keyCode.ENTER)) cube.rotation.y += 0.01; 
    renderer.render(scene, camera);
});

resize.start(renderer);
loopMachine.start();
keyListener.start();
characterController.start();