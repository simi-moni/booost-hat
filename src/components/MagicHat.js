import { Container, Text, Sprite } from 'pixi.js';
import gsap from 'gsap';
import { random } from '../core/utils';

export default class MagicHat extends Container {
    constructor() {
        super();

        this.name = 'magic-hat';

        this._item = this._addText();
        this._body = this._addBody();

        this._addMask();

    };

    static get emojis() {
        return {
            names: ['🤩', ' 👾', '🤔', '🐬', '🍉', '🌙']
        }
    };

    _addText() {
        const text = new Text('', {
            fontSize: 200,
            fontWeight: 'bold',
            fill: 0xffffff,
        });
        text.anchor.set(0.5);
        text.y = -200;
        this.addChild(text);
        return text;
    }

    _addMask() {
        const mask = new Sprite.from('hat-mask');
        mask.anchor.set(0.5);
        mask.y = -300;
        this._item.mask = mask;
        this.addChild(mask);
    }

    _addBody() {
        const hat = new Sprite.from('hat');

        hat.anchor.set(0.5, 0.1);
        hat.interactive = true;
        hat.buttonMode = true;
        this.addChild(hat);

        hat.on('click', () => this._showRandomEmoji());
        return hat;
    }

    _showRandomEmoji() {
        this._item.text = MagicHat.emojis.names[Math.floor(random(0, MagicHat.emojis.names.length))]
        gsap.fromTo(this._item, { y: 0 }, { y: -300, duration: 1, ease: 'bounce.out', })
    }
}