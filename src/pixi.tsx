import * as PIXI from 'pixi.js';
import { useEffect, useRef } from 'react';

const app = new PIXI.Application({
  width: 700,
  height: 700,
  backgroundColor: 0xffcccc,
});

const sprite1 = new PIXI.Sprite(PIXI.Texture.from('bc-sq-200.png'));
sprite1.x = 500;
app.stage.addChild(sprite1);

const sprite2 = new PIXI.Sprite(PIXI.Texture.from('wt-sq-200.png'));
app.stage.addChild(sprite2);

const renderer = PIXI.autoDetectRenderer();
const renderTexture = PIXI.RenderTexture.create({ width: 700, height: 700 });
renderer.render(sprite2, { renderTexture });

const mainSprite = PIXI.Sprite.from(renderTexture);
app.stage.addChild(mainSprite);

export const PixiContainer = () => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (appRef.current) {
      appRef.current.appendChild(app.view);
    }
  }, []);
  return <div ref={appRef}></div>;
};
