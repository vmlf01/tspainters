/**
 * Created by vmlf on 02-08-2015.
 */

import IPerson = require('../interfaces/IPerson');
import WorkOfArt = require('./WorkOfArt');

class Painter implements IPerson
{
    name: string;
    dateOfBirth: string;
    placeOfBirth: string;
    nationality: string;
    style: string;
    examples: WorkOfArt[];
    image: string;


    constructor(painter: IPerson) {
        this.name = painter.name;
        this.dateOfBirth = painter.dateOfBirth;
        this.placeOfBirth = painter.placeOfBirth;
        this.nationality = painter.nationality;
        this.examples = new Array<WorkOfArt>();
        this.image = painter.image;
    }
}

export = Painter;