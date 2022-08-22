import { Input } from '@angular/core';
import { LolComponent } from './../app/lol/lol.component';

export default {

    title: 'Lol',
    Component: LolComponent 
};
export const Default = () => ({
    Component: LolComponent 

});
export const InputValue = () => ({
    Component: LolComponent,
    props: {
        value:'Valor do component'
    }

});