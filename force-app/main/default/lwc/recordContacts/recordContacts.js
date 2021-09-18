import { LightningElement } from 'lwc';

const columns = [
    { label: 'Nombre', fieldName: 'nombre' },
    { label: 'Altura', fieldName: 'altura', type: 'cuantitativa' },
    { label: 'Genero', fieldName: 'genero', type: 'genero' },
    { label: 'Color de cabello', fieldName: 'colorCabello', type: 'color' },
    { label: 'Color de ojos', fieldName: 'colorOjos', type: 'date' },
    { label: 'URL', fieldName: 'url', type: 'url' },
    { label: 'Planeta', fieldName: 'planeta', type: 'lugar' },
    { label: 'Numero de personaje', fieldName: 'codigo', type: 'codigo' },
];

export default class RecordContacts extends LightningElement {

    columns = columns;

    changeHandler(event) {
        this.codigo = event.target.value;
    }

    async connectedCallback() {
        const data = await fetchDataHelper({ amountOfRecords: 100 });
        this.data = data;
    }
}   

