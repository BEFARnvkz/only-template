import Component, { ComponentProps } from '../../app/js/component';

export default class Box extends Component.Default {
    el1: HTMLElement;
    el2: HTMLElement;
    constructor(element: ComponentProps) {
        super(element);

       const [el1, el2] = this.getElements('container-el');
        this.el1 = el1;
        this.el2 = el2;


        const but = this.getElement('footer-button');
        but.addEventListener('click', ()=>this.onClickButton());
    }

    onClickButton = () => {

        this.el1.classList.toggle('box__container-el--green');
        this.el2.classList.toggle('box__container-el--none');
        console.log(this.el1, this.el2);
    }


    destroy = () => {
        // Destroy functions
    }
}