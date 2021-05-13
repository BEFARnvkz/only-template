import Component, { ComponentProps } from '../../app/js/component';

export default class Box extends Component.Default {
    constructor(element: ComponentProps) {
        super(element);
        console.log(1);
    }

    destroy = () => {
        // Destroy functions
    }
}