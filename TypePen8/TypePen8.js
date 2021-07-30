/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TypePen8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Size2", "./TypePen8/costumes/Size2.svg", {
        x: 12.055534999999992,
        y: 12.022220000000004
      })
    ];

    this.sounds = [new Sound("pop", "./TypePen8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pen Changed" },
        this.whenIReceivePenChanged
      )
    ];

    this.vars.iconType6 = "homing";
  }

  *whenIReceiveStart() {
    this.goto(-224, -50);
    this.vars.iconType6 = "homing";
  }

  *whenthisspriteclicked() {
    this.stage.vars.penType = this.vars.iconType6;
    this.broadcast("Pen Changed");
  }

  *whenIReceivePenChanged() {
    if (this.stage.vars.penType == this.vars.iconType6) {
      this.effects.brightness = 0;
    } else {
      this.effects.brightness = 15;
    }
  }
}
