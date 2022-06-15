
import React from 'react'
import { Stage, Sprite } from '@inlet/react-pixi'
import { FWhite } from './components/FWhite/FWhite'

export function Pixi() {

  return (
  <Stage width={600} height={600} >
    <Sprite image="sprite/pic.png" x={0} y={0} />
    <Sprite image="sprite/fishkaOrange.png" x={300} y={300} anchor={0.5} />
    <Sprite image="sprite/fishkaBlack.png" x={200} y={300} anchor={0.5} />
    <FWhite impulse={10} vector={{start:{x:0,y:0},end:{x:100,y:100}}} offGame={false} />
  </Stage>
    )
  }
  // import * as PIXI from 'pixi.js'
// import React, { ReactElement, ReactNode, useEffect, useRef} from 'react'
// import * as Style from './Styled'

// const SCREEN_WIDTH = 600;
// const SCREEN_HEIGHT = 600




// export function Pixi() {

//   const ref = useRef<any>(null);

//   useEffect(() => {
//     const pixiApp = new PIXI.Application({
//       width: SCREEN_WIDTH,
//       height: SCREEN_HEIGHT,
//     });
//     ref.current.appendChild?.(pixiApp.view);

//     const container = new PIXI.Container()
//     pixiApp.stage.addChild( container )
//     const texture =  PIXI.Texture.from("CIRCLE.png")
//     const hand = new PIXI.Sprite(texture)
//     hand.anchor.set(0,5)
//     container.addChild(hand)

//     console.log(ref.current);

//     pixiApp.start();
  
//     return () => {
//       // On unload stop the application
//       pixiApp.destroy(true, true);
//     };
//   }, []);





//   return (
//     <Style.MainWindow ref={ref} width={SCREEN_WIDTH} height={SCREEN_HEIGHT}/>
//   )
// }



