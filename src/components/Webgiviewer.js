
import { useRef, useState ,useCallback, ForwardRef, useImperativeHandle, useEffect } from "react";


import {

  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  AnisotropyPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  ITexture,
  TweakpaneUiPlugin,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  IViewerPlugin,
  ViewerApp,
  mobileAndTabletcheck} from "webgi";

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


function Webgiviewer() {
  const canvasRef = useRef(null);
  const  setupViewer = useCallback(async () => {

    // Initialize the viewer
    const viewer = new ViewerApp({
        canvas: canvasRef.current,
    })

    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin)

    // Add a popup(in HTML) with download progress when any asset is downloading.
    

    // Add plugins individually.
    // await viewer.addPlugin(GBufferPlugin)
    // await viewer.addPlugin(new ProgressivePlugin(32))
    // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
    // await viewer.addPlugin(GammaCorrectionPlugin)
    // await viewer.addPlugin(SSRPlugin)
    // await viewer.addPlugin(SSAOPlugin)
    // await viewer.addPlugin(DiamondPlugin)
    // await viewer.addPlugin(FrameFadePlugin)
    // await viewer.addPlugin(GLTFAnimationPlugin)
    // await viewer.addPlugin(GroundPlugin)
    // await viewer.addPlugin(BloomPlugin)
    // await viewer.addPlugin(TemporalAAPlugin)
    // await viewer.addPlugin(AnisotropyPlugin)

    // or use this to add all main ones at once.
    await addBasePlugins(viewer)

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin(CanvasSnipperPlugin)

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline()

    await manager.addFromPath("../public/scene-black.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

}

  ,[] );

  useEffect(() => {
    setupViewer();
  },[]) ;
  

  return (
    <div>
      <canvas id="webgi-canvas-container" ref={canvasRef} />
    </div>
  );
}

export default Webgiviewer;
